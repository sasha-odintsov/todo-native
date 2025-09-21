import { COLORS } from "@/constants/ui";
import { StyleSheet, Text, TextProps } from "react-native";

type StyledTextProps = TextProps & {
  size?: "sm" | "md" | "lg" | "xl";
};

const StyledText: React.FC<StyledTextProps> = ({
  style,
  size = "sm",
  ...props
}) => {
  return <Text style={[styles.base, styles[size], style]} {...props} />;
};

const styles = StyleSheet.create({
  base: {
    color: COLORS.PRIMARY_TEXT,
  },
  sm: {
    fontSize: 14,
  },
  md: {
    fontSize: 16,
  },
  lg: {
    fontSize: 22,
  },
  xl: {
    fontSize: 24,
  },
});

export default StyledText;
