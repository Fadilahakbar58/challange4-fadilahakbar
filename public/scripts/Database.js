class Database {
  static async loadCars() {
    let cars = await fetch("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json").then((response) => response.json());
    return cars;
  }
  static async loadCarsFilter({ type, passenger, date, time }) {
    //   Get All The Cars
    let cars = await this.loadCars();
    let filterCars = cars
      .filter((car) => car.available === true) // Filter the available attribute
      .filter((car) => {
        // Filter the type
        if (type === "Keyless Entry") {
          if (car.options.includes(type)) {
            return car;
          }
        } else {
          return !car.options.includes("Keyless Entry");
        }
      })
      .filter((car) => {
        // Filter the date
        let dateCar = new Date(car.availableAt);
        if (dateCar >= date) {
          return car;
        }
      })
      .filter((car) => {
        // Filter the time
        let dateCar = new Date(car.availableAt).getHours();
        if (dateCar >= Number(time)) {
          return car;
        }
      })
      .filter((car) => car.capacity >= passenger); // Filter the capacity
    return filterCars;
  }
}
