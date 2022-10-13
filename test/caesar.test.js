const {caesar} = require("../src/caesar.js");
const expect = require("chai").expect;

describe("caesar", () => {
    it ("should encode the input", () => {
        const input = "thinkful";
        const shift = 3;
        const expected = "wklqnixo";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    })
    it ("should return false if shift value isn't present", () => {
        const input = "thinkful";
        const shift = null;
        const expected = false;
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    })
    it ("should return false if shift value is equal to 0, less than -25, or greater than 25", () => {
        const input = "thinkful";
        const shift = 0;
        const expected = false;
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    })
    it ("should encode as per grading requirements", () => {
        const input = "Zebra Magazine";
        const shift = 3;
        const expected = "cheud pdjdclqh";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    })
});