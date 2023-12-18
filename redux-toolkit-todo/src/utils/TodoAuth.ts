import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from './../features/todo/TodoSlice';
import { login, logout } from './../features/auth/AuthSlice';

const TodoAuth = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleAddTodo = (text: string) => {
    dispatch(addTodo(text));
  };

  const handleRemoveTodo = (id: string) => {
    dispatch(removeTodo(id));
  };

  const handleLogin = (user) => {
    dispatch(login(user));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return {todos, isAuthenticated, handleAddTodo, handleRemoveTodo, handleLogin, handleLogout};
};

export default TodoAuth;
