const {Circle, Square, Triangle} = require('./shapes');

//test circle
describe('Circle', () => {
    test('render', () => {
        const circle = new Circle('red');
        expect(circle.render()).toBe('<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="red"/>');
    });
});

//test square
describe('Square', () => {
    test('render', () => {
        const square = new Square('blue');
        expect(square.render()).toBe('<rect x="50" y="0" width="100%" height="100%" fill="blue"/>');
    });
});

//test triangle
describe('Triangle', () => {
    test('render', () => {
        const triangle = new Triangle('green');
        expect(triangle.render()).toBe('<polygon height="100% width="100%" points="0,200 300, 150,0" fill="green"/>');
    });
});