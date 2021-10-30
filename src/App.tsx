import logo from "./logo.svg";
import "./App.css";
import UserProfile, { UserContext } from "./UserProfile";
import { User } from "./UserProfile/types";
import { useEffect, useState } from "react";
import { getUser } from "./user-service";
import Cask from "./Cask";

function App() {
  const [user, setUser] = useState<User>({ age: 10, name: "Default", gender: "female" });

  const refreshUser = async (): Promise<void> => {
    const user: User = await getUser();
    setUser(user);
  };

  useEffect((): (() => void) => {
    let mounted: boolean = true;

    if (mounted) {
      refreshUser()
        .then()
        .catch((e) => console.log(e));
    }

    return (): void => {
      mounted = false;
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={refreshUser}>New User</button>
        <UserContext.Provider value={user}>
          <UserProfile />
          <Cask />
        </UserContext.Provider>
      </header>
    </div>
  );
}

export default App;
