import os
import re

directory = r"c:\Users\USER\Downloads\dtw-consult-landing-page\src"

replacements = {
    # Direct mappings for existing hexes
    r'\[#f5cb5c\]': 'gold',
    r'\[#cfdbd5\]': 'stone',
    r'\[#e8eddf\]': 'cream',
    r'\[#242423\]': 'black',
    r'\[#333533\]': 'charcoal',
    
    # Mapping the stray colors to brand colors
    r'\[#D4A017\]': 'gold',
    r'\[#1F1F1F\]': 'black',
    
    # Generic tailwind colors replacing with brand colors
    # (assuming they want strict adherence to the 5 colors)
    r'rose-800': 'charcoal',
    r'rose-700': 'gold',
    r'rose-600': 'gold',
    
    r'emerald-800': 'charcoal',
    r'emerald-700': 'gold',
    r'emerald-600': 'gold',
    
    r'sky-800': 'charcoal',
    r'sky-700': 'gold',
    r'sky-600': 'gold',
}

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                
            original_content = content
            for old, new in replacements.items():
                content = re.sub(old, new, content)
                
            if content != original_content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated {file}")
