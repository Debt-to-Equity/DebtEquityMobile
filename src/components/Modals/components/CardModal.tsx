import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';

interface CardModalProps {
  modalStyles?: any;
  children: any;
}

const CardModal: React.FC<CardModalProps> = ({modalStyles, children}) => {
  return (
    <Modal style={{...modalStyles}} visible={true} transparent={true}>
      <View style={styles.container}>
        <View style={styles.modalView}>{children}</View>
      </View>
    </Modal>
  );
};

export default CardModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
