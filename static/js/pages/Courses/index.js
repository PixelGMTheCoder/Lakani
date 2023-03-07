import React from "react";
import {
    BsCameraFill
} from "react-icons/bs";
import {
    CoursesItem,
    Footer,
    Navbar,
    ProductItem
} from "../../components/";
import Banner0 from "../../assets/images/cover2.jpg";
import Banner1 from "../../assets/images/cover1.jpg";
import {
    products
} from "../../data/products";
import {
    popularCourse
} from "../../data/courses";
import {
    useNavigate
} from "react-router-dom";
import partner1 from "../../assets/images/partner1.jpg";
import partner2 from "../../assets/images/partner2.jpg";

export default function Courses() {
    let navigate = useNavigate();

    const testimonials = [{
            name: "chiara",
            from: "Jakarta",
            data: "Yaampun suka banget jujur, karena ukuran celana panjangnya sesuai sama yang aku pengenin, atasannya juga bisa dipadupadankan pake celana jeans! Cucok! Udah gitu jahitannya juga rapi banget.",
        },
        {
            name: "septihani",
            from: "Surabaya",
            data: "Kesan saya senang sekali bisa mengikuti pelatihan masker bersama Lakani Academy karena yang tadinya saya gak bisa membuat masker sekarang jadi bisa, dan bisa jadi penghasilan sampingan karena maskernya bisa kita jual. Terima kasih banyak dan Salam semangat dari kami yang ada di Aceh.",
        },
        {
            name: "sancez martines",
            from: "Malang",
            data: "Saya sangat senang ikut Lakani Academy karena video yang ditampilkan mudah dipahami dan mudah dipraktekkan. Admin Lakani Academy juga ramah-ramah dan sigap membantu. Terima kasih Lakani.. sukses selalu.",
        },
    ];

    const partners = [partner1, partner2];

    return ( <
        >
        <
        Navbar / >
        <
        div className = "container mx-auto px-3 lg:px-32 mt-4 text-gray-800" >
        <
        img src = {
            Banner0
        }
        alt = "banner"
        className = "w-full h-32 lg:h-64 object-cover mb-5 rounded" /
        >
        <
        div className = " flex flex-row justify-between text-sm lg:text-lg font-semibold" >
        <
        div > Workshop Terbaru < /div> <
        div
        // onClick={() => navigate(`/products`)}
        className = "cursor-pointer text-merah-100" >
        Lihat semua <
        /div> <
        /div> <
        div className = "overflow-auto mt-4 pb-4" >
        <
        div className = "flex flex-nowrap " > {
            popularCourse.slice(0, 4).map((item, index) => {
                return ( <
                    CoursesItem key = {
                        index
                    }
                    data = {
                        item
                    }
                    // onClick={() => navigate(`/detail-product/${item?.name}`)}
                    />
                );
            })
        } <
        /div> <
        /div> { /* other course */ } <
        div className = " flex flex-row justify-between text-sm lg:text-lg font-semibold" >
        <
        div > Kelas Populer < /div> <
        div
        // onClick={() => navigate(`/products`)}
        className = "cursor-pointer text-merah-100" >
        Lihat semua <
        /div> <
        /div> <
        div className = "overflow-auto mt-4 pb-4" >
        <
        div className = "flex flex-nowrap " > {
            popularCourse.slice(3, 7).map((item, index) => {
                return ( <
                    CoursesItem key = {
                        index
                    }
                    data = {
                        item
                    }
                    // onClick={() => navigate(`/detail-product/${item?.name}`)}
                    />
                );
            })
        } <
        /div> <
        /div> { /* other course */ } <
        img src = {
            Banner1
        }
        alt = "banner"
        className = "w-full h-32 lg:h-64 object-cover mt-12 mb-5 rounded" /
        >
        <
        div className = " flex flex-row justify-between text-sm lg:text-lg font-semibold mt-8" >
        <
        div > Produk Unggulan Kami < /div> <
        div
        // onClick={() => navigate(`/products`)}
        className = "cursor-pointer text-merah-100" >
        Lihat semua <
        /div> <
        /div> <
        div className = "overflow-auto mt-4 pb-4" >
        <
        div className = "flex flex-nowrap " > {
            products.slice(0, 5).map((item, index) => {
                return ( <
                    div className = "flex-none lg:w-1/5 w-1/2 mr-8" >
                    <
                    ProductItem key = {
                        index
                    }
                    data = {
                        item
                    }
                    onClick = {
                        () => navigate(`/detail-product/${item?.name}`)
                    }
                    /> <
                    /div>
                );
            })
        } <
        /div> <
        /div>

        <
        div className = "flex flex-col w-full items-center justify-center my-24" >
        <
        div className = "w-[100px] h-[5px] rounded bg-merah-100" > < /div> <
        p className = "text-xl lg:text-3xl font-bold text-merah-100" >
        Partner & colaboration <
        /p> <
        p className = "text-center text-sm lg:w-1/2" >
        Lakani telah bekerjasama dengan berbagai pihak dan dipercaya untuk berkolaborasi melalui order Lakani dan juga event project dalam mewujudkan supply chain fesyen Indonesia yang lebih baik <
        /p> <
        div className = "flex flex-col lg:flex-row items-center flex-row" > {
            partners.map((item, index) => ( <
                img className = "w-[250px] h-[250px] resize-cover mx-5"
                src = {
                    item
                }
                key = {
                    index
                }
                alt = {
                    `parnter${index}`
                }
                />
            ))
        } <
        /div> <
        /div>

        <
        div className = "flex flex-col w-full items-center justify-center my-24" >
        <
        div className = "w-[100px] h-[5px] rounded bg-merah-100" > < /div> <
        p className = "text-xl lg:text-3xl font-bold text-merah-100" >
        Testimonial <
        /p>

        <
        div class = "w-full grid lg:grid-cols-3 gap-4 place-content-center mt-4" > {
            testimonials.map((item) => ( <
                div className = "bg-white rounded-lg shadow-md p-8 mb-4" >
                <
                p className = "text-sm text-justify" > "{item?.data}" < /p> <
                div className = "flex items-center mt-4" >
                <
                div className = "mr-4 w-[50px] h-[50px] rounded-full bg-merah-100 flex justify-center items-center" >
                <
                div className = "capitalize text-bold text-white" > {
                    item ? .name.substring(0, 1)
                } <
                /div> <
                /div> <
                div >
                <
                p className = "font-semibold text-md text-merah-100 capitalize" >
                "{item?.name}" <
                /p> <
                p className = "text-xs capitalize `" >
                Customer dari {
                    item ? .from
                } <
                /p> <
                /div> <
                /div> <
                /div>
            ))
        } <
        /div> <
        /div> { /* end inner item */ } <
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