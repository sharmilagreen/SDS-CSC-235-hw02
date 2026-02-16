function quantVis(){
	document.getElementById('quant1').src='./visualizations/year_boxplot.png'; 
    document.getElementById('quant2').src='./visualizations/weight_boxplot.png'; 
}

function catVis(){
    document.getElementById('cat1').src='./visualizations/vehicle_make_dist.png'; 
    document.getElementById('cat2').src='./visualizations/registration_usage.png'; 
}

function ordVis(){
    document.getElementById('ord1').src='./visualizations/vehicle_type.png'; 
    document.getElementById('ord2').src='./visualizations/category_dist.png'; 
}

function quantSum(){
	document.getElementById('quant1').src='./summarystats/year_summary_stats.jpeg'; 
    document.getElementById('quant2').src='./summarystats/weight_summary_stats.jpeg'; 
}

function catFreq(){
    document.getElementById('cat1').src='./summarystats/vehicle_make_summary.jpeg'; 
    document.getElementById('cat2').src='./summarystats/usage_summary.jpeg'; 
}

function ordFreq(){
    document.getElementById('ord1').src='./summarystats/type_frequency_table.jpeg'; 
    document.getElementById('ord2').src='./summarystats/category_frequency_table.jpeg'; 
}

function mouseOver(){
	document.getElementById("final").classList.add("highlight"); 
}

function mouseOut(){
	document.getElementById("final").classList.remove("highlight"); 
}