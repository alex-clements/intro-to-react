import { useState } from "react";

interface AddItemProps {
  onUpdateToDoList: (item: string) => void;
}

export const AddItem = ({ onUpdateToDoList }: AddItemProps) => {
  const [textValue, setTextValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onUpdateToDoList(textValue);
      setTextValue("");
    }
  };

  const handleClick = () => {
    onUpdateToDoList(textValue);
    setTextValue("");
  };

  return (
    <>
      <input
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={textValue}
        type="text"
      ></input>
      <button onClick={handleClick}>Add Item</button>
    </>
  );
};
