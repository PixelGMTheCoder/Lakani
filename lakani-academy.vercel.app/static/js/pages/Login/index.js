import React from "react";
// import Alogo from "../../assets/Alogo.png";
import {
    useNavigate
} from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    return ( <
        div className = "min-h-screen w-full flex justify-center items-center bg-gray-100" >
        <
        div className = "p-10 xs:p-0 mx-auto md:w-full md:max-w-md -mt-8" >
        <
        div className = "flex flex-col items-center" > { /* <img src={Alogo} className="h-16" alt="apable-logo" /> */ } <
        h1 className = "font-bold text-center text-2xl mb-3 text-merah-100" >
        LAKANI <
        /h1> <
        /div> <
        div className = "bg-white shadow w-full rounded-lg divide-y divide-gray-200" >
        <
        div className = "px-5 py-7" >
        <
        form action = "" >
        <
        label className = "font-semibold text-sm text-gray-600 pb-1 block" >
        E - mail <
        /label> <
        input type = "email"
        className = "border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
        placeholder = "Your Email Address" /
        >
        <
        label className = "font-semibold text-sm text-gray-600 pb-1 block" >
        Password <
        /label> <
        input type = "password"
        className = "border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
        placeholder = "Password" /
        >
        <
        button onClick = {
            () => navigate("/home")
        }
        type = "button"
        className = "transition duration-200 bg-merah-100 hover:bg-merah-100 focus:bg-merah-100 focus:shadow-sm focus:ring-2 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block" >
        <
        span className = "inline-block mr-2" > Login As Seller < /span> <
        /button> <
        button onClick = {
            () => navigate("/home")
        }
        type = "button"
        className = "mt-3 transition duration-200 border-2  hover:shadow-lg focus:bg-gray-100 focus:shadow-sm focus:ring-2 focus:ring-opacity-50 text-merah-100 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block" >
        <
        span className = "inline-block mr-2" > Login As Buyer < /span> <
        svg xmlns = "http://www.w3.org/2000/svg"
        fill = "none"
        viewBox = "0 0 24 24"
        stroke = "currentColor"
        className = "w-4 h-4 inline-block" >
        <
        path strokeLinecap = "round"
        strokeLinejoin = "round"
        strokeWidth = "2"
        d = "M17 8l4 4m0 0l-4 4m4-4H3" /
        >
        <
        /svg> <
        /button> <
        /form> <
        /div> <
        div className = "py-5" >
        <
        div className = "grid grid-cols-2 gap-1" >
        <
        div className = "text-center sm:text-left whitespace-nowrap" >
        <
        button className = "transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        fill = "none"
        viewBox = "0 0 24 24"
        stroke = "currentColor"
        className = "w-4 h-4 inline-block align-text-top" >
        <
        path strokeLinecap = "round"
        strokeLinejoin = "round"
        strokeWidth = "2"
        d = "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" /
        >
        <
        /svg> <
        span className = "inline-block ml-1" > Forgot Password < /span> <
        /button> <
        /div> <
        div className = "text-center sm:text-right whitespace-nowrap" >
        <
        button onClick = {
            () => navigate("/messages")
        }
        className = "transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        fill = "none"
        viewBox = "0 0 24 24"
        stroke = "currentColor"
        className = "w-4 h-4 inline-block align-text-bottom	" >
        <
        path strokeLinecap = "round"
        strokeLinejoin = "round"
        strokeWidth = "2"
        d = "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /
        >
        <
        /svg> <
        span className = "inline-block ml-1" > Help < /span> <
        /button> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div>
    );
}

export default Login;