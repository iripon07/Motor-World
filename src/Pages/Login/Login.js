import React, { useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [password, setPassword] = useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();


  const onSubmit = (data) =>{ 
    console.log(data)
    signInWithEmailAndPassword(data.email, data.password);
};

let signInError;
const navigate = useNavigate();
const location = useLocation();
let from = location.state?.from?.pathname || "/";



  if (gError || error) {
   signInError = <p className="text-red-500 text-sm">{error?.message || gError?.message}</p>
  }
  if (gLoading || loading) {
    return <Loading></Loading>;
  }
  if (gUser || user) {
    navigate(from, { replace: true });
  }



  return (
    <div className="flex justify-center items-center min-h-full my-20">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            LOGIN
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>


            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="text-xl">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                class="input input-bordered w-full max-w-xs"
                {...register("email", {
                    required: {
                        value: true,
                        message: 'Email is required'
                    },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label class="label">
              {errors?.email?.type === "required" && <span class="label-text-alt text-red-500">{errors?.email?.message}</span>}
              {errors?.email?.type === "pattern" && <span class="label-text-alt text-red-500">{errors?.email?.message}</span>}
              </label>
            </div>


            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="text-xl">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                class="input input-bordered w-full max-w-xs"
                {...register("password", {
                    required: {
                        value: true,
                        message: 'Password is required'
                    },
                  minLength: {
                    value: 6,
                    message: "Must be 6 character or longer",
                  },
                })}
              />
              <label class="label">
              {errors?.password?.type === "required" && <span class="label-text-alt text-red-500">{errors?.password?.message}</span>}
              {errors?.password?.type === "minLength" && <span class="label-text-alt text-red-500">{errors?.password?.message}</span>}
              </label>
            </div>

            {signInError}
            <input className="btn btn-primary text-white  w-full max-w-xl"  type="submit" value="login"/>
          </form>
          <p className="text-gray-500">New to Motor World? <span className="text-green-500"><Link to="/register">Create an Account</Link></span></p>
          

          <div className="card-actions justify-center">
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline btn-success w-full max-w-xs hover:text-white"
            >
              CONTINUE WIth Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
