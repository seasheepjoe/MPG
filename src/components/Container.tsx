import React from 'react';
import { SafeAreaView, View, ViewStyle } from 'react-native';
import styles from './styles/ContainerStyles';

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
}

const Container = ({ children, style }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.content, style && style]}>
        {children && children}
      </View>
    </SafeAreaView>
  );
};

export default Container;
