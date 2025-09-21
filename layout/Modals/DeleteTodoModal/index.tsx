import Button from "@/components/Button";
import StyledModal from "@/components/Modal";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/ui";
import { StyleSheet, View } from "react-native";

type DeleteTodoModalProps = {
  onClose: () => void;
  isOpen: boolean;
  onDelete: () => void;
};

const DeleteTodoModal: React.FC<DeleteTodoModalProps> = ({
  onClose,
  isOpen,
  onDelete,
}) => {
  return (
    <StyledModal onClose={onClose} isOpen={isOpen}>
      <View style={styles.modalContent}></View>
      <View style={styles.titleContainer}>
        <StyledText size="lg">Delete Todo</StyledText>
      </View>
      <StyledText size="md" style={styles.content}>
        Are you sure you want to delete this record?
      </StyledText>
      <View style={styles.controlsContainer}>
        <Button text="Yes" onPress={onDelete} variant="danger" />
        <Button text="Cancel" variant="tansparent" onPress={onClose} />
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
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 5,
  },
  content: {
    marginVertical: 15,
  },
});

export default DeleteTodoModal;
