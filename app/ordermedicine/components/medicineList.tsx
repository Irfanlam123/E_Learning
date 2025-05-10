// src/screens/MedicineList.tsx
import { RootState } from "@/app/store";
import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchMedicines, Medicine } from "../ordermedicneSlice";


const MedicineList = () => {
  const dispatch = useDispatch<any>();
  const { medicines, loading, error } = useSelector(
    (state: RootState) => state.Medicine
  );

  useEffect(() => {
    dispatch(fetchMedicines());
  }, [dispatch]);

  const handleOrder = (medicine: any) => {
    if (!medicine.stock) {
      Alert.alert("Out of Stock", `${medicine.name} is not available right now.`);
      return;
    }

    // dispatch(orderMedicine(medicine.id));
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="indigo" />
        <Text>Loading medicines...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loader}>
        <Text style={{ color: "red" }}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Medicine List</Text>
      <FlatList
        data={medicines}
        keyExtractor={(item:Medicine) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.details}>Type: {item.type}</Text>
              <Text style={styles.details}>Price: ₹{item.price}</Text>
              <Text style={styles.details}>Quantity: {item.quantity}</Text>
              <TouchableOpacity
                style={[
                  styles.button,
                  !item.stock && styles.outOfStockButton,
                ]}
                onPress={() => handleOrder(item)}
                disabled={!item.stock}
              >
                <Text style={styles.buttonText}>
                  {item.stock ? "Order" : "Out of Stock"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f2f2f2",
    width: "100%",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "center",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 15,
    padding: 12,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
    justifyContent: "space-between",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  details: {
    fontSize: 14,
    color: "#555",
    marginBottom: 2,
  },
  button: {
    marginTop: 8,
    backgroundColor: "indigo",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  outOfStockButton: {
    backgroundColor: "#d9534f",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default MedicineList;
