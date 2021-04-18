import React from "react";

export default function ToBottom() {

  // scrolls to bottom of page
  // make scrolling smooth
  const toBottom = () => {
    window.scroll({
      top: document.body.offsetHeight,
      behavior: "smooth"
    });
  };

  return (
        <div onClick={toBottom}>
          <h1>CONTACT</h1>
    </div>
  );
}