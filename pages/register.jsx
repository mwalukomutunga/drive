import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import requests from "../agent";
import { useRouter } from "next/router";
import { addUser } from "../context/user.slice";

export default function Register() {
  const [input, setInputs] = useState({});
  const dispatch = useDispatch();
  const router = useRouter();
  const handleInputChange = (event) => {
    event.persist();
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };
  const handleRegister = (e) => {
    e.preventDefault();
    requests.post("register", input).then((res) => {      
      router.push("/login");     
    });
  };
  return (
     <>
      <h4 className="mt-0"></h4>
      <p className="text-muted mb-4">
        Do not have an account? Create your own account, it takes less than a
        minute
      </p>

      <form  onSubmit={(e)=>handleRegister(e)}>
        {/* <InPut Label="Full Name" defaultValue={input.fullname} setInputs ={setInputs} name ="fullname"/> */}
        <div className="mb-2">
          <label className="form-label">
          Full Name
          </label>
          <input
            className="form-control"
            type="text"
            defaultValue={input.fullname}
            id="fullname"
            required
            name="fullname"
            onChange={handleInputChange}
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-2">
          <label className="form-label">
          Phone number
          </label>
          <input
            className="form-control"
            type="tel"
            defaultValue={input.phone}
            id="phone"
            required
            name="phone"
            onChange={handleInputChange}
            placeholder="Enter your phone number"
          />
        </div>
        <div className="mb-2">
          <label className="form-label">
          ID number
          </label>
          <input
            className="form-control"
            type="text"
            defaultValue={input.idNumber}
            id="idNumber"
            required
            name="idNumber"
            onChange={handleInputChange}
            placeholder="Enter your ID number"
          />
        </div>
        {/* <InPut Label="Phone number" defaultValue={input.phone} setInputs ={setInputs} name ="phone"/> */}
        {/* <InPut Label="Id number"  defaultValue={input.idNumber} setInputs ={setInputs} name ="idNumber"/> */}
        {/* <InputPwd Label="Password" name ="password"/> */}
        <div className="mb-2">
      <label className="form-label">
      Password
      </label>
      <div className="input-group input-group-merge">
        <input
          type="password"
          id="password"
          name ="password"
          className="form-control"
          placeholder={`Enter your password`}
          onChange={handleInputChange}
        />

        <div className="input-group-text" data-password="false">
          <span className="password-eye"></span>
        </div>
      </div>
    </div>
        <div className="mb-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkbox-signup"
            />
            <label className="form-check-label">
              I accept
              <Link  href="" >
              <a className="text-dark">
                Terms and Conditions
              </a>
              </Link>
            </label>
          </div>
        </div>
        <div className="d-grid text-center">
          <button className="btn btn-primary" type="submit">
            Sign Up
          </button>
        </div>
      </form>

      <footer className="footer footer-alt">
        <p className="text-muted">
          Already have account?
         
          <Link href="login">
         <a
            
            className="text-primary fw-medium ms-1"
          >
           Sign In
          </a></Link>
        </p>
      </footer></>
   
  );
}
