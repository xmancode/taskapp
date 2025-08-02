import { ThemeProvider } from "@/hooks/useTheme";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

export default function RootLayout() {
  return (
    <ThemeProvider>
  <SafeAreaProvider>
    <SafeAreaView style={{flex:1}}>
      <ConvexProvider client={convex}>
  <Stack>
    <Stack.Screen name="(tabs)" options={{headerShown:false}}/>

  </Stack>
  </ConvexProvider>
  </SafeAreaView>
  </SafeAreaProvider>
  </ThemeProvider>
  );
}
