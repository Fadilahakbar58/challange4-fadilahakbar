class App {
  constructor() {
    this.typeDriver = document.querySelector("#typeDriver");
    this.date = document.querySelector("#date");
    this.time = document.querySelector("#time");
    this.passenger = document.querySelector("#passenger");
    this.btn = document.querySelector(".submit");
    this.carsContainer = document.querySelector(".insert-card-cars");
    this.filter = document.querySelector("#pencarianmu");
    this.navBtn = document.querySelector(".navbar-toggler");
    this.section = document.querySelector(".section-search");
  }

  async init() {
    if (this.btn !== null) {
      this.btn.onclick = await this.click;
      this.navBtn.onclick = this.navToggler;
    } else {
      this.navBtn.onclick = this.navToggler;
    }
  }

  async loadFilter(filter) {
    const cars = await Database.loadCarsFilter(filter);
    Car.init(cars);
  }

  click = async () => {
    let type = this.typeDriver.options[this.typeDriver.selectedIndex].value;
    let passenger = this.passenger.value;
    let date = this.date.value;
    let time = this.time.value;
    if (type.length !== 0 || date.length !== 0 || time.length !== 0) {
      if (passenger.length === 0) {
        passenger = 0;
      }
      date = new Date(this.date.value);
      await this.loadFilter({ type, passenger, date, time });
    }
    this.cardRender();
    this.addFilterText();
  };

  cardRender() {
    let card = "";
    if (Car.list.length !== 0) {
      Car.list.forEach((car) => {
        card += car.render();
      });
      this.carsContainer.innerHTML = card;
    } else {
      card = `<h1 class='text-center display-4' style="font-size: 35px; margin-top: 25px;">Mobil tidak ditemukan</h1>`;
      this.carsContainer.innerHTML = card;
    }
  }

  addFilterText() {
    this.section.style.height = "142px"
    this.filter.style.display = "block";
    this.btn.innerHTML = "Edit";
  }

  navToggler() {
    const body = document.querySelector(".blocking");
    body.style.display = "block";

    body.addEventListener("click", function () {
      this.style.display = "none";
    });
    const closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", function () {
      body.style.display = "none";
    });
  }
}
