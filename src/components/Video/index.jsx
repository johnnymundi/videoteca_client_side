import React, { useContext } from "react";
import { IoPencil, IoThumbsUp, IoTrashBin } from "react-icons/io5";
import { VideoContext } from "../context/VideoContext";
import { Button, ButtonArea, Container } from "./styles";

export default function Video({ id, title, link, liked }) {
  const { handleEdit } = useContext(VideoContext);

  return (
    <li>
      <Container>
        <h2>{title}</h2>
        <a href={link} target="_blank">
          {link}
        </a>
        <ButtonArea>
          <Button liked={liked}>
            <IoThumbsUp />
          </Button>
          <Button onClick={() => handleEdit(title, link)}>
            <IoPencil />
          </Button>
          <Button>
            <IoTrashBin />
          </Button>
        </ButtonArea>
      </Container>
    </li>
  );
}
