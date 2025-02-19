import React from 'react';
import {View, SafeAreaView, Text, Image, ImageBackground, StyleSheet, useWindowDimensions} from 'react-native';

import CustomButton from '../../components/CustomButton';
import Logo from '../../../assets/images/Logo.png';
import Volume from '../../../assets/images/Volume.png';
import Quads from '../../../assets/images/Quads.png';

const AwarenessScreen = ({ navigation }) => {
  const window = useWindowDimensions();
  const {height} = useWindowDimensions();

  return (
    <SafeAreaView style={[styles.root]}>
      <View style={styles.header}>
        <View style={{width: 100}}><CustomButton text= "<" onPress={() => navigation.goBack()} type="blackBackButton"/></View>
        <Image source={Logo} style={styles.logo} resizeMode="cover" />
        <View style={{width: 100}}><Image source={Volume} style={styles.volume} resizeMode="cover" /></View>
      </View>
      
      <Text style = {styles.normal}>
      <Text style={{fontWeight: "bold"}}> Stress = </Text>
      Body Reaction + Situation
      </Text>

      <Text style = {styles.normal}>
      <Text style={{fontWeight: "bold"}}> Anxiety = </Text>
      Anticipation + Event (real or imagined)
      </Text>
      

<View style={styles.container}>
<Image source={Quads} style={styles.quadForm, {height: height *0.45}} resizeMode="contain" />
<View style={styles.viewQuadText}>
  <Text style={styles.quadText}>
    <Text>
    {'\n                              \n'}
    
    {'\n\n                            \n'}
   
    
  {/* None of this formatting is in the bible. ^ */}
    
    </Text>
    </Text>
</View>
</View>

     

      <View style={styles.button}>
        <CustomButton text= "Continue" onPress={() => navigation.navigate('Awareness Body')} type="SECONDARY"/>
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
    backgroundColor: '#FFF7F5'
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
    fontSize: 24,
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
    fontSize: 14,
    fontWeight: 'normal',
    color: 'black',
    marginVertical: 1,
    textAlign: 'left',
  },
  viewQuadText: {
  position: 'absolute',
},
});

export default AwarenessScreen;