import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const Services = ({ title, subtitle, icon }) => {
  return (
    <TouchableOpacity style={{ marginRight: "1.25rem", marginTop: "1.25rem" }}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            width: "4rem",
            height: "4rem",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderRadius: 9999,
            borderColor: "rgb(209, 213, 219)",
          }}
        >
          <Image
            source={icon}
            style={{ width: "3.5rem", height: "3.5rem", borderRadius: 9999 }}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: "0.5rem",
          }}
        >
          <Text style={{ fontSize: "0.75rem", lineHeight: "1rem" }}>
            {title}
          </Text>
          <Text style={{ fontSize: "0.75rem", lineHeight: "1rem" }}>
            {subtitle}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Services;
