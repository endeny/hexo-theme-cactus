import React from "react";

export default function Search(props: any) {
  const { __ } = props;
  return (
    <section id="search">
      <form>
        <input
          type="text"
          className="search-input"
          id="search-input"
          placeholder={__("search.search")}
        />
      </form>
      <div id="search-result"></div>
      <p class="search-no-result">{__("search.no_results")}</p>
    </section>
  );
}
