import { useState } from "react";
import ReactDOM from "react-dom/client";

class XSearch extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const root = ReactDOM.createRoot(this.shadowRoot);
    const size = this.getAttribute("size");
    const imgSrc = this.getAttribute("imgSrc");
    // root;
    const SearchComponent = () => {
      console.log("size", size);
      console.log("imgSrc", imgSrc);

      const [queryText, setQueryText] = useState("");

      const handleOnChange = (e) => {
        setQueryText(e.target.value);
      };

      const url = `https://www.google.com/search?q=${encodeURIComponent(
        queryText
      )}`;

      return (
        <div style={{ display: "flex", gap: "12px" }}>
          <input
            onChange={handleOnChange}
            value={queryText}
            className="bg-foreground text-primary"
          />
          <a href={url} target="_blank" rel="noopener noreferrer">
            Google Search
          </a>
          {imgSrc && (
            <img
              src={imgSrc}
              alt="logo"
              style={{ width: `${size}rem`, height: `${size}rem` }}
            ></img>
          )}
        </div>
      );
    };

    root.render(<SearchComponent />);
  }
}

customElements.define("x-search", XSearch);
