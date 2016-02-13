/// <reference path="..\..\typings\main\ambient\react\react.d.ts" />

import * as React from 'react';


class Test extends React.Component<any, {messages : string[]}> {
    
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

export default Test;