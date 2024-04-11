function searchPdf() {
    const input = document.getElementById('searchInput');
    const filename = input.value.trim();
    const pdfUrl = 'pdf/' + filename + '.pdf';
    const iframe = document.createElement('iframe');
    iframe.src = pdfUrl;
    iframe.width = '100%';
    iframe.height = '600px'; // Adjust height as needed
    iframe.style.border = 'none';
    const pdfContainer = document.getElementById('pdfContainer');
    pdfContainer.innerHTML = '';
    pdfContainer.appendChild(iframe);
}
