import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router';
import SocialLogin from './SocialLogin';
import axios from 'axios';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser, updateUserProfile } = useAuth();

    const handleRegistration = (data) => {
        const profileImage = data.photo[0];
        registerUser(data.email, data.password)
            .then(result => {
                console.log("User created:", result.user);

                // শুধু image upload করবো
                const formData = new FormData();
                formData.append('image', profileImage);

                const image_Api_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;
                axios.post(image_Api_URL, formData)
                    .then(res => {
                        console.log("after image upload", res.data.data.url);
                        const userProfile = {
                            displayName: data.name,
                            photoURL: res.data.data.url
                        }
                        updateUserProfile(userProfile)
                            .then(() => {
                                console.log("user profile updated done");
                            })
                            .cathch(error => console.log(error))
                        // এখানে শুধু image URL console এ দেখাবে
                        // Firebase profile update আর হবে না
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                if (error.code === "auth/email-already-in-use") {
                    alert("This email is already registered. Please login instead.");
                } else {
                    alert(error.message);
                }
                console.log(error);
            });
    };

    return (
        <div className='max-w-sm shrink-0'>
            <div className='mx-5'>
                <h1 className='text-4xl font-bold'>Welcome Back</h1>
                <p className='text-lg'>Register with ZapShift</p>
            </div>
            <form onSubmit={handleSubmit(handleRegistration)} className="card-body">
                <fieldset className="fieldset ">
                    {/*Name*/}
                    <label className="label">Name</label>
                    <input type="text" {...register("name", { required: true })} className="input" placeholder="Name" />
                    {/* errors will return when field validation fails  */}

                    {/* photo input */}
                    <label className="label">Email</label>
                    <input type="file" {...register("photo", { required: true })} className="file-input" placeholder="Photo" />


                    {/* email */}
                    <label className="label">Email</label>
                    <input type="email" {...register("email", { required: true })} className="input" placeholder="Email" />
                    {/* errors will return when field validation fails  */}
                    {errors.email && <p className='text-red-500'>Email is required</p>}

                    {/* password */}
                    <label className="label">Password</label>
                    <input type="password" {...register("password", {
                        required: true,
                        minLength: 6
                    })} className="input" placeholder="Password" />
                    {errors.password && <p>Password is required</p>}
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn max-w-xs  mt-4 bg-primary">Register</button>
                </fieldset>
                <p>Already have an account? <Link to="/login" className="text-primary">Login</Link></p>

            </form>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Register;