// not working for barcode
/*
var qrFormatsToSupport = [ 
    Html5QrcodeSupportedFormats.QR_CODE
];
var html5qrcodeConfig = {
    formatsToSupport: qrFormatsToSupport,
    experimentalFeatures: {
        useBarCodeDetectorIfSupported: true 
     }
};
const html5QrCode = new Html5Qrcode("reader", html5qrcodeConfig);
const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    var scanned = document.getElementById("scanned");
    scanned.innerText = decodedText;
};
const config = { fps: 10, qrbox: { width: 250, height: 250 } };

// If you want to prefer front camera
// html5QrCode.start({ facingMode: "user" }, config, qrCodeSuccessCallback);

// If you want to prefer back camera
html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);

// Select front camera or fail with `OverconstrainedError`.
// html5QrCode.start({ facingMode: { exact: "user"} }, config, qrCodeSuccessCallback);

// // Select back camera or fail with `OverconstrainedError`.
// html5QrCode.start({ facingMode: { exact: "environment"} }, config, qrCodeSuccessCallback);
 
*/

function onScanSuccess(qrCodeMessage) {
    var scanned = document.getElementById("scanned");
    scanned.innerText = qrCodeMessage;
}
var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", {
        fps: 10,
        qrbox: 250
    });
html5QrcodeScanner.render(onScanSuccess);

var reader = document.getElementById("reader");
reader.firstChild.style.display = 'none';

var image_link = document.getElementById("reader__dashboard_section_swaplink");
image_link.style.color = '#000';
