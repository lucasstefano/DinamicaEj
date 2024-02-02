import React from 'react';
import FooterMenu from '../../components/Footer';
import { Container, Title, Author, VideoContainer, Subtitle, FileContainer, Description, OtherVideoContainer, OthersVideoContainer } from './style';
import Header from '../../components/Header';

export default function WatchLesson() {
    const lessonData = [
        {
            Title: 'React Native Lesson',
            Author: 'Lucas Stefano',
            Description: 'Instructor: ',
        },
    ];
  

    return (
        <Container>
            {lessonData.map((data, index) => (
                <React.Fragment key={index}>
                    <Header title={' '} role={'student'} />
                    <Title>{data.Title}</Title>
                    <Author>By {data.Author}</Author>
                </React.Fragment>
            ))}

            <VideoContainer>
             
            </VideoContainer>
            <OthersVideoContainer>
                <OtherVideoContainer></OtherVideoContainer>
                <OtherVideoContainer></OtherVideoContainer>
            </OthersVideoContainer>

            <Subtitle>Description</Subtitle>
            {lessonData.map((data, index) => (
                <Description key={index}>
                    {data.Description}
                </Description>
            ))}

            <FooterMenu num={0} ></FooterMenu>
        </Container>
    );
}
