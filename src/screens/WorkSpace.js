import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { AffiliateItem } from '../components/AffiliateItem';

const WorkSpace = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('First');

  const renderScreen = () => {
    if (selectedTab === 'First') {
      return (
        <ScrollView>
          <AffiliateItem
            color={"blue"}
            title={"Tab1 of the new app launch"}
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
    } else if (selectedTab === 'Second') {
      return (
        <ScrollView>
          <AffiliateItem
            color={"blue"}
            title={"Tab2 of the new app launch"}
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
    }
  };

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
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tabItem, selectedTab === 'First' && styles.selectedTab]}
          onPress={() => setSelectedTab('First')}
        >
          <Text style={styles.tabText}>Của tôi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, selectedTab === 'Second' && styles.selectedTab]}
          onPress={() => setSelectedTab('Second')}
        >
          <Text style={styles.tabText}>Của nhóm</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.screenContainer}>{renderScreen()}</View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 60,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    textAlign: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  selectedTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  screenContainer: {
    flex: 1,
  },
});

export default WorkSpace;
