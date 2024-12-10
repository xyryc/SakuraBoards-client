// import { useState } from "react";
// import { useLoaderData } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

const Users = () => {
  // const loadedUsers = useLoaderData();
  // console.log(loadedUsers);
  // const [users, setUsers] = useState(loadedUsers);

  const {
    isError,
    error,
    // isPending,
    data: users,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://mk-shop-server.vercel.app/users");
      return res.json();
    },
  });

  // if (isPending) {
  //   return <p>Data is loading...</p>;
  // }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="font-sawarabi-gothic">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Index</th>
              <th>Profile Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Last Logged In</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users?.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={user.photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.createdAt || "Not defined"}</td>
                <td>{user.lastSignInTime || "Not defined"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
