const React     = require('react');
const ReactDOM  = require('react-dom');
const expect    = require('expect');
const $         = require('jquery');
const TestUtils = require('react-addons-test-utils')

const {Controls}  = require('Controls')



describe('Controls Component', () => {
    it('should exist', () => {
        expect(Controls).toExist();
    });

    it('should set countdown status to started', () => {
        let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
        expect(controls.props.countdownStatus).toBe('started');
    });


    it('should render paused when started', () => {
        let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
        let $el = $(ReactDOM.findDOMNode(controls));
        let $pause = $el.find('button:contains(Pause)');
        expect($pause.length).toBe(1);
    });

    it('should set countdown status to paused', () => {
        let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
        expect(controls.props.countdownStatus).toBe('paused');
    });



    it('should render start when paused', () => {
        let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
        let $el = $(ReactDOM.findDOMNode(controls));
        let $start = $el.find('button:contains(Start)');
        expect($start.length).toBe(1);
        console.log($start);
    });

});
