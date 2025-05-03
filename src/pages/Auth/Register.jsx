import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';
import { sendEmailVerification } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';

const Register = () => {
    const { createUser, setUser, updateUser, logOut } = use(AuthContext);
    const [nameError, setNameError] = useState('');
    const [err, setErr] = useState('');
    const [success, setSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        if (name.length < 5) {
            setNameError("Name should be more then 5 characters");
        } else {
            setNameError('');
        }
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const terms = form.terms.checked;

        setSuccess(false);
        setNameError('');
        setErr('');
        // setShowPassword(false);

        if (!terms) {
            setErr("Please accept our terms and condtions");
            return;
        }

        // Validate password (regular expression)
        // const passRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
        // if (passRegExp.test(password) === false) {
        //     setErr("Password must include at least one lowercase, one uppercase, one digit, one special character (symbol) and 8 characters or longer");
        //     return;
        // }
        if (!/[a-z]/.test(password)) {
            setErr("Password must include at least one lowercase letter");
            return;
        } else if (!/[A-Z]/.test(password)) {
            setErr("Password must include at least one uppercase letter");
            return;
        } else if (!/[\d]/.test(password)) {
            setErr("Password must include at least one digit (0-9)");
            return;
        } else if (!/[^\w\s]/.test(password)) {
            setErr("Password must include at least one special character (symbol)");
            return;
        } else if (password.length < 8) {
            setErr("Password must be more than 8 characters long");
            return;
        } else {
            setErr('');
        }


        // console.log(name, photo, email, password);

        createUser(email, password)
            .then(res => {
                const user = res.user;
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        // Email verification
                        sendEmailVerification(auth.currentUser)
                            .then(() => {
                                setSuccess(true);
                                alert(`We've sent a verification email on ${email}. Please check your inbox and confirm it.`);
                                logOut();
                            });
                    })
                    .catch(error => {
                        console.log(error);
                        setUser(user)
                    })
            })
            .catch(error => {
                // alert(error);
                setErr(error.message);
            })
    }
    return (
        <div className="flex flex-col max-w-md p-6 mx-auto rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Sign up</h1>
                <p className="text-sm dark:text-gray-600">Sign up to create your account</p>
            </div>
            <form onSubmit={handleRegister} className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                        <input type="text" name="name" id="name" placeholder="Your name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        {nameError && <p className='text-red-600'>{nameError}</p>}
                    </div>
                    <div>
                        <label htmlFor="photo" className="block mb-2 text-sm">Photo URL</label>
                        <input type="text" name="photo" id="photo" placeholder="Photo url" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="password" className="text-sm">Password</label>
                        </div>
                        <div className='relative'>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder="*****"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                            <button
                                onClick={() => setShowPassword(!showPassword)}
                                className='absolute right-3 top-2 cursor-pointer'>
                                {showPassword ? <FaRegEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>
                </div>

                <label className="label space-y-2">
                    <input type="checkbox" name='terms' className="checkbox" />
                    Accept terms and conditions
                </label>
                <div className="space-y-2">
                    <div>
                        <button type="submit" className="cursor-pointer w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign up</button>
                    </div>
                    <p className="px-6 text-sm text-center dark:text-gray-600">Already have an account?
                        <Link to='/auth/login' className="hover:underline dark:text-violet-600"> Sign in</Link>.
                    </p>
                </div>
            </form>

            {success && <p className='text-green-600'>Sign up successfully!</p>}
            {err && <p className='text-red-600'>{err}</p>}
        </div>
    );
};

export default Register;