const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory, browserHistory} = require('react-router');


const {Main}      = require('Main');
const {Timer}     = require('Timer');
const {Stopwatch} = require('Stopwatch');





// load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// require('style!css!applicationStyles');
require('style!css!sass!applicationStyles');


ReactDOM.render(
    /*{ <Router history={browserHistory}> }*/
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            {/*<Route path="timer" component={Timer}></Route>*/}
            <Route path="stopwatch" component={Stopwatch}></Route>
            <IndexRoute component={Timer}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
