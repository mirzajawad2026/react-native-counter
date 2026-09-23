import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Alert, Pressable } from "react-native";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const ince = () => {
    setCount(count + 1);
  };
  const dec = () => {
    setCount(count - 1);
  };

  return (
    // The main container fills the whole screen and centers the card
    <View style={styles.container}>
      
      {/* The Card Holder */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Counter App</Text>
        
        {/* Modern Counter Display */}
        <Text style={styles.countText}>
          {count}
        </Text>

        {/* Horizontal Button Group */}
        <View style={styles.buttonGroup}>
          <Pressable onPress={dec} style={[styles.btn, styles.btnDecrease]}>
            <Text style={styles.btnText}>Decrease</Text>
          </Pressable>

          <Pressable onPress={ince} style={[styles.btn, styles.btnIncrease]}>
            <Text style={styles.btnText}>Increase</Text>
          </Pressable>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6FA", // Soft modern background color
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 30,
    borderRadius: 24,
    width: "85%",
    alignItems: "center",
    // Premium shadow effects
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5, // Shadow for Android
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#6B7280", // Slate gray
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginBottom: 10,
  },
  countText: {
    fontSize: 72,
    fontWeight: "700",
    color: "#1F2937", // Deep charcoal color
    marginBottom: 30,
  },
  buttonGroup: {
    flexDirection: "row", // Places buttons side-by-side
    justifyContent: "space-between",
    width: "100%",
  },
  btn: {
    flex: 1, // Makes both buttons equal width
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 6,
    // Small active elevation for the buttons
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  btnIncrease: {
    backgroundColor: "#10B981", // Vibrant, friendly emerald green
  },
  btnDecrease: {
    backgroundColor: "#EF4444", // Clean crimson red
  },
  btnText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});
