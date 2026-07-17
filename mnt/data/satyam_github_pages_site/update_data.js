const fs = require('fs');
const dataPath = 'c:/Users/satma/Documents/Personal Website/mnt/data/satyam_github_pages_site/data.js';
const newArtPath = 'c:/Users/satma/Documents/Personal Website/mnt/data/satyam_github_pages_site/new_art.txt';

let data = fs.readFileSync(dataPath, 'utf8');
let newArt = fs.readFileSync(newArtPath, 'utf8');

const startIndex = data.indexOf('  art: [');
const endIndex = data.indexOf('  ],', startIndex) + 4; // length of '  ],'

if (startIndex !== -1 && endIndex !== -1) {
    const newData = data.substring(0, startIndex) + newArt.trim() + data.substring(endIndex);
    fs.writeFileSync(dataPath, newData, 'utf8');
    console.log('Successfully updated data.js');
} else {
    console.log('Could not find art array boundaries.');
}
