import React, {useState} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
export const EndorcementsModal = () => {
  const data = [
    {
      label: 'Work together on same time',
    },
    {
      label: 'Managed Uzama Ashiq directly',
    },
    {
      label: 'Heard aboud Uzama Ashiq skills?',
    },
    {
      label: 'None of the above',
    },
  ];
  const devoption = [
    {label: 'java'},
    {label: 'Kotlin'},
    {label: 'Node'},
    {label: 'React'},
    {label: 'Flutter'},
  ];
  const [modalVisible, setModalVisible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  const [Answerfirst, setanswerfirst] = useState('');
  const [AnswerSecond, setanswerSecond] = useState('');
  const [DevelopmentAnswer, setDevelopmentAnswer] = useState('');
  const [btncolor, setbtncolor] = useState('green');
  return (
    <View>
      {/* const blue = {DevelopmentAnswer === ""? "lightgreen" : "white"}; */}
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {
          // eslint-disable-next-line no-alert
          Answerfirst === ''
            ? alert('Choose an option2')
            : setModalVisible(false);
        }}>
        <View style={styles.modalcontainer}>
          <View style={styles.modaluppercontainer}>
            <View style={styles.headeranddescriptioncontainer}>
              <Text style={styles.upperheadingstyle}>
                Thanks for Endorsing Uzama Ashiq
              </Text>
              <Text style={styles.descriptiontxtstyle}>
                Helps us identify relevant opportunities and
              </Text>
              <Text style={styles.descriptiontxtstyle}>
                content for Uzama Ashiq
              </Text>
            </View>
            <Text style={styles.upperheadingstyle}>
              How good is Uzama Ashiq at {DevelopmentAnswer}
            </Text>
            <Text style={styles.upperheadingstyle}>Develper?</Text>
            <View style={styles.btncontainer}>
              <TouchableOpacity
                style={styles.optionbtnstyle}
                onPress={() => setanswerfirst('Good')}>
                <Text style={styles.optionbtntxt}>Good</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionbtnstyle}
                onPress={() => setanswerfirst('V Good')}>
                <Text style={styles.optionbtntxt}>V Good</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionbtnstyle}
                onPress={() => setanswerfirst('Excellent')}>
                <Text style={styles.optionbtntxt}>Excellent</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.descriptiontxtstyle}>
              Your response not be shared with Uzama
            </Text>
            <Text style={styles.descriptiontxtstyle}>
              Ashiq or other Linkedin members.
            </Text>
            <TouchableOpacity
              style={
                Answerfirst === ''
                  ? styles.nextbtnstylefirst
                  : styles.nextbtnstyle
              }
              onPress={() => {
                if (Answerfirst === '') {
                  alert('Select some value');
                } else {
                  setModalVisible(false);
                  setModal2Visible(true);
                }
              }}>
              <Text style={styles.nextbtntxtstyle}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        visible={modal2Visible}
        transparent={false}
        onRequestClose={() => {
          AnswerSecond === ''
            ? alert('Select an option')
            : setModal2Visible(false);
        }}>
        <View style={styles.modalcontainer}>
          <View style={styles.modaluppercontainer}>
            <View style={styles.headeranddescriptioncontainer}>
              <Text style={styles.upperheadingstyle}>
                Thanks for Endorsing Uzama Ashiq
              </Text>
              <Text style={styles.descriptiontxtstyle}>
                Helps us identify relevant opportunities and
              </Text>
              <Text style={styles.descriptiontxtstyle}>
                content for Uzama Ashiq
              </Text>
            </View>
            <Text style={styles.upperheadingstyle}>
              How do you know about Uzama Ashiq
            </Text>
            <Text style={styles.upperheadingstyle}>Flutter Develper?</Text>
            <RadioButtonRN
              data={data}
              boxActiveBgColor="#F2F5CA"
              boxDeactiveBgColor="#FFFFFF"
              selectedBtn={intitial => {
                // alert(intitial.label)
                setanswerSecond(intitial.label);
              }}
            />
            <TouchableOpacity
              style={
                AnswerSecond === ''
                  ? styles.nextbtnstylesecond
                  : styles.nextbtnstyle
              }
              onPress={() => {
                AnswerSecond === ''
                  ? alert('Select an option')
                  : setModal2Visible(false);
              }}>
              <Text style={styles.nextbtntxtstyle}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View>
        <RadioButtonRN
          data={devoption}
          selectedBtn={item => setDevelopmentAnswer(item.label)}
        />
      </View>
      <TouchableOpacity
        style={
          DevelopmentAnswer === '' ? styles.btnstyledisable : styles.btnstyle
        }
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.btntxtstyle}> Open Modal</Text>
      </TouchableOpacity>
      <Text>
        {Answerfirst === '' ? '' : `The First Answer is ${Answerfirst}`}
      </Text>
      <Text>
        {AnswerSecond === '' ? '' : `The Second Answer is ${AnswerSecond}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  btnstyle: {
    backgroundColor: 'lightgreen',
    alignSelf: 'center',
    borderRadius: 22,
    marginTop: 3,
    justifyContent: 'flex-end',
  },
  btntxtstyle: {
    fontSize: 23,
    alignSelf: 'center',
    padding: 11,
  },
  upperheadingstyle: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  modalcontainer: {
    backgroundColor: 'black',
    marginTop: '33%',
    borderRadius: 21,
    padding: 22,
    overflow: 'hidden',
    width: '95%',
    alignSelf: 'center',
  },
  descriptiontxtstyle: {
    color: '#d2d2d4',
    fontWeight: '200',
    alignSelf: 'center',
    fontSize: 15,
  },
  modaluppercontainer: {
    color: 'white',
  },
  bottonlinestyle: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: '200',
  },
  modalbuttonstyle: {
    color: 'white',
  },
  optionbtntxt: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  optionbtnstyle: {
    backgroundColor: 'white',
    width: '28%',
    alignItems: 'center',
    padding: 11,
    borderRadius: 11,
  },
  btncontainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 15,
    marginTop: 15,
  },
  nextbtnstyle: {
    backgroundColor: 'red',
    borderRadius: 33,
    alignItems: 'center',
    width: '74%',
    alignSelf: 'center',
    marginTop: 21,
  },
  nextbtntxtstyle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headeranddescriptioncontainer: {
    borderBottomWidth: 0.3,
    borderColor: 'white',
    paddingBottom: 11,
    marginBottom: 11,
  },
  btnstyledisable: {
    backgroundColor: 'white',
  },
  nextbtnstylefirst: {
    backgroundColor: '#aeb8b1',
    borderRadius: 33,
    alignItems: 'center',
    width: '74%',
    alignSelf: 'center',
    marginTop: 21,
  },
  nextbtnstylesecond: {
    backgroundColor: '#aeb8b1',
    borderRadius: 33,
    alignItems: 'center',
    width: '74%',
    alignSelf: 'center',
    marginTop: 21,
  },
});
