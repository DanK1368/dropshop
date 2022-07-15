import React from "react";
import {ProductDescription} from "../styles/Home";
import XX99 from "../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";


const Home = () => {
    return (
        <section>
            <ProductDescription>
                <div>
                    <p>NEW PRODUCT</p>
                    <h1>XX99 MARK II<br></br>HEADPHONE</h1>
                    <p>Experience natural lifelike audio and exceptional built quality, made for the passionate music enthusiast.</p>
                    <button>SEE PRODUCT</button>
                </div>
                <div>
                    <img src={XX99} alt="headphones picture"/>
                </div>
            </ProductDescription>
            <div></div>
            <div>
                <div></div>
                <div></div>
                <div>
                    <div></div>
                </div>
            </div>
        </section>
    )
}
export default Home;