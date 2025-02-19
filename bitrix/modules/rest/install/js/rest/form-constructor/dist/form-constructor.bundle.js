/* eslint-disable */
this.BX = this.BX || {};
(function (exports,ui_stepbystep,main_core,main_core_events) {
	'use strict';

	var BaseField = /*#__PURE__*/function (_EventEmitter) {
	  babelHelpers.inherits(BaseField, _EventEmitter);
	  function BaseField(options) {
	    var _this;
	    babelHelpers.classCallCheck(this, BaseField);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(BaseField).call(this));
	    _this.setEventNamespace('BX.Rest.EInvoice.Field');
	    _this.options = options;
	    _this.value = _this.options.value;
	    _this.readySave = !(main_core.Type.isNil(_this.value) || _this.value === '');
	    _this.options.id = main_core.Type.isStringFilled(_this.options.id) ? _this.options.id : main_core.Text.getRandom(8);
	    return _this;
	  }
	  babelHelpers.createClass(BaseField, [{
	    key: "getId",
	    value: function getId() {
	      return this.options.id;
	    }
	  }, {
	    key: "getName",
	    value: function getName() {
	      return this.options.name;
	    }
	  }, {
	    key: "getContent",
	    value: function getContent() {
	      throw new Error('Must be implemented in a child class');
	    }
	  }, {
	    key: "isReadySave",
	    value: function isReadySave() {
	      return this.readySave;
	    }
	  }, {
	    key: "getValue",
	    value: function getValue() {
	      return this.value;
	    }
	  }]);
	  return BaseField;
	}(main_core_events.EventEmitter);

	var _templateObject, _templateObject2, _templateObject3;
	var DropdownList = /*#__PURE__*/function (_BaseField) {
	  babelHelpers.inherits(DropdownList, _BaseField);
	  function DropdownList(options) {
	    var _this;
	    babelHelpers.classCallCheck(this, DropdownList);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(DropdownList).call(this, options));
	    _this.readySave = true;
	    return _this;
	  }
	  babelHelpers.createClass(DropdownList, [{
	    key: "getContent",
	    value: function getContent() {
	      var _this2 = this;
	      var wrapper = main_core.Tag.render(_templateObject || (_templateObject = babelHelpers.taggedTemplateLiteral(["\n\t\t\t<div class=\"ui-ctl ui-ctl-after-icon ui-ctl-dropdown\">\n\t\t\t\t<div class=\"ui-ctl-after ui-ctl-icon-angle\"></div>\n\t\t\t</div>\n\t\t"])));
	      if (main_core.Type.isArray(this.options.items)) {
	        var _this$options$items$;
	        var itemsWrapper = main_core.Tag.render(_templateObject2 || (_templateObject2 = babelHelpers.taggedTemplateLiteral(["\n\t\t\t\t<select class=\"ui-ctl-element\" id=\"", "\" />\n\t\t\t"])), this.getId());
	        this.options.items.forEach(function (item) {
	          var itemElement = main_core.Tag.render(_templateObject3 || (_templateObject3 = babelHelpers.taggedTemplateLiteral(["\n\t\t\t\t\t<option value=\"", "\">", "</option>\n\t\t\t\t"])), item.value, item.name);
	          if (_this2.options.value === item.value) {
	            main_core.Dom.attr(itemElement, {
	              selected: true
	            });
	          }
	          main_core.Dom.append(itemElement, itemsWrapper);
	        });
	        this.value = (_this$options$items$ = this.options.items[0].value) !== null && _this$options$items$ !== void 0 ? _this$options$items$ : null;
	        main_core.Dom.append(itemsWrapper, wrapper);
	        if (this.options.hasOwnProperty('updateForm') && this.options.updateForm) {
	          main_core.Event.bind(itemsWrapper, 'change', function (event) {
	            _this2.value = event.target.value;
	            _this2.emit('onFieldChange', {
	              target: event.target,
	              field: _this2
	            });
	          });
	        }
	      }
	      return wrapper;
	    }
	  }]);
	  return DropdownList;
	}(BaseField);

	var _templateObject$1, _templateObject2$1, _templateObject3$1, _templateObject4;
	function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
	function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
	function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
	function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
	var _errorBlock = /*#__PURE__*/new WeakMap();
	var _getErrorBlock = /*#__PURE__*/new WeakSet();
	var Input = /*#__PURE__*/function (_BaseField) {
	  babelHelpers.inherits(Input, _BaseField);
	  function Input() {
	    var _babelHelpers$getProt;
	    var _this;
	    babelHelpers.classCallCheck(this, Input);
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	    _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(Input)).call.apply(_babelHelpers$getProt, [this].concat(args)));
	    _classPrivateMethodInitSpec(babelHelpers.assertThisInitialized(_this), _getErrorBlock);
	    _classPrivateFieldInitSpec(babelHelpers.assertThisInitialized(_this), _errorBlock, {
	      writable: true,
	      value: void 0
	    });
	    return _this;
	  }
	  babelHelpers.createClass(Input, [{
	    key: "getContent",
	    value: function getContent() {
	      var _this2 = this;
	      var wrapper = main_core.Tag.render(_templateObject$1 || (_templateObject$1 = babelHelpers.taggedTemplateLiteral(["\n\t\t\t<div class=\"ui-ctl-container\"/>\n\t\t"])));
	      if (this.options.label) {
	        var inputTitle = main_core.Tag.render(_templateObject2$1 || (_templateObject2$1 = babelHelpers.taggedTemplateLiteral(["\n\t\t\t\t<div class=\"ui-ctl-top\">\n\t\t\t\t\t<div class=\"ui-ctl-title\">", "</div>\n\t\t\t\t</div>\n\t\t\t"])), this.options.label);
	        main_core.Dom.append(inputTitle, wrapper);
	      }
	      var input = main_core.Tag.render(_templateObject3$1 || (_templateObject3$1 = babelHelpers.taggedTemplateLiteral(["\n\t\t\t\t<div class=\"ui-ctl ui-ctl-textbox\">\n\t\t\t\t\t<input type=\"text\" id=\"", "\" class=\"ui-ctl-element\">\n\t\t\t\t</div>\n\t\t"])), this.getId());
	      var inputElement = input.querySelector('input');
	      if (this.options.placeholder) {
	        main_core.Dom.attr(inputElement, {
	          placeholder: this.options.placeholder
	        });
	      }
	      if (this.options.value) {
	        main_core.Dom.attr(inputElement, {
	          value: this.options.value
	        });
	      }
	      main_core.Event.bind(inputElement, 'input', function (event) {
	        main_core.Dom.hide(_classPrivateMethodGet(_this2, _getErrorBlock, _getErrorBlock2).call(_this2));
	        if (main_core.Dom.hasClass(wrapper, 'ui-ctl-warning')) {
	          main_core.Dom.removeClass(wrapper, 'ui-ctl-warning');
	        }
	        if (main_core.Type.isNil(event.target.value) || event.target.value === '') {
	          _this2.emit('onUnreadySave');
	          _this2.readySave = false;
	        } else {
	          _this2.emit('onReadySave');
	          _this2.readySave = true;
	        }
	        _this2.value = event.target.value;
	      });
	      main_core.Dom.append(input, wrapper);
	      main_core.Dom.append(_classPrivateMethodGet(this, _getErrorBlock, _getErrorBlock2).call(this), wrapper);
	      main_core.Dom.hide(_classPrivateMethodGet(this, _getErrorBlock, _getErrorBlock2).call(this));
	      this.subscribe('error', function (event) {
	        var messages = event.data.messages;
	        _classPrivateMethodGet(_this2, _getErrorBlock, _getErrorBlock2).call(_this2).innerHTML = main_core.Type.isArray(messages) ? messages.join('<br>') : messages;
	        main_core.Dom.show(_classPrivateMethodGet(_this2, _getErrorBlock, _getErrorBlock2).call(_this2));
	        if (!main_core.Dom.hasClass(wrapper, 'ui-ctl-warning')) {
	          main_core.Dom.addClass(wrapper, 'ui-ctl-warning');
	        }
	      });
	      return wrapper;
	    }
	  }]);
	  return Input;
	}(BaseField);
	function _getErrorBlock2() {
	  if (!babelHelpers.classPrivateFieldGet(this, _errorBlock)) {
	    babelHelpers.classPrivateFieldSet(this, _errorBlock, main_core.Tag.render(_templateObject4 || (_templateObject4 = babelHelpers.taggedTemplateLiteral(["\n\t\t\t\t<div class=\"ui-ctl-bottom bitrix-einvoice-error-block\"></div>\n\t\t\t"]))));
	  }
	  return babelHelpers.classPrivateFieldGet(this, _errorBlock);
	}

	var _templateObject$2, _templateObject2$2, _templateObject3$2, _templateObject4$1;
	function _classPrivateMethodInitSpec$1(obj, privateSet) { _checkPrivateRedeclaration$1(obj, privateSet); privateSet.add(obj); }
	function _classPrivateFieldInitSpec$1(obj, privateMap, value) { _checkPrivateRedeclaration$1(obj, privateMap); privateMap.set(obj, value); }
	function _checkPrivateRedeclaration$1(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
	function _classPrivateMethodGet$1(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
	var _options = /*#__PURE__*/new WeakMap();
	var _fields = /*#__PURE__*/new WeakMap();
	var _stepByStep = /*#__PURE__*/new WeakMap();
	var _getContentConfig = /*#__PURE__*/new WeakSet();
	var _getStepContent = /*#__PURE__*/new WeakSet();
	var _onClickSaveBtn = /*#__PURE__*/new WeakSet();
	var FormConstructor = /*#__PURE__*/function (_EventEmitter) {
	  babelHelpers.inherits(FormConstructor, _EventEmitter);
	  function FormConstructor(options) {
	    var _this;
	    babelHelpers.classCallCheck(this, FormConstructor);
	    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(FormConstructor).call(this));
	    _classPrivateMethodInitSpec$1(babelHelpers.assertThisInitialized(_this), _onClickSaveBtn);
	    _classPrivateMethodInitSpec$1(babelHelpers.assertThisInitialized(_this), _getStepContent);
	    _classPrivateMethodInitSpec$1(babelHelpers.assertThisInitialized(_this), _getContentConfig);
	    _classPrivateFieldInitSpec$1(babelHelpers.assertThisInitialized(_this), _options, {
	      writable: true,
	      value: void 0
	    });
	    _classPrivateFieldInitSpec$1(babelHelpers.assertThisInitialized(_this), _fields, {
	      writable: true,
	      value: void 0
	    });
	    _classPrivateFieldInitSpec$1(babelHelpers.assertThisInitialized(_this), _stepByStep, {
	      writable: true,
	      value: void 0
	    });
	    _this.setEventNamespace('BX.Rest.EInvoice');
	    if (!main_core.Type.isArray(options.steps)) {
	      throw new Error('Unexpected property type  "steps", expected type array');
	    }
	    babelHelpers.classPrivateFieldSet(babelHelpers.assertThisInitialized(_this), _options, options);
	    babelHelpers.classPrivateFieldSet(babelHelpers.assertThisInitialized(_this), _fields, []);
	    babelHelpers.classPrivateFieldSet(babelHelpers.assertThisInitialized(_this), _stepByStep, new ui_stepbystep.StepByStep({
	      content: _classPrivateMethodGet$1(babelHelpers.assertThisInitialized(_this), _getContentConfig, _getContentConfig2).call(babelHelpers.assertThisInitialized(_this))
	    }));
	    main_core_events.EventEmitter.subscribe(main_core_events.EventEmitter.GLOBAL_TARGET, 'button-click', function (event) {
	      var _event$data = babelHelpers.slicedToArray(event.data, 1),
	        clickedBtn = _event$data[0];
	      if (clickedBtn.TYPE === 'save') {
	        _classPrivateMethodGet$1(babelHelpers.assertThisInitialized(_this), _onClickSaveBtn, _onClickSaveBtn2).call(babelHelpers.assertThisInitialized(_this), event);
	      }
	    });
	    return _this;
	  }
	  babelHelpers.createClass(FormConstructor, [{
	    key: "getFields",
	    value: function getFields() {
	      return babelHelpers.classPrivateFieldGet(this, _fields);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return babelHelpers.classPrivateFieldGet(this, _stepByStep).getContentWrapper();
	    }
	  }, {
	    key: "renderTo",
	    value: function renderTo(target) {
	      babelHelpers.classPrivateFieldGet(this, _stepByStep).target = target;
	      babelHelpers.classPrivateFieldGet(this, _stepByStep).init();
	    }
	  }, {
	    key: "getFormData",
	    value: function getFormData() {
	      var result = {};
	      babelHelpers.classPrivateFieldGet(this, _fields).forEach(function (field) {
	        if (field.isReadySave()) {
	          result[field.getName()] = field.getValue();
	        }
	      });
	      return result;
	    }
	    /*
	    errors = {
	    	fieldName: ['error message']
	    }
	     */
	  }, {
	    key: "showFieldErrors",
	    value: function showFieldErrors(errors) {
	      var _this2 = this;
	      var _loop = function _loop() {
	        var _Object$entries$_i = babelHelpers.slicedToArray(_Object$entries[_i], 2),
	          fieldName = _Object$entries$_i[0],
	          messages = _Object$entries$_i[1];
	        babelHelpers.classPrivateFieldGet(_this2, _fields).forEach(function (field) {
	          if (field.getName() === fieldName) {
	            field.emit('error', new main_core_events.BaseEvent({
	              data: {
	                messages: messages
	              }
	            }));
	          }
	        });
	      };
	      for (var _i = 0, _Object$entries = Object.entries(errors); _i < _Object$entries.length; _i++) {
	        _loop();
	      }
	    }
	  }, {
	    key: "showTextInBalloon",
	    value: function showTextInBalloon(text) {
	      BX.UI.Notification.Center.notify({
	        id: 'einvoice-error-save-settings',
	        content: main_core.Tag.render(_templateObject$2 || (_templateObject$2 = babelHelpers.taggedTemplateLiteral(["\n\t\t\t\t\t\t<div class=\"bitrix-einvoice-settings-notification-wrapper\">\n\t\t\t\t\t\t\t<span class=\"ui-icon-set --warning\"></span>\n\t\t\t\t\t\t\t", "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t"])), text),
	        autoHideDelay: 5000
	      });
	    }
	  }]);
	  return FormConstructor;
	}(main_core_events.EventEmitter);
	function _getContentConfig2() {
	  var _this3 = this;
	  var contentConfig = [];
	  babelHelpers.classPrivateFieldGet(this, _options).steps.forEach(function (item) {
	    var stepConfig = {
	      html: [{
	        backgroundColor: '#ffffff'
	      }]
	    };
	    if (item.title) {
	      stepConfig.html[0].header = {
	        title: item.title
	      };
	    }
	    stepConfig.html[0].node = _classPrivateMethodGet$1(_this3, _getStepContent, _getStepContent2).call(_this3, item);
	    contentConfig.push(stepConfig);
	  });
	  return contentConfig;
	}
	function _getStepContent2(stepConfig) {
	  var _this4 = this;
	  var wrapper = main_core.Tag.render(_templateObject2$2 || (_templateObject2$2 = babelHelpers.taggedTemplateLiteral(["\n\t\t\t<div class=\"bitrix-einvoice-settings-step__wrapper\"></div>\n\t\t"])));
	  if (stepConfig.description) {
	    var description = main_core.Tag.render(_templateObject3$2 || (_templateObject3$2 = babelHelpers.taggedTemplateLiteral(["\n\t\t\t\t<div class=\"bitrix-einvoice-settings-step__description\">", "</div>\n\t\t\t"])), stepConfig.description);
	    main_core.Dom.append(description, wrapper);
	  }
	  if (stepConfig.fields) {
	    stepConfig.fields.forEach(function (fieldConfig, index) {
	      var field;
	      switch (fieldConfig.type) {
	        case 'input':
	          field = new Input(fieldConfig);
	          break;
	        case 'dropdown-list':
	          field = new DropdownList(fieldConfig);
	          break;
	        default:
	          throw new Error('Incorrect field type');
	      }
	      if (field instanceof BaseField) {
	        field.subscribe('onReadySave', function () {
	          _this4.emit('onReadySave');
	        });
	        field.subscribe('onUnreadySave', function () {
	          _this4.emit('onUnreadySave');
	        });
	        field.subscribe('onFieldChange', function (event) {
	          _this4.emit('onFieldChange', event);
	        });
	        babelHelpers.classPrivateFieldGet(_this4, _fields).push(field);
	        var fieldContent = field.getContent();
	        main_core.Dom.append(fieldContent, wrapper);
	        if (index > 0) {
	          main_core.Dom.style(fieldContent, 'margin-top', '12px');
	        }
	      }
	    });
	  }
	  if (stepConfig.link && stepConfig.link.url.startsWith('https://')) {
	    var linkArticle = main_core.Tag.render(_templateObject4$1 || (_templateObject4$1 = babelHelpers.taggedTemplateLiteral(["\n\t\t\t\t<div class=\"bitrix-einvoice-settings-step-wrapper-link\">\n\t\t\t\t\t<a href=\"", "\" class=\"bitrix-einvoice-settings-step__link\">", "</a>\n\t\t\t\t</div>\n\t\t\t"])), stepConfig.link.url, main_core.Text.encode(stepConfig.link.name));
	    main_core.Dom.append(linkArticle, wrapper);
	  }
	  return wrapper;
	}
	function _onClickSaveBtn2() {
	  this.emit('onSave', {
	    form: this.getFormData()
	  });
	}

	exports.FormConstructor = FormConstructor;

}((this.BX.Rest = this.BX.Rest || {}),BX.UI,BX,BX.Event));
//# sourceMappingURL=form-constructor.bundle.js.map
