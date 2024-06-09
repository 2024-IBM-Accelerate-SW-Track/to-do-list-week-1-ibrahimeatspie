import React from "react";
import { useState } from "react";
import { Button, TextField } from "@mui/material";

const AddListingButton = ({ addTodo, prop2 }) => {
  const [content, setContent] = useState("");
  // Destructure props directly in the function parameter
  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (content.trim()) {
      console.log(content);
      addTodo(content);
      setContent("");
    }
  };
  return (
    <div className="px-4 absolute bottom-10 flex items-center w-[100%] max-w-[750px] justify-center">
      <TextField
        label="Enter new item"
        variant="outlined"
        onChange={handleChange}
        value={content}
        data-testid="new-item-textfield"
        style={{ width: "calc(80% - 50px)" }}
        InputProps={{
          style: {
            height: "65px",
            borderRadius: "50px",
          },
        }}
      />
      <button
        onClick={handleSubmit}
        variant="contained"
        color="primary"
        data-testid="new-item-button"
        class="ml-3 w-[70px] h-[70px] bg-gradient-to-br from-purple-500 to-blue-500 text-2xl text-white font-bold rounded-full shadow-lg"
      >
        +
      </button>
      {/* <TextField
        label="Enter new item"
        variant="outlined"
        onChange={handleChange}
        value={content}
        data-testid="new-item-textfield"
        InputProps={{
          style: {
            height: "65px",
            borderRadius: "50px",
            flexGrow: 1, // Setting flexGrow to 1 to make TextField grow
          },
        }}
      />
      <button
        onClick={handleSubmit}
        variant="contained"
        color="primary"
        data-testid="new-item-button"
        class="ml-3 w-[70px] h-[70px] bg-gradient-to-br from-purple-500 to-blue-500 text-2xl text-white font-bold rounded-full shadow-lg"
      >
        +
      </button> */}
    </div>
  );
};

export default AddListingButton;
