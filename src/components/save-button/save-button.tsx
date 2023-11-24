import { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

interface ISaveButton {
  onClick: () => void;
  isSaved: boolean;
}

export const SaveButton = ({ onClick, isSaved = false }: ISaveButton) => {
  const [isClicked, setIsClicked] = useState<boolean>(isSaved);

  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
    onClick();
  };

  return isClicked ? (
    <FaBookmark onClick={handleClick} style={{ fill: "#fca903" }} />
  ) : (
    <CiBookmark onClick={handleClick} />
  );
};
