import React from "react";

import {
    formatNumber
} from "../../utils/format-rupiah";

function CheckoutItems({
    data
}) {
    return ( <
        >
        <
        div className = "font-semibold mb-3" > Your Orders < /div> {
            data ? .map((item) => {
                return ( <
                    div className = "flex flex-row justify-between mb-3 text-sm lg:text-sm" >
                    <
                    div className = "flex flex-row" >
                    <
                    img className = "h-14 md:h-14 lg:h-24 rounded object-cover"
                    src = {
                        item ? .image
                    }
                    alt = "" /
                    >
                    <
                    div className = "flex flex-col pl-3" >
                    <
                    div className = "" > {
                        item.name
                    } < /div> <
                    div className = "font-semibold" > {
                        item ? .qty
                    }
                    X {
                        formatNumber(item ? .price)
                    } {
                        " "
                    } <
                    /div> <
                    /div> <
                    /div> <
                    div className = "" >
                    <
                    div className = "font-semibold" > Subtotal < /div> <
                    div > {
                        `${formatNumber(item?.qty * item?.price)}`
                    } < /div> <
                    /div> <
                    /div>
                );
            })
        } <
        />
    );
}

export default CheckoutItems;