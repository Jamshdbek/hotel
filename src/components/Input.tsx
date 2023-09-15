import styled from 'styled-components';

const Input = () => {
    const Wapp = styled.input`
      background: #ffffff;
    border: 1px solid hsl(0, 0%, 90%);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
    padding: 8px 12px;
    outline: none;
    font-size: 14px;
    font-weight: 500;
    margin: 0%;
    color: #1c1c1c;
    display: inline-block;
    min-width: 100px;
    min-height: 36px;
    width: 100%;
    max-width:320px;

     /* Chrome, Safari, Edge, Opera */
     &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    &[type="number"] {
        -moz-appearance: textfield;
    }
    `
    return (
        <Wapp>

        </Wapp>
    )
}

export default Input