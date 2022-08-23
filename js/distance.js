//lat1,lon1 = Coordinates sample for Manila (Fort Santiago)
//lat2,lon2 = Coordinates sample for Palawan
function CalcDistanceBetween(lat1, lon1, lat2, lon2) {
  //Radius of the earth in:  1.609344 miles,  6371 km  | var R = (6371 / 1.609344);
  var R = 6371; // Radius of earth in Miles 
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1); 
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  console.log(d);
}

function toRad(Value) {
  /** Converts numeric degrees to radians */
  return Value * Math.PI / 180;
}

CalcDistanceBetween(14.59440662328432, 120.97040364542354,9.44510240959885, 118.39514690416448);
