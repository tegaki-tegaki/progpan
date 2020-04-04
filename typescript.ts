import { Dog as AnotherDog } from "./typescript";
//@ts-ignore
const YetAnotherDog = require('./typescript');

declare module Module_Name {}

const a: string = "a";
var b: string = "b";
let c: number = 2;

interface Thing {
  a: boolean;
  b: string;
  c: number;
}

const fn2 = (thing: Thing) => {
  thing = {
    a: !a,
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
  continue;
}

for (let e in [1, 2, null]) {
  continue;
}

interface Barking {
  bark: () => void;
}

export class Dog implements Barking {
  public big_failure = () => {
    try {
      throw new Error('failure');
    } catch (error) {
      return `failure succeeded: ${error}`;
    } finally {
      console.log(true);
    }
  };
  protected name = "spot";
  private mode: BarkMode;
  readonly fur_color: string = 'green';
  favorite_number: number;

  constructor(color: string) {
    this.fur_color = color;
  }

  get furColor() {
    return this.fur_color;
  }
  set favouriteColor(n: number) {
    this.favorite_number = n;
  }

  bark = () => {
    switch (this.mode) {
      case BarkMode.ELECTRIC:
        console.log("bzzzzt");
        break;
      case BarkMode.NORMAL:
        console.log("woof");
      default:
        return false;
    }
    console.log("woof");
  };
}

class BetterDog extends Dog {
  static better: true

  constructor(color: string) {
    super(color);
  }

  static isBetter() {
    return this.better;
  }
}

const d = new Dog('red');
d.bark();

const ad = new AnotherDog('red');

const truth = (() => false)();
do {handleThe(truth)} while (true === truth);

function handleThe(truth) {
  const it = (typeof truth);
  if (it === 'number') {
    return true;
  } else {
    return false;
  }
}

type ThatLittleExtra<T, T2> = {extra: T2} & T;

type Likeable = {likeable: true};
type MoreLikeAble = Likeable & ThatLittleExtra<{eight: 8}, null>

const ml: MoreLikeAble = {
  likeable: true,
  extra: null,
  eight: 8,
}

function* func1() {
  debugger;
  yield 42;
}

const removeIt = (obj: {it: any}) => {
  if (!(obj instanceof Object)) {
    return;
  }
  delete obj.it;
  return obj;
}

const landmark: symbol = Symbol('Big Mountain To The West');

function f(x, o) {
  //@ts-ignore
  with (o) {
    console.log(x);
  }
}

//@ts-ignore
module.exports = {one: 1}
