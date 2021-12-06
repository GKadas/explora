import React from "react";
import useGoogleSearch from "../components/useGoogleSearch";
import "../CSS/SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../components/useGoogleSearch";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);

  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <h1>{data}</h1>
      </div>
    </div>
  );
}

export default SearchPage;
