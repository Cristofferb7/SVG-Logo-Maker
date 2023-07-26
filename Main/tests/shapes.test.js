const { Circle } = require("../lib/shapes.js");
const { Triangle } = require("../lib/shapes.js");
const { Square } = require("../lib/shapes.js");


// ==========================circle=======================================================
describe("For Circle", () => {
    // ====================test values=====================
    const shapeColor = "blue";
    const text = "SVG";
    const textColor = "white";

    const newCircle = new Circle(shapeColor, textColor, text);

    test("circle has a color", () => {
        expect(newCircle.color).toBe(shapeColor)
    })
    test("circle has text", () => {
        expect(newCircle.text).toBe(text)
    })
    test("circle has text color", () => {
        expect(newCircle.textColor).toBe(textColor)
    })
    test("circle can generate SVG", () => {
        const expectedOutput = `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="50" style="fill:${shapeColor};"/><text x="100" y="110" text-anchor="middle" font-size="40" fill="${textColor}">${text}</text></svg>`;

        expect(newCircle.generateSVG()).toBe(expectedOutput)
    })
})

// ====================================circle==================================================
describe("For Triangle", () => {
    // ================test values=====================
    const shapeColor = "blue";
    const text = "SVG";
    const textColor = "white";

    const newTriangle = new Triangle(shapeColor, textColor, text);

    test("triangle has a color", () => {
        expect(newTriangle.color).toBe(shapeColor)
    })
    test("Triangle has text", () => {
        expect(newTriangle.text).toBe(text)
    })
    test("Triangle has text color", () => {
        expect(newTriangle.textColor).toBe(textColor)
    })
    test("Triangle can generate SVG", () => {
        const expectedOutput = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,0 0,100 100,100" style="fill:${shapeColor};"/><text x="49" y="60" text-anchor="middle" font-size="30" fill="${textColor}">${text}</text></svg>`;;

        expect(newTriangle.generateSVG()).toBe(expectedOutput)
    })
})

// ====================================square==================================================
describe("For Square", () => {
    // =======================test values======================
    const shapeColor = "blue";
    const text = "SVG";
    const textColor = "white";

    const newSquare = new Square(shapeColor, textColor, text);

    test("Square has a color", () => {
        expect(newSquare.color).toBe(shapeColor)
    })
    test("Square has text", () => {
        expect(newSquare.text).toBe(text)
    })
    test("Square has text color", () => {
        expect(newSquare.textColor).toBe(textColor)
    })
    test("Square can generate SVG", () => {
        const expectedOutput = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" style="fill:${shapeColor};"/><text x="23" y="60" font-size="30px" fill="${textColor}">${text}</text></svg>`;

        expect(newSquare.generateSVG()).toBe(expectedOutput)
    })
})