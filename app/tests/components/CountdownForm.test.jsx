const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const TestUtils = require('react-addons-test-utils');
const $ = require('jquery');

const createSpy = expect.createSpy;
const spyOn     = expect.spyOn;
const isSpy     = expect.isSpy;

const {CountdownForm} = require('CountdownForm');


describe('', () => {
    it('should exist', () => {
        expect(CountdownForm).toExist();
    });

    it('should call onSetCountdown if valid seconds entered', () => {

        
        let spy  = createSpy();
        let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);

        let $el = $(ReactDOM.findDOMNode(countdownForm));
        countdownForm.refs.seconds.value = 109;

        // let spy2 = spyOn(CountdownForm, 'props.onSetCountdown');
        TestUtils.Simulate.submit($el.find('form')[0])
        
        expect(spy).toHaveBeenCalledWith(109);

        // expect(spy2).toHaveBeenCalled();
        // expect(spy2).toNotHaveBeenCalled();
        // expect(spy2).toHaveBeenCalledWith();


        // spy2()
    });
});