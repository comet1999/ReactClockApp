const React     = require('react');
const ReactDOM  = require('react-dom');
const $         = require('jquery');
const expect    = require('expect');
const TestUtils = require('react-addons-test-utils');

const {Countdown} = require('Countdown');


describe('Countdown Component', () => {
    
    it('should exist', () => {
        expect(Countdown).toExist();
    });


    describe('handleSetCountdown', () => {

        it('should set state to started and countdown', (done) => {

            let countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(9);

            expect(countdown.state.countdownStatus).toBe('started');
            expect(countdown.state.count).toBe(9);

            setTimeout(() => {
                expect(countdown.state.count).toBe(8);
            }, 1001);


            let $el = $(ReactDOM.findDOMNode(countdown));
            done();
        });


        it('should not overflow to negative', (done) => {

            let countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(1);

            expect(countdown.state.countdownStatus).toBe('started');
            expect(countdown.state.count).toBe(1);

            setTimeout(() => {
                expect(countdown.state.count).toBeGreaterThanOrEqualTo(0);
            }, 3001);


            let $el = $(ReactDOM.findDOMNode(countdown));
            done();
        });


    });
});