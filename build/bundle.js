webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_phaser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__states_boot_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__states_game_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_menu_js__ = __webpack_require__(19);





class ScreamyFish extends __WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Game {

  constructor(width,height){
    super(width, height, __WEBPACK_IMPORTED_MODULE_0_phaser___default.a.AUTO, 'world', null);

    ScreamyFish.highScore = localStorage.sfHighScore !== undefined ? localStorage.sfHighScore : 0;
    ScreamyFish.score = 0;

    this.state.add('boot', __WEBPACK_IMPORTED_MODULE_1__states_boot_js__["a" /* default */], false);
    this.state.add('game', __WEBPACK_IMPORTED_MODULE_2__states_game_js__["a" /* default */], false);
    this.state.add('menu', __WEBPACK_IMPORTED_MODULE_3__states_menu_js__["a" /* default */], false);
    this.state.start('boot');
  }


}
/* harmony export (immutable) */ __webpack_exports__["a"] = ScreamyFish;



/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_phaser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bubble_js__ = __webpack_require__(14);



class BubbleGroup extends __WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Group{

    constructor(game){
      super(game);
      this.x = this.game.width;
    }

    generateBubbles(){
        let height = this.game.rnd.integerInRange(0,this.game.height-50);
        let bubble = new __WEBPACK_IMPORTED_MODULE_1__bubble_js__["a" /* default */](this.game,0,height);
        this.add(bubble);
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = BubbleGroup;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_phaser__);


class Fish extends __WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Sprite{

  constructor(game,x,y,key,frame){
    super(game,x,y,'fish',frame);
    this.scale.setTo(0.3,0.3);
    this.game.physics.arcade.enableBody(this);
  }

  scream(amount){
    this.body.velocity.y = -amount || -200;
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Fish;



/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(12)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "html, body {\n  height: 100%;\n  margin: 0; }\n\n#world {\n  display: inline-block;\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n", ""]);

// exports


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_phaser__);


class Bubble extends __WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Sprite{

  constructor(game,x,y,key,frame){
    super(game,x,y,'bubble',frame);
    this.width = 30;
    this.height = 30;
    this.game.physics.arcade.enable(this);
    this.body.allowGravity = false;
    let speed = this.game.rnd.integerInRange(50,150);
    this.body.velocity.x = -speed;
    this.checkWorldBounds = true;
    this.events.onOutOfBounds.add(this.onOutOfBounds,this);
  }

