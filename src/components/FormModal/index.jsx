import React, { useContext } from "react";
import { VideoContext } from "../context/VideoContext";
import {
  CheckIcon,
  CloseIcon,
  Container,
  Footer,
  FormContainer,
  FormMain,
  Header,
  InputGroup,
  Overlay,
} from "./styles";

export default function FormModal() {
  // calls handleClose to close modal table
  const { handleClose, title, titleHandler, link, linkHandler, handleSubmit } =
    useContext(VideoContext);

  return (
    <Overlay>
      <Container>
        <Header>
          <strong>Add a video</strong>
          <button type="button" onClick={handleClose}>
            <CloseIcon />
          </button>
        </Header>
        <FormContainer onSubmit={handleSubmit}>
          <FormMain>
            <InputGroup>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={titleHandler} // sends the event of changing title to the VideoContext function titleHandler
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="link">Link</label>
              <input
                type="text"
                id="link"
                value={link}
                onChange={linkHandler}
              />
            </InputGroup>
          </FormMain>
          <Footer>
            <button type="submit">
              <CheckIcon />
            </button>
          </Footer>
        </FormContainer>
      </Container>
    </Overlay>
  );
}
