import os

files_to_check = [
    r"c:\Users\USER\Downloads\dtw-consult-landing-page\index.html",
    r"c:\Users\USER\Downloads\dtw-consult-landing-page\about.html",
    r"c:\Users\USER\Downloads\dtw-consult-landing-page\services.html",
    r"c:\Users\USER\Downloads\dtw-consult-landing-page\contact.html"
]

facebook_svg = """            <a href="https://web.facebook.com/dtwtutorials/" target="_blank" rel="noopener" class="social-link" aria-label="Facebook">
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
            </a>
"""

youtube_target = '            <a href="https://www.youtube.com/dtwtutorials" target="_blank" rel="noopener" class="social-link" aria-label="YouTube">'

def main():
    for filepath in files_to_check:
        if not os.path.exists(filepath):
            continue
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        if "Facebook" not in content:
            content = content.replace(youtube_target, facebook_svg + youtube_target)
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)

if __name__ == '__main__':
    main()
