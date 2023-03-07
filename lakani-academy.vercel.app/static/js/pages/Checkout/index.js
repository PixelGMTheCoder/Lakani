import React from "react";
import {
    Link
} from "react-router-dom";
import {
    Navbar,
    Input,
    Footer
} from "../../components";
import {
    BsArrowLeft
} from "react-icons/bs";
import CheckoutItems from "./CheckoutItems";
import {
    orders
} from "../../data/orders";
import {
    formatNumber
} from "../../utils/format-rupiah";
import sumprice from "../../utils/sum-price";

function Checkout() {
    return ( <
        >
        <
        Navbar / >
        <
        div className = " w-full container mx-auto px-3 lg:px-32 mt-5 lg:mt-12" >
        <
        Link to = "/home"
        className = "flex flex-row text-sm lg:text-xl items-center font-semibold text-merah-100" >
        <
        BsArrowLeft / >
        <
        div className = "pl-3" > Checkout < /div> <
        /Link> <
        div className = "text-sm lg:text-base lg:mt-5 w-full flex flex-col-reverse lg:flex-row py-4 mb-40" >
        <
        div className = "w-full lg:px-3 py-4 rounded-lg flex flex-col" >
        <
        div className = "font-semibold" > Shipping Address < /div> <
        div className = "pb-1" > Chiara < /div> <
        div className = "pb-1" > 0819 - 0848 - 7549 < /div> <
        div className = "pb-1 " >
        Jalan Jend.Sudirman No .53, RT .5 / RW .3, Senayan, Kec.Kby.Baru,
        Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190,
        Indonesia <
        /div> { /* payment */ } <
        div className = "mt-5 font-semibold" > Payment Details < /div> <
        Input title = "Email"
        name = "email"
        type = "email"
        placeholder = "Your Email"
        defaultValue = "Chiara@gmail.com" /
        >
        <
        Input title = "Card Holder"
        name = "card-number"
        type = "text"
        placeholder = "Card Number"
        defaultValue = "3452-1284-6871-583" /
        >
        <
        Input name = "ccv-number"
        type = "text"
        placeholder = "CCV"
        defaultValue = "" /
        >
        <
        Input name = "date-number"
        type = "date"
        placeholder = "Dates"
        defaultValue = "" /
        >

        <
        div className = "font-semibold mt-5 text-lg" > Total < /div> <
        div className = "flex flex-row justify-between " >
        <
        div > Subtotal < /div> <
        div > {
            `${formatNumber(sumprice(orders))}`
        } < /div> <
        /div> <
        div className = "flex flex-row justify-between " >
        <
        div > Tax < /div> <
        div > Rp .10 .000 < /div> <
        /div> <
        button className = " rounded-lg mt-4 bg-merah-100  text-white px-2 py-3 mb-24" >
        Complete Payment <
        /button> <
        /div> <
        div className = "flex flex-col w-full lg:w-3/4 lg:px-3 lg:ml-3  rounded py-3 " >
        <
        CheckoutItems data = {
            orders
        }
        /> <
        /div> <
        /div> <
        /div> <
        div className = "mt-24" >
        <
        Footer / >
        <
        /div> <
        />
    );
}

export default Checkout;