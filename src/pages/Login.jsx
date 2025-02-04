import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
  const { logInUser, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logInUser(email, password)
      .then((result) => {
        // console.log("firebase login success", result.user);

        setUser(result.user);

        navigate(location?.state ? location.state : "/");

        // update last login info
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const loginInfo = { email, lastSignInTime };

        axios.patch("http://localhost:5000/users", loginInfo).then((data) => {
          console.log("signin info updated in db", data.data);
        });

        // send patch req to backend users api
        // fetch("http://localhost:5000/users", {
        //   method: "PATCH",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(loginInfo),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log("signin info updated in db", data);
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
          Login to your account
        </h2>
        <div className="border-b-[1px] my-4"></div>

        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              //   onChange={(e) => setEmail(e.target.value)}
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
                onClick={handleForgetPassword}
                className="label-text-alt link link-hover"
                type="button"
              >
                Forgot password?
              </button>
            </label> */}
          </div>
          <div className="form-control py-3">
            <button className="btn btn-neutral rounded-md">Login</button>
          </div>
        </form>
        <p className="2xl:font-semibold text-center">
          {`Don't Have An Account? `}
          <Link className="text-red-500" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
