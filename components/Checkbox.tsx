import { COLORS } from "@/constants/ui";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

type CheckboxProps = {
  checked: boolean;
  onCheck: () => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ checked, onCheck }) => {
  return (
    <TouchableOpacity onPress={onCheck}>
      <Ionicons
        name={checked ? "checkmark-circle-outline" : "ellipse-outline"}
        size={24}
        color={checked ? COLORS.SUCCESS : "#fff"}
      />
    </TouchableOpacity>
  );
};

export default Checkbox;
