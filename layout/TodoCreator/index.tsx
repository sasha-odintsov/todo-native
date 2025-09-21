import Button from "@/components/Button";
import Input from "@/components/Input";
import { Todo } from "@/types/todo";
import { useEffect, useState } from "react";
import { Keyboard, StyleSheet, View, Dimensions } from "react-native";

type TodoCreatorProps = {
  onAppend: (title: Todo["title"]) => void;
  isLoading: boolean;
};

const TodoCreator: React.FC<TodoCreatorProps> = ({ onAppend, isLoading }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);

  const windowWidth = Dimensions.get("window").width;

  const onPress = () => {
    if (!text.trim()) {
      setError(true);
      return;
    }
    Keyboard.dismiss();
    onAppend(text);
    setText("");
  };

  useEffect(() => {
    if (error && text.trim()) {
      setError(false);
    }
  }, [text, error]);

  return (
    <View style={styles.container}>
      <Input
        placeholder="Add a task..."
        value={text}
        onChangeText={setText}
        error={error}
        style={{ width: windowWidth - 62 }}
      />
      <Button text="+" onPress={onPress} disabled={isLoading || error} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 5,
    marginVertical: 20,
  },
});

export default TodoCreator;
