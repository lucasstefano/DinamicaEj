import { BoldText, Container, DownTextContainer, PicContainer, Text, TextContainer, UpperTextContainer, } from './style';

interface NotificationAlertProps {
    user: string;
    action: string;
    content: string;
    time: string;
}
export default function NotificationAlert({ user, action, content, time }) {

    return (
        <Container>
            <PicContainer></PicContainer>

            <TextContainer>

                <UpperTextContainer>
                    <BoldText>{user}</BoldText>
                    <Text>{action}</Text>
                    <BoldText>{content}</BoldText>
                </UpperTextContainer>

                <DownTextContainer>
                    <Text>{time} atrás</Text>
                </DownTextContainer>

            </TextContainer>
        </Container>
    );
}

