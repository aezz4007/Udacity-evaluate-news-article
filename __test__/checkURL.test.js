import { checkURL } from "../src/client/js/urlChecker"
//required for jest to run
import 'regenerator-runtime/runtime'

// a random news article from the Internet
const inputText = 'https://newsinfo.inquirer.net/1500386/lebanese-firefighters-contain-fire-at-fuel-facility-minister-says'

//make sure the function is defined
describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
        expect(checkURL).toBeDefined();
    })
});

//test the input
describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
        expect.stringContaining(inputText);
    })
});
