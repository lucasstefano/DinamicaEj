import styled from "styled-components";

const BarStyle = styled.div`
    width: 100vw;
    height: 100px;
    background-color: white;
`
const SubBarStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: flex-end;
    width: 100vw;
    height: 50px;
    border: 1px solid #9c9090;
`


const ButtonAdd = styled.button`
background-color: blue;
color: white;
font-size: 20px;
width: 170px;
height: 30px;
`

export default function TopBar(){
    return(
        <BarStyle>
            <SubBarStyle>
              
            </SubBarStyle>
        </BarStyle>
    );
}