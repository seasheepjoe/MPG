import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    marginTop: 44,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  closeButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'rgba(200, 200, 200, 0.5)',
    borderRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },

  closeButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  separator: {
    width: '75%',
    height: 1,
    backgroundColor: '#ccc',
  },

  playerStats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  playerStatsBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    marginBottom: 10,
  },

  playerStatsTitle: {
    fontSize: 12,
  },

  playerStatsContent: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  playerName: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  playerPosition: {},

  playerClub: {
    fontStyle: 'italic',
  },

  twitterButton: {},

  twitterButtonText: {
    color: '#1da1f2',
    textDecorationLine: 'underline',
  },
});
