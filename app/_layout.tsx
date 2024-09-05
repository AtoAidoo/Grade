import { Stack } from "expo-router";
import * as NavigationBar from 'expo-navigation-bar';
import { useThemeColor } from "@/hooks/useThemeColor";
import { StatusBar } from "expo-status-bar";



export default function RootLayout() {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  const navBarColor = useThemeColor({}, "navBar");
  NavigationBar.setBackgroundColorAsync(backgroundColor);
  NavigationBar.setButtonStyleAsync(navBarColor)
  return (
    <>
    <Stack screenOptions={{
     contentStyle: {backgroundColor},
     headerTintColor: textColor,
     headerStyle: {backgroundColor}
    }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'hello',
          headerShown: false,
        }} />
        <Stack.Screen
        name="(auth)"
        options={{
          headerShown: false,
        }} />
        <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }} />
        <Stack.Screen
        name="(pages)"
        options={{
          headerShown: false,
        }} />
    </Stack>
    <StatusBar style="auto" />
    </>
  );
}
