import React, { useEffect, useState } from 'react';
import { Text, Modal, View, Linking, Pressable } from 'react-native';
import config from '../config/config';
import { ultraPositions } from '../constants/Mappings';
import { api } from '../lib';
import { PlayerDetails } from '../types/Player';
import styles from './styles/PlayerDetailsModalStyles';

interface Props {
  id: string | null;
  visible: boolean;
  onClose: () => void;
}

const PlayerDetailsModal = ({ id, visible, onClose }: Props) => {
  const [player, setPlayer] = useState<PlayerDetails | null>(null);
  useEffect(() => {
    if (!id) return;
    const playerId = id.replace('player_', '');
    api
      .get<PlayerDetails>(
        `${config.urls.playerDetails}/${playerId}${config.season}`,
      )
      .then((response) => {
        setPlayer(response);
      });
  }, [id]);
  if (!player) return null;
  const openTwitterLink = () => {
    let url = `${config.twitterUrl}/${player.twitter}`;
    Linking.canOpenURL(url).then((can) => {
      if (can) {
        Linking.openURL(url);
      }
    });
  };
  let fullname = `${player.firstname} ${player.lastname}`.trim();
  let position = ultraPositions[player.ultraPosition];
  return (
    <Modal visible={visible} animationType={'slide'}>
      <View style={styles.container}>
        <Pressable onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Fermer</Text>
        </Pressable>
        <Text style={styles.playerName}>{fullname}</Text>
        <Text style={styles.playerPosition}>{position}</Text>
        <Text style={styles.playerClub}>{player.club}</Text>
        <View style={styles.separator} />
        {/* Picker */}
        <View style={styles.playerStats}>
          <View style={styles.playerStatsBox}>
            <Text style={styles.playerStatsTitle}>Avg rating</Text>
            <Text style={styles.playerStatsContent}>
              {player.stats.avgRate}
            </Text>
          </View>
          <View style={styles.playerStatsBox}>
            <Text style={styles.playerStatsTitle}>Goals</Text>
            <Text style={styles.playerStatsContent}>
              {player.stats.sumGoals}
            </Text>
          </View>
          <View style={styles.playerStatsBox}>
            <Text style={styles.playerStatsTitle}>Starts</Text>
            <Text style={styles.playerStatsContent}>
              {player.stats.percentageStarter}
            </Text>
          </View>
          <View style={styles.playerStatsBox}>
            <Text style={styles.playerStatsTitle}>Red cards</Text>
            <Text style={styles.playerStatsContent}>
              {player.stats.sumRedCard}
            </Text>
          </View>
          <View style={styles.playerStatsBox}>
            <Text style={styles.playerStatsTitle}>Yellow cards</Text>
            <Text style={styles.playerStatsContent}>
              {player.stats.sumYellowCard}
            </Text>
          </View>
          <View style={styles.playerStatsBox}>
            <Text style={styles.playerStatsTitle}>Saves</Text>
            <Text style={styles.playerStatsContent}>
              {player.stats.sumGoals}
            </Text>
          </View>
        </View>
        <Pressable onPress={openTwitterLink} style={styles.twitterButton}>
          <Text style={styles.twitterButtonText}>{player.twitter}</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default PlayerDetailsModal;
