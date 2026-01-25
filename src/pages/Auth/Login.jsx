import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router';
import SocialLogin from './SocialLogin';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signInUser } = useAuth();

    const handleLogin = (data) => {
        console.log(data);
        signInUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
            })
            .catch(
                errors => {
                    console.log(errors);
                }
            )
    }
    return (
        <div>
            <div className="max-w-sm shrink-0">
                <div className='mx-5'>
                    <h1 className='text-4xl font-bold'>Welcome Back</h1>
                    <p className='text-lg'>Login with ZapShift</p>
                </div>
                <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
                    <fieldset className="fieldset">
                        {/* email */}
                        <label className="label font-bold">Email</label>
                        <input type="email" {...register("email", { required: true })} className="input" placeholder="Email" />
                        {
                            errors.email && <p className='text-red-500'>Email is required</p>
                        }
                        {/* password */}
                        <label className="label font-bold">Password</label>
                        <input type="password" {...register("password", { required: true, minLength: 6 })} className="input" placeholder="Password" />
                        {
                            errors.password && <p className='text-red-500'>Password is required</p>
                        }
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn   mt-4 bg-primary">Login</button>
                    </fieldset>
                    <p>Don’t have any account? <Link to="/register" className="text-primary">Register</Link></p>
                </form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;