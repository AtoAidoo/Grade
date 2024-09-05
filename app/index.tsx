import { Text, View } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import Logo from "@/components/Logo";
import { router } from "expo-router";


export default function Index() {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  setTimeout(() => {
    router.replace("./Login")
  },5000);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Logo size={30} />
    </View>
  );
}



