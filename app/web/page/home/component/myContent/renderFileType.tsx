import React, { Component } from "react";
// @ts-ignore
import file from "@images/file.png";

export default (text, record) => {
  return record.type == "file" ? (
    <div style={{ display: "inline-flex", marginTop: "10px" }}>
      <img width={12} height={17} src={file} style={{ marginTop: 3 }} />
      <p>&emsp;&thinsp;{text}</p>
    </div>
  ) : (
    <div style={{ display: "inline-flex", marginTop: "10px" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        fill="rgb(224, 152, 101)"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        style={{ marginTop: 3 }}
      >
        <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
      </svg>
      <p>&emsp;{text}</p>
    </div>
  );
};
