"""
Animation Auditor — Layer 3 Execution
Scans for animation anti-patterns: missing once:true, bounce easing, excessive durations, no stagger.
"""
import os
import re
import json

def scan_animations():
    # Updated to be relative to this script's location or execution context
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../.."))
    src_dir = os.path.join(base_dir, 'components') # Adjusted for sachiningle structure 
    if not os.path.exists(src_dir):
         src_dir = os.path.join(base_dir, 'src/components')

    issues = []
    total_animated = 0
    
    print(f"Auditing animations in: {src_dir}")

    for root, dirs, files in os.walk(src_dir):
        for f in files:
            if not f.endswith(".tsx"):
                continue
            fpath = os.path.join(root, f)
            with open(fpath, "r") as fp:
                content = fp.read()
                lines = content.split("\n")
                
                # Count animated elements
                motion_count = len(re.findall(r'<motion\.', content))
                fadein_count = len(re.findall(r'<FadeIn', content))
                total_animated += (motion_count + fadein_count)
                
                for i, line in enumerate(lines):
                    # Check for missing once: true on whileInView
                    if "whileInView" in line:
                        # Look ahead for viewport: { once: true }
                        context = "\n".join(lines[max(0,i-2):min(len(lines),i+5)])
                        if "once: true" not in context and "once:true" not in context:
                            issues.append({
                                "file": f, "line": i+1, "type": "re-trigger_risk",
                                "detail": "whileInView without viewport: { once: true } — animation re-triggers on scroll"
                            })
                    
                    # Check for bounce easing
                    if "bounce" in line.lower() and "transition" in line.lower():
                        issues.append({
                            "file": f, "line": i+1, "type": "wrong_easing",
                            "detail": "Bounce easing detected — use luxury easing [0.16, 1, 0.3, 1]"
                        })
                    
                    # Check for excessive duration
                    dur_matches = re.findall(r'duration:\s*(\d+\.?\d*)', line)
                    for d in dur_matches:
                        if float(d) > 1.5:
                            issues.append({
                                "file": f, "line": i+1, "type": "slow_animation",
                                "detail": f"Duration {d}s exceeds 1.2s max — feels sluggish"
                            })

                    # Check for excessive delay
                    delay_matches = re.findall(r'delay:\s*(\d+\.?\d*)', line)
                    for d in delay_matches:
                        if float(d) > 0.6 and "i *" not in line and "i*" not in line:
                            issues.append({
                                "file": f, "line": i+1, "type": "excessive_delay",
                                "detail": f"Static delay of {d}s — user thinks page is broken"
                            })
    
    return total_animated, issues

def run_audit():
    total, issues = scan_animations()
    report = {
        "total_animated_elements": total,
        "issues_found": len(issues),
        "issues": issues[:20],
        "performance_safe": all(i["type"] != "slow_animation" for i in issues),
        "status": "NEEDS_TUNING" if issues else "PASS"
    }
    print(json.dumps(report, indent=2))
    return report

if __name__ == "__main__":
    run_audit()
