import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/ui";
import { StyleSheet, View } from "react-native";
import { getFormattedDate } from "@/helpers/date";

type HeaderProps = {
  total: number;
  completed: number;
};

const Header: React.FC<HeaderProps> = ({ total, completed }) => {
  const formatedDate = getFormattedDate(new Date());

  return (
    <View style={styles.container}>
      <View style={styles.headerMainContent}>
        <StyledText size="xl" style={{ fontWeight: "600" }}>
          TODO LIST
        </StyledText>
        <StyledText size="md">{formatedDate}</StyledText>
      </View>
      <StyledText size="md">
        Completed: {completed} / {total}
      </StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 10,
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
    paddingBottom: 10,
  },
  headerMainContent: {
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});

export default Header;
