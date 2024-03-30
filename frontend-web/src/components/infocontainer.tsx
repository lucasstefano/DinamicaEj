import styled from "styled-components";

const Container = styled.div`   
    display: flex;
    flex-direction: column;
    height: 70px;
    background: #999999;
`
const Title = styled.text`
    font-size: 25px;
    color: black;
`
const InfoText = styled.text`
    font-size: 20px;
    color: black;
`
interface containerprop{
    name: string;
    data: string;
}
export default function InfoContainer({name,data}:containerprop){
    return(
        <Container>
            <Title>{name}</Title>
            <InfoText>{data}</InfoText>

        </Container>
    );
}