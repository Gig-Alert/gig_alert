const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Bands collection and inserts the bands below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bandslist");

const bandSeed = [
  {
    bands: "Foo Fighters",
    email: "Foo@foo.com",
    date: "2019-02-10",
    type: "Guitar",
    county: "Cuyahoga"
  },
  {
    bands: "Rise Against",
    email: "Rise@against.com",
    date: "2019-02-25",
    type: "Bass",
    county: "Cuyahoga"
  },
  {
    bands: "Arrows",
    email: "Arrows@gmail.com",
    date: "2019-04-03",
    type: "Guitar",
    county: "Cuyahoga"
  },
  {
    bands: "Mushroomhead",
    email: "Bwomp@gmail.com",
    date: "2019-03-21",
    type: "Drummer",
    county: "Cuyahoga"
  },
  {
    bands: "The Beatles",
    email: "Letitbe@gmail.com",
    date: "2019-05-06",
    type: "Bass",
    county: "Lake"
  },
  {
    bands: "The Roots",
    email: "Roots@yahoo.com",
    date: "2019-06-15",
    type: "Drummer",
    county: "Hamilton"
  },
  {
    bands: "MxPx",
    email: "MxPx@yahoo.com",
    date: "2019-04-27",
    type: "Vocals",
    county: "Lake"
  },
  {
    bands: "PJ Mask",
    email: "Mask@gmail.com",
    date: "2019-03-05",
    type: "Guitar",
    county: "Lake"
  },
  {
    bands: "Paw Patrol",
    email: "Paw@yahoo.com",
    date: "2019-05-20",
    type: "Bass",
    county: "Hamilton"
  },
  {
    bands: "Fixer Upper",
    email: "Fixer@yahoo.com",
    date: "2019-04-01",
    type: "Drummer",
    county: "Hamilton"
  },
  {
    bands: "Property",
    email: "Property@gmail.com",
    date: "2019-07-25",
    type: "Guitar",
    county: "Hamilton"
  },
  {
    bands: "Brothers",
    email: "Brothers@gmail.com",
    date: "2019-05-02",
    type: "Bass",
    county: "Summit"
  },
  {
    bands: "Chevelle",
    email: "Thered@yahoo.com",
    date: "2019-05-19",
    type: "Drummer",
    county: "Summit"
  },
  {
    bands: "Halestorm",
    email: "Storm@gmail.com",
    date: "2019-03-05",
    type: "Guitar",
    county: "Summit"
  },
  {
    bands: "The Cult",
    email: "Cult@gmail.com",
    date: "2019-06-20",
    type: "Bass",
    county: "Summit"
  },
  {
    bands: "The Hives",
    email: "Hive@yahoo.com",
    date: "2019-07-20",
    type: "Guitar",
    county: "Franklin"
  },
  {
    bands: "The Distillers",
    email: "Distillers@gmail.com",
    date: "2019-04-28",
    type: "Drummer",
    county: "Franklin"
  },
  {
    bands: "Gojira",
    email: "Gojira@hotmail.com",
    date: "2019-04-21",
    type: "Bass",
    county: "Franklin"
  },
  {
    bands: "The Struts",
    email: "Struts@yahoo.com",
    date: "2019-06-04",
    type: "Drummer",
    county: "Lake"
  },
  {
    bands: "Refused",
    email: "Refused@hotmail.com",
    date: "2019-07-26",
    type: "Guitar",
    county: "Geauga"
  },
  {
    bands: "Killswitch Engage",
    email: "Engage@gmail.com",
    date: "2019-06-20",
    type: "Drummer",
    county: "Geauga"
  },
  {
    bands: "Parkway Drive",
    email: "Parkway@yahoo.com",
    date: "2019-08-20",
    type: "Guitar",
    county: "Geauga"
  },
  {
    bands: "System Of A Down",
    email: "System@gmail.com",
    date: "2019-06-05",
    type: "Drummer",
    county: "Geauga"
  },
  {
    bands: "Architects",
    email: "Architects@gmail.com",
    date: "2019-07-18",
    type: "Guitar",
    county: "Medina"
  },
  {
    bands: "Avatar",
    email: "Avatar@yahoo.com",
    date: "2019-04-16",
    type: "Bass",
    county: "Medina"
  },
  {
    bands: "Bad Wolves",
    email: "Wolves@yahoo.com",
    date: "2019-05-31",
    type: "Guitar",
    county: "Medina"
  },
  {
    bands: "Badflower",
    email: "Badflower@gmail.com",
    date: "2019-06-08",
    type: "Vocals",
    county: "Medina"
  }
];
db.Bands.remove({})
  .then(() => db.Bands.collection.insertMany(bandSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
