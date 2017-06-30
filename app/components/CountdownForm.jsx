const React = require('react');

const CountdownForm = React.createClass({

    
    onSubmitHandler: function(e) {
        e.preventDefault();
        let strSeconds = this.refs.seconds.value;
        console.log(`strSeconds ${strSeconds}`)

        if(strSeconds.match(/^[0-9]+$/)) {
            this.refs.seconds.value = '';
            this.props.onSetCountdown(parseInt(strSeconds, 10));
        }
        
    },

    render: function() {

        

        return (
            <div>
                <form onSubmit={this.onSubmitHandler} ref="form" className="countdown-form">
                    <input type="text" ref="seconds" placeholder="Enter time in seconds" />
                    <button className="button expanded">Start</button>
                </form>
            </div>
        );

    }

});

module.exports = {CountdownForm}