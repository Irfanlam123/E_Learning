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

  // Transform and sort: pinned articles first
  const transformedArticles: Article[] = apiArticles
    .map((article) => ({
      id: article.ID.toString(),
      title: article.title,
      description: article.desc,
      imageUrl: article.image || "https://via.placeholder.com/150",
      pinned: article.pin === true,
    }))
    .sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));

  const togglePin = (id: string) => {
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
        <ActivityIndicator size="large" color="#4a90e2" />
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
      <View style={styles.header}>
        <Text style={styles.title}>Latest Articles</Text>
        <TouchableOpacity onPress={handleRefresh}>
          <Text style={styles.seeAll}>Refresh</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={transformedArticles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.card, item.pinned && styles.pinnedCard]}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <View style={styles.content}>
              <Text style={styles.articleTitle}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
            <TouchableOpacity onPress={() => togglePin(item.id)}>
              <Feather
                name={item.pinned ? "bookmark" : "bookmark"}
                size={22}
                color={item.pinned ? "#007BFF" : "#ccc"}
              />
            </TouchableOpacity>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
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
    backgroundColor: "#F4F8FB",
  },
  header: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
  },
  seeAll: {
    fontSize: 14,
    color: "#007BFF",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  pinnedCard: {
    backgroundColor: "#E9F5FF",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 12,
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
    marginTop: 4,
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
