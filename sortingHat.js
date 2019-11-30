// Takes the name of a student and returns a promise that resolves with the name of the house they belong to. It takes the sorting hat 3 seconds to make a decision. You can change the decision time on line 24.
const sort = name => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      name = name.toLowerCase();

      let code = 0;

      for (let i = 0; i < name.length; i++) {
        code += name.charCodeAt(i);
      }

      let house = "Slytherin";

      if (code % 2 == 0 && code % 3 != 0) {
        house = "Griffindor";
      } else if (code % 3 == 0 && code % 2 != 0) {
        house = "Hufflepuff";
      } else if (code % 5 == 0 && code % 2 != 0 && code % 3 != 0) {
        house = "Ravenclaw";
      }

      resolve(house);
    }, 3000);
  });
};

module.exports = sort;
