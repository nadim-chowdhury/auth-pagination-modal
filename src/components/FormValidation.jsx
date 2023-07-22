import { useState } from "react";
import { useForm } from "react-hook-form";

export default function FormValidation() {
  const [userInfo, setUserInfo] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
  };

  return (
    <form className="my-4 p-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          {...register("name", {
            required: "Required",
            pattern: {
              value: "",
              message: "Invalid Name",
            },
          })}
        />
        <p className="text-danger mt-2">{errors.name && errors.name.message}</p>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          {...register("email", {
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid Email",
            },
          })}
        />
        <p className="text-danger mt-2">
          {errors.email && errors.email.message}
        </p>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          {...register("password", {
            required: "Required",
            pattern: {
              value: "",
              message: "Invalid Password",
            },
            minLength: {
              value: 4,
              message: "Password Length Must Be 4 Charecters at Least",
            },
            maxLength: {
              value: 8,
              message: "Password Length Should be max 8 charecters",
            },
          })}
        />
        <p className="text-danger mt-2">
          {errors.password && errors.password.message}
        </p>
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
