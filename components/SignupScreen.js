import React from 'react';

import { View, Text, StyleSheet, StatusBar, ScrollView,Image, TextInput, TouchableOpacity } from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import firebase from 'react-native-firebase';
import LottieView from 'lottie-react-native';

export default class SignupScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Username: '',
			email: '',
			password: '',
      confirmpwd: '',
	  sign:'Signup',
	  myusername:'',
	  signupnow:false
		};

	}
	
	static navigationOptions = {
		header: null,
	};

	singnmeup=()=>{
		try{
           if(this.state.password < 6){
			   alert('please enter atleast 6 characters')
		   }
		   firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
		   .then(() => this.props.navigation.navigate('HomeScreen'))
		}
         catch(error){
			 console.log(error.toString())
		 }
        
	}

	  
	render() {
		
		return (
			<View style={styles.container}>
				<StatusBar backgroundColor={'transparent'} barStyle="light-content" translucent={true} />
				<View style={styles.header}>
					<View style={styles.txt}>
						<Text style={{ color: '#ffffff', fontSize:hp('3')}}>{this.state.sign}</Text>
					</View>
					
				</View>
				<View style={styles.header2} />

				<View style={styles.options}>
				<TouchableOpacity style={styles.facebook}
				activeOpacity={1}
				onPress={()=>{alert('sign in with facebook')}}
				>
                <Image source={require('../icons/facebook.png')} style={{height:40,width:40,alignSelf:'center'}}/>
				</TouchableOpacity>
				
					<TouchableOpacity style={styles.google}
					activeOpacity={1}
					onPress={()=>{alert('sign in with google')}}
					>
					<Image source={require('../icons/google.png')} style={{height:37,width:37,alignSelf:'center'}}/>
					</TouchableOpacity>
				</View>

				<View style={styles.separator}>
					<View
						style={{
						
							borderTopWidth: 1,
							borderTopColor: 'darkgrey',
							width: '45%',
							height: '31%',
							marginTop: 5,
						}}
					/>
					<Text style={{ paddingLeft: '5%' }}>OR</Text>
					<View
						style={{
					
							borderTopWidth: 1,
							borderTopColor: 'darkgrey',
							width: '45%',
							height: '30%',
							marginLeft: '5%',
							marginTop: 5,
						}}
					/>
				</View>
				<ScrollView  showsVerticalScrollIndicator={false}>
					<View style={[styles.credentials,{marginTop:wp('8%')}]}>
						<TextInput
							placeholder="Username"
							placeholderTextColor="darkgrey"
							style={{ fontSize:hp('2.5') }}
							onChangeText={yourusername => {
								this.setState({ Username: yourusername });
							}}
							value={this.state.Username}
							autoFocus={false}
						/>
					</View>
					<View style={styles.credentials} style={styles.credentials}>
						<TextInput
							style={{ fontSize:hp('2.5') }}
							placeholder="email"
							keyboardType='email-address'
							placeholderTextColor="darkgrey"
							onChangeText={youremail => {
								this.setState({ email: youremail });
							}}
							value={this.state.email}
							autoFocus={false}
						/>
					</View>
					<View  style={styles.credentials}>
						<TextInput
							style={{ fontSize:hp('2.5') }}
							placeholder="Password"
							secureTextEntry={true}
							placeholderTextColor="darkgrey"
							onChangeText={yourpassword => {
								this.setState({ password: yourpassword });
							}}
							value={this.state.password}
							autoFocus={false}
						/>
					</View>
					<View style={styles.credentials} style={styles.credentials}>
						<TextInput
							style={{ fontSize:hp('2.5') }}
							placeholder="Confirm Password"
							secureTextEntry={true}
							placeholderTextColor="darkgrey"
							onChangeText={yourpassword => {
								this.setState({ confirmpwd: yourpassword });
							}}
							value={this.state.confirmpwd}
							autoFocus={false}
						/>
					</View>
					{
					 this.state.signupnow==true?<TouchableOpacity
					 activeOpacity={1}
					 onPress={()=>{
						 this.singnmeup()
					 }}
					 style={[styles.signinbtn,{backgroundColor:'#73e8ff'}]}
				 >
					 <View>
						 <Text style={styles.sign}>Sign up</Text>
					 </View>
					 <LottieView source={require('../icons/simple.json')} autoPlay style={{height:hp('10%'),position:'absolute',alignSelf:'center'}}/>
				 </TouchableOpacity>:<TouchableOpacity
						activeOpacity={1}
						onPress={()=>{
							this.singnmeup()
							this.setState({signupnow:true})
						}}
						style={styles.signinbtn}
					>
						<View>
							<Text style={styles.sign}>Sign up</Text>
						</View>
					</TouchableOpacity>
						}

					
					<View style={styles.signup}>
							<Text style={{ fontSize: hp('2.3') }}>Already have an account?</Text>
							<TouchableOpacity
								activeOpacity={1}
								onPress={() => this.props.navigation.navigate('LoginScreen')}
								style={styles.presssignup}
							>
								<Text style={{ color: '#00BCD4', fontSize: hp('2.5') }}> Login</Text>
							</TouchableOpacity>
						</View>
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
	facebook:{
	  height:hp('10%'),
	  width:wp('20%'),
	
	  alignContent:'center',
	  justifyContent:'center'
	},
	
	google:{
		height:hp('10%'),
		width:wp('20%'),
	
		marginLeft:wp('30%'),
		alignContent:'center',
		justifyContent:'center'
	},

	separator: {
		width: '90%',
		height: '2%',
		
		alignSelf: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	sign: {
		color: '#ffffff',
		fontSize: hp('3'),
		
	},
	inside: {
		backgroundColor: 'purple',
	},
	signinbtn: {
		marginTop:hp('5%'),
		borderBottomLeftRadius: 25,
		borderBottomRightRadius: 25,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		height:hp('8%'),
		width: wp('90%'),
		backgroundColor: '#00BCD4',
		alignItems: 'center',
		alignSelf: 'center',
		justifyContent: 'center',
	},
	signup: {
		height: hp('4'),
		width: wp('90%'),
		marginTop: hp('5'),
		justifyContent: 'center',
		alignSelf: 'center',
		flexDirection: 'row',
	},
	credentials: {
		
		height: 40,
		width: 300,
		alignSelf: 'center',
		borderBottomWidth: 1,
		borderBottomColor: 'darkgrey',
		//backgroundColor:'red',
		borderBottomRightRadius: 5,
		marginTop:wp('4')
	},
	options: {
		width:wp('100%'),
		height: hp('10%'),
		marginTop:wp('6%'),
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	
		flexDirection:'row'
	},
	optns: {
		width: 100,
		height: 100,
		borderRadius: 100 / 2,
		backgroundColor: '#00BCD4',
		alignSelf: 'center',
		alignContent: 'center',
		justifyContent: 'center',
	},
	txt: {
		height:hp('4'),
	
		alignSelf: 'center',
		top:hp('4'),
		alignContent: 'center',
		justifyContent: 'center',
	},
	header: {
		alignContent: 'center',
		justifyContent: 'center',
		height:hp('12.8%'),
		width: wp('100%'),
		backgroundColor: '#0086c3',
		flexDirection:'row'
	},
	presssignup: {
		height: hp('5'),
	
		justifyContent: 'center',
		alignSelf: 'center',
		alignSelf: 'flex-end',
	},
	header2: {
		width: 100,
		paddingBottom: 10,
		height: 50,
		backgroundColor: '#0086c3',
		borderBottomEndRadius: 180,
		borderBottomStartRadius: 180,
		alignSelf: 'center',
		transform: [{ scaleX: 4 }],
	},
});
