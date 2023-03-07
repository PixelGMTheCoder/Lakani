import {
    Navbar,
    Footer
} from "../../components";
// import LogoImg from "../../assets/logo1.png";
import LogoImg from "../../assets/Logo.jpg";

import {
    BsMicFill
} from "react-icons/bs";

function About() {
    return ( <
        >
        <
        Navbar showSearchBar / >
        <
        div className = "h-screen container mx-auto px-3 lg:px-32 mt-12 flex flex-col items-center" >
        <
        div className = "text-gray-600 text-sm lg:text-2xl font-semibold capitalize" >
        Lakani(Lokal anak indonesia) <
        /div> <
        img className = "h-48 lg:h-64"
        src = {
            LogoImg
        }
        alt = "" / >
        <
        div className = "text-xs lg:text-sm lg:text-base w-full lg:w-3/4 xl:w-1/2 text-justify" >
        Lakani atau“ Lokal Anak Indonesia” merupakan jasa custom - made pakaian yang rangkap dengan jasa ekspedisi, dimana Lakani menggunakan aplikasi sebagai perantara konsumen untuk bertemu dengan penjahit lokal.Lakani hadir sebagai solusi bagi para konsumen yang ingin merealisasikan pakaian impian mereka, di sisi lain juga memberdayakan talenta para penjahit lokal.Dengan menggunakan model Business to Consumer, Lakani menghadirkan fashion quiz yang berisi sejumlah pertanyaan untuk memahami preferensi dari pengguna agar dapat dikembangkan dalam aplikasi, Lakani Cart menyediakan fitur history dan like yang dapat dilihat oleh followers pengguna, Fitur Artificial Intelligence(AI) yang dapat mempermudah konsumen. < br / >
        <
        br / >
        Lakani akan menjadi pelopor aplikasi yang menyediakan layanan jasa custom - made dan ekspedisi secara bersamaan juga menghadirkan platform e - commerce dan komunitas fashion yang direalisasikan dengan meningkatkan dukungan atas fashion lokal, menyediakan layanan sosialisasi kepada produsen fashion lokal yang belum memahami teknologi, mengumpulkan talenta penjahit lokal berbakat untuk mengubah persepsi bahwa merek internasional lebih baik daripada merek lokal menjadi dapat bersaing bahkan mampu mengungguli dalam bidang fashion,
        memperluas business market hingga ke ranah nasional, menghubungkan konsumen dengan penjahit lokal melalui platform Lakani dan menyediakan jasa ekspedisi yang memudahkan konsumen menerima hasil yang telah mereka design dengan motto bring life to your design with us. <
        /div> {
            /* <div className="text-xs lg:text-sm lg:text-base w-full lg:w-3/4 xl:w-1/2 text-justify mt-3">
                      Lakani akan dapat diunduh melalui Google Play Store dan App
                      Store,sehingga memudahkanjuga bagi para pengguna handphone / android.
                      Jakarta menjadi lokasi pertama Lakani dalam mengoperasikan aplikasi
                      nya.
                    </div> */
        } <
        /div> <
        Footer / >
        <
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

export default About;