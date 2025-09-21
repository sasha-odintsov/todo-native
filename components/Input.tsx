import { COLORS } from "@/constants/ui";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

type InputProps = TextInputProps & {
  error?: boolean;
};

const Input: React.FC<InputProps> = ({ error, style, ...props }) => {
  return (
    <TextInput
      style={[styles.input, style, error ? styles.error : null]}
      {...props}
      placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    // flexGrow: 1,
    color: COLORS.PRIMARY_TEXT,
    borderColor: COLORS.PRIMARY_BORDER,
    borderWidth: 1,
    borderRadius: 6,
  },
  error: {
    borderColor: COLORS.DANGER_BORDER,
  },
});

export default Input;
