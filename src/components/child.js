import React from "react";
class Child extends React.Component {

    // componentWillMount() {
    //     console.log('Child componentWillMount');
    // }

    componentDidMount() {
        console.log('Child componentDidMount');
    }

    componentDidUpdate() {
        console.log('Child componentDidUpdate');
    }


    render() {
        console.log('Child render');
        return (
            <h1>Это компонент Child, counter: {this.props.counter}</h1>
        )
    }

}

export default Child;