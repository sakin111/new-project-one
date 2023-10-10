import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth,} from "firebase/auth";

const Login = () => {
  const [errorRegister, setErrorRegister] = useState('');
  const [passCode, setPassCode] = useState('');

  const navigate = useNavigate()
  

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    setErrorRegister('');
    setPassCode('');

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setPassCode('user login successful');
        e.target.reset();
        navigate('/')
      })
      .catch((error) => {
        console.error(error);
        setErrorRegister(error.message);
      });
      
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label"></label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            {errorRegister && (
              <p className="mt-6 text-red-600 text-xl">{errorRegister}</p>
            )}
            {passCode && <p className="text-green-500">{passCode}</p>}
            <p className="text-xl">
              new to this website? please <Link to="/register">register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
