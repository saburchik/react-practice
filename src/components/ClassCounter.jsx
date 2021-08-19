import React from "react";

class ClassCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.increment.bind(this)
    }

    increment() {
        this.setState({ count: this.state.counter + 1 })
    }
    decrement() {
        this.setState({ count: this.state.counter - 1 })
    }

    render() {
        return (
            < div >
                <button onClick={this.increment} >Increment</button>
                <button onClick={this.decrement}>Decrement </button>
                <h1>{this.state.count}</h1>
            </ div>
        )
    }
}

export default ClassCounter