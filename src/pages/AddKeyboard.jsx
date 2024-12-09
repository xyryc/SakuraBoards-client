import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const AddKeyboard = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleAddKeyboard = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const color = form.color.value;
    const switchType = form.switchType.value;
    const layout = form.layout.value;
    const connection = form.connection.value;
    const price = form.price.value;
    const photo = form.photo.value;

    const newKeyboard = {
      name,
      color,
      switchType,
      layout,
      connection,
      price,
      photo,
      username: user.displayName,
      email: user.email,
    };
    console.log(newKeyboard);

    // send data to server
    fetch("http://localhost:5000/keyboards", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newKeyboard),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Keyboard added successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });

          navigate("/");
        }
      });
  };

  return (
    <div className="text-center">
      <h1 className="my-10 text-3xl font-bold">Add Keyboard</h1>

      <form
        onSubmit={handleAddKeyboard}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Keyboard name"
          className="border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        <input
          type="text"
          name="color"
          placeholder="Color"
          className="border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        <input
          type="text"
          name="switchType"
          placeholder="Switch Type"
          className="border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        <input
          type="text"
          name="layout"
          placeholder="Layout"
          className="border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        <input
          type="text"
          name="connection"
          placeholder="Connection"
          className="border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          className="border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          className="sm:col-span-2 border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        <input
          className="rounded-md bg-blue-100 sm:col-span-2 border-b-gray-200 border py-2 hover:border-blue-500 duration-200 font-medium hover:bg-blue-100"
          type="submit"
          value="Add Keyboard"
        />
      </form>
    </div>
  );
};

export default AddKeyboard;
