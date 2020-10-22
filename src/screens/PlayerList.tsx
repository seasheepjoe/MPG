import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import {
  Container,
  PlayerDetailsModal,
  PlayerItem,
  PlayerListHeader,
} from '../components';
import config from '../config/config';
import { ultraPositions } from '../constants/Mappings';
import { api } from '../lib';
import { Player } from '../types/Player';
import styles from './styles/PlayerListStyles';

const PlayerList = () => {
  const [data, setData] = useState<Player[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);
  const filterList = (order: string) => {
    let dataCopy = [...data];
    if (order === 'position') {
      let result = dataCopy.sort((a, b) => {
        if (a.ultraPosition && b.ultraPosition) {
          let posA = ultraPositions[a.ultraPosition];
          let posB = ultraPositions[b.ultraPosition];
          if (posA < posB) return -1;
          if (posA > posB) return 1;
          return 0;
        }
      });
      setData(result);
    } else if (order === 'name') {
      let result = dataCopy.sort((a, b) => {
        let fullnameA = (a.firstname + a.lastname).trim();
        let fullnameB = (b.firstname + b.lastname).trim();
        if (fullnameA < fullnameB) return -1;
        if (fullnameA > fullnameB) return 1;
        return 0;
      });
      setData(result);
    }
  };
  const renderPlayerItem = ({
    item,
    index,
  }: {
    item: Player;
    index: number;
  }) => (
    <PlayerItem
      item={item}
      index={index}
      key={item.id}
      onPress={() => {
        setSelectedPlayer(item.id);
        setModalVisible(true);
      }}
    />
  );
  const renderListHeader = () => <PlayerListHeader onFilter={filterList} />;
  useEffect(() => {
    api.get<Player[]>(config.urls.playerList).then((response) => {
      setData(response);
    });
  }, []);
  return (
    <Container>
      <PlayerDetailsModal
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
          setSelectedPlayer(null);
        }}
        id={selectedPlayer}
      />
      <FlatList
        data={data}
        renderItem={renderPlayerItem}
        style={styles.list}
        ListHeaderComponent={renderListHeader}
      />
    </Container>
  );
};

export default PlayerList;
