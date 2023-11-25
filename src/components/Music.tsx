import styled from "styled-components";

const MusicSectionContainer = styled.section`
  padding: 3rem;
  background-color: #f0f0f0;
`;

const MusicTitle = styled.h2`
  font-family: DM Sans;
  font-size: 2.5rem;
  color: #000000;
  text-align: center;
  margin-bottom: 1.25rem;
`;

const IframeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 0.625rem;
`;

const MixcloudPlayer = styled.iframe`
  width: 100%;
  height: 7.5rem;
  border: 0;
`;

export const Music = () => {
  return (
    <MusicSectionContainer id="mixes">
      <MusicTitle>Mixes</MusicTitle>

      <IframeContainer>
        <MixcloudPlayer src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fandrewscratch%2Fdj-andrew-grab-this-mix%2F"></MixcloudPlayer>
      </IframeContainer>

      <IframeContainer>
        <MixcloudPlayer src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fandrewscratch%2Fdj-andrew-live-play-tv-10317%2F"></MixcloudPlayer>
      </IframeContainer>

      <IframeContainer>
        <MixcloudPlayer src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fandrewscratch%2Fdj-andrew-road-to-summer%2F"></MixcloudPlayer>
      </IframeContainer>
    </MusicSectionContainer>
  );
};

export default Music;
