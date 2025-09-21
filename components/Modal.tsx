import { COLORS } from "@/constants/ui";
import { Modal, StyleSheet, TouchableNativeFeedback, View } from "react-native";

type StyledModalProps = {
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
};

const StyledModal: React.FC<StyledModalProps> = ({
  onClose,
  isOpen,
  children,
}) => {
  return (
    <Modal
      visible={isOpen}
      onRequestClose={onClose}
      animationType="fade"
      transparent={true}
    >
      <TouchableNativeFeedback onPress={onClose}>
        <View style={styles.modalBackgroundContainer}>
          <TouchableNativeFeedback onPress={(e) => e.stopPropagation()}>
            <View style={styles.modalContent}>{children}</View>
          </TouchableNativeFeedback>
        </View>
      </TouchableNativeFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackgroundContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    padding: 20,
    borderRadius: 10,
    width: "90%",
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  },
});

export default StyledModal;
