import { useGetUsersQuery } from "./UserApiSlice";

const UsersList = () => {
  const users = useGetUsersQuery();
  console.log(users);
  return <h1>UsersList</h1>;
};

export default UsersList;
