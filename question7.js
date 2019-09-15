function year_alive(tb){
	var tab = [];
	// creating a array with years of birth
	for(var i = 0; i < tb.length; i++){
		if(isItemInArray(tab, tb[i].naissance) == -1 ){
			tab.push([tb[i].naissance, 0]);
		}
	}
	// incrementing
	for(var i = 0; i < tb.length; i++){
		for(var j = 0; j < tab.length; j++){
			if(tb[i].mort == undefined){
				if( tb[i].naissance == tab[j][0]){
					tab[j][1] = tab[j][1] + 1;
					break;
				}
			}		
			if(parseInt(tb[i].naissance) <= parseInt(tab[j][0])){
				if(tb[i].mort > tab[j][0]){
					tab[j][1] = tab[j][1] + 1;
				}
			}
		}
	}
	// sort
	if(tab.length > 0){
		var compare = 1;
		while( compare == 1 ){
			compare = 0;
			for(var j = 1; j < tab.length; j++){
				if(tab[j][1] > tab[j-1][1]){
					var tmp = tab[j];
					tab[j] = tab[j-1];
					tab[j-1] = tmp;
					compare = 1;
				}
				
			}
		}			
	}		
	
	return(tab[0][0]);
}

function isItemInArray(array, item) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][0] == item) {
            return 1;   
        }
    }
    return -1;
}

// var tb = [
	// {naissance : 1920, mort : 1944},
	// {naissance : 1965, mort : undefined},
	// {naissance : 1933, mort : 1944},
	// {naissance : 1921, mort : 2000},
	// {naissance : 1955, mort : undefined},
	// {naissance : 1965, mort : undefined}
// ];

// var tb2 = [
	// {naissance : 1991, mort : undefined},
	// {naissance : 1991, mort : 1993},
	// {naissance : 1993, mort : undefined}
// ];

// var tb3 = [
	// {naissance : 1920, mort : 1944},
	// {naissance : 1933, mort : 1944}

// ];

// var tb4 = [
	// {naissance : 1920, mort : 1944},
	// {naissance : 1933, mort : 1944},
	// {naissance : 1921, mort : 2000},
	// {naissance : 1965, mort : undefined},
	// {naissance : 1955, mort : undefined},
	// {naissance : 1965, mort : undefined}
// ];

// year_alive(tb4);