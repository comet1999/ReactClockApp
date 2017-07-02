const React = require('react');
const {Clock} = require('Clock');
const {Controls} = require('Controls');
const {CountdownForm} = require('CountdownForm');


const Countdown = React.createClass({

    getInitialState: function() {
        return {
            count:0,
            countdownStatus: 'stopped'
        };
    },


    handleSetCountdown: function(seconds) {
        //countdownStatus: stopped, pause or started

        this.setState({
            count:seconds,
            countdownStatus: 'started'
            
        });
    },


    componentDidUpdate: function(prevProps, prevState) {

        

        if(this.state.countdownStatus !== prevState.countdownStatus) {
            switch(this.state.countdownStatus) {
                case 'started':
                    
                    this.startTimer();
                    break;
            }
        }

    },

    startTimer: function() {
        
        this.timer = setInterval(() => {
            let newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });

        }, 1000);
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