import { createTodo } from "../network/todoCrud.ts";
import CreateForm from "../components/CreateForm.tsx";
import { useState } from "react";

export default function Create() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleCreate = (title: string, details: string) => {
    createTodo({
      title,
      details,
    }).then(() => {
      window.location.href = "/";
    });
  };

  return (
      <CreateForm
        onSubmit={handleCreate}
        actionText="Add"
        titleState={[title, setTitle]}
        detailsState={[details, setDetails]}
      />
  )
}