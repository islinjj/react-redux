import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            groupSize: 0
        };
    }

    onIncrease = () => {
        this.setState((preState) => ({
            value: preState.value + 1
        }))
        this.props.increase();
        // this.props.store.dispatch({type:'INCREASE'});
    };

    onDecrease = () => {
        this.setState((preState) => ({
            value: preState.value - 1
        }))
        this.props.decrease();
        // this.props.store.dispatch({type:'DECREASE'});
    };

    static getDerivedStateFromProps = (props, state) => {
        if (props.groupSize !== state.groupSize) {
            return {
                value: 0,
                groupSize: props.groupSize
            }

        }
        return null;
    };

    render() {
        return (
            <div>
                <button onClick={this.onDecrease}>-</button>
                <mark>{this.state.value}</mark>
                <button onClick={this.onIncrease}>+</button>
            </div>
        );
    }
}

export default Counter;