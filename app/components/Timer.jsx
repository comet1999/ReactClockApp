const React = require('react');
const {Clock} = require('Clock');
const {Controls} = require('Controls');

const Timer = React.createClass({
    render: function() {
        return (
            <div>
                <div>Timer.jsx component</div>
                <Clock/>
               {/* <Controls/>*/}
            </div>
        );
    }
});

module.exports = {Timer}