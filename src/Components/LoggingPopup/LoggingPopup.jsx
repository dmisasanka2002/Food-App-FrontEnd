import React, { useContext, useState, useRef } from "react";
import "./LoggingPopup.css";
import { CgClose, CgFacebook, CgGoogle } from "react-icons/cg";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "../Contexts/AuthContext";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";

const backendURL = import.meta.env.APP_BACK_URL;

function LoggingPopup({ setIsDisplaySignIn }) {
  const [displaySignUp, setDisplaySignUp] = useState(false);
  const { setIsLogged } = useContext(AuthContext);
  const navigate = useNavigate();
  const loaderRef = useRef(null);

  const signIn = async (user) => {
    try {
      const response = await axios.post(`${backendURL}/api/user/login`, user);
      console.log(response.data);
      if (response.data.sucess) {
        localStorage.setItem("token", response.data.token);

        setTimeout(() => {
          setIsLogged(true);
          setIsDisplaySignIn(false);
          loaderRef.current.classList.toggle("loader-container");
        }, 1000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const signUp = async (user) => {
    try {
      const response = await axios.post(
        `${backendURL}/api/user/register`,
        user
      );
      console.log(response.data);

      if (response.data.sucess) {
        localStorage.setItem("token", response.data.token);

        setIsLogged(true);
        setIsDisplaySignIn(false);
        loaderRef.current.classList.toggle("loader-container");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const auth = async (e) => {
    loaderRef.current.classList.toggle("loader-container");
    const data = new FormData(e.target);
    const email = data.get("email");
    const password = data.get("password");
    const passwordConform = data.get("paswordConform");

    //register
    if (displaySignUp) {
      if (password === passwordConform) {
        const user = { email, password };
        console.log(user);
        signUp(user);
      } else {
        toast.error("Password mismatched");
      }
    }
    //login
    else {
      const user = { email, password };
      signIn(user);
    }
  };

  return (
    <>
      <div className="" ref={loaderRef}>
        <Loader />
      </div>
      <div className="logging">
        <form
          name="auth-form"
          method="post"
          className="container"
          onSubmit={(e) => {
            e.preventDefault();
            auth(e);
          }}
        >
          <div
            className="close"
            onClick={(e) => {
              setIsDisplaySignIn(false);
              navigate("/");
            }}
          >
            <CgClose />
          </div>
          <h2>{displaySignUp ? "Sign Up" : "Sign In"}</h2>
          <div className="inputs">
            <input
              type="email"
              name="email"
              id="mail"
              placeholder="Enter Your Email"
              required
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
            />
            <input
              type="password"
              name="paswordConform"
              id="paswordConform"
              placeholder="Conform Password"
              className={displaySignUp ? "" : "hide"}
              required={displaySignUp ? true : false}
            />
            <button type="submit">
              {displaySignUp ? "Register" : "Logging"}
            </button>
          </div>

          <div className="links">
            <p>
              {displaySignUp
                ? "Already Have an Account"
                : "Don't have an Account"}
            </p>
            <div className="changePopup">
              <p onClick={() => setDisplaySignUp(displaySignUp ? false : true)}>
                {displaySignUp ? "Sign In" : "Register"}
              </p>
            </div>
            <div className="options google">
              <CgGoogle />
              <input type="button" value="Logging with Google" />
            </div>
            <div className="options fb">
              <CgFacebook />
              <input type="button" value="Logging with FaceBook" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoggingPopup;
