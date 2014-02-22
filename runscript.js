// JavaScript Document

function main(t, form, currentField) {
	
	// Define variables
	t1 = t.value;
	run = currentField;
	form1 = form;
	a = form.mile.value;
	b = form.fivek.value;
	c = form.tenk.value;
	d = form.half.value;
	e = form.marathon.value;
	
	var f1 = riegalFormula(t1,run,form1);
	var f2 = cameronFormula(t1,run);
	
}
function riegalFormula(time1,choice1,form1a) {
	
	// Depending on value entered, calculates other values
	if (choice1 == "mile") {
		var d1 = 1
		
		// Solve Riegel
		a = time1;
		b = time1*Math.pow((3.1/d1),1.06);
		c = time1*Math.pow((6.2/d1),1.06);
		d = time1*Math.pow((13.1/d1),1.06);
		e = time1*Math.pow((26.2/d1),1.06);
		
	}
	if (choice1 == "fivek") {
		var d1 = 3.1
		
		// Solve Riegel
		a = time1*Math.pow((1/d1),1.06);
		b = time1;
		c = time1*Math.pow((6.2/d1),1.06);
		d = time1*Math.pow((13.1/d1),1.06);
		e = time1*Math.pow((26.2/d1),1.06);
		
	}
	if (choice1 == "tenk") {
		var d1 = 6.2
		
		a = time1*Math.pow((1/d1),1.06);
		b = time1*Math.pow((3.1/d1),1.06);
		c = time1;
		d = time1*Math.pow((13.1/d1),1.06);
		e = time1*Math.pow((26.2/d1),1.06);
	}
	if (choice1 == "half") {
		var d1 = 13.1
	
		a = time1*Math.pow((1/d1),1.06);
		b = time1*Math.pow((3.1/d1),1.06);
		c = time1*Math.pow((6.2/d1),1.06);
		d = time1;
		e = time1*Math.pow((26.2/d1),1.06);
	}
	if (choice1 == "marathon") {
		var d1 = 26.2
		
		a = time1*Math.pow((1/d1),1.06);
		b = time1*Math.pow((3.1/d1),1.06);
		c = time1*Math.pow((6.2/d1),1.06);
		d = time1*Math.pow((13.1/d1),1.06);
		e = time1;
	}
	
	// Write Riegel calculated times in seconds
	form1a.mile.value = parseFloat(a).toFixed(1);
	form1a.fivek.value = parseFloat(b).toFixed(1);
	form1a.tenk.value = parseFloat(c).toFixed(1);
	form1a.half.value = parseFloat(d).toFixed(1);
	form1a.marathon.value = parseFloat(e).toFixed(1);
	
	// Change Riegel value into minutes
	var a1 = a/60;
	var b1 = b/60;
	var c1 = c/60;
	var d1 = d/60;
	var e1 = e/60;
	
	// Write minute values
	document.getElementById("miMin0").innerHTML=a1.toFixed(2);
	document.getElementById("miMin1").innerHTML=b1.toFixed(2);
	document.getElementById("miMin2").innerHTML=c1.toFixed(2);
	document.getElementById("miMin3").innerHTML=d1.toFixed(2);
	document.getElementById("miMin4").innerHTML=e1.toFixed(2);
	
}

function cameronFormula(time2,choice2) {
	
	var dis;
	
	// Find Distance Ran
	if (choice2 == "mile") {
		dis = 1;
	}
	if (choice2 == "fivek") {
		dis = 3.1;
	}
	if (choice2 == "tenk") {
		dis = 6.2;
	}
	if (choice2 == "half") {
		dis = 13.1;
	}
	if (choice2 == "marathon") {
		dis = 26.2;
	}
	
	// Solve
	var dis2 = 1;
	var aa = 13.49681-0.048865*dis+2.43896/(Math.pow(dis,.7905));
	var ab = 13.49681-0.048865*1+2.43896/(Math.pow(dis2,.7905));
	var aans = (time2/dis)*(aa/ab)*1;
	
	dis2 = 3.1;
	var ba = 13.49681-0.048865*dis+2.43896/(Math.pow(dis,.7905));
	var bb = 13.49681-0.048865*3.1+2.43896/(Math.pow(dis2,.7905));
	var bans = (time2/dis)*(ba/bb)*3.1;
		
	dis2 = 6.2;
	var ca = 13.49681-0.048865*dis+2.43896/(Math.pow(dis,.7905));
	var cb = 13.49681-0.048865*6.2+2.43896/(Math.pow(dis2,.7905));
	var cans = (time2/dis)*(ca/cb)*6.2;
		
	dis2 = 13.1;
	var da = 13.49681-0.048865*dis+2.43896/(Math.pow(dis,.7905));
	var db = 13.49681-0.048865*13.1+2.43896/(Math.pow(dis2,.7905));
	var dans = (time2/dis)*(da/db)*13.1;
		
	dis2 = 26.2;
	var ea = 13.49681-0.048865*dis+2.43896/(Math.pow(dis,.7905));
	var eb = 13.49681-0.048865*26.2+2.43896/(Math.pow(dis2,.7905));
	var eans = (time2/dis)*(ea/eb)*26.2;
	
	if (choice2 == "mile") {
		aans = time2;
	}
	if (choice2 == "fivek") {
		bans = time2;
	}
	if (choice2 == "tenk") {
		cans = time2;
	}
	if (choice2 == "half") {
		dans = time2;
	}
	if (choice2 == "marathon") {
		eans = time2;
	}
	
	// Print Cameron seconds
	document.getElementById("camSec0").innerHTML=parseFloat(aans).toFixed(1);
	document.getElementById("camSec1").innerHTML=parseFloat(bans).toFixed(1);
	document.getElementById("camSec2").innerHTML=parseFloat(cans).toFixed(1);
	document.getElementById("camSec3").innerHTML=parseFloat(dans).toFixed(1);
	document.getElementById("camSec4").innerHTML=parseFloat(eans).toFixed(1);
	
	// Convert Cameron value to minutes
	var aans1 = aans/60;
	var bans1 = bans/60;
	var cans1 = cans/60;
	var dans1 = dans/60;
	var eans1 = eans/60;
	
	// Print Cameron minutes
	document.getElementById("camMin0").innerHTML=parseFloat(aans1).toFixed(2);
	document.getElementById("camMin1").innerHTML=parseFloat(bans1).toFixed(2);
	document.getElementById("camMin2").innerHTML=parseFloat(cans1).toFixed(2);
	document.getElementById("camMin3").innerHTML=parseFloat(dans1).toFixed(2);
	document.getElementById("camMin4").innerHTML=parseFloat(eans1).toFixed(2);
}
