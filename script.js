document.getElementById("generateBtn").addEventListener("click", function () {
  const idNumber = document.getElementById("idNumber").value;

  if (!idNumber) {
    alert("Please enter an ID number!");
    return;
  }

  const qrcodeContainer = document.getElementById("qrcode");
  const downloadLink = document.getElementById("downloadLink");
  qrcodeContainer.innerHTML = ""; // Clear previous QR code
  downloadLink.style.display = "none"; // Hide download link initially

  QRCode.toCanvas(qrcodeContainer, idNumber, {
    width: 200,
    margin: 2,
    color: {
      dark: "#000000",
      light: "#ffffff",
    },
  }, function (error) {
    if (error) {
      console.error(error);
      return;
    }
    
    console.log("QR Code generated!");

    // Convert to an image for download
    QRCode.toDataURL(idNumber, { width: 200 }, function (err, url) {
      if (err) {
        console.error(err);
        return;
      }
      downloadLink.href = url;
      downloadLink.style.display = "block";
    });
  });
});
