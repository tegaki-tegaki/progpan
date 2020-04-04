const a: string = "a";
var b: string = "b";
let c: number = 2;

interface Thing {
  a: string;
  b: string;
  c: number;
}

const fn2 = (thing: Thing) => {
  thing = {
    a,
    b,
    c,
  };
  const things = [thing, thing];
  return things;
};

enum BarkMode {
  ELECTRIC,
  NORMAL,
}

for (let element of [1, 2, 3]) {
  console.log(element);
}

interface Barking {
  bark: () => void;
}

class Dog implements Barking {
  public pet = () => {};
  protected name = "spot";
  private mode: BarkMode;
  readonly fur_color: string = 'green';

  constructor(color) {
    this.fur_color = color;
  }

  get furColor() {
    return this.fur_color;
  }

  bark = () => {
    switch (this.mode) {
      case BarkMode.ELECTRIC:
        console.log("bzzzzt");
        break;
      case BarkMode.NORMAL:
        console.log("woof");
    }
    console.log("woof");
  };
}

const d = new Dog(2);
