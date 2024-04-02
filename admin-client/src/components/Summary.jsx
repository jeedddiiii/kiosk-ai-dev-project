import React from "react";
import SummaryChart from "./SummaryChart";
import Sidebar from "./Sidebar";
import DropDown from "./DropDown";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function sendMessage() {
  fetch("http://localhost:8080/send-message", { method: "POST" })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    })
    .catch((error) =>
      console.error(
        "There has been a problem with your fetch operation: ",
        error
      )
    );
}

function Summary() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    // Add your component logic here
  }, [navigate, token]);
  return (
    <>
      <div className="container-side">
        <Sidebar />

        <div className="content ">
          <div className="pt-4 shadow p-3 mb-5 bg-white rounded">
            <div className="d-flex justify-content-between pb-2 mx-3">
              <p className="fs-6 fw-bold">Summary</p>

              <div className="d-flex flex-row">
                <button
                  className="btn ml-auto mx-3 fw-bold"
                  onClick={sendMessage}
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                    backgroundColor: "#06C655",
                    color: "white",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M18.664 10.84a.526.526 0 0 1-.526.525h-1.462v.938h1.463a.525.525 0 1 1 0 1.049H16.15a.526.526 0 0 1-.522-.524V8.852c0-.287.235-.525.525-.525h1.988a.526.526 0 0 1-.002 1.05h-1.463v.938h1.463c.29 0 .524.237.524.525m-4.098 2.485a.54.54 0 0 1-.166.025a.515.515 0 0 1-.425-.208l-2.036-2.764v2.45a.525.525 0 0 1-1.047 0V8.852a.522.522 0 0 1 .52-.523c.162 0 .312.086.412.211l2.052 2.775V8.852c0-.287.235-.525.525-.525c.287 0 .525.238.525.525v3.976a.524.524 0 0 1-.36.497m-4.95.027a.526.526 0 0 1-.523-.524V8.852c0-.287.235-.525.525-.525c.289 0 .524.238.524.525v3.976a.527.527 0 0 1-.526.524m-1.53 0H6.099a.528.528 0 0 1-.525-.524V8.852c0-.287.238-.525.525-.525c.29 0 .525.238.525.525v3.45h1.464a.525.525 0 0 1 0 1.05m3.915-10.78c-5.513 0-10 3.643-10 8.118c0 4.01 3.558 7.369 8.363 8.007c.325.068.769.215.881.492c.1.25.066.638.032.9l-.137.85c-.037.25-.2.988.874.537c1.076-.449 5.764-3.398 7.864-5.812C21.314 14.089 22 12.477 22 10.69c0-4.475-4.488-8.118-10-8.118"
                    />
                  </svg>
                </button>
                <DropDown />
              </div>
            </div>

            <div style={{ height: "500px" }}>
              <SummaryChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Summary;
