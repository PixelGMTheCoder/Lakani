import {
    useState
} from "react";
import {
    Link,
    useNavigate,
    NavLink
} from "react-router-dom";
import {
    BsCartPlus,
    BsList
} from "react-icons/bs";
// import { products } from "../../data/products";

function Navbar({
    showSearchBar
}) {
    const active = ({
            isActive
        }) =>
        isActive ? "text-cyan-50 font-semibold" : "";

    const [toggleBtnMenu, setToggleBtnMenu] = useState(false);
    const [ShowDropdown, setShowDropdown] = useState(false);
    return ( <
        >
        <
        div className = "w-full bg-merah-100" >
        <
        div className = " container mx-auto px-3 lg:px-32 py-4 " >
        <
        div className = "flex flex-row justify-between items-center" >
        <
        nav >
        <
        ul className = "text-xs xl:text-sm flex items-center text-white" >
        <
        Link to = "/home" >
        <
        span className = "text-base lg:text-2xl font-bold mr-1 lg:mr-4" >
        LAKANI <
        /span> <
        /Link> <
        li className = "hidden lg:block mr-3 xl:mr-4" >
        <
        NavLink className = {
            active
        }
        to = "/courses" >
        Courses <
        /NavLink> <
        /li> <
        li className = "hidden lg:block mr-3 xl:mr-4" >
        <
        NavLink className = {
            active
        }
        to = "/products" >
        Products <
        /NavLink> <
        /li>{" "} <
        li className = "hidden lg:block mr-3 xl:mr-4" >
        <
        NavLink className = {
            active
        }
        to = "/virtual-fashion" >
        Virtual Fashion Fitting <
        /NavLink> <
        /li> <
        li className = "hidden lg:block mr-3 xl:mr-4" >
        <
        NavLink className = {
            active
        }
        to = "/future-leader" >
        Future Leaders <
        /NavLink> <
        /li> <
        /ul> <
        /nav> {
            /* <div className="block lg:hidden w-full">
                          {showSearchBar && <Search isResponsive={true} />}
                        </div> */
        } <
        div className = "w-full px-3 lg:w-1/2" > {
            showSearchBar && < Search isResponsive = {
                true
            }
            />} <
            /div> <
            div className = "hidden lg:flex flex-row justify-end items-center text-white text-xs xl:text-sm" >
            <
            NavLink className = "flex flex-row items-center"
            to = "/checkout" >
            <
            BsCartPlus className = "text-white text-xl" / >
            (4) <
            /NavLink> <
            div className = "pl-3 relative" >
            <
            div
            onClick = {
                () => setShowDropdown(!ShowDropdown)
            }
            className = "cursor-pointer text-2xl" >
            <
            BsList / >
            <
            /div> <
            div
            className = {
                `${
                    ShowDropdown === true ? "flex" : "hidden"
                  } absolute shadow right-0 mt-4 w-40 px-1 bg-merah-100 rounded-b shadow-lg  flex-col items-end`
            } >
            <
            div className = "block py-3 px-4 hover:text-white-200" >
            <
            NavLink to = "/messages"
            className = {
                active
            } >
            Cs Help <
            /NavLink> <
            /div> <
            div className = "block py-3 px-4 hover:text-white-200" >
            <
            NavLink className = {
                active
            }
            to = "/about" >
            About <
            /NavLink> <
            /div> <
            div className = "block py-3 px-4 hover:text-white-200" >
            <
            NavLink className = {
                active
            }
            to = "/order" >
            Custom Order <
            /NavLink> <
            /div> <
            /div> <
            /div> <
            /div> { /* responsivce */ } <
            div className = "flex flex-row items-center lg:hidden text-xs" > { /* <div>aasas</div> */ } <
            Link
            className = " flex flex-row items-center text-sm text-white pr-2"
            to = "/checkout" >
            <
            BsCartPlus / >
            (4) <
            /Link> <
            BsList
            onClick = {
                () => setToggleBtnMenu(!toggleBtnMenu)
            }
            className = "cursor-pointer text-white text-2xl font-bold" /
            >
            <
            /div> <
            /div> { /* responsive */ } {
                toggleBtnMenu === true && ( <
                    div className = "lg:hidden flex flex-col text-xs text-white pt-2" >
                    <
                    div className = "flex flex-col text-sm" >
                    <
                    div className = "py-3" >
                    <
                    NavLink className = {
                        active
                    }
                    to = "/courses" >
                    Courses <
                    /NavLink> <
                    /div> <
                    div className = "pb-3" >
                    <
                    NavLink className = {
                        active
                    }
                    to = "/products" >
                    Products <
                    /NavLink> <
                    /div> <
                    div className = "pb-3" >
                    <
                    NavLink className = {
                        active
                    }
                    to = "/virtual-fashion" >
                    Virtual Fashion Fitting <
                    /NavLink> <
                    /div> <
                    div className = "pb-3" >
                    <
                    NavLink className = {
                        active
                    }
                    to = "/order" >
                    Custom Order <
                    /NavLink> <
                    /div> <
                    div className = "pb-3" >
                    <
                    NavLink className = {
                        active
                    }
                    to = "/future-leader" >
                    Future Leaders <
                    /NavLink> <
                    /div> <
                    div className = "pb-3" >
                    <
                    NavLink className = {
                        active
                    }
                    to = "/messages" >
                    Cs Help <
                    /NavLink> <
                    /div> <
                    div className = "pb-3" >
                    <
                    NavLink className = {
                        active
                    }
                    to = "/about" >
                    About <
                    /NavLink> <
                    /div>{" "} { /* <BsCashCoin className="text-sm ml-2 text-white" /> */ } <
                    /div> { /* {showSearchBar && <Search isResponsive={true} />}{" "} */ } <
                    /div>
                )
            } <
            /div> <
            /div> <
            />
        );
    }

    const Search = ({
        isResponsive
    }) => {
        // navigate
        const navigate = useNavigate();

        // const [filteredProduct, setFilteredProduct] = useState([]);
        const [text, setText] = useState("");
        // const [showResult, setShowResult] = useState(false);

        // const onFilterData = (name) => {
        //   const temproduct = products
        //     .filter((product) => {
        //       const regex = new RegExp(name, "gi");
        //       return product.name.match(regex);
        //     })
        //     .slice(0, 5);
        //   setFilteredProduct(temproduct);
        // };
        if (isResponsive) {
            return ( <
                div className = "justify-self-center w-full " >
                <
                input onChange = {
                    (e) => {
                        setText(e.target.value);
                        // onFilterData(text);
                        // setShowResult(true);
                    }
                }
                onKeyDown = {
                    (e) => {
                        if (e.key === "Enter") {
                            // onFilterData(text);
                            // setShowResult(true);
                            // console.log(e.key);
                            if (text === "") {
                                return;
                            }
                            navigate(`/search/${text}`);
                        }
                    }
                }
                className = "py-2 px-3 w-full rounded-lg border text-xs"
                type = "text"
                placeholder = "Search Product"
                value = {
                    text
                }
                /> <
                /div>
            );
        }
        return ( <
            >
            <
            div className = "hidden lg:block justify-self-center w-full  " >
            <
            input onChange = {
                (e) => {
                    setText(e.target.value);
                    // onFilterData(text);
                    // setShowResult(true);
                }
            }
            onKeyDown = {
                (e) => {
                    if (e.key === "Enter") {
                        // onFilterData(text);
                        // setShowResult(true);
                        // console.log(e.key);
                        if (text === "") {
                            return;
                        }
                        navigate(`/search/${text}`);
                    }
                }
            }
            className = "py-2 px-3 w-full rounded-lg border text-sm"
            type = "text"
            placeholder = "Search Product"
            value = {
                text
            }
            /> {
                /* <div
                          className={` ${showResult === false ? "hidden" : "block"}
                           h-80 overflow-y-auto absolute border w-full rounded pt-2 bg-white px-3 mt-2 text-xs`}
                        >
                          <div
                            onClick={() => setShowResult(false)}
                            className="cursor-pointer text-sm text-white font-semibold pb-1 text-right "
                          >
                            close
                          </div>
                          {filteredProduct.length < 1 && (
                            <div className="text-center text-sm">Product not found...</div>
                          )}
                          {filteredProduct?.map((item, index) => {
                            return (
                              <Link
                                key={index}
                                to={`/detail-product/${item?.name}`}
                                className="flex flex-row border px-1 py-1 rounded mb-2"
                              >
                                <img className="h-20" src={item?.image} alt="" srcset="" />
                                <div className="pl-3 flex flex-col">
                                  <div className="font-semibold">{item?.name}</div>
                                  <div>Size : {item?.size}</div>
                                  <div className="font-semibold">Rp.{item?.price}</div>
                                </div>
                              </Link>
                            );
                          })}
                        </div> */
            } <
            /div> <
            />
        );
    };

    export default Navbar;