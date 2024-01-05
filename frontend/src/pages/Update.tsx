import { getTodoById, updateTodo } from "../network/todoCrud.ts";
import CreateForm from "../components/CreateForm.tsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Update() {
  const {id} = useParams<{ id: string }>();

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  useEffect(() => {
    return () => {
      getTodoById(id).then((res) => {
        setTitle(res.title);
        setDetails(res.details);
      });
    };
  }, []);

  const handleUpdate = (title: string, details: string) => {
    updateTodo(id, {
      title,
      details,
    }).then(() => {
      window.location.href = "/";
    });
  };

  return (
      <CreateForm
        onSubmit={handleUpdate}
        actionText="Update"
        titleState={[title, setTitle]}
        detailsState={[details, setDetails]}
      />
  );
}
