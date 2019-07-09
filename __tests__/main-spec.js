const MultiplicationTest = require('../main');


it ('should print true when call isStartLessEnd given 2 and 2', () => {
    expect(MultiplicationTest.isStartLessEnd(2, 2)).toBe(true);
});
it ('should print true when call isStartLessEnd given 1 and 2', () => {
    expect(MultiplicationTest.isStartLessEnd(1, 2)).toBe(true);
});
it ('should print false when call isStartLessEnd given 2 and 1', () => {
    expect(MultiplicationTest.isStartLessEnd(2, 1)).toBe(false);
});


it ('should print true when call isNumberInRange given 1 and 1000', () => {
    expect(MultiplicationTest.isNumberInRange(1, 1000)).toBe(true);
});
it ('should print false when call isNumberInRange given 0 and 1000', () => {
    expect(MultiplicationTest.isNumberInRange(0, 1000)).toBe(false);
});
it ('should print false when call isNumberInRange given 1 and 1001', () => {
    expect(MultiplicationTest.isNumberInRange(1, 1001)).toBe(false);
});
it ('should print false when call isNumberInRange given 0 and 1001', () => {
    expect(MultiplicationTest.isNumberInRange(0, 1001)).toBe(false);
});




it ('should null when call createMultiplicationTable given 2 and 1', () => {
    expect(MultiplicationTest.createMultiplicationTable(2, 1,MultiplicationTest.isStartLessEnd(2, 1),MultiplicationTest.isNumberInRange(2, 1))).toBe(null);
});
it ('should NumberOutOfRange when call createMultiplicationTable given 0 and 1001', () => {
    expect(MultiplicationTest.createMultiplicationTable(2, 3,MultiplicationTest.isStartLessEnd(0, 1001),MultiplicationTest.isNumberInRange(0, 1001))).toBe("NumberOutOfRange");
});

it ('should print table when call createMultiplicationTable given 2 and 3', () => {
    expect(MultiplicationTest.createMultiplicationTable(2, 3,MultiplicationTest.isStartLessEnd(2, 3),MultiplicationTest.isNumberInRange(2, 3))).toBe("2x2=4 \n2x3=6 3x3=9 \n");
});
