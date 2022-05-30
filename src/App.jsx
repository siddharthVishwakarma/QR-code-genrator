import QRCode from "qrcode";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [qrcode, setQrcode] = useState("");

  const GenrateQRCode = () => {
    QRCode.toDataURL(url, {
      margin: 2,
      width: 800,
      color: {
        dark: "#000000ff",
        light: "#ffffffff",
      },
    })
      .then((url) => {
        console.log(url);
        setQrcode(url);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="App">
      <h1>QR Code Genrator</h1>
      <input
        type="text"
        value={url}
        placeholder="e.g: www.Google.com"
        onChange={(evn) => setUrl(evn.target.value)}
      />
      <button onClick={GenrateQRCode}>Genrate</button>
      {qrcode && (
        <>
          <img src={qrcode} />
          <a href={qrcode} download="qrcode.png">
            Download
          </a>
        </>
      )}
    </div>
  );
}

export default App;
