import { useState } from "react";
import InfoContainer from "../../components/infocontainer";
import { CardData } from "../../services/data";

export default function InfoPerson() {
    const [info,setInfo] = useState(CardData[0]);

    return (
        <>
            <InfoContainer name="Nome" data={info.name}></InfoContainer>
            <InfoContainer name="Sobrenome" data={info.surname}></InfoContainer>
            <InfoContainer name="Email" data={info.email}></InfoContainer>
            <InfoContainer name="Telefone" data={info.phone}></InfoContainer>
            <InfoContainer name="Cargo" data={info.role}></InfoContainer>
        <a href="/">VOLTAR</a>
        </>
    );
}