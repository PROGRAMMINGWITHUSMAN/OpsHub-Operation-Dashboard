import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { GoAlertFill } from "react-icons/go";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";

const Login = () => {
  const { getSignup, setIsLogin, setLogin } = useContext(AuthContext);
  console.log(getSignup);

  const [adminError, setAdminError] = useState("");

  const navigate = useNavigate();

  const loginSchema = z.object({
    name: z.string().min(1, "Name Must Be At Least 1 Character").trim(),
    password: z
      .string()
      .min(8, "Password Must Be At Least 8 Characters")
      .trim(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    const loginData = data;
    console.log(loginData);
    reset();

    const isAlreadyExists = getSignup.some(
      (item) =>
        loginData.name === item.name &&
        loginData.password === item.password,
    );

    console.log(isAlreadyExists);

    if (isAlreadyExists) {
      setIsLogin(true);
      setLogin(loginData);
      navigate("/dashboard");
      return;
    }
    setAdminError("Wrong Credentials!");
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-primary text-center">
          Welcome Back!
        </h1>
        <p className="text-primary/70 text-lg mt-1 capitalize text-center">
          Please Enter your Details
        </p>
      </div>

      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <label htmlFor="" className="flex flex-col gap-2 text-text-muted">
            Name:
            <input
              type="text"
              {...register("name")}
              placeholder="Enter Your Name"
              required
              className="w-full bg-surface border border-surface-muted rounded-xl py-3 px-4 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition"
            />
          </label>
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
          <label htmlFor="" className="flex flex-col gap-2 text-text-muted">
            Password:
            <input
              type="password"
              {...register("password")}
              placeholder="Enter Your Password"
              required
              className="w-full bg-surface border border-surface-muted rounded-xl py-3 px-4 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition"
            />
          </label>
          {errors.password && (
            <p className="text-danger">{errors.password.message}</p>
          )}
          <div className="text-text-primary flex justify-between">
            <Link to="/forgotpassword">Forgot Password?</Link>
            {adminError && (
              <p className="flex items-center gap-1 text-danger">
                <GoAlertFill size={18} /> {adminError} Try Again!
              </p>
            )}
          </div>
          <button
            type="submit"
            className="bg-primary/90 text-white rounded-xl px-5 py-3 outline-none flex items-center cursor-pointer gap-2 justify-center"
          >
            Sign In
          </button>
          <div className="text-text-primary text-center">
            <Link to="/signup">Don't have an account? Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
