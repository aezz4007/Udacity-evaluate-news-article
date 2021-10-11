import { checkURL } from "../src/client/js/urlChecker"
import 'regenerator-runtime/runtime'

const inputText = 'https://newsinfo.inquirer.net/1500386/lebanese-firefighters-contain-fire-at-fuel-facility-minister-says'
describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
           expect(checkURL).toBeDefined();
})});

describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
           expect.stringContaining(inputText);
})});
