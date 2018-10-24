function compose (...functions) {
  return function(data){
  	return functions.reduceRight(function(value, func){
  	  return func(value);
  	}, data);
  }  
}

export default compose;