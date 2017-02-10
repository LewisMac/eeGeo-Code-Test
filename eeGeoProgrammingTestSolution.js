// to do in n^2 loop through each then loop and compare pythagorean distances of each.
// to do in less, calculate centroid and then loop over and compare Pythagorean distance?

var dataCoords = {
  place0: [1312573, 8418602],
  place1: [4038083, 9103890],
  place2: [8899296, 9013490],
  place3: [988534, 8667395],
  place4: [2810125, 1002710],
  place5: [4023834, 4748684],
  place6: [8637793, 2528606],
}

var calculateCentroid = function(dataSet){
  var noOfObjects = Object.keys(dataSet).length;
  var xValue = 0;
  var yValue = 0;
  var coordValues = [];
  var largest = null;

  var pythagorean = function(sideA, sideB){
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
  }

  for(place in dataSet){
    var centerX = (xValue += dataSet[place][0])/noOfObjects;
    var centerY = (yValue += dataSet[place][1])/noOfObjects;
    coordValues.push(dataSet[place]);

  }

  for(place in dataSet){
    if (largest === null){
      largest = dataSet[place];
    } else if (pythagorean(largest[0] - centerX, largest[1] - centerY) < pythagorean(dataSet[place][0] - centerX, dataSet[place][1] - centerY)){
      largest = dataSet[place];
    }
  }

 var getKeyByValue = function(object, value) {
   return Object.keys(object).find(key => object[key] === value);
 }

 console.log(getKeyByValue(dataCoords, largest))
}

calculateCentroid(dataCoords);