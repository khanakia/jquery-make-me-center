# jQuery Make Me Center
A jQuery plugin to position elements vertically and horizontally center relative to windows or some other element. Not only you can center the element on page but you can also add Margin and Padding to your element and that plugin will take care of it and will keep your element always center vertically and horizontally.

Lets take an example we have popup contact form and we want to keep it center that's ok but we have one problem that we want to add some padding and margin to that Popup Contact Form on Mobile devices so it will not stuck to the window. To achieve this we usually take some more inner div containers and add padding and margin to inner containers in order to keep popup positioned perfectly always. But using this plugin you can add margin and padding to the same element instead of inner elements and it will always be in center position.

## Installation
- Include `jquery.makemecenter.js` after the main jquery js files

## Options
* **position**  `absolute|fixed|static`   
	* Sepecify that element position **default value:** `absolute`
* **horizontal**  `true|false`
	* Sepecify that element should be horizontally center or not **default value:** `true`
* **vertical**  `true|false`   
	* Sepecify that element should be vertical center or not **default value:** `true`
* **parentRelative** window 
	* Sepecify parent element to which parent element will take as relative **default value:** `windows`
* **complete** 
	* User can specify cusotm callaback on complete 
* **marginLeft**
	* Define Margin from Left on element **default value:** `0`
* **marginRight**
	* Define Margin from Right on element **default value:** `0`
* **marginTop**
	* Define Margin from Top on element **default value:** `0`
* **paddingLeft**
	* Define Margin from Left on element **default value:** `0`
* **paddingRight**
	* Define Margin from Right on element **default value:** `0`
* **paddingTop**
	* Define Margin from Top on element **default value:** `0`
* **paddingBottom**
	* Define Margin from Bottom on element **default value:** `0`
* **is_onload**
	* Center Element on Page Load **default value:** `true`
* **is_onresize**
	* Center Element on Resize **default value:** `true`
* **is_animate**
	* Animate Element while Centering it **default value:** `false`


## Some Usage

#### To make element center vertically and horizontally simple use
```javascript
$("div.box").makemecenter();
```

#### All options at a glance
```javascript
$("div.box").makemecenter({
		position : "absolute",
		horizontal : true,
		vertical : true,
		parentRelative : window,  // Define Parent against which elements needs to be centered
		complete : null,
		
		marginLeft : null,
		marginRight : null,
		marginTop : null,
		paddingLeft : null,
		paddingRight : null,
		paddingTop : null,
		paddingBottom : null,

		is_onload : true,    // Center Element on Page Load
		is_onresize : true,  // Center Element on Resize
		is_animate : false,  // Animate Element while Centering it
});
```

## Check out some examples

Go to the plugins web page to check out a number of examples on usage.
[the plugins web page](http://tenbullstech.github.io/jquery-make-me-center)
