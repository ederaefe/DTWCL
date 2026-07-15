import os

files_to_check = [
    r"c:\Users\USER\Downloads\dtw-consult-landing-page\index.html",
    r"c:\Users\USER\Downloads\dtw-consult-landing-page\about.html",
    r"c:\Users\USER\Downloads\dtw-consult-landing-page\services.html",
    r"c:\Users\USER\Downloads\dtw-consult-landing-page\contact.html"
]

def main():
    for filepath in files_to_check:
        if not os.path.exists(filepath):
            continue
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Update desktop nav
        desktop_target = '<a href="services.html" class="nav-link">Services</a>'
        desktop_target_active = '<a href="services.html" class="nav-link active">Services</a>'
        desktop_insert = '\n        <a href="updates.html" class="nav-link">Updates</a>'
        
        if '<a href="updates.html" class="nav-link">Updates</a>' not in content:
            content = content.replace(desktop_target, desktop_target + desktop_insert)
            content = content.replace(desktop_target_active, desktop_target_active + desktop_insert)

        # Update mobile nav
        mobile_target = '<a href="services.html">Services</a>'
        mobile_target_active = '<a href="services.html" class="active">Services</a>'
        mobile_insert = '\n    <a href="updates.html">Updates</a>'
        
        if '\n    <a href="updates.html">Updates</a>' not in content:
            content = content.replace(mobile_target, mobile_target + mobile_insert)
            content = content.replace(mobile_target_active, mobile_target_active + mobile_insert)

        # Update footer nav
        footer_target = '<a href="services.html">Services Hub</a>'
        footer_insert = '\n          <a href="updates.html">Updates</a>'
        
        if '\n          <a href="updates.html">Updates</a>' not in content:
            content = content.replace(footer_target, footer_target + footer_insert)

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

if __name__ == '__main__':
    main()
