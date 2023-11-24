import toast from "react-hot-toast";

export const copyToClipBoard = (text: string) => {
  navigator.clipboard.writeText(text);
  toast(`Copied ${text}`);
};
