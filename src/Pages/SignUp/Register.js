import React from 'react';
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithGoogle,
    useUpdateProfile,
  } from "react-firebase-hooks/auth";
  import auth from "../../firebase.init";
  import { useForm } from "react-hook-form";
  import Loading from "../Shared/Loading";
  import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  let navigate = useNavigate();
  
  
    const onSubmit = async (data) =>{ 
        console.log(data)
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({displayName: data.name});
      navigate('/')
  };
  
  let signInError;
  
    if (gError || error || updateError) {
     signInError = <p className="text-red-500 text-sm">{error?.message || gError?.message || updateError?.message}</p>
    }
    if (gLoading || loading || updating) {
      return <Loading></Loading>;
    }
    if (gUser || user) {
      console.log(gUser || user);
    }


    return (
        <div className="flex justify-center items-center min-h-full my-20">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            REGISTRATION
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>


            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="text-xl">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                class="input input-bordered w-full max-w-xs"
                {...register("name", {
                    required: {
                        value: true,
                        message: 'Name is required'
                    },                
                })}
              />
              <label class="label">
              {errors?.name?.type === "required" && <span class="label-text-alt text-red-500">{errors?.name?.message}</span>}
              </label>
            </div>


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
            <input className="btn btn-primary text-white  w-full max-w-xl"  type="submit" value="REgistration"/>
          </form>
          <p className="text-gray-500">Already have an Account? <span className="text-green-500"><Link to="/login">Please login</Link></span></p>

          <div className="divider">OR</div>

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

export default SignUp;