import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import UserSettings from "../components/UserSettings";
import {
  BellIcon,
  CreditCardIcon,
  HeartIcon,
  LocationMarkerIcon,
  TicketIcon,
} from "react-native-heroicons/outline";

const Tela1 = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#e5e7eb",
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../assets/BG.jpg")}
          style={{ width: "100%", height: 150 }}
        />
        <Image
          source={require("../assets/avatar.png")}
          style={{ width: 80, height: 80, borderRadius: 40, marginTop: -50 }}
        />
      </View>
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#00CCBB",
            padding: 7,
            borderRadius: 15,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1.5 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 3,
          }}
        >
          <Text style={{ color: "#FFF", fontWeight: 600, fontSize: 16 }}>
            Ver perfil
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          backgroundColor: "#fff",
          marginTop: 15,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("tela2")}>
          <UserSettings
            text="Endereço de Entrega"
            icon={<LocationMarkerIcon size={24} color="#00CCBB" />}
            novo="Novo!"
            subtitle="Meus endereços de entrega"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <UserSettings
            text="Notificações"
            icon={<BellIcon size={24} color="#00CCBB" />}
            number="2"
            subtitle="Minha central de notificações"
            page="Notification"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("tela3")}>
          <UserSettings
            text="Métodos de Pagamento"
            icon={<CreditCardIcon size={24} color="#00CCBB" />}
            novo="Novo!"
            subtitle="Meus saldos e cartões"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <UserSettings
            text="Cupons"
            icon={<TicketIcon size={24} color="#00CCBB" />}
            number="3"
            subtitle="Meus cupons de desconto"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <UserSettings
            text="Favoritos"
            icon={<HeartIcon size={24} color="#00CCBB" />}
            novo="Novo!"
            subtitle="Meus locais favoritos"
          />
        </TouchableOpacity>
      </ScrollView>

      <View
        style={{ height: 50, width: "100%", backgroundColor: "#e5e7eb" }}
      ></View>
    </View>
  );
};

export default Tela1;
