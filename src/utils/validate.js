const isValid = (email, password) => {
  const emailIsValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  if (!emailIsValid) return "Email is not valid";

  const passwordIsValid =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password
    );

  if (!passwordIsValid) return "Password is not valid";

  return null;
};

export default isValid;
