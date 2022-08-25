import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import requests from "../agent";
import { useRouter } from "next/router";
// import { addUser } from "../context/user.slice";
const isProd = process.env.NODE_ENV === "production";

export default function Reset() {
  const user = useSelector((state) => state.user);
    const [input, setInputs] = useState({
        username: isProd ? "" : "254710623337",
        password: "",
      });
      const dispatch = useDispatch();
      const router = useRouter();

     
    
      const handleInputChange = (event) => {
        event.persist();
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        setInputs((inputs) => ({ ...inputs, [name]: value }));
      };
    
      const handleLogin = (e) => {
        e.preventDefault();
        if(user?.user?.email)
            requests.post("Auth/reset/"+user?.user?.email, input).then((res) => {
              router.push("/login");
            });
          else
            router.push("/login");
      };
  return (
    <>
      <h4 className="mt-0">Reset your password</h4>
      <p className="text-muted mb-4">
        Enter your new password to access farmer portal.
      </p>

      <form onSubmit={(e)=>handleLogin(e)}>
       
        <div className="mb-2">          
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div className="input-group input-group-merge">
             <input
                      required
                      defaultValue={input.password}
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={handleInputChange}
                    />
            <div className="input-group-text" data-password="false">
              <span className="password-eye"></span>
            </div>
          </div>
        </div>
        <div className="mb-2">          
          <label htmlFor="confirmpassword" className="form-label">
           Confirm Password
          </label>
          <div className="input-group input-group-merge">
             <input
                      required
                      defaultValue={input.confirmPassword}
                      className="form-control"
                      type="password"
                      name="ConfirmPassword"
                      placeholder="Confirm password"
                      onChange={handleInputChange}
                    />
            <div className="input-group-text" data-password="false">
              <span className="password-eye"></span>
            </div>
          </div>
        </div>        
        <div className="d-grid text-center">
          <button className="btn btn-primary"  type="submit">
            Reset
          </button>
        </div>
      </form>

      <footer className="footer footer-alt">
        <p className="text-muted">
          Do not have an account?
         <Link href="register">
         <a
            
            className="text-primary fw-medium ms-1"
          >
            Sign Up
          </a></Link>
        </p>
      </footer>
    </>
  );
}
