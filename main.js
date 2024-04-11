function searchPdf() {
    const input = document.getElementById('searchInput');
    const filename = input.value.trim();
    const pdfUrl = 'pdf/' + filename + '.pdf';
    const pdfContainer = document.getElementById('pdfContainer');
    pdfContainer.innerHTML = `<iframe src="https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true" width="100%" height="600px" style="border: none;"></iframe>`;
}
