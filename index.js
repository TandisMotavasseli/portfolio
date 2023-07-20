
    // Get a reference to the download button
    const downloadButton = document.getElementById('downloadButton');

    // Define the file path to your PDF (replace 'pdfs/example.pdf' with your actual file path)
    const pdfFilePath = 'Resume-Tandis-Motavasseli.pdf';

    // Function to handle the button click and initiate the download
    function downloadPDF() {
        // Create a link element
        const link = document.createElement('a');
        link.href = pdfFilePath;

        // Set the "download" attribute with the desired file name (you can change "example.pdf" to your preferred file name)
        link.download = 'Resume-Tandis-Motavasseli.pdf';

        // Append the link to the document body
        document.body.appendChild(link);

        // Trigger the click event on the link to start the download
        link.click();

        // Remove the link from the document after the download starts
        document.body.removeChild(link);
    }

    // Add a click event listener to the download button
    downloadButton.addEventListener('click', downloadPDF);
