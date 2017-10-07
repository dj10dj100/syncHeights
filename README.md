syncHeights
===========
[![npm](https://img.shields.io/npm/dm/synch-heights.svg)]()
[![npm](https://img.shields.io/npm/dt/synch-heights.svg)]()
[![npm](https://img.shields.io/npm/v/synch-heights.svg)]()
# jQuery SyncHeights 
This plugin takes a specific DOM element and samples all instances of that element on a page, measures the elements heights and updates all instances to have the same height. 
Great for a design that has equal sized div elements, that need to have an auto height to allow for different sized content.

*Requires jQuery, tested with 1.11.0 - should work with much earlier versions.
** Can be solved using css flex nowadays, use this if you need to support older browsers.... **

--------------------
Example
--------------------

``` html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js" ></script>

<div class="end-box">
	<h1> Basic Title </h1>
</div class="box">

<div class="box">
	<h1> Basic Title </h1>
</div>

<div class="end-box">
	<h1> Basic Title </h1>
</div>
```
<b> Basic usage </b>

```javascript
$(document).ready(function(){	
    $('.end-box').syncHeights();		
});
```

<p>In this example the html elements with a class of "end-box" will be equal to each other in height.</p>
<p>You'll notice that whatever class, div or html element you apply syncHeights() to will be measured against each other on page load and perform the correct manipulation to heights.</p>

--------------------
Options
--------------------

<b> For window resizing </b>
```javascript
$(window).resize(function(){
   $('.end-box').syncHeights({
       update : true
   });
});	
```
