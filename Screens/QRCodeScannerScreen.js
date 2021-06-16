import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
npm install --save-dev html5-qrcode
<div id="qr-reader" style="width: 600px"></div>

function onScanSuccess(decodedText, decodedResult) {
     console.log(`Code scanned = ${decodedText}`, decodedResult);
}
var html5QrcodeScanner = new Html5QrcodeScanner(
  "qr-reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess);
