import { NavLink } from "react-router-dom";
// import { useSignInWithGoogle } from "react-firebase-hooks/auth";
// import { auth, useAuthState } from "../firebase";

export default function Header() {
  // const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  // console.log(user);

  return (
    <nav className="px-4 py-2">
      <h1 className="fw-bold">Hello World</h1>
      <div className="fw-bold">
        <NavLink to="/" className="text-decoration-none">
          Home
        </NavLink>
        <NavLink to="/about" className="text-decoration-none">
          About
        </NavLink>
        <NavLink to="/contact" className="text-decoration-none">
          Contact
        </NavLink>
        <NavLink to="/services" className="text-decoration-none">
          Services
        </NavLink>
      </div>
      <button
        onClick={() => alert("Hello World!")}
        type="button"
        className="btn btn-primary"
      >
        Sign in
      </button>
    </nav>
  );
}
