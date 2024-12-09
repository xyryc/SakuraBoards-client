import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const Register = () => {
  const { createNewUser, updateUserProfile, setUser } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createNewUser(email, password)
      .then((result) => {
        console.log("user created at firebase", result.user);
        setUser(result.user);

        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            console.log("profile updated at firebase");
          })
          .catch((error) => {
            console.log(error);
          });

        const createdAt = result?.user?.metadata?.creationTime;

        const newUser = { photo, name, email, createdAt };

        // axios
        axios.post("http://localhost:5000/users", newUser).then((data) => {
          if (data.data.insertedId) {
            Swal.fire({
              title: "Success",
              text: "User created in database successfully!",
              icon: "success",
              customClass: {
                title: "font-kaushan-script",
                confirmButtonText: "font-kaushan-script",
              },
            });
          }
        });

        // fetch("http://localhost:5000/users", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(newUser),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log("user created at db", data);

        //     if (data.insertedId) {
        //       Swal.fire({
        //         title: "Success",
        //         text: "User created in database successfully!",
        //         icon: "success",
        //         customClass: {
        //           title: "font-kaushan-script",
        //           confirmButtonText: "font-kaushan-script",
        //         },
        //       });
        //     }
        //   });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Error!",
          text: `${error.code}`,
          icon: "error",
          customClass: {
            title: "font-kaushan-script",
            confirmButtonText: "font-kaushan-script",
          },
        });
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-md shrink-0 rounded-md px-10 py-5 border">
        <h2 className="font-semibold text-2xl text-center">
          Register an account
        </h2>
        <div className="border-b-[1px] my-4"></div>

        <form onSubmit={handleSubmit} className="space-y-2">
          {/* <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline"
          type="button"
        >
          <FcGoogle /> Login with Google
        </button> */}

          {/* name input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>

          {/* photo url */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo url"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              // onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
              <button
                className="btn btn-sm absolute right-2 top-2"
                type="button"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            {/* <label className="label">
            <button
            //   onClick={handleForgetPassword}
              className="label-text-alt link link-hover"
              type="button"
            >
              Forgot password?
            </button>
          </label> */}
          </div>
          <div className="form-control py-3">
            <button className="btn btn-neutral rounded-md">Register</button>
          </div>
        </form>
        <p className="2xl:font-semibold text-center">
          {`Have An Account? `}
          <Link className="text-red-500" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
