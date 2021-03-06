if (typeof _yuitest_coverage == "undefined"){
    _yuitest_coverage = {};
    _yuitest_coverline = function(src, line){
        var coverage = _yuitest_coverage[src];
        if (!coverage.lines[line]){
            coverage.calledLines++;
        }
        coverage.lines[line]++;
    };
    _yuitest_coverfunc = function(src, name, line){
        var coverage = _yuitest_coverage[src],
            funcId = name + ":" + line;
        if (!coverage.functions[funcId]){
            coverage.calledFunctions++;
        }
        coverage.functions[funcId]++;
    };
}
_yuitest_coverage["build/gallery-sm-menu-base/gallery-sm-menu-base.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/gallery-sm-menu-base/gallery-sm-menu-base.js",
    code: []
};
_yuitest_coverage["build/gallery-sm-menu-base/gallery-sm-menu-base.js"].code=["YUI.add('gallery-sm-menu-base', function (Y, NAME) {","","/*jshint expr:true, onevar:false */","","/**","Provides `Menu.Base`.","","@module gallery-sm-menu","@submodule gallery-sm-menu-base","**/","","/**","Base menu functionality.","","@class Menu.Base","@constructor","@param {Object} [config] Config options.","    @param {Menu.Item[]|Object[]} [config.items] Array of `Menu.Item` instances","        or menu item config objects to add to this menu.","@extends Tree","**/","","/**","Fired when a menu item is disabled.","","@event disable","@param {Menu.Item} item Menu item that was disabled.","@preventable _defDisableFn","**/","var EVT_DISABLE = 'disable';","","/**","Fired when a menu item is enabled.","","@event enable","@param {Menu.Item} item Menu item that was enabled.","@preventable _defEnableFn","**/","var EVT_ENABLE = 'enable';","","/**","Fired when a menu item is hidden.","","@event hide","@param {Menu.Item} item Menu item that was hidden.","@preventable _defHideFn","**/","var EVT_HIDE = 'hide';","","/**","Fired when a menu item is shown.","","@event show","@param {Menu.Item} item Menu item that was shown.","@preventable _defShowFn","**/","var EVT_SHOW = 'show';","","var MenuBase = Y.Base.create('menuBase', Y.Tree, [Y.Tree.Labelable, Y.Tree.Openable], {","    nodeClass: Y.Menu.Item,","","    // -- Lifecycle ------------------------------------------------------------","    initializer: function (config) {","        if (config) {","            config.nodes = config.items;","        }","    },","","    // -- Public Methods -------------------------------------------------------","","    /**","    Closes all open submenus of this menu.","","    @method closeSubMenus","    @chainable","    **/","    closeSubMenus: function () {","        // Close all open submenus.","        Y.Object.each(this._openMenus, function (item) {","            item.close();","        }, this);","","        return this;","    },","","    /**","    Disables the specified menu item.","","    @method disableItem","    @param {Menu.Item} item Menu item to disable.","    @param {Object} [options] Options.","        @param {Boolean} [options.silent=false] If `true`, the `disable` event","            will be suppressed.","    @chainable","    **/","    disableItem: function (item, options) {","        if (!item.isDisabled()) {","            this._fireTreeEvent(EVT_DISABLE, {item: item}, {","                defaultFn: this._defDisableFn,","                silent   : options && options.silent","            });","        }","","        return this;","    },","","    /**","    Enables the specified menu item.","","    @method enableItem","    @param {Menu.Item} item Menu item to enable.","    @param {Object} [options] Options.","        @param {Boolean} [options.silent=false] If `true`, the `enable` event","            will be suppressed.","    @chainable","    **/","    enableItem: function (item, options) {","        if (item.isDisabled()) {","            this._fireTreeEvent(EVT_ENABLE, {item: item}, {","                defaultFn: this._defEnableFn,","                silent   : options && options.silent","            });","        }","","        return this;","    },","","    /**","    Hides the specified menu item.","","    @method hideItem","    @param {Menu.Item} item Menu item to hide.","    @param {Object} [options] Options.","        @param {Boolean} [options.silent=false] If `true`, the `hide` event","            will be suppressed.","    @chainable","    **/","    hideItem: function (item, options) {","        if (!item.isHidden()) {","            this._fireTreeEvent(EVT_HIDE, {item: item}, {","                defaultFn: this._defHideFn,","                silent   : options && options.silent","            });","        }","","        return this;","    },","","    /**","    Shows the specified menu item.","","    @method showItem","    @param {Menu.Item} item Menu item to show.","    @param {Object} [options] Options.","        @param {Boolean} [options.silent=false] If `true`, the `show` event","            will be suppressed.","    @chainable","    **/","    showItem: function (item, options) {","        if (item.isHidden()) {","            this._fireTreeEvent(EVT_SHOW, {item: item}, {","                defaultFn: this._defShowFn,","                silent   : options && options.silent","            });","        }","","        return this;","    },","","    // -- Default Event Handlers -----------------------------------------------","","    /**","    Default handler for the `disable` event.","","    @method _defDisableFn","    @param {EventFacade} e","    @protected","    **/","    _defDisableFn: function (e) {","        e.item.state.disabled = true;","    },","","    /**","    Default handler for the `enable` event.","","    @method _defEnableFn","    @param {EventFacade} e","    @protected","    **/","    _defEnableFn: function (e) {","        delete e.item.state.disabled;","    },","","    /**","    Default handler for the `hide` event.","","    @method _defHideFn","    @param {EventFacade} e","    @protected","    **/","    _defHideFn: function (e) {","        e.item.state.hidden = true;","    },","","    /**","    Default handler for the `show` event.","","    @method _defShowFn","    @param {EventFacade} e","    @protected","    **/","    _defShowFn: function (e) {","        delete e.item.state.hidden;","    }","});","","Y.namespace('Menu').Base = MenuBase;","","","}, '@VERSION@', {\"requires\": [\"gallery-sm-menu-item\", \"tree-labelable\", \"tree-openable\"]});"];
_yuitest_coverage["build/gallery-sm-menu-base/gallery-sm-menu-base.js"].lines = {"1":0,"30":0,"39":0,"48":0,"57":0,"59":0,"64":0,"65":0,"79":0,"80":0,"83":0,"97":0,"98":0,"104":0,"118":0,"119":0,"125":0,"139":0,"140":0,"146":0,"160":0,"161":0,"167":0,"180":0,"191":0,"202":0,"213":0,"217":0};
_yuitest_coverage["build/gallery-sm-menu-base/gallery-sm-menu-base.js"].functions = {"initializer:63":0,"(anonymous 2):79":0,"closeSubMenus:77":0,"disableItem:96":0,"enableItem:117":0,"hideItem:138":0,"showItem:159":0,"_defDisableFn:179":0,"_defEnableFn:190":0,"_defHideFn:201":0,"_defShowFn:212":0,"(anonymous 1):1":0};
_yuitest_coverage["build/gallery-sm-menu-base/gallery-sm-menu-base.js"].coveredLines = 28;
_yuitest_coverage["build/gallery-sm-menu-base/gallery-sm-menu-base.js"].coveredFunctions = 12;
_yuitest_coverline("build/gallery-sm-menu-base/gallery-sm-menu-base.js", 1);
YUI.add('gallery-sm-menu-base', function (Y, NAME) {

/*jshint expr:true, onevar:false */

/**
Provides `Menu.Base`.

@module gallery-sm-menu
@submodule gallery-sm-menu-base
**/

/**
Base menu functionality.

@class Menu.Base
@constructor
@param {Object} [config] Config options.
    @param {Menu.Item[]|Object[]} [config.items] Array of `Menu.Item` instances
        or menu item config objects to add to this menu.
@extends Tree
**/

/**
Fired when a menu item is disabled.

@event disable
@param {Menu.Item} item Menu item that was disabled.
@preventable _defDisableFn
**/
_yuitest_coverfunc("build/gallery-sm-menu-base/gallery-sm-menu-base.js", "(anonymous 1)", 1);
_yuitest_coverline("build/gallery-sm-menu-base/gallery-sm-menu-base.js", 30);
var EVT_DISABLE = 'disable';

/**
Fired when a menu item is enabled.

@event enable
@param {Menu.Item} item Menu item that was enabled.
@preventable _defEnableFn
**/
_yuitest_coverline("build/gallery-sm-menu-base/gallery-sm-menu-base.js", 39);
var EVT_ENABLE = 'enable';

/**
Fired when a menu item is hidden.

@event hide
@param {Menu.Item} item Menu item that was hidden.
@preventable _defHideFn
**/
_yuitest_coverline("build/gallery-sm-menu-base/gallery-sm-menu-base.js", 48);
var EVT_HIDE = 'hide';

/**
Fired when a menu item is shown.

@event show
@param {Menu.Item} item Menu item that was shown.
@preventable _defShowFn
**/
_yuitest_coverline("build/gallery-sm-menu-base/gallery-sm-menu-base.js", 57);
var EVT_SHOW = 'show';

_yuitest_coverline("build/gallery-sm-menu-base/gallery-sm-menu-base.js", 59);
var MenuBase = Y.Base.create('menuBase', Y.Tree, [Y.Tree.Labelable, Y.Tree.Openable], {
    nodeClass: Y.Menu.Item,

    // -- Lifecycle ------------------------------------------------------------
    initializer: function (config) {
        _yuitest_coverfunc("build/gallery-sm-menu-base/gallery-sm-menu-base.js", "initializer", 63);
_yuitest_coverline("build/gallery-sm-menu-base/gallery-sm-menu-base.js", 64);
if (config) {
            _yuitest_coverline("build/gallery-sm-menu-base/gallery-sm-menu-base.js", 65);
config.nodes = config.items;
        }
    },

    // -- Public Methods -------------------------------------------------------

    /**
    Closes all open submenus of this menu.

    @method closeSubMenus
    @chainable
    **/
    closeSubMenus: function () {
        // Close all open submenus.
        _yuitest_coverfunc("build/gallery-sm-menu-base/gallery-sm-menu-base.js", "closeSubMenus", 77);
_yuitest_coverline("build/gallery-sm-menu-base/gallery-sm-menu-base.js", 79);
Y.Object.each(this._openMenus, function (item) {
            _yuitest_coverfunc("build/gallery-sm-menu-base/gallery-sm-menu-base.js", "(anonymous 2)", 79);
_yuitest_coverline("build/gallery-sm-menu-base/gallery-sm-menu-base.js", 80);
item.close();
        }, this);

        _yuitest_coverline("build/gallery-sm-menu-base/gallery-sm-menu-base.js", 83);
return this;
    },

    /**
    Disables the specified menu item.

    @method disableItem
    @param {Menu.Item} item Menu item to disable.
    @param {Object} [options] Options.
        @param {Boolean} [options.silent=false] If `true`, the `disable` event
            will be suppressed.
    @chainable
    **/
    disableItem: function (item, options) {
        _yuitest_coverfunc("build/gallery-sm-menu-base/gallery-sm-menu-base.js", "disableItem", 96);
_yuitest_coverline("build/gallery-sm-menu-base/gallery-sm-menu-base.js", 97);
if (!item.isDisabled()) {
            _yuitest_coverline("build/gallery-sm-menu-base/gallery-sm-menu-base.js", 98);
this._fireTreeEvent(EVT_DISABLE, {item: item}, {
                defaultFn: this._defDisableFn,
                silent   : options && options.silent
            });
        }

        _yuitest_coverline("build/gallery-sm-menu-base/gallery-sm-menu-base.js", 104);
return this;
    },

    /**
    Enables the specified menu item.

    @method enableItem
    @param {Menu.Item} item Menu item to enable.
    @param {Object} [options] Options.
        @param {Boolean} [options.silent=false] If `true`, the `enable` event
            will be suppressed.
    @chainable
    **/
    enableItem: function (item, options) {
        _yuitest_coverfunc("build/gallery-sm-menu-base/gallery-sm-menu-base.js", "enableItem", 117);
_yuitest_coverline("build/gallery-sm-menu-base/gallery-sm-menu-base.js", 118);
if (item.isDisabled()) {
            _yuitest_coverline("build/gallery-sm-menu-base/gallery-sm-menu-base.js", 119);
this._fireTreeEvent(EVT_ENABLE, {item: item}, {
                defaultFn: this._defEnableFn,
                silent   : options && options.silent
            });
        }

        _yuitest_coverline("build/gallery-sm-menu-base/gallery-sm-menu-base.js", 125);
return this;
    },

    /**
    Hides the specified menu item.

    @method hideItem
    @param {Menu.Item} item Menu item to hide.
    @param {Object} [options] Options.
        @param {Boolean} [options.silent=false] If `true`, the `hide` event
            will be suppressed.
    @chainable
    **/
    hideItem: function (item, options) {
        _yuitest_coverfunc("build/gallery-sm-menu-base/gallery-sm-menu-base.js", "hideItem", 138);
_yuitest_coverline("build/gallery-sm-menu-base/gallery-sm-menu-base.js", 139);
if (!item.isHidden()) {
            _yuitest_coverline("build/gallery-sm-menu-base/gallery-sm-menu-base.js", 140);
this._fireTreeEvent(EVT_HIDE, {item: item}, {
                defaultFn: this._defHideFn,
                silent   : options && options.silent
            });
        }

        _yuitest_coverline("build/gallery-sm-menu-base/gallery-sm-menu-base.js", 146);
return this;
    },

    /**
    Shows the specified menu item.

    @method showItem
    @param {Menu.Item} item Menu item to show.
    @param {Object} [options] Options.
        @param {Boolean} [options.silent=false] If `true`, the `show` event
            will be suppressed.
    @chainable
    **/
    showItem: function (item, options) {
        _yuitest_coverfunc("build/gallery-sm-menu-base/gallery-sm-menu-base.js", "showItem", 159);
_yuitest_coverline("build/gallery-sm-menu-base/gallery-sm-menu-base.js", 160);
if (item.isHidden()) {
            _yuitest_coverline("build/gallery-sm-menu-base/gallery-sm-menu-base.js", 161);
this._fireTreeEvent(EVT_SHOW, {item: item}, {
                defaultFn: this._defShowFn,
                silent   : options && options.silent
            });
        }

        _yuitest_coverline("build/gallery-sm-menu-base/gallery-sm-menu-base.js", 167);
return this;
    },

    // -- Default Event Handlers -----------------------------------------------

    /**
    Default handler for the `disable` event.

    @method _defDisableFn
    @param {EventFacade} e
    @protected
    **/
    _defDisableFn: function (e) {
        _yuitest_coverfunc("build/gallery-sm-menu-base/gallery-sm-menu-base.js", "_defDisableFn", 179);
_yuitest_coverline("build/gallery-sm-menu-base/gallery-sm-menu-base.js", 180);
e.item.state.disabled = true;
    },

    /**
    Default handler for the `enable` event.

    @method _defEnableFn
    @param {EventFacade} e
    @protected
    **/
    _defEnableFn: function (e) {
        _yuitest_coverfunc("build/gallery-sm-menu-base/gallery-sm-menu-base.js", "_defEnableFn", 190);
_yuitest_coverline("build/gallery-sm-menu-base/gallery-sm-menu-base.js", 191);
delete e.item.state.disabled;
    },

    /**
    Default handler for the `hide` event.

    @method _defHideFn
    @param {EventFacade} e
    @protected
    **/
    _defHideFn: function (e) {
        _yuitest_coverfunc("build/gallery-sm-menu-base/gallery-sm-menu-base.js", "_defHideFn", 201);
_yuitest_coverline("build/gallery-sm-menu-base/gallery-sm-menu-base.js", 202);
e.item.state.hidden = true;
    },

    /**
    Default handler for the `show` event.

    @method _defShowFn
    @param {EventFacade} e
    @protected
    **/
    _defShowFn: function (e) {
        _yuitest_coverfunc("build/gallery-sm-menu-base/gallery-sm-menu-base.js", "_defShowFn", 212);
_yuitest_coverline("build/gallery-sm-menu-base/gallery-sm-menu-base.js", 213);
delete e.item.state.hidden;
    }
});

_yuitest_coverline("build/gallery-sm-menu-base/gallery-sm-menu-base.js", 217);
Y.namespace('Menu').Base = MenuBase;


}, '@VERSION@', {"requires": ["gallery-sm-menu-item", "tree-labelable", "tree-openable"]});
