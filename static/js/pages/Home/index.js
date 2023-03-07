import {
    Navbar,
    ProductItem,
    Footer
} from "../../components";
import Banner0 from "../../assets/images/BANNER 0.jpg";
import Banner2 from "../../assets/images/BANNER 2.jpg";
import Banner3 from "../../assets/images/BANNER 3.jpg";
import Banner4 from "../../assets/images/BANNER4.jpg";

import {
    useNavigate
} from "react-router-dom";
import {
    products,
    spericalProducts,
    products3,
    womanProducts,
} from "../../data/products";

import {
    BsCameraFill
} from "react-icons/bs";

function Home() {
    let navigate = useNavigate();
    return ( <
        div className = "bg-white" >
        <
        Navbar showSearchBar / >
        <
        div className = "container mx-auto px-3 lg:px-32 mt-4 text-gray-800" >
        <
        img src = {
            Banner0
        }
        alt = "banner"
        className = "w-full  object-cover mb-5" / >
        <
        div className = " flex flex-row justify-between text-sm lg:text-lg font-semibold" >
        <
        div > Products < /div> <
        div onClick = {
            () => navigate(`/products`)
        }
        className = "cursor-pointer text-merah-100" >
        Lihat semua <
        /div> <
        /div> <
        div className = "mt-4" >
        <
        div className = "grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4" > {
            products.slice(0, 10).map((item, index) => {
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
        div className = "flex flex-row justify-between text-sm lg:text-lg font-semibold mt-12 mb-4" >
        <
        div > Promo < /div> <
        /div> {
            /* <img
                      src={PromoBanner}
                      alt="banner2"
                      className="shadow-lg w-full  object-cover mb-12"
                    /> */
        } {
            /* <div className="flex flex-row justify-between text-sm lg:text-lg font-semibold mb-4">
                      <div></div>
                      <div
                        onClick={() => navigate(`/products`)}
                        className="cursor-pointer text-merah-100"
                      >
                        Lihat semua
                      </div>
                    </div> */
        } {
            /* <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6  mb-12 gap-4">
                      {Products2.slice(0, 6).map((item, index) => {
                        return (
                          <ProductItem
                            key={index}
                            data={item}
                            onClick={() => navigate(`/detail-product/${item?.name}`)}
                          />
                        );
                      })}
                    </div> */
        } <
        img src = {
            Banner2
        }
        alt = "banner3"
        className = "w-full  object-cover mb-12" /
        >
        <
        div className = "flex flex-row justify-between text-sm lg:text-lg font-semibold mb-4" >
        <
        div > < /div> <
        div onClick = {
            () => navigate(`/products`)
        }
        className = "cursor-pointer text-merah-100" >
        Lihat semua <
        /div> <
        /div> <
        div className = "grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6  mb-12 gap-4" > {
            products3.slice(0, 6).map((item, index) => {
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
        img src = {
            Banner4
        }
        alt = "banner5"
        className = "w-full  object-cover mb-12" /
        >
        <
        div className = "flex flex-row justify-between text-sm lg:text-lg font-semibold mb-4" >
        <
        div > < /div> <
        div onClick = {
            () => navigate(`/products`)
        }
        className = "cursor-pointer text-merah-100" >
        Lihat semua <
        /div> <
        /div> <
        div className = "grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5  mb-12 gap-4" > {
            womanProducts.map((item, index) => {
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
        img src = {
            Banner3
        }
        alt = "banner4"
        className = "w-full  object-cover mb-12" /
        >

        <
        div className = "flex flex-row justify-between text-sm lg:text-lg font-semibold mb-4" >
        <
        div > Special Offers < /div> <
        div onClick = {
            () => navigate(`/products`)
        }
        className = "cursor-pointer text-merah-100" >
        Lihat semua <
        /div> <
        /div> <
        div className = "grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5  mb-40 gap-4" > {
            spericalProducts.slice(0, 5).map((item, index) => {
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
        /div>
    );
}

export default Home;