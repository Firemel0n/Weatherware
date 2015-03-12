var data = require("../hourly.json");
var day_data = require("../hourly.json");
var hourly_data = require("../hourly.json");
var config_data = require("../config.json");

exports.view = function(req, res){
	
	var day = req.params.day;
	var temp = config_data.temp;

	console.log(temp);
	data.day = day;
	data.temp = temp;
	if(day == "Thursday")
	{
		day_data.day = "Thursday";
		hourly_data.temp7 = 69;
		hourly_data.temp8 = 70;
		hourly_data.temp9 = 72;
		hourly_data.temp10 = 78;
		hourly_data.temp11 = 80;
		hourly_data.temp12 = 82;
		hourly_data.temp13 = 86;
		hourly_data.temp14 = 86;
		hourly_data.temp15 = 85;
		hourly_data.temp16 = 83;
		hourly_data.temp17 = 80;
		hourly_data.temp18 = 79;
		hourly_data.temp19 = 79;
		hourly_data.temp20 = 78;
	}

	else if(day == "Friday")
	{
		day_data.day = "Friday";
		hourly_data.temp7 = 70;
		hourly_data.temp8 = 70;
		hourly_data.temp9 = 72;
		hourly_data.temp10 = 78;
		hourly_data.temp11 = 80;
		hourly_data.temp12 = 82;
		hourly_data.temp13 = 89;
		hourly_data.temp14 = 91;
		hourly_data.temp15 = 92;
		hourly_data.temp16 = 95;
		hourly_data.temp17 = 87;
		hourly_data.temp18 = 86;
		hourly_data.temp19 = 88;
		hourly_data.temp20 = 78;
	}
	else if(day == "Saturday")
	{
		day_data.day = "Saturday";
		hourly_data.temp7 = 62;
		hourly_data.temp8 = 64;
		hourly_data.temp9 = 68;
		hourly_data.temp10 = 70;
		hourly_data.temp11 = 72;
		hourly_data.temp12 = 74;
		hourly_data.temp13 = 76;
		hourly_data.temp14 = 76;
		hourly_data.temp15 = 75;
		hourly_data.temp16 = 73;
		hourly_data.temp17 = 70;
		hourly_data.temp18 = 69;
		hourly_data.temp19 = 69;
		hourly_data.temp20 = 68;
	}
	else if(day == "Sunday")
	{
		day_data.day = "Sunday";
		hourly_data.temp7 = 60;
		hourly_data.temp8 = 60;
		hourly_data.temp9 = 62;
		hourly_data.temp10 = 68;
		hourly_data.temp11 = 70;
		hourly_data.temp12 = 72;
		hourly_data.temp13 = 76;
		hourly_data.temp14 = 76;
		hourly_data.temp15 = 75;
		hourly_data.temp16 = 73;
		hourly_data.temp17 = 70;
		hourly_data.temp18 = 69;
		hourly_data.temp19 = 69;
		hourly_data.temp20 = 68;
	}
	else if (day == "Monday")
	{
		day_data.day = "Monday";
		hourly_data.temp7 = 69;
		hourly_data.temp8 = 70;
		hourly_data.temp9 = 82;
		hourly_data.temp10 = 83;
		hourly_data.temp11 = 80;
		hourly_data.temp12 = 82;
		hourly_data.temp13 = 86;
		hourly_data.temp14 = 86;
		hourly_data.temp15 = 85;
		hourly_data.temp16 = 83;
		hourly_data.temp17 = 80;
		hourly_data.temp18 = 79;
		hourly_data.temp19 = 79;
		hourly_data.temp20 = 78;
	}
	else if (day == "Tuesday")
	{
		day_data.day = "Tuesday";
		hourly_data.temp7 = 59;
		hourly_data.temp8 = 60;
		hourly_data.temp9 = 59;
		hourly_data.temp10 = 58;
		hourly_data.temp11 = 60;
		hourly_data.temp12 = 62;
		hourly_data.temp13 = 56;
		hourly_data.temp14 = 56;
		hourly_data.temp15 = 55;
		hourly_data.temp16 = 53;
		hourly_data.temp17 = 55;
		hourly_data.temp18 = 52;
		hourly_data.temp19 = 52;
		hourly_data.temp20 = 52;
	}
	else if (day == "Wednesday")
	{
		day_data.day = "Wednesday";
		hourly_data.temp7 = 69;
		hourly_data.temp8 = 70;
		hourly_data.temp9 = 72;
		hourly_data.temp10 = 78;
		hourly_data.temp11 = 80;
		hourly_data.temp12 = 82;
		hourly_data.temp13 = 86;
		hourly_data.temp14 = 86;
		hourly_data.temp15 = 85;
		hourly_data.temp16 = 83;
		hourly_data.temp17 = 80;
		hourly_data.temp18 = 79;
		hourly_data.temp19 = 79;
		hourly_data.temp20 = 78;
	}
	
	if(day == "Thursday" && temp =="celsius")
	{
		day_data.day = "Thursday";
		hourly_data.temp7 = 21;
		hourly_data.temp8 = 21;
		hourly_data.temp9 = 22;
		hourly_data.temp10 = 26;
		hourly_data.temp11 = 32;
		hourly_data.temp12 = 27;
		hourly_data.temp13 = 30;
		hourly_data.temp14 = 30;
		hourly_data.temp15 = 29;
		hourly_data.temp16 = 28;
		hourly_data.temp17 = 27;
		hourly_data.temp18 = 26;
		hourly_data.temp19 = 26;
		hourly_data.temp20 = 25;
	}

	else if(day == "Friday" && temp =="celsius")
	{
		day_data.day = "Friday";
		hourly_data.temp7 = 22;
		hourly_data.temp8 = 23;
		hourly_data.temp9 = 24;
		hourly_data.temp10 = 26;
		hourly_data.temp11 = 27;
		hourly_data.temp12 = 28;
		hourly_data.temp13 = 30;
		hourly_data.temp14 = 31;
		hourly_data.temp15 = 32;
		hourly_data.temp16 = 33;
		hourly_data.temp17 = 32;
		hourly_data.temp18 = 31;
		hourly_data.temp19 = 29;
		hourly_data.temp20 = 28;
	}
	else if(day == "Saturday" && temp =="celsius")
	{
		day_data.day = "Saturday";
		hourly_data.temp7 = 20;
		hourly_data.temp8 = 21;
		hourly_data.temp9 = 23;
		hourly_data.temp10 = 23;
		hourly_data.temp11 = 24;
		hourly_data.temp12 = 25;
		hourly_data.temp13 = 24;
		hourly_data.temp14 = 25;
		hourly_data.temp15 = 24;
		hourly_data.temp16 = 23;
		hourly_data.temp17 = 22;
		hourly_data.temp18 = 20;
		hourly_data.temp19 = 19;
		hourly_data.temp20 = 19;
	}
	else if(day == "Sunday" && temp =="celsius")
	{
		day_data.day = "Sunday";
		hourly_data.temp7 = 14;
		hourly_data.temp8 = 16;
		hourly_data.temp9 = 16;
		hourly_data.temp10 = 17;
		hourly_data.temp11 = 15;
		hourly_data.temp12 = 16;
		hourly_data.temp13 = 16;
		hourly_data.temp14 = 16;
		hourly_data.temp15 = 17;
		hourly_data.temp16 = 16;
		hourly_data.temp17 = 15;
		hourly_data.temp18 = 14;
		hourly_data.temp19 = 12;
		hourly_data.temp20 = 13;
	}
	else if (day == "Monday" && temp =="celsius")
	{
		day_data.day = "Monday";
		hourly_data.temp7 = 14;
		hourly_data.temp8 = 16;
		hourly_data.temp9 = 16;
		hourly_data.temp10 = 17;
		hourly_data.temp11 = 15;
		hourly_data.temp12 = 16;
		hourly_data.temp13 = 16;
		hourly_data.temp14 = 16;
		hourly_data.temp15 = 17;
		hourly_data.temp16 = 16;
		hourly_data.temp17 = 15;
		hourly_data.temp18 = 14;
		hourly_data.temp19 = 12;
		hourly_data.temp20 = 13;
	}
	else if (day == "Tuesday" && temp =="celsius")
	{
		day_data.day = "Tuesday";
		hourly_data.temp7 = 14;
		hourly_data.temp8 = 16;
		hourly_data.temp9 = 16;
		hourly_data.temp10 = 15;
		hourly_data.temp11 = 15;
		hourly_data.temp12 = 16;
		hourly_data.temp13 = 16;
		hourly_data.temp14 = 16;
		hourly_data.temp15 = 17;
		hourly_data.temp16 = 16;
		hourly_data.temp17 = 15;
		hourly_data.temp18 = 14;
		hourly_data.temp19 = 12;
		hourly_data.temp20 = 13;
	}
	else if (day == "Wednesday" && temp =="celsius")
	{
		day_data.day = "Thursday";
		hourly_data.temp7 = 21;
		hourly_data.temp8 = 21;
		hourly_data.temp9 = 22;
		hourly_data.temp10 = 26;
		hourly_data.temp11 = 32;
		hourly_data.temp12 = 27;
		hourly_data.temp13 = 30;
		hourly_data.temp14 = 30;
		hourly_data.temp15 = 29;
		hourly_data.temp16 = 28;
		hourly_data.temp17 = 27;
		hourly_data.temp18 = 26;
		hourly_data.temp19 = 26;
		hourly_data.temp20 = 25;
	}
	
	res.render('hourly',data);	
}