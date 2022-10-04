import React from "react";
import "../styles/Header.scss";

export default function Header() {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="/timeline">
                Timeline
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/profile">
                Profile
              </a>
            </li>
          </ul>
      </nav>
      <div class="p-1 text-center bg-light">
    <h1 class="mb-3">Alumni</h1>
  </div>
    </header>
  );
}
