const React       = require('react');
const ReactDOM    = require('react-dom');
const expect      = require('expect');
const $           = require('jquery');

const TestUtils   = require('react-addons-test-utils');

const {Clock}       = require('Clock');


describe('Clock Component', () => {

    it('should exist', () => {
        expect(Clock).toExist();
    });
});


describe('Clock Render', () => {
    it('should render clock to output', () => {
        let clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
        // let renderedClock = clock.render();

        let $el = $(ReactDOM.findDOMNode(clock));
        let actualText = $el.find('.clock-test').text();

        expect(actualText).toBe('01:02');
        
        console.log(actualText);

    });
});

describe('Clock FormatSeconds', () => {

    it('should format seconds', () => {
        let clock = TestUtils.renderIntoDocument(<Clock/>);
        let seconds = 650;
        let expected = '10:50';
        let actual = clock.formatSeconds(seconds);
        expect(actual).toBe(expected);
    });

    it('should format seconds when min/sec are less than 10', () => {
        let clock = TestUtils.renderIntoDocument(<Clock/>);
        let seconds = 61;
        let expected = '01:01';
        let actual = clock.formatSeconds(seconds);
        expect(actual).toBe(expected);
        
    });

});