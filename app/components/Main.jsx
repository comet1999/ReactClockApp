const React = require('react');
const {Nav} = require('Nav');
const {Timer} = require('Timer');
const {Countdown} = require('Countdown');

// const Main = React.createClass({
//     render: function() {
//         return (
//             <div>
//                 <Nav/>
//                 <h2>Main Component</h2>
//                 {this.props.children}
//             </div> 
//         );
//     }
// });
// a change



const Main = (props) => {
    
    return (
        <div>
            <Nav />
            <div className="row">
                <div className="column small-centered medium-6 large-4">
                    
                    <p>Main.jsx rendered.</p>
                    {props.children}
                </div>
            </div>            
        </div>
    );
}

module.exports = {Main};
