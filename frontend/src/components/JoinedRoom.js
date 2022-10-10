import React, { useState, useContext } from "react";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../reducers/loading.js";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../reducers/socket";
import UploadContainer from "./UploadContainer";

function JoinedRoom() {
  const [userName, setUserName] = useState("");
  const user = useSelector((state) => state.user);
  const roomcode = useSelector((state) => state.code);
  const dispatch = useDispatch();
  const socket = useContext(SocketContext);
  const nav = useNavigate();
  // useEffect(() => {
  //   setUserName(user.value.username);
  //   if (!user.value.username && !roomcode.value.code) {
  //     nav("/login", { replace: true });
  //   }
  //   return () => {};
  // }, [user.value.username, nav]);

  const leaveRoom = () => {
    dispatch(
      setLoading({ loadingvalue: true, loadingtext: "Leaving the rooom" })
    );
    setTimeout(() => {
      dispatch(setLoading({ loadingvalue: false }));
      socket.emit("leaving");
      nav("/login", { replace: true });
    }, 1500);
  };

  const [peerList, setPeerList] = useState([]);

  return (
    <div className="normal-container">
      {peerList.length !== 0 ? (
        <UploadContainer />
      ) : (
        <p>
          You are alone in this room. Share this link to your friends so that
          you can share files.{" "}
        </p>
      )}
      <button className="create-join-btn" onClick={leaveRoom}>
        Leave
      </button>
      <Loading />
    </div>
  );
}

export default JoinedRoom;
