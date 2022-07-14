const world = [
    {
      country:"US",
      languages: ["en"]
    },
    {
      country:"BE",
      languages: ["nl","fr","de"]
    },
    {
      country:"NL",
      languages: ["nl"]
    },
    {
      country:"DE",
      languages: ["de"]
    },
    {
      country:"ES",
      languages: ["es"]
    }
  ]

  function countryCuriosities() {
    return numberOfCountries() + '\n' 
      + countryMostLanguagesWithGerman() + '\n' 
      + countAllOfficialLanguages() + '\n' 
      + largestNumberOfLanguages() + '\n' 
      + mostCommonLanguage();
  }
  
  function numberOfCountries() {
    return (
      "Number of countries in the world: " +
      world.map(({ country }) => country).length
    );
  }
  
  function countryMostLanguagesWithGerman() {
    const countries = world.filter(({ languages }) =>
      languages.find((language) => language === "de")
    );
  
    let temp = countries[0] ?? { country: "", languages: [""] };
    countries.forEach((country) => {
      if (temp?.languages?.length < country.languages.length) {
        temp = country;
      }
    });
  
    return (
      "Country with the most official languages, where they officially speak German: " +
      temp.country
    );
  }
  
  function countAllOfficialLanguages() {
    const languages = world.map(({ languages }) => languages);
    var mergedLanguages = [].concat.apply([], languages);
    return new Set(mergedLanguages).size + " Official languages";
  }
  
  function largestNumberOfLanguages() {
    let temp = world[0] ?? { country: "", languages: [""] };
    world.forEach((country) => {
      if (temp?.languages?.length < country.languages.length) {
        temp = country;
      }
    });
    return (
      "Country with the highest number of official languages: " + temp.country
    );
  }
  
  function mostCommonLanguage() {
    const languages = world.map(({ languages }) => languages);
    var mergedLanguages = [].concat.apply([], languages);
    var counts = {};
    var compare = 0;
  
    mergedLanguages.forEach((language, index) => {
      if (counts[language] === undefined) {
        counts[language] = 1;
      } else {
        counts[language] = counts[language] + 1;
      }
      if (counts[language] > compare) {
        compare = counts[language];
      }    
    });
  
    const maxRepetition = Math.max.apply(null, [...Object.values(counts)]);
    const mostFrequent = Object.keys(counts).filter(key => counts[key] === maxRepetition);
  
    return "Most common official language(s) of all countries: " + mostFrequent;
  }
  
  console.log(countryCuriosities());
  
