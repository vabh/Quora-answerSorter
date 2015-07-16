var answersDiv = $('.AnswerPagedList');
var votes = [];
var ids = answersDiv.find('.pagedlist_item')
					.each(function(index, item){ 

							var votecount = $(item).find('.AnswerVoterListModalLinkWithVoteCount').text();
							votecount = votecount.replace(",", "");
							votecount = votecount.substr(0, votecount.indexOf(' '));
							votes.push({
							    key:   this.id,
							    value: votecount === "" ? -1 : votecount
							});
						});


votes.sort(function(a, b) {
  return a.value == b.value
          ? 0
          : (parseInt(a.value) < parseInt(b.value) ? 1 : -1);
});

for(var j = 0; j < ids.length; j++){

	ids[j] = $(ids[j])
			.removeClass("pagedlist_hidden")
			.css("display", "block") //add check for hidden items
			.detach();
}

for(var i = votes.length - 1; i >= 0; i--){
	var id = votes[i].key;
	for(var j = 0; j < ids.length; j++){
		if($(ids[j]).attr('id') === id){
			answersDiv.prepend(ids[j]);
		}
	}	
}