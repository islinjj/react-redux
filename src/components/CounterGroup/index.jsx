import React, { Component } from 'react'
import Counter from '../Counter'

class CounterGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 0,
            totalValue: 0
        }
    }

    onResize = (event) => {
        if (this.state.size != event.target.value) {
            this.setState({
                size: event.target.value ? parseInt(event.target.value) : 0 ,
                totalValue: 0
            })
        }
    }

    handleIncrease = () => {
        this.setState((preState) => ({
            totalValue: preState.totalValue + 1
        }))
    }

    handleDecrease = () => {
        this.setState((preState) => ({
            totalValue: preState.totalValue - 1
        }))
    }

    render() {
        const initArray = [...Array(this.state.size).keys()];
        return <div>
            <div>
            <label>
                Group-size:
                <input onBlur={this.onResize} defaultValue={0}></input>
            </label>
        </div>
            <div>
                <label>Group total:{this.state.totalValue}</label>
            </div>
            {
            initArray.map(key => <Counter groupSize={this.state.size} onDecrease={this.handleDecrease} onIncrease={this.handleIncrease} key={key} />)
            }
        </div >
    }
}
export default CounterGroup;