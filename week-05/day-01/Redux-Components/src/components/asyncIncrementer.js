import React from 'react';
import { connect } from 'react-redux';
// import { applyMiddleware, creatStore} from 'redux'

function asyncIncrease(number, timeDelayed){
    return dispatch =>
        setTimeout(() => {
            dispatch({ type: 'INCREASE', amount: number })
        }, timeDelayed)
}


class AsyncIncrementer extends React.Component{
    constructor(props){
        super(props);
        this.state = {amount: 0, timeDelayed: 0};
        this.amountChange = this.amountChange.bind(this);
        this.timeDelayedChange = this.timeDelayedChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    amountChange(event) {
        this.setState({amount: event.target.value});
    }

    timeDelayedChange(event) {
        this.setState({timeDelayed: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.asyncIncrease(this.state.amount, this.state.timeDelayed);
        this.setState({amount:'', timeDelayed: ''});

        console.log(asyncIncrease(this.state.amount, this.state.timeDelayed));
    }


    render(){
        return(
            <div>
                <h1>Async Incrementer</h1>
                <p>{this.props.counter}</p>
                <form onSubmit={this.handleSubmit}>
                    <label>amount:
                        <input type="number" value={this.state.amount} name="amount" onChange={this.amountChange}/>
                    </label>

                    <label>Time delayed:
                        <input type="number" value={this.state.timeDelayed} name="timeDelayed" onChange={this.timeDelayedChange}/>
                    </label>
                    <button>Increase</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        asyncIncrease: (number, timeDelayed) =>
            dispatch(asyncIncrease(number, timeDelayed))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AsyncIncrementer)
