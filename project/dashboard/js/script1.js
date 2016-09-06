
function onLoadPage(){
	
	// Load select input values
	$.get("getData.jsp?func=getCampaigns", function(data){
		var jsonData = JSON.parse(data);
        for(var i = 0; i < jsonData.length; i++) {
        	$('#advertiserSelect').append($("<option></option>").attr("value",jsonData[i].id).text(jsonData[i].name)); 
        }
    });
}


$.get("getData.jsp?func=getExchanges", function(data){
	var jsonData = JSON.parse(data);
    for(var i = 0; i < jsonData.length; i++) {
    	$('#exchangeSelect').append($("<option></option>").attr("value",jsonData[i].id).text(jsonData[i].name)); 
    }
});

$.get("getData.jsp?func=getCampaigns", function(data){
	var jsonData = JSON.parse(data);
    for(var i = 0; i < jsonData.length; i++) {
    	$('#campaignSelect').append($("<option></option>").attr("value",jsonData[i].id).text(jsonData[i].name)); 
    }
});

$("#campaignSelect").change(function(){
	$("#multiSelectors").empty();
	$("#multiSelectors").append("<div class='row'>"
				+ "<div class='col-sm-3'>"
				+ "<label>Ad Group</label></div>"
				+ "<div class='col-sm-9'>"
				+ "<select class='form-control' id='ad-groupSelect'>"
	  			+ "<option>select</option></select></div>");
});
