import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from '../../Icons';
import { Colors } from '../../../styles';
import { BrightText } from '../../Texts';
import { StripInput } from '../../Inputs';
import { Portal, Modal, TextInput, Button } from 'react-native-paper';

interface InsertModalProps {
  isVisible: boolean;
  onClose: any;
  header: string;
  onPress: any;
}

const InsertModal: React.FC<InsertModalProps> = ({
  onPress,
  onClose,
  header,
  isVisible,
}) => {
  const [value, setValue] = useState('');
  const containerStyle = { backgroundColor: 'white', padding: 20 };

  return (
    <Portal>
      <Modal visible={isVisible} onDismiss={onClose} contentContainerStyle={containerStyle}>
        <BrightText>Insert {header}</BrightText>
        <TouchableOpacity
          onPress={() => onClose()}
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            zIndex: 2,
          }}>
          <Icon iconType="close" color={Colors.brightColor} size={35} />
        </TouchableOpacity>

        <TextInput
          mode="outlined"
          label="Value"
          value={value}
          keyboardType="numeric"
          onChangeText={text => setValue(text)}
        />
        {/* <StripInput
          viewStyles={{ width: '80%' }}
          title="Value"
          onChangeText={(text: string) => setValue(text)}
          placeholder="Value"
          value={value}
          keyboard="number-pad"
        /> */}
        {/* <View style={{width: '65%'}}> */}
        <Button
          style={{ marginTop: 10 }}
          onPress={onPress}
          mode="contained"
        >Insert</Button>
        {/* </View> */}
      </Modal>
    </Portal>

    // <Modal
    //   style={{
    //     backgroundColor: 'rgba(0, 0, 0, .8)',
    //   }}
    //   animationType="slide"
    //   transparent={true}
    //   visible={isVisible}>
    //   <View
    //     style={{
    //       backgroundColor: 'rgba(0, 0, 0, .8)',
    //       height: '100%',
    //       justifyContent: 'flex-end',
    //     }}>
    //     <View style={styles.modalView}>
    //       <BrightText>Insert {header}</BrightText>
    //       <TouchableOpacity
    //         onPress={() => onClose()}
    //         style={{
    //           position: 'absolute',
    //           top: 10,
    //           right: 10,
    //           zIndex: 2,
    //         }}>
    //         <Icon iconType="close" color={Colors.brightColor} size={35} />
    //       </TouchableOpacity>
    //       <StripInput
    //         viewStyles={{width: '80%'}}
    //         title="Value"
    //         onChangeText={(text: string) => setValue(text)}
    //         placeholder="Value"
    //         value={value}
    //         keyboard="number-pad"
    //       />
    //       {/* <View style={{width: '65%'}}> */}
    //       <Button
    //         buttonStyles={{width: '65%', height: 45}}
    //         onPress={onPress}
    //         text="Insert"
    //       />
    //       {/* </View> */}
    //     </View>
    //   </View>
    // </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: Colors.bolderBackground,
    borderRadius: 15,
    width: '100%',
    height: 200,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-start',
    elevation: 2,
    margin: 20,
  },
  icon: {
    marginLeft: 20,
  },
  textStyle: {
    marginLeft: 10,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default InsertModal;
