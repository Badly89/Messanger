import React from "react";
import Child from "./child";


class App extends React.Component {
    state = {
        text: 'Наш первый React компонент',
        counter: 0,
    };

    handleClick = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }));
    };

    // componentWillMount() {
    //     console.log('componentWillMount');
    // }

    componentDidMount() {
        console.log('componentDidMount');
        setTimeout(() => this.setState({ 'text': 'Обновленный React-компонент' }), 3000);
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }



    render() {
        const { counter } = this.state;
        return (
            <div>
                <h1>{this.state.text}</h1>
                <Child counter={this.state.counter} />
                {/* <h2>{counter}</h2> */}
                <button onClick={this.handleClick}>Increase</button>
            </div >

        )
    }
}

export default App;