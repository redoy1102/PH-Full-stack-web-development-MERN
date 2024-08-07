import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../Providers/AuthProvider.jsx";
import {useContext} from "react";


const Login = () => {
    const {signInUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        signInUser(email, password)
            .then(res => {
                const userCredential = res.user;
                console.log(userCredential);
                e.target.reset();
                navigate("/orders")
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
            })
    }

    return (
        <div className="flex font-poppins items-center justify-center">
        <div className="h-screen w-screen flex justify-center items-center dark:bg-gray-900">
            <div className="grid gap-8">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px]">
                    <div className="border-[10px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg p-5 m-2">
                        <h1 className="pt-4 pb-4 font-bold dark:text-gray-400 text-5xl text-center cursor-default">Log in</h1>



                        <form onSubmit={handleLogIn} className="space-y-4">
                            <div>
                                <label htmlFor="email" className="mb-2 dark:text-gray-400 text-lg">Email</label>
                                <input name="email"
                                    className="border p-3 dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                                    type="email" placeholder="Email" required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="mb-2 dark:text-gray-400 text-lg">Password</label>
                                <input name="password"
                                    className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full" type="password"
                                    placeholder="Password" required
                                />
                            </div>
                            <a className="group text-blue-400 transition-all duration-100 ease-in-out" href="#"><span className="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Forget your password?</span></a>
                            <button
                                className="bg-gradient-to-r dark:text-gray-300 from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                                type="submit"

                            >LOG IN</button>
                        </form>




                        <div className="flex flex-col mt-4 items-center justify-center text-sm">
                            <h3 className="dark:text-gray-300">Do not have an account?
                                <Link to="/register" className="group text-blue-400 transition-all duration-100 ease-in-out" href="#">
                                    <span className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"> Sign Up</span>
                                </Link>
                            </h3>
                        </div>


                        {/*Third Party Authentication Options*/}
                        <div className="flex items-center justify-center mt-5 flex-wrap">
                            <button className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1">
                                <img className="max-w-[25px]" src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/" alt="Google"/>
                            </button>
                        </div>

                        <div className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm">
                            <p className="cursor-default">By signing in, you agree to our
                                <a className="group text-blue-400 transition-all duration-100 ease-in-out" href="#"><span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"> Terms </span></a>and <a className="group text-blue-400 transition-all duration-100 ease-in-out" href="#"><span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Privacy Policy</span>
                                </a>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;