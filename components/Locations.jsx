import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  CheckCircleIcon,
  DotsVerticalIcon,
  PencilIcon,
  TrashIcon,
} from "react-native-heroicons/outline";
import Modal from "react-native-modal";

const Locations = ({ title, title2, title3, title4, location, icon }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <Modal
        onBackdropPress={toggleModal}
        style={{ width: "100%", justifyContent: "flex-end", margin: 0 }}
        isVisible={isModalVisible}
      >
        <View
          style={{
            width: "100%",
            height: "14rem",
            justifyContent: "space-between",
            padding: "1.25rem",
            backgroundColor: "#FFF",
            borderRadius: "0.25rem",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontWeight: 600,
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
              }}
            >
              {location}
            </Text>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              style={{
                borderRadius: "0.25rem",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1.1,
                borderColor: "#e5e7eb",
                width: "11rem",
                height: "3rem",
                padding: "0.75rem",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <TrashIcon color="gray" size={24} opacity={0.6} />
                <Text style={{ fontWeight: 500 }}>Excluir</Text>
                <View></View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderRadius: "0.25rem",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1.1,
                borderColor: "#e5e7eb",
                width: "11rem",
                height: "3rem",
                padding: "0.75rem",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <PencilIcon color="gray" size={24} opacity={0.6} />
                <Text style={{ fontWeight: 500 }}>Editar</Text>
                <View></View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={{ alignItems: "center", width: "100%" }}
              onPress={toggleModal}
            >
              <Text style={{ color: "#e32929", fontWeight: 600 }}>
                Cancelar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View
        style={{
          marginBottom: "1rem",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1.5 },
          shadowOpacity: 0.5,
          shadowRadius: 2,
          elevation: 3,
          width: "24rem",
          height: "7rem",
          borderRadius: "0.5rem",
          backgroundColor: "#FFF",
          borderColor: "#00CCBB",
          borderWidth: 1.1,
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <View style={{ flex: 1, justifyContent: "center" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {icon}
            <View style={{ marginLeft: "1rem", flex: 1, width: "20rem" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontWeight: 600 }}>{location}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ marginRight: "0.75rem" }}>
                    <CheckCircleIcon size={20} color="#00CCBB" />
                  </View>
                  <TouchableOpacity onPress={toggleModal}>
                    <DotsVerticalIcon size={22} color="#00CCBB" />
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={{ color: "#9ca3af" }}>{title}</Text>
              <Text style={{ color: "#9ca3af" }}>{title2}</Text>
              <Text style={{ color: "#9ca3af" }}>{title3}</Text>
              <Text
                style={{
                  color: "#9ca3af",
                  marginTop: "0.25rem",
                  fontSize: "0.75rem",
                  lineHeight: "1rem",
                }}
              >
                {title4}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Locations;
