/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
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
    const dataArrStringify = this.getAttribute("data-arr");
    const dataArr = JSON.parse(dataArrStringify);
    // root;
    const SearchComponent = () => {
      console.log("size", size);
      console.log("imgSrc", imgSrc);
      console.log("dataArr", dataArr);

      const [queryText, setQueryText] = useState("");

      const handleOnChange = (e) => {
        setQueryText(e.target.value);
      };

      const url = `https://www.google.com/search?q=${encodeURIComponent(
        queryText
      )}`;

      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            alignItems: "center",
          }}
        >
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

          <Table data={dataArr} title="Mock Data From React App" />
        </div>
      );
    };

    root.render(<SearchComponent />);
  }
}

customElements.define("x-search", XSearch);

const Table = ({ data, title }) => {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "16px",
        color: "black",
      }}
    >
      <h1
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "16px",
          color: "white",
        }}
      >
        {title}
      </h1>
      <table
        style={{
          width: "100%",
          backgroundColor: "white",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                padding: "8px 16px",
                border: "2px solid gray",
              }}
            >
              Name
            </th>
            <th
              style={{
                padding: "8px 16px",
                border: "2px solid gray",
              }}
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <td
                style={{
                  padding: "8px 16px",
                  border: "1px solid gray",
                }}
              >
                {item.name}
              </td>
              <td
                style={{
                  padding: "8px 16px",
                  border: "1px solid gray",
                }}
              >
                {item.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
