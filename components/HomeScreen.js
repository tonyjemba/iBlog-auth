import React from 'react';

import { View, Text, StyleSheet,StatusBar } from 'react-native';
import LottieView from 'lottie-react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default class HomeScreen extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
		loading:false
		};
	}


  static navigationOptions = {
    header: null,
  };
  componentDidMount(){
    setTimeout(
      ()=>{this.setState({loading:true})},4000
    )
  }

  render() {
    return (
     <View style={styles.home}>
       <StatusBar backgroundColor={'#0086c3'} barStyle="light-content"  />
       {this.state.loading==true && <LottieView source={require('../icons/loading.json')} autoPlay style={styles.loading}/>}
      { this.state.loading==false && <LottieView source={require('../icons/loading2.json')} autoPlay />}
     </View>
    );
  }
}

const styles = StyleSheet.create({
 home:{
 flex:1,
 },
 loading:{
   alignSelf:'center',
   marginTop:hp('1.5%')
 }
});
