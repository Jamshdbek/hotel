import styled, { css } from "styled-components";
const ButtonWrapper = styled.button`
    border: none;
    background-color: #0085ff;
    outline: none;
    text-decoration: none;
    border-radius: 5px;
    color: ${({ color }: any) => color || "#fff"};
    padding: 8px 12px;
    cursor: pointer;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.06),
        0px 1px 1px rgba(0, 0, 0, 0.08);
    font-size: ${({ fontSize }: any) => fontSize || "16px"};
    min-width: ${({ width }: any) => width || "100px"};
    .chevron {
        margin-left: 15px;
    }
    margin: ${({ margin }: any) => margin || "0px"};
    &[disabled] {
        background-color: #8a8d9d;
    }
    z-index: 1;

    ${({ primary }: any) =>
        primary &&
        css`
            background-color: #0085ff;
        `};

    ${({ light_primary }: any) =>
        light_primary &&
        css`
            background-color: #407dc7;
        `};

    ${({ flower }: any) =>
        flower &&
        css`
            background-color: #b2b8fb;
        `};

    ${({ light_flower }: any) =>
        light_flower &&
        css`
            background-color: #7391f8;
        `};

    ${({ success }: any) =>
        success &&
        css`
            background-color: #53ac92;
        `};

    ${({ tangerine }: any) =>
        tangerine &&
        css`
            background-color: #f79e1b;
        `};

    ${({ info }: any) =>
        info &&
        css`
            background-color: #9247b5;
        `};

    ${({ danger }: any) =>
        danger &&
        css`
            background-color: rgba(216, 0, 39, 1);
        `};

    ${({ light_danger }: any) =>
        light_danger &&
        css`
            background-color: #ec536a;
        `};

    ${({ green }: any) =>
        green &&
        css`
            background-color: #00c838;
        `};

    ${({ gray, disabled }: any) =>
        (gray || disabled) &&
        css`
            background: rgba(138, 141, 157, 1);
        `};

    ${({ bordered }: any) =>
        bordered &&
        css`
            border: solid 1px #0085ff;
            color: #0085ff;
            background-color: #ffffff;
        `};

    ${({ medium }: any) =>
        medium &&
        css`
            font-weight: 500;
        `};

    ${({ outlined }: any) =>
        outlined &&
        css`
            box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.06);
            border: 1px solid #e8e8e8;
            background-color: transparent;
            display: inline-flex;
            color: #1c1c1c;
            font-weight: 500;
        `};

    &:enabled:active {
        opacity: 0.8;
    }

    &:enabled:focus {
        opacity: 0.5;
    }
`;



const Button = ({
    outlined = false,
    type = "button",
    handleClick = () => { },

    ...props
}: any) => {
    return (<ButtonWrapper
        onClick={handleClick}
        outlined={outlined}
        type={type}
        {...props}
    />)
}

export default Button