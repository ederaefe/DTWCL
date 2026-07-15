import os
import re

files_to_check = [
    r"c:\Users\USER\Downloads\dtw-consult-landing-page\index.html",
    r"c:\Users\USER\Downloads\dtw-consult-landing-page\about.html",
    r"c:\Users\USER\Downloads\dtw-consult-landing-page\services.html",
    r"c:\Users\USER\Downloads\dtw-consult-landing-page\contact.html",
    r"c:\Users\USER\Downloads\dtw-consult-landing-page\llms.txt"
]

address_replacements = [
    ("The Black Building, 111/113 Ago Palace Way (before Market Square), Okota, Lagos State, Nigeria", "113 Ago Palace Way (beside Market Square), Okota, Lagos State, Nigeria"),
    ("The Black Building, 111/113 Ago Palace Way (before Market Square), Okota", "113 Ago Palace Way (beside Market Square), Okota"),
    ("The Black Building, 111/113 Ago Palace Way, Okota, Lagos State, Nigeria", "113 Ago Palace Way (beside Market Square), Okota, Lagos State, Nigeria"),
    ("The Black Building,\\s*111/113 Ago Palace Way \\(before Market Square\\),\\s*Okota, Lagos State, Nigeria", "113 Ago Palace Way (beside Market Square),\nOkota, Lagos State, Nigeria"),
    ("The Black Building,<br>\\s*111/113 Ago Palace Way \\(before Market Square\\),<br>\\s*Okota, Lagos State, Nigeria", "113 Ago Palace Way (beside Market Square),<br>\nOkota, Lagos State, Nigeria"),
    ("The Black Building, 111/113 Ago Palace Way \\(before Market Square\\)", "113 Ago Palace Way (beside Market Square)"),
    ("The Black Building,\\s*111/113 Ago Palace Way \\(before Market Square\\)", "113 Ago Palace Way (beside Market Square)"),
]

phone_replacements = [
    ("+234 908 509 9582", "+234 803 873 2879"),
    ("+234-908-509-9582", "+234-803-873-2879"),
    ("2349085099582", "2348038732879"),
    ("e.g. +234 908 509 9582", "e.g. +234 803 873 2879"),
    ("e.g. +234 803 873 2879", "e.g. +234 803 873 2879"),
]

def main():
    for filepath in files_to_check:
        if not os.path.exists(filepath):
            continue
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Addresses
        content = content.replace("The Black Building,<br>\n                    111/113 Ago Palace Way (before Market Square),<br>\n                    Okota, Lagos State, Nigeria", "113 Ago Palace Way (beside Market Square),<br>\n                    Okota, Lagos State, Nigeria")
        content = content.replace("The Black Building, 111/113 Ago Palace Way (before Market Square)", "113 Ago Palace Way (beside Market Square)")
        content = content.replace("The Black Building, 111/113 Ago Palace Way, Okota", "113 Ago Palace Way (beside Market Square), Okota")
        
        # Phone
        for old_phone, new_phone in phone_replacements:
            content = content.replace(old_phone, new_phone)

        # Remove Facebook icons
        # The first is the facebook one, the third is also facebook or maybe just twitter but let's remove both Facebook links.
        # Actually, let's remove the <a> blocks for web.facebook.com and twitter.com if that's what the user meant by "2 facebook icons" - wait, there is a Facebook and a Twitter icon that has a D that looks like Twitter. Let's just remove the first and third a tags.
        # Let's use regex to remove the <a href="https://web.facebook.com... </a>
        content = re.sub(r'<a href="https://web\.facebook\.com/dtwtutorials/"[^>]*>.*?</a>', '', content, flags=re.DOTALL)
        content = re.sub(r'<a href="https://twitter\.com/dtwtutorialsng"[^>]*>.*?</a>', '', content, flags=re.DOTALL)

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

if __name__ == '__main__':
    main()
