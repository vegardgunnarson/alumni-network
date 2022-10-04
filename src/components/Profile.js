import React from "react";
import "../styles/Profile.scss";

const user = {
  name: "Kari Nordmann",
  image:
    "https://media.istockphoto.com/vectors/person-gray-photo-placeholder-woman-vector-id1074273082?k=20&m=1074273082&s=612x612&w=0&h=SovjUEtBkN7NidGCPXY_Gq-RxuQB-xUhF3xOeRg6qG8=",
  status: "Attending Experis Academy",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  funfact: "Addicted to cheeze",
};

export default function Profile() {
  return (
    <div class="mt-auto py-3 text-center text-lg-start">
      <div class="container-lg">
        <img src={user.image} alt="could not be found" className="image" />
        <p className="name">{user.name}</p>
        <p className="status">{user.status}</p>
        <p className="bio">{user.bio}</p>
        <p className="funfact">Funfact: {user.funfact}</p>
      </div>
    </div>
  );
}
