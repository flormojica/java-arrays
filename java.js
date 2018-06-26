const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
console.log(gotCitiesCSV);

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"
console.log(bestThing);

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
console.log(lotrCitiesArray.join(","))
lotrCitiesArray.splice(0,3);
console.log(lotrCitiesArray);
lotrCitiesArray.splice(2,1);
console.log(lotrCitiesArray);
bestThing.slice(23,30);
console.log(bestThing)


const vowels = ["aa","ee","ii","oo","uu"];
const cities = gotCitiesCSV.split (",");
console.log(gotCitiesCSV.join(";"))
