import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What services does the Health Care App provide?",
    answer: "Our Health Care App provides appointment booking, video consultations, medical record management, and health monitoring features."
  },
  {
    question: "How do I book an appointment with a doctor?",
    answer: "You can easily book an appointment through the app by navigating to the 'Appointments' section and selecting your preferred doctor and time slot."
  },
  {
    question: "Can I consult with doctors online?",
    answer: "Yes, our app supports video consultations. Simply select 'Video Call' when booking your appointment."
  },
  {
    question: "Is my medical data secure?",
    answer: "We prioritize your privacy. All medical data is encrypted and stored securely, accessible only by you and your authorized doctors."
  },
  {
    question: "How can I access my medical history?",
    answer: "You can view your medical history under the 'Health Records' section of the app."
  }
];

const FAQsScreen: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Frequently Asked Questions</Text>
      {faqs.map((faq, index) => (
        <View key={index} style={styles.card}>
          <TouchableOpacity onPress={() => toggleAccordion(index)}>
            <Text style={styles.question}>{faq.question}</Text>
          </TouchableOpacity>
          {openIndex === index && (
            <Text style={styles.answer}>{faq.answer}</Text>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  card: {
    marginBottom: 12,
    backgroundColor: "#f9f9f9",
    padding: 12,
    borderRadius: 8,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  question: {
    fontSize: 16,
    fontWeight: "600",
  },
  answer: {
    marginTop: 8,
    fontSize: 14,
    color: "#555",
  },
});

export default FAQsScreen;