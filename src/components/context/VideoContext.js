import { createContext, useState } from "react";
import FormModal from "../FormModal";
import api from "../services/api";

// use to pass values and functions between components without care about father-child relationship
export const VideoContext = createContext();

export function VideoContextProvider({ children }) {
  const [openFormModal, setOpenFormModal] = useState(false);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  // to open the add video modal
  function handleAdd() {
    setOpenFormModal(true);
  }

  // to close the add video modal
  function handleClose() {
    // if are necessary to clean modal title and link inputs after it closes
    if (title) {
      setTitle("");
    }
    if (link) {
      setLink("");
    }
    setOpenFormModal(false);
  }

  // receives the event from FormModal that the title has been changed
  function titleHandler(event) {
    setTitle(event.target.value);
  }

  // receives the event from FormModal that the link has been changed
  function linkHandler(event) {
    setLink(event.target.value);
  }

  // called when submit is clicked
  function handleSubmit(event) {
    event.preventDefault();
    const video = {
      title,
      link,
    };

    api.post("videos", video);

    setOpenFormModal(false);
  }

  function handleEdit(videoTitle, videoLink) {
    setTitle(videoTitle);
    setLink(videoLink);
    setOpenFormModal(true);
  }

  return (
    <VideoContext.Provider
      value={{
        handleAdd,
        handleClose,
        handleEdit,
        handleSubmit,
        title,
        setTitle,
        link,
        setLink,
        titleHandler,
        linkHandler,
      }}
    >
      {children}
      {openFormModal && <FormModal />}
    </VideoContext.Provider>
  );
}
