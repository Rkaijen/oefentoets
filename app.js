const { Boat, Tour, Price } = require("./js/classes");
const { boat_arr, tour_arr, price_arr } = require("./js/data");

let arg = process.argv;

switch(arg[2]) {
  //start a tour
  case "start":
    console.log("start")
    if (arg[3]) {
      let boatnumber = parseInt(arg[3]);
      let current_timestamp = new Date();

      console.log(current_timestamp);

      let tour = new Tour( tour_arr.length+1, current_timestamp, undefined ); //return time is undefined (not known yet)
      tour_arr.push(tour);

      let boat = new Boat( boat_arr.length+1, tour._id, boatnumber );
      boat_arr.push(boat);

      //Ask for if info shows up, data is stored
      console.log(tour_arr[(tour_arr.length)-1]);
      console.log(boat_arr[(boat_arr.length)-1]);
    } else {
      console.log("Please add boatnumber after start.")
    }

    break; //end "start"
};
