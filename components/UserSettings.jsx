import { View, Text } from "react-native";
import React from "react";
import { ChevronRightIcon } from "react-native-heroicons/outline";

const UserSettings = ({ text, icon, number, novo, subtitle }) => {
  return (
    <View style={{ borderBottomWidth: 1, borderColor: "#e5e7eb" }}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 12,
          padding: 16,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>{icon}</Text>
          <View>
            <Text style={{ fontWeight: 500, marginLeft: 8 }}>{text}</Text>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                marginLeft: 8,
                color: "#d1d5db",
              }}
            >
              {subtitle}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {number ? (
            <View
              style={{
                width: 20,
                height: 20,
                marginRight: 8,
                borderRadius: 9999,
                backgroundColor: "#dc2626",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#fff",
                  fontSize: 14,
                  lineHeight: 20,
                }}
              >
                {number}
              </Text>
            </View>
          ) : (
            <View
              style={{
                width: 44,
                height: 20,
                marginRight: 8,
                borderRadius: 9999,
                backgroundColor: "#dc2626",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#FFF",
                  fontSize: 14,
                  lineHeight: 20,
                }}
              >
                {novo}
              </Text>
            </View>
          )}

          <ChevronRightIcon color="#00CCBB" size={16} />
        </View>
      </View>
    </View>
  );
};

export default UserSettings;
