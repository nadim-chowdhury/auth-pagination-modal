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
    console.log(userInfo);
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
        {errors.name && errors.name.message}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          {...register("name", {
            required: "Required",
            pattern: {
              value: "",
              message: "Invalid Email",
            },
          })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          {...register("name", {
            required: "Required",
            pattern: {
              value: "",
              message: "Invalid Password",
            },
          })}
        />
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
