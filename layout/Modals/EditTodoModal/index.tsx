import Button from "@/components/Button";
import Input from "@/components/Input";
import StyledModal from "@/components/Modal";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/ui";
import { Todo } from "@/types/todo";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

type EditTodoModalProps = {
  onClose: () => void;
  onUpdate: (text: string) => void;
  isOpen: boolean;
  title: Todo["title"];
};

const EditTodoModal: React.FC<EditTodoModalProps> = ({
  onClose,
  onUpdate,
  isOpen,
  title,
}) => {
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [error, setError] = useState(false);

  const onSave = () => {
    if (!updatedTitle.trim()) {
      setError(true);
      return;
    }
    onUpdate(updatedTitle);
    onClose();
  };

  useEffect(() => {
    if (error && updatedTitle.trim()) {
      setError(false);
    }
  }, [updatedTitle, error]);

  return (
    <StyledModal isOpen={isOpen} onClose={onClose}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <StyledText size="lg">Edit Todo</StyledText>
        </View>
        <View style={styles.inputContainer}>
          <Input
            value={updatedTitle}
            onChangeText={setUpdatedTitle}
            placeholder="Edit todo..."
            error={error}
          />
        </View>
        <View style={styles.controlsContainer}>
          <Button text="Save" onPress={onSave} disabled={error} />
          <Button
            text="Cancel"
            variant="tansparent"
            onPress={() => {
              onClose();
              setUpdatedTitle(title);
            }}
          />
        </View>
      </View>
    </StyledModal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    gap: 20,
  },
  titleContainer: {
    borderColor: COLORS.SECONDARY_BORDER,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  inputContainer: {
    minHeight: 50,
  },
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 5,
  },
});

export default EditTodoModal;
