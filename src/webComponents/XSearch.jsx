import { useState } from "react";
import ReactDOM from "react-dom";
class XSearch extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const root = ReactDOM.createRoot(this.shadowRoot);

    const SearchComponent = () => {
      const [queryText, setQueryText] = useState("");
      // const name = this.getAttribute("name");

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
        </div>
      );
    };

    root.render(<SearchComponent />);
  }
}

customElements.define("x-search", XSearch);
