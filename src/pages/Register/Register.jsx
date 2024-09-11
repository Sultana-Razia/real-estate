import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Helmet } from "react-helmet";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";



const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        // const email = e.target.email.value;
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name);
        console.log(photo);
        console.log(email);
        console.log(password);

        //reset error
        setRegisterError('');
        setSuccess('');

        //Input field validation
        if (password.length < 8) {
            setRegisterError('Password should be at least 8 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one upper case');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError('Your password should have at least one lower case');
            return;
        }
        else if (!/[0-9]/.test(password)) {
            setRegisterError('Your password should have at least one number');
            return;
        }
        //^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$

        //Create User
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Created Successfully')
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })
    }

    // const {
    //     register,
    //     handleSubmit,
    //     watch,
    //     formState: { errors },
    // } = useForm()
    // const onSubmit = (data) => console.log(data)

    // console.log(watch("example"))

    return (
        <div>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen rounded-md w-[90%] mx-auto mt-6">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Create your account to access exclusive features and personalized content.</p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" name="photo" placeholder="PhotoURL" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password" placeholder="Password" className="input input-bordered" required />
                                <span
                                    className="absolute top-12 right-3 text-xl"
                                    onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <IoMdEyeOff /> : <IoEye />
                                    }
                                </span>
                                <label className="label">
                                    <p>Already have an account? please <Link to='/login' className="text-blue-500 font-bold">Login</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>

                        {
                            registerError && <p className="text-red-600 text-center pb-4 font-medium">{registerError}</p>
                        }
                        {
                            success && <p className="text-green-600 text-center pb-4 font-medium">{success}</p>
                        }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;