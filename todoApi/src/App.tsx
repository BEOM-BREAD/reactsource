import { useRef, useState } from "react";
import "./App.css";
import TodoTeamplate from "./components/TodoTemplate";
import TodoHeader from "./components/TodoHeader";
import TodoInsert from "./components/TodoInsert";
import { initialTodos, type Todo, type TodoCreate } from "./types/todo";
import TodoList from "./components/TodoList";
import { deleteTodo, getTodos, postTodo, putTodo } from "./apis/todoApi";
import Loading from "./components/Loading";
import useFetch from "./hooks/useFetch";

function App() {
  const { todos, loading, fetchData, completedFilter, setCompletedFilter } = useFetch();

  // id값
  const nextId = useRef(4);

  const onInsert = async (todo: TodoCreate) => {
    const newTodo = {
      ...todo,
      id: nextId.current,
      createDate: new Date(),
      lastModifiedDate: new Date(),
    };
    console.log("newTodo", newTodo);

    // 데이터 삽입 서버 요청
    const result = await postTodo(newTodo);

    if (result.message === "success") {
      // 서버로 전체 데이터 요청
      fetchData(completedFilter);

      nextId.current += 1;
    }
  };

  const onDelete = async (id: string) => {
    const result = await deleteTodo(id);
    if (result.message === "success") fetchData(completedFilter);
  };

  const onUpdate = async (id: number) => {
    // todos에서 id와 동일한 todo를 찾아서 completed 반대로 변경
    const updateTodo = todos.find((todo) => todo.id === id);

    if (updateTodo) {
      updateTodo.completed = !updateTodo.completed;
      const result = await putTodo(String(id), updateTodo);
      if (result.message === "success") fetchData(completedFilter);
    }
  };

  // 완료 , 미완료 선택부분
  const getTodosByCompleted = (completed: string) => {
    // Boolean('true') true
    setCompletedFilter(completed === "" ? null : completed === "true");
  };

  return (
    <>
      <TodoTeamplate>
        <TodoHeader getTodosByCompleted={getTodosByCompleted} />
        <TodoInsert onInsert={onInsert} />
        {loading ? <Loading /> : <TodoList todos={todos} onDelete={onDelete} onUpdate={onUpdate} />}
      </TodoTeamplate>
    </>
  );
}

export default App;
