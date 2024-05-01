import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="title"
        onChange={(e) => {
          setTitle(e.target.value);
          console.log(title);
        }}
      />
      <br></br>
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="decription"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br></br>

      <button
        style={{ padding: 10, margin: 10 }}
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }).then(async () => {
            // const json = await res.json();
            alert("Todo Added");
          });
        }}
      >
        Add a Todo
      </button>
    </div>
  );
}
