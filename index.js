const fs = require('fs');
const qrcode = require('qrcode');

const url = "https://drive.google.com/file/d/123UCAkgJNd6WDet4NI-8yt5nYUn_oksf/view?usp=sharing";

const run = async() => {
    const QR = await.toDataURL(url)
    const htmlContent = `
        <div style="display: flex; justify-content: center; align-items: center;">
        <h2>Cv Andres Reyes</h2>
        <img src="${QR}">
        </div>
    `;
    fs.writeFileSync('./index.html', htmlContent)
}

run()