import React, {
    useState
} from "react";
import {
    BsArrowLeft
} from "react-icons/bs";
import {
    Link
} from "react-router-dom";
import {
    Footer,
    Input,
    Navbar
} from "../../components";
import measurementImg from "../../assets/images/measurement.jpg";
import Select from "react-select";
import option1 from "../../assets/images/option1.jpg";
import option2 from "../../assets/images/option2.jpg";
import option4 from "../../assets/images/option4.jpg";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import {
    useCallback
} from "react";

function OrderForm() {
    const types = ["Kemeja", "Set", "Kebaya", "Bridesmain", "Seragam"];
    const times = ["10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"];
    const options = [{
            value: "Kain_batik",
            label: "Kain batik ",
            price: "Rp.150.000/meter",
            image: option1,
        },
        {
            value: "Kain_sutra",
            label: "Kain sutra premium ",
            price: "Rp.250.000/meter",
            image: option2,
        },
        {
            value: "Kain_katun",
            label: "Kain katun standar ",
            price: "Rp.80.000/meter",
            image: option4,
        },
    ];
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(null);

    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        phone_number: "+62",
        email: "",
        dateUsed: "",
        type: "",
        t_badan: "",
        b_badan: "",
        l_dada: "",
        pinggang: "",
        pinggul: "",
        p_lengan: "",
        bahu: "",
        rok: "",
        address_1: "",
        address_2: "",
        city: "",
        province: "",
        postal: "",
        jenis_bahan: "",
    });

    const handleSetForm = useCallback(
        (field, value) => {
            setForm({ ...form,
                [field]: value
            });
        }, [form]
    );

    const clearForm = () => {
        setForm({
            first_name: "",
            last_name: "",
            phone_number: "+62",
            email: "",
            dateUsed: "",
            type: "",
            t_badan: "",
            b_badan: "",
            l_dada: "",
            pinggang: "",
            pinggul: "",
            p_lengan: "",
            bahu: "",
            rok: "",
            address_1: "",
            address_2: "",
            city: "",
            province: "",
            postal: "",
        });
    };

    const orderForm = () => {
        return ( <
            div >
            <
            div className = "w-full lg:px-3 py-4 rounded-lg flex flex-col" >
            <
            div className = "flex flex-col lg:flex-row" >
            <
            div className = "flex flex-col lg:w-full" >
            <
            Input title = "First Name"
            name = "first_name"
            type = "text"
            value = {
                form.first_name
            }
            onChange = {
                (e) => handleSetForm("first_name", e.target.value)
            }
            placeholder = "Your First Name" /
            >
            <
            /div>

            <
            div className = "lg:ml-4 flex flex-col lg:w-full" >
            <
            Input title = "Last Name"
            value = {
                form.last_name
            }
            onChange = {
                (e) => handleSetForm("last_name", e.target.value)
            }
            type = "text"
            placeholder = "Your Last Name" /
            >
            <
            /div> <
            /div>

            <
            Input title = "Phone Number"
            name = "phone_number"
            type = "text"
            value = {
                form.phone_number
            }
            onChange = {
                (e) => handleSetForm("phone_number", e.target.value)
            }
            placeholder = "Phone number" /
            >
            <
            Input title = "Contact Email"
            name = "email"
            type = "email"
            value = {
                form.email
            }
            onChange = {
                (e) => handleSetForm("email", e.target.value)
            }
            placeholder = "Your Email" /
            >
            <
            div className = "w-full lg:w-1/2 mt-8" >
            <
            Input title = "Upload Model Baju yang akan kamu buat"
            name = "file"
            type = "file" /
            >
            <
            /div> <
            div className = "w-full lg:w-1/2 mt-8 flex justify-between" >
            <
            Input title = "Tanggal Baju akan digunakan"
            value = {
                form.dateUsed
            }
            onChange = {
                (e) => handleSetForm("dateUsed", e.target.value)
            }
            name = "fate"
            type = "date" /
            >
            <
            /div> <
            div className = "w-full lg:w-1/2 mt-4 flex justify-between" >
            <
            p > Type Baju < /p>

            <
            div className = "flex flex-col" > {
                types.map((item, index) => ( <
                    div key = {
                        index
                    } >
                    <
                    input type = "checkbox"
                    id = {
                        item
                    }
                    name = {
                        item
                    }
                    onChange = {
                        (e) => handleSetForm("type", e.target.value)
                    }
                    value = {
                        item
                    }
                    /> <
                    label className = "pl-2"
                    htmlFor = {
                        item
                    } > {
                        item
                    } <
                    /label> <
                    /div>
                ))
            } <
            /div> <
            /div> <
            div className = "w-full lg:w-1/2 mt-8 flex flex-col" >
            <
            div className = "font-semibold" > Jenis Bahan < /div> <
            Select value = {
                form ? .jenis_bahan
            }
            onChange = {
                (e) => handleSetForm("jenis_bahan", e)
            }
            options = {
                options
            }
            formatOptionLabel = {
                (item) => ( <
                    div className = "flex" >
                    <
                    img src = {
                        item ? .image
                    }
                    alt = {
                        item ? .label
                    }
                    className = "w-[150px] h-[150px] rounded-lg mr-4 object-cover bg-gray-200" /
                    >
                    <
                    div className = "flex flex-col" >
                    <
                    div > {
                        item ? .label
                    } < /div> <
                    div > {
                        item ? .price
                    } < /div> <
                    /div> <
                    /div>
                )
            }
            /> <
            /div> <
            div >
            <
            img src = {
                measurementImg
            }
            alt = "measuremanet-rule"
            className = "rounded object-cover" /
            >
            <
            /div>

            <
            div className = "flex flex-col lg:flex-row mt-8" >
            <
            div className = "flex flex-col lg:w-1/4" >
            <
            Input title = "Tinggi Badan(cm)"
            name = "t-badan"
            type = "text"
            placeholder = "Tinggi badan(cm)"
            value = {
                form.t_badan
            }
            onChange = {
                (e) => handleSetForm("t_badan", e.target.value)
            }
            /> <
            /div>

            <
            div className = "lg:ml-4 flex flex-col lg:w-1/4" >
            <
            Input title = "Berat Badan(kg)"
            name = "b-badan"
            type = "text"
            placeholder = "Berat badan(kg)"
            value = {
                form.b_badan
            }
            onChange = {
                (e) => handleSetForm("b_badan", e.target.value)
            }
            /> <
            /div> <
            /div>

            <
            div className = "flex flex-col lg:flex-row mt-4" >
            <
            div className = "flex flex-col lg:w-1/4" >
            <
            Input title = "Lingkar Dada"
            name = "l-dada"
            type = "text"
            placeholder = "Lingkar Dada"
            value = {
                form.l_badan
            }
            onChange = {
                (e) => handleSetForm("l_badan", e.target.value)
            }
            /> <
            /div>

            <
            div className = "lg:ml-4 flex flex-col lg:w-1/4" >
            <
            Input title = "Pinggang"
            name = "pinggang"
            type = "text"
            placeholder = "pinggang"
            value = {
                form.pinggang
            }
            onChange = {
                (e) => handleSetForm("pinggang", e.target.value)
            }
            /> <
            /div> <
            /div>

            <
            div className = "flex flex-col lg:flex-row mt-4" >
            <
            div className = "flex flex-col lg:w-1/4" >
            <
            Input title = "Pinggul"
            type = "text"
            placeholder = "Pinggul"
            value = {
                form.pinggul
            }
            onChange = {
                (e) => handleSetForm("pinggul", e.target.value)
            }
            /> <
            /div> <
            div className = "lg:ml-4 flex flex-col lg:w-1/4" >
            <
            Input title = "Panjang Lengan"
            name = "p-lengan"
            type = "text"
            placeholder = "Panjang Lengan"
            value = {
                form.p_lengan
            }
            onChange = {
                (e) => handleSetForm("p_lengan", e.target.value)
            }
            /> <
            /div> <
            /div>

            <
            div className = "flex flex-col lg:flex-row mt-4" >
            <
            div className = "flex flex-col lg:w-1/4" >
            <
            Input title = "Bahu"
            name = "bahu"
            type = "text"
            placeholder = "Bahu"
            value = {
                form.bahu
            }
            onChange = {
                (e) => handleSetForm("bahu", e.target.value)
            }
            /> <
            /div> <
            div className = "lg:ml-4 flex flex-col lg:w-1/4" >
            <
            Input title = "Panjang Rok"
            name = "p-rok"
            type = "text"
            placeholder = "Panjang Rok"
            value = {
                form.rok
            }
            onChange = {
                (e) => handleSetForm("rok", e.target.value)
            }
            /> <
            /div> <
            /div> <
            div className = "font-semibold text-xl mt-4" > Alamat Detail < /div> <
            div className = "flex flex-col w-full lg:w-3/4" >
            <
            Input title = "Alamat pickup kain"
            name = "alamat"
            type = "text"
            placeholder = "Alamat pickup kain1"
            value = {
                form.address_1
            }
            onChange = {
                (e) => handleSetForm("address_1", e.target.value)
            }
            /> <
            Input name = "alamat-2"
            type = "text"
            placeholder = "Alamat pickup kain 2"
            value = {
                form.address_2
            }
            onChange = {
                (e) => handleSetForm("address_2", e.target.value)
            }
            />

            <
            div className = "flex flex-col lg:flex-row" >
            <
            div className = "flex flex-col lg:w-full" >
            <
            Input title = "City"
            name = "city"
            type = "text"
            placeholder = "City"
            value = {
                form.city
            }
            onChange = {
                (e) => handleSetForm("city", e.target.value)
            }
            /> <
            /div> <
            div className = "lg:ml-4 flex flex-col lg:w-full" >
            <
            Input title = "State/province"
            name = "province"
            type = "text"
            placeholder = "State/province"
            value = {
                form.province
            }
            onChange = {
                (e) => handleSetForm("province", e.target.value)
            }
            /> <
            /div> <
            /div>

            <
            Input title = "Postal/zip code"
            name = "postal"
            type = "text"
            placeholder = "Postal/zip code1"
            value = {
                form.postal
            }
            onChange = {
                (e) => handleSetForm("postal", e.target.value)
            }
            /> <
            /div> { /* end inner form */ } <
            /div> <
            /div>
        );
    };

    const jadwalPickup = () => {
        return ( <
            div className = "w-full lg:px-3 py-4 rounded-lg flex flex-col" >
            <
            div className = "font-semibold text-lg w-full lg-w" >
            Jadwal pickup kain <
            /div> <
            div className = "flex md:flex-row flex-col items-start" >
            <
            div >
            <
            Calendar className = {
                "rounded"
            }
            onChange = {
                setDate
            }
            value = {
                date
            }
            /> <
            /div> <
            div className = "w-full lg:w-[300px] flex flex-wrap items-start" > {
                times.map((item, index) => ( <
                    div key = {
                        index
                    }
                    onClick = {
                        () => (item === time ? setTime("") : setTime(item))
                    }
                    className = {
                        `mt-2 mr-2 lg:m-2 p-2 border ${
                  item === time
                    ? "bg-blue-500 text-white"
                    : "border-blue-500 text-blue-500"
                }  flex flex-wrap rounded-md cursor-pointer`
                    } >
                    {
                        item
                    } <
                    /div>
                ))
            } <
            /div> <
            /div> {
                time && ( <
                    div className = "bg-blue-500 text-white mt-4 rounded px-2" >
                    You’ ve selected {
                        time
                    }, {
                        moment(date).format("YYYY-MM-DD")
                    } <
                    /div>
                )
            } <
            /div>
        );
    };

    return ( <
        >
        <
        Navbar / >
        <
        div className = "w-full container mx-auto px-3 lg:px-32 mt-5 lg:mt-12" >
        <
        Link to = "/home"
        className = "flex flex-row text-sm lg:text-xl items-center font-semibold text-merah-100" >
        <
        BsArrowLeft / >
        <
        div className = "pl-3" > Lakani online service < /div> <
        /Link> <
        div className = "rounded bg-white drop-shadow-md px-3 lg:px-3 mt-4 lg:mt-12" > {
            orderForm()
        } {
            jadwalPickup()
        } <
        div className = "px-3 flex" >
        <
        button disabled onClick = {
            () => {
                console.log(form);
            }
        }
        className = "rounded-lg mt-4 bg-merah-100 text-white px-2 py-3 mb-24" >
        Submit Order <
        /button> <
        button onClick = {
            () => clearForm()
        }
        className = "ml-3 rounded-lg mt-4 text-merah-100 border-merah-100 border px-2 py-3 mb-24" >
        Clear Form <
        /button> <
        /div> <
        /div> <
        /div>

        <
        div className = "mt-24" >
        <
        Footer / >
        <
        /div> <
        />
    );
}

export default OrderForm;