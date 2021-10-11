import { handleSubmit } from "../src/client/js/formHandler"

//a piece of sample response copied from meaningCloud documentation
const apiData = {
    "model": "Restaurants_en",
    "score_tag": "P",
    "agreement": "DISAGREEMENT",
    "subjectivity": "SUBJECTIVE",
    "confidence": "98",
    "irony": "NONIRONIC",
}

//testing response object
describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
        expect.objectContaining(apiData);
    })
});


//to make sure the function is defined
describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
        expect(handleSubmit).toBeDefined();
    })
});