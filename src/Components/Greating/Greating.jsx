import React, { Component } from 'react'

class Greating extends Component {
    constructor() {
        super();
        this.state = {
            greetingText: "Hola Mundo Cruel!!",
        }
        this.greetingInputHandle = this.greetingInputHandle.bind(this)
    }

    greetingInputHandle(event) {
        console.log(event.target)
        let greetingText = event.target.value
        console.log(greetingText)

        this.setState({ greetingText })
    }

    render() {
        return (
            <>
                {
                    this.state.greetingText || this.state.greetingText !== ""
                        ? <h1>{this.state.greetingText}</h1>
                        : null
                }
                <input type="text" name="greeting" onChange={this.greetingInputHandle} />
            </>
        )
    }
}

export default Greating