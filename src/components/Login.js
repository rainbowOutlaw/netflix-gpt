import React from "react";
import Header from "./Header";
import isValid from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useNavigate } from "react-router-dom";

import { updateProfile } from "firebase/auth";

const Login = () => {
  const [isSignedUp, setIsSignedUp] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState(null);

  const navigate = useNavigate();

  const name = React.useRef(null);
  const email = React.useRef(null);
  const password = React.useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    const message = isValid(email.current.value, password.current.value);

    setErrorMessage(message);

    if (message) return;

    // Sign In Sign Up logic

    if (!isSignedUp) {
      // Sign Up Logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "SOME_IMG",
          })
            .then(() => {
              // Profile updated!
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  const toggleForm = () => {
    setIsSignedUp(!isSignedUp);
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Netflix background"
        />
      </div>

      <form
        onSubmit={submitHandler}
        className="p-12 bg-black text-white absolute w-1/3 my-24 mx-auto right-0 left-0 rounded-lg bg-opacity-80"
      >
        <h1 className="text-2xl py-4 font-bold">
          {isSignedUp ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignedUp && (
          <input
            placeholder="Name"
            type="text"
            className="p-4 my-4 w-full bg-gray-700"
            ref={name}
          />
        )}
        <input
          placeholder="Email"
          type="text"
          className="p-4 my-4 w-full bg-gray-700"
          ref={email}
        />
        <input
          placeholder="Password"
          type="password"
          className="p-4 my-4 w-full bg-gray-700"
          ref={password}
        />

        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

        <button className="py-2 my-6 rounded-sm bg-[#ff3939] w-[100%]">
          {isSignedUp ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleForm}>
          {isSignedUp
            ? "New to Netflix? Sign Up now"
            : "Already Signed Up? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
