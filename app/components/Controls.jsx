const React = require('react');

const Controls = React.createClass({

    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    },


    onStatusChange: function(newStatus) {

        return () => {
            this.props.onStatusChange(newStatus);
        }
    },



    render: function() {

        let {countdownStatus} = this.props;
        let renderStartStopButton = () => {
            if(countdownStatus === 'started') {
                return <button onClick={this.onStatusChange('paused')} className="button secondary expanded" ref="pause">Pause</button>
            } else if(countdownStatus === 'paused') {
                return <button onClick={this.onStatusChange('started')} className="button primary expanded" ref="start">Start</button>
            }
        }

        return (
            <div className="controls"> {/* Controls component {countdownStatus} */} 
                
                <button onClick={this.onStatusChange('stopped')} className="button alert hollow expanded" ref="clear">Clear</button>
                {renderStartStopButton()}
            </div>
        );
    }
});

module.exports = {Controls}