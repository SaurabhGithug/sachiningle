import os
import re
import json

# Utility components that are NOT visual sections — scored separately
UTILITY_COMPONENTS = {"SmoothScroll.tsx", "CustomCursor.tsx", "ScrollProgress.tsx"}

def audit_ui_design():
    """Audit components against Replit-style modern UI design standards."""
    # Updated to be relative to this script's location or execution context
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../.."))
    src_dir = os.path.join(base_dir, 'components') # Adjusted for sachiningle structure (components at root or src/components)
    if not os.path.exists(src_dir):
         src_dir = os.path.join(base_dir, 'src/components')
    
    css_file = os.path.join(base_dir, 'app/globals.css')
    if not os.path.exists(css_file):
        css_file = os.path.join(base_dir, 'src/app/globals.css')
    
    # Read CSS for global analysis
    css_content = ""
    if os.path.exists(css_file):
        with open(css_file, 'r', encoding='utf-8') as f:
            css_content = f.read()
    
    print(f"Auditing components in: {src_dir}")
    print(f"Checking CSS in: {css_file}")

    # Design token compliance checks — patterns match BOTH className strings AND inline styles
    design_standards = {
        "dark_mode": {
            "patterns": [
                r'bg-\[#0[0-5]', r'bg-black', r'bg-\[rgba\(0',
                r'#050505|#0A0A0B|#111113|#1C1C1E',
                r'background.*rgba\(\d+,\s*\d+,\s*\d+',  # inline style background
                r'bg-vogue-black', # Added for sachiningle
            ],
            "weight": 10,
            "description": "Dark mode background implementation"
        },
        "glassmorphism": {
            "patterns": [
                r'backdrop-filter|backdrop-blur|glass-card|glass-panel|glass',
                r'backdropFilter',  # inline style prop
            ],
            "weight": 15,
            "description": "Glass morphism effects (blur + translucency)"
        },
        "micro_interactions": {
            "patterns": [
                r'transition-all|transition-colors|transition-transform|transition-opacity',
                r'transition:\s*\{',  # framer-motion transition prop
                r'transition=\{',     # JSX transition prop
            ],
            "weight": 10,
            "description": "CSS transitions or framer-motion transitions"
        },
        "hover_states": {
            "patterns": [
                r'hover:|group-hover:|whileHover',
                r'isHovering|onMouseEnter|onMouseLeave',  # JS-driven hover
            ],
            "weight": 10,
            "description": "Interactive hover effects"
        },
        "spacing_system": {
            "patterns": [
                r'p-[4-8]|px-[468]|py-[468]|gap-[468]|space-y-[468]|mb-[468]|mt-[468]',
                r'padding|margin',  # inline spacing
            ],
            "weight": 8,
            "description": "Consistent spacing"
        },
        "border_radius": {
            "patterns": [
                r'rounded|border-radius',
                r'borderRadius',  # inline style
            ],
            "weight": 5,
            "description": "Rounded corners"
        },
        "elevation_shadows": {
            "patterns": [
                r'shadow|drop-shadow',
                r'boxShadow|box-shadow',  # inline style
            ],
            "weight": 8,
            "description": "Shadow-based depth hierarchy"
        },
        "smooth_animations": {
            "patterns": [
                r'motion\.|framer-motion|AnimatePresence|whileInView|FadeIn',
                r'animate=|animate\(\{|animate\s*=\s*\{',
                r'requestAnimationFrame',  # raw animation loops
                r'@keyframes',
            ],
            "weight": 15,
            "description": "Framer Motion or CSS animations"
        },
        "loading_states": {
            "patterns": [
                r'skeleton|shimmer|loading|placeholder',
                r'onLoad|imageLoaded|isLoaded',  # JS-driven loading state
                r'animate-pulse',
                r'priority', # Next.js image priority
            ],
            "weight": 8,
            "description": "Loading skeletons or progressive loading"
        },
        "semantic_colors": {
            "patterns": [
                r'success|error|warning|info',
                r'green-|red-|yellow-|blue-',
                r'#34C759|#FF3B30|#FF9500|#007AFF',  # Apple semantic colors
            ],
            "weight": 5,
            "description": "Semantic color coding"
        },
        "typography_hierarchy": {
            "patterns": [
                r'text-\d+xl|text-\[\d{2,}px\]|font-light|font-medium|font-bold',
                r'tracking-\[|letterSpacing|fontFamily|font-cinzel|font-serif',
            ],
            "weight": 8,
            "description": "Clear typography hierarchy"
        },
        "gradient_effects": {
            "patterns": [
                r'bg-gradient|from-|via-|to-',
                r'linear-gradient|radial-gradient',  # inline gradients
            ],
            "weight": 8,
            "description": "Gradient backgrounds and effects"
        },
    }
    
    # Anti-patterns (things to avoid)
    anti_patterns = {
        "spinner_usage": {
            "pattern": re.compile(r'spinner|spin\s|loading.*circle|CircularProgress'),
            "penalty": 5,
            "fix": "Replace spinners with skeleton loading screens"
        },
        "sharp_corners": {
            "pattern": re.compile(r'rounded-none|border-radius:\s*0'),
            "penalty": 3,
            "fix": "Use rounded-lg (12px) or rounded-md (8px) for all containers"
        },
        "hardcoded_spacing": {
            "pattern": re.compile(r'margin:\s*\d+px|padding:\s*\d+px'),
            "penalty": 2,
            "fix": "Use Tailwind spacing tokens (multiples of 8px)"
        },
    }
    
    section_reports = []
    utility_reports = []
    
    for root, dirs, files in os.walk(src_dir):
        for file in files:
            if not file.endswith('.tsx'):
                continue
            
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            is_utility = file in UTILITY_COMPONENTS
            
            total_score = 0
            max_score = 0
            criteria = {}
            
            for standard_name, standard_data in design_standards.items():
                found = False
                for pattern in standard_data["patterns"]:
                    if re.search(pattern, content):
                        found = True
                        break
                
                score = standard_data["weight"] if found else 0
                max_score += standard_data["weight"]
                total_score += score
                criteria[standard_name] = {
                    "present": found,
                    "score": score,
                    "max": standard_data["weight"],
                }
            
            # Check anti-patterns (only for sections, not utilities)
            penalties = []
            if not is_utility:
                for anti_name, anti_data in anti_patterns.items():
                    matches = anti_data["pattern"].findall(content)
                    if matches:
                        penalty = min(len(matches), 3) * anti_data["penalty"]
                        total_score = max(0, total_score - penalty)
                        penalties.append({
                            "type": anti_name,
                            "occurrences": len(matches),
                            "penalty": penalty,
                            "fix": anti_data["fix"]
                        })
            
            # Normalize to 10
            normalized = round((total_score / max_score) * 10, 1) if max_score > 0 else 0
            
            # Grade
            if normalized >= 8: grade = "PREMIUM"
            elif normalized >= 6: grade = "GOOD"
            elif normalized >= 4: grade = "NEEDS POLISH"
            else: grade = "OUTDATED"
            
            # Generate specific CSS fixes
            css_fixes = []
            if not criteria.get("glassmorphism", {}).get("present"):
                css_fixes.append({
                    "issue": "No glassmorphism detected",
                    "fix": "Add backdrop-filter: blur(16px) and semi-transparent background to card elements"
                })
            if not criteria.get("micro_interactions", {}).get("present"):
                css_fixes.append({
                    "issue": "No micro-interactions",
                    "fix": "Add transition-all duration-200 ease-in-out to all interactive elements"
                })
            if not criteria.get("loading_states", {}).get("present"):
                css_fixes.append({
                    "issue": "No loading states",
                    "fix": "Add skeleton shimmer animation for image/content loading"
                })
            if not criteria.get("elevation_shadows", {}).get("present"):
                css_fixes.append({
                    "issue": "No depth/elevation",
                    "fix": "Add layered shadows: hover state should increase shadow spread"
                })
            
            report = {
                "file": file,
                "type": "utility" if is_utility else "section",
                "replit_score": normalized,
                "grade": grade,
                "criteria": criteria,
                "penalties": penalties,
                "css_fixes": css_fixes,
                "missing": [k for k, v in criteria.items() if not v["present"]]
            }
            
            if is_utility:
                utility_reports.append(report)
            else:
                section_reports.append(report)
    
    # Sort worst first
    section_reports.sort(key=lambda x: x["replit_score"])
    utility_reports.sort(key=lambda x: x["replit_score"])
    
    all_reports = section_reports + utility_reports
    
    # Global CSS audit
    css_audit = {
        "has_custom_properties": bool(re.search(r'--\w+', css_content)),
        "has_dark_theme": bool(re.search(r'dark|#0[0-5]|rgb\(0', css_content)),
        "has_animation_keyframes": bool(re.search(r'@keyframes', css_content)),
        "has_backdrop_filter": bool(re.search(r'backdrop-filter', css_content)),
        "has_skeleton_animation": bool(re.search(r'skeleton|shimmer', css_content)),
        "has_8px_grid": bool(re.search(r'8px|16px|24px|32px', css_content)),
    }
    
    section_avg = round(sum(r["replit_score"] for r in section_reports) / len(section_reports), 1) if section_reports else 0
    utility_avg = round(sum(r["replit_score"] for r in utility_reports) / len(utility_reports), 1) if utility_reports else 0
    overall_avg = round(sum(r["replit_score"] for r in all_reports) / len(all_reports), 1) if all_reports else 0
    
    section_distribution = {
        "PREMIUM": len([r for r in section_reports if r["grade"] == "PREMIUM"]),
        "GOOD": len([r for r in section_reports if r["grade"] == "GOOD"]),
        "NEEDS POLISH": len([r for r in section_reports if r["grade"] == "NEEDS POLISH"]),
        "OUTDATED": len([r for r in section_reports if r["grade"] == "OUTDATED"]),
    }
    
    return {
        "design_system": "Replit-Inspired Modern UI",
        "total_components": len(all_reports),
        "total_sections": len(section_reports),
        "total_utilities": len(utility_reports),
        "section_average_score": section_avg,
        "utility_average_score": utility_avg,
        "average_score": overall_avg,
        "grade_distribution": section_distribution,
        "global_css_audit": css_audit,
        "components": all_reports
    }

if __name__ == "__main__":
    result = audit_ui_design()
    print(json.dumps(result, indent=2))
