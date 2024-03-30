import styled from "styled-components";

const ColumnStyle = styled.div`
    position: absolute;
    width: 400px;
    height: 100vw;
    background-color: grey;
`

export default function Column(){
    return(
        <ColumnStyle></ColumnStyle>
    );
}