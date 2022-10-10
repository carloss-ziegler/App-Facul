import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import {
  ChevronLeftIcon,
  CreditCardIcon,
  PlusIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
// import PaymentMethod from "../components/PaymentMethod";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import PaymentMethod from "../components/PaymentMethod";
import Services from "../components/Services";
// import Services from "../components/Services";

const Payment = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem",
          }}
        >
          <TouchableOpacity onPress={navigation.goBack}>
            <ChevronLeftIcon size={24} color="#00CCBB" />
          </TouchableOpacity>
          <Text style={{ fontWeight: 500, marginLeft: "-1.5rem" }}>
            PAGAMENTOS
          </Text>
          <View></View>
        </View>
      </View>

      <View style={{ alignItems: "center", marginTop: "1.25rem" }}>
        <View
          style={{
            width: "24rem",
            height: "8rem",
            backgroundColor: "#fff",
            borderRadius: "0.5rem",
            padding: "1rem",
            justifyContent: "space-between",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1.5 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 3,
          }}
        >
          <Text style={{ fontWeight: 500 }}>Saldo</Text>
          <View>
            <Text
              style={{
                color: "#6b7280",
                fontSize: "0.75rem",
                lineHeight: "1rem",
              }}
            >
              Saldo disponível
            </Text>
            <Text
              style={{
                color: "#6b7280",
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
              }}
            >
              R$ 10.589,56
            </Text>
          </View>
        </View>
      </View>

      <View style={{ backgroundColor: "#FFF", flex: 1, marginTop: "1.5rem" }}>
        <View style={{ padding: "1.25rem" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
                color: "#374151",
              }}
            >
              Formas de pagamento
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: "#00CCBB",
                  fontSize: "0.875rem",
                  lineHeight: "1.25rem",
                }}
              >
                Ver todas
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <PaymentMethod
              title="Cadastrar"
              subtitle="novo cartão"
              icon={<PlusIcon size={24} color="#00CCBB" />}
            />
            <PaymentMethod
              title="Pagamento"
              subtitle="Apple Pay"
              icon={
                <FontAwesome.Button
                  name="apple"
                  color="#00CCBB"
                  backgroundColor="white"
                />
              }
            />
            <PaymentMethod
              title="Ver todas formas"
              subtitle="de pagamento"
              icon={<CreditCardIcon color="#00CCBB" size={24} />}
            />
          </ScrollView>

          <Text
            style={{
              fontWeight: "bold",
              fontSize: "1.125rem",
              lineHeight: "1.75rem",
              marginTop: "1.5rem",
              color: "#374151",
            }}
          >
            Outros serviços
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Services
              title="Resgatar"
              subtitle="CRSD Card"
              icon={require("../assets/creditCard.png")}
            />
            <Services
              title="Habilitar"
              subtitle="Face ID"
              icon={require("../assets/faceId2.png")}
            />
            <Services
              title="Comprar"
              subtitle="CRSD Card"
              icon={require("../assets/buyIcon.jpg")}
            />
            <Services
              title="Meus cupons"
              icon={require("../assets/couponIcon.png")}
            />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Payment;
