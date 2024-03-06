//opcional chaining

export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Sergio",
};

const passenger2: Passenger = {
  name: "Julina",
  children: ["Bruno", "Sam"],
};

const printChildren = (passenger: Passenger): void => {
  const howManyChildren = passenger.children?.length || 0;

  console.log(howManyChildren);
};

printChildren(passenger2);
printChildren(passenger1);
