import { useEffect, useReducer, useRef } from "react";
import TodoTeamplate from "./TodoTemplate";
import TodoHeader from "./TodoHeader";
import TodoInsert from "./TodoInsert";
import { initialTodos, type TodoCreate } from "./todo";
import TodoList from "./TodoList";
import { todoReducer } from "./todo.reducer";

function TodoMain() {
  // const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  // id값
  const nextId = useRef(4);

  const onInsert = (todo: TodoCreate) => {
    // todos 변경
    // id : nextId.current
    // ... : {} 들어온 걸 개별로 풀어서
    const newTodo = { ...todo, id: nextId.current, createDate: new Date(), lastModifiedDate: new Date() };
    console.log("newTodo", newTodo);
    // {title: '강아지 산책' ,completed: false, important: true, id:4}
    // todos({{},{},{},{}})
    dispatch({
      type: "INSERT",
      payload: newTodo,
    });
    // 재렌더링이 되어도 값을 유지함
    nextId.current += 1;
  };

  const onDelete = (id: number) => {
    // todos 에서 삭제된 id와 동일한 todo 가 아닌 걸 찾아서 setTodos() 변경
    // filter() => 새로운 배열
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  const onUpdate = (id: number) => {
    // todos에서 id와 동일한 todo를 찾아서 completed 반대로 변경
    dispatch({
      type: "UPDATE",
      payload: id,
    });
  };

  // 완료 , 미완료 선택부분
  const getTodosByCompleted = (completed: boolean) => {};

  // todos 값 확인
  // 컴포넌트 생명주기에 코드를 실행하고 싶을때
  useEffect(() => {
    console.log("todos", todos);
  }, [todos]);

  return (
    <>
      <TodoTeamplate>
        <TodoHeader getTodosByCompleted={getTodosByCompleted} />
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onDelete={onDelete} onUpdate={onUpdate} />
      </TodoTeamplate>
    </>
  );
}

export default TodoMain;
