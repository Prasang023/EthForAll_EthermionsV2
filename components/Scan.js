//scan.js
import React, { useState, useEffect, useRef } from "react";
import QRCode from "qrcode.react";
import Quagga from "quagga";

function Scan() {

  const videoRef = useRef(null);
  const [scannedData, setScannedData] = useState(null);

  useEffect(() => {
    // const startScanner = () => {
    const constraints = { video: { facingMode: "environment" } };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch((error) => {
        console.error("Error accessing camera:", error);
      });

    // Start Quagga
    Quagga.init(
      {
        inputStream: {
          name: "LiveStream",
          type: "LiveStream",
          target: videoRef.current,
        },
        decoder: {
          readers: ["code_128_reader"],
        },
      },
      (err) => {
        if (err) {
          console.error("Error initializing Quagga:", err);
          return;
        }
        Quagga.onDetected(handleDetected);
        Quagga.start();
      }
    );
    // };
  }, []);

  const handleDetected = (result) => {
    setScannedData(result.codeResult.code);
    console.log(scannedData);
    // Quagga.stop();
  };

  return (
    <>
      <div className="QrMain">
        <div className="QrScannerContainer">
          <div className="QrScanner">
            <div>
              {scannedData ? (
                <QRCode value={scannedData} />
              ) : (
                <video
                  ref={videoRef}
                  style={{ width: "100%", height: "auto" }}
                ></video>
              )}
            </div>
            {/* <button onClick={startScanner}>Start Scanner</button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Scan;
