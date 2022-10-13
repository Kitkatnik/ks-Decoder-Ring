const {polybius} = require("../src/polybius.js");
const expect = require("chai").expect;

describe("polybius", () => {
    it ("should encode the input", () => {
        const input = "thinkful";
        const encode = true;
        const expected = "4432423352125413";
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    })
    it ("should decode the input", () => {
        const input = "4432423352125413";
        const encode = false;
        const expected = "thinkful";
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    })
    it ("should decode and skip spaces", () => {
        const input = "3251131343 2543241341";
        const encode = false;
        const expected = "hello world";
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    })
    it ("should decode and show both i and j", () => {
        const input = "message";
        const encode = false;
        const expected = "th(i/j)nkful";
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    })
    it ("should have an even number of characters in the string", () => {
        const input = "message";
        const encode = false;
        const expected = false;
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    })
    it ("should encode as per grading requirements", () => {
        const input = "message";
        const expected = "23513434112251";
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    })
});