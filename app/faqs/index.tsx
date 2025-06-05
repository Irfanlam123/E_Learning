import React, { useState, useRef } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Animated,
  LayoutAnimation,
  Platform,
  UIManager
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Enable LayoutAnimation for Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is this e-learning platform about?",
    answer: "Our platform connects students with expert mentors. Students can book one-on-one sessions, access structured courses, and track their progress."
  },
  {
    question: "How do I book a session with a mentor?",
    answer: "Go to the 'Teacher' section, view available mentors, and choose a convenient time slot for your session."
  },
  {
    question: "Can I access free courses?",
    answer: "Some courses are free, but most are premium and require enrollment. You can check course details in the 'Courses' section."
  },
  {
    question: "Who adds the courses on the platform?",
    answer: "Only platform admins can add or modify courses to ensure quality and structure. Mentors guide students through these courses."
  },
  {
    question: "How do I track my learning progress?",
    answer: "You can track your progress under your profile. It includes session history, course completion status, and feedback from mentors."
  }
];

const FAQsScreen: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const rotateAnims = useRef(faqs.map(() => new Animated.Value(0))).current;

  const toggleAccordion = (index: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    
    // Animate the arrow icon
    Animated.timing(rotateAnims[index], {
      toValue: openIndex === index ? 0 : 1,
      duration: 300,
      useNativeDriver: true
    }).start();

    setOpenIndex(openIndex === index ? null : index);
  };

  const rotateIcon = (index: number) => {
    return rotateAnims[index].interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg']
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Frequently Asked Questions</Text>
      <Text style={styles.subtitle}>Find answers to common questions about our platform</Text>
      
      {faqs.map((faq, index) => (
        <View key={index} style={[
          styles.card,
          openIndex === index && styles.cardOpen
        ]}>
          <TouchableOpacity 
            style={styles.questionContainer}
            onPress={() => toggleAccordion(index)}
            activeOpacity={0.7}
          >
            <Text style={styles.question}>{faq.question}</Text>
            <Animated.View style={{ 
              transform: [{ rotate: rotateIcon(index) }] 
            }}>
              <Ionicons name="chevron-down" size={20} color="#4f46e5" />
            </Animated.View>
          </TouchableOpacity>
          
          {openIndex === index && (
            <View style={styles.answerContainer}>
              <View style={styles.divider} />
              <Text style={styles.answer}>{faq.answer}</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8fafc",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 8,
    textAlign: "center",
    color: "#1e293b",
    fontFamily: 'sans-serif-medium',
  },
  subtitle: {
    fontSize: 14,
    color: "#64748b",
    textAlign: "center",
    marginBottom: 24,
    fontFamily: 'sans-serif',
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardOpen: {
    shadowColor: "#4f46e5",
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  questionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  question: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1e293b",
    flex: 1,
    marginRight: 12,
    fontFamily: 'sans-serif-medium',
  },
  answerContainer: {
    marginTop: 12,
  },
  divider: {
    height: 1,
    backgroundColor: "#e2e8f0",
    marginBottom: 12,
  },
  answer: {
    fontSize: 14,
    lineHeight: 22,
    color: "#475569",
    fontFamily: 'sans-serif',
  },
});

export default FAQsScreen;