import "./styles.css";
import { useState, memo } from "react";
export default function App() {
  const api = `https://randomuser.me/api`;
  const [user, setUser] = useState([]);
  const [userSearched, setUserSearched] = useState(user);
  const [search, setSearch] = useState("");

  const addUserHandler = async () => {
    const userData = await fetch(api, { method: "GET" });
    const userJson = await userData.json();
    const newUser = [...user, userJson.results[0]];
    setUser(newUser);
    setUserSearched(user);
  };

  const searchInputHandler = () => {
    const filterAppState = user.filter(
      (user) =>
        user.name.first.toLowerCase().includes(search.toLowerCase()) ||
        user.name.last.toLowerCase().includes(search.toLowerCase()) ||
        user.gender.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );
    setUserSearched(filterAppState);
  };

  return (
    <div>
      <Button clickHandler={addUserHandler} name={"Add User"} />
      <Button clickHandler={searchInputHandler} name={"Search"} />
      <input
        name="search"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <UserList user={userSearched} />
    </div>
  );
}

const Button = memo(({ clickHandler, name }) => {
  return <button onClick={clickHandler}>{name}</button>;
});

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

const UserName = memo(({ userObj }) => {
  return (
    <div>
      {userObj.name.title} {userObj.name.first} {userObj.name.last}
      <ol>
        <li>{userObj.gender}</li>
        <li>{userObj.email}</li>
      </ol>
    </div>
  );
});
