const { exec } = require('child_process');

function openWindow(title, content) {
    // Kanka burada küçük bir HTML dosyası oluşturup sistem tarayıcısında açıyoruz
    // Bu en hızlı ve garanti "Pencere Açma" yöntemidir
    const htmlContent = `
        <html>
        <body style="background:#09090b; color:white; font-family:sans-serif; display:flex; align-items:center; justify-content:center; height:100vh; border: 2px solid #3b82f6;">
            <div style="text-align:center;">
                <h1 style="color:#3b82f6">${title}</h1>
                <p style="font-size:20px">${content}</p>
                <button onclick="window.close()" style="background:#3b82f6; border:none; color:white; padding:10px 20px; border-radius:5px; cursor:pointer;">Close Zenith</button>
            </div>
        </body>
        </html>
    `;
    
    const fs = require('fs');
    fs.writeFileSync('./output/window.html', htmlContent);
    
    // Linux üzerinde pencereyi (app mode) açar
    exec(`google-chrome --app="file://${process.cwd()}/output/window.html" || firefox --new-window "file://${process.cwd()}/output/window.html"`);
}

module.exports = { openWindow };
