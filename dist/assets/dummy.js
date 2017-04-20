"use strict";



define('dummy/app', ['exports', 'ember', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _ember, _dummyResolver, _emberLoadInitializers, _dummyConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix,
    Resolver: _dummyResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _dummyConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('dummy/components/sliding-sticky', ['exports', 'ember-sliding-sticky/component'], function (exports, _emberSlidingStickyComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberSlidingStickyComponent['default'];
    }
  });
});
define('dummy/ember-sliding-sticky/tests/ember-sliding-sticky/component.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - ember-sliding-sticky/component.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-sliding-sticky/component.js should pass ESLint.\n');
  });
});
define('dummy/ember-sliding-sticky/tests/ember-sliding-sticky/mixin.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - ember-sliding-sticky/mixin.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'ember-sliding-sticky/mixin.js should pass ESLint.\n3:19  - \'reads\' is defined but never used. (no-unused-vars)');
  });
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_dummyConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _dummyConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_dummyConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define("dummy/pods/application/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "oXbf33Vd", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"ember-sliding-sticky demo\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"https://github.com/Deveo/ember-sliding-sticky/\"],[\"flush-element\"],[\"text\",\"\\n  GitHub\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"block\",[\"link-to\"],[\"index\"],null,3],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"block\",[\"link-to\"],[\"container-animation\"],null,2],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"block\",[\"link-to\"],[\"window\"],null,1],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"block\",[\"link-to\"],[\"window-animation\"],null,0],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Window scrolling, animated\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Window scrolling, fixed\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Custom container scrolling, animated\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Custom container scrolling, fixed\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/application/template.hbs" } });
});
define("dummy/pods/container-animation/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "EMknCxK/", "block": "{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"https://github.com/Deveo/ember-sliding-sticky/blob/gen-1/tests/dummy/app/pods/container-animation/template.hbs\"],[\"flush-element\"],[\"text\",\"Source of this page\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"scroll-container\"],[\"static-attr\",\"class\",\"animation\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"scroll-header\"],[\"flush-element\"],[\"text\",\"Scroll 🡳\"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"content\"],[\"static-attr\",\"id\",\"the-content\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"sliding-sticky\"],null,[[\"class\",\"slidingStickyScrollParent\",\"slidingStickyThrottleDuration\"],[\"item foo\",\"#scroll-container\",100]],1],[\"text\",\"\\n\\n\"],[\"block\",[\"sliding-sticky\"],null,[[\"class\",\"slidingStickyScrollParent\",\"slidingStickyThrottleDuration\"],[\"item bar\",\"#scroll-container\",100]],0],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"item baz\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Baz\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Bar\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Foo\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/container-animation/template.hbs" } });
});
define("dummy/pods/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "TgkV+IjQ", "block": "{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"https://github.com/Deveo/ember-sliding-sticky/blob/gen-1/tests/dummy/app/pods/index/template.hbs\"],[\"flush-element\"],[\"text\",\"Source of this page\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"scroll-container\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"scroll-header\"],[\"flush-element\"],[\"text\",\"Scroll 🡳\"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"content\"],[\"static-attr\",\"id\",\"the-content\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"sliding-sticky\"],null,[[\"class\",\"slidingStickyScrollParent\"],[\"item foo\",\"#scroll-container\"]],1],[\"text\",\"\\n\\n\"],[\"block\",[\"sliding-sticky\"],null,[[\"class\",\"slidingStickyScrollParent\"],[\"item bar\",\"#scroll-container\"]],0],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"item baz\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Baz\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Bar\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Foo\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/index/template.hbs" } });
});
define("dummy/pods/window-animation/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "71xWaJgr", "block": "{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"https://github.com/Deveo/ember-sliding-sticky/blob/gen-1/tests/dummy/app/pods/window-animation/template.hbs\"],[\"flush-element\"],[\"text\",\"Source of this page\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"scroll-header\"],[\"flush-element\"],[\"text\",\"Scroll 🡳\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"animation\"],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"content\"],[\"static-attr\",\"id\",\"the-content\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"sliding-sticky\"],null,[[\"class\",\"id\"],[\"item foo\",\"sliding-sticky-1\"]],1],[\"text\",\"\\n\\n\"],[\"block\",[\"sliding-sticky\"],null,[[\"class\",\"id\"],[\"item bar\",\"sliding-sticky-2\"]],0],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"item baz\"],[\"static-attr\",\"id\",\"static-item\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Baz\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Bar\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Foo\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/window-animation/template.hbs" } });
});
define("dummy/pods/window/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "klkFL/ag", "block": "{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"https://github.com/Deveo/ember-sliding-sticky/blob/gen-1/tests/dummy/app/pods/window/template.hbs\"],[\"flush-element\"],[\"text\",\"Source of this page\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"scroll-header\"],[\"flush-element\"],[\"text\",\"Scroll 🡳\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"content\"],[\"static-attr\",\"id\",\"the-content\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"sliding-sticky\"],null,[[\"class\",\"id\"],[\"item foo\",\"sliding-sticky-1\"]],1],[\"text\",\"\\n\\n\"],[\"block\",[\"sliding-sticky\"],null,[[\"class\",\"id\"],[\"item bar\",\"sliding-sticky-2\"]],0],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"item baz\"],[\"static-attr\",\"id\",\"static-item\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Baz\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Bar\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Foo\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/window/template.hbs" } });
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _dummyConfigEnvironment['default'].locationType,
    rootURL: _dummyConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('container-animation');
    this.route('window');
    this.route('window-animation');
  });

  exports['default'] = Router;
});
define('dummy/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});


define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("dummy/app")["default"].create({});
}
//# sourceMappingURL=dummy.map
