import React from "react";
import Header from "./Header";

const Login = () => {
  const [isSignedUp, setIsSignedUp] = React.useState(true);

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

      <form className="p-12 bg-black text-white absolute w-1/3 my-24 mx-auto right-0 left-0 rounded-lg bg-opacity-80">
        <h1 className="text-2xl py-4 font-bold">
          {isSignedUp ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignedUp && (
          <input
            placeholder="Name"
            type="text"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          placeholder="Email"
          type="email"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          placeholder="Password"
          type="password"
          className="p-4 my-4 w-full bg-gray-700"
        />

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