  onOutOfBounds(){
    this.destroy();
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Bubble;



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_phaser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_js__ = __webpack_require__(1);


class Pipe extends __WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Sprite{

  constructor(game,x,y,key,frame){
      super(game,x,y,'pipe',frame);
      this.game.physics.arcade.enable(this);
      this.body.allowGravity = false;
      this.checkWorldBounds = true;
      this.outOfBoundsKill = true;
      this.body.velocity.x = -200;
      this.events.onOutOfBounds.add(this.onOutOfBounds,this);
  }

  onOutOfBounds(){
      __WEBPACK_IMPORTED_MODULE_1__main_js__["a" /* default */].score += .5;
      this.destroy();
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Pipe;



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_phaser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipe_js__ = __webpack_require__(15);



class PipeGroup extends __WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Group{

    constructor(game){
      super(game);
      this.x = this.game.width;
    }

    generatePipes(){
        let pipeH1 = this.game.rnd.integerInRange(50,this.game.height-170);
        let topPipe = new __WEBPACK_IMPORTED_MODULE_1__pipe_js__["a" /* default */](this.game,0,0);
        topPipe.width = 50;
        topPipe.height = pipeH1;
        this.game.add.existing(topPipe);
        this.add(topPipe);

        let pipeH2 = this.game.height - pipeH1 - 120;
        let bottomPipe = new __WEBPACK_IMPORTED_MODULE_1__pipe_js__["a" /* default */](this.game,0,this.game.height-pipeH2);
        bottomPipe.width = 50;
        bottomPipe.height = pipeH2;
        this.game.add.existing(bottomPipe);
        this.add(bottomPipe);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PipeGroup;



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_phaser__);


class BootState extends __WEBPACK_IMPORTED_MODULE_0_phaser___default.a.State{

  constructor(){
    super();
    this.ready = false;
  }

  preload(){
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.game.load.image('pipe','src/assets/pipe.png');
    this.game.load.image('bubble','src/assets/bubble.png');
    this.game.load.image('fish','src/assets/fish.png');
  }

  create(){
    this.game.stage.backgroundColor = '#71c5cf';
  }

  onLoadComplete() {
    this.ready = true;
  }

  update(){
    if(this.ready){
      this.game.state.start('menu', true, false);
    }
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = BootState;



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_phaser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprites_fish_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sprites_pipegroup_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sprites_bubblegroup_js__ = __webpack_require__(3);






class GameState extends __WEBPACK_IMPORTED_MODULE_0_phaser___default.a.State{

  create(){

    //fish
    this.fish = new __WEBPACK_IMPORTED_MODULE_1__sprites_fish_js__["a" /* default */](this.game,this.game.world.centerX,this.game.world.centerY);
    this.game.add.existing(this.fish);

    //pipes
    this.pipeGroup = new __WEBPACK_IMPORTED_MODULE_2__sprites_pipegroup_js__["a" /* default */](this.game);
    this.pipeGenerator = this.game.time.events.loop(2000,this.generatePipe,this);
    this.pipeGenerator.timer.start();
    this.generatePipe();

    //clouds
    this.bubbleGroup = new __WEBPACK_IMPORTED_MODULE_4__sprites_bubblegroup_js__["a" /* default */](this.game);
    this.bubbleGenerator = this.time.events.loop(3000,this.generateBubble,this);
    this.bubbleGenerator.timer.start();
    this.generateBubble();

    const w = this.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.W);
    w.onDown.add(this.fish.scream, this.fish);
  }

  update() {
    this.game.physics.arcade.collide(this.fish, this.pipeGroup, this.loss,null,this);
    if(this.fish.y > this.game.height){
      this.game.state.start('menu');
    }else if(this.fish.y < 0){
      this.fish.y = 0;
    }
  }

  generatePipe(){
    this.pipeGroup.generatePipes();
  }

  generateBubble(){
      this.bubbleGroup.generateBubbles();
  }

  loss(){
    if(__WEBPACK_IMPORTED_MODULE_3__main_js__["a" /* default */].score > __WEBPACK_IMPORTED_MODULE_3__main_js__["a" /* default */].highScore){
      localStorage.sfHighScore = __WEBPACK_IMPORTED_MODULE_3__main_js__["a" /* default */].score;
    }
    __WEBPACK_IMPORTED_MODULE_3__main_js__["a" /* default */].score = 0;
    this.game.state.start('menu');
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = GameState;



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_phaser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprites_fish_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sprites_bubblegroup_js__ = __webpack_require__(3);




class MenuState extends __WEBPACK_IMPORTED_MODULE_0_phaser___default.a.State{

  create(){
    //add detail
    let detail = this.game.add.text(this.game.world.centerX, 100,
      "Make sound to move the fish",{
      fill:'#ffffff',
      align: "center"
    });
    detail.anchor.set(0.5);

    //add start
    let start = this.game.add.text(this.game.world.centerX, 150,
      "Start Game",{
      fill:'#4CAF50',
      align: "center"
    });
    start.inputEnabled = true;
    start.anchor.set(0.5);
    start.events.onInputDown.add((item)=>{
        this.game.state.start('game');
    });

    //add warning
    let warning = this.game.add.text(this.game.world.centerX, this.game.world.centerY+150,
      "Please enable microphone to play the game",{
      fontSize:'16px',
      fill:'#ffffff',
      align: "center"
    });
    warning.anchor.set(0.5);

    //start physics
    this.game.physics.startSystem(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 300;

    //create fish
    this.fish = new __WEBPACK_IMPORTED_MODULE_1__sprites_fish_js__["a" /* default */](this.game,this.game.world.centerX,this.game.world.centerY);
    this.game.add.existing(this.fish);

    this.bubbleGroup = new __WEBPACK_IMPORTED_MODULE_2__sprites_bubblegroup_js__["a" /* default */](this.game);
    this.bubbleGenerator = this.time.events.loop(2000,this.generateBubble,this);
    this.bubbleGenerator.timer.start();
    this.generateBubble();

  }

  generateBubble(){
      this.bubbleGroup.generateBubbles();
  }

  update(){
      if(this.fish.y > this.game.world.centerY){
        this.fish.scream(150);
      }
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = MenuState;



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_main_js__ = __webpack_require__(1);



class App{

  constructor(){
    navigator.mediaDevices.getUserMedia({audio:true}).then((stream)=>{
      this.audioCtx = new (AudioContext || webkitAudioContext)();
      this.analyser = this.audioCtx.createAnalyser();
      this.analyser.fftSize = 32;
      let source = this.audioCtx.createMediaStreamSource(stream);
      source.connect(this.analyser);
      this.frequencyData = new Uint8Array(this.analyser.frequencyBinCount);
      this.analyser.getByteTimeDomainData(this.frequencyData);
      this.animate();
    }).catch((err)=>{
      console.log(err);
    });

    this.screamyFish = new __WEBPACK_IMPORTED_MODULE_1__src_main_js__["a" /* default */](600,400);

  }

  animate(){

    requestAnimationFrame(()=>{
      this.animate();
    });

    this.analyser.getByteFrequencyData(this.frequencyData);
    let state = this.screamyFish.state.getCurrentState();
    if(state.key === 'game'){
        let sound = 0;
        for(let i = 0;i<this.frequencyData.length;i++){
          sound+=this.frequencyData[i];
        }
        sound = sound / this.frequencyData.length;
        if(sound > 100){
          state.fish.scream(sound);
        }
      }
  }

}
/* harmony export (immutable) */ __webpack_exports__["App"] = App;



const app = new App();


/***/ })
],[20]);