// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //your code goes here
    var sOutput = "";
    if(obj instanceof Object){
  	if(obj.constructor === Array){
  		for (var nId = 0; nId < obj.length; sOutput += stringifyJSON(obj[nId]) + ",", nId++);
  			return "[" + sOutput.substr(0, sOutput.length - 1) + "]";
  	}
  	if(obj.toString	!== Object.prototype.toString){
  		return "\"" + obj.toString().replace(/"/g, "\\$&") + "\"";
  	}
  	for (var sProp in obj){
      if(obj[sProp] instanceof Function || undefined){
        return "{}";
      }
  		sOutput += "\"" + sProp.replace(/"/g, "\\$&") + "\":" + stringifyJSON(obj[sProp]) + ",";
  	}
  	return "{" + sOutput.substr(0, sOutput.length -1) + "}";
  }
  return typeof obj === "string" ? "\"" + obj.replace(/"/g, "\\$&") + "\"" : String(obj);
};
