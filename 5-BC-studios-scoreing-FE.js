const et = "https://brandcoat-charts-api.up.railway.app/api/v1/studios/brands/";
function Ne(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: tt } = Object.prototype, { getPrototypeOf: le } = Object, W = /* @__PURE__ */ ((e) => (t) => {
  const n = tt.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), C = (e) => (e = e.toLowerCase(), (t) => W(t) === e), K = (e) => (t) => typeof t === e, { isArray: U } = Array, I = K("undefined");
function nt(e) {
  return e !== null && !I(e) && e.constructor !== null && !I(e.constructor) && x(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Pe = C("ArrayBuffer");
function rt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Pe(e.buffer), t;
}
const st = K("string"), x = K("function"), Fe = K("number"), G = (e) => e !== null && typeof e == "object", ot = (e) => e === !0 || e === !1, z = (e) => {
  if (W(e) !== "object")
    return !1;
  const t = le(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, it = C("Date"), at = C("File"), ct = C("Blob"), lt = C("FileList"), ut = (e) => G(e) && x(e.pipe), ft = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || x(e.append) && ((t = W(e)) === "formdata" || // detect form-data instance
  t === "object" && x(e.toString) && e.toString() === "[object FormData]"));
}, dt = C("URLSearchParams"), [pt, ht, mt, yt] = ["ReadableStream", "Request", "Response", "Headers"].map(C), bt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function H(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), U(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let c;
    for (r = 0; r < i; r++)
      c = o[r], t.call(null, e[c], c, e);
  }
}
function Le(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const B = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Be = (e) => !I(e) && e !== B;
function ne() {
  const { caseless: e } = Be(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && Le(t, s) || s;
    z(t[o]) && z(r) ? t[o] = ne(t[o], r) : z(r) ? t[o] = ne({}, r) : U(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && H(arguments[r], n);
  return t;
}
const wt = (e, t, n, { allOwnKeys: r } = {}) => (H(t, (s, o) => {
  n && x(s) ? e[o] = Ne(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), Et = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), St = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, gt = (e, t, n, r) => {
  let s, o, i;
  const c = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !c[i] && (t[i] = e[i], c[i] = !0);
    e = n !== !1 && le(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Rt = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Ot = (e) => {
  if (!e) return null;
  if (U(e)) return e;
  let t = e.length;
  if (!Fe(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Tt = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && le(Uint8Array)), At = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, xt = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Ct = C("HTMLFormElement"), _t = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), me = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Nt = C("RegExp"), ke = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  H(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, Pt = (e) => {
  ke(e, (t, n) => {
    if (x(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (x(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Ft = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return U(e) ? r(e) : r(String(e).split(t)), n;
}, Lt = () => {
}, Bt = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, Z = "abcdefghijklmnopqrstuvwxyz", ye = "0123456789", De = {
  DIGIT: ye,
  ALPHA: Z,
  ALPHA_DIGIT: Z + Z.toUpperCase() + ye
}, kt = (e = 16, t = De.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Dt(e) {
  return !!(e && x(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Ut = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (G(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = U(r) ? [] : {};
        return H(r, (i, c) => {
          const f = n(i, s + 1);
          !I(f) && (o[c] = f);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, qt = C("AsyncFunction"), jt = (e) => e && (G(e) || x(e)) && x(e.then) && x(e.catch), Ue = ((e, t) => e ? setImmediate : t ? ((n, r) => (B.addEventListener("message", ({ source: s, data: o }) => {
  s === B && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), B.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  x(B.postMessage)
), It = typeof queueMicrotask < "u" ? queueMicrotask.bind(B) : typeof process < "u" && process.nextTick || Ue, a = {
  isArray: U,
  isArrayBuffer: Pe,
  isBuffer: nt,
  isFormData: ft,
  isArrayBufferView: rt,
  isString: st,
  isNumber: Fe,
  isBoolean: ot,
  isObject: G,
  isPlainObject: z,
  isReadableStream: pt,
  isRequest: ht,
  isResponse: mt,
  isHeaders: yt,
  isUndefined: I,
  isDate: it,
  isFile: at,
  isBlob: ct,
  isRegExp: Nt,
  isFunction: x,
  isStream: ut,
  isURLSearchParams: dt,
  isTypedArray: Tt,
  isFileList: lt,
  forEach: H,
  merge: ne,
  extend: wt,
  trim: bt,
  stripBOM: Et,
  inherits: St,
  toFlatObject: gt,
  kindOf: W,
  kindOfTest: C,
  endsWith: Rt,
  toArray: Ot,
  forEachEntry: At,
  matchAll: xt,
  isHTMLForm: Ct,
  hasOwnProperty: me,
  hasOwnProp: me,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ke,
  freezeMethods: Pt,
  toObjectSet: Ft,
  toCamelCase: _t,
  noop: Lt,
  toFiniteNumber: Bt,
  findKey: Le,
  global: B,
  isContextDefined: Be,
  ALPHABET: De,
  generateString: kt,
  isSpecCompliantForm: Dt,
  toJSONObject: Ut,
  isAsyncFn: qt,
  isThenable: jt,
  setImmediate: Ue,
  asap: It
};
function m(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
a.inherits(m, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const qe = m.prototype, je = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  je[e] = { value: e };
});
Object.defineProperties(m, je);
Object.defineProperty(qe, "isAxiosError", { value: !0 });
m.from = (e, t, n, r, s, o) => {
  const i = Object.create(qe);
  return a.toFlatObject(e, i, function(f) {
    return f !== Error.prototype;
  }, (c) => c !== "isAxiosError"), m.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const Ht = null;
function re(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function Ie(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function be(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = Ie(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Mt(e) {
  return a.isArray(e) && !e.some(re);
}
const Vt = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function X(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, h) {
    return !a.isUndefined(h[y]);
  });
  const r = n.metaTokens, s = n.visitor || u, o = n.dots, i = n.indexes, f = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function l(p) {
    if (p === null) return "";
    if (a.isDate(p))
      return p.toISOString();
    if (!f && a.isBlob(p))
      throw new m("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(p) || a.isTypedArray(p) ? f && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function u(p, y, h) {
    let E = p;
    if (p && !h && typeof p == "object") {
      if (a.endsWith(y, "{}"))
        y = r ? y : y.slice(0, -2), p = JSON.stringify(p);
      else if (a.isArray(p) && Mt(p) || (a.isFileList(p) || a.endsWith(y, "[]")) && (E = a.toArray(p)))
        return y = Ie(y), E.forEach(function(R, _) {
          !(a.isUndefined(R) || R === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? be([y], _, o) : i === null ? y : y + "[]",
            l(R)
          );
        }), !1;
    }
    return re(p) ? !0 : (t.append(be(h, y, o), l(p)), !1);
  }
  const d = [], b = Object.assign(Vt, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: re
  });
  function w(p, y) {
    if (!a.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      d.push(p), a.forEach(p, function(E, g) {
        (!(a.isUndefined(E) || E === null) && s.call(
          t,
          E,
          a.isString(g) ? g.trim() : g,
          y,
          b
        )) === !0 && w(E, y ? y.concat(g) : [g]);
      }), d.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return w(e), t;
}
function we(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function ue(e, t) {
  this._pairs = [], e && X(e, this, t);
}
const He = ue.prototype;
He.append = function(t, n) {
  this._pairs.push([t, n]);
};
He.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, we);
  } : we;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function zt(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Me(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || zt, s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = a.isURLSearchParams(t) ? t.toString() : new ue(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Ee {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    a.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Ve = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Jt = typeof URLSearchParams < "u" ? URLSearchParams : ue, vt = typeof FormData < "u" ? FormData : null, $t = typeof Blob < "u" ? Blob : null, Wt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Jt,
    FormData: vt,
    Blob: $t
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, fe = typeof window < "u" && typeof document < "u", se = typeof navigator == "object" && navigator || void 0, Kt = fe && (!se || ["ReactNative", "NativeScript", "NS"].indexOf(se.product) < 0), Gt = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Xt = fe && window.location.href || "http://localhost", Qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: fe,
  hasStandardBrowserEnv: Kt,
  hasStandardBrowserWebWorkerEnv: Gt,
  navigator: se,
  origin: Xt
}, Symbol.toStringTag, { value: "Module" })), T = {
  ...Qt,
  ...Wt
};
function Zt(e, t) {
  return X(e, new T.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return T.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Yt(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function en(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function ze(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const c = Number.isFinite(+i), f = o >= n.length;
    return i = !i && a.isArray(s) ? s.length : i, f ? (a.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !c) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = en(s[i])), !c);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(Yt(r), s, n, 0);
    }), n;
  }
  return null;
}
function tn(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const M = {
  transitional: Ve,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s ? JSON.stringify(ze(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Zt(t, this.formSerializer).toString();
      if ((c = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return X(
          c ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), tn(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || M.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (a.isResponse(t) || a.isReadableStream(t))
      return t;
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (c) {
        if (i)
          throw c.name === "SyntaxError" ? m.from(c, m.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: T.classes.FormData,
    Blob: T.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  M.headers[e] = {};
});
const nn = a.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), rn = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && nn[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Se = Symbol("internals");
function j(e) {
  return e && String(e).trim().toLowerCase();
}
function J(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(J) : String(e);
}
function sn(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const on = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Y(e, t, n, r, s) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function an(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function cn(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
class A {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(c, f, l) {
      const u = j(f);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = a.findKey(s, u);
      (!d || s[d] === void 0 || l === !0 || l === void 0 && s[d] !== !1) && (s[d || f] = J(c));
    }
    const i = (c, f) => a.forEach(c, (l, u) => o(l, u, f));
    if (a.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (a.isString(t) && (t = t.trim()) && !on(t))
      i(rn(t), n);
    else if (a.isHeaders(t))
      for (const [c, f] of t.entries())
        o(f, c, r);
    else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = j(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return sn(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = j(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Y(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = j(i), i) {
        const c = a.findKey(r, i);
        c && (!n || Y(r, r[c], c, n)) && (delete r[c], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Y(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (s, o) => {
      const i = a.findKey(r, o);
      if (i) {
        n[i] = J(s), delete n[o];
        return;
      }
      const c = t ? an(o) : String(o).trim();
      c !== o && delete n[o], n[c] = J(s), r[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Se] = this[Se] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const c = j(i);
      r[c] || (cn(s, i), r[c] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
A.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(A.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(A);
function ee(e, t) {
  const n = this || M, r = t || n, s = A.from(r.headers);
  let o = r.data;
  return a.forEach(e, function(c) {
    o = c.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Je(e) {
  return !!(e && e.__CANCEL__);
}
function q(e, t, n) {
  m.call(this, e ?? "canceled", m.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(q, m, {
  __CANCEL__: !0
});
function ve(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new m(
    "Request failed with status code " + n.status,
    [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function ln(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function un(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const l = Date.now(), u = r[o];
    i || (i = l), n[s] = f, r[s] = l;
    let d = o, b = 0;
    for (; d !== s; )
      b += n[d++], d = d % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), l - i < t)
      return;
    const w = u && l - u;
    return w ? Math.round(b * 1e3 / w) : void 0;
  };
}
function fn(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const i = (l, u = Date.now()) => {
    n = u, s = null, o && (clearTimeout(o), o = null), e.apply(null, l);
  };
  return [(...l) => {
    const u = Date.now(), d = u - n;
    d >= r ? i(l, u) : (s = l, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - d)));
  }, () => s && i(s)];
}
const v = (e, t, n = 3) => {
  let r = 0;
  const s = un(50, 250);
  return fn((o) => {
    const i = o.loaded, c = o.lengthComputable ? o.total : void 0, f = i - r, l = s(f), u = i <= c;
    r = i;
    const d = {
      loaded: i,
      total: c,
      progress: c ? i / c : void 0,
      bytes: f,
      rate: l || void 0,
      estimated: l && c && u ? (c - i) / l : void 0,
      event: o,
      lengthComputable: c != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, n);
}, ge = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Re = (e) => (...t) => a.asap(() => e(...t)), dn = T.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = T.navigator && /(msie|trident)/i.test(T.navigator.userAgent), n = document.createElement("a");
    let r;
    function s(o) {
      let i = o;
      return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = s(window.location.href), function(i) {
      const c = a.isString(i) ? s(i) : i;
      return c.protocol === r.protocol && c.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), pn = T.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      a.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), a.isString(r) && i.push("path=" + r), a.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function hn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function mn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function $e(e, t) {
  return e && !hn(t) ? mn(e, t) : t;
}
const Oe = (e) => e instanceof A ? { ...e } : e;
function D(e, t) {
  t = t || {};
  const n = {};
  function r(l, u, d) {
    return a.isPlainObject(l) && a.isPlainObject(u) ? a.merge.call({ caseless: d }, l, u) : a.isPlainObject(u) ? a.merge({}, u) : a.isArray(u) ? u.slice() : u;
  }
  function s(l, u, d) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(l))
        return r(void 0, l, d);
    } else return r(l, u, d);
  }
  function o(l, u) {
    if (!a.isUndefined(u))
      return r(void 0, u);
  }
  function i(l, u) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(l))
        return r(void 0, l);
    } else return r(void 0, u);
  }
  function c(l, u, d) {
    if (d in t)
      return r(l, u);
    if (d in e)
      return r(void 0, l);
  }
  const f = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: c,
    headers: (l, u) => s(Oe(l), Oe(u), !0)
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = f[u] || s, b = d(e[u], t[u], u);
    a.isUndefined(b) && d !== c || (n[u] = b);
  }), n;
}
const We = (e) => {
  const t = D({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: c } = t;
  t.headers = i = A.from(i), t.url = Me($e(t.baseURL, t.url), e.params, e.paramsSerializer), c && i.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  );
  let f;
  if (a.isFormData(n)) {
    if (T.hasStandardBrowserEnv || T.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((f = i.getContentType()) !== !1) {
      const [l, ...u] = f ? f.split(";").map((d) => d.trim()).filter(Boolean) : [];
      i.setContentType([l || "multipart/form-data", ...u].join("; "));
    }
  }
  if (T.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(t)), r || r !== !1 && dn(t.url))) {
    const l = s && o && pn.read(o);
    l && i.set(s, l);
  }
  return t;
}, yn = typeof XMLHttpRequest < "u", bn = yn && function(e) {
  return new Promise(function(n, r) {
    const s = We(e);
    let o = s.data;
    const i = A.from(s.headers).normalize();
    let { responseType: c, onUploadProgress: f, onDownloadProgress: l } = s, u, d, b, w, p;
    function y() {
      w && w(), p && p(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
    }
    let h = new XMLHttpRequest();
    h.open(s.method.toUpperCase(), s.url, !0), h.timeout = s.timeout;
    function E() {
      if (!h)
        return;
      const R = A.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), O = {
        data: !c || c === "text" || c === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: R,
        config: e,
        request: h
      };
      ve(function(L) {
        n(L), y();
      }, function(L) {
        r(L), y();
      }, O), h = null;
    }
    "onloadend" in h ? h.onloadend = E : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(E);
    }, h.onabort = function() {
      h && (r(new m("Request aborted", m.ECONNABORTED, e, h)), h = null);
    }, h.onerror = function() {
      r(new m("Network Error", m.ERR_NETWORK, e, h)), h = null;
    }, h.ontimeout = function() {
      let _ = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const O = s.transitional || Ve;
      s.timeoutErrorMessage && (_ = s.timeoutErrorMessage), r(new m(
        _,
        O.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
        e,
        h
      )), h = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in h && a.forEach(i.toJSON(), function(_, O) {
      h.setRequestHeader(O, _);
    }), a.isUndefined(s.withCredentials) || (h.withCredentials = !!s.withCredentials), c && c !== "json" && (h.responseType = s.responseType), l && ([b, p] = v(l, !0), h.addEventListener("progress", b)), f && h.upload && ([d, w] = v(f), h.upload.addEventListener("progress", d), h.upload.addEventListener("loadend", w)), (s.cancelToken || s.signal) && (u = (R) => {
      h && (r(!R || R.type ? new q(null, e, h) : R), h.abort(), h = null);
    }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
    const g = ln(s.url);
    if (g && T.protocols.indexOf(g) === -1) {
      r(new m("Unsupported protocol " + g + ":", m.ERR_BAD_REQUEST, e));
      return;
    }
    h.send(o || null);
  });
}, wn = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const o = function(l) {
      if (!s) {
        s = !0, c();
        const u = l instanceof Error ? l : this.reason;
        r.abort(u instanceof m ? u : new q(u instanceof Error ? u.message : u));
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new m(`timeout ${t} of ms exceeded`, m.ETIMEDOUT));
    }, t);
    const c = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(o) : l.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((l) => l.addEventListener("abort", o));
    const { signal: f } = r;
    return f.unsubscribe = () => a.asap(c), f;
  }
}, En = function* (e, t) {
  let n = e.byteLength;
  if (!t || n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, Sn = async function* (e, t) {
  for await (const n of gn(e))
    yield* En(n, t);
}, gn = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, Te = (e, t, n, r) => {
  const s = Sn(e, t);
  let o = 0, i, c = (f) => {
    i || (i = !0, r && r(f));
  };
  return new ReadableStream({
    async pull(f) {
      try {
        const { done: l, value: u } = await s.next();
        if (l) {
          c(), f.close();
          return;
        }
        let d = u.byteLength;
        if (n) {
          let b = o += d;
          n(b);
        }
        f.enqueue(new Uint8Array(u));
      } catch (l) {
        throw c(l), l;
      }
    },
    cancel(f) {
      return c(f), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, Q = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Ke = Q && typeof ReadableStream == "function", Rn = Q && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Ge = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, On = Ke && Ge(() => {
  let e = !1;
  const t = new Request(T.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Ae = 64 * 1024, oe = Ke && Ge(() => a.isReadableStream(new Response("").body)), $ = {
  stream: oe && ((e) => e.body)
};
Q && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !$[t] && ($[t] = a.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new m(`Response type '${t}' is not supported`, m.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Tn = async (e) => {
  if (e == null)
    return 0;
  if (a.isBlob(e))
    return e.size;
  if (a.isSpecCompliantForm(e))
    return (await new Request(T.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (a.isArrayBufferView(e) || a.isArrayBuffer(e))
    return e.byteLength;
  if (a.isURLSearchParams(e) && (e = e + ""), a.isString(e))
    return (await Rn(e)).byteLength;
}, An = async (e, t) => {
  const n = a.toFiniteNumber(e.getContentLength());
  return n ?? Tn(t);
}, xn = Q && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: s,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: c,
    onUploadProgress: f,
    responseType: l,
    headers: u,
    withCredentials: d = "same-origin",
    fetchOptions: b
  } = We(e);
  l = l ? (l + "").toLowerCase() : "text";
  let w = wn([s, o && o.toAbortSignal()], i), p;
  const y = w && w.unsubscribe && (() => {
    w.unsubscribe();
  });
  let h;
  try {
    if (f && On && n !== "get" && n !== "head" && (h = await An(u, r)) !== 0) {
      let O = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), P;
      if (a.isFormData(r) && (P = O.headers.get("content-type")) && u.setContentType(P), O.body) {
        const [L, V] = ge(
          h,
          v(Re(f))
        );
        r = Te(O.body, Ae, L, V);
      }
    }
    a.isString(d) || (d = d ? "include" : "omit");
    const E = "credentials" in Request.prototype;
    p = new Request(t, {
      ...b,
      signal: w,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: E ? d : void 0
    });
    let g = await fetch(p);
    const R = oe && (l === "stream" || l === "response");
    if (oe && (c || R && y)) {
      const O = {};
      ["status", "statusText", "headers"].forEach((he) => {
        O[he] = g[he];
      });
      const P = a.toFiniteNumber(g.headers.get("content-length")), [L, V] = c && ge(
        P,
        v(Re(c), !0)
      ) || [];
      g = new Response(
        Te(g.body, Ae, L, () => {
          V && V(), y && y();
        }),
        O
      );
    }
    l = l || "text";
    let _ = await $[a.findKey($, l) || "text"](g, e);
    return !R && y && y(), await new Promise((O, P) => {
      ve(O, P, {
        data: _,
        headers: A.from(g.headers),
        status: g.status,
        statusText: g.statusText,
        config: e,
        request: p
      });
    });
  } catch (E) {
    throw y && y(), E && E.name === "TypeError" && /fetch/i.test(E.message) ? Object.assign(
      new m("Network Error", m.ERR_NETWORK, e, p),
      {
        cause: E.cause || E
      }
    ) : m.from(E, E && E.code, e, p);
  }
}), ie = {
  http: Ht,
  xhr: bn,
  fetch: xn
};
a.forEach(ie, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const xe = (e) => `- ${e}`, Cn = (e) => a.isFunction(e) || e === null || e === !1, Xe = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !Cn(n) && (r = ie[(i = String(n)).toLowerCase()], r === void 0))
        throw new m(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([c, f]) => `adapter ${c} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(xe).join(`
`) : " " + xe(o[0]) : "as no adapter specified";
      throw new m(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: ie
};
function te(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new q(null, e);
}
function Ce(e) {
  return te(e), e.headers = A.from(e.headers), e.data = ee.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Xe.getAdapter(e.adapter || M.adapter)(e).then(function(r) {
    return te(e), r.data = ee.call(
      e,
      e.transformResponse,
      r
    ), r.headers = A.from(r.headers), r;
  }, function(r) {
    return Je(r) || (te(e), r && r.response && (r.response.data = ee.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = A.from(r.response.headers))), Promise.reject(r);
  });
}
const Qe = "1.7.7", de = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  de[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const _e = {};
de.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + Qe + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, c) => {
    if (t === !1)
      throw new m(
        s(i, " has been removed" + (n ? " in " + n : "")),
        m.ERR_DEPRECATED
      );
    return n && !_e[i] && (_e[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, c) : !0;
  };
};
function _n(e, t, n) {
  if (typeof e != "object")
    throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const c = e[o], f = c === void 0 || i(c, o, e);
      if (f !== !0)
        throw new m("option " + o + " must be " + f, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new m("Unknown option " + o, m.ERR_BAD_OPTION);
  }
}
const ae = {
  assertOptions: _n,
  validators: de
}, F = ae.validators;
class k {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Ee(),
      response: new Ee()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s;
        Error.captureStackTrace ? Error.captureStackTrace(s = {}) : s = new Error();
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = D(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && ae.assertOptions(r, {
      silentJSONParsing: F.transitional(F.boolean),
      forcedJSONParsing: F.transitional(F.boolean),
      clarifyTimeoutError: F.transitional(F.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : ae.assertOptions(s, {
      encode: F.function,
      serialize: F.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && a.merge(
      o.common,
      o[n.method]
    );
    o && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete o[p];
      }
    ), n.headers = A.concat(i, o);
    const c = [];
    let f = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(n) === !1 || (f = f && y.synchronous, c.unshift(y.fulfilled, y.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(y) {
      l.push(y.fulfilled, y.rejected);
    });
    let u, d = 0, b;
    if (!f) {
      const p = [Ce.bind(this), void 0];
      for (p.unshift.apply(p, c), p.push.apply(p, l), b = p.length, u = Promise.resolve(n); d < b; )
        u = u.then(p[d++], p[d++]);
      return u;
    }
    b = c.length;
    let w = n;
    for (d = 0; d < b; ) {
      const p = c[d++], y = c[d++];
      try {
        w = p(w);
      } catch (h) {
        y.call(this, h);
        break;
      }
    }
    try {
      u = Ce.call(this, w);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, b = l.length; d < b; )
      u = u.then(l[d++], l[d++]);
    return u;
  }
  getUri(t) {
    t = D(this.defaults, t);
    const n = $e(t.baseURL, t.url);
    return Me(n, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(t) {
  k.prototype[t] = function(n, r) {
    return this.request(D(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, c) {
      return this.request(D(c || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  k.prototype[t] = n(), k.prototype[t + "Form"] = n(!0);
});
class pe {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((c) => {
        r.subscribe(c), o = c;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, c) {
      r.reason || (r.reason = new q(o, i, c), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new pe(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
function Nn(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Pn(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const ce = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(ce).forEach(([e, t]) => {
  ce[t] = e;
});
function Ze(e) {
  const t = new k(e), n = Ne(k.prototype.request, t);
  return a.extend(n, k.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Ze(D(e, s));
  }, n;
}
const S = Ze(M);
S.Axios = k;
S.CanceledError = q;
S.CancelToken = pe;
S.isCancel = Je;
S.VERSION = Qe;
S.toFormData = X;
S.AxiosError = m;
S.Cancel = S.CanceledError;
S.all = function(t) {
  return Promise.all(t);
};
S.spread = Nn;
S.isAxiosError = Pn;
S.mergeConfig = D;
S.AxiosHeaders = A;
S.formToJSON = (e) => ze(a.isHTMLForm(e) ? new FormData(e) : e);
S.getAdapter = Xe.getAdapter;
S.HttpStatusCode = ce;
S.default = S;
const Fn = async (e, t = "") => {
  try {
    return (await S(et + e + t)).data;
  } catch (n) {
    console.log(n.message), console.log(n.response);
  }
}, Ye = (e, t = "block") => {
  e.style.display = t;
}, Ln = "https://www.brandcoat.net/creator/", N = {
  name: "#name",
  score: "#score",
  studioLink: "#studio_link",
  logo: "#logo",
  rank: (e) => `#rank-${e}`,
  isVerified: "#is_verified",
  isNotVerified: "#is_not_verified",
  isAwarded: "#is_awarded",
  isBcCertificated: "#is_bc_certificated"
}, Bn = (e, t) => {
  const {
    name: n,
    score: r,
    rank: s,
    slug: o,
    logoUrl: i,
    isPartner: c,
    isBcCertificated: f,
    isAwarded: l
  } = t, u = e.querySelector(N.name), d = e.querySelector(N.studioLink), b = e.querySelector(N.logo), w = e.querySelector(N.score);
  u && (u.innerText = n), d && (d.href = Ln + o), b && (b.src = i), w && (w.innerText = r), kn(e, s), Dn(e, c), Un(e, f, l);
}, kn = (e, t) => {
  const n = e.querySelector(N.rank(t));
  n && (n.style.display = "block");
}, Dn = (e, t) => {
  const n = e.querySelector(N.isVerified), r = e.querySelector(N.isNotVerified);
  t && n ? (n.style.display = "block", r.style.display = "none") : r && (r.style.display = "block", n.style.display = "none");
}, Un = (e, t, n) => {
  const r = e.querySelector(N.isAwarded), s = e.querySelector(
    N.isBcCertificated
  );
  t && s && (r.style.display = "block"), n && r && (s.style.display = "block");
}, qn = async (e = "") => {
  const { studioScores: t } = await Fn("formula1", e), n = document.querySelector("#formula1_result_wrapper");
  Array.from(n.querySelectorAll(".card")).forEach((s, o) => {
    Bn(s, t[o]), Ye(s, "flex");
  });
};
function jn(e) {
  return e.includes("Cafes & Bistros") !== -1 ? e.replace(
    "Cafes & Bistros",
    "Cafes and Bistros"
  ) : e.includes("F & B") !== -1 ? e.replace("F & B", "F and B") : e;
}
const In = [
  "industries",
  "geographics",
  "generations",
  "sectors",
  "contexts"
], Hn = () => {
  const e = Mn();
  let t = "";
  for (const r in e) {
    const s = e[r];
    s && (t.length === 0 ? t += "?" : t += "&", t += `${r}=${s}`);
  }
  return jn(t);
};
function Mn() {
  const e = {};
  return In.forEach((t) => {
    e[t] = Vn(t);
  }), e;
}
function Vn(e) {
  const t = zn(e);
  let n = "";
  return t.forEach((r) => {
    r.checked && (n.length === 0 ? n += r.nextElementSibling.textContent : n += "-" + r.nextElementSibling.textContent);
  }), n;
}
function zn(e) {
  return document.querySelectorAll(
    `#globalFilter_dropdownMenu-${e} input[type="checkbox"]`
  );
}
const Jn = (e) => {
  [qn].forEach((n) => {
    n(e);
  });
}, vn = async () => {
  const e = Hn();
  e ? (Jn(e), Ye(document.querySelector("#formula1_result_wrapper"), "flex")) : alert("Please set at least one filter to find the best matched studios.");
}, $n = () => {
  const e = document.querySelector("#apply-btn");
  e == null || e.addEventListener("click", vn);
}, Wn = () => {
  $n();
};
Wn();