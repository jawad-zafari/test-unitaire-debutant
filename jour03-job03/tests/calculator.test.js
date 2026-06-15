const { calculate } = require('../calculator.js');

describe('Tests de la calculatrice JavaScript', () => {
    
    test('Addition : 2 + 3 = 5', () => {
        expect(calculate('2+3')).toBe(5);
    });

    test('Soustraction : 10 - 4 = 6', () => {
        expect(calculate('10-4')).toBe(6);
    });

    test('Multiplication : 4 * 5 = 20', () => {
        expect(calculate('4*5')).toBe(20);
    });

    test('Division : 20 / 4 = 5', () => {
        expect(calculate('20/4')).toBe(5);
    });

    
});