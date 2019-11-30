const connection = require(__dirname + "/connection.js");

const Character = require(__dirname + "/../models/Character.js");

const populate = () => {
  // Load data from data.json, create a new document for each character, insert into characters collection
  Character.insertMany(
    require(__dirname + "/data.json").characters.map(ch => new Character(ch))
  )
    .then(() => {
      console.log("Database populated!");
      process.exit();
    })
    .catch(error => console.log(error));
};

// Check if connection is open
connection.once("open", error => {
  if (error) {
    console.log(error);
  } else {
    // get list of collections
    connection.db
      .listCollections()
      .toArray()
      .then(collections => {
        // Check for characters collections and drop if exists
        if (collections.map(col => col.name).includes("characters")) {
          Character.collection.drop();
        }
        // Populate database from data.json
        populate();
      })
      .catch(error => console.log(error));
  }
});
