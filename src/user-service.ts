import axios from "axios";
import { User } from "./UserProfile/types";

export const getUser = async (): Promise<User> => {
  const { data } = await axios.get("https://randomuser.me/api/");

  const { gender, name, dob } = data.results[0];

  const user: User = {
    name: `${name.title} ${name.first} ${name.last}`,
    gender,
    age: dob.age,
  };

  return user;
};
