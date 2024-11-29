import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateKeyboard = () => {
  const navigate = useNavigate();
  const keyboard = useLoaderData();
  const { color, connection, layout, name, photo, price, switchType, _id } =
    keyboard;

  const handleUpdateKeyboard = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const color = form.color.value;
    const switchType = form.switchType.value;
    const layout = form.layout.value;
    const connection = form.connection.value;
    const price = form.price.value;
    const photo = form.photo.value;

    const updatedKeyboard = {
      name,
      color,
      switchType,
      layout,
      connection,
      price,
      photo,
    };
    // console.log(updatedKeyboard);

    // send data to server
    fetch(`http://localhost:5000/keyboards/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedKeyboard),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Keyboard info updated successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });

          navigate("/");
        }
      });
  };

  return (
    <div className="text-center">
      <h1 className="my-10 text-3xl font-bold">Update Keyboard</h1>

      <form
        onSubmit={handleUpdateKeyboard}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        <input
          defaultValue={name}
          type="text"
          name="name"
          placeholder="Keyboard name"
          className=" border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        <input
          defaultValue={color}
          type="text"
          name="color"
          placeholder="Color"
          className="border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        <input
          defaultValue={switchType}
          type="text"
          name="switchType"
          placeholder="Switch Type"
          className="border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        <input
          defaultValue={layout}
          type="text"
          name="layout"
          placeholder="Layout"
          className="border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        <input
          defaultValue={connection}
          type="text"
          name="connection"
          placeholder="Connection"
          className="border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        <input
          defaultValue={price}
          type="number"
          name="price"
          placeholder="Price"
          className="border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        <input
          defaultValue={photo}
          type="text"
          name="photo"
          placeholder="Photo URL"
          className="sm:col-span-2 border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        <input
          className="rounded-md bg-blue-100 sm:col-span-2 border-b-gray-200 border py-2 hover:border-blue-500 duration-200 font-medium hover:bg-blue-100"
          type="submit"
          value="Update Keyboard"
        />
      </form>
    </div>
  );
};

export default UpdateKeyboard;
