import React from 'react';

import {
	View,
	Text,
	StyleSheet,
	Easing,
	StatusBar,
	TextInput,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
	ScrollView,
	Animated,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import { NavigationEvents, navigate } from 'react-navigation';
import SignupScreen from './SignupScreen';
import firebase from 'react-native-firebase';
import { FlatList } from 'react-native-gesture-handler';

export default class LoginScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			password: '',
      email: '',
      seepwd: new Animated.Value(1),
		 show:true,
		 eye:false,
		 signnow:false
		};
	}

	static navigationOptions = {
		header: null
	};

	loginmein = () => {
		try {
			firebase
				.auth()
				.signInWithEmailAndPassword(this.state.email, this.state.password)
				.then(function(user) {
					console.log(user);
				})
				.then(() => this.props.navigation.navigate('HomeScreen'))
				.catch();
		} catch (error) {
			alert(error.toString());
		}
	};
  componentDidMount() {
    this.animation.play(-40,40);
    
  }
  toshow=(callback)=>{
	this.setState({show: !this.state.show});
	callback();
}
player=()=>{
   if(this.state.show==true){
	  this.seepwd.play(0,0)
	   return;
   }
   this.seepwd.play(0,20);
}
	render() {
    const toseethepassword = {
			transform: [{ scale: this.state.seepwd }],
		};
	
		return (
			<View style={styles.container}>
				<StatusBar barStyle="dark" backgroundColor="#ffffff" />

				<LinearGradient
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 0 }}
					colors={['#ffffff', '#00BCD4']}
					style={styles.header}
				>
          <LottieView source={require('../icons/icon.json')} ref={animation => {
          this.animation = animation;
        }}loop={false} />
        </LinearGradient>

				<View style={styles.title}>
					<Text style={[styles.letter, { color: '#00BCD4' }]}>i</Text>
					<Text style={[styles.letter, { color: '#00BCD4' }]}>B</Text>
					<Text style={[styles.letter, { color: '#00BCD4' }]}>l</Text>
					<Text style={[styles.letter, { color: '#00BCD4' }]}>o</Text>
					<Text style={[styles.letter, { color: '#00BCD4' }]}>g</Text>
					<Text style={[styles.letter, { color: '#bc477b' }]}>!</Text>
				</View>
      
				<ScrollView style={styles.signInview} showsVerticalScrollIndicator={false}>
					<KeyboardAvoidingView>
						<View style={[styles.credentials, { marginTop: hp('2%') }]}>
							<TextInput
								placeholder="Username or email"
								keyboardType="email-address"
								placeholderTextColor="darkgrey"
								style={{ fontSize: hp('2.6') }}
								onChangeText={youremail => {
									this.setState({ email: youremail });
								}}
								value={this.state.email}
								autoFocus={false}
							/>
						</View>
						<View style={styles.credentials} style={styles.credentials}>
							<TextInput
								style={{ fontSize: hp('2.6') }}
							
								placeholder="Password"
								placeholderTextColor="darkgrey"
								secureTextEntry={this.state.show}
								onChangeText={yourpassword => {
									this.setState({ password: yourpassword,eye:true });
								}}
								value={this.state.password}
								autoFocus={false}
							/>
		        <View style={styles.see}>
            <TouchableHighlight
							 underlayColor='#ffffff'
						    
							onPress={
								()=>this.toshow(this.player)
							}
							activeOpacity={1}
							>
								<Animated.View style={[toseethepassword]}>
                  
								{this.state.eye==true &&	<LottieView
										ref={animation => {
											this.seepwd= animation;
										}}
										style={{ height: hp('6'), width: wp('10'),alignSelf:'center',justifyContent:'center'}}
										source={require('../icons/theye.json')}
                    loop={false}
                    speed={4}
									/>}
								</Animated.View>
							</TouchableHighlight>
            </View >
   
          
						</View>
						<View style={styles.fgtpswd}>
							<Text style={{ fontWeight: 'bold', fontSize: hp('1.8') }}>Forgot password?</Text>
						</View>

						{
							this.state.signnow==true?<TouchableOpacity activeOpacity={1} onPress={() => this.loginmein()} style={[styles.signinbtn,{backgroundColor:'#73e8ff'}]}>
							<View>
								<Text style={styles.sign}>Sign in</Text>
							</View>
							<LottieView source={require('../icons/simple.json')} autoPlay style={{height:hp('10%'),position:'absolute',alignSelf:'center'}}/>
						</TouchableOpacity>:<TouchableOpacity activeOpacity={1} onPress={() =>{this.loginmein()
						this.setState({signnow:true})
						}} style={[styles.signinbtn,{backgroundColor: '#00BCD4'}]}>
							<View>
								<Text style={styles.sign}>Sign in</Text>
							</View>
							
						</TouchableOpacity>
						}

						<View style={styles.signup}>
							<Text style={{ fontSize: hp('2.3') }}>Don't have an account?</Text>
							<TouchableOpacity
								activeOpacity={1}
								onPress={() => this.props.navigation.navigate('SignupScreen')}
								style={styles.presssignup}
							>
								<Text style={{ color: '#00BCD4', fontSize: hp('2.5') }}> Sign up!</Text>
							</TouchableOpacity>
						</View>
					</KeyboardAvoidingView>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
	},
	see: {
		height: hp('8'),
		width: wp('15'),
		alignSelf: 'flex-end',
		position: 'absolute',

		alignItems: 'center',
    justifyContent: 'center',
   
	},
	header: {
		width: 75,
		height: 75,
		borderRadius: 35 / 2,

		alignSelf: 'center',
    marginTop: '8%',
    alignItems:'center',
    justifyContent:'center'
	},
	title: {
		width: wp('35'),
		height: hp('5'),
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
	},
	letter: {
		fontSize: hp('5.5'),
		alignSelf: 'center',
		marginTop: '1%',
	},
	signInview: {
		marginTop: hp('19%'),
		alignSelf: 'center',
  
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
	},
	credentials: {
		// backgroundColor:'red',
		height: hp('8'),
		//backgroundColor:'red',
		width: wp('90%'),
		alignSelf: 'center',
		borderBottomWidth: 1,
		borderBottomColor: 'darkgrey',
		borderBottomRightRadius: 5,
	},
	fgtpswd: {
		marginTop: hp('1%'),
		height: wp('10%'),
		alignSelf: 'flex-end',
	},
	signinbtn: {
		marginTop: hp('4%'),
		borderBottomLeftRadius: 25,
		borderBottomRightRadius: 25,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		height: hp('8%'),
		width: wp('90%'),
		
		alignItems: 'center',
		alignSelf: 'center',
		justifyContent: 'center',
	},
	sign: {
		color: '#ffffff',
		fontSize: hp('3'),
	},
	signup: {
		height: hp('4'),
		width: wp('90%'),
		marginTop: hp('8'),
		justifyContent: 'center',
		alignSelf: 'center',
		flexDirection: 'row',
	},
	presssignup: {
		height: hp('5'),
		paddingTop: hp('0.5'),
		justifyContent: 'center',
		alignSelf: 'center',
		alignSelf: 'flex-end',
	},
});
