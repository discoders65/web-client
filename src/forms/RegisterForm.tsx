import React from "react";
import { useForm } from "react-hook-form";

const RegisterForm: React.FC = ({ handleSave }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    handleSave({ formData: data });
  });

  return (
    <div>
      <form
        className=" w-[40%] mx-auto flex flex-col gap-7 mt-16"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col">
          <label className="text-slate-500" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "name is required" })}
            className="py-3 px-3 bg-slate-100 rounded mt-1"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-slate-500" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            {...register("username", { required: "username is required" })}
            className="py-3 px-3 bg-slate-100 rounded mt-1"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-slate-500" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            id="email"
            {...register("email", { required: "email is required" })}
            className="py-3 px-3 bg-slate-100 rounded mt-1"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-slate-500" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "password is required" })}
            className="py-3 px-3 bg-slate-100 rounded mt-1"
          />
        </div>
        <button
          type="submit"
          className="mt-7 border py-2 bg-emerald-400 font-semibold text-white text-xl rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
