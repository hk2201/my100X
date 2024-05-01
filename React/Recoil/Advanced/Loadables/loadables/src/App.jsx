import "./App.css";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilStateLoadable,
  useRecoilValueLoadable,
  useRecoilValue,
} from "recoil";
import { todosAtomFamily } from "./atoms";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Suspense } from "react";

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<Load />}>
        <Todo id={1} />
        <Todo id={2} />
      </Suspense>
    </RecoilRoot>
  );
}
function Load() {
  return <CircularProgress />;
}
function Todo({ id }) {
  //Below Loading is Using Recoil

  // const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
  // const todo = useRecoilValueLoadable(todosAtomFamily(id));

  // if (todo.state === "loading") {
  //   return <CircularProgress />;
  // } else if (todo.state === "hasError") {
  //   return <div>Somethings Wrong...</div>;
  // } else if (todo.state === "hasValue") {
  //   return (
  //     <>
  //       {todo.contents.title}
  //       {todo.contents.description}
  //       <br />
  //     </>
  //   );
  // }

  //Below Loading is Using Suspense

  const todo = useRecoilValue(todosAtomFamily(id)); // using Suspense for Loading
  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  );
}

export default App;
