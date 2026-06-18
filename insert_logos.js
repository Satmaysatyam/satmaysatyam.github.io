const fs = require('fs');

const files = [
  'c:/Users/satma/Documents/Personal Website/cv.html',
  'c:/Users/satma/Documents/Personal Website/mnt/data/satyam_github_pages_site/cv.html'
];

const replacements = [
  { search: '<span class="cv-item-title">Erasmus Mundus Joint Master Degree (TROPIMUNDO)</span>', img: 'tropimundo.png', alt: 'TROPIMUNDO' },
  { search: '<span class="cv-item-title">Erasmus Mundus Joint Master Degree (MEME)</span>', img: 'meme.png', alt: 'MEME' },
  { search: '<span class="cv-item-title">M.Sc. Wildlife Biology & Conservation Admissions</span>', img: 'ncbs.png', alt: 'NCBS/WII' },
  { search: '<span class="cv-item-title">Ph.D. Admission | IISER Pune</span>', img: 'iiser.png', alt: 'IISER' },
  { search: '<span class="cv-item-title">DST INSPIRE Fellowship (Doctoral Component)</span>', img: 'dst.png', alt: 'DST' },
  { search: '<span class="cv-item-title">Ravi Sankaran Small Grants Program</span>', img: 'inlaks.png', alt: 'Inlaks' },
  { search: '<span class="cv-item-title">Future Conservationist Award</span>', img: 'clp.png', alt: 'CLP' }
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  replacements.forEach(r => {
    if (!content.includes(`src="logos/${r.img}"`)) {
      content = content.replace(r.search, `<img src="logos/${r.img}" alt="${r.alt}" class="cv-logo">\n                  ${r.search}`);
    }
  });
  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
});
