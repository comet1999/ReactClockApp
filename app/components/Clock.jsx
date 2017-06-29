const React = require('react');

const Clock = React.createClass({

    formatSeconds: function(totalSeconds) {
        let sec = totalSeconds % 60;
        let min = Math.floor(totalSeconds / 60);

        return min + ':' + sec;
    },

    render: function() {
        return (
            <div>Clock component</div>
        );
    }
});

module.exports = {Clock}