import { useState } from "react";
import { get, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const { getSignup, login, isLogin } = useContext(AuthContext);
  // console.log(getSignup);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const forgetPasswordSchema = z
    .object({
      email: z
        .string()
        .email()
        .min(1, "Email Must Be At Least 1 Character")
        .trim(),
      password: z
        .string()
        .min(8, "Password Must Be At Least 8 Characters")
        .trim(),
      confirmPassword: z
        .string()
        .min(8, "Password Must Be At Least 8 Characters")
        .trim(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords Don't Match",
      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(forgetPasswordSchema),
  });

  console.log(errors);

  const onSubmit = (data) => {
    setError("");
    setSuccess("");

    const saved = JSON.parse(localStorage.getItem("signup")) || [];

    const forgetPasswordData = data;
    console.log(forgetPasswordData);

    const emailExists = saved.some(
      (item) => item.email === forgetPasswordData.email,
    );

    if (!emailExists) {
      setError("Email is not Registered.");
      setSuccess("");
      return;
    }

    const emailFind = saved.some(
      (item) =>
        item.email === forgetPasswordData.email &&
        item.password === forgetPasswordData.password,
    );
    
    if (emailFind) {
      setError(
        "Your new password cannot be the same as your current password.",
      );
      return;
    } else {
      const updatedSaved = saved.map((item) => {
        if (item.email === forgetPasswordData.email) {
          return {
            ...item,
            password: forgetPasswordData.password,
          };
        }
        return item;
      });

      setSuccess("Password Reset Successfully!");
      localStorage.setItem("signup", JSON.stringify(updatedSaved));
    }
    reset();
  };

  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-primary text-center">
          Welcome!
        </h1>
        <p className="text-primary/70 text-lg mt-1 capitalize text-center">
          Reset Your Password
        </p>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <label htmlFor="" className="flex flex-col gap-2 text-text-muted">
            Email:
            <input
              type="text"
              {...register("email")}
              placeholder="Enter Your Email"
              required
              className="w-full bg-surface border border-surface-muted rounded-xl py-3 px-4 text-sm text-text-primary
               placeholder:text-text-muted outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition"
            ></input>
          </label>
          {errors.email && (
            <p className="text-danger">{errors.email.message}</p>
          )}
          <label htmlFor="" className="flex flex-col gap-2 text-text-muted">
            Password:
            <input
              type="password"
              {...register("password")}
              onChange={() => {
                setError("");
              }}
              placeholder="Enter Your Password"
              required
              className="w-full bg-surface border border-surface-muted rounded-xl py-3 px-4 text-sm text-text-primary
               placeholder:text-text-muted outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition"
            ></input>
          </label>
          {errors.password && (
            <p className="text-danger">{errors.password.message}</p>
          )}
          <label htmlFor="" className="flex flex-col gap-2 text-text-muted">
            Confirm Password:
            <input
              type="password"
              {...register("confirmPassword")}
              placeholder="Enter Your Password"
              required
              className="w-full bg-surface border border-surface-muted rounded-xl py-3 px-4 text-sm text-text-primary
               placeholder:text-text-muted outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition"
            ></input>
          </label>
          {errors.confirmPassword && (
            <p className="text-danger">{errors.confirmPassword.message}</p>
          )}
          <div className="text-text-primary text-center capitalize">
            {success && <p className="text-success">{success}</p>}
          </div>
          <div className="text-text-primary text-center capitalize">
            <span className="text-danger">{error}</span>
          </div>
          <button
            type="submit"
            className="bg-primary/90 text-white rounded-xl px-5 py-3 outline-none flex items-center cursor-pointer gap-2 justify-center"
          >
            Reset Password
          </button>
          <div className="text-text-primary flex justify-center">
            <Link to="/login">Already Have an Account? Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
