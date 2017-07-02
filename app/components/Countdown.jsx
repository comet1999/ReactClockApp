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
        //countdownStatus: stopped, paused or started

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
                
                case 'stopped':
                    this.setState({
                        count:0
                    });
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
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

    handleStatusChange: function(newStatus) {

        this.setState({
            countdownStatus:newStatus
        })
        // switch(newStatus) {
        //     case 'start': 
        //         break;
        //     case 'pause':
        //         break;
        //     case 'clear':
        //         break;
        // }

    },

    render: function() {

        let {count, countdownStatus} = this.state;

        let renderControlArea = () => {
            switch (countdownStatus) {
                case 'started':
                case 'paused':
                    return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
                case 'stopped':
                    return <CountdownForm onSetCountdown={this.handleSetCountdown} />
            }
        };

        return (
            <div>
                {/*<div>Stopwatch component</div>*/}
                <Clock totalSeconds={count}/>
                {renderControlArea()}
                
            </div>
        );
    }
});

module.exports = {Countdown}