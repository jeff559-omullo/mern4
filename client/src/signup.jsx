import React from "react";
import { Link } from "react-router-dom";


const Signup = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="p-4 rounded shadow bg-white w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Sign Up</h2>
        <form>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter name"
              autoComplete="off"
              name="name"
              className="form-control"
              
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control"
              
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control"
              
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Register
          </button>

          <p className="text-center mt-3">Already have an account?</p>
          <Link to="/login" className="btn btn-outline-secondary w-100">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
