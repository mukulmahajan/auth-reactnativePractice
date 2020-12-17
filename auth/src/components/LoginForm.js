import React, { Component } from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import { Button,Card,CardSection,Input,Spinner } from './common';

class LoginForm extends Component{

    state={email:'',password:'',error:'',loading:false};

    

    onButtonPress(){

        const {email,password}=this.state;
        this.setState({error:'',loading:true});

        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(this.onloginsuccess.bind(this))
        .catch(() =>
        {
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(this.onloginsuccess.bind(this))
            .catch(this.onloginfail.bind(this));

        });
    }

    onloginfail(){
        this.setState({
            error:'Authentication failed',
            loading:false,


        });
    }

    onloginsuccess(){
        this.setState({
            email:'',
            password:'',
            loading:false,
            error:''
        });
    }

    renderButton(){
        if(this.state.loading){
            return <Spinner sizeprop='small' />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)} >
                        Log In
                        </Button>

        );
    }



    render() {
        return (
            <Card>
                <CardSection>

                   <Input 
                   placeholderprop='user@gmail.com'
                   label='Email'
                   value={this.state.email}
                   onChangeText={text=>this.setState({email: text})}
                   
                    /> 

                </CardSection>

                <CardSection>
                <Input 
                
                   secureTextEntryprop
                   placeholderprop='password'
                   label='Password'
                   value={this.state.password}
                   onChangeText={text=>this.setState({password: text})}
                   
                    />
                </CardSection>

                <Text style={styles.errorteststyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                    
                </CardSection>


            </Card>
        );
    }
}

const  styles={
    errorteststyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }

};


export default LoginForm;
