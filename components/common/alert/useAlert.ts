import { useState } from "react";

type AlertType = "success" | "error" | "info";

export function useAlert() {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState<AlertType>("info");

  const show = (type: AlertType, title: string, message: string) => {
    setType(type);
    setTitle(title);
    setMessage(message);
    setVisible(true);
  };

  const hide = () => setVisible(false);

  return {
    visible,
    title,
    message,
    type,
    show,
    hide,
  };
}
