import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return andrew id', () => {
        const query = "andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "My Andrew ID is: pjitjang"
          ));
    });

    test('should return name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "pjitjangg"
          ));
    })

    test('should compute 15 plus 20', () => {
        const query = "What is 15 plus 20?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("35");
    })

    test('should find largest of 91, 23, 17', () => {
        const query = "Which of the following numbers is the largest: 91, 23, 17?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("91");
    })
});