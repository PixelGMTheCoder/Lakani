import React from "react";
import {
    formatNumber
} from "../../utils/format-rupiah";
import {
    BsStarFill
} from "react-icons/bs";

function index({
    data,
    onClick
}) {
    return ( <
        div onClick = {
            onClick
        }
        className = "bg-gray-100 text-xs shadow lg:text-sm flex-none hover:shadow-lg cursor-pointer lg:w-1/5 w-1/2 rounded mr-8" >
        <
        img className = "w-full rounded-t h-32 xl:h-[10rem] object-cover object-center"
        src = {
            data ? .image
        }
        alt = "" /
        >
        <
        div className = "flex flex-col px-3 py-3 text-gray-800 capitalize" >
        <
        div className = "w-full h-8 mb-1 lg:mb-1" > {
            data ? .name
        } < /div> <
        div className = "text-xs" > Creator: {
            data ? .creator
        } < /div> <
        div className = "text-xs font-semibold" > Level {
            data ? .level
        } < /div> <
        div className = "font-semibold py-2" > {
            formatNumber(data ? .price)
        } < /div> <
        div className = "flex flex-row items-center pt-1 text-gray-500 text-xs" >
        <
        BsStarFill className = "text-base text-yellow-400 pr-1" / >
        <
        div > 4.9(1 k) < /div> <
        /div> <
        /div> <
        /div>
    );
}

export default index;