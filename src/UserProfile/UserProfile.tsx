import { UserContext } from ".";
import type { User } from "./types";

const UserProfile = () => {
  return (
    <UserContext.Consumer>
      {(user: User | null | undefined) => {
        if (user === undefined) {
          throw new Error("UserProfile must be used within a UserProvider");
        }

        if (user === null || user?.name === "Default") {
          return "Loading...";
        }

        const { name, age, gender } = user;

        return (
          <div>
            <p>{name}</p>
            <p>{age}</p>
            <p>{gender}</p>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};

export default UserProfile;
