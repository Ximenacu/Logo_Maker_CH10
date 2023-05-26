const {Circle, Triangle, Square} = require('./shapes');

// A testing suite is created for CIRCLE
describe('Shapes', () => {

  describe('Circle Render', () => {
    it('should give me a specific string', () => {
      const MyString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="white" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text></svg>`
      const Mylogo = new Circle('ABC', 'red', 'white');
      expect(Mylogo.render()).toEqual(MyString);
    });
  });

  describe('Triangle Render', () => {
    it('should give me a specific string', () => {
      const MyString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,20 230,180 70,180" fill="white" /><text x="150" y="140" font-size="50" text-anchor="middle" fill="red">ABC</text></svg>`
      const Mylogo = new Triangle('ABC', 'red', 'white');
      expect(Mylogo.render()).toEqual(MyString);
    });
  });

  describe('Square Render', () => {
    it('should give me a specific string', () => {
      const MyString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="20" width="160" height="160" fill="white" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text></svg>`
      const Mylogo = new Square('ABC', 'red', 'white');
      expect(Mylogo.render()).toEqual(MyString);
    });
  });

});