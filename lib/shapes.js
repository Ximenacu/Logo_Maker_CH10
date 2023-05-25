// class shape 
class Shape {
  constructor(name, text, color, fill) {
    this.name = name;
    this.text = text;
    this. color = color;
    this.fill = fill;    
  }

  svgGen(name, text, color, fill) {
    switch (name) {
      case 'Circle':
        console.log("A circle")
        console.log(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${fill}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>
        </svg>`);
        break;
      case 'Triangle':
        console.log("A triangle")
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,20 230,180 70,180" fill="${fill}" />
        <text x="150" y="140" font-size="50" text-anchor="middle" fill="${color}">${text}</text>
        </svg>`;
        break;
      case 'Square':
        console.log("A sqr")
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="70" y="20" width="160" height="160" fill="${fill}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>
        </svg>`;
        break;
      default:
        console.log(`Sorry, we are out of .`);
    }
  }

  nap() {
    console.log('Zzzzzzzzz');
  }
}

const myshape = ['Circle','Triangle','Square'];
const omg = new Shape(myshape[1],'xfc', 'red', 'white');

console.log(omg);
console.log(omg.name);

omg.nap()

omg.svgGen(myshape[0], "mjd", "omg.color"," omg.fill");
