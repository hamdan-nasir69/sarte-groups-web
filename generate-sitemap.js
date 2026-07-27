const fs = require('fs');

const hostname = 'https://www.sarte.com';
const routes = [
  '/',
  '/about',
  '/construction',
  '/marketing',
  '/software'
];

// Map the routes into XML formatting
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
  <url>
    <loc>${hostname}${route}</loc>
  </url>`).join('')}
</urlset>
`;

// Write the file into the CRA build folder
fs.writeFileSync('build/sitemap.xml', sitemap);
console.log('Sitemap generated successfully!');