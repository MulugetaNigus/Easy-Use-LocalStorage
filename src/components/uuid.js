const baseID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const uuid = () => {
  let ID = [];
  for (let i = 0; i < baseID.length; i++) {
    const RandomEngine = Math.floor(Math.random() * baseID.length);
    ID.push(baseID[RandomEngine]);
  }
  return ID.join("");
};

export default uuid;
