function closeToZero(ts){
	if(ts.length == 0)
		return 0;
	var tmp = parseFloat(ts[0]);
	for(var i = 0; i < ts.length; i++){
		var tmp_ts = parseFloat(ts[i]);
		if (Math.abs(tmp) > Math.abs(tmp_ts))
			tmp = tmp_ts;
		else if (Math.abs(tmp) == Math.abs(tmp_ts) && tmp < 0)
			tmp = tmp_ts;
	}
	return tmp;
}
