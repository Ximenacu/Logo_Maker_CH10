// const ShapeTest = require('./Shape');
const CircleTest = require('./Circle');
// const TriangleTest = require('./Triangle');
// const SquareTest = require('./Square');

// A testing suite is created.
// describe('ShapeClass', () => {
//     // A test is created to check that svgGen does in fact return the correct string.
//     describe('svgGen', () => {
//       it('should give me a specific string', () => {
//         const MyString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="white" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">xfc</text></svg>;`
//         const Mylogo = new Shape("Circle",'xfc', 'red', 'white');
//         expect(Mylogo.svgGen(Mylogo.name, Mylogo.text, Mylogo.color, Mylogo.fill)).toEqual(MyString);
//       });
//     });
// });

// A testing suite is created for CIRCLE
describe('CIRCLE CLASS', () => {
  // A test is created to check that svgGen does in fact return the correct string.
  describe('Circle Render', () => {
    it('should give me a specific string', () => {
      const MyString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="white" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text></svg>;`
      const Mylogo = new CircleTest("Circle",'ABC', 'red', 'white');
      expect(Mylogo.render()).toEqual(MyString);
    });
  });
});