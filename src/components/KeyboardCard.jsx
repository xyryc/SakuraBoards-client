import { FaRegEye } from "react-icons/fa";
import { HiOutlineTrash } from "react-icons/hi";
import { MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const KeyboardCard = ({ keyboard, keyboards, setKeyboards }) => {
  const { color, connection, layout, name, photo, price, switchType, _id } =
    keyboard;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
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
    <div>
      <img className="h-52 w-full object-scale-down" src={photo} alt={name} />

      <div className="px-4">
        <div>
          <h1 className="text-lg font-semibold">{name}</h1>
          <div className="grid grid-cols-2 my-2 gap-8 font-medium text-sm">
            <span>Color: {color}</span>
            <span>Layout: {layout}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 my-2 gap-8 font-medium text-sm">
          <span>Connection: {connection}</span>
          <span>Switch Type: {switchType}</span>
        </div>

        <div className="grid grid-cols-2 my-2 gap-8 font-medium text-sm">
          <span>Price: ${price}</span>

          <div className="space-x-2">
            <Link
              to={`/keyboards/details/${_id}`}
              className="btn-xs btn btn-outline"
            >
              <FaRegEye />
            </Link>
            <Link
              to={`/updateKeyboard/${_id}`}
              className="btn-xs btn btn-outline"
            >
              <MdOutlineEdit />
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn-xs btn btn-outline"
            >
              <HiOutlineTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyboardCard;
