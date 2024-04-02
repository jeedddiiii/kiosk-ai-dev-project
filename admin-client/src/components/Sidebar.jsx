import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem("token");
    // Redirect to the login page
    navigate("/login");
  };
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <NavLink className="sidebar-tab mt-2" to="/">
          <svg
            className="m-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12m-8 6v-.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2v.8q0 .825-.587 1.413T18 20H6q-.825 0-1.412-.587T4 18"
            />
          </svg>{" "}
          User
        </NavLink>
        <NavLink className="sidebar-tab " to="/transactions">
          <svg
            className="m-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M15.3 16.7L11 12.4V7h2v4.6l3.7 3.7zm-12.45-.625q-.325-.725-.525-1.5T2.05 13h2.025q.075.525.212 1.05t.338 1.025zM2.05 11q.075-.8.275-1.588t.55-1.512l1.75 1q-.2.5-.337 1.025T4.074 11zm4.125 9.15q-.675-.5-1.25-1.088T3.85 17.8l1.75-1q.35.45.738.838t.837.737zm-.55-12.975l-1.775-1q.5-.675 1.075-1.25t1.25-1.075l1 1.775q-.425.35-.812.737t-.738.813M11 21.95q-.8-.075-1.588-.275t-1.512-.55l1-1.75q.5.2 1.025.338t1.075.212zM8.9 4.625l-1-1.75q.725-.35 1.513-.55T11 2.05v2.025q-.55.075-1.075.213T8.9 4.625M13 21.95v-2.025q.55-.075 1.075-.213t1.025-.337l1 1.75q-.725.35-1.513.55T13 21.95m2.1-17.325q-.5-.2-1.025-.337T13 4.075V2.05q.8.075 1.588.275t1.512.55zm2.725 15.525l-1-1.775q.425-.35.813-.737t.737-.813l1.775 1q-.5.675-1.075 1.263t-1.25 1.062m.55-12.975q-.35-.425-.737-.812t-.813-.738l1-1.775q.675.475 1.25 1.05t1.05 1.25zM19.925 11q-.075-.55-.213-1.075T19.376 8.9l1.75-1.025q.325.75.538 1.538T21.95 11zm1.2 5.1l-1.75-1q.2-.5.338-1.025T19.925 13h2.025q-.075.8-.275 1.588t-.55 1.512"
            />
          </svg>{" "}
          Transactions
        </NavLink>
        <NavLink className="sidebar-tab " to="/summary">
          <svg
            className="m-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M3 21q-.425 0-.712-.288T2 20q0-.425.288-.712T3 19h18q.425 0 .713.288T22 20q0 .425-.288.713T21 21zm1.5-3q-.625 0-1.062-.437T3 16.5v-4q0-.625.438-1.062T4.5 11q.625 0 1.063.438T6 12.5v4q0 .625-.437 1.063T4.5 18m5 0q-.625 0-1.062-.437T8 16.5v-9q0-.625.438-1.062T9.5 6q.625 0 1.063.438T11 7.5v9q0 .625-.437 1.063T9.5 18m5 0q-.625 0-1.062-.437T13 16.5v-6q0-.625.438-1.062T14.5 9q.625 0 1.063.438T16 10.5v6q0 .625-.437 1.063T14.5 18m5 0q-.625 0-1.062-.437T18 16.5v-12q0-.625.438-1.062T19.5 3q.625 0 1.063.438T21 4.5v12q0 .625-.437 1.063T19.5 18"
            />
          </svg>{" "}
          Summary
        </NavLink>
      </div>
      <div className="sidebar-tab m-2" onClick={handleLogout}>
        <svg
          className="m-2"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M14 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2" />
            <path d="M9 12h12l-3-3m0 6l3-3" />
          </g>
        </svg>
        Logout
      </div>{" "}
    </div>
  );
}

export default Sidebar;
