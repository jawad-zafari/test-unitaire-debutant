const { calculate } = require('../calculator.js');

describe('Tests de la calculatrice JavaScript', () => {
    
    test('Addition : 2 + 3 = 5', () => {
        expect(calculate('2+3')).toBe(5);
    });

    
});