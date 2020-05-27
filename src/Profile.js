import React from "react";
import { useParams } from "react-router-dom";
const Profile = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <React.Fragment>
      <h3>This is Profile component</h3>
      <h4>your params id is {id}</h4>
    </React.Fragment>
  );
};

export default Profile;
