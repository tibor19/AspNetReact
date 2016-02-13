import * as React from 'react';

interface State{
    messages : string[];
}

export default class App extends React.Component<any, State> {
    
    constructor(){
        super();
        this.state = {
            messages: [
              'Hello there how are you?',
              'I am  fine, and you?'
            ]
        };
    }

    render(){
        var messageNodes = this.state.messages.map((message, index)=> {
            return (
              <div key={index}>{message}</div>
            );
        });

        return (
          <div>{messageNodes}</div>
        );
    }
}
