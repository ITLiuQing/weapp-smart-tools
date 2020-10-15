var regeneratorRuntime = require('./libs/regeneratorRuntime');
! function (e, t) {
  if ("object" == typeof exports && "object" == typeof module) module.exports = t();
  else if ("function" == typeof define && define.amd) define([], t);
  else {
    var r = t();
    for (var n in r)("object" == typeof exports ? exports : e)[n] = r[n]
  }
}(window, (function () {
  return function (e) {
    var t = {};

    function r(n) {
      if (t[n]) return t[n].exports;
      var o = t[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    return r.m = e, r.c = t, r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: n
      })
    }, r.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      })
    }, r.t = function (e, t) {
      if (1 & t && (e = r(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (r.r(n), Object.defineProperty(n, "default", {
          enumerable: !0,
          value: e
        }), 2 & t && "string" != typeof e)
        for (var o in e) r.d(n, o, function (t) {
          return e[t]
        }.bind(null, o));
      return n
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default
      } : function () {
        return e
      };
      return r.d(t, "a", t), t
    }, r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 22)
  }([function (e, t) {
    e.exports = function (e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e
    }
  }, function (e, t) {
    e.exports = function (e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }
  }, function (e, t) {
    e.exports = function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
  }, function (e, t) {
    function r(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
      }
    }
    e.exports = function (e, t, n) {
      return t && r(e.prototype, t), n && r(e, n), e
    }
  }, function (e, t, r) {
    "use strict";
    r.r(t), r.d(t, "__extends", (function () {
      return o
    })), r.d(t, "__assign", (function () {
      return i
    })), r.d(t, "__rest", (function () {
      return s
    })), r.d(t, "__decorate", (function () {
      return a
    })), r.d(t, "__param", (function () {
      return c
    })), r.d(t, "__metadata", (function () {
      return u
    })), r.d(t, "__awaiter", (function () {
      return l
    })), r.d(t, "__generator", (function () {
      return f
    })), r.d(t, "__exportStar", (function () {
      return d
    })), r.d(t, "__values", (function () {
      return h
    })), r.d(t, "__read", (function () {
      return p
    })), r.d(t, "__spread", (function () {
      return _
    })), r.d(t, "__spreadArrays", (function () {
      return g
    })), r.d(t, "__await", (function () {
      return v
    })), r.d(t, "__asyncGenerator", (function () {
      return m
    })), r.d(t, "__asyncDelegator", (function () {
      return y
    })), r.d(t, "__asyncValues", (function () {
      return C
    })), r.d(t, "__makeTemplateObject", (function () {
      return E
    })), r.d(t, "__importStar", (function () {
      return T
    })), r.d(t, "__importDefault", (function () {
      return S
    }));
    var n = function (e, t) {
      return (n = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function (e, t) {
          e.__proto__ = t
        } || function (e, t) {
          for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
        })(e, t)
    };

    function o(e, t) {
      function r() {
        this.constructor = e
      }
      n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }
    var i = function () {
      return (i = Object.assign || function (e) {
        for (var t, r = 1, n = arguments.length; r < n; r++)
          for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e
      }).apply(this, arguments)
    };

    function s(e, t) {
      var r = {};
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var o = 0;
        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
      }
      return r
    }

    function a(e, t, r, n) {
      var o, i = arguments.length,
        s = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
      else
        for (var a = e.length - 1; a >= 0; a--)(o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
      return i > 3 && s && Object.defineProperty(t, r, s), s
    }

    function c(e, t) {
      return function (r, n) {
        t(r, n, e)
      }
    }

    function u(e, t) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    }

    function l(e, t, r, n) {
      return new(r || (r = Promise))((function (o, i) {
        function s(e) {
          try {
            c(n.next(e))
          } catch (e) {
            i(e)
          }
        }

        function a(e) {
          try {
            c(n.throw(e))
          } catch (e) {
            i(e)
          }
        }

        function c(e) {
          e.done ? o(e.value) : new r((function (t) {
            t(e.value)
          })).then(s, a)
        }
        c((n = n.apply(e, t || [])).next())
      }))
    }

    function f(e, t) {
      var r, n, o, i, s = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1];
          return o[1]
        },
        trys: [],
        ops: []
      };
      return i = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
        return this
      }), i;

      function a(i) {
        return function (a) {
          return function (i) {
            if (r) throw new TypeError("Generator is already executing.");
            for (; s;) try {
              if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
              switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                case 0:
                case 1:
                  o = i;
                  break;
                case 4:
                  return s.label++, {
                    value: i[1],
                    done: !1
                  };
                case 5:
                  s.label++, n = i[1], i = [0];
                  continue;
                case 7:
                  i = s.ops.pop(), s.trys.pop();
                  continue;
                default:
                  if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    s = 0;
                    continue
                  }
                  if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    s.label = i[1];
                    break
                  }
                  if (6 === i[0] && s.label < o[1]) {
                    s.label = o[1], o = i;
                    break
                  }
                  if (o && s.label < o[2]) {
                    s.label = o[2], s.ops.push(i);
                    break
                  }
                  o[2] && s.ops.pop(), s.trys.pop();
                  continue
              }
              i = t.call(e, s)
            } catch (e) {
              i = [6, e], n = 0
            } finally {
              r = o = 0
            }
            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            }
          }([i, a])
        }
      }
    }

    function d(e, t) {
      for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r])
    }

    function h(e) {
      var t = "function" == typeof Symbol && e[Symbol.iterator],
        r = 0;
      return t ? t.call(e) : {
        next: function () {
          return e && r >= e.length && (e = void 0), {
            value: e && e[r++],
            done: !e
          }
        }
      }
    }

    function p(e, t) {
      var r = "function" == typeof Symbol && e[Symbol.iterator];
      if (!r) return e;
      var n, o, i = r.call(e),
        s = [];
      try {
        for (;
          (void 0 === t || t-- > 0) && !(n = i.next()).done;) s.push(n.value)
      } catch (e) {
        o = {
          error: e
        }
      } finally {
        try {
          n && !n.done && (r = i.return) && r.call(i)
        } finally {
          if (o) throw o.error
        }
      }
      return s
    }

    function _() {
      for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(p(arguments[t]));
      return e
    }

    function g() {
      for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
      var n = Array(e),
        o = 0;
      for (t = 0; t < r; t++)
        for (var i = arguments[t], s = 0, a = i.length; s < a; s++, o++) n[o] = i[s];
      return n
    }

    function v(e) {
      return this instanceof v ? (this.v = e, this) : new v(e)
    }

    function m(e, t, r) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n, o = r.apply(e, t || []),
        i = [];
      return n = {}, s("next"), s("throw"), s("return"), n[Symbol.asyncIterator] = function () {
        return this
      }, n;

      function s(e) {
        o[e] && (n[e] = function (t) {
          return new Promise((function (r, n) {
            i.push([e, t, r, n]) > 1 || a(e, t)
          }))
        })
      }

      function a(e, t) {
        try {
          (r = o[e](t)).value instanceof v ? Promise.resolve(r.value.v).then(c, u) : l(i[0][2], r)
        } catch (e) {
          l(i[0][3], e)
        }
        var r
      }

      function c(e) {
        a("next", e)
      }

      function u(e) {
        a("throw", e)
      }

      function l(e, t) {
        e(t), i.shift(), i.length && a(i[0][0], i[0][1])
      }
    }

    function y(e) {
      var t, r;
      return t = {}, n("next"), n("throw", (function (e) {
        throw e
      })), n("return"), t[Symbol.iterator] = function () {
        return this
      }, t;

      function n(n, o) {
        t[n] = e[n] ? function (t) {
          return (r = !r) ? {
            value: v(e[n](t)),
            done: "return" === n
          } : o ? o(t) : t
        } : o
      }
    }

    function C(e) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var t, r = e[Symbol.asyncIterator];
      return r ? r.call(e) : (e = h(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function () {
        return this
      }, t);

      function n(r) {
        t[r] = e[r] && function (t) {
          return new Promise((function (n, o) {
            (function (e, t, r, n) {
              Promise.resolve(n).then((function (t) {
                e({
                  value: t,
                  done: r
                })
              }), t)
            })(n, o, (t = e[r](t)).done, t.value)
          }))
        }
      }
    }

    function E(e, t) {
      return Object.defineProperty ? Object.defineProperty(e, "raw", {
        value: t
      }) : e.raw = t, e
    }

    function T(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      return t.default = e, t
    }

    function S(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = r(4),
      o = r(7);
    t.appendParams = function (e, r) {
      void 0 === r && (r = {});
      var n = [];
      return Object.keys(r).forEach((function (e) {
        var o = r[e];
        if (void 0 !== o) {
          if (t.isPlainObject(o)) try {
            o = JSON.stringify(o)
          } catch (e) {}
          n.push(e + "=" + encodeURIComponent(o))
        }
      })), n.length ? (e.indexOf("?") > -1 ? e + "&" : e + "?") + n.join("&") : e
    }, t.delay = function (e) {
      return new Promise((function (t) {
        return setTimeout(t, e)
      }))
    }, t.genPromise = function () {
      var e, t;
      return {
        promise: new Promise((function (r, n) {
          e = r, t = n
        })),
        resolve: e,
        reject: t
      }
    }, t.noop = function () {}, t.getErrorMsg = function (e) {
      if (e) {
        var t = "";
        return "string" == typeof e ? e : (t = e.msg || e.Message || e.message || e.errMsg || "连接服务器失败，请稍后再试", e.reqId && (t += "(" + e.reqId + ")"), t || (t = "连接服务器失败，请稍后再试"), t)
      }
    }, t.isPlainObject = function (e) {
      if ("object" != (void 0 === e ? "undefined" : typeof e) || null === e) return !1;
      for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
      return Object.getPrototypeOf(e) === t
    }, t.hasModalShow = !1, t.showModal = function (e, r, i) {
      void 0 === r && (r = "");
      i.confirmText;
      var s = i.confirmColor,
        a = (void 0 === s && o.themeColorMap.primary, i.cancelText, i.cancelColor),
        c = (void 0 === a && o.themeColorMap.weak, n.__rest(i, ["confirmText", "confirmColor", "cancelText", "cancelColor"]));
      return wx.hideToast(), t.hasModalShow = !0, new Promise((function (o, i) {
        wx.showModal(n.__assign(n.__assign({
          title: e,
          content: r
        }, c), {
          success: function (e) {
            var t = e.confirm;
            o(!!t)
          },
          fail: function () {
            o(!1)
          },
          complete: function () {
            t.hasModalShow = !1
          }
        }))
      }))
    }
  }, function (e, t, r) {
    e.exports = r(46)
  }, function (e, t, r) {
    "use strict";
    var n, o, i, s, a, c;
    Object.defineProperty(t, "__esModule", {
        value: !0
      }),
      function (e) {
        e.Ready = "ready", e.Error = "error", e.WsError = "ws_error", e.WsClose = "ws_close", e.WsPush = "wsPush", e.WsReport = "wsReport", e.WsControl = "wsControl", e.WsStatusChange = "wsStatusChange"
      }(t.EventTypes || (t.EventTypes = {})),
      function (e) {
        e.WX_API_NEED_AUTH = "WX_API_NEED_AUTH", e.GET_USERINFO_NEED_AUTH = "GET_USERINFO_NEED_AUTH", e.WX_API_FAIL = "WX_API_FAIL", e.VERIFY_LOGIN_FAIL = "VERIFY_LOGIN_FAIL", e.INTERNAL_ERROR = "INTERNAL_ERROR"
      }(t.ErrorCode || (t.ErrorCode = {})),
      function (e) {
        e.UDP_NOT_RESPONSED = "UDP_NOT_RESPONSED", e.SSID_NOT_MATCH = "SSID_NOT_MATCH", e.CONNECT_SOFTAP_FAIL = "CONNECT_SOFTAP_FAIL", e.CONNECT_TARGET_WIFI_FAIL = "CONNECT_TARGET_WIFI_FAIL", e.UDP_ERROR = "UDP_ERROR", e.DEVICE_ERROR = "DEVICE_ERROR", e.INVALID_UDP_RESPONSE = "INVALID_UDP_RESPONSE", e.DEVICE_CONNECT_MQTT_FAIL = "DEVICE_CONNECT_MQTT_FAIL", e.DEVICE_CONNECT_WIFI_FAIL = "DEVICE_CONNECT_WIFI_FAIL", e.ADD_DEVICE_FAIL = "ADD_DEVICE_FAIL", e.SEND_UDP_MSG_FAIL = "SEND_UDP_MSG_FAIL", e.QUERY_BIND_TOKEN_TIMEOUT = "QUERY_BIND_TOKEN_TIMEOUT", e.QUERY_BIND_TOKEN_FAIL = "QUERY_BIND_TOKEN_FAIL", e.DEVICE_RESP_TIMOUT = "DEVICE_RESP_TIMOUT", e.CONNECT_DEVICE_ERROR = "CONNECT_DEVICE_ERROR", e.SMART_CONFIG_FAIL = "SMART_CONFIG_FAIL", e.SMART_CONFIG_TIMEOUT = "SMART_CONFIG_TIMEOUT", e.SMART_CONFIG_INVALID_RESPONSE = "SMART_CONFIG_INVALID_RESPONSE"
      }(a = t.ConnectDeviceErrorCode || (t.ConnectDeviceErrorCode = {})), t.SoftApErrorMsg = ((n = {})[a.UDP_NOT_RESPONSED] = "超时未收到设备响应", n[a.CONNECT_SOFTAP_FAIL] = "手机连接设备热点失败", n[a.CONNECT_TARGET_WIFI_FAIL] = "手机连接WiFi路由器失败", n[a.UDP_ERROR] = "连接设备失败", n[a.DEVICE_ERROR] = "设备配网异常", n[a.INVALID_UDP_RESPONSE] = "设备响应报文格式错误", n[a.DEVICE_CONNECT_MQTT_FAIL] = "连接云端失败", n[a.DEVICE_CONNECT_WIFI_FAIL] = "设备连接WiFi路由器失败", n[a.ADD_DEVICE_FAIL] = "添加设备失败", n[a.SEND_UDP_MSG_FAIL] = "发送配网消息失败", n[a.QUERY_BIND_TOKEN_TIMEOUT] = "设备配网失败，设备连接云端超时", n[a.QUERY_BIND_TOKEN_FAIL] = "查询设备连接云端状态失败", n), t.SmartConfigErrorMsg = Object.assign({}, t.SoftApErrorMsg, ((o = {})[a.DEVICE_RESP_TIMOUT] = "超时未收到设备响应", o[a.CONNECT_DEVICE_ERROR] = "连接设备失败", o[a.SMART_CONFIG_FAIL] = "SmartConfig配网失败", o[a.SMART_CONFIG_TIMEOUT] = "SmartConfig配网超时", o[a.SMART_CONFIG_INVALID_RESPONSE] = "SmartConfig响应非法", o)),
      function (e) {
        e.CONNECT_DEVICE_START = "CONNECT_DEVICE_START", e.CONNECT_SOFTAP_START = "CONNECT_SOFTAP_START", e.CONNECT_SOFTAP_SUCCESS = "CONNECT_SOFTAP_SUCCESS", e.CONNECT_SMARTCONFIG_START = "CONNECT_SMARTCONFIG_START", e.CONNECT_SMARTCONFIG_SUCCESS = "CONNECT_SMARTCONFIG_SUCCESS", e.CREATE_UDP_CONNECTION_START = "CREATE_UDP_CONNECTION_START", e.CREATE_UDP_CONNECTION_SUCCESS = "CREATE_UDP_CONNECTION_SUCCESS", e.SEND_TARGET_WIFIINFO_START = "SEND_TARGET_WIFIINFO_START", e.SEND_TARGET_WIFIINFO_SUCCESS = "SEND_TARGET_WIFIINFO_SUCCESS", e.GET_DEVICE_SIGNATURE_START = "GET_DEVICE_SIGNATURE_START", e.GET_DEVICE_SIGNATURE_SUCCESS = "GET_DEVICE_SIGNATURE_SUCCESS", e.CONNECT_TARGET_WIFI_START = "RECONNECT_TARGET_WIFI_START", e.CONNECT_TARGET_WIFI_SUCCESS = "RECONNECT_TARGET_WIFI_SUCCESS", e.ADD_DEVICE_START = "ADD_DEVICE_START", e.ADD_DEVICE_SUCCESS = "ADD_DEVICE_SUCCESS", e.CONNECT_DEVICE_SUCCESS = "CONNECT_DEVICE_SUCCESS", e.QUERY_TOKEN_STATE_START = "QUERY_TOKEN_STATE_START", e.QUERY_TOKEN_STATE_SUCCESS = "QUERY_TOKEN_STATE_SUCCESS", e.SMARTCONFIG_SEND_TOKEN_START = "SMARTCONFIG_SEND_TOKEN_START", e.SMARTCONFIG_SEND_TOKEN_SUCCESS = "SMARTCONFIG_SEND_TOKEN_SUCCESS"
      }(c = t.ConnectDeviceStepCode || (t.ConnectDeviceStepCode = {})), t.SoftApStepMsg = ((i = {})[c.CONNECT_DEVICE_START] = "开始配网", i[c.CONNECT_SOFTAP_START] = "开始连接设备热点", i[c.CONNECT_SOFTAP_SUCCESS] = "连接设备热点成功", i[c.CREATE_UDP_CONNECTION_START] = "开始与设备建立UDP连接", i[c.CREATE_UDP_CONNECTION_SUCCESS] = "与设备建立UDP连接成功", i[c.SEND_TARGET_WIFIINFO_START] = "开始发送目标WiFi信息至设备", i[c.SEND_TARGET_WIFIINFO_SUCCESS] = "发送目标WiFi信息至设备成功", i[c.GET_DEVICE_SIGNATURE_START] = "开始获取设备签名", i[c.GET_DEVICE_SIGNATURE_SUCCESS] = "获取设备签名成功", i[c.CONNECT_TARGET_WIFI_START] = "手机开始连接目标WiFi", i[c.CONNECT_TARGET_WIFI_SUCCESS] = "手机连接目标WiFi成功", i[c.ADD_DEVICE_START] = "开始添加设备", i[c.ADD_DEVICE_SUCCESS] = "添加设备成功", i[c.CONNECT_DEVICE_SUCCESS] = "配网成功", i), t.SmartConfigStepMsg = ((s = {})[c.CONNECT_DEVICE_START] = "开始配网", s[c.CONNECT_SMARTCONFIG_START] = "开始给设备发送WI-FI信息", s[c.CONNECT_SMARTCONFIG_SUCCESS] = "手机和设备连接成功", s[c.CREATE_UDP_CONNECTION_START] = "开始与设备建立UDP连接", s[c.CREATE_UDP_CONNECTION_SUCCESS] = "与设备建立UDP连接成功", s[c.SMARTCONFIG_SEND_TOKEN_START] = "开始发送设备token", s[c.SMARTCONFIG_SEND_TOKEN_SUCCESS] = "发送设备token成功", s[c.QUERY_TOKEN_STATE_START] = "开始查询设备与云端的连接状态", s[c.QUERY_TOKEN_STATE_SUCCESS] = "设备与云端连接成功", s[c.ADD_DEVICE_START] = "开始添加设备", s[c.ADD_DEVICE_SUCCESS] = "添加设备成功", s[c.CONNECT_DEVICE_SUCCESS] = "配网成功", s), t.themeColorMap = {
        primary: "#0052d9",
        success: "#29cc85",
        grey: "#bbb",
        danger: "#ff584c",
        weak: "#888",
        muted: "#bbb"
      }
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = Object.defineProperty,
      o = Object.create,
      i = Object.prototype.hasOwnProperty,
      s = {
        configurable: !0,
        enumerable: !1,
        writable: !0,
        value: null
      };

    function a(e) {
      if ("function" != typeof e) throw new TypeError(e + " is not a function");
      return e
    }
    var c = function () {
      function e() {}
      return e.prototype.on = function (e, t) {
        var r;
        return a(t), i.call(this, "__ee__") ? r = this.__ee__ : (r = s.value = o(null), n(this, "__ee__", s), s.value = null), r[e] ? r[e].push(t) : r[e] = [t], this
      }, e.prototype.once = function (e, t) {
        var r, n = this;
        return a(t), this.on.call(this, e, r = function () {
          for (var o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i];
          n.off.call(void 0, e, r), t.apply(n, o)
        }), this
      }, e.prototype.off = function (e, t) {
        if (!i.call(this, "__ee__")) return this;
        var r = this.__ee__;
        if (!r[e]) return this;
        if (t) {
          var n = r[e] || [],
            o = n.indexOf(t);
          o > -1 && n.splice(o, 1)
        } else r[e].length = 0;
        return this
      }, e.prototype.emit = function (e) {
        for (var t = this, r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n];
        if (i.call(this, "__ee__")) {
          var o = this.__ee__[e];
          o && o.length && o.forEach((function (e) {
            return e.apply(t, r)
          }))
        }
      }, e
    }();
    t.default = c
  }, function (e, t) {
    function r(e, t, r, n, o, i, s) {
      try {
        var a = e[i](s),
          c = a.value
      } catch (e) {
        return void r(e)
      }
      a.done ? t(c) : Promise.resolve(c).then(n, o)
    }
    e.exports = function (e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise((function (o, i) {
          var s = e.apply(t, n);

          function a(e) {
            r(s, o, i, a, c, "next", e)
          }

          function c(e) {
            r(s, o, i, a, c, "throw", e)
          }
          a(void 0)
        }))
      }
    }
  }, function (e, t, r) {
    "use strict";
    var n;
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o, i = r(5);
    ! function (e) {
      e.Debug = "Debug", e.Info = "Info", e.Warn = "Warn", e.Error = "Error"
    }(o = t.LogLevel || (t.LogLevel = {}));
    var s = ((n = {})[o.Debug] = console.log, n[o.Info] = console.info, n[o.Warn] = console.warn, n[o.Error] = console.error, n),
      a = function () {
        function e() {
          this.options = {
            debug: !1
          }
        }
        return e.prototype._getLogger = function (e) {
          return e in o || (e = o.Debug), this.options.debug ? s[e].bind(console, "[" + e + "]") : i.noop
        }, e.prototype.config = function (e) {
          Object.assign(this.options, e)
        }, Object.defineProperty(e.prototype, "info", {
          get: function () {
            return this._getLogger(o.Info)
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "debug", {
          get: function () {
            return this._getLogger(o.Debug)
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "warn", {
          get: function () {
            return this._getLogger(o.Warn)
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "error", {
          get: function () {
            return this._getLogger(o.Error)
          },
          enumerable: !0,
          configurable: !0
        }), e
      }();
    t.default = new a
  }, function (e, t, r) {
    var n = r(50),
      o = r(1);
    e.exports = function (e, t) {
      return !t || "object" !== n(t) && "function" != typeof t ? o(e) : t
    }
  }, function (e, t) {
    function r(t) {
      return e.exports = r = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      }, r(t)
    }
    e.exports = r
  }, function (e, t, r) {
    var n = r(51);
    e.exports = function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && n(e, t)
    }
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = r(4),
      o = r(5),
      i = r(7);
    t.normalizeError = function (e) {
      if (e)
        if (o.isPlainObject(e))
          if (e.errMsg)
            if (["auth deny", "scope unauthorized"].some((function (t) {
                return String(e.errMsg).indexOf(t) > -1
              })))
              if (0 === e.errMsg.indexOf("getUserInfo")) Object.assign(e, {
                code: i.ErrorCode.GET_USERINFO_NEED_AUTH,
                msg: "尚未开启微信基本信息授权，请授权后使用"
              });
              else {
                var r = n.__read(e.errMsg.split(":"), 1)[0];
                Object.assign(e, {
                  code: i.ErrorCode.WX_API_NEED_AUTH,
                  msg: "小程序接口（" + r + "）需要用户授权，请授权后使用"
                })
              }
      else Object.assign(e, {
        code: i.ErrorCode.WX_API_FAIL,
        msg: "小程序接口调用失败，请稍后再试"
      });
      else t.isVerifyLoginError(e) && (e = t.genVerifyLoginFailError(e));
      else e instanceof Error && (e = {
        code: i.ErrorCode.INTERNAL_ERROR,
        msg: e.message,
        stack: e.stack,
        error: e
      });
      return e
    }, t.genVerifyLoginFailError = function (e) {
      e || (e = {});
      e.code, e.msg;
      var t = n.__rest(e, ["code", "msg"]);
      return n.__assign({
        code: i.ErrorCode.VERIFY_LOGIN_FAIL,
        msg: "登录态验证失败，请重新登录"
      }, t)
    }, t.isVerifyLoginError = function (e) {
      return e && String(e.code || "").indexOf("InvalidAccessToken") > -1
    }, t.handleVerifyLoginError = function (e) {
      if (t.isVerifyLoginError(e)) throw t.genVerifyLoginFailError(e)
    }
  }, function (e, t, r) {
    "use strict";
    (function (e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.isMiniProgram = function () {
        try {
          return !!(wx && wx.request && wx.connectSocket)
        } catch (e) {
          return !1
        }
      }(), t.isBrowser = function () {
        try {
          return "undefined" != typeof window && void 0 !== window.document
        } catch (e) {
          return !1
        }
      }(), t.isNode = function () {
        try {
          return !!e.versions.node
        } catch (e) {
          return !1
        }
      }(), t.isRN = function () {
        try {
          return "ReactNative" === navigator.product
        } catch (e) {
          return !1
        }
      }()
    }).call(this, r(30))
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = r(4);
    t.pify = function (e, t) {
      return void 0 === t && (t = wx),
        function (r) {
          for (var o = [], i = 1; i < arguments.length; i++) o[i - 1] = arguments[i];
          return new Promise((function (i, s) {
            e ? e.call.apply(e, n.__spread([t, n.__assign(n.__assign({}, r), {
              success: i,
              fail: s
            })], o)) : wx.showModal({
              title: "提示",
              content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试",
              complete: function () {
                return s()
              },
              confirmColor: "#006eff",
              showCancel: !1
            })
          }))
        }
    }
  }, function (e, t, r) {
    "use strict";
    var n, o, i, s = r(33),
      a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";

    function c() {
      i = !1
    }

    function u(e) {
      if (e) {
        if (e !== n) {
          if (e.length !== a.length) throw new Error("Custom alphabet for shortid must be " + a.length + " unique characters. You submitted " + e.length + " characters: " + e);
          var t = e.split("").filter((function (e, t, r) {
            return t !== r.lastIndexOf(e)
          }));
          if (t.length) throw new Error("Custom alphabet for shortid must be " + a.length + " unique characters. These characters were not unique: " + t.join(", "));
          n = e, c()
        }
      } else n !== a && (n = a, c())
    }

    function l() {
      return i || (i = function () {
        n || u(a);
        for (var e, t = n.split(""), r = [], o = s.nextValue(); t.length > 0;) o = s.nextValue(), e = Math.floor(o * t.length), r.push(t.splice(e, 1)[0]);
        return r.join("")
      }())
    }
    e.exports = {
      get: function () {
        return n || a
      },
      characters: function (e) {
        return u(e), n
      },
      seed: function (e) {
        s.seed(e), o !== e && (c(), o = e)
      },
      lookup: function (e) {
        return l()[e]
      },
      shuffled: l
    }
  }, function (e, t, r) {
    "use strict";
    var n = r(17),
      o = r(34),
      i = r(38),
      s = r(39) || 0;

    function a() {
      return o(s)
    }
    e.exports = a, e.exports.generate = a, e.exports.seed = function (t) {
      return n.seed(t), e.exports
    }, e.exports.worker = function (t) {
      return s = t, e.exports
    }, e.exports.characters = function (e) {
      return void 0 !== e && n.characters(e), n.shuffled()
    }, e.exports.isValid = i
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = r(4);
    n.__exportStar(r(20), t), n.__exportStar(r(32), t)
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = r(4),
      o = n.__importDefault(r(26)),
      i = r(15),
      s = n.__importDefault(r(31)),
      a = r(16),
      c = 0;

    function u(e, t, r) {
      return void 0 === t && (t = {}), void 0 === r && (r = {}), new Promise((function (n, i) {
        try {
          var s = r.method,
            a = r.headers,
            c = void 0 === a ? {} : a,
            u = r.responseType,
            l = void 0 === u ? "json" : u;
          s = (s || "get").toUpperCase(), Object.assign(c, {
            "Content-type": "application/json"
          });
          var f = new window.XMLHttpRequest;
          f.responseType = l, f.timeout = 1e4;
          f.onreadystatechange = function () {
            4 === f.readyState && (200 === f.status ? n({
              data: f.response
            }) : i({
              code: f.status,
              msg: f.statusText
            }))
          }, "GET" === s ? e = "url" + (-1 === e.indexOf("?") ? "?" : "&") + o.default.stringify(t) : "POST" === s && (t = JSON.stringify(t)), f.open(s, e, !0), Object.keys(c).forEach((function (e) {
            f.setRequestHeader(e, c[e])
          })), f.send("POST" === s ? t : null)
        } catch (e) {
          console.error(e), i(e)
        }
      }))
    }
    t.request = function (e) {
      return n.__awaiter(void 0, void 0, void 0, (function () {
        var t, r = e.url,
          o = e.data,
          l = e.header,
          f = void 0 === l ? {} : l,
          d = e.method,
          h = void 0 === d ? "get" : d,
          p = e.dataType,
          _ = e.responseType,
          g = n.__rest(e, ["url", "data", "header", "method", "dataType", "responseType"]);
        return n.__generator(this, (function (e) {
          switch (e.label) {
            case 0:
              if (i.isBrowser) return [2, u(r, o, {
                headers: f,
                method: h,
                responseType: _
              })];
              e.label = 1;
            case 1:
              e.trys.push([1, 6, 7, 8]), e.label = 2;
            case 2:
              return c >= 10 ? [4, s.default.startBlocking()] : [3, 4];
            case 3:
              return e.sent(), [3, 2];
            case 4:
              return c++, [4, a.pify(wx.request)(n.__assign({
                url: r,
                data: o,
                header: f,
                method: h,
                dataType: p,
                responseType: _
              }, g))];
            case 5:
              return [2, e.sent()];
            case 6:
              return t = e.sent(), [2, Promise.reject(t)];
            case 7:
              return c--, s.default.resolveFirstBlock(), [7];
            case 8:
              return [2]
          }
        }))
      }))
    }
  }, function (e, t, r) {
    var n = r(47),
      o = r(48),
      i = r(49);
    e.exports = function (e) {
      return n(e) || o(e) || i()
    }
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = r(4);
    n.__exportStar(r(7), t), n.__exportStar(r(23), t)
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = r(4);
    r(24);
    var o = r(25),
      i = n.__importDefault(r(8)),
      s = r(41),
      a = n.__importDefault(r(10)),
      c = r(43),
      u = r(7),
      l = r(5),
      f = r(19),
      d = r(14),
      h = r(44),
      p = r(15),
      _ = function (e) {
        function t(t) {
          var r = t.getAccessToken,
            i = t.appKey,
            c = void 0 === i ? "" : i,
            l = t.apiPlatform,
            f = void 0 === l ? "" : l,
            d = t.debug,
            h = void 0 !== d && d,
            _ = t.wsConfig,
            g = void 0 === _ ? {} : _,
            v = g.autoReconnect,
            m = void 0 === v || v,
            y = g.disconnectWhenAppHide,
            C = void 0 === y || y,
            E = g.connectWhenAppShow,
            T = void 0 === E || E,
            S = n.__rest(g, ["autoReconnect", "disconnectWhenAppHide", "connectWhenAppShow"]),
            I = e.call(this) || this;
          return I.isManuallyClose = !1, I._defaultFamilyIdPromise = null, a.default.config({
            debug: h
          }), I.ws = new s.IotWebsocket(I, n.__assign(n.__assign({}, S), {
            apiPlatform: f
          })), I.loginManager = new o.LoginManager(I, {
            getAccessToken: r,
            appKey: c
          }), I._apiPlatform = f, I.ws.on("error", (function (e) {
            a.default.debug("websocket error", e), I.emit(u.EventTypes.WsError, e), m && I._reconnectWs()
          })), I.ws.on("close", (function (e) {
            var t = void 0 === e ? {} : e,
              r = t.code,
              n = t.reason;
            a.default.debug("websocket close", {
              code: r,
              reason: n
            }), I.emit(u.EventTypes.WsClose, {
              code: r,
              reason: n
            }), m && I._onWebsocketClose()
          })), I.ws.on("push", (function (e) {
            return I._handlePushEvent(e)
          })), p.isMiniProgram && (wx.onAppHide((function () {
            C && (I.isManuallyClose = !0, I.ws.disconnect())
          })), wx.onAppShow((function () {
            T && I.isLogin && I.ws.connect()
          }))), I
        }
        return n.__extends(t, e), Object.defineProperty(t.prototype, "userInfo", {
          get: function () {
            return this.loginManager.userInfo
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "isLogin", {
          get: function () {
            return this.loginManager.isLogin
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "userId", {
          get: function () {
            return this.loginManager.userId
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "nickName", {
          get: function () {
            return this.loginManager.nickName
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.init = function (e) {
          return n.__awaiter(this, void 0, void 0, (function () {
            var t = this;
            return n.__generator(this, (function (r) {
              return e || (e = {}), e.reload && (this._initPromise = null), [2, this._initPromise || (this._initPromise = new Promise((function (e, r) {
                return n.__awaiter(t, void 0, void 0, (function () {
                  var t;
                  return n.__generator(this, (function (n) {
                    switch (n.label) {
                      case 0:
                        return n.trys.push([0, 3, , 4]), [4, this.loginManager.login()];
                      case 1:
                        return n.sent(), [4, this.ws.connect()];
                      case 2:
                        return n.sent(), e(), [3, 4];
                      case 3:
                        return t = n.sent(), r(d.normalizeError(t)), this._initPromise = null, [3, 4];
                      case 4:
                        return [2]
                    }
                  }))
                }))
              })))]
            }))
          }))
        }, t.prototype.getDefaultFamilyId = function () {
          var e = this;
          return this._defaultFamilyIdPromise || (this._defaultFamilyIdPromise = new Promise((function (t, r) {
            return n.__awaiter(e, void 0, void 0, (function () {
              var e, o, i, s;
              return n.__generator(this, (function (n) {
                switch (n.label) {
                  case 0:
                    return n.trys.push([0, 4, , 5]), [4, this.requestApi("AppGetFamilyList", {
                      Offset: 0,
                      Limit: 100
                    })];
                  case 1:
                    return e = n.sent(), o = e.FamilyList, e.Total ? [3, 3] : [4, this.requestApi("AppCreateFamily", {
                      Name: this.loginManager.nickName
                    })];
                  case 2:
                    return i = n.sent().Data.FamilyId, [2, t(i)];
                  case 3:
                    return t(o[0].FamilyId), [3, 5];
                  case 4:
                    return s = n.sent(), r(s), this._defaultFamilyIdPromise = null, [3, 5];
                  case 5:
                    return [2]
                }
              }))
            }))
          })))
        }, t.prototype.sendWebsocketMessage = function (e, t) {
          return void 0 === t && (t = {}), n.__awaiter(this, void 0, void 0, (function () {
            return n.__generator(this, (function (r) {
              switch (r.label) {
                case 0:
                  return [4, this.init()];
                case 1:
                  return r.sent(), [2, this.ws.send(e, t)]
              }
            }))
          }))
        }, t.prototype.connectWebsocket = function () {
          return n.__awaiter(this, void 0, void 0, (function () {
            return n.__generator(this, (function (e) {
              switch (e.label) {
                case 0:
                  return [4, this.init()];
                case 1:
                  return e.sent(), [4, this.ws.connect()];
                case 2:
                  return e.sent(), [2]
              }
            }))
          }))
        }, t.prototype.disconnectWebsocket = function () {
          this.ws.disconnect()
        }, t.prototype.subscribeDevices = function (e) {
          return n.__awaiter(this, void 0, void 0, (function () {
            return n.__generator(this, (function (t) {
              return this.ws.subscribe((e || []).map((function (e) {
                return "string" == typeof e ? e : e && e.DeviceId ? e.DeviceId : void 0
              })).filter(Boolean)), [2]
            }))
          }))
        }, t.prototype.requestApi = function (e, t, r) {
          void 0 === t && (t = {}), void 0 === r && (r = {});
          var o = r.doNotRetry,
            i = void 0 !== o && o,
            s = r.needLogin,
            c = void 0 === s || s,
            u = n.__rest(r, ["doNotRetry", "needLogin"]);
          return n.__awaiter(this, void 0, void 0, (function () {
            var r, o, s, l, h, p, _;
            return n.__generator(this, (function (g) {
              switch (g.label) {
                case 0:
                  return g.trys.push([0, 6, , 13]), c ? [4, this.loginManager.checkLogin()] : [3, 2];
                case 1:
                  g.sent(), g.label = 2;
                case 2:
                  return r = this.loginManager, o = r.accessToken, s = r.userId, t && "default" === t.FamilyId ? (l = t, [4, this.getDefaultFamilyId()]) : [3, 4];
                case 3:
                  l.FamilyId = g.sent(), g.label = 4;
                case 4:
                  return h = n.__assign({
                    uin: s
                  }, t), o && (h.AccessToken = o), this._apiPlatform && (h.Platform = this._apiPlatform), [4, f.requestTokenApi(e, h, u)];
                case 5:
                  return [2, g.sent()];
                case 6:
                  if (p = g.sent(), a.default.debug("requestApi fail", p), !d.isVerifyLoginError(p)) return [3, 12];
                  if (i) return [3, 11];
                  g.label = 7;
                case 7:
                  return g.trys.push([7, 9, , 10]), [4, this.loginManager.reLogin()];
                case 8:
                  return g.sent(), [3, 10];
                case 9:
                  return _ = g.sent(), a.default.error("reLogin fail", _), [2, Promise.reject(d.genVerifyLoginFailError(p))];
                case 10:
                  return [2, this.requestApi(e, t, n.__assign({
                    doNotRetry: !0
                  }, u))];
                case 11:
                  return [2, Promise.reject(d.genVerifyLoginFailError(p))];
                case 12:
                  return [2, Promise.reject(d.normalizeError(p))];
                case 13:
                  return [2]
              }
            }))
          }))
        }, t.prototype.connectDevice = function (e) {
          if (!p.isMiniProgram) throw "只有小程序内支持该接口调用";
          return h.connectDevice(this, e)
        }, t.prototype._handlePushEvent = function (e) {
          e || (e = {}), this.emit(u.EventTypes.WsPush, e);
          var t = e.action,
            r = e.params;
          r || (r = {});
          var n = r.DeviceId,
            o = r.Type,
            i = r.SubType,
            s = r.Payload,
            l = r.Time,
            f = new Date(l).getTime();
          switch (s && (s = JSON.parse(c.decodeBase64(s))), a.default.debug("websocket push payload", s), t) {
            case "DeviceChange":
              switch (o) {
                case "Property":
                case "Shadow":
                case "Template":
                  switch (i) {
                    case "Report":
                      var d = {};
                      try {
                        if (s) {
                          var h = s.type,
                            p = s.state,
                            _ = s.method,
                            g = s.params;
                          if (h && "update" === h && p && p.reported && (_ = "report", g = p.reported), g || (g = {}), "report" === _)
                            for (var v in g) d[v] = {
                              Value: g[v],
                              lastUpdate: f
                            }
                        }
                      } catch (e) {
                        a.default.error("handle report event error", e)
                      }
                      this.emit(u.EventTypes.WsReport, {
                        deviceId: n,
                        deviceData: d
                      });
                      break;
                    case "Push":
                      d = {};
                      try {
                        if (s) {
                          h = s.type;
                          var m = s.payload;
                          _ = s.method, g = s.params;
                          if (h && "delta" === h && m && m.state && (_ = "control", g = m.state), "control" === _ && g) {
                            for (var v in g) d[v] = {
                              Value: g[v],
                              LastUpdate: f
                            };
                            this.emit(u.EventTypes.WsControl, {
                              deviceId: n,
                              deviceData: d
                            })
                          }
                        }
                      } catch (e) {
                        a.default.error(e)
                      }
                  }
                  break;
                case "StatusChange":
                  var y = "Online" === i ? 1 : 0;
                  this.emit(u.EventTypes.WsStatusChange, {
                    deviceId: n,
                    deviceStatus: y
                  })
              }
          }
        }, t.prototype._onWebsocketClose = function () {
          if (!this.isManuallyClose) return this._reconnectWs();
          this.isManuallyClose = !1
        }, t.prototype._reconnectWs = function () {
          return n.__awaiter(this, void 0, void 0, (function () {
            var e;
            return n.__generator(this, (function (t) {
              switch (t.label) {
                case 0:
                  return t.trys.push([0, 3, , 4]), a.default.debug("websocket reconnecting in 2 seconds"), [4, l.delay(2e3)];
                case 1:
                  return t.sent(), [4, this.ws.connect()];
                case 2:
                  return t.sent(), [3, 4];
                case 3:
                  return e = t.sent(), a.default.error("error when reconnect ws", e), [2, Promise.reject(e)];
                case 4:
                  return [2]
              }
            }))
          }))
        }, t
      }(i.default);
    t.QcloudIotExplorerAppDevSdk = _
  }, function (e, t) {}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = r(4),
      o = n.__importDefault(r(8)),
      i = r(19),
      s = n.__importDefault(r(40)),
      a = r(14),
      c = n.__importDefault(r(10)),
      u = "__qcloud-iotexplorer-appdev-sdk-accessToken",
      l = function (e) {
        function t(t, r) {
          var n = r.getAccessToken,
            o = r.appKey,
            i = e.call(this) || this;
          return i.accessToken = "", i.appKey = "", i.isLogin = !1, i.userInfo = null, i.sdk = t, i.getAccessToken = n, i.appKey = o, i
        }
        return n.__extends(t, e), t.prototype.login = function () {
          return n.__awaiter(this, void 0, void 0, (function () {
            var e, t, r, o, l;
            return n.__generator(this, (function (n) {
              switch (n.label) {
                case 0:
                  e = !1, n.label = 1;
                case 1:
                  return n.trys.push([1, 7, , 10]), [4, s.default.getItem(u)];
                case 2:
                  return (t = n.sent()) ? [3, 4] : [4, this.getAccessToken()];
                case 3:
                  return r = n.sent().Token, t = r, [3, 5];
                case 4:
                  e = !0, n.label = 5;
                case 5:
                  return [4, i.requestTokenApi("AppGetUser", {
                    AccessToken: t
                  })];
                case 6:
                  return o = n.sent().Data, s.default.setItem(u, t), this.accessToken = t, this.userInfo = o, this.isLogin = !0, [3, 10];
                case 7:
                  return l = n.sent(), a.isVerifyLoginError(l) ? [4, this.logout()] : [3, 9];
                case 8:
                  if (n.sent(), e) return c.default.debug("Cached Token expired, retrying..."), [2, this.login()];
                  n.label = 9;
                case 9:
                  return [2, Promise.reject(l)];
                case 10:
                  return [2]
              }
            }))
          }))
        }, Object.defineProperty(t.prototype, "userId", {
          get: function () {
            return this.userInfo ? this.userInfo.UserID : ""
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(t.prototype, "nickName", {
          get: function () {
            return this.userInfo ? this.userInfo.NickName : ""
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.checkLogin = function () {
          if (!this.isLogin) throw a.genVerifyLoginFailError()
        }, t.prototype.logout = function () {
          return n.__awaiter(this, void 0, void 0, (function () {
            return n.__generator(this, (function (e) {
              switch (e.label) {
                case 0:
                  return [4, s.default.removeItem(u)];
                case 1:
                  return e.sent(), this.accessToken = "", this.isLogin = !1, [2]
              }
            }))
          }))
        }, t.prototype.reLogin = function () {
          return n.__awaiter(this, void 0, void 0, (function () {
            return n.__generator(this, (function (e) {
              switch (e.label) {
                case 0:
                  return [4, this.logout()];
                case 1:
                  return e.sent(), [4, this.login()];
                case 2:
                  return e.sent(), [2]
              }
            }))
          }))
        }, t
      }(o.default);
    t.LoginManager = l
  }, function (e, t, r) {
    "use strict";
    const n = r(27),
      o = r(28),
      i = r(29);

    function s(e, t) {
      return t.encode ? t.strict ? n(e) : encodeURIComponent(e) : e
    }

    function a(e, t) {
      return t.decode ? o(e) : e
    }

    function c(e) {
      const t = e.indexOf("#");
      return -1 !== t && (e = e.slice(0, t)), e
    }

    function u(e) {
      const t = (e = c(e)).indexOf("?");
      return -1 === t ? "" : e.slice(t + 1)
    }

    function l(e, t) {
      return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || "true" !== e.toLowerCase() && "false" !== e.toLowerCase() || (e = "true" === e.toLowerCase()), e
    }

    function f(e, t) {
      const r = function (e) {
          let t;
          switch (e.arrayFormat) {
            case "index":
              return (e, r, n) => {
                t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === n[e] && (n[e] = {}), n[e][t[1]] = r) : n[e] = r
              };
            case "bracket":
              return (e, r, n) => {
                t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== n[e] ? n[e] = [].concat(n[e], r) : n[e] = [r] : n[e] = r
              };
            case "comma":
              return (e, t, r) => {
                const n = "string" == typeof t && t.split("").indexOf(",") > -1 ? t.split(",") : t;
                r[e] = n
              };
            default:
              return (e, t, r) => {
                void 0 !== r[e] ? r[e] = [].concat(r[e], t) : r[e] = t
              }
          }
        }(t = Object.assign({
          decode: !0,
          sort: !0,
          arrayFormat: "none",
          parseNumbers: !1,
          parseBooleans: !1
        }, t)),
        n = Object.create(null);
      if ("string" != typeof e) return n;
      if (!(e = e.trim().replace(/^[?#&]/, ""))) return n;
      for (const o of e.split("&")) {
        let [e, s] = i(t.decode ? o.replace(/\+/g, " ") : o, "=");
        s = void 0 === s ? null : a(s, t), r(a(e, t), s, n)
      }
      for (const e of Object.keys(n)) {
        const r = n[e];
        if ("object" == typeof r && null !== r)
          for (const e of Object.keys(r)) r[e] = l(r[e], t);
        else n[e] = l(r, t)
      }
      return !1 === t.sort ? n : (!0 === t.sort ? Object.keys(n).sort() : Object.keys(n).sort(t.sort)).reduce((e, t) => {
        const r = n[t];
        return Boolean(r) && "object" == typeof r && !Array.isArray(r) ? e[t] = function e(t) {
          return Array.isArray(t) ? t.sort() : "object" == typeof t ? e(Object.keys(t)).sort((e, t) => Number(e) - Number(t)).map(e => t[e]) : t
        }(r) : e[t] = r, e
      }, Object.create(null))
    }
    t.extract = u, t.parse = f, t.stringify = (e, t) => {
      if (!e) return "";
      const r = function (e) {
          switch (e.arrayFormat) {
            case "index":
              return t => (r, n) => {
                const o = r.length;
                return void 0 === n || e.skipNull && null === n ? r : null === n ? [...r, [s(t, e), "[", o, "]"].join("")] : [...r, [s(t, e), "[", s(o, e), "]=", s(n, e)].join("")]
              };
            case "bracket":
              return t => (r, n) => void 0 === n || e.skipNull && null === n ? r : null === n ? [...r, [s(t, e), "[]"].join("")] : [...r, [s(t, e), "[]=", s(n, e)].join("")];
            case "comma":
              return t => (r, n) => null == n || 0 === n.length ? r : 0 === r.length ? [
                [s(t, e), "=", s(n, e)].join("")
              ] : [
                [r, s(n, e)].join(",")
              ];
            default:
              return t => (r, n) => void 0 === n || e.skipNull && null === n ? r : null === n ? [...r, s(t, e)] : [...r, [s(t, e), "=", s(n, e)].join("")]
          }
        }(t = Object.assign({
          encode: !0,
          strict: !0,
          arrayFormat: "none"
        }, t)),
        n = Object.assign({}, e);
      if (t.skipNull)
        for (const e of Object.keys(n)) void 0 !== n[e] && null !== n[e] || delete n[e];
      const o = Object.keys(n);
      return !1 !== t.sort && o.sort(t.sort), o.map(n => {
        const o = e[n];
        return void 0 === o ? "" : null === o ? s(n, t) : Array.isArray(o) ? o.reduce(r(n), []).join("&") : s(n, t) + "=" + s(o, t)
      }).filter(e => e.length > 0).join("&")
    }, t.parseUrl = (e, t) => ({
      url: c(e).split("?")[0] || "",
      query: f(u(e), t)
    })
  }, function (e, t, r) {
    "use strict";
    e.exports = e => encodeURIComponent(e).replace(/[!'()*]/g, e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`)
  }, function (e, t, r) {
    "use strict";
    var n = new RegExp("%[a-f0-9]{2}", "gi"),
      o = new RegExp("(%[a-f0-9]{2})+", "gi");

    function i(e, t) {
      try {
        return decodeURIComponent(e.join(""))
      } catch (e) {}
      if (1 === e.length) return e;
      t = t || 1;
      var r = e.slice(0, t),
        n = e.slice(t);
      return Array.prototype.concat.call([], i(r), i(n))
    }

    function s(e) {
      try {
        return decodeURIComponent(e)
      } catch (o) {
        for (var t = e.match(n), r = 1; r < t.length; r++) t = (e = i(t, r).join("")).match(n);
        return e
      }
    }
    e.exports = function (e) {
      if ("string" != typeof e) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
      try {
        return e = e.replace(/\+/g, " "), decodeURIComponent(e)
      } catch (t) {
        return function (e) {
          for (var t = {
              "%FE%FF": "��",
              "%FF%FE": "��"
            }, r = o.exec(e); r;) {
            try {
              t[r[0]] = decodeURIComponent(r[0])
            } catch (e) {
              var n = s(r[0]);
              n !== r[0] && (t[r[0]] = n)
            }
            r = o.exec(e)
          }
          t["%C2"] = "�";
          for (var i = Object.keys(t), a = 0; a < i.length; a++) {
            var c = i[a];
            e = e.replace(new RegExp(c, "g"), t[c])
          }
          return e
        }(e)
      }
    }
  }, function (e, t, r) {
    "use strict";
    e.exports = (e, t) => {
      if ("string" != typeof e || "string" != typeof t) throw new TypeError("Expected the arguments to be of type `string`");
      if ("" === t) return [e];
      const r = e.indexOf(t);
      return -1 === r ? [e] : [e.slice(0, r), e.slice(r + t.length)]
    }
  }, function (e, t) {
    var r, n, o = e.exports = {};

    function i() {
      throw new Error("setTimeout has not been defined")
    }

    function s() {
      throw new Error("clearTimeout has not been defined")
    }

    function a(e) {
      if (r === setTimeout) return setTimeout(e, 0);
      if ((r === i || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
      try {
        return r(e, 0)
      } catch (t) {
        try {
          return r.call(null, e, 0)
        } catch (t) {
          return r.call(this, e, 0)
        }
      }
    }! function () {
      try {
        r = "function" == typeof setTimeout ? setTimeout : i
      } catch (e) {
        r = i
      }
      try {
        n = "function" == typeof clearTimeout ? clearTimeout : s
      } catch (e) {
        n = s
      }
    }();
    var c, u = [],
      l = !1,
      f = -1;

    function d() {
      l && c && (l = !1, c.length ? u = c.concat(u) : f = -1, u.length && h())
    }

    function h() {
      if (!l) {
        var e = a(d);
        l = !0;
        for (var t = u.length; t;) {
          for (c = u, u = []; ++f < t;) c && c[f].run();
          f = -1, t = u.length
        }
        c = null, l = !1,
          function (e) {
            if (n === clearTimeout) return clearTimeout(e);
            if ((n === s || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
            try {
              n(e)
            } catch (t) {
              try {
                return n.call(null, e)
              } catch (t) {
                return n.call(this, e)
              }
            }
          }(e)
      }
    }

    function p(e, t) {
      this.fun = e, this.array = t
    }

    function _() {}
    o.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
      u.push(new p(e, t)), 1 !== u.length || l || a(h)
    }, p.prototype.run = function () {
      this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = _, o.addListener = _, o.once = _, o.off = _, o.removeListener = _, o.removeAllListeners = _, o.emit = _, o.prependListener = _, o.prependOnceListener = _, o.listeners = function (e) {
      return []
    }, o.binding = function (e) {
      throw new Error("process.binding is not supported")
    }, o.cwd = function () {
      return "/"
    }, o.chdir = function (e) {
      throw new Error("process.chdir is not supported")
    }, o.umask = function () {
      return 0
    }
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = [];
    t.default = {
      resolveFirstBlock: function () {
        n.length && (n[0].resolve(), n.shift())
      },
      startBlocking: function () {
        var e, t = new Promise((function (t) {
          e = t
        }));
        return n.push({
          promise: t,
          resolve: e
        }), t
      }
    }
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = r(4),
      o = n.__importDefault(r(18)),
      i = r(5),
      s = r(20);
    t.requestTokenApi = function (e, t, r) {
      return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(void 0, void 0, void 0, (function () {
        var a, c, u, l, f, d, h, p, _, g = t.uin,
          v = t.AccessToken,
          m = n.__rest(t, ["uin", "AccessToken"]),
          y = r.method,
          C = void 0 === y ? "POST" : y,
          E = n.__rest(r, ["method"]);
        return n.__generator(this, (function (t) {
          switch (t.label) {
            case 0:
              return c = o.default(), u = {
                uin: g,
                cmd: e
              }, m = Object.assign({}, m, {
                Action: e,
                RequestId: c,
                AccessToken: v
              }), l = i.appendParams(E.url || "https://iot.cloud.tencent.com/api/exploreropen/tokenapi", u), a = n.__assign({
                url: l,
                data: m,
                method: C
              }, E), [4, s.request(a)];
            case 1:
              if (f = t.sent().data, d = f.code, h = f.msg, p = f.data, _ = void 0 === p ? {} : p, d) {
                if (_ && _.Error) throw {
                  code: _.Error.Code,
                  msg: _.Error.Message,
                  reqId: c
                };
                throw {
                  code: d,
                  msg: h,
                  reqId: c
                }
              }
              return [2, _]
          }
        }))
      }))
    }
  }, function (e, t, r) {
    "use strict";
    var n = 1;
    e.exports = {
      nextValue: function () {
        return (n = (9301 * n + 49297) % 233280) / 233280
      },
      seed: function (e) {
        n = e
      }
    }
  }, function (e, t, r) {
    "use strict";
    var n, o, i = r(35),
      s = (r(17), 1459707606518),
      a = 6;
    e.exports = function (e) {
      var t = "",
        r = Math.floor(.001 * (Date.now() - s));
      return r === o ? n++ : (n = 0, o = r), t += i(a), t += i(e), n > 0 && (t += i(n)), t += i(r)
    }
  }, function (e, t, r) {
    "use strict";
    var n = r(17),
      o = r(36),
      i = r(37);
    e.exports = function (e) {
      for (var t, r = 0, s = ""; !t;) s += i(o, n.get(), 1), t = e < Math.pow(16, r + 1), r++;
      return s
    }
  }, function (e, t, r) {
    "use strict";
    var n, o = "object" == typeof window && (window.crypto || window.msCrypto);
    n = o && o.getRandomValues ? function (e) {
      return o.getRandomValues(new Uint8Array(e))
    } : function (e) {
      for (var t = [], r = 0; r < e; r++) t.push(Math.floor(256 * Math.random()));
      return t
    }, e.exports = n
  }, function (e, t) {
    e.exports = function (e, t, r) {
      for (var n = (2 << Math.log(t.length - 1) / Math.LN2) - 1, o = Math.ceil(1.6 * n * r / t.length), i = "";;)
        for (var s = e(o), a = 0; a < o; a++) {
          var c = s[a] & n;
          if (t[c] && (i += t[c]).length === r) return i
        }
    }
  }, function (e, t, r) {
    "use strict";
    var n = r(17);
    e.exports = function (e) {
      return !(!e || "string" != typeof e || e.length < 6) && !new RegExp("[^" + n.get().replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&") + "]").test(e)
    }
  }, function (e, t, r) {
    "use strict";
    e.exports = 0
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = r(4),
      o = r(16),
      i = r(15);
    t.default = {
      getItem: function (e) {
        return n.__awaiter(this, void 0, void 0, (function () {
          return n.__generator(this, (function (t) {
            switch (t.label) {
              case 0:
                if (!i.isMiniProgram) return [2];
                t.label = 1;
              case 1:
                return t.trys.push([1, 3, , 4]), [4, o.pify(wx.getStorage)({
                  key: e
                })];
              case 2:
                return [2, t.sent().data];
              case 3:
                return t.sent(), [2, null];
              case 4:
                return [2]
            }
          }))
        }))
      },
      setItem: function (e, t) {
        return n.__awaiter(this, void 0, void 0, (function () {
          var r;
          return n.__generator(this, (function (n) {
            switch (n.label) {
              case 0:
                if (!i.isMiniProgram) return [2];
                n.label = 1;
              case 1:
                return n.trys.push([1, 3, , 4]), [4, o.pify(wx.setStorage)({
                  key: e,
                  data: t
                })];
              case 2:
                return n.sent(), [3, 4];
              case 3:
                return r = n.sent(), console.error("setStorage error", r), [3, 4];
              case 4:
                return [2]
            }
          }))
        }))
      },
      removeItem: function (e) {
        return n.__awaiter(this, void 0, void 0, (function () {
          var t;
          return n.__generator(this, (function (r) {
            switch (r.label) {
              case 0:
                if (!i.isMiniProgram) return [2];
                r.label = 1;
              case 1:
                return r.trys.push([1, 3, , 4]), [4, o.pify(wx.removeStorage)({
                  key: e
                })];
              case 2:
                return r.sent(), [3, 4];
              case 3:
                return t = r.sent(), console.error("removeStorage error", t), [3, 4];
              case 4:
                return [2]
            }
          }))
        }))
      }
    }
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = r(4),
      o = n.__importDefault(r(8)),
      i = n.__importDefault(r(18)),
      s = r(5),
      a = r(42),
      c = n.__importDefault(r(10)),
      u = r(14),
      l = {
        url: "wss://iot.cloud.tencent.com/ws/explorer",
        heartbeatInterval: 6e4
      },
      f = function (e) {
        function t(t, r) {
          var n = e.call(this) || this;
          return n.sdk = t, n.requestHandlerMap = {}, n.options = Object.assign({}, l, r), n._connected = !1, n._subscribeDeviceIdList = [], n._heartBeatTimer = null, n
        }
        return n.__extends(t, e), t.prototype.isConnected = function () {
          return !!this._connected
        }, t.prototype.doConnectWs = function () {
          return n.__awaiter(this, void 0, void 0, (function () {
            var e = this;
            return n.__generator(this, (function (t) {
              return [2, this._doConnectWsPromise || (this._doConnectWsPromise = new Promise((function (t, r) {
                return n.__awaiter(e, void 0, void 0, (function () {
                  var e, o, i = this;
                  return n.__generator(this, (function (u) {
                    e = function (e) {
                      r(e), i.emit("error", e), i.disconnect()
                    };
                    try {
                      o = this.options.url, this.ws = new a.WebSocket(s.appendParams(o, {
                        uin: this.sdk.loginManager.userId
                      })), this.ws.onOpen((function () {
                        c.default.debug("websocket connected"), i._connected = !0, i.emit("connect"), t()
                      })), this.ws.onError(e), this.ws.onMessage((function (e) {
                        var t = e.data;
                        i.emit("message", t);
                        try {
                          t = JSON.parse(t)
                        } catch (e) {
                          return void c.default.warn("onMessage parse event.data error: " + t)
                        }
                        t.push ? i.emit("push", t) : void 0 !== t.reqId && i.requestHandlerMap[t.reqId] && i.requestHandlerMap[t.reqId](null, t)
                      })), this.ws.onClose((function (e) {
                        return n.__awaiter(i, void 0, void 0, (function () {
                          return n.__generator(this, (function (t) {
                            return c.default.debug("websocket closed"), this.disconnect(), this.emit("close", e), [2]
                          }))
                        }))
                      }))
                    } catch (t) {
                      e(t)
                    }
                    return [2]
                  }))
                }))
              })))]
            }))
          }))
        }, t.prototype.connect = function () {
          return n.__awaiter(this, void 0, void 0, (function () {
            return n.__generator(this, (function (e) {
              switch (e.label) {
                case 0:
                  return [4, this.sdk.loginManager.checkLogin()];
                case 1:
                  return e.sent(), this.isConnected() ? [3, 3] : [4, this.doConnectWs()];
                case 2:
                  e.sent(), e.label = 3;
                case 3:
                  return [2, this.activePush()]
              }
            }))
          }))
        }, t.prototype.subscribe = function (e) {
          return this.activePush(e)
        }, t.prototype.disconnect = function () {
          if (this.ws) {
            this.ws.close({}), this._connected = !1, this._doConnectWsPromise = null, this.ws = null, clearInterval(this._heartBeatTimer), this._heartBeatTimer = null
          }
        }, t.prototype.send = function (e, t, r) {
          void 0 === t && (t = {});
          var o = (void 0 === r ? {} : r).reqId;
          return n.__awaiter(this, void 0, void 0, (function () {
            var r = this;
            return n.__generator(this, (function (n) {
              switch (n.label) {
                case 0:
                  if (o || (o = i.default()), !this.ws) return [3, 5];
                  this.ws.send({
                    data: JSON.stringify({
                      action: e,
                      reqId: o,
                      params: t
                    })
                  }), n.label = 1;
                case 1:
                  return n.trys.push([1, , 3, 4]), [4, Promise.race([new Promise((function (e, t) {
                    r.requestHandlerMap[o] = function (r, n) {
                      if (!r) return n.data || !n.error && !n.error_message ? e(n.data) : t({
                        code: n.error,
                        msg: n.error_message
                      });
                      t(r)
                    }
                  })), new Promise((function (e, t) {
                    setTimeout((function () {
                      t({
                        code: "TIMEOUT"
                      })
                    }), 2e4)
                  }))])];
                case 2:
                  return [2, n.sent()];
                case 3:
                  return delete this.requestHandlerMap[o], [7];
                case 4:
                  return [3, 6];
                case 5:
                  c.default.warn("Try send ws message but no ws instance", e, t), n.label = 6;
                case 6:
                  return [2]
              }
            }))
          }))
        }, t.prototype.callYunApi = function (e, t, r) {
          void 0 === t && (t = {});
          var o = (void 0 === r ? {} : r).doNotRetry;
          return n.__awaiter(this, void 0, void 0, (function () {
            var r, a, l, f, d, h, p, _, g, v, m, y;
            return n.__generator(this, (function (n) {
              switch (n.label) {
                case 0:
                  r = i.default(), a = this.sdk.loginManager, l = a.accessToken, f = a.appKey, (t = Object.assign({}, t, {
                    RequestId: r
                  })).AccessToken = l, d = {
                    Action: e,
                    ActionParams: t
                  }, this.options.apiPlatform ? d.Platform = this.options.apiPlatform : d.AppKey = f, c.default.debug("yunapi start(" + r + ") => ", d), n.label = 1;
                case 1:
                  return n.trys.push([1, 3, , 11]), [4, this.send("YunApi", d, {
                    reqId: r
                  })];
                case 2:
                  if (!(h = n.sent())) throw c.default.error("empty response", d), {
                    msg: "连接服务器失败，请稍后重试"
                  };
                  if (!(p = h.Response)) throw c.default.error("empty response", d, p), {
                    msg: "连接服务器失败，请稍后重试"
                  };
                  if (_ = p.Error, g = p.error, v = p.error_message, _) throw {
                    code: _.Code,
                    msg: _.Message
                  };
                  if (g) throw {
                    code: g,
                    msg: v
                  };
                  return c.default.debug("yunapi success(" + r + ") => ", d, p), [2, p];
                case 3:
                  if (m = n.sent(), c.default.error("yunapi fail(" + r + ") => ", m), !u.isVerifyLoginError(m)) return [3, 10];
                  if (o) return [3, 8];
                  n.label = 4;
                case 4:
                  return n.trys.push([4, 6, , 7]), [4, this.sdk.loginManager.reLogin()];
                case 5:
                  return n.sent(), [3, 7];
                case 6:
                  return y = n.sent(), c.default.error("reLogin fail", y), [2, Promise.reject(u.genVerifyLoginFailError(m))];
                case 7:
                  return [2, this.callYunApi(e, t, {
                    doNotRetry: !0
                  })];
                case 8:
                  return [4, this.sdk.loginManager.logout()];
                case 9:
                  return n.sent(), [2, u.genVerifyLoginFailError(m)];
                case 10:
                  return s.isPlainObject(m) && (m.reqId = r), [2, Promise.reject(m)];
                case 11:
                  return [2]
              }
            }))
          }))
        }, t.prototype.sendWsHeatBeat = function () {
          if (this._subscribeDeviceIdList && this._subscribeDeviceIdList.length) return this.callYunApi("AppDeviceTraceHeartBeat", {
            DeviceIds: this._subscribeDeviceIdList
          })
        }, t.prototype.activePush = function (e) {
          var t = this;
          e && (this._subscribeDeviceIdList = e);
          var r = this.sdk.loginManager,
            n = r.isLogin,
            o = r.accessToken,
            i = r.appKey;
          n && o && this._subscribeDeviceIdList && (this.send("ActivePush", {
            DeviceIds: this._subscribeDeviceIdList,
            AccessToken: o,
            AppKey: i
          }), this.sendWsHeatBeat(), clearInterval(this._heartBeatTimer), this._heartBeatTimer = setInterval((function () {
            return t.sendWsHeatBeat()
          }), this.options.heartbeatInterval))
        }, t
      }(o.default);
    t.IotWebsocket = f
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = r(4).__importStar(r(15)),
      o = function () {
        function e(e) {
          this.url = e, this.ws = null, this.initWs()
        }
        return e.prototype.initWs = function () {
          n.isMiniProgram ? this.ws = wx.connectSocket({
            url: this.url
          }) : this.ws = new window.WebSocket(this.url)
        }, e.prototype.send = function (e) {
          var t = e.data;
          n.isMiniProgram ? this.ws.send({
            data: t
          }) : this.ws.send(t)
        }, e.prototype.close = function (e) {
          var t = void 0 === e ? {} : e,
            r = t.code,
            o = t.reason;
          n.isMiniProgram ? this.ws.close({
            code: r,
            reason: o
          }) : this.ws.close(r, o)
        }, e.prototype.onOpen = function (e) {
          n.isMiniProgram ? this.ws.onOpen(e) : this.ws.addEventListener("open", e)
        }, e.prototype.onClose = function (e) {
          n.isMiniProgram ? this.ws.onClose(e) : this.ws.addEventListener("close", e)
        }, e.prototype.onMessage = function (e) {
          n.isMiniProgram ? this.ws.onMessage(e) : this.ws.addEventListener("message", e)
        }, e.prototype.onError = function (e) {
          n.isMiniProgram ? this.ws.onError(e) : this.ws.addEventListener("error", e)
        }, e
      }();
    t.WebSocket = o
  }, function (e, t) {
    const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    t.encodeBase64 = e => {
      if (!e) return !1;
      let t, n, o, i, s, a, c, u = "",
        l = 0;
      do {
        t = e.charCodeAt(l++), n = e.charCodeAt(l++), o = e.charCodeAt(l++), i = t >> 2, s = (3 & t) << 4 | n >> 4, a = (15 & n) << 2 | o >> 6, c = 63 & o, isNaN(n) ? a = c = 64 : isNaN(o) && (c = 64), u += r.charAt(i) + r.charAt(s) + r.charAt(a) + r.charAt(c)
      } while (l < e.length);
      return u
    }, t.decodeBase64 = e => {
      if (!e) return !1;
      e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      let t, n, o, i, s = "",
        a = 0;
      do {
        t = r.indexOf(e.charAt(a++)), n = r.indexOf(e.charAt(a++)), o = r.indexOf(e.charAt(a++)), i = r.indexOf(e.charAt(a++)), s += String.fromCharCode(t << 2 | n >> 4), 64 != o && (s += String.fromCharCode((15 & n) << 4 | o >> 2)), 64 != i && (s += String.fromCharCode((3 & o) << 6 | i))
      } while (a < e.length);
      return s
    }
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = r(4),
      o = n.__importDefault(r(10)),
      i = r(45),
      s = r(54);
    t.connectDevice = function (e, t) {
      var r = t.connectType,
        a = void 0 === r ? "smartconfig" : r,
        c = t.connectOpts;
      return n.__awaiter(this, void 0, void 0, (function () {
        return n.__generator(this, (function (t) {
          return o.default.info("weclome to wifi-connect use " + a), "smartconfig" === a ? i.connectDeviceUseSmartConfig(e, c) : s.connectDeviceUseSoftAp(e, c), [2]
        }))
      }))
    }
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = r(4),
      o = r(5),
      i = r(16),
      s = n.__importDefault(r(10)),
      a = r(7),
      c = r(14),
      u = r(55),
      l = r(52),
      f = function (e) {
        var t = new Uint8Array(e),
          r = String.fromCharCode.apply(null, t);
        return decodeURIComponent(escape(r))
      },
      d = "2.0";
    t.connectDeviceUseSmartConfig = function (e, t) {
      var r = t.targetWifiInfo,
        h = t.bindDeviceToken,
        p = t.familyId,
        _ = void 0 === p ? "default" : p,
        g = t.udpPort,
        v = void 0 === g ? 8266 : g,
        m = t.queryTokenRetryTime,
        y = void 0 === m ? 20 : m,
        C = t.queryTokenGap,
        E = void 0 === C ? 2e3 : C,
        T = t.stepGap,
        S = void 0 === T ? 3e3 : T,
        I = t.modalConfirmColor,
        b = void 0 === I ? a.themeColorMap.primary : I,
        w = t.modalCancelColor,
        A = void 0 === w ? a.themeColorMap.weak : w,
        D = t.onProgress,
        O = void 0 === D ? o.noop : D,
        N = t.onError,
        R = void 0 === N ? o.noop : N,
        k = t.onComplete,
        P = void 0 === k ? o.noop : k;
      return n.__awaiter(this, void 0, void 0, (function () {
        var t, p, g, m, C, T, I, w = this;
        return n.__generator(this, (function (D) {
          switch (D.label) {
            case 0:
              return D.trys.push([0, 3, , 4]), p = function (e) {
                s.default.debug("smartconfig-receive-unhandled-msg", {
                  data: {
                    message: e
                  }
                })
              }, m = function (e, r) {
                "string" != typeof r && (r = JSON.stringify(r)), t.send({
                  address: e,
                  port: v,
                  message: r
                })
              }, C = function (e, t) {
                return n.__awaiter(w, void 0, void 0, (function () {
                  var r = this;
                  return n.__generator(this, (function (i) {
                    return [2, new Promise((function (i, u) {
                      return n.__awaiter(r, void 0, void 0, (function () {
                        var r, l, f, d;
                        return n.__generator(this, (function (n) {
                          switch (n.label) {
                            case 0:
                              n.trys.push([0, 4, , 5]), r = !0, l = 0, p = function (e) {
                                try {
                                  r = !1, i(e)
                                } catch (e) {
                                  u(e)
                                }
                              }, (f = function () {
                                l++, s.default.debug("smartconfig-udp-send-msg", {
                                  data: {
                                    msg: t,
                                    retryCount: l
                                  }
                                }), m(e, t)
                              })(), n.label = 1;
                            case 1:
                              return r && l < 20 ? [4, o.delay(500)] : [3, 3];
                            case 2:
                              return n.sent(), r ? (f(), [3, 1]) : [2];
                            case 3:
                              return u({
                                code: a.ConnectDeviceErrorCode.UDP_NOT_RESPONSED
                              }), [3, 5];
                            case 4:
                              return d = n.sent(), (d = c.normalizeError(d)).code = a.ConnectDeviceErrorCode.SEND_UDP_MSG_FAIL, u(d), [3, 5];
                            case 5:
                              return [2]
                          }
                        }))
                      }))
                    }))]
                  }))
                }))
              }, T = function () {
                return n.__awaiter(w, void 0, void 0, (function () {
                  var i, c, v, m, T, I, w, D, O, N, R, k = this;
                  return n.__generator(this, (function (P) {
                    switch (P.label) {
                      case 0:
                        i = !1, v = new u.EsptouchTask({
                          apSsid: r.SSID,
                          apBssid: r.BSSID,
                          apPassword: r.password,
                          logger: s.default
                        }), P.label = 1;
                      case 1:
                        P.trys.push([1, 7, , 8]), g(a.ConnectDeviceStepCode.CONNECT_SMARTCONFIG_START), P.label = 2;
                      case 2:
                        return P.trys.push([2, 4, , 5]), [4, v.startSmartConfig()];
                      case 3:
                        return m = P.sent(), T = (m && m.length && m[m.length - 1] && m[m.length - 1].remoteInfo).address, c = T, [3, 5];
                      case 4:
                        throw I = P.sent(), n.__assign({
                          code: a.ConnectDeviceErrorCode.SMART_CONFIG_FAIL
                        }, I);
                      case 5:
                        if (!c) throw {
                          code: a.ConnectDeviceErrorCode.SMART_CONFIG_INVALID_RESPONSE
                        };
                        return s.default.info("smartconfig-task-success", {
                          data: {
                            targetUdpAddress: c
                          }
                        }), g(a.ConnectDeviceStepCode.CONNECT_SMARTCONFIG_SUCCESS, {
                          targetUdpAddress: c
                        }), (t = wx.createUDPSocket()).bind(), w = o.genPromise(), D = o.genPromise(), O = o.genPromise(), t.onError((function (e) {
                          return w.reject({
                            code: a.ConnectDeviceErrorCode.UDP_ERROR,
                            errMsg: e
                          })
                        })), t.onMessage((function (e) {
                          try {
                            var t = JSON.parse(f(e.message));
                            s.default.debug("smartconfig-udp-on-message", {
                              data: {
                                message: t
                              }
                            }), 2 == +t.cmdType && ("Current_Error" === t.deviceReply ? O.reject({
                              code: a.ConnectDeviceErrorCode.DEVICE_ERROR,
                              errMsg: t
                            }) : "Previous_Error" === t.deviceReply ? s.default.debug("smartconfig-receive-prev-error", {
                              data: {
                                message: t
                              }
                            }) : p(t))
                          } catch (e) {
                            s.default.debug("smartconfig-udp-parse-message-error", {
                              error: e
                            })
                          }
                        })), N = function () {
                          return n.__awaiter(k, void 0, void 0, (function () {
                            var r, u, f, p, v, m = this;
                            return n.__generator(this, (function (T) {
                              switch (T.label) {
                                case 0:
                                  return r = function (e) {
                                    return void 0 === e && (e = S), n.__awaiter(m, void 0, void 0, (function () {
                                      return n.__generator(this, (function (t) {
                                        switch (t.label) {
                                          case 0:
                                            return [4, o.delay(e)];
                                          case 1:
                                            if (t.sent(), i) throw s.default.debug("connection aborted"), null;
                                            return [2]
                                        }
                                      }))
                                    }))
                                  }, u = Date.now(), console.log("step check", u), [4, r()];
                                case 1:
                                  return T.sent(), console.log("after step check", Date.now() - u), g(a.ConnectDeviceStepCode.CREATE_UDP_CONNECTION_SUCCESS), g(a.ConnectDeviceStepCode.SMARTCONFIG_SEND_TOKEN_START), [4, C(c, {
                                    cmdType: 0,
                                    token: h
                                  })];
                                case 2:
                                  return f = T.sent(), [4, r()];
                                case 3:
                                  return T.sent(), t.close(), g(a.ConnectDeviceStepCode.SMARTCONFIG_SEND_TOKEN_SUCCESS), g(a.ConnectDeviceStepCode.QUERY_TOKEN_STATE_START), p = f.productId, v = f.deviceName, [4, l.queryTokenStateAndBind(e, {
                                    token: h,
                                    productId: p,
                                    deviceName: v,
                                    familyId: _,
                                    protoVersion: d,
                                    modalConfirmColor: b,
                                    queryTokenRetryTime: y,
                                    queryTokenGap: E,
                                    modalCancelColor: A,
                                    onStepChange: function () {
                                      g(a.ConnectDeviceStepCode.QUERY_TOKEN_STATE_SUCCESS), g(a.ConnectDeviceStepCode.ADD_DEVICE_START)
                                    },
                                    reportor: s.default
                                  })];
                                case 4:
                                  return T.sent(), g(a.ConnectDeviceStepCode.ADD_DEVICE_SUCCESS), [2]
                              }
                            }))
                          }))
                        }, [4, Promise.race([N(), w.promise, D.promise, O.promise])];
                      case 6:
                        return P.sent(), [3, 8];
                      case 7:
                        return R = P.sent(), i = !0, s.default.debug("smartconfig-connect-fail", {
                          error: R
                        }), [2, Promise.reject(R)];
                      case 8:
                        return [2]
                    }
                  }))
                }))
              }, (g = function (e, t) {
                try {
                  s.default.debug("STEP => " + e + ", detail => " + JSON.stringify(t))
                } catch (e) {}
                O(n.__assign({
                  code: e,
                  msg: a.SmartConfigStepMsg[e]
                }, t))
              })(a.ConnectDeviceStepCode.CONNECT_DEVICE_START), [4, i.pify(wx.startWifi)()];
            case 1:
              return D.sent(), [4, T()];
            case 2:
              return D.sent(), g(a.ConnectDeviceStepCode.CONNECT_DEVICE_SUCCESS), P(), [3, 4];
            case 3:
              return (I = D.sent()) && I.code in a.ConnectDeviceErrorCode && (I.msg = a.SmartConfigErrorMsg[I.code]), R(I), [3, 4];
            case 4:
              return [2]
          }
        }))
      }))
    }
  }, function (e, t, r) {
    var n = function (e) {
      "use strict";
      var t, r = Object.prototype,
        n = r.hasOwnProperty,
        o = "function" == typeof Symbol ? Symbol : {},
        i = o.iterator || "@@iterator",
        s = o.asyncIterator || "@@asyncIterator",
        a = o.toStringTag || "@@toStringTag";

      function c(e, t, r, n) {
        var o = t && t.prototype instanceof _ ? t : _,
          i = Object.create(o.prototype),
          s = new A(n || []);
        return i._invoke = function (e, t, r) {
          var n = l;
          return function (o, i) {
            if (n === d) throw new Error("Generator is already running");
            if (n === h) {
              if ("throw" === o) throw i;
              return O()
            }
            for (r.method = o, r.arg = i;;) {
              var s = r.delegate;
              if (s) {
                var a = I(s, r);
                if (a) {
                  if (a === p) continue;
                  return a
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (n === l) throw n = h, r.arg;
                r.dispatchException(r.arg)
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = d;
              var c = u(e, t, r);
              if ("normal" === c.type) {
                if (n = r.done ? h : f, c.arg === p) continue;
                return {
                  value: c.arg,
                  done: r.done
                }
              }
              "throw" === c.type && (n = h, r.method = "throw", r.arg = c.arg)
            }
          }
        }(e, r, s), i
      }

      function u(e, t, r) {
        try {
          return {
            type: "normal",
            arg: e.call(t, r)
          }
        } catch (e) {
          return {
            type: "throw",
            arg: e
          }
        }
      }
      e.wrap = c;
      var l = "suspendedStart",
        f = "suspendedYield",
        d = "executing",
        h = "completed",
        p = {};

      function _() {}

      function g() {}

      function v() {}
      var m = {};
      m[i] = function () {
        return this
      };
      var y = Object.getPrototypeOf,
        C = y && y(y(D([])));
      C && C !== r && n.call(C, i) && (m = C);
      var E = v.prototype = _.prototype = Object.create(m);

      function T(e) {
        ["next", "throw", "return"].forEach((function (t) {
          e[t] = function (e) {
            return this._invoke(t, e)
          }
        }))
      }

      function S(e) {
        var t;
        this._invoke = function (r, o) {
          function i() {
            return new Promise((function (t, i) {
              ! function t(r, o, i, s) {
                var a = u(e[r], e, o);
                if ("throw" !== a.type) {
                  var c = a.arg,
                    l = c.value;
                  return l && "object" == typeof l && n.call(l, "__await") ? Promise.resolve(l.__await).then((function (e) {
                    t("next", e, i, s)
                  }), (function (e) {
                    t("throw", e, i, s)
                  })) : Promise.resolve(l).then((function (e) {
                    c.value = e, i(c)
                  }), (function (e) {
                    return t("throw", e, i, s)
                  }))
                }
                s(a.arg)
              }(r, o, t, i)
            }))
          }
          return t = t ? t.then(i, i) : i()
        }
      }

      function I(e, r) {
        var n = e.iterator[r.method];
        if (n === t) {
          if (r.delegate = null, "throw" === r.method) {
            if (e.iterator.return && (r.method = "return", r.arg = t, I(e, r), "throw" === r.method)) return p;
            r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
          }
          return p
        }
        var o = u(n, e.iterator, r.arg);
        if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, p;
        var i = o.arg;
        return i ? i.done ? (r[e.resultName] = i.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, p) : i : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, p)
      }

      function b(e) {
        var t = {
          tryLoc: e[0]
        };
        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
      }

      function w(e) {
        var t = e.completion || {};
        t.type = "normal", delete t.arg, e.completion = t
      }

      function A(e) {
        this.tryEntries = [{
          tryLoc: "root"
        }], e.forEach(b, this), this.reset(!0)
      }

      function D(e) {
        if (e) {
          var r = e[i];
          if (r) return r.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var o = -1,
              s = function r() {
                for (; ++o < e.length;)
                  if (n.call(e, o)) return r.value = e[o], r.done = !1, r;
                return r.value = t, r.done = !0, r
              };
            return s.next = s
          }
        }
        return {
          next: O
        }
      }

      function O() {
        return {
          value: t,
          done: !0
        }
      }
      return g.prototype = E.constructor = v, v.constructor = g, v[a] = g.displayName = "GeneratorFunction", e.isGeneratorFunction = function (e) {
        var t = "function" == typeof e && e.constructor;
        return !!t && (t === g || "GeneratorFunction" === (t.displayName || t.name))
      }, e.mark = function (e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, v) : (e.__proto__ = v, a in e || (e[a] = "GeneratorFunction")), e.prototype = Object.create(E), e
      }, e.awrap = function (e) {
        return {
          __await: e
        }
      }, T(S.prototype), S.prototype[s] = function () {
        return this
      }, e.AsyncIterator = S, e.async = function (t, r, n, o) {
        var i = new S(c(t, r, n, o));
        return e.isGeneratorFunction(r) ? i : i.next().then((function (e) {
          return e.done ? e.value : i.next()
        }))
      }, T(E), E[a] = "Generator", E[i] = function () {
        return this
      }, E.toString = function () {
        return "[object Generator]"
      }, e.keys = function (e) {
        var t = [];
        for (var r in e) t.push(r);
        return t.reverse(),
          function r() {
            for (; t.length;) {
              var n = t.pop();
              if (n in e) return r.value = n, r.done = !1, r
            }
            return r.done = !0, r
          }
      }, e.values = D, A.prototype = {
        constructor: A,
        reset: function (e) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(w), !e)
            for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
        },
        stop: function () {
          this.done = !0;
          var e = this.tryEntries[0].completion;
          if ("throw" === e.type) throw e.arg;
          return this.rval
        },
        dispatchException: function (e) {
          if (this.done) throw e;
          var r = this;

          function o(n, o) {
            return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var s = this.tryEntries[i],
              a = s.completion;
            if ("root" === s.tryLoc) return o("end");
            if (s.tryLoc <= this.prev) {
              var c = n.call(s, "catchLoc"),
                u = n.call(s, "finallyLoc");
              if (c && u) {
                if (this.prev < s.catchLoc) return o(s.catchLoc, !0);
                if (this.prev < s.finallyLoc) return o(s.finallyLoc)
              } else if (c) {
                if (this.prev < s.catchLoc) return o(s.catchLoc, !0)
              } else {
                if (!u) throw new Error("try statement without catch or finally");
                if (this.prev < s.finallyLoc) return o(s.finallyLoc)
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var o = this.tryEntries[r];
            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
              var i = o;
              break
            }
          }
          i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
          var s = i ? i.completion : {};
          return s.type = e, s.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, p) : this.complete(s)
        },
        complete: function (e, t) {
          if ("throw" === e.type) throw e.arg;
          return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var r = this.tryEntries[t];
            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), w(r), p
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var r = this.tryEntries[t];
            if (r.tryLoc === e) {
              var n = r.completion;
              if ("throw" === n.type) {
                var o = n.arg;
                w(r)
              }
              return o
            }
          }
          throw new Error("illegal catch attempt")
        },
        delegateYield: function (e, r, n) {
          return this.delegate = {
            iterator: D(e),
            resultName: r,
            nextLoc: n
          }, "next" === this.method && (this.arg = t), p
        }
      }, e
    }(e.exports);
    try {
      regeneratorRuntime = n
    } catch (e) {
      Function("r", "regeneratorRuntime = r")(n)
    }
  }, function (e, t) {
    e.exports = function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
        return r
      }
    }
  }, function (e, t) {
    e.exports = function (e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }
  }, function (e, t) {
    e.exports = function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }
  }, function (e, t) {
    function r(t) {
      return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = r = function (e) {
        return typeof e
      } : e.exports = r = function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, r(t)
    }
    e.exports = r
  }, function (e, t) {
    function r(t, n) {
      return e.exports = r = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e
      }, r(t, n)
    }
    e.exports = r
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = r(4),
      o = r(7),
      i = r(5),
      s = r(53);
    t.queryTokenStateAndBind = function (e, t) {
      var r = t.token,
        a = t.productId,
        c = t.deviceName,
        u = t.familyId,
        l = t.queryTokenRetryTime,
        f = void 0 === l ? 20 : l,
        d = t.queryTokenGap,
        h = void 0 === d ? 2e3 : d,
        p = t.modalConfirmColor,
        _ = t.modalCancelColor,
        g = t.protoVersion,
        v = t.onStepChange,
        m = t.reportor;
      return n.__awaiter(this, void 0, void 0, (function () {
        var t, l, d, y, C = this;
        return n.__generator(this, (function (E) {
          switch (E.label) {
            case 0:
              console.log("reportor in queryTokenStateAndBind", m), t = 0, E.label = 1;
            case 1:
              0, l = void 0, E.label = 2;
            case 2:
              return E.trys.push([2, 4, , 5]), console.log("query bindDeviceToken state for time: ", t + 1), [4, s.tryRequest((function () {
                return n.__awaiter(C, void 0, void 0, (function () {
                  return n.__generator(this, (function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, e.requestApi("AppGetDeviceBindTokenState", {
                          Token: r
                        })];
                      case 1:
                        return [2, 2 === t.sent().State]
                    }
                  }))
                }))
              }), {
                reportor: m,
                confirmColor: p,
                cancelColor: _
              })];
            case 3:
              return l = E.sent(), console.log("bindDeviceToken state: ", l), [3, 5];
            case 4:
              return d = E.sent(), [2, Promise.reject({
                code: o.ConnectDeviceErrorCode.QUERY_BIND_TOKEN_FAIL,
                detail: d,
                msg: i.getErrorMsg(d),
                reqId: d.reqId
              })];
            case 5:
              return l ? (m.info("wificonf-query-token-success", {
                protoVersion: g
              }), [3, 9]) : t < f ? [4, i.delay(h)] : [3, 7];
            case 6:
              return E.sent(), t += 1, [3, 8];
            case 7:
              throw {
                code: o.ConnectDeviceErrorCode.QUERY_BIND_TOKEN_TIMEOUT
              };
            case 8:
              return [3, 1];
            case 9:
              v(3), m.info("wificonf-add-device-start", {
                data: {
                  Token: r,
                  ProductId: a,
                  DeviceName: c,
                  FamilyId: u
                },
                protoVersion: g
              }), E.label = 10;
            case 10:
              return E.trys.push([10, 12, , 13]), [4, s.tryRequest((function () {
                return e.requestApi("AppTokenBindDeviceFamily", {
                  FamilyId: u,
                  ProductId: a,
                  DeviceName: c,
                  Token: r
                })
              }), {
                reportor: m,
                confirmColor: p,
                cancelColor: _
              })];
            case 11:
              return E.sent(), [3, 13];
            case 12:
              return y = E.sent(), [2, Promise.reject({
                code: o.ConnectDeviceErrorCode.ADD_DEVICE_FAIL,
                detail: y,
                msg: i.getErrorMsg(y),
                reqId: y.reqId
              })];
            case 13:
              return [2]
          }
        }))
      }))
    }
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = r(4),
      o = r(5);
    t.tryRequest = function (e, r) {
      var i = r.reportor,
        s = r.confirmColor,
        a = r.cancelColor;
      return n.__awaiter(void 0, void 0, void 0, (function () {
        var r;
        return n.__generator(this, (function (n) {
          switch (n.label) {
            case 0:
              return n.trys.push([0, 2, , 7]), [4, e()];
            case 1:
              return [2, n.sent()];
            case 2:
              return r = n.sent(), i.info("wificonf-try-request-fail", {
                error: r
              }), r ? r.errMsg && /request:fail/.test(r.errMsg) ? [4, o.showModal("手机切换到该网络环境后依然无法正常上网访问，请继续切换网络重试或取消配网操作", "", {
                confirmText: "重试",
                confirmColor: s,
                cancelText: "取消",
                cancelColor: a
              })] : [3, 4] : [3, 6];
            case 3:
              return n.sent() ? (i.info("wificonf-retry-request"), [2, t.tryRequest(e, {
                reportor: i,
                confirmColor: s,
                cancelColor: a
              })]) : [2, Promise.reject(r)];
            case 4:
              return [4, o.showModal(o.getErrorMsg(r), "", {
                confirmText: "重试",
                confirmColor: s,
                cancelText: "取消",
                cancelColor: a
              })];
            case 5:
              if (n.sent()) return i.info("wificonf-retry-request"), [2, t.tryRequest(e, {
                reportor: i,
                confirmColor: s,
                cancelColor: a
              })];
              n.label = 6;
            case 6:
              return [2, Promise.reject(r)];
            case 7:
              return [2]
          }
        }))
      }))
    }
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = r(4),
      o = r(5),
      i = r(16),
      s = n.__importDefault(r(18)),
      a = n.__importDefault(r(10)),
      c = r(7),
      u = r(14),
      l = function (e) {
        var t = new Uint8Array(e),
          r = String.fromCharCode.apply(null, t);
        return decodeURIComponent(escape(r))
      },
      f = function (e, t, r) {
        return void 0 === t && (t = ""), void 0 === r && (r = {}), n.__awaiter(void 0, void 0, void 0, (function () {
          return n.__generator(this, (function (o) {
            switch (o.label) {
              case 0:
                return wx.hideToast(), [4, i.pify(wx.showModal)(n.__assign({
                  title: e,
                  content: t
                }, r)).then((function (e) {
                  return !!e.confirm
                })).catch((function () {
                  return !1
                }))];
              case 1:
                return [2, o.sent()]
            }
          }))
        }))
      };
    t.connectDeviceUseSoftAp = function (e, t) {
      var r = t.targetWifiInfo,
        d = t.softApInfo,
        h = t.familyId,
        p = void 0 === h ? "default" : h,
        _ = t.udpAddress,
        g = void 0 === _ ? "192.168.4.1" : _,
        v = t.udpPort,
        m = void 0 === v ? 8266 : v,
        y = t.waitUdpResponseDuration,
        C = void 0 === y ? 2e3 : y,
        E = t.udpCommunicationRetryTime,
        T = void 0 === E ? 5 : E,
        S = t.stepGap,
        I = void 0 === S ? 3e3 : S,
        b = t.onProgress,
        w = void 0 === b ? o.noop : b,
        A = t.onError,
        D = void 0 === A ? o.noop : A,
        O = t.onComplete,
        N = void 0 === O ? o.noop : O,
        R = t.handleAddDevice;
      return n.__awaiter(this, void 0, void 0, (function () {
        var t, h, _, v, y, E, S, b, A, O, k = this;
        return n.__generator(this, (function (P) {
          switch (P.label) {
            case 0:
              s.default(), P.label = 1;
            case 1:
              return P.trys.push([1, 8, , 9]), h = function (e) {
                a.default.debug("softap-receive-unhandled-msg", {
                  data: {
                    message: e
                  }
                })
              }, v = function (e) {
                "string" != typeof e && (e = JSON.stringify(e)), t.send({
                  address: g,
                  port: m,
                  message: e
                })
              }, y = function (e) {
                return n.__awaiter(k, void 0, void 0, (function () {
                  var t = this;
                  return n.__generator(this, (function (r) {
                    return [2, new Promise((function (r, i) {
                      return n.__awaiter(t, void 0, void 0, (function () {
                        var t, s, l, f;
                        return n.__generator(this, (function (n) {
                          switch (n.label) {
                            case 0:
                              n.trys.push([0, 4, , 5]), t = !0, s = 0, h = function (e) {
                                try {
                                  t = !1, r(e)
                                } catch (e) {
                                  i(e)
                                }
                              }, (l = function () {
                                s++, a.default.debug("softap-udp-send-msg", {
                                  data: {
                                    msg: e,
                                    retryCount: s
                                  }
                                }), v(e)
                              })(), n.label = 1;
                            case 1:
                              return t && s <= T ? [4, o.delay(C)] : [3, 3];
                            case 2:
                              return n.sent(), t ? (l(), [3, 1]) : [2];
                            case 3:
                              return i({
                                code: c.ConnectDeviceErrorCode.UDP_NOT_RESPONSED
                              }), [3, 5];
                            case 4:
                              return f = n.sent(), (f = u.normalizeError(f)).code = c.ConnectDeviceErrorCode.SEND_UDP_MSG_FAIL, i(f), [3, 5];
                            case 5:
                              return [2]
                          }
                        }))
                      }))
                    }))]
                  }))
                }))
              }, E = function (e) {
                var t = e.SSID,
                  r = e.password;
                return n.__awaiter(k, void 0, void 0, (function () {
                  return n.__generator(this, (function (e) {
                    switch (e.label) {
                      case 0:
                        return [4, i.pify(wx.connectWifi)({
                          SSID: t,
                          password: r
                        })];
                      case 1:
                        return e.sent(), [4, i.pify(wx.getConnectedWifi)()];
                      case 2:
                        if (e.sent().wifi.SSID !== t) throw {
                          code: c.ConnectDeviceErrorCode.SSID_NOT_MATCH
                        };
                        return a.default.debug("softap-connect-wifi-success"), [2]
                    }
                  }))
                }))
              }, S = function () {
                return n.__awaiter(k, void 0, void 0, (function () {
                  var i, s, d, g, v, m, C = this;
                  return n.__generator(this, (function (T) {
                    switch (T.label) {
                      case 0:
                        i = !1, T.label = 1;
                      case 1:
                        return T.trys.push([1, 3, , 4]), _(c.ConnectDeviceStepCode.CREATE_UDP_CONNECTION_START), (t = wx.createUDPSocket()).bind(), s = o.genPromise(), d = o.genPromise(), g = o.genPromise(), t.onError((function (e) {
                          return s.reject({
                            code: c.ConnectDeviceErrorCode.UDP_ERROR,
                            errMsg: e
                          })
                        })), t.onMessage((function (e) {
                          try {
                            var t = JSON.parse(l(e.message));
                            a.default.debug("softap-udp-on-message", {
                              data: {
                                message: t
                              }
                            }), 2 == +t.cmdType && ("Current_Error" === t.deviceReply ? g.reject({
                              code: c.ConnectDeviceErrorCode.DEVICE_ERROR,
                              errMsg: t
                            }) : "Previous_Error" === t.deviceReply ? a.default.debug("softap-receive-prev-error", {
                              data: {
                                message: t
                              }
                            }) : h(t))
                          } catch (e) {
                            a.default.debug("softap-udp-parse-message-error", {
                              error: e
                            })
                          }
                        })), v = function () {
                          return n.__awaiter(C, void 0, void 0, (function () {
                            var s, l, d, h, g, v, m, C, T, S, b, w, A = this;
                            return n.__generator(this, (function (D) {
                              switch (D.label) {
                                case 0:
                                  return s = function (e) {
                                    return void 0 === e && (e = I), n.__awaiter(A, void 0, void 0, (function () {
                                      return n.__generator(this, (function (t) {
                                        switch (t.label) {
                                          case 0:
                                            return [4, o.delay(e)];
                                          case 1:
                                            if (t.sent(), i) throw a.default.debug("connection aborted"), null;
                                            return [2]
                                        }
                                      }))
                                    }))
                                  }, l = Date.now(), console.log("step check", l), [4, s()];
                                case 1:
                                  return D.sent(), console.log("after step check", Date.now() - l), _(c.ConnectDeviceStepCode.CREATE_UDP_CONNECTION_SUCCESS), _(c.ConnectDeviceStepCode.SEND_TARGET_WIFIINFO_START), [4, y({
                                    cmdType: 1,
                                    ssid: r.SSID,
                                    password: r.password
                                  })];
                                case 2:
                                  if ("dataRecived" !== (d = D.sent()).deviceReply) throw {
                                    code: c.ConnectDeviceErrorCode.INVALID_UDP_RESPONSE,
                                    response: d
                                  };
                                  return [4, s(5e3)];
                                case 3:
                                  return D.sent(), _(c.ConnectDeviceStepCode.SEND_TARGET_WIFIINFO_SUCCESS, {
                                    response: d
                                  }), _(c.ConnectDeviceStepCode.GET_DEVICE_SIGNATURE_START), [4, y({
                                    cmdType: 0,
                                    timestamp: parseInt(String(Date.now() / 1e3))
                                  })];
                                case 4:
                                  if (h = D.sent(), g = h.mqttState, v = h.wifiState, m = n.__rest(h, ["mqttState", "wifiState"]), "connected" !== g) throw {
                                    code: c.ConnectDeviceErrorCode.DEVICE_CONNECT_MQTT_FAIL
                                  };
                                  if ("connected" !== v) throw {
                                    code: c.ConnectDeviceErrorCode.DEVICE_CONNECT_WIFI_FAIL
                                  };
                                  return [4, s()];
                                case 5:
                                  return D.sent(), _(c.ConnectDeviceStepCode.GET_DEVICE_SIGNATURE_SUCCESS, {
                                    signature: m
                                  }), t.close(), "function" != typeof R ? [3, 7] : [4, R({
                                    Signature: m.signature,
                                    DeviceTimestamp: m.timestamp,
                                    ProductId: m.productId,
                                    DeviceName: m.deviceName,
                                    ConnId: m.connId
                                  })];
                                case 6:
                                  return [2, D.sent()];
                                case 7:
                                  C = !1, D.label = 8;
                                case 8:
                                  return D.trys.push([8, 10, , 12]), _(c.ConnectDeviceStepCode.CONNECT_TARGET_WIFI_START), [4, E(r)];
                                case 9:
                                  return D.sent(), [3, 12];
                                case 10:
                                  return T = D.sent(), [4, f("手机连接路由Wi-Fi失败，请将手机手动切换到能够正常访问的网络环境后继续配网操作", "", {
                                    confirmText: "继续",
                                    confirmColor: "#0052d9",
                                    cancelText: "取消",
                                    cancelColor: "#ff584c"
                                  })];
                                case 11:
                                  if (!D.sent()) throw S = {
                                    code: c.ConnectDeviceErrorCode.CONNECT_TARGET_WIFI_FAIL
                                  }, T && T.errMsg && (S.errMsg = T.errMsg), S;
                                  return C = !0, [3, 12];
                                case 12:
                                  return _(c.ConnectDeviceStepCode.CONNECT_TARGET_WIFI_SUCCESS, {
                                    userSkipReconnectWifi: C
                                  }), [4, s()];
                                case 13:
                                  return D.sent(), b = function () {
                                    return n.__awaiter(A, void 0, void 0, (function () {
                                      var t;
                                      return n.__generator(this, (function (r) {
                                        switch (r.label) {
                                          case 0:
                                            return r.trys.push([0, 2, , 7]), [4, e.requestApi("AppSigBindDeviceInFamily", {
                                              Signature: m.signature,
                                              DeviceTimestamp: m.timestamp,
                                              ProductId: m.productId,
                                              DeviceName: m.deviceName,
                                              ConnId: m.connId,
                                              FamilyId: p || "default"
                                            })];
                                          case 1:
                                            return [2, r.sent()];
                                          case 2:
                                            return (t = r.sent()) ? t.errMsg && /request:fail/.test(t.errMsg) ? [4, f("手机切换到该网络环境后依然无法正常上网访问，请继续切换网络重试或取消配网操作", "", {
                                              confirmText: "重试",
                                              confirmColor: "#0052d9",
                                              cancelText: "取消",
                                              cancelColor: "#ff584c"
                                            })] : [3, 4] : [3, 6];
                                          case 3:
                                            return r.sent() ? [2, b()] : [2, Promise.reject({
                                              code: c.ConnectDeviceErrorCode.ADD_DEVICE_FAIL,
                                              errMsg: t.errMsg
                                            })];
                                          case 4:
                                            return [4, f(o.getErrorMsg(t), "", {
                                              confirmText: "重试",
                                              confirmColor: "#0052d9",
                                              cancelText: "取消",
                                              cancelColor: "#ff584c"
                                            })];
                                          case 5:
                                            return r.sent() ? [2, b()] : ((t = u.normalizeError(t)).code = c.ConnectDeviceErrorCode.ADD_DEVICE_FAIL, [2, Promise.reject(t)]);
                                          case 6:
                                            return [2, Promise.reject(t)];
                                          case 7:
                                            return [2]
                                        }
                                      }))
                                    }))
                                  }, _(c.ConnectDeviceStepCode.ADD_DEVICE_START, {
                                    params: {
                                      Signature: m.signature,
                                      DeviceTimestamp: m.timestamp,
                                      ProductId: m.productId,
                                      DeviceName: m.deviceName,
                                      ConnId: m.connId
                                    }
                                  }), [4, b()];
                                case 14:
                                  return w = D.sent(), _(c.ConnectDeviceStepCode.ADD_DEVICE_SUCCESS, {
                                    response: w
                                  }), [2]
                              }
                            }))
                          }))
                        }, [4, Promise.race([v(), s.promise, d.promise, g.promise])];
                      case 2:
                        return T.sent(), [3, 4];
                      case 3:
                        return m = T.sent(), i = !0, a.default.debug("softap-connect-fail", {
                          error: m
                        }), [2, Promise.reject(m)];
                      case 4:
                        return [2]
                    }
                  }))
                }))
              }, (_ = function (e, t) {
                try {
                  a.default.debug("STEP => " + e + ", detail => " + JSON.stringify(t))
                } catch (e) {}
                w(n.__assign({
                  code: e,
                  msg: c.SoftApStepMsg[e]
                }, t))
              })(c.ConnectDeviceStepCode.CONNECT_DEVICE_START), [4, i.pify(wx.startWifi)()];
            case 2:
              if (P.sent(), !d) return [3, 6];
              P.label = 3;
            case 3:
              return P.trys.push([3, 5, , 6]), _(c.ConnectDeviceStepCode.CONNECT_SOFTAP_START), [4, E(d)];
            case 4:
              return P.sent(), _(c.ConnectDeviceStepCode.CONNECT_SOFTAP_SUCCESS), [3, 6];
            case 5:
              throw b = P.sent(), A = {
                code: c.ConnectDeviceErrorCode.CONNECT_SOFTAP_FAIL
              }, b && b.errMsg && (A.errMsg = b.errMsg), A;
            case 6:
              return [4, S()];
            case 7:
              return P.sent(), _(c.ConnectDeviceStepCode.CONNECT_DEVICE_SUCCESS), N(), [3, 9];
            case 8:
              return (O = P.sent()) && O.code in c.ConnectDeviceErrorCode && (O.msg = c.SoftApErrorMsg[O.code]), D(O), [3, 9];
            case 9:
              return [2]
          }
        }))
      }))
    }
  }, function (e, t, r) {
    "use strict";
    r.r(t);
    var n = r(6),
      o = r.n(n),
      i = r(9),
      s = r.n(i),
      a = r(2),
      c = r.n(a),
      u = r(3),
      l = r.n(u),
      f = r(0),
      d = r.n(f),
      h = r(21),
      p = r.n(h),
      _ = new(function () {
        function e() {
          c()(this, e), d()(this, "ESPTOUCH_ENCODING_CHARSET", "UTF-8")
        }
        return l()(e, [{
          key: "stringToByteArray",
          value: function (e) {
            for (var t = [], r = 0, n = 0; n < e.length; n++) {
              var o = e.charCodeAt(n);
              o > 255 && (t[r++] = 255 & o, o >>= 8), t[r++] = o
            }
            return t
          }
        }, {
          key: "putString2bytes",
          value: function (e, t, r, n, o) {
            for (var i = this.stringToByteArray(t), s = 0; s < o; s++) e[o + s] = i[s]
          }
        }, {
          key: "convertUint8toByte",
          value: function (e) {
            return "string" == typeof e && (e = e.charCodeAt(0)), new Int8Array([e])[0]
          }
        }, {
          key: "convertNumberToChar",
          value: function (e) {
            return new Uint16Array([e])[0]
          }
        }, {
          key: "convertNumberToByte",
          value: function (e) {
            return new Int8Array([e])[0]
          }
        }, {
          key: "convertByte2Uint8",
          value: function (e) {
            return "string" == typeof e && (e = e.charCodeAt(0)), 255 & e
          }
        }, {
          key: "convertBytes2Uint8s",
          value: function (e) {
            for (var t = e.length, r = new Array(t), n = 0; n < t; n++) r[n] = this.convertByte2Uint8(e[n]);
            return r
          }
        }, {
          key: "putbytes2Uint8s",
          value: function (e, t, r, n, o) {
            for (var i = 0; i < o; i++) e[r + i] = this.convertByte2Uint8(t[n + i])
          }
        }, {
          key: "byteToHex",
          value: function (e) {
            var t = e.toString(16);
            return t.length > 1 ? t : "0".concat(t)
          }
        }, {
          key: "byteArrayToHex",
          value: function (e, t) {
            var r = this;
            return e.map((function (e) {
              return r.byteToHex(e)
            })).join(t || "")
          }
        }, {
          key: "convertByte2HexString",
          value: function (e) {
            var t = this.convertByte2Uint8(e);
            return this.byteToHex(t)
          }
        }, {
          key: "convertU8ToHexString",
          value: function (e) {
            return this.byteToHex(e)
          }
        }, {
          key: "splitUint8To2bytes",
          value: function (e) {
            if (e < 0 || e > 255) throw "Out of Boundary";
            var t, r, n = this.convertByte2HexString(e);
            return n.length > 1 ? (r = parseInt(n.substring(0, 1), 16), t = parseInt(n.substring(1, 2), 16)) : (r = 0, t = parseInt(n.substring(0, 1), 16)), new Array(r, t)
          }
        }, {
          key: "combine2bytesToOne",
          value: function (e, t) {
            if (e < 0 || e > 15 || t < 0 || t > 15) throw "Out of Boundary";
            return e << 4 | t
          }
        }, {
          key: "combine2bytesToU16",
          value: function (e, t) {
            return this.convertByte2Uint8(e) << 8 | this.convertByte2Uint8(t)
          }
        }, {
          key: "getSpecBytesFromChar",
          value: function (e) {
            for (var t = new Int8Array(e), r = 0; r < e; r++) t[r] = this.convertUint8toByte("1");
            return t
          }
        }, {
          key: "genSpecBytes",
          value: function (e) {
            var t = this.convertByte2Uint8(e);
            return this.getSpecBytesFromChar(t)
          }
        }, {
          key: "parseBssid",
          value: function (e) {
            var t = new Int8Array(p()(e));
            return this.getParsedBssid(t)
          }
        }, {
          key: "getParsedBssid",
          value: function (e) {
            for (var t, r = "", n = 0; n < e.length; n++) {
              t = 255 & e[n], r += this.byteToHex(t)
            }
            return r
          }
        }, {
          key: "parseBssid2bytes",
          value: function (e) {
            for (var t = e.split(":"), r = new Int8Array(t.length), n = 0; n < t.length; n++) r[n] = parseInt(t[n], 16);
            return r
          }
        }, {
          key: "stringToUtf8ByteArray",
          value: function (e) {
            for (var t = new Int8Array(e.length), r = 0, n = 0; n < e.length; n++) {
              var o = e.charCodeAt(n);
              o < 128 ? t[r++] = o : o < 2048 ? (t[r++] = o >> 6 | 192, t[r++] = 63 & o | 128) : 55296 == (64512 & o) && n + 1 < e.length && 56320 == (64512 & e.charCodeAt(n + 1)) ? (o = 65536 + ((1023 & o) << 10) + (1023 & e.charCodeAt(++n)), t[r++] = o >> 18 | 240, t[r++] = o >> 12 & 63 | 128, t[r++] = o >> 6 & 63 | 128, t[r++] = 63 & o | 128) : (t[r++] = o >> 12 | 224, t[r++] = o >> 6 & 63 | 128, t[r++] = 63 & o | 128)
            }
            return t
          }
        }, {
          key: "getBytesByString",
          value: function (e) {
            try {
              switch (this.ESPTOUCH_ENCODING_CHARSET) {
                case "UTF-8":
                  return this.stringToUtf8ByteArray(e)
              }
            } catch (e) {
              throw "the charset is invalid"
            }
          }
        }, {
          key: "testSplitUint8To2bytes",
          value: function () {
            var e = this.splitUint8To2bytes(20);
            1 === e[0] && 4 === e[1] ? console.log("test_splitUint8To2bytes(): pass") : console.log("test_splitUint8To2bytes(): fail")
          }
        }, {
          key: "testCombine2bytesToOne",
          value: function () {
            20 === this.combine2bytesToOne(1, 4) ? console.log("test_combine2bytesToOne(): pass") : console.log("test_combine2bytesToOne(): fail")
          }
        }, {
          key: "testConvertChar2Uint8",
          value: function () {
            97 === this.convertByte2Uint8("a") && 128 === this.convertByte2Uint8(-128) && 255 === this.convertByte2Uint8(-1) ? console.log("test_convertChar2Uint8(): pass") : console.log("test_convertChar2Uint8(): fail")
          }
        }, {
          key: "testConvertUint8toByte",
          value: function () {
            97 === this.convertUint8toByte("a") && -128 === this.convertUint8toByte(128) && -1 === this.convertUint8toByte(255) ? console.log("test_convertUint8toByte(): pass") : console.log("test_convertUint8toByte(): fail")
          }
        }, {
          key: "testParseBssid",
          value: function () {
            var e = [15, -2, 52, -102, -93, -60];
            console.log(this.parseBssid(e)), "0ffe349aa3c4" === this.parseBssid(e) ? console.log("test_parseBssid(): pass") : console.log("test_parseBssid(): fail")
          }
        }, {
          key: "testMain",
          value: function () {
            this.testConvertUint8toByte(), this.testConvertChar2Uint8(), this.testSplitUint8To2bytes(), this.testCombine2bytesToOne(), this.testParseBssid()
          }
        }]), e
      }()),
      g = function () {
        function e(t) {
          if (c()(this, e), d()(this, "mData", ""), "string" == typeof t) this.mData = _.stringToByteArray(t);
          else {
            if (!(t instanceof Int8Array)) throw "data cannot be null";
            this.mData = t
          }
        }
        return l()(e, [{
          key: "getData",
          value: function () {
            return this.mData
          }
        }]), e
      }(),
      v = r(11),
      m = r.n(v),
      y = r(12),
      C = r.n(y),
      E = r(1),
      T = r.n(E),
      S = r(13),
      I = r.n(S),
      b = new(function () {
        function e() {
          c()(this, e), this.mBroadcast = !0, this.mIntervalGuideCodeMillisecond = 20, this.mIntervalDataCodeMillisecond = 20, this.mTimeoutGuideCodeMillisecond = 1500, this.mTimeoutDataCodeMillisecond = 5e3, this.mTotalRepeatTime = 1, this.mEsptouchResultOneLen = 1, this.mEsptouchResultMacLen = 6, this.mEsptouchResultIpLen = 4, this.mEsptouchResultTotalLen = 11, this.mPortListening = 18266, this.mTargetPort = 7001, this.mWaitUdpReceivingMilliseond = 25e3, this.mWaitUdpSendingMillisecond = 45e3, this.mThresholdSucBroadcastCount = 1, this.mExpectTaskResultCount = 1, this._datagramCount = 0
        }
        return l()(e, [{
          key: "getIntervalGuideCodeMillisecond",
          value: function () {
            return this.mIntervalGuideCodeMillisecond
          }
        }, {
          key: "getIntervalDataCodeMillisecond",
          value: function () {
            return this.mIntervalDataCodeMillisecond
          }
        }, {
          key: "getTimeoutGuideCodeMillisecond",
          value: function () {
            return this.mTimeoutGuideCodeMillisecond
          }
        }, {
          key: "getTimeoutDataCodeMillisecond",
          value: function () {
            return this.mTimeoutDataCodeMillisecond
          }
        }, {
          key: "getTimeoutTotalCodeMillisecond",
          value: function () {
            return this.mTimeoutGuideCodeMillisecond + this.mTimeoutDataCodeMillisecond
          }
        }, {
          key: "getTotalRepeatTime",
          value: function () {
            return this.mTotalRepeatTime
          }
        }, {
          key: "getEsptouchResultOneLen",
          value: function () {
            return this.mEsptouchResultOneLen
          }
        }, {
          key: "getEsptouchResultMacLen",
          value: function () {
            return this.mEsptouchResultMacLen
          }
        }, {
          key: "getEsptouchResultIpLen",
          value: function () {
            return this.mEsptouchResultIpLen
          }
        }, {
          key: "getEsptouchResultTotalLen",
          value: function () {
            return this.mEsptouchResultTotalLen
          }
        }, {
          key: "getPortListening",
          value: function () {
            return this.mPortListening
          }
        }, {
          key: "getTargetHostname",
          value: function () {
            if (this.mBroadcast) return "255.255.255.255";
            var e = this.__getNextDatagramCount();
            return "234.".concat(e, ".").concat(e, ".").concat(e)
          }
        }, {
          key: "getTargetPort",
          value: function () {
            return this.mTargetPort
          }
        }, {
          key: "getWaitUdpReceivingMillisecond",
          value: function () {
            return this.mWaitUdpReceivingMilliseond
          }
        }, {
          key: "getWaitUdpSendingMillisecond",
          value: function () {
            return this.mWaitUdpSendingMillisecond
          }
        }, {
          key: "getWaitUdpTotalMillisecond",
          value: function () {
            return this.mWaitUdpReceivingMilliseond + this.mWaitUdpSendingMillisecond
          }
        }, {
          key: "setWaitUdpTotalMillisecond",
          value: function (e) {
            if (e < this.mWaitUdpReceivingMilliseond + this.getTimeoutTotalCodeMillisecond()) throw new Error("waitUdpTotalMillisecod is invalid, it is less than ".concat(this.mWaitUdpReceivingMilliseond, " ").concat(this.getTimeoutTotalCodeMillisecond()));
            this.mWaitUdpSendingMillisecond = e - this.mWaitUdpReceivingMilliseond
          }
        }, {
          key: "getThresholdSucBroadcastCount",
          value: function () {
            return this.mThresholdSucBroadcastCount
          }
        }, {
          key: "getExpectTaskResultCount",
          value: function () {
            return this.mExpectTaskResultCount
          }
        }, {
          key: "setExpectTaskResultCount",
          value: function (e) {
            this.mExpectTaskResultCount = e
          }
        }, {
          key: "setBroadcast",
          value: function (e) {
            this.mBroadcast = e
          }
        }, {
          key: "__getNextDatagramCount",
          value: function () {
            return 1 + this._datagramCount++ % 100
          }
        }]), e
      }()),
      w = r(8),
      A = r.n(w);
    var D = r(5),
      O = function (e) {
        return new Promise((function (e, t) {
          e()
        }))
      },
      N = function (e) {
        function t(e) {
          var r;
          return c()(this, t), r = m()(this, C()(t).call(this)), d()(T()(r), "TAG", "UDPSocketClient"), d()(T()(r), "mSocket", void 0), d()(T()(r), "mInterval", void 0), d()(T()(r), "isClose", void 0), d()(T()(r), "dataQueue", {}), d()(T()(r), "queueExcuteState", {}), r.checkIsSupport() && (r.mSocket = wx.createUDPSocket(), r.mSocket.bind(e), r.isClose = !1, r.mSocket.onClose((function () {
            r.isClose = !0
          })), r.errorHandler = function (e) {
            r.emit("udpSocketError", e)
          }, r.mSocket.onError(r.errorHandler)), r
        }
        var r;
        return I()(t, e), l()(t, [{
          key: "checkIsSupport",
          value: function () {
            return !(function (e, t) {
              e = e.split("."), t = t.split(".");
              for (var r = Math.max(e.length, t.length); e.length < r;) e.push("0");
              for (; t.length < r;) t.push("0");
              for (var n = 0; n < r; n++) {
                var o = parseInt(e[n]),
                  i = parseInt(t[n]);
                if (o > i) return 1;
                if (o < i) return -1
              }
              return 0
            }(wx.getSystemInfoSync().SDKVersion, "2.7.0") < 0) || (this.emit("udpSocketError", "当前微信版本过低，无法使用udpsocket的功能，请升级到最新微信版本后重试。"), !1)
          }
        }, {
          key: "interrupt",
          value: function () {
            console.log(this.TAG, "USPSocketClient is interrupt"), this.close()
          }
        }, {
          key: "close",
          value: function () {
            this.isClose = !0, this.mSocket.offError(this.errorHandler), this.mSocket.close()
          }
        }, {
          key: "sendDataSideBySide",
          value: function (e) {
            var t = this,
              r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              n = arguments.length > 2 ? arguments[2] : void 0,
              o = arguments.length > 3 ? arguments[3] : void 0,
              i = arguments.length > 4 ? arguments[4] : void 0,
              s = arguments.length > 5 ? arguments[5] : void 0,
              a = arguments.length > 6 ? arguments[6] : void 0;
            if (1 === n) return this.mSocket.send({
              address: o,
              port: i,
              message: e[r]
            }), a();
            setTimeout((function () {
              var c = Math.min(e.length - 1, r + 1),
                u = c >= e.length - 1 ? 1 : n - 1;
              t.mSocket.send({
                address: o,
                port: i,
                message: e[r]
              }), t.sendDataSideBySide(e, c, u, o, i, s, a)
            }), s)
          }
        }, {
          key: "sendData",
          value: (r = s()(o.a.mark((function e(t) {
            var r, n, i, s, a, c, u = arguments;
            return o.a.wrap((function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  if (r = u.length > 1 && void 0 !== u[1] ? u[1] : 0, n = u.length > 2 ? u[2] : void 0, i = u.length > 3 ? u[3] : void 0, s = u.length > 4 ? u[4] : void 0, a = u.length > 5 ? u[5] : void 0, !(null == t || t.length <= 0)) {
                    e.next = 8;
                    break
                  }
                  return console.log(this.TAG, "sendData(): data == null or length <= 0"), e.abrupt("return");
                case 8:
                  if (!this.isClose) {
                    e.next = 11;
                    break
                  }
                  return console.log(this.TAG, "udpsocket is close"), e.abrupt("return");
                case 11:
                  c = r;
                case 12:
                  if (!(c < Math.min(r + n, t.length))) {
                    e.next = 19;
                    break
                  }
                  return this.mSocket.send({
                    address: i,
                    port: s,
                    message: t[c]
                  }), e.next = 16, O();
                case 16:
                  c++, e.next = 12;
                  break;
                case 19:
                  return e.next = 21, Object(D.delay)(a);
                case 21:
                case "end":
                  return e.stop()
              }
            }), e, this)
          }))), function (e) {
            return r.apply(this, arguments)
          })
        }]), t
      }(A.a),
      R = function (e) {
        function t(e, r, n) {
          var o;
          return c()(this, t), o = m()(this, C()(t).call(this)), d()(T()(o), "TAG", "UDPSocketServer"), d()(T()(o), "mSocket", void 0), d()(T()(o), "mSocketTimeoutTimer", void 0), d()(T()(o), "mTimeout", void 0), d()(T()(o), "mCorrectLen", void 0), d()(T()(o), "isClose", void 0), o.mSocket = e, o.isClose = !1, o.mSocket.onClose((function () {
            o.isClose = !0
          })), o.mTimeout = r, o.mCorrectLen = n, o
        }
        return I()(t, e), l()(t, [{
          key: "startServer",
          value: function () {
            this.handlerTimeout(this.mTimeout), this.onListening(), this.onMessage(this.mCorrectLen)
          }
        }, {
          key: "handlerTimeout",
          value: function (e) {
            var t = this;
            this.mSocketTimeoutTimer = setTimeout((function () {
              t.close()
            }), e)
          }
        }, {
          key: "onMessage",
          value: function (e) {
            var t = this;
            this.msgHandler = function (r) {
              t.isClose || (console.log(t.TAG, "recieveMsg", r), t.emit("recieveMsg", r), r.remoteInfo.size === e ? t.emit("recieveCorrectMsg", r) : console.log(t.TAG, "received len is different from specific len"))
            }, this.mSocket.onMessage(this.msgHandler)
          }
        }, {
          key: "onListening",
          value: function () {
            var e = this;
            this.mSocket.onListening((function (t) {
              e.isClose || (e.emit("recieveMsg", t), console.log(e.TAG, "onListening", t))
            }))
          }
        }, {
          key: "interrupt",
          value: function () {
            console.log(this.TAG, "USPSocketServer is interrupt"), this.mSocket.offMessage(this.msgHandler), this.close()
          }
        }, {
          key: "close",
          value: function () {
            this.isClose = !0, this.mSocket.close()
          }
        }]), t
      }(A.a),
      k = function () {
        function e() {
          c()(this, e), d()(this, "crcTable", new Int32Array(256)), d()(this, "CRC_POLYNOM", 140), d()(this, "CRC_INITIAL", 0), d()(this, "init", void 0), d()(this, "value", void 0);
          for (var t = 0; t < 256; t++) {
            for (var r = t, n = 0; n < 8; ++n) 0 != (1 & r) ? r = r >>> 1 ^ this.CRC_POLYNOM : r >>>= 1;
            this.crcTable[t] = r
          }
          this.value = this.init = this.CRC_INITIAL
        }
        return l()(e, [{
          key: "updateValue",
          value: function (e, t, r) {
            for (var n = 0; n < r; n++) {
              var o = e[t + n] ^ this.value;
              this.value = this.crcTable[255 & o] ^ this.value << 8
            }
          }
        }, {
          key: "update",
          value: function (e) {
            e instanceof Int8Array ? this.updateValue(e, 0, e.length) : "number" == typeof e && this.update(new Int8Array([_.convertNumberToByte(e)]))
          }
        }, {
          key: "getValue",
          value: function () {
            return 255 & this.value
          }
        }, {
          key: "reset",
          value: function () {
            this.value = this.init
          }
        }]), e
      }(),
      P = function () {
        function e(t, r) {
          if (c()(this, e), d()(this, "DATA_CODE_LEN", 6), d()(this, "INDEX_MAX", 127), d()(this, "mSeqHeader", void 0), d()(this, "mDataHigh", void 0), d()(this, "mDataLow", void 0), d()(this, "mCrcHigh", void 0), d()(this, "mCrcLow", void 0), r > this.INDEX_MAX) throw "index > INDEX_MAX";
          var n = _.splitUint8To2bytes(t);
          this.mDataHigh = n[0], this.mDataLow = n[1];
          var o = new k;
          o.update(_.convertUint8toByte(t)), o.update(r);
          var i = _.splitUint8To2bytes(_.convertNumberToChar(o.getValue()));
          this.mCrcHigh = i[0], this.mCrcLow = i[1], this.mSeqHeader = _.convertNumberToByte(r)
        }
        return l()(e, [{
          key: "getBytes",
          value: function () {
            var e = new Int8Array(this.DATA_CODE_LEN);
            return e[0] = 0, e[1] = _.combine2bytesToOne(this.mCrcHigh, this.mDataHigh), e[2] = 1, e[3] = this.mSeqHeader, e[4] = 0, e[5] = _.combine2bytesToOne(this.mCrcLow, this.mDataLow), e
          }
        }, {
          key: "toString",
          value: function () {
            for (var e = "", t = this.getBytes(), r = 0; r < this.DATA_CODE_LEN; r++) {
              var n = _.convertByte2HexString(t[r]);
              e += "0x", 1 === n.length && (e += "0"), e = "".concat(e + n, " ")
            }
            return e
          }
        }, {
          key: "getU8s",
          value: function () {
            throw "DataCode don't support getU8s()"
          }
        }]), e
      }(),
      M = function () {
        function e(t, r, n, o, i) {
          c()(this, e), d()(this, "EXTRA_LEN", 40), d()(this, "EXTRA_HEAD_LEN", 5), d()(this, "DATA_CODE_LEN", 6), d()(this, "mDataCodes", void 0);
          var s = 0,
            a = n.length,
            u = new k;
          u.update(t);
          var l = _.convertNumberToChar(u.getValue());
          u.reset(), u.update(r);
          var f = _.convertNumberToChar(u.getValue()),
            h = t.length,
            p = function () {
              for (var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").split("."), t = new Int8Array(e.length), r = 0; r < e.length; r++) {
                var n = parseInt(e[r]);
                t[r] = n > 127 ? n - 256 : n
              }
              return t
            }(o),
            g = p.length,
            v = _.convertNumberToChar(this.EXTRA_HEAD_LEN + g + a + h);
          this.mDataCodes = [], this.mDataCodes.push(new P(v, 0)), s ^= v, this.mDataCodes.push(new P(a, 1)), s ^= a, this.mDataCodes.push(new P(l, 2)), s ^= l, this.mDataCodes.push(new P(f, 3)), s ^= f;
          for (var m = 0; m < g; ++m) {
            var y = _.convertByte2Uint8(p[m]);
            s ^= y, this.mDataCodes.push(new P(y, m + this.EXTRA_HEAD_LEN))
          }
          for (var C = 0; C < n.length; C++) {
            var E = _.convertByte2Uint8(n[C]);
            s ^= E, this.mDataCodes.push(new P(E, C + this.EXTRA_HEAD_LEN + g))
          }
          for (var T = 0; T < t.length; T++) {
            var S = _.convertByte2Uint8(t[T]);
            s ^= S, this.mDataCodes.push(new P(S, T + this.EXTRA_HEAD_LEN + g + a))
          }
          this.mDataCodes.splice(4, 0, new P(s, 4));
          for (var I = this.EXTRA_HEAD_LEN, b = 0; b < r.length; b++) {
            var w = v + b,
              A = _.convertByte2Uint8(r[b]),
              D = new P(A, w);
            I >= this.mDataCodes.length ? this.mDataCodes.push(D) : this.mDataCodes.splice(I, 0, D), I += 4
          }
        }
        return l()(e, [{
          key: "getBytes",
          value: function () {
            var e = new Int8Array(this.mDataCodes.length * this.DATA_CODE_LEN),
              t = 0;
            return this.mDataCodes.forEach((function (r) {
              r.getBytes().forEach((function (r) {
                e[t++] = r
              }))
            })), e
          }
        }, {
          key: "toString",
          value: function () {
            for (var e = "", t = this.getBytes(), r = 0; r < t.length; r++) {
              var n = _.convertByte2HexString(t[r]);
              e += "0x", 1 === n.length && (e += "0"), e = "".concat(e + n, " ")
            }
            return e
          }
        }, {
          key: "getU8s",
          value: function () {
            for (var e, t, r = this.getBytes(), n = r.length / 2, o = new Uint16Array(n), i = 0; i < n; i++) e = r[2 * i], t = r[2 * i + 1], o[i] = _.convertNumberToChar(_.combine2bytesToU16(e, t) + this.EXTRA_LEN);
            return o
          }
        }]), e
      }(),
      U = function () {
        function e() {
          c()(this, e), d()(this, "GUIDE_CODE_LEN", 4)
        }
        return l()(e, [{
          key: "toString",
          value: function () {
            for (var e = "", t = this.getU8s(), r = 0; r < this.GUIDE_CODE_LEN; r++) {
              var n = _.convertU8ToHexString(t[r]);
              e = "".concat((e += "0x") + n, " ")
            }
            return e
          }
        }, {
          key: "getU8s",
          value: function () {
            var e = new Uint16Array(this.GUIDE_CODE_LEN);
            return e[0] = 515, e[1] = 514, e[2] = 513, e[3] = 512, e
          }
        }]), e
      }(),
      x = function () {
        function e(t, r, n, o, i) {
          c()(this, e), d()(this, "mGcBytes2", void 0), d()(this, "mDcBytes2", void 0), console.log("inetAddress", o);
          var s = (new U).getU8s();
          this.mGcBytes2 = new Array(s.length);
          for (var a = 0; a < this.mGcBytes2.length; a++) this.mGcBytes2[a] = _.getSpecBytesFromChar(s[a]);
          var u = new M(t, r, n, o, i).getU8s();
          this.mDcBytes2 = new Array(u.length);
          for (var l = 0; l < this.mDcBytes2.length; l++) this.mDcBytes2[l] = _.getSpecBytesFromChar(u[l])
        }
        return l()(e, [{
          key: "getGCBytes2",
          value: function () {
            return this.mGcBytes2
          }
        }, {
          key: "getDCBytes2",
          value: function () {
            return this.mDcBytes2
          }
        }]), e
      }(),
      L = r(7),
      F = function (e) {
        function t(e, r, n, o, i, s) {
          var a;
          return c()(this, t), a = m()(this, C()(t).call(this)), d()(T()(a), "TAG", "SmartConfig"), d()(T()(a), "ONE_DATA_LEN", 3), d()(T()(a), "mSocketClient", void 0), d()(T()(a), "mSocketServer", void 0), d()(T()(a), "mApSsid", void 0), d()(T()(a), "mApPassword", void 0), d()(T()(a), "mApBssid", void 0), d()(T()(a), "mEncryptor", void 0), d()(T()(a), "mContext", void 0), d()(T()(a), "mEsptouchResultList", void 0), d()(T()(a), "mIsSuc", !1), d()(T()(a), "mIsInterrupt", !1), d()(T()(a), "mIsExecuted", !1), d()(T()(a), "mIsCancelled", void 0), d()(T()(a), "mParameter", void 0), d()(T()(a), "mBssidTaskSucCountMap", void 0), d()(T()(a), "mEsptouchListener", void 0), d()(T()(a), "mLocalIp", void 0), a.mEncryptor = s, a.mApSsid = e.getData(), a.mApPassword = n.getData(), a.mApBssid = r.getData(), a.mIsCancelled = !1, a.mParameter = b, a.mSocketClient = new N(a.mParameter.getPortListening()), a.mSocketServer = new R(a.mSocketClient.mSocket, a.mParameter.getWaitUdpTotalMillisecond(), a.mParameter.getEsptouchResultTotalLen()), a.mSocketClient.on("udpSocketError", (function (e) {
            var t = e.errMsg;
            a.emit("onError", {
              errMsg: t
            }), a.interrupt()
          })), a.mEsptouchResultList = [], a.mBssidTaskSucCountMap = {}, a.mLocalIp = o, a.logger = function (e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            i[e]("".concat(a.TAG, "log detail"), {
              errorCode: t,
              data: r
            })
          }, a.logger("info", "Welcome Esptouch smartconfig in weapp"), a
        }
        var r, n;
        return I()(t, e), l()(t, [{
          key: "__checkTaskValid",
          value: function () {
            return this.mIsExecuted ? (this.logger("error", "the Esptouch task could be executed only once"), !1) : (this.mIsExecuted = !0, !0)
          }
        }, {
          key: "start",
          value: (n = s()(o.a.mark((function e() {
            var t, r, n, i = arguments;
            return o.a.wrap((function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  if (t = i.length > 0 && void 0 !== i[0] ? i[0] : 1, this.__checkTaskValid()) {
                    e.next = 3;
                    break
                  }
                  return e.abrupt("return");
                case 3:
                  this.mParameter.setExpectTaskResultCount(t), this.logger("info", "start smartconfig in promise settimeout"), r = new x(this.mApSsid, this.mApBssid, this.mApPassword, this.mLocalIp, this.mEncryptor), this.mSocketServer.startServer(), this.__listenAsyn(this.mParameter.getEsptouchResultTotalLen()), n = 0;
                case 10:
                  if (!(n < this.mParameter.getTotalRepeatTime())) {
                    e.next = 19;
                    break
                  }
                  return e.next = 13, this.__execute(r);
                case 13:
                  if (!e.sent) {
                    e.next = 16;
                    break
                  }
                  return e.abrupt("return", this.__getEsptouchResultList());
                case 16:
                  n++, e.next = 10;
                  break;
                case 19:
                  if (this.mIsInterrupt) {
                    e.next = 24;
                    break
                  }
                  return e.next = 22, Object(D.delay)(this.mParameter.getWaitUdpReceivingMillisecond());
                case 22:
                  this.mIsSuc || this.emit("onError", {
                    code: L.ConnectDeviceErrorCode.SMART_CONFIG_TIMEOUT
                  }), this.interrupt();
                case 24:
                  return e.abrupt("return", this.__getEsptouchResultList());
                case 25:
                case "end":
                  return e.stop()
              }
            }), e, this)
          }))), function () {
            return n.apply(this, arguments)
          })
        }, {
          key: "startInNoPromise",
          value: function () {
            var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.__checkTaskValid()) {
              this.mParameter.setExpectTaskResultCount(t), this.logger("info", "start smartconfig in no promise settimeout");
              var r = new x(this.mApSsid, this.mApBssid, this.mApPassword, this.mLocalIp, this.mEncryptor);
              this.mSocketServer.startServer(), this.__listenAsyn(this.mParameter.getEsptouchResultTotalLen()), this.__executeInNoPromise(r), setTimeout((function () {
                e.mIsSuc || e.emit("onError", {
                  code: L.ConnectDeviceErrorCode.SMART_CONFIG_TIMEOUT
                }), e.emit("result", e.__getEsptouchResultList()), e.interrupt()
              }), this.mParameter.getWaitUdpReceivingMillisecond())
            }
          }
        }, {
          key: "__executeInNoPromise",
          value: function (e) {
            var t = Date.now(),
              r = t - this.mParameter.getTimeoutTotalCodeMillisecond(),
              n = 0,
              o = this,
              i = e.getGCBytes2(),
              s = e.getDCBytes2();

            function a() {
              if (!o.mIsInterrupt && Date.now() - t < o.mParameter.getTimeoutGuideCodeMillisecond()) return o.mSocketClient.sendDataSideBySide(i, 0, i.length, o.mParameter.getTargetHostname(), o.mParameter.getTargetPort(), o.mParameter.getIntervalGuideCodeMillisecond(), a);
              c()
            }

            function c() {
              o.mIsInterrupt ? o.emit("result", o.__getEsptouchResultList()) : (t - r >= o.mParameter.getTimeoutDataCodeMillisecond() ? (o.logger("info", "send gc code "), a(), r = t) : (o.mSocketClient.sendDataSideBySide(s, n, o.ONE_DATA_LEN, o.mParameter.getTargetHostname(), o.mParameter.getTargetPort(), o.mParameter.getIntervalDataCodeMillisecond(), c), n = (n + o.ONE_DATA_LEN) % s.length), t = Date.now())
            }
            c(), setTimeout((function () {
              o.interrupt(), o.emit("result", o.__getEsptouchResultList())
            }), this.mParameter.getWaitUdpSendingMillisecond())
          }
        }, {
          key: "__execute",
          value: (r = s()(o.a.mark((function e(t) {
            var r, n, i, s, a, c;
            return o.a.wrap((function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  r = Date.now(), i = (n = r) - this.mParameter.getTimeoutTotalCodeMillisecond(), s = t.getGCBytes2(), a = t.getDCBytes2(), c = 0;
                case 6:
                  if (this.mIsInterrupt) {
                    e.next = 27;
                    break
                  }
                  if (!(n - i >= this.mParameter.getTimeoutDataCodeMillisecond())) {
                    e.next = 19;
                    break
                  }
                  this.logger("info", "send gc code ");
                case 9:
                  if (this.mIsInterrupt || !(Date.now() - n < this.mParameter.getTimeoutGuideCodeMillisecond())) {
                    e.next = 16;
                    break
                  }
                  return e.next = 12, this.mSocketClient.sendData(s, 0, s.length, this.mParameter.getTargetHostname(), this.mParameter.getTargetPort(), this.mParameter.getIntervalGuideCodeMillisecond(), D.delay);
                case 12:
                  if (!(Date.now() - r > this.mParameter.getWaitUdpSendingMillisecond())) {
                    e.next = 14;
                    break
                  }
                  return e.abrupt("break", 16);
                case 14:
                  e.next = 9;
                  break;
                case 16:
                  i = n, e.next = 22;
                  break;
                case 19:
                  return e.next = 21, this.mSocketClient.sendData(a, c, this.ONE_DATA_LEN, this.mParameter.getTargetHostname(), this.mParameter.getTargetPort(), this.mParameter.getIntervalDataCodeMillisecond());
                case 21:
                  c = (c + this.ONE_DATA_LEN) % a.length;
                case 22:
                  if (!((n = Date.now()) - r > this.mParameter.getWaitUdpSendingMillisecond())) {
                    e.next = 25;
                    break
                  }
                  return e.abrupt("break", 27);
                case 25:
                  e.next = 6;
                  break;
                case 27:
                  return e.abrupt("return", this.mIsSuc);
                case 28:
                case "end":
                  return e.stop()
              }
            }), e, this)
          }))), function (e) {
            return r.apply(this, arguments)
          })
        }, {
          key: "__listenAsyn",
          value: function () {
            var e = this;
            this.logger("info", "__listenAsyn() start");
            var t = this.mApSsid,
              r = this.mApPassword,
              n = Date.now(),
              o = _.convertUint8toByte(t.length + r.length + 9);
            this.logger("info", "expectOneByte: ".concat(o));
            var i = function (t) {
              var r = t.message,
                i = t.remoteInfo,
                s = -1,
                a = new Int8Array(r);
              if (e.logger("info", "Int8Array", a), s = null != a ? a[0] : -1, e.logger("info", "receiveOneByte: ".concat(s)), s === o) {
                e.logger("info", "receive correct broadcast");
                var c = Date.now() - n,
                  u = Number(e.mParameter.getWaitUdpTotalMillisecond() - c);
                if (u < 0) e.logger("error", "esptouch timeout");
                else if (e.logger("error", "mSocketServer's new timeout is ".concat(u, " milliseconds")), e.logger("info", "receive correct broadcast"), null != a) {
                  var l = _.parseBssid(a, e.mParameter.getEsptouchResultOneLen(), e.mParameter.getEsptouchResultMacLen()),
                    f = function (e, t, r) {
                      for (var n = "", o = 0; o < r; o++) n += String(255 & e[t + o]), o !== r - 1 && (n += ".");
                      return n
                    }(a, e.mParameter.getEsptouchResultOneLen() + e.mParameter.getEsptouchResultMacLen(), e.mParameter.getEsptouchResultIpLen());
                  e.__putEsptouchResult(!0, l, f, i)
                }
              } else e.logger("info", "receive rubbish message, just ignore")
            };
            this.mSocketServer.on("recieveCorrectMsg", (function (t) {
              e.logger("info", "RECIEVE_MSG", t), i(t), e.mIsSuc = e.mEsptouchResultList.length >= e.mParameter.getExpectTaskResultCount(), e.mIsSuc && (e.logger("info", "__listenAsyn() finish"), e.interrupt())
            }))
          }
        }, {
          key: "__putEsptouchResult",
          value: function (e, t, r, n) {
            var o = this.mBssidTaskSucCountMap[t];
            if (null == o && (o = 0), ++o, this.logger("info", "PUT_ESPTOUCH_RESULT", "__putEsptouchResult(): count = ".concat(o)), this.mBssidTaskSucCountMap[t] = o, o >= this.mParameter.getThresholdSucBroadcastCount()) {
              for (var i = !1, s = 0; s < this.mEsptouchResultList.length; s++)
                if (this.mEsptouchResultList[s].bssid === t) {
                  i = !0;
                  break
                } if (!i) {
                this.logger("info", "PUT_ESPTOUCH_RESULT", "".concat(" put one more result bssid = ").concat(t, " , address = ").concat(r, ",the remoteInfo from weapp").concat(JSON.stringify(n)));
                var a = {
                  isSuc: e,
                  bssid: t,
                  inetAddress: r,
                  remoteInfo: n
                };
                this.mEsptouchResultList.push(a)
              }
            } else this.logger("info", "PUT_ESPTOUCH_RESULT", "__putEsptouchResult(): count = ".concat(o, ", isn't enough"))
          }
        }, {
          key: "__getEsptouchResultList",
          value: function () {
            return this.logger("info", "GET_RESULT", this.mEsptouchResultList), this.mEsptouchResultList
          }
        }, {
          key: "interrupt",
          value: function () {
            this.mIsInterrupt || (this.mIsCancelled = !0, this.mIsInterrupt = !0, this.mSocketClient.interrupt())
          }
        }, {
          key: "isCancelled",
          value: function () {
            return this.mIsCancelled
          }
        }, {
          key: "setPackageBroadcast",
          value: function (e) {
            this.mParameter.setBroadcast(e)
          }
        }]), t
      }(A.a),
      j = function () {
        function e(t) {
          var r = t.apSsid,
            n = t.apBssid,
            o = t.apPassword,
            i = t.localIp,
            s = t.logger,
            a = void 0 === s ? console : s;
          if (c()(this, e), d()(this, "mTask", void 0), this.ssid = new g(_.getBytesByString(r)), this.bssid = new g(_.parseBssid2bytes(n)), 6 !== this.bssid.getData().length) throw "Bssid format must be aa:bb:cc:dd:ee:ff";
          this.password = new g(_.getBytesByString(o)), this.localIp = i || "192.168.0.1", this.logger = a
        }
        return l()(e, [{
          key: "startSmartConfig",
          value: function () {
            var e = this;
            return new Promise(function () {
              var t = s()(o.a.mark((function t(r, n) {
                var i;
                return o.a.wrap((function (t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      if (!e.mTask) {
                        t.next = 4;
                        break
                      }
                      if (e.isCancelled()) {
                        t.next = 3;
                        break
                      }
                      return t.abrupt("return", n({
                        code: 3,
                        msg: "已经有任务在进行中，请等待任务结束，或者中断任务"
                      }));
                    case 3:
                      e.mTask = null;
                    case 4:
                      if (e.mTask = new F(e.ssid, e.bssid, e.password, e.localIp, e.logger), console.log("广播方式"), e.mTask.on("onError", (function (e) {
                          n(e)
                        })), t.prev = 7, "android" !== wx.getSystemInfoSync().platform) {
                        t.next = 13;
                        break
                      }
                      e.mTask.on("result", (function (e) {
                        r(e)
                      })), e.mTask.startInNoPromise(), t.next = 17;
                      break;
                    case 13:
                      return t.next = 15, e.mTask.start();
                    case 15:
                      (i = t.sent).length && r(i);
                    case 17:
                      t.next = 22;
                      break;
                    case 19:
                      t.prev = 19, t.t0 = t.catch(7), n(t.t0);
                    case 22:
                    case "end":
                      return t.stop()
                  }
                }), t, null, [
                  [7, 19]
                ])
              })));
              return function (e, r) {
                return t.apply(this, arguments)
              }
            }())
          }
        }, {
          key: "interrupt",
          value: function () {
            this.mTask && this.mTask.interrupt(), this.mTask = null
          }
        }, {
          key: "isCancelled",
          value: function () {
            return this.mTask.isCancelled()
          }
        }]), e
      }();
    r.d(t, "EsptouchTask", (function () {
      return j
    }))
  }])
}));
