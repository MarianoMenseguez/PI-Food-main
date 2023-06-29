const axios = require("axios");
const { character } = require("../db");
const getApiData = async () => {
  try {
    let allCharacters = [];
    for (let i = 1; i < 6; i++) {
      let apiData = await axios(
        `https://rickandmortyapi.com/api/character?page${i}`
      );
      const pageCharacters = apiData.data.results.map((char) => {
        return {
          id: char.id,
          name: char.name,
          image: char.image,
          species: char.species,
          status: char.status,
          gender: char.gender,
          origin: char.origin,
        };
      });
      allCharacters = [...allCharacters, ...pageCharacters];
    }
    return allCharacters;
  } catch (error) {
    return { msg: error.message };
  }
};

const saveApiData = async () => {
  try {
    const allCharacters = await getApiData();
    await character.blukCreate(allCharacters);
    return allCharacters;
  } catch (error) {
    return { msg: error.message };
  }
};
module.exports = saveApiData;
