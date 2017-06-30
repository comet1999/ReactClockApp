const React = require('react');
const {Clock} = require('Clock');
const {Controls} = require('Controls');
const {CountdownForm} = require('CountdownForm');


const Countdown = React.createClass({

    getInitialState: function() {
        return {
            count:0
        };
    },


    handleSetCountdown: function(seconds) {
        this.setState({
            count:seconds
        });
    },

    render: function() {

        let {count} = this.state;

        return (
            <div>
                {/*<div>Stopwatch component</div>*/}
                <Clock totalSeconds={count}/>
                <CountdownForm onSetCountdown={this.handleSetCountdown} />
                <Controls />
            </div>
        );
    }
});

module.exports = {Countdown}