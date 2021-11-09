import styled from 'styled-components';
import { PRIMARY_COLOR, SECONDARY_COLOR, ThemeTypes } from '../../consts';
import { fadeIn, fadeOut } from '../styles/animations';


export const Nav = styled.nav<ThemeTypes>`
    align-items: center;
    background-color: ${props => props.isLightMode ? SECONDARY_COLOR : PRIMARY_COLOR};
    border-bottom: 0.3rem solid ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    left: 0;
    margin: 0 9rem;
    padding:  3.3rem 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 3;

    @media screen and (max-width: 767px) {
        margin: 0 0 3rem 0;
        padding: 2rem;
    }
`

export const ButtonTheme = styled.label<ThemeTypes>`
    display: inline-block;
    height: 35px;
    margin: 0 auto 0 1rem;
    position: relative;
    width: 70px;

    & input { 
        height: 0;
        opacity: 0;
        width: 0;
    }

    & .slider {
        background-color: ${props => props.isLightMode ? SECONDARY_COLOR : PRIMARY_COLOR};
        border: .2rem solid ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
        bottom: 0;
        cursor: pointer;
        left: 0;
        position: absolute;
        right: 7px;
        top: 0;
        -webkit-transition: .4s;
        transition: .4s;
        svg {
            ${fadeIn({})}
            color: ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
            left: ${props => props.isLightMode ? '3px' : ''};
            position: absolute;
            right: ${props => props.isLightMode ? '' : '3px'};
            top: 2px;
            z-index: 2 ;
        }
    }

    & :before {
        background-color: ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
        bottom: 2px;
        content: "";
        height: 26px;
        left: ${props => props.isLightMode ? '4px' : '2px'};
        position: absolute;
        top: 2px;
        transition: .4s;
        width: 26px;
    }

    & input:checked + .slider:before {
        transform: translateX(26px);
    }
    @media screen and (max-width: 767px) {
        margin: 0 auto 0 3rem;
    }

`

export const ContainerCart = styled.div`
    position: relative;
`

export const CartBadge = styled.span<ThemeTypes>`
    background-color: ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
    bottom: -3rem;
    color: ${props => props.isLightMode ? SECONDARY_COLOR : PRIMARY_COLOR};
    font-size: 2rem;
    padding: 0 .5rem;
    position: absolute;
    right: -.5rem;

    @media screen and (max-width: 767px) {
        bottom: -9.5rem;
    }
    
`

export const CartIconContainer = styled.div<ThemeTypes>`
    bottom: -1.5rem;
    cursor: pointer;
    position: absolute;
    right: 0;
    & svg {
        color: ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
        height: 3.8rem;
        width: 5.4rem;
    }

    @media screen and (max-width: 767px) {
        bottom: -8rem;
        background-color: ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
        & svg {
        color: ${props => props.isLightMode ? SECONDARY_COLOR : PRIMARY_COLOR};
    }
    }

`
export const CloseButton = styled.button<ThemeTypes>`
    background-color: ${props => props.isLightMode ? SECONDARY_COLOR : PRIMARY_COLOR};
    border: none;
    color: ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
    cursor: pointer;
    display: flex;
    height: 3rem;
    justify-content: center;
    width: auto;
    padding: .5rem;
    position: fixed;
    right: 11rem;
    top: 12rem;
    & svg {
        height: 2rem;
        stroke-width: 5rem;
        width: 2rem;
    }
    @media screen and (max-width: 767px) {
        right: 2rem;
        top: 9rem;
    }
    
`

export const ItemsContainer = styled.div<ThemeTypes>`
    ${props => props.isFadeIn ? fadeIn({}) : fadeOut({})};
    border: .3rem solid ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
    background-color: ${props => props.isLightMode ? SECONDARY_COLOR : PRIMARY_COLOR};
    border-radius: 0;
    height: calc(100vh - 10rem);
    overflow-y: scroll;
    position: absolute;
    right: 0;
    top: 5rem;
    width: 44rem;
    z-index: 3;

    &::-webkit-scrollbar {
        display: none;
    }
    & ul {
        padding: 2.4rem;
    }

    @media screen and (max-width: 767px) {
        right: -2rem;
        top: 3.7rem;
        width: auto;

        & ul {
            padding: 1.5rem;
        }
    }
`
export const Items = styled.li<ThemeTypes>`
    border-bottom: 1px solid ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
    display: flex;
    font-size: 2rem;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding-bottom: 2.4rem;
    margin-bottom: 2.4rem;
    width: 100%;        
    @media screen and (max-width: 767px) {
        justify-content: center;
    }
`


export const ItemsInfo = styled.div<ThemeTypes>`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 50%;
    & #ItemName {
        font-size: 1.6rem;
        font-weight: 700;
    }
    & #ItemPrice {
        font-size: 2.5rem;
        font-weight: 400;
        color: ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
    }

    @media screen and (max-width: 767px) {
        width: 100%;
        & #ItemName {
            width: 100%;
        }
        & #ItemPrice {
            width: 100%;
        }
        
    }
`

export const ItemsPhoto = styled.div`
    width: 50%;
    & img {
        height: 8.6rem;
        object-fit: cover;
        width: 100%;
    }

    @media screen and (max-width: 767px) {
        width: 100%;
    }
    
`
export const ClearButton = styled.button<ThemeTypes>`
    background-color: ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};;
    border: none;
    border-radius: 0;
    color: ${props => props.isLightMode ? SECONDARY_COLOR : PRIMARY_COLOR};;
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.4rem 5.2rem;
    width: 100%;
`