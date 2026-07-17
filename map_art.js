const fs = require('fs');

const rootDataPath = 'c:/Users/satma/Documents/Personal Website/data.js';
let rootData = fs.readFileSync(rootDataPath, 'utf8');

// The items in the art array:
let artData = [
    { title: 'Avian Study I', medium: 'Graphite on Paper', note: 'A detailed study of plumage and form from field observations.', emoji: '✏️' },
    { title: 'Nature Study II', medium: 'Graphite on Paper', note: 'Capturing the essence of wildlife in its natural habitat.', emoji: '✏️' },
    { title: 'Digital Portrait I', medium: 'Procreate', note: 'Scientific illustration highlighting key morphological features.', emoji: '🎨' },
    { title: 'Flora Study I', medium: 'Watercolors', note: 'Exploring color and texture in botanical subjects.', emoji: '🖌️' },
    { title: 'Wildlife Sketch III', medium: 'Graphite on Paper', note: 'Quick field sketch focusing on movement and posture.', emoji: '✏️' },
    { title: 'Digital Portrait II', medium: 'Procreate', note: 'A vibrant depiction of local fauna.', emoji: '🎨' },
    { title: 'Landscape Study I', medium: 'Watercolors', note: 'Atmospheric study of the Eastern Himalayas.', emoji: '🖌️' },
    { title: 'Avian Study II', medium: 'Graphite on Paper', note: 'Detailed pencil work capturing intricate feather patterns.', emoji: '✏️' },
    { title: 'Digital Portrait III', medium: 'Procreate', note: 'Stylized scientific rendering for educational materials.', emoji: '🎨' },
    { title: 'Flora Study II', medium: 'Watercolors', note: 'Vibrant colors of the undergrowth.', emoji: '🖌️' },
    { title: 'Nature Study IV', medium: 'Graphite on Paper', note: 'Pencil sketch of an amphibian in its microhabitat.', emoji: '✏️' },
    { title: 'Digital Portrait IV', medium: 'Procreate', note: 'Detailed illustration of a mixed-species flock participant.', emoji: '🎨' },
    { title: 'Landscape Study II', medium: 'Watercolors', note: 'Morning mist over the canopy.', emoji: '🖌️' },
    { title: 'Avian Study III', medium: 'Graphite on Paper', note: 'Focusing on the beak and facial structure.', emoji: '✏️' },
    { title: 'Digital Portrait V', medium: 'Procreate', note: 'Bringing field notes to life digitally.', emoji: '🎨' },
    { title: 'Flora Study III', medium: 'Watercolors', note: 'A delicate study of monsoon blooms.', emoji: '🖌️' }
];

const files = fs.readdirSync('c:/Users/satma/Documents/Personal Website/Art');
const artFiles = files.filter(f => f.match(/^\d+\.(png|jpeg|jpg)$/));

artFiles.sort((a, b) => parseInt(a) - parseInt(b));

let newArtText = '  art: [\n';
for (let i = 0; i < artData.length && i < artFiles.length; i++) {
    const item = artData[i];
    const src = 'Art/' + artFiles[i];
    newArtText += `    { title: '${item.title}', medium: '${item.medium}', note: '${item.note.replace(/'/g, "\\'")}', emoji: '${item.emoji}', src: '${src}' }${i < artFiles.length - 1 ? ',' : ''}\n`;
}
newArtText += '  ],';

const startIndex = rootData.indexOf('  art: [');
const endIndex = rootData.indexOf('  ],', startIndex) + 4;
if (startIndex !== -1 && endIndex !== -1) {
    const newData = rootData.substring(0, startIndex) + newArtText.trim() + rootData.substring(endIndex);
    fs.writeFileSync(rootDataPath, newData, 'utf8');
    
    // Also do the same for mnt/data/satyam_github_pages_site/data.js
    const mntDataPath = 'c:/Users/satma/Documents/Personal Website/mnt/data/satyam_github_pages_site/data.js';
    if (fs.existsSync(mntDataPath)) {
        let mntData = fs.readFileSync(mntDataPath, 'utf8');
        const mntStart = mntData.indexOf('  art: [');
        const mntEnd = mntData.indexOf('  ],', mntStart) + 4;
        if (mntStart !== -1 && mntEnd !== -1) {
            const newMntData = mntData.substring(0, mntStart) + newArtText.trim() + mntData.substring(mntEnd);
            fs.writeFileSync(mntDataPath, newMntData, 'utf8');
        }
    }
    console.log('Success');
} else {
    console.log('Failed to find boundaries in root data.js');
}
