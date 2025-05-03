import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {

    const [error, setError] = useState('');

    const { signIn, setUser } = use(AuthContext);
    const location = useLocation();
    console.log(location);

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(res => {
                const user = res.user;
                setUser(user);
                navigate(`${location.state ? location.state : "/"}`);
            })
            .catch(error => {
                const errorCode = error.code;
                setError(errorCode);
            })
    }
    return (
        <div className="flex flex-col max-w-md p-6 mx-auto rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                <p className="text-sm dark:text-gray-600">Sign in to access your account</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-12">
                <div className="space-y-4">
                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="leroy@jenkins.com"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                            required />
                    </div>
                    {/* Password */}
                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                        </div>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="*****"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                            required />
                    </div>
                </div>
                {error && <p className='text-red-600'>{error}</p>}
                <div className="space-y-2">
                    <div>
                        <button type="submit" className="cursor-pointer w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign in</button>
                    </div>
                    <p className="px-6 text-sm text-center dark:text-gray-600">Don't have an account yet?
                        <Link to='/auth/register' className="hover:underline dark:text-violet-600"> Sign up</Link>.
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;