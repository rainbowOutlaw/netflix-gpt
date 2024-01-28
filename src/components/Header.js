import React from "react";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, USER_AVATAR } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-8 z-10 flex justify-between">
      <div>
        <img src={LOGO_URL} alt="Netflix Logo" className="w-44" />
      </div>
      {user && (
        <div className="flex p-4 gap-1">
          <button className="bg-green-400 h-10 w-28 mr-2 mt-2 rounded-lg ">
            GPT Search
          </button>
          <img className="w-12 h-12" alt="user icon" src={USER_AVATAR} />
          <button className="text-white" onClick={handleSignout}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
