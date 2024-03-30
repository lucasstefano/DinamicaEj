import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 20;
    width: 300px;
    height: 200px;
    background: #f3f3f2;
`

export default function ChangeStatus({onSelect, onClose}:any){



    return(
        <Container>
        <a onClick={onClose}>Fecha</a>
        <a onClick={() => onSelect("Design")}>Design</a>
            <a onClick={() => onSelect("FullStack")}>FullStack</a>
            <a onClick={() => onSelect("Ball")}>Ball</a>
            <a onClick={() => onSelect("Tele")}>Tele</a>
        </Container>
    );
}