import {
    Navbar
} from "../../components/";
import {
    Link
} from "react-router-dom";
import {
    BsArrowLeft,
    BsFillCameraFill
} from "react-icons/bs";

function CashReader() {
    return ( <
        >
        <
        Navbar showSearchBar / >
        <
        div className = "container mx-auto px-3 lg:px-32 mt-4" >
        <
        div className = "flex flex row justify-between text-sm lg:text-xl pb-4 text-merah-100 font-semibold" >
        <
        Link to = "/home"
        className = "flex flex-row items-center  " >
        <
        BsArrowLeft / >
        <
        div className = "pl-3" > Cash Reader < /div> <
        /Link> <
        /div> <
        div className = "flex flex-col w-full justify-center items-center mt-5" >
        <
        div className = "w-full lg:w-1/2 h-80 border py-36 flex justify-center items-center rounded-xl" >
        <
        div className = "cursor-pointer py-6 px-4 border items-center rounded-xl flex flex-col text-sm text-gray-500" >
        <
        BsFillCameraFill className = "text-lg" / >
        <
        div className = " " >
        <
        div > Scan Your Money Here < /div> <
        /div> <
        /div> <
        /div> <
        div className = "w-full lg:w-1/2 text-right pt-3 font-semibold text-gray-500" >
        Result Scan Rp 10.000 <
        /div> <
        div className = "cursor-pointer mt-4 py-4 px-2 border w-full lg:w-1/2 text-center rounded-xl bg-merah-100 text-white m" >
        Scan Money <
        /div> <
        /div> <
        /div> <
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

export default CashReader;