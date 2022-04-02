import { checkError, client } from './client';

export async function fetchTodos() {
  const data = await client.from('todos').select('*');
  return checkError(data);
}

export async function addTodo(todo) {
  const data = await client.from('todos').insert(todo);
  return checkError(data);
}

export async function toggleComplete(todo){
  const data = await client.from('todos').update({ complete:true }).match({ id:todo.id }).single();
  return checkError(data);
}