import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: #1b1b1b;
    }
    button{
        background: transparent;
        padding: 1rem 2rem;
        border:2px solid #23d997;
        color: white;
        font-weight: bold;
        position: relative;
        font-size: 1rem;
        z-index: 1;
        transition: 0.3s ease-in;
        overflow: hidden;
        cursor: pointer;
        &::before{
            content: '';
            position: absolute;
            background: #23d997;
            z-index: -1;
            width: 200%;
            height: 52%;
            top: 0;
            left: 0;
            transform: translateY(-100%);
            transition: 0.3s ease-in;
        }
        &::after{
            content: '';
            z-index: -1;
            position: absolute;
            background: #23d997;
            width: 200%;
            height: 52%;
            bottom: 0;
            left: 0;
            transform: translateY(100%);
            transition: 0.3s ease-in;
        }
        &:hover::before,&:hover::after{
            transform: translateY(0%);
        }
    }
    h2{
        font-weight: lighter;
        font-size: 4rem;
    }
    a{
        font-size: 1.1rem;
    }
    span{
            color: #23d997;
            font-weight: bold;
        }
        p{
            font-size: 1.4rem;
            color: #ccc;
            padding:3rem 0;
            line-height: 150%;
        }

`;
