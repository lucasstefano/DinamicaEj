import styled from "styled-components";
import InfoContainer from "./infocontainer";
import ChangeStatus from "./changeStatus";
import { useEffect, useState } from "react";

 const ThumbnailContainer = styled.a`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 60vw;
    height: 100vh;
    background: #c5c5c5;
    text-decoration: none;
`;

const TextStyle = styled.a`
    align-self: flex-end;
    font-size:20px;
    color: #ffffff;
    background: #ff0062;
    width: 60px;
    border-radius: 8px;

`
const BackText = styled.a`
    font-size:20px;
    color: #ffffff;
    background: red;
    width: 60px;
    border-radius: 8px;

`
interface sidebarprobs{
    title: string;
    subtitle: string;
    statusx: string;
}

export default function SideBar({title, subtitle, statusx}:sidebarprobs){
    const [StatusVisi, setStatusVisi] = useState(false);
    const [status, setStatus]= useState('status');

    useEffect(() => {
      setStatus(statusx);
      });
      
    const HandleChangeStatus = () =>{
        setStatusVisi(!StatusVisi);

    };
    const HandleStatus = (x:string) =>{
        setStatus(x);

    };

    return(
        <ThumbnailContainer>
            <BackText href="/">Voltar</BackText>
            <TextStyle onClick={HandleChangeStatus}>{status}</TextStyle>
            {StatusVisi ? (
            <ChangeStatus onSelect={HandleStatus} onClose={HandleChangeStatus}></ChangeStatus>
            ):(null)}
            <InfoContainer name="nome" data={title}></InfoContainer>
            <InfoContainer name="email" data={subtitle}></InfoContainer>

        </ThumbnailContainer>

    );
}