syncHeights
===========

jQuery SyncHeights plugin requires jQuery tested with (1.7.2).

In this example the html elements with a class of "end-box" will be equal to each other in height.

<div class="end-box">
	<h1> Basic Title </h1>
</div class="box">

<div class="box">
	<h1> Basic Title </h1>
</div>

<div class="end-box">
	<h1> Basic Title </h1>
</div>

```javascript
	$(document).ready(function(){	
		$('.end-box').syncHeights();		
	});
	$(window).resize(function(){
		$('.end-box').syncHeights('update');
	})


You'll notice that whatever class, div or html element you apply syncHeights() to will be measured against each other on page load and perform the correct manipulation to heights.
