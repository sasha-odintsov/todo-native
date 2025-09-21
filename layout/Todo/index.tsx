import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/ui";
import { Todo } from "@/types/todo";
import { useState } from "react";
import { StyleSheet, Vibration, View } from "react-native";
import DeleteTodoModal from "../Modals/DeleteTodoModal";
import EditTodoModal from "../Modals/EditTodoModal";

type TodoProps = {
  todo: Todo;
  onCheck: (id: Todo["id"]) => void;
  onUpdate: (id: Todo["id"], title: Todo["title"]) => void;
  onDelete: (id: Todo["id"]) => void;
};

const TodoItem: React.FC<TodoProps> = ({
  todo,
  onCheck,
  onDelete,
  onUpdate,
}) => {
  const { id, is_completed, title } = todo;
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Checkbox
          checked={is_completed}
          onCheck={() => {
            onCheck(id);
            Vibration.vibrate(50);
          }}
        />
        <StyledText
          style={[
            { textDecorationLine: is_completed ? "line-through" : "none" },
            { color: is_completed ? COLORS.SUCCESS : COLORS.PRIMARY_TEXT },
          ]}
        >
          {title}
        </StyledText>
      </View>
      <View style={styles.controls}>
        <Button
          icon="pencil"
          size="small"
          onPress={() => setEditModalOpen(true)}
        />
        <Button
          icon="trash"
          size="small"
          variant="danger"
          onPress={() => setDeleteModalOpen(true)}
        />
      </View>
      <EditTodoModal
        onClose={() => setEditModalOpen(false)}
        onUpdate={(title) => onUpdate(id, title)}
        isOpen={isEditModalOpen}
        title={title}
      />
      <DeleteTodoModal
        onClose={() => setDeleteModalOpen(false)}
        isOpen={isDeleteModalOpen}
        onDelete={() => onDelete(id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    padding: 15,
    marginVertical: 7,
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
    borderRadius: 6,
  },
  controls: {
    flexDirection: "row",
    gap: 5,
  },
  titleContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    width: "70%",
  },
});

export default TodoItem;
