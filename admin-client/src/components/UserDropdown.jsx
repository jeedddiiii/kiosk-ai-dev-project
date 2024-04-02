import React, { useEffect, useState } from "react";

function UserDropdown({ onUserSelect }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/") // Replace with your API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Users fetched:", data);
        setUsers(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);

  return (
    <div>
      <div className="dropdown">
        <button
          class="btn btn-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{
            fontSize: "0.9rem",
            fontWeight: "bold",
            backgroundColor: "#2499EF",
          }}
        >
          Name
        </button>
        <ul className="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#" onClick={()=> onUserSelect("Unknown")}>
              Unknown
            </a>
          </li>
          {users.map((user, index) => (
            <li>
              <a
                class="dropdown-item"
                key={index}
                href="#"
                onClick={() => {
                  console.log("User selected:", user.name); 
                  onUserSelect(user.name);
                }}
              >
                {user.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserDropdown;
