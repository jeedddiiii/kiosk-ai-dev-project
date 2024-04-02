import React from "react";
import Sidebar from "./Sidebar";
import TransactionsList from "./TransactionsList";
import UserDropdown from "./UserDropdown";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function Transactions() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);

  const [selectedUser, setSelectedUser] = useState(null);
  console.log("setSelectedUser function:", setSelectedUser); // Add this line here

  return (
    <div className="container-side">
      <Sidebar />
      <div className="content">
        <div className="pt-4 shadow p-3 mb-5 bg-white rounded">
          <div className="d-flex justify-content-between pb-2 mx-3">
            <p className="fs-6 fw-bold">Transactions</p>
            <UserDropdown onUserSelect={setSelectedUser} />
          </div>
          <TransactionsList selectedUser={selectedUser} />
        </div>
      </div>
    </div>
  );
}

export default Transactions;
