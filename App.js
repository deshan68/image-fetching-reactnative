import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Image fetch from firbase</Text>
      <Image
        style={styles.Image}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/imageupload-265af.appspot.com/o/c022f6fb-69e3-48e7-b454-c84cedeca84b?alt=media&token=b37c9981-7280-4670-84d2-67807b5652ea",
        }}
      ></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Image: {
    width: 400,
    height: 300,
    resizeMode: "contain",
    borderRadius: 50,
  },
});
