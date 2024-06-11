import React from "react";

export const Reproductor = () => {
  return (
    <>
      <iframe
        src="http://192.168.1.81:3000/public/milanesa/embed"
        allowTransparency={false}
        allow="autoplay"
        style={{
          width: "100%",
          border: "0",
        }}
      ></iframe>
      <iframe
        src="http://192.168.1.81:3000/public/milanesa/history?theme=light"
        allowTransparency={false}
        style={{
          width: "100%",
          minHeight: "300px",
          border: "0",
        }}
      ></iframe>
    </>
  );
};
