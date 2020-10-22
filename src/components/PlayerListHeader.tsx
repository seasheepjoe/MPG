import React from 'react';
import { Text, Pressable, View } from 'react-native';
import styles from './styles/PlayerListHeaderStyles';

interface Props {
  onFilter: (order: string) => void;
}

const PlayerListHeader = ({ onFilter }: Props) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => onFilter('name')} style={styles.button}>
        <Text style={styles.buttonText}>{'Nom'}</Text>
      </Pressable>
      <Pressable onPress={() => onFilter('position')} style={styles.button}>
        <Text style={styles.buttonText}>{'Position'}</Text>
      </Pressable>
    </View>
  );
};

export default PlayerListHeader;
