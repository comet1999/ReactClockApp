const React = require('react');

const Clock = React.createClass({

    getDefaultProps: function() {
        return {
            totalSeconds: 0
        };
        
    }, 

    propTypes: {
        totalSeconds: React.PropTypes.number
    },



    formatSeconds: function(totalSeconds) {
        let sec = totalSeconds % 60;
        let min = Math.floor(totalSeconds / 60);

        if (sec < 10) {
            sec = '0' + sec; 
        }
        if (min < 10) {
            min = '0' + min;
        }

        return min + ':' + sec;
    },

    render: function() {
        let {totalSeconds} = this.props;
        // debugger;
        return (
            <div className="clock">
                {/*<div>Clock component</div>*/}
                <span className="clock-test">
                    {this.formatSeconds(totalSeconds)}
                </span>
                
            </div>
        );
    }
});

module.exports = {Clock}