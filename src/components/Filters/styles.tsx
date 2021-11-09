import styled from "styled-components";
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR, ThemeTypes } from "../../consts";

export const FiltersContainer = styled.aside<ThemeTypes>`
    display: flex;
    flex-direction: column;
    width: 20%;

    .container {
        display: block;
        position: relative;
        padding-left: 3.5rem;
        margin-bottom: 1.2rem;
        cursor: pointer;
        font-size: 2.2rem;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Hide the browser's default checkbox */
    .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    /* Create a custom checkbox */
    .checkmark {
        border: .1rem solid ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
        position: absolute;
        top: 0;
        left: 0;
        height: 2.5rem;
        width: 2.5rem;
        background-color: ${props => props.isLightMode ? SECONDARY_COLOR : PRIMARY_COLOR};
    }

    /* On mouse-over, add a grey background color */
    .container:hover input ~ .checkmark {
        background-color: #ccc;
    }

    /* When the checkbox is checked, add a blue background */
    .container input:checked ~ .checkmark {
        background-color: ${TERTIARY_COLOR};
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    /* Show the checkmark when checked */
    .container input:checked ~ .checkmark:after {
        display: block;
    }

    /* Style the checkmark/indicator */
    .container .checkmark:after {
        left: .9rem;
        top: .5rem;
        width: .5rem;
        height: 1rem;
        border: solid white;
        border-width: 0 .3rem .3rem 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    hr {
        margin-top: 0;
        margin-bottom: 2rem;
        border: 0.1rem solid #c2c2c2;
    }

    @media screen and (max-width: 767px) {
        width: 100%;
        height: calc(100vh - 7rem);
        padding: 2rem 3rem;
        box-sizing: border-box;
    }
`