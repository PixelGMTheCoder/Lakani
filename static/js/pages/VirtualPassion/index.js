import React, {
    useState
} from "react";
import {
    Footer,
    Navbar
} from "../../components";
import model1 from "../../assets/images/model/1.jpeg";
import model2 from "../../assets/images/model/2.jpeg";
import model3 from "../../assets/images/model/3.jpeg";
import model4 from "../../assets/images/model/4.jpeg";
import model5 from "../../assets/images/model/5.jpeg";
import model6 from "../../assets/images/model/6.jpeg";
import {
    BsArrowLeft,
    BsFillCameraFill
} from "react-icons/bs";
import {
    Link
} from "react-router-dom";

export default function VirtualPassion() {
    const models = [model1, model2, model3, model4, model5, model6];
    const [activeImage, setActiveImage] = useState(models[0]);
    return ( <
        >
        <
        Navbar showSearchBar / >

        <
        div className = "container mx-auto px-3 lg:px-32 mt-10" >
        <
        div className = "flex flex row justify-between text-sm lg:text-xl pb-4 text-merah-100 font-semibold" >
        <
        Link to = "/home"
        className = "flex flex-row items-center  " >
        <
        BsArrowLeft / >
        <
        div className = "pl-3" > Virtual Fashion Fitting < /div> <
        /Link> <
        /div> <
        /div> <
        div className = "flex flex-col w-full justify-center items-center mt-4 px-3" >
        <
        div className = "grid grid-cols-3 gap-4" >
        <
        div className = " h-1/2 overflow-y-auto flex flex-col bg-gray-100 p-4" > {
            models ? .map((item, index) => {
                return ( <
                    >
                    <
                    img alt = {
                        `active ${index}`
                    }
                    src = {
                        item
                    }
                    onClick = {
                        () => setActiveImage(item)
                    }
                    className = {
                        `cursor-pointer ${
                      item === activeImage ? "border-2 border-amber-300" : ""
                    } h-48 rounded-md object-cover`
                    }
                    /> <
                    div className = "text-md" > Baju({
                        index + 1
                    }) < /div> <
                    div className = "pb-3 text-md" > Rp. {
                        10000 * (index + 1)
                    } < /div> <
                    />
                );
            })
        } <
        /div> <
        div class = "col-span-2 rounded-md" >
        <
        img alt = "active"
        className = "h-1/2 rounded-md object-cover"
        src = {
            activeImage
        }
        /> <
        /div> <
        /div> <
        /div>

        <
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