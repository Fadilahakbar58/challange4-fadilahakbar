class Car extends Component {
  static list = [];

  static init(cars) {
    this.list = cars.map((car) => new this(car));
  }

  constructor(props) {
    super(props);
    let { id, plate, manufacture, model, image, rentPerDay, capacity, description, transmission, available, type, year, options, specs, availableAt } = props;
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }
  render() {
    return `
          <div class="col-lg-4" style="margin-bottom:2%; margin-top: 3%">
          <div class="card-mobil">
              <img class="img-fluid img-mobil" src="${this.image}" alt="" style="width: 20rem; height: 20rem">
              <div class="keterangan-mobil">
                  <p class="tipe">${this.manufacture}/${this.model}</p>
                  <h3 class="title">Rp ${this.rentPerDay}/hari</h3>
                  <p class="keterangan">${this.description}</p>
              </div>
              <div class="spesifikasi-mobil row">
                  <div class="spesifikasi-detail d-flex justify-content-start">
                      <img class="spesifikasi-icon" src="./images/fi_users.png" alt="" style="width: 40px; height: 40px">
                      <p class="spes-text"  style="margin-top: 13px" >${this.capacity}</p>
                  </div>
                  <div class="spesifikasi-detail d-flex justify-content-start">
                      <img class="spesifikasi-icon" src="./images/fi_settings.png" alt="" style="width: 40px; height: 40px">
                      <p class="spes-text" style="margin-top: 13px">${this.transmission}</p>
                  </div>
                  <div class="spesifikasi-detail d-flex justify-content-start">
                      <img class="spesifikasi-icon" src="./images/fi_calendar.png" alt="" style="width: 40px; height: 40px">
                      <p class="spes-text" style="margin-top: 13px">${this.year}</p>
                  </div>
              </div>
              <div class="d-grid mt-2">
                  <a href="#" class="nav-item-btn btn btn-block text-white" >Pilih Mobil</a>
              </div>
          </div>
      </div>

    `;
  }
}

 

