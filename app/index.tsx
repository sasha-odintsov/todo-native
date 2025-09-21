import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/ui";
import useTodo from "@/hooks/useTodo";
import Header from "@/layout/Header";
import TodoCreator from "@/layout/TodoCreator";
import TodoList from "@/layout/TodoList";
import { StatusBar, StyleSheet, View } from "react-native";

export default function Index() {
  const { todos, completed, onAppend, onDelete, onUpdate, onCheck, isLoading } =
    useTodo();

  return (
    <View style={styles.conteiner}>
      <StatusBar barStyle="light-content" />
      <Header total={todos.length} completed={completed.length} />
      <View style={styles.contentContainer}>
        <TodoCreator onAppend={onAppend} isLoading={isLoading} />
        {isLoading ? (
          <StyledText size="md">Loading...</StyledText>
        ) : (
          <TodoList
            todos={todos}
            onCheck={onCheck}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  },
  contentContainer: {
    paddingHorizontal: 10,
  },
});
