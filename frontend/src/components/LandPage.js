import React from "react";
import app_logo from "../images/output.gif";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function LandPage() {
  const theme = useSelector((state) => state.theme);
  console.log(theme.value.color);
  console.log(theme.value.bgcolor);
  const nav = useNavigate();
  const handleClick = () => {
    nav("/login");
  };
  return (
    <div className="center-div">
      <div className="logohead">
        <img
          className="logo"
          src={app_logo}
          style={{
            border: `2px solid ${theme.value.color}`,
            borderRadius: "50%",
          }}
        />
        <div className="heading">
          <h3 className="title">FylDrop</h3>
          <p className="sub-title" style={{ color: theme.value.bgcolor }}>
            Peer-to-Peer file sharing
          </p>
        </div>
      </div>
      <div className="btn-container">
        <button className="btnn">
          {" "}
          <p
            style={{ margin: 0, padding: 0, fontSize: 18 }}
            onClick={handleClick}
          >
            Start sharing{" "}
          </p>
          <ArrowForwardIosIcon
            className="icon"
            sx={{ marginLeft: 1, padding: 0, fontSize: 15 }}
          />{" "}
        </button>
      </div>
    </div>
  );
}

export default LandPage;
