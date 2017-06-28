const React = require('react');
const {Link, IndexLink}  = require('react-router');

const Nav2 = () => {
    return(
        <div></div>
    );
}

const Nav = React.createClass({
    render: function() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                            Awesome Timer APP
                        </li>
                        <li className="menu-text">
                            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
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