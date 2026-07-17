const fs = require('fs');
const files = fs.readdirSync('c:/Users/satma/Documents/Personal Website/mnt/data/satyam_github_pages_site/Art');

let artData = [
    { title: 'Avian Study I', medium: 'Graphite on Paper', note: 'A detailed study of plumage and form from field observations.', emoji: '✏️', oldSrc: 'WhatsApp Image 2026-06-03 at 1.34.22 PM (1).jpeg' },
    { title: 'Nature Study II', medium: 'Graphite on Paper', note: 'Capturing the essence of wildlife in its natural habitat.', emoji: '✏️', oldSrc: 'WhatsApp Image 2026-06-03 at 1.34.22 PM.jpeg' },
    { title: 'Digital Portrait I', medium: 'Procreate', note: 'Scientific illustration highlighting key morphological features.', emoji: '🎨', oldSrc: 'WhatsApp Image 2026-06-03 at 1.35.44 PM.jpeg' },
    { title: 'Flora Study I', medium: 'Watercolors', note: 'Exploring color and texture in botanical subjects.', emoji: '🖌️', oldSrc: 'WhatsApp Image 2026-06-03 at 1.35.45 PM (1).jpeg' },
    { title: 'Wildlife Sketch III', medium: 'Graphite on Paper', note: 'Quick field sketch focusing on movement and posture.', emoji: '✏️', oldSrc: 'WhatsApp Image 2026-06-03 at 1.35.45 PM (2).jpeg' },
    { title: 'Digital Portrait II', medium: 'Procreate', note: 'A vibrant depiction of local fauna.', emoji: '🎨', oldSrc: 'WhatsApp Image 2026-06-03 at 1.35.45 PM.jpeg' },
    { title: 'Landscape Study I', medium: 'Watercolors', note: 'Atmospheric study of the Eastern Himalayas.', emoji: '🖌️', oldSrc: 'WhatsApp Image 2026-06-03 at 1.35.46 PM (1).jpeg' },
    { title: 'Avian Study II', medium: 'Graphite on Paper', note: 'Detailed pencil work capturing intricate feather patterns.', emoji: '✏️', oldSrc: 'WhatsApp Image 2026-06-03 at 1.35.46 PM (2).jpeg' },
    { title: 'Digital Portrait III', medium: 'Procreate', note: 'Stylized scientific rendering for educational materials.', emoji: '🎨', oldSrc: 'WhatsApp Image 2026-06-03 at 1.35.46 PM.jpeg' },
    { title: 'Flora Study II', medium: 'Watercolors', note: 'Vibrant colors of the undergrowth.', emoji: '🖌️', oldSrc: 'WhatsApp Image 2026-06-03 at 1.35.47 PM (1).jpeg' },
    { title: 'Nature Study IV', medium: 'Graphite on Paper', note: 'Pencil sketch of an amphibian in its microhabitat.', emoji: '✏️', oldSrc: 'WhatsApp Image 2026-06-03 at 1.35.47 PM (2).jpeg' },
    { title: 'Digital Portrait IV', medium: 'Procreate', note: 'Detailed illustration of a mixed-species flock participant.', emoji: '🎨', oldSrc: 'WhatsApp Image 2026-06-03 at 1.35.47 PM (3).jpeg' },
    { title: 'Landscape Study II', medium: 'Watercolors', note: 'Morning mist over the canopy.', emoji: '🖌️', oldSrc: 'WhatsApp Image 2026-06-03 at 1.35.47 PM.jpeg' },
    { title: 'Avian Study III', medium: 'Graphite on Paper', note: 'Focusing on the beak and facial structure.', emoji: '✏️', oldSrc: 'WhatsApp Image 2026-06-03 at 1.35.48 PM (1).jpeg' },
    { title: 'Digital Portrait V', medium: 'Procreate', note: 'Bringing field notes to life digitally.', emoji: '🎨', oldSrc: 'WhatsApp Image 2026-06-03 at 1.35.48 PM (2).jpeg' },
    { title: 'Flora Study III', medium: 'Watercolors', note: 'A delicate study of monsoon blooms.', emoji: '🖌️', oldSrc: 'WhatsApp Image 2026-06-03 at 1.35.48 PM.jpeg' }
];

artData.forEach(item => {
    const base = item.oldSrc.replace('.jpeg', '');
    // Need exact match before -fotor-
    const matched = files.find(f => {
        const parts = f.split('-fotor-');
        return parts[0] === base;
    });
    
    if (matched) {
        item.newSrc = matched;
        const match = matched.match(/-fotor-(\d+)\.png$/);
        item.num = match ? parseInt(match[1], 10) : 0;
    } else {
        console.log('NO MATCH FOR:', item.oldSrc);
    }
});

artData.sort((a, b) => a.num - b.num);

let output = '  art: [\n';
artData.forEach((item, idx) => {
    output += `    { title: '${item.title}', medium: '${item.medium}', note: '${item.note.replace(/'/g, "\\'")}', emoji: '${item.emoji}', src: 'Art/${item.newSrc}' }${idx < artData.length - 1 ? ',' : ''}\n`;
});
output += '  ],';
fs.writeFileSync('c:/Users/satma/Documents/Personal Website/mnt/data/satyam_github_pages_site/new_art.txt', output);
console.log('Done!');
