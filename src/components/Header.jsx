import { NavLink } from "react-router-dom";
// import { useSignInWithGoogle } from "react-firebase-hooks/auth";
// import { auth, useAuthState } from "../firebase";

export default function Header() {
  // const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  // console.log(user);

  return (
    <nav>
      <h1>Hello World</h1>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/services">Services</NavLink>
      </div>
      <button onClick={() => signInWithGoogle()}>Sign in</button>
    </nav>
  );
}
