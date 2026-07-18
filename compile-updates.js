import fs from 'fs';
import path from 'path';

function getDirectImageUrl(url) {
  if (!url) return '';
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://drive.google.com/uc?export=view&id=${match[1]}`;
  }
  return url;
}

function formatDate(isoString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(isoString).toLocaleDateString('en-US', options);
}

try {
  const updatesPath = path.resolve('data/updates.json');
  const htmlPath = path.resolve('updates.html');

  if (!fs.existsSync(updatesPath)) {
    console.error("Updates JSON database not found. Skipping compilation.");
    process.exit(1);
  }

  const rawJson = fs.readFileSync(updatesPath, 'utf8');
  const updates = JSON.parse(rawJson);

  let compiledHtml = '\n';

  if (updates.length === 0) {
    compiledHtml += '        <p style="text-align: center; color: var(--text-muted); padding: 4rem;">updates are on the way check back soon</p>\n';
  } else {
    updates.forEach((item) => {
      let cardClass = 'update-card animate fade-up';
      let imgHtml = '';

      if (item.image) {
        cardClass += ' has-image';
        const directImg = getDirectImageUrl(item.image);
        imgHtml = `<img src="${directImg}" alt="Update Image" class="update-image" loading="lazy">`;
      }

      let linkHtml = '';
      if (item.link) {
        linkHtml = `
            <a href="${item.link}" target="_blank" rel="noopener" class="update-link">
              Read More 
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>`;
      }

      const isLongText = item.text.length > 280;
      let textContentHtml = '';

      if (isLongText) {
        const excerpt = item.text.slice(0, 260) + '...';
        const fullText = item.text.replace(/\n/g, '<br>');
        textContentHtml = `
            <div class="update-text-wrapper collapsed">
              <p class="update-text excerpt">${excerpt}</p>
              <p class="update-text full" style="display: none;">${fullText}</p>
              <button class="toggle-text-btn">Read full text</button>
            </div>`;
      } else {
        textContentHtml = `<p class="update-text">${item.text.replace(/\n/g, '<br>')}</p>`;
      }

      compiledHtml += `        <article class="${cardClass}">
          ${imgHtml}
          <div class="update-content">
            <span class="update-date">${formatDate(item.date)}</span>
            ${textContentHtml}
            ${linkHtml}
          </div>
        </article>\n`;
    });
  }

  // Read current updates.html
  let htmlContent = fs.readFileSync(htmlPath, 'utf8');

  // Regex replacement between start and end comments
  const startComment = '<!-- UPDATES_START -->';
  const endComment = '<!-- UPDATES_END -->';
  
  const regex = new RegExp(`${startComment}[\\s\\S]*?${endComment}`);
  const newContent = `${startComment}${compiledHtml}        ${endComment}`;

  if (htmlContent.match(regex)) {
    htmlContent = htmlContent.replace(regex, newContent);
    fs.writeFileSync(htmlPath, htmlContent, 'utf8');
    console.log("Successfully compiled and pre-rendered updates into updates.html!");
  } else {
    console.error("Could not find updates placeholder comments in updates.html");
  }

} catch (err) {
  console.error("Error during pre-rendering compilation:", err);
  process.exit(1);
}
