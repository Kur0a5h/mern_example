import React, {Component} from 'react';
import axios from'axios';

export default class Test extends Component {
    async componentDidMount(){
        const message = {
            text: 'This is a message from the client, Hello!',
            name: 'Kim K.'
        };

        const resp = await axios.post('/api/send-message', message);

        console.log('Send Message Resp:', resp);
        
        // const resp= await axios.get('/api/test');
        
        // console.log('Test Response:', resp);
    
        // const user = await axios.get('/api/user');

        // console.log('User Response:', user);
    }
    
    render(){
        return (
            <div>
                <h1>Test Component</h1>
            </div>
        );
    }
}
