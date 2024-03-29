function addNumbers(a: number, b: number): number {
  return a + b;
}

const addNumberArrow = (a: number, b: number): number => {
  return a + b;
};

function multiply(first: number, second?: number, base: number = 2) {
  return first * base;
}

// const result = addNumbers(1, 2);
// const result2 = addNumberArrow(1, 2);
// const result3 = multiply(5);
// console.log({ result, result2, result3 });

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
};

const strider: Character = {
  name: "Strider",
  hp: 50,
  showHp() {
    console.log(`Puntos de vida ${this.hp}`);
  },
};

healCharacter(strider, 10);
healCharacter(strider, 50);

strider.showHp();

export {};
