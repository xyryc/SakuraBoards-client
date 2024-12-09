import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyKeyboards = () => {
  const { user } = useContext(AuthContext);
  const [keyboards, setKeyboards] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myKeyboards/${user.email}`)
      .then((res) => res.json())
      .then((data) => setKeyboards(data));
  }, [user.email]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      customClass: {
        title: "font-kaushan-script",
        confirmButtonText: "font-kaushan-script",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/keyboards/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Keyboard has been removed.",
                icon: "success",
                customClass: {
                  title: "font-kaushan-script",
                  confirmButtonText: "font-kaushan-script",
                },
              });

              const remaining = keyboards.filter(
                (keyboard) => keyboard._id !== _id
              );
              setKeyboards(remaining);
            }
          });

        console.log("delete confirmed");
      }
    });
  };

  return (
    <>
      <div>
        <h2 className="text-3xl font-bold text-center mb-2">My Keyboards</h2>
      </div>

      <div className="space-y-3 mt-3">
        {keyboards.map((keyboard) => (
          <div
            key={keyboard._id}
            className="border border-cyan-500 flex flex-col md:flex-row items-center gap-6 p-4 rounded-md"
          >
            <img
              src={keyboard.photo}
              alt={keyboard.name}
              className="w-72 h-32 object-scale-down"
            />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="md:w-56">
                <h3 className="text-2xl font-bold">{keyboard.name}</h3>
                <span>
                  Price:{" "}
                  <span className="text-green-500 text-lg font-semibold">
                    ${keyboard.price}
                  </span>
                </span>
                <p>Color: {keyboard.color}</p>
              </div>

              <div>
                <p>Switch Type: {keyboard.switchType}</p>
                <p>Connection: {keyboard.connection}</p>
              </div>

              <div>
                <p>Added By: {keyboard.username}</p>
                <p>Email: {keyboard.email}</p>
              </div>

              <div>
                <p>Actions</p>
                <div className="space-x-2">
                  <Link
                    to={`/keyboards/details/${keyboard._id}`}
                    className="btn btn-outline btn-xs"
                  >
                    View
                  </Link>
                  <Link
                    to={`http://localhost:5173/updateKeyboard/${keyboard._id}`}
                    className="btn btn-outline btn-xs"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(keyboard._id)}
                    className="btn btn-outline btn-xs"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyKeyboards;
