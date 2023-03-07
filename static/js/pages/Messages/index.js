import {
    useState
} from "react";
import {
    Link
} from "react-router-dom";
import {
    Navbar
} from "../../components";
import {
    BsArrowLeft,
    BsMicFill
} from "react-icons/bs";
const dataMessages = [];

function Messages() {
    const [messages, setMessages] = useState(dataMessages);
    const [text, setText] = useState("");
    const [showChats] = useState(false);
    return ( <
        >
        <
        Navbar showSearchBar / >
        <
        div className = "w-full mx-auto container px-3 lg:px-32 mt-12" >
        <
        div className = "flex flex row justify-between text-sm lg:text-xl pb-4 text-merah-100 font-semibold" >
        <
        Link to = "/"
        className = "flex flex-row items-center  " >
        <
        BsArrowLeft / >
        <
        div className = "pl-3" > Customer Service Help < /div> <
        /Link> {
            /* <div
                        className="block lg:hidden  cursor-pointer"
                        onClick={() => setShowChats(!showChats)}
                      >
                        Show Chats
                      </div> */
        } <
        /div> <
        div className = "w-full flex flex-col" >
        <
        div className = {
            ` ${
              showChats === true ? "hidden" : ""
            } lg:flex flex-col w-full border lg:ml-1 rounded`
        } >
        { /* header */ } <
        div className = "py-4 px-6 shadow flex flex-row text-xs" >
        <
        div className = "flex flex-col" >
        <
        div className = "font-semibold text-gray-700" >
        LakaniStore - Customer Service {
            " "
        } <
        span className = "pl-2 text-green-500" > (online) < /span> <
        /div> <
        div className = "text-gray-400 " > @LakaniCS < /div> <
        /div> <
        /div> { /* end header */ } { /* bubble chat */ } <
        div className = "h-80 lg:h-[28rem] flex flex-col mt-5 text-xs" >
        <
        div className = "flex justify-start mb-4" >
        <
        div className = "ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white" >
        Selamat Datang Di Lakani CS, ada yang bisa kami bantu ? < br / > {
            " "
        } { /* silahkan pilih salah satu menu dibawah */ } <
        /div> <
        /div>

        <
        div className = "flex justify-start mb-4" >
        <
        div className = "flex flex-col" > < /div> <
        /div> {
            messages.map((item, index) => {
                return ( <
                    > {
                        item.type === "left" ? ( <
                            div key = {
                                index
                            }
                            className = "flex justify-start mb-4" >
                            <
                            div className = "ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white" > {
                                item.messages
                            } <
                            /div> <
                            /div>
                        ) : ( <
                            div key = {
                                index
                            }
                            className = "flex justify-end mb-4" >
                            <
                            div className = "mr-2 py-3 px-4 bg-sky-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white" > {
                                item.messages
                            } <
                            /div> <
                            /div>
                        )
                    } <
                    />
                );
            })
        } <
        /div> { /* end bubble chat */ } <
        /div> <
        /div> <
        div className = {
            ` ${
            showChats === true ? "hidden" : ""
          } lg:flex w-full flex flex-row`
        } >
        { /* <div className="lg:w-80 flex flex-col py-3 rounded"></div> */ } <
        div className = "w-full lg:ml-1 rounded text-xs my-2" >
        <
        div className = "flex flex-row mb-12" >
        <
        input onChange = {
            (e) => setText(e.target.value)
        }
        className = "w-full bg-gray-100 py-5 px-3 rounded"
        type = "text"
        value = {
            text
        }
        placeholder = "type your message here..." /
        >
        <
        button onClick = {
            () => {
                if (!text.length) {
                    return;
                }
                const data = {
                    type: "right",
                    messages: text,
                };
                setMessages((prevState) => [...prevState, data]);
                setText("");
            }
        }
        className = "py-5 px-3 bg-merah-100 rounded text-white" >
        Send <
        /button> <
        /div> <
        /div> <
        /div> <
        /div> <
        div className = "fixed bottom-0 right-0 m-3 lg:m-16" >
        <
        div
        // onClick={() => navigate(`/messages`)}
        className = "cursor-pointer py-3 px-3 bg-white shadow-lg border rounded-lg text-merah-100 text-2xl" >
        <
        BsMicFill / >
        <
        /div> <
        /div> <
        />
    );
}

export default Messages;