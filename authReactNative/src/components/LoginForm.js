import React,{Component} from 'react';
import {View} from 'react-native';
import {Card, CardSection, Button, Input} from './common';

class LoginForm extends Component {
    render(){
        return(
            <Card>
                <CardSection>
                    <Input label="Email" />
                </CardSection>
                <CardSection>
                     <Input label="Password" />
                </CardSection>
                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        )

    }
}

export default LoginForm;