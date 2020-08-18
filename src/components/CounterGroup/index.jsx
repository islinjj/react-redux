import React, { Component } from 'react';
import Counter from '../Counter';
import { connect } from 'react-redux';
import store from '../../store';
import { increaseAction,decreaseAction } from '../../actions';

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
        // store.subscribe(() => {
        //     this.setState({
        //         totalValue: store.getState()
        //     })
        // });
        const initArray = [...Array(this.state.size).keys()];
        return <div>
            <div>
            <label>
                Group-size:
                <input onBlur={this.onResize} defaultValue={0}></input>
            </label>
        </div>
            <div>
                <label>Group total:{this.props.result}</label>
            </div>
            {
                // store={store} 
            initArray.map(key => <Counter groupSize={this.state.size} key={key} increase={this.props.increase} decrease={this.props.decrease}/>)
            }
        </div >
    }
}


const mapStateToProps = state => {
    return { result: state };
}

const mapDispatchToProps = ({
    increase:increaseAction,
    decrease:decreaseAction
})

export default connect(mapStateToProps,mapDispatchToProps)(CounterGroup)
// export default CounterGroup;