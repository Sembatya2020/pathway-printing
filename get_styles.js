const https = require('https');

https.get('https://www.charlesdesign.co.uk/', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const cssLinks = data.match(/<link[^>]*rel=["']stylesheet["'][^>]*href=["'](.*?)["']/gi);
    const inlineStyles = data.match(/<style[^>]*>([\s\S]*?)<\/style>/gi);
    const fonts = data.match(/font-family:.*?;/g);
    const colors = data.match(/color:.*?;/g);
    const bgColors = data.match(/background-color:.*?;/g);
    
    console.log("CSS Links:", cssLinks ? cssLinks.slice(0, 5) : []);
    console.log("Inline Styles snippet:", inlineStyles ? inlineStyles[0].substring(0, 200) : "None");
    
    // Attempt to find brand color and fonts in the HTML text roughly
    console.log("Fonts found:", fonts ? [...new Set(fonts)] : []);
    
    // Find some hex colors
    const hexes = data.match(/#[0-9a-fA-F]{3,6}/g);
    console.log("Hex colors:", hexes ? [...new Set(hexes)] : []);
  });
});
