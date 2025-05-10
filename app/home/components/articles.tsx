import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { fetchArticles, togglePinArticle } from "../homeSlice";

type Article = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  pinned: boolean;
};

const HealthArticles: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    articles: apiArticles,
    loading,
    error,
  } = useAppSelector((state) => state.article);
  const [refreshing, setRefreshing] = useState(false);

  // Transform API data to match component's expected format
  const transformedArticles: Article[] = apiArticles.map((article) => ({
    id: article.ID.toString(),
    title: article.title,
    description: article.desc,
    imageUrl: article.image || "https://via.placeholder.com/150",
    pinned: article.pin === true || false,
  }));

  const togglePin = (id: string) => {
    console.log("Toggling pin for article:", id);
    dispatch(togglePinArticle(id));
  };

  const handleRefresh = () => {
    setRefreshing(true);
    dispatch(fetchArticles())
      .unwrap()
      .finally(() => setRefreshing(false));
  };

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  if (loading && !refreshing) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>Error: {error}</Text>
        <TouchableOpacity onPress={handleRefresh}>
          <Text style={styles.retry}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Latest Articles</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      {/* Articles List */}
      <FlatList
        data={transformedArticles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <View style={styles.content}>
              <Text style={styles.articleTitle}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
            <TouchableOpacity onPress={() => togglePin(item.id)}>
              <Feather
                name="bookmark"
                size={22}
                color={item.pinned ? "blue" : "red"}
              />
            </TouchableOpacity>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={["#4a90e2"]}
            tintColor="#4a90e2"
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  header: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
  },
  seeAll: {
    fontSize: 14,
    color: "#4a90e2",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  description: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  retry: {
    color: "#4a90e2",
    fontSize: 16,
  },
});

export default HealthArticles;
