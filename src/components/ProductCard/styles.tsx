import styled from "styled-components";
import { PRIMARY_COLOR, SECONDARY_COLOR, ThemeTypes } from "../../consts";
import { fadeIn } from "../styles/animations";

export const ProductsCard = styled.div<ThemeTypes>`
    margin: 0 auto 5rem auto;
    width: 30%;

    .imgContainer {
        position: relative; 
        width: 100%;
    }

    .imgContainer .bestSeller {
        background-color: ${props => props.isLightMode ? SECONDARY_COLOR : PRIMARY_COLOR};
        color: ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
        font-size: 2rem;
        font-weight: 400;
        left: 0;
        position: absolute;
        padding: 0.5rem 2rem;
        top: 0;
        z-index: 3;
    }

    .imgContainer img {
        height: 40rem;
        object-fit: cover;
        overflow: hidden;
        width: 100%;
        z-index: 1;
    }

    .imgContainer .cartButton {
        background-color: #c2c0c010;
        backdrop-filter: blur(12px);
        border: none;
        border-radius: 0;
        bottom: 0.3rem;
        color: ${SECONDARY_COLOR};
        cursor: pointer;
        display: none;
        font-size: 2.3rem;
        font-weight: 500;
        height: 100%;
        left: 0;
        padding: 1rem 2rem;
        position: absolute;
        text-align: center;
        width: 100%;
        z-index: 2;
    }

    .imgContainer:hover>.cartButton {
        display: block;
        ${fadeIn({})}
    }

    @media screen and (max-width: 767px) {
        font-size: 3rem;
        margin: 0 0 5rem 0;
        width: 100%;

        .imgContainer .cartButton {
            display: block;
            height: auto;
        }
        
    }
`