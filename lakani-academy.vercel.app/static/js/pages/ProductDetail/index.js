import {
    useState,
    useEffect
} from "react";
import {
    Navbar,
    ProductItem,
    Footer
} from "../../components";
import {
    useParams,
    Link,
    useNavigate
} from "react-router-dom";
import {
    products
} from "../../data/products";
import {
    formatNumber
} from "../../utils/format-rupiah";
import {
    BsFillCameraFill
} from "react-icons/bs";

const sizes = ["S", "M", "L", "XL"];

function ProductDetail() {
    const [detailItem, setDetailItem] = useState({});
    const [amountItem, setAmountItem] = useState(1);
    let navigate = useNavigate();
    const params = useParams();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        scrollToTop();
    }, []);

    useEffect(() => {
        if (params) {
            const product = products.find((item) => item.name === params.id);
            if (product) {
                setDetailItem(product);
            }
            return;
        }
        return;
    }, [params]);
    return ( <
        >
        <
        Navbar showSearchBar / >
        <
        div className = "min-h-screen container mx-auto px-3 lg:px-32 mt-4" >
        <
        div className = "flex flex-col lg:flex-row jusitfy-between mt-12" >
        <
        div className = "w-full flex flex-row text-xs lg:text-sm" >
        <
        img src = {
            detailItem ? .image
        }
        alt = {
            `cover ${detailItem?.name}`
        }
        className = "h-40 lg:h-80 oject-cover object-top" /
        >
        <
        div className = "mx-5" >
        <
        div className = "text-sm xl:text-xl font-semibold capitalize " > {
            `${detailItem?.name} - ${detailItem?.color} - ${detailItem?.size}`
        } <
        /div> <
        div className = "text-sm pt-2" > Terjual 500 + , Ratings 4.5 < /div> <
        div className = "pt-2 " > Color: {
            detailItem ? .color
        } < /div> <
        div className = "pt-2" > {
            detailItem ? .size && ( <
                >
                <
                div > Sizes: < /div> <
                div className = "flex flex-row" > {
                    sizes.map((item, index) => {
                        return ( <
                            div key = {
                                index
                            }
                            className = {
                                `${
                              detailItem?.size === item
                                ? "bg-merah-100 text-gray-100"
                                : "bg-gray-300 text-gray-800"
                            } py-1 px-2 lg:px-3 lg:py-2 rounded   mr-1`
                            } >
                            {
                                item
                            } <
                            /div>
                        );
                    })
                } <
                /div> <
                />
            )
        } <
        /div>

        <
        div className = "text-md lg:text-xl font-bold pt-4 mb-4" > {
            formatNumber(detailItem ? .price)
        } <
        /div> <
        div className = "text-xs lg:text-sm" > Description: < /div> <
        div className = "text-xs lg:text-sm  text-justify" > {
            detailItem ? .desc ? detailItem ? .desc : "-"
        } <
        /div> <
        /div> <
        /div> <
        div className = "mt-4 lg:mt-0 w-full lg:w-1/3 flex flex-col px-3 py-4 shadow-lg rounded-lg border text-xs lg:text-sm" >
        <
        div className = "flex flex-row justify-between items-center" >
        <
        div className = "text-sm font-semibold" > Set Amount Item < /div> <
        /div> <
        div className = "flex flex-col py-4" >
        <
        input onChange = {
            (e) => setAmountItem(e.target.value)
        }
        type = "number"
        defaultValue = {
            amountItem
        }
        className = "py-3 border rounded-lg px-3" /
        >
        <
        /div> <
        div className = "flex items-center flex-row justify-between" >
        <
        div className = "text-gray-500" > Subtotal < /div> <
        div className = "text-sm lg:text-base font-bold" > {
            `${formatNumber(amountItem * parseFloat(detailItem?.price))}`
        } <
        /div> <
        /div> <
        button className = "py-3 px-3 bg-merah-100 rounded-lg text-white my-3" >
        Add To Cart <
        /button> <
        button onClick = {
            () => navigate(`/checkout`)
        }
        className = "py-3 px-3 bg-gray-50 rounded-lg text-merah-100 border border-sky-500" >
        Checkout <
        /button> <
        /div> <
        /div> { /*  */ } <
        div className = "flex flex-row justify-between mt-12" >
        <
        div > Recomendation Products < /div> <
        Link className = "font-semibold text-merah-100"
        to = "/products" >
        See More <
        /Link> <
        /div> <
        div className = "mt-4" >
        <
        div className = "grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5  gap-4  mb-12" > {
            products
            .filter((item) => item ? .name !== params ? .id)
            .slice(0, 5)
            .map((item, index) => {
                return ( <
                    ProductItem key = {
                        index
                    }
                    data = {
                        item
                    }
                    onClick = {
                        () => navigate(`/detail-product/${item?.name}`)
                    }
                    />
                );
            })
        } <
        /div> <
        /div> <
        /div> <
        Footer / >
        <
        div className = "fixed bottom-0 right-0 m-3 lg:m-16" >
        <
        div
        // onClick={() => navigate(`/messages`)}
        className = "cursor-pointer py-3 px-3 bg-white shadow-lg border rounded-lg text-merah-100 text-2xl" >
        <
        BsFillCameraFill / >
        <
        /div> <
        /div> <
        />
    );
}

export default ProductDetail;