import React from "react";
  
const PdfDownloader = () => {
  
    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('1.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = '1.pdf';
                alink.click();
            })
        })
    }
    return (
        <>
            <center className="d-flex">
            <div>1.pdf</div>
                <button onClick={onButtonClick}>
                    Download PDF
                </button>
            </center>
        </>
    );
};
  
export default PdfDownloader;