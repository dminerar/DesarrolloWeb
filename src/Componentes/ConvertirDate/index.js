import React, { Component } from 'react';

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hora: new Date()
        }
    }

    componentDidMount() {
        console.log("init component");
    }

    componentWillUnmount(){
        console.log("end component");
    }
    
    render() {
        return (
            <div>
               <h3>Hora:  {this.state.hora.toLocaleTimeString()}</h3>
            </div>
      );
    }
}
export default ClassComponent