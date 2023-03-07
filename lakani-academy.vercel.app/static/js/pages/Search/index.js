import {
    useState
} from "react";
import {
    Navbar,
    ProductItem,
    Footer
} from "../../components";
import {
    useParams,
    useNavigate
} from "react-router-dom";
import {
    products
} from "../../data/products";

function SearchResult() {
    const params = useParams();
    const navigate = useNavigate();

    const tempProduct = products.filter((product) => {
        const regex = new RegExp(params.keyword, "gi");
        return product.name.match(regex);
    });

    const [keyword, setKeyword] = useState(params.keyword || []);
    const [filterProducts, setFilterProducts] = useState(tempProduct || []);

    //   console.log(searchParams);
    const onFilterProduct = (keyword) => {
        const tempProduct = products.filter((product) => {
            const regex = new RegExp(keyword, "gi");
            return product.name.match(regex);
        });

        setFilterProducts(tempProduct);
    };

    const onSortProduct = (sortByPrice) => {
        let temp = [...filterProducts];
        if (sortByPrice === "lowest") {
            temp = temp.sort((min, max) => {
                return min.price - max.price;
            });

            setFilterProducts(temp);
        }

        if (sortByPrice === "highest") {
            temp = temp.sort((min, max) => {
                return max.price - min.price;
            });
            setFilterProducts(temp);
        }
    };

    return ( <
        >
        <
        Navbar / >
        <
        div className = "min-h-screen container mx-auto px-3 lg:px-32 mt-12" >
        <
        div className = "flex flex-col text-xs lg:text-sm" >
        <
        label className = "font-semibold pb-2"
        htmlFor = "keyword" >
        Search Product <
        /label> <
        input className = "w-full  py-2 px-2 rounded border mb-4"
        type = "text"
        id = "keyword"
        placeholder = "Search By Keyword"
        value = {
            keyword
        }
        onChange = {
            (e) => {
                setKeyword(e.target.value);
                onFilterProduct(e.target.value);
            }
        }
        /> <
        /div>

        <
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
        <
        option value = "all" > All < /option> <
        option value = "highest" > Higest Price < /option> <
        option value = "lowest" > Lowest < /option> <
        /select> <
        /div>

        {
            filterProducts ? .length < 1 && ( <
                div className = "text-center text-sm" > Product not found... < /div>
            )
        } <
        div className = "mb-40 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4" > {
            filterProducts ? .map((item, index) => {
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
        />
    );
}

export default SearchResult;