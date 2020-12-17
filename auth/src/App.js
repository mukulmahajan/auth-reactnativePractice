import React, {Component} from 'react';
import { View, Text } from 'react-native';

import { Header,Spinner,Button,CardSection } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';


class App extends Component{


    state={ loggedIn:null };

    componentDidMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyCECdgJ4kgtUTfQX4dLownnhhWkMAu0fgs',
            authDomain: 'authentication-f699f.firebaseapp.com',
            databaseURL: 'https://authentication-f699f.firebaseio.com',
            projectId: 'authentication-f699f',
            storageBucket: '',
            messagingSenderId: '507806647183',
            appId: '1:507806647183:web:347a85cd8e30105f'
          });


          firebase.auth().onAuthStateChanged((user) => {
              if(user){
                  this.setState({ loggedIn:true });
              } else {
                  this.setState({ loggedIn:false });
              }

          });
    }


    rendercontent(){
        switch(this.state.loggedIn){
            case true:
                return (
                        <CardSection>
                        <Button onPress={()=>{firebase.auth().signOut()}}>Log-Out</Button>
                        </CardSection>
                         );
            case false:
                return <LoginForm />;
            default:
                return <Spinner sizeprop='large' />;
        }
        
        
    }

    render() {
        return(
            <View>
                <Header headerText='LogIn'/>
                {this.rendercontent()}
            </View>
        );
    }
}

export default App;
