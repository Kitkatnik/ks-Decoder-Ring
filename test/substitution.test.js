const {substitution} = require("../src/substitution.js");
const expect = require("chai").expect;

describe("substitution", () => {
    it ("should return false if alphabet doesn't include 26 unique characters", () => {
        const input = "thinkful";
        const alphabet = "short";
        const expected = false;
        const actual = substitution(input, alphabet);

        expect(actual).to.equal(expected);
    })
    it ("should return false if alphabet doesn't include unique characters", () => {
        const input = "thinkful";
        const alphabet = "abcabcabcabcabcabcabcabcyz";
        const expected = false;
        const actual = substitution(input, alphabet);

        expect(actual).to.equal(expected);
    })
    it ("should decode the message", () => {
        const input = "y&ii$r&";
        const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
        const encode = false;
        const expected = "message";
        const actual = substitution(input, alphabet, encode);

        expect(actual).to.equal(expected);
    })
    it ("should encode the message", () => {
        const input = "message";
        const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
        const expected = "y&ii$r&";
        const actual = substitution(input, alphabet);

        expect(actual).to.equal(expected);
    })
    it ("should encode the message as per grading requirements", () => {
        const input = "message";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const expected = "ykrrpik";
        const actual = substitution(input, alphabet);

        expect(actual).to.equal(expected);
    })
});