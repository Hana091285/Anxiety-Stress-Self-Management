import React from 'react';
import {View, SafeAreaView, Text, Image, ImageBackground, StyleSheet, useWindowDimensions} from 'react-native';
import CustomButton from '../../components/CustomButton';
import Logo from '../../../assets/images/Logo.png';
import Volume from '../../../assets/images/Volume.png';
import Background1 from '../../../assets/images/Background1.png';

const AwarenessMindScreen = ({ navigation }) => {
  const window = useWindowDimensions();
  const {height} = useWindowDimensions();

  return (
    <SafeAreaView style={[styles.root]}>
      <View style={styles.header}>
        <View style={{width: 100}}><CustomButton text= "<" onPress={() => navigation.goBack()} type="blackBackButton"/></View>
        <Image source={Logo} style={styles.logo} resizeMode="cover" />
        <View style={{width: 100}}><Image source={Volume} style={styles.volume} resizeMode="cover" /></View>
      </View>
      
      <Text style = {styles.title}>
      <Text style={{fontWeight: "bold"}}> Mind </Text>
      </Text>


      <View style={styles.container}>
<Image source={Background1} style={styles.container, {height: height *0.65}} resizeMode="contain" />
<View style={styles.viewQuadText}>
  <Text style={styles.quadText}>
    <Text style ={styles.title}>{'\n     This may look like:' }  </Text>
    <Text>

    {'\n'}
    {'\n   •Worrying \n'}
    {'   •Muddled thinking \n'}
    {'   •Impaired judgement\n'}
    {'   •Indecision  \n'}
    {'   •Negativity \n'}
    {'   •Difficulty concentrating \n'}
    
    </Text>
    </Text>
</View>
</View>

      <View style={styles.button}>
        <CustomButton text= "Continue" onPress={() => navigation.navigate('Awareness Feelings')} type="SECONDARY"/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF7F5',
  },
  header:{
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    maxWidth: 75,
    maxHeight: 75,
    marginVertical: 10,
  },
  volume:{
    width: 30,
    height: 30,
    margin: 20,
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 2,
    textAlign: 'center',
  },
  row:{
    width: '100%',
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: 'space-around',
  },
  normal: {
    fontSize: 20,
    fontWeight: 'normal',
    color: '#000000',
    marginVertical: 10,
    textAlign: 'center',
  },
  quadForm: {
    maxWidth: 400,
    maxHeight: 400,
    marginVertical: 5,
  },
  quadText: {
    fontSize: 28,
    fontWeight: 'normal',
    color: 'black',
    marginVertical: 1,
    textAlign: 'left',
  },
  viewQuadText: {
  position: 'absolute',
},
});

export default AwarenessMindScreen;
