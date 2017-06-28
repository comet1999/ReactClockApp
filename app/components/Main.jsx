const React = require('react');
const {Nav} = require('Nav');
const {Timer} = require('Timer');
const {Stopwatch} = require('Stopwatch');

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
            <div>
                <div>
                    <Nav />
                    <p>Main.jsx rendered.</p>
                    {props.children}
                </div>
            </div>            
        </div>
    );
}

module.exports = {Main};
