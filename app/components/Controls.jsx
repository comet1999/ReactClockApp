const React = require('react');

const Controls = React.createClass({

    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired
    },

    onStartStopHandler: function() {

    },

    onClearHandler: function() {

    },



    render: function() {

        let {countdownStatus} = this.props;
        let renderStartStopButton = () => {
            if(countdownStatus === 'started') {
                return <button className="button secondary expanded" ref="stop">Pause</button>
            } else if(countdownStatus === 'paused') {
                return <button className="button primary expanded" ref="stop">Start</button>
            }
        }

        return (
            <div className="controls">Controls component {countdownStatus}
                
                <button className="button alert hollow expanded" ref="clear">Clear</button>
                {renderStartStopButton()}
            </div>
        );
    }
});

module.exports = {Controls}