import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ultraPositions } from '../constants/Mappings';
import { Player } from '../types/Player';
import styles from './styles/PlayerItemStyles';

interface Props {
  item: Player;
  index: number;
  onPress: () => void;
}

const PlayerItem = ({ item, index, onPress }: Props) => {
  let position = ultraPositions[item.ultraPosition];
  let firstname = item.firstname ? item.firstname : '';
  let lastname = item.lastname ? item.lastname : '';
  let name = `${firstname} ${lastname}`.trim();
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text>{position}</Text>
    </TouchableOpacity>
  );
};

export default PlayerItem;
