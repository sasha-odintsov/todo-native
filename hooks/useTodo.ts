import { STORAGE_KEY } from "@/constants/storage";
import { Todo } from "@/types/todo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const defaultTodos: Todo[] = [
  {
    id: 1,
    title: "Item 1",
    is_completed: false,
  },
  {
    id: 2,
    title: "Item 2",
    is_completed: false,
  },
  {
    id: 3,
    title: "Item 3",
    is_completed: true,
  },
];

const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(false);

   const loadTodos = async () => {
     try {
      setIsLoading(true);
      const storedTodos = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      } else {
        setTodos(defaultTodos);
      }
    } catch (e) {
      console.log(e);
      setTodos(defaultTodos);
    } finally {
      setIsLoading(false);
    }
  };

  const saveTodos = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (e) {
      console.log(e);
    }
  };

  const completed = todos.filter(({ is_completed }) => is_completed);

  const onAppend = (title: Todo["title"]) => {
    setTodos([...todos, { id: +new Date(), title, is_completed: false }]);
  };

  const onDelete = (deletedId: Todo["id"]) => {
    setTodos(todos.filter(({ id }) => id !== deletedId));
  };

  const onUpdate = (id: Todo["id"], title: Todo["title"]) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, title } : todo)));
  };

  const onCheck = (id: Todo["id"]) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, is_completed: !todo.is_completed } : todo
      )
    );
  };

  useEffect(() => {
    loadTodos();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      saveTodos();
    }
  }, [todos]);

  return {
    todos, 
    completed,
    onAppend,
    onDelete,
    onUpdate,
    onCheck,
    isLoading,
  }
}

export default useTodo;
