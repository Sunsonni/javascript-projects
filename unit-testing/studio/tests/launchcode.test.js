// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function() {
  test("Organization is nonprofit", function() {
    expect(launchcode.organization).toEqual("nonprofit");
  });
  test("The Executive Director is Jeff", function() {
    expect(launchcode.executiveDirector).toEqual("Jeff");
  });
  test("Amount of Employees who are Cool 100%", function() {
    expect(launchcode.percentageCoolEmployees).toEqual(100);
  });
  test("Programs Offered", function() {
    expect(launchcode.programsOffered[0]).toEqual("Web Development");
    expect(launchcode.programsOffered[1]).toEqual("Data Analysis");
    expect(launchcode.programsOffered[2]).toEqual("Liftoff");
    expect(launchcode.programsOffered).toHaveLength(3)
  });
});
describe("LaunchOutput", function(){
  test("Returns 'Launch' if divisible by 2", function(){
    let results = launchcode.launchOutput(2);
    expect(results).toEqual("Launch!")
  });
  test("Returns 'Code' if divisible by 3", function(){
    let results = launchcode.launchOutput(3);
    expect(results).toEqual("Code!")
  });
  test("Returns 'Rocks' if divisible by 5", function(){
    let results = launchcode.launchOutput(5);
    expect(results).toEqual("Rocks!")
  });
  test("Returns 'LaunchCode' if divisible by 2 & 3", function(){
    let results = launchcode.launchOutput(6);
    expect(results).toEqual("LaunchCode!")
  });
  test("Returns 'Code Rocks' if divisible by 3 & 5", function(){
    let results = launchcode.launchOutput(15);
    expect(results).toEqual("Code Rocks!")
  });
  test("Returns 'Launch Rocks' if divisible by 2 & 5", function(){
    let results = launchcode.launchOutput(10);
    expect(results).toEqual("Launch Rocks! (CRASH!!!!)")
  });
  test("Returns 'LaunchCode Rocks' if divisible by 2, 3, & 5", function(){
    let results = launchcode.launchOutput(30);
    expect(results).toEqual("LaunchCode Rocks!")
  });
  test("Returns 'Rutabagas! That doesn't work.' if NOT divisible by 2, 3, & 5", function(){
    let results = launchcode.launchOutput(7);
    expect(results).toEqual("Rutabagas! That doesn't work.")
  });
});