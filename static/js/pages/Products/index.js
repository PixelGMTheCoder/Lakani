import {
    useState,
    useEffect
} from "react";
import {
    Navbar,
    ProductItem,
    Footer
} from "../../components/";
import Banner from "../../assets/images/BANNER 2.jpg";
import {
    products
} from "../../data/products";
import {
    useNavigate
} from "react-router-dom";
import {
    BsCameraFill,
    BsArrowRight
} from "react-icons/bs";

function Products() {
    const [productItems, setProductItems] = useState(products || []);
    let navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        scrollToTop();
    }, []);

    const onSortProduct = (sortByPrice) => {
        let tempProduct = [...productItems];
        if (sortByPrice === "lowest") {
            tempProduct = tempProduct.sort((min, max) => {
                return min.price - max.price;
            });
            setProductItems(tempProduct);
        }

        if (sortByPrice === "highest") {
            tempProduct = tempProduct.sort((min, max) => {
                return max.price - min.price;
            });
            setProductItems(tempProduct);
        }
    };

    return ( <
        >
        <
        Navbar showSearchBar / >
        <
        div className = "min-h-screen container mx-auto px-3 lg:px-32 mt-5" > { /* <div className="font-semibold text-xl mb-3">Filter</div> */ } <
        div className = "flex flex-col lg:flex-row jusify-between" >
        <
        div className = "" >
        <
        div className = "w-full mb-5 " >
        <
        img src = {
            Banner
        }
        alt = "banner"
        className = "w-full object-cover" / >
        <
        /div> <
        div className = "text-xs lg:text-sm flex flex-row justify-end items-center mb-3 font-semibold" >
        <
        div className = "px-3" > Sort: < /div> <
        select onChange = {
            ({
                target
            }) => onSortProduct(target.value)
        }
        className = "py-2 px-3 border rounded-lg"
        name = "price"
        id = "" >
        { /* <option value="all">All</option> */ } <
        option value = "highest" > Higest Price < /option> <
        option value = "lowest" > Lowest < /option> <
        /select> <
        /div> <
        div className = " grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 " > {
            productItems ? .map((item, index) => {
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
        div className = "flex flex row justify-end my-8" >
        <
        div className = "text-white bg-merah-100 py-3 px-4 rounded cursor-pointer" >
        <
        BsArrowRight className = "text-xl" / >
        <
        /div> <
        /div> <
        /div> <
        /div> <
        div className = "w-full mb-40 " > < /div> <
        /div> <
        Footer / >
        <
        div className = "fixed bottom-0 right-0 m-3 lg:m-16" >
        <
        div
        // onClick={() => navigate(`/messages`)}
        className = "cursor-pointer py-3 px-3 bg-white shadow-lg border rounded-lg text-merah-100 text-2xl" >
        <
        BsCameraFill / >
        <
        /div> <
        /div> <
        />
    );
}

export default Products;