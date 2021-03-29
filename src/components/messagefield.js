import React from 'react';
import Message from './message';
import '../styles/style.css'

export default class MessageField extends React.Component {
        constructor(props) {
            super(props);
            this.textInput = React.createRef();

            this.state = {
                messages: [
                    { text: "Привет!", sender: 'bot' },
                    { text: "Как дела?", sender: 'bot' }
                ],
                input: '',
            }

        };

        handleClick = (message) => {
            this.sendMessage(message)
        };

        handleChange = (e) => {
            this.setState({ input: e.target.value });
        };

        handleKeyUp = (e, message) => {
            if (e.keyCode === 13) { // Enter
                this.sendMessage(message)
            }
        };
        sendMessage = (message) => {
            this.setState({
                messages: [...this.state.messages, { text: message, sender: 'human' }],
                input: '',

            });

        };

        componentDidUpdate() {
            if (this.state.messages[this.state.messages.length - 1].sender === 'human') { // Остаток от деления на 2
                setTimeout(() =>
                    this.setState({ messages: [...this.state.messages, { text: 'Не приставай ко мне, я робот!', sender: 'bot' }] }),
                    1000);
            };
            this.textInput.current.focus();
        }
        componentDidMount() {
            this.textInput.current.focus();
        }


        render() {
                const messageElements = this.state.messages.map((message, index) => ( <
                        Message key = { index }
                        text = { message.text }
                        sender = { message.sender }
                        />));
                        return <div className = "layout" >
                            <
                            div className = "message-field" > { messageElements } <
                            /div> <
                        input ref = { this.textInput }
                        onChange = { this.handleChange }
                        onKeyUp = {
                            (e) => this.handleKeyUp(e, this.state.input)
                        }
                        value = { this.state.input } >
                        <
                        /input> <
                        button onClick = {
                            () => this.handleClick(this.state.input)
                        } > Отправить сообщение < /button> < /
                        div >
                    }
                }