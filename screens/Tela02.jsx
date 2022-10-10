import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronLeftIcon,
  FolderOpenIcon,
  HomeIcon,
  LocationMarkerIcon,
  SearchIcon,
} from "react-native-heroicons/outline";
import Locations from "../components/Locations";

const LocationScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 16,
        }}
      >
        <TouchableOpacity onPress={navigation.goBack}>
          <ChevronLeftIcon size={24} color="#00CCBB" />
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: 500,
            fontSize: 14,
            lineHeight: 20,
            marginLeft: -24,
          }}
        >
          ENDEREÇO DE ENTREGA
        </Text>
        <View></View>
      </View>

      <View style={{ alignItems: "center" }}>
        <View
          style={{
            backgroundColor: "#f3f4f6",
            width: "24rem",
            height: 42,
            borderRadius: "0.25rem",
            padding: "0.25rem",
            justifyContent: "center",
          }}
        >
          <View style={{ marginLeft: "0.75rem", flexDirection: "row" }}>
            <SearchIcon size={18} color="#00CCBB" />
            <TextInput
              style={{ marginLeft: "0.75rem", flex: 1, outline: 0 }}
              placeholder="Buscar endereço e número"
            />
          </View>
        </View>
      </View>

      <View
        style={{
          marginTop: "1rem",
          padding: "1.25rem",
          justifyContent: "center",
        }}
      >
        <View style={{ flex: 1, alignItems: "center", flexDirection: "row" }}>
          <LocationMarkerIcon opacity={0.6} size={26} color="gray" />
          <View style={{ marginLeft: "1.25rem" }}>
            <Text
              style={{ marginBottom: "0.25rem", fontSize: 16, fontWeight: 600 }}
            >
              Usar minha localização atual
            </Text>
            <Text style={{ color: "#9ca3af", fontSize: 16 }}>
              Qi 5 - Gama (DF)
            </Text>
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
        style={{ flex: 1, padding: "1rem", backgroundColor: "#f3f4f6" }}
      >
        <Locations
          title="Sind Qi 5, 1580"
          title2="Pte. Alta Norte (Gama)"
          title3="Brasília/DF"
          title4="Apt X Torre Y, Edifício Z"
          location="Casa"
          icon={<HomeIcon opacity={0.6} size={24} color="gray" />}
        />
        <Locations
          title="St. Leste Projeção A"
          title2="Gama Leste"
          title3="Brasília/DF"
          title4="72444-240"
          location="Trabalho"
          icon={<FolderOpenIcon opacity={0.6} size={24} color="gray" />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LocationScreen;
