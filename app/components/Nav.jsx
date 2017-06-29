const React = require('react');
const {Link, IndexLink}  = require('react-router');

const Nav2 = () => {
    return(
        <div></div>
    );
}

const Nav = React.createClass({

    componentWillMount: function() {
        console.log(`1. Component will mount.`);
    },

    componentDidMount: function() {
        console.log(`2. Component did mount.`);
    },

    componentWillReceiveProps: function() {
        console.log(`3. Component will receive props.`);
    },

    shouldComponentUpdate: function() {
        console.log(`4. Should component update.`);
        return true;
    },

    componentWillUpdate: function() {
        console.log(`5. Component will update.`);
    },

    componentDidUpdate: function() {
        console.log(`6. Component update.`);

    },

    componentWillUnmount: function() {
        console.log(`7. Component will UN-mount.`);
    },


    render: function() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                            Awesome Timer APP
                        </li>
                        <li className="menu-text">
                            <IndexLink to="/" exact activeClassName="active-link">Timer</IndexLink>
                        </li>
                        <li className="menu-text">
                            <Link to="/stopwatch" activeClassName="active-link">Stopwatch</Link>
                        </li>

                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">Created<a>by Me</a></li>

                    </ul>
                </div>

            </div>
        );
    }
});

module.exports = {Nav};