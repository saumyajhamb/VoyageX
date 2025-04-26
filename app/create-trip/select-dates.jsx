import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import { Calendar } from "react-native-calendars";
import { CreateTripContext } from './../../context/CreateTripContext';

export default function SelectDate() {
  const navigation = useNavigation();
  const router = useRouter();
  const { tripData, setTripData } = useContext(CreateTripContext);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const timeDiff = end.getTime() - start.getTime();
      const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;

      setTripData({
        ...tripData,
        startDate:startDate,
        endDate:endDate,
        totalDays: diffDays,
      });

      setDuration(diffDays);
    }
  }, [startDate, endDate]);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  const handleDateSelect = (day) => {
    const selected = day.dateString;

    if (!startDate || (startDate && endDate)) {
      setStartDate(selected);
      setEndDate("");
    } else if (new Date(selected) > new Date(startDate)) {
      setEndDate(selected);
    } else {
      setStartDate(selected);
      setEndDate("");
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Trip Dates 📅</Text>

      <Calendar
        minDate={today}
        onDayPress={handleDateSelect}
        markedDates={{
          ...(startDate && {
            [startDate]: { selected: true, startingDay: true, color: "green", textColor: "white" },
          }),
          ...(endDate && {
            [endDate]: { selected: true, endingDay: true, color: "green", textColor: "white" },
          }),
        }}
        markingType="period"
        style={styles.calendar}
        theme={{
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#00adf5",
          arrowColor: Colors.PRIMARY,
        }}
      />

     {startDate && endDate && (
       <Text style={styles.durationText}>
         Let's gooo! {duration} days of fun — locked, loadin' and vibin'!⚡
       </Text>
    )}


      {startDate && endDate && (
        <TouchableOpacity style={styles.continueButton} onPress={() => router.push('/create-trip/select-budget')}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 50,
    backgroundColor: Colors.BG_LOGIN,
    height: "100%",
  },
  header: {
    fontFamily: "outfit-bold",
    fontSize: 30,
    marginBottom: 20,
  },
  calendar: {
    borderRadius: 15,
  },
  durationText: {
    fontSize: 18,
    fontFamily: "outfit-medium",
    marginTop: 20,
    color: "green",
  },
  continueButton: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 15,
    marginTop: 30,
    alignItems: "center",
  },
  continueText: {
    color: Colors.WHITE,
    fontFamily: "outfit",
    fontSize: 15,
  },
});
