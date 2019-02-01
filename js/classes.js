class Boat {

  constructor(data) {
    this._id = data.id;
    this._tour_id = data.tour_id;
    this._number = data.number;
  }

}

class Tour {

  constructor(data) {
    this._id = data.id;
    this._time_depart = data.time_depart;
    this._time_return = data.time_return;
  }

  total_time() {
    return this._time_return - this._time_depart;
  }

}

class Price {

  constructor(data) {
    this._id = data.id;
    this._price = data.price;
    this._weather_condition = data.weather_condition;
    this._crowd_condition = data.crowd_condition;
  }

}

module.exports = {
    Boat,
    Tour,
    Price
};
