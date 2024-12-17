!function(t){"use strict";var e=function(o,i){this.$element=t(o),this.options=t.extend({},e.DEFAULTS,i),this.isLoading=!1};function o(o){return this.each(function(){var i=t(this),n=i.data("bs.button"),s="object"==typeof o&&o;n||i.data("bs.button",n=new e(this,s)),"toggle"==o?n.toggle():o&&n.setState(o)})}e.VERSION="3.3.7",e.DEFAULTS={loadingText:"loading..."},e.prototype.setState=function(e){var o="disabled",i=this.$element,n=i.is("input")?"val":"html",s=i.data();e+="Text",null==s.resetText&&i.data("resetText",i[n]()),setTimeout(t.proxy(function(){i[n](null==s[e]?this.options[e]:s[e]),"loadingText"==e?(this.isLoading=!0,i.addClass(o).attr(o,o).prop(o,!0)):this.isLoading&&(this.isLoading=!1,i.removeClass(o).removeAttr(o).prop(o,!1))},this),0)},e.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var o=this.$element.find("input");"radio"==o.prop("type")?(o.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==o.prop("type")&&(o.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),o.prop("checked",this.$element.hasClass("active")),t&&o.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var i=t.fn.button;t.fn.button=o,t.fn.button.Constructor=e,t.fn.button.noConflict=function(){return t.fn.button=i,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(e){var i=t(e.target).closest(".btn");o.call(i,"toggle"),t(e.target).is('input[type="radio"], input[type="checkbox"]')||(e.preventDefault(),i.is("input,button")?i.trigger("focus"):i.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))})}(jQuery),function(t){"use strict";var e=".dropdown-backdrop",o='[data-toggle="dropdown"]',i=function(e){t(e).on("click.bs.dropdown",this.toggle)};function n(e){var o=e.attr("data-target");o||(o=(o=e.attr("href"))&&/#[A-Za-z]/.test(o)&&o.replace(/.*(?=#[^\s]*$)/,""));var i=o&&t(o);return i&&i.length?i:e.parent()}function s(i){i&&3===i.which||(t(e).remove(),t(o).each(function(){var e=t(this),o=n(e),s={relatedTarget:this};o.hasClass("open")&&(i&&"click"==i.type&&/input|textarea/i.test(i.target.tagName)&&t.contains(o[0],i.target)||(o.trigger(i=t.Event("hide.bs.dropdown",s)),i.isDefaultPrevented()||(e.attr("aria-expanded","false"),o.removeClass("open").trigger(t.Event("hidden.bs.dropdown",s)))))}))}i.VERSION="3.3.7",i.prototype.toggle=function(e){var o=t(this);if(!o.is(".disabled, :disabled")){var i=n(o),r=i.hasClass("open");if(s(),!r){"ontouchstart"in document.documentElement&&!i.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",s);var a={relatedTarget:this};if(i.trigger(e=t.Event("show.bs.dropdown",a)),e.isDefaultPrevented())return;o.trigger("focus").attr("aria-expanded","true"),i.toggleClass("open").trigger(t.Event("shown.bs.dropdown",a))}return!1}},i.prototype.keydown=function(e){if(/(38|40|27|32)/.test(e.which)&&!/input|textarea/i.test(e.target.tagName)){var i=t(this);if(e.preventDefault(),e.stopPropagation(),!i.is(".disabled, :disabled")){var s=n(i),r=s.hasClass("open");if(!r&&27!=e.which||r&&27==e.which)return 27==e.which&&s.find(o).trigger("focus"),i.trigger("click");var a=s.find(".dropdown-menu li:not(.disabled):visible a");if(a.length){var l=a.index(e.target);38==e.which&&l>0&&l--,40==e.which&&l<a.length-1&&l++,~l||(l=0),a.eq(l).trigger("focus")}}}};var r=t.fn.dropdown;t.fn.dropdown=function(e){return this.each(function(){var o=t(this),n=o.data("bs.dropdown");n||o.data("bs.dropdown",n=new i(this)),"string"==typeof e&&n[e].call(o)})},t.fn.dropdown.Constructor=i,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.bs.dropdown.data-api",s).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",o,i.prototype.toggle).on("keydown.bs.dropdown.data-api",o,i.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",i.prototype.keydown)}(jQuery),function(t){"use strict";var e=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};e.VERSION="3.3.7",e.TRANSITION_DURATION=150,e.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},e.prototype.init=function(e,o,i){if(this.enabled=!0,this.type=e,this.$element=t(o),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&t(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var n=this.options.trigger.split(" "),s=n.length;s--;){var r=n[s];if("click"==r)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=r){var a="hover"==r?"mouseenter":"focusin",l="hover"==r?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},e.prototype.getDefaults=function(){return e.DEFAULTS},e.prototype.getOptions=function(e){return(e=t.extend({},this.getDefaults(),this.$element.data(),e)).delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},e.prototype.getDelegateOptions=function(){var e={},o=this.getDefaults();return this._options&&t.each(this._options,function(t,i){o[t]!=i&&(e[t]=i)}),e},e.prototype.enter=function(e){var o=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);if(o||(o=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,o)),e instanceof t.Event&&(o.inState["focusin"==e.type?"focus":"hover"]=!0),o.tip().hasClass("in")||"in"==o.hoverState)o.hoverState="in";else{if(clearTimeout(o.timeout),o.hoverState="in",!o.options.delay||!o.options.delay.show)return o.show();o.timeout=setTimeout(function(){"in"==o.hoverState&&o.show()},o.options.delay.show)}},e.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},e.prototype.leave=function(e){var o=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);if(o||(o=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,o)),e instanceof t.Event&&(o.inState["focusout"==e.type?"focus":"hover"]=!1),!o.isInStateTrue()){if(clearTimeout(o.timeout),o.hoverState="out",!o.options.delay||!o.options.delay.hide)return o.hide();o.timeout=setTimeout(function(){"out"==o.hoverState&&o.hide()},o.options.delay.hide)}},e.prototype.show=function(){var o=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(o);var i=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(o.isDefaultPrevented()||!i)return;var n=this,s=this.tip(),r=this.getUID(this.type);this.setContent(),s.attr("id",r),this.$element.attr("aria-describedby",r),this.options.animation&&s.addClass("fade");var a="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,h=l.test(a);h&&(a=a.replace(l,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(a).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var p=this.getPosition(),d=s[0].offsetWidth,c=s[0].offsetHeight;if(h){var u=a,f=this.getPosition(this.$viewport);a="bottom"==a&&p.bottom+c>f.bottom?"top":"top"==a&&p.top-c<f.top?"bottom":"right"==a&&p.right+d>f.width?"left":"left"==a&&p.left-d<f.left?"right":a,s.removeClass(u).addClass(a)}var g=this.getCalculatedOffset(a,p,d,c);this.applyPlacement(g,a);var m=function(){var t=n.hoverState;n.$element.trigger("shown.bs."+n.type),n.hoverState=null,"out"==t&&n.leave(n)};t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",m).emulateTransitionEnd(e.TRANSITION_DURATION):m()}},e.prototype.applyPlacement=function(e,o){var i=this.tip(),n=i[0].offsetWidth,s=i[0].offsetHeight,r=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10);isNaN(r)&&(r=0),isNaN(a)&&(a=0),e.top+=r,e.left+=a,t.offset.setOffset(i[0],t.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),i.addClass("in");var l=i[0].offsetWidth,h=i[0].offsetHeight;"top"==o&&h!=s&&(e.top=e.top+s-h);var p=this.getViewportAdjustedDelta(o,e,l,h);p.left?e.left+=p.left:e.top+=p.top;var d=/top|bottom/.test(o),c=d?2*p.left-n+l:2*p.top-s+h,u=d?"offsetWidth":"offsetHeight";i.offset(e),this.replaceArrow(c,i[0][u],d)},e.prototype.replaceArrow=function(t,e,o){this.arrow().css(o?"left":"top",50*(1-t/e)+"%").css(o?"top":"left","")},e.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},e.prototype.hide=function(o){var i=this,n=t(this.$tip),s=t.Event("hide.bs."+this.type);function r(){"in"!=i.hoverState&&n.detach(),i.$element&&i.$element.removeAttr("aria-describedby").trigger("hidden.bs."+i.type),o&&o()}if(this.$element.trigger(s),!s.isDefaultPrevented())return n.removeClass("in"),t.support.transition&&n.hasClass("fade")?n.one("bsTransitionEnd",r).emulateTransitionEnd(e.TRANSITION_DURATION):r(),this.hoverState=null,this},e.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},e.prototype.hasContent=function(){return this.getTitle()},e.prototype.getPosition=function(e){var o=(e=e||this.$element)[0],i="BODY"==o.tagName,n=o.getBoundingClientRect();null==n.width&&(n=t.extend({},n,{width:n.right-n.left,height:n.bottom-n.top}));var s=window.SVGElement&&o instanceof window.SVGElement,r=i?{top:0,left:0}:s?null:e.offset(),a={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},l=i?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},n,a,l,r)},e.prototype.getCalculatedOffset=function(t,e,o,i){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-o/2}:"top"==t?{top:e.top-i,left:e.left+e.width/2-o/2}:"left"==t?{top:e.top+e.height/2-i/2,left:e.left-o}:{top:e.top+e.height/2-i/2,left:e.left+e.width}},e.prototype.getViewportAdjustedDelta=function(t,e,o,i){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,r=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-s-r.scroll,l=e.top+s-r.scroll+i;a<r.top?n.top=r.top-a:l>r.top+r.height&&(n.top=r.top+r.height-l)}else{var h=e.left-s,p=e.left+s+o;h<r.left?n.left=r.left-h:p>r.right&&(n.left=r.left+r.width-p)}return n},e.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},e.prototype.getUID=function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},e.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},e.prototype.enable=function(){this.enabled=!0},e.prototype.disable=function(){this.enabled=!1},e.prototype.toggleEnabled=function(){this.enabled=!this.enabled},e.prototype.toggle=function(e){var o=this;e&&((o=t(e.currentTarget).data("bs."+this.type))||(o=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,o))),e?(o.inState.click=!o.inState.click,o.isInStateTrue()?o.enter(o):o.leave(o)):o.tip().hasClass("in")?o.leave(o):o.enter(o)},e.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})};var o=t.fn.tooltip;t.fn.tooltip=function(o){return this.each(function(){var i=t(this),n=i.data("bs.tooltip"),s="object"==typeof o&&o;!n&&/destroy|hide/.test(o)||(n||i.data("bs.tooltip",n=new e(this,s)),"string"==typeof o&&n[o]())})},t.fn.tooltip.Constructor=e,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=o,this}}(jQuery),function(t){"use strict";var e=function(e,o){this.options=o,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};function o(o,i){return this.each(function(){var n=t(this),s=n.data("bs.modal"),r=t.extend({},e.DEFAULTS,n.data(),"object"==typeof o&&o);s||n.data("bs.modal",s=new e(this,r)),"string"==typeof o?s[o](i):r.show&&s.show(i)})}e.VERSION="3.3.7",e.TRANSITION_DURATION=300,e.BACKDROP_TRANSITION_DURATION=150,e.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},e.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},e.prototype.show=function(o){var i=this,n=t.Event("show.bs.modal",{relatedTarget:o});this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){i.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(i.$element)&&(i.ignoreBackdropClick=!0)})}),this.backdrop(function(){var n=t.support.transition&&i.$element.hasClass("fade");i.$element.parent().length||i.$element.appendTo(i.$body),i.$element.show().scrollTop(0),i.adjustDialog(),n&&i.$element[0].offsetWidth,i.$element.addClass("in"),i.enforceFocus();var s=t.Event("shown.bs.modal",{relatedTarget:o});n?i.$dialog.one("bsTransitionEnd",function(){i.$element.trigger("focus").trigger(s)}).emulateTransitionEnd(e.TRANSITION_DURATION):i.$element.trigger("focus").trigger(s)}))},e.prototype.hide=function(o){o&&o.preventDefault(),o=t.Event("hide.bs.modal"),this.$element.trigger(o),this.isShown&&!o.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(e.TRANSITION_DURATION):this.hideModal())},e.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},e.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},e.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},e.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},e.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},e.prototype.backdrop=function(o){var i=this,n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var s=t.support.transition&&n;if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+n).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){this.ignoreBackdropClick?this.ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide())},this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!o)return;s?this.$backdrop.one("bsTransitionEnd",o).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION):o()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var r=function(){i.removeBackdrop(),o&&o()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",r).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION):r()}else o&&o()},e.prototype.handleUpdate=function(){this.adjustDialog()},e.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},e.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},e.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},e.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},e.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},e.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var i=t.fn.modal;t.fn.modal=o,t.fn.modal.Constructor=e,t.fn.modal.noConflict=function(){return t.fn.modal=i,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(e){var i=t(this),n=i.attr("href"),s=t(i.attr("data-target")||n&&n.replace(/.*(?=#[^\s]+$)/,"")),r=s.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(n)&&n},s.data(),i.data());i.is("a")&&e.preventDefault(),s.one("show.bs.modal",function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",function(){i.is(":visible")&&i.trigger("focus")})}),o.call(s,r,this)})}(jQuery),function(t){"use strict";var e=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");e.VERSION="3.3.7",e.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),e.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),e.prototype.constructor=e,e.prototype.getDefaults=function(){return e.DEFAULTS},e.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),o=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof o?"html":"append":"text"](o),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},e.prototype.hasContent=function(){return this.getTitle()||this.getContent()},e.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var o=t.fn.popover;t.fn.popover=function(o){return this.each(function(){var i=t(this),n=i.data("bs.popover"),s="object"==typeof o&&o;!n&&/destroy|hide/.test(o)||(n||i.data("bs.popover",n=new e(this,s)),"string"==typeof o&&n[o]())})},t.fn.popover.Constructor=e,t.fn.popover.noConflict=function(){return t.fn.popover=o,this}}(jQuery);