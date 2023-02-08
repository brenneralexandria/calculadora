import styled from 'styled-components';

export const InputContainer = styled.div `
    width: 100%;
    height: 75px;
    background-color: #aaffaa

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';

    input {
        height: 75px;
        background-color: #aaffaa
        border: 0;
        display: flex;
        flex-direction: column;
        textAlign: right;

        padding: 0 10px;
        font-size: 24px;
        font-family: 'Roboto';
    }
`