import { useRecoilValue } from 'recoil';
//import { todoListState } from '../store';
import { todoListFilteredState } from '../store';

import TodoItem from "./todo_item";
import TodoItemCreator from './todo_item_creator';
import TodoListFilters from './todo_list_filters';
import TodoListStats from './todo_list_stats';

export default function TodoList() {
  // const todoList = [{ id: 1, text: "Learn React JS", isCompleted: true },
  // { id: 2, text: "Practice Recoil State Management", isCompleted: false }];

  const todoList = useRecoilValue(todoListFilteredState);
  return (
    <>
    <TodoListStats/>
    <TodoListFilters/>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}