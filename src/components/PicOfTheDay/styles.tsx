import styled from 'styled-components';
import { PRIMARY_COLOR, SECONDARY_COLOR, ThemeTypes } from '../../consts';

export const PicDaySection = styled.article<ThemeTypes>`
    border-bottom: 0.3rem solid ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
    margin: 14rem 9rem 5rem 9rem;
    padding: 0 0 1.5rem 0;

    @media screen and (max-width: 767px) {
        margin: 10rem 0 3rem 0;
        padding: 1.4rem;
    }
`
export const Header = styled.header<ThemeTypes>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 3rem;

    & button {
        background-color: ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
        border: none;
        border-radius: 0;
        color: ${props => props.isLightMode ? SECONDARY_COLOR : PRIMARY_COLOR};
        cursor: pointer;
        font-size: 1.6rem;
        font-weight: 500;
        height: 5rem;
        padding: 1.3rem 4rem;
    }

    @media screen and (max-width: 767px) {
        flex-wrap: wrap;

        & button {
            display: none;
        }
    }
`
export const Photo = styled.section<ThemeTypes>`
    position: relative;

    & img {
        height: 55rem;
        object-fit: cover;
        overflow: hidden;
        width: 100%;
    }

    & h3 {
        background-color: #ffffff10;
        backdrop-filter: blur(12px);
        box-sizing: border-box;
        bottom: 0;
        color: ${SECONDARY_COLOR};
        left: 0;
        margin-bottom: 0;
        padding: 2rem 4rem;
        position: absolute;
        text-align: end;
        width: 100%;
    }

    & button {
        background-color: ${props => props.isLightMode ? PRIMARY_COLOR : SECONDARY_COLOR};
        border: none;
        border-radius: 0;
        color: ${props => props.isLightMode ? SECONDARY_COLOR : PRIMARY_COLOR};
        cursor: pointer;
        display: none;
        font-size: 1.6rem;
        font-weight: 500;
        height: 5rem;
        margin-top: 2rem;
        padding: 1.3rem 4rem;
        width: 100%;
    }

    @media screen and (max-width: 767px) {
        & img {
            height: 24rem;
        }
        & h3 {
            bottom: 8rem;
            text-align: center;
        }
        & button {
            display: block;
        }
    }
`
export const Information = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 4rem;
    margin-top: 4rem;

    & .aboutPic,
    .otherDetails {
        width: 50%;
    }

    & .otherDetails {
        text-align: end;
    }

    & .otherBuys {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        margin-bottom: 4rem;
    }

    & .otherBuys img {
        height: 11.4rem;
        margin-left: 1rem;
        object-fit: cover;
        overflow: hidden;
        width: 11.7rem;
    }

    @media screen and (max-width: 767px) {
        flex-wrap: wrap;
        margin-bottom: 3rem;

        & .aboutPic,
        .otherDetails {
            width: 100%;
        }

        & .otherDetails {
        text-align: start;
    }
        & .otherBuys {
            justify-content: flex-start;
        }

        & .otherBuys img {
        margin-left: 0;
        margin-right: 1rem;
    }
        
    }

`