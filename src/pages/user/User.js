import './User.css';
import UserVideoList from "../../components/userVideoList/UserVideoList";
import UserInfo from "../../components/userInfo/UserInfo";
import {useEffect} from "react";

function User() {
  return (
      <>
        <UserInfo />
        <hr />
        <UserVideoList />
      </>
  );
}

export default User;
