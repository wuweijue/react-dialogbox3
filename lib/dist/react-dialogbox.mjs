function qw(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var Zw = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(l) {
  (function() {
    var c = {}.hasOwnProperty;
    function p() {
      for (var h = [], b = 0; b < arguments.length; b++) {
        var C = arguments[b];
        if (C) {
          var _ = typeof C;
          if (_ === "string" || _ === "number")
            h.push(C);
          else if (Array.isArray(C)) {
            if (C.length) {
              var A = p.apply(null, C);
              A && h.push(A);
            }
          } else if (_ === "object") {
            if (C.toString !== Object.prototype.toString && !C.toString.toString().includes("[native code]")) {
              h.push(C.toString());
              continue;
            }
            for (var L in C)
              c.call(C, L) && C[L] && h.push(L);
          }
        }
      }
      return h.join(" ");
    }
    l.exports ? (p.default = p, l.exports = p) : window.classNames = p;
  })();
})(Zw);
var Yk = Zw.exports;
const Kv = /* @__PURE__ */ qw(Yk);
var lE = { exports: {} }, Ft = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fw;
function Wk() {
  if (fw)
    return Ft;
  fw = 1;
  var l = Symbol.for("react.element"), c = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), _ = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), B = Symbol.for("react.memo"), ie = Symbol.for("react.lazy"), X = Symbol.iterator;
  function te(w) {
    return w === null || typeof w != "object" ? null : (w = X && w[X] || w["@@iterator"], typeof w == "function" ? w : null);
  }
  var re = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, De = Object.assign, $e = {};
  function Ae(w, j, ee) {
    this.props = w, this.context = j, this.refs = $e, this.updater = ee || re;
  }
  Ae.prototype.isReactComponent = {}, Ae.prototype.setState = function(w, j) {
    if (typeof w != "object" && typeof w != "function" && w != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, w, j, "setState");
  }, Ae.prototype.forceUpdate = function(w) {
    this.updater.enqueueForceUpdate(this, w, "forceUpdate");
  };
  function It() {
  }
  It.prototype = Ae.prototype;
  function xt(w, j, ee) {
    this.props = w, this.context = j, this.refs = $e, this.updater = ee || re;
  }
  var be = xt.prototype = new It();
  be.constructor = xt, De(be, Ae.prototype), be.isPureReactComponent = !0;
  var ye = Array.isArray, fe = Object.prototype.hasOwnProperty, de = { current: null }, Ce = { key: !0, ref: !0, __self: !0, __source: !0 };
  function mt(w, j, ee) {
    var Se, me = {}, Fe = null, He = null;
    if (j != null)
      for (Se in j.ref !== void 0 && (He = j.ref), j.key !== void 0 && (Fe = "" + j.key), j)
        fe.call(j, Se) && !Ce.hasOwnProperty(Se) && (me[Se] = j[Se]);
    var Ye = arguments.length - 2;
    if (Ye === 1)
      me.children = ee;
    else if (1 < Ye) {
      for (var Ve = Array(Ye), yt = 0; yt < Ye; yt++)
        Ve[yt] = arguments[yt + 2];
      me.children = Ve;
    }
    if (w && w.defaultProps)
      for (Se in Ye = w.defaultProps, Ye)
        me[Se] === void 0 && (me[Se] = Ye[Se]);
    return { $$typeof: l, type: w, key: Fe, ref: He, props: me, _owner: de.current };
  }
  function Et(w, j) {
    return { $$typeof: l, type: w.type, key: j, ref: w.ref, props: w.props, _owner: w._owner };
  }
  function Tt(w) {
    return typeof w == "object" && w !== null && w.$$typeof === l;
  }
  function Dt(w) {
    var j = { "=": "=0", ":": "=2" };
    return "$" + w.replace(/[=:]/g, function(ee) {
      return j[ee];
    });
  }
  var fn = /\/+/g;
  function ot(w, j) {
    return typeof w == "object" && w !== null && w.key != null ? Dt("" + w.key) : j.toString(36);
  }
  function ht(w, j, ee, Se, me) {
    var Fe = typeof w;
    (Fe === "undefined" || Fe === "boolean") && (w = null);
    var He = !1;
    if (w === null)
      He = !0;
    else
      switch (Fe) {
        case "string":
        case "number":
          He = !0;
          break;
        case "object":
          switch (w.$$typeof) {
            case l:
            case c:
              He = !0;
          }
      }
    if (He)
      return He = w, me = me(He), w = Se === "" ? "." + ot(He, 0) : Se, ye(me) ? (ee = "", w != null && (ee = w.replace(fn, "$&/") + "/"), ht(me, j, ee, "", function(yt) {
        return yt;
      })) : me != null && (Tt(me) && (me = Et(me, ee + (!me.key || He && He.key === me.key ? "" : ("" + me.key).replace(fn, "$&/") + "/") + w)), j.push(me)), 1;
    if (He = 0, Se = Se === "" ? "." : Se + ":", ye(w))
      for (var Ye = 0; Ye < w.length; Ye++) {
        Fe = w[Ye];
        var Ve = Se + ot(Fe, Ye);
        He += ht(Fe, j, ee, Ve, me);
      }
    else if (Ve = te(w), typeof Ve == "function")
      for (w = Ve.call(w), Ye = 0; !(Fe = w.next()).done; )
        Fe = Fe.value, Ve = Se + ot(Fe, Ye++), He += ht(Fe, j, ee, Ve, me);
    else if (Fe === "object")
      throw j = String(w), Error("Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead.");
    return He;
  }
  function Nt(w, j, ee) {
    if (w == null)
      return w;
    var Se = [], me = 0;
    return ht(w, Se, "", "", function(Fe) {
      return j.call(ee, Fe, me++);
    }), Se;
  }
  function bt(w) {
    if (w._status === -1) {
      var j = w._result;
      j = j(), j.then(function(ee) {
        (w._status === 0 || w._status === -1) && (w._status = 1, w._result = ee);
      }, function(ee) {
        (w._status === 0 || w._status === -1) && (w._status = 2, w._result = ee);
      }), w._status === -1 && (w._status = 0, w._result = j);
    }
    if (w._status === 1)
      return w._result.default;
    throw w._result;
  }
  var J = { current: null }, le = { transition: null }, Pe = { ReactCurrentDispatcher: J, ReactCurrentBatchConfig: le, ReactCurrentOwner: de };
  return Ft.Children = { map: Nt, forEach: function(w, j, ee) {
    Nt(w, function() {
      j.apply(this, arguments);
    }, ee);
  }, count: function(w) {
    var j = 0;
    return Nt(w, function() {
      j++;
    }), j;
  }, toArray: function(w) {
    return Nt(w, function(j) {
      return j;
    }) || [];
  }, only: function(w) {
    if (!Tt(w))
      throw Error("React.Children.only expected to receive a single React element child.");
    return w;
  } }, Ft.Component = Ae, Ft.Fragment = p, Ft.Profiler = b, Ft.PureComponent = xt, Ft.StrictMode = h, Ft.Suspense = L, Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pe, Ft.cloneElement = function(w, j, ee) {
    if (w == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + w + ".");
    var Se = De({}, w.props), me = w.key, Fe = w.ref, He = w._owner;
    if (j != null) {
      if (j.ref !== void 0 && (Fe = j.ref, He = de.current), j.key !== void 0 && (me = "" + j.key), w.type && w.type.defaultProps)
        var Ye = w.type.defaultProps;
      for (Ve in j)
        fe.call(j, Ve) && !Ce.hasOwnProperty(Ve) && (Se[Ve] = j[Ve] === void 0 && Ye !== void 0 ? Ye[Ve] : j[Ve]);
    }
    var Ve = arguments.length - 2;
    if (Ve === 1)
      Se.children = ee;
    else if (1 < Ve) {
      Ye = Array(Ve);
      for (var yt = 0; yt < Ve; yt++)
        Ye[yt] = arguments[yt + 2];
      Se.children = Ye;
    }
    return { $$typeof: l, type: w.type, key: me, ref: Fe, props: Se, _owner: He };
  }, Ft.createContext = function(w) {
    return w = { $$typeof: _, _currentValue: w, _currentValue2: w, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, w.Provider = { $$typeof: C, _context: w }, w.Consumer = w;
  }, Ft.createElement = mt, Ft.createFactory = function(w) {
    var j = mt.bind(null, w);
    return j.type = w, j;
  }, Ft.createRef = function() {
    return { current: null };
  }, Ft.forwardRef = function(w) {
    return { $$typeof: A, render: w };
  }, Ft.isValidElement = Tt, Ft.lazy = function(w) {
    return { $$typeof: ie, _payload: { _status: -1, _result: w }, _init: bt };
  }, Ft.memo = function(w, j) {
    return { $$typeof: B, type: w, compare: j === void 0 ? null : j };
  }, Ft.startTransition = function(w) {
    var j = le.transition;
    le.transition = {};
    try {
      w();
    } finally {
      le.transition = j;
    }
  }, Ft.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Ft.useCallback = function(w, j) {
    return J.current.useCallback(w, j);
  }, Ft.useContext = function(w) {
    return J.current.useContext(w);
  }, Ft.useDebugValue = function() {
  }, Ft.useDeferredValue = function(w) {
    return J.current.useDeferredValue(w);
  }, Ft.useEffect = function(w, j) {
    return J.current.useEffect(w, j);
  }, Ft.useId = function() {
    return J.current.useId();
  }, Ft.useImperativeHandle = function(w, j, ee) {
    return J.current.useImperativeHandle(w, j, ee);
  }, Ft.useInsertionEffect = function(w, j) {
    return J.current.useInsertionEffect(w, j);
  }, Ft.useLayoutEffect = function(w, j) {
    return J.current.useLayoutEffect(w, j);
  }, Ft.useMemo = function(w, j) {
    return J.current.useMemo(w, j);
  }, Ft.useReducer = function(w, j, ee) {
    return J.current.useReducer(w, j, ee);
  }, Ft.useRef = function(w) {
    return J.current.useRef(w);
  }, Ft.useState = function(w) {
    return J.current.useState(w);
  }, Ft.useSyncExternalStore = function(w, j, ee) {
    return J.current.useSyncExternalStore(w, j, ee);
  }, Ft.useTransition = function() {
    return J.current.useTransition();
  }, Ft.version = "18.2.0", Ft;
}
var Xv = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Xv.exports;
var dw;
function Gk() {
  return dw || (dw = 1, function(l, c) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var p = "18.2.0", h = Symbol.for("react.element"), b = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), L = Symbol.for("react.provider"), B = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), De = Symbol.for("react.lazy"), $e = Symbol.for("react.offscreen"), Ae = Symbol.iterator, It = "@@iterator";
      function xt(d) {
        if (d === null || typeof d != "object")
          return null;
        var S = Ae && d[Ae] || d[It];
        return typeof S == "function" ? S : null;
      }
      var be = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ye = {
        transition: null
      }, fe = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, de = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ce = {}, mt = null;
      function Et(d) {
        mt = d;
      }
      Ce.setExtraStackFrame = function(d) {
        mt = d;
      }, Ce.getCurrentStack = null, Ce.getStackAddendum = function() {
        var d = "";
        mt && (d += mt);
        var S = Ce.getCurrentStack;
        return S && (d += S() || ""), d;
      };
      var Tt = !1, Dt = !1, fn = !1, ot = !1, ht = !1, Nt = {
        ReactCurrentDispatcher: be,
        ReactCurrentBatchConfig: ye,
        ReactCurrentOwner: de
      };
      Nt.ReactDebugCurrentFrame = Ce, Nt.ReactCurrentActQueue = fe;
      function bt(d) {
        {
          for (var S = arguments.length, O = new Array(S > 1 ? S - 1 : 0), D = 1; D < S; D++)
            O[D - 1] = arguments[D];
          le("warn", d, O);
        }
      }
      function J(d) {
        {
          for (var S = arguments.length, O = new Array(S > 1 ? S - 1 : 0), D = 1; D < S; D++)
            O[D - 1] = arguments[D];
          le("error", d, O);
        }
      }
      function le(d, S, O) {
        {
          var D = Nt.ReactDebugCurrentFrame, V = D.getStackAddendum();
          V !== "" && (S += "%s", O = O.concat([V]));
          var oe = O.map(function(G) {
            return String(G);
          });
          oe.unshift("Warning: " + S), Function.prototype.apply.call(console[d], console, oe);
        }
      }
      var Pe = {};
      function w(d, S) {
        {
          var O = d.constructor, D = O && (O.displayName || O.name) || "ReactClass", V = D + "." + S;
          if (Pe[V])
            return;
          J("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", S, D), Pe[V] = !0;
        }
      }
      var j = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(d) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(d, S, O) {
          w(d, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(d, S, O, D) {
          w(d, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(d, S, O, D) {
          w(d, "setState");
        }
      }, ee = Object.assign, Se = {};
      Object.freeze(Se);
      function me(d, S, O) {
        this.props = d, this.context = S, this.refs = Se, this.updater = O || j;
      }
      me.prototype.isReactComponent = {}, me.prototype.setState = function(d, S) {
        if (typeof d != "object" && typeof d != "function" && d != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, d, S, "setState");
      }, me.prototype.forceUpdate = function(d) {
        this.updater.enqueueForceUpdate(this, d, "forceUpdate");
      };
      {
        var Fe = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, He = function(d, S) {
          Object.defineProperty(me.prototype, d, {
            get: function() {
              bt("%s(...) is deprecated in plain JavaScript React classes. %s", S[0], S[1]);
            }
          });
        };
        for (var Ye in Fe)
          Fe.hasOwnProperty(Ye) && He(Ye, Fe[Ye]);
      }
      function Ve() {
      }
      Ve.prototype = me.prototype;
      function yt(d, S, O) {
        this.props = d, this.context = S, this.refs = Se, this.updater = O || j;
      }
      var Fr = yt.prototype = new Ve();
      Fr.constructor = yt, ee(Fr, me.prototype), Fr.isPureReactComponent = !0;
      function nr() {
        var d = {
          current: null
        };
        return Object.seal(d), d;
      }
      var Hr = Array.isArray;
      function nn(d) {
        return Hr(d);
      }
      function Fn(d) {
        {
          var S = typeof Symbol == "function" && Symbol.toStringTag, O = S && d[Symbol.toStringTag] || d.constructor.name || "Object";
          return O;
        }
      }
      function Wn(d) {
        try {
          return Le(d), !1;
        } catch {
          return !0;
        }
      }
      function Le(d) {
        return "" + d;
      }
      function tt(d) {
        if (Wn(d))
          return J("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Fn(d)), Le(d);
      }
      function Yt(d, S, O) {
        var D = d.displayName;
        if (D)
          return D;
        var V = S.displayName || S.name || "";
        return V !== "" ? O + "(" + V + ")" : O;
      }
      function rn(d) {
        return d.displayName || "Context";
      }
      function Ut(d) {
        if (d == null)
          return null;
        if (typeof d.tag == "number" && J("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
          return d.displayName || d.name || null;
        if (typeof d == "string")
          return d;
        switch (d) {
          case C:
            return "Fragment";
          case b:
            return "Portal";
          case A:
            return "Profiler";
          case _:
            return "StrictMode";
          case X:
            return "Suspense";
          case te:
            return "SuspenseList";
        }
        if (typeof d == "object")
          switch (d.$$typeof) {
            case B:
              var S = d;
              return rn(S) + ".Consumer";
            case L:
              var O = d;
              return rn(O._context) + ".Provider";
            case ie:
              return Yt(d, d.render, "ForwardRef");
            case re:
              var D = d.displayName || null;
              return D !== null ? D : Ut(d.type) || "Memo";
            case De: {
              var V = d, oe = V._payload, G = V._init;
              try {
                return Ut(G(oe));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Bt = Object.prototype.hasOwnProperty, hn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, wt, Tn, tn;
      tn = {};
      function En(d) {
        if (Bt.call(d, "ref")) {
          var S = Object.getOwnPropertyDescriptor(d, "ref").get;
          if (S && S.isReactWarning)
            return !1;
        }
        return d.ref !== void 0;
      }
      function Kt(d) {
        if (Bt.call(d, "key")) {
          var S = Object.getOwnPropertyDescriptor(d, "key").get;
          if (S && S.isReactWarning)
            return !1;
        }
        return d.key !== void 0;
      }
      function zn(d, S) {
        var O = function() {
          wt || (wt = !0, J("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        O.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: O,
          configurable: !0
        });
      }
      function rr(d, S) {
        var O = function() {
          Tn || (Tn = !0, J("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        O.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: O,
          configurable: !0
        });
      }
      function Cn(d) {
        if (typeof d.ref == "string" && de.current && d.__self && de.current.stateNode !== d.__self) {
          var S = Ut(de.current.type);
          tn[S] || (J('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', S, d.ref), tn[S] = !0);
        }
      }
      var ve = function(d, S, O, D, V, oe, G) {
        var se = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: h,
          // Built-in properties that belong on the element
          type: d,
          key: S,
          ref: O,
          props: G,
          // Record the component responsible for creating this element.
          _owner: oe
        };
        return se._store = {}, Object.defineProperty(se._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(se, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: D
        }), Object.defineProperty(se, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: V
        }), Object.freeze && (Object.freeze(se.props), Object.freeze(se)), se;
      };
      function Me(d, S, O) {
        var D, V = {}, oe = null, G = null, se = null, Ee = null;
        if (S != null) {
          En(S) && (G = S.ref, Cn(S)), Kt(S) && (tt(S.key), oe = "" + S.key), se = S.__self === void 0 ? null : S.__self, Ee = S.__source === void 0 ? null : S.__source;
          for (D in S)
            Bt.call(S, D) && !hn.hasOwnProperty(D) && (V[D] = S[D]);
        }
        var Be = arguments.length - 2;
        if (Be === 1)
          V.children = O;
        else if (Be > 1) {
          for (var nt = Array(Be), qe = 0; qe < Be; qe++)
            nt[qe] = arguments[qe + 2];
          Object.freeze && Object.freeze(nt), V.children = nt;
        }
        if (d && d.defaultProps) {
          var at = d.defaultProps;
          for (D in at)
            V[D] === void 0 && (V[D] = at[D]);
        }
        if (oe || G) {
          var ft = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          oe && zn(V, ft), G && rr(V, ft);
        }
        return ve(d, oe, G, se, Ee, de.current, V);
      }
      function Ke(d, S) {
        var O = ve(d.type, S, d.ref, d._self, d._source, d._owner, d.props);
        return O;
      }
      function kt(d, S, O) {
        if (d == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + d + ".");
        var D, V = ee({}, d.props), oe = d.key, G = d.ref, se = d._self, Ee = d._source, Be = d._owner;
        if (S != null) {
          En(S) && (G = S.ref, Be = de.current), Kt(S) && (tt(S.key), oe = "" + S.key);
          var nt;
          d.type && d.type.defaultProps && (nt = d.type.defaultProps);
          for (D in S)
            Bt.call(S, D) && !hn.hasOwnProperty(D) && (S[D] === void 0 && nt !== void 0 ? V[D] = nt[D] : V[D] = S[D]);
        }
        var qe = arguments.length - 2;
        if (qe === 1)
          V.children = O;
        else if (qe > 1) {
          for (var at = Array(qe), ft = 0; ft < qe; ft++)
            at[ft] = arguments[ft + 2];
          V.children = at;
        }
        return ve(d.type, oe, G, se, Ee, Be, V);
      }
      function pt(d) {
        return typeof d == "object" && d !== null && d.$$typeof === h;
      }
      var An = ".", On = ":";
      function Nr(d) {
        var S = /[=:]/g, O = {
          "=": "=0",
          ":": "=2"
        }, D = d.replace(S, function(V) {
          return O[V];
        });
        return "$" + D;
      }
      var an = !1, na = /\/+/g;
      function dn(d) {
        return d.replace(na, "$&/");
      }
      function qt(d, S) {
        return typeof d == "object" && d !== null && d.key != null ? (tt(d.key), Nr("" + d.key)) : S.toString(36);
      }
      function Ia(d, S, O, D, V) {
        var oe = typeof d;
        (oe === "undefined" || oe === "boolean") && (d = null);
        var G = !1;
        if (d === null)
          G = !0;
        else
          switch (oe) {
            case "string":
            case "number":
              G = !0;
              break;
            case "object":
              switch (d.$$typeof) {
                case h:
                case b:
                  G = !0;
              }
          }
        if (G) {
          var se = d, Ee = V(se), Be = D === "" ? An + qt(se, 0) : D;
          if (nn(Ee)) {
            var nt = "";
            Be != null && (nt = dn(Be) + "/"), Ia(Ee, S, nt, "", function(Ys) {
              return Ys;
            });
          } else
            Ee != null && (pt(Ee) && (Ee.key && (!se || se.key !== Ee.key) && tt(Ee.key), Ee = Ke(
              Ee,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              O + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (Ee.key && (!se || se.key !== Ee.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                dn("" + Ee.key) + "/"
              ) : "") + Be
            )), S.push(Ee));
          return 1;
        }
        var qe, at, ft = 0, Ze = D === "" ? An : D + On;
        if (nn(d))
          for (var oa = 0; oa < d.length; oa++)
            qe = d[oa], at = Ze + qt(qe, oa), ft += Ia(qe, S, O, at, V);
        else {
          var Fi = xt(d);
          if (typeof Fi == "function") {
            var nu = d;
            Fi === nu.entries && (an || bt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), an = !0);
            for (var $s = Fi.call(nu), ua, $u = 0; !(ua = $s.next()).done; )
              qe = ua.value, at = Ze + qt(qe, $u++), ft += Ia(qe, S, O, at, V);
          } else if (oe === "object") {
            var ru = String(d);
            throw new Error("Objects are not valid as a React child (found: " + (ru === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : ru) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ft;
      }
      function ra(d, S, O) {
        if (d == null)
          return d;
        var D = [], V = 0;
        return Ia(d, D, "", "", function(oe) {
          return S.call(O, oe, V++);
        }), D;
      }
      function Go(d) {
        var S = 0;
        return ra(d, function() {
          S++;
        }), S;
      }
      function Ul(d, S, O) {
        ra(d, function() {
          S.apply(this, arguments);
        }, O);
      }
      function zl(d) {
        return ra(d, function(S) {
          return S;
        }) || [];
      }
      function Qo(d) {
        if (!pt(d))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return d;
      }
      function Vu(d) {
        var S = {
          $$typeof: B,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: d,
          _currentValue2: d,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        S.Provider = {
          $$typeof: L,
          _context: S
        };
        var O = !1, D = !1, V = !1;
        {
          var oe = {
            $$typeof: B,
            _context: S
          };
          Object.defineProperties(oe, {
            Provider: {
              get: function() {
                return D || (D = !0, J("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), S.Provider;
              },
              set: function(G) {
                S.Provider = G;
              }
            },
            _currentValue: {
              get: function() {
                return S._currentValue;
              },
              set: function(G) {
                S._currentValue = G;
              }
            },
            _currentValue2: {
              get: function() {
                return S._currentValue2;
              },
              set: function(G) {
                S._currentValue2 = G;
              }
            },
            _threadCount: {
              get: function() {
                return S._threadCount;
              },
              set: function(G) {
                S._threadCount = G;
              }
            },
            Consumer: {
              get: function() {
                return O || (O = !0, J("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), S.Consumer;
              }
            },
            displayName: {
              get: function() {
                return S.displayName;
              },
              set: function(G) {
                V || (bt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", G), V = !0);
              }
            }
          }), S.Consumer = oe;
        }
        return S._currentRenderer = null, S._currentRenderer2 = null, S;
      }
      var pr = -1, $a = 0, Ra = 1, Li = 2;
      function Br(d) {
        if (d._status === pr) {
          var S = d._result, O = S();
          if (O.then(function(oe) {
            if (d._status === $a || d._status === pr) {
              var G = d;
              G._status = Ra, G._result = oe;
            }
          }, function(oe) {
            if (d._status === $a || d._status === pr) {
              var G = d;
              G._status = Li, G._result = oe;
            }
          }), d._status === pr) {
            var D = d;
            D._status = $a, D._result = O;
          }
        }
        if (d._status === Ra) {
          var V = d._result;
          return V === void 0 && J(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, V), "default" in V || J(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, V), V.default;
        } else
          throw d._result;
      }
      function wa(d) {
        var S = {
          // We use these fields to store the result.
          _status: pr,
          _result: d
        }, O = {
          $$typeof: De,
          _payload: S,
          _init: Br
        };
        {
          var D, V;
          Object.defineProperties(O, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return D;
              },
              set: function(oe) {
                J("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), D = oe, Object.defineProperty(O, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return V;
              },
              set: function(oe) {
                J("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), V = oe, Object.defineProperty(O, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return O;
      }
      function Mi(d) {
        d != null && d.$$typeof === re ? J("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof d != "function" ? J("forwardRef requires a render function but was given %s.", d === null ? "null" : typeof d) : d.length !== 0 && d.length !== 2 && J("forwardRef render functions accept exactly two parameters: props and ref. %s", d.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), d != null && (d.defaultProps != null || d.propTypes != null) && J("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var S = {
          $$typeof: ie,
          render: d
        };
        {
          var O;
          Object.defineProperty(S, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return O;
            },
            set: function(D) {
              O = D, !d.name && !d.displayName && (d.displayName = D);
            }
          });
        }
        return S;
      }
      var yi;
      yi = Symbol.for("react.module.reference");
      function uo(d) {
        return !!(typeof d == "string" || typeof d == "function" || d === C || d === A || ht || d === _ || d === X || d === te || ot || d === $e || Tt || Dt || fn || typeof d == "object" && d !== null && (d.$$typeof === De || d.$$typeof === re || d.$$typeof === L || d.$$typeof === B || d.$$typeof === ie || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        d.$$typeof === yi || d.getModuleId !== void 0));
      }
      function Pu(d, S) {
        uo(d) || J("memo: The first argument must be a component. Instead received: %s", d === null ? "null" : typeof d);
        var O = {
          $$typeof: re,
          type: d,
          compare: S === void 0 ? null : S
        };
        {
          var D;
          Object.defineProperty(O, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return D;
            },
            set: function(V) {
              D = V, !d.name && !d.displayName && (d.displayName = V);
            }
          });
        }
        return O;
      }
      function At() {
        var d = be.current;
        return d === null && J(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), d;
      }
      function aa(d) {
        var S = At();
        if (d._context !== void 0) {
          var O = d._context;
          O.Consumer === d ? J("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : O.Provider === d && J("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return S.useContext(d);
      }
      function lo(d) {
        var S = At();
        return S.useState(d);
      }
      function Ui(d, S, O) {
        var D = At();
        return D.useReducer(d, S, O);
      }
      function Gn(d) {
        var S = At();
        return S.useRef(d);
      }
      function jl(d, S) {
        var O = At();
        return O.useEffect(d, S);
      }
      function Vl(d, S) {
        var O = At();
        return O.useInsertionEffect(d, S);
      }
      function Fu(d, S) {
        var O = At();
        return O.useLayoutEffect(d, S);
      }
      function Pl(d, S) {
        var O = At();
        return O.useCallback(d, S);
      }
      function Fs(d, S) {
        var O = At();
        return O.useMemo(d, S);
      }
      function Hs(d, S, O) {
        var D = At();
        return D.useImperativeHandle(d, S, O);
      }
      function pn(d, S) {
        {
          var O = At();
          return O.useDebugValue(d, S);
        }
      }
      function Bs() {
        var d = At();
        return d.useTransition();
      }
      function Ta(d) {
        var S = At();
        return S.useDeferredValue(d);
      }
      function Ct() {
        var d = At();
        return d.useId();
      }
      function Ya(d, S, O) {
        var D = At();
        return D.useSyncExternalStore(d, S, O);
      }
      var ia = 0, so, gi, vr, Ko, ar, Xo, qo;
      function Hu() {
      }
      Hu.__reactDisabledLog = !0;
      function Zo() {
        {
          if (ia === 0) {
            so = console.log, gi = console.info, vr = console.warn, Ko = console.error, ar = console.group, Xo = console.groupCollapsed, qo = console.groupEnd;
            var d = {
              configurable: !0,
              enumerable: !0,
              value: Hu,
              writable: !0
            };
            Object.defineProperties(console, {
              info: d,
              log: d,
              warn: d,
              error: d,
              group: d,
              groupCollapsed: d,
              groupEnd: d
            });
          }
          ia++;
        }
      }
      function zi() {
        {
          if (ia--, ia === 0) {
            var d = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: ee({}, d, {
                value: so
              }),
              info: ee({}, d, {
                value: gi
              }),
              warn: ee({}, d, {
                value: vr
              }),
              error: ee({}, d, {
                value: Ko
              }),
              group: ee({}, d, {
                value: ar
              }),
              groupCollapsed: ee({}, d, {
                value: Xo
              }),
              groupEnd: ee({}, d, {
                value: qo
              })
            });
          }
          ia < 0 && J("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ir = Nt.ReactCurrentDispatcher, Qn;
      function Oa(d, S, O) {
        {
          if (Qn === void 0)
            try {
              throw Error();
            } catch (V) {
              var D = V.stack.trim().match(/\n( *(at )?)/);
              Qn = D && D[1] || "";
            }
          return `
` + Qn + d;
        }
      }
      var Wa = !1, xa;
      {
        var Jo = typeof WeakMap == "function" ? WeakMap : Map;
        xa = new Jo();
      }
      function co(d, S) {
        if (!d || Wa)
          return "";
        {
          var O = xa.get(d);
          if (O !== void 0)
            return O;
        }
        var D;
        Wa = !0;
        var V = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var oe;
        oe = Ir.current, Ir.current = null, Zo();
        try {
          if (S) {
            var G = function() {
              throw Error();
            };
            if (Object.defineProperty(G.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(G, []);
              } catch (Ze) {
                D = Ze;
              }
              Reflect.construct(d, [], G);
            } else {
              try {
                G.call();
              } catch (Ze) {
                D = Ze;
              }
              d.call(G.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Ze) {
              D = Ze;
            }
            d();
          }
        } catch (Ze) {
          if (Ze && D && typeof Ze.stack == "string") {
            for (var se = Ze.stack.split(`
`), Ee = D.stack.split(`
`), Be = se.length - 1, nt = Ee.length - 1; Be >= 1 && nt >= 0 && se[Be] !== Ee[nt]; )
              nt--;
            for (; Be >= 1 && nt >= 0; Be--, nt--)
              if (se[Be] !== Ee[nt]) {
                if (Be !== 1 || nt !== 1)
                  do
                    if (Be--, nt--, nt < 0 || se[Be] !== Ee[nt]) {
                      var qe = `
` + se[Be].replace(" at new ", " at ");
                      return d.displayName && qe.includes("<anonymous>") && (qe = qe.replace("<anonymous>", d.displayName)), typeof d == "function" && xa.set(d, qe), qe;
                    }
                  while (Be >= 1 && nt >= 0);
                break;
              }
          }
        } finally {
          Wa = !1, Ir.current = oe, zi(), Error.prepareStackTrace = V;
        }
        var at = d ? d.displayName || d.name : "", ft = at ? Oa(at) : "";
        return typeof d == "function" && xa.set(d, ft), ft;
      }
      function _i(d, S, O) {
        return co(d, !1);
      }
      function Is(d) {
        var S = d.prototype;
        return !!(S && S.isReactComponent);
      }
      function $r(d, S, O) {
        if (d == null)
          return "";
        if (typeof d == "function")
          return co(d, Is(d));
        if (typeof d == "string")
          return Oa(d);
        switch (d) {
          case X:
            return Oa("Suspense");
          case te:
            return Oa("SuspenseList");
        }
        if (typeof d == "object")
          switch (d.$$typeof) {
            case ie:
              return _i(d.render);
            case re:
              return $r(d.type, S, O);
            case De: {
              var D = d, V = D._payload, oe = D._init;
              try {
                return $r(oe(V), S, O);
              } catch {
              }
            }
          }
        return "";
      }
      var zt = {}, fo = Nt.ReactDebugCurrentFrame;
      function Ga(d) {
        if (d) {
          var S = d._owner, O = $r(d.type, d._source, S ? S.type : null);
          fo.setExtraStackFrame(O);
        } else
          fo.setExtraStackFrame(null);
      }
      function eu(d, S, O, D, V) {
        {
          var oe = Function.call.bind(Bt);
          for (var G in d)
            if (oe(d, G)) {
              var se = void 0;
              try {
                if (typeof d[G] != "function") {
                  var Ee = Error((D || "React class") + ": " + O + " type `" + G + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[G] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Ee.name = "Invariant Violation", Ee;
                }
                se = d[G](S, G, D, O, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Be) {
                se = Be;
              }
              se && !(se instanceof Error) && (Ga(V), J("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", D || "React class", O, G, typeof se), Ga(null)), se instanceof Error && !(se.message in zt) && (zt[se.message] = !0, Ga(V), J("Failed %s type: %s", O, se.message), Ga(null));
            }
        }
      }
      function Rt(d) {
        if (d) {
          var S = d._owner, O = $r(d.type, d._source, S ? S.type : null);
          Et(O);
        } else
          Et(null);
      }
      var ji;
      ji = !1;
      function po() {
        if (de.current) {
          var d = Ut(de.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
      function lt(d) {
        if (d !== void 0) {
          var S = d.fileName.replace(/^.*[\\\/]/, ""), O = d.lineNumber;
          return `

Check your code at ` + S + ":" + O + ".";
        }
        return "";
      }
      function vo(d) {
        return d != null ? lt(d.__source) : "";
      }
      var vn = {};
      function kr(d) {
        var S = po();
        if (!S) {
          var O = typeof d == "string" ? d : d.displayName || d.name;
          O && (S = `

Check the top-level render call using <` + O + ">.");
        }
        return S;
      }
      function ir(d, S) {
        if (!(!d._store || d._store.validated || d.key != null)) {
          d._store.validated = !0;
          var O = kr(S);
          if (!vn[O]) {
            vn[O] = !0;
            var D = "";
            d && d._owner && d._owner !== de.current && (D = " It was passed a child from " + Ut(d._owner.type) + "."), Rt(d), J('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', O, D), Rt(null);
          }
        }
      }
      function bi(d, S) {
        if (typeof d == "object") {
          if (nn(d))
            for (var O = 0; O < d.length; O++) {
              var D = d[O];
              pt(D) && ir(D, S);
            }
          else if (pt(d))
            d._store && (d._store.validated = !0);
          else if (d) {
            var V = xt(d);
            if (typeof V == "function" && V !== d.entries)
              for (var oe = V.call(d), G; !(G = oe.next()).done; )
                pt(G.value) && ir(G.value, S);
          }
        }
      }
      function mn(d) {
        {
          var S = d.type;
          if (S == null || typeof S == "string")
            return;
          var O;
          if (typeof S == "function")
            O = S.propTypes;
          else if (typeof S == "object" && (S.$$typeof === ie || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          S.$$typeof === re))
            O = S.propTypes;
          else
            return;
          if (O) {
            var D = Ut(S);
            eu(O, d.props, "prop", D, d);
          } else if (S.PropTypes !== void 0 && !ji) {
            ji = !0;
            var V = Ut(S);
            J("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", V || "Unknown");
          }
          typeof S.getDefaultProps == "function" && !S.getDefaultProps.isReactClassApproved && J("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Wt(d) {
        {
          for (var S = Object.keys(d.props), O = 0; O < S.length; O++) {
            var D = S[O];
            if (D !== "children" && D !== "key") {
              Rt(d), J("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", D), Rt(null);
              break;
            }
          }
          d.ref !== null && (Rt(d), J("Invalid attribute `ref` supplied to `React.Fragment`."), Rt(null));
        }
      }
      function Bu(d, S, O) {
        var D = uo(d);
        if (!D) {
          var V = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (V += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var oe = vo(S);
          oe ? V += oe : V += po();
          var G;
          d === null ? G = "null" : nn(d) ? G = "array" : d !== void 0 && d.$$typeof === h ? (G = "<" + (Ut(d.type) || "Unknown") + " />", V = " Did you accidentally export a JSX literal instead of a component?") : G = typeof d, J("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", G, V);
        }
        var se = Me.apply(this, arguments);
        if (se == null)
          return se;
        if (D)
          for (var Ee = 2; Ee < arguments.length; Ee++)
            bi(arguments[Ee], d);
        return d === C ? Wt(se) : mn(se), se;
      }
      var hr = !1;
      function Hn(d) {
        var S = Bu.bind(null, d);
        return S.type = d, hr || (hr = !0, bt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(S, "type", {
          enumerable: !1,
          get: function() {
            return bt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: d
            }), d;
          }
        }), S;
      }
      function Qa(d, S, O) {
        for (var D = kt.apply(this, arguments), V = 2; V < arguments.length; V++)
          bi(arguments[V], D.type);
        return mn(D), D;
      }
      function Fl(d, S) {
        var O = ye.transition;
        ye.transition = {};
        var D = ye.transition;
        ye.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          d();
        } finally {
          if (ye.transition = O, O === null && D._updatedFibers) {
            var V = D._updatedFibers.size;
            V > 10 && bt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), D._updatedFibers.clear();
          }
        }
      }
      var Ka = !1, Da = null;
      function Hl(d) {
        if (Da === null)
          try {
            var S = ("require" + Math.random()).slice(0, 7), O = l && l[S];
            Da = O.call(l, "timers").setImmediate;
          } catch {
            Da = function(V) {
              Ka === !1 && (Ka = !0, typeof MessageChannel > "u" && J("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var oe = new MessageChannel();
              oe.port1.onmessage = V, oe.port2.postMessage(void 0);
            };
          }
        return Da(d);
      }
      var Kn = 0, Si = !1;
      function Vi(d) {
        {
          var S = Kn;
          Kn++, fe.current === null && (fe.current = []);
          var O = fe.isBatchingLegacy, D;
          try {
            if (fe.isBatchingLegacy = !0, D = d(), !O && fe.didScheduleLegacyUpdate) {
              var V = fe.current;
              V !== null && (fe.didScheduleLegacyUpdate = !1, qa(V));
            }
          } catch (at) {
            throw mr(S), at;
          } finally {
            fe.isBatchingLegacy = O;
          }
          if (D !== null && typeof D == "object" && typeof D.then == "function") {
            var oe = D, G = !1, se = {
              then: function(at, ft) {
                G = !0, oe.then(function(Ze) {
                  mr(S), Kn === 0 ? Pi(Ze, at, ft) : at(Ze);
                }, function(Ze) {
                  mr(S), ft(Ze);
                });
              }
            };
            return !Si && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              G || (Si = !0, J("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), se;
          } else {
            var Ee = D;
            if (mr(S), Kn === 0) {
              var Be = fe.current;
              Be !== null && (qa(Be), fe.current = null);
              var nt = {
                then: function(at, ft) {
                  fe.current === null ? (fe.current = [], Pi(Ee, at, ft)) : at(Ee);
                }
              };
              return nt;
            } else {
              var qe = {
                then: function(at, ft) {
                  at(Ee);
                }
              };
              return qe;
            }
          }
        }
      }
      function mr(d) {
        d !== Kn - 1 && J("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Kn = d;
      }
      function Pi(d, S, O) {
        {
          var D = fe.current;
          if (D !== null)
            try {
              qa(D), Hl(function() {
                D.length === 0 ? (fe.current = null, S(d)) : Pi(d, S, O);
              });
            } catch (V) {
              O(V);
            }
          else
            S(d);
        }
      }
      var Xa = !1;
      function qa(d) {
        if (!Xa) {
          Xa = !0;
          var S = 0;
          try {
            for (; S < d.length; S++) {
              var O = d[S];
              do
                O = O(!0);
              while (O !== null);
            }
            d.length = 0;
          } catch (D) {
            throw d = d.slice(S + 1), D;
          } finally {
            Xa = !1;
          }
        }
      }
      var ho = Bu, tu = Qa, Iu = Hn, Na = {
        map: ra,
        forEach: Ul,
        count: Go,
        toArray: zl,
        only: Qo
      };
      c.Children = Na, c.Component = me, c.Fragment = C, c.Profiler = A, c.PureComponent = yt, c.StrictMode = _, c.Suspense = X, c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nt, c.cloneElement = tu, c.createContext = Vu, c.createElement = ho, c.createFactory = Iu, c.createRef = nr, c.forwardRef = Mi, c.isValidElement = pt, c.lazy = wa, c.memo = Pu, c.startTransition = Fl, c.unstable_act = Vi, c.useCallback = Pl, c.useContext = aa, c.useDebugValue = pn, c.useDeferredValue = Ta, c.useEffect = jl, c.useId = Ct, c.useImperativeHandle = Hs, c.useInsertionEffect = Vl, c.useLayoutEffect = Fu, c.useMemo = Fs, c.useReducer = Ui, c.useRef = Gn, c.useState = lo, c.useSyncExternalStore = Ya, c.useTransition = Bs, c.version = p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Xv, Xv.exports)), Xv.exports;
}
process.env.NODE_ENV === "production" ? lE.exports = Wk() : lE.exports = Gk();
var cn = lE.exports;
class pw extends cn.Component {
  render() {
    const { disabled: c = !1, onClick: p, className: h = "", dialogboxType: b, children: C, btnType: _, ...A } = this.props;
    return /* @__PURE__ */ cn.createElement(
      "button",
      {
        className: Kv("dialogbox-button", h, _, { [b + "-btn"]: b }),
        onClick: p,
        disabled: c,
        ...A
      },
      /* @__PURE__ */ cn.createElement("span", null, C)
    );
  }
}
var Qk = {
  0: "Invalid value for configuration 'enforceActions', expected 'never', 'always' or 'observed'",
  1: function(c, p) {
    return "Cannot apply '" + c + "' to '" + p.toString() + "': Field not found.";
  },
  /*
  2(prop) {
      return `invalid decorator for '${prop.toString()}'`
  },
  3(prop) {
      return `Cannot decorate '${prop.toString()}': action can only be used on properties with a function value.`
  },
  4(prop) {
      return `Cannot decorate '${prop.toString()}': computed can only be used on getter properties.`
  },
  */
  5: "'keys()' can only be used on observable objects, arrays, sets and maps",
  6: "'values()' can only be used on observable objects, arrays, sets and maps",
  7: "'entries()' can only be used on observable objects, arrays and maps",
  8: "'set()' can only be used on observable objects, arrays and maps",
  9: "'remove()' can only be used on observable objects, arrays and maps",
  10: "'has()' can only be used on observable objects, arrays and maps",
  11: "'get()' can only be used on observable objects, arrays and maps",
  12: "Invalid annotation",
  13: "Dynamic observable objects cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)",
  14: "Intercept handlers should return nothing or a change object",
  15: "Observable arrays cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)",
  16: "Modification exception: the internal structure of an observable array was changed.",
  17: function(c, p) {
    return "[mobx.array] Index out of bounds, " + c + " is larger than " + p;
  },
  18: "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js",
  19: function(c) {
    return "Cannot initialize from classes that inherit from Map: " + c.constructor.name;
  },
  20: function(c) {
    return "Cannot initialize map from " + c;
  },
  21: function(c) {
    return "Cannot convert to map from '" + c + "'";
  },
  22: "mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js",
  23: "It is not possible to get index atoms from arrays",
  24: function(c) {
    return "Cannot obtain administration from " + c;
  },
  25: function(c, p) {
    return "the entry '" + c + "' does not exist in the observable map '" + p + "'";
  },
  26: "please specify a property",
  27: function(c, p) {
    return "no observable property '" + c.toString() + "' found on the observable object '" + p + "'";
  },
  28: function(c) {
    return "Cannot obtain atom from " + c;
  },
  29: "Expecting some object",
  30: "invalid action stack. did you forget to finish an action?",
  31: "missing option for computed: get",
  32: function(c, p) {
    return "Cycle detected in computation " + c + ": " + p;
  },
  33: function(c) {
    return "The setter of computed value '" + c + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?";
  },
  34: function(c) {
    return "[ComputedValue '" + c + "'] It is not possible to assign a new value to a computed value.";
  },
  35: "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`",
  36: "isolateGlobalState should be called before MobX is running any reactions",
  37: function(c) {
    return "[mobx] `observableArray." + c + "()` mutates the array in-place, which is not allowed inside a derivation. Use `array.slice()." + c + "()` instead";
  },
  38: "'ownKeys()' can only be used on observable objects",
  39: "'defineProperty()' can only be used on observable objects"
}, Kk = process.env.NODE_ENV !== "production" ? Qk : {};
function Ne(l) {
  for (var c = arguments.length, p = new Array(c > 1 ? c - 1 : 0), h = 1; h < c; h++)
    p[h - 1] = arguments[h];
  if (process.env.NODE_ENV !== "production") {
    var b = typeof l == "string" ? l : Kk[l];
    throw typeof b == "function" && (b = b.apply(null, p)), new Error("[MobX] " + b);
  }
  throw new Error(typeof l == "number" ? "[MobX] minified error nr: " + l + (p.length ? " " + p.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + l);
}
var Xk = {};
function bE() {
  return typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : Xk;
}
var Jw = Object.assign, sg = Object.getOwnPropertyDescriptor, Uu = Object.defineProperty, bg = Object.prototype, cg = [];
Object.freeze(cg);
var e1 = {};
Object.freeze(e1);
var qk = typeof Proxy < "u", Zk = /* @__PURE__ */ Object.toString();
function t1() {
  qk || Ne(process.env.NODE_ENV !== "production" ? "`Proxy` objects are not available in the current environment. Please configure MobX to enable a fallback implementation.`" : "Proxy not available");
}
function Qv(l) {
  process.env.NODE_ENV !== "production" && ne.verifyProxies && Ne("MobX is currently configured to be able to run in ES5 mode, but in ES5 MobX won't be able to " + l);
}
function Yo() {
  return ++ne.mobxGuid;
}
function SE(l) {
  var c = !1;
  return function() {
    if (!c)
      return c = !0, l.apply(this, arguments);
  };
}
var Md = function() {
};
function xr(l) {
  return typeof l == "function";
}
function Yc(l) {
  var c = typeof l;
  switch (c) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function Sg(l) {
  return l !== null && typeof l == "object";
}
function Ni(l) {
  if (!Sg(l))
    return !1;
  var c = Object.getPrototypeOf(l);
  if (c == null)
    return !0;
  var p = Object.hasOwnProperty.call(c, "constructor") && c.constructor;
  return typeof p == "function" && p.toString() === Zk;
}
function n1(l) {
  var c = l == null ? void 0 : l.constructor;
  return c ? c.name === "GeneratorFunction" || c.displayName === "GeneratorFunction" : !1;
}
function oh(l, c, p) {
  Uu(l, c, {
    enumerable: !1,
    writable: !0,
    configurable: !0,
    value: p
  });
}
function r1(l, c, p) {
  Uu(l, c, {
    enumerable: !1,
    writable: !1,
    configurable: !0,
    value: p
  });
}
function Qc(l, c) {
  var p = "isMobX" + l;
  return c.prototype[p] = !0, function(h) {
    return Sg(h) && h[p] === !0;
  };
}
function Hd(l) {
  return l instanceof Map;
}
function uh(l) {
  return l instanceof Set;
}
var a1 = typeof Object.getOwnPropertySymbols < "u";
function Jk(l) {
  var c = Object.keys(l);
  if (!a1)
    return c;
  var p = Object.getOwnPropertySymbols(l);
  return p.length ? [].concat(c, p.filter(function(h) {
    return bg.propertyIsEnumerable.call(l, h);
  })) : c;
}
var jd = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : a1 ? function(l) {
  return Object.getOwnPropertyNames(l).concat(Object.getOwnPropertySymbols(l));
} : (
  /* istanbul ignore next */
  Object.getOwnPropertyNames
);
function sE(l) {
  return typeof l == "string" ? l : typeof l == "symbol" ? l.toString() : new String(l).toString();
}
function i1(l) {
  return l === null ? null : typeof l == "object" ? "" + l : l;
}
function io(l, c) {
  return bg.hasOwnProperty.call(l, c);
}
var eA = Object.getOwnPropertyDescriptors || function(c) {
  var p = {};
  return jd(c).forEach(function(h) {
    p[h] = sg(c, h);
  }), p;
};
function vw(l, c) {
  for (var p = 0; p < c.length; p++) {
    var h = c[p];
    h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(l, rA(h.key), h);
  }
}
function EE(l, c, p) {
  return c && vw(l.prototype, c), p && vw(l, p), Object.defineProperty(l, "prototype", {
    writable: !1
  }), l;
}
function zs() {
  return zs = Object.assign ? Object.assign.bind() : function(l) {
    for (var c = 1; c < arguments.length; c++) {
      var p = arguments[c];
      for (var h in p)
        Object.prototype.hasOwnProperty.call(p, h) && (l[h] = p[h]);
    }
    return l;
  }, zs.apply(this, arguments);
}
function o1(l, c) {
  l.prototype = Object.create(c.prototype), l.prototype.constructor = l, cE(l, c);
}
function cE(l, c) {
  return cE = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(h, b) {
    return h.__proto__ = b, h;
  }, cE(l, c);
}
function ag(l) {
  if (l === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return l;
}
function tA(l, c) {
  if (l) {
    if (typeof l == "string")
      return hw(l, c);
    var p = Object.prototype.toString.call(l).slice(8, -1);
    if (p === "Object" && l.constructor && (p = l.constructor.name), p === "Map" || p === "Set")
      return Array.from(l);
    if (p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))
      return hw(l, c);
  }
}
function hw(l, c) {
  (c == null || c > l.length) && (c = l.length);
  for (var p = 0, h = new Array(c); p < c; p++)
    h[p] = l[p];
  return h;
}
function Ud(l, c) {
  var p = typeof Symbol < "u" && l[Symbol.iterator] || l["@@iterator"];
  if (p)
    return (p = p.call(l)).next.bind(p);
  if (Array.isArray(l) || (p = tA(l)) || c && l && typeof l.length == "number") {
    p && (l = p);
    var h = 0;
    return function() {
      return h >= l.length ? {
        done: !0
      } : {
        done: !1,
        value: l[h++]
      };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nA(l, c) {
  if (typeof l != "object" || l === null)
    return l;
  var p = l[Symbol.toPrimitive];
  if (p !== void 0) {
    var h = p.call(l, c || "default");
    if (typeof h != "object")
      return h;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (c === "string" ? String : Number)(l);
}
function rA(l) {
  var c = nA(l, "string");
  return typeof c == "symbol" ? c : String(c);
}
var Ba = /* @__PURE__ */ Symbol("mobx-stored-annotations");
function zu(l) {
  function c(p, h) {
    lh(p, h, l);
  }
  return Object.assign(c, l);
}
function lh(l, c, p) {
  if (io(l, Ba) || oh(l, Ba, zs({}, l[Ba])), process.env.NODE_ENV !== "production" && dg(p) && !io(l[Ba], c)) {
    var h = l.constructor.name + ".prototype." + c.toString();
    Ne("'" + h + "' is decorated with 'override', but no such decorated member was found on prototype.");
  }
  aA(l, p, c), dg(p) || (l[Ba][c] = p);
}
function aA(l, c, p) {
  if (process.env.NODE_ENV !== "production" && !dg(c) && io(l[Ba], p)) {
    var h = l.constructor.name + ".prototype." + p.toString(), b = l[Ba][p].annotationType_, C = c.annotationType_;
    Ne("Cannot apply '@" + C + "' to '" + h + "':" + (`
The field is already decorated with '@` + b + "'.") + `
Re-decorating fields is not allowed.
Use '@override' decorator for methods overridden by subclass.`);
  }
}
function iA(l) {
  return io(l, Ba) || (process.env.NODE_ENV !== "production" && !l[Ba] && Ne("No annotations were passed to makeObservable, but no decorated members have been found either"), oh(l, Ba, zs({}, l[Ba]))), l[Ba];
}
var St = /* @__PURE__ */ Symbol("mobx administration"), sh = /* @__PURE__ */ function() {
  function l(p) {
    p === void 0 && (p = process.env.NODE_ENV !== "production" ? "Atom@" + Yo() : "Atom"), this.name_ = void 0, this.isPendingUnobservation_ = !1, this.isBeingObserved_ = !1, this.observers_ = /* @__PURE__ */ new Set(), this.batchId_ = void 0, this.diffValue_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = en.NOT_TRACKING_, this.onBOL = void 0, this.onBUOL = void 0, this.name_ = p, this.batchId_ = ne.inBatch ? ne.batchId : NaN;
  }
  var c = l.prototype;
  return c.onBO = function() {
    this.onBOL && this.onBOL.forEach(function(h) {
      return h();
    });
  }, c.onBUO = function() {
    this.onBUOL && this.onBUOL.forEach(function(h) {
      return h();
    });
  }, c.reportObserved = function() {
    return T1(this);
  }, c.reportChanged = function() {
    (!ne.inBatch || this.batchId_ !== ne.batchId) && (ne.stateVersion = ne.stateVersion < Number.MAX_SAFE_INTEGER ? ne.stateVersion + 1 : Number.MIN_SAFE_INTEGER, this.batchId_ = NaN), ro(), O1(this), ao();
  }, c.toString = function() {
    return this.name_;
  }, l;
}(), CE = /* @__PURE__ */ Qc("Atom", sh);
function u1(l, c, p) {
  c === void 0 && (c = Md), p === void 0 && (p = Md);
  var h = new sh(l);
  return c !== Md && mL(h, c), p !== Md && U1(h, p), h;
}
function oA(l, c) {
  return l === c;
}
function uA(l, c) {
  return NE(l, c);
}
function lA(l, c) {
  return NE(l, c, 1);
}
function sA(l, c) {
  return Object.is ? Object.is(l, c) : l === c ? l !== 0 || 1 / l === 1 / c : l !== l && c !== c;
}
var fg = {
  identity: oA,
  structural: uA,
  default: sA,
  shallow: lA
};
function Vd(l, c, p) {
  return nh(l) ? l : Array.isArray(l) ? Pr.array(l, {
    name: p
  }) : Ni(l) ? Pr.object(l, void 0, {
    name: p
  }) : Hd(l) ? Pr.map(l, {
    name: p
  }) : uh(l) ? Pr.set(l, {
    name: p
  }) : typeof l == "function" && !xg(l) && !mg(l) ? n1(l) ? th(l) : eh(p, l) : l;
}
function cA(l, c, p) {
  if (l == null || Gc(l) || ph(l) || Ml(l) || Bd(l))
    return l;
  if (Array.isArray(l))
    return Pr.array(l, {
      name: p,
      deep: !1
    });
  if (Ni(l))
    return Pr.object(l, void 0, {
      name: p,
      deep: !1
    });
  if (Hd(l))
    return Pr.map(l, {
      name: p,
      deep: !1
    });
  if (uh(l))
    return Pr.set(l, {
      name: p,
      deep: !1
    });
  process.env.NODE_ENV !== "production" && Ne("The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}
function Eg(l) {
  return l;
}
function fA(l, c) {
  return process.env.NODE_ENV !== "production" && nh(l) && Ne("observable.struct should not be used with observable values"), NE(l, c) ? c : l;
}
var dA = "override";
function dg(l) {
  return l.annotationType_ === dA;
}
function ch(l, c) {
  return {
    annotationType_: l,
    options_: c,
    make_: pA,
    extend_: vA
  };
}
function pA(l, c, p, h) {
  var b;
  if ((b = this.options_) != null && b.bound)
    return this.extend_(l, c, p, !1) === null ? 0 : 1;
  if (h === l.target_)
    return this.extend_(l, c, p, !1) === null ? 0 : 2;
  if (xg(p.value))
    return 1;
  var C = l1(l, this, c, p, !1);
  return Uu(h, c, C), 2;
}
function vA(l, c, p, h) {
  var b = l1(l, this, c, p);
  return l.defineProperty_(c, b, h);
}
function hA(l, c, p, h) {
  var b = c.annotationType_, C = h.value;
  process.env.NODE_ENV !== "production" && !xr(C) && Ne("Cannot apply '" + b + "' to '" + l.name_ + "." + p.toString() + "':" + (`
'` + b + "' can only be used on properties with a function value."));
}
function l1(l, c, p, h, b) {
  var C, _, A, L, B, ie, X;
  b === void 0 && (b = ne.safeDescriptors), hA(l, c, p, h);
  var te = h.value;
  if ((C = c.options_) != null && C.bound) {
    var re;
    te = te.bind((re = l.proxy_) != null ? re : l.target_);
  }
  return {
    value: Pd(
      (_ = (A = c.options_) == null ? void 0 : A.name) != null ? _ : p.toString(),
      te,
      (L = (B = c.options_) == null ? void 0 : B.autoAction) != null ? L : !1,
      // https://github.com/mobxjs/mobx/discussions/3140
      (ie = c.options_) != null && ie.bound ? (X = l.proxy_) != null ? X : l.target_ : void 0
    ),
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: b ? l.isPlainObject_ : !0,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: !1,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: !b
  };
}
function s1(l, c) {
  return {
    annotationType_: l,
    options_: c,
    make_: mA,
    extend_: yA
  };
}
function mA(l, c, p, h) {
  var b;
  if (h === l.target_)
    return this.extend_(l, c, p, !1) === null ? 0 : 2;
  if ((b = this.options_) != null && b.bound && (!io(l.target_, c) || !mg(l.target_[c])) && this.extend_(l, c, p, !1) === null)
    return 0;
  if (mg(p.value))
    return 1;
  var C = c1(l, this, c, p, !1, !1);
  return Uu(h, c, C), 2;
}
function yA(l, c, p, h) {
  var b, C = c1(l, this, c, p, (b = this.options_) == null ? void 0 : b.bound);
  return l.defineProperty_(c, C, h);
}
function gA(l, c, p, h) {
  var b = c.annotationType_, C = h.value;
  process.env.NODE_ENV !== "production" && !xr(C) && Ne("Cannot apply '" + b + "' to '" + l.name_ + "." + p.toString() + "':" + (`
'` + b + "' can only be used on properties with a generator function value."));
}
function c1(l, c, p, h, b, C) {
  C === void 0 && (C = ne.safeDescriptors), gA(l, c, p, h);
  var _ = h.value;
  if (mg(_) || (_ = th(_)), b) {
    var A;
    _ = _.bind((A = l.proxy_) != null ? A : l.target_), _.isMobXFlow = !0;
  }
  return {
    value: _,
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: C ? l.isPlainObject_ : !0,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: !1,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: !C
  };
}
function RE(l, c) {
  return {
    annotationType_: l,
    options_: c,
    make_: _A,
    extend_: bA
  };
}
function _A(l, c, p) {
  return this.extend_(l, c, p, !1) === null ? 0 : 1;
}
function bA(l, c, p, h) {
  return SA(l, this, c, p), l.defineComputedProperty_(c, zs({}, this.options_, {
    get: p.get,
    set: p.set
  }), h);
}
function SA(l, c, p, h) {
  var b = c.annotationType_, C = h.get;
  process.env.NODE_ENV !== "production" && !C && Ne("Cannot apply '" + b + "' to '" + l.name_ + "." + p.toString() + "':" + (`
'` + b + "' can only be used on getter(+setter) properties."));
}
function Cg(l, c) {
  return {
    annotationType_: l,
    options_: c,
    make_: EA,
    extend_: CA
  };
}
function EA(l, c, p) {
  return this.extend_(l, c, p, !1) === null ? 0 : 1;
}
function CA(l, c, p, h) {
  var b, C;
  return RA(l, this, c, p), l.defineObservableProperty_(c, p.value, (b = (C = this.options_) == null ? void 0 : C.enhancer) != null ? b : Vd, h);
}
function RA(l, c, p, h) {
  var b = c.annotationType_;
  process.env.NODE_ENV !== "production" && !("value" in h) && Ne("Cannot apply '" + b + "' to '" + l.name_ + "." + p.toString() + "':" + (`
'` + b + "' cannot be used on getter/setter properties"));
}
var wA = "true", TA = /* @__PURE__ */ f1();
function f1(l) {
  return {
    annotationType_: wA,
    options_: l,
    make_: OA,
    extend_: xA
  };
}
function OA(l, c, p, h) {
  var b, C;
  if (p.get)
    return Rg.make_(l, c, p, h);
  if (p.set) {
    var _ = Pd(c.toString(), p.set);
    return h === l.target_ ? l.defineProperty_(c, {
      configurable: ne.safeDescriptors ? l.isPlainObject_ : !0,
      set: _
    }) === null ? 0 : 2 : (Uu(h, c, {
      configurable: !0,
      set: _
    }), 2);
  }
  if (h !== l.target_ && typeof p.value == "function") {
    var A;
    if (n1(p.value)) {
      var L, B = (L = this.options_) != null && L.autoBind ? th.bound : th;
      return B.make_(l, c, p, h);
    }
    var ie = (A = this.options_) != null && A.autoBind ? eh.bound : eh;
    return ie.make_(l, c, p, h);
  }
  var X = ((b = this.options_) == null ? void 0 : b.deep) === !1 ? Pr.ref : Pr;
  if (typeof p.value == "function" && (C = this.options_) != null && C.autoBind) {
    var te;
    p.value = p.value.bind((te = l.proxy_) != null ? te : l.target_);
  }
  return X.make_(l, c, p, h);
}
function xA(l, c, p, h) {
  var b, C;
  if (p.get)
    return Rg.extend_(l, c, p, h);
  if (p.set)
    return l.defineProperty_(c, {
      configurable: ne.safeDescriptors ? l.isPlainObject_ : !0,
      set: Pd(c.toString(), p.set)
    }, h);
  if (typeof p.value == "function" && (b = this.options_) != null && b.autoBind) {
    var _;
    p.value = p.value.bind((_ = l.proxy_) != null ? _ : l.target_);
  }
  var A = ((C = this.options_) == null ? void 0 : C.deep) === !1 ? Pr.ref : Pr;
  return A.extend_(l, c, p, h);
}
var DA = "observable", NA = "observable.ref", kA = "observable.shallow", AA = "observable.struct", d1 = {
  deep: !0,
  name: void 0,
  defaultDecorator: void 0,
  proxy: !0
};
Object.freeze(d1);
function eg(l) {
  return l || d1;
}
var p1 = /* @__PURE__ */ Cg(DA), LA = /* @__PURE__ */ Cg(NA, {
  enhancer: Eg
}), MA = /* @__PURE__ */ Cg(kA, {
  enhancer: cA
}), UA = /* @__PURE__ */ Cg(AA, {
  enhancer: fA
}), v1 = /* @__PURE__ */ zu(p1);
function tg(l) {
  return l.deep === !0 ? Vd : l.deep === !1 ? Eg : jA(l.defaultDecorator);
}
function zA(l) {
  var c;
  return l ? (c = l.defaultDecorator) != null ? c : f1(l) : void 0;
}
function jA(l) {
  var c, p;
  return l && (c = (p = l.options_) == null ? void 0 : p.enhancer) != null ? c : Vd;
}
function h1(l, c, p) {
  if (Yc(c)) {
    lh(l, c, p1);
    return;
  }
  return nh(l) ? l : Ni(l) ? Pr.object(l, c, p) : Array.isArray(l) ? Pr.array(l, c) : Hd(l) ? Pr.map(l, c) : uh(l) ? Pr.set(l, c) : typeof l == "object" && l !== null ? l : Pr.box(l, c);
}
Jw(h1, v1);
var VA = {
  box: function(c, p) {
    var h = eg(p);
    return new zd(c, tg(h), h.name, !0, h.equals);
  },
  array: function(c, p) {
    var h = eg(p);
    return (ne.useProxies === !1 || h.proxy === !1 ? BL : AL)(c, tg(h), h.name);
  },
  map: function(c, p) {
    var h = eg(p);
    return new $1(c, tg(h), h.name);
  },
  set: function(c, p) {
    var h = eg(p);
    return new G1(c, tg(h), h.name);
  },
  object: function(c, p, h) {
    return Ps(function() {
      return j1(ne.useProxies === !1 || (h == null ? void 0 : h.proxy) === !1 ? vh({}, h) : OL({}, h), c, p);
    });
  },
  ref: /* @__PURE__ */ zu(LA),
  shallow: /* @__PURE__ */ zu(MA),
  deep: v1,
  struct: /* @__PURE__ */ zu(UA)
}, Pr = /* @__PURE__ */ Jw(h1, VA), m1 = "computed", PA = "computed.struct", y1 = /* @__PURE__ */ RE(m1), FA = /* @__PURE__ */ RE(PA, {
  equals: fg.structural
}), Rg = function(c, p) {
  if (Yc(p))
    return lh(c, p, y1);
  if (Ni(c))
    return zu(RE(m1, c));
  process.env.NODE_ENV !== "production" && (xr(c) || Ne("First argument to `computed` should be an expression."), xr(p) && Ne("A setter as second argument is no longer supported, use `{ set: fn }` option instead"));
  var h = Ni(p) ? p : {};
  return h.get = c, h.name || (h.name = c.name || ""), new Fd(h);
};
Object.assign(Rg, y1);
Rg.struct = /* @__PURE__ */ zu(FA);
var mw, yw, pg = 0, HA = 1, BA = (mw = (yw = /* @__PURE__ */ sg(function() {
}, "name")) == null ? void 0 : yw.configurable) != null ? mw : !1, gw = {
  value: "action",
  configurable: !0,
  writable: !1,
  enumerable: !1
};
function Pd(l, c, p, h) {
  p === void 0 && (p = !1), process.env.NODE_ENV !== "production" && (xr(c) || Ne("`action` can only be invoked on functions"), (typeof l != "string" || !l) && Ne("actions should have valid names, got: '" + l + "'"));
  function b() {
    return IA(l, p, c, h || this, arguments);
  }
  return b.isMobxAction = !0, BA && (gw.value = l, Uu(b, "name", gw)), b;
}
function IA(l, c, p, h, b) {
  var C = $A(l, c, h, b);
  try {
    return p.apply(h, b);
  } catch (_) {
    throw C.error_ = _, _;
  } finally {
    YA(C);
  }
}
function $A(l, c, p, h) {
  var b = process.env.NODE_ENV !== "production" && ta() && !!l, C = 0;
  if (process.env.NODE_ENV !== "production" && b) {
    C = Date.now();
    var _ = h ? Array.from(h) : cg;
    ki({
      type: TE,
      name: l,
      object: p,
      arguments: _
    });
  }
  var A = ne.trackingDerivation, L = !c || !A;
  ro();
  var B = ne.allowStateChanges;
  L && (Kc(), B = wg(!0));
  var ie = wE(!0), X = {
    runAsAction_: L,
    prevDerivation_: A,
    prevAllowStateChanges_: B,
    prevAllowStateReads_: ie,
    notifySpy_: b,
    startTime_: C,
    actionId_: HA++,
    parentActionId_: pg
  };
  return pg = X.actionId_, X;
}
function YA(l) {
  pg !== l.actionId_ && Ne(30), pg = l.parentActionId_, l.error_ !== void 0 && (ne.suppressReactionErrors = !0), Tg(l.prevAllowStateChanges_), Zv(l.prevAllowStateReads_), ao(), l.runAsAction_ && Al(l.prevDerivation_), process.env.NODE_ENV !== "production" && l.notifySpy_ && Ai({
    time: Date.now() - l.startTime_
  }), ne.suppressReactionErrors = !1;
}
function WA(l, c) {
  var p = wg(l);
  try {
    return c();
  } finally {
    Tg(p);
  }
}
function wg(l) {
  var c = ne.allowStateChanges;
  return ne.allowStateChanges = l, c;
}
function Tg(l) {
  ne.allowStateChanges = l;
}
var g1, GA = "create";
g1 = Symbol.toPrimitive;
var zd = /* @__PURE__ */ function(l) {
  o1(c, l);
  function c(h, b, C, _, A) {
    var L;
    return C === void 0 && (C = process.env.NODE_ENV !== "production" ? "ObservableValue@" + Yo() : "ObservableValue"), _ === void 0 && (_ = !0), A === void 0 && (A = fg.default), L = l.call(this, C) || this, L.enhancer = void 0, L.name_ = void 0, L.equals = void 0, L.hasUnreportedChange_ = !1, L.interceptors_ = void 0, L.changeListeners_ = void 0, L.value_ = void 0, L.dehancer = void 0, L.enhancer = b, L.name_ = C, L.equals = A, L.value_ = b(h, void 0, C), process.env.NODE_ENV !== "production" && _ && ta() && Wc({
      type: GA,
      object: ag(L),
      observableKind: "value",
      debugObjectName: L.name_,
      newValue: "" + L.value_
    }), L;
  }
  var p = c.prototype;
  return p.dehanceValue = function(b) {
    return this.dehancer !== void 0 ? this.dehancer(b) : b;
  }, p.set = function(b) {
    var C = this.value_;
    if (b = this.prepareNewValue_(b), b !== ne.UNCHANGED) {
      var _ = ta();
      process.env.NODE_ENV !== "production" && _ && ki({
        type: Bo,
        object: this,
        observableKind: "value",
        debugObjectName: this.name_,
        newValue: b,
        oldValue: C
      }), this.setNewValue_(b), process.env.NODE_ENV !== "production" && _ && Ai();
    }
  }, p.prepareNewValue_ = function(b) {
    if (Mu(this), to(this)) {
      var C = no(this, {
        object: this,
        type: Bo,
        newValue: b
      });
      if (!C)
        return ne.UNCHANGED;
      b = C.newValue;
    }
    return b = this.enhancer(b, this.value_, this.name_), this.equals(this.value_, b) ? ne.UNCHANGED : b;
  }, p.setNewValue_ = function(b) {
    var C = this.value_;
    this.value_ = b, this.reportChanged(), Io(this) && $o(this, {
      type: Bo,
      object: this,
      newValue: b,
      oldValue: C
    });
  }, p.get = function() {
    return this.reportObserved(), this.dehanceValue(this.value_);
  }, p.intercept_ = function(b) {
    return fh(this, b);
  }, p.observe_ = function(b, C) {
    return C && b({
      observableKind: "value",
      debugObjectName: this.name_,
      object: this,
      type: Bo,
      newValue: this.value_,
      oldValue: void 0
    }), dh(this, b);
  }, p.raw = function() {
    return this.value_;
  }, p.toJSON = function() {
    return this.get();
  }, p.toString = function() {
    return this.name_ + "[" + this.value_ + "]";
  }, p.valueOf = function() {
    return i1(this.get());
  }, p[g1] = function() {
    return this.valueOf();
  }, c;
}(sh), _1;
_1 = Symbol.toPrimitive;
var Fd = /* @__PURE__ */ function() {
  function l(p) {
    this.dependenciesState_ = en.NOT_TRACKING_, this.observing_ = [], this.newObserving_ = null, this.isBeingObserved_ = !1, this.isPendingUnobservation_ = !1, this.observers_ = /* @__PURE__ */ new Set(), this.diffValue_ = 0, this.runId_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = en.UP_TO_DATE_, this.unboundDepsCount_ = 0, this.value_ = new vg(null), this.name_ = void 0, this.triggeredBy_ = void 0, this.isComputing_ = !1, this.isRunningSetter_ = !1, this.derivation = void 0, this.setter_ = void 0, this.isTracing_ = oo.NONE, this.scope_ = void 0, this.equals_ = void 0, this.requiresReaction_ = void 0, this.keepAlive_ = void 0, this.onBOL = void 0, this.onBUOL = void 0, p.get || Ne(31), this.derivation = p.get, this.name_ = p.name || (process.env.NODE_ENV !== "production" ? "ComputedValue@" + Yo() : "ComputedValue"), p.set && (this.setter_ = Pd(process.env.NODE_ENV !== "production" ? this.name_ + "-setter" : "ComputedValue-setter", p.set)), this.equals_ = p.equals || (p.compareStructural || p.struct ? fg.structural : fg.default), this.scope_ = p.context, this.requiresReaction_ = p.requiresReaction, this.keepAlive_ = !!p.keepAlive;
  }
  var c = l.prototype;
  return c.onBecomeStale_ = function() {
    tL(this);
  }, c.onBO = function() {
    this.onBOL && this.onBOL.forEach(function(h) {
      return h();
    });
  }, c.onBUO = function() {
    this.onBUOL && this.onBUOL.forEach(function(h) {
      return h();
    });
  }, c.get = function() {
    if (this.isComputing_ && Ne(32, this.name_, this.derivation), ne.inBatch === 0 && // !globalState.trackingDerivatpion &&
    this.observers_.size === 0 && !this.keepAlive_)
      fE(this) && (this.warnAboutUntrackedRead_(), ro(), this.value_ = this.computeValue_(!1), ao());
    else if (T1(this), fE(this)) {
      var h = ne.trackingContext;
      this.keepAlive_ && !h && (ne.trackingContext = this), this.trackAndCompute() && eL(this), ne.trackingContext = h;
    }
    var b = this.value_;
    if (ig(b))
      throw b.cause;
    return b;
  }, c.set = function(h) {
    if (this.setter_) {
      this.isRunningSetter_ && Ne(33, this.name_), this.isRunningSetter_ = !0;
      try {
        this.setter_.call(this.scope_, h);
      } finally {
        this.isRunningSetter_ = !1;
      }
    } else
      Ne(34, this.name_);
  }, c.trackAndCompute = function() {
    var h = this.value_, b = (
      /* see #1208 */
      this.dependenciesState_ === en.NOT_TRACKING_
    ), C = this.computeValue_(!0), _ = b || ig(h) || ig(C) || !this.equals_(h, C);
    return _ && (this.value_ = C, process.env.NODE_ENV !== "production" && ta() && Wc({
      observableKind: "computed",
      debugObjectName: this.name_,
      object: this.scope_,
      type: "update",
      oldValue: h,
      newValue: C
    })), _;
  }, c.computeValue_ = function(h) {
    this.isComputing_ = !0;
    var b = wg(!1), C;
    if (h)
      C = b1(this, this.derivation, this.scope_);
    else if (ne.disableErrorBoundaries === !0)
      C = this.derivation.call(this.scope_);
    else
      try {
        C = this.derivation.call(this.scope_);
      } catch (_) {
        C = new vg(_);
      }
    return Tg(b), this.isComputing_ = !1, C;
  }, c.suspend_ = function() {
    this.keepAlive_ || (dE(this), this.value_ = void 0, process.env.NODE_ENV !== "production" && this.isTracing_ !== oo.NONE && console.log("[mobx.trace] Computed value '" + this.name_ + "' was suspended and it will recompute on the next access."));
  }, c.observe_ = function(h, b) {
    var C = this, _ = !0, A = void 0;
    return fL(function() {
      var L = C.get();
      if (!_ || b) {
        var B = Kc();
        h({
          observableKind: "computed",
          debugObjectName: C.name_,
          type: Bo,
          object: C,
          newValue: L,
          oldValue: A
        }), Al(B);
      }
      _ = !1, A = L;
    });
  }, c.warnAboutUntrackedRead_ = function() {
    process.env.NODE_ENV !== "production" && (this.isTracing_ !== oo.NONE && console.log("[mobx.trace] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute."), (typeof this.requiresReaction_ == "boolean" ? this.requiresReaction_ : ne.computedRequiresReaction) && console.warn("[mobx] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute."));
  }, c.toString = function() {
    return this.name_ + "[" + this.derivation.toString() + "]";
  }, c.valueOf = function() {
    return i1(this.get());
  }, c[_1] = function() {
    return this.valueOf();
  }, l;
}(), Og = /* @__PURE__ */ Qc("ComputedValue", Fd), en;
(function(l) {
  l[l.NOT_TRACKING_ = -1] = "NOT_TRACKING_", l[l.UP_TO_DATE_ = 0] = "UP_TO_DATE_", l[l.POSSIBLY_STALE_ = 1] = "POSSIBLY_STALE_", l[l.STALE_ = 2] = "STALE_";
})(en || (en = {}));
var oo;
(function(l) {
  l[l.NONE = 0] = "NONE", l[l.LOG = 1] = "LOG", l[l.BREAK = 2] = "BREAK";
})(oo || (oo = {}));
var vg = function(c) {
  this.cause = void 0, this.cause = c;
};
function ig(l) {
  return l instanceof vg;
}
function fE(l) {
  switch (l.dependenciesState_) {
    case en.UP_TO_DATE_:
      return !1;
    case en.NOT_TRACKING_:
    case en.STALE_:
      return !0;
    case en.POSSIBLY_STALE_: {
      for (var c = wE(!0), p = Kc(), h = l.observing_, b = h.length, C = 0; C < b; C++) {
        var _ = h[C];
        if (Og(_)) {
          if (ne.disableErrorBoundaries)
            _.get();
          else
            try {
              _.get();
            } catch {
              return Al(p), Zv(c), !0;
            }
          if (l.dependenciesState_ === en.STALE_)
            return Al(p), Zv(c), !0;
        }
      }
      return E1(l), Al(p), Zv(c), !1;
    }
  }
}
function Mu(l) {
  if (process.env.NODE_ENV !== "production") {
    var c = l.observers_.size > 0;
    !ne.allowStateChanges && (c || ne.enforceActions === "always") && console.warn("[MobX] " + (ne.enforceActions ? "Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, a computed value or the render function of a React component? You can wrap side effects in 'runInAction' (or decorate functions with 'action') if needed. Tried to modify: ") + l.name_);
  }
}
function QA(l) {
  process.env.NODE_ENV !== "production" && !ne.allowStateReads && ne.observableRequiresReaction && console.warn("[mobx] Observable '" + l.name_ + "' being read outside a reactive context.");
}
function b1(l, c, p) {
  var h = wE(!0);
  E1(l), l.newObserving_ = new Array(l.observing_.length + 100), l.unboundDepsCount_ = 0, l.runId_ = ++ne.runId;
  var b = ne.trackingDerivation;
  ne.trackingDerivation = l, ne.inBatch++;
  var C;
  if (ne.disableErrorBoundaries === !0)
    C = c.call(p);
  else
    try {
      C = c.call(p);
    } catch (_) {
      C = new vg(_);
    }
  return ne.inBatch--, ne.trackingDerivation = b, XA(l), KA(l), Zv(h), C;
}
function KA(l) {
  process.env.NODE_ENV !== "production" && l.observing_.length === 0 && (typeof l.requiresObservable_ == "boolean" ? l.requiresObservable_ : ne.reactionRequiresObservable) && console.warn("[mobx] Derivation '" + l.name_ + "' is created/updated without reading any observable value.");
}
function XA(l) {
  for (var c = l.observing_, p = l.observing_ = l.newObserving_, h = en.UP_TO_DATE_, b = 0, C = l.unboundDepsCount_, _ = 0; _ < C; _++) {
    var A = p[_];
    A.diffValue_ === 0 && (A.diffValue_ = 1, b !== _ && (p[b] = A), b++), A.dependenciesState_ > h && (h = A.dependenciesState_);
  }
  for (p.length = b, l.newObserving_ = null, C = c.length; C--; ) {
    var L = c[C];
    L.diffValue_ === 0 && R1(L, l), L.diffValue_ = 0;
  }
  for (; b--; ) {
    var B = p[b];
    B.diffValue_ === 1 && (B.diffValue_ = 0, JA(B, l));
  }
  h !== en.UP_TO_DATE_ && (l.dependenciesState_ = h, l.onBecomeStale_());
}
function dE(l) {
  var c = l.observing_;
  l.observing_ = [];
  for (var p = c.length; p--; )
    R1(c[p], l);
  l.dependenciesState_ = en.NOT_TRACKING_;
}
function S1(l) {
  var c = Kc();
  try {
    return l();
  } finally {
    Al(c);
  }
}
function Kc() {
  var l = ne.trackingDerivation;
  return ne.trackingDerivation = null, l;
}
function Al(l) {
  ne.trackingDerivation = l;
}
function wE(l) {
  var c = ne.allowStateReads;
  return ne.allowStateReads = l, c;
}
function Zv(l) {
  ne.allowStateReads = l;
}
function E1(l) {
  if (l.dependenciesState_ !== en.UP_TO_DATE_) {
    l.dependenciesState_ = en.UP_TO_DATE_;
    for (var c = l.observing_, p = c.length; p--; )
      c[p].lowestObserverState_ = en.UP_TO_DATE_;
  }
}
var og = function() {
  this.version = 6, this.UNCHANGED = {}, this.trackingDerivation = null, this.trackingContext = null, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.batchId = Number.MIN_SAFE_INTEGER, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !1, this.allowStateReads = !0, this.enforceActions = !0, this.spyListeners = [], this.globalReactionErrorHandlers = [], this.computedRequiresReaction = !1, this.reactionRequiresObservable = !1, this.observableRequiresReaction = !1, this.disableErrorBoundaries = !1, this.suppressReactionErrors = !1, this.useProxies = !0, this.verifyProxies = !1, this.safeDescriptors = !0, this.stateVersion = Number.MIN_SAFE_INTEGER;
}, ug = !0, C1 = !1, ne = /* @__PURE__ */ function() {
  var l = /* @__PURE__ */ bE();
  return l.__mobxInstanceCount > 0 && !l.__mobxGlobals && (ug = !1), l.__mobxGlobals && l.__mobxGlobals.version !== new og().version && (ug = !1), ug ? l.__mobxGlobals ? (l.__mobxInstanceCount += 1, l.__mobxGlobals.UNCHANGED || (l.__mobxGlobals.UNCHANGED = {}), l.__mobxGlobals) : (l.__mobxInstanceCount = 1, l.__mobxGlobals = /* @__PURE__ */ new og()) : (setTimeout(function() {
    C1 || Ne(35);
  }, 1), new og());
}();
function qA() {
  if ((ne.pendingReactions.length || ne.inBatch || ne.isRunningReactions) && Ne(36), C1 = !0, ug) {
    var l = bE();
    --l.__mobxInstanceCount === 0 && (l.__mobxGlobals = void 0), ne = new og();
  }
}
function ZA() {
  return ne;
}
function JA(l, c) {
  l.observers_.add(c), l.lowestObserverState_ > c.dependenciesState_ && (l.lowestObserverState_ = c.dependenciesState_);
}
function R1(l, c) {
  l.observers_.delete(c), l.observers_.size === 0 && w1(l);
}
function w1(l) {
  l.isPendingUnobservation_ === !1 && (l.isPendingUnobservation_ = !0, ne.pendingUnobservations.push(l));
}
function ro() {
  ne.inBatch === 0 && (ne.batchId = ne.batchId < Number.MAX_SAFE_INTEGER ? ne.batchId + 1 : Number.MIN_SAFE_INTEGER), ne.inBatch++;
}
function ao() {
  if (--ne.inBatch === 0) {
    N1();
    for (var l = ne.pendingUnobservations, c = 0; c < l.length; c++) {
      var p = l[c];
      p.isPendingUnobservation_ = !1, p.observers_.size === 0 && (p.isBeingObserved_ && (p.isBeingObserved_ = !1, p.onBUO()), p instanceof Fd && p.suspend_());
    }
    ne.pendingUnobservations = [];
  }
}
function T1(l) {
  QA(l);
  var c = ne.trackingDerivation;
  return c !== null ? (c.runId_ !== l.lastAccessedBy_ && (l.lastAccessedBy_ = c.runId_, c.newObserving_[c.unboundDepsCount_++] = l, !l.isBeingObserved_ && ne.trackingContext && (l.isBeingObserved_ = !0, l.onBO())), l.isBeingObserved_) : (l.observers_.size === 0 && ne.inBatch > 0 && w1(l), !1);
}
function O1(l) {
  l.lowestObserverState_ !== en.STALE_ && (l.lowestObserverState_ = en.STALE_, l.observers_.forEach(function(c) {
    c.dependenciesState_ === en.UP_TO_DATE_ && (process.env.NODE_ENV !== "production" && c.isTracing_ !== oo.NONE && x1(c, l), c.onBecomeStale_()), c.dependenciesState_ = en.STALE_;
  }));
}
function eL(l) {
  l.lowestObserverState_ !== en.STALE_ && (l.lowestObserverState_ = en.STALE_, l.observers_.forEach(function(c) {
    c.dependenciesState_ === en.POSSIBLY_STALE_ ? (c.dependenciesState_ = en.STALE_, process.env.NODE_ENV !== "production" && c.isTracing_ !== oo.NONE && x1(c, l)) : c.dependenciesState_ === en.UP_TO_DATE_ && (l.lowestObserverState_ = en.UP_TO_DATE_);
  }));
}
function tL(l) {
  l.lowestObserverState_ === en.UP_TO_DATE_ && (l.lowestObserverState_ = en.POSSIBLY_STALE_, l.observers_.forEach(function(c) {
    c.dependenciesState_ === en.UP_TO_DATE_ && (c.dependenciesState_ = en.POSSIBLY_STALE_, c.onBecomeStale_());
  }));
}
function x1(l, c) {
  if (console.log("[mobx.trace] '" + l.name_ + "' is invalidated due to a change in: '" + c.name_ + "'"), l.isTracing_ === oo.BREAK) {
    var p = [];
    D1(V1(l), p, 1), new Function(`debugger;
/*
Tracing '` + l.name_ + `'

You are entering this break point because derivation '` + l.name_ + "' is being traced and '" + c.name_ + `' is now forcing it to update.
Just follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update
The stackframe you are looking for is at least ~6-8 stack-frames up.

` + (l instanceof Fd ? l.derivation.toString().replace(/[*]\//g, "/") : "") + `

The dependencies for this derivation are:

` + p.join(`
`) + `
*/
    `)();
  }
}
function D1(l, c, p) {
  if (c.length >= 1e3) {
    c.push("(and many more)");
    return;
  }
  c.push("" + "	".repeat(p - 1) + l.name), l.dependencies && l.dependencies.forEach(function(h) {
    return D1(h, c, p + 1);
  });
}
var Jv = /* @__PURE__ */ function() {
  function l(p, h, b, C) {
    p === void 0 && (p = process.env.NODE_ENV !== "production" ? "Reaction@" + Yo() : "Reaction"), this.name_ = void 0, this.onInvalidate_ = void 0, this.errorHandler_ = void 0, this.requiresObservable_ = void 0, this.observing_ = [], this.newObserving_ = [], this.dependenciesState_ = en.NOT_TRACKING_, this.diffValue_ = 0, this.runId_ = 0, this.unboundDepsCount_ = 0, this.isDisposed_ = !1, this.isScheduled_ = !1, this.isTrackPending_ = !1, this.isRunning_ = !1, this.isTracing_ = oo.NONE, this.name_ = p, this.onInvalidate_ = h, this.errorHandler_ = b, this.requiresObservable_ = C;
  }
  var c = l.prototype;
  return c.onBecomeStale_ = function() {
    this.schedule_();
  }, c.schedule_ = function() {
    this.isScheduled_ || (this.isScheduled_ = !0, ne.pendingReactions.push(this), N1());
  }, c.isScheduled = function() {
    return this.isScheduled_;
  }, c.runReaction_ = function() {
    if (!this.isDisposed_) {
      ro(), this.isScheduled_ = !1;
      var h = ne.trackingContext;
      if (ne.trackingContext = this, fE(this)) {
        this.isTrackPending_ = !0;
        try {
          this.onInvalidate_(), process.env.NODE_ENV !== "production" && this.isTrackPending_ && ta() && Wc({
            name: this.name_,
            type: "scheduled-reaction"
          });
        } catch (b) {
          this.reportExceptionInDerivation_(b);
        }
      }
      ne.trackingContext = h, ao();
    }
  }, c.track = function(h) {
    if (!this.isDisposed_) {
      ro();
      var b = ta(), C;
      process.env.NODE_ENV !== "production" && b && (C = Date.now(), ki({
        name: this.name_,
        type: "reaction"
      })), this.isRunning_ = !0;
      var _ = ne.trackingContext;
      ne.trackingContext = this;
      var A = b1(this, h, void 0);
      ne.trackingContext = _, this.isRunning_ = !1, this.isTrackPending_ = !1, this.isDisposed_ && dE(this), ig(A) && this.reportExceptionInDerivation_(A.cause), process.env.NODE_ENV !== "production" && b && Ai({
        time: Date.now() - C
      }), ao();
    }
  }, c.reportExceptionInDerivation_ = function(h) {
    var b = this;
    if (this.errorHandler_) {
      this.errorHandler_(h, this);
      return;
    }
    if (ne.disableErrorBoundaries)
      throw h;
    var C = process.env.NODE_ENV !== "production" ? "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'" : "[mobx] uncaught error in '" + this + "'";
    ne.suppressReactionErrors ? process.env.NODE_ENV !== "production" && console.warn("[mobx] (error in reaction '" + this.name_ + "' suppressed, fix error of causing action below)") : console.error(C, h), process.env.NODE_ENV !== "production" && ta() && Wc({
      type: "error",
      name: this.name_,
      message: C,
      error: "" + h
    }), ne.globalReactionErrorHandlers.forEach(function(_) {
      return _(h, b);
    });
  }, c.dispose = function() {
    this.isDisposed_ || (this.isDisposed_ = !0, this.isRunning_ || (ro(), dE(this), ao()));
  }, c.getDisposer_ = function(h) {
    var b = this, C = function _() {
      b.dispose(), h == null || h.removeEventListener == null || h.removeEventListener("abort", _);
    };
    return h == null || h.addEventListener == null || h.addEventListener("abort", C), C[St] = this, C;
  }, c.toString = function() {
    return "Reaction[" + this.name_ + "]";
  }, c.trace = function(h) {
    h === void 0 && (h = !1), RL(this, h);
  }, l;
}(), _w = 100, pE = function(c) {
  return c();
};
function N1() {
  ne.inBatch > 0 || ne.isRunningReactions || pE(nL);
}
function nL() {
  ne.isRunningReactions = !0;
  for (var l = ne.pendingReactions, c = 0; l.length > 0; ) {
    ++c === _w && (console.error(process.env.NODE_ENV !== "production" ? "Reaction doesn't converge to a stable state after " + _w + " iterations." + (" Probably there is a cycle in the reactive function: " + l[0]) : "[mobx] cycle in reaction: " + l[0]), l.splice(0));
    for (var p = l.splice(0), h = 0, b = p.length; h < b; h++)
      p[h].runReaction_();
  }
  ne.isRunningReactions = !1;
}
var hg = /* @__PURE__ */ Qc("Reaction", Jv);
function rL(l) {
  var c = pE;
  pE = function(h) {
    return l(function() {
      return c(h);
    });
  };
}
function ta() {
  return process.env.NODE_ENV !== "production" && !!ne.spyListeners.length;
}
function Wc(l) {
  if (process.env.NODE_ENV !== "production" && ne.spyListeners.length)
    for (var c = ne.spyListeners, p = 0, h = c.length; p < h; p++)
      c[p](l);
}
function ki(l) {
  if (process.env.NODE_ENV !== "production") {
    var c = zs({}, l, {
      spyReportStart: !0
    });
    Wc(c);
  }
}
var aL = {
  type: "report-end",
  spyReportEnd: !0
};
function Ai(l) {
  process.env.NODE_ENV !== "production" && Wc(l ? zs({}, l, {
    type: "report-end",
    spyReportEnd: !0
  }) : aL);
}
function iL(l) {
  return process.env.NODE_ENV === "production" ? (console.warn("[mobx.spy] Is a no-op in production builds"), function() {
  }) : (ne.spyListeners.push(l), SE(function() {
    ne.spyListeners = ne.spyListeners.filter(function(c) {
      return c !== l;
    });
  }));
}
var TE = "action", oL = "action.bound", k1 = "autoAction", uL = "autoAction.bound", lL = "<unnamed action>", A1 = /* @__PURE__ */ ch(TE), sL = /* @__PURE__ */ ch(oL, {
  bound: !0
}), L1 = /* @__PURE__ */ ch(k1, {
  autoAction: !0
}), cL = /* @__PURE__ */ ch(uL, {
  autoAction: !0,
  bound: !0
});
function M1(l) {
  var c = function(h, b) {
    if (xr(h))
      return Pd(h.name || lL, h, l);
    if (xr(b))
      return Pd(h, b, l);
    if (Yc(b))
      return lh(h, b, l ? L1 : A1);
    if (Yc(h))
      return zu(ch(l ? k1 : TE, {
        name: h,
        autoAction: l
      }));
    process.env.NODE_ENV !== "production" && Ne("Invalid arguments for `action`");
  };
  return c;
}
var Ea = /* @__PURE__ */ M1(!1);
Object.assign(Ea, A1);
var eh = /* @__PURE__ */ M1(!0);
Object.assign(eh, L1);
Ea.bound = /* @__PURE__ */ zu(sL);
eh.bound = /* @__PURE__ */ zu(cL);
function xg(l) {
  return xr(l) && l.isMobxAction === !0;
}
function fL(l, c) {
  var p, h, b, C, _;
  c === void 0 && (c = e1), process.env.NODE_ENV !== "production" && (xr(l) || Ne("Autorun expects a function as first argument"), xg(l) && Ne("Autorun does not accept actions since actions are untrackable"));
  var A = (p = (h = c) == null ? void 0 : h.name) != null ? p : process.env.NODE_ENV !== "production" ? l.name || "Autorun@" + Yo() : "Autorun", L = !c.scheduler && !c.delay, B;
  if (L)
    B = new Jv(A, function() {
      this.track(te);
    }, c.onError, c.requiresObservable);
  else {
    var ie = pL(c), X = !1;
    B = new Jv(A, function() {
      X || (X = !0, ie(function() {
        X = !1, B.isDisposed_ || B.track(te);
      }));
    }, c.onError, c.requiresObservable);
  }
  function te() {
    l(B);
  }
  return (b = c) != null && (C = b.signal) != null && C.aborted || B.schedule_(), B.getDisposer_((_ = c) == null ? void 0 : _.signal);
}
var dL = function(c) {
  return c();
};
function pL(l) {
  return l.scheduler ? l.scheduler : l.delay ? function(c) {
    return setTimeout(c, l.delay);
  } : dL;
}
var vL = "onBO", hL = "onBUO";
function mL(l, c, p) {
  return z1(vL, l, c, p);
}
function U1(l, c, p) {
  return z1(hL, l, c, p);
}
function z1(l, c, p, h) {
  var b = typeof h == "function" ? js(c, p) : js(c), C = xr(h) ? h : p, _ = l + "L";
  return b[_] ? b[_].add(C) : b[_] = /* @__PURE__ */ new Set([C]), function() {
    var A = b[_];
    A && (A.delete(C), A.size === 0 && delete b[_]);
  };
}
var yL = "never", ng = "always", gL = "observed";
function _L(l) {
  l.isolateGlobalState === !0 && qA();
  var c = l.useProxies, p = l.enforceActions;
  if (c !== void 0 && (ne.useProxies = c === ng ? !0 : c === yL ? !1 : typeof Proxy < "u"), c === "ifavailable" && (ne.verifyProxies = !0), p !== void 0) {
    var h = p === ng ? ng : p === gL;
    ne.enforceActions = h, ne.allowStateChanges = !(h === !0 || h === ng);
  }
  ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries", "safeDescriptors"].forEach(function(b) {
    b in l && (ne[b] = !!l[b]);
  }), ne.allowStateReads = !ne.observableRequiresReaction, process.env.NODE_ENV !== "production" && ne.disableErrorBoundaries === !0 && console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled."), l.reactionScheduler && rL(l.reactionScheduler);
}
function j1(l, c, p, h) {
  process.env.NODE_ENV !== "production" && (arguments.length > 4 && Ne("'extendObservable' expected 2-4 arguments"), typeof l != "object" && Ne("'extendObservable' expects an object as first argument"), Ml(l) && Ne("'extendObservable' should not be used on maps, use map.merge instead"), Ni(c) || Ne("'extendObservable' only accepts plain objects as second argument"), (nh(c) || nh(p)) && Ne("Extending an object with another observable (object) is not supported"));
  var b = eA(c);
  return Ps(function() {
    var C = vh(l, h)[St];
    jd(b).forEach(function(_) {
      C.extend_(
        _,
        b[_],
        // must pass "undefined" for { key: undefined }
        p && _ in p ? p[_] : !0
      );
    });
  }), l;
}
function V1(l, c) {
  return P1(js(l, c));
}
function P1(l) {
  var c = {
    name: l.name_
  };
  return l.observing_ && l.observing_.length > 0 && (c.dependencies = bL(l.observing_).map(P1)), c;
}
function bL(l) {
  return Array.from(new Set(l));
}
var SL = 0;
function F1() {
  this.message = "FLOW_CANCELLED";
}
F1.prototype = /* @__PURE__ */ Object.create(Error.prototype);
var bw = /* @__PURE__ */ s1("flow"), EL = /* @__PURE__ */ s1("flow.bound", {
  bound: !0
}), th = /* @__PURE__ */ Object.assign(function(c, p) {
  if (Yc(p))
    return lh(c, p, bw);
  process.env.NODE_ENV !== "production" && arguments.length !== 1 && Ne("Flow expects single argument with generator function");
  var h = c, b = h.name || "<unnamed flow>", C = function() {
    var A = this, L = arguments, B = ++SL, ie = Ea(b + " - runid: " + B + " - init", h).apply(A, L), X, te = void 0, re = new Promise(function(De, $e) {
      var Ae = 0;
      X = $e;
      function It(ye) {
        te = void 0;
        var fe;
        try {
          fe = Ea(b + " - runid: " + B + " - yield " + Ae++, ie.next).call(ie, ye);
        } catch (de) {
          return $e(de);
        }
        be(fe);
      }
      function xt(ye) {
        te = void 0;
        var fe;
        try {
          fe = Ea(b + " - runid: " + B + " - yield " + Ae++, ie.throw).call(ie, ye);
        } catch (de) {
          return $e(de);
        }
        be(fe);
      }
      function be(ye) {
        if (xr(ye == null ? void 0 : ye.then)) {
          ye.then(be, $e);
          return;
        }
        return ye.done ? De(ye.value) : (te = Promise.resolve(ye.value), te.then(It, xt));
      }
      It(void 0);
    });
    return re.cancel = Ea(b + " - runid: " + B + " - cancel", function() {
      try {
        te && Sw(te);
        var De = ie.return(void 0), $e = Promise.resolve(De.value);
        $e.then(Md, Md), Sw($e), X(new F1());
      } catch (Ae) {
        X(Ae);
      }
    }), re;
  };
  return C.isMobXFlow = !0, C;
}, bw);
th.bound = /* @__PURE__ */ zu(EL);
function Sw(l) {
  xr(l.cancel) && l.cancel();
}
function mg(l) {
  return (l == null ? void 0 : l.isMobXFlow) === !0;
}
function CL(l, c) {
  return l ? c !== void 0 ? process.env.NODE_ENV !== "production" && (Ml(l) || ph(l)) ? Ne("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.") : Gc(l) ? l[St].values_.has(c) : !1 : Gc(l) || !!l[St] || CE(l) || hg(l) || Og(l) : !1;
}
function nh(l) {
  return process.env.NODE_ENV !== "production" && arguments.length !== 1 && Ne("isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property"), CL(l);
}
function RL() {
  if (process.env.NODE_ENV !== "production") {
    for (var l = !1, c = arguments.length, p = new Array(c), h = 0; h < c; h++)
      p[h] = arguments[h];
    typeof p[p.length - 1] == "boolean" && (l = p.pop());
    var b = wL(p);
    if (!b)
      return Ne("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    b.isTracing_ === oo.NONE && console.log("[mobx.trace] '" + b.name_ + "' tracing enabled"), b.isTracing_ = l ? oo.BREAK : oo.LOG;
  }
}
function wL(l) {
  switch (l.length) {
    case 0:
      return ne.trackingDerivation;
    case 1:
      return js(l[0]);
    case 2:
      return js(l[0], l[1]);
  }
}
function kl(l, c) {
  c === void 0 && (c = void 0), ro();
  try {
    return l.apply(c);
  } finally {
    ao();
  }
}
function Ic(l) {
  return l[St];
}
var TL = {
  has: function(c, p) {
    return process.env.NODE_ENV !== "production" && ne.trackingDerivation && Qv("detect new properties using the 'in' operator. Use 'has' from 'mobx' instead."), Ic(c).has_(p);
  },
  get: function(c, p) {
    return Ic(c).get_(p);
  },
  set: function(c, p, h) {
    var b;
    return Yc(p) ? (process.env.NODE_ENV !== "production" && !Ic(c).values_.has(p) && Qv("add a new observable property through direct assignment. Use 'set' from 'mobx' instead."), (b = Ic(c).set_(p, h, !0)) != null ? b : !0) : !1;
  },
  deleteProperty: function(c, p) {
    var h;
    return process.env.NODE_ENV !== "production" && Qv("delete properties from an observable object. Use 'remove' from 'mobx' instead."), Yc(p) ? (h = Ic(c).delete_(p, !0)) != null ? h : !0 : !1;
  },
  defineProperty: function(c, p, h) {
    var b;
    return process.env.NODE_ENV !== "production" && Qv("define property on an observable object. Use 'defineProperty' from 'mobx' instead."), (b = Ic(c).defineProperty_(p, h)) != null ? b : !0;
  },
  ownKeys: function(c) {
    return process.env.NODE_ENV !== "production" && ne.trackingDerivation && Qv("iterate keys to detect added / removed properties. Use 'keys' from 'mobx' instead."), Ic(c).ownKeys_();
  },
  preventExtensions: function(c) {
    Ne(13);
  }
};
function OL(l, c) {
  var p, h;
  return t1(), l = vh(l, c), (h = (p = l[St]).proxy_) != null ? h : p.proxy_ = new Proxy(l, TL);
}
function to(l) {
  return l.interceptors_ !== void 0 && l.interceptors_.length > 0;
}
function fh(l, c) {
  var p = l.interceptors_ || (l.interceptors_ = []);
  return p.push(c), SE(function() {
    var h = p.indexOf(c);
    h !== -1 && p.splice(h, 1);
  });
}
function no(l, c) {
  var p = Kc();
  try {
    for (var h = [].concat(l.interceptors_ || []), b = 0, C = h.length; b < C && (c = h[b](c), c && !c.type && Ne(14), !!c); b++)
      ;
    return c;
  } finally {
    Al(p);
  }
}
function Io(l) {
  return l.changeListeners_ !== void 0 && l.changeListeners_.length > 0;
}
function dh(l, c) {
  var p = l.changeListeners_ || (l.changeListeners_ = []);
  return p.push(c), SE(function() {
    var h = p.indexOf(c);
    h !== -1 && p.splice(h, 1);
  });
}
function $o(l, c) {
  var p = Kc(), h = l.changeListeners_;
  if (h) {
    h = h.slice();
    for (var b = 0, C = h.length; b < C; b++)
      h[b](c);
    Al(p);
  }
}
function xL(l, c, p) {
  return Ps(function() {
    var h, b = vh(l, p)[St];
    process.env.NODE_ENV !== "production" && c && l[Ba] && Ne("makeObservable second arg must be nullish when using decorators. Mixing @decorator syntax with annotations is not supported."), (h = c) != null || (c = iA(l)), jd(c).forEach(function(C) {
      return b.make_(C, c[C]);
    });
  }), l;
}
var eE = /* @__PURE__ */ Symbol("mobx-keys");
function DL(l, c, p) {
  return process.env.NODE_ENV !== "production" && (!Ni(l) && !Ni(Object.getPrototypeOf(l)) && Ne("'makeAutoObservable' can only be used for classes that don't have a superclass"), Gc(l) && Ne("makeAutoObservable can only be used on objects not already made observable")), Ni(l) ? j1(l, l, c, p) : (Ps(function() {
    var h = vh(l, p)[St];
    if (!l[eE]) {
      var b = Object.getPrototypeOf(l), C = new Set([].concat(jd(l), jd(b)));
      C.delete("constructor"), C.delete(St), oh(b, eE, C);
    }
    l[eE].forEach(function(_) {
      return h.make_(
        _,
        // must pass "undefined" for { key: undefined }
        c && _ in c ? c[_] : !0
      );
    });
  }), l);
}
var Ew = "splice", Bo = "update", NL = 1e4, kL = {
  get: function(c, p) {
    var h = c[St];
    return p === St ? h : p === "length" ? h.getArrayLength_() : typeof p == "string" && !isNaN(p) ? h.get_(parseInt(p)) : io(yg, p) ? yg[p] : c[p];
  },
  set: function(c, p, h) {
    var b = c[St];
    return p === "length" && b.setArrayLength_(h), typeof p == "symbol" || isNaN(p) ? c[p] = h : b.set_(parseInt(p), h), !0;
  },
  preventExtensions: function() {
    Ne(15);
  }
}, OE = /* @__PURE__ */ function() {
  function l(p, h, b, C) {
    p === void 0 && (p = process.env.NODE_ENV !== "production" ? "ObservableArray@" + Yo() : "ObservableArray"), this.owned_ = void 0, this.legacyMode_ = void 0, this.atom_ = void 0, this.values_ = [], this.interceptors_ = void 0, this.changeListeners_ = void 0, this.enhancer_ = void 0, this.dehancer = void 0, this.proxy_ = void 0, this.lastKnownLength_ = 0, this.owned_ = b, this.legacyMode_ = C, this.atom_ = new sh(p), this.enhancer_ = function(_, A) {
      return h(_, A, process.env.NODE_ENV !== "production" ? p + "[..]" : "ObservableArray[..]");
    };
  }
  var c = l.prototype;
  return c.dehanceValue_ = function(h) {
    return this.dehancer !== void 0 ? this.dehancer(h) : h;
  }, c.dehanceValues_ = function(h) {
    return this.dehancer !== void 0 && h.length > 0 ? h.map(this.dehancer) : h;
  }, c.intercept_ = function(h) {
    return fh(this, h);
  }, c.observe_ = function(h, b) {
    return b === void 0 && (b = !1), b && h({
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: "splice",
      index: 0,
      added: this.values_.slice(),
      addedCount: this.values_.length,
      removed: [],
      removedCount: 0
    }), dh(this, h);
  }, c.getArrayLength_ = function() {
    return this.atom_.reportObserved(), this.values_.length;
  }, c.setArrayLength_ = function(h) {
    (typeof h != "number" || isNaN(h) || h < 0) && Ne("Out of range: " + h);
    var b = this.values_.length;
    if (h !== b)
      if (h > b) {
        for (var C = new Array(h - b), _ = 0; _ < h - b; _++)
          C[_] = void 0;
        this.spliceWithArray_(b, 0, C);
      } else
        this.spliceWithArray_(h, b - h);
  }, c.updateArrayLength_ = function(h, b) {
    h !== this.lastKnownLength_ && Ne(16), this.lastKnownLength_ += b, this.legacyMode_ && b > 0 && X1(h + b + 1);
  }, c.spliceWithArray_ = function(h, b, C) {
    var _ = this;
    Mu(this.atom_);
    var A = this.values_.length;
    if (h === void 0 ? h = 0 : h > A ? h = A : h < 0 && (h = Math.max(0, A + h)), arguments.length === 1 ? b = A - h : b == null ? b = 0 : b = Math.max(0, Math.min(b, A - h)), C === void 0 && (C = cg), to(this)) {
      var L = no(this, {
        object: this.proxy_,
        type: Ew,
        index: h,
        removedCount: b,
        added: C
      });
      if (!L)
        return cg;
      b = L.removedCount, C = L.added;
    }
    if (C = C.length === 0 ? C : C.map(function(X) {
      return _.enhancer_(X, void 0);
    }), this.legacyMode_ || process.env.NODE_ENV !== "production") {
      var B = C.length - b;
      this.updateArrayLength_(A, B);
    }
    var ie = this.spliceItemsIntoValues_(h, b, C);
    return (b !== 0 || C.length !== 0) && this.notifyArraySplice_(h, C, ie), this.dehanceValues_(ie);
  }, c.spliceItemsIntoValues_ = function(h, b, C) {
    if (C.length < NL) {
      var _;
      return (_ = this.values_).splice.apply(_, [h, b].concat(C));
    } else {
      var A = this.values_.slice(h, h + b), L = this.values_.slice(h + b);
      this.values_.length += C.length - b;
      for (var B = 0; B < C.length; B++)
        this.values_[h + B] = C[B];
      for (var ie = 0; ie < L.length; ie++)
        this.values_[h + C.length + ie] = L[ie];
      return A;
    }
  }, c.notifyArrayChildUpdate_ = function(h, b, C) {
    var _ = !this.owned_ && ta(), A = Io(this), L = A || _ ? {
      observableKind: "array",
      object: this.proxy_,
      type: Bo,
      debugObjectName: this.atom_.name_,
      index: h,
      newValue: b,
      oldValue: C
    } : null;
    process.env.NODE_ENV !== "production" && _ && ki(L), this.atom_.reportChanged(), A && $o(this, L), process.env.NODE_ENV !== "production" && _ && Ai();
  }, c.notifyArraySplice_ = function(h, b, C) {
    var _ = !this.owned_ && ta(), A = Io(this), L = A || _ ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: Ew,
      index: h,
      removed: C,
      added: b,
      removedCount: C.length,
      addedCount: b.length
    } : null;
    process.env.NODE_ENV !== "production" && _ && ki(L), this.atom_.reportChanged(), A && $o(this, L), process.env.NODE_ENV !== "production" && _ && Ai();
  }, c.get_ = function(h) {
    if (this.legacyMode_ && h >= this.values_.length) {
      console.warn(process.env.NODE_ENV !== "production" ? "[mobx.array] Attempt to read an array index (" + h + ") that is out of bounds (" + this.values_.length + "). Please check length first. Out of bound indices will not be tracked by MobX" : "[mobx] Out of bounds read: " + h);
      return;
    }
    return this.atom_.reportObserved(), this.dehanceValue_(this.values_[h]);
  }, c.set_ = function(h, b) {
    var C = this.values_;
    if (this.legacyMode_ && h > C.length && Ne(17, h, C.length), h < C.length) {
      Mu(this.atom_);
      var _ = C[h];
      if (to(this)) {
        var A = no(this, {
          type: Bo,
          object: this.proxy_,
          index: h,
          newValue: b
        });
        if (!A)
          return;
        b = A.newValue;
      }
      b = this.enhancer_(b, _);
      var L = b !== _;
      L && (C[h] = b, this.notifyArrayChildUpdate_(h, b, _));
    } else {
      for (var B = new Array(h + 1 - C.length), ie = 0; ie < B.length - 1; ie++)
        B[ie] = void 0;
      B[B.length - 1] = b, this.spliceWithArray_(C.length, 0, B);
    }
  }, l;
}();
function AL(l, c, p, h) {
  return p === void 0 && (p = process.env.NODE_ENV !== "production" ? "ObservableArray@" + Yo() : "ObservableArray"), h === void 0 && (h = !1), t1(), Ps(function() {
    var b = new OE(p, c, h, !1);
    r1(b.values_, St, b);
    var C = new Proxy(b.values_, kL);
    return b.proxy_ = C, l && l.length && b.spliceWithArray_(0, 0, l), C;
  });
}
var yg = {
  clear: function() {
    return this.splice(0);
  },
  replace: function(c) {
    var p = this[St];
    return p.spliceWithArray_(0, p.values_.length, c);
  },
  // Used by JSON.stringify
  toJSON: function() {
    return this.slice();
  },
  /*
   * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
   * since these functions alter the inner structure of the array, the have side effects.
   * Because the have side effects, they should not be used in computed function,
   * and for that reason the do not call dependencyState.notifyObserved
   */
  splice: function(c, p) {
    for (var h = arguments.length, b = new Array(h > 2 ? h - 2 : 0), C = 2; C < h; C++)
      b[C - 2] = arguments[C];
    var _ = this[St];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return _.spliceWithArray_(c);
      case 2:
        return _.spliceWithArray_(c, p);
    }
    return _.spliceWithArray_(c, p, b);
  },
  spliceWithArray: function(c, p, h) {
    return this[St].spliceWithArray_(c, p, h);
  },
  push: function() {
    for (var c = this[St], p = arguments.length, h = new Array(p), b = 0; b < p; b++)
      h[b] = arguments[b];
    return c.spliceWithArray_(c.values_.length, 0, h), c.values_.length;
  },
  pop: function() {
    return this.splice(Math.max(this[St].values_.length - 1, 0), 1)[0];
  },
  shift: function() {
    return this.splice(0, 1)[0];
  },
  unshift: function() {
    for (var c = this[St], p = arguments.length, h = new Array(p), b = 0; b < p; b++)
      h[b] = arguments[b];
    return c.spliceWithArray_(0, 0, h), c.values_.length;
  },
  reverse: function() {
    return ne.trackingDerivation && Ne(37, "reverse"), this.replace(this.slice().reverse()), this;
  },
  sort: function() {
    ne.trackingDerivation && Ne(37, "sort");
    var c = this.slice();
    return c.sort.apply(c, arguments), this.replace(c), this;
  },
  remove: function(c) {
    var p = this[St], h = p.dehanceValues_(p.values_).indexOf(c);
    return h > -1 ? (this.splice(h, 1), !0) : !1;
  }
};
Dr("concat", Ll);
Dr("flat", Ll);
Dr("includes", Ll);
Dr("indexOf", Ll);
Dr("join", Ll);
Dr("lastIndexOf", Ll);
Dr("slice", Ll);
Dr("toString", Ll);
Dr("toLocaleString", Ll);
Dr("every", Vs);
Dr("filter", Vs);
Dr("find", Vs);
Dr("findIndex", Vs);
Dr("flatMap", Vs);
Dr("forEach", Vs);
Dr("map", Vs);
Dr("some", Vs);
Dr("reduce", H1);
Dr("reduceRight", H1);
function Dr(l, c) {
  typeof Array.prototype[l] == "function" && (yg[l] = c(l));
}
function Ll(l) {
  return function() {
    var c = this[St];
    c.atom_.reportObserved();
    var p = c.dehanceValues_(c.values_);
    return p[l].apply(p, arguments);
  };
}
function Vs(l) {
  return function(c, p) {
    var h = this, b = this[St];
    b.atom_.reportObserved();
    var C = b.dehanceValues_(b.values_);
    return C[l](function(_, A) {
      return c.call(p, _, A, h);
    });
  };
}
function H1(l) {
  return function() {
    var c = this, p = this[St];
    p.atom_.reportObserved();
    var h = p.dehanceValues_(p.values_), b = arguments[0];
    return arguments[0] = function(C, _, A) {
      return b(C, _, A, c);
    }, h[l].apply(h, arguments);
  };
}
var LL = /* @__PURE__ */ Qc("ObservableArrayAdministration", OE);
function ph(l) {
  return Sg(l) && LL(l[St]);
}
var B1, I1, ML = {}, Us = "add", gg = "delete";
B1 = Symbol.iterator;
I1 = Symbol.toStringTag;
var $1 = /* @__PURE__ */ function() {
  function l(p, h, b) {
    var C = this;
    h === void 0 && (h = Vd), b === void 0 && (b = process.env.NODE_ENV !== "production" ? "ObservableMap@" + Yo() : "ObservableMap"), this.enhancer_ = void 0, this.name_ = void 0, this[St] = ML, this.data_ = void 0, this.hasMap_ = void 0, this.keysAtom_ = void 0, this.interceptors_ = void 0, this.changeListeners_ = void 0, this.dehancer = void 0, this.enhancer_ = h, this.name_ = b, xr(Map) || Ne(18), Ps(function() {
      C.keysAtom_ = u1(process.env.NODE_ENV !== "production" ? C.name_ + ".keys()" : "ObservableMap.keys()"), C.data_ = /* @__PURE__ */ new Map(), C.hasMap_ = /* @__PURE__ */ new Map(), p && C.merge(p);
    });
  }
  var c = l.prototype;
  return c.has_ = function(h) {
    return this.data_.has(h);
  }, c.has = function(h) {
    var b = this;
    if (!ne.trackingDerivation)
      return this.has_(h);
    var C = this.hasMap_.get(h);
    if (!C) {
      var _ = C = new zd(this.has_(h), Eg, process.env.NODE_ENV !== "production" ? this.name_ + "." + sE(h) + "?" : "ObservableMap.key?", !1);
      this.hasMap_.set(h, _), U1(_, function() {
        return b.hasMap_.delete(h);
      });
    }
    return C.get();
  }, c.set = function(h, b) {
    var C = this.has_(h);
    if (to(this)) {
      var _ = no(this, {
        type: C ? Bo : Us,
        object: this,
        newValue: b,
        name: h
      });
      if (!_)
        return this;
      b = _.newValue;
    }
    return C ? this.updateValue_(h, b) : this.addValue_(h, b), this;
  }, c.delete = function(h) {
    var b = this;
    if (Mu(this.keysAtom_), to(this)) {
      var C = no(this, {
        type: gg,
        object: this,
        name: h
      });
      if (!C)
        return !1;
    }
    if (this.has_(h)) {
      var _ = ta(), A = Io(this), L = A || _ ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: gg,
        object: this,
        oldValue: this.data_.get(h).value_,
        name: h
      } : null;
      return process.env.NODE_ENV !== "production" && _ && ki(L), kl(function() {
        var B;
        b.keysAtom_.reportChanged(), (B = b.hasMap_.get(h)) == null || B.setNewValue_(!1);
        var ie = b.data_.get(h);
        ie.setNewValue_(void 0), b.data_.delete(h);
      }), A && $o(this, L), process.env.NODE_ENV !== "production" && _ && Ai(), !0;
    }
    return !1;
  }, c.updateValue_ = function(h, b) {
    var C = this.data_.get(h);
    if (b = C.prepareNewValue_(b), b !== ne.UNCHANGED) {
      var _ = ta(), A = Io(this), L = A || _ ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: Bo,
        object: this,
        oldValue: C.value_,
        name: h,
        newValue: b
      } : null;
      process.env.NODE_ENV !== "production" && _ && ki(L), C.setNewValue_(b), A && $o(this, L), process.env.NODE_ENV !== "production" && _ && Ai();
    }
  }, c.addValue_ = function(h, b) {
    var C = this;
    Mu(this.keysAtom_), kl(function() {
      var B, ie = new zd(b, C.enhancer_, process.env.NODE_ENV !== "production" ? C.name_ + "." + sE(h) : "ObservableMap.key", !1);
      C.data_.set(h, ie), b = ie.value_, (B = C.hasMap_.get(h)) == null || B.setNewValue_(!0), C.keysAtom_.reportChanged();
    });
    var _ = ta(), A = Io(this), L = A || _ ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: Us,
      object: this,
      name: h,
      newValue: b
    } : null;
    process.env.NODE_ENV !== "production" && _ && ki(L), A && $o(this, L), process.env.NODE_ENV !== "production" && _ && Ai();
  }, c.get = function(h) {
    return this.has(h) ? this.dehanceValue_(this.data_.get(h).get()) : this.dehanceValue_(void 0);
  }, c.dehanceValue_ = function(h) {
    return this.dehancer !== void 0 ? this.dehancer(h) : h;
  }, c.keys = function() {
    return this.keysAtom_.reportObserved(), this.data_.keys();
  }, c.values = function() {
    var h = this, b = this.keys();
    return rh({
      next: function() {
        var _ = b.next(), A = _.done, L = _.value;
        return {
          done: A,
          value: A ? void 0 : h.get(L)
        };
      }
    });
  }, c.entries = function() {
    var h = this, b = this.keys();
    return rh({
      next: function() {
        var _ = b.next(), A = _.done, L = _.value;
        return {
          done: A,
          value: A ? void 0 : [L, h.get(L)]
        };
      }
    });
  }, c[B1] = function() {
    return this.entries();
  }, c.forEach = function(h, b) {
    for (var C = Ud(this), _; !(_ = C()).done; ) {
      var A = _.value, L = A[0], B = A[1];
      h.call(b, B, L, this);
    }
  }, c.merge = function(h) {
    var b = this;
    return Ml(h) && (h = new Map(h)), kl(function() {
      Ni(h) ? Jk(h).forEach(function(C) {
        return b.set(C, h[C]);
      }) : Array.isArray(h) ? h.forEach(function(C) {
        var _ = C[0], A = C[1];
        return b.set(_, A);
      }) : Hd(h) ? (h.constructor !== Map && Ne(19, h), h.forEach(function(C, _) {
        return b.set(_, C);
      })) : h != null && Ne(20, h);
    }), this;
  }, c.clear = function() {
    var h = this;
    kl(function() {
      S1(function() {
        for (var b = Ud(h.keys()), C; !(C = b()).done; ) {
          var _ = C.value;
          h.delete(_);
        }
      });
    });
  }, c.replace = function(h) {
    var b = this;
    return kl(function() {
      for (var C = UL(h), _ = /* @__PURE__ */ new Map(), A = !1, L = Ud(b.data_.keys()), B; !(B = L()).done; ) {
        var ie = B.value;
        if (!C.has(ie)) {
          var X = b.delete(ie);
          if (X)
            A = !0;
          else {
            var te = b.data_.get(ie);
            _.set(ie, te);
          }
        }
      }
      for (var re = Ud(C.entries()), De; !(De = re()).done; ) {
        var $e = De.value, Ae = $e[0], It = $e[1], xt = b.data_.has(Ae);
        if (b.set(Ae, It), b.data_.has(Ae)) {
          var be = b.data_.get(Ae);
          _.set(Ae, be), xt || (A = !0);
        }
      }
      if (!A)
        if (b.data_.size !== _.size)
          b.keysAtom_.reportChanged();
        else
          for (var ye = b.data_.keys(), fe = _.keys(), de = ye.next(), Ce = fe.next(); !de.done; ) {
            if (de.value !== Ce.value) {
              b.keysAtom_.reportChanged();
              break;
            }
            de = ye.next(), Ce = fe.next();
          }
      b.data_ = _;
    }), this;
  }, c.toString = function() {
    return "[object ObservableMap]";
  }, c.toJSON = function() {
    return Array.from(this);
  }, c.observe_ = function(h, b) {
    return process.env.NODE_ENV !== "production" && b === !0 && Ne("`observe` doesn't support fireImmediately=true in combination with maps."), dh(this, h);
  }, c.intercept_ = function(h) {
    return fh(this, h);
  }, EE(l, [{
    key: "size",
    get: function() {
      return this.keysAtom_.reportObserved(), this.data_.size;
    }
  }, {
    key: I1,
    get: function() {
      return "Map";
    }
  }]), l;
}(), Ml = /* @__PURE__ */ Qc("ObservableMap", $1);
function UL(l) {
  if (Hd(l) || Ml(l))
    return l;
  if (Array.isArray(l))
    return new Map(l);
  if (Ni(l)) {
    var c = /* @__PURE__ */ new Map();
    for (var p in l)
      c.set(p, l[p]);
    return c;
  } else
    return Ne(21, l);
}
var Y1, W1, zL = {};
Y1 = Symbol.iterator;
W1 = Symbol.toStringTag;
var G1 = /* @__PURE__ */ function() {
  function l(p, h, b) {
    var C = this;
    h === void 0 && (h = Vd), b === void 0 && (b = process.env.NODE_ENV !== "production" ? "ObservableSet@" + Yo() : "ObservableSet"), this.name_ = void 0, this[St] = zL, this.data_ = /* @__PURE__ */ new Set(), this.atom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.dehancer = void 0, this.enhancer_ = void 0, this.name_ = b, xr(Set) || Ne(22), this.enhancer_ = function(_, A) {
      return h(_, A, b);
    }, Ps(function() {
      C.atom_ = u1(C.name_), p && C.replace(p);
    });
  }
  var c = l.prototype;
  return c.dehanceValue_ = function(h) {
    return this.dehancer !== void 0 ? this.dehancer(h) : h;
  }, c.clear = function() {
    var h = this;
    kl(function() {
      S1(function() {
        for (var b = Ud(h.data_.values()), C; !(C = b()).done; ) {
          var _ = C.value;
          h.delete(_);
        }
      });
    });
  }, c.forEach = function(h, b) {
    for (var C = Ud(this), _; !(_ = C()).done; ) {
      var A = _.value;
      h.call(b, A, A, this);
    }
  }, c.add = function(h) {
    var b = this;
    if (Mu(this.atom_), to(this)) {
      var C = no(this, {
        type: Us,
        object: this,
        newValue: h
      });
      if (!C)
        return this;
    }
    if (!this.has(h)) {
      kl(function() {
        b.data_.add(b.enhancer_(h, void 0)), b.atom_.reportChanged();
      });
      var _ = process.env.NODE_ENV !== "production" && ta(), A = Io(this), L = A || _ ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: Us,
        object: this,
        newValue: h
      } : null;
      _ && process.env.NODE_ENV !== "production" && ki(L), A && $o(this, L), _ && process.env.NODE_ENV !== "production" && Ai();
    }
    return this;
  }, c.delete = function(h) {
    var b = this;
    if (to(this)) {
      var C = no(this, {
        type: gg,
        object: this,
        oldValue: h
      });
      if (!C)
        return !1;
    }
    if (this.has(h)) {
      var _ = process.env.NODE_ENV !== "production" && ta(), A = Io(this), L = A || _ ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: gg,
        object: this,
        oldValue: h
      } : null;
      return _ && process.env.NODE_ENV !== "production" && ki(L), kl(function() {
        b.atom_.reportChanged(), b.data_.delete(h);
      }), A && $o(this, L), _ && process.env.NODE_ENV !== "production" && Ai(), !0;
    }
    return !1;
  }, c.has = function(h) {
    return this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(h));
  }, c.entries = function() {
    var h = 0, b = Array.from(this.keys()), C = Array.from(this.values());
    return rh({
      next: function() {
        var A = h;
        return h += 1, A < C.length ? {
          value: [b[A], C[A]],
          done: !1
        } : {
          done: !0
        };
      }
    });
  }, c.keys = function() {
    return this.values();
  }, c.values = function() {
    this.atom_.reportObserved();
    var h = this, b = 0, C = Array.from(this.data_.values());
    return rh({
      next: function() {
        return b < C.length ? {
          value: h.dehanceValue_(C[b++]),
          done: !1
        } : {
          done: !0
        };
      }
    });
  }, c.replace = function(h) {
    var b = this;
    return Bd(h) && (h = new Set(h)), kl(function() {
      Array.isArray(h) ? (b.clear(), h.forEach(function(C) {
        return b.add(C);
      })) : uh(h) ? (b.clear(), h.forEach(function(C) {
        return b.add(C);
      })) : h != null && Ne("Cannot initialize set from " + h);
    }), this;
  }, c.observe_ = function(h, b) {
    return process.env.NODE_ENV !== "production" && b === !0 && Ne("`observe` doesn't support fireImmediately=true in combination with sets."), dh(this, h);
  }, c.intercept_ = function(h) {
    return fh(this, h);
  }, c.toJSON = function() {
    return Array.from(this);
  }, c.toString = function() {
    return "[object ObservableSet]";
  }, c[Y1] = function() {
    return this.values();
  }, EE(l, [{
    key: "size",
    get: function() {
      return this.atom_.reportObserved(), this.data_.size;
    }
  }, {
    key: W1,
    get: function() {
      return "Set";
    }
  }]), l;
}(), Bd = /* @__PURE__ */ Qc("ObservableSet", G1), Cw = /* @__PURE__ */ Object.create(null), Rw = "remove", vE = /* @__PURE__ */ function() {
  function l(p, h, b, C) {
    h === void 0 && (h = /* @__PURE__ */ new Map()), C === void 0 && (C = TA), this.target_ = void 0, this.values_ = void 0, this.name_ = void 0, this.defaultAnnotation_ = void 0, this.keysAtom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.proxy_ = void 0, this.isPlainObject_ = void 0, this.appliedAnnotations_ = void 0, this.pendingKeys_ = void 0, this.target_ = p, this.values_ = h, this.name_ = b, this.defaultAnnotation_ = C, this.keysAtom_ = new sh(process.env.NODE_ENV !== "production" ? this.name_ + ".keys" : "ObservableObject.keys"), this.isPlainObject_ = Ni(this.target_), process.env.NODE_ENV !== "production" && !q1(this.defaultAnnotation_) && Ne("defaultAnnotation must be valid annotation"), process.env.NODE_ENV !== "production" && (this.appliedAnnotations_ = {});
  }
  var c = l.prototype;
  return c.getObservablePropValue_ = function(h) {
    return this.values_.get(h).get();
  }, c.setObservablePropValue_ = function(h, b) {
    var C = this.values_.get(h);
    if (C instanceof Fd)
      return C.set(b), !0;
    if (to(this)) {
      var _ = no(this, {
        type: Bo,
        object: this.proxy_ || this.target_,
        name: h,
        newValue: b
      });
      if (!_)
        return null;
      b = _.newValue;
    }
    if (b = C.prepareNewValue_(b), b !== ne.UNCHANGED) {
      var A = Io(this), L = process.env.NODE_ENV !== "production" && ta(), B = A || L ? {
        type: Bo,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        oldValue: C.value_,
        name: h,
        newValue: b
      } : null;
      process.env.NODE_ENV !== "production" && L && ki(B), C.setNewValue_(b), A && $o(this, B), process.env.NODE_ENV !== "production" && L && Ai();
    }
    return !0;
  }, c.get_ = function(h) {
    return ne.trackingDerivation && !io(this.target_, h) && this.has_(h), this.target_[h];
  }, c.set_ = function(h, b, C) {
    return C === void 0 && (C = !1), io(this.target_, h) ? this.values_.has(h) ? this.setObservablePropValue_(h, b) : C ? Reflect.set(this.target_, h, b) : (this.target_[h] = b, !0) : this.extend_(h, {
      value: b,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }, this.defaultAnnotation_, C);
  }, c.has_ = function(h) {
    if (!ne.trackingDerivation)
      return h in this.target_;
    this.pendingKeys_ || (this.pendingKeys_ = /* @__PURE__ */ new Map());
    var b = this.pendingKeys_.get(h);
    return b || (b = new zd(h in this.target_, Eg, process.env.NODE_ENV !== "production" ? this.name_ + "." + sE(h) + "?" : "ObservableObject.key?", !1), this.pendingKeys_.set(h, b)), b.get();
  }, c.make_ = function(h, b) {
    if (b === !0 && (b = this.defaultAnnotation_), b !== !1) {
      if (Ow(this, b, h), !(h in this.target_)) {
        var C;
        if ((C = this.target_[Ba]) != null && C[h])
          return;
        Ne(1, b.annotationType_, this.name_ + "." + h.toString());
      }
      for (var _ = this.target_; _ && _ !== bg; ) {
        var A = sg(_, h);
        if (A) {
          var L = b.make_(this, h, A, _);
          if (L === 0)
            return;
          if (L === 1)
            break;
        }
        _ = Object.getPrototypeOf(_);
      }
      Tw(this, b, h);
    }
  }, c.extend_ = function(h, b, C, _) {
    if (_ === void 0 && (_ = !1), C === !0 && (C = this.defaultAnnotation_), C === !1)
      return this.defineProperty_(h, b, _);
    Ow(this, C, h);
    var A = C.extend_(this, h, b, _);
    return A && Tw(this, C, h), A;
  }, c.defineProperty_ = function(h, b, C) {
    C === void 0 && (C = !1), Mu(this.keysAtom_);
    try {
      ro();
      var _ = this.delete_(h);
      if (!_)
        return _;
      if (to(this)) {
        var A = no(this, {
          object: this.proxy_ || this.target_,
          name: h,
          type: Us,
          newValue: b.value
        });
        if (!A)
          return null;
        var L = A.newValue;
        b.value !== L && (b = zs({}, b, {
          value: L
        }));
      }
      if (C) {
        if (!Reflect.defineProperty(this.target_, h, b))
          return !1;
      } else
        Uu(this.target_, h, b);
      this.notifyPropertyAddition_(h, b.value);
    } finally {
      ao();
    }
    return !0;
  }, c.defineObservableProperty_ = function(h, b, C, _) {
    _ === void 0 && (_ = !1), Mu(this.keysAtom_);
    try {
      ro();
      var A = this.delete_(h);
      if (!A)
        return A;
      if (to(this)) {
        var L = no(this, {
          object: this.proxy_ || this.target_,
          name: h,
          type: Us,
          newValue: b
        });
        if (!L)
          return null;
        b = L.newValue;
      }
      var B = ww(h), ie = {
        configurable: ne.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !0,
        get: B.get,
        set: B.set
      };
      if (_) {
        if (!Reflect.defineProperty(this.target_, h, ie))
          return !1;
      } else
        Uu(this.target_, h, ie);
      var X = new zd(b, C, process.env.NODE_ENV !== "production" ? this.name_ + "." + h.toString() : "ObservableObject.key", !1);
      this.values_.set(h, X), this.notifyPropertyAddition_(h, X.value_);
    } finally {
      ao();
    }
    return !0;
  }, c.defineComputedProperty_ = function(h, b, C) {
    C === void 0 && (C = !1), Mu(this.keysAtom_);
    try {
      ro();
      var _ = this.delete_(h);
      if (!_)
        return _;
      if (to(this)) {
        var A = no(this, {
          object: this.proxy_ || this.target_,
          name: h,
          type: Us,
          newValue: void 0
        });
        if (!A)
          return null;
      }
      b.name || (b.name = process.env.NODE_ENV !== "production" ? this.name_ + "." + h.toString() : "ObservableObject.key"), b.context = this.proxy_ || this.target_;
      var L = ww(h), B = {
        configurable: ne.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !1,
        get: L.get,
        set: L.set
      };
      if (C) {
        if (!Reflect.defineProperty(this.target_, h, B))
          return !1;
      } else
        Uu(this.target_, h, B);
      this.values_.set(h, new Fd(b)), this.notifyPropertyAddition_(h, void 0);
    } finally {
      ao();
    }
    return !0;
  }, c.delete_ = function(h, b) {
    if (b === void 0 && (b = !1), Mu(this.keysAtom_), !io(this.target_, h))
      return !0;
    if (to(this)) {
      var C = no(this, {
        object: this.proxy_ || this.target_,
        name: h,
        type: Rw
      });
      if (!C)
        return null;
    }
    try {
      var _, A;
      ro();
      var L = Io(this), B = process.env.NODE_ENV !== "production" && ta(), ie = this.values_.get(h), X = void 0;
      if (!ie && (L || B)) {
        var te;
        X = (te = sg(this.target_, h)) == null ? void 0 : te.value;
      }
      if (b) {
        if (!Reflect.deleteProperty(this.target_, h))
          return !1;
      } else
        delete this.target_[h];
      if (process.env.NODE_ENV !== "production" && delete this.appliedAnnotations_[h], ie && (this.values_.delete(h), ie instanceof zd && (X = ie.value_), O1(ie)), this.keysAtom_.reportChanged(), (_ = this.pendingKeys_) == null || (A = _.get(h)) == null || A.set(h in this.target_), L || B) {
        var re = {
          type: Rw,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: X,
          name: h
        };
        process.env.NODE_ENV !== "production" && B && ki(re), L && $o(this, re), process.env.NODE_ENV !== "production" && B && Ai();
      }
    } finally {
      ao();
    }
    return !0;
  }, c.observe_ = function(h, b) {
    return process.env.NODE_ENV !== "production" && b === !0 && Ne("`observe` doesn't support the fire immediately property for observable objects."), dh(this, h);
  }, c.intercept_ = function(h) {
    return fh(this, h);
  }, c.notifyPropertyAddition_ = function(h, b) {
    var C, _, A = Io(this), L = process.env.NODE_ENV !== "production" && ta();
    if (A || L) {
      var B = A || L ? {
        type: Us,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        name: h,
        newValue: b
      } : null;
      process.env.NODE_ENV !== "production" && L && ki(B), A && $o(this, B), process.env.NODE_ENV !== "production" && L && Ai();
    }
    (C = this.pendingKeys_) == null || (_ = C.get(h)) == null || _.set(!0), this.keysAtom_.reportChanged();
  }, c.ownKeys_ = function() {
    return this.keysAtom_.reportObserved(), jd(this.target_);
  }, c.keys_ = function() {
    return this.keysAtom_.reportObserved(), Object.keys(this.target_);
  }, l;
}();
function vh(l, c) {
  var p;
  if (process.env.NODE_ENV !== "production" && c && Gc(l) && Ne("Options can't be provided for already observable objects."), io(l, St))
    return process.env.NODE_ENV !== "production" && !(DE(l) instanceof vE) && Ne("Cannot convert '" + _g(l) + `' into observable object:
The target is already observable of different type.
Extending builtins is not supported.`), l;
  process.env.NODE_ENV !== "production" && !Object.isExtensible(l) && Ne("Cannot make the designated object observable; it is not extensible");
  var h = (p = c == null ? void 0 : c.name) != null ? p : process.env.NODE_ENV !== "production" ? (Ni(l) ? "ObservableObject" : l.constructor.name) + "@" + Yo() : "ObservableObject", b = new vE(l, /* @__PURE__ */ new Map(), String(h), zA(c));
  return oh(l, St, b), l;
}
var jL = /* @__PURE__ */ Qc("ObservableObjectAdministration", vE);
function ww(l) {
  return Cw[l] || (Cw[l] = {
    get: function() {
      return this[St].getObservablePropValue_(l);
    },
    set: function(p) {
      return this[St].setObservablePropValue_(l, p);
    }
  });
}
function Gc(l) {
  return Sg(l) ? jL(l[St]) : !1;
}
function Tw(l, c, p) {
  var h;
  process.env.NODE_ENV !== "production" && (l.appliedAnnotations_[p] = c), (h = l.target_[Ba]) == null || delete h[p];
}
function Ow(l, c, p) {
  if (process.env.NODE_ENV !== "production" && !q1(c) && Ne("Cannot annotate '" + l.name_ + "." + p.toString() + "': Invalid annotation."), process.env.NODE_ENV !== "production" && !dg(c) && io(l.appliedAnnotations_, p)) {
    var h = l.name_ + "." + p.toString(), b = l.appliedAnnotations_[p].annotationType_, C = c.annotationType_;
    Ne("Cannot apply '" + C + "' to '" + h + "':" + (`
The field is already annotated with '` + b + "'.") + `
Re-annotating fields is not allowed.
Use 'override' annotation for methods overridden by subclass.`);
  }
}
var VL = /* @__PURE__ */ K1(0), PL = /* @__PURE__ */ function() {
  var l = !1, c = {};
  return Object.defineProperty(c, "0", {
    set: function() {
      l = !0;
    }
  }), Object.create(c)[0] = 1, l === !1;
}(), tE = 0, Q1 = function() {
};
function FL(l, c) {
  Object.setPrototypeOf ? Object.setPrototypeOf(l.prototype, c) : l.prototype.__proto__ !== void 0 ? l.prototype.__proto__ = c : l.prototype = c;
}
FL(Q1, Array.prototype);
var xE = /* @__PURE__ */ function(l, c, p) {
  o1(h, l);
  function h(C, _, A, L) {
    var B;
    return A === void 0 && (A = process.env.NODE_ENV !== "production" ? "ObservableArray@" + Yo() : "ObservableArray"), L === void 0 && (L = !1), B = l.call(this) || this, Ps(function() {
      var ie = new OE(A, _, L, !0);
      ie.proxy_ = ag(B), r1(ag(B), St, ie), C && C.length && B.spliceWithArray(0, 0, C), PL && Object.defineProperty(ag(B), "0", VL);
    }), B;
  }
  var b = h.prototype;
  return b.concat = function() {
    this[St].atom_.reportObserved();
    for (var _ = arguments.length, A = new Array(_), L = 0; L < _; L++)
      A[L] = arguments[L];
    return Array.prototype.concat.apply(
      this.slice(),
      //@ts-ignore
      A.map(function(B) {
        return ph(B) ? B.slice() : B;
      })
    );
  }, b[p] = function() {
    var C = this, _ = 0;
    return rh({
      next: function() {
        return _ < C.length ? {
          value: C[_++],
          done: !1
        } : {
          done: !0,
          value: void 0
        };
      }
    });
  }, EE(h, [{
    key: "length",
    get: function() {
      return this[St].getArrayLength_();
    },
    set: function(_) {
      this[St].setArrayLength_(_);
    }
  }, {
    key: c,
    get: function() {
      return "Array";
    }
  }]), h;
}(Q1, Symbol.toStringTag, Symbol.iterator);
Object.entries(yg).forEach(function(l) {
  var c = l[0], p = l[1];
  c !== "concat" && oh(xE.prototype, c, p);
});
function K1(l) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function() {
      return this[St].get_(l);
    },
    set: function(p) {
      this[St].set_(l, p);
    }
  };
}
function HL(l) {
  Uu(xE.prototype, "" + l, K1(l));
}
function X1(l) {
  if (l > tE) {
    for (var c = tE; c < l + 100; c++)
      HL(c);
    tE = l;
  }
}
X1(1e3);
function BL(l, c, p) {
  return new xE(l, c, p);
}
function js(l, c) {
  if (typeof l == "object" && l !== null) {
    if (ph(l))
      return c !== void 0 && Ne(23), l[St].atom_;
    if (Bd(l))
      return l.atom_;
    if (Ml(l)) {
      if (c === void 0)
        return l.keysAtom_;
      var p = l.data_.get(c) || l.hasMap_.get(c);
      return p || Ne(25, c, _g(l)), p;
    }
    if (Gc(l)) {
      if (!c)
        return Ne(26);
      var h = l[St].values_.get(c);
      return h || Ne(27, c, _g(l)), h;
    }
    if (CE(l) || Og(l) || hg(l))
      return l;
  } else if (xr(l) && hg(l[St]))
    return l[St];
  Ne(28);
}
function DE(l, c) {
  if (l || Ne(29), c !== void 0)
    return DE(js(l, c));
  if (CE(l) || Og(l) || hg(l) || Ml(l) || Bd(l))
    return l;
  if (l[St])
    return l[St];
  Ne(24, l);
}
function _g(l, c) {
  var p;
  if (c !== void 0)
    p = js(l, c);
  else {
    if (xg(l))
      return l.name;
    Gc(l) || Ml(l) || Bd(l) ? p = DE(l) : p = js(l);
  }
  return p.name_;
}
function Ps(l) {
  var c = Kc(), p = wg(!0);
  ro();
  try {
    return l();
  } finally {
    ao(), Tg(p), Al(c);
  }
}
var xw = bg.toString;
function NE(l, c, p) {
  return p === void 0 && (p = -1), hE(l, c, p);
}
function hE(l, c, p, h, b) {
  if (l === c)
    return l !== 0 || 1 / l === 1 / c;
  if (l == null || c == null)
    return !1;
  if (l !== l)
    return c !== c;
  var C = typeof l;
  if (C !== "function" && C !== "object" && typeof c != "object")
    return !1;
  var _ = xw.call(l);
  if (_ !== xw.call(c))
    return !1;
  switch (_) {
    case "[object RegExp]":
    case "[object String]":
      return "" + l == "" + c;
    case "[object Number]":
      return +l != +l ? +c != +c : +l == 0 ? 1 / +l === 1 / c : +l == +c;
    case "[object Date]":
    case "[object Boolean]":
      return +l == +c;
    case "[object Symbol]":
      return typeof Symbol < "u" && Symbol.valueOf.call(l) === Symbol.valueOf.call(c);
    case "[object Map]":
    case "[object Set]":
      p >= 0 && p++;
      break;
  }
  l = Dw(l), c = Dw(c);
  var A = _ === "[object Array]";
  if (!A) {
    if (typeof l != "object" || typeof c != "object")
      return !1;
    var L = l.constructor, B = c.constructor;
    if (L !== B && !(xr(L) && L instanceof L && xr(B) && B instanceof B) && "constructor" in l && "constructor" in c)
      return !1;
  }
  if (p === 0)
    return !1;
  p < 0 && (p = -1), h = h || [], b = b || [];
  for (var ie = h.length; ie--; )
    if (h[ie] === l)
      return b[ie] === c;
  if (h.push(l), b.push(c), A) {
    if (ie = l.length, ie !== c.length)
      return !1;
    for (; ie--; )
      if (!hE(l[ie], c[ie], p - 1, h, b))
        return !1;
  } else {
    var X = Object.keys(l), te;
    if (ie = X.length, Object.keys(c).length !== ie)
      return !1;
    for (; ie--; )
      if (te = X[ie], !(io(c, te) && hE(l[te], c[te], p - 1, h, b)))
        return !1;
  }
  return h.pop(), b.pop(), !0;
}
function Dw(l) {
  return ph(l) ? l.slice() : Hd(l) || Ml(l) || uh(l) || Bd(l) ? Array.from(l.entries()) : l;
}
function rh(l) {
  return l[Symbol.iterator] = IL, l;
}
function IL() {
  return this;
}
function q1(l) {
  return (
    // Can be function
    l instanceof Object && typeof l.annotationType_ == "string" && xr(l.make_) && xr(l.extend_)
  );
}
["Symbol", "Map", "Set"].forEach(function(l) {
  var c = bE();
  typeof c[l] > "u" && Ne("MobX requires global '" + l + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
  spy: iL,
  extras: {
    getDebugName: _g
  },
  $mobx: St
});
var mE = { exports: {} }, Ht = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nw;
function $L() {
  if (Nw)
    return Ht;
  Nw = 1;
  var l = Symbol.for("react.element"), c = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), _ = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), B = Symbol.for("react.memo"), ie = Symbol.for("react.lazy"), X = Symbol.iterator;
  function te(w) {
    return w === null || typeof w != "object" ? null : (w = X && w[X] || w["@@iterator"], typeof w == "function" ? w : null);
  }
  var re = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, De = Object.assign, $e = {};
  function Ae(w, j, ee) {
    this.props = w, this.context = j, this.refs = $e, this.updater = ee || re;
  }
  Ae.prototype.isReactComponent = {}, Ae.prototype.setState = function(w, j) {
    if (typeof w != "object" && typeof w != "function" && w != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, w, j, "setState");
  }, Ae.prototype.forceUpdate = function(w) {
    this.updater.enqueueForceUpdate(this, w, "forceUpdate");
  };
  function It() {
  }
  It.prototype = Ae.prototype;
  function xt(w, j, ee) {
    this.props = w, this.context = j, this.refs = $e, this.updater = ee || re;
  }
  var be = xt.prototype = new It();
  be.constructor = xt, De(be, Ae.prototype), be.isPureReactComponent = !0;
  var ye = Array.isArray, fe = Object.prototype.hasOwnProperty, de = { current: null }, Ce = { key: !0, ref: !0, __self: !0, __source: !0 };
  function mt(w, j, ee) {
    var Se, me = {}, Fe = null, He = null;
    if (j != null)
      for (Se in j.ref !== void 0 && (He = j.ref), j.key !== void 0 && (Fe = "" + j.key), j)
        fe.call(j, Se) && !Ce.hasOwnProperty(Se) && (me[Se] = j[Se]);
    var Ye = arguments.length - 2;
    if (Ye === 1)
      me.children = ee;
    else if (1 < Ye) {
      for (var Ve = Array(Ye), yt = 0; yt < Ye; yt++)
        Ve[yt] = arguments[yt + 2];
      me.children = Ve;
    }
    if (w && w.defaultProps)
      for (Se in Ye = w.defaultProps, Ye)
        me[Se] === void 0 && (me[Se] = Ye[Se]);
    return { $$typeof: l, type: w, key: Fe, ref: He, props: me, _owner: de.current };
  }
  function Et(w, j) {
    return { $$typeof: l, type: w.type, key: j, ref: w.ref, props: w.props, _owner: w._owner };
  }
  function Tt(w) {
    return typeof w == "object" && w !== null && w.$$typeof === l;
  }
  function Dt(w) {
    var j = { "=": "=0", ":": "=2" };
    return "$" + w.replace(/[=:]/g, function(ee) {
      return j[ee];
    });
  }
  var fn = /\/+/g;
  function ot(w, j) {
    return typeof w == "object" && w !== null && w.key != null ? Dt("" + w.key) : j.toString(36);
  }
  function ht(w, j, ee, Se, me) {
    var Fe = typeof w;
    (Fe === "undefined" || Fe === "boolean") && (w = null);
    var He = !1;
    if (w === null)
      He = !0;
    else
      switch (Fe) {
        case "string":
        case "number":
          He = !0;
          break;
        case "object":
          switch (w.$$typeof) {
            case l:
            case c:
              He = !0;
          }
      }
    if (He)
      return He = w, me = me(He), w = Se === "" ? "." + ot(He, 0) : Se, ye(me) ? (ee = "", w != null && (ee = w.replace(fn, "$&/") + "/"), ht(me, j, ee, "", function(yt) {
        return yt;
      })) : me != null && (Tt(me) && (me = Et(me, ee + (!me.key || He && He.key === me.key ? "" : ("" + me.key).replace(fn, "$&/") + "/") + w)), j.push(me)), 1;
    if (He = 0, Se = Se === "" ? "." : Se + ":", ye(w))
      for (var Ye = 0; Ye < w.length; Ye++) {
        Fe = w[Ye];
        var Ve = Se + ot(Fe, Ye);
        He += ht(Fe, j, ee, Ve, me);
      }
    else if (Ve = te(w), typeof Ve == "function")
      for (w = Ve.call(w), Ye = 0; !(Fe = w.next()).done; )
        Fe = Fe.value, Ve = Se + ot(Fe, Ye++), He += ht(Fe, j, ee, Ve, me);
    else if (Fe === "object")
      throw j = String(w), Error("Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead.");
    return He;
  }
  function Nt(w, j, ee) {
    if (w == null)
      return w;
    var Se = [], me = 0;
    return ht(w, Se, "", "", function(Fe) {
      return j.call(ee, Fe, me++);
    }), Se;
  }
  function bt(w) {
    if (w._status === -1) {
      var j = w._result;
      j = j(), j.then(function(ee) {
        (w._status === 0 || w._status === -1) && (w._status = 1, w._result = ee);
      }, function(ee) {
        (w._status === 0 || w._status === -1) && (w._status = 2, w._result = ee);
      }), w._status === -1 && (w._status = 0, w._result = j);
    }
    if (w._status === 1)
      return w._result.default;
    throw w._result;
  }
  var J = { current: null }, le = { transition: null }, Pe = { ReactCurrentDispatcher: J, ReactCurrentBatchConfig: le, ReactCurrentOwner: de };
  return Ht.Children = { map: Nt, forEach: function(w, j, ee) {
    Nt(w, function() {
      j.apply(this, arguments);
    }, ee);
  }, count: function(w) {
    var j = 0;
    return Nt(w, function() {
      j++;
    }), j;
  }, toArray: function(w) {
    return Nt(w, function(j) {
      return j;
    }) || [];
  }, only: function(w) {
    if (!Tt(w))
      throw Error("React.Children.only expected to receive a single React element child.");
    return w;
  } }, Ht.Component = Ae, Ht.Fragment = p, Ht.Profiler = b, Ht.PureComponent = xt, Ht.StrictMode = h, Ht.Suspense = L, Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pe, Ht.cloneElement = function(w, j, ee) {
    if (w == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + w + ".");
    var Se = De({}, w.props), me = w.key, Fe = w.ref, He = w._owner;
    if (j != null) {
      if (j.ref !== void 0 && (Fe = j.ref, He = de.current), j.key !== void 0 && (me = "" + j.key), w.type && w.type.defaultProps)
        var Ye = w.type.defaultProps;
      for (Ve in j)
        fe.call(j, Ve) && !Ce.hasOwnProperty(Ve) && (Se[Ve] = j[Ve] === void 0 && Ye !== void 0 ? Ye[Ve] : j[Ve]);
    }
    var Ve = arguments.length - 2;
    if (Ve === 1)
      Se.children = ee;
    else if (1 < Ve) {
      Ye = Array(Ve);
      for (var yt = 0; yt < Ve; yt++)
        Ye[yt] = arguments[yt + 2];
      Se.children = Ye;
    }
    return { $$typeof: l, type: w.type, key: me, ref: Fe, props: Se, _owner: He };
  }, Ht.createContext = function(w) {
    return w = { $$typeof: _, _currentValue: w, _currentValue2: w, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, w.Provider = { $$typeof: C, _context: w }, w.Consumer = w;
  }, Ht.createElement = mt, Ht.createFactory = function(w) {
    var j = mt.bind(null, w);
    return j.type = w, j;
  }, Ht.createRef = function() {
    return { current: null };
  }, Ht.forwardRef = function(w) {
    return { $$typeof: A, render: w };
  }, Ht.isValidElement = Tt, Ht.lazy = function(w) {
    return { $$typeof: ie, _payload: { _status: -1, _result: w }, _init: bt };
  }, Ht.memo = function(w, j) {
    return { $$typeof: B, type: w, compare: j === void 0 ? null : j };
  }, Ht.startTransition = function(w) {
    var j = le.transition;
    le.transition = {};
    try {
      w();
    } finally {
      le.transition = j;
    }
  }, Ht.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Ht.useCallback = function(w, j) {
    return J.current.useCallback(w, j);
  }, Ht.useContext = function(w) {
    return J.current.useContext(w);
  }, Ht.useDebugValue = function() {
  }, Ht.useDeferredValue = function(w) {
    return J.current.useDeferredValue(w);
  }, Ht.useEffect = function(w, j) {
    return J.current.useEffect(w, j);
  }, Ht.useId = function() {
    return J.current.useId();
  }, Ht.useImperativeHandle = function(w, j, ee) {
    return J.current.useImperativeHandle(w, j, ee);
  }, Ht.useInsertionEffect = function(w, j) {
    return J.current.useInsertionEffect(w, j);
  }, Ht.useLayoutEffect = function(w, j) {
    return J.current.useLayoutEffect(w, j);
  }, Ht.useMemo = function(w, j) {
    return J.current.useMemo(w, j);
  }, Ht.useReducer = function(w, j, ee) {
    return J.current.useReducer(w, j, ee);
  }, Ht.useRef = function(w) {
    return J.current.useRef(w);
  }, Ht.useState = function(w) {
    return J.current.useState(w);
  }, Ht.useSyncExternalStore = function(w, j, ee) {
    return J.current.useSyncExternalStore(w, j, ee);
  }, Ht.useTransition = function() {
    return J.current.useTransition();
  }, Ht.version = "18.2.0", Ht;
}
var qv = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
qv.exports;
var kw;
function YL() {
  return kw || (kw = 1, function(l, c) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var p = "18.2.0", h = Symbol.for("react.element"), b = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), L = Symbol.for("react.provider"), B = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), De = Symbol.for("react.lazy"), $e = Symbol.for("react.offscreen"), Ae = Symbol.iterator, It = "@@iterator";
      function xt(d) {
        if (d === null || typeof d != "object")
          return null;
        var S = Ae && d[Ae] || d[It];
        return typeof S == "function" ? S : null;
      }
      var be = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ye = {
        transition: null
      }, fe = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, de = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ce = {}, mt = null;
      function Et(d) {
        mt = d;
      }
      Ce.setExtraStackFrame = function(d) {
        mt = d;
      }, Ce.getCurrentStack = null, Ce.getStackAddendum = function() {
        var d = "";
        mt && (d += mt);
        var S = Ce.getCurrentStack;
        return S && (d += S() || ""), d;
      };
      var Tt = !1, Dt = !1, fn = !1, ot = !1, ht = !1, Nt = {
        ReactCurrentDispatcher: be,
        ReactCurrentBatchConfig: ye,
        ReactCurrentOwner: de
      };
      Nt.ReactDebugCurrentFrame = Ce, Nt.ReactCurrentActQueue = fe;
      function bt(d) {
        {
          for (var S = arguments.length, O = new Array(S > 1 ? S - 1 : 0), D = 1; D < S; D++)
            O[D - 1] = arguments[D];
          le("warn", d, O);
        }
      }
      function J(d) {
        {
          for (var S = arguments.length, O = new Array(S > 1 ? S - 1 : 0), D = 1; D < S; D++)
            O[D - 1] = arguments[D];
          le("error", d, O);
        }
      }
      function le(d, S, O) {
        {
          var D = Nt.ReactDebugCurrentFrame, V = D.getStackAddendum();
          V !== "" && (S += "%s", O = O.concat([V]));
          var oe = O.map(function(G) {
            return String(G);
          });
          oe.unshift("Warning: " + S), Function.prototype.apply.call(console[d], console, oe);
        }
      }
      var Pe = {};
      function w(d, S) {
        {
          var O = d.constructor, D = O && (O.displayName || O.name) || "ReactClass", V = D + "." + S;
          if (Pe[V])
            return;
          J("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", S, D), Pe[V] = !0;
        }
      }
      var j = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(d) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(d, S, O) {
          w(d, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(d, S, O, D) {
          w(d, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(d, S, O, D) {
          w(d, "setState");
        }
      }, ee = Object.assign, Se = {};
      Object.freeze(Se);
      function me(d, S, O) {
        this.props = d, this.context = S, this.refs = Se, this.updater = O || j;
      }
      me.prototype.isReactComponent = {}, me.prototype.setState = function(d, S) {
        if (typeof d != "object" && typeof d != "function" && d != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, d, S, "setState");
      }, me.prototype.forceUpdate = function(d) {
        this.updater.enqueueForceUpdate(this, d, "forceUpdate");
      };
      {
        var Fe = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, He = function(d, S) {
          Object.defineProperty(me.prototype, d, {
            get: function() {
              bt("%s(...) is deprecated in plain JavaScript React classes. %s", S[0], S[1]);
            }
          });
        };
        for (var Ye in Fe)
          Fe.hasOwnProperty(Ye) && He(Ye, Fe[Ye]);
      }
      function Ve() {
      }
      Ve.prototype = me.prototype;
      function yt(d, S, O) {
        this.props = d, this.context = S, this.refs = Se, this.updater = O || j;
      }
      var Fr = yt.prototype = new Ve();
      Fr.constructor = yt, ee(Fr, me.prototype), Fr.isPureReactComponent = !0;
      function nr() {
        var d = {
          current: null
        };
        return Object.seal(d), d;
      }
      var Hr = Array.isArray;
      function nn(d) {
        return Hr(d);
      }
      function Fn(d) {
        {
          var S = typeof Symbol == "function" && Symbol.toStringTag, O = S && d[Symbol.toStringTag] || d.constructor.name || "Object";
          return O;
        }
      }
      function Wn(d) {
        try {
          return Le(d), !1;
        } catch {
          return !0;
        }
      }
      function Le(d) {
        return "" + d;
      }
      function tt(d) {
        if (Wn(d))
          return J("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Fn(d)), Le(d);
      }
      function Yt(d, S, O) {
        var D = d.displayName;
        if (D)
          return D;
        var V = S.displayName || S.name || "";
        return V !== "" ? O + "(" + V + ")" : O;
      }
      function rn(d) {
        return d.displayName || "Context";
      }
      function Ut(d) {
        if (d == null)
          return null;
        if (typeof d.tag == "number" && J("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
          return d.displayName || d.name || null;
        if (typeof d == "string")
          return d;
        switch (d) {
          case C:
            return "Fragment";
          case b:
            return "Portal";
          case A:
            return "Profiler";
          case _:
            return "StrictMode";
          case X:
            return "Suspense";
          case te:
            return "SuspenseList";
        }
        if (typeof d == "object")
          switch (d.$$typeof) {
            case B:
              var S = d;
              return rn(S) + ".Consumer";
            case L:
              var O = d;
              return rn(O._context) + ".Provider";
            case ie:
              return Yt(d, d.render, "ForwardRef");
            case re:
              var D = d.displayName || null;
              return D !== null ? D : Ut(d.type) || "Memo";
            case De: {
              var V = d, oe = V._payload, G = V._init;
              try {
                return Ut(G(oe));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Bt = Object.prototype.hasOwnProperty, hn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, wt, Tn, tn;
      tn = {};
      function En(d) {
        if (Bt.call(d, "ref")) {
          var S = Object.getOwnPropertyDescriptor(d, "ref").get;
          if (S && S.isReactWarning)
            return !1;
        }
        return d.ref !== void 0;
      }
      function Kt(d) {
        if (Bt.call(d, "key")) {
          var S = Object.getOwnPropertyDescriptor(d, "key").get;
          if (S && S.isReactWarning)
            return !1;
        }
        return d.key !== void 0;
      }
      function zn(d, S) {
        var O = function() {
          wt || (wt = !0, J("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        O.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: O,
          configurable: !0
        });
      }
      function rr(d, S) {
        var O = function() {
          Tn || (Tn = !0, J("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        O.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: O,
          configurable: !0
        });
      }
      function Cn(d) {
        if (typeof d.ref == "string" && de.current && d.__self && de.current.stateNode !== d.__self) {
          var S = Ut(de.current.type);
          tn[S] || (J('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', S, d.ref), tn[S] = !0);
        }
      }
      var ve = function(d, S, O, D, V, oe, G) {
        var se = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: h,
          // Built-in properties that belong on the element
          type: d,
          key: S,
          ref: O,
          props: G,
          // Record the component responsible for creating this element.
          _owner: oe
        };
        return se._store = {}, Object.defineProperty(se._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(se, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: D
        }), Object.defineProperty(se, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: V
        }), Object.freeze && (Object.freeze(se.props), Object.freeze(se)), se;
      };
      function Me(d, S, O) {
        var D, V = {}, oe = null, G = null, se = null, Ee = null;
        if (S != null) {
          En(S) && (G = S.ref, Cn(S)), Kt(S) && (tt(S.key), oe = "" + S.key), se = S.__self === void 0 ? null : S.__self, Ee = S.__source === void 0 ? null : S.__source;
          for (D in S)
            Bt.call(S, D) && !hn.hasOwnProperty(D) && (V[D] = S[D]);
        }
        var Be = arguments.length - 2;
        if (Be === 1)
          V.children = O;
        else if (Be > 1) {
          for (var nt = Array(Be), qe = 0; qe < Be; qe++)
            nt[qe] = arguments[qe + 2];
          Object.freeze && Object.freeze(nt), V.children = nt;
        }
        if (d && d.defaultProps) {
          var at = d.defaultProps;
          for (D in at)
            V[D] === void 0 && (V[D] = at[D]);
        }
        if (oe || G) {
          var ft = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          oe && zn(V, ft), G && rr(V, ft);
        }
        return ve(d, oe, G, se, Ee, de.current, V);
      }
      function Ke(d, S) {
        var O = ve(d.type, S, d.ref, d._self, d._source, d._owner, d.props);
        return O;
      }
      function kt(d, S, O) {
        if (d == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + d + ".");
        var D, V = ee({}, d.props), oe = d.key, G = d.ref, se = d._self, Ee = d._source, Be = d._owner;
        if (S != null) {
          En(S) && (G = S.ref, Be = de.current), Kt(S) && (tt(S.key), oe = "" + S.key);
          var nt;
          d.type && d.type.defaultProps && (nt = d.type.defaultProps);
          for (D in S)
            Bt.call(S, D) && !hn.hasOwnProperty(D) && (S[D] === void 0 && nt !== void 0 ? V[D] = nt[D] : V[D] = S[D]);
        }
        var qe = arguments.length - 2;
        if (qe === 1)
          V.children = O;
        else if (qe > 1) {
          for (var at = Array(qe), ft = 0; ft < qe; ft++)
            at[ft] = arguments[ft + 2];
          V.children = at;
        }
        return ve(d.type, oe, G, se, Ee, Be, V);
      }
      function pt(d) {
        return typeof d == "object" && d !== null && d.$$typeof === h;
      }
      var An = ".", On = ":";
      function Nr(d) {
        var S = /[=:]/g, O = {
          "=": "=0",
          ":": "=2"
        }, D = d.replace(S, function(V) {
          return O[V];
        });
        return "$" + D;
      }
      var an = !1, na = /\/+/g;
      function dn(d) {
        return d.replace(na, "$&/");
      }
      function qt(d, S) {
        return typeof d == "object" && d !== null && d.key != null ? (tt(d.key), Nr("" + d.key)) : S.toString(36);
      }
      function Ia(d, S, O, D, V) {
        var oe = typeof d;
        (oe === "undefined" || oe === "boolean") && (d = null);
        var G = !1;
        if (d === null)
          G = !0;
        else
          switch (oe) {
            case "string":
            case "number":
              G = !0;
              break;
            case "object":
              switch (d.$$typeof) {
                case h:
                case b:
                  G = !0;
              }
          }
        if (G) {
          var se = d, Ee = V(se), Be = D === "" ? An + qt(se, 0) : D;
          if (nn(Ee)) {
            var nt = "";
            Be != null && (nt = dn(Be) + "/"), Ia(Ee, S, nt, "", function(Ys) {
              return Ys;
            });
          } else
            Ee != null && (pt(Ee) && (Ee.key && (!se || se.key !== Ee.key) && tt(Ee.key), Ee = Ke(
              Ee,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              O + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (Ee.key && (!se || se.key !== Ee.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                dn("" + Ee.key) + "/"
              ) : "") + Be
            )), S.push(Ee));
          return 1;
        }
        var qe, at, ft = 0, Ze = D === "" ? An : D + On;
        if (nn(d))
          for (var oa = 0; oa < d.length; oa++)
            qe = d[oa], at = Ze + qt(qe, oa), ft += Ia(qe, S, O, at, V);
        else {
          var Fi = xt(d);
          if (typeof Fi == "function") {
            var nu = d;
            Fi === nu.entries && (an || bt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), an = !0);
            for (var $s = Fi.call(nu), ua, $u = 0; !(ua = $s.next()).done; )
              qe = ua.value, at = Ze + qt(qe, $u++), ft += Ia(qe, S, O, at, V);
          } else if (oe === "object") {
            var ru = String(d);
            throw new Error("Objects are not valid as a React child (found: " + (ru === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : ru) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ft;
      }
      function ra(d, S, O) {
        if (d == null)
          return d;
        var D = [], V = 0;
        return Ia(d, D, "", "", function(oe) {
          return S.call(O, oe, V++);
        }), D;
      }
      function Go(d) {
        var S = 0;
        return ra(d, function() {
          S++;
        }), S;
      }
      function Ul(d, S, O) {
        ra(d, function() {
          S.apply(this, arguments);
        }, O);
      }
      function zl(d) {
        return ra(d, function(S) {
          return S;
        }) || [];
      }
      function Qo(d) {
        if (!pt(d))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return d;
      }
      function Vu(d) {
        var S = {
          $$typeof: B,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: d,
          _currentValue2: d,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        S.Provider = {
          $$typeof: L,
          _context: S
        };
        var O = !1, D = !1, V = !1;
        {
          var oe = {
            $$typeof: B,
            _context: S
          };
          Object.defineProperties(oe, {
            Provider: {
              get: function() {
                return D || (D = !0, J("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), S.Provider;
              },
              set: function(G) {
                S.Provider = G;
              }
            },
            _currentValue: {
              get: function() {
                return S._currentValue;
              },
              set: function(G) {
                S._currentValue = G;
              }
            },
            _currentValue2: {
              get: function() {
                return S._currentValue2;
              },
              set: function(G) {
                S._currentValue2 = G;
              }
            },
            _threadCount: {
              get: function() {
                return S._threadCount;
              },
              set: function(G) {
                S._threadCount = G;
              }
            },
            Consumer: {
              get: function() {
                return O || (O = !0, J("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), S.Consumer;
              }
            },
            displayName: {
              get: function() {
                return S.displayName;
              },
              set: function(G) {
                V || (bt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", G), V = !0);
              }
            }
          }), S.Consumer = oe;
        }
        return S._currentRenderer = null, S._currentRenderer2 = null, S;
      }
      var pr = -1, $a = 0, Ra = 1, Li = 2;
      function Br(d) {
        if (d._status === pr) {
          var S = d._result, O = S();
          if (O.then(function(oe) {
            if (d._status === $a || d._status === pr) {
              var G = d;
              G._status = Ra, G._result = oe;
            }
          }, function(oe) {
            if (d._status === $a || d._status === pr) {
              var G = d;
              G._status = Li, G._result = oe;
            }
          }), d._status === pr) {
            var D = d;
            D._status = $a, D._result = O;
          }
        }
        if (d._status === Ra) {
          var V = d._result;
          return V === void 0 && J(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, V), "default" in V || J(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, V), V.default;
        } else
          throw d._result;
      }
      function wa(d) {
        var S = {
          // We use these fields to store the result.
          _status: pr,
          _result: d
        }, O = {
          $$typeof: De,
          _payload: S,
          _init: Br
        };
        {
          var D, V;
          Object.defineProperties(O, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return D;
              },
              set: function(oe) {
                J("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), D = oe, Object.defineProperty(O, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return V;
              },
              set: function(oe) {
                J("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), V = oe, Object.defineProperty(O, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return O;
      }
      function Mi(d) {
        d != null && d.$$typeof === re ? J("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof d != "function" ? J("forwardRef requires a render function but was given %s.", d === null ? "null" : typeof d) : d.length !== 0 && d.length !== 2 && J("forwardRef render functions accept exactly two parameters: props and ref. %s", d.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), d != null && (d.defaultProps != null || d.propTypes != null) && J("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var S = {
          $$typeof: ie,
          render: d
        };
        {
          var O;
          Object.defineProperty(S, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return O;
            },
            set: function(D) {
              O = D, !d.name && !d.displayName && (d.displayName = D);
            }
          });
        }
        return S;
      }
      var yi;
      yi = Symbol.for("react.module.reference");
      function uo(d) {
        return !!(typeof d == "string" || typeof d == "function" || d === C || d === A || ht || d === _ || d === X || d === te || ot || d === $e || Tt || Dt || fn || typeof d == "object" && d !== null && (d.$$typeof === De || d.$$typeof === re || d.$$typeof === L || d.$$typeof === B || d.$$typeof === ie || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        d.$$typeof === yi || d.getModuleId !== void 0));
      }
      function Pu(d, S) {
        uo(d) || J("memo: The first argument must be a component. Instead received: %s", d === null ? "null" : typeof d);
        var O = {
          $$typeof: re,
          type: d,
          compare: S === void 0 ? null : S
        };
        {
          var D;
          Object.defineProperty(O, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return D;
            },
            set: function(V) {
              D = V, !d.name && !d.displayName && (d.displayName = V);
            }
          });
        }
        return O;
      }
      function At() {
        var d = be.current;
        return d === null && J(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), d;
      }
      function aa(d) {
        var S = At();
        if (d._context !== void 0) {
          var O = d._context;
          O.Consumer === d ? J("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : O.Provider === d && J("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return S.useContext(d);
      }
      function lo(d) {
        var S = At();
        return S.useState(d);
      }
      function Ui(d, S, O) {
        var D = At();
        return D.useReducer(d, S, O);
      }
      function Gn(d) {
        var S = At();
        return S.useRef(d);
      }
      function jl(d, S) {
        var O = At();
        return O.useEffect(d, S);
      }
      function Vl(d, S) {
        var O = At();
        return O.useInsertionEffect(d, S);
      }
      function Fu(d, S) {
        var O = At();
        return O.useLayoutEffect(d, S);
      }
      function Pl(d, S) {
        var O = At();
        return O.useCallback(d, S);
      }
      function Fs(d, S) {
        var O = At();
        return O.useMemo(d, S);
      }
      function Hs(d, S, O) {
        var D = At();
        return D.useImperativeHandle(d, S, O);
      }
      function pn(d, S) {
        {
          var O = At();
          return O.useDebugValue(d, S);
        }
      }
      function Bs() {
        var d = At();
        return d.useTransition();
      }
      function Ta(d) {
        var S = At();
        return S.useDeferredValue(d);
      }
      function Ct() {
        var d = At();
        return d.useId();
      }
      function Ya(d, S, O) {
        var D = At();
        return D.useSyncExternalStore(d, S, O);
      }
      var ia = 0, so, gi, vr, Ko, ar, Xo, qo;
      function Hu() {
      }
      Hu.__reactDisabledLog = !0;
      function Zo() {
        {
          if (ia === 0) {
            so = console.log, gi = console.info, vr = console.warn, Ko = console.error, ar = console.group, Xo = console.groupCollapsed, qo = console.groupEnd;
            var d = {
              configurable: !0,
              enumerable: !0,
              value: Hu,
              writable: !0
            };
            Object.defineProperties(console, {
              info: d,
              log: d,
              warn: d,
              error: d,
              group: d,
              groupCollapsed: d,
              groupEnd: d
            });
          }
          ia++;
        }
      }
      function zi() {
        {
          if (ia--, ia === 0) {
            var d = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: ee({}, d, {
                value: so
              }),
              info: ee({}, d, {
                value: gi
              }),
              warn: ee({}, d, {
                value: vr
              }),
              error: ee({}, d, {
                value: Ko
              }),
              group: ee({}, d, {
                value: ar
              }),
              groupCollapsed: ee({}, d, {
                value: Xo
              }),
              groupEnd: ee({}, d, {
                value: qo
              })
            });
          }
          ia < 0 && J("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ir = Nt.ReactCurrentDispatcher, Qn;
      function Oa(d, S, O) {
        {
          if (Qn === void 0)
            try {
              throw Error();
            } catch (V) {
              var D = V.stack.trim().match(/\n( *(at )?)/);
              Qn = D && D[1] || "";
            }
          return `
` + Qn + d;
        }
      }
      var Wa = !1, xa;
      {
        var Jo = typeof WeakMap == "function" ? WeakMap : Map;
        xa = new Jo();
      }
      function co(d, S) {
        if (!d || Wa)
          return "";
        {
          var O = xa.get(d);
          if (O !== void 0)
            return O;
        }
        var D;
        Wa = !0;
        var V = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var oe;
        oe = Ir.current, Ir.current = null, Zo();
        try {
          if (S) {
            var G = function() {
              throw Error();
            };
            if (Object.defineProperty(G.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(G, []);
              } catch (Ze) {
                D = Ze;
              }
              Reflect.construct(d, [], G);
            } else {
              try {
                G.call();
              } catch (Ze) {
                D = Ze;
              }
              d.call(G.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Ze) {
              D = Ze;
            }
            d();
          }
        } catch (Ze) {
          if (Ze && D && typeof Ze.stack == "string") {
            for (var se = Ze.stack.split(`
`), Ee = D.stack.split(`
`), Be = se.length - 1, nt = Ee.length - 1; Be >= 1 && nt >= 0 && se[Be] !== Ee[nt]; )
              nt--;
            for (; Be >= 1 && nt >= 0; Be--, nt--)
              if (se[Be] !== Ee[nt]) {
                if (Be !== 1 || nt !== 1)
                  do
                    if (Be--, nt--, nt < 0 || se[Be] !== Ee[nt]) {
                      var qe = `
` + se[Be].replace(" at new ", " at ");
                      return d.displayName && qe.includes("<anonymous>") && (qe = qe.replace("<anonymous>", d.displayName)), typeof d == "function" && xa.set(d, qe), qe;
                    }
                  while (Be >= 1 && nt >= 0);
                break;
              }
          }
        } finally {
          Wa = !1, Ir.current = oe, zi(), Error.prepareStackTrace = V;
        }
        var at = d ? d.displayName || d.name : "", ft = at ? Oa(at) : "";
        return typeof d == "function" && xa.set(d, ft), ft;
      }
      function _i(d, S, O) {
        return co(d, !1);
      }
      function Is(d) {
        var S = d.prototype;
        return !!(S && S.isReactComponent);
      }
      function $r(d, S, O) {
        if (d == null)
          return "";
        if (typeof d == "function")
          return co(d, Is(d));
        if (typeof d == "string")
          return Oa(d);
        switch (d) {
          case X:
            return Oa("Suspense");
          case te:
            return Oa("SuspenseList");
        }
        if (typeof d == "object")
          switch (d.$$typeof) {
            case ie:
              return _i(d.render);
            case re:
              return $r(d.type, S, O);
            case De: {
              var D = d, V = D._payload, oe = D._init;
              try {
                return $r(oe(V), S, O);
              } catch {
              }
            }
          }
        return "";
      }
      var zt = {}, fo = Nt.ReactDebugCurrentFrame;
      function Ga(d) {
        if (d) {
          var S = d._owner, O = $r(d.type, d._source, S ? S.type : null);
          fo.setExtraStackFrame(O);
        } else
          fo.setExtraStackFrame(null);
      }
      function eu(d, S, O, D, V) {
        {
          var oe = Function.call.bind(Bt);
          for (var G in d)
            if (oe(d, G)) {
              var se = void 0;
              try {
                if (typeof d[G] != "function") {
                  var Ee = Error((D || "React class") + ": " + O + " type `" + G + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[G] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Ee.name = "Invariant Violation", Ee;
                }
                se = d[G](S, G, D, O, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Be) {
                se = Be;
              }
              se && !(se instanceof Error) && (Ga(V), J("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", D || "React class", O, G, typeof se), Ga(null)), se instanceof Error && !(se.message in zt) && (zt[se.message] = !0, Ga(V), J("Failed %s type: %s", O, se.message), Ga(null));
            }
        }
      }
      function Rt(d) {
        if (d) {
          var S = d._owner, O = $r(d.type, d._source, S ? S.type : null);
          Et(O);
        } else
          Et(null);
      }
      var ji;
      ji = !1;
      function po() {
        if (de.current) {
          var d = Ut(de.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
      function lt(d) {
        if (d !== void 0) {
          var S = d.fileName.replace(/^.*[\\\/]/, ""), O = d.lineNumber;
          return `

Check your code at ` + S + ":" + O + ".";
        }
        return "";
      }
      function vo(d) {
        return d != null ? lt(d.__source) : "";
      }
      var vn = {};
      function kr(d) {
        var S = po();
        if (!S) {
          var O = typeof d == "string" ? d : d.displayName || d.name;
          O && (S = `

Check the top-level render call using <` + O + ">.");
        }
        return S;
      }
      function ir(d, S) {
        if (!(!d._store || d._store.validated || d.key != null)) {
          d._store.validated = !0;
          var O = kr(S);
          if (!vn[O]) {
            vn[O] = !0;
            var D = "";
            d && d._owner && d._owner !== de.current && (D = " It was passed a child from " + Ut(d._owner.type) + "."), Rt(d), J('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', O, D), Rt(null);
          }
        }
      }
      function bi(d, S) {
        if (typeof d == "object") {
          if (nn(d))
            for (var O = 0; O < d.length; O++) {
              var D = d[O];
              pt(D) && ir(D, S);
            }
          else if (pt(d))
            d._store && (d._store.validated = !0);
          else if (d) {
            var V = xt(d);
            if (typeof V == "function" && V !== d.entries)
              for (var oe = V.call(d), G; !(G = oe.next()).done; )
                pt(G.value) && ir(G.value, S);
          }
        }
      }
      function mn(d) {
        {
          var S = d.type;
          if (S == null || typeof S == "string")
            return;
          var O;
          if (typeof S == "function")
            O = S.propTypes;
          else if (typeof S == "object" && (S.$$typeof === ie || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          S.$$typeof === re))
            O = S.propTypes;
          else
            return;
          if (O) {
            var D = Ut(S);
            eu(O, d.props, "prop", D, d);
          } else if (S.PropTypes !== void 0 && !ji) {
            ji = !0;
            var V = Ut(S);
            J("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", V || "Unknown");
          }
          typeof S.getDefaultProps == "function" && !S.getDefaultProps.isReactClassApproved && J("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Wt(d) {
        {
          for (var S = Object.keys(d.props), O = 0; O < S.length; O++) {
            var D = S[O];
            if (D !== "children" && D !== "key") {
              Rt(d), J("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", D), Rt(null);
              break;
            }
          }
          d.ref !== null && (Rt(d), J("Invalid attribute `ref` supplied to `React.Fragment`."), Rt(null));
        }
      }
      function Bu(d, S, O) {
        var D = uo(d);
        if (!D) {
          var V = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (V += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var oe = vo(S);
          oe ? V += oe : V += po();
          var G;
          d === null ? G = "null" : nn(d) ? G = "array" : d !== void 0 && d.$$typeof === h ? (G = "<" + (Ut(d.type) || "Unknown") + " />", V = " Did you accidentally export a JSX literal instead of a component?") : G = typeof d, J("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", G, V);
        }
        var se = Me.apply(this, arguments);
        if (se == null)
          return se;
        if (D)
          for (var Ee = 2; Ee < arguments.length; Ee++)
            bi(arguments[Ee], d);
        return d === C ? Wt(se) : mn(se), se;
      }
      var hr = !1;
      function Hn(d) {
        var S = Bu.bind(null, d);
        return S.type = d, hr || (hr = !0, bt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(S, "type", {
          enumerable: !1,
          get: function() {
            return bt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: d
            }), d;
          }
        }), S;
      }
      function Qa(d, S, O) {
        for (var D = kt.apply(this, arguments), V = 2; V < arguments.length; V++)
          bi(arguments[V], D.type);
        return mn(D), D;
      }
      function Fl(d, S) {
        var O = ye.transition;
        ye.transition = {};
        var D = ye.transition;
        ye.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          d();
        } finally {
          if (ye.transition = O, O === null && D._updatedFibers) {
            var V = D._updatedFibers.size;
            V > 10 && bt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), D._updatedFibers.clear();
          }
        }
      }
      var Ka = !1, Da = null;
      function Hl(d) {
        if (Da === null)
          try {
            var S = ("require" + Math.random()).slice(0, 7), O = l && l[S];
            Da = O.call(l, "timers").setImmediate;
          } catch {
            Da = function(V) {
              Ka === !1 && (Ka = !0, typeof MessageChannel > "u" && J("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var oe = new MessageChannel();
              oe.port1.onmessage = V, oe.port2.postMessage(void 0);
            };
          }
        return Da(d);
      }
      var Kn = 0, Si = !1;
      function Vi(d) {
        {
          var S = Kn;
          Kn++, fe.current === null && (fe.current = []);
          var O = fe.isBatchingLegacy, D;
          try {
            if (fe.isBatchingLegacy = !0, D = d(), !O && fe.didScheduleLegacyUpdate) {
              var V = fe.current;
              V !== null && (fe.didScheduleLegacyUpdate = !1, qa(V));
            }
          } catch (at) {
            throw mr(S), at;
          } finally {
            fe.isBatchingLegacy = O;
          }
          if (D !== null && typeof D == "object" && typeof D.then == "function") {
            var oe = D, G = !1, se = {
              then: function(at, ft) {
                G = !0, oe.then(function(Ze) {
                  mr(S), Kn === 0 ? Pi(Ze, at, ft) : at(Ze);
                }, function(Ze) {
                  mr(S), ft(Ze);
                });
              }
            };
            return !Si && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              G || (Si = !0, J("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), se;
          } else {
            var Ee = D;
            if (mr(S), Kn === 0) {
              var Be = fe.current;
              Be !== null && (qa(Be), fe.current = null);
              var nt = {
                then: function(at, ft) {
                  fe.current === null ? (fe.current = [], Pi(Ee, at, ft)) : at(Ee);
                }
              };
              return nt;
            } else {
              var qe = {
                then: function(at, ft) {
                  at(Ee);
                }
              };
              return qe;
            }
          }
        }
      }
      function mr(d) {
        d !== Kn - 1 && J("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Kn = d;
      }
      function Pi(d, S, O) {
        {
          var D = fe.current;
          if (D !== null)
            try {
              qa(D), Hl(function() {
                D.length === 0 ? (fe.current = null, S(d)) : Pi(d, S, O);
              });
            } catch (V) {
              O(V);
            }
          else
            S(d);
        }
      }
      var Xa = !1;
      function qa(d) {
        if (!Xa) {
          Xa = !0;
          var S = 0;
          try {
            for (; S < d.length; S++) {
              var O = d[S];
              do
                O = O(!0);
              while (O !== null);
            }
            d.length = 0;
          } catch (D) {
            throw d = d.slice(S + 1), D;
          } finally {
            Xa = !1;
          }
        }
      }
      var ho = Bu, tu = Qa, Iu = Hn, Na = {
        map: ra,
        forEach: Ul,
        count: Go,
        toArray: zl,
        only: Qo
      };
      c.Children = Na, c.Component = me, c.Fragment = C, c.Profiler = A, c.PureComponent = yt, c.StrictMode = _, c.Suspense = X, c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nt, c.cloneElement = tu, c.createContext = Vu, c.createElement = ho, c.createFactory = Iu, c.createRef = nr, c.forwardRef = Mi, c.isValidElement = pt, c.lazy = wa, c.memo = Pu, c.startTransition = Fl, c.unstable_act = Vi, c.useCallback = Pl, c.useContext = aa, c.useDebugValue = pn, c.useDeferredValue = Ta, c.useEffect = jl, c.useId = Ct, c.useImperativeHandle = Hs, c.useInsertionEffect = Vl, c.useLayoutEffect = Fu, c.useMemo = Fs, c.useReducer = Ui, c.useRef = Gn, c.useState = lo, c.useSyncExternalStore = Ya, c.useTransition = Bs, c.version = p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(qv, qv.exports)), qv.exports;
}
process.env.NODE_ENV === "production" ? mE.exports = $L() : mE.exports = YL();
var Ca = mE.exports;
const $c = /* @__PURE__ */ qw(Ca);
if (!Ca.useState)
  throw new Error("mobx-react-lite requires React with Hooks support");
if (!xL)
  throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
var yE = { exports: {} }, hi = {}, rg = { exports: {} }, nE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Aw;
function WL() {
  return Aw || (Aw = 1, function(l) {
    function c(le, Pe) {
      var w = le.length;
      le.push(Pe);
      e:
        for (; 0 < w; ) {
          var j = w - 1 >>> 1, ee = le[j];
          if (0 < b(ee, Pe))
            le[j] = Pe, le[w] = ee, w = j;
          else
            break e;
        }
    }
    function p(le) {
      return le.length === 0 ? null : le[0];
    }
    function h(le) {
      if (le.length === 0)
        return null;
      var Pe = le[0], w = le.pop();
      if (w !== Pe) {
        le[0] = w;
        e:
          for (var j = 0, ee = le.length, Se = ee >>> 1; j < Se; ) {
            var me = 2 * (j + 1) - 1, Fe = le[me], He = me + 1, Ye = le[He];
            if (0 > b(Fe, w))
              He < ee && 0 > b(Ye, Fe) ? (le[j] = Ye, le[He] = w, j = He) : (le[j] = Fe, le[me] = w, j = me);
            else if (He < ee && 0 > b(Ye, w))
              le[j] = Ye, le[He] = w, j = He;
            else
              break e;
          }
      }
      return Pe;
    }
    function b(le, Pe) {
      var w = le.sortIndex - Pe.sortIndex;
      return w !== 0 ? w : le.id - Pe.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var C = performance;
      l.unstable_now = function() {
        return C.now();
      };
    } else {
      var _ = Date, A = _.now();
      l.unstable_now = function() {
        return _.now() - A;
      };
    }
    var L = [], B = [], ie = 1, X = null, te = 3, re = !1, De = !1, $e = !1, Ae = typeof setTimeout == "function" ? setTimeout : null, It = typeof clearTimeout == "function" ? clearTimeout : null, xt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function be(le) {
      for (var Pe = p(B); Pe !== null; ) {
        if (Pe.callback === null)
          h(B);
        else if (Pe.startTime <= le)
          h(B), Pe.sortIndex = Pe.expirationTime, c(L, Pe);
        else
          break;
        Pe = p(B);
      }
    }
    function ye(le) {
      if ($e = !1, be(le), !De)
        if (p(L) !== null)
          De = !0, bt(fe);
        else {
          var Pe = p(B);
          Pe !== null && J(ye, Pe.startTime - le);
        }
    }
    function fe(le, Pe) {
      De = !1, $e && ($e = !1, It(mt), mt = -1), re = !0;
      var w = te;
      try {
        for (be(Pe), X = p(L); X !== null && (!(X.expirationTime > Pe) || le && !Dt()); ) {
          var j = X.callback;
          if (typeof j == "function") {
            X.callback = null, te = X.priorityLevel;
            var ee = j(X.expirationTime <= Pe);
            Pe = l.unstable_now(), typeof ee == "function" ? X.callback = ee : X === p(L) && h(L), be(Pe);
          } else
            h(L);
          X = p(L);
        }
        if (X !== null)
          var Se = !0;
        else {
          var me = p(B);
          me !== null && J(ye, me.startTime - Pe), Se = !1;
        }
        return Se;
      } finally {
        X = null, te = w, re = !1;
      }
    }
    var de = !1, Ce = null, mt = -1, Et = 5, Tt = -1;
    function Dt() {
      return !(l.unstable_now() - Tt < Et);
    }
    function fn() {
      if (Ce !== null) {
        var le = l.unstable_now();
        Tt = le;
        var Pe = !0;
        try {
          Pe = Ce(!0, le);
        } finally {
          Pe ? ot() : (de = !1, Ce = null);
        }
      } else
        de = !1;
    }
    var ot;
    if (typeof xt == "function")
      ot = function() {
        xt(fn);
      };
    else if (typeof MessageChannel < "u") {
      var ht = new MessageChannel(), Nt = ht.port2;
      ht.port1.onmessage = fn, ot = function() {
        Nt.postMessage(null);
      };
    } else
      ot = function() {
        Ae(fn, 0);
      };
    function bt(le) {
      Ce = le, de || (de = !0, ot());
    }
    function J(le, Pe) {
      mt = Ae(function() {
        le(l.unstable_now());
      }, Pe);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(le) {
      le.callback = null;
    }, l.unstable_continueExecution = function() {
      De || re || (De = !0, bt(fe));
    }, l.unstable_forceFrameRate = function(le) {
      0 > le || 125 < le ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Et = 0 < le ? Math.floor(1e3 / le) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return te;
    }, l.unstable_getFirstCallbackNode = function() {
      return p(L);
    }, l.unstable_next = function(le) {
      switch (te) {
        case 1:
        case 2:
        case 3:
          var Pe = 3;
          break;
        default:
          Pe = te;
      }
      var w = te;
      te = Pe;
      try {
        return le();
      } finally {
        te = w;
      }
    }, l.unstable_pauseExecution = function() {
    }, l.unstable_requestPaint = function() {
    }, l.unstable_runWithPriority = function(le, Pe) {
      switch (le) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          le = 3;
      }
      var w = te;
      te = le;
      try {
        return Pe();
      } finally {
        te = w;
      }
    }, l.unstable_scheduleCallback = function(le, Pe, w) {
      var j = l.unstable_now();
      switch (typeof w == "object" && w !== null ? (w = w.delay, w = typeof w == "number" && 0 < w ? j + w : j) : w = j, le) {
        case 1:
          var ee = -1;
          break;
        case 2:
          ee = 250;
          break;
        case 5:
          ee = 1073741823;
          break;
        case 4:
          ee = 1e4;
          break;
        default:
          ee = 5e3;
      }
      return ee = w + ee, le = { id: ie++, callback: Pe, priorityLevel: le, startTime: w, expirationTime: ee, sortIndex: -1 }, w > j ? (le.sortIndex = w, c(B, le), p(L) === null && le === p(B) && ($e ? (It(mt), mt = -1) : $e = !0, J(ye, w - j))) : (le.sortIndex = ee, c(L, le), De || re || (De = !0, bt(fe))), le;
    }, l.unstable_shouldYield = Dt, l.unstable_wrapCallback = function(le) {
      var Pe = te;
      return function() {
        var w = te;
        te = Pe;
        try {
          return le.apply(this, arguments);
        } finally {
          te = w;
        }
      };
    };
  }(nE)), nE;
}
var rE = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lw;
function GL() {
  return Lw || (Lw = 1, function(l) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var c = !1, p = !1, h = 5;
      function b(ve, Me) {
        var Ke = ve.length;
        ve.push(Me), A(ve, Me, Ke);
      }
      function C(ve) {
        return ve.length === 0 ? null : ve[0];
      }
      function _(ve) {
        if (ve.length === 0)
          return null;
        var Me = ve[0], Ke = ve.pop();
        return Ke !== Me && (ve[0] = Ke, L(ve, Ke, 0)), Me;
      }
      function A(ve, Me, Ke) {
        for (var kt = Ke; kt > 0; ) {
          var pt = kt - 1 >>> 1, An = ve[pt];
          if (B(An, Me) > 0)
            ve[pt] = Me, ve[kt] = An, kt = pt;
          else
            return;
        }
      }
      function L(ve, Me, Ke) {
        for (var kt = Ke, pt = ve.length, An = pt >>> 1; kt < An; ) {
          var On = (kt + 1) * 2 - 1, Nr = ve[On], an = On + 1, na = ve[an];
          if (B(Nr, Me) < 0)
            an < pt && B(na, Nr) < 0 ? (ve[kt] = na, ve[an] = Me, kt = an) : (ve[kt] = Nr, ve[On] = Me, kt = On);
          else if (an < pt && B(na, Me) < 0)
            ve[kt] = na, ve[an] = Me, kt = an;
          else
            return;
        }
      }
      function B(ve, Me) {
        var Ke = ve.sortIndex - Me.sortIndex;
        return Ke !== 0 ? Ke : ve.id - Me.id;
      }
      var ie = 1, X = 2, te = 3, re = 4, De = 5;
      function $e(ve, Me) {
      }
      var Ae = typeof performance == "object" && typeof performance.now == "function";
      if (Ae) {
        var It = performance;
        l.unstable_now = function() {
          return It.now();
        };
      } else {
        var xt = Date, be = xt.now();
        l.unstable_now = function() {
          return xt.now() - be;
        };
      }
      var ye = 1073741823, fe = -1, de = 250, Ce = 5e3, mt = 1e4, Et = ye, Tt = [], Dt = [], fn = 1, ot = null, ht = te, Nt = !1, bt = !1, J = !1, le = typeof setTimeout == "function" ? setTimeout : null, Pe = typeof clearTimeout == "function" ? clearTimeout : null, w = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function j(ve) {
        for (var Me = C(Dt); Me !== null; ) {
          if (Me.callback === null)
            _(Dt);
          else if (Me.startTime <= ve)
            _(Dt), Me.sortIndex = Me.expirationTime, b(Tt, Me);
          else
            return;
          Me = C(Dt);
        }
      }
      function ee(ve) {
        if (J = !1, j(ve), !bt)
          if (C(Tt) !== null)
            bt = !0, En(Se);
          else {
            var Me = C(Dt);
            Me !== null && Kt(ee, Me.startTime - ve);
          }
      }
      function Se(ve, Me) {
        bt = !1, J && (J = !1, zn()), Nt = !0;
        var Ke = ht;
        try {
          var kt;
          if (!p)
            return me(ve, Me);
        } finally {
          ot = null, ht = Ke, Nt = !1;
        }
      }
      function me(ve, Me) {
        var Ke = Me;
        for (j(Ke), ot = C(Tt); ot !== null && !c && !(ot.expirationTime > Ke && (!ve || rn())); ) {
          var kt = ot.callback;
          if (typeof kt == "function") {
            ot.callback = null, ht = ot.priorityLevel;
            var pt = ot.expirationTime <= Ke, An = kt(pt);
            Ke = l.unstable_now(), typeof An == "function" ? ot.callback = An : ot === C(Tt) && _(Tt), j(Ke);
          } else
            _(Tt);
          ot = C(Tt);
        }
        if (ot !== null)
          return !0;
        var On = C(Dt);
        return On !== null && Kt(ee, On.startTime - Ke), !1;
      }
      function Fe(ve, Me) {
        switch (ve) {
          case ie:
          case X:
          case te:
          case re:
          case De:
            break;
          default:
            ve = te;
        }
        var Ke = ht;
        ht = ve;
        try {
          return Me();
        } finally {
          ht = Ke;
        }
      }
      function He(ve) {
        var Me;
        switch (ht) {
          case ie:
          case X:
          case te:
            Me = te;
            break;
          default:
            Me = ht;
            break;
        }
        var Ke = ht;
        ht = Me;
        try {
          return ve();
        } finally {
          ht = Ke;
        }
      }
      function Ye(ve) {
        var Me = ht;
        return function() {
          var Ke = ht;
          ht = Me;
          try {
            return ve.apply(this, arguments);
          } finally {
            ht = Ke;
          }
        };
      }
      function Ve(ve, Me, Ke) {
        var kt = l.unstable_now(), pt;
        if (typeof Ke == "object" && Ke !== null) {
          var An = Ke.delay;
          typeof An == "number" && An > 0 ? pt = kt + An : pt = kt;
        } else
          pt = kt;
        var On;
        switch (ve) {
          case ie:
            On = fe;
            break;
          case X:
            On = de;
            break;
          case De:
            On = Et;
            break;
          case re:
            On = mt;
            break;
          case te:
          default:
            On = Ce;
            break;
        }
        var Nr = pt + On, an = {
          id: fn++,
          callback: Me,
          priorityLevel: ve,
          startTime: pt,
          expirationTime: Nr,
          sortIndex: -1
        };
        return pt > kt ? (an.sortIndex = pt, b(Dt, an), C(Tt) === null && an === C(Dt) && (J ? zn() : J = !0, Kt(ee, pt - kt))) : (an.sortIndex = Nr, b(Tt, an), !bt && !Nt && (bt = !0, En(Se))), an;
      }
      function yt() {
      }
      function Fr() {
        !bt && !Nt && (bt = !0, En(Se));
      }
      function nr() {
        return C(Tt);
      }
      function Hr(ve) {
        ve.callback = null;
      }
      function nn() {
        return ht;
      }
      var Fn = !1, Wn = null, Le = -1, tt = h, Yt = -1;
      function rn() {
        var ve = l.unstable_now() - Yt;
        return !(ve < tt);
      }
      function Ut() {
      }
      function Bt(ve) {
        if (ve < 0 || ve > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ve > 0 ? tt = Math.floor(1e3 / ve) : tt = h;
      }
      var hn = function() {
        if (Wn !== null) {
          var ve = l.unstable_now();
          Yt = ve;
          var Me = !0, Ke = !0;
          try {
            Ke = Wn(Me, ve);
          } finally {
            Ke ? wt() : (Fn = !1, Wn = null);
          }
        } else
          Fn = !1;
      }, wt;
      if (typeof w == "function")
        wt = function() {
          w(hn);
        };
      else if (typeof MessageChannel < "u") {
        var Tn = new MessageChannel(), tn = Tn.port2;
        Tn.port1.onmessage = hn, wt = function() {
          tn.postMessage(null);
        };
      } else
        wt = function() {
          le(hn, 0);
        };
      function En(ve) {
        Wn = ve, Fn || (Fn = !0, wt());
      }
      function Kt(ve, Me) {
        Le = le(function() {
          ve(l.unstable_now());
        }, Me);
      }
      function zn() {
        Pe(Le), Le = -1;
      }
      var rr = Ut, Cn = null;
      l.unstable_IdlePriority = De, l.unstable_ImmediatePriority = ie, l.unstable_LowPriority = re, l.unstable_NormalPriority = te, l.unstable_Profiling = Cn, l.unstable_UserBlockingPriority = X, l.unstable_cancelCallback = Hr, l.unstable_continueExecution = Fr, l.unstable_forceFrameRate = Bt, l.unstable_getCurrentPriorityLevel = nn, l.unstable_getFirstCallbackNode = nr, l.unstable_next = He, l.unstable_pauseExecution = yt, l.unstable_requestPaint = rr, l.unstable_runWithPriority = Fe, l.unstable_scheduleCallback = Ve, l.unstable_shouldYield = rn, l.unstable_wrapCallback = Ye, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(rE)), rE;
}
var Mw;
function Z1() {
  return Mw || (Mw = 1, process.env.NODE_ENV === "production" ? rg.exports = WL() : rg.exports = GL()), rg.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uw;
function QL() {
  if (Uw)
    return hi;
  Uw = 1;
  var l = Ca, c = Z1();
  function p(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++)
      r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var h = /* @__PURE__ */ new Set(), b = {};
  function C(n, r) {
    _(n, r), _(n + "Capture", r);
  }
  function _(n, r) {
    for (b[n] = r, n = 0; n < r.length; n++)
      h.add(r[n]);
  }
  var A = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), L = Object.prototype.hasOwnProperty, B = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ie = {}, X = {};
  function te(n) {
    return L.call(X, n) ? !0 : L.call(ie, n) ? !1 : B.test(n) ? X[n] = !0 : (ie[n] = !0, !1);
  }
  function re(n, r, o, s) {
    if (o !== null && o.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return s ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function De(n, r, o, s) {
    if (r === null || typeof r > "u" || re(n, r, o, s))
      return !0;
    if (s)
      return !1;
    if (o !== null)
      switch (o.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function $e(n, r, o, s, v, y, R) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = s, this.attributeNamespace = v, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = y, this.removeEmptyString = R;
  }
  var Ae = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Ae[n] = new $e(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Ae[r] = new $e(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Ae[n] = new $e(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Ae[n] = new $e(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Ae[n] = new $e(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Ae[n] = new $e(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Ae[n] = new $e(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Ae[n] = new $e(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Ae[n] = new $e(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var It = /[\-:]([a-z])/g;
  function xt(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      It,
      xt
    );
    Ae[r] = new $e(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(It, xt);
    Ae[r] = new $e(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(It, xt);
    Ae[r] = new $e(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Ae[n] = new $e(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Ae.xlinkHref = new $e("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Ae[n] = new $e(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function be(n, r, o, s) {
    var v = Ae.hasOwnProperty(r) ? Ae[r] : null;
    (v !== null ? v.type !== 0 : s || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (De(r, o, v, s) && (o = null), s || v === null ? te(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : v.mustUseProperty ? n[v.propertyName] = o === null ? v.type === 3 ? !1 : "" : o : (r = v.attributeName, s = v.attributeNamespace, o === null ? n.removeAttribute(r) : (v = v.type, o = v === 3 || v === 4 && o === !0 ? "" : "" + o, s ? n.setAttributeNS(s, r, o) : n.setAttribute(r, o))));
  }
  var ye = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, fe = Symbol.for("react.element"), de = Symbol.for("react.portal"), Ce = Symbol.for("react.fragment"), mt = Symbol.for("react.strict_mode"), Et = Symbol.for("react.profiler"), Tt = Symbol.for("react.provider"), Dt = Symbol.for("react.context"), fn = Symbol.for("react.forward_ref"), ot = Symbol.for("react.suspense"), ht = Symbol.for("react.suspense_list"), Nt = Symbol.for("react.memo"), bt = Symbol.for("react.lazy"), J = Symbol.for("react.offscreen"), le = Symbol.iterator;
  function Pe(n) {
    return n === null || typeof n != "object" ? null : (n = le && n[le] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var w = Object.assign, j;
  function ee(n) {
    if (j === void 0)
      try {
        throw Error();
      } catch (o) {
        var r = o.stack.trim().match(/\n( *(at )?)/);
        j = r && r[1] || "";
      }
    return `
` + j + n;
  }
  var Se = !1;
  function me(n, r) {
    if (!n || Se)
      return "";
    Se = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (W) {
            var s = W;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (W) {
            s = W;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (W) {
          s = W;
        }
        n();
      }
    } catch (W) {
      if (W && s && typeof W.stack == "string") {
        for (var v = W.stack.split(`
`), y = s.stack.split(`
`), R = v.length - 1, N = y.length - 1; 1 <= R && 0 <= N && v[R] !== y[N]; )
          N--;
        for (; 1 <= R && 0 <= N; R--, N--)
          if (v[R] !== y[N]) {
            if (R !== 1 || N !== 1)
              do
                if (R--, N--, 0 > N || v[R] !== y[N]) {
                  var k = `
` + v[R].replace(" at new ", " at ");
                  return n.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", n.displayName)), k;
                }
              while (1 <= R && 0 <= N);
            break;
          }
      }
    } finally {
      Se = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? ee(n) : "";
  }
  function Fe(n) {
    switch (n.tag) {
      case 5:
        return ee(n.type);
      case 16:
        return ee("Lazy");
      case 13:
        return ee("Suspense");
      case 19:
        return ee("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = me(n.type, !1), n;
      case 11:
        return n = me(n.type.render, !1), n;
      case 1:
        return n = me(n.type, !0), n;
      default:
        return "";
    }
  }
  function He(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case Ce:
        return "Fragment";
      case de:
        return "Portal";
      case Et:
        return "Profiler";
      case mt:
        return "StrictMode";
      case ot:
        return "Suspense";
      case ht:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Dt:
          return (n.displayName || "Context") + ".Consumer";
        case Tt:
          return (n._context.displayName || "Context") + ".Provider";
        case fn:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Nt:
          return r = n.displayName || null, r !== null ? r : He(n.type) || "Memo";
        case bt:
          r = n._payload, n = n._init;
          try {
            return He(n(r));
          } catch {
          }
      }
    return null;
  }
  function Ye(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return He(r);
      case 8:
        return r === mt ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function Ve(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function yt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Fr(n) {
    var r = yt(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), s = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var v = o.get, y = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return v.call(this);
      }, set: function(R) {
        s = "" + R, y.call(this, R);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return s;
      }, setValue: function(R) {
        s = "" + R;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function nr(n) {
    n._valueTracker || (n._valueTracker = Fr(n));
  }
  function Hr(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var o = r.getValue(), s = "";
    return n && (s = yt(n) ? n.checked ? "true" : "false" : n.value), n = s, n !== o ? (r.setValue(n), !0) : !1;
  }
  function nn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Fn(n, r) {
    var o = r.checked;
    return w({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function Wn(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, s = r.checked != null ? r.checked : r.defaultChecked;
    o = Ve(r.value != null ? r.value : o), n._wrapperState = { initialChecked: s, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Le(n, r) {
    r = r.checked, r != null && be(n, "checked", r, !1);
  }
  function tt(n, r) {
    Le(n, r);
    var o = Ve(r.value), s = r.type;
    if (o != null)
      s === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (s === "submit" || s === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? rn(n, r.type, o) : r.hasOwnProperty("defaultValue") && rn(n, r.type, Ve(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Yt(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var s = r.type;
      if (!(s !== "submit" && s !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function rn(n, r, o) {
    (r !== "number" || nn(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var Ut = Array.isArray;
  function Bt(n, r, o, s) {
    if (n = n.options, r) {
      r = {};
      for (var v = 0; v < o.length; v++)
        r["$" + o[v]] = !0;
      for (o = 0; o < n.length; o++)
        v = r.hasOwnProperty("$" + n[o].value), n[o].selected !== v && (n[o].selected = v), v && s && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + Ve(o), r = null, v = 0; v < n.length; v++) {
        if (n[v].value === o) {
          n[v].selected = !0, s && (n[v].defaultSelected = !0);
          return;
        }
        r !== null || n[v].disabled || (r = n[v]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function hn(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(p(91));
    return w({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function wt(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null)
          throw Error(p(92));
        if (Ut(o)) {
          if (1 < o.length)
            throw Error(p(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: Ve(o) };
  }
  function Tn(n, r) {
    var o = Ve(r.value), s = Ve(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), s != null && (n.defaultValue = "" + s);
  }
  function tn(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function En(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Kt(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? En(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var zn, rr = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, s, v) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, s, v);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (zn = zn || document.createElement("div"), zn.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = zn.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function Cn(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ve = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Me = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ve).forEach(function(n) {
    Me.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ve[r] = ve[n];
    });
  });
  function Ke(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || ve.hasOwnProperty(n) && ve[n] ? ("" + r).trim() : r + "px";
  }
  function kt(n, r) {
    n = n.style;
    for (var o in r)
      if (r.hasOwnProperty(o)) {
        var s = o.indexOf("--") === 0, v = Ke(o, r[o], s);
        o === "float" && (o = "cssFloat"), s ? n.setProperty(o, v) : n[o] = v;
      }
  }
  var pt = w({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function An(n, r) {
    if (r) {
      if (pt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(p(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(p(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(p(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(p(62));
    }
  }
  function On(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Nr = null;
  function an(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var na = null, dn = null, qt = null;
  function Ia(n) {
    if (n = nc(n)) {
      if (typeof na != "function")
        throw Error(p(280));
      var r = n.stateNode;
      r && (r = Xe(r), na(n.stateNode, n.type, r));
    }
  }
  function ra(n) {
    dn ? qt ? qt.push(n) : qt = [n] : dn = n;
  }
  function Go() {
    if (dn) {
      var n = dn, r = qt;
      if (qt = dn = null, Ia(n), r)
        for (n = 0; n < r.length; n++)
          Ia(r[n]);
    }
  }
  function Ul(n, r) {
    return n(r);
  }
  function zl() {
  }
  var Qo = !1;
  function Vu(n, r, o) {
    if (Qo)
      return n(r, o);
    Qo = !0;
    try {
      return Ul(n, r, o);
    } finally {
      Qo = !1, (dn !== null || qt !== null) && (zl(), Go());
    }
  }
  function pr(n, r) {
    var o = n.stateNode;
    if (o === null)
      return null;
    var s = Xe(o);
    if (s === null)
      return null;
    o = s[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (s = !s.disabled) || (n = n.type, s = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !s;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (o && typeof o != "function")
      throw Error(p(231, r, typeof o));
    return o;
  }
  var $a = !1;
  if (A)
    try {
      var Ra = {};
      Object.defineProperty(Ra, "passive", { get: function() {
        $a = !0;
      } }), window.addEventListener("test", Ra, Ra), window.removeEventListener("test", Ra, Ra);
    } catch {
      $a = !1;
    }
  function Li(n, r, o, s, v, y, R, N, k) {
    var W = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, W);
    } catch (ue) {
      this.onError(ue);
    }
  }
  var Br = !1, wa = null, Mi = !1, yi = null, uo = { onError: function(n) {
    Br = !0, wa = n;
  } };
  function Pu(n, r, o, s, v, y, R, N, k) {
    Br = !1, wa = null, Li.apply(uo, arguments);
  }
  function At(n, r, o, s, v, y, R, N, k) {
    if (Pu.apply(this, arguments), Br) {
      if (Br) {
        var W = wa;
        Br = !1, wa = null;
      } else
        throw Error(p(198));
      Mi || (Mi = !0, yi = W);
    }
  }
  function aa(n) {
    var r = n, o = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (o = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? o : null;
  }
  function lo(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function Ui(n) {
    if (aa(n) !== n)
      throw Error(p(188));
  }
  function Gn(n) {
    var r = n.alternate;
    if (!r) {
      if (r = aa(n), r === null)
        throw Error(p(188));
      return r !== n ? null : n;
    }
    for (var o = n, s = r; ; ) {
      var v = o.return;
      if (v === null)
        break;
      var y = v.alternate;
      if (y === null) {
        if (s = v.return, s !== null) {
          o = s;
          continue;
        }
        break;
      }
      if (v.child === y.child) {
        for (y = v.child; y; ) {
          if (y === o)
            return Ui(v), n;
          if (y === s)
            return Ui(v), r;
          y = y.sibling;
        }
        throw Error(p(188));
      }
      if (o.return !== s.return)
        o = v, s = y;
      else {
        for (var R = !1, N = v.child; N; ) {
          if (N === o) {
            R = !0, o = v, s = y;
            break;
          }
          if (N === s) {
            R = !0, s = v, o = y;
            break;
          }
          N = N.sibling;
        }
        if (!R) {
          for (N = y.child; N; ) {
            if (N === o) {
              R = !0, o = y, s = v;
              break;
            }
            if (N === s) {
              R = !0, s = y, o = v;
              break;
            }
            N = N.sibling;
          }
          if (!R)
            throw Error(p(189));
        }
      }
      if (o.alternate !== s)
        throw Error(p(190));
    }
    if (o.tag !== 3)
      throw Error(p(188));
    return o.stateNode.current === o ? n : r;
  }
  function jl(n) {
    return n = Gn(n), n !== null ? Vl(n) : null;
  }
  function Vl(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = Vl(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var Fu = c.unstable_scheduleCallback, Pl = c.unstable_cancelCallback, Fs = c.unstable_shouldYield, Hs = c.unstable_requestPaint, pn = c.unstable_now, Bs = c.unstable_getCurrentPriorityLevel, Ta = c.unstable_ImmediatePriority, Ct = c.unstable_UserBlockingPriority, Ya = c.unstable_NormalPriority, ia = c.unstable_LowPriority, so = c.unstable_IdlePriority, gi = null, vr = null;
  function Ko(n) {
    if (vr && typeof vr.onCommitFiberRoot == "function")
      try {
        vr.onCommitFiberRoot(gi, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var ar = Math.clz32 ? Math.clz32 : Hu, Xo = Math.log, qo = Math.LN2;
  function Hu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Xo(n) / qo | 0) | 0;
  }
  var Zo = 64, zi = 4194304;
  function Ir(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Qn(n, r) {
    var o = n.pendingLanes;
    if (o === 0)
      return 0;
    var s = 0, v = n.suspendedLanes, y = n.pingedLanes, R = o & 268435455;
    if (R !== 0) {
      var N = R & ~v;
      N !== 0 ? s = Ir(N) : (y &= R, y !== 0 && (s = Ir(y)));
    } else
      R = o & ~v, R !== 0 ? s = Ir(R) : y !== 0 && (s = Ir(y));
    if (s === 0)
      return 0;
    if (r !== 0 && r !== s && !(r & v) && (v = s & -s, y = r & -r, v >= y || v === 16 && (y & 4194240) !== 0))
      return r;
    if (s & 4 && (s |= o & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= s; 0 < r; )
        o = 31 - ar(r), v = 1 << o, s |= n[o], r &= ~v;
    return s;
  }
  function Oa(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Wa(n, r) {
    for (var o = n.suspendedLanes, s = n.pingedLanes, v = n.expirationTimes, y = n.pendingLanes; 0 < y; ) {
      var R = 31 - ar(y), N = 1 << R, k = v[R];
      k === -1 ? (!(N & o) || N & s) && (v[R] = Oa(N, r)) : k <= r && (n.expiredLanes |= N), y &= ~N;
    }
  }
  function xa(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Jo() {
    var n = Zo;
    return Zo <<= 1, !(Zo & 4194240) && (Zo = 64), n;
  }
  function co(n) {
    for (var r = [], o = 0; 31 > o; o++)
      r.push(n);
    return r;
  }
  function _i(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - ar(r), n[r] = o;
  }
  function Is(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var s = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var v = 31 - ar(o), y = 1 << v;
      r[v] = 0, s[v] = -1, n[v] = -1, o &= ~y;
    }
  }
  function $r(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var s = 31 - ar(o), v = 1 << s;
      v & r | n[s] & r && (n[s] |= r), o &= ~v;
    }
  }
  var zt = 0;
  function fo(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Ga, eu, Rt, ji, po, lt = !1, vo = [], vn = null, kr = null, ir = null, bi = /* @__PURE__ */ new Map(), mn = /* @__PURE__ */ new Map(), Wt = [], Bu = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function hr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        vn = null;
        break;
      case "dragenter":
      case "dragleave":
        kr = null;
        break;
      case "mouseover":
      case "mouseout":
        ir = null;
        break;
      case "pointerover":
      case "pointerout":
        bi.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        mn.delete(r.pointerId);
    }
  }
  function Hn(n, r, o, s, v, y) {
    return n === null || n.nativeEvent !== y ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: s, nativeEvent: y, targetContainers: [v] }, r !== null && (r = nc(r), r !== null && eu(r)), n) : (n.eventSystemFlags |= s, r = n.targetContainers, v !== null && r.indexOf(v) === -1 && r.push(v), n);
  }
  function Qa(n, r, o, s, v) {
    switch (r) {
      case "focusin":
        return vn = Hn(vn, n, r, o, s, v), !0;
      case "dragenter":
        return kr = Hn(kr, n, r, o, s, v), !0;
      case "mouseover":
        return ir = Hn(ir, n, r, o, s, v), !0;
      case "pointerover":
        var y = v.pointerId;
        return bi.set(y, Hn(bi.get(y) || null, n, r, o, s, v)), !0;
      case "gotpointercapture":
        return y = v.pointerId, mn.set(y, Hn(mn.get(y) || null, n, r, o, s, v)), !0;
    }
    return !1;
  }
  function Fl(n) {
    var r = Ja(n.target);
    if (r !== null) {
      var o = aa(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = lo(o), r !== null) {
            n.blockedOn = r, po(n.priority, function() {
              Rt(o);
            });
            return;
          }
        } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Ka(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = tu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var s = new o.constructor(o.type, o);
        Nr = s, o.target.dispatchEvent(s), Nr = null;
      } else
        return r = nc(o), r !== null && eu(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function Da(n, r, o) {
    Ka(n) && o.delete(r);
  }
  function Hl() {
    lt = !1, vn !== null && Ka(vn) && (vn = null), kr !== null && Ka(kr) && (kr = null), ir !== null && Ka(ir) && (ir = null), bi.forEach(Da), mn.forEach(Da);
  }
  function Kn(n, r) {
    n.blockedOn === r && (n.blockedOn = null, lt || (lt = !0, c.unstable_scheduleCallback(c.unstable_NormalPriority, Hl)));
  }
  function Si(n) {
    function r(v) {
      return Kn(v, n);
    }
    if (0 < vo.length) {
      Kn(vo[0], n);
      for (var o = 1; o < vo.length; o++) {
        var s = vo[o];
        s.blockedOn === n && (s.blockedOn = null);
      }
    }
    for (vn !== null && Kn(vn, n), kr !== null && Kn(kr, n), ir !== null && Kn(ir, n), bi.forEach(r), mn.forEach(r), o = 0; o < Wt.length; o++)
      s = Wt[o], s.blockedOn === n && (s.blockedOn = null);
    for (; 0 < Wt.length && (o = Wt[0], o.blockedOn === null); )
      Fl(o), o.blockedOn === null && Wt.shift();
  }
  var Vi = ye.ReactCurrentBatchConfig, mr = !0;
  function Pi(n, r, o, s) {
    var v = zt, y = Vi.transition;
    Vi.transition = null;
    try {
      zt = 1, qa(n, r, o, s);
    } finally {
      zt = v, Vi.transition = y;
    }
  }
  function Xa(n, r, o, s) {
    var v = zt, y = Vi.transition;
    Vi.transition = null;
    try {
      zt = 4, qa(n, r, o, s);
    } finally {
      zt = v, Vi.transition = y;
    }
  }
  function qa(n, r, o, s) {
    if (mr) {
      var v = tu(n, r, o, s);
      if (v === null)
        af(n, r, s, ho, o), hr(n, s);
      else if (Qa(v, n, r, o, s))
        s.stopPropagation();
      else if (hr(n, s), r & 4 && -1 < Bu.indexOf(n)) {
        for (; v !== null; ) {
          var y = nc(v);
          if (y !== null && Ga(y), y = tu(n, r, o, s), y === null && af(n, r, s, ho, o), y === v)
            break;
          v = y;
        }
        v !== null && s.stopPropagation();
      } else
        af(n, r, s, null, o);
    }
  }
  var ho = null;
  function tu(n, r, o, s) {
    if (ho = null, n = an(s), n = Ja(n), n !== null)
      if (r = aa(n), r === null)
        n = null;
      else if (o = r.tag, o === 13) {
        if (n = lo(r), n !== null)
          return n;
        n = null;
      } else if (o === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return ho = n, null;
  }
  function Iu(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Bs()) {
          case Ta:
            return 1;
          case Ct:
            return 4;
          case Ya:
          case ia:
            return 16;
          case so:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Na = null, d = null, S = null;
  function O() {
    if (S)
      return S;
    var n, r = d, o = r.length, s, v = "value" in Na ? Na.value : Na.textContent, y = v.length;
    for (n = 0; n < o && r[n] === v[n]; n++)
      ;
    var R = o - n;
    for (s = 1; s <= R && r[o - s] === v[y - s]; s++)
      ;
    return S = v.slice(n, 1 < s ? 1 - s : void 0);
  }
  function D(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function V() {
    return !0;
  }
  function oe() {
    return !1;
  }
  function G(n) {
    function r(o, s, v, y, R) {
      this._reactName = o, this._targetInst = v, this.type = s, this.nativeEvent = y, this.target = R, this.currentTarget = null;
      for (var N in n)
        n.hasOwnProperty(N) && (o = n[N], this[N] = o ? o(y) : y[N]);
      return this.isDefaultPrevented = (y.defaultPrevented != null ? y.defaultPrevented : y.returnValue === !1) ? V : oe, this.isPropagationStopped = oe, this;
    }
    return w(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = V);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = V);
    }, persist: function() {
    }, isPersistent: V }), r;
  }
  var se = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ee = G(se), Be = w({}, se, { view: 0, detail: 0 }), nt = G(Be), qe, at, ft, Ze = w({}, Be, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Yd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== ft && (ft && n.type === "mousemove" ? (qe = n.screenX - ft.screenX, at = n.screenY - ft.screenY) : at = qe = 0, ft = n), qe);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : at;
  } }), oa = G(Ze), Fi = w({}, Ze, { dataTransfer: 0 }), nu = G(Fi), $s = w({}, Be, { relatedTarget: 0 }), ua = G($s), $u = w({}, se, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ru = G($u), Ys = w({}, se, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Dg = G(Ys), Ng = w({}, se, { data: 0 }), Id = G(Ng), $d = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, hh = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, mh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function yh(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = mh[n]) ? !!r[n] : !1;
  }
  function Yd() {
    return yh;
  }
  var mo = w({}, Be, { key: function(n) {
    if (n.key) {
      var r = $d[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = D(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? hh[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Yd, charCode: function(n) {
    return n.type === "keypress" ? D(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? D(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), kg = G(mo), Wd = w({}, Ze, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Xc = G(Wd), Gd = w({}, Be, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Yd }), Ag = G(Gd), qc = w({}, se, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), gh = G(qc), la = w({}, Ze, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), yo = G(la), Bn = [9, 13, 27, 32], Ei = A && "CompositionEvent" in window, Yu = null;
  A && "documentMode" in document && (Yu = document.documentMode);
  var Zc = A && "TextEvent" in window && !Yu, _h = A && (!Ei || Yu && 8 < Yu && 11 >= Yu), Bl = String.fromCharCode(32), bh = !1;
  function Sh(n, r) {
    switch (n) {
      case "keyup":
        return Bn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Jc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Il = !1;
  function Lg(n, r) {
    switch (n) {
      case "compositionend":
        return Jc(r);
      case "keypress":
        return r.which !== 32 ? null : (bh = !0, Bl);
      case "textInput":
        return n = r.data, n === Bl && bh ? null : n;
      default:
        return null;
    }
  }
  function Mg(n, r) {
    if (Il)
      return n === "compositionend" || !Ei && Sh(n, r) ? (n = O(), S = d = Na = null, Il = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return _h && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Eh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Ch(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Eh[n.type] : r === "textarea";
  }
  function Rh(n, r, o, s) {
    ra(s), r = Js(r, "onChange"), 0 < r.length && (o = new Ee("onChange", "change", null, o, s), n.push({ event: o, listeners: r }));
  }
  var Ws = null, $l = null;
  function Yl(n) {
    rf(n, 0);
  }
  function Wl(n) {
    var r = Ql(n);
    if (Hr(r))
      return n;
  }
  function wh(n, r) {
    if (n === "change")
      return r;
  }
  var Qd = !1;
  if (A) {
    var Kd;
    if (A) {
      var Xd = "oninput" in document;
      if (!Xd) {
        var Th = document.createElement("div");
        Th.setAttribute("oninput", "return;"), Xd = typeof Th.oninput == "function";
      }
      Kd = Xd;
    } else
      Kd = !1;
    Qd = Kd && (!document.documentMode || 9 < document.documentMode);
  }
  function Oh() {
    Ws && (Ws.detachEvent("onpropertychange", xh), $l = Ws = null);
  }
  function xh(n) {
    if (n.propertyName === "value" && Wl($l)) {
      var r = [];
      Rh(r, $l, n, an(n)), Vu(Yl, r);
    }
  }
  function Ug(n, r, o) {
    n === "focusin" ? (Oh(), Ws = r, $l = o, Ws.attachEvent("onpropertychange", xh)) : n === "focusout" && Oh();
  }
  function zg(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Wl($l);
  }
  function jg(n, r) {
    if (n === "click")
      return Wl(r);
  }
  function Dh(n, r) {
    if (n === "input" || n === "change")
      return Wl(r);
  }
  function Vg(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Za = typeof Object.is == "function" ? Object.is : Vg;
  function Gs(n, r) {
    if (Za(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var o = Object.keys(n), s = Object.keys(r);
    if (o.length !== s.length)
      return !1;
    for (s = 0; s < o.length; s++) {
      var v = o[s];
      if (!L.call(r, v) || !Za(n[v], r[v]))
        return !1;
    }
    return !0;
  }
  function Nh(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function kh(n, r) {
    var o = Nh(n);
    n = 0;
    for (var s; o; ) {
      if (o.nodeType === 3) {
        if (s = n + o.textContent.length, n <= r && s >= r)
          return { node: o, offset: r - n };
        n = s;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = Nh(o);
    }
  }
  function Ah(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Ah(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function ef() {
    for (var n = window, r = nn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o)
        n = r.contentWindow;
      else
        break;
      r = nn(n.document);
    }
    return r;
  }
  function go(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function tf(n) {
    var r = ef(), o = n.focusedElem, s = n.selectionRange;
    if (r !== o && o && o.ownerDocument && Ah(o.ownerDocument.documentElement, o)) {
      if (s !== null && go(o)) {
        if (r = s.start, n = s.end, n === void 0 && (n = r), "selectionStart" in o)
          o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var v = o.textContent.length, y = Math.min(s.start, v);
          s = s.end === void 0 ? y : Math.min(s.end, v), !n.extend && y > s && (v = s, s = y, y = v), v = kh(o, y);
          var R = kh(
            o,
            s
          );
          v && R && (n.rangeCount !== 1 || n.anchorNode !== v.node || n.anchorOffset !== v.offset || n.focusNode !== R.node || n.focusOffset !== R.offset) && (r = r.createRange(), r.setStart(v.node, v.offset), n.removeAllRanges(), y > s ? (n.addRange(r), n.extend(R.node, R.offset)) : (r.setEnd(R.node, R.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++)
        n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Lh = A && "documentMode" in document && 11 >= document.documentMode, Ci = null, qd = null, Qs = null, Zd = !1;
  function Mh(n, r, o) {
    var s = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Zd || Ci == null || Ci !== nn(s) || (s = Ci, "selectionStart" in s && go(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), Qs && Gs(Qs, s) || (Qs = s, s = Js(qd, "onSelect"), 0 < s.length && (r = new Ee("onSelect", "select", null, r, o), n.push({ event: r, listeners: s }), r.target = Ci)));
  }
  function nf(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var Wu = { animationend: nf("Animation", "AnimationEnd"), animationiteration: nf("Animation", "AnimationIteration"), animationstart: nf("Animation", "AnimationStart"), transitionend: nf("Transition", "TransitionEnd") }, Jd = {}, ep = {};
  A && (ep = document.createElement("div").style, "AnimationEvent" in window || (delete Wu.animationend.animation, delete Wu.animationiteration.animation, delete Wu.animationstart.animation), "TransitionEvent" in window || delete Wu.transitionend.transition);
  function or(n) {
    if (Jd[n])
      return Jd[n];
    if (!Wu[n])
      return n;
    var r = Wu[n], o;
    for (o in r)
      if (r.hasOwnProperty(o) && o in ep)
        return Jd[n] = r[o];
    return n;
  }
  var tp = or("animationend"), Uh = or("animationiteration"), zh = or("animationstart"), jh = or("transitionend"), Vh = /* @__PURE__ */ new Map(), Ph = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function _o(n, r) {
    Vh.set(n, r), C(r, [n]);
  }
  for (var Ks = 0; Ks < Ph.length; Ks++) {
    var Gu = Ph[Ks], Pg = Gu.toLowerCase(), Xs = Gu[0].toUpperCase() + Gu.slice(1);
    _o(Pg, "on" + Xs);
  }
  _o(tp, "onAnimationEnd"), _o(Uh, "onAnimationIteration"), _o(zh, "onAnimationStart"), _o("dblclick", "onDoubleClick"), _o("focusin", "onFocus"), _o("focusout", "onBlur"), _o(jh, "onTransitionEnd"), _("onMouseEnter", ["mouseout", "mouseover"]), _("onMouseLeave", ["mouseout", "mouseover"]), _("onPointerEnter", ["pointerout", "pointerover"]), _("onPointerLeave", ["pointerout", "pointerover"]), C("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), C("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), C("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), C("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), C("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), C("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var qs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Fg = new Set("cancel close invalid load scroll toggle".split(" ").concat(qs));
  function Fh(n, r, o) {
    var s = n.type || "unknown-event";
    n.currentTarget = o, At(s, r, void 0, n), n.currentTarget = null;
  }
  function rf(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var s = n[o], v = s.event;
      s = s.listeners;
      e: {
        var y = void 0;
        if (r)
          for (var R = s.length - 1; 0 <= R; R--) {
            var N = s[R], k = N.instance, W = N.currentTarget;
            if (N = N.listener, k !== y && v.isPropagationStopped())
              break e;
            Fh(v, N, W), y = k;
          }
        else
          for (R = 0; R < s.length; R++) {
            if (N = s[R], k = N.instance, W = N.currentTarget, N = N.listener, k !== y && v.isPropagationStopped())
              break e;
            Fh(v, N, W), y = k;
          }
      }
    }
    if (Mi)
      throw n = yi, Mi = !1, yi = null, n;
  }
  function ln(n, r) {
    var o = r[lp];
    o === void 0 && (o = r[lp] = /* @__PURE__ */ new Set());
    var s = n + "__bubble";
    o.has(s) || (Hh(r, n, 2, !1), o.add(s));
  }
  function au(n, r, o) {
    var s = 0;
    r && (s |= 4), Hh(o, n, s, r);
  }
  var bo = "_reactListening" + Math.random().toString(36).slice(2);
  function Gl(n) {
    if (!n[bo]) {
      n[bo] = !0, h.forEach(function(o) {
        o !== "selectionchange" && (Fg.has(o) || au(o, !1, n), au(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[bo] || (r[bo] = !0, au("selectionchange", !1, r));
    }
  }
  function Hh(n, r, o, s) {
    switch (Iu(r)) {
      case 1:
        var v = Pi;
        break;
      case 4:
        v = Xa;
        break;
      default:
        v = qa;
    }
    o = v.bind(null, r, o, n), v = void 0, !$a || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (v = !0), s ? v !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: v }) : n.addEventListener(r, o, !0) : v !== void 0 ? n.addEventListener(r, o, { passive: v }) : n.addEventListener(r, o, !1);
  }
  function af(n, r, o, s, v) {
    var y = s;
    if (!(r & 1) && !(r & 2) && s !== null)
      e:
        for (; ; ) {
          if (s === null)
            return;
          var R = s.tag;
          if (R === 3 || R === 4) {
            var N = s.stateNode.containerInfo;
            if (N === v || N.nodeType === 8 && N.parentNode === v)
              break;
            if (R === 4)
              for (R = s.return; R !== null; ) {
                var k = R.tag;
                if ((k === 3 || k === 4) && (k = R.stateNode.containerInfo, k === v || k.nodeType === 8 && k.parentNode === v))
                  return;
                R = R.return;
              }
            for (; N !== null; ) {
              if (R = Ja(N), R === null)
                return;
              if (k = R.tag, k === 5 || k === 6) {
                s = y = R;
                continue e;
              }
              N = N.parentNode;
            }
          }
          s = s.return;
        }
    Vu(function() {
      var W = y, ue = an(o), ce = [];
      e: {
        var ae = Vh.get(n);
        if (ae !== void 0) {
          var we = Ee, Ue = n;
          switch (n) {
            case "keypress":
              if (D(o) === 0)
                break e;
            case "keydown":
            case "keyup":
              we = kg;
              break;
            case "focusin":
              Ue = "focus", we = ua;
              break;
            case "focusout":
              Ue = "blur", we = ua;
              break;
            case "beforeblur":
            case "afterblur":
              we = ua;
              break;
            case "click":
              if (o.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              we = oa;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              we = nu;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              we = Ag;
              break;
            case tp:
            case Uh:
            case zh:
              we = ru;
              break;
            case jh:
              we = gh;
              break;
            case "scroll":
              we = nt;
              break;
            case "wheel":
              we = yo;
              break;
            case "copy":
            case "cut":
            case "paste":
              we = Dg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              we = Xc;
          }
          var Ie = (r & 4) !== 0, Vn = !Ie && n === "scroll", P = Ie ? ae !== null ? ae + "Capture" : null : ae;
          Ie = [];
          for (var U = W, I; U !== null; ) {
            I = U;
            var he = I.stateNode;
            if (I.tag === 5 && he !== null && (I = he, P !== null && (he = pr(U, P), he != null && Ie.push(Zs(U, he, I)))), Vn)
              break;
            U = U.return;
          }
          0 < Ie.length && (ae = new we(ae, Ue, null, o, ue), ce.push({ event: ae, listeners: Ie }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ae = n === "mouseover" || n === "pointerover", we = n === "mouseout" || n === "pointerout", ae && o !== Nr && (Ue = o.relatedTarget || o.fromElement) && (Ja(Ue) || Ue[So]))
            break e;
          if ((we || ae) && (ae = ue.window === ue ? ue : (ae = ue.ownerDocument) ? ae.defaultView || ae.parentWindow : window, we ? (Ue = o.relatedTarget || o.toElement, we = W, Ue = Ue ? Ja(Ue) : null, Ue !== null && (Vn = aa(Ue), Ue !== Vn || Ue.tag !== 5 && Ue.tag !== 6) && (Ue = null)) : (we = null, Ue = W), we !== Ue)) {
            if (Ie = oa, he = "onMouseLeave", P = "onMouseEnter", U = "mouse", (n === "pointerout" || n === "pointerover") && (Ie = Xc, he = "onPointerLeave", P = "onPointerEnter", U = "pointer"), Vn = we == null ? ae : Ql(we), I = Ue == null ? ae : Ql(Ue), ae = new Ie(he, U + "leave", we, o, ue), ae.target = Vn, ae.relatedTarget = I, he = null, Ja(ue) === W && (Ie = new Ie(P, U + "enter", Ue, o, ue), Ie.target = I, Ie.relatedTarget = Vn, he = Ie), Vn = he, we && Ue)
              t: {
                for (Ie = we, P = Ue, U = 0, I = Ie; I; I = Qu(I))
                  U++;
                for (I = 0, he = P; he; he = Qu(he))
                  I++;
                for (; 0 < U - I; )
                  Ie = Qu(Ie), U--;
                for (; 0 < I - U; )
                  P = Qu(P), I--;
                for (; U--; ) {
                  if (Ie === P || P !== null && Ie === P.alternate)
                    break t;
                  Ie = Qu(Ie), P = Qu(P);
                }
                Ie = null;
              }
            else
              Ie = null;
            we !== null && np(ce, ae, we, Ie, !1), Ue !== null && Vn !== null && np(ce, Vn, Ue, Ie, !0);
          }
        }
        e: {
          if (ae = W ? Ql(W) : window, we = ae.nodeName && ae.nodeName.toLowerCase(), we === "select" || we === "input" && ae.type === "file")
            var We = wh;
          else if (Ch(ae))
            if (Qd)
              We = Dh;
            else {
              We = zg;
              var ze = Ug;
            }
          else
            (we = ae.nodeName) && we.toLowerCase() === "input" && (ae.type === "checkbox" || ae.type === "radio") && (We = jg);
          if (We && (We = We(n, W))) {
            Rh(ce, We, o, ue);
            break e;
          }
          ze && ze(n, ae, W), n === "focusout" && (ze = ae._wrapperState) && ze.controlled && ae.type === "number" && rn(ae, "number", ae.value);
        }
        switch (ze = W ? Ql(W) : window, n) {
          case "focusin":
            (Ch(ze) || ze.contentEditable === "true") && (Ci = ze, qd = W, Qs = null);
            break;
          case "focusout":
            Qs = qd = Ci = null;
            break;
          case "mousedown":
            Zd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Zd = !1, Mh(ce, o, ue);
            break;
          case "selectionchange":
            if (Lh)
              break;
          case "keydown":
          case "keyup":
            Mh(ce, o, ue);
        }
        var Qe;
        if (Ei)
          e: {
            switch (n) {
              case "compositionstart":
                var ct = "onCompositionStart";
                break e;
              case "compositionend":
                ct = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ct = "onCompositionUpdate";
                break e;
            }
            ct = void 0;
          }
        else
          Il ? Sh(n, o) && (ct = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (ct = "onCompositionStart");
        ct && (_h && o.locale !== "ko" && (Il || ct !== "onCompositionStart" ? ct === "onCompositionEnd" && Il && (Qe = O()) : (Na = ue, d = "value" in Na ? Na.value : Na.textContent, Il = !0)), ze = Js(W, ct), 0 < ze.length && (ct = new Id(ct, n, null, o, ue), ce.push({ event: ct, listeners: ze }), Qe ? ct.data = Qe : (Qe = Jc(o), Qe !== null && (ct.data = Qe)))), (Qe = Zc ? Lg(n, o) : Mg(n, o)) && (W = Js(W, "onBeforeInput"), 0 < W.length && (ue = new Id("onBeforeInput", "beforeinput", null, o, ue), ce.push({ event: ue, listeners: W }), ue.data = Qe));
      }
      rf(ce, r);
    });
  }
  function Zs(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function Js(n, r) {
    for (var o = r + "Capture", s = []; n !== null; ) {
      var v = n, y = v.stateNode;
      v.tag === 5 && y !== null && (v = y, y = pr(n, o), y != null && s.unshift(Zs(n, y, v)), y = pr(n, r), y != null && s.push(Zs(n, y, v))), n = n.return;
    }
    return s;
  }
  function Qu(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function np(n, r, o, s, v) {
    for (var y = r._reactName, R = []; o !== null && o !== s; ) {
      var N = o, k = N.alternate, W = N.stateNode;
      if (k !== null && k === s)
        break;
      N.tag === 5 && W !== null && (N = W, v ? (k = pr(o, y), k != null && R.unshift(Zs(o, k, N))) : v || (k = pr(o, y), k != null && R.push(Zs(o, k, N)))), o = o.return;
    }
    R.length !== 0 && n.push({ event: r, listeners: R });
  }
  var rp = /\r\n?/g, Hg = /\u0000|\uFFFD/g;
  function ap(n) {
    return (typeof n == "string" ? n : "" + n).replace(rp, `
`).replace(Hg, "");
  }
  function of(n, r, o) {
    if (r = ap(r), ap(n) !== r && o)
      throw Error(p(425));
  }
  function uf() {
  }
  var ip = null, Ku = null;
  function ec(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Xu = typeof setTimeout == "function" ? setTimeout : void 0, Bh = typeof clearTimeout == "function" ? clearTimeout : void 0, op = typeof Promise == "function" ? Promise : void 0, up = typeof queueMicrotask == "function" ? queueMicrotask : typeof op < "u" ? function(n) {
    return op.resolve(null).then(n).catch(Bg);
  } : Xu;
  function Bg(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function iu(n, r) {
    var o = r, s = 0;
    do {
      var v = o.nextSibling;
      if (n.removeChild(o), v && v.nodeType === 8)
        if (o = v.data, o === "/$") {
          if (s === 0) {
            n.removeChild(v), Si(r);
            return;
          }
          s--;
        } else
          o !== "$" && o !== "$?" && o !== "$!" || s++;
      o = v;
    } while (o);
    Si(r);
  }
  function Ri(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function tc(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          o === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var ou = Math.random().toString(36).slice(2), Hi = "__reactFiber$" + ou, qu = "__reactProps$" + ou, So = "__reactContainer$" + ou, lp = "__reactEvents$" + ou, Ig = "__reactListeners$" + ou, sp = "__reactHandles$" + ou;
  function Ja(n) {
    var r = n[Hi];
    if (r)
      return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[So] || o[Hi]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null)
          for (n = tc(n); n !== null; ) {
            if (o = n[Hi])
              return o;
            n = tc(n);
          }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function nc(n) {
    return n = n[Hi] || n[So], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Ql(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(p(33));
  }
  function Xe(n) {
    return n[qu] || null;
  }
  var uu = [], yn = -1;
  function gt(n) {
    return { current: n };
  }
  function Xt(n) {
    0 > yn || (n.current = uu[yn], uu[yn] = null, yn--);
  }
  function Zt(n, r) {
    yn++, uu[yn] = n.current, n.current = r;
  }
  var Bi = {}, st = gt(Bi), Ln = gt(!1), sa = Bi;
  function ei(n, r) {
    var o = n.type.contextTypes;
    if (!o)
      return Bi;
    var s = n.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === r)
      return s.__reactInternalMemoizedMaskedChildContext;
    var v = {}, y;
    for (y in o)
      v[y] = r[y];
    return s && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = v), v;
  }
  function Rn(n) {
    return n = n.childContextTypes, n != null;
  }
  function ti() {
    Xt(Ln), Xt(st);
  }
  function lu(n, r, o) {
    if (st.current !== Bi)
      throw Error(p(168));
    Zt(st, r), Zt(Ln, o);
  }
  function rc(n, r, o) {
    var s = n.stateNode;
    if (r = r.childContextTypes, typeof s.getChildContext != "function")
      return o;
    s = s.getChildContext();
    for (var v in s)
      if (!(v in r))
        throw Error(p(108, Ye(n) || "Unknown", v));
    return w({}, o, s);
  }
  function lf(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Bi, sa = st.current, Zt(st, n), Zt(Ln, Ln.current), !0;
  }
  function Ih(n, r, o) {
    var s = n.stateNode;
    if (!s)
      throw Error(p(169));
    o ? (n = rc(n, r, sa), s.__reactInternalMemoizedMergedChildContext = n, Xt(Ln), Xt(st), Zt(st, n)) : Xt(Ln), Zt(Ln, o);
  }
  var ka = null, ur = !1, ac = !1;
  function cp(n) {
    ka === null ? ka = [n] : ka.push(n);
  }
  function fp(n) {
    ur = !0, cp(n);
  }
  function ca() {
    if (!ac && ka !== null) {
      ac = !0;
      var n = 0, r = zt;
      try {
        var o = ka;
        for (zt = 1; n < o.length; n++) {
          var s = o[n];
          do
            s = s(!0);
          while (s !== null);
        }
        ka = null, ur = !1;
      } catch (v) {
        throw ka !== null && (ka = ka.slice(n + 1)), Fu(Ta, ca), v;
      } finally {
        zt = r, ac = !1;
      }
    }
    return null;
  }
  var su = [], fa = 0, Zu = null, Kl = 0, da = [], Ar = 0, ni = null, yr = 1, Eo = "";
  function Aa(n, r) {
    su[fa++] = Kl, su[fa++] = Zu, Zu = n, Kl = r;
  }
  function dp(n, r, o) {
    da[Ar++] = yr, da[Ar++] = Eo, da[Ar++] = ni, ni = n;
    var s = yr;
    n = Eo;
    var v = 32 - ar(s) - 1;
    s &= ~(1 << v), o += 1;
    var y = 32 - ar(r) + v;
    if (30 < y) {
      var R = v - v % 5;
      y = (s & (1 << R) - 1).toString(32), s >>= R, v -= R, yr = 1 << 32 - ar(r) + v | o << v | s, Eo = y + n;
    } else
      yr = 1 << y | o << v | s, Eo = n;
  }
  function sf(n) {
    n.return !== null && (Aa(n, 1), dp(n, 1, 0));
  }
  function pp(n) {
    for (; n === Zu; )
      Zu = su[--fa], su[fa] = null, Kl = su[--fa], su[fa] = null;
    for (; n === ni; )
      ni = da[--Ar], da[Ar] = null, Eo = da[--Ar], da[Ar] = null, yr = da[--Ar], da[Ar] = null;
  }
  var La = null, pa = null, gn = !1, ri = null;
  function vp(n, r) {
    var o = si(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function $h(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, La = n, pa = Ri(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, La = n, pa = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = ni !== null ? { id: yr, overflow: Eo } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = si(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, La = n, pa = null, !0) : !1;
      default:
        return !1;
    }
  }
  function cf(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function ff(n) {
    if (gn) {
      var r = pa;
      if (r) {
        var o = r;
        if (!$h(n, r)) {
          if (cf(n))
            throw Error(p(418));
          r = Ri(o.nextSibling);
          var s = La;
          r && $h(n, r) ? vp(s, o) : (n.flags = n.flags & -4097 | 2, gn = !1, La = n);
        }
      } else {
        if (cf(n))
          throw Error(p(418));
        n.flags = n.flags & -4097 | 2, gn = !1, La = n;
      }
    }
  }
  function Yh(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    La = n;
  }
  function df(n) {
    if (n !== La)
      return !1;
    if (!gn)
      return Yh(n), gn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !ec(n.type, n.memoizedProps)), r && (r = pa)) {
      if (cf(n))
        throw Wh(), Error(p(418));
      for (; r; )
        vp(n, r), r = Ri(r.nextSibling);
    }
    if (Yh(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(p(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                pa = Ri(n.nextSibling);
                break e;
              }
              r--;
            } else
              o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        pa = null;
      }
    } else
      pa = La ? Ri(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Wh() {
    for (var n = pa; n; )
      n = Ri(n.nextSibling);
  }
  function xn() {
    pa = La = null, gn = !1;
  }
  function hp(n) {
    ri === null ? ri = [n] : ri.push(n);
  }
  var pf = ye.ReactCurrentBatchConfig;
  function Ma(n, r) {
    if (n && n.defaultProps) {
      r = w({}, r), n = n.defaultProps;
      for (var o in n)
        r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  var Ii = gt(null), vf = null, cu = null, mp = null;
  function yp() {
    mp = cu = vf = null;
  }
  function fu(n) {
    var r = Ii.current;
    Xt(Ii), n._currentValue = r;
  }
  function lr(n, r, o) {
    for (; n !== null; ) {
      var s = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, s !== null && (s.childLanes |= r)) : s !== null && (s.childLanes & r) !== r && (s.childLanes |= r), n === o)
        break;
      n = n.return;
    }
  }
  function ge(n, r) {
    vf = n, mp = cu = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (In = !0), n.firstContext = null);
  }
  function jn(n) {
    var r = n._currentValue;
    if (mp !== n)
      if (n = { context: n, memoizedValue: r, next: null }, cu === null) {
        if (vf === null)
          throw Error(p(308));
        cu = n, vf.dependencies = { lanes: 0, firstContext: n };
      } else
        cu = cu.next = n;
    return r;
  }
  var gr = null;
  function gp(n) {
    gr === null ? gr = [n] : gr.push(n);
  }
  function Gh(n, r, o, s) {
    var v = r.interleaved;
    return v === null ? (o.next = o, gp(r)) : (o.next = v.next, v.next = o), r.interleaved = o, Co(n, s);
  }
  function Co(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; )
      n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var du = !1;
  function _p(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Xn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Ro(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function pu(n, r, o) {
    var s = n.updateQueue;
    if (s === null)
      return null;
    if (s = s.shared, Lt & 2) {
      var v = s.pending;
      return v === null ? r.next = r : (r.next = v.next, v.next = r), s.pending = r, Co(n, o);
    }
    return v = s.interleaved, v === null ? (r.next = r, gp(s)) : (r.next = v.next, v.next = r), s.interleaved = r, Co(n, o);
  }
  function hf(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var s = r.lanes;
      s &= n.pendingLanes, o |= s, r.lanes = o, $r(n, o);
    }
  }
  function bp(n, r) {
    var o = n.updateQueue, s = n.alternate;
    if (s !== null && (s = s.updateQueue, o === s)) {
      var v = null, y = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var R = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          y === null ? v = y = R : y = y.next = R, o = o.next;
        } while (o !== null);
        y === null ? v = y = r : y = y.next = r;
      } else
        v = y = r;
      o = { baseState: s.baseState, firstBaseUpdate: v, lastBaseUpdate: y, shared: s.shared, effects: s.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function vu(n, r, o, s) {
    var v = n.updateQueue;
    du = !1;
    var y = v.firstBaseUpdate, R = v.lastBaseUpdate, N = v.shared.pending;
    if (N !== null) {
      v.shared.pending = null;
      var k = N, W = k.next;
      k.next = null, R === null ? y = W : R.next = W, R = k;
      var ue = n.alternate;
      ue !== null && (ue = ue.updateQueue, N = ue.lastBaseUpdate, N !== R && (N === null ? ue.firstBaseUpdate = W : N.next = W, ue.lastBaseUpdate = k));
    }
    if (y !== null) {
      var ce = v.baseState;
      R = 0, ue = W = k = null, N = y;
      do {
        var ae = N.lane, we = N.eventTime;
        if ((s & ae) === ae) {
          ue !== null && (ue = ue.next = {
            eventTime: we,
            lane: 0,
            tag: N.tag,
            payload: N.payload,
            callback: N.callback,
            next: null
          });
          e: {
            var Ue = n, Ie = N;
            switch (ae = r, we = o, Ie.tag) {
              case 1:
                if (Ue = Ie.payload, typeof Ue == "function") {
                  ce = Ue.call(we, ce, ae);
                  break e;
                }
                ce = Ue;
                break e;
              case 3:
                Ue.flags = Ue.flags & -65537 | 128;
              case 0:
                if (Ue = Ie.payload, ae = typeof Ue == "function" ? Ue.call(we, ce, ae) : Ue, ae == null)
                  break e;
                ce = w({}, ce, ae);
                break e;
              case 2:
                du = !0;
            }
          }
          N.callback !== null && N.lane !== 0 && (n.flags |= 64, ae = v.effects, ae === null ? v.effects = [N] : ae.push(N));
        } else
          we = { eventTime: we, lane: ae, tag: N.tag, payload: N.payload, callback: N.callback, next: null }, ue === null ? (W = ue = we, k = ce) : ue = ue.next = we, R |= ae;
        if (N = N.next, N === null) {
          if (N = v.shared.pending, N === null)
            break;
          ae = N, N = ae.next, ae.next = null, v.lastBaseUpdate = ae, v.shared.pending = null;
        }
      } while (1);
      if (ue === null && (k = ce), v.baseState = k, v.firstBaseUpdate = W, v.lastBaseUpdate = ue, r = v.shared.interleaved, r !== null) {
        v = r;
        do
          R |= v.lane, v = v.next;
        while (v !== r);
      } else
        y === null && (v.shared.lanes = 0);
      xo |= R, n.lanes = R, n.memoizedState = ce;
    }
  }
  function Ju(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var s = n[r], v = s.callback;
        if (v !== null) {
          if (s.callback = null, s = o, typeof v != "function")
            throw Error(p(191, v));
          v.call(s);
        }
      }
  }
  var Qh = new l.Component().refs;
  function Sp(n, r, o, s) {
    r = n.memoizedState, o = o(s, r), o = o == null ? r : w({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var mf = { isMounted: function(n) {
    return (n = n._reactInternals) ? aa(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var s = zr(), v = $n(n), y = Ro(s, v);
    y.payload = r, o != null && (y.callback = o), r = pu(n, y, v), r !== null && (jr(r, n, v, s), hf(r, n, v));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var s = zr(), v = $n(n), y = Ro(s, v);
    y.tag = 1, y.payload = r, o != null && (y.callback = o), r = pu(n, y, v), r !== null && (jr(r, n, v, s), hf(r, n, v));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = zr(), s = $n(n), v = Ro(o, s);
    v.tag = 2, r != null && (v.callback = r), r = pu(n, v, s), r !== null && (jr(r, n, s, o), hf(r, n, s));
  } };
  function Kh(n, r, o, s, v, y, R) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(s, y, R) : r.prototype && r.prototype.isPureReactComponent ? !Gs(o, s) || !Gs(v, y) : !0;
  }
  function Xh(n, r, o) {
    var s = !1, v = Bi, y = r.contextType;
    return typeof y == "object" && y !== null ? y = jn(y) : (v = Rn(r) ? sa : st.current, s = r.contextTypes, y = (s = s != null) ? ei(n, v) : Bi), r = new r(o, y), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = mf, n.stateNode = r, r._reactInternals = n, s && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = v, n.__reactInternalMemoizedMaskedChildContext = y), r;
  }
  function qh(n, r, o, s) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, s), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, s), r.state !== n && mf.enqueueReplaceState(r, r.state, null);
  }
  function yf(n, r, o, s) {
    var v = n.stateNode;
    v.props = o, v.state = n.memoizedState, v.refs = Qh, _p(n);
    var y = r.contextType;
    typeof y == "object" && y !== null ? v.context = jn(y) : (y = Rn(r) ? sa : st.current, v.context = ei(n, y)), v.state = n.memoizedState, y = r.getDerivedStateFromProps, typeof y == "function" && (Sp(n, r, y, o), v.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof v.getSnapshotBeforeUpdate == "function" || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (r = v.state, typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount(), r !== v.state && mf.enqueueReplaceState(v, v.state, null), vu(n, o, v, s), v.state = n.memoizedState), typeof v.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Xl(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1)
            throw Error(p(309));
          var s = o.stateNode;
        }
        if (!s)
          throw Error(p(147, n));
        var v = s, y = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === y ? r.ref : (r = function(R) {
          var N = v.refs;
          N === Qh && (N = v.refs = {}), R === null ? delete N[y] : N[y] = R;
        }, r._stringRef = y, r);
      }
      if (typeof n != "string")
        throw Error(p(284));
      if (!o._owner)
        throw Error(p(290, n));
    }
    return n;
  }
  function gf(n, r) {
    throw n = Object.prototype.toString.call(r), Error(p(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Zh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Jh(n) {
    function r(P, U) {
      if (n) {
        var I = P.deletions;
        I === null ? (P.deletions = [U], P.flags |= 16) : I.push(U);
      }
    }
    function o(P, U) {
      if (!n)
        return null;
      for (; U !== null; )
        r(P, U), U = U.sibling;
      return null;
    }
    function s(P, U) {
      for (P = /* @__PURE__ */ new Map(); U !== null; )
        U.key !== null ? P.set(U.key, U) : P.set(U.index, U), U = U.sibling;
      return P;
    }
    function v(P, U) {
      return P = Eu(P, U), P.index = 0, P.sibling = null, P;
    }
    function y(P, U, I) {
      return P.index = I, n ? (I = P.alternate, I !== null ? (I = I.index, I < U ? (P.flags |= 2, U) : I) : (P.flags |= 2, U)) : (P.flags |= 1048576, U);
    }
    function R(P) {
      return n && P.alternate === null && (P.flags |= 2), P;
    }
    function N(P, U, I, he) {
      return U === null || U.tag !== 6 ? (U = Cc(I, P.mode, he), U.return = P, U) : (U = v(U, I), U.return = P, U);
    }
    function k(P, U, I, he) {
      var We = I.type;
      return We === Ce ? ue(P, U, I.props.children, he, I.key) : U !== null && (U.elementType === We || typeof We == "object" && We !== null && We.$$typeof === bt && Zh(We) === U.type) ? (he = v(U, I.props), he.ref = Xl(P, U, I), he.return = P, he) : (he = Xf(I.type, I.key, I.props, null, P.mode, he), he.ref = Xl(P, U, I), he.return = P, he);
    }
    function W(P, U, I, he) {
      return U === null || U.tag !== 4 || U.stateNode.containerInfo !== I.containerInfo || U.stateNode.implementation !== I.implementation ? (U = gl(I, P.mode, he), U.return = P, U) : (U = v(U, I.children || []), U.return = P, U);
    }
    function ue(P, U, I, he, We) {
      return U === null || U.tag !== 7 ? (U = yl(I, P.mode, he, We), U.return = P, U) : (U = v(U, I), U.return = P, U);
    }
    function ce(P, U, I) {
      if (typeof U == "string" && U !== "" || typeof U == "number")
        return U = Cc("" + U, P.mode, I), U.return = P, U;
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case fe:
            return I = Xf(U.type, U.key, U.props, null, P.mode, I), I.ref = Xl(P, null, U), I.return = P, I;
          case de:
            return U = gl(U, P.mode, I), U.return = P, U;
          case bt:
            var he = U._init;
            return ce(P, he(U._payload), I);
        }
        if (Ut(U) || Pe(U))
          return U = yl(U, P.mode, I, null), U.return = P, U;
        gf(P, U);
      }
      return null;
    }
    function ae(P, U, I, he) {
      var We = U !== null ? U.key : null;
      if (typeof I == "string" && I !== "" || typeof I == "number")
        return We !== null ? null : N(P, U, "" + I, he);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case fe:
            return I.key === We ? k(P, U, I, he) : null;
          case de:
            return I.key === We ? W(P, U, I, he) : null;
          case bt:
            return We = I._init, ae(
              P,
              U,
              We(I._payload),
              he
            );
        }
        if (Ut(I) || Pe(I))
          return We !== null ? null : ue(P, U, I, he, null);
        gf(P, I);
      }
      return null;
    }
    function we(P, U, I, he, We) {
      if (typeof he == "string" && he !== "" || typeof he == "number")
        return P = P.get(I) || null, N(U, P, "" + he, We);
      if (typeof he == "object" && he !== null) {
        switch (he.$$typeof) {
          case fe:
            return P = P.get(he.key === null ? I : he.key) || null, k(U, P, he, We);
          case de:
            return P = P.get(he.key === null ? I : he.key) || null, W(U, P, he, We);
          case bt:
            var ze = he._init;
            return we(P, U, I, ze(he._payload), We);
        }
        if (Ut(he) || Pe(he))
          return P = P.get(I) || null, ue(U, P, he, We, null);
        gf(U, he);
      }
      return null;
    }
    function Ue(P, U, I, he) {
      for (var We = null, ze = null, Qe = U, ct = U = 0, fr = null; Qe !== null && ct < I.length; ct++) {
        Qe.index > ct ? (fr = Qe, Qe = null) : fr = Qe.sibling;
        var $t = ae(P, Qe, I[ct], he);
        if ($t === null) {
          Qe === null && (Qe = fr);
          break;
        }
        n && Qe && $t.alternate === null && r(P, Qe), U = y($t, U, ct), ze === null ? We = $t : ze.sibling = $t, ze = $t, Qe = fr;
      }
      if (ct === I.length)
        return o(P, Qe), gn && Aa(P, ct), We;
      if (Qe === null) {
        for (; ct < I.length; ct++)
          Qe = ce(P, I[ct], he), Qe !== null && (U = y(Qe, U, ct), ze === null ? We = Qe : ze.sibling = Qe, ze = Qe);
        return gn && Aa(P, ct), We;
      }
      for (Qe = s(P, Qe); ct < I.length; ct++)
        fr = we(Qe, P, ct, I[ct], he), fr !== null && (n && fr.alternate !== null && Qe.delete(fr.key === null ? ct : fr.key), U = y(fr, U, ct), ze === null ? We = fr : ze.sibling = fr, ze = fr);
      return n && Qe.forEach(function(Cu) {
        return r(P, Cu);
      }), gn && Aa(P, ct), We;
    }
    function Ie(P, U, I, he) {
      var We = Pe(I);
      if (typeof We != "function")
        throw Error(p(150));
      if (I = We.call(I), I == null)
        throw Error(p(151));
      for (var ze = We = null, Qe = U, ct = U = 0, fr = null, $t = I.next(); Qe !== null && !$t.done; ct++, $t = I.next()) {
        Qe.index > ct ? (fr = Qe, Qe = null) : fr = Qe.sibling;
        var Cu = ae(P, Qe, $t.value, he);
        if (Cu === null) {
          Qe === null && (Qe = fr);
          break;
        }
        n && Qe && Cu.alternate === null && r(P, Qe), U = y(Cu, U, ct), ze === null ? We = Cu : ze.sibling = Cu, ze = Cu, Qe = fr;
      }
      if ($t.done)
        return o(
          P,
          Qe
        ), gn && Aa(P, ct), We;
      if (Qe === null) {
        for (; !$t.done; ct++, $t = I.next())
          $t = ce(P, $t.value, he), $t !== null && (U = y($t, U, ct), ze === null ? We = $t : ze.sibling = $t, ze = $t);
        return gn && Aa(P, ct), We;
      }
      for (Qe = s(P, Qe); !$t.done; ct++, $t = I.next())
        $t = we(Qe, P, ct, $t.value, he), $t !== null && (n && $t.alternate !== null && Qe.delete($t.key === null ? ct : $t.key), U = y($t, U, ct), ze === null ? We = $t : ze.sibling = $t, ze = $t);
      return n && Qe.forEach(function(s_) {
        return r(P, s_);
      }), gn && Aa(P, ct), We;
    }
    function Vn(P, U, I, he) {
      if (typeof I == "object" && I !== null && I.type === Ce && I.key === null && (I = I.props.children), typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case fe:
            e: {
              for (var We = I.key, ze = U; ze !== null; ) {
                if (ze.key === We) {
                  if (We = I.type, We === Ce) {
                    if (ze.tag === 7) {
                      o(P, ze.sibling), U = v(ze, I.props.children), U.return = P, P = U;
                      break e;
                    }
                  } else if (ze.elementType === We || typeof We == "object" && We !== null && We.$$typeof === bt && Zh(We) === ze.type) {
                    o(P, ze.sibling), U = v(ze, I.props), U.ref = Xl(P, ze, I), U.return = P, P = U;
                    break e;
                  }
                  o(P, ze);
                  break;
                } else
                  r(P, ze);
                ze = ze.sibling;
              }
              I.type === Ce ? (U = yl(I.props.children, P.mode, he, I.key), U.return = P, P = U) : (he = Xf(I.type, I.key, I.props, null, P.mode, he), he.ref = Xl(P, U, I), he.return = P, P = he);
            }
            return R(P);
          case de:
            e: {
              for (ze = I.key; U !== null; ) {
                if (U.key === ze)
                  if (U.tag === 4 && U.stateNode.containerInfo === I.containerInfo && U.stateNode.implementation === I.implementation) {
                    o(P, U.sibling), U = v(U, I.children || []), U.return = P, P = U;
                    break e;
                  } else {
                    o(P, U);
                    break;
                  }
                else
                  r(P, U);
                U = U.sibling;
              }
              U = gl(I, P.mode, he), U.return = P, P = U;
            }
            return R(P);
          case bt:
            return ze = I._init, Vn(P, U, ze(I._payload), he);
        }
        if (Ut(I))
          return Ue(P, U, I, he);
        if (Pe(I))
          return Ie(P, U, I, he);
        gf(P, I);
      }
      return typeof I == "string" && I !== "" || typeof I == "number" ? (I = "" + I, U !== null && U.tag === 6 ? (o(P, U.sibling), U = v(U, I), U.return = P, P = U) : (o(P, U), U = Cc(I, P.mode, he), U.return = P, P = U), R(P)) : o(P, U);
    }
    return Vn;
  }
  var ql = Jh(!0), em = Jh(!1), ic = {}, wi = gt(ic), oc = gt(ic), Zl = gt(ic);
  function el(n) {
    if (n === ic)
      throw Error(p(174));
    return n;
  }
  function Ep(n, r) {
    switch (Zt(Zl, r), Zt(oc, n), Zt(wi, ic), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Kt(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Kt(r, n);
    }
    Xt(wi), Zt(wi, r);
  }
  function hu() {
    Xt(wi), Xt(oc), Xt(Zl);
  }
  function et(n) {
    el(Zl.current);
    var r = el(wi.current), o = Kt(r, n.type);
    r !== o && (Zt(oc, n), Zt(wi, o));
  }
  function Ot(n) {
    oc.current === n && (Xt(wi), Xt(oc));
  }
  var rt = gt(0);
  function Dn(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var ai = [];
  function _f() {
    for (var n = 0; n < ai.length; n++)
      ai[n]._workInProgressVersionPrimary = null;
    ai.length = 0;
  }
  var bf = ye.ReactCurrentDispatcher, Cp = ye.ReactCurrentBatchConfig, tl = 0, _n = null, q = null, jt = null, it = !1, $i = !1, Ua = 0, nl = 0;
  function bn() {
    throw Error(p(321));
  }
  function rl(n, r) {
    if (r === null)
      return !1;
    for (var o = 0; o < r.length && o < n.length; o++)
      if (!Za(n[o], r[o]))
        return !1;
    return !0;
  }
  function mu(n, r, o, s, v, y) {
    if (tl = y, _n = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, bf.current = n === null || n.memoizedState === null ? Yg : Wg, n = o(s, v), $i) {
      y = 0;
      do {
        if ($i = !1, Ua = 0, 25 <= y)
          throw Error(p(301));
        y += 1, jt = q = null, r.updateQueue = null, bf.current = wp, n = o(s, v);
      } while ($i);
    }
    if (bf.current = zf, r = q !== null && q.next !== null, tl = 0, jt = q = _n = null, it = !1, r)
      throw Error(p(300));
    return n;
  }
  function al() {
    var n = Ua !== 0;
    return Ua = 0, n;
  }
  function ii() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return jt === null ? _n.memoizedState = jt = n : jt = jt.next = n, jt;
  }
  function va() {
    if (q === null) {
      var n = _n.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = q.next;
    var r = jt === null ? _n.memoizedState : jt.next;
    if (r !== null)
      jt = r, q = n;
    else {
      if (n === null)
        throw Error(p(310));
      q = n, n = { memoizedState: q.memoizedState, baseState: q.baseState, baseQueue: q.baseQueue, queue: q.queue, next: null }, jt === null ? _n.memoizedState = jt = n : jt = jt.next = n;
    }
    return jt;
  }
  function il(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function uc(n) {
    var r = va(), o = r.queue;
    if (o === null)
      throw Error(p(311));
    o.lastRenderedReducer = n;
    var s = q, v = s.baseQueue, y = o.pending;
    if (y !== null) {
      if (v !== null) {
        var R = v.next;
        v.next = y.next, y.next = R;
      }
      s.baseQueue = v = y, o.pending = null;
    }
    if (v !== null) {
      y = v.next, s = s.baseState;
      var N = R = null, k = null, W = y;
      do {
        var ue = W.lane;
        if ((tl & ue) === ue)
          k !== null && (k = k.next = { lane: 0, action: W.action, hasEagerState: W.hasEagerState, eagerState: W.eagerState, next: null }), s = W.hasEagerState ? W.eagerState : n(s, W.action);
        else {
          var ce = {
            lane: ue,
            action: W.action,
            hasEagerState: W.hasEagerState,
            eagerState: W.eagerState,
            next: null
          };
          k === null ? (N = k = ce, R = s) : k = k.next = ce, _n.lanes |= ue, xo |= ue;
        }
        W = W.next;
      } while (W !== null && W !== y);
      k === null ? R = s : k.next = N, Za(s, r.memoizedState) || (In = !0), r.memoizedState = s, r.baseState = R, r.baseQueue = k, o.lastRenderedState = s;
    }
    if (n = o.interleaved, n !== null) {
      v = n;
      do
        y = v.lane, _n.lanes |= y, xo |= y, v = v.next;
      while (v !== n);
    } else
      v === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function lc(n) {
    var r = va(), o = r.queue;
    if (o === null)
      throw Error(p(311));
    o.lastRenderedReducer = n;
    var s = o.dispatch, v = o.pending, y = r.memoizedState;
    if (v !== null) {
      o.pending = null;
      var R = v = v.next;
      do
        y = n(y, R.action), R = R.next;
      while (R !== v);
      Za(y, r.memoizedState) || (In = !0), r.memoizedState = y, r.baseQueue === null && (r.baseState = y), o.lastRenderedState = y;
    }
    return [y, s];
  }
  function Sf() {
  }
  function Ef(n, r) {
    var o = _n, s = va(), v = r(), y = !Za(s.memoizedState, v);
    if (y && (s.memoizedState = v, In = !0), s = s.queue, sc(wf.bind(null, o, s, n), [n]), s.getSnapshot !== r || y || jt !== null && jt.memoizedState.tag & 1) {
      if (o.flags |= 2048, ol(9, Rf.bind(null, o, s, v, r), void 0, null), Nn === null)
        throw Error(p(349));
      tl & 30 || Cf(o, r, v);
    }
    return v;
  }
  function Cf(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = _n.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, _n.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function Rf(n, r, o, s) {
    r.value = o, r.getSnapshot = s, Tf(r) && Of(n);
  }
  function wf(n, r, o) {
    return o(function() {
      Tf(r) && Of(n);
    });
  }
  function Tf(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !Za(n, o);
    } catch {
      return !0;
    }
  }
  function Of(n) {
    var r = Co(n, 1);
    r !== null && jr(r, n, 1, -1);
  }
  function xf(n) {
    var r = ii();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: il, lastRenderedState: n }, r.queue = n, n = n.dispatch = Uf.bind(null, _n, n), [r.memoizedState, n];
  }
  function ol(n, r, o, s) {
    return n = { tag: n, create: r, destroy: o, deps: s, next: null }, r = _n.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, _n.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (s = o.next, o.next = n, n.next = s, r.lastEffect = n)), n;
  }
  function Df() {
    return va().memoizedState;
  }
  function ul(n, r, o, s) {
    var v = ii();
    _n.flags |= n, v.memoizedState = ol(1 | r, o, void 0, s === void 0 ? null : s);
  }
  function wo(n, r, o, s) {
    var v = va();
    s = s === void 0 ? null : s;
    var y = void 0;
    if (q !== null) {
      var R = q.memoizedState;
      if (y = R.destroy, s !== null && rl(s, R.deps)) {
        v.memoizedState = ol(r, o, y, s);
        return;
      }
    }
    _n.flags |= n, v.memoizedState = ol(1 | r, o, y, s);
  }
  function Nf(n, r) {
    return ul(8390656, 8, n, r);
  }
  function sc(n, r) {
    return wo(2048, 8, n, r);
  }
  function kf(n, r) {
    return wo(4, 2, n, r);
  }
  function Af(n, r) {
    return wo(4, 4, n, r);
  }
  function Rp(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function Jl(n, r, o) {
    return o = o != null ? o.concat([n]) : null, wo(4, 4, Rp.bind(null, r, n), o);
  }
  function Lf() {
  }
  function es(n, r) {
    var o = va();
    r = r === void 0 ? null : r;
    var s = o.memoizedState;
    return s !== null && r !== null && rl(r, s[1]) ? s[0] : (o.memoizedState = [n, r], n);
  }
  function yu(n, r) {
    var o = va();
    r = r === void 0 ? null : r;
    var s = o.memoizedState;
    return s !== null && r !== null && rl(r, s[1]) ? s[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function ha(n, r, o) {
    return tl & 21 ? (Za(o, r) || (o = Jo(), _n.lanes |= o, xo |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, In = !0), n.memoizedState = o);
  }
  function $g(n, r) {
    var o = zt;
    zt = o !== 0 && 4 > o ? o : 4, n(!0);
    var s = Cp.transition;
    Cp.transition = {};
    try {
      n(!1), r();
    } finally {
      zt = o, Cp.transition = s;
    }
  }
  function sn() {
    return va().memoizedState;
  }
  function Mf(n, r, o) {
    var s = $n(n);
    if (o = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null }, ts(n))
      cc(r, o);
    else if (o = Gh(n, r, o, s), o !== null) {
      var v = zr();
      jr(o, n, s, v), tm(o, r, s);
    }
  }
  function Uf(n, r, o) {
    var s = $n(n), v = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (ts(n))
      cc(r, v);
    else {
      var y = n.alternate;
      if (n.lanes === 0 && (y === null || y.lanes === 0) && (y = r.lastRenderedReducer, y !== null))
        try {
          var R = r.lastRenderedState, N = y(R, o);
          if (v.hasEagerState = !0, v.eagerState = N, Za(N, R)) {
            var k = r.interleaved;
            k === null ? (v.next = v, gp(r)) : (v.next = k.next, k.next = v), r.interleaved = v;
            return;
          }
        } catch {
        } finally {
        }
      o = Gh(n, r, v, s), o !== null && (v = zr(), jr(o, n, s, v), tm(o, r, s));
    }
  }
  function ts(n) {
    var r = n.alternate;
    return n === _n || r !== null && r === _n;
  }
  function cc(n, r) {
    $i = it = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function tm(n, r, o) {
    if (o & 4194240) {
      var s = r.lanes;
      s &= n.pendingLanes, o |= s, r.lanes = o, $r(n, o);
    }
  }
  var zf = { readContext: jn, useCallback: bn, useContext: bn, useEffect: bn, useImperativeHandle: bn, useInsertionEffect: bn, useLayoutEffect: bn, useMemo: bn, useReducer: bn, useRef: bn, useState: bn, useDebugValue: bn, useDeferredValue: bn, useTransition: bn, useMutableSource: bn, useSyncExternalStore: bn, useId: bn, unstable_isNewReconciler: !1 }, Yg = { readContext: jn, useCallback: function(n, r) {
    return ii().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: jn, useEffect: Nf, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, ul(
      4194308,
      4,
      Rp.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return ul(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return ul(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = ii();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var s = ii();
    return r = o !== void 0 ? o(r) : r, s.memoizedState = s.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, s.queue = n, n = n.dispatch = Mf.bind(null, _n, n), [s.memoizedState, n];
  }, useRef: function(n) {
    var r = ii();
    return n = { current: n }, r.memoizedState = n;
  }, useState: xf, useDebugValue: Lf, useDeferredValue: function(n) {
    return ii().memoizedState = n;
  }, useTransition: function() {
    var n = xf(!1), r = n[0];
    return n = $g.bind(null, n[1]), ii().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var s = _n, v = ii();
    if (gn) {
      if (o === void 0)
        throw Error(p(407));
      o = o();
    } else {
      if (o = r(), Nn === null)
        throw Error(p(349));
      tl & 30 || Cf(s, r, o);
    }
    v.memoizedState = o;
    var y = { value: o, getSnapshot: r };
    return v.queue = y, Nf(wf.bind(
      null,
      s,
      y,
      n
    ), [n]), s.flags |= 2048, ol(9, Rf.bind(null, s, y, o, r), void 0, null), o;
  }, useId: function() {
    var n = ii(), r = Nn.identifierPrefix;
    if (gn) {
      var o = Eo, s = yr;
      o = (s & ~(1 << 32 - ar(s) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = Ua++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else
      o = nl++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Wg = {
    readContext: jn,
    useCallback: es,
    useContext: jn,
    useEffect: sc,
    useImperativeHandle: Jl,
    useInsertionEffect: kf,
    useLayoutEffect: Af,
    useMemo: yu,
    useReducer: uc,
    useRef: Df,
    useState: function() {
      return uc(il);
    },
    useDebugValue: Lf,
    useDeferredValue: function(n) {
      var r = va();
      return ha(r, q.memoizedState, n);
    },
    useTransition: function() {
      var n = uc(il)[0], r = va().memoizedState;
      return [n, r];
    },
    useMutableSource: Sf,
    useSyncExternalStore: Ef,
    useId: sn,
    unstable_isNewReconciler: !1
  }, wp = { readContext: jn, useCallback: es, useContext: jn, useEffect: sc, useImperativeHandle: Jl, useInsertionEffect: kf, useLayoutEffect: Af, useMemo: yu, useReducer: lc, useRef: Df, useState: function() {
    return lc(il);
  }, useDebugValue: Lf, useDeferredValue: function(n) {
    var r = va();
    return q === null ? r.memoizedState = n : ha(r, q.memoizedState, n);
  }, useTransition: function() {
    var n = lc(il)[0], r = va().memoizedState;
    return [n, r];
  }, useMutableSource: Sf, useSyncExternalStore: Ef, useId: sn, unstable_isNewReconciler: !1 };
  function ns(n, r) {
    try {
      var o = "", s = r;
      do
        o += Fe(s), s = s.return;
      while (s);
      var v = o;
    } catch (y) {
      v = `
Error generating stack: ` + y.message + `
` + y.stack;
    }
    return { value: n, source: r, stack: v, digest: null };
  }
  function fc(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function jf(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var Gg = typeof WeakMap == "function" ? WeakMap : Map;
  function nm(n, r, o) {
    o = Ro(-1, o), o.tag = 3, o.payload = { element: null };
    var s = r.value;
    return o.callback = function() {
      $f || ($f = !0, dl = s), jf(n, r);
    }, o;
  }
  function dc(n, r, o) {
    o = Ro(-1, o), o.tag = 3;
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var v = r.value;
      o.payload = function() {
        return s(v);
      }, o.callback = function() {
        jf(n, r);
      };
    }
    var y = n.stateNode;
    return y !== null && typeof y.componentDidCatch == "function" && (o.callback = function() {
      jf(n, r), typeof s != "function" && (Gi === null ? Gi = /* @__PURE__ */ new Set([this]) : Gi.add(this));
      var R = r.stack;
      this.componentDidCatch(r.value, { componentStack: R !== null ? R : "" });
    }), o;
  }
  function rm(n, r, o) {
    var s = n.pingCache;
    if (s === null) {
      s = n.pingCache = new Gg();
      var v = /* @__PURE__ */ new Set();
      s.set(r, v);
    } else
      v = s.get(r), v === void 0 && (v = /* @__PURE__ */ new Set(), s.set(r, v));
    v.has(o) || (v.add(o), n = e_.bind(null, n, r, o), r.then(n, n));
  }
  function Tp(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Op(n, r, o, s, v) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = v, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = Ro(-1, 1), r.tag = 2, pu(o, r, 1))), o.lanes |= 1), n);
  }
  var Qg = ye.ReactCurrentOwner, In = !1;
  function qn(n, r, o, s) {
    r.child = n === null ? em(r, null, o, s) : ql(r, n.child, o, s);
  }
  function gu(n, r, o, s, v) {
    o = o.render;
    var y = r.ref;
    return ge(r, v), s = mu(n, r, o, s, y, v), o = al(), n !== null && !In ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~v, _r(n, r, v)) : (gn && o && sf(r), r.flags |= 1, qn(n, r, s, v), r.child);
  }
  function Vf(n, r, o, s, v) {
    if (n === null) {
      var y = o.type;
      return typeof y == "function" && !Wp(y) && y.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = y, ma(n, r, y, s, v)) : (n = Xf(o.type, null, s, r, r.mode, v), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (y = n.child, !(n.lanes & v)) {
      var R = y.memoizedProps;
      if (o = o.compare, o = o !== null ? o : Gs, o(R, s) && n.ref === r.ref)
        return _r(n, r, v);
    }
    return r.flags |= 1, n = Eu(y, s), n.ref = r.ref, n.return = r, r.child = n;
  }
  function ma(n, r, o, s, v) {
    if (n !== null) {
      var y = n.memoizedProps;
      if (Gs(y, s) && n.ref === r.ref)
        if (In = !1, r.pendingProps = s = y, (n.lanes & v) !== 0)
          n.flags & 131072 && (In = !0);
        else
          return r.lanes = n.lanes, _r(n, r, v);
    }
    return rs(n, r, o, s, v);
  }
  function ll(n, r, o) {
    var s = r.pendingProps, v = s.children, y = n !== null ? n.memoizedState : null;
    if (s.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Zt(ss, za), za |= o;
      else {
        if (!(o & 1073741824))
          return n = y !== null ? y.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Zt(ss, za), za |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = y !== null ? y.baseLanes : o, Zt(ss, za), za |= s;
      }
    else
      y !== null ? (s = y.baseLanes | o, r.memoizedState = null) : s = o, Zt(ss, za), za |= s;
    return qn(n, r, v, o), r.child;
  }
  function _t(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function rs(n, r, o, s, v) {
    var y = Rn(o) ? sa : st.current;
    return y = ei(r, y), ge(r, v), o = mu(n, r, o, s, y, v), s = al(), n !== null && !In ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~v, _r(n, r, v)) : (gn && s && sf(r), r.flags |= 1, qn(n, r, o, v), r.child);
  }
  function xp(n, r, o, s, v) {
    if (Rn(o)) {
      var y = !0;
      lf(r);
    } else
      y = !1;
    if (ge(r, v), r.stateNode === null)
      Lr(n, r), Xh(r, o, s), yf(r, o, s, v), s = !0;
    else if (n === null) {
      var R = r.stateNode, N = r.memoizedProps;
      R.props = N;
      var k = R.context, W = o.contextType;
      typeof W == "object" && W !== null ? W = jn(W) : (W = Rn(o) ? sa : st.current, W = ei(r, W));
      var ue = o.getDerivedStateFromProps, ce = typeof ue == "function" || typeof R.getSnapshotBeforeUpdate == "function";
      ce || typeof R.UNSAFE_componentWillReceiveProps != "function" && typeof R.componentWillReceiveProps != "function" || (N !== s || k !== W) && qh(r, R, s, W), du = !1;
      var ae = r.memoizedState;
      R.state = ae, vu(r, s, R, v), k = r.memoizedState, N !== s || ae !== k || Ln.current || du ? (typeof ue == "function" && (Sp(r, o, ue, s), k = r.memoizedState), (N = du || Kh(r, o, N, s, ae, k, W)) ? (ce || typeof R.UNSAFE_componentWillMount != "function" && typeof R.componentWillMount != "function" || (typeof R.componentWillMount == "function" && R.componentWillMount(), typeof R.UNSAFE_componentWillMount == "function" && R.UNSAFE_componentWillMount()), typeof R.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof R.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = s, r.memoizedState = k), R.props = s, R.state = k, R.context = W, s = N) : (typeof R.componentDidMount == "function" && (r.flags |= 4194308), s = !1);
    } else {
      R = r.stateNode, Xn(n, r), N = r.memoizedProps, W = r.type === r.elementType ? N : Ma(r.type, N), R.props = W, ce = r.pendingProps, ae = R.context, k = o.contextType, typeof k == "object" && k !== null ? k = jn(k) : (k = Rn(o) ? sa : st.current, k = ei(r, k));
      var we = o.getDerivedStateFromProps;
      (ue = typeof we == "function" || typeof R.getSnapshotBeforeUpdate == "function") || typeof R.UNSAFE_componentWillReceiveProps != "function" && typeof R.componentWillReceiveProps != "function" || (N !== ce || ae !== k) && qh(r, R, s, k), du = !1, ae = r.memoizedState, R.state = ae, vu(r, s, R, v);
      var Ue = r.memoizedState;
      N !== ce || ae !== Ue || Ln.current || du ? (typeof we == "function" && (Sp(r, o, we, s), Ue = r.memoizedState), (W = du || Kh(r, o, W, s, ae, Ue, k) || !1) ? (ue || typeof R.UNSAFE_componentWillUpdate != "function" && typeof R.componentWillUpdate != "function" || (typeof R.componentWillUpdate == "function" && R.componentWillUpdate(s, Ue, k), typeof R.UNSAFE_componentWillUpdate == "function" && R.UNSAFE_componentWillUpdate(s, Ue, k)), typeof R.componentDidUpdate == "function" && (r.flags |= 4), typeof R.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof R.componentDidUpdate != "function" || N === n.memoizedProps && ae === n.memoizedState || (r.flags |= 4), typeof R.getSnapshotBeforeUpdate != "function" || N === n.memoizedProps && ae === n.memoizedState || (r.flags |= 1024), r.memoizedProps = s, r.memoizedState = Ue), R.props = s, R.state = Ue, R.context = k, s = W) : (typeof R.componentDidUpdate != "function" || N === n.memoizedProps && ae === n.memoizedState || (r.flags |= 4), typeof R.getSnapshotBeforeUpdate != "function" || N === n.memoizedProps && ae === n.memoizedState || (r.flags |= 1024), s = !1);
    }
    return am(n, r, o, s, y, v);
  }
  function am(n, r, o, s, v, y) {
    _t(n, r);
    var R = (r.flags & 128) !== 0;
    if (!s && !R)
      return v && Ih(r, o, !1), _r(n, r, y);
    s = r.stateNode, Qg.current = r;
    var N = R && typeof o.getDerivedStateFromError != "function" ? null : s.render();
    return r.flags |= 1, n !== null && R ? (r.child = ql(r, n.child, null, y), r.child = ql(r, null, N, y)) : qn(n, r, N, y), r.memoizedState = s.state, v && Ih(r, o, !0), r.child;
  }
  function im(n) {
    var r = n.stateNode;
    r.pendingContext ? lu(n, r.pendingContext, r.pendingContext !== r.context) : r.context && lu(n, r.context, !1), Ep(n, r.containerInfo);
  }
  function Pf(n, r, o, s, v) {
    return xn(), hp(v), r.flags |= 256, qn(n, r, o, s), r.child;
  }
  var sl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Dp(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Np(n, r, o) {
    var s = r.pendingProps, v = rt.current, y = !1, R = (r.flags & 128) !== 0, N;
    if ((N = R) || (N = n !== null && n.memoizedState === null ? !1 : (v & 2) !== 0), N ? (y = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (v |= 1), Zt(rt, v & 1), n === null)
      return ff(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (R = s.children, n = s.fallback, y ? (s = r.mode, y = r.child, R = { mode: "hidden", children: R }, !(s & 1) && y !== null ? (y.childLanes = 0, y.pendingProps = R) : y = Ec(R, s, 0, null), n = yl(n, s, o, null), y.return = r, n.return = r, y.sibling = n, r.child = y, r.child.memoizedState = Dp(o), r.memoizedState = sl, n) : kp(r, R));
    if (v = n.memoizedState, v !== null && (N = v.dehydrated, N !== null))
      return Kg(n, r, R, s, N, v, o);
    if (y) {
      y = s.fallback, R = r.mode, v = n.child, N = v.sibling;
      var k = { mode: "hidden", children: s.children };
      return !(R & 1) && r.child !== v ? (s = r.child, s.childLanes = 0, s.pendingProps = k, r.deletions = null) : (s = Eu(v, k), s.subtreeFlags = v.subtreeFlags & 14680064), N !== null ? y = Eu(N, y) : (y = yl(y, R, o, null), y.flags |= 2), y.return = r, s.return = r, s.sibling = y, r.child = s, s = y, y = r.child, R = n.child.memoizedState, R = R === null ? Dp(o) : { baseLanes: R.baseLanes | o, cachePool: null, transitions: R.transitions }, y.memoizedState = R, y.childLanes = n.childLanes & ~o, r.memoizedState = sl, s;
    }
    return y = n.child, n = y.sibling, s = Eu(y, { mode: "visible", children: s.children }), !(r.mode & 1) && (s.lanes = o), s.return = r, s.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = s, r.memoizedState = null, s;
  }
  function kp(n, r) {
    return r = Ec({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function as(n, r, o, s) {
    return s !== null && hp(s), ql(r, n.child, null, o), n = kp(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Kg(n, r, o, s, v, y, R) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, s = fc(Error(p(422))), as(n, r, R, s)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (y = s.fallback, v = r.mode, s = Ec({ mode: "visible", children: s.children }, v, 0, null), y = yl(y, v, R, null), y.flags |= 2, s.return = r, y.return = r, s.sibling = y, r.child = s, r.mode & 1 && ql(r, n.child, null, R), r.child.memoizedState = Dp(R), r.memoizedState = sl, y);
    if (!(r.mode & 1))
      return as(n, r, R, null);
    if (v.data === "$!") {
      if (s = v.nextSibling && v.nextSibling.dataset, s)
        var N = s.dgst;
      return s = N, y = Error(p(419)), s = fc(y, s, void 0), as(n, r, R, s);
    }
    if (N = (R & n.childLanes) !== 0, In || N) {
      if (s = Nn, s !== null) {
        switch (R & -R) {
          case 4:
            v = 2;
            break;
          case 16:
            v = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            v = 32;
            break;
          case 536870912:
            v = 268435456;
            break;
          default:
            v = 0;
        }
        v = v & (s.suspendedLanes | R) ? 0 : v, v !== 0 && v !== y.retryLane && (y.retryLane = v, Co(n, v), jr(s, n, v, -1));
      }
      return Ip(), s = fc(Error(p(421))), as(n, r, R, s);
    }
    return v.data === "$?" ? (r.flags |= 128, r.child = n.child, r = t_.bind(null, n), v._reactRetry = r, null) : (n = y.treeContext, pa = Ri(v.nextSibling), La = r, gn = !0, ri = null, n !== null && (da[Ar++] = yr, da[Ar++] = Eo, da[Ar++] = ni, yr = n.id, Eo = n.overflow, ni = r), r = kp(r, s.children), r.flags |= 4096, r);
  }
  function Ap(n, r, o) {
    n.lanes |= r;
    var s = n.alternate;
    s !== null && (s.lanes |= r), lr(n.return, r, o);
  }
  function Ff(n, r, o, s, v) {
    var y = n.memoizedState;
    y === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: s, tail: o, tailMode: v } : (y.isBackwards = r, y.rendering = null, y.renderingStartTime = 0, y.last = s, y.tail = o, y.tailMode = v);
  }
  function Lp(n, r, o) {
    var s = r.pendingProps, v = s.revealOrder, y = s.tail;
    if (qn(n, r, s.children, o), s = rt.current, s & 2)
      s = s & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Ap(n, o, r);
            else if (n.tag === 19)
              Ap(n, o, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      s &= 1;
    }
    if (Zt(rt, s), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (v) {
        case "forwards":
          for (o = r.child, v = null; o !== null; )
            n = o.alternate, n !== null && Dn(n) === null && (v = o), o = o.sibling;
          o = v, o === null ? (v = r.child, r.child = null) : (v = o.sibling, o.sibling = null), Ff(r, !1, v, o, y);
          break;
        case "backwards":
          for (o = null, v = r.child, r.child = null; v !== null; ) {
            if (n = v.alternate, n !== null && Dn(n) === null) {
              r.child = v;
              break;
            }
            n = v.sibling, v.sibling = o, o = v, v = n;
          }
          Ff(r, !0, o, null, y);
          break;
        case "together":
          Ff(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Lr(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function _r(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), xo |= r.lanes, !(o & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(p(153));
    if (r.child !== null) {
      for (n = r.child, o = Eu(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; )
        n = n.sibling, o = o.sibling = Eu(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function To(n, r, o) {
    switch (r.tag) {
      case 3:
        im(r), xn();
        break;
      case 5:
        et(r);
        break;
      case 1:
        Rn(r.type) && lf(r);
        break;
      case 4:
        Ep(r, r.stateNode.containerInfo);
        break;
      case 10:
        var s = r.type._context, v = r.memoizedProps.value;
        Zt(Ii, s._currentValue), s._currentValue = v;
        break;
      case 13:
        if (s = r.memoizedState, s !== null)
          return s.dehydrated !== null ? (Zt(rt, rt.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? Np(n, r, o) : (Zt(rt, rt.current & 1), n = _r(n, r, o), n !== null ? n.sibling : null);
        Zt(rt, rt.current & 1);
        break;
      case 19:
        if (s = (o & r.childLanes) !== 0, n.flags & 128) {
          if (s)
            return Lp(n, r, o);
          r.flags |= 128;
        }
        if (v = r.memoizedState, v !== null && (v.rendering = null, v.tail = null, v.lastEffect = null), Zt(rt, rt.current), s)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, ll(n, r, o);
    }
    return _r(n, r, o);
  }
  var pc, cl, oi, Zn;
  pc = function(n, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6)
        n.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === r)
        break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r)
          return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, cl = function() {
  }, oi = function(n, r, o, s) {
    var v = n.memoizedProps;
    if (v !== s) {
      n = r.stateNode, el(wi.current);
      var y = null;
      switch (o) {
        case "input":
          v = Fn(n, v), s = Fn(n, s), y = [];
          break;
        case "select":
          v = w({}, v, { value: void 0 }), s = w({}, s, { value: void 0 }), y = [];
          break;
        case "textarea":
          v = hn(n, v), s = hn(n, s), y = [];
          break;
        default:
          typeof v.onClick != "function" && typeof s.onClick == "function" && (n.onclick = uf);
      }
      An(o, s);
      var R;
      o = null;
      for (W in v)
        if (!s.hasOwnProperty(W) && v.hasOwnProperty(W) && v[W] != null)
          if (W === "style") {
            var N = v[W];
            for (R in N)
              N.hasOwnProperty(R) && (o || (o = {}), o[R] = "");
          } else
            W !== "dangerouslySetInnerHTML" && W !== "children" && W !== "suppressContentEditableWarning" && W !== "suppressHydrationWarning" && W !== "autoFocus" && (b.hasOwnProperty(W) ? y || (y = []) : (y = y || []).push(W, null));
      for (W in s) {
        var k = s[W];
        if (N = v != null ? v[W] : void 0, s.hasOwnProperty(W) && k !== N && (k != null || N != null))
          if (W === "style")
            if (N) {
              for (R in N)
                !N.hasOwnProperty(R) || k && k.hasOwnProperty(R) || (o || (o = {}), o[R] = "");
              for (R in k)
                k.hasOwnProperty(R) && N[R] !== k[R] && (o || (o = {}), o[R] = k[R]);
            } else
              o || (y || (y = []), y.push(
                W,
                o
              )), o = k;
          else
            W === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, N = N ? N.__html : void 0, k != null && N !== k && (y = y || []).push(W, k)) : W === "children" ? typeof k != "string" && typeof k != "number" || (y = y || []).push(W, "" + k) : W !== "suppressContentEditableWarning" && W !== "suppressHydrationWarning" && (b.hasOwnProperty(W) ? (k != null && W === "onScroll" && ln("scroll", n), y || N === k || (y = [])) : (y = y || []).push(W, k));
      }
      o && (y = y || []).push("style", o);
      var W = y;
      (r.updateQueue = W) && (r.flags |= 4);
    }
  }, Zn = function(n, r, o, s) {
    o !== s && (r.flags |= 4);
  };
  function vc(n, r) {
    if (!gn)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var o = null; r !== null; )
            r.alternate !== null && (o = r), r = r.sibling;
          o === null ? n.tail = null : o.sibling = null;
          break;
        case "collapsed":
          o = n.tail;
          for (var s = null; o !== null; )
            o.alternate !== null && (s = o), o = o.sibling;
          s === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : s.sibling = null;
      }
  }
  function Mr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, s = 0;
    if (r)
      for (var v = n.child; v !== null; )
        o |= v.lanes | v.childLanes, s |= v.subtreeFlags & 14680064, s |= v.flags & 14680064, v.return = n, v = v.sibling;
    else
      for (v = n.child; v !== null; )
        o |= v.lanes | v.childLanes, s |= v.subtreeFlags, s |= v.flags, v.return = n, v = v.sibling;
    return n.subtreeFlags |= s, n.childLanes = o, r;
  }
  function Xg(n, r, o) {
    var s = r.pendingProps;
    switch (pp(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Mr(r), null;
      case 1:
        return Rn(r.type) && ti(), Mr(r), null;
      case 3:
        return s = r.stateNode, hu(), Xt(Ln), Xt(st), _f(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (n === null || n.child === null) && (df(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ri !== null && (Sc(ri), ri = null))), cl(n, r), Mr(r), null;
      case 5:
        Ot(r);
        var v = el(Zl.current);
        if (o = r.type, n !== null && r.stateNode != null)
          oi(n, r, o, s, v), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!s) {
            if (r.stateNode === null)
              throw Error(p(166));
            return Mr(r), null;
          }
          if (n = el(wi.current), df(r)) {
            s = r.stateNode, o = r.type;
            var y = r.memoizedProps;
            switch (s[Hi] = r, s[qu] = y, n = (r.mode & 1) !== 0, o) {
              case "dialog":
                ln("cancel", s), ln("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                ln("load", s);
                break;
              case "video":
              case "audio":
                for (v = 0; v < qs.length; v++)
                  ln(qs[v], s);
                break;
              case "source":
                ln("error", s);
                break;
              case "img":
              case "image":
              case "link":
                ln(
                  "error",
                  s
                ), ln("load", s);
                break;
              case "details":
                ln("toggle", s);
                break;
              case "input":
                Wn(s, y), ln("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!y.multiple }, ln("invalid", s);
                break;
              case "textarea":
                wt(s, y), ln("invalid", s);
            }
            An(o, y), v = null;
            for (var R in y)
              if (y.hasOwnProperty(R)) {
                var N = y[R];
                R === "children" ? typeof N == "string" ? s.textContent !== N && (y.suppressHydrationWarning !== !0 && of(s.textContent, N, n), v = ["children", N]) : typeof N == "number" && s.textContent !== "" + N && (y.suppressHydrationWarning !== !0 && of(
                  s.textContent,
                  N,
                  n
                ), v = ["children", "" + N]) : b.hasOwnProperty(R) && N != null && R === "onScroll" && ln("scroll", s);
              }
            switch (o) {
              case "input":
                nr(s), Yt(s, y, !0);
                break;
              case "textarea":
                nr(s), tn(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof y.onClick == "function" && (s.onclick = uf);
            }
            s = v, r.updateQueue = s, s !== null && (r.flags |= 4);
          } else {
            R = v.nodeType === 9 ? v : v.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = En(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = R.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof s.is == "string" ? n = R.createElement(o, { is: s.is }) : (n = R.createElement(o), o === "select" && (R = n, s.multiple ? R.multiple = !0 : s.size && (R.size = s.size))) : n = R.createElementNS(n, o), n[Hi] = r, n[qu] = s, pc(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (R = On(o, s), o) {
                case "dialog":
                  ln("cancel", n), ln("close", n), v = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ln("load", n), v = s;
                  break;
                case "video":
                case "audio":
                  for (v = 0; v < qs.length; v++)
                    ln(qs[v], n);
                  v = s;
                  break;
                case "source":
                  ln("error", n), v = s;
                  break;
                case "img":
                case "image":
                case "link":
                  ln(
                    "error",
                    n
                  ), ln("load", n), v = s;
                  break;
                case "details":
                  ln("toggle", n), v = s;
                  break;
                case "input":
                  Wn(n, s), v = Fn(n, s), ln("invalid", n);
                  break;
                case "option":
                  v = s;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!s.multiple }, v = w({}, s, { value: void 0 }), ln("invalid", n);
                  break;
                case "textarea":
                  wt(n, s), v = hn(n, s), ln("invalid", n);
                  break;
                default:
                  v = s;
              }
              An(o, v), N = v;
              for (y in N)
                if (N.hasOwnProperty(y)) {
                  var k = N[y];
                  y === "style" ? kt(n, k) : y === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, k != null && rr(n, k)) : y === "children" ? typeof k == "string" ? (o !== "textarea" || k !== "") && Cn(n, k) : typeof k == "number" && Cn(n, "" + k) : y !== "suppressContentEditableWarning" && y !== "suppressHydrationWarning" && y !== "autoFocus" && (b.hasOwnProperty(y) ? k != null && y === "onScroll" && ln("scroll", n) : k != null && be(n, y, k, R));
                }
              switch (o) {
                case "input":
                  nr(n), Yt(n, s, !1);
                  break;
                case "textarea":
                  nr(n), tn(n);
                  break;
                case "option":
                  s.value != null && n.setAttribute("value", "" + Ve(s.value));
                  break;
                case "select":
                  n.multiple = !!s.multiple, y = s.value, y != null ? Bt(n, !!s.multiple, y, !1) : s.defaultValue != null && Bt(
                    n,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof v.onClick == "function" && (n.onclick = uf);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s = !!s.autoFocus;
                  break e;
                case "img":
                  s = !0;
                  break e;
                default:
                  s = !1;
              }
            }
            s && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Mr(r), null;
      case 6:
        if (n && r.stateNode != null)
          Zn(n, r, n.memoizedProps, s);
        else {
          if (typeof s != "string" && r.stateNode === null)
            throw Error(p(166));
          if (o = el(Zl.current), el(wi.current), df(r)) {
            if (s = r.stateNode, o = r.memoizedProps, s[Hi] = r, (y = s.nodeValue !== o) && (n = La, n !== null))
              switch (n.tag) {
                case 3:
                  of(s.nodeValue, o, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && of(s.nodeValue, o, (n.mode & 1) !== 0);
              }
            y && (r.flags |= 4);
          } else
            s = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(s), s[Hi] = r, r.stateNode = s;
        }
        return Mr(r), null;
      case 13:
        if (Xt(rt), s = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (gn && pa !== null && r.mode & 1 && !(r.flags & 128))
            Wh(), xn(), r.flags |= 98560, y = !1;
          else if (y = df(r), s !== null && s.dehydrated !== null) {
            if (n === null) {
              if (!y)
                throw Error(p(318));
              if (y = r.memoizedState, y = y !== null ? y.dehydrated : null, !y)
                throw Error(p(317));
              y[Hi] = r;
            } else
              xn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Mr(r), y = !1;
          } else
            ri !== null && (Sc(ri), ri = null), y = !0;
          if (!y)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (s = s !== null, s !== (n !== null && n.memoizedState !== null) && s && (r.child.flags |= 8192, r.mode & 1 && (n === null || rt.current & 1 ? er === 0 && (er = 3) : Ip())), r.updateQueue !== null && (r.flags |= 4), Mr(r), null);
      case 4:
        return hu(), cl(n, r), n === null && Gl(r.stateNode.containerInfo), Mr(r), null;
      case 10:
        return fu(r.type._context), Mr(r), null;
      case 17:
        return Rn(r.type) && ti(), Mr(r), null;
      case 19:
        if (Xt(rt), y = r.memoizedState, y === null)
          return Mr(r), null;
        if (s = (r.flags & 128) !== 0, R = y.rendering, R === null)
          if (s)
            vc(y, !1);
          else {
            if (er !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (R = Dn(n), R !== null) {
                  for (r.flags |= 128, vc(y, !1), s = R.updateQueue, s !== null && (r.updateQueue = s, r.flags |= 4), r.subtreeFlags = 0, s = o, o = r.child; o !== null; )
                    y = o, n = s, y.flags &= 14680066, R = y.alternate, R === null ? (y.childLanes = 0, y.lanes = n, y.child = null, y.subtreeFlags = 0, y.memoizedProps = null, y.memoizedState = null, y.updateQueue = null, y.dependencies = null, y.stateNode = null) : (y.childLanes = R.childLanes, y.lanes = R.lanes, y.child = R.child, y.subtreeFlags = 0, y.deletions = null, y.memoizedProps = R.memoizedProps, y.memoizedState = R.memoizedState, y.updateQueue = R.updateQueue, y.type = R.type, n = R.dependencies, y.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
                  return Zt(rt, rt.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            y.tail !== null && pn() > fs && (r.flags |= 128, s = !0, vc(y, !1), r.lanes = 4194304);
          }
        else {
          if (!s)
            if (n = Dn(R), n !== null) {
              if (r.flags |= 128, s = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), vc(y, !0), y.tail === null && y.tailMode === "hidden" && !R.alternate && !gn)
                return Mr(r), null;
            } else
              2 * pn() - y.renderingStartTime > fs && o !== 1073741824 && (r.flags |= 128, s = !0, vc(y, !1), r.lanes = 4194304);
          y.isBackwards ? (R.sibling = r.child, r.child = R) : (o = y.last, o !== null ? o.sibling = R : r.child = R, y.last = R);
        }
        return y.tail !== null ? (r = y.tail, y.rendering = r, y.tail = r.sibling, y.renderingStartTime = pn(), r.sibling = null, o = rt.current, Zt(rt, s ? o & 1 | 2 : o & 1), r) : (Mr(r), null);
      case 22:
      case 23:
        return Bp(), s = r.memoizedState !== null, n !== null && n.memoizedState !== null !== s && (r.flags |= 8192), s && r.mode & 1 ? za & 1073741824 && (Mr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Mr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p(156, r.tag));
  }
  function Mp(n, r) {
    switch (pp(r), r.tag) {
      case 1:
        return Rn(r.type) && ti(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return hu(), Xt(Ln), Xt(st), _f(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Ot(r), null;
      case 13:
        if (Xt(rt), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(p(340));
          xn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Xt(rt), null;
      case 4:
        return hu(), null;
      case 10:
        return fu(r.type._context), null;
      case 22:
      case 23:
        return Bp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var hc = !1, Jn = !1, om = typeof WeakSet == "function" ? WeakSet : Set, ke = null;
  function is(n, r) {
    var o = n.ref;
    if (o !== null)
      if (typeof o == "function")
        try {
          o(null);
        } catch (s) {
          Un(n, r, s);
        }
      else
        o.current = null;
  }
  function mc(n, r, o) {
    try {
      o();
    } catch (s) {
      Un(n, r, s);
    }
  }
  var um = !1;
  function lm(n, r) {
    if (ip = mr, n = ef(), go(n)) {
      if ("selectionStart" in n)
        var o = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          o = (o = n.ownerDocument) && o.defaultView || window;
          var s = o.getSelection && o.getSelection();
          if (s && s.rangeCount !== 0) {
            o = s.anchorNode;
            var v = s.anchorOffset, y = s.focusNode;
            s = s.focusOffset;
            try {
              o.nodeType, y.nodeType;
            } catch {
              o = null;
              break e;
            }
            var R = 0, N = -1, k = -1, W = 0, ue = 0, ce = n, ae = null;
            t:
              for (; ; ) {
                for (var we; ce !== o || v !== 0 && ce.nodeType !== 3 || (N = R + v), ce !== y || s !== 0 && ce.nodeType !== 3 || (k = R + s), ce.nodeType === 3 && (R += ce.nodeValue.length), (we = ce.firstChild) !== null; )
                  ae = ce, ce = we;
                for (; ; ) {
                  if (ce === n)
                    break t;
                  if (ae === o && ++W === v && (N = R), ae === y && ++ue === s && (k = R), (we = ce.nextSibling) !== null)
                    break;
                  ce = ae, ae = ce.parentNode;
                }
                ce = we;
              }
            o = N === -1 || k === -1 ? null : { start: N, end: k };
          } else
            o = null;
        }
      o = o || { start: 0, end: 0 };
    } else
      o = null;
    for (Ku = { focusedElem: n, selectionRange: o }, mr = !1, ke = r; ke !== null; )
      if (r = ke, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, ke = n;
      else
        for (; ke !== null; ) {
          r = ke;
          try {
            var Ue = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Ue !== null) {
                    var Ie = Ue.memoizedProps, Vn = Ue.memoizedState, P = r.stateNode, U = P.getSnapshotBeforeUpdate(r.elementType === r.type ? Ie : Ma(r.type, Ie), Vn);
                    P.__reactInternalSnapshotBeforeUpdate = U;
                  }
                  break;
                case 3:
                  var I = r.stateNode.containerInfo;
                  I.nodeType === 1 ? I.textContent = "" : I.nodeType === 9 && I.documentElement && I.removeChild(I.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(p(163));
              }
          } catch (he) {
            Un(r, r.return, he);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, ke = n;
            break;
          }
          ke = r.return;
        }
    return Ue = um, um = !1, Ue;
  }
  function yc(n, r, o) {
    var s = r.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var v = s = s.next;
      do {
        if ((v.tag & n) === n) {
          var y = v.destroy;
          v.destroy = void 0, y !== void 0 && mc(r, o, y);
        }
        v = v.next;
      } while (v !== s);
    }
  }
  function gc(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & n) === n) {
          var s = o.create;
          o.destroy = s();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function Up(n) {
    var r = n.ref;
    if (r !== null) {
      var o = n.stateNode;
      switch (n.tag) {
        case 5:
          n = o;
          break;
        default:
          n = o;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function zp(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, zp(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Hi], delete r[qu], delete r[lp], delete r[Ig], delete r[sp])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function sm(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Hf(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || sm(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function os(n, r, o) {
    var s = n.tag;
    if (s === 5 || s === 6)
      n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = uf));
    else if (s !== 4 && (n = n.child, n !== null))
      for (os(n, r, o), n = n.sibling; n !== null; )
        os(n, r, o), n = n.sibling;
  }
  function Yi(n, r, o) {
    var s = n.tag;
    if (s === 5 || s === 6)
      n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (s !== 4 && (n = n.child, n !== null))
      for (Yi(n, r, o), n = n.sibling; n !== null; )
        Yi(n, r, o), n = n.sibling;
  }
  var wn = null, sr = !1;
  function ui(n, r, o) {
    for (o = o.child; o !== null; )
      us(n, r, o), o = o.sibling;
  }
  function us(n, r, o) {
    if (vr && typeof vr.onCommitFiberUnmount == "function")
      try {
        vr.onCommitFiberUnmount(gi, o);
      } catch {
      }
    switch (o.tag) {
      case 5:
        Jn || is(o, r);
      case 6:
        var s = wn, v = sr;
        wn = null, ui(n, r, o), wn = s, sr = v, wn !== null && (sr ? (n = wn, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : wn.removeChild(o.stateNode));
        break;
      case 18:
        wn !== null && (sr ? (n = wn, o = o.stateNode, n.nodeType === 8 ? iu(n.parentNode, o) : n.nodeType === 1 && iu(n, o), Si(n)) : iu(wn, o.stateNode));
        break;
      case 4:
        s = wn, v = sr, wn = o.stateNode.containerInfo, sr = !0, ui(n, r, o), wn = s, sr = v;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Jn && (s = o.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          v = s = s.next;
          do {
            var y = v, R = y.destroy;
            y = y.tag, R !== void 0 && (y & 2 || y & 4) && mc(o, r, R), v = v.next;
          } while (v !== s);
        }
        ui(n, r, o);
        break;
      case 1:
        if (!Jn && (is(o, r), s = o.stateNode, typeof s.componentWillUnmount == "function"))
          try {
            s.props = o.memoizedProps, s.state = o.memoizedState, s.componentWillUnmount();
          } catch (N) {
            Un(o, r, N);
          }
        ui(n, r, o);
        break;
      case 21:
        ui(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (Jn = (s = Jn) || o.memoizedState !== null, ui(n, r, o), Jn = s) : ui(n, r, o);
        break;
      default:
        ui(n, r, o);
    }
  }
  function Oo(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new om()), r.forEach(function(s) {
        var v = n_.bind(null, n, s);
        o.has(s) || (o.add(s), s.then(v, v));
      });
    }
  }
  function Ti(n, r) {
    var o = r.deletions;
    if (o !== null)
      for (var s = 0; s < o.length; s++) {
        var v = o[s];
        try {
          var y = n, R = r, N = R;
          e:
            for (; N !== null; ) {
              switch (N.tag) {
                case 5:
                  wn = N.stateNode, sr = !1;
                  break e;
                case 3:
                  wn = N.stateNode.containerInfo, sr = !0;
                  break e;
                case 4:
                  wn = N.stateNode.containerInfo, sr = !0;
                  break e;
              }
              N = N.return;
            }
          if (wn === null)
            throw Error(p(160));
          us(y, R, v), wn = null, sr = !1;
          var k = v.alternate;
          k !== null && (k.return = null), v.return = null;
        } catch (W) {
          Un(v, r, W);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        cm(r, n), r = r.sibling;
  }
  function cm(n, r) {
    var o = n.alternate, s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Ti(r, n), Wi(n), s & 4) {
          try {
            yc(3, n, n.return), gc(3, n);
          } catch (Ie) {
            Un(n, n.return, Ie);
          }
          try {
            yc(5, n, n.return);
          } catch (Ie) {
            Un(n, n.return, Ie);
          }
        }
        break;
      case 1:
        Ti(r, n), Wi(n), s & 512 && o !== null && is(o, o.return);
        break;
      case 5:
        if (Ti(r, n), Wi(n), s & 512 && o !== null && is(o, o.return), n.flags & 32) {
          var v = n.stateNode;
          try {
            Cn(v, "");
          } catch (Ie) {
            Un(n, n.return, Ie);
          }
        }
        if (s & 4 && (v = n.stateNode, v != null)) {
          var y = n.memoizedProps, R = o !== null ? o.memoizedProps : y, N = n.type, k = n.updateQueue;
          if (n.updateQueue = null, k !== null)
            try {
              N === "input" && y.type === "radio" && y.name != null && Le(v, y), On(N, R);
              var W = On(N, y);
              for (R = 0; R < k.length; R += 2) {
                var ue = k[R], ce = k[R + 1];
                ue === "style" ? kt(v, ce) : ue === "dangerouslySetInnerHTML" ? rr(v, ce) : ue === "children" ? Cn(v, ce) : be(v, ue, ce, W);
              }
              switch (N) {
                case "input":
                  tt(v, y);
                  break;
                case "textarea":
                  Tn(v, y);
                  break;
                case "select":
                  var ae = v._wrapperState.wasMultiple;
                  v._wrapperState.wasMultiple = !!y.multiple;
                  var we = y.value;
                  we != null ? Bt(v, !!y.multiple, we, !1) : ae !== !!y.multiple && (y.defaultValue != null ? Bt(
                    v,
                    !!y.multiple,
                    y.defaultValue,
                    !0
                  ) : Bt(v, !!y.multiple, y.multiple ? [] : "", !1));
              }
              v[qu] = y;
            } catch (Ie) {
              Un(n, n.return, Ie);
            }
        }
        break;
      case 6:
        if (Ti(r, n), Wi(n), s & 4) {
          if (n.stateNode === null)
            throw Error(p(162));
          v = n.stateNode, y = n.memoizedProps;
          try {
            v.nodeValue = y;
          } catch (Ie) {
            Un(n, n.return, Ie);
          }
        }
        break;
      case 3:
        if (Ti(r, n), Wi(n), s & 4 && o !== null && o.memoizedState.isDehydrated)
          try {
            Si(r.containerInfo);
          } catch (Ie) {
            Un(n, n.return, Ie);
          }
        break;
      case 4:
        Ti(r, n), Wi(n);
        break;
      case 13:
        Ti(r, n), Wi(n), v = n.child, v.flags & 8192 && (y = v.memoizedState !== null, v.stateNode.isHidden = y, !y || v.alternate !== null && v.alternate.memoizedState !== null || (Pp = pn())), s & 4 && Oo(n);
        break;
      case 22:
        if (ue = o !== null && o.memoizedState !== null, n.mode & 1 ? (Jn = (W = Jn) || ue, Ti(r, n), Jn = W) : Ti(r, n), Wi(n), s & 8192) {
          if (W = n.memoizedState !== null, (n.stateNode.isHidden = W) && !ue && n.mode & 1)
            for (ke = n, ue = n.child; ue !== null; ) {
              for (ce = ke = ue; ke !== null; ) {
                switch (ae = ke, we = ae.child, ae.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    yc(4, ae, ae.return);
                    break;
                  case 1:
                    is(ae, ae.return);
                    var Ue = ae.stateNode;
                    if (typeof Ue.componentWillUnmount == "function") {
                      s = ae, o = ae.return;
                      try {
                        r = s, Ue.props = r.memoizedProps, Ue.state = r.memoizedState, Ue.componentWillUnmount();
                      } catch (Ie) {
                        Un(s, o, Ie);
                      }
                    }
                    break;
                  case 5:
                    is(ae, ae.return);
                    break;
                  case 22:
                    if (ae.memoizedState !== null) {
                      jp(ce);
                      continue;
                    }
                }
                we !== null ? (we.return = ae, ke = we) : jp(ce);
              }
              ue = ue.sibling;
            }
          e:
            for (ue = null, ce = n; ; ) {
              if (ce.tag === 5) {
                if (ue === null) {
                  ue = ce;
                  try {
                    v = ce.stateNode, W ? (y = v.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none") : (N = ce.stateNode, k = ce.memoizedProps.style, R = k != null && k.hasOwnProperty("display") ? k.display : null, N.style.display = Ke("display", R));
                  } catch (Ie) {
                    Un(n, n.return, Ie);
                  }
                }
              } else if (ce.tag === 6) {
                if (ue === null)
                  try {
                    ce.stateNode.nodeValue = W ? "" : ce.memoizedProps;
                  } catch (Ie) {
                    Un(n, n.return, Ie);
                  }
              } else if ((ce.tag !== 22 && ce.tag !== 23 || ce.memoizedState === null || ce === n) && ce.child !== null) {
                ce.child.return = ce, ce = ce.child;
                continue;
              }
              if (ce === n)
                break e;
              for (; ce.sibling === null; ) {
                if (ce.return === null || ce.return === n)
                  break e;
                ue === ce && (ue = null), ce = ce.return;
              }
              ue === ce && (ue = null), ce.sibling.return = ce.return, ce = ce.sibling;
            }
        }
        break;
      case 19:
        Ti(r, n), Wi(n), s & 4 && Oo(n);
        break;
      case 21:
        break;
      default:
        Ti(
          r,
          n
        ), Wi(n);
    }
  }
  function Wi(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (sm(o)) {
              var s = o;
              break e;
            }
            o = o.return;
          }
          throw Error(p(160));
        }
        switch (s.tag) {
          case 5:
            var v = s.stateNode;
            s.flags & 32 && (Cn(v, ""), s.flags &= -33);
            var y = Hf(n);
            Yi(n, y, v);
            break;
          case 3:
          case 4:
            var R = s.stateNode.containerInfo, N = Hf(n);
            os(n, N, R);
            break;
          default:
            throw Error(p(161));
        }
      } catch (k) {
        Un(n, n.return, k);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function fm(n, r, o) {
    ke = n, ls(n);
  }
  function ls(n, r, o) {
    for (var s = (n.mode & 1) !== 0; ke !== null; ) {
      var v = ke, y = v.child;
      if (v.tag === 22 && s) {
        var R = v.memoizedState !== null || hc;
        if (!R) {
          var N = v.alternate, k = N !== null && N.memoizedState !== null || Jn;
          N = hc;
          var W = Jn;
          if (hc = R, (Jn = k) && !W)
            for (ke = v; ke !== null; )
              R = ke, k = R.child, R.tag === 22 && R.memoizedState !== null ? pm(v) : k !== null ? (k.return = R, ke = k) : pm(v);
          for (; y !== null; )
            ke = y, ls(y), y = y.sibling;
          ke = v, hc = N, Jn = W;
        }
        dm(n);
      } else
        v.subtreeFlags & 8772 && y !== null ? (y.return = v, ke = y) : dm(n);
    }
  }
  function dm(n) {
    for (; ke !== null; ) {
      var r = ke;
      if (r.flags & 8772) {
        var o = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Jn || gc(5, r);
                break;
              case 1:
                var s = r.stateNode;
                if (r.flags & 4 && !Jn)
                  if (o === null)
                    s.componentDidMount();
                  else {
                    var v = r.elementType === r.type ? o.memoizedProps : Ma(r.type, o.memoizedProps);
                    s.componentDidUpdate(v, o.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
                  }
                var y = r.updateQueue;
                y !== null && Ju(r, y, s);
                break;
              case 3:
                var R = r.updateQueue;
                if (R !== null) {
                  if (o = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        o = r.child.stateNode;
                        break;
                      case 1:
                        o = r.child.stateNode;
                    }
                  Ju(r, R, o);
                }
                break;
              case 5:
                var N = r.stateNode;
                if (o === null && r.flags & 4) {
                  o = N;
                  var k = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      k.autoFocus && o.focus();
                      break;
                    case "img":
                      k.src && (o.src = k.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var W = r.alternate;
                  if (W !== null) {
                    var ue = W.memoizedState;
                    if (ue !== null) {
                      var ce = ue.dehydrated;
                      ce !== null && Si(ce);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(p(163));
            }
          Jn || r.flags & 512 && Up(r);
        } catch (ae) {
          Un(r, r.return, ae);
        }
      }
      if (r === n) {
        ke = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, ke = o;
        break;
      }
      ke = r.return;
    }
  }
  function jp(n) {
    for (; ke !== null; ) {
      var r = ke;
      if (r === n) {
        ke = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, ke = o;
        break;
      }
      ke = r.return;
    }
  }
  function pm(n) {
    for (; ke !== null; ) {
      var r = ke;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              gc(4, r);
            } catch (k) {
              Un(r, o, k);
            }
            break;
          case 1:
            var s = r.stateNode;
            if (typeof s.componentDidMount == "function") {
              var v = r.return;
              try {
                s.componentDidMount();
              } catch (k) {
                Un(r, v, k);
              }
            }
            var y = r.return;
            try {
              Up(r);
            } catch (k) {
              Un(r, y, k);
            }
            break;
          case 5:
            var R = r.return;
            try {
              Up(r);
            } catch (k) {
              Un(r, R, k);
            }
        }
      } catch (k) {
        Un(r, r.return, k);
      }
      if (r === n) {
        ke = null;
        break;
      }
      var N = r.sibling;
      if (N !== null) {
        N.return = r.return, ke = N;
        break;
      }
      ke = r.return;
    }
  }
  var Bf = Math.ceil, _c = ye.ReactCurrentDispatcher, Vp = ye.ReactCurrentOwner, Ur = ye.ReactCurrentBatchConfig, Lt = 0, Nn = null, Mn = null, cr = 0, za = 0, ss = gt(0), er = 0, bc = null, xo = 0, If = 0, cs = 0, fl = null, Yr = null, Pp = 0, fs = 1 / 0, Do = null, $f = !1, dl = null, Gi = null, _u = !1, bu = null, Yf = 0, ds = 0, Wf = null, pl = -1, vl = 0;
  function zr() {
    return Lt & 6 ? pn() : pl !== -1 ? pl : pl = pn();
  }
  function $n(n) {
    return n.mode & 1 ? Lt & 2 && cr !== 0 ? cr & -cr : pf.transition !== null ? (vl === 0 && (vl = Jo()), vl) : (n = zt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Iu(n.type)), n) : 1;
  }
  function jr(n, r, o, s) {
    if (50 < ds)
      throw ds = 0, Wf = null, Error(p(185));
    _i(n, o, s), (!(Lt & 2) || n !== Nn) && (n === Nn && (!(Lt & 2) && (If |= o), er === 4 && li(n, cr)), Vr(n, s), o === 1 && Lt === 0 && !(r.mode & 1) && (fs = pn() + 500, ur && ca()));
  }
  function Vr(n, r) {
    var o = n.callbackNode;
    Wa(n, r);
    var s = Qn(n, n === Nn ? cr : 0);
    if (s === 0)
      o !== null && Pl(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = s & -s, n.callbackPriority !== r) {
      if (o != null && Pl(o), r === 1)
        n.tag === 0 ? fp(vm.bind(null, n)) : cp(vm.bind(null, n)), up(function() {
          !(Lt & 6) && ca();
        }), o = null;
      else {
        switch (fo(s)) {
          case 1:
            o = Ta;
            break;
          case 4:
            o = Ct;
            break;
          case 16:
            o = Ya;
            break;
          case 536870912:
            o = so;
            break;
          default:
            o = Ya;
        }
        o = Yp(o, ps.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function ps(n, r) {
    if (pl = -1, vl = 0, Lt & 6)
      throw Error(p(327));
    var o = n.callbackNode;
    if (hs() && n.callbackNode !== o)
      return null;
    var s = Qn(n, n === Nn ? cr : 0);
    if (s === 0)
      return null;
    if (s & 30 || s & n.expiredLanes || r)
      r = Qf(n, s);
    else {
      r = s;
      var v = Lt;
      Lt |= 2;
      var y = Gf();
      (Nn !== n || cr !== r) && (Do = null, fs = pn() + 500, hl(n, r));
      do
        try {
          Zg();
          break;
        } catch (N) {
          hm(n, N);
        }
      while (1);
      yp(), _c.current = y, Lt = v, Mn !== null ? r = 0 : (Nn = null, cr = 0, r = er);
    }
    if (r !== 0) {
      if (r === 2 && (v = xa(n), v !== 0 && (s = v, r = Fp(n, v))), r === 1)
        throw o = bc, hl(n, 0), li(n, s), Vr(n, pn()), o;
      if (r === 6)
        li(n, s);
      else {
        if (v = n.current.alternate, !(s & 30) && !Hp(v) && (r = Qf(n, s), r === 2 && (y = xa(n), y !== 0 && (s = y, r = Fp(n, y))), r === 1))
          throw o = bc, hl(n, 0), li(n, s), Vr(n, pn()), o;
        switch (n.finishedWork = v, n.finishedLanes = s, r) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            ml(n, Yr, Do);
            break;
          case 3:
            if (li(n, s), (s & 130023424) === s && (r = Pp + 500 - pn(), 10 < r)) {
              if (Qn(n, 0) !== 0)
                break;
              if (v = n.suspendedLanes, (v & s) !== s) {
                zr(), n.pingedLanes |= n.suspendedLanes & v;
                break;
              }
              n.timeoutHandle = Xu(ml.bind(null, n, Yr, Do), r);
              break;
            }
            ml(n, Yr, Do);
            break;
          case 4:
            if (li(n, s), (s & 4194240) === s)
              break;
            for (r = n.eventTimes, v = -1; 0 < s; ) {
              var R = 31 - ar(s);
              y = 1 << R, R = r[R], R > v && (v = R), s &= ~y;
            }
            if (s = v, s = pn() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * Bf(s / 1960)) - s, 10 < s) {
              n.timeoutHandle = Xu(ml.bind(null, n, Yr, Do), s);
              break;
            }
            ml(n, Yr, Do);
            break;
          case 5:
            ml(n, Yr, Do);
            break;
          default:
            throw Error(p(329));
        }
      }
    }
    return Vr(n, pn()), n.callbackNode === o ? ps.bind(null, n) : null;
  }
  function Fp(n, r) {
    var o = fl;
    return n.current.memoizedState.isDehydrated && (hl(n, r).flags |= 256), n = Qf(n, r), n !== 2 && (r = Yr, Yr = o, r !== null && Sc(r)), n;
  }
  function Sc(n) {
    Yr === null ? Yr = n : Yr.push.apply(Yr, n);
  }
  function Hp(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null))
          for (var s = 0; s < o.length; s++) {
            var v = o[s], y = v.getSnapshot;
            v = v.value;
            try {
              if (!Za(y(), v))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (o = r.child, r.subtreeFlags & 16384 && o !== null)
        o.return = r, r = o;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function li(n, r) {
    for (r &= ~cs, r &= ~If, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - ar(r), s = 1 << o;
      n[o] = -1, r &= ~s;
    }
  }
  function vm(n) {
    if (Lt & 6)
      throw Error(p(327));
    hs();
    var r = Qn(n, 0);
    if (!(r & 1))
      return Vr(n, pn()), null;
    var o = Qf(n, r);
    if (n.tag !== 0 && o === 2) {
      var s = xa(n);
      s !== 0 && (r = s, o = Fp(n, s));
    }
    if (o === 1)
      throw o = bc, hl(n, 0), li(n, r), Vr(n, pn()), o;
    if (o === 6)
      throw Error(p(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, ml(n, Yr, Do), Vr(n, pn()), null;
  }
  function vs(n, r) {
    var o = Lt;
    Lt |= 1;
    try {
      return n(r);
    } finally {
      Lt = o, Lt === 0 && (fs = pn() + 500, ur && ca());
    }
  }
  function Su(n) {
    bu !== null && bu.tag === 0 && !(Lt & 6) && hs();
    var r = Lt;
    Lt |= 1;
    var o = Ur.transition, s = zt;
    try {
      if (Ur.transition = null, zt = 1, n)
        return n();
    } finally {
      zt = s, Ur.transition = o, Lt = r, !(Lt & 6) && ca();
    }
  }
  function Bp() {
    za = ss.current, Xt(ss);
  }
  function hl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, Bh(o)), Mn !== null)
      for (o = Mn.return; o !== null; ) {
        var s = o;
        switch (pp(s), s.tag) {
          case 1:
            s = s.type.childContextTypes, s != null && ti();
            break;
          case 3:
            hu(), Xt(Ln), Xt(st), _f();
            break;
          case 5:
            Ot(s);
            break;
          case 4:
            hu();
            break;
          case 13:
            Xt(rt);
            break;
          case 19:
            Xt(rt);
            break;
          case 10:
            fu(s.type._context);
            break;
          case 22:
          case 23:
            Bp();
        }
        o = o.return;
      }
    if (Nn = n, Mn = n = Eu(n.current, null), cr = za = r, er = 0, bc = null, cs = If = xo = 0, Yr = fl = null, gr !== null) {
      for (r = 0; r < gr.length; r++)
        if (o = gr[r], s = o.interleaved, s !== null) {
          o.interleaved = null;
          var v = s.next, y = o.pending;
          if (y !== null) {
            var R = y.next;
            y.next = v, s.next = R;
          }
          o.pending = s;
        }
      gr = null;
    }
    return n;
  }
  function hm(n, r) {
    do {
      var o = Mn;
      try {
        if (yp(), bf.current = zf, it) {
          for (var s = _n.memoizedState; s !== null; ) {
            var v = s.queue;
            v !== null && (v.pending = null), s = s.next;
          }
          it = !1;
        }
        if (tl = 0, jt = q = _n = null, $i = !1, Ua = 0, Vp.current = null, o === null || o.return === null) {
          er = 1, bc = r, Mn = null;
          break;
        }
        e: {
          var y = n, R = o.return, N = o, k = r;
          if (r = cr, N.flags |= 32768, k !== null && typeof k == "object" && typeof k.then == "function") {
            var W = k, ue = N, ce = ue.tag;
            if (!(ue.mode & 1) && (ce === 0 || ce === 11 || ce === 15)) {
              var ae = ue.alternate;
              ae ? (ue.updateQueue = ae.updateQueue, ue.memoizedState = ae.memoizedState, ue.lanes = ae.lanes) : (ue.updateQueue = null, ue.memoizedState = null);
            }
            var we = Tp(R);
            if (we !== null) {
              we.flags &= -257, Op(we, R, N, y, r), we.mode & 1 && rm(y, W, r), r = we, k = W;
              var Ue = r.updateQueue;
              if (Ue === null) {
                var Ie = /* @__PURE__ */ new Set();
                Ie.add(k), r.updateQueue = Ie;
              } else
                Ue.add(k);
              break e;
            } else {
              if (!(r & 1)) {
                rm(y, W, r), Ip();
                break e;
              }
              k = Error(p(426));
            }
          } else if (gn && N.mode & 1) {
            var Vn = Tp(R);
            if (Vn !== null) {
              !(Vn.flags & 65536) && (Vn.flags |= 256), Op(Vn, R, N, y, r), hp(ns(k, N));
              break e;
            }
          }
          y = k = ns(k, N), er !== 4 && (er = 2), fl === null ? fl = [y] : fl.push(y), y = R;
          do {
            switch (y.tag) {
              case 3:
                y.flags |= 65536, r &= -r, y.lanes |= r;
                var P = nm(y, k, r);
                bp(y, P);
                break e;
              case 1:
                N = k;
                var U = y.type, I = y.stateNode;
                if (!(y.flags & 128) && (typeof U.getDerivedStateFromError == "function" || I !== null && typeof I.componentDidCatch == "function" && (Gi === null || !Gi.has(I)))) {
                  y.flags |= 65536, r &= -r, y.lanes |= r;
                  var he = dc(y, N, r);
                  bp(y, he);
                  break e;
                }
            }
            y = y.return;
          } while (y !== null);
        }
        $p(o);
      } catch (We) {
        r = We, Mn === o && o !== null && (Mn = o = o.return);
        continue;
      }
      break;
    } while (1);
  }
  function Gf() {
    var n = _c.current;
    return _c.current = zf, n === null ? zf : n;
  }
  function Ip() {
    (er === 0 || er === 3 || er === 2) && (er = 4), Nn === null || !(xo & 268435455) && !(If & 268435455) || li(Nn, cr);
  }
  function Qf(n, r) {
    var o = Lt;
    Lt |= 2;
    var s = Gf();
    (Nn !== n || cr !== r) && (Do = null, hl(n, r));
    do
      try {
        qg();
        break;
      } catch (v) {
        hm(n, v);
      }
    while (1);
    if (yp(), Lt = o, _c.current = s, Mn !== null)
      throw Error(p(261));
    return Nn = null, cr = 0, er;
  }
  function qg() {
    for (; Mn !== null; )
      mm(Mn);
  }
  function Zg() {
    for (; Mn !== null && !Fs(); )
      mm(Mn);
  }
  function mm(n) {
    var r = gm(n.alternate, n, za);
    n.memoizedProps = n.pendingProps, r === null ? $p(n) : Mn = r, Vp.current = null;
  }
  function $p(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = Mp(o, r), o !== null) {
          o.flags &= 32767, Mn = o;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          er = 6, Mn = null;
          return;
        }
      } else if (o = Xg(o, r, za), o !== null) {
        Mn = o;
        return;
      }
      if (r = r.sibling, r !== null) {
        Mn = r;
        return;
      }
      Mn = r = n;
    } while (r !== null);
    er === 0 && (er = 5);
  }
  function ml(n, r, o) {
    var s = zt, v = Ur.transition;
    try {
      Ur.transition = null, zt = 1, Jg(n, r, o, s);
    } finally {
      Ur.transition = v, zt = s;
    }
    return null;
  }
  function Jg(n, r, o, s) {
    do
      hs();
    while (bu !== null);
    if (Lt & 6)
      throw Error(p(327));
    o = n.finishedWork;
    var v = n.finishedLanes;
    if (o === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current)
      throw Error(p(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var y = o.lanes | o.childLanes;
    if (Is(n, y), n === Nn && (Mn = Nn = null, cr = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || _u || (_u = !0, Yp(Ya, function() {
      return hs(), null;
    })), y = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || y) {
      y = Ur.transition, Ur.transition = null;
      var R = zt;
      zt = 1;
      var N = Lt;
      Lt |= 4, Vp.current = null, lm(n, o), cm(o, n), tf(Ku), mr = !!ip, Ku = ip = null, n.current = o, fm(o), Hs(), Lt = N, zt = R, Ur.transition = y;
    } else
      n.current = o;
    if (_u && (_u = !1, bu = n, Yf = v), y = n.pendingLanes, y === 0 && (Gi = null), Ko(o.stateNode), Vr(n, pn()), r !== null)
      for (s = n.onRecoverableError, o = 0; o < r.length; o++)
        v = r[o], s(v.value, { componentStack: v.stack, digest: v.digest });
    if ($f)
      throw $f = !1, n = dl, dl = null, n;
    return Yf & 1 && n.tag !== 0 && hs(), y = n.pendingLanes, y & 1 ? n === Wf ? ds++ : (ds = 0, Wf = n) : ds = 0, ca(), null;
  }
  function hs() {
    if (bu !== null) {
      var n = fo(Yf), r = Ur.transition, o = zt;
      try {
        if (Ur.transition = null, zt = 16 > n ? 16 : n, bu === null)
          var s = !1;
        else {
          if (n = bu, bu = null, Yf = 0, Lt & 6)
            throw Error(p(331));
          var v = Lt;
          for (Lt |= 4, ke = n.current; ke !== null; ) {
            var y = ke, R = y.child;
            if (ke.flags & 16) {
              var N = y.deletions;
              if (N !== null) {
                for (var k = 0; k < N.length; k++) {
                  var W = N[k];
                  for (ke = W; ke !== null; ) {
                    var ue = ke;
                    switch (ue.tag) {
                      case 0:
                      case 11:
                      case 15:
                        yc(8, ue, y);
                    }
                    var ce = ue.child;
                    if (ce !== null)
                      ce.return = ue, ke = ce;
                    else
                      for (; ke !== null; ) {
                        ue = ke;
                        var ae = ue.sibling, we = ue.return;
                        if (zp(ue), ue === W) {
                          ke = null;
                          break;
                        }
                        if (ae !== null) {
                          ae.return = we, ke = ae;
                          break;
                        }
                        ke = we;
                      }
                  }
                }
                var Ue = y.alternate;
                if (Ue !== null) {
                  var Ie = Ue.child;
                  if (Ie !== null) {
                    Ue.child = null;
                    do {
                      var Vn = Ie.sibling;
                      Ie.sibling = null, Ie = Vn;
                    } while (Ie !== null);
                  }
                }
                ke = y;
              }
            }
            if (y.subtreeFlags & 2064 && R !== null)
              R.return = y, ke = R;
            else
              e:
                for (; ke !== null; ) {
                  if (y = ke, y.flags & 2048)
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        yc(9, y, y.return);
                    }
                  var P = y.sibling;
                  if (P !== null) {
                    P.return = y.return, ke = P;
                    break e;
                  }
                  ke = y.return;
                }
          }
          var U = n.current;
          for (ke = U; ke !== null; ) {
            R = ke;
            var I = R.child;
            if (R.subtreeFlags & 2064 && I !== null)
              I.return = R, ke = I;
            else
              e:
                for (R = U; ke !== null; ) {
                  if (N = ke, N.flags & 2048)
                    try {
                      switch (N.tag) {
                        case 0:
                        case 11:
                        case 15:
                          gc(9, N);
                      }
                    } catch (We) {
                      Un(N, N.return, We);
                    }
                  if (N === R) {
                    ke = null;
                    break e;
                  }
                  var he = N.sibling;
                  if (he !== null) {
                    he.return = N.return, ke = he;
                    break e;
                  }
                  ke = N.return;
                }
          }
          if (Lt = v, ca(), vr && typeof vr.onPostCommitFiberRoot == "function")
            try {
              vr.onPostCommitFiberRoot(gi, n);
            } catch {
            }
          s = !0;
        }
        return s;
      } finally {
        zt = o, Ur.transition = r;
      }
    }
    return !1;
  }
  function ym(n, r, o) {
    r = ns(o, r), r = nm(n, r, 1), n = pu(n, r, 1), r = zr(), n !== null && (_i(n, 1, r), Vr(n, r));
  }
  function Un(n, r, o) {
    if (n.tag === 3)
      ym(n, n, o);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          ym(r, n, o);
          break;
        } else if (r.tag === 1) {
          var s = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (Gi === null || !Gi.has(s))) {
            n = ns(o, n), n = dc(r, n, 1), r = pu(r, n, 1), n = zr(), r !== null && (_i(r, 1, n), Vr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function e_(n, r, o) {
    var s = n.pingCache;
    s !== null && s.delete(r), r = zr(), n.pingedLanes |= n.suspendedLanes & o, Nn === n && (cr & o) === o && (er === 4 || er === 3 && (cr & 130023424) === cr && 500 > pn() - Pp ? hl(n, 0) : cs |= o), Vr(n, r);
  }
  function Kf(n, r) {
    r === 0 && (n.mode & 1 ? (r = zi, zi <<= 1, !(zi & 130023424) && (zi = 4194304)) : r = 1);
    var o = zr();
    n = Co(n, r), n !== null && (_i(n, r, o), Vr(n, o));
  }
  function t_(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), Kf(n, o);
  }
  function n_(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var s = n.stateNode, v = n.memoizedState;
        v !== null && (o = v.retryLane);
        break;
      case 19:
        s = n.stateNode;
        break;
      default:
        throw Error(p(314));
    }
    s !== null && s.delete(r), Kf(n, o);
  }
  var gm;
  gm = function(n, r, o) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Ln.current)
        In = !0;
      else {
        if (!(n.lanes & o) && !(r.flags & 128))
          return In = !1, To(n, r, o);
        In = !!(n.flags & 131072);
      }
    else
      In = !1, gn && r.flags & 1048576 && dp(r, Kl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var s = r.type;
        Lr(n, r), n = r.pendingProps;
        var v = ei(r, st.current);
        ge(r, o), v = mu(null, r, s, n, v, o);
        var y = al();
        return r.flags |= 1, typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Rn(s) ? (y = !0, lf(r)) : y = !1, r.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, _p(r), v.updater = mf, r.stateNode = v, v._reactInternals = r, yf(r, s, n, o), r = am(null, r, s, !0, y, o)) : (r.tag = 0, gn && y && sf(r), qn(null, r, v, o), r = r.child), r;
      case 16:
        s = r.elementType;
        e: {
          switch (Lr(n, r), n = r.pendingProps, v = s._init, s = v(s._payload), r.type = s, v = r.tag = a_(s), n = Ma(s, n), v) {
            case 0:
              r = rs(null, r, s, n, o);
              break e;
            case 1:
              r = xp(null, r, s, n, o);
              break e;
            case 11:
              r = gu(null, r, s, n, o);
              break e;
            case 14:
              r = Vf(null, r, s, Ma(s.type, n), o);
              break e;
          }
          throw Error(p(
            306,
            s,
            ""
          ));
        }
        return r;
      case 0:
        return s = r.type, v = r.pendingProps, v = r.elementType === s ? v : Ma(s, v), rs(n, r, s, v, o);
      case 1:
        return s = r.type, v = r.pendingProps, v = r.elementType === s ? v : Ma(s, v), xp(n, r, s, v, o);
      case 3:
        e: {
          if (im(r), n === null)
            throw Error(p(387));
          s = r.pendingProps, y = r.memoizedState, v = y.element, Xn(n, r), vu(r, s, null, o);
          var R = r.memoizedState;
          if (s = R.element, y.isDehydrated)
            if (y = { element: s, isDehydrated: !1, cache: R.cache, pendingSuspenseBoundaries: R.pendingSuspenseBoundaries, transitions: R.transitions }, r.updateQueue.baseState = y, r.memoizedState = y, r.flags & 256) {
              v = ns(Error(p(423)), r), r = Pf(n, r, s, o, v);
              break e;
            } else if (s !== v) {
              v = ns(Error(p(424)), r), r = Pf(n, r, s, o, v);
              break e;
            } else
              for (pa = Ri(r.stateNode.containerInfo.firstChild), La = r, gn = !0, ri = null, o = em(r, null, s, o), r.child = o; o; )
                o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (xn(), s === v) {
              r = _r(n, r, o);
              break e;
            }
            qn(n, r, s, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return et(r), n === null && ff(r), s = r.type, v = r.pendingProps, y = n !== null ? n.memoizedProps : null, R = v.children, ec(s, v) ? R = null : y !== null && ec(s, y) && (r.flags |= 32), _t(n, r), qn(n, r, R, o), r.child;
      case 6:
        return n === null && ff(r), null;
      case 13:
        return Np(n, r, o);
      case 4:
        return Ep(r, r.stateNode.containerInfo), s = r.pendingProps, n === null ? r.child = ql(r, null, s, o) : qn(n, r, s, o), r.child;
      case 11:
        return s = r.type, v = r.pendingProps, v = r.elementType === s ? v : Ma(s, v), gu(n, r, s, v, o);
      case 7:
        return qn(n, r, r.pendingProps, o), r.child;
      case 8:
        return qn(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return qn(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (s = r.type._context, v = r.pendingProps, y = r.memoizedProps, R = v.value, Zt(Ii, s._currentValue), s._currentValue = R, y !== null)
            if (Za(y.value, R)) {
              if (y.children === v.children && !Ln.current) {
                r = _r(n, r, o);
                break e;
              }
            } else
              for (y = r.child, y !== null && (y.return = r); y !== null; ) {
                var N = y.dependencies;
                if (N !== null) {
                  R = y.child;
                  for (var k = N.firstContext; k !== null; ) {
                    if (k.context === s) {
                      if (y.tag === 1) {
                        k = Ro(-1, o & -o), k.tag = 2;
                        var W = y.updateQueue;
                        if (W !== null) {
                          W = W.shared;
                          var ue = W.pending;
                          ue === null ? k.next = k : (k.next = ue.next, ue.next = k), W.pending = k;
                        }
                      }
                      y.lanes |= o, k = y.alternate, k !== null && (k.lanes |= o), lr(
                        y.return,
                        o,
                        r
                      ), N.lanes |= o;
                      break;
                    }
                    k = k.next;
                  }
                } else if (y.tag === 10)
                  R = y.type === r.type ? null : y.child;
                else if (y.tag === 18) {
                  if (R = y.return, R === null)
                    throw Error(p(341));
                  R.lanes |= o, N = R.alternate, N !== null && (N.lanes |= o), lr(R, o, r), R = y.sibling;
                } else
                  R = y.child;
                if (R !== null)
                  R.return = y;
                else
                  for (R = y; R !== null; ) {
                    if (R === r) {
                      R = null;
                      break;
                    }
                    if (y = R.sibling, y !== null) {
                      y.return = R.return, R = y;
                      break;
                    }
                    R = R.return;
                  }
                y = R;
              }
          qn(n, r, v.children, o), r = r.child;
        }
        return r;
      case 9:
        return v = r.type, s = r.pendingProps.children, ge(r, o), v = jn(v), s = s(v), r.flags |= 1, qn(n, r, s, o), r.child;
      case 14:
        return s = r.type, v = Ma(s, r.pendingProps), v = Ma(s.type, v), Vf(n, r, s, v, o);
      case 15:
        return ma(n, r, r.type, r.pendingProps, o);
      case 17:
        return s = r.type, v = r.pendingProps, v = r.elementType === s ? v : Ma(s, v), Lr(n, r), r.tag = 1, Rn(s) ? (n = !0, lf(r)) : n = !1, ge(r, o), Xh(r, s, v), yf(r, s, v, o), am(null, r, s, !0, n, o);
      case 19:
        return Lp(n, r, o);
      case 22:
        return ll(n, r, o);
    }
    throw Error(p(156, r.tag));
  };
  function Yp(n, r) {
    return Fu(n, r);
  }
  function r_(n, r, o, s) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function si(n, r, o, s) {
    return new r_(n, r, o, s);
  }
  function Wp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function a_(n) {
    if (typeof n == "function")
      return Wp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === fn)
        return 11;
      if (n === Nt)
        return 14;
    }
    return 2;
  }
  function Eu(n, r) {
    var o = n.alternate;
    return o === null ? (o = si(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function Xf(n, r, o, s, v, y) {
    var R = 2;
    if (s = n, typeof n == "function")
      Wp(n) && (R = 1);
    else if (typeof n == "string")
      R = 5;
    else
      e:
        switch (n) {
          case Ce:
            return yl(o.children, v, y, r);
          case mt:
            R = 8, v |= 8;
            break;
          case Et:
            return n = si(12, o, r, v | 2), n.elementType = Et, n.lanes = y, n;
          case ot:
            return n = si(13, o, r, v), n.elementType = ot, n.lanes = y, n;
          case ht:
            return n = si(19, o, r, v), n.elementType = ht, n.lanes = y, n;
          case J:
            return Ec(o, v, y, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Tt:
                  R = 10;
                  break e;
                case Dt:
                  R = 9;
                  break e;
                case fn:
                  R = 11;
                  break e;
                case Nt:
                  R = 14;
                  break e;
                case bt:
                  R = 16, s = null;
                  break e;
              }
            throw Error(p(130, n == null ? n : typeof n, ""));
        }
    return r = si(R, o, r, v), r.elementType = n, r.type = s, r.lanes = y, r;
  }
  function yl(n, r, o, s) {
    return n = si(7, n, s, r), n.lanes = o, n;
  }
  function Ec(n, r, o, s) {
    return n = si(22, n, s, r), n.elementType = J, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function Cc(n, r, o) {
    return n = si(6, n, null, r), n.lanes = o, n;
  }
  function gl(n, r, o) {
    return r = si(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function i_(n, r, o, s, v) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = co(0), this.expirationTimes = co(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = co(0), this.identifierPrefix = s, this.onRecoverableError = v, this.mutableSourceEagerHydrationData = null;
  }
  function qf(n, r, o, s, v, y, R, N, k) {
    return n = new i_(n, r, o, N, k), r === 1 ? (r = 1, y === !0 && (r |= 8)) : r = 0, y = si(3, null, null, r), n.current = y, y.stateNode = n, y.memoizedState = { element: s, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, _p(y), n;
  }
  function _m(n, r, o) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: de, key: s == null ? null : "" + s, children: n, containerInfo: r, implementation: o };
  }
  function Gp(n) {
    if (!n)
      return Bi;
    n = n._reactInternals;
    e: {
      if (aa(n) !== n || n.tag !== 1)
        throw Error(p(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Rn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(p(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (Rn(o))
        return rc(n, o, r);
    }
    return r;
  }
  function bm(n, r, o, s, v, y, R, N, k) {
    return n = qf(o, s, !0, n, v, y, R, N, k), n.context = Gp(null), o = n.current, s = zr(), v = $n(o), y = Ro(s, v), y.callback = r ?? null, pu(o, y, v), n.current.lanes = v, _i(n, v, s), Vr(n, s), n;
  }
  function Rc(n, r, o, s) {
    var v = r.current, y = zr(), R = $n(v);
    return o = Gp(o), r.context === null ? r.context = o : r.pendingContext = o, r = Ro(y, R), r.payload = { element: n }, s = s === void 0 ? null : s, s !== null && (r.callback = s), n = pu(v, r, R), n !== null && (jr(n, v, R, y), hf(n, v, R)), R;
  }
  function Zf(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Sm(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function Qp(n, r) {
    Sm(n, r), (n = n.alternate) && Sm(n, r);
  }
  function Em() {
    return null;
  }
  var Kp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Jf(n) {
    this._internalRoot = n;
  }
  No.prototype.render = Jf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(p(409));
    Rc(n, r, null, null);
  }, No.prototype.unmount = Jf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Su(function() {
        Rc(null, n, null, null);
      }), r[So] = null;
    }
  };
  function No(n) {
    this._internalRoot = n;
  }
  No.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = ji();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < Wt.length && r !== 0 && r < Wt[o].priority; o++)
        ;
      Wt.splice(o, 0, n), o === 0 && Fl(n);
    }
  };
  function Xp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function ed(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Cm() {
  }
  function o_(n, r, o, s, v) {
    if (v) {
      if (typeof s == "function") {
        var y = s;
        s = function() {
          var W = Zf(R);
          y.call(W);
        };
      }
      var R = bm(r, s, n, 0, null, !1, !1, "", Cm);
      return n._reactRootContainer = R, n[So] = R.current, Gl(n.nodeType === 8 ? n.parentNode : n), Su(), R;
    }
    for (; v = n.lastChild; )
      n.removeChild(v);
    if (typeof s == "function") {
      var N = s;
      s = function() {
        var W = Zf(k);
        N.call(W);
      };
    }
    var k = qf(n, 0, !1, null, null, !1, !1, "", Cm);
    return n._reactRootContainer = k, n[So] = k.current, Gl(n.nodeType === 8 ? n.parentNode : n), Su(function() {
      Rc(r, k, o, s);
    }), k;
  }
  function td(n, r, o, s, v) {
    var y = o._reactRootContainer;
    if (y) {
      var R = y;
      if (typeof v == "function") {
        var N = v;
        v = function() {
          var k = Zf(R);
          N.call(k);
        };
      }
      Rc(r, R, n, v);
    } else
      R = o_(o, r, n, v, s);
    return Zf(R);
  }
  Ga = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = Ir(r.pendingLanes);
          o !== 0 && ($r(r, o | 1), Vr(r, pn()), !(Lt & 6) && (fs = pn() + 500, ca()));
        }
        break;
      case 13:
        Su(function() {
          var s = Co(n, 1);
          if (s !== null) {
            var v = zr();
            jr(s, n, 1, v);
          }
        }), Qp(n, 1);
    }
  }, eu = function(n) {
    if (n.tag === 13) {
      var r = Co(n, 134217728);
      if (r !== null) {
        var o = zr();
        jr(r, n, 134217728, o);
      }
      Qp(n, 134217728);
    }
  }, Rt = function(n) {
    if (n.tag === 13) {
      var r = $n(n), o = Co(n, r);
      if (o !== null) {
        var s = zr();
        jr(o, n, r, s);
      }
      Qp(n, r);
    }
  }, ji = function() {
    return zt;
  }, po = function(n, r) {
    var o = zt;
    try {
      return zt = n, r();
    } finally {
      zt = o;
    }
  }, na = function(n, r, o) {
    switch (r) {
      case "input":
        if (tt(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; )
            o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var s = o[r];
            if (s !== n && s.form === n.form) {
              var v = Xe(s);
              if (!v)
                throw Error(p(90));
              Hr(s), tt(s, v);
            }
          }
        }
        break;
      case "textarea":
        Tn(n, o);
        break;
      case "select":
        r = o.value, r != null && Bt(n, !!o.multiple, r, !1);
    }
  }, Ul = vs, zl = Su;
  var u_ = { usingClientEntryPoint: !1, Events: [nc, Ql, Xe, ra, Go, vs] }, ms = { findFiberByHostInstance: Ja, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, l_ = { bundleType: ms.bundleType, version: ms.version, rendererPackageName: ms.rendererPackageName, rendererConfig: ms.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ye.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = jl(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: ms.findFiberByHostInstance || Em, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var nd = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!nd.isDisabled && nd.supportsFiber)
      try {
        gi = nd.inject(l_), vr = nd;
      } catch {
      }
  }
  return hi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = u_, hi.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Xp(r))
      throw Error(p(200));
    return _m(n, r, null, o);
  }, hi.createRoot = function(n, r) {
    if (!Xp(n))
      throw Error(p(299));
    var o = !1, s = "", v = Kp;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (s = r.identifierPrefix), r.onRecoverableError !== void 0 && (v = r.onRecoverableError)), r = qf(n, 1, !1, null, null, o, !1, s, v), n[So] = r.current, Gl(n.nodeType === 8 ? n.parentNode : n), new Jf(r);
  }, hi.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(p(188)) : (n = Object.keys(n).join(","), Error(p(268, n)));
    return n = jl(r), n = n === null ? null : n.stateNode, n;
  }, hi.flushSync = function(n) {
    return Su(n);
  }, hi.hydrate = function(n, r, o) {
    if (!ed(r))
      throw Error(p(200));
    return td(null, n, r, !0, o);
  }, hi.hydrateRoot = function(n, r, o) {
    if (!Xp(n))
      throw Error(p(405));
    var s = o != null && o.hydratedSources || null, v = !1, y = "", R = Kp;
    if (o != null && (o.unstable_strictMode === !0 && (v = !0), o.identifierPrefix !== void 0 && (y = o.identifierPrefix), o.onRecoverableError !== void 0 && (R = o.onRecoverableError)), r = bm(r, null, n, 1, o ?? null, v, !1, y, R), n[So] = r.current, Gl(n), s)
      for (n = 0; n < s.length; n++)
        o = s[n], v = o._getVersion, v = v(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, v] : r.mutableSourceEagerHydrationData.push(
          o,
          v
        );
    return new No(r);
  }, hi.render = function(n, r, o) {
    if (!ed(r))
      throw Error(p(200));
    return td(null, n, r, !1, o);
  }, hi.unmountComponentAtNode = function(n) {
    if (!ed(n))
      throw Error(p(40));
    return n._reactRootContainer ? (Su(function() {
      td(null, null, n, !1, function() {
        n._reactRootContainer = null, n[So] = null;
      });
    }), !0) : !1;
  }, hi.unstable_batchedUpdates = vs, hi.unstable_renderSubtreeIntoContainer = function(n, r, o, s) {
    if (!ed(o))
      throw Error(p(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(p(38));
    return td(n, r, o, !1, s);
  }, hi.version = "18.2.0-next-9e3b772b8-20220608", hi;
}
var mi = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zw;
function KL() {
  return zw || (zw = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var l = Ca, c = Z1(), p = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, h = !1;
    function b(e) {
      h = e;
    }
    function C(e) {
      if (!h) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        A("warn", e, a);
      }
    }
    function _(e) {
      if (!h) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        A("error", e, a);
      }
    }
    function A(e, t, a) {
      {
        var i = p.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var f = a.map(function(m) {
          return String(m);
        });
        f.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var L = 0, B = 1, ie = 2, X = 3, te = 4, re = 5, De = 6, $e = 7, Ae = 8, It = 9, xt = 10, be = 11, ye = 12, fe = 13, de = 14, Ce = 15, mt = 16, Et = 17, Tt = 18, Dt = 19, fn = 21, ot = 22, ht = 23, Nt = 24, bt = 25, J = !0, le = !1, Pe = !1, w = !1, j = !1, ee = !0, Se = !1, me = !1, Fe = !0, He = !0, Ye = !0, Ve = /* @__PURE__ */ new Set(), yt = {}, Fr = {};
    function nr(e, t) {
      Hr(e, t), Hr(e + "Capture", t);
    }
    function Hr(e, t) {
      yt[e] && _("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), yt[e] = t;
      {
        var a = e.toLowerCase();
        Fr[a] = e, e === "onDoubleClick" && (Fr.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Ve.add(t[i]);
    }
    var nn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Fn = Object.prototype.hasOwnProperty;
    function Wn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Le(e) {
      try {
        return tt(e), !1;
      } catch {
        return !0;
      }
    }
    function tt(e) {
      return "" + e;
    }
    function Yt(e, t) {
      if (Le(e))
        return _("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Wn(e)), tt(e);
    }
    function rn(e) {
      if (Le(e))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Wn(e)), tt(e);
    }
    function Ut(e, t) {
      if (Le(e))
        return _("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Wn(e)), tt(e);
    }
    function Bt(e, t) {
      if (Le(e))
        return _("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Wn(e)), tt(e);
    }
    function hn(e) {
      if (Le(e))
        return _("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Wn(e)), tt(e);
    }
    function wt(e) {
      if (Le(e))
        return _("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Wn(e)), tt(e);
    }
    var Tn = 0, tn = 1, En = 2, Kt = 3, zn = 4, rr = 5, Cn = 6, ve = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Me = ve + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ke = new RegExp("^[" + ve + "][" + Me + "]*$"), kt = {}, pt = {};
    function An(e) {
      return Fn.call(pt, e) ? !0 : Fn.call(kt, e) ? !1 : Ke.test(e) ? (pt[e] = !0, !0) : (kt[e] = !0, _("Invalid attribute name: `%s`", e), !1);
    }
    function On(e, t, a) {
      return t !== null ? t.type === Tn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Nr(e, t, a, i) {
      if (a !== null && a.type === Tn)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function an(e, t, a, i) {
      if (t === null || typeof t > "u" || Nr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Kt:
            return !t;
          case zn:
            return t === !1;
          case rr:
            return isNaN(t);
          case Cn:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function na(e) {
      return qt.hasOwnProperty(e) ? qt[e] : null;
    }
    function dn(e, t, a, i, u, f, m) {
      this.acceptsBooleans = t === En || t === Kt || t === zn, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = f, this.removeEmptyString = m;
    }
    var qt = {}, Ia = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Ia.forEach(function(e) {
      qt[e] = new dn(
        e,
        Tn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      qt[t] = new dn(
        t,
        tn,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      qt[e] = new dn(
        e,
        En,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      qt[e] = new dn(
        e,
        En,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      qt[e] = new dn(
        e,
        Kt,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      qt[e] = new dn(
        e,
        Kt,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      qt[e] = new dn(
        e,
        zn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      qt[e] = new dn(
        e,
        Cn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      qt[e] = new dn(
        e,
        rr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ra = /[\-\:]([a-z])/g, Go = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ra, Go);
      qt[t] = new dn(
        t,
        tn,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ra, Go);
      qt[t] = new dn(
        t,
        tn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ra, Go);
      qt[t] = new dn(
        t,
        tn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      qt[e] = new dn(
        e,
        tn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Ul = "xlinkHref";
    qt[Ul] = new dn(
      "xlinkHref",
      tn,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      qt[e] = new dn(
        e,
        tn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var zl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Qo = !1;
    function Vu(e) {
      !Qo && zl.test(e) && (Qo = !0, _("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function pr(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Yt(a, t), i.sanitizeURL && Vu("" + a);
        var f = i.attributeName, m = null;
        if (i.type === zn) {
          if (e.hasAttribute(f)) {
            var g = e.getAttribute(f);
            return g === "" ? !0 : an(t, a, i, !1) ? g : g === "" + a ? a : g;
          }
        } else if (e.hasAttribute(f)) {
          if (an(t, a, i, !1))
            return e.getAttribute(f);
          if (i.type === Kt)
            return a;
          m = e.getAttribute(f);
        }
        return an(t, a, i, !1) ? m === null ? a : m : m === "" + a ? a : m;
      }
    }
    function $a(e, t, a, i) {
      {
        if (!An(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Yt(a, t), u === "" + a ? a : u;
      }
    }
    function Ra(e, t, a, i) {
      var u = na(t);
      if (!On(t, u, i)) {
        if (an(t, a, u, i) && (a = null), i || u === null) {
          if (An(t)) {
            var f = t;
            a === null ? e.removeAttribute(f) : (Yt(a, t), e.setAttribute(f, "" + a));
          }
          return;
        }
        var m = u.mustUseProperty;
        if (m) {
          var g = u.propertyName;
          if (a === null) {
            var E = u.type;
            e[g] = E === Kt ? !1 : "";
          } else
            e[g] = a;
          return;
        }
        var T = u.attributeName, x = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(T);
        else {
          var z = u.type, M;
          z === Kt || z === zn && a === !0 ? M = "" : (Yt(a, T), M = "" + a, u.sanitizeURL && Vu(M.toString())), x ? e.setAttributeNS(x, T, M) : e.setAttribute(T, M);
        }
      }
    }
    var Li = Symbol.for("react.element"), Br = Symbol.for("react.portal"), wa = Symbol.for("react.fragment"), Mi = Symbol.for("react.strict_mode"), yi = Symbol.for("react.profiler"), uo = Symbol.for("react.provider"), Pu = Symbol.for("react.context"), At = Symbol.for("react.forward_ref"), aa = Symbol.for("react.suspense"), lo = Symbol.for("react.suspense_list"), Ui = Symbol.for("react.memo"), Gn = Symbol.for("react.lazy"), jl = Symbol.for("react.scope"), Vl = Symbol.for("react.debug_trace_mode"), Fu = Symbol.for("react.offscreen"), Pl = Symbol.for("react.legacy_hidden"), Fs = Symbol.for("react.cache"), Hs = Symbol.for("react.tracing_marker"), pn = Symbol.iterator, Bs = "@@iterator";
    function Ta(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = pn && e[pn] || e[Bs];
      return typeof t == "function" ? t : null;
    }
    var Ct = Object.assign, Ya = 0, ia, so, gi, vr, Ko, ar, Xo;
    function qo() {
    }
    qo.__reactDisabledLog = !0;
    function Hu() {
      {
        if (Ya === 0) {
          ia = console.log, so = console.info, gi = console.warn, vr = console.error, Ko = console.group, ar = console.groupCollapsed, Xo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: qo,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Ya++;
      }
    }
    function Zo() {
      {
        if (Ya--, Ya === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ct({}, e, {
              value: ia
            }),
            info: Ct({}, e, {
              value: so
            }),
            warn: Ct({}, e, {
              value: gi
            }),
            error: Ct({}, e, {
              value: vr
            }),
            group: Ct({}, e, {
              value: Ko
            }),
            groupCollapsed: Ct({}, e, {
              value: ar
            }),
            groupEnd: Ct({}, e, {
              value: Xo
            })
          });
        }
        Ya < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var zi = p.ReactCurrentDispatcher, Ir;
    function Qn(e, t, a) {
      {
        if (Ir === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            Ir = i && i[1] || "";
          }
        return `
` + Ir + e;
      }
    }
    var Oa = !1, Wa;
    {
      var xa = typeof WeakMap == "function" ? WeakMap : Map;
      Wa = new xa();
    }
    function Jo(e, t) {
      if (!e || Oa)
        return "";
      {
        var a = Wa.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Oa = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = zi.current, zi.current = null, Hu();
      try {
        if (t) {
          var m = function() {
            throw Error();
          };
          if (Object.defineProperty(m.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(m, []);
            } catch (Y) {
              i = Y;
            }
            Reflect.construct(e, [], m);
          } else {
            try {
              m.call();
            } catch (Y) {
              i = Y;
            }
            e.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Y) {
            i = Y;
          }
          e();
        }
      } catch (Y) {
        if (Y && i && typeof Y.stack == "string") {
          for (var g = Y.stack.split(`
`), E = i.stack.split(`
`), T = g.length - 1, x = E.length - 1; T >= 1 && x >= 0 && g[T] !== E[x]; )
            x--;
          for (; T >= 1 && x >= 0; T--, x--)
            if (g[T] !== E[x]) {
              if (T !== 1 || x !== 1)
                do
                  if (T--, x--, x < 0 || g[T] !== E[x]) {
                    var z = `
` + g[T].replace(" at new ", " at ");
                    return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), typeof e == "function" && Wa.set(e, z), z;
                  }
                while (T >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        Oa = !1, zi.current = f, Zo(), Error.prepareStackTrace = u;
      }
      var M = e ? e.displayName || e.name : "", $ = M ? Qn(M) : "";
      return typeof e == "function" && Wa.set(e, $), $;
    }
    function co(e, t, a) {
      return Jo(e, !0);
    }
    function _i(e, t, a) {
      return Jo(e, !1);
    }
    function Is(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function $r(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Jo(e, Is(e));
      if (typeof e == "string")
        return Qn(e);
      switch (e) {
        case aa:
          return Qn("Suspense");
        case lo:
          return Qn("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case At:
            return _i(e.render);
          case Ui:
            return $r(e.type, t, a);
          case Gn: {
            var i = e, u = i._payload, f = i._init;
            try {
              return $r(f(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function zt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case re:
          return Qn(e.type);
        case mt:
          return Qn("Lazy");
        case fe:
          return Qn("Suspense");
        case Dt:
          return Qn("SuspenseList");
        case L:
        case ie:
        case Ce:
          return _i(e.type);
        case be:
          return _i(e.type.render);
        case B:
          return co(e.type);
        default:
          return "";
      }
    }
    function fo(e) {
      try {
        var t = "", a = e;
        do
          t += zt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Ga(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function eu(e) {
      return e.displayName || "Context";
    }
    function Rt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case wa:
          return "Fragment";
        case Br:
          return "Portal";
        case yi:
          return "Profiler";
        case Mi:
          return "StrictMode";
        case aa:
          return "Suspense";
        case lo:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Pu:
            var t = e;
            return eu(t) + ".Consumer";
          case uo:
            var a = e;
            return eu(a._context) + ".Provider";
          case At:
            return Ga(e, e.render, "ForwardRef");
          case Ui:
            var i = e.displayName || null;
            return i !== null ? i : Rt(e.type) || "Memo";
          case Gn: {
            var u = e, f = u._payload, m = u._init;
            try {
              return Rt(m(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function ji(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function po(e) {
      return e.displayName || "Context";
    }
    function lt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Nt:
          return "Cache";
        case It:
          var i = a;
          return po(i) + ".Consumer";
        case xt:
          var u = a;
          return po(u._context) + ".Provider";
        case Tt:
          return "DehydratedFragment";
        case be:
          return ji(a, a.render, "ForwardRef");
        case $e:
          return "Fragment";
        case re:
          return a;
        case te:
          return "Portal";
        case X:
          return "Root";
        case De:
          return "Text";
        case mt:
          return Rt(a);
        case Ae:
          return a === Mi ? "StrictMode" : "Mode";
        case ot:
          return "Offscreen";
        case ye:
          return "Profiler";
        case fn:
          return "Scope";
        case fe:
          return "Suspense";
        case Dt:
          return "SuspenseList";
        case bt:
          return "TracingMarker";
        case B:
        case L:
        case Et:
        case ie:
        case de:
        case Ce:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var vo = p.ReactDebugCurrentFrame, vn = null, kr = !1;
    function ir() {
      {
        if (vn === null)
          return null;
        var e = vn._debugOwner;
        if (e !== null && typeof e < "u")
          return lt(e);
      }
      return null;
    }
    function bi() {
      return vn === null ? "" : fo(vn);
    }
    function mn() {
      vo.getCurrentStack = null, vn = null, kr = !1;
    }
    function Wt(e) {
      vo.getCurrentStack = e === null ? null : bi, vn = e, kr = !1;
    }
    function Bu() {
      return vn;
    }
    function hr(e) {
      kr = e;
    }
    function Hn(e) {
      return "" + e;
    }
    function Qa(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return wt(e), e;
        default:
          return "";
      }
    }
    var Fl = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Ka(e, t) {
      Fl[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || _("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || _("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Da(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Hl(e) {
      return e._valueTracker;
    }
    function Kn(e) {
      e._valueTracker = null;
    }
    function Si(e) {
      var t = "";
      return e && (Da(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Vi(e) {
      var t = Da(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      wt(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, f = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(g) {
            wt(g), i = "" + g, f.call(this, g);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var m = {
          getValue: function() {
            return i;
          },
          setValue: function(g) {
            wt(g), i = "" + g;
          },
          stopTracking: function() {
            Kn(e), delete e[t];
          }
        };
        return m;
      }
    }
    function mr(e) {
      Hl(e) || (e._valueTracker = Vi(e));
    }
    function Pi(e) {
      if (!e)
        return !1;
      var t = Hl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Si(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Xa(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var qa = !1, ho = !1, tu = !1, Iu = !1;
    function Na(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function d(e, t) {
      var a = e, i = t.checked, u = Ct({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function S(e, t) {
      Ka("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !ho && (_("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ir() || "A component", t.type), ho = !0), t.value !== void 0 && t.defaultValue !== void 0 && !qa && (_("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ir() || "A component", t.type), qa = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Qa(t.value != null ? t.value : i),
        controlled: Na(t)
      };
    }
    function O(e, t) {
      var a = e, i = t.checked;
      i != null && Ra(a, "checked", i, !1);
    }
    function D(e, t) {
      var a = e;
      {
        var i = Na(t);
        !a._wrapperState.controlled && i && !Iu && (_("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Iu = !0), a._wrapperState.controlled && !i && !tu && (_("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), tu = !0);
      }
      O(e, t);
      var u = Qa(t.value), f = t.type;
      if (u != null)
        f === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Hn(u)) : a.value !== Hn(u) && (a.value = Hn(u));
      else if (f === "submit" || f === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? se(a, t.type, u) : t.hasOwnProperty("defaultValue") && se(a, t.type, Qa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function V(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, f = u === "submit" || u === "reset";
        if (f && (t.value === void 0 || t.value === null))
          return;
        var m = Hn(i._wrapperState.initialValue);
        a || m !== i.value && (i.value = m), i.defaultValue = m;
      }
      var g = i.name;
      g !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, g !== "" && (i.name = g);
    }
    function oe(e, t) {
      var a = e;
      D(a, t), G(a, t);
    }
    function G(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Yt(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), f = 0; f < u.length; f++) {
          var m = u[f];
          if (!(m === e || m.form !== e.form)) {
            var g = Fm(m);
            if (!g)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Pi(m), D(m, g);
          }
        }
      }
    }
    function se(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Xa(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Hn(e._wrapperState.initialValue) : e.defaultValue !== Hn(a) && (e.defaultValue = Hn(a)));
    }
    var Ee = !1, Be = !1, nt = !1;
    function qe(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? l.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Be || (Be = !0, _("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (nt || (nt = !0, _("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Ee && (_("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Ee = !0);
    }
    function at(e, t) {
      t.value != null && e.setAttribute("value", Hn(Qa(t.value)));
    }
    var ft = Array.isArray;
    function Ze(e) {
      return ft(e);
    }
    var oa;
    oa = !1;
    function Fi() {
      var e = ir();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var nu = ["value", "defaultValue"];
    function $s(e) {
      {
        Ka("select", e);
        for (var t = 0; t < nu.length; t++) {
          var a = nu[t];
          if (e[a] != null) {
            var i = Ze(e[a]);
            e.multiple && !i ? _("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Fi()) : !e.multiple && i && _("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Fi());
          }
        }
      }
    }
    function ua(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var f = a, m = {}, g = 0; g < f.length; g++)
          m["$" + f[g]] = !0;
        for (var E = 0; E < u.length; E++) {
          var T = m.hasOwnProperty("$" + u[E].value);
          u[E].selected !== T && (u[E].selected = T), T && i && (u[E].defaultSelected = !0);
        }
      } else {
        for (var x = Hn(Qa(a)), z = null, M = 0; M < u.length; M++) {
          if (u[M].value === x) {
            u[M].selected = !0, i && (u[M].defaultSelected = !0);
            return;
          }
          z === null && !u[M].disabled && (z = u[M]);
        }
        z !== null && (z.selected = !0);
      }
    }
    function $u(e, t) {
      return Ct({}, t, {
        value: void 0
      });
    }
    function ru(e, t) {
      var a = e;
      $s(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !oa && (_("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), oa = !0);
    }
    function Ys(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? ua(a, !!t.multiple, i, !1) : t.defaultValue != null && ua(a, !!t.multiple, t.defaultValue, !0);
    }
    function Dg(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? ua(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? ua(a, !!t.multiple, t.defaultValue, !0) : ua(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Ng(e, t) {
      var a = e, i = t.value;
      i != null && ua(a, !!t.multiple, i, !1);
    }
    var Id = !1;
    function $d(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Ct({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Hn(a._wrapperState.initialValue)
      });
      return i;
    }
    function hh(e, t) {
      var a = e;
      Ka("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Id && (_("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", ir() || "A component"), Id = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, f = t.defaultValue;
        if (u != null) {
          _("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (f != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Ze(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            f = u;
          }
        }
        f == null && (f = ""), i = f;
      }
      a._wrapperState = {
        initialValue: Qa(i)
      };
    }
    function mh(e, t) {
      var a = e, i = Qa(t.value), u = Qa(t.defaultValue);
      if (i != null) {
        var f = Hn(i);
        f !== a.value && (a.value = f), t.defaultValue == null && a.defaultValue !== f && (a.defaultValue = f);
      }
      u != null && (a.defaultValue = Hn(u));
    }
    function yh(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Yd(e, t) {
      mh(e, t);
    }
    var mo = "http://www.w3.org/1999/xhtml", kg = "http://www.w3.org/1998/Math/MathML", Wd = "http://www.w3.org/2000/svg";
    function Xc(e) {
      switch (e) {
        case "svg":
          return Wd;
        case "math":
          return kg;
        default:
          return mo;
      }
    }
    function Gd(e, t) {
      return e == null || e === mo ? Xc(t) : e === Wd && t === "foreignObject" ? mo : e;
    }
    var Ag = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, qc, gh = Ag(function(e, t) {
      if (e.namespaceURI === Wd && !("innerHTML" in e)) {
        qc = qc || document.createElement("div"), qc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = qc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), la = 1, yo = 3, Bn = 8, Ei = 9, Yu = 11, Zc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === yo) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, _h = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Bl = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function bh(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Sh = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Bl).forEach(function(e) {
      Sh.forEach(function(t) {
        Bl[bh(t, e)] = Bl[e];
      });
    });
    function Jc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Bl.hasOwnProperty(e) && Bl[e]) ? t + "px" : (Bt(t, e), ("" + t).trim());
    }
    var Il = /([A-Z])/g, Lg = /^ms-/;
    function Mg(e) {
      return e.replace(Il, "-$1").toLowerCase().replace(Lg, "-ms-");
    }
    var Eh = function() {
    };
    {
      var Ch = /^(?:webkit|moz|o)[A-Z]/, Rh = /^-ms-/, Ws = /-(.)/g, $l = /;\s*$/, Yl = {}, Wl = {}, wh = !1, Qd = !1, Kd = function(e) {
        return e.replace(Ws, function(t, a) {
          return a.toUpperCase();
        });
      }, Xd = function(e) {
        Yl.hasOwnProperty(e) && Yl[e] || (Yl[e] = !0, _(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Kd(e.replace(Rh, "ms-"))
        ));
      }, Th = function(e) {
        Yl.hasOwnProperty(e) && Yl[e] || (Yl[e] = !0, _("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Oh = function(e, t) {
        Wl.hasOwnProperty(t) && Wl[t] || (Wl[t] = !0, _(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace($l, "")));
      }, xh = function(e, t) {
        wh || (wh = !0, _("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Ug = function(e, t) {
        Qd || (Qd = !0, _("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Eh = function(e, t) {
        e.indexOf("-") > -1 ? Xd(e) : Ch.test(e) ? Th(e) : $l.test(t) && Oh(e, t), typeof t == "number" && (isNaN(t) ? xh(e, t) : isFinite(t) || Ug(e, t));
      };
    }
    var zg = Eh;
    function jg(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var f = i.indexOf("--") === 0;
              t += a + (f ? i : Mg(i)) + ":", t += Jc(i, u, f), a = ";";
            }
          }
        return t || null;
      }
    }
    function Dh(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || zg(i, t[i]);
          var f = Jc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, f) : a[i] = f;
        }
    }
    function Vg(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Za(e) {
      var t = {};
      for (var a in e)
        for (var i = _h[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Gs(e, t) {
      {
        if (!t)
          return;
        var a = Za(e), i = Za(t), u = {};
        for (var f in a) {
          var m = a[f], g = i[f];
          if (g && m !== g) {
            var E = m + "," + g;
            if (u[E])
              continue;
            u[E] = !0, _("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Vg(e[m]) ? "Removing" : "Updating", m, g);
          }
        }
      }
    }
    var Nh = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, kh = Ct({
      menuitem: !0
    }, Nh), Ah = "__html";
    function ef(e, t) {
      if (t) {
        if (kh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Ah in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && _("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function go(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var tf = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Lh = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Ci = {}, qd = new RegExp("^(aria)-[" + Me + "]*$"), Qs = new RegExp("^(aria)[A-Z][" + Me + "]*$");
    function Zd(e, t) {
      {
        if (Fn.call(Ci, t) && Ci[t])
          return !0;
        if (Qs.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Lh.hasOwnProperty(a) ? a : null;
          if (i == null)
            return _("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Ci[t] = !0, !0;
          if (t !== i)
            return _("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Ci[t] = !0, !0;
        }
        if (qd.test(t)) {
          var u = t.toLowerCase(), f = Lh.hasOwnProperty(u) ? u : null;
          if (f == null)
            return Ci[t] = !0, !1;
          if (t !== f)
            return _("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, f), Ci[t] = !0, !0;
        }
      }
      return !0;
    }
    function Mh(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Zd(e, i);
          u || a.push(i);
        }
        var f = a.map(function(m) {
          return "`" + m + "`";
        }).join(", ");
        a.length === 1 ? _("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", f, e) : a.length > 1 && _("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", f, e);
      }
    }
    function nf(e, t) {
      go(e, t) || Mh(e, t);
    }
    var Wu = !1;
    function Jd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Wu && (Wu = !0, e === "select" && t.multiple ? _("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : _("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var ep = function() {
    };
    {
      var or = {}, tp = /^on./, Uh = /^on[^A-Z]/, zh = new RegExp("^(aria)-[" + Me + "]*$"), jh = new RegExp("^(aria)[A-Z][" + Me + "]*$");
      ep = function(e, t, a, i) {
        if (Fn.call(or, t) && or[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return _("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), or[t] = !0, !0;
        if (i != null) {
          var f = i.registrationNameDependencies, m = i.possibleRegistrationNames;
          if (f.hasOwnProperty(t))
            return !0;
          var g = m.hasOwnProperty(u) ? m[u] : null;
          if (g != null)
            return _("Invalid event handler property `%s`. Did you mean `%s`?", t, g), or[t] = !0, !0;
          if (tp.test(t))
            return _("Unknown event handler property `%s`. It will be ignored.", t), or[t] = !0, !0;
        } else if (tp.test(t))
          return Uh.test(t) && _("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), or[t] = !0, !0;
        if (zh.test(t) || jh.test(t))
          return !0;
        if (u === "innerhtml")
          return _("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), or[t] = !0, !0;
        if (u === "aria")
          return _("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), or[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return _("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), or[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return _("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), or[t] = !0, !0;
        var E = na(t), T = E !== null && E.type === Tn;
        if (tf.hasOwnProperty(u)) {
          var x = tf[u];
          if (x !== t)
            return _("Invalid DOM property `%s`. Did you mean `%s`?", t, x), or[t] = !0, !0;
        } else if (!T && t !== u)
          return _("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), or[t] = !0, !0;
        return typeof a == "boolean" && Nr(t, a, E, !1) ? (a ? _('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : _('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), or[t] = !0, !0) : T ? !0 : Nr(t, a, E, !1) ? (or[t] = !0, !1) : ((a === "false" || a === "true") && E !== null && E.type === Kt && (_("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), or[t] = !0), !0);
      };
    }
    var Vh = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var f = ep(e, u, t[u], a);
          f || i.push(u);
        }
        var m = i.map(function(g) {
          return "`" + g + "`";
        }).join(", ");
        i.length === 1 ? _("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", m, e) : i.length > 1 && _("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", m, e);
      }
    };
    function Ph(e, t, a) {
      go(e, t) || Vh(e, t, a);
    }
    var _o = 1, Ks = 2, Gu = 4, Pg = _o | Ks | Gu, Xs = null;
    function qs(e) {
      Xs !== null && _("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Xs = e;
    }
    function Fg() {
      Xs === null && _("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Xs = null;
    }
    function Fh(e) {
      return e === Xs;
    }
    function rf(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === yo ? t.parentNode : t;
    }
    var ln = null, au = null, bo = null;
    function Gl(e) {
      var t = _s(e);
      if (t) {
        if (typeof ln != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Fm(a);
          ln(t.stateNode, t.type, i);
        }
      }
    }
    function Hh(e) {
      ln = e;
    }
    function af(e) {
      au ? bo ? bo.push(e) : bo = [e] : au = e;
    }
    function Zs() {
      return au !== null || bo !== null;
    }
    function Js() {
      if (au) {
        var e = au, t = bo;
        if (au = null, bo = null, Gl(e), t)
          for (var a = 0; a < t.length; a++)
            Gl(t[a]);
      }
    }
    var Qu = function(e, t) {
      return e(t);
    }, np = function() {
    }, rp = !1;
    function Hg() {
      var e = Zs();
      e && (np(), Js());
    }
    function ap(e, t, a) {
      if (rp)
        return e(t, a);
      rp = !0;
      try {
        return Qu(e, t, a);
      } finally {
        rp = !1, Hg();
      }
    }
    function of(e, t, a) {
      Qu = e, np = a;
    }
    function uf(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function ip(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && uf(t));
        default:
          return !1;
      }
    }
    function Ku(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Fm(a);
      if (i === null)
        return null;
      var u = i[t];
      if (ip(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var ec = !1;
    if (nn)
      try {
        var Xu = {};
        Object.defineProperty(Xu, "passive", {
          get: function() {
            ec = !0;
          }
        }), window.addEventListener("test", Xu, Xu), window.removeEventListener("test", Xu, Xu);
      } catch {
        ec = !1;
      }
    function Bh(e, t, a, i, u, f, m, g, E) {
      var T = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, T);
      } catch (x) {
        this.onError(x);
      }
    }
    var op = Bh;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var up = document.createElement("react");
      op = function(t, a, i, u, f, m, g, E, T) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var x = document.createEvent("Event"), z = !1, M = !0, $ = window.event, Y = Object.getOwnPropertyDescriptor(window, "event");
        function Q() {
          up.removeEventListener(K, Je, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = $);
        }
        var Oe = Array.prototype.slice.call(arguments, 3);
        function Je() {
          z = !0, Q(), a.apply(i, Oe), M = !1;
        }
        var Ge, Pt = !1, Mt = !1;
        function F(H) {
          if (Ge = H.error, Pt = !0, Ge === null && H.colno === 0 && H.lineno === 0 && (Mt = !0), H.defaultPrevented && Ge != null && typeof Ge == "object")
            try {
              Ge._suppressLogging = !0;
            } catch {
            }
        }
        var K = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", F), up.addEventListener(K, Je, !1), x.initEvent(K, !1, !1), up.dispatchEvent(x), Y && Object.defineProperty(window, "event", Y), z && M && (Pt ? Mt && (Ge = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ge = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ge)), window.removeEventListener("error", F), !z)
          return Q(), Bh.apply(this, arguments);
      };
    }
    var Bg = op, iu = !1, Ri = null, tc = !1, ou = null, Hi = {
      onError: function(e) {
        iu = !0, Ri = e;
      }
    };
    function qu(e, t, a, i, u, f, m, g, E) {
      iu = !1, Ri = null, Bg.apply(Hi, arguments);
    }
    function So(e, t, a, i, u, f, m, g, E) {
      if (qu.apply(this, arguments), iu) {
        var T = sp();
        tc || (tc = !0, ou = T);
      }
    }
    function lp() {
      if (tc) {
        var e = ou;
        throw tc = !1, ou = null, e;
      }
    }
    function Ig() {
      return iu;
    }
    function sp() {
      if (iu) {
        var e = Ri;
        return iu = !1, Ri = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ja(e) {
      return e._reactInternals;
    }
    function nc(e) {
      return e._reactInternals !== void 0;
    }
    function Ql(e, t) {
      e._reactInternals = t;
    }
    var Xe = (
      /*                      */
      0
    ), uu = (
      /*                */
      1
    ), yn = (
      /*                    */
      2
    ), gt = (
      /*                       */
      4
    ), Xt = (
      /*                */
      16
    ), Zt = (
      /*                 */
      32
    ), Bi = (
      /*                     */
      64
    ), st = (
      /*                   */
      128
    ), Ln = (
      /*            */
      256
    ), sa = (
      /*                          */
      512
    ), ei = (
      /*                     */
      1024
    ), Rn = (
      /*                      */
      2048
    ), ti = (
      /*                    */
      4096
    ), lu = (
      /*                   */
      8192
    ), rc = (
      /*             */
      16384
    ), lf = Rn | gt | Bi | sa | ei | rc, Ih = (
      /*               */
      32767
    ), ka = (
      /*                   */
      32768
    ), ur = (
      /*                */
      65536
    ), ac = (
      /* */
      131072
    ), cp = (
      /*                       */
      1048576
    ), fp = (
      /*                    */
      2097152
    ), ca = (
      /*                 */
      4194304
    ), su = (
      /*                */
      8388608
    ), fa = (
      /*               */
      16777216
    ), Zu = (
      /*              */
      33554432
    ), Kl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      gt | ei | 0
    ), da = yn | gt | Xt | Zt | sa | ti | lu, Ar = gt | Bi | sa | lu, ni = Rn | Xt, yr = ca | su | fp, Eo = p.ReactCurrentOwner;
    function Aa(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (yn | ti)) !== Xe && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === X ? a : null;
    }
    function dp(e) {
      if (e.tag === fe) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function sf(e) {
      return e.tag === X ? e.stateNode.containerInfo : null;
    }
    function pp(e) {
      return Aa(e) === e;
    }
    function La(e) {
      {
        var t = Eo.current;
        if (t !== null && t.tag === B) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || _("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", lt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = Ja(e);
      return u ? Aa(u) === u : !1;
    }
    function pa(e) {
      if (Aa(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function gn(e) {
      var t = e.alternate;
      if (!t) {
        var a = Aa(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var f = i.return;
        if (f === null)
          break;
        var m = f.alternate;
        if (m === null) {
          var g = f.return;
          if (g !== null) {
            i = u = g;
            continue;
          }
          break;
        }
        if (f.child === m.child) {
          for (var E = f.child; E; ) {
            if (E === i)
              return pa(f), e;
            if (E === u)
              return pa(f), t;
            E = E.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = f, u = m;
        else {
          for (var T = !1, x = f.child; x; ) {
            if (x === i) {
              T = !0, i = f, u = m;
              break;
            }
            if (x === u) {
              T = !0, u = f, i = m;
              break;
            }
            x = x.sibling;
          }
          if (!T) {
            for (x = m.child; x; ) {
              if (x === i) {
                T = !0, i = m, u = f;
                break;
              }
              if (x === u) {
                T = !0, u = m, i = f;
                break;
              }
              x = x.sibling;
            }
            if (!T)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== X)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function ri(e) {
      var t = gn(e);
      return t !== null ? vp(t) : null;
    }
    function vp(e) {
      if (e.tag === re || e.tag === De)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = vp(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function $h(e) {
      var t = gn(e);
      return t !== null ? cf(t) : null;
    }
    function cf(e) {
      if (e.tag === re || e.tag === De)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== te) {
          var a = cf(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var ff = c.unstable_scheduleCallback, Yh = c.unstable_cancelCallback, df = c.unstable_shouldYield, Wh = c.unstable_requestPaint, xn = c.unstable_now, hp = c.unstable_getCurrentPriorityLevel, pf = c.unstable_ImmediatePriority, Ma = c.unstable_UserBlockingPriority, Ii = c.unstable_NormalPriority, vf = c.unstable_LowPriority, cu = c.unstable_IdlePriority, mp = c.unstable_yieldValue, yp = c.unstable_setDisableYieldValue, fu = null, lr = null, ge = null, jn = !1, gr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function gp(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return _("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Fe && (e = Ct({}, e, {
          getLaneLabelMap: pu,
          injectProfilingHooks: Ro
        })), fu = t.inject(e), lr = t;
      } catch (a) {
        _("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Gh(e, t) {
      if (lr && typeof lr.onScheduleFiberRoot == "function")
        try {
          lr.onScheduleFiberRoot(fu, e, t);
        } catch (a) {
          jn || (jn = !0, _("React instrumentation encountered an error: %s", a));
        }
    }
    function Co(e, t) {
      if (lr && typeof lr.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & st) === st;
          if (He) {
            var i;
            switch (t) {
              case Lr:
                i = pf;
                break;
              case _r:
                i = Ma;
                break;
              case To:
                i = Ii;
                break;
              case pc:
                i = cu;
                break;
              default:
                i = Ii;
                break;
            }
            lr.onCommitFiberRoot(fu, e, i, a);
          }
        } catch (u) {
          jn || (jn = !0, _("React instrumentation encountered an error: %s", u));
        }
    }
    function du(e) {
      if (lr && typeof lr.onPostCommitFiberRoot == "function")
        try {
          lr.onPostCommitFiberRoot(fu, e);
        } catch (t) {
          jn || (jn = !0, _("React instrumentation encountered an error: %s", t));
        }
    }
    function _p(e) {
      if (lr && typeof lr.onCommitFiberUnmount == "function")
        try {
          lr.onCommitFiberUnmount(fu, e);
        } catch (t) {
          jn || (jn = !0, _("React instrumentation encountered an error: %s", t));
        }
    }
    function Xn(e) {
      if (typeof mp == "function" && (yp(e), b(e)), lr && typeof lr.setStrictMode == "function")
        try {
          lr.setStrictMode(fu, e);
        } catch (t) {
          jn || (jn = !0, _("React instrumentation encountered an error: %s", t));
        }
    }
    function Ro(e) {
      ge = e;
    }
    function pu() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < _n; a++) {
          var i = $g(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function hf(e) {
      ge !== null && typeof ge.markCommitStarted == "function" && ge.markCommitStarted(e);
    }
    function bp() {
      ge !== null && typeof ge.markCommitStopped == "function" && ge.markCommitStopped();
    }
    function vu(e) {
      ge !== null && typeof ge.markComponentRenderStarted == "function" && ge.markComponentRenderStarted(e);
    }
    function Ju() {
      ge !== null && typeof ge.markComponentRenderStopped == "function" && ge.markComponentRenderStopped();
    }
    function Qh(e) {
      ge !== null && typeof ge.markComponentPassiveEffectMountStarted == "function" && ge.markComponentPassiveEffectMountStarted(e);
    }
    function Sp() {
      ge !== null && typeof ge.markComponentPassiveEffectMountStopped == "function" && ge.markComponentPassiveEffectMountStopped();
    }
    function mf(e) {
      ge !== null && typeof ge.markComponentPassiveEffectUnmountStarted == "function" && ge.markComponentPassiveEffectUnmountStarted(e);
    }
    function Kh() {
      ge !== null && typeof ge.markComponentPassiveEffectUnmountStopped == "function" && ge.markComponentPassiveEffectUnmountStopped();
    }
    function Xh(e) {
      ge !== null && typeof ge.markComponentLayoutEffectMountStarted == "function" && ge.markComponentLayoutEffectMountStarted(e);
    }
    function qh() {
      ge !== null && typeof ge.markComponentLayoutEffectMountStopped == "function" && ge.markComponentLayoutEffectMountStopped();
    }
    function yf(e) {
      ge !== null && typeof ge.markComponentLayoutEffectUnmountStarted == "function" && ge.markComponentLayoutEffectUnmountStarted(e);
    }
    function Xl() {
      ge !== null && typeof ge.markComponentLayoutEffectUnmountStopped == "function" && ge.markComponentLayoutEffectUnmountStopped();
    }
    function gf(e, t, a) {
      ge !== null && typeof ge.markComponentErrored == "function" && ge.markComponentErrored(e, t, a);
    }
    function Zh(e, t, a) {
      ge !== null && typeof ge.markComponentSuspended == "function" && ge.markComponentSuspended(e, t, a);
    }
    function Jh(e) {
      ge !== null && typeof ge.markLayoutEffectsStarted == "function" && ge.markLayoutEffectsStarted(e);
    }
    function ql() {
      ge !== null && typeof ge.markLayoutEffectsStopped == "function" && ge.markLayoutEffectsStopped();
    }
    function em(e) {
      ge !== null && typeof ge.markPassiveEffectsStarted == "function" && ge.markPassiveEffectsStarted(e);
    }
    function ic() {
      ge !== null && typeof ge.markPassiveEffectsStopped == "function" && ge.markPassiveEffectsStopped();
    }
    function wi(e) {
      ge !== null && typeof ge.markRenderStarted == "function" && ge.markRenderStarted(e);
    }
    function oc() {
      ge !== null && typeof ge.markRenderYielded == "function" && ge.markRenderYielded();
    }
    function Zl() {
      ge !== null && typeof ge.markRenderStopped == "function" && ge.markRenderStopped();
    }
    function el(e) {
      ge !== null && typeof ge.markRenderScheduled == "function" && ge.markRenderScheduled(e);
    }
    function Ep(e, t) {
      ge !== null && typeof ge.markForceUpdateScheduled == "function" && ge.markForceUpdateScheduled(e, t);
    }
    function hu(e, t) {
      ge !== null && typeof ge.markStateUpdateScheduled == "function" && ge.markStateUpdateScheduled(e, t);
    }
    var et = (
      /*                         */
      0
    ), Ot = (
      /*                 */
      1
    ), rt = (
      /*                    */
      2
    ), Dn = (
      /*               */
      8
    ), ai = (
      /*              */
      16
    ), _f = Math.clz32 ? Math.clz32 : tl, bf = Math.log, Cp = Math.LN2;
    function tl(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (bf(t) / Cp | 0) | 0;
    }
    var _n = 31, q = (
      /*                        */
      0
    ), jt = (
      /*                          */
      0
    ), it = (
      /*                        */
      1
    ), $i = (
      /*    */
      2
    ), Ua = (
      /*             */
      4
    ), nl = (
      /*            */
      8
    ), bn = (
      /*                     */
      16
    ), rl = (
      /*                */
      32
    ), mu = (
      /*                       */
      4194240
    ), al = (
      /*                        */
      64
    ), ii = (
      /*                        */
      128
    ), va = (
      /*                        */
      256
    ), il = (
      /*                        */
      512
    ), uc = (
      /*                        */
      1024
    ), lc = (
      /*                        */
      2048
    ), Sf = (
      /*                        */
      4096
    ), Ef = (
      /*                        */
      8192
    ), Cf = (
      /*                        */
      16384
    ), Rf = (
      /*                       */
      32768
    ), wf = (
      /*                       */
      65536
    ), Tf = (
      /*                       */
      131072
    ), Of = (
      /*                       */
      262144
    ), xf = (
      /*                       */
      524288
    ), ol = (
      /*                       */
      1048576
    ), Df = (
      /*                       */
      2097152
    ), ul = (
      /*                            */
      130023424
    ), wo = (
      /*                             */
      4194304
    ), Nf = (
      /*                             */
      8388608
    ), sc = (
      /*                             */
      16777216
    ), kf = (
      /*                             */
      33554432
    ), Af = (
      /*                             */
      67108864
    ), Rp = wo, Jl = (
      /*          */
      134217728
    ), Lf = (
      /*                          */
      268435455
    ), es = (
      /*               */
      268435456
    ), yu = (
      /*                        */
      536870912
    ), ha = (
      /*                   */
      1073741824
    );
    function $g(e) {
      {
        if (e & it)
          return "Sync";
        if (e & $i)
          return "InputContinuousHydration";
        if (e & Ua)
          return "InputContinuous";
        if (e & nl)
          return "DefaultHydration";
        if (e & bn)
          return "Default";
        if (e & rl)
          return "TransitionHydration";
        if (e & mu)
          return "Transition";
        if (e & ul)
          return "Retry";
        if (e & Jl)
          return "SelectiveHydration";
        if (e & es)
          return "IdleHydration";
        if (e & yu)
          return "Idle";
        if (e & ha)
          return "Offscreen";
      }
    }
    var sn = -1, Mf = al, Uf = wo;
    function ts(e) {
      switch (In(e)) {
        case it:
          return it;
        case $i:
          return $i;
        case Ua:
          return Ua;
        case nl:
          return nl;
        case bn:
          return bn;
        case rl:
          return rl;
        case al:
        case ii:
        case va:
        case il:
        case uc:
        case lc:
        case Sf:
        case Ef:
        case Cf:
        case Rf:
        case wf:
        case Tf:
        case Of:
        case xf:
        case ol:
        case Df:
          return e & mu;
        case wo:
        case Nf:
        case sc:
        case kf:
        case Af:
          return e & ul;
        case Jl:
          return Jl;
        case es:
          return es;
        case yu:
          return yu;
        case ha:
          return ha;
        default:
          return _("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function cc(e, t) {
      var a = e.pendingLanes;
      if (a === q)
        return q;
      var i = q, u = e.suspendedLanes, f = e.pingedLanes, m = a & Lf;
      if (m !== q) {
        var g = m & ~u;
        if (g !== q)
          i = ts(g);
        else {
          var E = m & f;
          E !== q && (i = ts(E));
        }
      } else {
        var T = a & ~u;
        T !== q ? i = ts(T) : f !== q && (i = ts(f));
      }
      if (i === q)
        return q;
      if (t !== q && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === q) {
        var x = In(i), z = In(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          x >= z || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          x === bn && (z & mu) !== q
        )
          return t;
      }
      (i & Ua) !== q && (i |= a & bn);
      var M = e.entangledLanes;
      if (M !== q)
        for (var $ = e.entanglements, Y = i & M; Y > 0; ) {
          var Q = gu(Y), Oe = 1 << Q;
          i |= $[Q], Y &= ~Oe;
        }
      return i;
    }
    function tm(e, t) {
      for (var a = e.eventTimes, i = sn; t > 0; ) {
        var u = gu(t), f = 1 << u, m = a[u];
        m > i && (i = m), t &= ~f;
      }
      return i;
    }
    function zf(e, t) {
      switch (e) {
        case it:
        case $i:
        case Ua:
          return t + 250;
        case nl:
        case bn:
        case rl:
        case al:
        case ii:
        case va:
        case il:
        case uc:
        case lc:
        case Sf:
        case Ef:
        case Cf:
        case Rf:
        case wf:
        case Tf:
        case Of:
        case xf:
        case ol:
        case Df:
          return t + 5e3;
        case wo:
        case Nf:
        case sc:
        case kf:
        case Af:
          return sn;
        case Jl:
        case es:
        case yu:
        case ha:
          return sn;
        default:
          return _("Should have found matching lanes. This is a bug in React."), sn;
      }
    }
    function Yg(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, f = e.expirationTimes, m = a; m > 0; ) {
        var g = gu(m), E = 1 << g, T = f[g];
        T === sn ? ((E & i) === q || (E & u) !== q) && (f[g] = zf(E, t)) : T <= t && (e.expiredLanes |= E), m &= ~E;
      }
    }
    function Wg(e) {
      return ts(e.pendingLanes);
    }
    function wp(e) {
      var t = e.pendingLanes & ~ha;
      return t !== q ? t : t & ha ? ha : q;
    }
    function ns(e) {
      return (e & it) !== q;
    }
    function fc(e) {
      return (e & Lf) !== q;
    }
    function jf(e) {
      return (e & ul) === e;
    }
    function Gg(e) {
      var t = it | Ua | bn;
      return (e & t) === q;
    }
    function nm(e) {
      return (e & mu) === e;
    }
    function dc(e, t) {
      var a = $i | Ua | nl | bn;
      return (t & a) !== q;
    }
    function rm(e, t) {
      return (t & e.expiredLanes) !== q;
    }
    function Tp(e) {
      return (e & mu) !== q;
    }
    function Op() {
      var e = Mf;
      return Mf <<= 1, (Mf & mu) === q && (Mf = al), e;
    }
    function Qg() {
      var e = Uf;
      return Uf <<= 1, (Uf & ul) === q && (Uf = wo), e;
    }
    function In(e) {
      return e & -e;
    }
    function qn(e) {
      return In(e);
    }
    function gu(e) {
      return 31 - _f(e);
    }
    function Vf(e) {
      return gu(e);
    }
    function ma(e, t) {
      return (e & t) !== q;
    }
    function ll(e, t) {
      return (e & t) === t;
    }
    function _t(e, t) {
      return e | t;
    }
    function rs(e, t) {
      return e & ~t;
    }
    function xp(e, t) {
      return e & t;
    }
    function am(e) {
      return e;
    }
    function im(e, t) {
      return e !== jt && e < t ? e : t;
    }
    function Pf(e) {
      for (var t = [], a = 0; a < _n; a++)
        t.push(e);
      return t;
    }
    function sl(e, t, a) {
      e.pendingLanes |= t, t !== yu && (e.suspendedLanes = q, e.pingedLanes = q);
      var i = e.eventTimes, u = Vf(t);
      i[u] = a;
    }
    function Dp(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = gu(i), f = 1 << u;
        a[u] = sn, i &= ~f;
      }
    }
    function Np(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function kp(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = q, e.pingedLanes = q, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, f = e.expirationTimes, m = a; m > 0; ) {
        var g = gu(m), E = 1 << g;
        i[g] = q, u[g] = sn, f[g] = sn, m &= ~E;
      }
    }
    function as(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var f = gu(u), m = 1 << f;
        // Is this one of the newly entangled lanes?
        m & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[f] & t && (i[f] |= t), u &= ~m;
      }
    }
    function Kg(e, t) {
      var a = In(t), i;
      switch (a) {
        case Ua:
          i = $i;
          break;
        case bn:
          i = nl;
          break;
        case al:
        case ii:
        case va:
        case il:
        case uc:
        case lc:
        case Sf:
        case Ef:
        case Cf:
        case Rf:
        case wf:
        case Tf:
        case Of:
        case xf:
        case ol:
        case Df:
        case wo:
        case Nf:
        case sc:
        case kf:
        case Af:
          i = rl;
          break;
        case yu:
          i = es;
          break;
        default:
          i = jt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== jt ? jt : i;
    }
    function Ap(e, t, a) {
      if (gr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Vf(a), f = 1 << u, m = i[u];
          m.add(t), a &= ~f;
        }
    }
    function Ff(e, t) {
      if (gr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Vf(t), f = 1 << u, m = a[u];
          m.size > 0 && (m.forEach(function(g) {
            var E = g.alternate;
            (E === null || !i.has(E)) && i.add(g);
          }), m.clear()), t &= ~f;
        }
    }
    function Lp(e, t) {
      return null;
    }
    var Lr = it, _r = Ua, To = bn, pc = yu, cl = jt;
    function oi() {
      return cl;
    }
    function Zn(e) {
      cl = e;
    }
    function vc(e, t) {
      var a = cl;
      try {
        return cl = e, t();
      } finally {
        cl = a;
      }
    }
    function Mr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Xg(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function Mp(e, t) {
      return e !== 0 && e < t;
    }
    function hc(e) {
      var t = In(e);
      return Mp(Lr, t) ? Mp(_r, t) ? fc(t) ? To : pc : _r : Lr;
    }
    function Jn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var om;
    function ke(e) {
      om = e;
    }
    function is(e) {
      om(e);
    }
    var mc;
    function um(e) {
      mc = e;
    }
    var lm;
    function yc(e) {
      lm = e;
    }
    var gc;
    function Up(e) {
      gc = e;
    }
    var zp;
    function sm(e) {
      zp = e;
    }
    var Hf = !1, os = [], Yi = null, wn = null, sr = null, ui = /* @__PURE__ */ new Map(), us = /* @__PURE__ */ new Map(), Oo = [], Ti = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function cm(e) {
      return Ti.indexOf(e) > -1;
    }
    function Wi(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function fm(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Yi = null;
          break;
        case "dragenter":
        case "dragleave":
          wn = null;
          break;
        case "mouseover":
        case "mouseout":
          sr = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          ui.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          us.delete(i);
          break;
        }
      }
    }
    function ls(e, t, a, i, u, f) {
      if (e === null || e.nativeEvent !== f) {
        var m = Wi(t, a, i, u, f);
        if (t !== null) {
          var g = _s(t);
          g !== null && mc(g);
        }
        return m;
      }
      e.eventSystemFlags |= i;
      var E = e.targetContainers;
      return u !== null && E.indexOf(u) === -1 && E.push(u), e;
    }
    function dm(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var f = u;
          return Yi = ls(Yi, e, t, a, i, f), !0;
        }
        case "dragenter": {
          var m = u;
          return wn = ls(wn, e, t, a, i, m), !0;
        }
        case "mouseover": {
          var g = u;
          return sr = ls(sr, e, t, a, i, g), !0;
        }
        case "pointerover": {
          var E = u, T = E.pointerId;
          return ui.set(T, ls(ui.get(T) || null, e, t, a, i, E)), !0;
        }
        case "gotpointercapture": {
          var x = u, z = x.pointerId;
          return us.set(z, ls(us.get(z) || null, e, t, a, i, x)), !0;
        }
      }
      return !1;
    }
    function jp(e) {
      var t = Oc(e.target);
      if (t !== null) {
        var a = Aa(t);
        if (a !== null) {
          var i = a.tag;
          if (i === fe) {
            var u = dp(a);
            if (u !== null) {
              e.blockedOn = u, zp(e.priority, function() {
                lm(a);
              });
              return;
            }
          } else if (i === X) {
            var f = a.stateNode;
            if (Jn(f)) {
              e.blockedOn = sf(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function pm(e) {
      for (var t = gc(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Oo.length && Mp(t, Oo[i].priority); i++)
        ;
      Oo.splice(i, 0, a), i === 0 && jp(a);
    }
    function Bf(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = fl(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, f = new u.constructor(u.type, u);
          qs(f), u.target.dispatchEvent(f), Fg();
        } else {
          var m = _s(i);
          return m !== null && mc(m), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function _c(e, t, a) {
      Bf(e) && a.delete(t);
    }
    function Vp() {
      Hf = !1, Yi !== null && Bf(Yi) && (Yi = null), wn !== null && Bf(wn) && (wn = null), sr !== null && Bf(sr) && (sr = null), ui.forEach(_c), us.forEach(_c);
    }
    function Ur(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Hf || (Hf = !0, c.unstable_scheduleCallback(c.unstable_NormalPriority, Vp)));
    }
    function Lt(e) {
      if (os.length > 0) {
        Ur(os[0], e);
        for (var t = 1; t < os.length; t++) {
          var a = os[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Yi !== null && Ur(Yi, e), wn !== null && Ur(wn, e), sr !== null && Ur(sr, e);
      var i = function(g) {
        return Ur(g, e);
      };
      ui.forEach(i), us.forEach(i);
      for (var u = 0; u < Oo.length; u++) {
        var f = Oo[u];
        f.blockedOn === e && (f.blockedOn = null);
      }
      for (; Oo.length > 0; ) {
        var m = Oo[0];
        if (m.blockedOn !== null)
          break;
        jp(m), m.blockedOn === null && Oo.shift();
      }
    }
    var Nn = p.ReactCurrentBatchConfig, Mn = !0;
    function cr(e) {
      Mn = !!e;
    }
    function za() {
      return Mn;
    }
    function ss(e, t, a) {
      var i = Yr(t), u;
      switch (i) {
        case Lr:
          u = er;
          break;
        case _r:
          u = bc;
          break;
        case To:
        default:
          u = xo;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function er(e, t, a, i) {
      var u = oi(), f = Nn.transition;
      Nn.transition = null;
      try {
        Zn(Lr), xo(e, t, a, i);
      } finally {
        Zn(u), Nn.transition = f;
      }
    }
    function bc(e, t, a, i) {
      var u = oi(), f = Nn.transition;
      Nn.transition = null;
      try {
        Zn(_r), xo(e, t, a, i);
      } finally {
        Zn(u), Nn.transition = f;
      }
    }
    function xo(e, t, a, i) {
      Mn && If(e, t, a, i);
    }
    function If(e, t, a, i) {
      var u = fl(e, t, a, i);
      if (u === null) {
        m_(e, t, i, cs, a), fm(e, i);
        return;
      }
      if (dm(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (fm(e, i), t & Gu && cm(e)) {
        for (; u !== null; ) {
          var f = _s(u);
          f !== null && is(f);
          var m = fl(e, t, a, i);
          if (m === null && m_(e, t, i, cs, a), m === u)
            break;
          u = m;
        }
        u !== null && i.stopPropagation();
        return;
      }
      m_(e, t, i, null, a);
    }
    var cs = null;
    function fl(e, t, a, i) {
      cs = null;
      var u = rf(i), f = Oc(u);
      if (f !== null) {
        var m = Aa(f);
        if (m === null)
          f = null;
        else {
          var g = m.tag;
          if (g === fe) {
            var E = dp(m);
            if (E !== null)
              return E;
            f = null;
          } else if (g === X) {
            var T = m.stateNode;
            if (Jn(T))
              return sf(m);
            f = null;
          } else
            m !== f && (f = null);
        }
      }
      return cs = f, null;
    }
    function Yr(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Lr;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return _r;
        case "message": {
          var t = hp();
          switch (t) {
            case pf:
              return Lr;
            case Ma:
              return _r;
            case Ii:
            case vf:
              return To;
            case cu:
              return pc;
            default:
              return To;
          }
        }
        default:
          return To;
      }
    }
    function Pp(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function fs(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Do(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function $f(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var dl = null, Gi = null, _u = null;
    function bu(e) {
      return dl = e, Gi = Wf(), !0;
    }
    function Yf() {
      dl = null, Gi = null, _u = null;
    }
    function ds() {
      if (_u)
        return _u;
      var e, t = Gi, a = t.length, i, u = Wf(), f = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var m = a - e;
      for (i = 1; i <= m && t[a - i] === u[f - i]; i++)
        ;
      var g = i > 1 ? 1 - i : void 0;
      return _u = u.slice(e, g), _u;
    }
    function Wf() {
      return "value" in dl ? dl.value : dl.textContent;
    }
    function pl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function vl() {
      return !0;
    }
    function zr() {
      return !1;
    }
    function $n(e) {
      function t(a, i, u, f, m) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = f, this.target = m, this.currentTarget = null;
        for (var g in e)
          if (e.hasOwnProperty(g)) {
            var E = e[g];
            E ? this[g] = E(f) : this[g] = f[g];
          }
        var T = f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1;
        return T ? this.isDefaultPrevented = vl : this.isDefaultPrevented = zr, this.isPropagationStopped = zr, this;
      }
      return Ct(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = vl);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = vl);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: vl
      }), t;
    }
    var jr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Vr = $n(jr), ps = Ct({}, jr, {
      view: 0,
      detail: 0
    }), Fp = $n(ps), Sc, Hp, li;
    function vm(e) {
      e !== li && (li && e.type === "mousemove" ? (Sc = e.screenX - li.screenX, Hp = e.screenY - li.screenY) : (Sc = 0, Hp = 0), li = e);
    }
    var vs = Ct({}, ps, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Kf,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (vm(e), Sc);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Hp;
      }
    }), Su = $n(vs), Bp = Ct({}, vs, {
      dataTransfer: 0
    }), hl = $n(Bp), hm = Ct({}, ps, {
      relatedTarget: 0
    }), Gf = $n(hm), Ip = Ct({}, jr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Qf = $n(Ip), qg = Ct({}, jr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Zg = $n(qg), mm = Ct({}, jr, {
      data: 0
    }), $p = $n(mm), ml = $p, Jg = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, hs = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function ym(e) {
      if (e.key) {
        var t = Jg[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = pl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? hs[e.keyCode] || "Unidentified" : "";
    }
    var Un = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function e_(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Un[e];
      return i ? !!a[i] : !1;
    }
    function Kf(e) {
      return e_;
    }
    var t_ = Ct({}, ps, {
      key: ym,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Kf,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? pl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? pl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), n_ = $n(t_), gm = Ct({}, vs, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Yp = $n(gm), r_ = Ct({}, ps, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Kf
    }), si = $n(r_), Wp = Ct({}, jr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), a_ = $n(Wp), Eu = Ct({}, vs, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Xf = $n(Eu), yl = [9, 13, 27, 32], Ec = 229, Cc = nn && "CompositionEvent" in window, gl = null;
    nn && "documentMode" in document && (gl = document.documentMode);
    var i_ = nn && "TextEvent" in window && !gl, qf = nn && (!Cc || gl && gl > 8 && gl <= 11), _m = 32, Gp = String.fromCharCode(_m);
    function bm() {
      nr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), nr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), nr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), nr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Rc = !1;
    function Zf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Sm(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Qp(e, t) {
      return e === "keydown" && t.keyCode === Ec;
    }
    function Em(e, t) {
      switch (e) {
        case "keyup":
          return yl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Ec;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Kp(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Jf(e) {
      return e.locale === "ko";
    }
    var No = !1;
    function Xp(e, t, a, i, u) {
      var f, m;
      if (Cc ? f = Sm(t) : No ? Em(t, i) && (f = "onCompositionEnd") : Qp(t, i) && (f = "onCompositionStart"), !f)
        return null;
      qf && !Jf(i) && (!No && f === "onCompositionStart" ? No = bu(u) : f === "onCompositionEnd" && No && (m = ds()));
      var g = Om(a, f);
      if (g.length > 0) {
        var E = new $p(f, t, null, i, u);
        if (e.push({
          event: E,
          listeners: g
        }), m)
          E.data = m;
        else {
          var T = Kp(i);
          T !== null && (E.data = T);
        }
      }
    }
    function ed(e, t) {
      switch (e) {
        case "compositionend":
          return Kp(t);
        case "keypress":
          var a = t.which;
          return a !== _m ? null : (Rc = !0, Gp);
        case "textInput":
          var i = t.data;
          return i === Gp && Rc ? null : i;
        default:
          return null;
      }
    }
    function Cm(e, t) {
      if (No) {
        if (e === "compositionend" || !Cc && Em(e, t)) {
          var a = ds();
          return Yf(), No = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Zf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return qf && !Jf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function o_(e, t, a, i, u) {
      var f;
      if (i_ ? f = ed(t, i) : f = Cm(t, i), !f)
        return null;
      var m = Om(a, "onBeforeInput");
      if (m.length > 0) {
        var g = new ml("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: g,
          listeners: m
        }), g.data = f;
      }
    }
    function td(e, t, a, i, u, f, m) {
      Xp(e, t, a, i, u), o_(e, t, a, i, u);
    }
    var u_ = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function ms(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!u_[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function l_(e) {
      if (!nn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function nd() {
      nr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      af(i);
      var u = Om(t, "onChange");
      if (u.length > 0) {
        var f = new Vr("onChange", "change", null, a, i);
        e.push({
          event: f,
          listeners: u
        });
      }
    }
    var r = null, o = null;
    function s(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function v(e) {
      var t = [];
      n(t, o, e, rf(e)), ap(y, t);
    }
    function y(e) {
      IE(e, 0);
    }
    function R(e) {
      var t = ld(e);
      if (Pi(t))
        return e;
    }
    function N(e, t) {
      if (e === "change")
        return t;
    }
    var k = !1;
    nn && (k = l_("input") && (!document.documentMode || document.documentMode > 9));
    function W(e, t) {
      r = e, o = t, r.attachEvent("onpropertychange", ce);
    }
    function ue() {
      r && (r.detachEvent("onpropertychange", ce), r = null, o = null);
    }
    function ce(e) {
      e.propertyName === "value" && R(o) && v(e);
    }
    function ae(e, t, a) {
      e === "focusin" ? (ue(), W(t, a)) : e === "focusout" && ue();
    }
    function we(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return R(o);
    }
    function Ue(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ie(e, t) {
      if (e === "click")
        return R(t);
    }
    function Vn(e, t) {
      if (e === "input" || e === "change")
        return R(t);
    }
    function P(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || se(e, "number", e.value);
    }
    function U(e, t, a, i, u, f, m) {
      var g = a ? ld(a) : window, E, T;
      if (s(g) ? E = N : ms(g) ? k ? E = Vn : (E = we, T = ae) : Ue(g) && (E = Ie), E) {
        var x = E(t, a);
        if (x) {
          n(e, x, i, u);
          return;
        }
      }
      T && T(t, g, a), t === "focusout" && P(g);
    }
    function I() {
      Hr("onMouseEnter", ["mouseout", "mouseover"]), Hr("onMouseLeave", ["mouseout", "mouseover"]), Hr("onPointerEnter", ["pointerout", "pointerover"]), Hr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function he(e, t, a, i, u, f, m) {
      var g = t === "mouseover" || t === "pointerover", E = t === "mouseout" || t === "pointerout";
      if (g && !Fh(i)) {
        var T = i.relatedTarget || i.fromElement;
        if (T && (Oc(T) || cv(T)))
          return;
      }
      if (!(!E && !g)) {
        var x;
        if (u.window === u)
          x = u;
        else {
          var z = u.ownerDocument;
          z ? x = z.defaultView || z.parentWindow : x = window;
        }
        var M, $;
        if (E) {
          var Y = i.relatedTarget || i.toElement;
          if (M = a, $ = Y ? Oc(Y) : null, $ !== null) {
            var Q = Aa($);
            ($ !== Q || $.tag !== re && $.tag !== De) && ($ = null);
          }
        } else
          M = null, $ = a;
        if (M !== $) {
          var Oe = Su, Je = "onMouseLeave", Ge = "onMouseEnter", Pt = "mouse";
          (t === "pointerout" || t === "pointerover") && (Oe = Yp, Je = "onPointerLeave", Ge = "onPointerEnter", Pt = "pointer");
          var Mt = M == null ? x : ld(M), F = $ == null ? x : ld($), K = new Oe(Je, Pt + "leave", M, i, u);
          K.target = Mt, K.relatedTarget = F;
          var H = null, pe = Oc(u);
          if (pe === a) {
            var xe = new Oe(Ge, Pt + "enter", $, i, u);
            xe.target = F, xe.relatedTarget = Mt, H = xe;
          }
          RT(e, K, H, M, $);
        }
      }
    }
    function We(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ze = typeof Object.is == "function" ? Object.is : We;
    function Qe(e, t) {
      if (ze(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var f = a[u];
        if (!Fn.call(t, f) || !ze(e[f], t[f]))
          return !1;
      }
      return !0;
    }
    function ct(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function fr(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function $t(e, t) {
      for (var a = ct(e), i = 0, u = 0; a; ) {
        if (a.nodeType === yo) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = ct(fr(a));
      }
    }
    function Cu(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, f = i.anchorOffset, m = i.focusNode, g = i.focusOffset;
      try {
        u.nodeType, m.nodeType;
      } catch {
        return null;
      }
      return s_(e, u, f, m, g);
    }
    function s_(e, t, a, i, u) {
      var f = 0, m = -1, g = -1, E = 0, T = 0, x = e, z = null;
      e:
        for (; ; ) {
          for (var M = null; x === t && (a === 0 || x.nodeType === yo) && (m = f + a), x === i && (u === 0 || x.nodeType === yo) && (g = f + u), x.nodeType === yo && (f += x.nodeValue.length), (M = x.firstChild) !== null; )
            z = x, x = M;
          for (; ; ) {
            if (x === e)
              break e;
            if (z === t && ++E === a && (m = f), z === i && ++T === u && (g = f), (M = x.nextSibling) !== null)
              break;
            x = z, z = x.parentNode;
          }
          x = M;
        }
      return m === -1 || g === -1 ? null : {
        start: m,
        end: g
      };
    }
    function iT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), f = e.textContent.length, m = Math.min(t.start, f), g = t.end === void 0 ? m : Math.min(t.end, f);
        if (!u.extend && m > g) {
          var E = g;
          g = m, m = E;
        }
        var T = $t(e, m), x = $t(e, g);
        if (T && x) {
          if (u.rangeCount === 1 && u.anchorNode === T.node && u.anchorOffset === T.offset && u.focusNode === x.node && u.focusOffset === x.offset)
            return;
          var z = a.createRange();
          z.setStart(T.node, T.offset), u.removeAllRanges(), m > g ? (u.addRange(z), u.extend(x.node, x.offset)) : (z.setEnd(x.node, x.offset), u.addRange(z));
        }
      }
    }
    function kE(e) {
      return e && e.nodeType === yo;
    }
    function AE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : kE(e) ? !1 : kE(t) ? AE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function oT(e) {
      return e && e.ownerDocument && AE(e.ownerDocument.documentElement, e);
    }
    function uT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function LE() {
      for (var e = window, t = Xa(); t instanceof e.HTMLIFrameElement; ) {
        if (uT(t))
          e = t.contentWindow;
        else
          return t;
        t = Xa(e.document);
      }
      return t;
    }
    function c_(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function lT() {
      var e = LE();
      return {
        focusedElem: e,
        selectionRange: c_(e) ? cT(e) : null
      };
    }
    function sT(e) {
      var t = LE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && oT(a)) {
        i !== null && c_(a) && fT(a, i);
        for (var u = [], f = a; f = f.parentNode; )
          f.nodeType === la && u.push({
            element: f,
            left: f.scrollLeft,
            top: f.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var m = 0; m < u.length; m++) {
          var g = u[m];
          g.element.scrollLeft = g.left, g.element.scrollTop = g.top;
        }
      }
    }
    function cT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Cu(e), t || {
        start: 0,
        end: 0
      };
    }
    function fT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : iT(e, t);
    }
    var dT = nn && "documentMode" in document && document.documentMode <= 11;
    function pT() {
      nr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var rd = null, f_ = null, qp = null, d_ = !1;
    function vT(e) {
      if ("selectionStart" in e && c_(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function hT(e) {
      return e.window === e ? e.document : e.nodeType === Ei ? e : e.ownerDocument;
    }
    function ME(e, t, a) {
      var i = hT(a);
      if (!(d_ || rd == null || rd !== Xa(i))) {
        var u = vT(rd);
        if (!qp || !Qe(qp, u)) {
          qp = u;
          var f = Om(f_, "onSelect");
          if (f.length > 0) {
            var m = new Vr("onSelect", "select", null, t, a);
            e.push({
              event: m,
              listeners: f
            }), m.target = rd;
          }
        }
      }
    }
    function mT(e, t, a, i, u, f, m) {
      var g = a ? ld(a) : window;
      switch (t) {
        case "focusin":
          (ms(g) || g.contentEditable === "true") && (rd = g, f_ = a, qp = null);
          break;
        case "focusout":
          rd = null, f_ = null, qp = null;
          break;
        case "mousedown":
          d_ = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          d_ = !1, ME(e, i, u);
          break;
        case "selectionchange":
          if (dT)
            break;
        case "keydown":
        case "keyup":
          ME(e, i, u);
      }
    }
    function Rm(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var ad = {
      animationend: Rm("Animation", "AnimationEnd"),
      animationiteration: Rm("Animation", "AnimationIteration"),
      animationstart: Rm("Animation", "AnimationStart"),
      transitionend: Rm("Transition", "TransitionEnd")
    }, p_ = {}, UE = {};
    nn && (UE = document.createElement("div").style, "AnimationEvent" in window || (delete ad.animationend.animation, delete ad.animationiteration.animation, delete ad.animationstart.animation), "TransitionEvent" in window || delete ad.transitionend.transition);
    function wm(e) {
      if (p_[e])
        return p_[e];
      if (!ad[e])
        return e;
      var t = ad[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in UE)
          return p_[e] = t[a];
      return e;
    }
    var zE = wm("animationend"), jE = wm("animationiteration"), VE = wm("animationstart"), PE = wm("transitionend"), FE = /* @__PURE__ */ new Map(), HE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function ys(e, t) {
      FE.set(e, t), nr(t, [e]);
    }
    function yT() {
      for (var e = 0; e < HE.length; e++) {
        var t = HE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        ys(a, "on" + i);
      }
      ys(zE, "onAnimationEnd"), ys(jE, "onAnimationIteration"), ys(VE, "onAnimationStart"), ys("dblclick", "onDoubleClick"), ys("focusin", "onFocus"), ys("focusout", "onBlur"), ys(PE, "onTransitionEnd");
    }
    function gT(e, t, a, i, u, f, m) {
      var g = FE.get(t);
      if (g !== void 0) {
        var E = Vr, T = t;
        switch (t) {
          case "keypress":
            if (pl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            E = n_;
            break;
          case "focusin":
            T = "focus", E = Gf;
            break;
          case "focusout":
            T = "blur", E = Gf;
            break;
          case "beforeblur":
          case "afterblur":
            E = Gf;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            E = Su;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            E = hl;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            E = si;
            break;
          case zE:
          case jE:
          case VE:
            E = Qf;
            break;
          case PE:
            E = a_;
            break;
          case "scroll":
            E = Fp;
            break;
          case "wheel":
            E = Xf;
            break;
          case "copy":
          case "cut":
          case "paste":
            E = Zg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            E = Yp;
            break;
        }
        var x = (f & Gu) !== 0;
        {
          var z = !x && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", M = ET(a, g, i.type, x, z);
          if (M.length > 0) {
            var $ = new E(g, T, null, i, u);
            e.push({
              event: $,
              listeners: M
            });
          }
        }
      }
    }
    yT(), I(), nd(), pT(), bm();
    function _T(e, t, a, i, u, f, m) {
      gT(e, t, a, i, u, f);
      var g = (f & Pg) === 0;
      g && (he(e, t, a, i, u), U(e, t, a, i, u), mT(e, t, a, i, u), td(e, t, a, i, u));
    }
    var Zp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], v_ = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Zp));
    function BE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, So(i, t, void 0, e), e.currentTarget = null;
    }
    function bT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var f = t[u], m = f.instance, g = f.currentTarget, E = f.listener;
          if (m !== i && e.isPropagationStopped())
            return;
          BE(e, E, g), i = m;
        }
      else
        for (var T = 0; T < t.length; T++) {
          var x = t[T], z = x.instance, M = x.currentTarget, $ = x.listener;
          if (z !== i && e.isPropagationStopped())
            return;
          BE(e, $, M), i = z;
        }
    }
    function IE(e, t) {
      for (var a = (t & Gu) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], f = u.event, m = u.listeners;
        bT(f, m, a);
      }
      lp();
    }
    function ST(e, t, a, i, u) {
      var f = rf(a), m = [];
      _T(m, e, i, a, f, t), IE(m, t);
    }
    function kn(e, t) {
      v_.has(e) || _('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = qO(t), u = wT(e, a);
      i.has(u) || ($E(t, e, Ks, a), i.add(u));
    }
    function h_(e, t, a) {
      v_.has(e) && !t && _('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Gu), $E(a, e, i, t);
    }
    var Tm = "_reactListening" + Math.random().toString(36).slice(2);
    function Jp(e) {
      if (!e[Tm]) {
        e[Tm] = !0, Ve.forEach(function(a) {
          a !== "selectionchange" && (v_.has(a) || h_(a, !1, e), h_(a, !0, e));
        });
        var t = e.nodeType === Ei ? e : e.ownerDocument;
        t !== null && (t[Tm] || (t[Tm] = !0, h_("selectionchange", !1, t)));
      }
    }
    function $E(e, t, a, i, u) {
      var f = ss(e, t, a), m = void 0;
      ec && (t === "touchstart" || t === "touchmove" || t === "wheel") && (m = !0), e = e, i ? m !== void 0 ? Do(e, t, f, m) : fs(e, t, f) : m !== void 0 ? $f(e, t, f, m) : Pp(e, t, f);
    }
    function YE(e, t) {
      return e === t || e.nodeType === Bn && e.parentNode === t;
    }
    function m_(e, t, a, i, u) {
      var f = i;
      if (!(t & _o) && !(t & Ks)) {
        var m = u;
        if (i !== null) {
          var g = i;
          e:
            for (; ; ) {
              if (g === null)
                return;
              var E = g.tag;
              if (E === X || E === te) {
                var T = g.stateNode.containerInfo;
                if (YE(T, m))
                  break;
                if (E === te)
                  for (var x = g.return; x !== null; ) {
                    var z = x.tag;
                    if (z === X || z === te) {
                      var M = x.stateNode.containerInfo;
                      if (YE(M, m))
                        return;
                    }
                    x = x.return;
                  }
                for (; T !== null; ) {
                  var $ = Oc(T);
                  if ($ === null)
                    return;
                  var Y = $.tag;
                  if (Y === re || Y === De) {
                    g = f = $;
                    continue e;
                  }
                  T = T.parentNode;
                }
              }
              g = g.return;
            }
        }
      }
      ap(function() {
        return ST(e, t, a, f);
      });
    }
    function ev(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function ET(e, t, a, i, u, f) {
      for (var m = t !== null ? t + "Capture" : null, g = i ? m : t, E = [], T = e, x = null; T !== null; ) {
        var z = T, M = z.stateNode, $ = z.tag;
        if ($ === re && M !== null && (x = M, g !== null)) {
          var Y = Ku(T, g);
          Y != null && E.push(ev(T, Y, x));
        }
        if (u)
          break;
        T = T.return;
      }
      return E;
    }
    function Om(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var f = u, m = f.stateNode, g = f.tag;
        if (g === re && m !== null) {
          var E = m, T = Ku(u, a);
          T != null && i.unshift(ev(u, T, E));
          var x = Ku(u, t);
          x != null && i.push(ev(u, x, E));
        }
        u = u.return;
      }
      return i;
    }
    function id(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== re);
      return e || null;
    }
    function CT(e, t) {
      for (var a = e, i = t, u = 0, f = a; f; f = id(f))
        u++;
      for (var m = 0, g = i; g; g = id(g))
        m++;
      for (; u - m > 0; )
        a = id(a), u--;
      for (; m - u > 0; )
        i = id(i), m--;
      for (var E = u; E--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = id(a), i = id(i);
      }
      return null;
    }
    function WE(e, t, a, i, u) {
      for (var f = t._reactName, m = [], g = a; g !== null && g !== i; ) {
        var E = g, T = E.alternate, x = E.stateNode, z = E.tag;
        if (T !== null && T === i)
          break;
        if (z === re && x !== null) {
          var M = x;
          if (u) {
            var $ = Ku(g, f);
            $ != null && m.unshift(ev(g, $, M));
          } else if (!u) {
            var Y = Ku(g, f);
            Y != null && m.push(ev(g, Y, M));
          }
        }
        g = g.return;
      }
      m.length !== 0 && e.push({
        event: t,
        listeners: m
      });
    }
    function RT(e, t, a, i, u) {
      var f = i && u ? CT(i, u) : null;
      i !== null && WE(e, t, i, f, !1), u !== null && a !== null && WE(e, a, u, f, !0);
    }
    function wT(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var ci = !1, tv = "dangerouslySetInnerHTML", xm = "suppressContentEditableWarning", gs = "suppressHydrationWarning", GE = "autoFocus", wc = "children", Tc = "style", Dm = "__html", y_, Nm, nv, QE, km, KE, XE;
    y_ = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Nm = function(e, t) {
      nf(e, t), Jd(e, t), Ph(e, t, {
        registrationNameDependencies: yt,
        possibleRegistrationNames: Fr
      });
    }, KE = nn && !document.documentMode, nv = function(e, t, a) {
      if (!ci) {
        var i = Am(a), u = Am(t);
        u !== i && (ci = !0, _("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, QE = function(e) {
      if (!ci) {
        ci = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), _("Extra attributes from the server: %s", t);
      }
    }, km = function(e, t) {
      t === !1 ? _("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : _("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, XE = function(e, t) {
      var a = e.namespaceURI === mo ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var TT = /\r\n?/g, OT = /\u0000|\uFFFD/g;
    function Am(e) {
      hn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(TT, `
`).replace(OT, "");
    }
    function Lm(e, t, a, i) {
      var u = Am(t), f = Am(e);
      if (f !== u && (i && (ci || (ci = !0, _('Text content did not match. Server: "%s" Client: "%s"', f, u))), a && J))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function qE(e) {
      return e.nodeType === Ei ? e : e.ownerDocument;
    }
    function xT() {
    }
    function Mm(e) {
      e.onclick = xT;
    }
    function DT(e, t, a, i, u) {
      for (var f in i)
        if (i.hasOwnProperty(f)) {
          var m = i[f];
          if (f === Tc)
            m && Object.freeze(m), Dh(t, m);
          else if (f === tv) {
            var g = m ? m[Dm] : void 0;
            g != null && gh(t, g);
          } else if (f === wc)
            if (typeof m == "string") {
              var E = e !== "textarea" || m !== "";
              E && Zc(t, m);
            } else
              typeof m == "number" && Zc(t, "" + m);
          else
            f === xm || f === gs || f === GE || (yt.hasOwnProperty(f) ? m != null && (typeof m != "function" && km(f, m), f === "onScroll" && kn("scroll", t)) : m != null && Ra(t, f, m, u));
        }
    }
    function NT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var f = t[u], m = t[u + 1];
        f === Tc ? Dh(e, m) : f === tv ? gh(e, m) : f === wc ? Zc(e, m) : Ra(e, f, m, i);
      }
    }
    function kT(e, t, a, i) {
      var u, f = qE(a), m, g = i;
      if (g === mo && (g = Xc(e)), g === mo) {
        if (u = go(e, t), !u && e !== e.toLowerCase() && _("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var E = f.createElement("div");
          E.innerHTML = "<script><\/script>";
          var T = E.firstChild;
          m = E.removeChild(T);
        } else if (typeof t.is == "string")
          m = f.createElement(e, {
            is: t.is
          });
        else if (m = f.createElement(e), e === "select") {
          var x = m;
          t.multiple ? x.multiple = !0 : t.size && (x.size = t.size);
        }
      } else
        m = f.createElementNS(g, e);
      return g === mo && !u && Object.prototype.toString.call(m) === "[object HTMLUnknownElement]" && !Fn.call(y_, e) && (y_[e] = !0, _("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), m;
    }
    function AT(e, t) {
      return qE(t).createTextNode(e);
    }
    function LT(e, t, a, i) {
      var u = go(t, a);
      Nm(t, a);
      var f;
      switch (t) {
        case "dialog":
          kn("cancel", e), kn("close", e), f = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          kn("load", e), f = a;
          break;
        case "video":
        case "audio":
          for (var m = 0; m < Zp.length; m++)
            kn(Zp[m], e);
          f = a;
          break;
        case "source":
          kn("error", e), f = a;
          break;
        case "img":
        case "image":
        case "link":
          kn("error", e), kn("load", e), f = a;
          break;
        case "details":
          kn("toggle", e), f = a;
          break;
        case "input":
          S(e, a), f = d(e, a), kn("invalid", e);
          break;
        case "option":
          qe(e, a), f = a;
          break;
        case "select":
          ru(e, a), f = $u(e, a), kn("invalid", e);
          break;
        case "textarea":
          hh(e, a), f = $d(e, a), kn("invalid", e);
          break;
        default:
          f = a;
      }
      switch (ef(t, f), DT(t, e, i, f, u), t) {
        case "input":
          mr(e), V(e, a, !1);
          break;
        case "textarea":
          mr(e), yh(e);
          break;
        case "option":
          at(e, a);
          break;
        case "select":
          Ys(e, a);
          break;
        default:
          typeof f.onClick == "function" && Mm(e);
          break;
      }
    }
    function MT(e, t, a, i, u) {
      Nm(t, i);
      var f = null, m, g;
      switch (t) {
        case "input":
          m = d(e, a), g = d(e, i), f = [];
          break;
        case "select":
          m = $u(e, a), g = $u(e, i), f = [];
          break;
        case "textarea":
          m = $d(e, a), g = $d(e, i), f = [];
          break;
        default:
          m = a, g = i, typeof m.onClick != "function" && typeof g.onClick == "function" && Mm(e);
          break;
      }
      ef(t, g);
      var E, T, x = null;
      for (E in m)
        if (!(g.hasOwnProperty(E) || !m.hasOwnProperty(E) || m[E] == null))
          if (E === Tc) {
            var z = m[E];
            for (T in z)
              z.hasOwnProperty(T) && (x || (x = {}), x[T] = "");
          } else
            E === tv || E === wc || E === xm || E === gs || E === GE || (yt.hasOwnProperty(E) ? f || (f = []) : (f = f || []).push(E, null));
      for (E in g) {
        var M = g[E], $ = m != null ? m[E] : void 0;
        if (!(!g.hasOwnProperty(E) || M === $ || M == null && $ == null))
          if (E === Tc)
            if (M && Object.freeze(M), $) {
              for (T in $)
                $.hasOwnProperty(T) && (!M || !M.hasOwnProperty(T)) && (x || (x = {}), x[T] = "");
              for (T in M)
                M.hasOwnProperty(T) && $[T] !== M[T] && (x || (x = {}), x[T] = M[T]);
            } else
              x || (f || (f = []), f.push(E, x)), x = M;
          else if (E === tv) {
            var Y = M ? M[Dm] : void 0, Q = $ ? $[Dm] : void 0;
            Y != null && Q !== Y && (f = f || []).push(E, Y);
          } else
            E === wc ? (typeof M == "string" || typeof M == "number") && (f = f || []).push(E, "" + M) : E === xm || E === gs || (yt.hasOwnProperty(E) ? (M != null && (typeof M != "function" && km(E, M), E === "onScroll" && kn("scroll", e)), !f && $ !== M && (f = [])) : (f = f || []).push(E, M));
      }
      return x && (Gs(x, g[Tc]), (f = f || []).push(Tc, x)), f;
    }
    function UT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && O(e, u);
      var f = go(a, i), m = go(a, u);
      switch (NT(e, t, f, m), a) {
        case "input":
          D(e, u);
          break;
        case "textarea":
          mh(e, u);
          break;
        case "select":
          Dg(e, u);
          break;
      }
    }
    function zT(e) {
      {
        var t = e.toLowerCase();
        return tf.hasOwnProperty(t) && tf[t] || null;
      }
    }
    function jT(e, t, a, i, u, f, m) {
      var g, E;
      switch (g = go(t, a), Nm(t, a), t) {
        case "dialog":
          kn("cancel", e), kn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          kn("load", e);
          break;
        case "video":
        case "audio":
          for (var T = 0; T < Zp.length; T++)
            kn(Zp[T], e);
          break;
        case "source":
          kn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          kn("error", e), kn("load", e);
          break;
        case "details":
          kn("toggle", e);
          break;
        case "input":
          S(e, a), kn("invalid", e);
          break;
        case "option":
          qe(e, a);
          break;
        case "select":
          ru(e, a), kn("invalid", e);
          break;
        case "textarea":
          hh(e, a), kn("invalid", e);
          break;
      }
      ef(t, a);
      {
        E = /* @__PURE__ */ new Set();
        for (var x = e.attributes, z = 0; z < x.length; z++) {
          var M = x[z].name.toLowerCase();
          switch (M) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              E.add(x[z].name);
          }
        }
      }
      var $ = null;
      for (var Y in a)
        if (a.hasOwnProperty(Y)) {
          var Q = a[Y];
          if (Y === wc)
            typeof Q == "string" ? e.textContent !== Q && (a[gs] !== !0 && Lm(e.textContent, Q, f, m), $ = [wc, Q]) : typeof Q == "number" && e.textContent !== "" + Q && (a[gs] !== !0 && Lm(e.textContent, Q, f, m), $ = [wc, "" + Q]);
          else if (yt.hasOwnProperty(Y))
            Q != null && (typeof Q != "function" && km(Y, Q), Y === "onScroll" && kn("scroll", e));
          else if (m && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof g == "boolean") {
            var Oe = void 0, Je = g && Se ? null : na(Y);
            if (a[gs] !== !0) {
              if (!(Y === xm || Y === gs || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              Y === "value" || Y === "checked" || Y === "selected")) {
                if (Y === tv) {
                  var Ge = e.innerHTML, Pt = Q ? Q[Dm] : void 0;
                  if (Pt != null) {
                    var Mt = XE(e, Pt);
                    Mt !== Ge && nv(Y, Ge, Mt);
                  }
                } else if (Y === Tc) {
                  if (E.delete(Y), KE) {
                    var F = jg(Q);
                    Oe = e.getAttribute("style"), F !== Oe && nv(Y, Oe, F);
                  }
                } else if (g && !Se)
                  E.delete(Y.toLowerCase()), Oe = $a(e, Y, Q), Q !== Oe && nv(Y, Oe, Q);
                else if (!On(Y, Je, g) && !an(Y, Q, Je, g)) {
                  var K = !1;
                  if (Je !== null)
                    E.delete(Je.attributeName), Oe = pr(e, Y, Q, Je);
                  else {
                    var H = i;
                    if (H === mo && (H = Xc(t)), H === mo)
                      E.delete(Y.toLowerCase());
                    else {
                      var pe = zT(Y);
                      pe !== null && pe !== Y && (K = !0, E.delete(pe)), E.delete(Y);
                    }
                    Oe = $a(e, Y, Q);
                  }
                  var xe = Se;
                  !xe && Q !== Oe && !K && nv(Y, Oe, Q);
                }
              }
            }
          }
        }
      switch (m && // $FlowFixMe - Should be inferred as not undefined.
      E.size > 0 && a[gs] !== !0 && QE(E), t) {
        case "input":
          mr(e), V(e, a, !0);
          break;
        case "textarea":
          mr(e), yh(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Mm(e);
          break;
      }
      return $;
    }
    function VT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function g_(e, t) {
      {
        if (ci)
          return;
        ci = !0, _("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function __(e, t) {
      {
        if (ci)
          return;
        ci = !0, _('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function b_(e, t, a) {
      {
        if (ci)
          return;
        ci = !0, _("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function S_(e, t) {
      {
        if (t === "" || ci)
          return;
        ci = !0, _('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function PT(e, t, a) {
      switch (t) {
        case "input":
          oe(e, a);
          return;
        case "textarea":
          Yd(e, a);
          return;
        case "select":
          Ng(e, a);
          return;
      }
    }
    var rv = function() {
    }, av = function() {
    };
    {
      var FT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], ZE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], HT = ZE.concat(["button"]), BT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], JE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      av = function(e, t) {
        var a = Ct({}, e || JE), i = {
          tag: t
        };
        return ZE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), HT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), FT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var IT = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return BT.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, $T = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, e0 = {};
      rv = function(e, t, a) {
        a = a || JE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && _("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var f = IT(e, u) ? null : i, m = f ? null : $T(e, a), g = f || m;
        if (g) {
          var E = g.tag, T = !!f + "|" + e + "|" + E;
          if (!e0[T]) {
            e0[T] = !0;
            var x = e, z = "";
            if (e === "#text" ? /\S/.test(t) ? x = "Text nodes" : (x = "Whitespace text nodes", z = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : x = "<" + e + ">", f) {
              var M = "";
              E === "table" && e === "tr" && (M += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), _("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", x, E, z, M);
            } else
              _("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", x, E);
          }
        }
      };
    }
    var Um = "suppressHydrationWarning", zm = "$", jm = "/$", iv = "$?", ov = "$!", YT = "style", E_ = null, C_ = null;
    function WT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Ei:
        case Yu: {
          t = i === Ei ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Gd(null, "");
          break;
        }
        default: {
          var f = i === Bn ? e.parentNode : e, m = f.namespaceURI || null;
          t = f.tagName, a = Gd(m, t);
          break;
        }
      }
      {
        var g = t.toLowerCase(), E = av(null, g);
        return {
          namespace: a,
          ancestorInfo: E
        };
      }
    }
    function GT(e, t, a) {
      {
        var i = e, u = Gd(i.namespace, t), f = av(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: f
        };
      }
    }
    function xM(e) {
      return e;
    }
    function QT(e) {
      E_ = za(), C_ = lT();
      var t = null;
      return cr(!1), t;
    }
    function KT(e) {
      sT(C_), cr(E_), E_ = null, C_ = null;
    }
    function XT(e, t, a, i, u) {
      var f;
      {
        var m = i;
        if (rv(e, null, m.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var g = "" + t.children, E = av(m.ancestorInfo, e);
          rv(null, g, E);
        }
        f = m.namespace;
      }
      var T = kT(e, t, a, f);
      return sv(u, T), k_(T, t), T;
    }
    function qT(e, t) {
      e.appendChild(t);
    }
    function ZT(e, t, a, i, u) {
      switch (LT(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function JT(e, t, a, i, u, f) {
      {
        var m = f;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var g = "" + i.children, E = av(m.ancestorInfo, t);
          rv(null, g, E);
        }
      }
      return MT(e, t, a, i);
    }
    function R_(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function eO(e, t, a, i) {
      {
        var u = a;
        rv(null, e, u.ancestorInfo);
      }
      var f = AT(e, t);
      return sv(i, f), f;
    }
    function tO() {
      var e = window.event;
      return e === void 0 ? To : Yr(e.type);
    }
    var w_ = typeof setTimeout == "function" ? setTimeout : void 0, nO = typeof clearTimeout == "function" ? clearTimeout : void 0, T_ = -1, t0 = typeof Promise == "function" ? Promise : void 0, rO = typeof queueMicrotask == "function" ? queueMicrotask : typeof t0 < "u" ? function(e) {
      return t0.resolve(null).then(e).catch(aO);
    } : w_;
    function aO(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function iO(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function oO(e, t, a, i, u, f) {
      UT(e, t, a, i, u), k_(e, u);
    }
    function n0(e) {
      Zc(e, "");
    }
    function uO(e, t, a) {
      e.nodeValue = a;
    }
    function lO(e, t) {
      e.appendChild(t);
    }
    function sO(e, t) {
      var a;
      e.nodeType === Bn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Mm(a);
    }
    function cO(e, t, a) {
      e.insertBefore(t, a);
    }
    function fO(e, t, a) {
      e.nodeType === Bn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function dO(e, t) {
      e.removeChild(t);
    }
    function pO(e, t) {
      e.nodeType === Bn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function O_(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Bn) {
          var f = u.data;
          if (f === jm)
            if (i === 0) {
              e.removeChild(u), Lt(t);
              return;
            } else
              i--;
          else
            (f === zm || f === iv || f === ov) && i++;
        }
        a = u;
      } while (a);
      Lt(t);
    }
    function vO(e, t) {
      e.nodeType === Bn ? O_(e.parentNode, t) : e.nodeType === la && O_(e, t), Lt(e);
    }
    function hO(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function mO(e) {
      e.nodeValue = "";
    }
    function yO(e, t) {
      e = e;
      var a = t[YT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Jc("display", i);
    }
    function gO(e, t) {
      e.nodeValue = t;
    }
    function _O(e) {
      e.nodeType === la ? e.textContent = "" : e.nodeType === Ei && e.documentElement && e.removeChild(e.documentElement);
    }
    function bO(e, t, a) {
      return e.nodeType !== la || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function SO(e, t) {
      return t === "" || e.nodeType !== yo ? null : e;
    }
    function EO(e) {
      return e.nodeType !== Bn ? null : e;
    }
    function r0(e) {
      return e.data === iv;
    }
    function x_(e) {
      return e.data === ov;
    }
    function CO(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function RO(e, t) {
      e._reactRetry = t;
    }
    function Vm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === la || t === yo)
          break;
        if (t === Bn) {
          var a = e.data;
          if (a === zm || a === ov || a === iv)
            break;
          if (a === jm)
            return null;
        }
      }
      return e;
    }
    function uv(e) {
      return Vm(e.nextSibling);
    }
    function wO(e) {
      return Vm(e.firstChild);
    }
    function TO(e) {
      return Vm(e.firstChild);
    }
    function OO(e) {
      return Vm(e.nextSibling);
    }
    function xO(e, t, a, i, u, f, m) {
      sv(f, e), k_(e, a);
      var g;
      {
        var E = u;
        g = E.namespace;
      }
      var T = (f.mode & Ot) !== et;
      return jT(e, t, a, g, i, T, m);
    }
    function DO(e, t, a, i) {
      return sv(a, e), a.mode & Ot, VT(e, t);
    }
    function NO(e, t) {
      sv(t, e);
    }
    function kO(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Bn) {
          var i = t.data;
          if (i === jm) {
            if (a === 0)
              return uv(t);
            a--;
          } else
            (i === zm || i === ov || i === iv) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function a0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Bn) {
          var i = t.data;
          if (i === zm || i === ov || i === iv) {
            if (a === 0)
              return t;
            a--;
          } else
            i === jm && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function AO(e) {
      Lt(e);
    }
    function LO(e) {
      Lt(e);
    }
    function MO(e) {
      return e !== "head" && e !== "body";
    }
    function UO(e, t, a, i) {
      var u = !0;
      Lm(t.nodeValue, a, i, u);
    }
    function zO(e, t, a, i, u, f) {
      if (t[Um] !== !0) {
        var m = !0;
        Lm(i.nodeValue, u, f, m);
      }
    }
    function jO(e, t) {
      t.nodeType === la ? g_(e, t) : t.nodeType === Bn || __(e, t);
    }
    function VO(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === la ? g_(a, t) : t.nodeType === Bn || __(a, t));
      }
    }
    function PO(e, t, a, i, u) {
      (u || t[Um] !== !0) && (i.nodeType === la ? g_(a, i) : i.nodeType === Bn || __(a, i));
    }
    function FO(e, t, a) {
      b_(e, t);
    }
    function HO(e, t) {
      S_(e, t);
    }
    function BO(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && b_(i, t);
      }
    }
    function IO(e, t) {
      {
        var a = e.parentNode;
        a !== null && S_(a, t);
      }
    }
    function $O(e, t, a, i, u, f) {
      (f || t[Um] !== !0) && b_(a, i);
    }
    function YO(e, t, a, i, u) {
      (u || t[Um] !== !0) && S_(a, i);
    }
    function WO(e) {
      _("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function GO(e) {
      Jp(e);
    }
    var od = Math.random().toString(36).slice(2), ud = "__reactFiber$" + od, D_ = "__reactProps$" + od, lv = "__reactContainer$" + od, N_ = "__reactEvents$" + od, QO = "__reactListeners$" + od, KO = "__reactHandles$" + od;
    function XO(e) {
      delete e[ud], delete e[D_], delete e[N_], delete e[QO], delete e[KO];
    }
    function sv(e, t) {
      t[ud] = e;
    }
    function Pm(e, t) {
      t[lv] = e;
    }
    function i0(e) {
      e[lv] = null;
    }
    function cv(e) {
      return !!e[lv];
    }
    function Oc(e) {
      var t = e[ud];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[lv] || a[ud], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = a0(e); u !== null; ) {
              var f = u[ud];
              if (f)
                return f;
              u = a0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function _s(e) {
      var t = e[ud] || e[lv];
      return t && (t.tag === re || t.tag === De || t.tag === fe || t.tag === X) ? t : null;
    }
    function ld(e) {
      if (e.tag === re || e.tag === De)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Fm(e) {
      return e[D_] || null;
    }
    function k_(e, t) {
      e[D_] = t;
    }
    function qO(e) {
      var t = e[N_];
      return t === void 0 && (t = e[N_] = /* @__PURE__ */ new Set()), t;
    }
    var o0 = {}, u0 = p.ReactDebugCurrentFrame;
    function Hm(e) {
      if (e) {
        var t = e._owner, a = $r(e.type, e._source, t ? t.type : null);
        u0.setExtraStackFrame(a);
      } else
        u0.setExtraStackFrame(null);
    }
    function ko(e, t, a, i, u) {
      {
        var f = Function.call.bind(Fn);
        for (var m in e)
          if (f(e, m)) {
            var g = void 0;
            try {
              if (typeof e[m] != "function") {
                var E = Error((i || "React class") + ": " + a + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              g = e[m](t, m, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              g = T;
            }
            g && !(g instanceof Error) && (Hm(u), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, m, typeof g), Hm(null)), g instanceof Error && !(g.message in o0) && (o0[g.message] = !0, Hm(u), _("Failed %s type: %s", a, g.message), Hm(null));
          }
      }
    }
    var A_ = [], Bm;
    Bm = [];
    var _l = -1;
    function bs(e) {
      return {
        current: e
      };
    }
    function ya(e, t) {
      if (_l < 0) {
        _("Unexpected pop.");
        return;
      }
      t !== Bm[_l] && _("Unexpected Fiber popped."), e.current = A_[_l], A_[_l] = null, Bm[_l] = null, _l--;
    }
    function ga(e, t, a) {
      _l++, A_[_l] = e.current, Bm[_l] = a, e.current = t;
    }
    var L_;
    L_ = {};
    var Oi = {};
    Object.freeze(Oi);
    var bl = bs(Oi), Ru = bs(!1), M_ = Oi;
    function sd(e, t, a) {
      return a && wu(t) ? M_ : bl.current;
    }
    function l0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function cd(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return Oi;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var f = {};
        for (var m in i)
          f[m] = t[m];
        {
          var g = lt(e) || "Unknown";
          ko(i, f, "context", g);
        }
        return u && l0(e, t, f), f;
      }
    }
    function Im() {
      return Ru.current;
    }
    function wu(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function $m(e) {
      ya(Ru, e), ya(bl, e);
    }
    function U_(e) {
      ya(Ru, e), ya(bl, e);
    }
    function s0(e, t, a) {
      {
        if (bl.current !== Oi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ga(bl, t, e), ga(Ru, a, e);
      }
    }
    function c0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var f = lt(e) || "Unknown";
            L_[f] || (L_[f] = !0, _("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", f, f));
          }
          return a;
        }
        var m = i.getChildContext();
        for (var g in m)
          if (!(g in u))
            throw new Error((lt(e) || "Unknown") + '.getChildContext(): key "' + g + '" is not defined in childContextTypes.');
        {
          var E = lt(e) || "Unknown";
          ko(u, m, "child context", E);
        }
        return Ct({}, a, m);
      }
    }
    function Ym(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Oi;
        return M_ = bl.current, ga(bl, a, e), ga(Ru, Ru.current, e), !0;
      }
    }
    function f0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = c0(e, t, M_);
          i.__reactInternalMemoizedMergedChildContext = u, ya(Ru, e), ya(bl, e), ga(bl, u, e), ga(Ru, a, e);
        } else
          ya(Ru, e), ga(Ru, a, e);
      }
    }
    function ZO(e) {
      {
        if (!pp(e) || e.tag !== B)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case X:
              return t.stateNode.context;
            case B: {
              var a = t.type;
              if (wu(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Ss = 0, Wm = 1, Sl = null, z_ = !1, j_ = !1;
    function d0(e) {
      Sl === null ? Sl = [e] : Sl.push(e);
    }
    function JO(e) {
      z_ = !0, d0(e);
    }
    function p0() {
      z_ && Es();
    }
    function Es() {
      if (!j_ && Sl !== null) {
        j_ = !0;
        var e = 0, t = oi();
        try {
          var a = !0, i = Sl;
          for (Zn(Lr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Sl = null, z_ = !1;
        } catch (f) {
          throw Sl !== null && (Sl = Sl.slice(e + 1)), ff(pf, Es), f;
        } finally {
          Zn(t), j_ = !1;
        }
      }
      return null;
    }
    var fd = [], dd = 0, Gm = null, Qm = 0, Qi = [], Ki = 0, xc = null, El = 1, Cl = "";
    function ex(e) {
      return Nc(), (e.flags & cp) !== Xe;
    }
    function tx(e) {
      return Nc(), Qm;
    }
    function nx() {
      var e = Cl, t = El, a = t & ~rx(t);
      return a.toString(32) + e;
    }
    function Dc(e, t) {
      Nc(), fd[dd++] = Qm, fd[dd++] = Gm, Gm = e, Qm = t;
    }
    function v0(e, t, a) {
      Nc(), Qi[Ki++] = El, Qi[Ki++] = Cl, Qi[Ki++] = xc, xc = e;
      var i = El, u = Cl, f = Km(i) - 1, m = i & ~(1 << f), g = a + 1, E = Km(t) + f;
      if (E > 30) {
        var T = f - f % 5, x = (1 << T) - 1, z = (m & x).toString(32), M = m >> T, $ = f - T, Y = Km(t) + $, Q = g << $, Oe = Q | M, Je = z + u;
        El = 1 << Y | Oe, Cl = Je;
      } else {
        var Ge = g << f, Pt = Ge | m, Mt = u;
        El = 1 << E | Pt, Cl = Mt;
      }
    }
    function V_(e) {
      Nc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Dc(e, a), v0(e, a, i);
      }
    }
    function Km(e) {
      return 32 - _f(e);
    }
    function rx(e) {
      return 1 << Km(e) - 1;
    }
    function P_(e) {
      for (; e === Gm; )
        Gm = fd[--dd], fd[dd] = null, Qm = fd[--dd], fd[dd] = null;
      for (; e === xc; )
        xc = Qi[--Ki], Qi[Ki] = null, Cl = Qi[--Ki], Qi[Ki] = null, El = Qi[--Ki], Qi[Ki] = null;
    }
    function ax() {
      return Nc(), xc !== null ? {
        id: El,
        overflow: Cl
      } : null;
    }
    function ix(e, t) {
      Nc(), Qi[Ki++] = El, Qi[Ki++] = Cl, Qi[Ki++] = xc, El = t.id, Cl = t.overflow, xc = e;
    }
    function Nc() {
      Gr() || _("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Wr = null, Xi = null, Ao = !1, kc = !1, Cs = null;
    function ox() {
      Ao && _("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function h0() {
      kc = !0;
    }
    function ux() {
      return kc;
    }
    function lx(e) {
      var t = e.stateNode.containerInfo;
      return Xi = TO(t), Wr = e, Ao = !0, Cs = null, kc = !1, !0;
    }
    function sx(e, t, a) {
      return Xi = OO(t), Wr = e, Ao = !0, Cs = null, kc = !1, a !== null && ix(e, a), !0;
    }
    function m0(e, t) {
      switch (e.tag) {
        case X: {
          jO(e.stateNode.containerInfo, t);
          break;
        }
        case re: {
          var a = (e.mode & Ot) !== et;
          PO(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case fe: {
          var i = e.memoizedState;
          i.dehydrated !== null && VO(i.dehydrated, t);
          break;
        }
      }
    }
    function y0(e, t) {
      m0(e, t);
      var a = dk();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Xt) : i.push(a);
    }
    function F_(e, t) {
      {
        if (kc)
          return;
        switch (e.tag) {
          case X: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case re:
                var i = t.type;
                t.pendingProps, FO(a, i);
                break;
              case De:
                var u = t.pendingProps;
                HO(a, u);
                break;
            }
            break;
          }
          case re: {
            var f = e.type, m = e.memoizedProps, g = e.stateNode;
            switch (t.tag) {
              case re: {
                var E = t.type, T = t.pendingProps, x = (e.mode & Ot) !== et;
                $O(
                  f,
                  m,
                  g,
                  E,
                  T,
                  // TODO: Delete this argument when we remove the legacy root API.
                  x
                );
                break;
              }
              case De: {
                var z = t.pendingProps, M = (e.mode & Ot) !== et;
                YO(
                  f,
                  m,
                  g,
                  z,
                  // TODO: Delete this argument when we remove the legacy root API.
                  M
                );
                break;
              }
            }
            break;
          }
          case fe: {
            var $ = e.memoizedState, Y = $.dehydrated;
            if (Y !== null)
              switch (t.tag) {
                case re:
                  var Q = t.type;
                  t.pendingProps, BO(Y, Q);
                  break;
                case De:
                  var Oe = t.pendingProps;
                  IO(Y, Oe);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function g0(e, t) {
      t.flags = t.flags & ~ti | yn, F_(e, t);
    }
    function _0(e, t) {
      switch (e.tag) {
        case re: {
          var a = e.type;
          e.pendingProps;
          var i = bO(t, a);
          return i !== null ? (e.stateNode = i, Wr = e, Xi = wO(i), !0) : !1;
        }
        case De: {
          var u = e.pendingProps, f = SO(t, u);
          return f !== null ? (e.stateNode = f, Wr = e, Xi = null, !0) : !1;
        }
        case fe: {
          var m = EO(t);
          if (m !== null) {
            var g = {
              dehydrated: m,
              treeContext: ax(),
              retryLane: ha
            };
            e.memoizedState = g;
            var E = pk(m);
            return E.return = e, e.child = E, Wr = e, Xi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function H_(e) {
      return (e.mode & Ot) !== et && (e.flags & st) === Xe;
    }
    function B_(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function I_(e) {
      if (Ao) {
        var t = Xi;
        if (!t) {
          H_(e) && (F_(Wr, e), B_()), g0(Wr, e), Ao = !1, Wr = e;
          return;
        }
        var a = t;
        if (!_0(e, t)) {
          H_(e) && (F_(Wr, e), B_()), t = uv(a);
          var i = Wr;
          if (!t || !_0(e, t)) {
            g0(Wr, e), Ao = !1, Wr = e;
            return;
          }
          y0(i, a);
        }
      }
    }
    function cx(e, t, a) {
      var i = e.stateNode, u = !kc, f = xO(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = f, f !== null;
    }
    function fx(e) {
      var t = e.stateNode, a = e.memoizedProps, i = DO(t, a, e);
      if (i) {
        var u = Wr;
        if (u !== null)
          switch (u.tag) {
            case X: {
              var f = u.stateNode.containerInfo, m = (u.mode & Ot) !== et;
              UO(
                f,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                m
              );
              break;
            }
            case re: {
              var g = u.type, E = u.memoizedProps, T = u.stateNode, x = (u.mode & Ot) !== et;
              zO(
                g,
                E,
                T,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                x
              );
              break;
            }
          }
      }
      return i;
    }
    function dx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      NO(a, e);
    }
    function px(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return kO(a);
    }
    function b0(e) {
      for (var t = e.return; t !== null && t.tag !== re && t.tag !== X && t.tag !== fe; )
        t = t.return;
      Wr = t;
    }
    function Xm(e) {
      if (e !== Wr)
        return !1;
      if (!Ao)
        return b0(e), Ao = !0, !1;
      if (e.tag !== X && (e.tag !== re || MO(e.type) && !R_(e.type, e.memoizedProps))) {
        var t = Xi;
        if (t)
          if (H_(e))
            S0(e), B_();
          else
            for (; t; )
              y0(e, t), t = uv(t);
      }
      return b0(e), e.tag === fe ? Xi = px(e) : Xi = Wr ? uv(e.stateNode) : null, !0;
    }
    function vx() {
      return Ao && Xi !== null;
    }
    function S0(e) {
      for (var t = Xi; t; )
        m0(e, t), t = uv(t);
    }
    function pd() {
      Wr = null, Xi = null, Ao = !1, kc = !1;
    }
    function E0() {
      Cs !== null && (mR(Cs), Cs = null);
    }
    function Gr() {
      return Ao;
    }
    function $_(e) {
      Cs === null ? Cs = [e] : Cs.push(e);
    }
    var hx = p.ReactCurrentBatchConfig, mx = null;
    function yx() {
      return hx.transition;
    }
    var Lo = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var gx = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Dn && (t = a), a = a.return;
        return t;
      }, Ac = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, fv = [], dv = [], pv = [], vv = [], hv = [], mv = [], Lc = /* @__PURE__ */ new Set();
      Lo.recordUnsafeLifecycleWarnings = function(e, t) {
        Lc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && fv.push(e), e.mode & Dn && typeof t.UNSAFE_componentWillMount == "function" && dv.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && pv.push(e), e.mode & Dn && typeof t.UNSAFE_componentWillReceiveProps == "function" && vv.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && hv.push(e), e.mode & Dn && typeof t.UNSAFE_componentWillUpdate == "function" && mv.push(e));
      }, Lo.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        fv.length > 0 && (fv.forEach(function(M) {
          e.add(lt(M) || "Component"), Lc.add(M.type);
        }), fv = []);
        var t = /* @__PURE__ */ new Set();
        dv.length > 0 && (dv.forEach(function(M) {
          t.add(lt(M) || "Component"), Lc.add(M.type);
        }), dv = []);
        var a = /* @__PURE__ */ new Set();
        pv.length > 0 && (pv.forEach(function(M) {
          a.add(lt(M) || "Component"), Lc.add(M.type);
        }), pv = []);
        var i = /* @__PURE__ */ new Set();
        vv.length > 0 && (vv.forEach(function(M) {
          i.add(lt(M) || "Component"), Lc.add(M.type);
        }), vv = []);
        var u = /* @__PURE__ */ new Set();
        hv.length > 0 && (hv.forEach(function(M) {
          u.add(lt(M) || "Component"), Lc.add(M.type);
        }), hv = []);
        var f = /* @__PURE__ */ new Set();
        if (mv.length > 0 && (mv.forEach(function(M) {
          f.add(lt(M) || "Component"), Lc.add(M.type);
        }), mv = []), t.size > 0) {
          var m = Ac(t);
          _(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, m);
        }
        if (i.size > 0) {
          var g = Ac(i);
          _(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, g);
        }
        if (f.size > 0) {
          var E = Ac(f);
          _(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, E);
        }
        if (e.size > 0) {
          var T = Ac(e);
          C(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (a.size > 0) {
          var x = Ac(a);
          C(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
        if (u.size > 0) {
          var z = Ac(u);
          C(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, z);
        }
      };
      var qm = /* @__PURE__ */ new Map(), C0 = /* @__PURE__ */ new Set();
      Lo.recordLegacyContextWarning = function(e, t) {
        var a = gx(e);
        if (a === null) {
          _("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!C0.has(e.type)) {
          var i = qm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], qm.set(a, i)), i.push(e));
        }
      }, Lo.flushLegacyContextWarning = function() {
        qm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(f) {
              i.add(lt(f) || "Component"), C0.add(f.type);
            });
            var u = Ac(i);
            try {
              Wt(a), _(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              mn();
            }
          }
        });
      }, Lo.discardPendingWarnings = function() {
        fv = [], dv = [], pv = [], vv = [], hv = [], mv = [], qm = /* @__PURE__ */ new Map();
      };
    }
    function Mo(e, t) {
      if (e && e.defaultProps) {
        var a = Ct({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Y_ = bs(null), W_;
    W_ = {};
    var Zm = null, vd = null, G_ = null, Jm = !1;
    function ey() {
      Zm = null, vd = null, G_ = null, Jm = !1;
    }
    function R0() {
      Jm = !0;
    }
    function w0() {
      Jm = !1;
    }
    function T0(e, t, a) {
      ga(Y_, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== W_ && _("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = W_;
    }
    function Q_(e, t) {
      var a = Y_.current;
      ya(Y_, t), e._currentValue = a;
    }
    function K_(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (ll(i.childLanes, t) ? u !== null && !ll(u.childLanes, t) && (u.childLanes = _t(u.childLanes, t)) : (i.childLanes = _t(i.childLanes, t), u !== null && (u.childLanes = _t(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && _("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function _x(e, t, a) {
      bx(e, t, a);
    }
    function bx(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, f = i.dependencies;
        if (f !== null) {
          u = i.child;
          for (var m = f.firstContext; m !== null; ) {
            if (m.context === t) {
              if (i.tag === B) {
                var g = qn(a), E = Rl(sn, g);
                E.tag = ny;
                var T = i.updateQueue;
                if (T !== null) {
                  var x = T.shared, z = x.pending;
                  z === null ? E.next = E : (E.next = z.next, z.next = E), x.pending = E;
                }
              }
              i.lanes = _t(i.lanes, a);
              var M = i.alternate;
              M !== null && (M.lanes = _t(M.lanes, a)), K_(i.return, a, e), f.lanes = _t(f.lanes, a);
              break;
            }
            m = m.next;
          }
        } else if (i.tag === xt)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Tt) {
          var $ = i.return;
          if ($ === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          $.lanes = _t($.lanes, a);
          var Y = $.alternate;
          Y !== null && (Y.lanes = _t(Y.lanes, a)), K_($, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var Q = u.sibling;
            if (Q !== null) {
              Q.return = u.return, u = Q;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function hd(e, t) {
      Zm = e, vd = null, G_ = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ma(a.lanes, t) && Nv(), a.firstContext = null);
      }
    }
    function dr(e) {
      Jm && _("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (G_ !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (vd === null) {
          if (Zm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          vd = a, Zm.dependencies = {
            lanes: q,
            firstContext: a
          };
        } else
          vd = vd.next = a;
      }
      return t;
    }
    var Mc = null;
    function X_(e) {
      Mc === null ? Mc = [e] : Mc.push(e);
    }
    function Sx() {
      if (Mc !== null) {
        for (var e = 0; e < Mc.length; e++) {
          var t = Mc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var f = u.next;
              u.next = i, a.next = f;
            }
            t.pending = a;
          }
        }
        Mc = null;
      }
    }
    function O0(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, X_(t)) : (a.next = u.next, u.next = a), t.interleaved = a, ty(e, i);
    }
    function Ex(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, X_(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Cx(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, X_(t)) : (a.next = u.next, u.next = a), t.interleaved = a, ty(e, i);
    }
    function fi(e, t) {
      return ty(e, t);
    }
    var Rx = ty;
    function ty(e, t) {
      e.lanes = _t(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = _t(a.lanes, t)), a === null && (e.flags & (yn | ti)) !== Xe && xR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = _t(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = _t(a.childLanes, t) : (u.flags & (yn | ti)) !== Xe && xR(e), i = u, u = u.return;
      if (i.tag === X) {
        var f = i.stateNode;
        return f;
      } else
        return null;
    }
    var x0 = 0, D0 = 1, ny = 2, q_ = 3, ry = !1, Z_, ay;
    Z_ = !1, ay = null;
    function J_(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: q
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function N0(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Rl(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: x0,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Rs(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (ay === u && !Z_ && (_("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Z_ = !0), RN()) {
        var f = u.pending;
        return f === null ? t.next = t : (t.next = f.next, f.next = t), u.pending = t, Rx(e, a);
      } else
        return Cx(e, u, t, a);
    }
    function iy(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Tp(a)) {
          var f = u.lanes;
          f = xp(f, e.pendingLanes);
          var m = _t(f, a);
          u.lanes = m, as(e, m);
        }
      }
    }
    function eb(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var f = null, m = null, g = a.firstBaseUpdate;
          if (g !== null) {
            var E = g;
            do {
              var T = {
                eventTime: E.eventTime,
                lane: E.lane,
                tag: E.tag,
                payload: E.payload,
                callback: E.callback,
                next: null
              };
              m === null ? f = m = T : (m.next = T, m = T), E = E.next;
            } while (E !== null);
            m === null ? f = m = t : (m.next = t, m = t);
          } else
            f = m = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: f,
            lastBaseUpdate: m,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var x = a.lastBaseUpdate;
      x === null ? a.firstBaseUpdate = t : x.next = t, a.lastBaseUpdate = t;
    }
    function wx(e, t, a, i, u, f) {
      switch (a.tag) {
        case D0: {
          var m = a.payload;
          if (typeof m == "function") {
            R0();
            var g = m.call(f, i, u);
            {
              if (e.mode & Dn) {
                Xn(!0);
                try {
                  m.call(f, i, u);
                } finally {
                  Xn(!1);
                }
              }
              w0();
            }
            return g;
          }
          return m;
        }
        case q_:
          e.flags = e.flags & ~ur | st;
        case x0: {
          var E = a.payload, T;
          if (typeof E == "function") {
            R0(), T = E.call(f, i, u);
            {
              if (e.mode & Dn) {
                Xn(!0);
                try {
                  E.call(f, i, u);
                } finally {
                  Xn(!1);
                }
              }
              w0();
            }
          } else
            T = E;
          return T == null ? i : Ct({}, i, T);
        }
        case ny:
          return ry = !0, i;
      }
      return i;
    }
    function oy(e, t, a, i) {
      var u = e.updateQueue;
      ry = !1, ay = u.shared;
      var f = u.firstBaseUpdate, m = u.lastBaseUpdate, g = u.shared.pending;
      if (g !== null) {
        u.shared.pending = null;
        var E = g, T = E.next;
        E.next = null, m === null ? f = T : m.next = T, m = E;
        var x = e.alternate;
        if (x !== null) {
          var z = x.updateQueue, M = z.lastBaseUpdate;
          M !== m && (M === null ? z.firstBaseUpdate = T : M.next = T, z.lastBaseUpdate = E);
        }
      }
      if (f !== null) {
        var $ = u.baseState, Y = q, Q = null, Oe = null, Je = null, Ge = f;
        do {
          var Pt = Ge.lane, Mt = Ge.eventTime;
          if (ll(i, Pt)) {
            if (Je !== null) {
              var K = {
                eventTime: Mt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: jt,
                tag: Ge.tag,
                payload: Ge.payload,
                callback: Ge.callback,
                next: null
              };
              Je = Je.next = K;
            }
            $ = wx(e, u, Ge, $, t, a);
            var H = Ge.callback;
            if (H !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ge.lane !== jt) {
              e.flags |= Bi;
              var pe = u.effects;
              pe === null ? u.effects = [Ge] : pe.push(Ge);
            }
          } else {
            var F = {
              eventTime: Mt,
              lane: Pt,
              tag: Ge.tag,
              payload: Ge.payload,
              callback: Ge.callback,
              next: null
            };
            Je === null ? (Oe = Je = F, Q = $) : Je = Je.next = F, Y = _t(Y, Pt);
          }
          if (Ge = Ge.next, Ge === null) {
            if (g = u.shared.pending, g === null)
              break;
            var xe = g, Re = xe.next;
            xe.next = null, Ge = Re, u.lastBaseUpdate = xe, u.shared.pending = null;
          }
        } while (!0);
        Je === null && (Q = $), u.baseState = Q, u.firstBaseUpdate = Oe, u.lastBaseUpdate = Je;
        var ut = u.shared.interleaved;
        if (ut !== null) {
          var vt = ut;
          do
            Y = _t(Y, vt.lane), vt = vt.next;
          while (vt !== ut);
        } else
          f === null && (u.shared.lanes = q);
        Bv(Y), e.lanes = Y, e.memoizedState = $;
      }
      ay = null;
    }
    function Tx(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function k0() {
      ry = !1;
    }
    function uy() {
      return ry;
    }
    function A0(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var f = i[u], m = f.callback;
          m !== null && (f.callback = null, Tx(m, a));
        }
    }
    var tb = {}, L0 = new l.Component().refs, nb, rb, ab, ib, ob, M0, ly, ub, lb, sb;
    {
      nb = /* @__PURE__ */ new Set(), rb = /* @__PURE__ */ new Set(), ab = /* @__PURE__ */ new Set(), ib = /* @__PURE__ */ new Set(), ub = /* @__PURE__ */ new Set(), ob = /* @__PURE__ */ new Set(), lb = /* @__PURE__ */ new Set(), sb = /* @__PURE__ */ new Set();
      var U0 = /* @__PURE__ */ new Set();
      ly = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          U0.has(a) || (U0.add(a), _("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, M0 = function(e, t) {
        if (t === void 0) {
          var a = Rt(e) || "Component";
          ob.has(a) || (ob.add(a), _("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(tb, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(tb);
    }
    function cb(e, t, a, i) {
      var u = e.memoizedState, f = a(i, u);
      {
        if (e.mode & Dn) {
          Xn(!0);
          try {
            f = a(i, u);
          } finally {
            Xn(!1);
          }
        }
        M0(t, f);
      }
      var m = f == null ? u : Ct({}, u, f);
      if (e.memoizedState = m, e.lanes === q) {
        var g = e.updateQueue;
        g.baseState = m;
      }
    }
    var fb = {
      isMounted: La,
      enqueueSetState: function(e, t, a) {
        var i = Ja(e), u = Pa(), f = As(i), m = Rl(u, f);
        m.payload = t, a != null && (ly(a, "setState"), m.callback = a);
        var g = Rs(i, m, f);
        g !== null && (Or(g, i, f, u), iy(g, i, f)), hu(i, f);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Ja(e), u = Pa(), f = As(i), m = Rl(u, f);
        m.tag = D0, m.payload = t, a != null && (ly(a, "replaceState"), m.callback = a);
        var g = Rs(i, m, f);
        g !== null && (Or(g, i, f, u), iy(g, i, f)), hu(i, f);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Ja(e), i = Pa(), u = As(a), f = Rl(i, u);
        f.tag = ny, t != null && (ly(t, "forceUpdate"), f.callback = t);
        var m = Rs(a, f, u);
        m !== null && (Or(m, a, u, i), iy(m, a, u)), Ep(a, u);
      }
    };
    function z0(e, t, a, i, u, f, m) {
      var g = e.stateNode;
      if (typeof g.shouldComponentUpdate == "function") {
        var E = g.shouldComponentUpdate(i, f, m);
        {
          if (e.mode & Dn) {
            Xn(!0);
            try {
              E = g.shouldComponentUpdate(i, f, m);
            } finally {
              Xn(!1);
            }
          }
          E === void 0 && _("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Rt(t) || "Component");
        }
        return E;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Qe(a, i) || !Qe(u, f) : !0;
    }
    function Ox(e, t, a) {
      var i = e.stateNode;
      {
        var u = Rt(t) || "Component", f = i.render;
        f || (t.prototype && typeof t.prototype.render == "function" ? _("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : _("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && _("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && _("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && _("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && _("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && _("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !lb.has(t) && (lb.add(t), _("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && _("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && _("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Rt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && _("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && _("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && _("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && _("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var m = i.props !== a;
        i.props !== void 0 && m && _("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && _("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !ab.has(t) && (ab.add(t), _("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Rt(t))), typeof i.getDerivedStateFromProps == "function" && _("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && _("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && _("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var g = i.state;
        g && (typeof g != "object" || Ze(g)) && _("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && _("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function j0(e, t) {
      t.updater = fb, e.stateNode = t, Ql(t, e), t._reactInternalInstance = tb;
    }
    function V0(e, t, a) {
      var i = !1, u = Oi, f = Oi, m = t.contextType;
      if ("contextType" in t) {
        var g = (
          // Allow null for conditional declaration
          m === null || m !== void 0 && m.$$typeof === Pu && m._context === void 0
        );
        if (!g && !sb.has(t)) {
          sb.add(t);
          var E = "";
          m === void 0 ? E = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof m != "object" ? E = " However, it is set to a " + typeof m + "." : m.$$typeof === uo ? E = " Did you accidentally pass the Context.Provider instead?" : m._context !== void 0 ? E = " Did you accidentally pass the Context.Consumer instead?" : E = " However, it is set to an object with keys {" + Object.keys(m).join(", ") + "}.", _("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Rt(t) || "Component", E);
        }
      }
      if (typeof m == "object" && m !== null)
        f = dr(m);
      else {
        u = sd(e, t, !0);
        var T = t.contextTypes;
        i = T != null, f = i ? cd(e, u) : Oi;
      }
      var x = new t(a, f);
      if (e.mode & Dn) {
        Xn(!0);
        try {
          x = new t(a, f);
        } finally {
          Xn(!1);
        }
      }
      var z = e.memoizedState = x.state !== null && x.state !== void 0 ? x.state : null;
      j0(e, x);
      {
        if (typeof t.getDerivedStateFromProps == "function" && z === null) {
          var M = Rt(t) || "Component";
          rb.has(M) || (rb.add(M), _("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", M, x.state === null ? "null" : "undefined", M));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof x.getSnapshotBeforeUpdate == "function") {
          var $ = null, Y = null, Q = null;
          if (typeof x.componentWillMount == "function" && x.componentWillMount.__suppressDeprecationWarning !== !0 ? $ = "componentWillMount" : typeof x.UNSAFE_componentWillMount == "function" && ($ = "UNSAFE_componentWillMount"), typeof x.componentWillReceiveProps == "function" && x.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Y = "componentWillReceiveProps" : typeof x.UNSAFE_componentWillReceiveProps == "function" && (Y = "UNSAFE_componentWillReceiveProps"), typeof x.componentWillUpdate == "function" && x.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Q = "componentWillUpdate" : typeof x.UNSAFE_componentWillUpdate == "function" && (Q = "UNSAFE_componentWillUpdate"), $ !== null || Y !== null || Q !== null) {
            var Oe = Rt(t) || "Component", Je = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            ib.has(Oe) || (ib.add(Oe), _(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Oe, Je, $ !== null ? `
  ` + $ : "", Y !== null ? `
  ` + Y : "", Q !== null ? `
  ` + Q : ""));
          }
        }
      }
      return i && l0(e, u, f), x;
    }
    function xx(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (_("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", lt(e) || "Component"), fb.enqueueReplaceState(t, t.state, null));
    }
    function P0(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var f = lt(e) || "Component";
          nb.has(f) || (nb.add(f), _("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", f));
        }
        fb.enqueueReplaceState(t, t.state, null);
      }
    }
    function db(e, t, a, i) {
      Ox(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = L0, J_(e);
      var f = t.contextType;
      if (typeof f == "object" && f !== null)
        u.context = dr(f);
      else {
        var m = sd(e, t, !0);
        u.context = cd(e, m);
      }
      {
        if (u.state === a) {
          var g = Rt(t) || "Component";
          ub.has(g) || (ub.add(g), _("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", g));
        }
        e.mode & Dn && Lo.recordLegacyContextWarning(e, u), Lo.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var E = t.getDerivedStateFromProps;
      if (typeof E == "function" && (cb(e, t, E, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (xx(e, u), oy(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var T = gt;
        T |= ca, (e.mode & ai) !== et && (T |= fa), e.flags |= T;
      }
    }
    function Dx(e, t, a, i) {
      var u = e.stateNode, f = e.memoizedProps;
      u.props = f;
      var m = u.context, g = t.contextType, E = Oi;
      if (typeof g == "object" && g !== null)
        E = dr(g);
      else {
        var T = sd(e, t, !0);
        E = cd(e, T);
      }
      var x = t.getDerivedStateFromProps, z = typeof x == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !z && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (f !== a || m !== E) && P0(e, u, a, E), k0();
      var M = e.memoizedState, $ = u.state = M;
      if (oy(e, a, u, i), $ = e.memoizedState, f === a && M === $ && !Im() && !uy()) {
        if (typeof u.componentDidMount == "function") {
          var Y = gt;
          Y |= ca, (e.mode & ai) !== et && (Y |= fa), e.flags |= Y;
        }
        return !1;
      }
      typeof x == "function" && (cb(e, t, x, a), $ = e.memoizedState);
      var Q = uy() || z0(e, t, f, a, M, $, E);
      if (Q) {
        if (!z && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var Oe = gt;
          Oe |= ca, (e.mode & ai) !== et && (Oe |= fa), e.flags |= Oe;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Je = gt;
          Je |= ca, (e.mode & ai) !== et && (Je |= fa), e.flags |= Je;
        }
        e.memoizedProps = a, e.memoizedState = $;
      }
      return u.props = a, u.state = $, u.context = E, Q;
    }
    function Nx(e, t, a, i, u) {
      var f = t.stateNode;
      N0(e, t);
      var m = t.memoizedProps, g = t.type === t.elementType ? m : Mo(t.type, m);
      f.props = g;
      var E = t.pendingProps, T = f.context, x = a.contextType, z = Oi;
      if (typeof x == "object" && x !== null)
        z = dr(x);
      else {
        var M = sd(t, a, !0);
        z = cd(t, M);
      }
      var $ = a.getDerivedStateFromProps, Y = typeof $ == "function" || typeof f.getSnapshotBeforeUpdate == "function";
      !Y && (typeof f.UNSAFE_componentWillReceiveProps == "function" || typeof f.componentWillReceiveProps == "function") && (m !== E || T !== z) && P0(t, f, i, z), k0();
      var Q = t.memoizedState, Oe = f.state = Q;
      if (oy(t, i, f, u), Oe = t.memoizedState, m === E && Q === Oe && !Im() && !uy() && !Pe)
        return typeof f.componentDidUpdate == "function" && (m !== e.memoizedProps || Q !== e.memoizedState) && (t.flags |= gt), typeof f.getSnapshotBeforeUpdate == "function" && (m !== e.memoizedProps || Q !== e.memoizedState) && (t.flags |= ei), !1;
      typeof $ == "function" && (cb(t, a, $, i), Oe = t.memoizedState);
      var Je = uy() || z0(t, a, g, i, Q, Oe, z) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Pe;
      return Je ? (!Y && (typeof f.UNSAFE_componentWillUpdate == "function" || typeof f.componentWillUpdate == "function") && (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, Oe, z), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(i, Oe, z)), typeof f.componentDidUpdate == "function" && (t.flags |= gt), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= ei)) : (typeof f.componentDidUpdate == "function" && (m !== e.memoizedProps || Q !== e.memoizedState) && (t.flags |= gt), typeof f.getSnapshotBeforeUpdate == "function" && (m !== e.memoizedProps || Q !== e.memoizedState) && (t.flags |= ei), t.memoizedProps = i, t.memoizedState = Oe), f.props = i, f.state = Oe, f.context = z, Je;
    }
    var pb, vb, hb, mb, yb, F0 = function(e, t) {
    };
    pb = !1, vb = !1, hb = {}, mb = {}, yb = {}, F0 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = lt(t) || "Component";
        mb[a] || (mb[a] = !0, _('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function yv(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Dn || me) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = lt(e) || "Component";
          hb[u] || (_('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), hb[u] = !0);
        }
        if (a._owner) {
          var f = a._owner, m;
          if (f) {
            var g = f;
            if (g.tag !== B)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            m = g.stateNode;
          }
          if (!m)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var E = m;
          Ut(i, "ref");
          var T = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === T)
            return t.ref;
          var x = function(z) {
            var M = E.refs;
            M === L0 && (M = E.refs = {}), z === null ? delete M[T] : M[T] = z;
          };
          return x._stringRef = T, x;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function sy(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function cy(e) {
      {
        var t = lt(e) || "Component";
        if (yb[t])
          return;
        yb[t] = !0, _("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function H0(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function B0(e) {
      function t(F, K) {
        if (e) {
          var H = F.deletions;
          H === null ? (F.deletions = [K], F.flags |= Xt) : H.push(K);
        }
      }
      function a(F, K) {
        if (!e)
          return null;
        for (var H = K; H !== null; )
          t(F, H), H = H.sibling;
        return null;
      }
      function i(F, K) {
        for (var H = /* @__PURE__ */ new Map(), pe = K; pe !== null; )
          pe.key !== null ? H.set(pe.key, pe) : H.set(pe.index, pe), pe = pe.sibling;
        return H;
      }
      function u(F, K) {
        var H = Bc(F, K);
        return H.index = 0, H.sibling = null, H;
      }
      function f(F, K, H) {
        if (F.index = H, !e)
          return F.flags |= cp, K;
        var pe = F.alternate;
        if (pe !== null) {
          var xe = pe.index;
          return xe < K ? (F.flags |= yn, K) : xe;
        } else
          return F.flags |= yn, K;
      }
      function m(F) {
        return e && F.alternate === null && (F.flags |= yn), F;
      }
      function g(F, K, H, pe) {
        if (K === null || K.tag !== De) {
          var xe = $S(H, F.mode, pe);
          return xe.return = F, xe;
        } else {
          var Re = u(K, H);
          return Re.return = F, Re;
        }
      }
      function E(F, K, H, pe) {
        var xe = H.type;
        if (xe === wa)
          return x(F, K, H.props.children, pe, H.key);
        if (K !== null && (K.elementType === xe || // Keep this check inline so it only runs on the false path:
        AR(K, H) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof xe == "object" && xe !== null && xe.$$typeof === Gn && H0(xe) === K.type)) {
          var Re = u(K, H.props);
          return Re.ref = yv(F, K, H), Re.return = F, Re._debugSource = H._source, Re._debugOwner = H._owner, Re;
        }
        var ut = IS(H, F.mode, pe);
        return ut.ref = yv(F, K, H), ut.return = F, ut;
      }
      function T(F, K, H, pe) {
        if (K === null || K.tag !== te || K.stateNode.containerInfo !== H.containerInfo || K.stateNode.implementation !== H.implementation) {
          var xe = YS(H, F.mode, pe);
          return xe.return = F, xe;
        } else {
          var Re = u(K, H.children || []);
          return Re.return = F, Re;
        }
      }
      function x(F, K, H, pe, xe) {
        if (K === null || K.tag !== $e) {
          var Re = Ms(H, F.mode, pe, xe);
          return Re.return = F, Re;
        } else {
          var ut = u(K, H);
          return ut.return = F, ut;
        }
      }
      function z(F, K, H) {
        if (typeof K == "string" && K !== "" || typeof K == "number") {
          var pe = $S("" + K, F.mode, H);
          return pe.return = F, pe;
        }
        if (typeof K == "object" && K !== null) {
          switch (K.$$typeof) {
            case Li: {
              var xe = IS(K, F.mode, H);
              return xe.ref = yv(F, null, K), xe.return = F, xe;
            }
            case Br: {
              var Re = YS(K, F.mode, H);
              return Re.return = F, Re;
            }
            case Gn: {
              var ut = K._payload, vt = K._init;
              return z(F, vt(ut), H);
            }
          }
          if (Ze(K) || Ta(K)) {
            var un = Ms(K, F.mode, H, null);
            return un.return = F, un;
          }
          sy(F, K);
        }
        return typeof K == "function" && cy(F), null;
      }
      function M(F, K, H, pe) {
        var xe = K !== null ? K.key : null;
        if (typeof H == "string" && H !== "" || typeof H == "number")
          return xe !== null ? null : g(F, K, "" + H, pe);
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case Li:
              return H.key === xe ? E(F, K, H, pe) : null;
            case Br:
              return H.key === xe ? T(F, K, H, pe) : null;
            case Gn: {
              var Re = H._payload, ut = H._init;
              return M(F, K, ut(Re), pe);
            }
          }
          if (Ze(H) || Ta(H))
            return xe !== null ? null : x(F, K, H, pe, null);
          sy(F, H);
        }
        return typeof H == "function" && cy(F), null;
      }
      function $(F, K, H, pe, xe) {
        if (typeof pe == "string" && pe !== "" || typeof pe == "number") {
          var Re = F.get(H) || null;
          return g(K, Re, "" + pe, xe);
        }
        if (typeof pe == "object" && pe !== null) {
          switch (pe.$$typeof) {
            case Li: {
              var ut = F.get(pe.key === null ? H : pe.key) || null;
              return E(K, ut, pe, xe);
            }
            case Br: {
              var vt = F.get(pe.key === null ? H : pe.key) || null;
              return T(K, vt, pe, xe);
            }
            case Gn:
              var un = pe._payload, Gt = pe._init;
              return $(F, K, H, Gt(un), xe);
          }
          if (Ze(pe) || Ta(pe)) {
            var tr = F.get(H) || null;
            return x(K, tr, pe, xe, null);
          }
          sy(K, pe);
        }
        return typeof pe == "function" && cy(K), null;
      }
      function Y(F, K, H) {
        {
          if (typeof F != "object" || F === null)
            return K;
          switch (F.$$typeof) {
            case Li:
            case Br:
              F0(F, H);
              var pe = F.key;
              if (typeof pe != "string")
                break;
              if (K === null) {
                K = /* @__PURE__ */ new Set(), K.add(pe);
                break;
              }
              if (!K.has(pe)) {
                K.add(pe);
                break;
              }
              _("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", pe);
              break;
            case Gn:
              var xe = F._payload, Re = F._init;
              Y(Re(xe), K, H);
              break;
          }
        }
        return K;
      }
      function Q(F, K, H, pe) {
        for (var xe = null, Re = 0; Re < H.length; Re++) {
          var ut = H[Re];
          xe = Y(ut, xe, F);
        }
        for (var vt = null, un = null, Gt = K, tr = 0, Qt = 0, Yn = null; Gt !== null && Qt < H.length; Qt++) {
          Gt.index > Qt ? (Yn = Gt, Gt = null) : Yn = Gt.sibling;
          var ba = M(F, Gt, H[Qt], pe);
          if (ba === null) {
            Gt === null && (Gt = Yn);
            break;
          }
          e && Gt && ba.alternate === null && t(F, Gt), tr = f(ba, tr, Qt), un === null ? vt = ba : un.sibling = ba, un = ba, Gt = Yn;
        }
        if (Qt === H.length) {
          if (a(F, Gt), Gr()) {
            var ea = Qt;
            Dc(F, ea);
          }
          return vt;
        }
        if (Gt === null) {
          for (; Qt < H.length; Qt++) {
            var Di = z(F, H[Qt], pe);
            Di !== null && (tr = f(Di, tr, Qt), un === null ? vt = Di : un.sibling = Di, un = Di);
          }
          if (Gr()) {
            var Fa = Qt;
            Dc(F, Fa);
          }
          return vt;
        }
        for (var Ha = i(F, Gt); Qt < H.length; Qt++) {
          var Sa = $(Ha, F, Qt, H[Qt], pe);
          Sa !== null && (e && Sa.alternate !== null && Ha.delete(Sa.key === null ? Qt : Sa.key), tr = f(Sa, tr, Qt), un === null ? vt = Sa : un.sibling = Sa, un = Sa);
        }
        if (e && Ha.forEach(function(Ad) {
          return t(F, Ad);
        }), Gr()) {
          var Nl = Qt;
          Dc(F, Nl);
        }
        return vt;
      }
      function Oe(F, K, H, pe) {
        var xe = Ta(H);
        if (typeof xe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          H[Symbol.toStringTag] === "Generator" && (vb || _("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), vb = !0), H.entries === xe && (pb || _("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), pb = !0);
          var Re = xe.call(H);
          if (Re)
            for (var ut = null, vt = Re.next(); !vt.done; vt = Re.next()) {
              var un = vt.value;
              ut = Y(un, ut, F);
            }
        }
        var Gt = xe.call(H);
        if (Gt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var tr = null, Qt = null, Yn = K, ba = 0, ea = 0, Di = null, Fa = Gt.next(); Yn !== null && !Fa.done; ea++, Fa = Gt.next()) {
          Yn.index > ea ? (Di = Yn, Yn = null) : Di = Yn.sibling;
          var Ha = M(F, Yn, Fa.value, pe);
          if (Ha === null) {
            Yn === null && (Yn = Di);
            break;
          }
          e && Yn && Ha.alternate === null && t(F, Yn), ba = f(Ha, ba, ea), Qt === null ? tr = Ha : Qt.sibling = Ha, Qt = Ha, Yn = Di;
        }
        if (Fa.done) {
          if (a(F, Yn), Gr()) {
            var Sa = ea;
            Dc(F, Sa);
          }
          return tr;
        }
        if (Yn === null) {
          for (; !Fa.done; ea++, Fa = Gt.next()) {
            var Nl = z(F, Fa.value, pe);
            Nl !== null && (ba = f(Nl, ba, ea), Qt === null ? tr = Nl : Qt.sibling = Nl, Qt = Nl);
          }
          if (Gr()) {
            var Ad = ea;
            Dc(F, Ad);
          }
          return tr;
        }
        for (var Gv = i(F, Yn); !Fa.done; ea++, Fa = Gt.next()) {
          var Lu = $(Gv, F, ea, Fa.value, pe);
          Lu !== null && (e && Lu.alternate !== null && Gv.delete(Lu.key === null ? ea : Lu.key), ba = f(Lu, ba, ea), Qt === null ? tr = Lu : Qt.sibling = Lu, Qt = Lu);
        }
        if (e && Gv.forEach(function($k) {
          return t(F, $k);
        }), Gr()) {
          var Ik = ea;
          Dc(F, Ik);
        }
        return tr;
      }
      function Je(F, K, H, pe) {
        if (K !== null && K.tag === De) {
          a(F, K.sibling);
          var xe = u(K, H);
          return xe.return = F, xe;
        }
        a(F, K);
        var Re = $S(H, F.mode, pe);
        return Re.return = F, Re;
      }
      function Ge(F, K, H, pe) {
        for (var xe = H.key, Re = K; Re !== null; ) {
          if (Re.key === xe) {
            var ut = H.type;
            if (ut === wa) {
              if (Re.tag === $e) {
                a(F, Re.sibling);
                var vt = u(Re, H.props.children);
                return vt.return = F, vt._debugSource = H._source, vt._debugOwner = H._owner, vt;
              }
            } else if (Re.elementType === ut || // Keep this check inline so it only runs on the false path:
            AR(Re, H) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ut == "object" && ut !== null && ut.$$typeof === Gn && H0(ut) === Re.type) {
              a(F, Re.sibling);
              var un = u(Re, H.props);
              return un.ref = yv(F, Re, H), un.return = F, un._debugSource = H._source, un._debugOwner = H._owner, un;
            }
            a(F, Re);
            break;
          } else
            t(F, Re);
          Re = Re.sibling;
        }
        if (H.type === wa) {
          var Gt = Ms(H.props.children, F.mode, pe, H.key);
          return Gt.return = F, Gt;
        } else {
          var tr = IS(H, F.mode, pe);
          return tr.ref = yv(F, K, H), tr.return = F, tr;
        }
      }
      function Pt(F, K, H, pe) {
        for (var xe = H.key, Re = K; Re !== null; ) {
          if (Re.key === xe)
            if (Re.tag === te && Re.stateNode.containerInfo === H.containerInfo && Re.stateNode.implementation === H.implementation) {
              a(F, Re.sibling);
              var ut = u(Re, H.children || []);
              return ut.return = F, ut;
            } else {
              a(F, Re);
              break;
            }
          else
            t(F, Re);
          Re = Re.sibling;
        }
        var vt = YS(H, F.mode, pe);
        return vt.return = F, vt;
      }
      function Mt(F, K, H, pe) {
        var xe = typeof H == "object" && H !== null && H.type === wa && H.key === null;
        if (xe && (H = H.props.children), typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case Li:
              return m(Ge(F, K, H, pe));
            case Br:
              return m(Pt(F, K, H, pe));
            case Gn:
              var Re = H._payload, ut = H._init;
              return Mt(F, K, ut(Re), pe);
          }
          if (Ze(H))
            return Q(F, K, H, pe);
          if (Ta(H))
            return Oe(F, K, H, pe);
          sy(F, H);
        }
        return typeof H == "string" && H !== "" || typeof H == "number" ? m(Je(F, K, "" + H, pe)) : (typeof H == "function" && cy(F), a(F, K));
      }
      return Mt;
    }
    var md = B0(!0), I0 = B0(!1);
    function kx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Bc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Bc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Ax(e, t) {
      for (var a = e.child; a !== null; )
        uk(a, t), a = a.sibling;
    }
    var gv = {}, ws = bs(gv), _v = bs(gv), fy = bs(gv);
    function dy(e) {
      if (e === gv)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function $0() {
      var e = dy(fy.current);
      return e;
    }
    function gb(e, t) {
      ga(fy, t, e), ga(_v, e, e), ga(ws, gv, e);
      var a = WT(t);
      ya(ws, e), ga(ws, a, e);
    }
    function yd(e) {
      ya(ws, e), ya(_v, e), ya(fy, e);
    }
    function _b() {
      var e = dy(ws.current);
      return e;
    }
    function Y0(e) {
      dy(fy.current);
      var t = dy(ws.current), a = GT(t, e.type);
      t !== a && (ga(_v, e, e), ga(ws, a, e));
    }
    function bb(e) {
      _v.current === e && (ya(ws, e), ya(_v, e));
    }
    var Lx = 0, W0 = 1, G0 = 1, bv = 2, Uo = bs(Lx);
    function Sb(e, t) {
      return (e & t) !== 0;
    }
    function gd(e) {
      return e & W0;
    }
    function Eb(e, t) {
      return e & W0 | t;
    }
    function Mx(e, t) {
      return e | t;
    }
    function Ts(e, t) {
      ga(Uo, t, e);
    }
    function _d(e) {
      ya(Uo, e);
    }
    function Ux(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function py(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === fe) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || r0(i) || x_(i))
              return t;
          }
        } else if (t.tag === Dt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & st) !== Xe;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var di = (
      /*   */
      0
    ), br = (
      /* */
      1
    ), Tu = (
      /*  */
      2
    ), Sr = (
      /*    */
      4
    ), Qr = (
      /*   */
      8
    ), Cb = [];
    function Rb() {
      for (var e = 0; e < Cb.length; e++) {
        var t = Cb[e];
        t._workInProgressVersionPrimary = null;
      }
      Cb.length = 0;
    }
    function zx(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Te = p.ReactCurrentDispatcher, Sv = p.ReactCurrentBatchConfig, wb, bd;
    wb = /* @__PURE__ */ new Set();
    var Uc = q, on = null, Er = null, Cr = null, vy = !1, Ev = !1, Cv = 0, jx = 0, Vx = 25, Z = null, qi = null, Os = -1, Tb = !1;
    function Jt() {
      {
        var e = Z;
        qi === null ? qi = [e] : qi.push(e);
      }
    }
    function _e() {
      {
        var e = Z;
        qi !== null && (Os++, qi[Os] !== e && Px(e));
      }
    }
    function Sd(e) {
      e != null && !Ze(e) && _("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", Z, typeof e);
    }
    function Px(e) {
      {
        var t = lt(on);
        if (!wb.has(t) && (wb.add(t), qi !== null)) {
          for (var a = "", i = 30, u = 0; u <= Os; u++) {
            for (var f = qi[u], m = u === Os ? e : f, g = u + 1 + ". " + f; g.length < i; )
              g += " ";
            g += m + `
`, a += g;
          }
          _(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function _a() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Ob(e, t) {
      if (Tb)
        return !1;
      if (t === null)
        return _("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Z), !1;
      e.length !== t.length && _(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Z, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ze(e[a], t[a]))
          return !1;
      return !0;
    }
    function Ed(e, t, a, i, u, f) {
      Uc = f, on = t, qi = e !== null ? e._debugHookTypes : null, Os = -1, Tb = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = q, e !== null && e.memoizedState !== null ? Te.current = hC : qi !== null ? Te.current = vC : Te.current = pC;
      var m = a(i, u);
      if (Ev) {
        var g = 0;
        do {
          if (Ev = !1, Cv = 0, g >= Vx)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          g += 1, Tb = !1, Er = null, Cr = null, t.updateQueue = null, Os = -1, Te.current = mC, m = a(i, u);
        } while (Ev);
      }
      Te.current = Oy, t._debugHookTypes = qi;
      var E = Er !== null && Er.next !== null;
      if (Uc = q, on = null, Er = null, Cr = null, Z = null, qi = null, Os = -1, e !== null && (e.flags & yr) !== (t.flags & yr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Ot) !== et && _("Internal React error: Expected static flag was missing. Please notify the React team."), vy = !1, E)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return m;
    }
    function Cd() {
      var e = Cv !== 0;
      return Cv = 0, e;
    }
    function Q0(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & ai) !== et ? t.flags &= ~(Zu | fa | Rn | gt) : t.flags &= ~(Rn | gt), e.lanes = rs(e.lanes, a);
    }
    function K0() {
      if (Te.current = Oy, vy) {
        for (var e = on.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        vy = !1;
      }
      Uc = q, on = null, Er = null, Cr = null, qi = null, Os = -1, Z = null, lC = !1, Ev = !1, Cv = 0;
    }
    function Ou() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Cr === null ? on.memoizedState = Cr = e : Cr = Cr.next = e, Cr;
    }
    function Zi() {
      var e;
      if (Er === null) {
        var t = on.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Er.next;
      var a;
      if (Cr === null ? a = on.memoizedState : a = Cr.next, a !== null)
        Cr = a, a = Cr.next, Er = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Er = e;
        var i = {
          memoizedState: Er.memoizedState,
          baseState: Er.baseState,
          baseQueue: Er.baseQueue,
          queue: Er.queue,
          next: null
        };
        Cr === null ? on.memoizedState = Cr = i : Cr = Cr.next = i;
      }
      return Cr;
    }
    function X0() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function xb(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Db(e, t, a) {
      var i = Ou(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var f = {
        pending: null,
        interleaved: null,
        lanes: q,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = f;
      var m = f.dispatch = Ix.bind(null, on, f);
      return [i.memoizedState, m];
    }
    function Nb(e, t, a) {
      var i = Zi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var f = Er, m = f.baseQueue, g = u.pending;
      if (g !== null) {
        if (m !== null) {
          var E = m.next, T = g.next;
          m.next = T, g.next = E;
        }
        f.baseQueue !== m && _("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), f.baseQueue = m = g, u.pending = null;
      }
      if (m !== null) {
        var x = m.next, z = f.baseState, M = null, $ = null, Y = null, Q = x;
        do {
          var Oe = Q.lane;
          if (ll(Uc, Oe)) {
            if (Y !== null) {
              var Ge = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: jt,
                action: Q.action,
                hasEagerState: Q.hasEagerState,
                eagerState: Q.eagerState,
                next: null
              };
              Y = Y.next = Ge;
            }
            if (Q.hasEagerState)
              z = Q.eagerState;
            else {
              var Pt = Q.action;
              z = e(z, Pt);
            }
          } else {
            var Je = {
              lane: Oe,
              action: Q.action,
              hasEagerState: Q.hasEagerState,
              eagerState: Q.eagerState,
              next: null
            };
            Y === null ? ($ = Y = Je, M = z) : Y = Y.next = Je, on.lanes = _t(on.lanes, Oe), Bv(Oe);
          }
          Q = Q.next;
        } while (Q !== null && Q !== x);
        Y === null ? M = z : Y.next = $, ze(z, i.memoizedState) || Nv(), i.memoizedState = z, i.baseState = M, i.baseQueue = Y, u.lastRenderedState = z;
      }
      var Mt = u.interleaved;
      if (Mt !== null) {
        var F = Mt;
        do {
          var K = F.lane;
          on.lanes = _t(on.lanes, K), Bv(K), F = F.next;
        } while (F !== Mt);
      } else
        m === null && (u.lanes = q);
      var H = u.dispatch;
      return [i.memoizedState, H];
    }
    function kb(e, t, a) {
      var i = Zi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var f = u.dispatch, m = u.pending, g = i.memoizedState;
      if (m !== null) {
        u.pending = null;
        var E = m.next, T = E;
        do {
          var x = T.action;
          g = e(g, x), T = T.next;
        } while (T !== E);
        ze(g, i.memoizedState) || Nv(), i.memoizedState = g, i.baseQueue === null && (i.baseState = g), u.lastRenderedState = g;
      }
      return [g, f];
    }
    function DM(e, t, a) {
    }
    function NM(e, t, a) {
    }
    function Ab(e, t, a) {
      var i = on, u = Ou(), f, m = Gr();
      if (m) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        f = a(), bd || f !== a() && (_("The result of getServerSnapshot should be cached to avoid an infinite loop"), bd = !0);
      } else {
        if (f = t(), !bd) {
          var g = t();
          ze(f, g) || (_("The result of getSnapshot should be cached to avoid an infinite loop"), bd = !0);
        }
        var E = Yy();
        if (E === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        dc(E, Uc) || q0(i, t, f);
      }
      u.memoizedState = f;
      var T = {
        value: f,
        getSnapshot: t
      };
      return u.queue = T, _y(J0.bind(null, i, T, e), [e]), i.flags |= Rn, Rv(br | Qr, Z0.bind(null, i, T, f, t), void 0, null), f;
    }
    function hy(e, t, a) {
      var i = on, u = Zi(), f = t();
      if (!bd) {
        var m = t();
        ze(f, m) || (_("The result of getSnapshot should be cached to avoid an infinite loop"), bd = !0);
      }
      var g = u.memoizedState, E = !ze(g, f);
      E && (u.memoizedState = f, Nv());
      var T = u.queue;
      if (Tv(J0.bind(null, i, T, e), [e]), T.getSnapshot !== t || E || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Cr !== null && Cr.memoizedState.tag & br) {
        i.flags |= Rn, Rv(br | Qr, Z0.bind(null, i, T, f, t), void 0, null);
        var x = Yy();
        if (x === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        dc(x, Uc) || q0(i, t, f);
      }
      return f;
    }
    function q0(e, t, a) {
      e.flags |= rc;
      var i = {
        getSnapshot: t,
        value: a
      }, u = on.updateQueue;
      if (u === null)
        u = X0(), on.updateQueue = u, u.stores = [i];
      else {
        var f = u.stores;
        f === null ? u.stores = [i] : f.push(i);
      }
    }
    function Z0(e, t, a, i) {
      t.value = a, t.getSnapshot = i, eC(t) && tC(e);
    }
    function J0(e, t, a) {
      var i = function() {
        eC(t) && tC(e);
      };
      return a(i);
    }
    function eC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ze(a, i);
      } catch {
        return !0;
      }
    }
    function tC(e) {
      var t = fi(e, it);
      t !== null && Or(t, e, it, sn);
    }
    function my(e) {
      var t = Ou();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: q,
        dispatch: null,
        lastRenderedReducer: xb,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = $x.bind(null, on, a);
      return [t.memoizedState, i];
    }
    function Lb(e) {
      return Nb(xb);
    }
    function Mb(e) {
      return kb(xb);
    }
    function Rv(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, f = on.updateQueue;
      if (f === null)
        f = X0(), on.updateQueue = f, f.lastEffect = u.next = u;
      else {
        var m = f.lastEffect;
        if (m === null)
          f.lastEffect = u.next = u;
        else {
          var g = m.next;
          m.next = u, u.next = g, f.lastEffect = u;
        }
      }
      return u;
    }
    function Ub(e) {
      var t = Ou();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function yy(e) {
      var t = Zi();
      return t.memoizedState;
    }
    function wv(e, t, a, i) {
      var u = Ou(), f = i === void 0 ? null : i;
      on.flags |= e, u.memoizedState = Rv(br | t, a, void 0, f);
    }
    function gy(e, t, a, i) {
      var u = Zi(), f = i === void 0 ? null : i, m = void 0;
      if (Er !== null) {
        var g = Er.memoizedState;
        if (m = g.destroy, f !== null) {
          var E = g.deps;
          if (Ob(f, E)) {
            u.memoizedState = Rv(t, a, m, f);
            return;
          }
        }
      }
      on.flags |= e, u.memoizedState = Rv(br | t, a, m, f);
    }
    function _y(e, t) {
      return (on.mode & ai) !== et ? wv(Zu | Rn | su, Qr, e, t) : wv(Rn | su, Qr, e, t);
    }
    function Tv(e, t) {
      return gy(Rn, Qr, e, t);
    }
    function zb(e, t) {
      return wv(gt, Tu, e, t);
    }
    function by(e, t) {
      return gy(gt, Tu, e, t);
    }
    function jb(e, t) {
      var a = gt;
      return a |= ca, (on.mode & ai) !== et && (a |= fa), wv(a, Sr, e, t);
    }
    function Sy(e, t) {
      return gy(gt, Sr, e, t);
    }
    function nC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || _("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var f = e();
        return u.current = f, function() {
          u.current = null;
        };
      }
    }
    function Vb(e, t, a) {
      typeof t != "function" && _("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = gt;
      return u |= ca, (on.mode & ai) !== et && (u |= fa), wv(u, Sr, nC.bind(null, t, e), i);
    }
    function Ey(e, t, a) {
      typeof t != "function" && _("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return gy(gt, Sr, nC.bind(null, t, e), i);
    }
    function Fx(e, t) {
    }
    var Cy = Fx;
    function Pb(e, t) {
      var a = Ou(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Ry(e, t) {
      var a = Zi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var f = u[1];
        if (Ob(i, f))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Fb(e, t) {
      var a = Ou(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function wy(e, t) {
      var a = Zi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var f = u[1];
        if (Ob(i, f))
          return u[0];
      }
      var m = e();
      return a.memoizedState = [m, i], m;
    }
    function Hb(e) {
      var t = Ou();
      return t.memoizedState = e, e;
    }
    function rC(e) {
      var t = Zi(), a = Er, i = a.memoizedState;
      return iC(t, i, e);
    }
    function aC(e) {
      var t = Zi();
      if (Er === null)
        return t.memoizedState = e, e;
      var a = Er.memoizedState;
      return iC(t, a, e);
    }
    function iC(e, t, a) {
      var i = !Gg(Uc);
      if (i) {
        if (!ze(a, t)) {
          var u = Op();
          on.lanes = _t(on.lanes, u), Bv(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Nv()), e.memoizedState = a, a;
    }
    function Hx(e, t, a) {
      var i = oi();
      Zn(Mr(i, _r)), e(!0);
      var u = Sv.transition;
      Sv.transition = {};
      var f = Sv.transition;
      Sv.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Zn(i), Sv.transition = u, u === null && f._updatedFibers) {
          var m = f._updatedFibers.size;
          m > 10 && C("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), f._updatedFibers.clear();
        }
      }
    }
    function Bb() {
      var e = my(!1), t = e[0], a = e[1], i = Hx.bind(null, a), u = Ou();
      return u.memoizedState = i, [t, i];
    }
    function oC() {
      var e = Lb(), t = e[0], a = Zi(), i = a.memoizedState;
      return [t, i];
    }
    function uC() {
      var e = Mb(), t = e[0], a = Zi(), i = a.memoizedState;
      return [t, i];
    }
    var lC = !1;
    function Bx() {
      return lC;
    }
    function Ib() {
      var e = Ou(), t = Yy(), a = t.identifierPrefix, i;
      if (Gr()) {
        var u = nx();
        i = ":" + a + "R" + u;
        var f = Cv++;
        f > 0 && (i += "H" + f.toString(32)), i += ":";
      } else {
        var m = jx++;
        i = ":" + a + "r" + m.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Ty() {
      var e = Zi(), t = e.memoizedState;
      return t;
    }
    function Ix(e, t, a) {
      typeof arguments[3] == "function" && _("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = As(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (sC(e))
        cC(t, u);
      else {
        var f = O0(e, t, u, i);
        if (f !== null) {
          var m = Pa();
          Or(f, e, i, m), fC(f, t, i);
        }
      }
      dC(e, i);
    }
    function $x(e, t, a) {
      typeof arguments[3] == "function" && _("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = As(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (sC(e))
        cC(t, u);
      else {
        var f = e.alternate;
        if (e.lanes === q && (f === null || f.lanes === q)) {
          var m = t.lastRenderedReducer;
          if (m !== null) {
            var g;
            g = Te.current, Te.current = zo;
            try {
              var E = t.lastRenderedState, T = m(E, a);
              if (u.hasEagerState = !0, u.eagerState = T, ze(T, E)) {
                Ex(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              Te.current = g;
            }
          }
        }
        var x = O0(e, t, u, i);
        if (x !== null) {
          var z = Pa();
          Or(x, e, i, z), fC(x, t, i);
        }
      }
      dC(e, i);
    }
    function sC(e) {
      var t = e.alternate;
      return e === on || t !== null && t === on;
    }
    function cC(e, t) {
      Ev = vy = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function fC(e, t, a) {
      if (Tp(a)) {
        var i = t.lanes;
        i = xp(i, e.pendingLanes);
        var u = _t(i, a);
        t.lanes = u, as(e, u);
      }
    }
    function dC(e, t, a) {
      hu(e, t);
    }
    var Oy = {
      readContext: dr,
      useCallback: _a,
      useContext: _a,
      useEffect: _a,
      useImperativeHandle: _a,
      useInsertionEffect: _a,
      useLayoutEffect: _a,
      useMemo: _a,
      useReducer: _a,
      useRef: _a,
      useState: _a,
      useDebugValue: _a,
      useDeferredValue: _a,
      useTransition: _a,
      useMutableSource: _a,
      useSyncExternalStore: _a,
      useId: _a,
      unstable_isNewReconciler: le
    }, pC = null, vC = null, hC = null, mC = null, xu = null, zo = null, xy = null;
    {
      var $b = function() {
        _("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, dt = function() {
        _("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      pC = {
        readContext: function(e) {
          return dr(e);
        },
        useCallback: function(e, t) {
          return Z = "useCallback", Jt(), Sd(t), Pb(e, t);
        },
        useContext: function(e) {
          return Z = "useContext", Jt(), dr(e);
        },
        useEffect: function(e, t) {
          return Z = "useEffect", Jt(), Sd(t), _y(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Z = "useImperativeHandle", Jt(), Sd(a), Vb(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Z = "useInsertionEffect", Jt(), Sd(t), zb(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Z = "useLayoutEffect", Jt(), Sd(t), jb(e, t);
        },
        useMemo: function(e, t) {
          Z = "useMemo", Jt(), Sd(t);
          var a = Te.current;
          Te.current = xu;
          try {
            return Fb(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Z = "useReducer", Jt();
          var i = Te.current;
          Te.current = xu;
          try {
            return Db(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return Z = "useRef", Jt(), Ub(e);
        },
        useState: function(e) {
          Z = "useState", Jt();
          var t = Te.current;
          Te.current = xu;
          try {
            return my(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Z = "useDebugValue", Jt(), void 0;
        },
        useDeferredValue: function(e) {
          return Z = "useDeferredValue", Jt(), Hb(e);
        },
        useTransition: function() {
          return Z = "useTransition", Jt(), Bb();
        },
        useMutableSource: function(e, t, a) {
          return Z = "useMutableSource", Jt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Z = "useSyncExternalStore", Jt(), Ab(e, t, a);
        },
        useId: function() {
          return Z = "useId", Jt(), Ib();
        },
        unstable_isNewReconciler: le
      }, vC = {
        readContext: function(e) {
          return dr(e);
        },
        useCallback: function(e, t) {
          return Z = "useCallback", _e(), Pb(e, t);
        },
        useContext: function(e) {
          return Z = "useContext", _e(), dr(e);
        },
        useEffect: function(e, t) {
          return Z = "useEffect", _e(), _y(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Z = "useImperativeHandle", _e(), Vb(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Z = "useInsertionEffect", _e(), zb(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Z = "useLayoutEffect", _e(), jb(e, t);
        },
        useMemo: function(e, t) {
          Z = "useMemo", _e();
          var a = Te.current;
          Te.current = xu;
          try {
            return Fb(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Z = "useReducer", _e();
          var i = Te.current;
          Te.current = xu;
          try {
            return Db(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return Z = "useRef", _e(), Ub(e);
        },
        useState: function(e) {
          Z = "useState", _e();
          var t = Te.current;
          Te.current = xu;
          try {
            return my(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Z = "useDebugValue", _e(), void 0;
        },
        useDeferredValue: function(e) {
          return Z = "useDeferredValue", _e(), Hb(e);
        },
        useTransition: function() {
          return Z = "useTransition", _e(), Bb();
        },
        useMutableSource: function(e, t, a) {
          return Z = "useMutableSource", _e(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Z = "useSyncExternalStore", _e(), Ab(e, t, a);
        },
        useId: function() {
          return Z = "useId", _e(), Ib();
        },
        unstable_isNewReconciler: le
      }, hC = {
        readContext: function(e) {
          return dr(e);
        },
        useCallback: function(e, t) {
          return Z = "useCallback", _e(), Ry(e, t);
        },
        useContext: function(e) {
          return Z = "useContext", _e(), dr(e);
        },
        useEffect: function(e, t) {
          return Z = "useEffect", _e(), Tv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Z = "useImperativeHandle", _e(), Ey(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Z = "useInsertionEffect", _e(), by(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Z = "useLayoutEffect", _e(), Sy(e, t);
        },
        useMemo: function(e, t) {
          Z = "useMemo", _e();
          var a = Te.current;
          Te.current = zo;
          try {
            return wy(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Z = "useReducer", _e();
          var i = Te.current;
          Te.current = zo;
          try {
            return Nb(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return Z = "useRef", _e(), yy();
        },
        useState: function(e) {
          Z = "useState", _e();
          var t = Te.current;
          Te.current = zo;
          try {
            return Lb(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Z = "useDebugValue", _e(), Cy();
        },
        useDeferredValue: function(e) {
          return Z = "useDeferredValue", _e(), rC(e);
        },
        useTransition: function() {
          return Z = "useTransition", _e(), oC();
        },
        useMutableSource: function(e, t, a) {
          return Z = "useMutableSource", _e(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Z = "useSyncExternalStore", _e(), hy(e, t);
        },
        useId: function() {
          return Z = "useId", _e(), Ty();
        },
        unstable_isNewReconciler: le
      }, mC = {
        readContext: function(e) {
          return dr(e);
        },
        useCallback: function(e, t) {
          return Z = "useCallback", _e(), Ry(e, t);
        },
        useContext: function(e) {
          return Z = "useContext", _e(), dr(e);
        },
        useEffect: function(e, t) {
          return Z = "useEffect", _e(), Tv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Z = "useImperativeHandle", _e(), Ey(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Z = "useInsertionEffect", _e(), by(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Z = "useLayoutEffect", _e(), Sy(e, t);
        },
        useMemo: function(e, t) {
          Z = "useMemo", _e();
          var a = Te.current;
          Te.current = xy;
          try {
            return wy(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Z = "useReducer", _e();
          var i = Te.current;
          Te.current = xy;
          try {
            return kb(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return Z = "useRef", _e(), yy();
        },
        useState: function(e) {
          Z = "useState", _e();
          var t = Te.current;
          Te.current = xy;
          try {
            return Mb(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Z = "useDebugValue", _e(), Cy();
        },
        useDeferredValue: function(e) {
          return Z = "useDeferredValue", _e(), aC(e);
        },
        useTransition: function() {
          return Z = "useTransition", _e(), uC();
        },
        useMutableSource: function(e, t, a) {
          return Z = "useMutableSource", _e(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Z = "useSyncExternalStore", _e(), hy(e, t);
        },
        useId: function() {
          return Z = "useId", _e(), Ty();
        },
        unstable_isNewReconciler: le
      }, xu = {
        readContext: function(e) {
          return $b(), dr(e);
        },
        useCallback: function(e, t) {
          return Z = "useCallback", dt(), Jt(), Pb(e, t);
        },
        useContext: function(e) {
          return Z = "useContext", dt(), Jt(), dr(e);
        },
        useEffect: function(e, t) {
          return Z = "useEffect", dt(), Jt(), _y(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Z = "useImperativeHandle", dt(), Jt(), Vb(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Z = "useInsertionEffect", dt(), Jt(), zb(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Z = "useLayoutEffect", dt(), Jt(), jb(e, t);
        },
        useMemo: function(e, t) {
          Z = "useMemo", dt(), Jt();
          var a = Te.current;
          Te.current = xu;
          try {
            return Fb(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Z = "useReducer", dt(), Jt();
          var i = Te.current;
          Te.current = xu;
          try {
            return Db(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return Z = "useRef", dt(), Jt(), Ub(e);
        },
        useState: function(e) {
          Z = "useState", dt(), Jt();
          var t = Te.current;
          Te.current = xu;
          try {
            return my(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Z = "useDebugValue", dt(), Jt(), void 0;
        },
        useDeferredValue: function(e) {
          return Z = "useDeferredValue", dt(), Jt(), Hb(e);
        },
        useTransition: function() {
          return Z = "useTransition", dt(), Jt(), Bb();
        },
        useMutableSource: function(e, t, a) {
          return Z = "useMutableSource", dt(), Jt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Z = "useSyncExternalStore", dt(), Jt(), Ab(e, t, a);
        },
        useId: function() {
          return Z = "useId", dt(), Jt(), Ib();
        },
        unstable_isNewReconciler: le
      }, zo = {
        readContext: function(e) {
          return $b(), dr(e);
        },
        useCallback: function(e, t) {
          return Z = "useCallback", dt(), _e(), Ry(e, t);
        },
        useContext: function(e) {
          return Z = "useContext", dt(), _e(), dr(e);
        },
        useEffect: function(e, t) {
          return Z = "useEffect", dt(), _e(), Tv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Z = "useImperativeHandle", dt(), _e(), Ey(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Z = "useInsertionEffect", dt(), _e(), by(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Z = "useLayoutEffect", dt(), _e(), Sy(e, t);
        },
        useMemo: function(e, t) {
          Z = "useMemo", dt(), _e();
          var a = Te.current;
          Te.current = zo;
          try {
            return wy(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Z = "useReducer", dt(), _e();
          var i = Te.current;
          Te.current = zo;
          try {
            return Nb(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return Z = "useRef", dt(), _e(), yy();
        },
        useState: function(e) {
          Z = "useState", dt(), _e();
          var t = Te.current;
          Te.current = zo;
          try {
            return Lb(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Z = "useDebugValue", dt(), _e(), Cy();
        },
        useDeferredValue: function(e) {
          return Z = "useDeferredValue", dt(), _e(), rC(e);
        },
        useTransition: function() {
          return Z = "useTransition", dt(), _e(), oC();
        },
        useMutableSource: function(e, t, a) {
          return Z = "useMutableSource", dt(), _e(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Z = "useSyncExternalStore", dt(), _e(), hy(e, t);
        },
        useId: function() {
          return Z = "useId", dt(), _e(), Ty();
        },
        unstable_isNewReconciler: le
      }, xy = {
        readContext: function(e) {
          return $b(), dr(e);
        },
        useCallback: function(e, t) {
          return Z = "useCallback", dt(), _e(), Ry(e, t);
        },
        useContext: function(e) {
          return Z = "useContext", dt(), _e(), dr(e);
        },
        useEffect: function(e, t) {
          return Z = "useEffect", dt(), _e(), Tv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Z = "useImperativeHandle", dt(), _e(), Ey(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Z = "useInsertionEffect", dt(), _e(), by(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Z = "useLayoutEffect", dt(), _e(), Sy(e, t);
        },
        useMemo: function(e, t) {
          Z = "useMemo", dt(), _e();
          var a = Te.current;
          Te.current = zo;
          try {
            return wy(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Z = "useReducer", dt(), _e();
          var i = Te.current;
          Te.current = zo;
          try {
            return kb(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return Z = "useRef", dt(), _e(), yy();
        },
        useState: function(e) {
          Z = "useState", dt(), _e();
          var t = Te.current;
          Te.current = zo;
          try {
            return Mb(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Z = "useDebugValue", dt(), _e(), Cy();
        },
        useDeferredValue: function(e) {
          return Z = "useDeferredValue", dt(), _e(), aC(e);
        },
        useTransition: function() {
          return Z = "useTransition", dt(), _e(), uC();
        },
        useMutableSource: function(e, t, a) {
          return Z = "useMutableSource", dt(), _e(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Z = "useSyncExternalStore", dt(), _e(), hy(e, t);
        },
        useId: function() {
          return Z = "useId", dt(), _e(), Ty();
        },
        unstable_isNewReconciler: le
      };
    }
    var xs = c.unstable_now, yC = 0, Dy = -1, Ov = -1, Ny = -1, Yb = !1, ky = !1;
    function gC() {
      return Yb;
    }
    function Yx() {
      ky = !0;
    }
    function Wx() {
      Yb = !1, ky = !1;
    }
    function Gx() {
      Yb = ky, ky = !1;
    }
    function _C() {
      return yC;
    }
    function bC() {
      yC = xs();
    }
    function Wb(e) {
      Ov = xs(), e.actualStartTime < 0 && (e.actualStartTime = xs());
    }
    function SC(e) {
      Ov = -1;
    }
    function Ay(e, t) {
      if (Ov >= 0) {
        var a = xs() - Ov;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Ov = -1;
      }
    }
    function Du(e) {
      if (Dy >= 0) {
        var t = xs() - Dy;
        Dy = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case X:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case ye:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Gb(e) {
      if (Ny >= 0) {
        var t = xs() - Ny;
        Ny = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case X:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case ye:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Nu() {
      Dy = xs();
    }
    function Qb() {
      Ny = xs();
    }
    function Kb(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function zc(e, t) {
      return {
        value: e,
        source: t,
        stack: fo(t),
        digest: null
      };
    }
    function Xb(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Qx(e, t) {
      return !0;
    }
    function qb(e, t) {
      try {
        var a = Qx(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, f = t.stack, m = f !== null ? f : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === B)
            return;
          console.error(i);
        }
        var g = u ? lt(u) : null, E = g ? "The above error occurred in the <" + g + "> component:" : "The above error occurred in one of your React components:", T;
        if (e.tag === X)
          T = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var x = lt(e) || "Anonymous";
          T = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + x + ".");
        }
        var z = E + `
` + m + `

` + ("" + T);
        console.error(z);
      } catch (M) {
        setTimeout(function() {
          throw M;
        });
      }
    }
    var Kx = typeof WeakMap == "function" ? WeakMap : Map;
    function EC(e, t, a) {
      var i = Rl(sn, a);
      i.tag = q_, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        HN(u), qb(e, t);
      }, i;
    }
    function Zb(e, t, a) {
      var i = Rl(sn, a);
      i.tag = q_;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var f = t.value;
        i.payload = function() {
          return u(f);
        }, i.callback = function() {
          LR(e), qb(e, t);
        };
      }
      var m = e.stateNode;
      return m !== null && typeof m.componentDidCatch == "function" && (i.callback = function() {
        LR(e), qb(e, t), typeof u != "function" && PN(this);
        var E = t.value, T = t.stack;
        this.componentDidCatch(E, {
          componentStack: T !== null ? T : ""
        }), typeof u != "function" && (ma(e.lanes, it) || _("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", lt(e) || "Unknown"));
      }), i;
    }
    function CC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Kx(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var f = BN.bind(null, e, t, a);
        gr && Iv(e, a), t.then(f, f);
      }
    }
    function Xx(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var f = /* @__PURE__ */ new Set();
        f.add(a), e.updateQueue = f;
      } else
        u.add(a);
    }
    function qx(e, t) {
      var a = e.tag;
      if ((e.mode & Ot) === et && (a === L || a === be || a === Ce)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function RC(e) {
      var t = e;
      do {
        if (t.tag === fe && Ux(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function wC(e, t, a, i, u) {
      if ((e.mode & Ot) === et) {
        if (e === t)
          e.flags |= ur;
        else {
          if (e.flags |= st, a.flags |= ac, a.flags &= ~(lf | ka), a.tag === B) {
            var f = a.alternate;
            if (f === null)
              a.tag = Et;
            else {
              var m = Rl(sn, it);
              m.tag = ny, Rs(a, m, it);
            }
          }
          a.lanes = _t(a.lanes, it);
        }
        return e;
      }
      return e.flags |= ur, e.lanes = u, e;
    }
    function Zx(e, t, a, i, u) {
      if (a.flags |= ka, gr && Iv(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var f = i;
        qx(a), Gr() && a.mode & Ot && h0();
        var m = RC(t);
        if (m !== null) {
          m.flags &= ~Ln, wC(m, t, a, e, u), m.mode & Ot && CC(e, f, u), Xx(m, e, f);
          return;
        } else {
          if (!ns(u)) {
            CC(e, f, u), kS();
            return;
          }
          var g = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = g;
        }
      } else if (Gr() && a.mode & Ot) {
        h0();
        var E = RC(t);
        if (E !== null) {
          (E.flags & ur) === Xe && (E.flags |= Ln), wC(E, t, a, e, u), $_(zc(i, a));
          return;
        }
      }
      i = zc(i, a), kN(i);
      var T = t;
      do {
        switch (T.tag) {
          case X: {
            var x = i;
            T.flags |= ur;
            var z = qn(u);
            T.lanes = _t(T.lanes, z);
            var M = EC(T, x, z);
            eb(T, M);
            return;
          }
          case B:
            var $ = i, Y = T.type, Q = T.stateNode;
            if ((T.flags & st) === Xe && (typeof Y.getDerivedStateFromError == "function" || Q !== null && typeof Q.componentDidCatch == "function" && !RR(Q))) {
              T.flags |= ur;
              var Oe = qn(u);
              T.lanes = _t(T.lanes, Oe);
              var Je = Zb(T, $, Oe);
              eb(T, Je);
              return;
            }
            break;
        }
        T = T.return;
      } while (T !== null);
    }
    function Jx() {
      return null;
    }
    var xv = p.ReactCurrentOwner, jo = !1, Jb, Dv, eS, tS, nS, jc, rS, Ly;
    Jb = {}, Dv = {}, eS = {}, tS = {}, nS = {}, jc = !1, rS = {}, Ly = {};
    function ja(e, t, a, i) {
      e === null ? t.child = I0(t, null, a, i) : t.child = md(t, e.child, a, i);
    }
    function eD(e, t, a, i) {
      t.child = md(t, e.child, null, i), t.child = md(t, null, a, i);
    }
    function TC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var f = a.propTypes;
        f && ko(
          f,
          i,
          // Resolved props
          "prop",
          Rt(a)
        );
      }
      var m = a.render, g = t.ref, E, T;
      hd(t, u), vu(t);
      {
        if (xv.current = t, hr(!0), E = Ed(e, t, m, i, g, u), T = Cd(), t.mode & Dn) {
          Xn(!0);
          try {
            E = Ed(e, t, m, i, g, u), T = Cd();
          } finally {
            Xn(!1);
          }
        }
        hr(!1);
      }
      return Ju(), e !== null && !jo ? (Q0(e, t, u), wl(e, t, u)) : (Gr() && T && V_(t), t.flags |= uu, ja(e, t, E, u), t.child);
    }
    function OC(e, t, a, i, u) {
      if (e === null) {
        var f = a.type;
        if (ik(f) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var m = f;
          return m = kd(f), t.tag = Ce, t.type = m, oS(t, f), xC(e, t, m, i, u);
        }
        {
          var g = f.propTypes;
          g && ko(
            g,
            i,
            // Resolved props
            "prop",
            Rt(f)
          );
        }
        var E = BS(a.type, null, i, t, t.mode, u);
        return E.ref = t.ref, E.return = t, t.child = E, E;
      }
      {
        var T = a.type, x = T.propTypes;
        x && ko(
          x,
          i,
          // Resolved props
          "prop",
          Rt(T)
        );
      }
      var z = e.child, M = dS(e, u);
      if (!M) {
        var $ = z.memoizedProps, Y = a.compare;
        if (Y = Y !== null ? Y : Qe, Y($, i) && e.ref === t.ref)
          return wl(e, t, u);
      }
      t.flags |= uu;
      var Q = Bc(z, i);
      return Q.ref = t.ref, Q.return = t, t.child = Q, Q;
    }
    function xC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var f = t.elementType;
        if (f.$$typeof === Gn) {
          var m = f, g = m._payload, E = m._init;
          try {
            f = E(g);
          } catch {
            f = null;
          }
          var T = f && f.propTypes;
          T && ko(
            T,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Rt(f)
          );
        }
      }
      if (e !== null) {
        var x = e.memoizedProps;
        if (Qe(x, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (jo = !1, t.pendingProps = i = x, dS(e, u))
            (e.flags & ac) !== Xe && (jo = !0);
          else
            return t.lanes = e.lanes, wl(e, t, u);
      }
      return aS(e, t, a, i, u);
    }
    function DC(e, t, a) {
      var i = t.pendingProps, u = i.children, f = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || w)
        if ((t.mode & Ot) === et) {
          var m = {
            baseLanes: q,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = m, Wy(t, a);
        } else if (ma(a, ha)) {
          var z = {
            baseLanes: q,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = z;
          var M = f !== null ? f.baseLanes : a;
          Wy(t, M);
        } else {
          var g = null, E;
          if (f !== null) {
            var T = f.baseLanes;
            E = _t(T, a);
          } else
            E = a;
          t.lanes = t.childLanes = ha;
          var x = {
            baseLanes: E,
            cachePool: g,
            transitions: null
          };
          return t.memoizedState = x, t.updateQueue = null, Wy(t, E), null;
        }
      else {
        var $;
        f !== null ? ($ = _t(f.baseLanes, a), t.memoizedState = null) : $ = a, Wy(t, $);
      }
      return ja(e, t, u, a), t.child;
    }
    function tD(e, t, a) {
      var i = t.pendingProps;
      return ja(e, t, i, a), t.child;
    }
    function nD(e, t, a) {
      var i = t.pendingProps.children;
      return ja(e, t, i, a), t.child;
    }
    function rD(e, t, a) {
      {
        t.flags |= gt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, f = u.children;
      return ja(e, t, f, a), t.child;
    }
    function NC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= sa, t.flags |= fp);
    }
    function aS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var f = a.propTypes;
        f && ko(
          f,
          i,
          // Resolved props
          "prop",
          Rt(a)
        );
      }
      var m;
      {
        var g = sd(t, a, !0);
        m = cd(t, g);
      }
      var E, T;
      hd(t, u), vu(t);
      {
        if (xv.current = t, hr(!0), E = Ed(e, t, a, i, m, u), T = Cd(), t.mode & Dn) {
          Xn(!0);
          try {
            E = Ed(e, t, a, i, m, u), T = Cd();
          } finally {
            Xn(!1);
          }
        }
        hr(!1);
      }
      return Ju(), e !== null && !jo ? (Q0(e, t, u), wl(e, t, u)) : (Gr() && T && V_(t), t.flags |= uu, ja(e, t, E, u), t.child);
    }
    function kC(e, t, a, i, u) {
      {
        switch (bk(t)) {
          case !1: {
            var f = t.stateNode, m = t.type, g = new m(t.memoizedProps, f.context), E = g.state;
            f.updater.enqueueSetState(f, E, null);
            break;
          }
          case !0: {
            t.flags |= st, t.flags |= ur;
            var T = new Error("Simulated error coming from DevTools"), x = qn(u);
            t.lanes = _t(t.lanes, x);
            var z = Zb(t, zc(T, t), x);
            eb(t, z);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var M = a.propTypes;
          M && ko(
            M,
            i,
            // Resolved props
            "prop",
            Rt(a)
          );
        }
      }
      var $;
      wu(a) ? ($ = !0, Ym(t)) : $ = !1, hd(t, u);
      var Y = t.stateNode, Q;
      Y === null ? (Uy(e, t), V0(t, a, i), db(t, a, i, u), Q = !0) : e === null ? Q = Dx(t, a, i, u) : Q = Nx(e, t, a, i, u);
      var Oe = iS(e, t, a, Q, $, u);
      {
        var Je = t.stateNode;
        Q && Je.props !== i && (jc || _("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", lt(t) || "a component"), jc = !0);
      }
      return Oe;
    }
    function iS(e, t, a, i, u, f) {
      NC(e, t);
      var m = (t.flags & st) !== Xe;
      if (!i && !m)
        return u && f0(t, a, !1), wl(e, t, f);
      var g = t.stateNode;
      xv.current = t;
      var E;
      if (m && typeof a.getDerivedStateFromError != "function")
        E = null, SC();
      else {
        vu(t);
        {
          if (hr(!0), E = g.render(), t.mode & Dn) {
            Xn(!0);
            try {
              g.render();
            } finally {
              Xn(!1);
            }
          }
          hr(!1);
        }
        Ju();
      }
      return t.flags |= uu, e !== null && m ? eD(e, t, E, f) : ja(e, t, E, f), t.memoizedState = g.state, u && f0(t, a, !0), t.child;
    }
    function AC(e) {
      var t = e.stateNode;
      t.pendingContext ? s0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && s0(e, t.context, !1), gb(e, t.containerInfo);
    }
    function aD(e, t, a) {
      if (AC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, f = u.element;
      N0(e, t), oy(t, i, null, a);
      var m = t.memoizedState;
      t.stateNode;
      var g = m.element;
      if (u.isDehydrated) {
        var E = {
          element: g,
          isDehydrated: !1,
          cache: m.cache,
          pendingSuspenseBoundaries: m.pendingSuspenseBoundaries,
          transitions: m.transitions
        }, T = t.updateQueue;
        if (T.baseState = E, t.memoizedState = E, t.flags & Ln) {
          var x = zc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return LC(e, t, g, a, x);
        } else if (g !== f) {
          var z = zc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return LC(e, t, g, a, z);
        } else {
          lx(t);
          var M = I0(t, null, g, a);
          t.child = M;
          for (var $ = M; $; )
            $.flags = $.flags & ~yn | ti, $ = $.sibling;
        }
      } else {
        if (pd(), g === f)
          return wl(e, t, a);
        ja(e, t, g, a);
      }
      return t.child;
    }
    function LC(e, t, a, i, u) {
      return pd(), $_(u), t.flags |= Ln, ja(e, t, a, i), t.child;
    }
    function iD(e, t, a) {
      Y0(t), e === null && I_(t);
      var i = t.type, u = t.pendingProps, f = e !== null ? e.memoizedProps : null, m = u.children, g = R_(i, u);
      return g ? m = null : f !== null && R_(i, f) && (t.flags |= Zt), NC(e, t), ja(e, t, m, a), t.child;
    }
    function oD(e, t) {
      return e === null && I_(t), null;
    }
    function uD(e, t, a, i) {
      Uy(e, t);
      var u = t.pendingProps, f = a, m = f._payload, g = f._init, E = g(m);
      t.type = E;
      var T = t.tag = ok(E), x = Mo(E, u), z;
      switch (T) {
        case L:
          return oS(t, E), t.type = E = kd(E), z = aS(null, t, E, x, i), z;
        case B:
          return t.type = E = zS(E), z = kC(null, t, E, x, i), z;
        case be:
          return t.type = E = jS(E), z = TC(null, t, E, x, i), z;
        case de: {
          if (t.type !== t.elementType) {
            var M = E.propTypes;
            M && ko(
              M,
              x,
              // Resolved for outer only
              "prop",
              Rt(E)
            );
          }
          return z = OC(
            null,
            t,
            E,
            Mo(E.type, x),
            // The inner type can have defaults too
            i
          ), z;
        }
      }
      var $ = "";
      throw E !== null && typeof E == "object" && E.$$typeof === Gn && ($ = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + E + ". " + ("Lazy element type must resolve to a class or function." + $));
    }
    function lD(e, t, a, i, u) {
      Uy(e, t), t.tag = B;
      var f;
      return wu(a) ? (f = !0, Ym(t)) : f = !1, hd(t, u), V0(t, a, i), db(t, a, i, u), iS(null, t, a, !0, f, u);
    }
    function sD(e, t, a, i) {
      Uy(e, t);
      var u = t.pendingProps, f;
      {
        var m = sd(t, a, !1);
        f = cd(t, m);
      }
      hd(t, i);
      var g, E;
      vu(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var T = Rt(a) || "Unknown";
          Jb[T] || (_("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", T, T), Jb[T] = !0);
        }
        t.mode & Dn && Lo.recordLegacyContextWarning(t, null), hr(!0), xv.current = t, g = Ed(null, t, a, u, f, i), E = Cd(), hr(!1);
      }
      if (Ju(), t.flags |= uu, typeof g == "object" && g !== null && typeof g.render == "function" && g.$$typeof === void 0) {
        var x = Rt(a) || "Unknown";
        Dv[x] || (_("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", x, x, x), Dv[x] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof g == "object" && g !== null && typeof g.render == "function" && g.$$typeof === void 0
      ) {
        {
          var z = Rt(a) || "Unknown";
          Dv[z] || (_("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", z, z, z), Dv[z] = !0);
        }
        t.tag = B, t.memoizedState = null, t.updateQueue = null;
        var M = !1;
        return wu(a) ? (M = !0, Ym(t)) : M = !1, t.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null, J_(t), j0(t, g), db(t, a, u, i), iS(null, t, a, !0, M, i);
      } else {
        if (t.tag = L, t.mode & Dn) {
          Xn(!0);
          try {
            g = Ed(null, t, a, u, f, i), E = Cd();
          } finally {
            Xn(!1);
          }
        }
        return Gr() && E && V_(t), ja(null, t, g, i), oS(t, a), t.child;
      }
    }
    function oS(e, t) {
      {
        if (t && t.childContextTypes && _("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = ir();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", f = e._debugSource;
          f && (u = f.fileName + ":" + f.lineNumber), nS[u] || (nS[u] = !0, _("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var m = Rt(t) || "Unknown";
          tS[m] || (_("%s: Function components do not support getDerivedStateFromProps.", m), tS[m] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var g = Rt(t) || "Unknown";
          eS[g] || (_("%s: Function components do not support contextType.", g), eS[g] = !0);
        }
      }
    }
    var uS = {
      dehydrated: null,
      treeContext: null,
      retryLane: jt
    };
    function lS(e) {
      return {
        baseLanes: e,
        cachePool: Jx(),
        transitions: null
      };
    }
    function cD(e, t) {
      var a = null;
      return {
        baseLanes: _t(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function fD(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Sb(e, bv);
    }
    function dD(e, t) {
      return rs(e.childLanes, t);
    }
    function MC(e, t, a) {
      var i = t.pendingProps;
      Sk(t) && (t.flags |= st);
      var u = Uo.current, f = !1, m = (t.flags & st) !== Xe;
      if (m || fD(u, e) ? (f = !0, t.flags &= ~st) : (e === null || e.memoizedState !== null) && (u = Mx(u, G0)), u = gd(u), Ts(t, u), e === null) {
        I_(t);
        var g = t.memoizedState;
        if (g !== null) {
          var E = g.dehydrated;
          if (E !== null)
            return yD(t, E);
        }
        var T = i.children, x = i.fallback;
        if (f) {
          var z = pD(t, T, x, a), M = t.child;
          return M.memoizedState = lS(a), t.memoizedState = uS, z;
        } else
          return sS(t, T);
      } else {
        var $ = e.memoizedState;
        if ($ !== null) {
          var Y = $.dehydrated;
          if (Y !== null)
            return gD(e, t, m, i, Y, $, a);
        }
        if (f) {
          var Q = i.fallback, Oe = i.children, Je = hD(e, t, Oe, Q, a), Ge = t.child, Pt = e.child.memoizedState;
          return Ge.memoizedState = Pt === null ? lS(a) : cD(Pt, a), Ge.childLanes = dD(e, a), t.memoizedState = uS, Je;
        } else {
          var Mt = i.children, F = vD(e, t, Mt, a);
          return t.memoizedState = null, F;
        }
      }
    }
    function sS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, f = cS(u, i);
      return f.return = e, e.child = f, f;
    }
    function pD(e, t, a, i) {
      var u = e.mode, f = e.child, m = {
        mode: "hidden",
        children: t
      }, g, E;
      return (u & Ot) === et && f !== null ? (g = f, g.childLanes = q, g.pendingProps = m, e.mode & rt && (g.actualDuration = 0, g.actualStartTime = -1, g.selfBaseDuration = 0, g.treeBaseDuration = 0), E = Ms(a, u, i, null)) : (g = cS(m, u), E = Ms(a, u, i, null)), g.return = e, E.return = e, g.sibling = E, e.child = g, E;
    }
    function cS(e, t, a) {
      return UR(e, t, q, null);
    }
    function UC(e, t) {
      return Bc(e, t);
    }
    function vD(e, t, a, i) {
      var u = e.child, f = u.sibling, m = UC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Ot) === et && (m.lanes = i), m.return = t, m.sibling = null, f !== null) {
        var g = t.deletions;
        g === null ? (t.deletions = [f], t.flags |= Xt) : g.push(f);
      }
      return t.child = m, m;
    }
    function hD(e, t, a, i, u) {
      var f = t.mode, m = e.child, g = m.sibling, E = {
        mode: "hidden",
        children: a
      }, T;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (f & Ot) === et && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== m
      ) {
        var x = t.child;
        T = x, T.childLanes = q, T.pendingProps = E, t.mode & rt && (T.actualDuration = 0, T.actualStartTime = -1, T.selfBaseDuration = m.selfBaseDuration, T.treeBaseDuration = m.treeBaseDuration), t.deletions = null;
      } else
        T = UC(m, E), T.subtreeFlags = m.subtreeFlags & yr;
      var z;
      return g !== null ? z = Bc(g, i) : (z = Ms(i, f, u, null), z.flags |= yn), z.return = t, T.return = t, T.sibling = z, t.child = T, z;
    }
    function My(e, t, a, i) {
      i !== null && $_(i), md(t, e.child, null, a);
      var u = t.pendingProps, f = u.children, m = sS(t, f);
      return m.flags |= yn, t.memoizedState = null, m;
    }
    function mD(e, t, a, i, u) {
      var f = t.mode, m = {
        mode: "visible",
        children: a
      }, g = cS(m, f), E = Ms(i, f, u, null);
      return E.flags |= yn, g.return = t, E.return = t, g.sibling = E, t.child = g, (t.mode & Ot) !== et && md(t, e.child, null, u), E;
    }
    function yD(e, t, a) {
      return (e.mode & Ot) === et ? (_("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = it) : x_(t) ? e.lanes = nl : e.lanes = ha, null;
    }
    function gD(e, t, a, i, u, f, m) {
      if (a)
        if (t.flags & Ln) {
          t.flags &= ~Ln;
          var F = Xb(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return My(e, t, m, F);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= st, null;
          var K = i.children, H = i.fallback, pe = mD(e, t, K, H, m), xe = t.child;
          return xe.memoizedState = lS(m), t.memoizedState = uS, pe;
        }
      else {
        if (ox(), (t.mode & Ot) === et)
          return My(
            e,
            t,
            m,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (x_(u)) {
          var g, E, T;
          {
            var x = CO(u);
            g = x.digest, E = x.message, T = x.stack;
          }
          var z;
          E ? z = new Error(E) : z = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var M = Xb(z, g, T);
          return My(e, t, m, M);
        }
        var $ = ma(m, e.childLanes);
        if (jo || $) {
          var Y = Yy();
          if (Y !== null) {
            var Q = Kg(Y, m);
            if (Q !== jt && Q !== f.retryLane) {
              f.retryLane = Q;
              var Oe = sn;
              fi(e, Q), Or(Y, e, Q, Oe);
            }
          }
          kS();
          var Je = Xb(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return My(e, t, m, Je);
        } else if (r0(u)) {
          t.flags |= st, t.child = e.child;
          var Ge = IN.bind(null, e);
          return RO(u, Ge), null;
        } else {
          sx(t, u, f.treeContext);
          var Pt = i.children, Mt = sS(t, Pt);
          return Mt.flags |= ti, Mt;
        }
      }
    }
    function zC(e, t, a) {
      e.lanes = _t(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = _t(i.lanes, t)), K_(e.return, t, a);
    }
    function _D(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === fe) {
          var u = i.memoizedState;
          u !== null && zC(i, a, e);
        } else if (i.tag === Dt)
          zC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function bD(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && py(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function SD(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !rS[e])
        if (rS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              _('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              _('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              _('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          _('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function ED(e, t) {
      e !== void 0 && !Ly[e] && (e !== "collapsed" && e !== "hidden" ? (Ly[e] = !0, _('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Ly[e] = !0, _('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function jC(e, t) {
      {
        var a = Ze(e), i = !a && typeof Ta(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return _("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function CD(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Ze(e)) {
          for (var a = 0; a < e.length; a++)
            if (!jC(e[a], a))
              return;
        } else {
          var i = Ta(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var f = u.next(), m = 0; !f.done; f = u.next()) {
                if (!jC(f.value, m))
                  return;
                m++;
              }
          } else
            _('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function fS(e, t, a, i, u) {
      var f = e.memoizedState;
      f === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = i, f.tail = a, f.tailMode = u);
    }
    function VC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, f = i.tail, m = i.children;
      SD(u), ED(f, u), CD(m, u), ja(e, t, m, a);
      var g = Uo.current, E = Sb(g, bv);
      if (E)
        g = Eb(g, bv), t.flags |= st;
      else {
        var T = e !== null && (e.flags & st) !== Xe;
        T && _D(t, t.child, a), g = gd(g);
      }
      if (Ts(t, g), (t.mode & Ot) === et)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var x = bD(t.child), z;
            x === null ? (z = t.child, t.child = null) : (z = x.sibling, x.sibling = null), fS(
              t,
              !1,
              // isBackwards
              z,
              x,
              f
            );
            break;
          }
          case "backwards": {
            var M = null, $ = t.child;
            for (t.child = null; $ !== null; ) {
              var Y = $.alternate;
              if (Y !== null && py(Y) === null) {
                t.child = $;
                break;
              }
              var Q = $.sibling;
              $.sibling = M, M = $, $ = Q;
            }
            fS(
              t,
              !0,
              // isBackwards
              M,
              null,
              // last
              f
            );
            break;
          }
          case "together": {
            fS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function RD(e, t, a) {
      gb(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = md(t, null, i, a) : ja(e, t, i, a), t.child;
    }
    var PC = !1;
    function wD(e, t, a) {
      var i = t.type, u = i._context, f = t.pendingProps, m = t.memoizedProps, g = f.value;
      {
        "value" in f || PC || (PC = !0, _("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var E = t.type.propTypes;
        E && ko(E, f, "prop", "Context.Provider");
      }
      if (T0(t, u, g), m !== null) {
        var T = m.value;
        if (ze(T, g)) {
          if (m.children === f.children && !Im())
            return wl(e, t, a);
        } else
          _x(t, u, a);
      }
      var x = f.children;
      return ja(e, t, x, a), t.child;
    }
    var FC = !1;
    function TD(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (FC || (FC = !0, _("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, f = u.children;
      typeof f != "function" && _("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), hd(t, a);
      var m = dr(i);
      vu(t);
      var g;
      return xv.current = t, hr(!0), g = f(m), hr(!1), Ju(), t.flags |= uu, ja(e, t, g, a), t.child;
    }
    function Nv() {
      jo = !0;
    }
    function Uy(e, t) {
      (t.mode & Ot) === et && e !== null && (e.alternate = null, t.alternate = null, t.flags |= yn);
    }
    function wl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), SC(), Bv(t.lanes), ma(a, t.childLanes) ? (kx(e, t), t.child) : null;
    }
    function OD(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var f = i.deletions;
        return f === null ? (i.deletions = [e], i.flags |= Xt) : f.push(e), a.flags |= yn, a;
      }
    }
    function dS(e, t) {
      var a = e.lanes;
      return !!ma(a, t);
    }
    function xD(e, t, a) {
      switch (t.tag) {
        case X:
          AC(t), t.stateNode, pd();
          break;
        case re:
          Y0(t);
          break;
        case B: {
          var i = t.type;
          wu(i) && Ym(t);
          break;
        }
        case te:
          gb(t, t.stateNode.containerInfo);
          break;
        case xt: {
          var u = t.memoizedProps.value, f = t.type._context;
          T0(t, f, u);
          break;
        }
        case ye:
          {
            var m = ma(a, t.childLanes);
            m && (t.flags |= gt);
            {
              var g = t.stateNode;
              g.effectDuration = 0, g.passiveEffectDuration = 0;
            }
          }
          break;
        case fe: {
          var E = t.memoizedState;
          if (E !== null) {
            if (E.dehydrated !== null)
              return Ts(t, gd(Uo.current)), t.flags |= st, null;
            var T = t.child, x = T.childLanes;
            if (ma(a, x))
              return MC(e, t, a);
            Ts(t, gd(Uo.current));
            var z = wl(e, t, a);
            return z !== null ? z.sibling : null;
          } else
            Ts(t, gd(Uo.current));
          break;
        }
        case Dt: {
          var M = (e.flags & st) !== Xe, $ = ma(a, t.childLanes);
          if (M) {
            if ($)
              return VC(e, t, a);
            t.flags |= st;
          }
          var Y = t.memoizedState;
          if (Y !== null && (Y.rendering = null, Y.tail = null, Y.lastEffect = null), Ts(t, Uo.current), $)
            break;
          return null;
        }
        case ot:
        case ht:
          return t.lanes = q, DC(e, t, a);
      }
      return wl(e, t, a);
    }
    function HC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return OD(e, t, BS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Im() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          jo = !0;
        else {
          var f = dS(e, a);
          if (!f && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & st) === Xe)
            return jo = !1, xD(e, t, a);
          (e.flags & ac) !== Xe ? jo = !0 : jo = !1;
        }
      } else if (jo = !1, Gr() && ex(t)) {
        var m = t.index, g = tx();
        v0(t, g, m);
      }
      switch (t.lanes = q, t.tag) {
        case ie:
          return sD(e, t, t.type, a);
        case mt: {
          var E = t.elementType;
          return uD(e, t, E, a);
        }
        case L: {
          var T = t.type, x = t.pendingProps, z = t.elementType === T ? x : Mo(T, x);
          return aS(e, t, T, z, a);
        }
        case B: {
          var M = t.type, $ = t.pendingProps, Y = t.elementType === M ? $ : Mo(M, $);
          return kC(e, t, M, Y, a);
        }
        case X:
          return aD(e, t, a);
        case re:
          return iD(e, t, a);
        case De:
          return oD(e, t);
        case fe:
          return MC(e, t, a);
        case te:
          return RD(e, t, a);
        case be: {
          var Q = t.type, Oe = t.pendingProps, Je = t.elementType === Q ? Oe : Mo(Q, Oe);
          return TC(e, t, Q, Je, a);
        }
        case $e:
          return tD(e, t, a);
        case Ae:
          return nD(e, t, a);
        case ye:
          return rD(e, t, a);
        case xt:
          return wD(e, t, a);
        case It:
          return TD(e, t, a);
        case de: {
          var Ge = t.type, Pt = t.pendingProps, Mt = Mo(Ge, Pt);
          if (t.type !== t.elementType) {
            var F = Ge.propTypes;
            F && ko(
              F,
              Mt,
              // Resolved for outer only
              "prop",
              Rt(Ge)
            );
          }
          return Mt = Mo(Ge.type, Mt), OC(e, t, Ge, Mt, a);
        }
        case Ce:
          return xC(e, t, t.type, t.pendingProps, a);
        case Et: {
          var K = t.type, H = t.pendingProps, pe = t.elementType === K ? H : Mo(K, H);
          return lD(e, t, K, pe, a);
        }
        case Dt:
          return VC(e, t, a);
        case fn:
          break;
        case ot:
          return DC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Rd(e) {
      e.flags |= gt;
    }
    function BC(e) {
      e.flags |= sa, e.flags |= fp;
    }
    var IC, pS, $C, YC;
    IC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === re || u.tag === De)
          qT(e, u.stateNode);
        else if (u.tag !== te) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, pS = function(e, t) {
    }, $C = function(e, t, a, i, u) {
      var f = e.memoizedProps;
      if (f !== i) {
        var m = t.stateNode, g = _b(), E = JT(m, a, f, i, u, g);
        t.updateQueue = E, E && Rd(t);
      }
    }, YC = function(e, t, a, i) {
      a !== i && Rd(t);
    };
    function kv(e, t) {
      if (!Gr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, f = null; u !== null; )
              u.alternate !== null && (f = u), u = u.sibling;
            f === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : f.sibling = null;
            break;
          }
        }
    }
    function Kr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = q, i = Xe;
      if (t) {
        if ((e.mode & rt) !== et) {
          for (var E = e.selfBaseDuration, T = e.child; T !== null; )
            a = _t(a, _t(T.lanes, T.childLanes)), i |= T.subtreeFlags & yr, i |= T.flags & yr, E += T.treeBaseDuration, T = T.sibling;
          e.treeBaseDuration = E;
        } else
          for (var x = e.child; x !== null; )
            a = _t(a, _t(x.lanes, x.childLanes)), i |= x.subtreeFlags & yr, i |= x.flags & yr, x.return = e, x = x.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & rt) !== et) {
          for (var u = e.actualDuration, f = e.selfBaseDuration, m = e.child; m !== null; )
            a = _t(a, _t(m.lanes, m.childLanes)), i |= m.subtreeFlags, i |= m.flags, u += m.actualDuration, f += m.treeBaseDuration, m = m.sibling;
          e.actualDuration = u, e.treeBaseDuration = f;
        } else
          for (var g = e.child; g !== null; )
            a = _t(a, _t(g.lanes, g.childLanes)), i |= g.subtreeFlags, i |= g.flags, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function DD(e, t, a) {
      if (vx() && (t.mode & Ot) !== et && (t.flags & st) === Xe)
        return S0(t), pd(), t.flags |= Ln | ka | ur, !1;
      var i = Xm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (dx(t), Kr(t), (t.mode & rt) !== et) {
            var u = a !== null;
            if (u) {
              var f = t.child;
              f !== null && (t.treeBaseDuration -= f.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (pd(), (t.flags & st) === Xe && (t.memoizedState = null), t.flags |= gt, Kr(t), (t.mode & rt) !== et) {
            var m = a !== null;
            if (m) {
              var g = t.child;
              g !== null && (t.treeBaseDuration -= g.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return E0(), !0;
    }
    function WC(e, t, a) {
      var i = t.pendingProps;
      switch (P_(t), t.tag) {
        case ie:
        case mt:
        case Ce:
        case L:
        case be:
        case $e:
        case Ae:
        case ye:
        case It:
        case de:
          return Kr(t), null;
        case B: {
          var u = t.type;
          return wu(u) && $m(t), Kr(t), null;
        }
        case X: {
          var f = t.stateNode;
          if (yd(t), U_(t), Rb(), f.pendingContext && (f.context = f.pendingContext, f.pendingContext = null), e === null || e.child === null) {
            var m = Xm(t);
            if (m)
              Rd(t);
            else if (e !== null) {
              var g = e.memoizedState;
              // Check if this is a client root
              (!g.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Ln) !== Xe) && (t.flags |= ei, E0());
            }
          }
          return pS(e, t), Kr(t), null;
        }
        case re: {
          bb(t);
          var E = $0(), T = t.type;
          if (e !== null && t.stateNode != null)
            $C(e, t, T, i, E), e.ref !== t.ref && BC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Kr(t), null;
            }
            var x = _b(), z = Xm(t);
            if (z)
              cx(t, E, x) && Rd(t);
            else {
              var M = XT(T, i, E, x, t);
              IC(M, t, !1, !1), t.stateNode = M, ZT(M, T, i, E) && Rd(t);
            }
            t.ref !== null && BC(t);
          }
          return Kr(t), null;
        }
        case De: {
          var $ = i;
          if (e && t.stateNode != null) {
            var Y = e.memoizedProps;
            YC(e, t, Y, $);
          } else {
            if (typeof $ != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var Q = $0(), Oe = _b(), Je = Xm(t);
            Je ? fx(t) && Rd(t) : t.stateNode = eO($, Q, Oe, t);
          }
          return Kr(t), null;
        }
        case fe: {
          _d(t);
          var Ge = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Pt = DD(e, t, Ge);
            if (!Pt)
              return t.flags & ur ? t : null;
          }
          if ((t.flags & st) !== Xe)
            return t.lanes = a, (t.mode & rt) !== et && Kb(t), t;
          var Mt = Ge !== null, F = e !== null && e.memoizedState !== null;
          if (Mt !== F && Mt) {
            var K = t.child;
            if (K.flags |= lu, (t.mode & Ot) !== et) {
              var H = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !j);
              H || Sb(Uo.current, G0) ? NN() : kS();
            }
          }
          var pe = t.updateQueue;
          if (pe !== null && (t.flags |= gt), Kr(t), (t.mode & rt) !== et && Mt) {
            var xe = t.child;
            xe !== null && (t.treeBaseDuration -= xe.treeBaseDuration);
          }
          return null;
        }
        case te:
          return yd(t), pS(e, t), e === null && GO(t.stateNode.containerInfo), Kr(t), null;
        case xt:
          var Re = t.type._context;
          return Q_(Re, t), Kr(t), null;
        case Et: {
          var ut = t.type;
          return wu(ut) && $m(t), Kr(t), null;
        }
        case Dt: {
          _d(t);
          var vt = t.memoizedState;
          if (vt === null)
            return Kr(t), null;
          var un = (t.flags & st) !== Xe, Gt = vt.rendering;
          if (Gt === null)
            if (un)
              kv(vt, !1);
            else {
              var tr = AN() && (e === null || (e.flags & st) === Xe);
              if (!tr)
                for (var Qt = t.child; Qt !== null; ) {
                  var Yn = py(Qt);
                  if (Yn !== null) {
                    un = !0, t.flags |= st, kv(vt, !1);
                    var ba = Yn.updateQueue;
                    return ba !== null && (t.updateQueue = ba, t.flags |= gt), t.subtreeFlags = Xe, Ax(t, a), Ts(t, Eb(Uo.current, bv)), t.child;
                  }
                  Qt = Qt.sibling;
                }
              vt.tail !== null && xn() > pR() && (t.flags |= st, un = !0, kv(vt, !1), t.lanes = Rp);
            }
          else {
            if (!un) {
              var ea = py(Gt);
              if (ea !== null) {
                t.flags |= st, un = !0;
                var Di = ea.updateQueue;
                if (Di !== null && (t.updateQueue = Di, t.flags |= gt), kv(vt, !0), vt.tail === null && vt.tailMode === "hidden" && !Gt.alternate && !Gr())
                  return Kr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                xn() * 2 - vt.renderingStartTime > pR() && a !== ha && (t.flags |= st, un = !0, kv(vt, !1), t.lanes = Rp);
            }
            if (vt.isBackwards)
              Gt.sibling = t.child, t.child = Gt;
            else {
              var Fa = vt.last;
              Fa !== null ? Fa.sibling = Gt : t.child = Gt, vt.last = Gt;
            }
          }
          if (vt.tail !== null) {
            var Ha = vt.tail;
            vt.rendering = Ha, vt.tail = Ha.sibling, vt.renderingStartTime = xn(), Ha.sibling = null;
            var Sa = Uo.current;
            return un ? Sa = Eb(Sa, bv) : Sa = gd(Sa), Ts(t, Sa), Ha;
          }
          return Kr(t), null;
        }
        case fn:
          break;
        case ot:
        case ht: {
          NS(t);
          var Nl = t.memoizedState, Ad = Nl !== null;
          if (e !== null) {
            var Gv = e.memoizedState, Lu = Gv !== null;
            Lu !== Ad && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !w && (t.flags |= lu);
          }
          return !Ad || (t.mode & Ot) === et ? Kr(t) : ma(Au, ha) && (Kr(t), t.subtreeFlags & (yn | gt) && (t.flags |= lu)), null;
        }
        case Nt:
          return null;
        case bt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function ND(e, t, a) {
      switch (P_(t), t.tag) {
        case B: {
          var i = t.type;
          wu(i) && $m(t);
          var u = t.flags;
          return u & ur ? (t.flags = u & ~ur | st, (t.mode & rt) !== et && Kb(t), t) : null;
        }
        case X: {
          t.stateNode, yd(t), U_(t), Rb();
          var f = t.flags;
          return (f & ur) !== Xe && (f & st) === Xe ? (t.flags = f & ~ur | st, t) : null;
        }
        case re:
          return bb(t), null;
        case fe: {
          _d(t);
          var m = t.memoizedState;
          if (m !== null && m.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            pd();
          }
          var g = t.flags;
          return g & ur ? (t.flags = g & ~ur | st, (t.mode & rt) !== et && Kb(t), t) : null;
        }
        case Dt:
          return _d(t), null;
        case te:
          return yd(t), null;
        case xt:
          var E = t.type._context;
          return Q_(E, t), null;
        case ot:
        case ht:
          return NS(t), null;
        case Nt:
          return null;
        default:
          return null;
      }
    }
    function GC(e, t, a) {
      switch (P_(t), t.tag) {
        case B: {
          var i = t.type.childContextTypes;
          i != null && $m(t);
          break;
        }
        case X: {
          t.stateNode, yd(t), U_(t), Rb();
          break;
        }
        case re: {
          bb(t);
          break;
        }
        case te:
          yd(t);
          break;
        case fe:
          _d(t);
          break;
        case Dt:
          _d(t);
          break;
        case xt:
          var u = t.type._context;
          Q_(u, t);
          break;
        case ot:
        case ht:
          NS(t);
          break;
      }
    }
    var QC = null;
    QC = /* @__PURE__ */ new Set();
    var zy = !1, Xr = !1, kD = typeof WeakSet == "function" ? WeakSet : Set, je = null, wd = null, Td = null;
    function AD(e) {
      qu(null, function() {
        throw e;
      }), sp();
    }
    var LD = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & rt)
        try {
          Nu(), t.componentWillUnmount();
        } finally {
          Du(e);
        }
      else
        t.componentWillUnmount();
    };
    function KC(e, t) {
      try {
        Ds(Sr, e);
      } catch (a) {
        Sn(e, t, a);
      }
    }
    function vS(e, t, a) {
      try {
        LD(e, a);
      } catch (i) {
        Sn(e, t, i);
      }
    }
    function MD(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Sn(e, t, i);
      }
    }
    function XC(e, t) {
      try {
        ZC(e);
      } catch (a) {
        Sn(e, t, a);
      }
    }
    function Od(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (He && Ye && e.mode & rt)
              try {
                Nu(), i = a(null);
              } finally {
                Du(e);
              }
            else
              i = a(null);
          } catch (u) {
            Sn(e, t, u);
          }
          typeof i == "function" && _("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", lt(e));
        } else
          a.current = null;
    }
    function jy(e, t, a) {
      try {
        a();
      } catch (i) {
        Sn(e, t, i);
      }
    }
    var qC = !1;
    function UD(e, t) {
      QT(e.containerInfo), je = t, zD();
      var a = qC;
      return qC = !1, a;
    }
    function zD() {
      for (; je !== null; ) {
        var e = je, t = e.child;
        (e.subtreeFlags & Kl) !== Xe && t !== null ? (t.return = e, je = t) : jD();
      }
    }
    function jD() {
      for (; je !== null; ) {
        var e = je;
        Wt(e);
        try {
          VD(e);
        } catch (a) {
          Sn(e, e.return, a);
        }
        mn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, je = t;
          return;
        }
        je = e.return;
      }
    }
    function VD(e) {
      var t = e.alternate, a = e.flags;
      if ((a & ei) !== Xe) {
        switch (Wt(e), e.tag) {
          case L:
          case be:
          case Ce:
            break;
          case B: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, f = e.stateNode;
              e.type === e.elementType && !jc && (f.props !== e.memoizedProps && _("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", lt(e) || "instance"), f.state !== e.memoizedState && _("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", lt(e) || "instance"));
              var m = f.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Mo(e.type, i), u);
              {
                var g = QC;
                m === void 0 && !g.has(e.type) && (g.add(e.type), _("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", lt(e)));
              }
              f.__reactInternalSnapshotBeforeUpdate = m;
            }
            break;
          }
          case X: {
            {
              var E = e.stateNode;
              _O(E.containerInfo);
            }
            break;
          }
          case re:
          case De:
          case te:
          case Et:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        mn();
      }
    }
    function Vo(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var f = u.next, m = f;
        do {
          if ((m.tag & e) === e) {
            var g = m.destroy;
            m.destroy = void 0, g !== void 0 && ((e & Qr) !== di ? mf(t) : (e & Sr) !== di && yf(t), (e & Tu) !== di && $v(!0), jy(t, a, g), (e & Tu) !== di && $v(!1), (e & Qr) !== di ? Kh() : (e & Sr) !== di && Xl());
          }
          m = m.next;
        } while (m !== f);
      }
    }
    function Ds(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, f = u;
        do {
          if ((f.tag & e) === e) {
            (e & Qr) !== di ? Qh(t) : (e & Sr) !== di && Xh(t);
            var m = f.create;
            (e & Tu) !== di && $v(!0), f.destroy = m(), (e & Tu) !== di && $v(!1), (e & Qr) !== di ? Sp() : (e & Sr) !== di && qh();
            {
              var g = f.destroy;
              if (g !== void 0 && typeof g != "function") {
                var E = void 0;
                (f.tag & Sr) !== Xe ? E = "useLayoutEffect" : (f.tag & Tu) !== Xe ? E = "useInsertionEffect" : E = "useEffect";
                var T = void 0;
                g === null ? T = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof g.then == "function" ? T = `

It looks like you wrote ` + E + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + E + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : T = " You returned: " + g, _("%s must not return anything besides a function, which is used for clean-up.%s", E, T);
              }
            }
          }
          f = f.next;
        } while (f !== u);
      }
    }
    function PD(e, t) {
      if ((t.flags & gt) !== Xe)
        switch (t.tag) {
          case ye: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, f = i.onPostCommit, m = _C(), g = t.alternate === null ? "mount" : "update";
            gC() && (g = "nested-update"), typeof f == "function" && f(u, g, a, m);
            var E = t.return;
            e:
              for (; E !== null; ) {
                switch (E.tag) {
                  case X:
                    var T = E.stateNode;
                    T.passiveEffectDuration += a;
                    break e;
                  case ye:
                    var x = E.stateNode;
                    x.passiveEffectDuration += a;
                    break e;
                }
                E = E.return;
              }
            break;
          }
        }
    }
    function FD(e, t, a, i) {
      if ((a.flags & Ar) !== Xe)
        switch (a.tag) {
          case L:
          case be:
          case Ce: {
            if (!Xr)
              if (a.mode & rt)
                try {
                  Nu(), Ds(Sr | br, a);
                } finally {
                  Du(a);
                }
              else
                Ds(Sr | br, a);
            break;
          }
          case B: {
            var u = a.stateNode;
            if (a.flags & gt && !Xr)
              if (t === null)
                if (a.type === a.elementType && !jc && (u.props !== a.memoizedProps && _("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", lt(a) || "instance"), u.state !== a.memoizedState && _("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", lt(a) || "instance")), a.mode & rt)
                  try {
                    Nu(), u.componentDidMount();
                  } finally {
                    Du(a);
                  }
                else
                  u.componentDidMount();
              else {
                var f = a.elementType === a.type ? t.memoizedProps : Mo(a.type, t.memoizedProps), m = t.memoizedState;
                if (a.type === a.elementType && !jc && (u.props !== a.memoizedProps && _("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", lt(a) || "instance"), u.state !== a.memoizedState && _("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", lt(a) || "instance")), a.mode & rt)
                  try {
                    Nu(), u.componentDidUpdate(f, m, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Du(a);
                  }
                else
                  u.componentDidUpdate(f, m, u.__reactInternalSnapshotBeforeUpdate);
              }
            var g = a.updateQueue;
            g !== null && (a.type === a.elementType && !jc && (u.props !== a.memoizedProps && _("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", lt(a) || "instance"), u.state !== a.memoizedState && _("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", lt(a) || "instance")), A0(a, g, u));
            break;
          }
          case X: {
            var E = a.updateQueue;
            if (E !== null) {
              var T = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case re:
                    T = a.child.stateNode;
                    break;
                  case B:
                    T = a.child.stateNode;
                    break;
                }
              A0(a, E, T);
            }
            break;
          }
          case re: {
            var x = a.stateNode;
            if (t === null && a.flags & gt) {
              var z = a.type, M = a.memoizedProps;
              iO(x, z, M);
            }
            break;
          }
          case De:
            break;
          case te:
            break;
          case ye: {
            {
              var $ = a.memoizedProps, Y = $.onCommit, Q = $.onRender, Oe = a.stateNode.effectDuration, Je = _C(), Ge = t === null ? "mount" : "update";
              gC() && (Ge = "nested-update"), typeof Q == "function" && Q(a.memoizedProps.id, Ge, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Je);
              {
                typeof Y == "function" && Y(a.memoizedProps.id, Ge, Oe, Je), jN(a);
                var Pt = a.return;
                e:
                  for (; Pt !== null; ) {
                    switch (Pt.tag) {
                      case X:
                        var Mt = Pt.stateNode;
                        Mt.effectDuration += Oe;
                        break e;
                      case ye:
                        var F = Pt.stateNode;
                        F.effectDuration += Oe;
                        break e;
                    }
                    Pt = Pt.return;
                  }
              }
            }
            break;
          }
          case fe: {
            QD(e, a);
            break;
          }
          case Dt:
          case Et:
          case fn:
          case ot:
          case ht:
          case bt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Xr || a.flags & sa && ZC(a);
    }
    function HD(e) {
      switch (e.tag) {
        case L:
        case be:
        case Ce: {
          if (e.mode & rt)
            try {
              Nu(), KC(e, e.return);
            } finally {
              Du(e);
            }
          else
            KC(e, e.return);
          break;
        }
        case B: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && MD(e, e.return, t), XC(e, e.return);
          break;
        }
        case re: {
          XC(e, e.return);
          break;
        }
      }
    }
    function BD(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === re) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? hO(u) : yO(i.stateNode, i.memoizedProps);
            } catch (m) {
              Sn(e, e.return, m);
            }
          }
        } else if (i.tag === De) {
          if (a === null)
            try {
              var f = i.stateNode;
              t ? mO(f) : gO(f, i.memoizedProps);
            } catch (m) {
              Sn(e, e.return, m);
            }
        } else if (!((i.tag === ot || i.tag === ht) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function ZC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case re:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & rt)
            try {
              Nu(), u = t(i);
            } finally {
              Du(e);
            }
          else
            u = t(i);
          typeof u == "function" && _("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", lt(e));
        } else
          t.hasOwnProperty("current") || _("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", lt(e)), t.current = i;
      }
    }
    function ID(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function JC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, JC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === re) {
          var a = e.stateNode;
          a !== null && XO(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function $D(e) {
      for (var t = e.return; t !== null; ) {
        if (eR(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function eR(e) {
      return e.tag === re || e.tag === X || e.tag === te;
    }
    function tR(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || eR(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== re && t.tag !== De && t.tag !== Tt; ) {
            if (t.flags & yn || t.child === null || t.tag === te)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & yn))
            return t.stateNode;
        }
    }
    function YD(e) {
      var t = $D(e);
      switch (t.tag) {
        case re: {
          var a = t.stateNode;
          t.flags & Zt && (n0(a), t.flags &= ~Zt);
          var i = tR(e);
          mS(e, i, a);
          break;
        }
        case X:
        case te: {
          var u = t.stateNode.containerInfo, f = tR(e);
          hS(e, f, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function hS(e, t, a) {
      var i = e.tag, u = i === re || i === De;
      if (u) {
        var f = e.stateNode;
        t ? fO(a, f, t) : sO(a, f);
      } else if (i !== te) {
        var m = e.child;
        if (m !== null) {
          hS(m, t, a);
          for (var g = m.sibling; g !== null; )
            hS(g, t, a), g = g.sibling;
        }
      }
    }
    function mS(e, t, a) {
      var i = e.tag, u = i === re || i === De;
      if (u) {
        var f = e.stateNode;
        t ? cO(a, f, t) : lO(a, f);
      } else if (i !== te) {
        var m = e.child;
        if (m !== null) {
          mS(m, t, a);
          for (var g = m.sibling; g !== null; )
            mS(g, t, a), g = g.sibling;
        }
      }
    }
    var qr = null, Po = !1;
    function WD(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case re: {
                qr = i.stateNode, Po = !1;
                break e;
              }
              case X: {
                qr = i.stateNode.containerInfo, Po = !0;
                break e;
              }
              case te: {
                qr = i.stateNode.containerInfo, Po = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (qr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        nR(e, t, a), qr = null, Po = !1;
      }
      ID(a);
    }
    function Ns(e, t, a) {
      for (var i = a.child; i !== null; )
        nR(e, t, i), i = i.sibling;
    }
    function nR(e, t, a) {
      switch (_p(a), a.tag) {
        case re:
          Xr || Od(a, t);
        case De: {
          {
            var i = qr, u = Po;
            qr = null, Ns(e, t, a), qr = i, Po = u, qr !== null && (Po ? pO(qr, a.stateNode) : dO(qr, a.stateNode));
          }
          return;
        }
        case Tt: {
          qr !== null && (Po ? vO(qr, a.stateNode) : O_(qr, a.stateNode));
          return;
        }
        case te: {
          {
            var f = qr, m = Po;
            qr = a.stateNode.containerInfo, Po = !0, Ns(e, t, a), qr = f, Po = m;
          }
          return;
        }
        case L:
        case be:
        case de:
        case Ce: {
          if (!Xr) {
            var g = a.updateQueue;
            if (g !== null) {
              var E = g.lastEffect;
              if (E !== null) {
                var T = E.next, x = T;
                do {
                  var z = x, M = z.destroy, $ = z.tag;
                  M !== void 0 && (($ & Tu) !== di ? jy(a, t, M) : ($ & Sr) !== di && (yf(a), a.mode & rt ? (Nu(), jy(a, t, M), Du(a)) : jy(a, t, M), Xl())), x = x.next;
                } while (x !== T);
              }
            }
          }
          Ns(e, t, a);
          return;
        }
        case B: {
          if (!Xr) {
            Od(a, t);
            var Y = a.stateNode;
            typeof Y.componentWillUnmount == "function" && vS(a, t, Y);
          }
          Ns(e, t, a);
          return;
        }
        case fn: {
          Ns(e, t, a);
          return;
        }
        case ot: {
          if (
            // TODO: Remove this dead flag
            a.mode & Ot
          ) {
            var Q = Xr;
            Xr = Q || a.memoizedState !== null, Ns(e, t, a), Xr = Q;
          } else
            Ns(e, t, a);
          break;
        }
        default: {
          Ns(e, t, a);
          return;
        }
      }
    }
    function GD(e) {
      e.memoizedState;
    }
    function QD(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var f = u.dehydrated;
            f !== null && LO(f);
          }
        }
      }
    }
    function rR(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new kD()), t.forEach(function(i) {
          var u = $N.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), gr)
              if (wd !== null && Td !== null)
                Iv(Td, wd);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function KD(e, t, a) {
      wd = a, Td = e, Wt(t), aR(t, e), Wt(t), wd = null, Td = null;
    }
    function Fo(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var f = i[u];
          try {
            WD(e, t, f);
          } catch (E) {
            Sn(f, t, E);
          }
        }
      var m = Bu();
      if (t.subtreeFlags & da)
        for (var g = t.child; g !== null; )
          Wt(g), aR(g, e), g = g.sibling;
      Wt(m);
    }
    function aR(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case L:
        case be:
        case de:
        case Ce: {
          if (Fo(t, e), ku(e), u & gt) {
            try {
              Vo(Tu | br, e, e.return), Ds(Tu | br, e);
            } catch (ut) {
              Sn(e, e.return, ut);
            }
            if (e.mode & rt) {
              try {
                Nu(), Vo(Sr | br, e, e.return);
              } catch (ut) {
                Sn(e, e.return, ut);
              }
              Du(e);
            } else
              try {
                Vo(Sr | br, e, e.return);
              } catch (ut) {
                Sn(e, e.return, ut);
              }
          }
          return;
        }
        case B: {
          Fo(t, e), ku(e), u & sa && i !== null && Od(i, i.return);
          return;
        }
        case re: {
          Fo(t, e), ku(e), u & sa && i !== null && Od(i, i.return);
          {
            if (e.flags & Zt) {
              var f = e.stateNode;
              try {
                n0(f);
              } catch (ut) {
                Sn(e, e.return, ut);
              }
            }
            if (u & gt) {
              var m = e.stateNode;
              if (m != null) {
                var g = e.memoizedProps, E = i !== null ? i.memoizedProps : g, T = e.type, x = e.updateQueue;
                if (e.updateQueue = null, x !== null)
                  try {
                    oO(m, x, T, E, g, e);
                  } catch (ut) {
                    Sn(e, e.return, ut);
                  }
              }
            }
          }
          return;
        }
        case De: {
          if (Fo(t, e), ku(e), u & gt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var z = e.stateNode, M = e.memoizedProps, $ = i !== null ? i.memoizedProps : M;
            try {
              uO(z, $, M);
            } catch (ut) {
              Sn(e, e.return, ut);
            }
          }
          return;
        }
        case X: {
          if (Fo(t, e), ku(e), u & gt && i !== null) {
            var Y = i.memoizedState;
            if (Y.isDehydrated)
              try {
                AO(t.containerInfo);
              } catch (ut) {
                Sn(e, e.return, ut);
              }
          }
          return;
        }
        case te: {
          Fo(t, e), ku(e);
          return;
        }
        case fe: {
          Fo(t, e), ku(e);
          var Q = e.child;
          if (Q.flags & lu) {
            var Oe = Q.stateNode, Je = Q.memoizedState, Ge = Je !== null;
            if (Oe.isHidden = Ge, Ge) {
              var Pt = Q.alternate !== null && Q.alternate.memoizedState !== null;
              Pt || DN();
            }
          }
          if (u & gt) {
            try {
              GD(e);
            } catch (ut) {
              Sn(e, e.return, ut);
            }
            rR(e);
          }
          return;
        }
        case ot: {
          var Mt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Ot
          ) {
            var F = Xr;
            Xr = F || Mt, Fo(t, e), Xr = F;
          } else
            Fo(t, e);
          if (ku(e), u & lu) {
            var K = e.stateNode, H = e.memoizedState, pe = H !== null, xe = e;
            if (K.isHidden = pe, pe && !Mt && (xe.mode & Ot) !== et) {
              je = xe;
              for (var Re = xe.child; Re !== null; )
                je = Re, qD(Re), Re = Re.sibling;
            }
            BD(xe, pe);
          }
          return;
        }
        case Dt: {
          Fo(t, e), ku(e), u & gt && rR(e);
          return;
        }
        case fn:
          return;
        default: {
          Fo(t, e), ku(e);
          return;
        }
      }
    }
    function ku(e) {
      var t = e.flags;
      if (t & yn) {
        try {
          YD(e);
        } catch (a) {
          Sn(e, e.return, a);
        }
        e.flags &= ~yn;
      }
      t & ti && (e.flags &= ~ti);
    }
    function XD(e, t, a) {
      wd = a, Td = t, je = e, iR(e, t, a), wd = null, Td = null;
    }
    function iR(e, t, a) {
      for (var i = (e.mode & Ot) !== et; je !== null; ) {
        var u = je, f = u.child;
        if (u.tag === ot && i) {
          var m = u.memoizedState !== null, g = m || zy;
          if (g) {
            yS(e, t, a);
            continue;
          } else {
            var E = u.alternate, T = E !== null && E.memoizedState !== null, x = T || Xr, z = zy, M = Xr;
            zy = g, Xr = x, Xr && !M && (je = u, ZD(u));
            for (var $ = f; $ !== null; )
              je = $, iR(
                $,
                // New root; bubble back up to here and stop.
                t,
                a
              ), $ = $.sibling;
            je = u, zy = z, Xr = M, yS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Ar) !== Xe && f !== null ? (f.return = u, je = f) : yS(e, t, a);
      }
    }
    function yS(e, t, a) {
      for (; je !== null; ) {
        var i = je;
        if ((i.flags & Ar) !== Xe) {
          var u = i.alternate;
          Wt(i);
          try {
            FD(t, u, i, a);
          } catch (m) {
            Sn(i, i.return, m);
          }
          mn();
        }
        if (i === e) {
          je = null;
          return;
        }
        var f = i.sibling;
        if (f !== null) {
          f.return = i.return, je = f;
          return;
        }
        je = i.return;
      }
    }
    function qD(e) {
      for (; je !== null; ) {
        var t = je, a = t.child;
        switch (t.tag) {
          case L:
          case be:
          case de:
          case Ce: {
            if (t.mode & rt)
              try {
                Nu(), Vo(Sr, t, t.return);
              } finally {
                Du(t);
              }
            else
              Vo(Sr, t, t.return);
            break;
          }
          case B: {
            Od(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && vS(t, t.return, i);
            break;
          }
          case re: {
            Od(t, t.return);
            break;
          }
          case ot: {
            var u = t.memoizedState !== null;
            if (u) {
              oR(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, je = a) : oR(e);
      }
    }
    function oR(e) {
      for (; je !== null; ) {
        var t = je;
        if (t === e) {
          je = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, je = a;
          return;
        }
        je = t.return;
      }
    }
    function ZD(e) {
      for (; je !== null; ) {
        var t = je, a = t.child;
        if (t.tag === ot) {
          var i = t.memoizedState !== null;
          if (i) {
            uR(e);
            continue;
          }
        }
        a !== null ? (a.return = t, je = a) : uR(e);
      }
    }
    function uR(e) {
      for (; je !== null; ) {
        var t = je;
        Wt(t);
        try {
          HD(t);
        } catch (i) {
          Sn(t, t.return, i);
        }
        if (mn(), t === e) {
          je = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, je = a;
          return;
        }
        je = t.return;
      }
    }
    function JD(e, t, a, i) {
      je = t, eN(t, e, a, i);
    }
    function eN(e, t, a, i) {
      for (; je !== null; ) {
        var u = je, f = u.child;
        (u.subtreeFlags & ni) !== Xe && f !== null ? (f.return = u, je = f) : tN(e, t, a, i);
      }
    }
    function tN(e, t, a, i) {
      for (; je !== null; ) {
        var u = je;
        if ((u.flags & Rn) !== Xe) {
          Wt(u);
          try {
            nN(t, u, a, i);
          } catch (m) {
            Sn(u, u.return, m);
          }
          mn();
        }
        if (u === e) {
          je = null;
          return;
        }
        var f = u.sibling;
        if (f !== null) {
          f.return = u.return, je = f;
          return;
        }
        je = u.return;
      }
    }
    function nN(e, t, a, i) {
      switch (t.tag) {
        case L:
        case be:
        case Ce: {
          if (t.mode & rt) {
            Qb();
            try {
              Ds(Qr | br, t);
            } finally {
              Gb(t);
            }
          } else
            Ds(Qr | br, t);
          break;
        }
      }
    }
    function rN(e) {
      je = e, aN();
    }
    function aN() {
      for (; je !== null; ) {
        var e = je, t = e.child;
        if ((je.flags & Xt) !== Xe) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              je = u, uN(u, e);
            }
            {
              var f = e.alternate;
              if (f !== null) {
                var m = f.child;
                if (m !== null) {
                  f.child = null;
                  do {
                    var g = m.sibling;
                    m.sibling = null, m = g;
                  } while (m !== null);
                }
              }
            }
            je = e;
          }
        }
        (e.subtreeFlags & ni) !== Xe && t !== null ? (t.return = e, je = t) : iN();
      }
    }
    function iN() {
      for (; je !== null; ) {
        var e = je;
        (e.flags & Rn) !== Xe && (Wt(e), oN(e), mn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, je = t;
          return;
        }
        je = e.return;
      }
    }
    function oN(e) {
      switch (e.tag) {
        case L:
        case be:
        case Ce: {
          e.mode & rt ? (Qb(), Vo(Qr | br, e, e.return), Gb(e)) : Vo(Qr | br, e, e.return);
          break;
        }
      }
    }
    function uN(e, t) {
      for (; je !== null; ) {
        var a = je;
        Wt(a), sN(a, t), mn();
        var i = a.child;
        i !== null ? (i.return = a, je = i) : lN(e);
      }
    }
    function lN(e) {
      for (; je !== null; ) {
        var t = je, a = t.sibling, i = t.return;
        if (JC(t), t === e) {
          je = null;
          return;
        }
        if (a !== null) {
          a.return = i, je = a;
          return;
        }
        je = i;
      }
    }
    function sN(e, t) {
      switch (e.tag) {
        case L:
        case be:
        case Ce: {
          e.mode & rt ? (Qb(), Vo(Qr, e, t), Gb(e)) : Vo(Qr, e, t);
          break;
        }
      }
    }
    function cN(e) {
      switch (e.tag) {
        case L:
        case be:
        case Ce: {
          try {
            Ds(Sr | br, e);
          } catch (a) {
            Sn(e, e.return, a);
          }
          break;
        }
        case B: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            Sn(e, e.return, a);
          }
          break;
        }
      }
    }
    function fN(e) {
      switch (e.tag) {
        case L:
        case be:
        case Ce: {
          try {
            Ds(Qr | br, e);
          } catch (t) {
            Sn(e, e.return, t);
          }
          break;
        }
      }
    }
    function dN(e) {
      switch (e.tag) {
        case L:
        case be:
        case Ce: {
          try {
            Vo(Sr | br, e, e.return);
          } catch (a) {
            Sn(e, e.return, a);
          }
          break;
        }
        case B: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && vS(e, e.return, t);
          break;
        }
      }
    }
    function pN(e) {
      switch (e.tag) {
        case L:
        case be:
        case Ce:
          try {
            Vo(Qr | br, e, e.return);
          } catch (t) {
            Sn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Av = Symbol.for;
      Av("selector.component"), Av("selector.has_pseudo_class"), Av("selector.role"), Av("selector.test_id"), Av("selector.text");
    }
    var vN = [];
    function hN() {
      vN.forEach(function(e) {
        return e();
      });
    }
    var mN = p.ReactCurrentActQueue;
    function yN(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function lR() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && mN.current !== null && _("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var gN = Math.ceil, gS = p.ReactCurrentDispatcher, _S = p.ReactCurrentOwner, Zr = p.ReactCurrentBatchConfig, Ho = p.ReactCurrentActQueue, Rr = (
      /*             */
      0
    ), sR = (
      /*               */
      1
    ), Jr = (
      /*                */
      2
    ), Ji = (
      /*                */
      4
    ), Tl = 0, Lv = 1, Vc = 2, Vy = 3, Mv = 4, cR = 5, bS = 6, Vt = Rr, Va = null, Pn = null, wr = q, Au = q, SS = bs(q), Tr = Tl, Uv = null, Py = q, zv = q, Fy = q, jv = null, pi = null, ES = 0, fR = 500, dR = 1 / 0, _N = 500, Ol = null;
    function Vv() {
      dR = xn() + _N;
    }
    function pR() {
      return dR;
    }
    var Hy = !1, CS = null, xd = null, Pc = !1, ks = null, Pv = q, RS = [], wS = null, bN = 50, Fv = 0, TS = null, OS = !1, By = !1, SN = 50, Dd = 0, Iy = null, Hv = sn, $y = q, vR = !1;
    function Yy() {
      return Va;
    }
    function Pa() {
      return (Vt & (Jr | Ji)) !== Rr ? xn() : (Hv !== sn || (Hv = xn()), Hv);
    }
    function As(e) {
      var t = e.mode;
      if ((t & Ot) === et)
        return it;
      if ((Vt & Jr) !== Rr && wr !== q)
        return qn(wr);
      var a = yx() !== mx;
      if (a) {
        if (Zr.transition !== null) {
          var i = Zr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return $y === jt && ($y = Op()), $y;
      }
      var u = oi();
      if (u !== jt)
        return u;
      var f = tO();
      return f;
    }
    function EN(e) {
      var t = e.mode;
      return (t & Ot) === et ? it : Qg();
    }
    function Or(e, t, a, i) {
      WN(), vR && _("useInsertionEffect must not schedule updates."), OS && (By = !0), sl(e, a, i), (Vt & Jr) !== q && e === Va ? KN(t) : (gr && Ap(e, t, a), XN(t), e === Va && ((Vt & Jr) === Rr && (zv = _t(zv, a)), Tr === Mv && Ls(e, wr)), vi(e, i), a === it && Vt === Rr && (t.mode & Ot) === et && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Ho.isBatchingLegacy && (Vv(), p0()));
    }
    function CN(e, t, a) {
      var i = e.current;
      i.lanes = t, sl(e, t, a), vi(e, a);
    }
    function RN(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Vt & Jr) !== Rr
      );
    }
    function vi(e, t) {
      var a = e.callbackNode;
      Yg(e, t);
      var i = cc(e, e === Va ? wr : q);
      if (i === q) {
        a !== null && NR(a), e.callbackNode = null, e.callbackPriority = jt;
        return;
      }
      var u = In(i), f = e.callbackPriority;
      if (f === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Ho.current !== null && a !== MS)) {
        a == null && f !== it && _("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && NR(a);
      var m;
      if (u === it)
        e.tag === Ss ? (Ho.isBatchingLegacy !== null && (Ho.didScheduleLegacyUpdate = !0), JO(yR.bind(null, e))) : d0(yR.bind(null, e)), Ho.current !== null ? Ho.current.push(Es) : rO(function() {
          (Vt & (Jr | Ji)) === Rr && Es();
        }), m = null;
      else {
        var g;
        switch (hc(i)) {
          case Lr:
            g = pf;
            break;
          case _r:
            g = Ma;
            break;
          case To:
            g = Ii;
            break;
          case pc:
            g = cu;
            break;
          default:
            g = Ii;
            break;
        }
        m = US(g, hR.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = m;
    }
    function hR(e, t) {
      if (Wx(), Hv = sn, $y = q, (Vt & (Jr | Ji)) !== Rr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Dl();
      if (i && e.callbackNode !== a)
        return null;
      var u = cc(e, e === Va ? wr : q);
      if (u === q)
        return null;
      var f = !dc(e, u) && !rm(e, u) && !t, m = f ? MN(e, u) : Gy(e, u);
      if (m !== Tl) {
        if (m === Vc) {
          var g = wp(e);
          g !== q && (u = g, m = xS(e, g));
        }
        if (m === Lv) {
          var E = Uv;
          throw Fc(e, q), Ls(e, u), vi(e, xn()), E;
        }
        if (m === bS)
          Ls(e, u);
        else {
          var T = !dc(e, u), x = e.current.alternate;
          if (T && !TN(x)) {
            if (m = Gy(e, u), m === Vc) {
              var z = wp(e);
              z !== q && (u = z, m = xS(e, z));
            }
            if (m === Lv) {
              var M = Uv;
              throw Fc(e, q), Ls(e, u), vi(e, xn()), M;
            }
          }
          e.finishedWork = x, e.finishedLanes = u, wN(e, m, u);
        }
      }
      return vi(e, xn()), e.callbackNode === a ? hR.bind(null, e) : null;
    }
    function xS(e, t) {
      var a = jv;
      if (Jn(e)) {
        var i = Fc(e, t);
        i.flags |= Ln, WO(e.containerInfo);
      }
      var u = Gy(e, t);
      if (u !== Vc) {
        var f = pi;
        pi = a, f !== null && mR(f);
      }
      return u;
    }
    function mR(e) {
      pi === null ? pi = e : pi.push.apply(pi, e);
    }
    function wN(e, t, a) {
      switch (t) {
        case Tl:
        case Lv:
          throw new Error("Root did not complete. This is a bug in React.");
        case Vc: {
          Hc(e, pi, Ol);
          break;
        }
        case Vy: {
          if (Ls(e, a), jf(a) && // do not delay if we're inside an act() scope
          !kR()) {
            var i = ES + fR - xn();
            if (i > 10) {
              var u = cc(e, q);
              if (u !== q)
                break;
              var f = e.suspendedLanes;
              if (!ll(f, a)) {
                Pa(), Np(e, f);
                break;
              }
              e.timeoutHandle = w_(Hc.bind(null, e, pi, Ol), i);
              break;
            }
          }
          Hc(e, pi, Ol);
          break;
        }
        case Mv: {
          if (Ls(e, a), nm(a))
            break;
          if (!kR()) {
            var m = tm(e, a), g = m, E = xn() - g, T = YN(E) - E;
            if (T > 10) {
              e.timeoutHandle = w_(Hc.bind(null, e, pi, Ol), T);
              break;
            }
          }
          Hc(e, pi, Ol);
          break;
        }
        case cR: {
          Hc(e, pi, Ol);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function TN(e) {
      for (var t = e; ; ) {
        if (t.flags & rc) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var f = i[u], m = f.getSnapshot, g = f.value;
                try {
                  if (!ze(m(), g))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var E = t.child;
        if (t.subtreeFlags & rc && E !== null) {
          E.return = t, t = E;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Ls(e, t) {
      t = rs(t, Fy), t = rs(t, zv), Dp(e, t);
    }
    function yR(e) {
      if (Gx(), (Vt & (Jr | Ji)) !== Rr)
        throw new Error("Should not already be working.");
      Dl();
      var t = cc(e, q);
      if (!ma(t, it))
        return vi(e, xn()), null;
      var a = Gy(e, t);
      if (e.tag !== Ss && a === Vc) {
        var i = wp(e);
        i !== q && (t = i, a = xS(e, i));
      }
      if (a === Lv) {
        var u = Uv;
        throw Fc(e, q), Ls(e, t), vi(e, xn()), u;
      }
      if (a === bS)
        throw new Error("Root did not complete. This is a bug in React.");
      var f = e.current.alternate;
      return e.finishedWork = f, e.finishedLanes = t, Hc(e, pi, Ol), vi(e, xn()), null;
    }
    function ON(e, t) {
      t !== q && (as(e, _t(t, it)), vi(e, xn()), (Vt & (Jr | Ji)) === Rr && (Vv(), Es()));
    }
    function DS(e, t) {
      var a = Vt;
      Vt |= sR;
      try {
        return e(t);
      } finally {
        Vt = a, Vt === Rr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Ho.isBatchingLegacy && (Vv(), p0());
      }
    }
    function xN(e, t, a, i, u) {
      var f = oi(), m = Zr.transition;
      try {
        return Zr.transition = null, Zn(Lr), e(t, a, i, u);
      } finally {
        Zn(f), Zr.transition = m, Vt === Rr && Vv();
      }
    }
    function xl(e) {
      ks !== null && ks.tag === Ss && (Vt & (Jr | Ji)) === Rr && Dl();
      var t = Vt;
      Vt |= sR;
      var a = Zr.transition, i = oi();
      try {
        return Zr.transition = null, Zn(Lr), e ? e() : void 0;
      } finally {
        Zn(i), Zr.transition = a, Vt = t, (Vt & (Jr | Ji)) === Rr && Es();
      }
    }
    function gR() {
      return (Vt & (Jr | Ji)) !== Rr;
    }
    function Wy(e, t) {
      ga(SS, Au, e), Au = _t(Au, t);
    }
    function NS(e) {
      Au = SS.current, ya(SS, e);
    }
    function Fc(e, t) {
      e.finishedWork = null, e.finishedLanes = q;
      var a = e.timeoutHandle;
      if (a !== T_ && (e.timeoutHandle = T_, nO(a)), Pn !== null)
        for (var i = Pn.return; i !== null; ) {
          var u = i.alternate;
          GC(u, i), i = i.return;
        }
      Va = e;
      var f = Bc(e.current, null);
      return Pn = f, wr = Au = t, Tr = Tl, Uv = null, Py = q, zv = q, Fy = q, jv = null, pi = null, Sx(), Lo.discardPendingWarnings(), f;
    }
    function _R(e, t) {
      do {
        var a = Pn;
        try {
          if (ey(), K0(), mn(), _S.current = null, a === null || a.return === null) {
            Tr = Lv, Uv = t, Pn = null;
            return;
          }
          if (He && a.mode & rt && Ay(a, !0), Fe)
            if (Ju(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Zh(a, i, wr);
            } else
              gf(a, t, wr);
          Zx(e, a.return, a, t, wr), CR(a);
        } catch (u) {
          t = u, Pn === a && a !== null ? (a = a.return, Pn = a) : a = Pn;
          continue;
        }
        return;
      } while (!0);
    }
    function bR() {
      var e = gS.current;
      return gS.current = Oy, e === null ? Oy : e;
    }
    function SR(e) {
      gS.current = e;
    }
    function DN() {
      ES = xn();
    }
    function Bv(e) {
      Py = _t(e, Py);
    }
    function NN() {
      Tr === Tl && (Tr = Vy);
    }
    function kS() {
      (Tr === Tl || Tr === Vy || Tr === Vc) && (Tr = Mv), Va !== null && (fc(Py) || fc(zv)) && Ls(Va, wr);
    }
    function kN(e) {
      Tr !== Mv && (Tr = Vc), jv === null ? jv = [e] : jv.push(e);
    }
    function AN() {
      return Tr === Tl;
    }
    function Gy(e, t) {
      var a = Vt;
      Vt |= Jr;
      var i = bR();
      if (Va !== e || wr !== t) {
        if (gr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Iv(e, wr), u.clear()), Ff(e, t);
        }
        Ol = Lp(), Fc(e, t);
      }
      wi(t);
      do
        try {
          LN();
          break;
        } catch (f) {
          _R(e, f);
        }
      while (!0);
      if (ey(), Vt = a, SR(i), Pn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Zl(), Va = null, wr = q, Tr;
    }
    function LN() {
      for (; Pn !== null; )
        ER(Pn);
    }
    function MN(e, t) {
      var a = Vt;
      Vt |= Jr;
      var i = bR();
      if (Va !== e || wr !== t) {
        if (gr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Iv(e, wr), u.clear()), Ff(e, t);
        }
        Ol = Lp(), Vv(), Fc(e, t);
      }
      wi(t);
      do
        try {
          UN();
          break;
        } catch (f) {
          _R(e, f);
        }
      while (!0);
      return ey(), SR(i), Vt = a, Pn !== null ? (oc(), Tl) : (Zl(), Va = null, wr = q, Tr);
    }
    function UN() {
      for (; Pn !== null && !df(); )
        ER(Pn);
    }
    function ER(e) {
      var t = e.alternate;
      Wt(e);
      var a;
      (e.mode & rt) !== et ? (Wb(e), a = AS(t, e, Au), Ay(e, !0)) : a = AS(t, e, Au), mn(), e.memoizedProps = e.pendingProps, a === null ? CR(e) : Pn = a, _S.current = null;
    }
    function CR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ka) === Xe) {
          Wt(t);
          var u = void 0;
          if ((t.mode & rt) === et ? u = WC(a, t, Au) : (Wb(t), u = WC(a, t, Au), Ay(t, !1)), mn(), u !== null) {
            Pn = u;
            return;
          }
        } else {
          var f = ND(a, t);
          if (f !== null) {
            f.flags &= Ih, Pn = f;
            return;
          }
          if ((t.mode & rt) !== et) {
            Ay(t, !1);
            for (var m = t.actualDuration, g = t.child; g !== null; )
              m += g.actualDuration, g = g.sibling;
            t.actualDuration = m;
          }
          if (i !== null)
            i.flags |= ka, i.subtreeFlags = Xe, i.deletions = null;
          else {
            Tr = bS, Pn = null;
            return;
          }
        }
        var E = t.sibling;
        if (E !== null) {
          Pn = E;
          return;
        }
        t = i, Pn = t;
      } while (t !== null);
      Tr === Tl && (Tr = cR);
    }
    function Hc(e, t, a) {
      var i = oi(), u = Zr.transition;
      try {
        Zr.transition = null, Zn(Lr), zN(e, t, a, i);
      } finally {
        Zr.transition = u, Zn(i);
      }
      return null;
    }
    function zN(e, t, a, i) {
      do
        Dl();
      while (ks !== null);
      if (GN(), (Vt & (Jr | Ji)) !== Rr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, f = e.finishedLanes;
      if (hf(f), u === null)
        return bp(), null;
      if (f === q && _("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = q, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = jt;
      var m = _t(u.lanes, u.childLanes);
      kp(e, m), e === Va && (Va = null, Pn = null, wr = q), ((u.subtreeFlags & ni) !== Xe || (u.flags & ni) !== Xe) && (Pc || (Pc = !0, wS = a, US(Ii, function() {
        return Dl(), null;
      })));
      var g = (u.subtreeFlags & (Kl | da | Ar | ni)) !== Xe, E = (u.flags & (Kl | da | Ar | ni)) !== Xe;
      if (g || E) {
        var T = Zr.transition;
        Zr.transition = null;
        var x = oi();
        Zn(Lr);
        var z = Vt;
        Vt |= Ji, _S.current = null, UD(e, u), bC(), KD(e, u, f), KT(e.containerInfo), e.current = u, Jh(f), XD(u, e, f), ql(), Wh(), Vt = z, Zn(x), Zr.transition = T;
      } else
        e.current = u, bC();
      var M = Pc;
      if (Pc ? (Pc = !1, ks = e, Pv = f) : (Dd = 0, Iy = null), m = e.pendingLanes, m === q && (xd = null), M || OR(e.current, !1), Co(u.stateNode, i), gr && e.memoizedUpdaters.clear(), hN(), vi(e, xn()), t !== null)
        for (var $ = e.onRecoverableError, Y = 0; Y < t.length; Y++) {
          var Q = t[Y], Oe = Q.stack, Je = Q.digest;
          $(Q.value, {
            componentStack: Oe,
            digest: Je
          });
        }
      if (Hy) {
        Hy = !1;
        var Ge = CS;
        throw CS = null, Ge;
      }
      return ma(Pv, it) && e.tag !== Ss && Dl(), m = e.pendingLanes, ma(m, it) ? (Yx(), e === TS ? Fv++ : (Fv = 0, TS = e)) : Fv = 0, Es(), bp(), null;
    }
    function Dl() {
      if (ks !== null) {
        var e = hc(Pv), t = Xg(To, e), a = Zr.transition, i = oi();
        try {
          return Zr.transition = null, Zn(t), VN();
        } finally {
          Zn(i), Zr.transition = a;
        }
      }
      return !1;
    }
    function jN(e) {
      RS.push(e), Pc || (Pc = !0, US(Ii, function() {
        return Dl(), null;
      }));
    }
    function VN() {
      if (ks === null)
        return !1;
      var e = wS;
      wS = null;
      var t = ks, a = Pv;
      if (ks = null, Pv = q, (Vt & (Jr | Ji)) !== Rr)
        throw new Error("Cannot flush passive effects while already rendering.");
      OS = !0, By = !1, em(a);
      var i = Vt;
      Vt |= Ji, rN(t.current), JD(t, t.current, a, e);
      {
        var u = RS;
        RS = [];
        for (var f = 0; f < u.length; f++) {
          var m = u[f];
          PD(t, m);
        }
      }
      ic(), OR(t.current, !0), Vt = i, Es(), By ? t === Iy ? Dd++ : (Dd = 0, Iy = t) : Dd = 0, OS = !1, By = !1, du(t);
      {
        var g = t.current.stateNode;
        g.effectDuration = 0, g.passiveEffectDuration = 0;
      }
      return !0;
    }
    function RR(e) {
      return xd !== null && xd.has(e);
    }
    function PN(e) {
      xd === null ? xd = /* @__PURE__ */ new Set([e]) : xd.add(e);
    }
    function FN(e) {
      Hy || (Hy = !0, CS = e);
    }
    var HN = FN;
    function wR(e, t, a) {
      var i = zc(a, t), u = EC(e, i, it), f = Rs(e, u, it), m = Pa();
      f !== null && (sl(f, it, m), vi(f, m));
    }
    function Sn(e, t, a) {
      if (AD(a), $v(!1), e.tag === X) {
        wR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === X) {
          wR(i, e, a);
          return;
        } else if (i.tag === B) {
          var u = i.type, f = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && !RR(f)) {
            var m = zc(a, e), g = Zb(i, m, it), E = Rs(i, g, it), T = Pa();
            E !== null && (sl(E, it, T), vi(E, T));
            return;
          }
        }
        i = i.return;
      }
      _(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function BN(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Pa();
      Np(e, a), qN(e), Va === e && ll(wr, a) && (Tr === Mv || Tr === Vy && jf(wr) && xn() - ES < fR ? Fc(e, q) : Fy = _t(Fy, a)), vi(e, u);
    }
    function TR(e, t) {
      t === jt && (t = EN(e));
      var a = Pa(), i = fi(e, t);
      i !== null && (sl(i, t, a), vi(i, a));
    }
    function IN(e) {
      var t = e.memoizedState, a = jt;
      t !== null && (a = t.retryLane), TR(e, a);
    }
    function $N(e, t) {
      var a = jt, i;
      switch (e.tag) {
        case fe:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case Dt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), TR(e, a);
    }
    function YN(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : gN(e / 1960) * 1960;
    }
    function WN() {
      if (Fv > bN)
        throw Fv = 0, TS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Dd > SN && (Dd = 0, Iy = null, _("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function GN() {
      Lo.flushLegacyContextWarning(), Lo.flushPendingUnsafeLifecycleWarnings();
    }
    function OR(e, t) {
      Wt(e), Qy(e, fa, dN), t && Qy(e, Zu, pN), Qy(e, fa, cN), t && Qy(e, Zu, fN), mn();
    }
    function Qy(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var f = i.subtreeFlags & t;
        i !== u && i.child !== null && f !== Xe ? i = i.child : ((i.flags & t) !== Xe && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Ky = null;
    function xR(e) {
      {
        if ((Vt & Jr) !== Rr || !(e.mode & Ot))
          return;
        var t = e.tag;
        if (t !== ie && t !== X && t !== B && t !== L && t !== be && t !== de && t !== Ce)
          return;
        var a = lt(e) || "ReactComponent";
        if (Ky !== null) {
          if (Ky.has(a))
            return;
          Ky.add(a);
        } else
          Ky = /* @__PURE__ */ new Set([a]);
        var i = vn;
        try {
          Wt(e), _("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Wt(e) : mn();
        }
      }
    }
    var AS;
    {
      var QN = null;
      AS = function(e, t, a) {
        var i = zR(QN, t);
        try {
          return HC(e, t, a);
        } catch (f) {
          if (ux() || f !== null && typeof f == "object" && typeof f.then == "function")
            throw f;
          if (ey(), K0(), GC(e, t), zR(t, i), t.mode & rt && Wb(t), qu(null, HC, null, e, t, a), Ig()) {
            var u = sp();
            typeof u == "object" && u !== null && u._suppressLogging && typeof f == "object" && f !== null && !f._suppressLogging && (f._suppressLogging = !0);
          }
          throw f;
        }
      };
    }
    var DR = !1, LS;
    LS = /* @__PURE__ */ new Set();
    function KN(e) {
      if (kr && !Bx())
        switch (e.tag) {
          case L:
          case be:
          case Ce: {
            var t = Pn && lt(Pn) || "Unknown", a = t;
            if (!LS.has(a)) {
              LS.add(a);
              var i = lt(e) || "Unknown";
              _("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case B: {
            DR || (_("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), DR = !0);
            break;
          }
        }
    }
    function Iv(e, t) {
      if (gr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Ap(e, i, t);
        });
      }
    }
    var MS = {};
    function US(e, t) {
      {
        var a = Ho.current;
        return a !== null ? (a.push(t), MS) : ff(e, t);
      }
    }
    function NR(e) {
      if (e !== MS)
        return Yh(e);
    }
    function kR() {
      return Ho.current !== null;
    }
    function XN(e) {
      {
        if (e.mode & Ot) {
          if (!lR())
            return;
        } else if (!yN() || Vt !== Rr || e.tag !== L && e.tag !== be && e.tag !== Ce)
          return;
        if (Ho.current === null) {
          var t = vn;
          try {
            Wt(e), _(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, lt(e));
          } finally {
            t ? Wt(e) : mn();
          }
        }
      }
    }
    function qN(e) {
      e.tag !== Ss && lR() && Ho.current === null && _(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function $v(e) {
      vR = e;
    }
    var eo = null, Nd = null, ZN = function(e) {
      eo = e;
    };
    function kd(e) {
      {
        if (eo === null)
          return e;
        var t = eo(e);
        return t === void 0 ? e : t.current;
      }
    }
    function zS(e) {
      return kd(e);
    }
    function jS(e) {
      {
        if (eo === null)
          return e;
        var t = eo(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = kd(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: At,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function AR(e, t) {
      {
        if (eo === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, f = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case B: {
            typeof i == "function" && (u = !0);
            break;
          }
          case L: {
            (typeof i == "function" || f === Gn) && (u = !0);
            break;
          }
          case be: {
            (f === At || f === Gn) && (u = !0);
            break;
          }
          case de:
          case Ce: {
            (f === Ui || f === Gn) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var m = eo(a);
          if (m !== void 0 && m === eo(i))
            return !0;
        }
        return !1;
      }
    }
    function LR(e) {
      {
        if (eo === null || typeof WeakSet != "function")
          return;
        Nd === null && (Nd = /* @__PURE__ */ new WeakSet()), Nd.add(e);
      }
    }
    var JN = function(e, t) {
      {
        if (eo === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Dl(), xl(function() {
          VS(e.current, i, a);
        });
      }
    }, ek = function(e, t) {
      {
        if (e.context !== Oi)
          return;
        Dl(), xl(function() {
          Yv(t, e, null, null);
        });
      }
    };
    function VS(e, t, a) {
      {
        var i = e.alternate, u = e.child, f = e.sibling, m = e.tag, g = e.type, E = null;
        switch (m) {
          case L:
          case Ce:
          case B:
            E = g;
            break;
          case be:
            E = g.render;
            break;
        }
        if (eo === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var T = !1, x = !1;
        if (E !== null) {
          var z = eo(E);
          z !== void 0 && (a.has(z) ? x = !0 : t.has(z) && (m === B ? x = !0 : T = !0));
        }
        if (Nd !== null && (Nd.has(e) || i !== null && Nd.has(i)) && (x = !0), x && (e._debugNeedsRemount = !0), x || T) {
          var M = fi(e, it);
          M !== null && Or(M, e, it, sn);
        }
        u !== null && !x && VS(u, t, a), f !== null && VS(f, t, a);
      }
    }
    var tk = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return PS(e.current, i, a), a;
      }
    };
    function PS(e, t, a) {
      {
        var i = e.child, u = e.sibling, f = e.tag, m = e.type, g = null;
        switch (f) {
          case L:
          case Ce:
          case B:
            g = m;
            break;
          case be:
            g = m.render;
            break;
        }
        var E = !1;
        g !== null && t.has(g) && (E = !0), E ? nk(e, a) : i !== null && PS(i, t, a), u !== null && PS(u, t, a);
      }
    }
    function nk(e, t) {
      {
        var a = rk(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case re:
              t.add(i.stateNode);
              return;
            case te:
              t.add(i.stateNode.containerInfo);
              return;
            case X:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function rk(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === re)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var FS;
    {
      FS = !1;
      try {
        var MR = Object.preventExtensions({});
      } catch {
        FS = !0;
      }
    }
    function ak(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Xe, this.subtreeFlags = Xe, this.deletions = null, this.lanes = q, this.childLanes = q, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !FS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var xi = function(e, t, a, i) {
      return new ak(e, t, a, i);
    };
    function HS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ik(e) {
      return typeof e == "function" && !HS(e) && e.defaultProps === void 0;
    }
    function ok(e) {
      if (typeof e == "function")
        return HS(e) ? B : L;
      if (e != null) {
        var t = e.$$typeof;
        if (t === At)
          return be;
        if (t === Ui)
          return de;
      }
      return ie;
    }
    function Bc(e, t) {
      var a = e.alternate;
      a === null ? (a = xi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Xe, a.subtreeFlags = Xe, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & yr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case ie:
        case L:
        case Ce:
          a.type = kd(e.type);
          break;
        case B:
          a.type = zS(e.type);
          break;
        case be:
          a.type = jS(e.type);
          break;
      }
      return a;
    }
    function uk(e, t) {
      e.flags &= yr | yn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = q, e.lanes = t, e.child = null, e.subtreeFlags = Xe, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Xe, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function lk(e, t, a) {
      var i;
      return e === Wm ? (i = Ot, t === !0 && (i |= Dn, i |= ai)) : i = et, gr && (i |= rt), xi(X, null, null, i);
    }
    function BS(e, t, a, i, u, f) {
      var m = ie, g = e;
      if (typeof e == "function")
        HS(e) ? (m = B, g = zS(g)) : g = kd(g);
      else if (typeof e == "string")
        m = re;
      else
        e:
          switch (e) {
            case wa:
              return Ms(a.children, u, f, t);
            case Mi:
              m = Ae, u |= Dn, (u & Ot) !== et && (u |= ai);
              break;
            case yi:
              return sk(a, u, f, t);
            case aa:
              return ck(a, u, f, t);
            case lo:
              return fk(a, u, f, t);
            case Fu:
              return UR(a, u, f, t);
            case Pl:
            case jl:
            case Fs:
            case Hs:
            case Vl:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case uo:
                    m = xt;
                    break e;
                  case Pu:
                    m = It;
                    break e;
                  case At:
                    m = be, g = jS(g);
                    break e;
                  case Ui:
                    m = de;
                    break e;
                  case Gn:
                    m = mt, g = null;
                    break e;
                }
              var E = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var T = i ? lt(i) : null;
                T && (E += `

Check the render method of \`` + T + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + E));
            }
          }
      var x = xi(m, a, t, u);
      return x.elementType = e, x.type = g, x.lanes = f, x._debugOwner = i, x;
    }
    function IS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, f = e.key, m = e.props, g = BS(u, f, m, i, t, a);
      return g._debugSource = e._source, g._debugOwner = e._owner, g;
    }
    function Ms(e, t, a, i) {
      var u = xi($e, e, i, t);
      return u.lanes = a, u;
    }
    function sk(e, t, a, i) {
      typeof e.id != "string" && _('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = xi(ye, e, i, t | rt);
      return u.elementType = yi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function ck(e, t, a, i) {
      var u = xi(fe, e, i, t);
      return u.elementType = aa, u.lanes = a, u;
    }
    function fk(e, t, a, i) {
      var u = xi(Dt, e, i, t);
      return u.elementType = lo, u.lanes = a, u;
    }
    function UR(e, t, a, i) {
      var u = xi(ot, e, i, t);
      u.elementType = Fu, u.lanes = a;
      var f = {
        isHidden: !1
      };
      return u.stateNode = f, u;
    }
    function $S(e, t, a) {
      var i = xi(De, e, null, t);
      return i.lanes = a, i;
    }
    function dk() {
      var e = xi(re, null, null, et);
      return e.elementType = "DELETED", e;
    }
    function pk(e) {
      var t = xi(Tt, null, null, et);
      return t.stateNode = e, t;
    }
    function YS(e, t, a) {
      var i = e.children !== null ? e.children : [], u = xi(te, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function zR(e, t) {
      return e === null && (e = xi(ie, null, null, et)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function vk(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = T_, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = jt, this.eventTimes = Pf(q), this.expirationTimes = Pf(sn), this.pendingLanes = q, this.suspendedLanes = q, this.pingedLanes = q, this.expiredLanes = q, this.mutableReadLanes = q, this.finishedLanes = q, this.entangledLanes = q, this.entanglements = Pf(q), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var f = this.pendingUpdatersLaneMap = [], m = 0; m < _n; m++)
          f.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Wm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Ss:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function jR(e, t, a, i, u, f, m, g, E, T) {
      var x = new vk(e, t, a, g, E), z = lk(t, f);
      x.current = z, z.stateNode = x;
      {
        var M = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        z.memoizedState = M;
      }
      return J_(z), x;
    }
    var WS = "18.2.0";
    function hk(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return rn(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Br,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var GS, QS;
    GS = !1, QS = {};
    function VR(e) {
      if (!e)
        return Oi;
      var t = Ja(e), a = ZO(t);
      if (t.tag === B) {
        var i = t.type;
        if (wu(i))
          return c0(t, i, a);
      }
      return a;
    }
    function mk(e, t) {
      {
        var a = Ja(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = ri(a);
        if (u === null)
          return null;
        if (u.mode & Dn) {
          var f = lt(a) || "Component";
          if (!QS[f]) {
            QS[f] = !0;
            var m = vn;
            try {
              Wt(u), a.mode & Dn ? _("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, f) : _("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, f);
            } finally {
              m ? Wt(m) : mn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function PR(e, t, a, i, u, f, m, g) {
      var E = !1, T = null;
      return jR(e, t, E, T, a, i, u, f, m);
    }
    function FR(e, t, a, i, u, f, m, g, E, T) {
      var x = !0, z = jR(a, i, x, e, u, f, m, g, E);
      z.context = VR(null);
      var M = z.current, $ = Pa(), Y = As(M), Q = Rl($, Y);
      return Q.callback = t ?? null, Rs(M, Q, Y), CN(z, Y, $), z;
    }
    function Yv(e, t, a, i) {
      Gh(t, e);
      var u = t.current, f = Pa(), m = As(u);
      el(m);
      var g = VR(a);
      t.context === null ? t.context = g : t.pendingContext = g, kr && vn !== null && !GS && (GS = !0, _(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, lt(vn) || "Unknown"));
      var E = Rl(f, m);
      E.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && _("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), E.callback = i);
      var T = Rs(u, E, m);
      return T !== null && (Or(T, u, m, f), iy(T, u, m)), m;
    }
    function Xy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case re:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function yk(e) {
      switch (e.tag) {
        case X: {
          var t = e.stateNode;
          if (Jn(t)) {
            var a = Wg(t);
            ON(t, a);
          }
          break;
        }
        case fe: {
          xl(function() {
            var u = fi(e, it);
            if (u !== null) {
              var f = Pa();
              Or(u, e, it, f);
            }
          });
          var i = it;
          KS(e, i);
          break;
        }
      }
    }
    function HR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = im(a.retryLane, t));
    }
    function KS(e, t) {
      HR(e, t);
      var a = e.alternate;
      a && HR(a, t);
    }
    function gk(e) {
      if (e.tag === fe) {
        var t = Jl, a = fi(e, t);
        if (a !== null) {
          var i = Pa();
          Or(a, e, t, i);
        }
        KS(e, t);
      }
    }
    function _k(e) {
      if (e.tag === fe) {
        var t = As(e), a = fi(e, t);
        if (a !== null) {
          var i = Pa();
          Or(a, e, t, i);
        }
        KS(e, t);
      }
    }
    function BR(e) {
      var t = $h(e);
      return t === null ? null : t.stateNode;
    }
    var IR = function(e) {
      return null;
    };
    function bk(e) {
      return IR(e);
    }
    var $R = function(e) {
      return !1;
    };
    function Sk(e) {
      return $R(e);
    }
    var YR = null, WR = null, GR = null, QR = null, KR = null, XR = null, qR = null, ZR = null, JR = null;
    {
      var ew = function(e, t, a) {
        var i = t[a], u = Ze(e) ? e.slice() : Ct({}, e);
        return a + 1 === t.length ? (Ze(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = ew(e[i], t, a + 1), u);
      }, tw = function(e, t) {
        return ew(e, t, 0);
      }, nw = function(e, t, a, i) {
        var u = t[i], f = Ze(e) ? e.slice() : Ct({}, e);
        if (i + 1 === t.length) {
          var m = a[i];
          f[m] = f[u], Ze(f) ? f.splice(u, 1) : delete f[u];
        } else
          f[u] = nw(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return f;
      }, rw = function(e, t, a) {
        if (t.length !== a.length) {
          C("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              C("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return nw(e, t, a, 0);
      }, aw = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], f = Ze(e) ? e.slice() : Ct({}, e);
        return f[u] = aw(e[u], t, a + 1, i), f;
      }, iw = function(e, t, a) {
        return aw(e, t, 0, a);
      }, XS = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      YR = function(e, t, a, i) {
        var u = XS(e, t);
        if (u !== null) {
          var f = iw(u.memoizedState, a, i);
          u.memoizedState = f, u.baseState = f, e.memoizedProps = Ct({}, e.memoizedProps);
          var m = fi(e, it);
          m !== null && Or(m, e, it, sn);
        }
      }, WR = function(e, t, a) {
        var i = XS(e, t);
        if (i !== null) {
          var u = tw(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Ct({}, e.memoizedProps);
          var f = fi(e, it);
          f !== null && Or(f, e, it, sn);
        }
      }, GR = function(e, t, a, i) {
        var u = XS(e, t);
        if (u !== null) {
          var f = rw(u.memoizedState, a, i);
          u.memoizedState = f, u.baseState = f, e.memoizedProps = Ct({}, e.memoizedProps);
          var m = fi(e, it);
          m !== null && Or(m, e, it, sn);
        }
      }, QR = function(e, t, a) {
        e.pendingProps = iw(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = fi(e, it);
        i !== null && Or(i, e, it, sn);
      }, KR = function(e, t) {
        e.pendingProps = tw(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = fi(e, it);
        a !== null && Or(a, e, it, sn);
      }, XR = function(e, t, a) {
        e.pendingProps = rw(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = fi(e, it);
        i !== null && Or(i, e, it, sn);
      }, qR = function(e) {
        var t = fi(e, it);
        t !== null && Or(t, e, it, sn);
      }, ZR = function(e) {
        IR = e;
      }, JR = function(e) {
        $R = e;
      };
    }
    function Ek(e) {
      var t = ri(e);
      return t === null ? null : t.stateNode;
    }
    function Ck(e) {
      return null;
    }
    function Rk() {
      return vn;
    }
    function wk(e) {
      var t = e.findFiberByHostInstance, a = p.ReactCurrentDispatcher;
      return gp({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: YR,
        overrideHookStateDeletePath: WR,
        overrideHookStateRenamePath: GR,
        overrideProps: QR,
        overridePropsDeletePath: KR,
        overridePropsRenamePath: XR,
        setErrorHandler: ZR,
        setSuspenseHandler: JR,
        scheduleUpdate: qR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Ek,
        findFiberByHostInstance: t || Ck,
        // React Refresh
        findHostInstancesForRefresh: tk,
        scheduleRefresh: JN,
        scheduleRoot: ek,
        setRefreshHandler: ZN,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Rk,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: WS
      });
    }
    var ow = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function qS(e) {
      this._internalRoot = e;
    }
    qy.prototype.render = qS.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? _("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Zy(arguments[1]) ? _("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && _("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Bn) {
          var i = BR(t.current);
          i && i.parentNode !== a && _("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Yv(e, t, null, null);
    }, qy.prototype.unmount = qS.prototype.unmount = function() {
      typeof arguments[0] == "function" && _("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        gR() && _("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), xl(function() {
          Yv(null, e, null, null);
        }), i0(t);
      }
    };
    function Tk(e, t) {
      if (!Zy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      uw(e);
      var a = !1, i = !1, u = "", f = ow;
      t != null && (t.hydrate ? C("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Li && _(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (f = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var m = PR(e, Wm, null, a, i, u, f);
      Pm(m.current, e);
      var g = e.nodeType === Bn ? e.parentNode : e;
      return Jp(g), new qS(m);
    }
    function qy(e) {
      this._internalRoot = e;
    }
    function Ok(e) {
      e && pm(e);
    }
    qy.prototype.unstable_scheduleHydration = Ok;
    function xk(e, t, a) {
      if (!Zy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      uw(e), t === void 0 && _("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, f = !1, m = !1, g = "", E = ow;
      a != null && (a.unstable_strictMode === !0 && (f = !0), a.identifierPrefix !== void 0 && (g = a.identifierPrefix), a.onRecoverableError !== void 0 && (E = a.onRecoverableError));
      var T = FR(t, null, e, Wm, i, f, m, g, E);
      if (Pm(T.current, e), Jp(e), u)
        for (var x = 0; x < u.length; x++) {
          var z = u[x];
          zx(T, z);
        }
      return new qy(T);
    }
    function Zy(e) {
      return !!(e && (e.nodeType === la || e.nodeType === Ei || e.nodeType === Yu || !ee));
    }
    function Wv(e) {
      return !!(e && (e.nodeType === la || e.nodeType === Ei || e.nodeType === Yu || e.nodeType === Bn && e.nodeValue === " react-mount-point-unstable "));
    }
    function uw(e) {
      e.nodeType === la && e.tagName && e.tagName.toUpperCase() === "BODY" && _("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), cv(e) && (e._reactRootContainer ? _("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : _("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Dk = p.ReactCurrentOwner, lw;
    lw = function(e) {
      if (e._reactRootContainer && e.nodeType !== Bn) {
        var t = BR(e._reactRootContainer.current);
        t && t.parentNode !== e && _("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = ZS(e), u = !!(i && _s(i));
      u && !a && _("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === la && e.tagName && e.tagName.toUpperCase() === "BODY" && _("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function ZS(e) {
      return e ? e.nodeType === Ei ? e.documentElement : e.firstChild : null;
    }
    function sw() {
    }
    function Nk(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var f = i;
          i = function() {
            var M = Xy(m);
            f.call(M);
          };
        }
        var m = FR(
          t,
          i,
          e,
          Ss,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          sw
        );
        e._reactRootContainer = m, Pm(m.current, e);
        var g = e.nodeType === Bn ? e.parentNode : e;
        return Jp(g), xl(), m;
      } else {
        for (var E; E = e.lastChild; )
          e.removeChild(E);
        if (typeof i == "function") {
          var T = i;
          i = function() {
            var M = Xy(x);
            T.call(M);
          };
        }
        var x = PR(
          e,
          Ss,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          sw
        );
        e._reactRootContainer = x, Pm(x.current, e);
        var z = e.nodeType === Bn ? e.parentNode : e;
        return Jp(z), xl(function() {
          Yv(t, x, a, i);
        }), x;
      }
    }
    function kk(e, t) {
      e !== null && typeof e != "function" && _("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Jy(e, t, a, i, u) {
      lw(a), kk(u === void 0 ? null : u, "render");
      var f = a._reactRootContainer, m;
      if (!f)
        m = Nk(a, t, e, u, i);
      else {
        if (m = f, typeof u == "function") {
          var g = u;
          u = function() {
            var E = Xy(m);
            g.call(E);
          };
        }
        Yv(t, m, e, u);
      }
      return Xy(m);
    }
    function Ak(e) {
      {
        var t = Dk.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || _("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Rt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === la ? e : mk(e, "findDOMNode");
    }
    function Lk(e, t, a) {
      if (_("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Wv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cv(t) && t._reactRootContainer === void 0;
        i && _("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Jy(null, e, t, !0, a);
    }
    function Mk(e, t, a) {
      if (_("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Wv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cv(t) && t._reactRootContainer === void 0;
        i && _("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Jy(null, e, t, !1, a);
    }
    function Uk(e, t, a, i) {
      if (_("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Wv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !nc(e))
        throw new Error("parentComponent must be a valid React Component");
      return Jy(e, t, a, !1, i);
    }
    function zk(e) {
      if (!Wv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = cv(e) && e._reactRootContainer === void 0;
        t && _("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = ZS(e), i = a && !_s(a);
          i && _("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return xl(function() {
          Jy(null, null, e, !1, function() {
            e._reactRootContainer = null, i0(e);
          });
        }), !0;
      } else {
        {
          var u = ZS(e), f = !!(u && _s(u)), m = e.nodeType === la && Wv(e.parentNode) && !!e.parentNode._reactRootContainer;
          f && _("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", m ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    ke(yk), um(gk), yc(_k), Up(oi), sm(vc), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && _("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Hh(PT), of(DS, xN, xl);
    function jk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Zy(t))
        throw new Error("Target container is not a DOM element.");
      return hk(e, t, null, a);
    }
    function Vk(e, t, a, i) {
      return Uk(e, t, a, i);
    }
    var JS = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [_s, ld, Fm, af, Js, DS]
    };
    function Pk(e, t) {
      return JS.usingClientEntryPoint || _('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Tk(e, t);
    }
    function Fk(e, t, a) {
      return JS.usingClientEntryPoint || _('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), xk(e, t, a);
    }
    function Hk(e) {
      return gR() && _("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), xl(e);
    }
    var Bk = wk({
      findFiberByHostInstance: Oc,
      bundleType: 1,
      version: WS,
      rendererPackageName: "react-dom"
    });
    if (!Bk && nn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var cw = window.location.protocol;
      /^(https?|file):$/.test(cw) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (cw === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    mi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = JS, mi.createPortal = jk, mi.createRoot = Pk, mi.findDOMNode = Ak, mi.flushSync = Hk, mi.hydrate = Lk, mi.hydrateRoot = Fk, mi.render = Mk, mi.unmountComponentAtNode = zk, mi.unstable_batchedUpdates = DS, mi.unstable_renderSubtreeIntoContainer = Vk, mi.version = WS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), mi;
}
function J1() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(J1);
    } catch (l) {
      console.error(l);
    }
  }
}
process.env.NODE_ENV === "production" ? (J1(), yE.exports = QL()) : yE.exports = KL();
var XL = yE.exports;
function qL(l) {
  l();
}
function ZL(l) {
  l || (l = qL, process.env.NODE_ENV !== "production" && console.warn("[MobX] Failed to get unstable_batched updates from react-dom / react-native")), _L({ reactionScheduler: l });
}
function JL(l) {
  return V1(l);
}
var eM = 1e4, tM = 1e4, nM = (
  /** @class */
  function() {
    function l(c) {
      var p = this;
      Object.defineProperty(this, "finalize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: c
      }), Object.defineProperty(this, "registrations", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /* @__PURE__ */ new Map()
      }), Object.defineProperty(this, "sweepTimeout", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "sweep", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: function(h) {
          h === void 0 && (h = eM), clearTimeout(p.sweepTimeout), p.sweepTimeout = void 0;
          var b = Date.now();
          p.registrations.forEach(function(C, _) {
            b - C.registeredAt >= h && (p.finalize(C.value), p.registrations.delete(_));
          }), p.registrations.size > 0 && p.scheduleSweep();
        }
      }), Object.defineProperty(this, "finalizeAllImmediately", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: function() {
          p.sweep(0);
        }
      });
    }
    return Object.defineProperty(l.prototype, "register", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function(c, p, h) {
        this.registrations.set(h, {
          value: p,
          registeredAt: Date.now()
        }), this.scheduleSweep();
      }
    }), Object.defineProperty(l.prototype, "unregister", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function(c) {
        this.registrations.delete(c);
      }
    }), Object.defineProperty(l.prototype, "scheduleSweep", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function() {
        this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, tM));
      }
    }), l;
  }()
), rM = typeof FinalizationRegistry < "u" ? FinalizationRegistry : nM, ah = new rM(function(l) {
  var c;
  (c = l.reaction) === null || c === void 0 || c.dispose(), l.reaction = null;
}), gE = { exports: {} }, aE = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jw;
function aM() {
  if (jw)
    return aE;
  jw = 1;
  var l = Ca;
  function c(X, te) {
    return X === te && (X !== 0 || 1 / X === 1 / te) || X !== X && te !== te;
  }
  var p = typeof Object.is == "function" ? Object.is : c, h = l.useState, b = l.useEffect, C = l.useLayoutEffect, _ = l.useDebugValue;
  function A(X, te) {
    var re = te(), De = h({ inst: { value: re, getSnapshot: te } }), $e = De[0].inst, Ae = De[1];
    return C(function() {
      $e.value = re, $e.getSnapshot = te, L($e) && Ae({ inst: $e });
    }, [X, re, te]), b(function() {
      return L($e) && Ae({ inst: $e }), X(function() {
        L($e) && Ae({ inst: $e });
      });
    }, [X]), _(re), re;
  }
  function L(X) {
    var te = X.getSnapshot;
    X = X.value;
    try {
      var re = te();
      return !p(X, re);
    } catch {
      return !0;
    }
  }
  function B(X, te) {
    return te();
  }
  var ie = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? B : A;
  return aE.useSyncExternalStore = l.useSyncExternalStore !== void 0 ? l.useSyncExternalStore : ie, aE;
}
var iE = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vw;
function iM() {
  return Vw || (Vw = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var l = Ca, c = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(be) {
      {
        for (var ye = arguments.length, fe = new Array(ye > 1 ? ye - 1 : 0), de = 1; de < ye; de++)
          fe[de - 1] = arguments[de];
        h("error", be, fe);
      }
    }
    function h(be, ye, fe) {
      {
        var de = c.ReactDebugCurrentFrame, Ce = de.getStackAddendum();
        Ce !== "" && (ye += "%s", fe = fe.concat([Ce]));
        var mt = fe.map(function(Et) {
          return String(Et);
        });
        mt.unshift("Warning: " + ye), Function.prototype.apply.call(console[be], console, mt);
      }
    }
    function b(be, ye) {
      return be === ye && (be !== 0 || 1 / be === 1 / ye) || be !== be && ye !== ye;
    }
    var C = typeof Object.is == "function" ? Object.is : b, _ = l.useState, A = l.useEffect, L = l.useLayoutEffect, B = l.useDebugValue, ie = !1, X = !1;
    function te(be, ye, fe) {
      ie || l.startTransition !== void 0 && (ie = !0, p("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var de = ye();
      if (!X) {
        var Ce = ye();
        C(de, Ce) || (p("The result of getSnapshot should be cached to avoid an infinite loop"), X = !0);
      }
      var mt = _({
        inst: {
          value: de,
          getSnapshot: ye
        }
      }), Et = mt[0].inst, Tt = mt[1];
      return L(function() {
        Et.value = de, Et.getSnapshot = ye, re(Et) && Tt({
          inst: Et
        });
      }, [be, de, ye]), A(function() {
        re(Et) && Tt({
          inst: Et
        });
        var Dt = function() {
          re(Et) && Tt({
            inst: Et
          });
        };
        return be(Dt);
      }, [be]), B(de), de;
    }
    function re(be) {
      var ye = be.getSnapshot, fe = be.value;
      try {
        var de = ye();
        return !C(fe, de);
      } catch {
        return !0;
      }
    }
    function De(be, ye, fe) {
      return ye();
    }
    var $e = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ae = !$e, It = Ae ? De : te, xt = l.useSyncExternalStore !== void 0 ? l.useSyncExternalStore : It;
    iE.useSyncExternalStore = xt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), iE;
}
process.env.NODE_ENV === "production" ? gE.exports = aM() : gE.exports = iM();
var oM = gE.exports, uM = function() {
};
function Pw(l) {
  l.reaction = new Jv("observer".concat(l.name), function() {
    var c;
    l.stateVersion = Symbol(), (c = l.onStoreChange) === null || c === void 0 || c.call(l);
  });
}
function lM(l, c) {
  c === void 0 && (c = "observed");
  var p = $c.useRef(null);
  if (!p.current) {
    var h = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: c,
      subscribe: function(A) {
        return ah.unregister(h), h.onStoreChange = A, h.reaction || (Pw(h), h.stateVersion = Symbol()), function() {
          var L;
          h.onStoreChange = null, (L = h.reaction) === null || L === void 0 || L.dispose(), h.reaction = null;
        };
      },
      getSnapshot: function() {
        return h.stateVersion;
      }
    };
    p.current = h;
  }
  var b = p.current;
  b.reaction || (Pw(b), ah.register(p, b, b)), $c.useDebugValue(b.reaction, JL), oM.useSyncExternalStore(
    // Both of these must be stable, otherwise it would keep resubscribing every render.
    b.subscribe,
    b.getSnapshot,
    uM
  );
  var C, _;
  if (b.reaction.track(function() {
    try {
      C = l();
    } catch (A) {
      _ = A;
    }
  }), _)
    throw _;
  return C;
}
var Fw = !0, eT = typeof Symbol == "function" && Symbol.for, Hw = eT ? Symbol.for("react.forward_ref") : typeof Ca.forwardRef == "function" && Ca.forwardRef(function(l) {
  return null;
}).$$typeof, Bw = eT ? Symbol.for("react.memo") : typeof Ca.memo == "function" && Ca.memo(function(l) {
  return null;
}).$$typeof;
function sM(l, c) {
  var p;
  if (process.env.NODE_ENV !== "production" && Fw && c && (Fw = !1, console.warn("[mobx-react-lite] `observer(fn, { forwardRef: true })` is deprecated, use `observer(React.forwardRef(fn))`")), Bw && l.$$typeof === Bw)
    throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");
  var h = (p = c == null ? void 0 : c.forwardRef) !== null && p !== void 0 ? p : !1, b = l, C = l.displayName || l.name;
  if (Hw && l.$$typeof === Hw && (h = !0, b = l.render, typeof b != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var _ = function(A, L) {
    return lM(function() {
      return b(A, L);
    }, C);
  };
  return _.displayName = l.displayName, Object.defineProperty(_, "name", {
    value: l.name,
    writable: !0,
    configurable: !0
  }), l.contextTypes && (_.contextTypes = l.contextTypes), h && (_ = Ca.forwardRef(_)), _ = Ca.memo(_), fM(l, _), process.env.NODE_ENV !== "production" && Object.defineProperty(_, "contextTypes", {
    set: function() {
      var A, L;
      throw new Error("[mobx-react-lite] `".concat(this.displayName || ((A = this.type) === null || A === void 0 ? void 0 : A.displayName) || ((L = this.type) === null || L === void 0 ? void 0 : L.name) || "Component", ".contextTypes` must be set before applying `observer`."));
    }
  }), _;
}
var cM = {
  $$typeof: !0,
  render: !0,
  compare: !0,
  type: !0,
  // Don't redefine `displayName`,
  // it's defined as getter-setter pair on `memo` (see #3192).
  displayName: !0
};
function fM(l, c) {
  Object.keys(l).forEach(function(p) {
    cM[p] || Object.defineProperty(c, p, Object.getOwnPropertyDescriptor(l, p));
  });
}
process.env.NODE_ENV;
globalThis && globalThis.__read;
var oE;
ZL(XL.unstable_batchedUpdates);
oE = ah.finalizeAllImmediately;
function dM(l, c) {
  if (Iw(l, c))
    return !0;
  if (typeof l != "object" || l === null || typeof c != "object" || c === null)
    return !1;
  var p = Object.keys(l), h = Object.keys(c);
  if (p.length !== h.length)
    return !1;
  for (var b = 0; b < p.length; b++)
    if (!Object.hasOwnProperty.call(c, p[b]) || !Iw(l[p[b]], c[p[b]]))
      return !1;
  return !0;
}
function Iw(l, c) {
  return l === c ? l !== 0 || 1 / l === 1 / c : l !== l && c !== c;
}
var pM = {
  $$typeof: 1,
  render: 1,
  compare: 1,
  type: 1,
  childContextTypes: 1,
  contextType: 1,
  contextTypes: 1,
  defaultProps: 1,
  getDefaultProps: 1,
  getDerivedStateFromError: 1,
  getDerivedStateFromProps: 1,
  mixins: 1,
  displayName: 1,
  propTypes: 1
};
function vM(l, c) {
  var p = Object.getOwnPropertyNames(Object.getPrototypeOf(l));
  Object.getOwnPropertyNames(l).forEach(function(h) {
    !pM[h] && p.indexOf(h) === -1 && Object.defineProperty(c, h, Object.getOwnPropertyDescriptor(l, h));
  });
}
var $w = /* @__PURE__ */ Symbol("patchMixins"), tT = /* @__PURE__ */ Symbol("patchedDefinition");
function hM(l, c) {
  var p = l[$w] = l[$w] || {}, h = p[c] = p[c] || {};
  return h.locks = h.locks || 0, h.methods = h.methods || [], h;
}
function Yw(l, c) {
  for (var p = this, h = arguments.length, b = new Array(h > 2 ? h - 2 : 0), C = 2; C < h; C++)
    b[C - 2] = arguments[C];
  c.locks++;
  try {
    var _;
    return l != null && (_ = l.apply(this, b)), _;
  } finally {
    c.locks--, c.locks === 0 && c.methods.forEach(function(A) {
      A.apply(p, b);
    });
  }
}
function Ww(l, c) {
  var p = function() {
    for (var b = arguments.length, C = new Array(b), _ = 0; _ < b; _++)
      C[_] = arguments[_];
    Yw.call.apply(Yw, [this, l, c].concat(C));
  };
  return p;
}
function mM(l, c, p) {
  var h = hM(l, c);
  h.methods.indexOf(p) < 0 && h.methods.push(p);
  var b = Object.getOwnPropertyDescriptor(l, c);
  if (!(b && b[tT])) {
    var C = l[c], _ = nT(l, c, b ? b.enumerable : void 0, h, C);
    Object.defineProperty(l, c, _);
  }
}
function nT(l, c, p, h, b) {
  var C, _ = Ww(b, h);
  return C = {}, C[tT] = !0, C.get = function() {
    return _;
  }, C.set = function(L) {
    if (this === l)
      _ = Ww(L, h);
    else {
      var B = nT(this, c, p, h, L);
      Object.defineProperty(this, c, B);
    }
  }, C.configurable = !0, C.enumerable = p, C;
}
var Gw = /* @__PURE__ */ Symbol("ObserverAdministration"), Qw = /* @__PURE__ */ Symbol("isMobXReactObserver"), rT;
process.env.NODE_ENV !== "production" && (rT = {
  props: /* @__PURE__ */ uE("props"),
  state: /* @__PURE__ */ uE("state"),
  context: /* @__PURE__ */ uE("context")
});
function ih(l) {
  var c;
  return (c = l[Gw]) != null ? c : l[Gw] = {
    reaction: null,
    mounted: !1,
    reactionInvalidatedBeforeMount: !1,
    forceUpdate: null,
    name: lg(l.constructor),
    state: void 0,
    props: void 0,
    context: void 0
  };
}
function yM(l) {
  var c = l.prototype;
  if (l[Qw]) {
    var p = lg(l);
    throw new Error("The provided component class (" + p + ") has already been declared as an observer component.");
  } else
    l[Qw] = !0;
  if (c.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (l.__proto__ !== Ca.PureComponent) {
    if (!c.shouldComponentUpdate)
      c.shouldComponentUpdate = Kw;
    else if (c.shouldComponentUpdate !== Kw)
      throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.");
  }
  process.env.NODE_ENV !== "production" && Object.defineProperties(c, rT);
  var h = c.render;
  if (typeof h != "function") {
    var b = lg(l);
    throw new Error("[mobx-react] class component (" + b + ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.");
  }
  c.render = function() {
    return Object.defineProperty(this, "render", {
      // There is no safe way to replace render, therefore it's forbidden.
      configurable: !1,
      writable: !1,
      value: gM.call(this, h)
    }), this.render();
  };
  var C = c.componentDidMount;
  return c.componentDidMount = function() {
    var _ = this;
    if (process.env.NODE_ENV !== "production" && this.componentDidMount !== Object.getPrototypeOf(this).componentDidMount) {
      var A = lg(l);
      throw new Error("[mobx-react] `observer(" + A + ").componentDidMount` must be defined on prototype.\n`componentDidMount = () => {}` or `componentDidMount = function() {}` is not supported.");
    }
    var L = ih(this);
    return L.mounted = !0, ah.unregister(L), L.forceUpdate = function() {
      return _.forceUpdate();
    }, (!L.reaction || L.reactionInvalidatedBeforeMount) && L.forceUpdate(), C == null ? void 0 : C.apply(this, arguments);
  }, mM(c, "componentWillUnmount", function() {
    var _, A = ih(this);
    (_ = A.reaction) == null || _.dispose(), A.reaction = null, A.forceUpdate = null, A.mounted = !1, A.reactionInvalidatedBeforeMount = !1;
  }), l;
}
function lg(l) {
  return l.displayName || l.name || "<component>";
}
function gM(l) {
  var c = l.bind(this), p = ih(this);
  function h() {
    p.reaction || (p.reaction = _M(p), p.mounted || ah.register(this, p, this));
    var b = void 0, C = void 0;
    if (p.reaction.track(function() {
      try {
        C = WA(!1, c);
      } catch (_) {
        b = _;
      }
    }), b)
      throw b;
    return C;
  }
  return h;
}
function _M(l) {
  return new Jv(l.name + ".render()", function() {
    if (!l.mounted) {
      l.reactionInvalidatedBeforeMount = !0;
      return;
    }
    try {
      l.forceUpdate == null || l.forceUpdate();
    } catch {
      var c;
      (c = l.reaction) == null || c.dispose(), l.reaction = null;
    }
  });
}
function Kw(l, c) {
  return this.state !== c ? !0 : !dM(this.props, l);
}
function uE(l) {
  return {
    configurable: !0,
    enumerable: !0,
    get: function() {
      var p = ih(this), h = ZA().trackingDerivation;
      if (h && h !== p.reaction)
        throw new Error('[mobx-react] Cannot read "' + p.name + "." + l + `" in a reactive context, as it isn't observable.
                    Please use component lifecycle method to copy the value into a local observable first.
                    See https://github.com/mobxjs/mobx/blob/main/packages/mobx-react/README.md#note-on-using-props-and-state-in-derivations`);
      return p[l];
    },
    set: function(p) {
      ih(this)[l] = p;
    }
  };
}
function aT(l) {
  return l.isMobxInjector === !0 && console.warn("Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`"), Object.prototype.isPrototypeOf.call(Ca.Component, l) || Object.prototype.isPrototypeOf.call(Ca.PureComponent, l) ? yM(l) : sM(l);
}
function _E() {
  return _E = Object.assign ? Object.assign.bind() : function(l) {
    for (var c = 1; c < arguments.length; c++) {
      var p = arguments[c];
      for (var h in p)
        Object.prototype.hasOwnProperty.call(p, h) && (l[h] = p[h]);
    }
    return l;
  }, _E.apply(this, arguments);
}
var bM = /* @__PURE__ */ $c.createContext({});
function Xw(l, c, p, h) {
  var b = $c.forwardRef(function(C, _) {
    var A = _E({}, C), L = $c.useContext(bM);
    return Object.assign(A, l(L || {}, A) || {}), _ && (A.ref = _), $c.createElement(c, A);
  });
  return h && (b = aT(b)), b.isMobxInjector = !0, vM(c, b), b.wrappedComponent = c, b.displayName = SM(c, p), b;
}
function SM(l, c) {
  var p, h = l.displayName || l.name || l.constructor && l.constructor.name || "Component";
  return c ? p = "inject-with-" + c + "(" + h + ")" : p = "inject(" + h + ")", p;
}
function EM(l) {
  return function(c, p) {
    return l.forEach(function(h) {
      if (!(h in p)) {
        if (!(h in c))
          throw new Error("MobX injector: Store '" + h + "' is not available! Make sure it is provided by some Provider");
        p[h] = c[h];
      }
    }), p;
  };
}
function CM() {
  for (var l = arguments.length, c = new Array(l), p = 0; p < l; p++)
    c[p] = arguments[p];
  if (typeof arguments[0] == "function") {
    var h = arguments[0];
    return function(b) {
      return Xw(h, b, h.name, !0);
    };
  } else
    return function(b) {
      return Xw(EM(c), b, c.join("-"), !1);
    };
}
$c.version.split(".")[0];
if (!Ca.Component)
  throw new Error("mobx-react requires React to be available");
if (!Pr)
  throw new Error("mobx-react requires mobx to be available");
const kM = CM("store")(aT((l) => {
  const c = l.store, { validFunction: p } = c, h = cn.useRef({
    dialogboxId: l.dialogboxId || 1001,
    isEmbedded: !1,
    dom: null,
    isMount: !0,
    timeout: 0
  }), { dialogboxId: b, dom: C, isMount: _ } = h.current, A = cn.useMemo(() => {
    let Le = 400, tt = 180;
    const { clientWidth: Yt, clientHeight: rn } = document.body;
    return l.width && typeof l.width == "number" ? l.width > Yt ? Le = Yt : Le = l.width : l.width && typeof l.width == "string" && l.width.includes("px") ? parseInt(l.width) > Yt ? Le = Yt : Le = parseInt(l.width) : l.width && typeof l.width == "string" && l.width.includes("%") && (parseInt(l.width) > 100 ? Le = Yt : Le = Yt * parseInt(l.width) / 100), l.height && typeof l.height == "number" ? l.height > rn ? tt = rn : tt = l.height : l.height && typeof l.height == "string" && l.height.includes("px") ? parseInt(l.height) > rn ? tt = rn : tt = parseInt(l.height) : l.height && typeof l.height == "string" && l.height.includes("%") && (parseInt(l.height) > 100 ? tt = rn : tt = rn * parseInt(l.height) / 100), [
      Le < 120 ? 120 : Le,
      tt < 120 ? 120 : tt,
      0 - 0.5 * tt,
      0 - 0.5 * Le
    ];
  }, []), [L, B, ie, X] = A, {
    draggable: te = !0,
    title: re,
    isModal: De,
    header: $e = !0,
    headerStyle: Ae,
    footer: It,
    okText: xt,
    cancelText: be,
    footerStyle: ye,
    className: fe
  } = l, [de, Ce] = cn.useState({
    visible: l.visible,
    width: L,
    height: B,
    toRight: 0,
    // 向右的偏移量
    toBottom: 0,
    // 向下的偏移量
    isExtend: !1,
    draggable: te,
    //是否可拖拽
    zIndex: b,
    // 控制层级    
    marginTop: ie,
    //让表单初始时保持居中
    marginLeft: X,
    //让表单初始时保持居中
    historyWidth: L,
    historyHeight: B,
    title: re,
    transition: "none",
    historyToBottom: 0,
    historyToRight: 0
  }), mt = () => {
    let Le = c.focusItem;
    if (!Le)
      return !0;
    let tt = Le.isModal;
    return !(Le.dialogboxId !== b && (tt || De));
  }, Et = (Le, tt) => {
    if (!mt())
      return;
    let { clientWidth: Yt, clientHeight: rn } = document.body, Ut, Bt, hn, wt, Tn = !1, { draggable: tn, isExtend: En, historyToBottom: Kt, historyToRight: zn, height: rr, width: Cn, historyWidth: ve, historyHeight: Me } = de;
    if (tt === !1 && !En)
      return;
    !En || tt ? (ve = Cn, Me = rr, Cn = Yt, rr = rn, Ut = 0, Bt = 0, hn = 0, tn = !1, Tn = !0, Le === "left" ? Cn *= 0.5 : Le === "right" && (Cn *= 0.5, hn = Cn)) : (tn = l.draggable !== !1, Cn = ve, rr = Me, hn = zn, wt = Kt, Ut = 0 - 0.5 * rr, Bt = 0 - 0.5 * Cn);
    const Ke = () => {
      const kt = {
        historyWidth: de.width,
        historyHeight: de.height,
        marginTop: Ut,
        marginLeft: Bt,
        toRight: hn,
        toBottom: wt,
        draggable: tn,
        historyToBottom: de.toBottom,
        historyToRight: de.toRight,
        isExtend: Tn,
        width: Cn,
        height: rr,
        transition: "0.4s"
      };
      Ce({
        ...de,
        ...kt
      }), setTimeout(() => Ce({
        ...de,
        ...kt,
        transition: "none"
      }), 400);
    };
    tt === !0 ? (Ke(), setTimeout(() => {
      Ke();
    }, 500)) : Ke();
  }, Tt = () => {
    p(l.afterClose);
  }, Dt = () => {
    p(l.onOk);
  }, fn = () => {
    p(l.onCancel);
  }, ot = () => {
    p(l.minimize);
  }, ht = () => {
    p(l.onCancel), p(l.close);
  }, Nt = () => c.focusZIndex === de.zIndex, bt = (Le) => {
    if (!mt())
      return;
    Le.stopPropagation();
    let tt = Le.clientX, Yt = Le.clientY, rn = de.toRight, Ut = de.toBottom;
    const Bt = (wt) => {
      window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
      let Tn = wt.clientX > 10 ? wt.clientX < document.body.clientWidth - 10 ? wt.clientX : document.body.clientWidth - 10 : 10, tn = wt.clientY > 10 ? wt.clientY < document.body.clientHeight - 10 ? wt.clientY : document.body.clientHeight - 10 : 10, En = Tn - tt + rn, Kt = tn - Yt + Ut;
      wt.clientX < 10 ? c.addMaskXY("left") : wt.clientX > document.body.clientWidth - 10 ? c.addMaskXY("right") : wt.clientY < 0 ? c.addMaskXY("top") : wt.clientY > document.body.clientHeight ? c.addMaskXY("bottom") : c.clearMaskXY(), Ce({
        ...de,
        zIndex: c.focusZIndex,
        toRight: En,
        toBottom: Kt
      });
    }, hn = (wt) => {
      c.clearMaskXY(), (wt.clientY < 0 || wt.clientY > document.body.clientHeight) && Et(), wt.clientX < 10 && Et("left"), wt.clientX > document.body.clientWidth - 10 && Et("right"), document.removeEventListener("mousemove", Bt), document.removeEventListener("mouseup", hn);
    };
    document.addEventListener("mousemove", Bt), document.addEventListener("mouseup", hn);
  }, J = (Le, tt, Yt) => {
    if (!tt && !Yt || !mt())
      return;
    Le.stopPropagation();
    let { width: rn, toRight: Ut } = de, Bt = Le.clientX, hn = C.offsetLeft + Ut, wt, Tn;
    if (tt)
      if (Bt - hn <= 20 && Bt >= hn)
        wt = "left";
      else if (rn + hn - Bt <= 20)
        wt = "right";
      else
        return;
    let { height: tn, toBottom: En } = de, Kt = Le.clientY, zn = C.offsetTop + En;
    if (Yt)
      if (Kt - zn <= 20 && Kt >= zn)
        Tn = "top";
      else if (tn + zn - Kt <= 20)
        Tn = "bottom";
      else
        return;
    const rr = (ve) => {
      window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
      let Me = Ut, Ke = rn, kt = En, pt = tn;
      tt && (wt === "left" ? (Me = ve.clientX - Bt + Ut, Ke = rn + Bt - ve.clientX, Ke = Ke < 200 ? 200 : Ke) : (Me = Ut, Ke = rn + ve.clientX - Bt, Ke = Ke < 200 ? 200 : Ke)), Yt && (Tn === "top" ? (kt = ve.clientY - Kt + En, pt = tn + Kt - ve.clientY, pt = pt < 120 ? 120 : pt) : (kt = En, pt = tn + ve.clientY - Kt, pt = pt < 120 ? 120 : pt)), Ce({
        ...de,
        zIndex: c.focusZIndex,
        toRight: Me,
        width: Ke,
        toBottom: kt,
        height: pt
      });
    }, Cn = () => {
      document.removeEventListener("mousemove", rr), document.removeEventListener("mouseup", Cn);
    };
    document.addEventListener("mousemove", rr), document.addEventListener("mouseup", Cn);
  }, le = () => {
    if (l.isModal)
      return;
    const { dialogboxList: Le } = c, tt = c.focusZIndex;
    if (Le.length > 1 && de.zIndex < tt) {
      let Yt = c.promoteZIndex(b);
      Ce({
        ...de,
        zIndex: Yt
      });
    }
  };
  cn.useEffect(() => {
    if (_) {
      h.current.isMount = !1, l.fullScreen && Et(!0);
      return;
    }
    l.visible === !0 ? (Ce({
      ...de,
      visible: !0
    }), c.changeDialogboxVisible(b, !0)) : (l.byOpen || c.changeDialogboxVisible(b, !1), setTimeout(() => {
      Ce({
        ...de,
        visible: !1
      });
    }, 450), Tt());
  }, [l.visible]), cn.useLayoutEffect(() => {
    if (!l.byOpen)
      return c.registerDialogbox(l), h.current.dialogboxId = c.focusItem.dialogboxId, () => {
        Tt(), c.unRegisterDialogbox(b);
      };
  }, []);
  const Pe = () => /* @__PURE__ */ cn.createElement("div", { className: "dialogbox-header-btnList" }, /* @__PURE__ */ cn.createElement(
    "button",
    {
      className: "dialogbox-header-btn btn-minimize",
      onClick: ot
    },
    /* @__PURE__ */ cn.createElement("i", { className: "dialogbox-icon dialogbox-icon-minimize" })
  ), /* @__PURE__ */ cn.createElement(
    "button",
    {
      className: "dialogbox-header-btn btn-maximize",
      onClick: Et
    },
    /* @__PURE__ */ cn.createElement("i", { className: Kv(
      "dialogbox-icon",
      {
        "dialogbox-icon-restore": Fe,
        "dialogbox-icon-maximize": !Fe
      }
    ) })
  ), /* @__PURE__ */ cn.createElement(
    "button",
    {
      className: "dialogbox-header-btn btn-close",
      onClick: ht
    },
    /* @__PURE__ */ cn.createElement("i", { className: "dialogbox-icon dialogbox-icon-close" })
  )), w = () => $e && /* @__PURE__ */ cn.createElement("div", { className: "dialogbox-header", style: Ae }, /* @__PURE__ */ cn.createElement(
    "div",
    {
      className: "dialogbox-title",
      onDoubleClick: (Le) => {
        Le.stopPropagation(), le(), Et();
      },
      onMouseDown: (Le) => {
        le(), te && bt(Le);
      }
    },
    /* @__PURE__ */ cn.createElement(
      "span",
      {
        className: "dialogbox-title-content",
        onDoubleClick: (Le) => {
          Le.stopPropagation();
        },
        onMouseDown: (Le) => {
          Le.stopPropagation();
        }
      },
      re
    )
  ), Pe()), j = () => typeof It == "string" || cn.isValidElement(It) ? /* @__PURE__ */ cn.createElement("div", { className: "dialogbox-footer-wrapper" }, It) : It === !1 ? null : /* @__PURE__ */ cn.createElement(
    "div",
    {
      style: ye,
      className: "dialogbox-footer"
    },
    /* @__PURE__ */ cn.createElement("div", { className: "dialogbox-footer-btnList" }, /* @__PURE__ */ cn.createElement(
      pw,
      {
        dialogboxType: "windows",
        className: "dialogbox-footer-btn cancel-btn",
        onClick: fn
      },
      be || "取消"
    ), /* @__PURE__ */ cn.createElement(
      pw,
      {
        dialogboxType: "windows",
        btnType: "primary",
        className: "dialogbox-footer-btn ok-btn",
        onClick: Dt
      },
      xt || "确认"
    ))
  ), ee = () => ["right-bottom", "right-top", "left-bottom", "left-top"].map((Le) => /* @__PURE__ */ cn.createElement("div", { key: Le, className: Kv("draggableAngle", Le), onMouseDown: (tt) => {
    J(tt, !0, !0), le();
  } })), Se = () => ["right", "top", "bottom", "left"].map((Le) => {
    const tt = Le === "top" || Le === "bottom";
    return /* @__PURE__ */ cn.createElement("div", { key: Le, className: Kv("draggableSide", Le), onMouseDown: (Yt) => {
      J(Yt, !tt, tt);
    } });
  }), { visible: me, isExtend: Fe, toRight: He, toBottom: Ye, transition: Ve, zIndex: yt, width: Fr, height: nr, marginTop: Hr, marginLeft: nn } = de, Fn = Kv(
    "dialogbox",
    "dialogbox-animation-in",
    {
      "dialogbox-maximizeStatus": Fe,
      [fe]: fe,
      "dialogbox-uncontrolable": !mt(),
      "dialogbox-foucs": Nt(),
      "dialogbox-animation-out": !l.visible
    }
  ), Wn = {
    transform: ""
  };
  return (He || Ye) && (Wn.transform = "translate(" + (He || 0) + "px," + (Ye || 0) + "px)"), /* @__PURE__ */ cn.createElement(
    "div",
    {
      key: "dialogbox-id-" + b,
      ref: (Le) => h.current.dom = Le,
      id: "dialogbox-" + b,
      className: Fn,
      onMouseDown: (Le) => {
        le(), mt() || Le.preventDefault();
      },
      style: {
        display: me ? "flex" : "none",
        width: Fr + "px",
        height: nr + "px",
        zIndex: de.zIndex,
        marginTop: Hr,
        marginLeft: nn,
        transition: Ve,
        ...Wn
      }
    },
    ee(),
    Se(),
    w(),
    /* @__PURE__ */ cn.createElement(
      "div",
      {
        className: "dialogbox-body dialogbox-scroll"
      },
      /* @__PURE__ */ cn.createElement("div", { className: "dialogbox-content" }, l.children)
    ),
    j()
  );
}));
var RM = Object.defineProperty, wM = Object.getOwnPropertyDescriptor, ju = (l, c, p, h) => {
  for (var b = h > 1 ? void 0 : h ? wM(c, p) : c, C = l.length - 1, _; C >= 0; C--)
    (_ = l[C]) && (b = (h ? _(c, p, b) : _(b)) || b);
  return h && b && RM(c, p, b), b;
};
class Wo {
  constructor() {
    this.focusZIndex = 1e3, this.dialogboxList = [], this.maskXClassList = /* @__PURE__ */ new Set(["dialogbox-extend-mask-x"]), this.maskYClassList = /* @__PURE__ */ new Set(["dialogbox-extend-mask-y"]), this.dragWrapperVisible = !0, this.validFunction = (c, p) => !c || typeof c != "function" ? !1 : c(p), DL(this), document.addEventListener("keydown", (c) => {
      if (this.isAllDialogboxHide)
        return;
      const p = this.focusItem.dialogboxId, { item: h } = this.getDialogboxById(p);
      c.key === "Enter" && (c.preventDefault(), this.validFunction(h.onOk)), c.key === "Escape" && (c.preventDefault(), this.validFunction(h.onCancel));
    });
  }
  // 获取当前被聚焦的元素
  get focusItem() {
    let c = this.dialogboxList[0];
    return this.dialogboxList.forEach((p) => {
      p.zIndex > c.zIndex && (c = p);
    }), c;
  }
  // 判断是否当前所有对话框均已隐藏
  get isAllDialogboxHide() {
    return this.dialogboxList.every((c) => !c.visible);
  }
  // 判断是否当前所有对话框均已隐藏或无遮罩层
  get isDialogboxMask() {
    return !!this.dialogboxList.find((c) => c.visible && c.mask !== !1);
  }
  getDialogboxById(c) {
    let p = this.dialogboxList.findIndex((b) => b.dialogboxId == c), h = this.dialogboxList[p];
    return {
      idx: p,
      item: h
    };
  }
  initDefaultOptions(c) {
    this.defaultOptions = c;
  }
  addMaskXY(c) {
    c === "left" || c === "right" ? this.maskXClassList.add("mask-in-" + c) : this.maskYClassList.add("mask-in-" + c);
  }
  clearMaskXY() {
    this.maskXClassList.has("mask-in-left") && (this.maskXClassList.delete("mask-out-right"), this.maskXClassList.delete("mask-in-left"), this.maskXClassList.add("mask-out-left")), this.maskXClassList.has("mask-in-right") && (this.maskXClassList.delete("mask-in-right"), this.maskXClassList.delete("mask-out-left"), this.maskXClassList.add("mask-out-right")), this.maskYClassList.has("mask-in-top") && (this.maskYClassList.delete("mask-in-bottom"), this.maskYClassList.delete("mask-in-top"), this.maskYClassList.add("mask-out-top")), this.maskYClassList.has("mask-in-bottom") && (this.maskYClassList.delete("mask-in-top"), this.maskYClassList.delete("mask-in-bottom"), this.maskYClassList.add("mask-out-bottom"));
  }
  registerDialogbox(c) {
    const { mask: p = !0, visible: h, onOk: b, onCancel: C, isModal: _ } = c, A = ++this.focusZIndex;
    return this.dialogboxList.push({
      dialogboxId: A,
      visible: h,
      mask: p,
      onOk: b,
      onCancel: C,
      isModal: _,
      zIndex: A
    }), A;
  }
  unRegisterDialogbox(c) {
    const { idx: p } = this.getDialogboxById(c);
    this.dialogboxList.splice(p, 1);
  }
  changeDialogboxVisible(c, p) {
    const { item: h } = this.getDialogboxById(c);
    h && (h.visible = p, p == !0 && this.promoteZIndex(c));
  }
  hideAllDialogbox() {
    this.dialogboxList.forEach((c) => {
      c.component && (c.visible = !1);
    });
  }
  promoteZIndex(c) {
    if (this.getDialogboxById(c).item.zIndex === this.focusZIndex)
      return this.focusZIndex;
    let p = ++this.focusZIndex;
    for (let h = 0; h < this.dialogboxList.length; h++)
      if (this.dialogboxList[h].dialogboxId == c) {
        this.dialogboxList[h].zIndex = p;
        break;
      }
    return p;
  }
  createDialogbox(c) {
    const { isModal: p = !1, mask: h = !0 } = c, b = ++this.focusZIndex;
    return this.dialogboxList.push({
      ...this.defaultOptions,
      ...c.props,
      isModal: p,
      dialogboxId: b,
      mask: h,
      component: !0
    }), b;
  }
  closeDialogbox(c) {
    if (c) {
      const { idx: p, item: h } = this.getDialogboxById(c);
      h && (this.dialogboxList[p].visible = !1, setTimeout(() => {
        this.dialogboxList.splice(p, 1);
      }, 450));
    } else
      this.dialogboxList = this.dialogboxList.filter((p) => !p.component);
  }
}
ju([
  Ea
], Wo.prototype, "initDefaultOptions", 1);
ju([
  Ea
], Wo.prototype, "addMaskXY", 1);
ju([
  Ea
], Wo.prototype, "clearMaskXY", 1);
ju([
  Ea
], Wo.prototype, "registerDialogbox", 1);
ju([
  Ea
], Wo.prototype, "unRegisterDialogbox", 1);
ju([
  Ea
], Wo.prototype, "changeDialogboxVisible", 1);
ju([
  Ea
], Wo.prototype, "hideAllDialogbox", 1);
ju([
  Ea
], Wo.prototype, "promoteZIndex", 1);
ju([
  Ea
], Wo.prototype, "createDialogbox", 1);
ju([
  Ea
], Wo.prototype, "closeDialogbox", 1);
const Ld = new Wo();
class TM {
  constructor() {
    this.openDialogbox = (c) => {
      const p = Ld.createDialogbox(c);
      return {
        DOM: document.getElementById("dialogbox-" + p),
        dialogboxId: p,
        hide: () => this.hideDialogbox(p),
        close: () => this.closeDialogbox(p),
        show: () => this.showDialogbox(p)
      };
    }, this.showDialogbox = (c) => {
      Ld.changeDialogboxVisible(c, !0);
    }, this.hideDialogbox = (c) => {
      Ld.changeDialogboxVisible(c, !1);
    };
  }
  closeDialogbox(c) {
    Ld.closeDialogbox(c);
  }
  closeAllDialogbox() {
    Ld.closeDialogbox();
  }
  hideAllDialogbox() {
    Ld.hideAllDialogbox();
  }
}
const OM = new TM();
const { showDialogbox: AM, hideDialogbox: LM, hideAllDialogbox: MM, openDialogbox: UM, closeAllDialogbox: zM, closeDialogbox: jM } = OM;
export {
  kM as Dialogbox,
  zM as closeAllDialogbox,
  jM as closeDialogbox,
  MM as hideAllDialogbox,
  LM as hideDialogbox,
  UM as openDialogbox,
  AM as showDialogbox
};
