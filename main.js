document.addEventListener('DOMContentLoaded', function() {
    // Initialize PDF.js
    const pdfjsLib = window['pdfjs-dist/build/pdf'];

    // Load PDF file
    function loadPdf(pdfUrl) {
        // Load PDF
        pdfjsLib.getDocument(pdfUrl).promise.then(function(pdfDoc) {
            // Display first page
            renderPage(pdfDoc, 1);
        });
    }

    // Render specific page
    function renderPage(pdfDoc, pageNum) {
        pdfDoc.getPage(pageNum).then(function(page) {
            // Set viewport
            const scale = 1.5;
            const viewport = page.getViewport({ scale: scale });

            // Prepare canvas
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            // Render PDF page into canvas context
            const renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            page.render(renderContext).promise.then(function() {
                // Display canvas on the page
                const pdfContainer = document.getElementById('pdfContainer');
                pdfContainer.innerHTML = '';
                pdfContainer.appendChild(canvas);
            });
        });
    }

    // Search PDF file
    function searchPdf() {
        const input = document.getElementById('searchInput');
        const filename = input.value.trim();
        const pdfUrl = 'pdf/' + filename + '.pdf';
        loadPdf(pdfUrl);
    }
});
