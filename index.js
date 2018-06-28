const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
 function myFunction(){
    const Cities = gotCitiesCSV.split(",").join(";");
    console.log(gotCitiesCSV)   
    let element = document.createElement("li");
    let t = document.createTextNode ( Cities);
    element.appendChild(t);
    document.getElementById("got").appendChild(element);
}
myFunction()

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
document.createElement("newElement2")


function myFunction2(){
    const lotr = lotrCitiesArray.join(";");
    console.log(lotrCitiesArray.join(";"));
    let element = document.createElement("li");
    let t = document.createTextNode(lotr);
    element.appendChild(t);
    document.getElementById("got").appendChild(element);
    lotrCitiesArray.splice (2,1)
    console.log(lotrCitiesArray)
}
document.write(lotrCitiesArray)
myFunction2()


const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"

console.log(bestThing)


function myFunction3() {
    let element = document.createElement("li");
    let t = document.createTextNode ( bestThing);
    element.appendChild(t);
    document.getElementById("got").appendChild(element);
}
myFunction3()

    let k7 = bestThing.slice(23,38); 
    document.write(JSON.stringify(k7)+"<br />");
      
    let k8 = bestThing.indexOf("only",30)
    document.write(JSON.stringify(k8)+"<br />");

    var k9 = gotCitiesCSV.split(',');
       var k90 = [];
       for (var i = 0; i < 7; i++) {
           var k90= k9[i];
           document.write(JSON.stringify(k9)+"<br />");
           if (k9.includes("aa") || k90.includes("ee") || k90.includes("ii") || k90.includes(
                   "oo") || k90.includes("uu")) {
               k9.push(k90);
           }
       }

       var k10 = lotrCitiesArray;
       k10.sort(function(a,b){
           return a.length-b.length;
       }
       );
       console.log(k10);