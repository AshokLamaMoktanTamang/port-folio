const fs = require('fs');
const path = require('path');

// ==========================================
// CONFIGURATION
// ==========================================
// REPLACE THIS WITH YOUR ACTUAL DOMAIN
const BASE_URL = 'https://lamaashok.com.np';
const SITE_NAME = 'Ashok Lama - Portfolio';
const SITE_DESCRIPTION = 'Full-stack software engineer specialized in building scalable web applications and AI-powered solutions.';

const PUBLIC_DIR = path.join(__dirname, '../public');
const PORTFOLIO_DATA_PATH = path.join(__dirname, '../src/data/portfolio.ts');

// ==========================================
// UTILS
// ==========================================
function escapeXml(unsafe) {
    return unsafe.replace(/[<>&'"]/g, function (c) {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '\'': return '&apos;';
            case '"': return '&quot;';
        }
    });
}

// ==========================================
// DATA EXTRACTION
// ==========================================
function extractProjects() {
    try {
        const content = fs.readFileSync(PORTFOLIO_DATA_PATH, 'utf8');

        // Simple extraction for projects (work and personal)
        // This is a naive regex-based approach since we are in a simple script
        const projects = [];

        // Match workProjects and personalProjects blocks
        const projectRegex = /title:\s*["'](.+?)["'],\s*description:\s*["'](.+?)["']/g;
        let match;

        while ((match = projectRegex.exec(content)) !== null) {
            projects.push({
                title: match[1],
                description: match[2]
            });
        }

        return projects;
    } catch (error) {
        console.error('Error extracting projects:', error);
        return [];
    }
}

// ==========================================
// GENERATORS
// ==========================================
function generateSitemap() {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

    fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), xml);
    console.log('✅ sitemap.xml generated');
}

function generateRSS(projects) {
    const items = projects.map(p => `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${BASE_URL}/#projects</link>
      <description>${escapeXml(p.description)}</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <guid>${BASE_URL}/#${p.title.replace(/\s+/g, '-').toLowerCase()}</guid>
    </item>`).join('\n');

    const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <link>${BASE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

    fs.writeFileSync(path.join(PUBLIC_DIR, 'rss.xml'), xml);
    console.log('✅ rss.xml generated');
}

// ==========================================
// MAIN
// ==========================================
console.log('🚀 Generating SEO files...');

if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

const projects = extractProjects();
generateSitemap();
generateRSS(projects);

console.log('✨ SEO generation complete!');
