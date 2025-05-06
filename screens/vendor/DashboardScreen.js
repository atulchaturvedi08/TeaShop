import React from 'react';
import { View, Text } from 'react-native';
import { EarningsCard, QuickActions } from '../../components/vendor';

const DashboardScreen = () => {
  return (
    <View>
      <EarningsCard />
      <QuickActions />
      {/* Add charts and other elements */}
    </View>
  );
};

export default DashboardScreen;