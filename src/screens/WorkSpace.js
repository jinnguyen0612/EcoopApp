import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as React from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AffiliateItem } from '../components/AffiliateItem';

const Tab = createMaterialTopTabNavigator();

const FirstRoute = () => (
  <ScrollView>
    <AffiliateItem
      color={"blue"}
      title={"Presentation of the new app launch"}
      money={2000}
      dateFrom={"04/06/2024"}
      dateTo={"11/06/2024"}
      user={"2000"}
      image={"https://xeluudong.apecglobal.net/wp-content/uploads/2022/09/ECOOP-LOGO.png"}
    />
    <AffiliateItem
      color={"yellow"}
      title={"Presentation of the new app launch"}
      money={2000}
      dateFrom={"04/06/2024"}
      dateTo={"11/06/2024"}
      user={"2000"}
      image={"https://xeluudong.apecglobal.net/wp-content/uploads/2022/09/ECOOP-LOGO.png"}
    />
    <AffiliateItem
      color={"grey"}
      title={"Presentation of the new app launch"}
      money={2000}
      dateFrom={"04/06/2024"}
      dateTo={"11/06/2024"}
      user={"2000"}
      image={"https://xeluudong.apecglobal.net/wp-content/uploads/2022/09/ECOOP-LOGO.png"}
    />
    <AffiliateItem
      color={"green"}
      title={"Presentation of the new app launch"}
      money={2000}
      dateFrom={"04/06/2024"}
      dateTo={"11/06/2024"}
      user={"2000"}
      image={"https://xeluudong.apecglobal.net/wp-content/uploads/2022/09/ECOOP-LOGO.png"}
    />
    <AffiliateItem
      color={"pink"}
      title={"Presentation of the new app launch"}
      money={2000}
      dateFrom={"04/06/2024"}
      dateTo={"11/06/2024"}
      user={"2000"}
      image={"https://xeluudong.apecglobal.net/wp-content/uploads/2022/09/ECOOP-LOGO.png"}
    />
  </ScrollView>
);

const SecondRoute = () => (
  <ScrollView>
    <AffiliateItem
      color={"blue"}
      title={"Presentation of the new app launch"}
      money={2000}
      dateFrom={"04/06/2024"}
      dateTo={"11/06/2024"}
      user={"2000"}
      image={"https://xeluudong.apecglobal.net/wp-content/uploads/2022/09/ECOOP-LOGO.png"}
    />
    <AffiliateItem
      color={"yellow"}
      title={"Presentation of the new app launch"}
      money={2000}
      dateFrom={"04/06/2024"}
      dateTo={"11/06/2024"}
      user={"2000"}
      image={"https://xeluudong.apecglobal.net/wp-content/uploads/2022/09/ECOOP-LOGO.png"}
    />
    <AffiliateItem
      color={"grey"}
      title={"Presentation of the new app launch"}
      money={2000}
      dateFrom={"04/06/2024"}
      dateTo={"11/06/2024"}
      user={"2000"}
      image={"https://xeluudong.apecglobal.net/wp-content/uploads/2022/09/ECOOP-LOGO.png"}
    />
    <AffiliateItem
      color={"green"}
      title={"Presentation of the new app launch"}
      money={2000}
      dateFrom={"04/06/2024"}
      dateTo={"11/06/2024"}
      user={"2000"}
      image={"https://xeluudong.apecglobal.net/wp-content/uploads/2022/09/ECOOP-LOGO.png"}
    />
    <AffiliateItem
      color={"pink"}
      title={"Presentation of the new app launch"}
      money={2000}
      dateFrom={"04/06/2024"}
      dateTo={"11/06/2024"}
      user={"2000"}
      image={"https://xeluudong.apecglobal.net/wp-content/uploads/2022/09/ECOOP-LOGO.png"}
    />
  </ScrollView>
);

export default function WorkSpace({ navigation }) {
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.goBack()}>
          <FontAwesomeIcon size={20} icon={faArrowLeft} />
        </TouchableOpacity>
        <View style={{ flex: 10 }}>
          <Text style={styles.headerTitle}>Đơn hàng thành công</Text>
        </View>
        <View style={{ flex: 1 }}></View>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Của tôi" component={FirstRoute} />
        <Tab.Screen name="Của nhóm" component={SecondRoute} />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    minHeight: Dimensions.get("screen").height,
  },
  header: {
    marginTop: 60,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    textAlign: "center",
  },
});
