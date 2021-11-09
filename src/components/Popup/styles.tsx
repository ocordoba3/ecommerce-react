import styled from "styled-components";
import { PRIMARY_COLOR, SECONDARY_COLOR, ThemeTypes } from "../../consts";

export const ContainerPopup = styled.div<ThemeTypes>`
    bottom: 0;
    display: none;
    left: 0;
    height: calc(100% - 7rem);
    position: fixed;
    right: 0;
    top: 0;
    transition: opacity 500ms;
    overflow-x: hidden;
    overflow-y: scroll;
    width: 100vw;
    z-index: 3;
    box-sizing: border-box;

    .popup {
        background: ${props => props.isLightMode ? SECONDARY_COLOR : PRIMARY_COLOR};
        border-radius: 0;
        margin: 0;
        position: relative;
        transition: all 5s ease-in-out;
    }

    .popup .close {
        color: ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
        position: absolute;
        right: 30px;
        top: 20px;
        transition: all 200ms;
        z-index: 2;
    }

    .popup .close svg {
        cursor: pointer;
        height: 2rem;
        stroke-width: 5rem;
        width: 2rem;
    }

    .popup .close svg:hover {
        color: #ccc;
    }

    .popup .buttons {
        background-color: ${props => props.isLightMode ? SECONDARY_COLOR : PRIMARY_COLOR};
        border-top: .4rem solid ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
        bottom: 0;
        display: flex;
        height: 10rem;
        justify-content: space-around;
        left: 0;
        padding-top: 3rem;
        position: fixed;
        width: 100%;
        z-index: 1;
    }

    .popup .buttons .save,
    .popup .buttons .clear {
        width: 40%;
    }

    .popup .buttons .save button,
    .popup .buttons .clear button {
        border: none;
        border-radius: 0;
        font-size: 2.3rem;
        font-weight: 500;
        height: 80%;
        padding: 1rem;
        width: 100%;
    }

    .popup .buttons .save button {
        background-color: ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
        color: ${props => props.isLightMode ? SECONDARY_COLOR : PRIMARY_COLOR};
    }

    .popup .buttons .clear button {
        background-color: ${props => props.isLightMode ? SECONDARY_COLOR : PRIMARY_COLOR};
        border: .2rem solid ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
        color: ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
    }
`