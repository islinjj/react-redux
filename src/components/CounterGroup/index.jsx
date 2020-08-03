import React, { Component } from 'react'
import Counter from '../Counter'
import store from '../../store'

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

    render() {
        store.subscribe(() => {
            this.setState({
                totalValue: store.getState()
            })
        });
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
            initArray.map(key => <Counter groupSize={this.state.size} key={key} store={store} />)
            }
        </div >
    }
}
export default CounterGroup;