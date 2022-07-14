import React from "react";
import {
    OuterDiv,
    Main,
    Column,
    Picture,
    Model,
} from "../styles/Recomended";
import XX99 from "../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import XX59 from "../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import ZX9 from "../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";

const Recomended = () => {
    return (
        <>
            <OuterDiv>
                <div>YOU MAY ALSO LIKE</div>
            </OuterDiv>
            <Main>
                <Column>
                    <Picture>
                        <img src={XX99}/>
                    </Picture>
                    <Model>
                        <p>XX99 MARK 1</p>
                        <button>SEE PRODUCT</button>
                    </Model>
                </Column>
                <Column>
                    <Picture>
                        <img src={XX59}/>
                    </Picture>
                    <Model>
                        <p>XX59</p>
                        <button>SEE PRODUCT</button>
                    </Model>
                </Column>
                <Column>
                    <Picture>
                        <img src={ZX9}/>
                    </Picture>
                    <Model>
                        <p>ZX9 SPEAKER</p>
                        <button>SEE PRODUCT</button>
                    </Model>
                </Column>
            </Main>
        </>
    )
}


export default Recomended;

