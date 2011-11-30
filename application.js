$(function() {
	var text = $(this).loremContent()
	$("#text").html(text)
	
	var moreText = $(this).loremContent({maxSentences: 20})
	$("#more-text").html(moreText)
	
	var title = $(this).loremContent('title')
	$("#title").html(title)
})