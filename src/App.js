import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import QRCodeStyling from "qr-code-styling";

const qrCode = new QRCodeStyling({
  width: 500,
  height: 500,
  margin: 30,
  qrOptions: {
    typeNumber: 4,
    mode: "Byte",
    errorCorrectionLevel: "H"
  },
  imageOptions: { 
    hideBackgroundDots: false, 
    imageSize: 0, 
    margin: 0 },
  dotsOptions: { 
    type: "dots", 
    color: "#000000", 
    gradient: null 
  },
  backgroundOptions: { color: "#ffffff" },
  image: null,
  dotsOptionsHelper: {
    colorType: { 
        single: true, 
        gradient: false },
    gradient: {
      linear: true,
      radial: false,
      color1: "#6a1a4c",
      color2: "#6a1a4c",
      rotation: 0
    }
  },
  cornersSquareOptions: {
    type: "extra-rounded",
    color: "#000000",
    gradient: null
  },
  cornersSquareOptionsHelper: {
    colorType: { 
        single: true, 
        gradient: false },
    gradient: {
      linear: true,
      radial: false,
      color1: "#000000",
      color2: "#000000",
      rotation: 0
    }
  },
  cornersDotOptions: { 
    type: "", 
    color: "#000000" },
  cornersDotOptionsHelper: {
    colorType: { 
        single: true, 
        gradient: false },
    gradient: {
      linear: true,
      radial: false,
      color1: "#000000",
      color2: "#000000",
      rotation: 0
    }
  },
  backgroundOptionsHelper: {
    colorType: { 
        single: true, 
        gradient: false },
    gradient: {
      linear: true,
      radial: false,
      color1: "#ffffff",
      color2: "#ffffff",
      rotation: 0
    }
  }
});

export default function App() {
  const [url, setUrl] = useState("https://qr-code-styling.com");
  const [fileExt, setFileExt] = useState("png");
  const ref = useRef(null);

  useEffect(() => {
    qrCode.append(ref.current);
  }, []);

  useEffect(() => {
    qrCode.update({
      data: url
    });
  }, [url]);

  const onUrlChange = (event) => {
    event.preventDefault();
    setUrl(event.target.value);
  };

  const onExtensionChange = (event) => {
    setFileExt(event.target.value);
  };

  const onDownloadClick = () => {
    qrCode.download({
      extension: fileExt
    });
  };

  return (
    <div className="App">
      <div style={styles.inputWrapper}>
        <input value={url} onChange={onUrlChange} style={styles.inputBox} />
        <select onChange={onExtensionChange} value={fileExt}>
          <option value="png">PNG</option>
          <option value="jpeg">JPEG</option>
          <option value="webp">WEBP</option>
        </select>
        <button onClick={onDownloadClick}>Download</button>
      </div>
      <div ref={ref} />
    </div>
  );
}

const styles = {
  inputWrapper: {
    margin: "20px 0",
    display: "flex",
    justifyContent: "space-between",
    width: "100%"
  },
  inputBox: {
    flexGrow: 1,
    marginRight: 50
  }
};
