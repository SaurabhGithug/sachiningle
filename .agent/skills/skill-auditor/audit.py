import ui_auditor
import anim_auditor
import json
import sys

def main():
    print("\n" + "="*50)
    print("🚀 STARTING SKILL AUDITOR for Sachin Ingle")
    print("="*50 + "\n")

    print(f"Running UI Design Audit...")
    try:
        ui_results = ui_auditor.audit_ui_design()
        print(f"✅ UI Audit Complete. Average Score: {ui_results['average_score']}/10")
    except Exception as e:
        print(f"❌ UI Audit Failed: {e}")
        ui_results = {}

    print(f"\nRunning Animation Audit...")
    try:
        anim_results = anim_auditor.run_audit()
        print(f"✅ Animation Audit Complete. Status: {anim_results['status']}")
    except Exception as e:
        print(f"❌ Animation Audit Failed: {e}")
        anim_results = {}

    print("\n" + "="*50)
    print("📊 FINAL REPORT SUMMARY")
    print("="*50)

    if ui_results:
        print(f"\n🎨 UI DESIGN SCORE: {ui_results['average_score']}/10")
        print(f"   - Premium Components: {ui_results['grade_distribution']['PREMIUM']}")
        print(f"   - Needs Polish: {ui_results['grade_distribution']['NEEDS POLISH']}")
        print(f"   - Global CSS Check: {ui_results['global_css_audit']}")
        
        print("\n   Top 3 Low Scoring Components:")
        for comp in ui_results['components'][:3]:
             print(f"   - {comp['file']}: {comp['replit_score']}/10 ({comp['grade']})")
             if comp['missing']:
                 print(f"     Missing: {', '.join(comp['missing'])}")

    if anim_results:
        print(f"\n🎬 ANIMATION STATUS: {anim_results['status']}")
        print(f"   - Issues Found: {anim_results['issues_found']}")
        if anim_results['issues']:
            print("   Top Animation Issues:")
            for issue in anim_results['issues'][:3]:
                print(f"   - {issue['file']} (L{issue['line']}): {issue['detail']}")

    print("\n" + "="*50)

if __name__ == "__main__":
    main()
