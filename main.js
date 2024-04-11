function searchPdf() {
    const input = document.getElementById('searchInput');
    const filename = input.value.trim();
    const pdfUrl = 'pdf/' + filename + '.pdf';
    const iframe = document.createElement('iframe');
    iframe.src = `https://pdf-viewer.oss-cn-hangzhou.aliyuncs.com/web/viewer.html?file=${encodeURIComponent(pdfUrl)}`;
    iframe.width = '100%';
    iframe.height = '600px'; // Adjust height as needed
    iframe.style.border = 'none';
    const pdfContainer = document.getElementById('pdfContainer');
    pdfContainer.innerHTML = '';
    pdfContainer.appendChild(iframe);
}
