import { useContext, createContext, useState } from "react";

const postContext = createContext();

export const PostProvider = ({ children }) => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isCreatePostVisible, setIsCreatePostVisible] = useState(false);
  const [isUpdatePostVisible, setIsUpdatePostVisible] = useState(false);
  const [isDeletePostVisible, setIsDeletePostVisible] = useState(false);
  const [isRemovePinVisible, setIsRemovePinVisible] = useState(false);

  const toggleCreatePost = function () {
    setIsCreatePostVisible(!isCreatePostVisible);
  };
  const toggleUpdatePost = function () {
    setIsUpdatePostVisible(!isUpdatePostVisible);
  };
  const toggleDeletePost = function () {
    setIsDeletePostVisible(!isDeletePostVisible);
  };
  const toggleRemovePin = function () {
    setIsRemovePinVisible(!isRemovePinVisible);
  };

  return (
    <postContext.Provider
      value={{
        selectedPost,
        toggleCreatePost,
        toggleUpdatePost,
        toggleDeletePost,
        toggleRemovePin,
      }}
    >
      {children}
    </postContext.Provider>
  );
};

export const usePostContext = useContext(postContext);
