import { router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions
} from "react-native";
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const { width } = Dimensions.get('window');

// Data
const statsData = [
  {
    title: "Students",
    value: "42",
    icon: "users",
    color: "#6366F1", // Indigo
    trend: "+5%",
    action: () => router.push('/students')
  },
  {
    title: "Live Classes",
    value: "3",
    icon: "video",
    color: "#EC4899", // Pink
    trend: "2 ongoing"
  },
  {
    title: "Courses",
    value: "8",
    icon: "book-open",
    color: "#10B981", // Emerald
    trend: "↑ 2 new"
  },
  {
    title: "Earnings",
    value: "₹12.3K",
    icon: "rupee-sign",
    color: "#F59E0B", // Amber
    trend: "↑ 15%"
  }
];

const upcomingClasses = [
  {
    title: "Advanced React",
    time: "10:00 AM",
    date: "Today",
    students: 15
  },
  {
    title: "UI/UX Design",
    time: "2:00 PM",
    date: "Tomorrow",
    students: 12
  }
];

const TeacherDashboard = () => {
  const scrollX = new Animated.Value(0);

  const renderStats = () => (
    <View style={styles.statsContainer}>
      {statsData.map((item, index) => (
        <TouchableOpacity 
          key={index} 
          style={[styles.statCard, { backgroundColor: item.color }]}
          activeOpacity={0.9}
          onPress={item.action}
        >
          <View style={styles.statIcon}>
            <FontAwesome5 name={item.icon} size={20} color="#fff" />
          </View>
          <Text style={styles.statValue}>{item.value}</Text>
          <Text style={styles.statTitle}>{item.title}</Text>
          <Text style={styles.statTrend}>{item.trend}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderUpcomingClasses = () => (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Upcoming Classes</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      
      {upcomingClasses.map((item, index) => (
        <TouchableOpacity key={index} style={styles.classCard}>
          <View style={styles.classInfo}>
            <Text style={styles.classTitle}>{item.title}</Text>
            <View style={styles.classMeta}>
              <Ionicons name="time-outline" size={14} color="#64748B" />
              <Text style={styles.classText}>{item.date}, {item.time}</Text>
            </View>
            <View style={styles.classMeta}>
              <Ionicons name="people-outline" size={14} color="#64748B" />
              <Text style={styles.classText}>{item.students} students</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.startButton}>
            <MaterialCommunityIcons name="arrow-right" size={20} color="#fff" />
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <ScrollView 
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, Teacher!</Text>
          <Text style={styles.subtitle}>Here's your dashboard</Text>
        </View>
        <TouchableOpacity style={styles.notificationBtn}>
          <Ionicons name="notifications-outline" size={24} color="#334155" />
          <View style={styles.notificationBadge} />
        </TouchableOpacity>
      </View>

      {/* Stats Cards */}
      {renderStats()}

      {/* Upcoming Classes */}
      {renderUpcomingClasses()}

      {/* Quick Actions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionCard}>
            <View style={[styles.actionIcon, { backgroundColor: '#E0F2FE' }]}>
              <FontAwesome5 name="plus" size={18} color="#0369A1" />
            </View>
            <Text style={styles.actionText}>New Class</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionCard}>
            <View style={[styles.actionIcon, { backgroundColor: '#ECFDF5' }]}>
              <FontAwesome5 name="edit" size={18} color="#10B981" />
            </View>
            <Text style={styles.actionText}>Create Content</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionCard}>
            <View style={[styles.actionIcon, { backgroundColor: '#FEF2F2' }]}>
              <Ionicons name="analytics-outline" size={18} color="#EF4444" />
            </View>
            <Text style={styles.actionText}>Analytics</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0F172A',
  },
  subtitle: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
  },
  notificationBtn: {
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  statCard: {
    width: width * 0.43,
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  statValue: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  statTitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
    marginBottom: 4,
  },
  statTrend: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
  },
  section: {
    marginBottom: 25,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0F172A',
  },
  seeAll: {
    fontSize: 14,
    color: '#6366F1',
    fontWeight: '500',
  },
  classCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  classInfo: {
    flex: 1,
  },
  classTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 8,
  },
  classMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  classText: {
    fontSize: 13,
    color: '#64748B',
    marginLeft: 6,
  },
  startButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#6366F1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionCard: {
    width: width * 0.28,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  actionText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#334155',
    textAlign: 'center',
  },
});

export default TeacherDashboard;