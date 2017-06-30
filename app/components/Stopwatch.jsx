const React = require('react');
const {Clock} = require('Clock');
const {Controls} = require('Controls');


const Stopwatch = React.createClass({
    render: function() {
        return (
            <div>
                <div>Stopwatch component</div>
                <Clock totalSeconds={129}/>
                <Controls />
            </div>
        );
    }
});

module.exports = {Stopwatch}