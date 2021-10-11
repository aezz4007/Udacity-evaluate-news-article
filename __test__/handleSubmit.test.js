import { handleSubmit } from "../src/client/js/formHandler"

const apiData = {
"model":"Restaurants_en",
"score_tag":"P",
"agreement":"DISAGREEMENT",
"subjectivity":"SUBJECTIVE",
"confidence":"98",
"irony":"NONIRONIC",
}

describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
           expect.objectContaining (apiData);
})});



describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
           expect(handleSubmit).toBeDefined();
})});