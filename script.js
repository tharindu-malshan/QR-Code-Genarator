document.getElementById("generateBtn").addEventListener("click", function () {
  const idNumber = document.getElementById("idNumber").value;

  if (!idNumber) {
    alert("Please enter an ID number!");
    return;
  }

  const qrcodeContainer = document.getElementById("qrcode");
  qrcodeContainer.innerHTML = ""; // Clear previous QR code

  QRCode.toCanvas(qrcodeContainer, idNumber, {
    width: 200,
    margin: 2,
    color: {
      dark: "#000000",
      light: "#ffffff",
    },
  }, function (error) {
    if (error) console.error(error);
    console.log("QR Code generated!");
  });
});
