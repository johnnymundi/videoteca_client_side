import React from "react";

import AddVideo from "../AddVideo";
import Video from "../Video";
import { Container, VideoListWrapper } from "./styles";

export default function VideoList() {
  return (
    <Container>
      <VideoListWrapper>
        <Video
          id={1}
          title={"Title test"}
          link="https://www.youtube.com/watch?v=ExNSl9CKcPQ&list=PL8YNlUoOZkkY8wjaI2t8DfvysoysmMLCv&index=3&ab_channel=Huriel"
          liked={true}
        />
        <AddVideo />
      </VideoListWrapper>
    </Container>
  );
}
