import TodoItem from "./todo_item";
import TodoItemCreator from './todo_item_creator';

export default function TodoList() {
  const todoList = [{ id: 1, text: "Learn React JS", isCompleted: true },
  { id: 2, text: "Practice Recoil State Management", isCompleted: false }];

  return (
    <>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}