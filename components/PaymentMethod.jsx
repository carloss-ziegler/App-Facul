import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const PaymentMethod = ({ icon, title, subtitle }) => {
  return (
    <TouchableOpacity
      style={{
        marginRight: "0.5rem",
        padding: "0.75rem",
        borderWidth: 1,
        justifyContent: "space-between",
        borderColor: "rgb(209, 213, 219)",
        borderRadius: "0.5rem",
        marginTop: "1rem",
        width: "9rem",
        height: "8rem",
      }}
    >
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <Text
            style={{
              fontWeight: 500,
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
            }}
          >
            {icon}
          </Text>
          <View style={{ justifyContent: "flex-end" }}>
            <Text style={{ fontSize: "0.75rem", lineHeight: "1rem" }}>
              {title}
            </Text>
            <Text style={{ fontWeight: "bold" }}>{subtitle}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PaymentMethod;
