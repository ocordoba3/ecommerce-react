import styled from "styled-components";
import { PRIMARY_COLOR, SECONDARY_COLOR, ThemeTypes } from "../../consts";

export const ProductsContainer = styled.article`
    margin: 6.8rem 9rem;
    padding: 0;

    @media screen and (max-width: 767px) {
        margin: 0;
        padding: 1.4rem;
    }
    
    `

export const ProductsHeader = styled.header<ThemeTypes>`
    margin-bottom: 6.5rem;
    display: flex;
    align-items: center;

    & .filterMobile {
        margin-left: auto;
        display: none;
        text-decoration: none;
    }

    @media screen and (max-width: 767px) {
        flex-wrap: wrap;
        font-size: 1.8rem;
        margin-bottom: 3rem;

        & .filterMobile {
            display: block;
        }
    }
`
export const SortContainer = styled.div<ThemeTypes>`
    color: ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
    font-size: 2.2rem;
    font-weight: 400;
    margin-left: auto;

    & svg {
        color: ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
        cursor: pointer;
        height: 1.5rem;
        margin: 0 .5rem;
        width: 1.5rem;
    }

    & select {
        appearance: none;
        background-color: transparent;
        border: none;
        border-radius: 0;
        color: ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
        cursor: pointer;
        font-size: 2.2rem;
        margin-left: .5rem;
        outline: none;
        & option {
            background-color: ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
            border: none;
            color: ${props => props.isLightMode ? SECONDARY_COLOR : PRIMARY_COLOR};
            font-size: 1.8rem;
            text-align: center;
        }
    }

    @media screen and (max-width: 767px) {
        margin-top: 2rem;
        margin-left: 0;
        text-align: end;
        width: 100%;
    }
`
export const ProductsContent = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`
