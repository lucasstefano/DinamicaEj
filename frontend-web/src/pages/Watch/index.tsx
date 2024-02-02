import { BannerComponent } from "../../components/Banner";
import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SideBar from "../../components/SideBar";
import {
  ScreenDiv,
  RightScreen,
  AllVideoContainer,
  VideoContainer,
  SubTitle,
  DescriptionContainer,
  Description,
} from "./style";

interface VideoInfo {
  link: string;
}

export default function Watch() {
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://v1.nocodeapi.com/lucasstefanof/vimeo/LTNEIwuypqvAurcN/videoInfo?video_id=909079121');
        setVideoInfo(response.data);
      } catch (error) {
        console.error('Erro ao obter dados da API do Vimeo', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScreenDiv>
    <SideBar page={2} />
      <RightScreen>
        <BannerComponent title={'Aula de'} subtitle={'Por'} />
        <AllVideoContainer>
          <VideoContainer>
            <ReactPlayer
              url={videoInfo?.link}
              width="100%"
              height="100%"
              controls
            />
          </VideoContainer>
        </AllVideoContainer>

        <SubTitle>Descrição</SubTitle>
        <DescriptionContainer>
          <Description>
           
          </Description>
        </DescriptionContainer>
      </RightScreen>
    </ScreenDiv>
  );
}
