
function onLoadPage(){
	// Show table of users
	/*$.get("getData.jsp?func=getAllUsers", function(data){
        $("#txtHint").html(data);
    });*/
	
	// Load select input values
	$.get("getData.jsp?func=getCampaigns", function(data){
		var jsonData = JSON.parse(data);
        for(var i = 0; i < jsonData.length; i++) {
        	$('#campaignSelect').append($("<option></option>").attr("value",jsonData[i].id).text(jsonData[i].name)); 
        }
    });
}


$("#campaignSelect").change(function(){
	alert(this.value);
});

$("#methodSelect").change(function(){
	if(this.value == 1)
		{
			$("#methodChoosed").append("<input type='date' id='startDate'>")
							   .append("<input type='date' id='endDate'>");
		}
	
});
