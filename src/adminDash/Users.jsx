import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaTrash, FaUser } from "react-icons/fa6";
import Swal from "sweetalert2";

const Users = () => {
  
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:3002/users`);

      return res.json();
    },
  });
  console.log(users);
  const handleDelete = (id) => {
    fetch(`http://localhost:3002/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User deleted successfully",
        showConfirmButton: false,
        timer: 1500
      })
        refetch();
        
          
          
        
      });
  }
  
  return (
    <div>
      <div className="flex items-center justify-between mx-4 my-4">
        <h1>All Users</h1>
        <h1>Total Users: {users.length}</h1>
      </div>

      {/* table */}

      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra md:w-[870px]">
            {/* head */}
            <thead className="bg-blue-400 text-white rounded-lg">
              <tr>
                <th>#</th>
                {/* <th>Name</th> */}
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  {/* <td>{user.name}</td> */}
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button className="btn btn-ghost btn-xs"><FaUser/></button>
                    )}
                  </td>
                  <td>
                    <button onClick={() => handleDelete(user._id)} className="btn btn-ghost btn-xs text-red-600">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
