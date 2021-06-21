import { peakFind } from "./peak";
describe('peakFind', () => {
    test('normal', () => {
        expect(peakFind([1,2,5,3,8,9,11])).toBe(2);
    })
    test('length one', () => {
        expect(peakFind([1])).toBe(0);
    })
    test('length even', () => {
        expect(peakFind([1,2,3,1])).toBe(2)
    })
    test('length odd', () => {
        expect(peakFind([1,2,1,3,5,6,4])).toBe(5)
    })
});
