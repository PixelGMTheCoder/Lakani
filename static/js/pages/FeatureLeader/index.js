import React from "react";
import {
    Footer,
    Navbar
} from "../../components";
import FeatureImg1 from "../../assets/images/LAKANIArtboard-1.jpg";
import FeatureImg2 from "../../assets/images/LAKANIArtboard-2.jpg";
import FeatureImg3 from "../../assets/images/LAKANIArtboard-3.jpg";

const FeatureLeader = () => {
    const features = [FeatureImg1, FeatureImg2, FeatureImg3];
    return ( <
        >
        <
        Navbar / >
        <
        div className = "w-full container mx-auto px-3 lg:px-32 mt-4" > {
            features.map((item, index) => ( <
                img className = {
                    `${
              index === 0 ? "mt-1" : "mt-4 lg:mt-24"
            } rounded-lg shadow-lg`
                }
                key = {
                    index
                }
                src = {
                    item
                }
                alt = {
                    `feature-${index}`
                }
                />
            ))
        } <
        /div> <
        div className = "mt-24" >
        <
        Footer / >
        <
        /div> <
        />
    );
};

export default FeatureLeader;