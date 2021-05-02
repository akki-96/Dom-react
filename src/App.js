import "./styles.css";
<<<<<<< Codesandbox
import { useState } from "react";
=======

>>>>>>> GitHub
export default function App() {
<<<<<<< Codesandbox
  const api = `https://randomuser.me/api`;
  const [user, setUser] = useState([]);

  const userHandler = async () => {
    const userData = await fetch(api, { method: "GET" });
    const userJson = await userData.json();
    // setUser(userJson.results[0].gender);
    const newUser = [...user, userJson.results[0]];
=======
  return (
    <div className="App">
      <h2>DOM Array React!</h2>
      <h1>Hello CodeSandbox</h1>
    </div>
  );
}

>>>>>>> GitHub
    setUser(newUser);
  };

  return (
    <div>
      <button onClick={userHandler}>Add User</button>
      <div>
        {user.map((userObj, index) => {
          return (
            <div key={index}>
              {userObj.name.title} {userObj.name.first} {userObj.name.last}
              <ol>
                <li>{userObj.gender}</li>
                <li>{userObj.email}</li>
              </ol>
            </div>
          );
        })}
      </div>
    </div>
  );
}
