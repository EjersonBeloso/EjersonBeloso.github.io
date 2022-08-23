//lat1,lon1 = Coordinates sample for Manila (Fort Santiago)
//lat2,lon2 = Coordinates sample for Palawan
//Radius of the earth in:  1.609344 miles,  6371 km  | var R = (6371 / 1.609344)
// CalcDistanceBetween(14.59440662328432, 120.97040364542354,9.44510240959885, 118.39514690416448);

function toRad(Value) {
  /** Converts numeric degrees to radians */
  return Value * Math.PI / 180;
}

function manilaToDonsol() {
  var lat1 = 14.59440662328432; // latitute of Manila
  var lon1 = 120.97040364542354; // longitude  of Manila
  var lat2 = 12.993676494098876;
  var lon2 = 123.55059090545332;
  var R = 6371; // Radius of earth in km  
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1); 
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  document.getElementById("#carbon").innerHTML = " "+ d.toString() +" "+"KM";
}
function manilaToElNido() {
  var lat1 = 14.59440662328432; // latitute of Manila
  var lon1 = 120.97040364542354; // longitude  of Manila
  var lat2 = 11.190562626314788;
  var lon2 = 119.5070108715131;
  var R = 6371; // Radius of earth in km  
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1); 
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  document.getElementById("").innerHTML = " "+ d.toString() +" "+"KM";
}
function manilaToMountApo() {
  var lat1 = 14.59440662328432; // latitute of Manila
  var lon1 = 120.97040364542354; // longitude  of Manila
  var lat2 = 6.988362947172285;
  var lon2 = 125.27070909753806;
  var R = 6371; // Radius of earth in km  
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1); 
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  document.getElementById("").innerHTML = " "+ d.toString() +" "+"KM";
}
function manilaToSiargao() {
  var lat1 = 14.59440662328432; // latitute of Manila
  var lon1 = 120.97040364542354; // longitude  of Manila
  var lat2 = 9.851121363066733;
  var lon2 = 126.04549222992664;
  var R = 6371; // Radius of earth in km  
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1); 
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  document.getElementById("").innerHTML = " "+ d.toString() +" "+"KM";
}
function manilaToBohol() {
  var lat1 = 14.59440662328432; // latitute of Manila
  var lon1 = 120.97040364542354; // longitude  of Manila
  var lat2 = 9.830597438567404;
  var lon2 = 124.13982430650643;
  var R = 6371; // Radius of earth in km  
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1); 
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  document.getElementById("").innerHTML = " "+ d.toString() +" "+"KM";
}
function manilaToBanaue() {
  var lat1 = 14.59440662328432; // latitute of Manila
  var lon1 = 120.97040364542354; // longitude  of Manila
  var lat2 = 16.93474413552408;
  var lon2 = 121.13536907166042;
  var R = 6371; // Radius of earth in km  
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1); 
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  document.getElementById("").innerHTML = " "+ d.toString() +" "+"KM";
}
function manilaToApoIsland() {
  var lat1 = 14.59440662328432; // latitute of Manila
  var lon1 = 120.97040364542354; // longitude  of Manila
  var lat2 = 9.079669533109127;
  var lon2 = 123.27136193753819;
  var R = 6371; // Radius of earth in km  
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1); 
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  document.getElementById("").innerHTML = " "+ d.toString() +" "+"KM";
}
function manilaToViganCity() {
  var lat1 = 14.59440662328432; // latitute of Manila
  var lon1 = 120.97040364542354; // longitude  of Manila
  var lat2 = 17.570423167658102;
  var lon2 = 120.38712238253623;
  var R = 6371; // Radius of earth in km  
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1); 
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  document.getElementById("").innerHTML = " "+ d.toString() +" "+"KM";
}
function manilaToKissesIslets() {
  var lat1 = 14.59440662328432; // latitute of Manila
  var lon1 = 120.97040364542354; // longitude  of Manila
  var lat2 = 10.223634290736493;
  var lon2 = 125.4991762342459;
  var R = 6371; // Radius of earth in km  
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1); 
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  document.getElementById("").innerHTML = " "+ d.toString() +" "+"KM";
}
function manilaToCarbonMarket() {
  var lat1 = 14.59440662328432; // latitute of Manila
  var lon1 = 120.97040364542354; // longitude  of Manila
  var lat2 = 10.291618348475014;
  var lon2 = 123.89910953996657;
  var R = 6371; // Radius of earth in km  
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1); 
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  document.getElementById("").innerHTML = " "+ d.toString() +" "+"KM";
}
function manilaToTinuyAnFalls() {
  var lat1 = 14.59440662328432; // latitute of Manila
  var lon1 = 120.97040364542354; // longitude  of Manila
  var lat2 = 8.171870782778058;
  var lon2 = 126.22819142253995;
  var R = 6371; // Radius of earth in km  
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1); 
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  document.getElementById("").innerHTML = " "+ d.toString() +" "+"KM";
}
function manilaToMalapasciaIsland() {
  var lat1 = 14.59440662328432; // latitute of Manila
  var lon1 = 120.97040364542354; // longitude  of Manila
  var lat2 = 11.345391211561033;
  var lon2 = 124.11317515229901;
  var R = 6371; // Radius of earth in km  
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1); 
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  document.getElementById("").innerHTML = " "+ d.toString() +" "+"KM";
}
function manilaToMakatiCity() {
  var lat1 = 14.59440662328432; // latitute of Manila
  var lon1 = 120.97040364542354; // longitude  of Manila
  var lat2 = 14.554675125798163;
  var lon2 = 121.02443498030274;
  var R = 6371; // Radius of earth in km  
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1); 
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  document.getElementById("").innerHTML = " "+ d.toString() +" "+"KM";
}
function manilaToCantabonCave() {
  var lat1 = 14.59440662328432; // latitute of Manila
  var lon1 = 120.97040364542354; // longitude  of Manila
  var lat2 = 9.185817184665002;
  var lon2 = 123.5611617976338;
  var R = 6371; // Radius of earth in km  
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1); 
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  document.getElementById("").innerHTML = " "+ d.toString() +" "+"KM";
}
function manilaToBukidnon() {
  var lat1 = 14.59440662328432; // latitute of Manila
  var lon1 = 120.97040364542354; // longitude  of Manila
  var lat2 = 8.054265942072336;
  var lon2 = 124.92271460428307;
  var R = 6371; // Radius of earth in km  
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1); 
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  document.getElementById("").innerHTML = " "+ d.toString() +" "+"KM";
}
function manilaToBatanes() {
  var lat1 = 14.59440662328432; // latitute of Manila
  var lon1 = 120.97040364542354; // longitude  of Manila
  var lat2 = 20.44676524715544;
  var lon2 = 121.97109872353799;
  var R = 6371; // Radius of earth in km  
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1); 
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  document.getElementById("").innerHTML = " "+ d.toString() +" "+"KM";
}
function manilaToTalipanan() {
  var lat1 = 14.59440662328432; // latitute of Manila
  var lon1 = 120.97040364542354; // longitude  of Manila
  var lat2 = 13.49884091324897;
  var lon2 = 120.89036822690709;
  var R = 6371; // Radius of earth in km  
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1); 
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  document.getElementById("").innerHTML = " "+ d.toString() +" "+"KM";
}
function manilaToDahicanBeach() {
  var lat1 = 14.59440662328432; // latitute of Manila
  var lon1 = 120.97040364542354; // longitude  of Manila
  var lat2 = 6.929636231147091;
  var lon2 = 126.280708564184;
  var R = 6371; // Radius of earth in km  
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1); 
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  document.getElementById("").innerHTML = " "+ d.toString() +" "+"KM";
}
function manilaToEnchantedRiver() {
  var lat1 = 14.59440662328432; // latitute of Manila
  var lon1 = 120.97040364542354; // longitude  of Manila
  var lat2 = 8.459636361215297;
  var lon2 = 126.35441558994447;
  var R = 6371; // Radius of earth in km  
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1); 
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  document.getElementById("").innerHTML = " "+ d.toString() +" "+"KM";
}
function manilaToBoracay() {
  var lat1 = 14.59440662328432; // latitute of Manila
  var lon1 = 120.97040364542354; // longitude  of Manila
  var lat2 = 11.967099518198395;
  var lon2 = 121.92491148052889;
  var R = 6371; // Radius of earth in km  
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1); 
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  document.getElementById("").innerHTML = " "+ d.toString() +" "+"KM";
}

