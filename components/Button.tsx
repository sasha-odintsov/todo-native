import { COLORS } from "@/constants/ui";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import StyledText from "./StyledText";

type ButtonProps = TouchableOpacityProps & {
  text?: string;
  icon?: React.ComponentProps<typeof Ionicons>["name"];
  size?: "default" | "small" | "large";
  variant?: "primary" | "danger" | "tansparent";
};

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  style,
  size = "default",
  variant = "primary",
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.base,
        styles[variant],
        size === "small" ? styles.small : null,
        props.disabled ? styles.disabled : null,
        style,
      ]}
      {...props}
    >
      {text && <StyledText>{text}</StyledText>}
      {icon && <Ionicons name={icon} size={14} color={COLORS.PRIMARY_TEXT} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 6,
  },
  small: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  primary: {
    backgroundColor: COLORS.PRIMARY_BACKGROUND_BUTTON,
  },
  danger: {
    backgroundColor: COLORS.DANGER_BACKGROUND,
  },
  tansparent: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: COLORS.SECONDARY_BORDER,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default Button;
