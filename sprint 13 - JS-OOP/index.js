class Car {
  constructor(brand, model, color, mileage) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.mileage = mileage;
  }
  getProperties() {
    return `Car [brand = ${this.brand}, model = ${this.model}, color = ${this.color}, mileage = ${this.mileage}]`;
  }
}

const main = () => {
  const firstCar = new Car("Volvo", "XC-60", "Black", 234000);
  const secondCar = new Car("Mazda", "CX-5", "Green", 111000);
  const thirtCar = new Car("Dacia", "BIGGSTER", "Blue", 20000);

  console.log(firstCar.getProperties());
  console.log(secondCar.getProperties());
  console.log(thirtCar.getProperties());
};
main();

class racingCar extends Car {
  constructor(brand, model, color, mileage) {
    super(brand, model, color, mileage);
  }
  takesPartInTheChampionship(championshipPosition) {
    if (championshipPosition > 0) {
      return `Won ${championshipPosition}th place.`;
    } else {
      return `Didn't win any prizes.`;
    }
  }
}

const championship = () => {
  const car1 = new racingCar("Mitsubihi", "Outlander", "Black", 209000);
  const car2 = new racingCar("Toyota", "Turbo", "Red", 100000);

  console.log(
    `The car => ${car1.getProperties()}, ${car1.takesPartInTheChampionship(2)}`
  );
  console.log(
    `The car => ${car2.getProperties()}, ${car2.takesPartInTheChampionship(-1)}`
  );
};
championship();
