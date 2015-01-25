// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node){
  // your code here
  var classes = className.split(" ");
  var results = [];

  var traverse = function (nodes){
  	if(nodes !== undefined){
  		var classList = nodes.classList;
  		if (nodes.length){
  			for (var i = 0, length = nodes.length; i<length; i++){
  				if(nodes[i].classList !== undefined){
  					traverse(nodes[i]);
  				}
  			}
  		}
  		else {
  			if(classList){
  				if(classList.contains(className)){
  					results.push(nodes);
  				}
  				traverse(nodes.childNodes);
  			}
  		}
  	}

  };
  traverse(document.body);
  return results;
};