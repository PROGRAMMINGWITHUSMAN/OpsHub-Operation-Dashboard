import { Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Signup = () => {
  const signupSchema = z.object({
    name: z.string().min(1, "Name Must Be At Least 1 Character").trim(),
    email: z
      .string()
      .email("Invalid Email")
      .min(1, "Email Must Be At Least 1 Character")
      .trim(),
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
    resolver: zodResolver(signupSchema),
  });

  console.log(errors);

  function onSubmit(data) {
    const signupData = data;
    console.log(signupData);
    reset();
  }

  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-primary text-center">
          Welcome!
        </h1>
        <p className="text-primary/70 text-lg mt-1 capitalize text-center">
          Please Sign Up to Continue
        </p>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <label htmlFor="" className="flex flex-col gap-2 text-text-muted">
            Name:
            <input
              {...register("name")}
              type="text"
              placeholder="Enter Your Name"
              required
              className="w-full bg-surface border border-surface-muted rounded-xl py-3 px-4 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition"
            ></input>
            {errors.name && (
              <p className="text-danger">{errors.name.message}</p>
            )}
          </label>
          <label htmlFor="" className="flex flex-col gap-2 text-text-muted">
            Email:
            <input
              {...register("email")}
              type="text"
              placeholder="Enter Your Email"
              required
              className="w-full bg-surface border border-surface-muted rounded-xl py-3 px-4 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition"
            ></input>
          </label>
          {errors.email && (
            <p className="text-danger">{errors.email.message}</p>
          )}
          <label htmlFor="" className="flex flex-col gap-2 text-text-muted">
            Password:
            <input
              {...register("password")}
              type="password"
              placeholder="Enter Your Password"
              required
              className="w-full bg-surface border border-surface-muted rounded-xl py-3 px-4 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition"
            ></input>
          </label>
          {errors.password && (
            <p className="text-danger">{errors.password.message}</p>
          )}
          <button
            type="onSubmit"
            className="bg-primary/90 text-white rounded-xl px-5 py-3 outline-none flex items-center cursor-pointer gap-2 justify-center"
          >
            Sign Up
          </button>
          <div className="text-text-primary flex justify-center">
            <Link to="/login">Already Have an Account? Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
