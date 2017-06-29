const React = require('react');

const Clock = React.createClass({

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
        return (
            <div>Clock component</div>
        );
    }
});

module.exports = {Clock}