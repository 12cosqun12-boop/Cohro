const { exec } = require('child_process');

function openWindow(title, message) {
    // Linux üzerinde sistem penceresi açar
    exec(`zenity --info --title="${title}" --text="${message}" --width=300`, (err) => {
        if (err) console.error("Window Error:", err);
    });
}

module.exports = { openWindow };
