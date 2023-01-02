import React from "react";
import "../styles/PageNotFound.scss";

function PageNotFound() {
  return (
    <div>
      <body>
        <div className="noise"></div>
        <div className="overlay"></div>
        <div className="terminal">
          <h1>
            Error <span className="errorcode">404</span>
          </h1>
          <p className="output">The page you are looking is unavailable.</p>
          <p className="output">
            Please try to
            <a href="/home">return to the homepage</a>.
          </p>
          <p className="output">Good luck.</p>
        </div>
      </body>
    </div>
  );
}

export default PageNotFound;
