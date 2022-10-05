import React from "react";
import "../styles/Timeline.scss";

export default function Timeline() {
    /*const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    searchButton.addEventListener('click', () => {
      const inputValue = searchInput.value;
      alert(inputValue);
    });*/

  return (
    <div className="timeline">
    <div className="search">
      <div class="input-group" className="searchbar">
        <div class="form-outline">
          <input
            id="search-input"
            type="search"
            class="form-control"
          />
        </div>
        <button id="search-button" type="button" class="btn btn-secondary">
          <i class="fas fa-search">Search</i>
        </button>
      </div>
    </div>
    <div class="container-sm">
        <button class="btn btn-secondary">Reply</button>
        TODO timeline objects
    </div>
    </div>
    
  );
}

export default function Footer () {
  return (
      <div class="mt-auto py-3 text-center text-lg-start bg-light">
          <span class="text-dark">"//TODO Timeline page"</span>
      </div>
  )