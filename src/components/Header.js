import React from "react";

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
            <li class="nav-item">
              <a class="nav-link" href="/">
                Log Out
              </a>
            </li>
          </ul>
        
      </nav>
    </header>
  );
}
