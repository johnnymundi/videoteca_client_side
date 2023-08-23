import React, { useContext } from "react";
import { VideoContext } from "../context/VideoContext";
import { AddIcon, AddVideoButton } from "./styles";

export default function AddVideo() {
  const { handleAdd } = useContext(VideoContext);

  return (
    <li>
      <AddVideoButton onClick={handleAdd}>
        <AddIcon />
      </AddVideoButton>
    </li>
  );
}
