import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";
import { Button } from "react-bootstrap";

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="reg_form">
      {/* register your input into the hook by invoking the "register" function */}
      <li>
      <label className="first_name_label" htmlFor="fname">First name</label>
      <input  id="fname"  {...register("fnameRequired", { required: true })} /> <br />
      {errors.fnameRequired && <span className="warning_text">This field is required</span>} <br />
      </li>
      <li>
      <label className="second_name_label" htmlFor="sname">Second name</label>
      <input  id="sname"  {...register("snameRequired",  { required: true, })}   /> <br />
      {errors.snameRequired && <span className="warning_text">This field is required</span>} <br />
      </li>
      <li>
      <label className="email_label" htmlFor="email">Email</label>
      <input  id="email"  {...register("emailRequired", { required: true })}  /> <br />
      {errors.emailRequired && <span className="warning_text">This field is required</span>} <br />
      </li>
      <li>
      <label className="password_label" htmlFor="pass">Password</label>
      <input  id="pass"  {...register("passwordRequired", { required: true })} /> <br />
      {errors.passwordRequired && <span className="warning_text">This field is required</span>}
      </li>
      

      {/* include validation with required or other standard HTML validation rules */}
      {/* <input {...register("exampleRequired", { required: true })} /> */}
      {/* errors will return when field validation fails  */}
      {/* {errors.exampleRequired && <span>This field is required</span>} */}
      
    <Button type="submit" variant="success">Submit</Button>    

</form>
  );
}