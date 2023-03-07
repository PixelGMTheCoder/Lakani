import {
    formatNumber
} from "../../utils/format-rupiah";
import {
    BsStarFill
} from "react-icons/bs";

function ProductItem({
    data,
    onClick
}) {
    return ( <
        div onClick = {
            onClick
        }
        className = "bg-white text-xs shadow lg:text-sm flex flex-col hover:shadow-lg cursor-pointer rounded" >
        <
        img className = "w-full rounded-t h-28 xl:h-[10rem] object-cover object-top"
        src = {
            data ? .image
        }
        alt = "" /
        >
        <
        div className = "flex flex-col px-3 py-3 text-gray-800 capitalize" >
        <
        div className = "w-full h-8 mb-1 lg:mb-3" > {
            data ? .name
        } < /div> <
        div className = "text-xs" > {
            `${
          data?.size ? `Size: ${data?.size}` : "Size: - "
        }`
        } < /div> <
        div className = "font-semibold" > {
            formatNumber(data ? .price)
        } < /div> <
        div className = "flex flex-row items-center pt-1 text-gray-500 text-xs" >
        <
        BsStarFill className = "text-base text-yellow-400 pr-1" / >
        <
        div > 4.9 | Terjual 1 rb + < /div> <
        /div> <
        /div> <
        /div>
    );
}

export default ProductItem;