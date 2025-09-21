import { Todo } from "@/types/todo";
import { FlatList, View } from "react-native";
import TodoItem from "../Todo";

type TodoListProps = {
  todos: Todo[];
  onCheck: (id: Todo["id"]) => void;
  onDelete: (id: Todo["id"]) => void;
  onUpdate: (id: Todo["id"], title: Todo["title"]) => void;
};

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onCheck,
  onDelete,
  onUpdate,
}) => {
  return (
    <View>
      <FlatList
        data={todos}
        keyExtractor={(todo) => todo.id.toString()}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            onCheck={onCheck}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        )}
      />
    </View>
  );
};

export default TodoList;
