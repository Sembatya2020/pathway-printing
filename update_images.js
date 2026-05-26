const fs = require('fs');
const path = require('path');

const projectRoot = 'c:/Users/DELL/Desktop/IVAN LEE BLOOD/Budget-2026/pathway-printing';
const files = [
    'pages/index.js',
    'pages/music.js',
    'pages/about.js',
    'pages/projects.js',
    'pages/services.js',
    'pages/services/[slug].js',
    'pages/contact.js',
    'components/Header.js'
];

const imageMap = {
    'graphics (1).jpeg': 'graphics-1.jpeg',
    'graphics (1).jpg': 'graphics-1.jpg',
    'graphics (2).jpeg': 'graphics-2.jpeg',
    'graphics (3).jpeg': 'graphics-3.jpeg',
    'graphics (3).jpg': 'graphics-3.jpg',
    'graphics (4).jpeg': 'graphics-4.jpeg',
    'graphics (5).jpg': 'graphics-5.jpg',
    'graphics (6).jpg': 'graphics-6.jpg',
    'graphics (7).jpg': 'graphics-7.jpg',
    'graphics (8).jpeg': 'graphics-8.jpeg',
    'graphics (9).jpg': 'graphics-9.jpg',
    'graphics 10.jpg': 'graphics-10.jpg',
    'Healing-History 1.jpeg': 'Healing-History-1.jpeg',
    'Ivanlee Designs2.jpg': 'Ivanlee-Designs2.jpg'
};

files.forEach(relPath => {
    const fullPath = path.join(projectRoot, relPath);
    if (!fs.existsSync(fullPath)) return;

    let content = fs.readFileSync(fullPath, 'utf8');
    let originalContent = content;

    // Fix the folder name first
    content = content.split('/images/Finished designs/').join('/images/Finished-designs/');

    // Fix specific filenames
    for (const [oldName, newName] of Object.entries(imageMap)) {
        content = content.split(oldName).join(newName);
    }

    if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated: ${relPath}`);
    }
});
