function AddCountry({ name, moeda,idioma, numberOfHabitants, bandeira, capital }) {
  return {
    name: { name },
    moeda: {moeda},
    idioma: { idioma },
    numberOfHabitants: { numberOfHabitants },
    bandeira: { bandeira },
    capital: { capital },
  };
}

export default AddCountry;
