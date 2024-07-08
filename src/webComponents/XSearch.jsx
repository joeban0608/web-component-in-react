import { useState } from "react";
import ReactDOM from "react-dom/client";
class XSearch extends HTMLElement {
  static observedAttributes = ["size"];

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
  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`属性 ${name} 已由 ${oldValue} 变更为 ${newValue}。`);
  }
}

customElements.define("x-search", XSearch);
