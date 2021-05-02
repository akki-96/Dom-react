import "./styles.css";
import { useState } from "react";
export default function App() {
  const api = `https://randomuser.me/api`;
  const [user, setUser] = useState([]);
  const userHandler = async () => {
    const userData = await fetch(api, { method: "GET" });
    const userJson = await userData.json();
    const newUser = [...user, userJson.results[0]];
    setUser(newUser);
  };

  return (
    <div>
      <Button userHandler={userHandler} />
      <UserList user={user} />
    </div>
  );
}

const Button = ({ userHandler }) => {
  return <button onClick={userHandler}>Add User</button>;
};

const UserList = (props) => {
  const { user } = props;
  return (
    <>
      <div>
        {user.map((userObj, index) => {
          return <UserName key={index} userObj={userObj} />;
        })}
      </div>
    </>
  );
};

const UserName = ({ userObj }) => {
  return (
    <div>
      {userObj.name.title} {userObj.name.first} {userObj.name.last}
      <ol>
        <li>{userObj.gender}</li>
        <li>{userObj.email}</li>
      </ol>
    </div>
  );
};
