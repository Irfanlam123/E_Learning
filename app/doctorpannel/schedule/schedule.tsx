import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { Checkbox } from "react-native-paper";
import DateTimePicker from '@react-native-community/datetimepicker';

const daysOfWeek = [
  { name: "Monday", short: "Mon" },
  { name: "Tuesday", short: "Tue" },
  { name: "Wednesday", short: "Wed" },
  { name: "Thursday", short: "Thu" },
  { name: "Friday", short: "Fri" },
  { name: "Saturday", short: "Sat" },
  { name: "Sunday", short: "Sun" },
];

const timeSlots = [
  "9:00 AM - 12:00 PM",
  "12:00 PM - 3:00 PM",
  "3:00 PM - 6:00 PM",
  "6:00 PM - 9:00 PM",
  "Custom Time Slot"
];

const DoctorScheduleScreen = () => {
  const [availability, setAvailability] = useState<{[key: string]: boolean}>({});
  const [selectedSlot, setSelectedSlot] = useState(timeSlots[0]);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showSlotModal, setShowSlotModal] = useState(false);
  const [customStartTime, setCustomStartTime] = useState(new Date());
  const [customEndTime, setCustomEndTime] = useState(new Date());

  const toggleDay = (day: string) => {
    setAvailability(prev => ({
      ...prev,
      [day]: !prev[day]
    }));
  };

  const handleSave = () => {
    const selectedDays = Object.keys(availability).filter(day => availability[day]);
    if (selectedDays.length === 0) {
      Alert.alert("Error", "Please select at least one day");
      return;
    }
    
    Alert.alert(
      "Schedule Saved",
      `Available on: ${selectedDays.join(", ")}\nTime: ${selectedSlot}`,
      [{ text: "OK" }]
    );
  };

  const handleCustomTimeSelect = () => {
    const formattedStart = customStartTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const formattedEnd = customEndTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setSelectedSlot(`${formattedStart} - ${formattedEnd}`);
    setShowTimePicker(false);
    setShowSlotModal(false);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.heading}>Set Your Availability</Text>
      <Text style={styles.subtitle}>Select days and time slots when you're available</Text>

      <View style={styles.daysContainer}>
        {daysOfWeek.map(day => (
          <TouchableOpacity 
            key={day.name}
            style={[
              styles.dayButton,
              availability[day.name] && styles.dayButtonSelected
            ]}
            onPress={() => toggleDay(day.name)}
            activeOpacity={0.7}
          >
            <Text style={[
              styles.dayText,
              availability[day.name] && styles.dayTextSelected
            ]}>
              {day.short}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Available Time Slot</Text>
      <TouchableOpacity 
        style={styles.slotButton}
        onPress={() => setShowSlotModal(true)}
        activeOpacity={0.7}
      >
        <Text style={styles.slotText}>{selectedSlot}</Text>
        <Text style={styles.dropdownIcon}>▼</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.saveButton}
        onPress={handleSave}
        activeOpacity={0.8}
      >
        <Text style={styles.saveButtonText}>Save Schedule</Text>
      </TouchableOpacity>

      {/* Time Slot Modal */}
      <Modal
        visible={showSlotModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowSlotModal(false)}
      >
        <TouchableWithoutFeedback onPress={() => setShowSlotModal(false)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Select Time Slot</Text>
          
          {timeSlots.map((slot, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.slotOption,
                slot === selectedSlot && styles.slotOptionSelected
              ]}
              onPress={() => {
                if (slot === "Custom Time Slot") {
                  setShowTimePicker(true);
                } else {
                  setSelectedSlot(slot);
                  setShowSlotModal(false);
                }
              }}
            >
              <Text style={styles.slotOptionText}>{slot}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>

      {/* Custom Time Picker */}
      {showTimePicker && (
        <Modal
          visible={showTimePicker}
          transparent={true}
          animationType="slide"
        >
          <View style={styles.timePickerContainer}>
            <View style={styles.timePickerHeader}>
              <Text style={styles.timePickerTitle}>Set Custom Time</Text>
            </View>
            
            <View style={styles.timePickerRow}>
              <Text style={styles.timeLabel}>Start Time:</Text>
              <DateTimePicker
                value={customStartTime}
                mode="time"
                display="spinner"
                onChange={(event, date) => date && setCustomStartTime(date)}
                style={styles.timePicker}
              />
            </View>
            
            <View style={styles.timePickerRow}>
              <Text style={styles.timeLabel}>End Time:</Text>
              <DateTimePicker
                value={customEndTime}
                mode="time"
                display="spinner"
                onChange={(event, date) => date && setCustomEndTime(date)}
                style={styles.timePicker}
              />
            </View>
            
            <View style={styles.timePickerButtons}>
              <TouchableOpacity 
                style={styles.timePickerButton}
                onPress={() => setShowTimePicker(false)}
              >
                <Text style={styles.timePickerButtonText}>Cancel</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.timePickerButton, styles.timePickerButtonPrimary]}
                onPress={handleCustomTimeSelect}
              >
                <Text style={styles.timePickerButtonPrimaryText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  contentContainer: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2d3436",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#636e72",
    marginBottom: 24,
  },
  daysContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  dayButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#dfe6e9",
  },
  dayButtonSelected: {
    backgroundColor: "#0984e3",
    borderColor: "#0984e3",
  },
  dayText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2d3436",
  },
  dayTextSelected: {
    color: "#fff",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2d3436",
    marginBottom: 12,
  },
  slotButton: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#dfe6e9",
    marginBottom: 30,
  },
  slotText: {
    fontSize: 16,
    color: "#2d3436",
  },
  dropdownIcon: {
    fontSize: 12,
    color: "#636e72",
  },
  saveButton: {
    backgroundColor: "#00b894",
    borderRadius: 10,
    padding: 16,
    alignItems: "center",
    elevation: 2,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingBottom: 30,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2d3436",
    marginBottom: 20,
    textAlign: "center",
  },
  slotOption: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#dfe6e9",
  },
  slotOptionSelected: {
    backgroundColor: "#f1f9fe",
  },
  slotOptionText: {
    fontSize: 16,
    color: "#2d3436",
  },
  timePickerContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    margin: 20,
    padding: 20,
  },
  timePickerHeader: {
    borderBottomWidth: 1,
    borderBottomColor: "#dfe6e9",
    paddingBottom: 15,
    marginBottom: 15,
  },
  timePickerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2d3436",
    textAlign: "center",
  },
  timePickerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  timeLabel: {
    fontSize: 16,
    color: "#2d3436",
    marginRight: 15,
    width: 80,
  },
  timePicker: {
    flex: 1,
  },
  timePickerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  timePickerButton: {
    flex: 1,
    padding: 12,
    alignItems: "center",
    borderRadius: 8,
    marginHorizontal: 5,
    backgroundColor: "#f8f9fa",
  },
  timePickerButtonPrimary: {
    backgroundColor: "#0984e3",
  },
  timePickerButtonText: {
    color: "#2d3436",
    fontWeight: "500",
  },
  timePickerButtonPrimaryText: {
    color: "#fff",
    fontWeight: "500",
  },
});

export default DoctorScheduleScreen;