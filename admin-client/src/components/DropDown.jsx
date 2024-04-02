import React from "react";

function DropDown() {
  return (
    <div>
      <div class="dropdown">
        <button
          class="btn btn-primary dropdown-toggle btn-lg"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ fontSize: "0.9rem", fontWeight: "bold", backgroundColor: "#2499EF"}}
        >
          Month
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#">
              January
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              February
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              March{" "}
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              April
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              May
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              June
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              July
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              August
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              September
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              October
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              November
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              December
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropDown;
