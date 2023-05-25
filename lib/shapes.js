// class shape 
class Shape {
  // constructor(name, text, color, fill) {
  constructor(text, color, fill) {
    // this.name = name;
    this.text = text;
    this. color = color;
    this.fill = fill;    
  }

  // svgGen() {
  //   switch (this.name) {
  //     case 'Circle':
  //       console.log("A circle")
  //       console.log(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.fill}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text></svg>`);
  //       break;
  //     case 'Triangle':
  //       console.log("A triangle")
  //       return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,20 230,180 70,180" fill="${this.fill}" /><text x="150" y="140" font-size="50" text-anchor="middle" fill="${this.color}">${this.text}</text></svg>`;
  //       break;
  //     case 'Square':
  //       console.log("A sqr")
  //       return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="20" width="160" height="160" fill="${this.fill}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text></svg>`;
  //       break;
  //     default:
  //       console.log(`Sorry, we are out of .`);
  //   }
  // }
}

// const myshape = ['Circle','Triangle','Square']
// const omg = new Shape(myshape[0],'LCU', 'blue', 'white');
// console.log(omg);  
// omg.svgGen();

class Circle extends Shape {
  constructor(text, color, fill) {
    super(text, color, fill);
    this.name = "Circle";
  }

  render() {
    console.log(this)
    console.log(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.fill}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text></svg>`);
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.fill}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text></svg>`
  }
}

class Triangle extends Shape {
  constructor(text, color, fill) {
    super(text, color, fill);
    this.name = "Triangle";
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,20 230,180 70,180" fill="${this.fill}" /><text x="150" y="140" font-size="50" text-anchor="middle" fill="${this.color}">${this.text}</text></svg>`; 
  }
}

class Square extends Shape {
  constructor(text, color, fill) {
    super(text, color, fill);
    this.name = "Square";
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="20" width="160" height="160" fill="${this.fill}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text></svg>`;
  }
}

// name, text, color, fill
const circLogo1 = new Circle('LCU', 'blue', 'orange');
circLogo1.render();

module.exports = Shape;
module.exports = Circle;
module.exports = Triangle;
module.exports = Square;