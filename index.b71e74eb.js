// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fm8Gy":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
var _hyperapp = require("hyperapp");
var _search = require("./search");
var _state = require("./state");
var _actions = require("./actions");
var _main = require("./views/main");
var _stylesCss = require("./styles/styles.css");
const state = module.hot && module.hot.data && module.hot.data.state || (0, _state.initialState);
const application = (0, _hyperapp.app)(state, (0, _actions.actions)(new (0, _search.AniListSearch)()), (0, _main.view), document.body);
application.selections.loadState();
application.bingo.loadState();
console.log("https://github.com/walfie/anime-bingo");
window.application = application;
if (module.hot) module.hot.dispose(()=>{
    module.hot.data.state = application.getState();
});

},{"hyperapp":"gGmOH","./search":"by10t","./state":"1Yeju","./actions":"PVKMd","./views/main":"fZCvs","./styles/styles.css":"38Edj"}],"gGmOH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "h", ()=>h);
parcelHelpers.export(exports, "app", ()=>app);
function h(name, attributes) {
    var rest = [];
    var children = [];
    var length = arguments.length;
    while(length-- > 2)rest.push(arguments[length]);
    while(rest.length){
        var node = rest.pop();
        if (node && node.pop) for(length = node.length; length--;)rest.push(node[length]);
        else if (node != null && node !== true && node !== false) children.push(node);
    }
    return typeof name === "function" ? name(attributes || {}, children) : {
        nodeName: name,
        attributes: attributes || {},
        children: children,
        key: attributes && attributes.key
    };
}
function app(state, actions, view, container) {
    var map = [].map;
    var rootElement = container && container.children[0] || null;
    var oldNode = rootElement && recycleElement(rootElement);
    var lifecycle = [];
    var skipRender;
    var isRecycling = true;
    var globalState = clone(state);
    var wiredActions = wireStateToActions([], globalState, clone(actions));
    scheduleRender();
    return wiredActions;
    function recycleElement(element) {
        return {
            nodeName: element.nodeName.toLowerCase(),
            attributes: {},
            children: map.call(element.childNodes, function(element) {
                return element.nodeType === 3 // Node.TEXT_NODE
                 ? element.nodeValue : recycleElement(element);
            })
        };
    }
    function resolveNode(node) {
        return typeof node === "function" ? resolveNode(node(globalState, wiredActions)) : node != null ? node : "";
    }
    function render() {
        skipRender = !skipRender;
        var node = resolveNode(view);
        if (container && !skipRender) rootElement = patch(container, rootElement, oldNode, oldNode = node);
        isRecycling = false;
        while(lifecycle.length)lifecycle.pop()();
    }
    function scheduleRender() {
        if (!skipRender) {
            skipRender = true;
            setTimeout(render);
        }
    }
    function clone(target, source) {
        var out = {};
        for(var i in target)out[i] = target[i];
        for(var i in source)out[i] = source[i];
        return out;
    }
    function setPartialState(path, value, source) {
        var target = {};
        if (path.length) {
            target[path[0]] = path.length > 1 ? setPartialState(path.slice(1), value, source[path[0]]) : value;
            return clone(source, target);
        }
        return value;
    }
    function getPartialState(path, source) {
        var i = 0;
        while(i < path.length)source = source[path[i++]];
        return source;
    }
    function wireStateToActions(path, state, actions) {
        for(var key in actions)typeof actions[key] === "function" ? function(key, action) {
            actions[key] = function(data) {
                var result = action(data);
                if (typeof result === "function") result = result(getPartialState(path, globalState), actions);
                if (result && result !== (state = getPartialState(path, globalState)) && !result.then // !isPromise
                ) scheduleRender(globalState = setPartialState(path, clone(state, result), globalState));
                return result;
            };
        }(key, actions[key]) : wireStateToActions(path.concat(key), state[key] = clone(state[key]), actions[key] = clone(actions[key]));
        return actions;
    }
    function getKey(node) {
        return node ? node.key : null;
    }
    function eventListener(event) {
        return event.currentTarget.events[event.type](event);
    }
    function updateAttribute(element, name, value, oldValue, isSvg) {
        if (name === "key") ;
        else if (name === "style") for(var i in clone(oldValue, value)){
            var style = value == null || value[i] == null ? "" : value[i];
            if (i[0] === "-") element[name].setProperty(i, style);
            else element[name][i] = style;
        }
        else {
            if (name[0] === "o" && name[1] === "n") {
                name = name.slice(2);
                if (element.events) {
                    if (!oldValue) oldValue = element.events[name];
                } else element.events = {};
                element.events[name] = value;
                if (value) {
                    if (!oldValue) element.addEventListener(name, eventListener);
                } else element.removeEventListener(name, eventListener);
            } else if (name in element && name !== "list" && name !== "type" && name !== "draggable" && name !== "spellcheck" && name !== "translate" && !isSvg) element[name] = value == null ? "" : value;
            else if (value != null && value !== false) element.setAttribute(name, value);
            if (value == null || value === false) element.removeAttribute(name);
        }
    }
    function createElement(node, isSvg) {
        var element = typeof node === "string" || typeof node === "number" ? document.createTextNode(node) : (isSvg = isSvg || node.nodeName === "svg") ? document.createElementNS("http://www.w3.org/2000/svg", node.nodeName) : document.createElement(node.nodeName);
        var attributes = node.attributes;
        if (attributes) {
            if (attributes.oncreate) lifecycle.push(function() {
                attributes.oncreate(element);
            });
            for(var i = 0; i < node.children.length; i++)element.appendChild(createElement(node.children[i] = resolveNode(node.children[i]), isSvg));
            for(var name in attributes)updateAttribute(element, name, attributes[name], null, isSvg);
        }
        return element;
    }
    function updateElement(element, oldAttributes, attributes, isSvg) {
        for(var name in clone(oldAttributes, attributes))if (attributes[name] !== (name === "value" || name === "checked" ? element[name] : oldAttributes[name])) updateAttribute(element, name, attributes[name], oldAttributes[name], isSvg);
        var cb = isRecycling ? attributes.oncreate : attributes.onupdate;
        if (cb) lifecycle.push(function() {
            cb(element, oldAttributes);
        });
    }
    function removeChildren(element, node) {
        var attributes = node.attributes;
        if (attributes) {
            for(var i = 0; i < node.children.length; i++)removeChildren(element.childNodes[i], node.children[i]);
            if (attributes.ondestroy) attributes.ondestroy(element);
        }
        return element;
    }
    function removeElement(parent, element, node) {
        function done() {
            parent.removeChild(removeChildren(element, node));
        }
        var cb = node.attributes && node.attributes.onremove;
        if (cb) cb(element, done);
        else done();
    }
    function patch(parent, element, oldNode, node, isSvg) {
        if (node === oldNode) ;
        else if (oldNode == null || oldNode.nodeName !== node.nodeName) {
            var newElement = createElement(node, isSvg);
            parent.insertBefore(newElement, element);
            if (oldNode != null) removeElement(parent, element, oldNode);
            element = newElement;
        } else if (oldNode.nodeName == null) element.nodeValue = node;
        else {
            updateElement(element, oldNode.attributes, node.attributes, isSvg = isSvg || node.nodeName === "svg");
            var oldKeyed = {};
            var newKeyed = {};
            var oldElements = [];
            var oldChildren = oldNode.children;
            var children = node.children;
            for(var i = 0; i < oldChildren.length; i++){
                oldElements[i] = element.childNodes[i];
                var oldKey = getKey(oldChildren[i]);
                if (oldKey != null) oldKeyed[oldKey] = [
                    oldElements[i],
                    oldChildren[i]
                ];
            }
            var i = 0;
            var k = 0;
            while(k < children.length){
                var oldKey = getKey(oldChildren[i]);
                var newKey = getKey(children[k] = resolveNode(children[k]));
                if (newKeyed[oldKey]) {
                    i++;
                    continue;
                }
                if (newKey != null && newKey === getKey(oldChildren[i + 1])) {
                    if (oldKey == null) removeElement(element, oldElements[i], oldChildren[i]);
                    i++;
                    continue;
                }
                if (newKey == null || isRecycling) {
                    if (oldKey == null) {
                        patch(element, oldElements[i], oldChildren[i], children[k], isSvg);
                        k++;
                    }
                    i++;
                } else {
                    var keyedNode = oldKeyed[newKey] || [];
                    if (oldKey === newKey) {
                        patch(element, keyedNode[0], keyedNode[1], children[k], isSvg);
                        i++;
                    } else if (keyedNode[0]) patch(element, element.insertBefore(keyedNode[0], oldElements[i]), keyedNode[1], children[k], isSvg);
                    else patch(element, oldElements[i], null, children[k], isSvg);
                    newKeyed[newKey] = children[k];
                    k++;
                }
            }
            while(i < oldChildren.length){
                if (getKey(oldChildren[i]) == null) removeElement(element, oldElements[i], oldChildren[i]);
                i++;
            }
            for(var i in oldKeyed)if (!newKeyed[i]) removeElement(element, oldKeyed[i][0], oldKeyed[i][1]);
        }
        return element;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"by10t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AniListSearch", ()=>AniListSearch);
class AniListSearch {
    async searchMedia(query, mediaType, options) {
        switch(mediaType){
            case "anime":
            case "manga":
                return this.searchAnimeOrManga(query, mediaType, options);
            case "character":
                return this.searchCharacter(query, options);
            case "staff":
                return this.searchStaff(query, options);
        }
    }
    async searchJson(query, variables) {
        const body = {
            query,
            variables
        };
        const result = await fetch(this.baseUrl, {
            method: "POST",
            headers: new Headers([
                [
                    "accept",
                    "application/json"
                ],
                [
                    "content-type",
                    "application/json"
                ]
            ]),
            body: JSON.stringify(body)
        });
        return await result.json();
    }
    makeName(givenName, surname, preferSurnameFirst) {
        const nameParts = preferSurnameFirst ? [
            surname,
            givenName
        ] : [
            givenName,
            surname
        ];
        return nameParts.filter(Boolean).join(" ");
    }
    async searchCharacter(query, options) {
        let variables = {
            search: query,
            sort: [
                "SEARCH_MATCH",
                "FAVOURITES_DESC"
            ]
        };
        const json = await this.searchJson(this.characterQuery, variables);
        return json.data.page.characters.map((character)=>({
                id: "character:" + character.id,
                title: this.makeName(character.name.first, character.name.last, options.preferSurnameFirst),
                image: character.image.large
            }));
    }
    async searchAnimeOrManga(query, mediaType, options) {
        let variables = {
            search: query,
            type: mediaType.toUpperCase(),
            sort: [
                "SEARCH_MATCH",
                "POPULARITY_DESC"
            ]
        };
        const json = await this.searchJson(this.mediaQuery, variables);
        return json.data.page.media.map((media)=>{
            const title = options.preferEnglish && media.title.english || media.title.romaji;
            return {
                id: mediaType + ":" + media.id,
                title,
                image: media.coverImage.large
            };
        });
    }
    async searchStaff(query, options) {
        let variables = {
            search: query
        };
        const json = await this.searchJson(this.staffQuery, variables);
        return json.data.page.staff.map((staff)=>({
                id: "staff:" + staff.id,
                title: this.makeName(staff.name.first, staff.name.last, options.preferSurnameFirst),
                image: staff.image.large
            }));
    }
    constructor(){
        this.baseUrl = "https://graphql.anilist.co";
        this.mediaQuery = `
    query($page: Int = 1, $perPage: Int = 10, $search: String, $type: MediaType, $sort: [MediaSort]) {
      page: Page(page: $page, perPage: $perPage) {
        media: media(search: $search, sort: $sort, type: $type) {
          id
          title { romaji english }
          coverImage { large }
        }
      }
    }`;
        this.characterQuery = `
    query ($page: Int = 1, $perPage: Int = 10, $search: String, $sort: [CharacterSort]) {
      page: Page(page: $page, perPage: $perPage) {
        characters: characters(search: $search, sort: $sort) {
          id
          name { first last }
          image { large }
        }
      }
    }`;
        this.staffQuery = `
    query ($page: Int = 1, $perPage: Int = 10, $search: String) {
      page: Page(page: $page, perPage: $perPage) {
        staff: staff(search: $search) {
          id
          name { first last }
          image { large }
        }
      }
    }`;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Yeju":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "State", ()=>State);
parcelHelpers.export(exports, "initialState", ()=>initialState);
var State;
(function(State) {
    let Bingo;
    (function(Bingo) {
        Bingo.allFonts = [
            "Arial, Helvetica, sans-serif",
            "'Arial Black', Gadget, sans-serif",
            "'Comic Sans MS', Textile, cursive",
            "'Courier New', Courier, monospace",
            "Georgia, 'Times New Roman', Times, serif",
            "Impact, Charcoal, sans-serif",
            "'Lucida Console', Monaco, monospace",
            "'Lucida Sans Unicode', 'Lucida Grande', sans-serif",
            "'Palatino Linotype', 'Book Antiqua', Palatino, serif",
            "Tahoma, Geneva, sans-serif",
            "'Times New Roman', Times, serif",
            "'Trebuchet MS', Helvetica, sans-serif",
            "Verdana, Geneva, sans-serif",
            "'MS Sans Serif', Geneva, sans-serif",
            "'MS Serif', 'New York', serif"
        ];
        Bingo.initial = {
            title: "Anime Bingo",
            font: Bingo.allFonts[0],
            backgroundColor: "#ffffff",
            borderColor: "#333333",
            showTitles: true,
            showCanvas: false,
            showCredit: true,
            showFreeSpace: true,
            size: 5
        };
    })(Bingo = State.Bingo || (State.Bingo = {}));
})(State || (State = {}));
const initialState = {
    search: {
        query: "",
        results: [],
        mediaType: "anime",
        isVisible: false,
        isLoading: false,
        error: null,
        preferEnglish: false,
        preferSurnameFirst: false
    },
    selections: {
        items: []
    },
    custom: {
        title: "",
        imageUrl: null,
        file: null,
        isError: false,
        isDragging: false
    },
    bingo: State.Bingo.initial
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"PVKMd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadStorage", ()=>loadStorage);
parcelHelpers.export(exports, "actions", ()=>actions);
var _state = require("./state");
var _html2Canvas = require("html2canvas");
const storageKey = "animeBingo";
const storageField = {
    selections: "selections",
    bingo: "bingo"
};
const persist = (fieldKey, value)=>{
    let item = JSON.parse(localStorage.getItem(storageKey) || "{}");
    item[fieldKey] = value;
    localStorage.setItem(storageKey, JSON.stringify(item));
};
const loadStorage = (fieldKey)=>{
    return JSON.parse(localStorage.getItem(storageKey) || "{}")[fieldKey];
};
const validateImageUrl = (url)=>{
    return new Promise((resolve, reject)=>{
        const img = new Image();
        img.onload = ()=>resolve(url);
        img.onerror = (e)=>reject(e);
        img.src = url;
    });
};
const validateImageFile = async (file)=>{
    const url = URL.createObjectURL(file);
    try {
        return await validateImageUrl(url);
    } catch (err) {
        URL.revokeObjectURL(url);
        throw err;
    }
};
const randomId = ()=>{
    return Math.random().toString().substr(2);
};
const shuffleArray = (array)=>{
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};
const actions = (search)=>({
        getState: ()=>(state)=>{
                return state;
            },
        search: {
            updateState: (newState)=>{
                return newState;
            },
            setVisibility: (isVisible)=>(_)=>{
                    return {
                        isVisible
                    };
                },
            updateQuery: (query)=>(_)=>{
                    return {
                        query
                    };
                },
            updateMatches: (results)=>(_)=>{
                    return {
                        results
                    };
                },
            execute: ()=>async (state, actions)=>{
                    actions.updateState({
                        isLoading: true,
                        error: null
                    });
                    try {
                        const searchResults = await search.searchMedia(state.query, state.mediaType, state);
                        actions.updateMatches(searchResults);
                        actions.setVisibility(true);
                    } catch (err) {
                        actions.updateState({
                            error: err.toString()
                        });
                    } finally{
                        actions.updateState({
                            isLoading: false
                        });
                    }
                }
        },
        selections: {
            updateState: (newState)=>{
                return newState;
            },
            persistState: ()=>(state)=>{
                    persist(storageField.selections, state);
                },
            loadState: ()=>{
                return loadStorage(storageField.selections);
            },
            add: (item)=>(state, actions)=>{
                    // If item already exists, don't add it again
                    const items = state.items.find((existing)=>existing.id == item.id) ? state.items : state.items.concat(item);
                    actions.updateState({
                        items
                    });
                    actions.persistState();
                },
            remove: (id)=>(state, actions)=>{
                    const newItems = state.items.filter((item)=>{
                        const shouldKeep = item.id != id;
                        if (!shouldKeep) URL.revokeObjectURL(item.image);
                        return shouldKeep;
                    });
                    actions.updateState({
                        items: newItems
                    });
                    actions.persistState();
                },
            removeAll: ()=>(state, actions)=>{
                    if (confirm("Remove all items?")) {
                        state.items.forEach((item)=>URL.revokeObjectURL(item.image));
                        actions.updateState({
                            items: []
                        });
                    } else actions.updateState({});
                    actions.persistState();
                },
            shuffle: ()=>(state, actions)=>{
                    shuffleArray(state.items);
                    actions.updateState({
                        items: state.items
                    });
                    actions.persistState();
                },
            commitEdit: ({ id, title })=>(state, actions)=>{
                    state.items.forEach((item)=>{
                        if (item.id == id) item.overriddenTitle = title;
                    });
                    actions.updateState({
                        items: state.items
                    });
                    actions.persistState();
                },
            move: ({ srcIndex, offset })=>(state, actions)=>{
                    const destIndex = srcIndex + offset;
                    if (destIndex < 0 || destIndex >= state.items.length) return;
                    const element = state.items[srcIndex];
                    state.items.splice(srcIndex, 1);
                    state.items.splice(destIndex, 0, element);
                    actions.updateState({
                        items: state.items
                    });
                    actions.persistState();
                }
        },
        custom: {
            updateState: (newState)=>{
                if (newState.imageUrl === "") newState.isError = false;
                return newState;
            },
            validateFile: (file)=>async (state, actions)=>{
                    try {
                        const url = await validateImageFile(file);
                        actions.updateState({
                            imageUrl: url,
                            isError: false
                        });
                    } catch (err) {
                        actions.updateState({
                            isError: true
                        });
                    }
                },
            validateInput: (callback)=>async (state, actions)=>{
                    try {
                        const url = await validateImageUrl(state.imageUrl);
                        actions.updateState({
                            imageUrl: "",
                            title: "",
                            file: null,
                            isError: false
                        });
                        callback({
                            id: "custom:" + randomId(),
                            title: state.title,
                            image: url,
                            overriddenTitle: null
                        });
                    } catch (err) {
                        actions.updateState({
                            isError: true
                        });
                    }
                }
        },
        bingo: {
            persistState: ()=>(state)=>{
                    persist(storageField.bingo, state);
                },
            loadState: ()=>{
                return loadStorage(storageField.bingo);
            },
            updateAndPersistState: (newState)=>(_, actions)=>{
                    actions.updateState(newState);
                    actions.persistState();
                },
            updateState: (newState)=>{
                return newState;
            },
            resetSettings: ()=>(_, actions)=>{
                    actions.updateAndPersistState((0, _state.State).Bingo.initial);
                },
            generate: ()=>(state, actions)=>{
                    const input = document.querySelector(".js-bingo-container");
                    const output = document.querySelector(".js-bingo-output-canvas");
                    _html2Canvas(input, {
                        allowTaint: true,
                        canvas: output,
                        backgroundColor: state.borderColor,
                        scale: Math.max(1, window.devicePixelRatio)
                    }).then((_)=>{
                        actions.showCanvas(true);
                    });
                },
            showCanvas: (show)=>{
                return {
                    showCanvas: show
                };
            }
        }
    });

},{"./state":"1Yeju","html2canvas":"8YWjv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8YWjv":[function(require,module,exports) {
"use strict";
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
    }
    return target;
};
var _CanvasRenderer = require("eb9f1c6491189db9");
var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);
var _Logger = require("bc53e5dd2ff0ab1d");
var _Logger2 = _interopRequireDefault(_Logger);
var _Window = require("a25d7755ac8117a6");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var html2canvas = function html2canvas(element, conf) {
    var config = conf || {};
    var logger = new _Logger2.default(typeof config.logging === "boolean" ? config.logging : true);
    logger.log("html2canvas $npm_package_version");
    if (typeof config.onrendered === "function") logger.error("onrendered option is deprecated, html2canvas returns a Promise with the canvas as the value");
    var ownerDocument = element.ownerDocument;
    if (!ownerDocument) return Promise.reject("Provided element is not within a Document");
    var defaultView = ownerDocument.defaultView;
    var defaultOptions = {
        async: true,
        allowTaint: false,
        backgroundColor: "#ffffff",
        imageTimeout: 15000,
        logging: true,
        proxy: null,
        removeContainer: true,
        foreignObjectRendering: false,
        scale: defaultView.devicePixelRatio || 1,
        target: new _CanvasRenderer2.default(config.canvas),
        useCORS: false,
        windowWidth: defaultView.innerWidth,
        windowHeight: defaultView.innerHeight,
        scrollX: defaultView.pageXOffset,
        scrollY: defaultView.pageYOffset
    };
    var result = (0, _Window.renderElement)(element, _extends({}, defaultOptions, config), logger);
    return result.catch(function(e) {
        logger.error(e);
        throw e;
    });
};
html2canvas.CanvasRenderer = _CanvasRenderer2.default;
module.exports = html2canvas;

},{"eb9f1c6491189db9":"1b7Kj","bc53e5dd2ff0ab1d":"8hmSo","a25d7755ac8117a6":"9zxOU"}],"1b7Kj":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _Path = require("e2d7e0397ade320d");
var _textDecoration = require("38719de0ddfac4cc");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var addColorStops = function addColorStops(gradient, canvasGradient) {
    var maxStop = Math.max.apply(null, gradient.colorStops.map(function(colorStop) {
        return colorStop.stop;
    }));
    var f = 1 / Math.max(1, maxStop);
    gradient.colorStops.forEach(function(colorStop) {
        canvasGradient.addColorStop(f * colorStop.stop, colorStop.color.toString());
    });
};
var CanvasRenderer = function() {
    function CanvasRenderer(canvas) {
        _classCallCheck(this, CanvasRenderer);
        this.canvas = canvas ? canvas : document.createElement("canvas");
    }
    _createClass(CanvasRenderer, [
        {
            key: "render",
            value: function render(options) {
                this.ctx = this.canvas.getContext("2d");
                this.options = options;
                this.canvas.width = Math.floor(options.width * options.scale);
                this.canvas.height = Math.floor(options.height * options.scale);
                this.canvas.style.width = options.width + "px";
                this.canvas.style.height = options.height + "px";
                this.ctx.scale(this.options.scale, this.options.scale);
                this.ctx.translate(-options.x, -options.y);
                this.ctx.textBaseline = "bottom";
                options.logger.log("Canvas renderer initialized (" + options.width + "x" + options.height + " at " + options.x + "," + options.y + ") with scale " + this.options.scale);
            }
        },
        {
            key: "clip",
            value: function clip(clipPaths, callback) {
                var _this = this;
                if (clipPaths.length) {
                    this.ctx.save();
                    clipPaths.forEach(function(path) {
                        _this.path(path);
                        _this.ctx.clip();
                    });
                }
                callback();
                if (clipPaths.length) this.ctx.restore();
            }
        },
        {
            key: "drawImage",
            value: function drawImage(image, source, destination) {
                this.ctx.drawImage(image, source.left, source.top, source.width, source.height, destination.left, destination.top, destination.width, destination.height);
            }
        },
        {
            key: "drawShape",
            value: function drawShape(path, color) {
                this.path(path);
                this.ctx.fillStyle = color.toString();
                this.ctx.fill();
            }
        },
        {
            key: "fill",
            value: function fill(color) {
                this.ctx.fillStyle = color.toString();
                this.ctx.fill();
            }
        },
        {
            key: "getTarget",
            value: function getTarget() {
                this.canvas.getContext("2d").setTransform(1, 0, 0, 1, 0, 0);
                return Promise.resolve(this.canvas);
            }
        },
        {
            key: "path",
            value: function path(_path) {
                var _this2 = this;
                this.ctx.beginPath();
                if (Array.isArray(_path)) _path.forEach(function(point, index) {
                    var start = point.type === _Path.PATH.VECTOR ? point : point.start;
                    if (index === 0) _this2.ctx.moveTo(start.x, start.y);
                    else _this2.ctx.lineTo(start.x, start.y);
                    if (point.type === _Path.PATH.BEZIER_CURVE) _this2.ctx.bezierCurveTo(point.startControl.x, point.startControl.y, point.endControl.x, point.endControl.y, point.end.x, point.end.y);
                });
                else this.ctx.arc(_path.x + _path.radius, _path.y + _path.radius, _path.radius, 0, Math.PI * 2, true);
                this.ctx.closePath();
            }
        },
        {
            key: "rectangle",
            value: function rectangle(x, y, width, height, color) {
                this.ctx.fillStyle = color.toString();
                this.ctx.fillRect(x, y, width, height);
            }
        },
        {
            key: "renderLinearGradient",
            value: function renderLinearGradient(bounds, gradient) {
                var linearGradient = this.ctx.createLinearGradient(bounds.left + gradient.direction.x1, bounds.top + gradient.direction.y1, bounds.left + gradient.direction.x0, bounds.top + gradient.direction.y0);
                addColorStops(gradient, linearGradient);
                this.ctx.fillStyle = linearGradient;
                this.ctx.fillRect(bounds.left, bounds.top, bounds.width, bounds.height);
            }
        },
        {
            key: "renderRadialGradient",
            value: function renderRadialGradient(bounds, gradient) {
                var _this3 = this;
                var x = bounds.left + gradient.center.x;
                var y = bounds.top + gradient.center.y;
                var radialGradient = this.ctx.createRadialGradient(x, y, 0, x, y, gradient.radius.x);
                if (!radialGradient) return;
                addColorStops(gradient, radialGradient);
                this.ctx.fillStyle = radialGradient;
                if (gradient.radius.x !== gradient.radius.y) {
                    // transforms for elliptical radial gradient
                    var midX = bounds.left + 0.5 * bounds.width;
                    var midY = bounds.top + 0.5 * bounds.height;
                    var f = gradient.radius.y / gradient.radius.x;
                    var invF = 1 / f;
                    this.transform(midX, midY, [
                        1,
                        0,
                        0,
                        f,
                        0,
                        0
                    ], function() {
                        return _this3.ctx.fillRect(bounds.left, invF * (bounds.top - midY) + midY, bounds.width, bounds.height * invF);
                    });
                } else this.ctx.fillRect(bounds.left, bounds.top, bounds.width, bounds.height);
            }
        },
        {
            key: "renderRepeat",
            value: function renderRepeat(path, image, imageSize, offsetX, offsetY) {
                this.path(path);
                this.ctx.fillStyle = this.ctx.createPattern(this.resizeImage(image, imageSize), "repeat");
                this.ctx.translate(offsetX, offsetY);
                this.ctx.fill();
                this.ctx.translate(-offsetX, -offsetY);
            }
        },
        {
            key: "renderTextNode",
            value: function renderTextNode(textBounds, color, font, textDecoration, textShadows) {
                var _this4 = this;
                this.ctx.font = [
                    font.fontStyle,
                    font.fontVariant,
                    font.fontWeight,
                    font.fontSize,
                    font.fontFamily
                ].join(" ");
                textBounds.forEach(function(text) {
                    _this4.ctx.fillStyle = color.toString();
                    if (textShadows && text.text.trim().length) textShadows.slice(0).reverse().forEach(function(textShadow) {
                        _this4.ctx.shadowColor = textShadow.color.toString();
                        _this4.ctx.shadowOffsetX = textShadow.offsetX * _this4.options.scale;
                        _this4.ctx.shadowOffsetY = textShadow.offsetY * _this4.options.scale;
                        _this4.ctx.shadowBlur = textShadow.blur;
                        _this4.ctx.fillText(text.text, text.bounds.left, text.bounds.top + text.bounds.height);
                    });
                    else _this4.ctx.fillText(text.text, text.bounds.left, text.bounds.top + text.bounds.height);
                    if (textDecoration !== null) {
                        var textDecorationColor = textDecoration.textDecorationColor || color;
                        textDecoration.textDecorationLine.forEach(function(textDecorationLine) {
                            switch(textDecorationLine){
                                case _textDecoration.TEXT_DECORATION_LINE.UNDERLINE:
                                    // Draws a line at the baseline of the font
                                    // TODO As some browsers display the line as more than 1px if the font-size is big,
                                    // need to take that into account both in position and size
                                    var _options$fontMetrics$ = _this4.options.fontMetrics.getMetrics(font), baseline = _options$fontMetrics$.baseline;
                                    _this4.rectangle(text.bounds.left, Math.round(text.bounds.top + baseline), text.bounds.width, 1, textDecorationColor);
                                    break;
                                case _textDecoration.TEXT_DECORATION_LINE.OVERLINE:
                                    _this4.rectangle(text.bounds.left, Math.round(text.bounds.top), text.bounds.width, 1, textDecorationColor);
                                    break;
                                case _textDecoration.TEXT_DECORATION_LINE.LINE_THROUGH:
                                    // TODO try and find exact position for line-through
                                    var _options$fontMetrics$2 = _this4.options.fontMetrics.getMetrics(font), middle = _options$fontMetrics$2.middle;
                                    _this4.rectangle(text.bounds.left, Math.ceil(text.bounds.top + middle), text.bounds.width, 1, textDecorationColor);
                                    break;
                            }
                        });
                    }
                });
            }
        },
        {
            key: "resizeImage",
            value: function resizeImage(image, size) {
                if (image.width === size.width && image.height === size.height) return image;
                var canvas = this.canvas.ownerDocument.createElement("canvas");
                canvas.width = size.width;
                canvas.height = size.height;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, size.width, size.height);
                return canvas;
            }
        },
        {
            key: "setOpacity",
            value: function setOpacity(opacity) {
                this.ctx.globalAlpha = opacity;
            }
        },
        {
            key: "transform",
            value: function transform(offsetX, offsetY, matrix, callback) {
                this.ctx.save();
                this.ctx.translate(offsetX, offsetY);
                this.ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
                this.ctx.translate(-offsetX, -offsetY);
                callback();
                this.ctx.restore();
            }
        }
    ]);
    return CanvasRenderer;
}();
exports.default = CanvasRenderer;

},{"e2d7e0397ade320d":"fsY0i","38719de0ddfac4cc":"lUS2k"}],"fsY0i":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var PATH = exports.PATH = {
    VECTOR: 0,
    BEZIER_CURVE: 1,
    CIRCLE: 2
};

},{}],"lUS2k":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTextDecoration = exports.TEXT_DECORATION_LINE = exports.TEXT_DECORATION = exports.TEXT_DECORATION_STYLE = undefined;
var _Color = require("2051f4b2ba8ac7e");
var _Color2 = _interopRequireDefault(_Color);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var TEXT_DECORATION_STYLE = exports.TEXT_DECORATION_STYLE = {
    SOLID: 0,
    DOUBLE: 1,
    DOTTED: 2,
    DASHED: 3,
    WAVY: 4
};
var TEXT_DECORATION = exports.TEXT_DECORATION = {
    NONE: null
};
var TEXT_DECORATION_LINE = exports.TEXT_DECORATION_LINE = {
    UNDERLINE: 1,
    OVERLINE: 2,
    LINE_THROUGH: 3,
    BLINK: 4
};
var parseLine = function parseLine(line) {
    switch(line){
        case "underline":
            return TEXT_DECORATION_LINE.UNDERLINE;
        case "overline":
            return TEXT_DECORATION_LINE.OVERLINE;
        case "line-through":
            return TEXT_DECORATION_LINE.LINE_THROUGH;
    }
    return TEXT_DECORATION_LINE.BLINK;
};
var parseTextDecorationLine = function parseTextDecorationLine(line) {
    if (line === "none") return null;
    return line.split(" ").map(parseLine);
};
var parseTextDecorationStyle = function parseTextDecorationStyle(style) {
    switch(style){
        case "double":
            return TEXT_DECORATION_STYLE.DOUBLE;
        case "dotted":
            return TEXT_DECORATION_STYLE.DOTTED;
        case "dashed":
            return TEXT_DECORATION_STYLE.DASHED;
        case "wavy":
            return TEXT_DECORATION_STYLE.WAVY;
    }
    return TEXT_DECORATION_STYLE.SOLID;
};
var parseTextDecoration = exports.parseTextDecoration = function parseTextDecoration(style) {
    var textDecorationLine = parseTextDecorationLine(style.textDecorationLine ? style.textDecorationLine : style.textDecoration);
    if (textDecorationLine === null) return TEXT_DECORATION.NONE;
    var textDecorationColor = style.textDecorationColor ? new _Color2.default(style.textDecorationColor) : null;
    var textDecorationStyle = parseTextDecorationStyle(style.textDecorationStyle);
    return {
        textDecorationLine: textDecorationLine,
        textDecorationColor: textDecorationColor,
        textDecorationStyle: textDecorationStyle
    };
};

},{"2051f4b2ba8ac7e":"hb8Oc"}],"hb8Oc":[function(require,module,exports) {
"use strict";
// http://dev.w3.org/csswg/css-color/
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _slicedToArray = function() {
    function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
            for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally{
            try {
                if (!_n && _i["return"]) _i["return"]();
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    return function(arr, i) {
        if (Array.isArray(arr)) return arr;
        else if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
        else throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}();
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var HEX3 = /^#([a-f0-9]{3})$/i;
var hex3 = function hex3(value) {
    var match = value.match(HEX3);
    if (match) return [
        parseInt(match[1][0] + match[1][0], 16),
        parseInt(match[1][1] + match[1][1], 16),
        parseInt(match[1][2] + match[1][2], 16),
        null
    ];
    return false;
};
var HEX6 = /^#([a-f0-9]{6})$/i;
var hex6 = function hex6(value) {
    var match = value.match(HEX6);
    if (match) return [
        parseInt(match[1].substring(0, 2), 16),
        parseInt(match[1].substring(2, 4), 16),
        parseInt(match[1].substring(4, 6), 16),
        null
    ];
    return false;
};
var RGB = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
var rgb = function rgb(value) {
    var match = value.match(RGB);
    if (match) return [
        Number(match[1]),
        Number(match[2]),
        Number(match[3]),
        null
    ];
    return false;
};
var RGBA = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;
var rgba = function rgba(value) {
    var match = value.match(RGBA);
    if (match && match.length > 4) return [
        Number(match[1]),
        Number(match[2]),
        Number(match[3]),
        Number(match[4])
    ];
    return false;
};
var fromArray = function fromArray(array) {
    return [
        Math.min(array[0], 255),
        Math.min(array[1], 255),
        Math.min(array[2], 255),
        array.length > 3 ? array[3] : null
    ];
};
var namedColor = function namedColor(name) {
    var color = NAMED_COLORS[name.toLowerCase()];
    return color ? color : false;
};
var Color = function() {
    function Color(value) {
        _classCallCheck(this, Color);
        var _ref = Array.isArray(value) ? fromArray(value) : hex3(value) || rgb(value) || rgba(value) || namedColor(value) || hex6(value) || [
            0,
            0,
            0,
            null
        ], _ref2 = _slicedToArray(_ref, 4), r = _ref2[0], g = _ref2[1], b = _ref2[2], a = _ref2[3];
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    _createClass(Color, [
        {
            key: "isTransparent",
            value: function isTransparent() {
                return this.a === 0;
            }
        },
        {
            key: "toString",
            value: function toString() {
                return this.a !== null && this.a !== 1 ? "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")" : "rgb(" + this.r + "," + this.g + "," + this.b + ")";
            }
        }
    ]);
    return Color;
}();
exports.default = Color;
var NAMED_COLORS = {
    transparent: [
        0,
        0,
        0,
        0
    ],
    aliceblue: [
        240,
        248,
        255,
        null
    ],
    antiquewhite: [
        250,
        235,
        215,
        null
    ],
    aqua: [
        0,
        255,
        255,
        null
    ],
    aquamarine: [
        127,
        255,
        212,
        null
    ],
    azure: [
        240,
        255,
        255,
        null
    ],
    beige: [
        245,
        245,
        220,
        null
    ],
    bisque: [
        255,
        228,
        196,
        null
    ],
    black: [
        0,
        0,
        0,
        null
    ],
    blanchedalmond: [
        255,
        235,
        205,
        null
    ],
    blue: [
        0,
        0,
        255,
        null
    ],
    blueviolet: [
        138,
        43,
        226,
        null
    ],
    brown: [
        165,
        42,
        42,
        null
    ],
    burlywood: [
        222,
        184,
        135,
        null
    ],
    cadetblue: [
        95,
        158,
        160,
        null
    ],
    chartreuse: [
        127,
        255,
        0,
        null
    ],
    chocolate: [
        210,
        105,
        30,
        null
    ],
    coral: [
        255,
        127,
        80,
        null
    ],
    cornflowerblue: [
        100,
        149,
        237,
        null
    ],
    cornsilk: [
        255,
        248,
        220,
        null
    ],
    crimson: [
        220,
        20,
        60,
        null
    ],
    cyan: [
        0,
        255,
        255,
        null
    ],
    darkblue: [
        0,
        0,
        139,
        null
    ],
    darkcyan: [
        0,
        139,
        139,
        null
    ],
    darkgoldenrod: [
        184,
        134,
        11,
        null
    ],
    darkgray: [
        169,
        169,
        169,
        null
    ],
    darkgreen: [
        0,
        100,
        0,
        null
    ],
    darkgrey: [
        169,
        169,
        169,
        null
    ],
    darkkhaki: [
        189,
        183,
        107,
        null
    ],
    darkmagenta: [
        139,
        0,
        139,
        null
    ],
    darkolivegreen: [
        85,
        107,
        47,
        null
    ],
    darkorange: [
        255,
        140,
        0,
        null
    ],
    darkorchid: [
        153,
        50,
        204,
        null
    ],
    darkred: [
        139,
        0,
        0,
        null
    ],
    darksalmon: [
        233,
        150,
        122,
        null
    ],
    darkseagreen: [
        143,
        188,
        143,
        null
    ],
    darkslateblue: [
        72,
        61,
        139,
        null
    ],
    darkslategray: [
        47,
        79,
        79,
        null
    ],
    darkslategrey: [
        47,
        79,
        79,
        null
    ],
    darkturquoise: [
        0,
        206,
        209,
        null
    ],
    darkviolet: [
        148,
        0,
        211,
        null
    ],
    deeppink: [
        255,
        20,
        147,
        null
    ],
    deepskyblue: [
        0,
        191,
        255,
        null
    ],
    dimgray: [
        105,
        105,
        105,
        null
    ],
    dimgrey: [
        105,
        105,
        105,
        null
    ],
    dodgerblue: [
        30,
        144,
        255,
        null
    ],
    firebrick: [
        178,
        34,
        34,
        null
    ],
    floralwhite: [
        255,
        250,
        240,
        null
    ],
    forestgreen: [
        34,
        139,
        34,
        null
    ],
    fuchsia: [
        255,
        0,
        255,
        null
    ],
    gainsboro: [
        220,
        220,
        220,
        null
    ],
    ghostwhite: [
        248,
        248,
        255,
        null
    ],
    gold: [
        255,
        215,
        0,
        null
    ],
    goldenrod: [
        218,
        165,
        32,
        null
    ],
    gray: [
        128,
        128,
        128,
        null
    ],
    green: [
        0,
        128,
        0,
        null
    ],
    greenyellow: [
        173,
        255,
        47,
        null
    ],
    grey: [
        128,
        128,
        128,
        null
    ],
    honeydew: [
        240,
        255,
        240,
        null
    ],
    hotpink: [
        255,
        105,
        180,
        null
    ],
    indianred: [
        205,
        92,
        92,
        null
    ],
    indigo: [
        75,
        0,
        130,
        null
    ],
    ivory: [
        255,
        255,
        240,
        null
    ],
    khaki: [
        240,
        230,
        140,
        null
    ],
    lavender: [
        230,
        230,
        250,
        null
    ],
    lavenderblush: [
        255,
        240,
        245,
        null
    ],
    lawngreen: [
        124,
        252,
        0,
        null
    ],
    lemonchiffon: [
        255,
        250,
        205,
        null
    ],
    lightblue: [
        173,
        216,
        230,
        null
    ],
    lightcoral: [
        240,
        128,
        128,
        null
    ],
    lightcyan: [
        224,
        255,
        255,
        null
    ],
    lightgoldenrodyellow: [
        250,
        250,
        210,
        null
    ],
    lightgray: [
        211,
        211,
        211,
        null
    ],
    lightgreen: [
        144,
        238,
        144,
        null
    ],
    lightgrey: [
        211,
        211,
        211,
        null
    ],
    lightpink: [
        255,
        182,
        193,
        null
    ],
    lightsalmon: [
        255,
        160,
        122,
        null
    ],
    lightseagreen: [
        32,
        178,
        170,
        null
    ],
    lightskyblue: [
        135,
        206,
        250,
        null
    ],
    lightslategray: [
        119,
        136,
        153,
        null
    ],
    lightslategrey: [
        119,
        136,
        153,
        null
    ],
    lightsteelblue: [
        176,
        196,
        222,
        null
    ],
    lightyellow: [
        255,
        255,
        224,
        null
    ],
    lime: [
        0,
        255,
        0,
        null
    ],
    limegreen: [
        50,
        205,
        50,
        null
    ],
    linen: [
        250,
        240,
        230,
        null
    ],
    magenta: [
        255,
        0,
        255,
        null
    ],
    maroon: [
        128,
        0,
        0,
        null
    ],
    mediumaquamarine: [
        102,
        205,
        170,
        null
    ],
    mediumblue: [
        0,
        0,
        205,
        null
    ],
    mediumorchid: [
        186,
        85,
        211,
        null
    ],
    mediumpurple: [
        147,
        112,
        219,
        null
    ],
    mediumseagreen: [
        60,
        179,
        113,
        null
    ],
    mediumslateblue: [
        123,
        104,
        238,
        null
    ],
    mediumspringgreen: [
        0,
        250,
        154,
        null
    ],
    mediumturquoise: [
        72,
        209,
        204,
        null
    ],
    mediumvioletred: [
        199,
        21,
        133,
        null
    ],
    midnightblue: [
        25,
        25,
        112,
        null
    ],
    mintcream: [
        245,
        255,
        250,
        null
    ],
    mistyrose: [
        255,
        228,
        225,
        null
    ],
    moccasin: [
        255,
        228,
        181,
        null
    ],
    navajowhite: [
        255,
        222,
        173,
        null
    ],
    navy: [
        0,
        0,
        128,
        null
    ],
    oldlace: [
        253,
        245,
        230,
        null
    ],
    olive: [
        128,
        128,
        0,
        null
    ],
    olivedrab: [
        107,
        142,
        35,
        null
    ],
    orange: [
        255,
        165,
        0,
        null
    ],
    orangered: [
        255,
        69,
        0,
        null
    ],
    orchid: [
        218,
        112,
        214,
        null
    ],
    palegoldenrod: [
        238,
        232,
        170,
        null
    ],
    palegreen: [
        152,
        251,
        152,
        null
    ],
    paleturquoise: [
        175,
        238,
        238,
        null
    ],
    palevioletred: [
        219,
        112,
        147,
        null
    ],
    papayawhip: [
        255,
        239,
        213,
        null
    ],
    peachpuff: [
        255,
        218,
        185,
        null
    ],
    peru: [
        205,
        133,
        63,
        null
    ],
    pink: [
        255,
        192,
        203,
        null
    ],
    plum: [
        221,
        160,
        221,
        null
    ],
    powderblue: [
        176,
        224,
        230,
        null
    ],
    purple: [
        128,
        0,
        128,
        null
    ],
    rebeccapurple: [
        102,
        51,
        153,
        null
    ],
    red: [
        255,
        0,
        0,
        null
    ],
    rosybrown: [
        188,
        143,
        143,
        null
    ],
    royalblue: [
        65,
        105,
        225,
        null
    ],
    saddlebrown: [
        139,
        69,
        19,
        null
    ],
    salmon: [
        250,
        128,
        114,
        null
    ],
    sandybrown: [
        244,
        164,
        96,
        null
    ],
    seagreen: [
        46,
        139,
        87,
        null
    ],
    seashell: [
        255,
        245,
        238,
        null
    ],
    sienna: [
        160,
        82,
        45,
        null
    ],
    silver: [
        192,
        192,
        192,
        null
    ],
    skyblue: [
        135,
        206,
        235,
        null
    ],
    slateblue: [
        106,
        90,
        205,
        null
    ],
    slategray: [
        112,
        128,
        144,
        null
    ],
    slategrey: [
        112,
        128,
        144,
        null
    ],
    snow: [
        255,
        250,
        250,
        null
    ],
    springgreen: [
        0,
        255,
        127,
        null
    ],
    steelblue: [
        70,
        130,
        180,
        null
    ],
    tan: [
        210,
        180,
        140,
        null
    ],
    teal: [
        0,
        128,
        128,
        null
    ],
    thistle: [
        216,
        191,
        216,
        null
    ],
    tomato: [
        255,
        99,
        71,
        null
    ],
    turquoise: [
        64,
        224,
        208,
        null
    ],
    violet: [
        238,
        130,
        238,
        null
    ],
    wheat: [
        245,
        222,
        179,
        null
    ],
    white: [
        255,
        255,
        255,
        null
    ],
    whitesmoke: [
        245,
        245,
        245,
        null
    ],
    yellow: [
        255,
        255,
        0,
        null
    ],
    yellowgreen: [
        154,
        205,
        50,
        null
    ]
};
var TRANSPARENT = exports.TRANSPARENT = new Color([
    0,
    0,
    0,
    0
]);

},{}],"8hmSo":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var Logger = function() {
    function Logger(enabled, id, start) {
        _classCallCheck(this, Logger);
        this.enabled = typeof window !== "undefined" && enabled;
        this.start = start ? start : Date.now();
        this.id = id;
    }
    _createClass(Logger, [
        {
            key: "child",
            value: function child(id) {
                return new Logger(this.enabled, id, this.start);
            }
        },
        {
            key: "log",
            value: function log() {
                if (this.enabled && window.console && window.console.log) {
                    for(var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
                    Function.prototype.bind.call(window.console.log, window.console).apply(window.console, [
                        Date.now() - this.start + "ms",
                        this.id ? "html2canvas (" + this.id + "):" : "html2canvas:"
                    ].concat([].slice.call(args, 0)));
                }
            }
        },
        {
            key: "error",
            value: function error() {
                if (this.enabled && window.console && window.console.error) {
                    for(var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
                    Function.prototype.bind.call(window.console.error, window.console).apply(window.console, [
                        Date.now() - this.start + "ms",
                        this.id ? "html2canvas (" + this.id + "):" : "html2canvas:"
                    ].concat([].slice.call(args, 0)));
                }
            }
        }
    ]);
    return Logger;
}();
exports.default = Logger;

},{}],"9zxOU":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderElement = undefined;
var _slicedToArray = function() {
    function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
            for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally{
            try {
                if (!_n && _i["return"]) _i["return"]();
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    return function(arr, i) {
        if (Array.isArray(arr)) return arr;
        else if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
        else throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}();
var _Logger = require("b6c018bc3690ec1d");
var _Logger2 = _interopRequireDefault(_Logger);
var _NodeParser = require("c973c3c107d7ea47");
var _Renderer = require("4ba82c00aa74b42");
var _Renderer2 = _interopRequireDefault(_Renderer);
var _ForeignObjectRenderer = require("bd5d394d7fee618c");
var _ForeignObjectRenderer2 = _interopRequireDefault(_ForeignObjectRenderer);
var _Feature = require("3e0b472dde3e4ac5");
var _Feature2 = _interopRequireDefault(_Feature);
var _Bounds = require("354354592fa130a1");
var _Clone = require("4111954856b2dc98");
var _Font = require("ff74786876c82d28");
var _Color = require("8c93f096f20601b1");
var _Color2 = _interopRequireDefault(_Color);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var renderElement = exports.renderElement = function renderElement(element, options, logger) {
    var ownerDocument = element.ownerDocument;
    var windowBounds = new _Bounds.Bounds(options.scrollX, options.scrollY, options.windowWidth, options.windowHeight);
    // http://www.w3.org/TR/css3-background/#special-backgrounds
    var documentBackgroundColor = ownerDocument.documentElement ? new _Color2.default(getComputedStyle(ownerDocument.documentElement).backgroundColor) : _Color.TRANSPARENT;
    var bodyBackgroundColor = ownerDocument.body ? new _Color2.default(getComputedStyle(ownerDocument.body).backgroundColor) : _Color.TRANSPARENT;
    var backgroundColor = element === ownerDocument.documentElement ? documentBackgroundColor.isTransparent() ? bodyBackgroundColor.isTransparent() ? options.backgroundColor ? new _Color2.default(options.backgroundColor) : null : bodyBackgroundColor : documentBackgroundColor : options.backgroundColor ? new _Color2.default(options.backgroundColor) : null;
    return (options.foreignObjectRendering ? _Feature2.default.SUPPORT_FOREIGNOBJECT_DRAWING : Promise.resolve(false)).then(function(supportForeignObject) {
        return supportForeignObject ? function(cloner) {
            logger.log("Document cloned, using foreignObject rendering");
            return cloner.inlineFonts(ownerDocument).then(function() {
                return cloner.resourceLoader.ready();
            }).then(function() {
                var renderer = new _ForeignObjectRenderer2.default(cloner.documentElement);
                var defaultView = ownerDocument.defaultView;
                var scrollX = defaultView.pageXOffset;
                var scrollY = defaultView.pageYOffset;
                var isDocument = element.tagName === "HTML" || element.tagName === "BODY";
                var _ref = isDocument ? (0, _Bounds.parseDocumentSize)(ownerDocument) : (0, _Bounds.parseBounds)(element, scrollX, scrollY), width = _ref.width, height = _ref.height, left = _ref.left, top = _ref.top;
                return renderer.render({
                    backgroundColor: backgroundColor,
                    logger: logger,
                    scale: options.scale,
                    x: typeof options.x === "number" ? options.x : left,
                    y: typeof options.y === "number" ? options.y : top,
                    width: typeof options.width === "number" ? options.width : Math.ceil(width),
                    height: typeof options.height === "number" ? options.height : Math.ceil(height),
                    windowWidth: options.windowWidth,
                    windowHeight: options.windowHeight,
                    scrollX: options.scrollX,
                    scrollY: options.scrollY
                });
            });
        }(new _Clone.DocumentCloner(element, options, logger, true, renderElement)) : (0, _Clone.cloneWindow)(ownerDocument, windowBounds, element, options, logger, renderElement).then(function(_ref2) {
            var _ref3 = _slicedToArray(_ref2, 3), container = _ref3[0], clonedElement = _ref3[1], resourceLoader = _ref3[2];
            logger.log("Document cloned, using computed rendering");
            var stack = (0, _NodeParser.NodeParser)(clonedElement, resourceLoader, logger);
            var clonedDocument = clonedElement.ownerDocument;
            if (backgroundColor === stack.container.style.background.backgroundColor) stack.container.style.background.backgroundColor = _Color.TRANSPARENT;
            return resourceLoader.ready().then(function(imageStore) {
                var fontMetrics = new _Font.FontMetrics(clonedDocument);
                logger.log("Starting renderer");
                var defaultView = clonedDocument.defaultView;
                var scrollX = defaultView.pageXOffset;
                var scrollY = defaultView.pageYOffset;
                var isDocument = clonedElement.tagName === "HTML" || clonedElement.tagName === "BODY";
                var _ref4 = isDocument ? (0, _Bounds.parseDocumentSize)(ownerDocument) : (0, _Bounds.parseBounds)(clonedElement, scrollX, scrollY), width = _ref4.width, height = _ref4.height, left = _ref4.left, top = _ref4.top;
                var renderOptions = {
                    backgroundColor: backgroundColor,
                    fontMetrics: fontMetrics,
                    imageStore: imageStore,
                    logger: logger,
                    scale: options.scale,
                    x: typeof options.x === "number" ? options.x : left,
                    y: typeof options.y === "number" ? options.y : top,
                    width: typeof options.width === "number" ? options.width : Math.ceil(width),
                    height: typeof options.height === "number" ? options.height : Math.ceil(height)
                };
                if (Array.isArray(options.target)) return Promise.all(options.target.map(function(target) {
                    var renderer = new _Renderer2.default(target, renderOptions);
                    return renderer.render(stack);
                }));
                else {
                    var renderer = new _Renderer2.default(options.target, renderOptions);
                    var canvas = renderer.render(stack);
                    if (options.removeContainer === true) {
                        if (container.parentNode) container.parentNode.removeChild(container);
                        else logger.log("Cannot detach cloned iframe as it is not in the DOM anymore");
                    }
                    return canvas;
                }
            });
        });
    });
};

},{"b6c018bc3690ec1d":"8hmSo","c973c3c107d7ea47":"knXbS","4ba82c00aa74b42":"fLSEZ","bd5d394d7fee618c":"eGP1z","3e0b472dde3e4ac5":"eTSpp","354354592fa130a1":"6yOBg","4111954856b2dc98":"d4kbD","ff74786876c82d28":"h5TBN","8c93f096f20601b1":"hb8Oc"}],"knXbS":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NodeParser = undefined;
var _StackingContext = require("d4093c1dbe5aaeef");
var _StackingContext2 = _interopRequireDefault(_StackingContext);
var _NodeContainer = require("b6a14459c10fb933");
var _NodeContainer2 = _interopRequireDefault(_NodeContainer);
var _TextContainer = require("8487e230a881752d");
var _TextContainer2 = _interopRequireDefault(_TextContainer);
var _Input = require("3e1fc7d0950be98f");
var _ListItem = require("b04130e569faa106");
var _listStyle = require("2b201298fee0a83f");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var NodeParser = exports.NodeParser = function NodeParser(node, resourceLoader, logger) {
    logger.log("Starting node parsing");
    var index = 0;
    var container = new _NodeContainer2.default(node, null, resourceLoader, index++);
    var stack = new _StackingContext2.default(container, null, true);
    parseNodeTree(node, container, stack, resourceLoader, index);
    logger.log("Finished parsing node tree");
    return stack;
};
var IGNORED_NODE_NAMES = [
    "SCRIPT",
    "HEAD",
    "TITLE",
    "OBJECT",
    "BR",
    "OPTION"
];
var parseNodeTree = function parseNodeTree(node, parent, stack, resourceLoader, index) {
    if (index > 50000) throw new Error("Recursion error while parsing node tree");
    for(var childNode = node.firstChild, nextNode; childNode; childNode = nextNode){
        nextNode = childNode.nextSibling;
        var defaultView = childNode.ownerDocument.defaultView;
        if (childNode instanceof defaultView.Text || childNode instanceof Text || defaultView.parent && childNode instanceof defaultView.parent.Text) {
            if (childNode.data.trim().length > 0) parent.childNodes.push(_TextContainer2.default.fromTextNode(childNode, parent));
        } else if (childNode instanceof defaultView.HTMLElement || childNode instanceof HTMLElement || defaultView.parent && childNode instanceof defaultView.parent.HTMLElement) {
            if (IGNORED_NODE_NAMES.indexOf(childNode.nodeName) === -1) {
                var container = new _NodeContainer2.default(childNode, parent, resourceLoader, index++);
                if (container.isVisible()) {
                    if (childNode.tagName === "INPUT") // $FlowFixMe
                    (0, _Input.inlineInputElement)(childNode, container);
                    else if (childNode.tagName === "TEXTAREA") // $FlowFixMe
                    (0, _Input.inlineTextAreaElement)(childNode, container);
                    else if (childNode.tagName === "SELECT") // $FlowFixMe
                    (0, _Input.inlineSelectElement)(childNode, container);
                    else if (container.style.listStyle && container.style.listStyle.listStyleType !== _listStyle.LIST_STYLE_TYPE.NONE) (0, _ListItem.inlineListItemElement)(childNode, container, resourceLoader);
                    var SHOULD_TRAVERSE_CHILDREN = childNode.tagName !== "TEXTAREA";
                    var treatAsRealStackingContext = createsRealStackingContext(container, childNode);
                    if (treatAsRealStackingContext || createsStackingContext(container)) {
                        // for treatAsRealStackingContext:false, any positioned descendants and descendants
                        // which actually create a new stacking context should be considered part of the parent stacking context
                        var parentStack = treatAsRealStackingContext || container.isPositioned() ? stack.getRealParentStackingContext() : stack;
                        var childStack = new _StackingContext2.default(container, parentStack, treatAsRealStackingContext);
                        parentStack.contexts.push(childStack);
                        if (SHOULD_TRAVERSE_CHILDREN) parseNodeTree(childNode, container, childStack, resourceLoader, index);
                    } else {
                        stack.children.push(container);
                        if (SHOULD_TRAVERSE_CHILDREN) parseNodeTree(childNode, container, stack, resourceLoader, index);
                    }
                }
            }
        } else if (childNode instanceof defaultView.SVGSVGElement || childNode instanceof SVGSVGElement || defaultView.parent && childNode instanceof defaultView.parent.SVGSVGElement) {
            var _container = new _NodeContainer2.default(childNode, parent, resourceLoader, index++);
            var _treatAsRealStackingContext = createsRealStackingContext(_container, childNode);
            if (_treatAsRealStackingContext || createsStackingContext(_container)) {
                // for treatAsRealStackingContext:false, any positioned descendants and descendants
                // which actually create a new stacking context should be considered part of the parent stacking context
                var _parentStack = _treatAsRealStackingContext || _container.isPositioned() ? stack.getRealParentStackingContext() : stack;
                var _childStack = new _StackingContext2.default(_container, _parentStack, _treatAsRealStackingContext);
                _parentStack.contexts.push(_childStack);
            } else stack.children.push(_container);
        }
    }
};
var createsRealStackingContext = function createsRealStackingContext(container, node) {
    return container.isRootElement() || container.isPositionedWithZIndex() || container.style.opacity < 1 || container.isTransformed() || isBodyWithTransparentRoot(container, node);
};
var createsStackingContext = function createsStackingContext(container) {
    return container.isPositioned() || container.isFloating();
};
var isBodyWithTransparentRoot = function isBodyWithTransparentRoot(container, node) {
    return node.nodeName === "BODY" && container.parent instanceof _NodeContainer2.default && container.parent.style.background.backgroundColor.isTransparent();
};

},{"d4093c1dbe5aaeef":"16mVj","b6a14459c10fb933":"hZ5hP","8487e230a881752d":"jUMv6","3e1fc7d0950be98f":"9rzok","b04130e569faa106":"14Y4x","2b201298fee0a83f":"fsq6I"}],"16mVj":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _NodeContainer = require("2bcc08dee8b1983d");
var _NodeContainer2 = _interopRequireDefault(_NodeContainer);
var _position = require("f7d7d297ff481821");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var StackingContext = function() {
    function StackingContext(container, parent, treatAsRealStackingContext) {
        _classCallCheck(this, StackingContext);
        this.container = container;
        this.parent = parent;
        this.contexts = [];
        this.children = [];
        this.treatAsRealStackingContext = treatAsRealStackingContext;
    }
    _createClass(StackingContext, [
        {
            key: "getOpacity",
            value: function getOpacity() {
                return this.parent ? this.container.style.opacity * this.parent.getOpacity() : this.container.style.opacity;
            }
        },
        {
            key: "getRealParentStackingContext",
            value: function getRealParentStackingContext() {
                return !this.parent || this.treatAsRealStackingContext ? this : this.parent.getRealParentStackingContext();
            }
        }
    ]);
    return StackingContext;
}();
exports.default = StackingContext;

},{"2bcc08dee8b1983d":"hZ5hP","f7d7d297ff481821":"drX8O"}],"hZ5hP":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _Color = require("fa30bf1354b392f9");
var _Color2 = _interopRequireDefault(_Color);
var _Util = require("cab7fdf29c94af40");
var _background = require("b660709dd75dafb9");
var _border = require("6f8ff15a67dc24ae");
var _borderRadius = require("48f1a7bd108bf21a");
var _display = require("c5a06d73ca9c5498");
var _float = require("d3614fc6de31f45d");
var _font = require("6124f838c6d74c35");
var _letterSpacing = require("8ae36496e2f0213");
var _lineBreak = require("cf020e6be40eb8ee");
var _listStyle = require("4eb744929a33cc8e");
var _margin = require("14ed55e711383d3c");
var _overflow = require("23d7906447f098ad");
var _overflowWrap = require("ba596891d5f7d1dc");
var _padding = require("f6032b437ee01b10");
var _position = require("484dfcd284e90ae5");
var _textDecoration = require("e79167d1b1e4cdd1");
var _textShadow = require("856597d4e471b25e");
var _textTransform = require("f8de60d882f954b6");
var _transform = require("dea80c60ba7a5e79");
var _visibility = require("f5d699f78708ea88");
var _wordBreak = require("7888a35b85fe747a");
var _zIndex = require("29c3e27855fb8750");
var _Bounds = require("fa3b8ec0fa475c18");
var _Input = require("f5c9b0f7b6bf85e9");
var _ListItem = require("7a8c0e09b3c45b0d");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var INPUT_TAGS = [
    "INPUT",
    "TEXTAREA",
    "SELECT"
];
var NodeContainer = function() {
    function NodeContainer(node, parent, resourceLoader, index) {
        var _this = this;
        _classCallCheck(this, NodeContainer);
        this.parent = parent;
        this.tagName = node.tagName;
        this.index = index;
        this.childNodes = [];
        this.listItems = [];
        if (typeof node.start === "number") this.listStart = node.start;
        var defaultView = node.ownerDocument.defaultView;
        var scrollX = defaultView.pageXOffset;
        var scrollY = defaultView.pageYOffset;
        var style = defaultView.getComputedStyle(node, null);
        var display = (0, _display.parseDisplay)(style.display);
        var IS_INPUT = node.type === "radio" || node.type === "checkbox";
        var position = (0, _position.parsePosition)(style.position);
        this.style = {
            background: IS_INPUT ? _Input.INPUT_BACKGROUND : (0, _background.parseBackground)(style, resourceLoader),
            border: IS_INPUT ? _Input.INPUT_BORDERS : (0, _border.parseBorder)(style),
            borderRadius: (node instanceof defaultView.HTMLInputElement || node instanceof HTMLInputElement) && IS_INPUT ? (0, _Input.getInputBorderRadius)(node) : (0, _borderRadius.parseBorderRadius)(style),
            color: IS_INPUT ? _Input.INPUT_COLOR : new _Color2.default(style.color),
            display: display,
            float: (0, _float.parseCSSFloat)(style.float),
            font: (0, _font.parseFont)(style),
            letterSpacing: (0, _letterSpacing.parseLetterSpacing)(style.letterSpacing),
            listStyle: display === _display.DISPLAY.LIST_ITEM ? (0, _listStyle.parseListStyle)(style) : null,
            lineBreak: (0, _lineBreak.parseLineBreak)(style.lineBreak),
            margin: (0, _margin.parseMargin)(style),
            opacity: parseFloat(style.opacity),
            overflow: INPUT_TAGS.indexOf(node.tagName) === -1 ? (0, _overflow.parseOverflow)(style.overflow) : _overflow.OVERFLOW.HIDDEN,
            overflowWrap: (0, _overflowWrap.parseOverflowWrap)(style.overflowWrap ? style.overflowWrap : style.wordWrap),
            padding: (0, _padding.parsePadding)(style),
            position: position,
            textDecoration: (0, _textDecoration.parseTextDecoration)(style),
            textShadow: (0, _textShadow.parseTextShadow)(style.textShadow),
            textTransform: (0, _textTransform.parseTextTransform)(style.textTransform),
            transform: (0, _transform.parseTransform)(style),
            visibility: (0, _visibility.parseVisibility)(style.visibility),
            wordBreak: (0, _wordBreak.parseWordBreak)(style.wordBreak),
            zIndex: (0, _zIndex.parseZIndex)(position !== _position.POSITION.STATIC ? style.zIndex : "auto")
        };
        if (this.isTransformed()) // getBoundingClientRect provides values post-transform, we want them without the transformation
        node.style.transform = "matrix(1,0,0,1,0,0)";
        if (display === _display.DISPLAY.LIST_ITEM) {
            var listOwner = (0, _ListItem.getListOwner)(this);
            if (listOwner) {
                var listIndex = listOwner.listItems.length;
                listOwner.listItems.push(this);
                this.listIndex = node.hasAttribute("value") && typeof node.value === "number" ? node.value : listIndex === 0 ? typeof listOwner.listStart === "number" ? listOwner.listStart : 1 : listOwner.listItems[listIndex - 1].listIndex + 1;
            }
        }
        // TODO move bound retrieval for all nodes to a later stage?
        if (node.tagName === "IMG") node.addEventListener("load", function() {
            _this.bounds = (0, _Bounds.parseBounds)(node, scrollX, scrollY);
            _this.curvedBounds = (0, _Bounds.parseBoundCurves)(_this.bounds, _this.style.border, _this.style.borderRadius);
        });
        this.image = getImage(node, resourceLoader);
        this.bounds = IS_INPUT ? (0, _Input.reformatInputBounds)((0, _Bounds.parseBounds)(node, scrollX, scrollY)) : (0, _Bounds.parseBounds)(node, scrollX, scrollY);
        this.curvedBounds = (0, _Bounds.parseBoundCurves)(this.bounds, this.style.border, this.style.borderRadius);
        this.name = "" + node.tagName.toLowerCase() + (node.id ? "#" + node.id : "") + node.className.toString().split(" ").map(function(s) {
            return s.length ? "." + s : "";
        }).join("");
    }
    _createClass(NodeContainer, [
        {
            key: "getClipPaths",
            value: function getClipPaths() {
                var parentClips = this.parent ? this.parent.getClipPaths() : [];
                var isClipped = this.style.overflow !== _overflow.OVERFLOW.VISIBLE;
                return isClipped ? parentClips.concat([
                    (0, _Bounds.calculatePaddingBoxPath)(this.curvedBounds)
                ]) : parentClips;
            }
        },
        {
            key: "isInFlow",
            value: function isInFlow() {
                return this.isRootElement() && !this.isFloating() && !this.isAbsolutelyPositioned();
            }
        },
        {
            key: "isVisible",
            value: function isVisible() {
                return !(0, _Util.contains)(this.style.display, _display.DISPLAY.NONE) && this.style.opacity > 0 && this.style.visibility === _visibility.VISIBILITY.VISIBLE;
            }
        },
        {
            key: "isAbsolutelyPositioned",
            value: function isAbsolutelyPositioned() {
                return this.style.position !== _position.POSITION.STATIC && this.style.position !== _position.POSITION.RELATIVE;
            }
        },
        {
            key: "isPositioned",
            value: function isPositioned() {
                return this.style.position !== _position.POSITION.STATIC;
            }
        },
        {
            key: "isFloating",
            value: function isFloating() {
                return this.style.float !== _float.FLOAT.NONE;
            }
        },
        {
            key: "isRootElement",
            value: function isRootElement() {
                return this.parent === null;
            }
        },
        {
            key: "isTransformed",
            value: function isTransformed() {
                return this.style.transform !== null;
            }
        },
        {
            key: "isPositionedWithZIndex",
            value: function isPositionedWithZIndex() {
                return this.isPositioned() && !this.style.zIndex.auto;
            }
        },
        {
            key: "isInlineLevel",
            value: function isInlineLevel() {
                return (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_BLOCK) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_FLEX) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_GRID) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_LIST_ITEM) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_TABLE);
            }
        },
        {
            key: "isInlineBlockOrInlineTable",
            value: function isInlineBlockOrInlineTable() {
                return (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_BLOCK) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_TABLE);
            }
        }
    ]);
    return NodeContainer;
}();
exports.default = NodeContainer;
var getImage = function getImage(node, resourceLoader) {
    if (node instanceof node.ownerDocument.defaultView.SVGSVGElement || node instanceof SVGSVGElement) {
        var s = new XMLSerializer();
        return resourceLoader.loadImage("data:image/svg+xml," + encodeURIComponent(s.serializeToString(node)));
    }
    switch(node.tagName){
        case "IMG":
            // $FlowFixMe
            var img = node;
            return resourceLoader.loadImage(img.currentSrc || img.src);
        case "CANVAS":
            // $FlowFixMe
            var canvas = node;
            return resourceLoader.loadCanvas(canvas);
        case "IFRAME":
            var iframeKey = node.getAttribute("data-html2canvas-internal-iframe-key");
            if (iframeKey) return iframeKey;
            break;
    }
    return null;
};

},{"fa30bf1354b392f9":"hb8Oc","cab7fdf29c94af40":"4rxFR","b660709dd75dafb9":"AucYD","6f8ff15a67dc24ae":"b73ib","48f1a7bd108bf21a":"iAR8H","c5a06d73ca9c5498":"hKURW","d3614fc6de31f45d":"hFrDb","6124f838c6d74c35":"fxY6V","8ae36496e2f0213":"3znqA","cf020e6be40eb8ee":"etjFs","4eb744929a33cc8e":"fsq6I","14ed55e711383d3c":"6Ten4","23d7906447f098ad":"he2Rm","ba596891d5f7d1dc":"ippV4","f6032b437ee01b10":"61kkm","484dfcd284e90ae5":"drX8O","e79167d1b1e4cdd1":"lUS2k","856597d4e471b25e":"3brzD","f8de60d882f954b6":"8RICk","dea80c60ba7a5e79":"2NrJx","f5d699f78708ea88":"93yKl","7888a35b85fe747a":"25OfO","29c3e27855fb8750":"jz2rN","fa3b8ec0fa475c18":"6yOBg","f5c9b0f7b6bf85e9":"9rzok","7a8c0e09b3c45b0d":"14Y4x"}],"4rxFR":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var contains = exports.contains = function contains(bit, value) {
    return (bit & value) !== 0;
};
var distance = exports.distance = function distance(a, b) {
    return Math.sqrt(a * a + b * b);
};
var copyCSSStyles = exports.copyCSSStyles = function copyCSSStyles(style, target) {
    // Edge does not provide value for cssText
    for(var i = style.length - 1; i >= 0; i--){
        var property = style.item(i);
        // Safari shows pseudoelements if content is set
        if (property !== "content") target.style.setProperty(property, style.getPropertyValue(property));
    }
    return target;
};
var SMALL_IMAGE = exports.SMALL_IMAGE = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

},{}],"AucYD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseBackgroundImage = exports.parseBackground = exports.calculateBackgroundRepeatPath = exports.calculateBackgroundPosition = exports.calculateBackgroungPositioningArea = exports.calculateBackgroungPaintingArea = exports.calculateGradientBackgroundSize = exports.calculateBackgroundSize = exports.BACKGROUND_ORIGIN = exports.BACKGROUND_CLIP = exports.BACKGROUND_SIZE = exports.BACKGROUND_REPEAT = undefined;
var _Color = require("8d4c0d73c01aa8bb");
var _Color2 = _interopRequireDefault(_Color);
var _Length = require("8b03461006103dd5");
var _Length2 = _interopRequireDefault(_Length);
var _Size = require("cb67590ecffba269");
var _Size2 = _interopRequireDefault(_Size);
var _Vector = require("60b90e6ab308cc17");
var _Vector2 = _interopRequireDefault(_Vector);
var _Bounds = require("a47576be8efe84fd");
var _padding = require("c10367fb67f20dc3");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var BACKGROUND_REPEAT = exports.BACKGROUND_REPEAT = {
    REPEAT: 0,
    NO_REPEAT: 1,
    REPEAT_X: 2,
    REPEAT_Y: 3
};
var BACKGROUND_SIZE = exports.BACKGROUND_SIZE = {
    AUTO: 0,
    CONTAIN: 1,
    COVER: 2,
    LENGTH: 3
};
var BACKGROUND_CLIP = exports.BACKGROUND_CLIP = {
    BORDER_BOX: 0,
    PADDING_BOX: 1,
    CONTENT_BOX: 2
};
var BACKGROUND_ORIGIN = exports.BACKGROUND_ORIGIN = BACKGROUND_CLIP;
var AUTO = "auto";
var BackgroundSize = function BackgroundSize(size) {
    _classCallCheck(this, BackgroundSize);
    switch(size){
        case "contain":
            this.size = BACKGROUND_SIZE.CONTAIN;
            break;
        case "cover":
            this.size = BACKGROUND_SIZE.COVER;
            break;
        case "auto":
            this.size = BACKGROUND_SIZE.AUTO;
            break;
        default:
            this.value = new _Length2.default(size);
    }
};
var calculateBackgroundSize = exports.calculateBackgroundSize = function calculateBackgroundSize(backgroundImage, image, bounds) {
    var width = 0;
    var height = 0;
    var size = backgroundImage.size;
    if (size[0].size === BACKGROUND_SIZE.CONTAIN || size[0].size === BACKGROUND_SIZE.COVER) {
        var targetRatio = bounds.width / bounds.height;
        var currentRatio = image.width / image.height;
        return targetRatio < currentRatio !== (size[0].size === BACKGROUND_SIZE.COVER) ? new _Size2.default(bounds.width, bounds.width / currentRatio) : new _Size2.default(bounds.height * currentRatio, bounds.height);
    }
    if (size[0].value) width = size[0].value.getAbsoluteValue(bounds.width);
    if (size[0].size === BACKGROUND_SIZE.AUTO && size[1].size === BACKGROUND_SIZE.AUTO) height = image.height;
    else if (size[1].size === BACKGROUND_SIZE.AUTO) height = width / image.width * image.height;
    else if (size[1].value) height = size[1].value.getAbsoluteValue(bounds.height);
    if (size[0].size === BACKGROUND_SIZE.AUTO) width = height / image.height * image.width;
    return new _Size2.default(width, height);
};
var calculateGradientBackgroundSize = exports.calculateGradientBackgroundSize = function calculateGradientBackgroundSize(backgroundImage, bounds) {
    var size = backgroundImage.size;
    var width = size[0].value ? size[0].value.getAbsoluteValue(bounds.width) : bounds.width;
    var height = size[1].value ? size[1].value.getAbsoluteValue(bounds.height) : size[0].value ? width : bounds.height;
    return new _Size2.default(width, height);
};
var AUTO_SIZE = new BackgroundSize(AUTO);
var calculateBackgroungPaintingArea = exports.calculateBackgroungPaintingArea = function calculateBackgroungPaintingArea(curves, clip) {
    switch(clip){
        case BACKGROUND_CLIP.BORDER_BOX:
            return (0, _Bounds.calculateBorderBoxPath)(curves);
        case BACKGROUND_CLIP.PADDING_BOX:
        default:
            return (0, _Bounds.calculatePaddingBoxPath)(curves);
    }
};
var calculateBackgroungPositioningArea = exports.calculateBackgroungPositioningArea = function calculateBackgroungPositioningArea(backgroundOrigin, bounds, padding, border) {
    var paddingBox = (0, _Bounds.calculatePaddingBox)(bounds, border);
    switch(backgroundOrigin){
        case BACKGROUND_ORIGIN.BORDER_BOX:
            return bounds;
        case BACKGROUND_ORIGIN.CONTENT_BOX:
            var paddingLeft = padding[_padding.PADDING_SIDES.LEFT].getAbsoluteValue(bounds.width);
            var paddingRight = padding[_padding.PADDING_SIDES.RIGHT].getAbsoluteValue(bounds.width);
            var paddingTop = padding[_padding.PADDING_SIDES.TOP].getAbsoluteValue(bounds.width);
            var paddingBottom = padding[_padding.PADDING_SIDES.BOTTOM].getAbsoluteValue(bounds.width);
            return new _Bounds.Bounds(paddingBox.left + paddingLeft, paddingBox.top + paddingTop, paddingBox.width - paddingLeft - paddingRight, paddingBox.height - paddingTop - paddingBottom);
        case BACKGROUND_ORIGIN.PADDING_BOX:
        default:
            return paddingBox;
    }
};
var calculateBackgroundPosition = exports.calculateBackgroundPosition = function calculateBackgroundPosition(position, size, bounds) {
    return new _Vector2.default(position[0].getAbsoluteValue(bounds.width - size.width), position[1].getAbsoluteValue(bounds.height - size.height));
};
var calculateBackgroundRepeatPath = exports.calculateBackgroundRepeatPath = function calculateBackgroundRepeatPath(background, position, size, backgroundPositioningArea, bounds) {
    var repeat = background.repeat;
    switch(repeat){
        case BACKGROUND_REPEAT.REPEAT_X:
            return [
                new _Vector2.default(Math.round(bounds.left), Math.round(backgroundPositioningArea.top + position.y)),
                new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(backgroundPositioningArea.top + position.y)),
                new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(size.height + backgroundPositioningArea.top + position.y)),
                new _Vector2.default(Math.round(bounds.left), Math.round(size.height + backgroundPositioningArea.top + position.y))
            ];
        case BACKGROUND_REPEAT.REPEAT_Y:
            return [
                new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(bounds.top)),
                new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(bounds.top)),
                new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(bounds.height + bounds.top)),
                new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(bounds.height + bounds.top))
            ];
        case BACKGROUND_REPEAT.NO_REPEAT:
            return [
                new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y)),
                new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(backgroundPositioningArea.top + position.y)),
                new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(backgroundPositioningArea.top + position.y + size.height)),
                new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y + size.height))
            ];
        default:
            return [
                new _Vector2.default(Math.round(bounds.left), Math.round(bounds.top)),
                new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(bounds.top)),
                new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(bounds.height + bounds.top)),
                new _Vector2.default(Math.round(bounds.left), Math.round(bounds.height + bounds.top))
            ];
    }
};
var parseBackground = exports.parseBackground = function parseBackground(style, resourceLoader) {
    return {
        backgroundColor: new _Color2.default(style.backgroundColor),
        backgroundImage: parseBackgroundImages(style, resourceLoader),
        backgroundClip: parseBackgroundClip(style.backgroundClip),
        backgroundOrigin: parseBackgroundOrigin(style.backgroundOrigin)
    };
};
var parseBackgroundClip = function parseBackgroundClip(backgroundClip) {
    switch(backgroundClip){
        case "padding-box":
            return BACKGROUND_CLIP.PADDING_BOX;
        case "content-box":
            return BACKGROUND_CLIP.CONTENT_BOX;
    }
    return BACKGROUND_CLIP.BORDER_BOX;
};
var parseBackgroundOrigin = function parseBackgroundOrigin(backgroundOrigin) {
    switch(backgroundOrigin){
        case "padding-box":
            return BACKGROUND_ORIGIN.PADDING_BOX;
        case "content-box":
            return BACKGROUND_ORIGIN.CONTENT_BOX;
    }
    return BACKGROUND_ORIGIN.BORDER_BOX;
};
var parseBackgroundRepeat = function parseBackgroundRepeat(backgroundRepeat) {
    switch(backgroundRepeat.trim()){
        case "no-repeat":
            return BACKGROUND_REPEAT.NO_REPEAT;
        case "repeat-x":
        case "repeat no-repeat":
            return BACKGROUND_REPEAT.REPEAT_X;
        case "repeat-y":
        case "no-repeat repeat":
            return BACKGROUND_REPEAT.REPEAT_Y;
        case "repeat":
            return BACKGROUND_REPEAT.REPEAT;
    }
    console.error('Invalid background-repeat value "' + backgroundRepeat + '"');
    return BACKGROUND_REPEAT.REPEAT;
};
var parseBackgroundImages = function parseBackgroundImages(style, resourceLoader) {
    var sources = parseBackgroundImage(style.backgroundImage).map(function(backgroundImage) {
        if (backgroundImage.method === "url") {
            var key = resourceLoader.loadImage(backgroundImage.args[0]);
            backgroundImage.args = key ? [
                key
            ] : [];
        }
        return backgroundImage;
    });
    var positions = style.backgroundPosition.split(",");
    var repeats = style.backgroundRepeat.split(",");
    var sizes = style.backgroundSize.split(",");
    return sources.map(function(source, index) {
        var size = (sizes[index] || AUTO).trim().split(" ").map(parseBackgroundSize);
        var position = (positions[index] || AUTO).trim().split(" ").map(parseBackgoundPosition);
        return {
            source: source,
            repeat: parseBackgroundRepeat(typeof repeats[index] === "string" ? repeats[index] : repeats[0]),
            size: size.length < 2 ? [
                size[0],
                AUTO_SIZE
            ] : [
                size[0],
                size[1]
            ],
            position: position.length < 2 ? [
                position[0],
                position[0]
            ] : [
                position[0],
                position[1]
            ]
        };
    });
};
var parseBackgroundSize = function parseBackgroundSize(size) {
    return size === "auto" ? AUTO_SIZE : new BackgroundSize(size);
};
var parseBackgoundPosition = function parseBackgoundPosition(position) {
    switch(position){
        case "bottom":
        case "right":
            return new _Length2.default("100%");
        case "left":
        case "top":
            return new _Length2.default("0%");
        case "auto":
            return new _Length2.default("0");
    }
    return new _Length2.default(position);
};
var parseBackgroundImage = exports.parseBackgroundImage = function parseBackgroundImage(image) {
    var whitespace = /^\s$/;
    var results = [];
    var args = [];
    var method = "";
    var quote = null;
    var definition = "";
    var mode = 0;
    var numParen = 0;
    var appendResult = function appendResult() {
        var prefix = "";
        if (method) {
            if (definition.substr(0, 1) === '"') definition = definition.substr(1, definition.length - 2);
            if (definition) args.push(definition.trim());
            var prefix_i = method.indexOf("-", 1) + 1;
            if (method.substr(0, 1) === "-" && prefix_i > 0) {
                prefix = method.substr(0, prefix_i).toLowerCase();
                method = method.substr(prefix_i);
            }
            method = method.toLowerCase();
            if (method !== "none") results.push({
                prefix: prefix,
                method: method,
                args: args
            });
        }
        args = [];
        method = definition = "";
    };
    image.split("").forEach(function(c) {
        if (mode === 0 && whitespace.test(c)) return;
        switch(c){
            case '"':
                if (!quote) quote = c;
                else if (quote === c) quote = null;
                break;
            case "(":
                if (quote) break;
                else if (mode === 0) {
                    mode = 1;
                    return;
                } else numParen++;
                break;
            case ")":
                if (quote) break;
                else if (mode === 1) {
                    if (numParen === 0) {
                        mode = 0;
                        appendResult();
                        return;
                    } else numParen--;
                }
                break;
            case ",":
                if (quote) break;
                else if (mode === 0) {
                    appendResult();
                    return;
                } else if (mode === 1) {
                    if (numParen === 0 && !method.match(/^url$/i)) {
                        args.push(definition.trim());
                        definition = "";
                        return;
                    }
                }
                break;
        }
        if (mode === 0) method += c;
        else definition += c;
    });
    appendResult();
    return results;
};

},{"8d4c0d73c01aa8bb":"hb8Oc","8b03461006103dd5":"hGzHQ","cb67590ecffba269":"azeJe","60b90e6ab308cc17":"7rENX","a47576be8efe84fd":"6yOBg","c10367fb67f20dc3":"61kkm"}],"hGzHQ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.calculateLengthFromValueWithUnit = exports.LENGTH_TYPE = undefined;
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _NodeContainer = require("df0f011d532ce092");
var _NodeContainer2 = _interopRequireDefault(_NodeContainer);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var LENGTH_WITH_UNIT = /([\d.]+)(px|r?em|%)/i;
var LENGTH_TYPE = exports.LENGTH_TYPE = {
    PX: 0,
    PERCENTAGE: 1
};
var Length = function() {
    function Length(value) {
        _classCallCheck(this, Length);
        this.type = value.substr(value.length - 1) === "%" ? LENGTH_TYPE.PERCENTAGE : LENGTH_TYPE.PX;
        var parsedValue = parseFloat(value);
        if (isNaN(parsedValue)) console.error('Invalid value given for Length: "' + value + '"');
        this.value = isNaN(parsedValue) ? 0 : parsedValue;
    }
    _createClass(Length, [
        {
            key: "isPercentage",
            value: function isPercentage() {
                return this.type === LENGTH_TYPE.PERCENTAGE;
            }
        },
        {
            key: "getAbsoluteValue",
            value: function getAbsoluteValue(parentLength) {
                return this.isPercentage() ? parentLength * (this.value / 100) : this.value;
            }
        }
    ], [
        {
            key: "create",
            value: function create(v) {
                return new Length(v);
            }
        }
    ]);
    return Length;
}();
exports.default = Length;
var getRootFontSize = function getRootFontSize(container) {
    var parent = container.parent;
    return parent ? getRootFontSize(parent) : parseFloat(container.style.font.fontSize);
};
var calculateLengthFromValueWithUnit = exports.calculateLengthFromValueWithUnit = function calculateLengthFromValueWithUnit(container, value, unit) {
    switch(unit){
        case "px":
        case "%":
            return new Length(value + unit);
        case "em":
        case "rem":
            var length = new Length(value);
            length.value *= unit === "em" ? parseFloat(container.style.font.fontSize) : getRootFontSize(container);
            return length;
        default:
            // TODO: handle correctly if unknown unit is used
            return new Length("0");
    }
};

},{"df0f011d532ce092":"hZ5hP"}],"azeJe":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var Size = function Size(width, height) {
    _classCallCheck(this, Size);
    this.width = width;
    this.height = height;
};
exports.default = Size;

},{}],"7rENX":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _Path = require("dd4f93af597c495");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var Vector = function Vector(x, y) {
    _classCallCheck(this, Vector);
    this.type = _Path.PATH.VECTOR;
    this.x = x;
    this.y = y;
    if (isNaN(x)) console.error("Invalid x value given for Vector");
    if (isNaN(y)) console.error("Invalid y value given for Vector");
};
exports.default = Vector;

},{"dd4f93af597c495":"fsY0i"}],"6yOBg":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseBoundCurves = exports.calculatePaddingBoxPath = exports.calculateBorderBoxPath = exports.parsePathForBorder = exports.parseDocumentSize = exports.calculateContentBox = exports.calculatePaddingBox = exports.parseBounds = exports.Bounds = undefined;
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _Vector = require("73c82374d2460b5");
var _Vector2 = _interopRequireDefault(_Vector);
var _BezierCurve = require("745597fb7a130b9");
var _BezierCurve2 = _interopRequireDefault(_BezierCurve);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var TOP = 0;
var RIGHT = 1;
var BOTTOM = 2;
var LEFT = 3;
var H = 0;
var V = 1;
var Bounds = exports.Bounds = function() {
    function Bounds(x, y, w, h) {
        _classCallCheck(this, Bounds);
        this.left = x;
        this.top = y;
        this.width = w;
        this.height = h;
    }
    _createClass(Bounds, null, [
        {
            key: "fromClientRect",
            value: function fromClientRect(clientRect, scrollX, scrollY) {
                return new Bounds(clientRect.left + scrollX, clientRect.top + scrollY, clientRect.width, clientRect.height);
            }
        }
    ]);
    return Bounds;
}();
var parseBounds = exports.parseBounds = function parseBounds(node, scrollX, scrollY) {
    return Bounds.fromClientRect(node.getBoundingClientRect(), scrollX, scrollY);
};
var calculatePaddingBox = exports.calculatePaddingBox = function calculatePaddingBox(bounds, borders) {
    return new Bounds(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth, bounds.width - (borders[RIGHT].borderWidth + borders[LEFT].borderWidth), bounds.height - (borders[TOP].borderWidth + borders[BOTTOM].borderWidth));
};
var calculateContentBox = exports.calculateContentBox = function calculateContentBox(bounds, padding, borders) {
    // TODO support percentage paddings
    var paddingTop = padding[TOP].value;
    var paddingRight = padding[RIGHT].value;
    var paddingBottom = padding[BOTTOM].value;
    var paddingLeft = padding[LEFT].value;
    return new Bounds(bounds.left + paddingLeft + borders[LEFT].borderWidth, bounds.top + paddingTop + borders[TOP].borderWidth, bounds.width - (borders[RIGHT].borderWidth + borders[LEFT].borderWidth + paddingLeft + paddingRight), bounds.height - (borders[TOP].borderWidth + borders[BOTTOM].borderWidth + paddingTop + paddingBottom));
};
var parseDocumentSize = exports.parseDocumentSize = function parseDocumentSize(document) {
    var body = document.body;
    var documentElement = document.documentElement;
    if (!body || !documentElement) throw new Error("Unable to get document size");
    var width = Math.max(Math.max(body.scrollWidth, documentElement.scrollWidth), Math.max(body.offsetWidth, documentElement.offsetWidth), Math.max(body.clientWidth, documentElement.clientWidth));
    var height = Math.max(Math.max(body.scrollHeight, documentElement.scrollHeight), Math.max(body.offsetHeight, documentElement.offsetHeight), Math.max(body.clientHeight, documentElement.clientHeight));
    return new Bounds(0, 0, width, height);
};
var parsePathForBorder = exports.parsePathForBorder = function parsePathForBorder(curves, borderSide) {
    switch(borderSide){
        case TOP:
            return createPathFromCurves(curves.topLeftOuter, curves.topLeftInner, curves.topRightOuter, curves.topRightInner);
        case RIGHT:
            return createPathFromCurves(curves.topRightOuter, curves.topRightInner, curves.bottomRightOuter, curves.bottomRightInner);
        case BOTTOM:
            return createPathFromCurves(curves.bottomRightOuter, curves.bottomRightInner, curves.bottomLeftOuter, curves.bottomLeftInner);
        case LEFT:
        default:
            return createPathFromCurves(curves.bottomLeftOuter, curves.bottomLeftInner, curves.topLeftOuter, curves.topLeftInner);
    }
};
var createPathFromCurves = function createPathFromCurves(outer1, inner1, outer2, inner2) {
    var path = [];
    if (outer1 instanceof _BezierCurve2.default) path.push(outer1.subdivide(0.5, false));
    else path.push(outer1);
    if (outer2 instanceof _BezierCurve2.default) path.push(outer2.subdivide(0.5, true));
    else path.push(outer2);
    if (inner2 instanceof _BezierCurve2.default) path.push(inner2.subdivide(0.5, true).reverse());
    else path.push(inner2);
    if (inner1 instanceof _BezierCurve2.default) path.push(inner1.subdivide(0.5, false).reverse());
    else path.push(inner1);
    return path;
};
var calculateBorderBoxPath = exports.calculateBorderBoxPath = function calculateBorderBoxPath(curves) {
    return [
        curves.topLeftOuter,
        curves.topRightOuter,
        curves.bottomRightOuter,
        curves.bottomLeftOuter
    ];
};
var calculatePaddingBoxPath = exports.calculatePaddingBoxPath = function calculatePaddingBoxPath(curves) {
    return [
        curves.topLeftInner,
        curves.topRightInner,
        curves.bottomRightInner,
        curves.bottomLeftInner
    ];
};
var parseBoundCurves = exports.parseBoundCurves = function parseBoundCurves(bounds, borders, borderRadius) {
    var tlh = borderRadius[CORNER.TOP_LEFT][H].getAbsoluteValue(bounds.width);
    var tlv = borderRadius[CORNER.TOP_LEFT][V].getAbsoluteValue(bounds.height);
    var trh = borderRadius[CORNER.TOP_RIGHT][H].getAbsoluteValue(bounds.width);
    var trv = borderRadius[CORNER.TOP_RIGHT][V].getAbsoluteValue(bounds.height);
    var brh = borderRadius[CORNER.BOTTOM_RIGHT][H].getAbsoluteValue(bounds.width);
    var brv = borderRadius[CORNER.BOTTOM_RIGHT][V].getAbsoluteValue(bounds.height);
    var blh = borderRadius[CORNER.BOTTOM_LEFT][H].getAbsoluteValue(bounds.width);
    var blv = borderRadius[CORNER.BOTTOM_LEFT][V].getAbsoluteValue(bounds.height);
    var factors = [];
    factors.push((tlh + trh) / bounds.width);
    factors.push((blh + brh) / bounds.width);
    factors.push((tlv + blv) / bounds.height);
    factors.push((trv + brv) / bounds.height);
    var maxFactor = Math.max.apply(Math, factors);
    if (maxFactor > 1) {
        tlh /= maxFactor;
        tlv /= maxFactor;
        trh /= maxFactor;
        trv /= maxFactor;
        brh /= maxFactor;
        brv /= maxFactor;
        blh /= maxFactor;
        blv /= maxFactor;
    }
    var topWidth = bounds.width - trh;
    var rightHeight = bounds.height - brv;
    var bottomWidth = bounds.width - brh;
    var leftHeight = bounds.height - blv;
    return {
        topLeftOuter: tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left, bounds.top, tlh, tlv, CORNER.TOP_LEFT) : new _Vector2.default(bounds.left, bounds.top),
        topLeftInner: tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth, Math.max(0, tlh - borders[LEFT].borderWidth), Math.max(0, tlv - borders[TOP].borderWidth), CORNER.TOP_LEFT) : new _Vector2.default(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth),
        topRightOuter: trh > 0 || trv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top, trh, trv, CORNER.TOP_RIGHT) : new _Vector2.default(bounds.left + bounds.width, bounds.top),
        topRightInner: trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borders[LEFT].borderWidth), bounds.top + borders[TOP].borderWidth, topWidth > bounds.width + borders[LEFT].borderWidth ? 0 : trh - borders[LEFT].borderWidth, trv - borders[TOP].borderWidth, CORNER.TOP_RIGHT) : new _Vector2.default(bounds.left + bounds.width - borders[RIGHT].borderWidth, bounds.top + borders[TOP].borderWidth),
        bottomRightOuter: brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh, brv, CORNER.BOTTOM_RIGHT) : new _Vector2.default(bounds.left + bounds.width, bounds.top + bounds.height),
        bottomRightInner: brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - borders[LEFT].borderWidth), bounds.top + Math.min(rightHeight, bounds.height + borders[TOP].borderWidth), Math.max(0, brh - borders[RIGHT].borderWidth), brv - borders[BOTTOM].borderWidth, CORNER.BOTTOM_RIGHT) : new _Vector2.default(bounds.left + bounds.width - borders[RIGHT].borderWidth, bounds.top + bounds.height - borders[BOTTOM].borderWidth),
        bottomLeftOuter: blh > 0 || blv > 0 ? getCurvePoints(bounds.left, bounds.top + leftHeight, blh, blv, CORNER.BOTTOM_LEFT) : new _Vector2.default(bounds.left, bounds.top + bounds.height),
        bottomLeftInner: blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borders[LEFT].borderWidth, bounds.top + leftHeight, Math.max(0, blh - borders[LEFT].borderWidth), blv - borders[BOTTOM].borderWidth, CORNER.BOTTOM_LEFT) : new _Vector2.default(bounds.left + borders[LEFT].borderWidth, bounds.top + bounds.height - borders[BOTTOM].borderWidth)
    };
};
var CORNER = {
    TOP_LEFT: 0,
    TOP_RIGHT: 1,
    BOTTOM_RIGHT: 2,
    BOTTOM_LEFT: 3
};
var getCurvePoints = function getCurvePoints(x, y, r1, r2, position) {
    var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
    var ox = r1 * kappa; // control point offset horizontal
    var oy = r2 * kappa; // control point offset vertical
    var xm = x + r1; // x-middle
    var ym = y + r2; // y-middle
    switch(position){
        case CORNER.TOP_LEFT:
            return new _BezierCurve2.default(new _Vector2.default(x, ym), new _Vector2.default(x, ym - oy), new _Vector2.default(xm - ox, y), new _Vector2.default(xm, y));
        case CORNER.TOP_RIGHT:
            return new _BezierCurve2.default(new _Vector2.default(x, y), new _Vector2.default(x + ox, y), new _Vector2.default(xm, ym - oy), new _Vector2.default(xm, ym));
        case CORNER.BOTTOM_RIGHT:
            return new _BezierCurve2.default(new _Vector2.default(xm, y), new _Vector2.default(xm, y + oy), new _Vector2.default(x + ox, ym), new _Vector2.default(x, ym));
        case CORNER.BOTTOM_LEFT:
        default:
            return new _BezierCurve2.default(new _Vector2.default(xm, ym), new _Vector2.default(xm - ox, ym), new _Vector2.default(x, y + oy), new _Vector2.default(x, y));
    }
};

},{"73c82374d2460b5":"7rENX","745597fb7a130b9":"lWvom"}],"lWvom":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _Path = require("5804c7fc011cefc7");
var _Vector = require("fac87581e9cef6e0");
var _Vector2 = _interopRequireDefault(_Vector);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var lerp = function lerp(a, b, t) {
    return new _Vector2.default(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
};
var BezierCurve = function() {
    function BezierCurve(start, startControl, endControl, end) {
        _classCallCheck(this, BezierCurve);
        this.type = _Path.PATH.BEZIER_CURVE;
        this.start = start;
        this.startControl = startControl;
        this.endControl = endControl;
        this.end = end;
    }
    _createClass(BezierCurve, [
        {
            key: "subdivide",
            value: function subdivide(t, firstHalf) {
                var ab = lerp(this.start, this.startControl, t);
                var bc = lerp(this.startControl, this.endControl, t);
                var cd = lerp(this.endControl, this.end, t);
                var abbc = lerp(ab, bc, t);
                var bccd = lerp(bc, cd, t);
                var dest = lerp(abbc, bccd, t);
                return firstHalf ? new BezierCurve(this.start, ab, abbc, dest) : new BezierCurve(dest, bccd, cd, this.end);
            }
        },
        {
            key: "reverse",
            value: function reverse() {
                return new BezierCurve(this.end, this.endControl, this.startControl, this.start);
            }
        }
    ]);
    return BezierCurve;
}();
exports.default = BezierCurve;

},{"5804c7fc011cefc7":"fsY0i","fac87581e9cef6e0":"7rENX"}],"61kkm":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parsePadding = exports.PADDING_SIDES = undefined;
var _Length = require("d8c12d7c00778eaa");
var _Length2 = _interopRequireDefault(_Length);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var PADDING_SIDES = exports.PADDING_SIDES = {
    TOP: 0,
    RIGHT: 1,
    BOTTOM: 2,
    LEFT: 3
};
var SIDES = [
    "top",
    "right",
    "bottom",
    "left"
];
var parsePadding = exports.parsePadding = function parsePadding(style) {
    return SIDES.map(function(side) {
        return new _Length2.default(style.getPropertyValue("padding-" + side));
    });
};

},{"d8c12d7c00778eaa":"hGzHQ"}],"b73ib":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseBorder = exports.BORDER_SIDES = exports.BORDER_STYLE = undefined;
var _Color = require("d8b094003f486c8b");
var _Color2 = _interopRequireDefault(_Color);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var BORDER_STYLE = exports.BORDER_STYLE = {
    NONE: 0,
    SOLID: 1
};
var BORDER_SIDES = exports.BORDER_SIDES = {
    TOP: 0,
    RIGHT: 1,
    BOTTOM: 2,
    LEFT: 3
};
var SIDES = Object.keys(BORDER_SIDES).map(function(s) {
    return s.toLowerCase();
});
var parseBorderStyle = function parseBorderStyle(style) {
    switch(style){
        case "none":
            return BORDER_STYLE.NONE;
    }
    return BORDER_STYLE.SOLID;
};
var parseBorder = exports.parseBorder = function parseBorder(style) {
    return SIDES.map(function(side) {
        var borderColor = new _Color2.default(style.getPropertyValue("border-" + side + "-color"));
        var borderStyle = parseBorderStyle(style.getPropertyValue("border-" + side + "-style"));
        var borderWidth = parseFloat(style.getPropertyValue("border-" + side + "-width"));
        return {
            borderColor: borderColor,
            borderStyle: borderStyle,
            borderWidth: isNaN(borderWidth) ? 0 : borderWidth
        };
    });
};

},{"d8b094003f486c8b":"hb8Oc"}],"iAR8H":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseBorderRadius = undefined;
var _slicedToArray = function() {
    function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
            for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally{
            try {
                if (!_n && _i["return"]) _i["return"]();
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    return function(arr, i) {
        if (Array.isArray(arr)) return arr;
        else if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
        else throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}();
var _Length = require("2d36644e5828eeff");
var _Length2 = _interopRequireDefault(_Length);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var SIDES = [
    "top-left",
    "top-right",
    "bottom-right",
    "bottom-left"
];
var parseBorderRadius = exports.parseBorderRadius = function parseBorderRadius(style) {
    return SIDES.map(function(side) {
        var value = style.getPropertyValue("border-" + side + "-radius");
        var _value$split$map = value.split(" ").map(_Length2.default.create), _value$split$map2 = _slicedToArray(_value$split$map, 2), horizontal = _value$split$map2[0], vertical = _value$split$map2[1];
        return typeof vertical === "undefined" ? [
            horizontal,
            horizontal
        ] : [
            horizontal,
            vertical
        ];
    });
};

},{"2d36644e5828eeff":"hGzHQ"}],"hKURW":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var DISPLAY = exports.DISPLAY = {
    NONE: 1,
    BLOCK: 2,
    INLINE: 4,
    RUN_IN: 8,
    FLOW: 16,
    FLOW_ROOT: 32,
    TABLE: 64,
    FLEX: 128,
    GRID: 256,
    RUBY: 512,
    SUBGRID: 1024,
    LIST_ITEM: 2048,
    TABLE_ROW_GROUP: 4096,
    TABLE_HEADER_GROUP: 8192,
    TABLE_FOOTER_GROUP: 16384,
    TABLE_ROW: 32768,
    TABLE_CELL: 65536,
    TABLE_COLUMN_GROUP: 131072,
    TABLE_COLUMN: 262144,
    TABLE_CAPTION: 524288,
    RUBY_BASE: 1048576,
    RUBY_TEXT: 2097152,
    RUBY_BASE_CONTAINER: 4194304,
    RUBY_TEXT_CONTAINER: 8388608,
    CONTENTS: 16777216,
    INLINE_BLOCK: 33554432,
    INLINE_LIST_ITEM: 67108864,
    INLINE_TABLE: 134217728,
    INLINE_FLEX: 268435456,
    INLINE_GRID: 536870912
};
var parseDisplayValue = function parseDisplayValue(display) {
    switch(display){
        case "block":
            return DISPLAY.BLOCK;
        case "inline":
            return DISPLAY.INLINE;
        case "run-in":
            return DISPLAY.RUN_IN;
        case "flow":
            return DISPLAY.FLOW;
        case "flow-root":
            return DISPLAY.FLOW_ROOT;
        case "table":
            return DISPLAY.TABLE;
        case "flex":
            return DISPLAY.FLEX;
        case "grid":
            return DISPLAY.GRID;
        case "ruby":
            return DISPLAY.RUBY;
        case "subgrid":
            return DISPLAY.SUBGRID;
        case "list-item":
            return DISPLAY.LIST_ITEM;
        case "table-row-group":
            return DISPLAY.TABLE_ROW_GROUP;
        case "table-header-group":
            return DISPLAY.TABLE_HEADER_GROUP;
        case "table-footer-group":
            return DISPLAY.TABLE_FOOTER_GROUP;
        case "table-row":
            return DISPLAY.TABLE_ROW;
        case "table-cell":
            return DISPLAY.TABLE_CELL;
        case "table-column-group":
            return DISPLAY.TABLE_COLUMN_GROUP;
        case "table-column":
            return DISPLAY.TABLE_COLUMN;
        case "table-caption":
            return DISPLAY.TABLE_CAPTION;
        case "ruby-base":
            return DISPLAY.RUBY_BASE;
        case "ruby-text":
            return DISPLAY.RUBY_TEXT;
        case "ruby-base-container":
            return DISPLAY.RUBY_BASE_CONTAINER;
        case "ruby-text-container":
            return DISPLAY.RUBY_TEXT_CONTAINER;
        case "contents":
            return DISPLAY.CONTENTS;
        case "inline-block":
            return DISPLAY.INLINE_BLOCK;
        case "inline-list-item":
            return DISPLAY.INLINE_LIST_ITEM;
        case "inline-table":
            return DISPLAY.INLINE_TABLE;
        case "inline-flex":
            return DISPLAY.INLINE_FLEX;
        case "inline-grid":
            return DISPLAY.INLINE_GRID;
    }
    return DISPLAY.NONE;
};
var setDisplayBit = function setDisplayBit(bit, display) {
    return bit | parseDisplayValue(display);
};
var parseDisplay = exports.parseDisplay = function parseDisplay(display) {
    return display.split(" ").reduce(setDisplayBit, 0);
};

},{}],"hFrDb":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var FLOAT = exports.FLOAT = {
    NONE: 0,
    LEFT: 1,
    RIGHT: 2,
    INLINE_START: 3,
    INLINE_END: 4
};
var parseCSSFloat = exports.parseCSSFloat = function parseCSSFloat(float) {
    switch(float){
        case "left":
            return FLOAT.LEFT;
        case "right":
            return FLOAT.RIGHT;
        case "inline-start":
            return FLOAT.INLINE_START;
        case "inline-end":
            return FLOAT.INLINE_END;
    }
    return FLOAT.NONE;
};

},{}],"fxY6V":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var parseFontWeight = function parseFontWeight(weight) {
    switch(weight){
        case "normal":
            return 400;
        case "bold":
            return 700;
    }
    var value = parseInt(weight, 10);
    return isNaN(value) ? 400 : value;
};
var parseFont = exports.parseFont = function parseFont(style) {
    var fontFamily = style.fontFamily;
    var fontSize = style.fontSize;
    var fontStyle = style.fontStyle;
    var fontVariant = style.fontVariant;
    var fontWeight = parseFontWeight(style.fontWeight);
    return {
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontStyle: fontStyle,
        fontVariant: fontVariant,
        fontWeight: fontWeight
    };
};

},{}],"3znqA":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var parseLetterSpacing = exports.parseLetterSpacing = function parseLetterSpacing(letterSpacing) {
    if (letterSpacing === "normal") return 0;
    var value = parseFloat(letterSpacing);
    return isNaN(value) ? 0 : value;
};

},{}],"etjFs":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var LINE_BREAK = exports.LINE_BREAK = {
    NORMAL: "normal",
    STRICT: "strict"
};
var parseLineBreak = exports.parseLineBreak = function parseLineBreak(wordBreak) {
    switch(wordBreak){
        case "strict":
            return LINE_BREAK.STRICT;
        case "normal":
        default:
            return LINE_BREAK.NORMAL;
    }
};

},{}],"fsq6I":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseListStyle = exports.parseListStyleType = exports.LIST_STYLE_TYPE = exports.LIST_STYLE_POSITION = undefined;
var _background = require("2e6cb83e3ee622f3");
var LIST_STYLE_POSITION = exports.LIST_STYLE_POSITION = {
    INSIDE: 0,
    OUTSIDE: 1
};
var LIST_STYLE_TYPE = exports.LIST_STYLE_TYPE = {
    NONE: -1,
    DISC: 0,
    CIRCLE: 1,
    SQUARE: 2,
    DECIMAL: 3,
    CJK_DECIMAL: 4,
    DECIMAL_LEADING_ZERO: 5,
    LOWER_ROMAN: 6,
    UPPER_ROMAN: 7,
    LOWER_GREEK: 8,
    LOWER_ALPHA: 9,
    UPPER_ALPHA: 10,
    ARABIC_INDIC: 11,
    ARMENIAN: 12,
    BENGALI: 13,
    CAMBODIAN: 14,
    CJK_EARTHLY_BRANCH: 15,
    CJK_HEAVENLY_STEM: 16,
    CJK_IDEOGRAPHIC: 17,
    DEVANAGARI: 18,
    ETHIOPIC_NUMERIC: 19,
    GEORGIAN: 20,
    GUJARATI: 21,
    GURMUKHI: 22,
    HEBREW: 22,
    HIRAGANA: 23,
    HIRAGANA_IROHA: 24,
    JAPANESE_FORMAL: 25,
    JAPANESE_INFORMAL: 26,
    KANNADA: 27,
    KATAKANA: 28,
    KATAKANA_IROHA: 29,
    KHMER: 30,
    KOREAN_HANGUL_FORMAL: 31,
    KOREAN_HANJA_FORMAL: 32,
    KOREAN_HANJA_INFORMAL: 33,
    LAO: 34,
    LOWER_ARMENIAN: 35,
    MALAYALAM: 36,
    MONGOLIAN: 37,
    MYANMAR: 38,
    ORIYA: 39,
    PERSIAN: 40,
    SIMP_CHINESE_FORMAL: 41,
    SIMP_CHINESE_INFORMAL: 42,
    TAMIL: 43,
    TELUGU: 44,
    THAI: 45,
    TIBETAN: 46,
    TRAD_CHINESE_FORMAL: 47,
    TRAD_CHINESE_INFORMAL: 48,
    UPPER_ARMENIAN: 49,
    DISCLOSURE_OPEN: 50,
    DISCLOSURE_CLOSED: 51
};
var parseListStyleType = exports.parseListStyleType = function parseListStyleType(type) {
    switch(type){
        case "disc":
            return LIST_STYLE_TYPE.DISC;
        case "circle":
            return LIST_STYLE_TYPE.CIRCLE;
        case "square":
            return LIST_STYLE_TYPE.SQUARE;
        case "decimal":
            return LIST_STYLE_TYPE.DECIMAL;
        case "cjk-decimal":
            return LIST_STYLE_TYPE.CJK_DECIMAL;
        case "decimal-leading-zero":
            return LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO;
        case "lower-roman":
            return LIST_STYLE_TYPE.LOWER_ROMAN;
        case "upper-roman":
            return LIST_STYLE_TYPE.UPPER_ROMAN;
        case "lower-greek":
            return LIST_STYLE_TYPE.LOWER_GREEK;
        case "lower-alpha":
            return LIST_STYLE_TYPE.LOWER_ALPHA;
        case "upper-alpha":
            return LIST_STYLE_TYPE.UPPER_ALPHA;
        case "arabic-indic":
            return LIST_STYLE_TYPE.ARABIC_INDIC;
        case "armenian":
            return LIST_STYLE_TYPE.ARMENIAN;
        case "bengali":
            return LIST_STYLE_TYPE.BENGALI;
        case "cambodian":
            return LIST_STYLE_TYPE.CAMBODIAN;
        case "cjk-earthly-branch":
            return LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH;
        case "cjk-heavenly-stem":
            return LIST_STYLE_TYPE.CJK_HEAVENLY_STEM;
        case "cjk-ideographic":
            return LIST_STYLE_TYPE.CJK_IDEOGRAPHIC;
        case "devanagari":
            return LIST_STYLE_TYPE.DEVANAGARI;
        case "ethiopic-numeric":
            return LIST_STYLE_TYPE.ETHIOPIC_NUMERIC;
        case "georgian":
            return LIST_STYLE_TYPE.GEORGIAN;
        case "gujarati":
            return LIST_STYLE_TYPE.GUJARATI;
        case "gurmukhi":
            return LIST_STYLE_TYPE.GURMUKHI;
        case "hebrew":
            return LIST_STYLE_TYPE.HEBREW;
        case "hiragana":
            return LIST_STYLE_TYPE.HIRAGANA;
        case "hiragana-iroha":
            return LIST_STYLE_TYPE.HIRAGANA_IROHA;
        case "japanese-formal":
            return LIST_STYLE_TYPE.JAPANESE_FORMAL;
        case "japanese-informal":
            return LIST_STYLE_TYPE.JAPANESE_INFORMAL;
        case "kannada":
            return LIST_STYLE_TYPE.KANNADA;
        case "katakana":
            return LIST_STYLE_TYPE.KATAKANA;
        case "katakana-iroha":
            return LIST_STYLE_TYPE.KATAKANA_IROHA;
        case "khmer":
            return LIST_STYLE_TYPE.KHMER;
        case "korean-hangul-formal":
            return LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL;
        case "korean-hanja-formal":
            return LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL;
        case "korean-hanja-informal":
            return LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL;
        case "lao":
            return LIST_STYLE_TYPE.LAO;
        case "lower-armenian":
            return LIST_STYLE_TYPE.LOWER_ARMENIAN;
        case "malayalam":
            return LIST_STYLE_TYPE.MALAYALAM;
        case "mongolian":
            return LIST_STYLE_TYPE.MONGOLIAN;
        case "myanmar":
            return LIST_STYLE_TYPE.MYANMAR;
        case "oriya":
            return LIST_STYLE_TYPE.ORIYA;
        case "persian":
            return LIST_STYLE_TYPE.PERSIAN;
        case "simp-chinese-formal":
            return LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL;
        case "simp-chinese-informal":
            return LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL;
        case "tamil":
            return LIST_STYLE_TYPE.TAMIL;
        case "telugu":
            return LIST_STYLE_TYPE.TELUGU;
        case "thai":
            return LIST_STYLE_TYPE.THAI;
        case "tibetan":
            return LIST_STYLE_TYPE.TIBETAN;
        case "trad-chinese-formal":
            return LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL;
        case "trad-chinese-informal":
            return LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL;
        case "upper-armenian":
            return LIST_STYLE_TYPE.UPPER_ARMENIAN;
        case "disclosure-open":
            return LIST_STYLE_TYPE.DISCLOSURE_OPEN;
        case "disclosure-closed":
            return LIST_STYLE_TYPE.DISCLOSURE_CLOSED;
        case "none":
        default:
            return LIST_STYLE_TYPE.NONE;
    }
};
var parseListStyle = exports.parseListStyle = function parseListStyle(style) {
    var listStyleImage = (0, _background.parseBackgroundImage)(style.getPropertyValue("list-style-image"));
    return {
        listStyleType: parseListStyleType(style.getPropertyValue("list-style-type")),
        listStyleImage: listStyleImage.length ? listStyleImage[0] : null,
        listStylePosition: parseListStylePosition(style.getPropertyValue("list-style-position"))
    };
};
var parseListStylePosition = function parseListStylePosition(position) {
    switch(position){
        case "inside":
            return LIST_STYLE_POSITION.INSIDE;
        case "outside":
        default:
            return LIST_STYLE_POSITION.OUTSIDE;
    }
};

},{"2e6cb83e3ee622f3":"AucYD"}],"6Ten4":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseMargin = undefined;
var _Length = require("28c3ffdb97384d58");
var _Length2 = _interopRequireDefault(_Length);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var SIDES = [
    "top",
    "right",
    "bottom",
    "left"
];
var parseMargin = exports.parseMargin = function parseMargin(style) {
    return SIDES.map(function(side) {
        return new _Length2.default(style.getPropertyValue("margin-" + side));
    });
};

},{"28c3ffdb97384d58":"hGzHQ"}],"he2Rm":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var OVERFLOW = exports.OVERFLOW = {
    VISIBLE: 0,
    HIDDEN: 1,
    SCROLL: 2,
    AUTO: 3
};
var parseOverflow = exports.parseOverflow = function parseOverflow(overflow) {
    switch(overflow){
        case "hidden":
            return OVERFLOW.HIDDEN;
        case "scroll":
            return OVERFLOW.SCROLL;
        case "auto":
            return OVERFLOW.AUTO;
        case "visible":
        default:
            return OVERFLOW.VISIBLE;
    }
};

},{}],"ippV4":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var OVERFLOW_WRAP = exports.OVERFLOW_WRAP = {
    NORMAL: 0,
    BREAK_WORD: 1
};
var parseOverflowWrap = exports.parseOverflowWrap = function parseOverflowWrap(overflow) {
    switch(overflow){
        case "break-word":
            return OVERFLOW_WRAP.BREAK_WORD;
        case "normal":
        default:
            return OVERFLOW_WRAP.NORMAL;
    }
};

},{}],"drX8O":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var POSITION = exports.POSITION = {
    STATIC: 0,
    RELATIVE: 1,
    ABSOLUTE: 2,
    FIXED: 3,
    STICKY: 4
};
var parsePosition = exports.parsePosition = function parsePosition(position) {
    switch(position){
        case "relative":
            return POSITION.RELATIVE;
        case "absolute":
            return POSITION.ABSOLUTE;
        case "fixed":
            return POSITION.FIXED;
        case "sticky":
            return POSITION.STICKY;
    }
    return POSITION.STATIC;
};

},{}],"3brzD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTextShadow = undefined;
var _Color = require("956bf82c7399863d");
var _Color2 = _interopRequireDefault(_Color);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var NUMBER = /^([+-]|\d|\.)$/i;
var parseTextShadow = exports.parseTextShadow = function parseTextShadow(textShadow) {
    if (textShadow === "none" || typeof textShadow !== "string") return null;
    var currentValue = "";
    var isLength = false;
    var values = [];
    var shadows = [];
    var numParens = 0;
    var color = null;
    var appendValue = function appendValue() {
        if (currentValue.length) {
            if (isLength) values.push(parseFloat(currentValue));
            else color = new _Color2.default(currentValue);
        }
        isLength = false;
        currentValue = "";
    };
    var appendShadow = function appendShadow() {
        if (values.length && color !== null) shadows.push({
            color: color,
            offsetX: values[0] || 0,
            offsetY: values[1] || 0,
            blur: values[2] || 0
        });
        values.splice(0, values.length);
        color = null;
    };
    for(var i = 0; i < textShadow.length; i++){
        var c = textShadow[i];
        switch(c){
            case "(":
                currentValue += c;
                numParens++;
                break;
            case ")":
                currentValue += c;
                numParens--;
                break;
            case ",":
                if (numParens === 0) {
                    appendValue();
                    appendShadow();
                } else currentValue += c;
                break;
            case " ":
                if (numParens === 0) appendValue();
                else currentValue += c;
                break;
            default:
                if (currentValue.length === 0 && NUMBER.test(c)) isLength = true;
                currentValue += c;
        }
    }
    appendValue();
    appendShadow();
    if (shadows.length === 0) return null;
    return shadows;
};

},{"956bf82c7399863d":"hb8Oc"}],"8RICk":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var TEXT_TRANSFORM = exports.TEXT_TRANSFORM = {
    NONE: 0,
    LOWERCASE: 1,
    UPPERCASE: 2,
    CAPITALIZE: 3
};
var parseTextTransform = exports.parseTextTransform = function parseTextTransform(textTransform) {
    switch(textTransform){
        case "uppercase":
            return TEXT_TRANSFORM.UPPERCASE;
        case "lowercase":
            return TEXT_TRANSFORM.LOWERCASE;
        case "capitalize":
            return TEXT_TRANSFORM.CAPITALIZE;
    }
    return TEXT_TRANSFORM.NONE;
};

},{}],"2NrJx":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTransform = undefined;
var _Length = require("69a99b1fbe28de16");
var _Length2 = _interopRequireDefault(_Length);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var toFloat = function toFloat(s) {
    return parseFloat(s.trim());
};
var MATRIX = /(matrix|matrix3d)\((.+)\)/;
var parseTransform = exports.parseTransform = function parseTransform(style) {
    var transform = parseTransformMatrix(style.transform || style.webkitTransform || style.mozTransform || // $FlowFixMe
    style.msTransform || // $FlowFixMe
    style.oTransform);
    if (transform === null) return null;
    return {
        transform: transform,
        transformOrigin: parseTransformOrigin(style.transformOrigin || style.webkitTransformOrigin || style.mozTransformOrigin || // $FlowFixMe
        style.msTransformOrigin || // $FlowFixMe
        style.oTransformOrigin)
    };
};
// $FlowFixMe
var parseTransformOrigin = function parseTransformOrigin(origin) {
    if (typeof origin !== "string") {
        var v = new _Length2.default("0");
        return [
            v,
            v
        ];
    }
    var values = origin.split(" ").map(_Length2.default.create);
    return [
        values[0],
        values[1]
    ];
};
// $FlowFixMe
var parseTransformMatrix = function parseTransformMatrix(transform) {
    if (transform === "none" || typeof transform !== "string") return null;
    var match = transform.match(MATRIX);
    if (match) {
        if (match[1] === "matrix") {
            var matrix = match[2].split(",").map(toFloat);
            return [
                matrix[0],
                matrix[1],
                matrix[2],
                matrix[3],
                matrix[4],
                matrix[5]
            ];
        } else {
            var matrix3d = match[2].split(",").map(toFloat);
            return [
                matrix3d[0],
                matrix3d[1],
                matrix3d[4],
                matrix3d[5],
                matrix3d[12],
                matrix3d[13]
            ];
        }
    }
    return null;
};

},{"69a99b1fbe28de16":"hGzHQ"}],"93yKl":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var VISIBILITY = exports.VISIBILITY = {
    VISIBLE: 0,
    HIDDEN: 1,
    COLLAPSE: 2
};
var parseVisibility = exports.parseVisibility = function parseVisibility(visibility) {
    switch(visibility){
        case "hidden":
            return VISIBILITY.HIDDEN;
        case "collapse":
            return VISIBILITY.COLLAPSE;
        case "visible":
        default:
            return VISIBILITY.VISIBLE;
    }
};

},{}],"25OfO":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var WORD_BREAK = exports.WORD_BREAK = {
    NORMAL: "normal",
    BREAK_ALL: "break-all",
    KEEP_ALL: "keep-all"
};
var parseWordBreak = exports.parseWordBreak = function parseWordBreak(wordBreak) {
    switch(wordBreak){
        case "break-all":
            return WORD_BREAK.BREAK_ALL;
        case "keep-all":
            return WORD_BREAK.KEEP_ALL;
        case "normal":
        default:
            return WORD_BREAK.NORMAL;
    }
};

},{}],"jz2rN":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var parseZIndex = exports.parseZIndex = function parseZIndex(zIndex) {
    var auto = zIndex === "auto";
    return {
        auto: auto,
        order: auto ? 0 : parseInt(zIndex, 10)
    };
};

},{}],"9rzok":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reformatInputBounds = exports.inlineSelectElement = exports.inlineTextAreaElement = exports.inlineInputElement = exports.getInputBorderRadius = exports.INPUT_BACKGROUND = exports.INPUT_BORDERS = exports.INPUT_COLOR = undefined;
var _TextContainer = require("1f8745f7fde0ba21");
var _TextContainer2 = _interopRequireDefault(_TextContainer);
var _background = require("3786d139c6f9b934");
var _border = require("7f9e2c6a4668b6f1");
var _Circle = require("cd9280a826a22519");
var _Circle2 = _interopRequireDefault(_Circle);
var _Vector = require("82dbea9ae39c714a");
var _Vector2 = _interopRequireDefault(_Vector);
var _Color = require("4459f35f0d8a9b62");
var _Color2 = _interopRequireDefault(_Color);
var _Length = require("1c1addcb0d7d2157");
var _Length2 = _interopRequireDefault(_Length);
var _Bounds = require("c72a034f894a24bd");
var _TextBounds = require("76bb0b07306f2f8b");
var _Util = require("347b16df2c52bc79");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var INPUT_COLOR = exports.INPUT_COLOR = new _Color2.default([
    42,
    42,
    42
]);
var INPUT_BORDER_COLOR = new _Color2.default([
    165,
    165,
    165
]);
var INPUT_BACKGROUND_COLOR = new _Color2.default([
    222,
    222,
    222
]);
var INPUT_BORDER = {
    borderWidth: 1,
    borderColor: INPUT_BORDER_COLOR,
    borderStyle: _border.BORDER_STYLE.SOLID
};
var INPUT_BORDERS = exports.INPUT_BORDERS = [
    INPUT_BORDER,
    INPUT_BORDER,
    INPUT_BORDER,
    INPUT_BORDER
];
var INPUT_BACKGROUND = exports.INPUT_BACKGROUND = {
    backgroundColor: INPUT_BACKGROUND_COLOR,
    backgroundImage: [],
    backgroundClip: _background.BACKGROUND_CLIP.PADDING_BOX,
    backgroundOrigin: _background.BACKGROUND_ORIGIN.PADDING_BOX
};
var RADIO_BORDER_RADIUS = new _Length2.default("50%");
var RADIO_BORDER_RADIUS_TUPLE = [
    RADIO_BORDER_RADIUS,
    RADIO_BORDER_RADIUS
];
var INPUT_RADIO_BORDER_RADIUS = [
    RADIO_BORDER_RADIUS_TUPLE,
    RADIO_BORDER_RADIUS_TUPLE,
    RADIO_BORDER_RADIUS_TUPLE,
    RADIO_BORDER_RADIUS_TUPLE
];
var CHECKBOX_BORDER_RADIUS = new _Length2.default("3px");
var CHECKBOX_BORDER_RADIUS_TUPLE = [
    CHECKBOX_BORDER_RADIUS,
    CHECKBOX_BORDER_RADIUS
];
var INPUT_CHECKBOX_BORDER_RADIUS = [
    CHECKBOX_BORDER_RADIUS_TUPLE,
    CHECKBOX_BORDER_RADIUS_TUPLE,
    CHECKBOX_BORDER_RADIUS_TUPLE,
    CHECKBOX_BORDER_RADIUS_TUPLE
];
var getInputBorderRadius = exports.getInputBorderRadius = function getInputBorderRadius(node) {
    return node.type === "radio" ? INPUT_RADIO_BORDER_RADIUS : INPUT_CHECKBOX_BORDER_RADIUS;
};
var inlineInputElement = exports.inlineInputElement = function inlineInputElement(node, container) {
    if (node.type === "radio" || node.type === "checkbox") {
        if (node.checked) {
            var size = Math.min(container.bounds.width, container.bounds.height);
            container.childNodes.push(node.type === "checkbox" ? [
                new _Vector2.default(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79),
                new _Vector2.default(container.bounds.left + size * 0.16, container.bounds.top + size * 0.5549),
                new _Vector2.default(container.bounds.left + size * 0.27347, container.bounds.top + size * 0.44071),
                new _Vector2.default(container.bounds.left + size * 0.39694, container.bounds.top + size * 0.5649),
                new _Vector2.default(container.bounds.left + size * 0.72983, container.bounds.top + size * 0.23),
                new _Vector2.default(container.bounds.left + size * 0.84, container.bounds.top + size * 0.34085),
                new _Vector2.default(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79)
            ] : new _Circle2.default(container.bounds.left + size / 4, container.bounds.top + size / 4, size / 4));
        }
    } else inlineFormElement(getInputValue(node), node, container, false);
};
var inlineTextAreaElement = exports.inlineTextAreaElement = function inlineTextAreaElement(node, container) {
    inlineFormElement(node.value, node, container, true);
};
var inlineSelectElement = exports.inlineSelectElement = function inlineSelectElement(node, container) {
    var option = node.options[node.selectedIndex || 0];
    inlineFormElement(option ? option.text || "" : "", node, container, false);
};
var reformatInputBounds = exports.reformatInputBounds = function reformatInputBounds(bounds) {
    if (bounds.width > bounds.height) {
        bounds.left += (bounds.width - bounds.height) / 2;
        bounds.width = bounds.height;
    } else if (bounds.width < bounds.height) {
        bounds.top += (bounds.height - bounds.width) / 2;
        bounds.height = bounds.width;
    }
    return bounds;
};
var inlineFormElement = function inlineFormElement(value, node, container, allowLinebreak) {
    var body = node.ownerDocument.body;
    if (value.length > 0 && body) {
        var wrapper = node.ownerDocument.createElement("html2canvaswrapper");
        (0, _Util.copyCSSStyles)(node.ownerDocument.defaultView.getComputedStyle(node, null), wrapper);
        wrapper.style.position = "absolute";
        wrapper.style.left = container.bounds.left + "px";
        wrapper.style.top = container.bounds.top + "px";
        if (!allowLinebreak) wrapper.style.whiteSpace = "nowrap";
        var text = node.ownerDocument.createTextNode(value);
        wrapper.appendChild(text);
        body.appendChild(wrapper);
        container.childNodes.push(_TextContainer2.default.fromTextNode(text, container));
        body.removeChild(wrapper);
    }
};
var getInputValue = function getInputValue(node) {
    var value = node.type === "password" ? new Array(node.value.length + 1).join("\u2022") : node.value;
    return value.length === 0 ? node.placeholder || "" : value;
};

},{"1f8745f7fde0ba21":"jUMv6","3786d139c6f9b934":"AucYD","7f9e2c6a4668b6f1":"b73ib","cd9280a826a22519":"4ITr4","82dbea9ae39c714a":"7rENX","4459f35f0d8a9b62":"hb8Oc","1c1addcb0d7d2157":"hGzHQ","c72a034f894a24bd":"6yOBg","76bb0b07306f2f8b":"emvcd","347b16df2c52bc79":"4rxFR"}],"jUMv6":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _textTransform = require("a1f0810256f105c9");
var _TextBounds = require("c6be7190f4df52e1");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var TextContainer = function() {
    function TextContainer(text, parent, bounds) {
        _classCallCheck(this, TextContainer);
        this.text = text;
        this.parent = parent;
        this.bounds = bounds;
    }
    _createClass(TextContainer, null, [
        {
            key: "fromTextNode",
            value: function fromTextNode(node, parent) {
                var text = transform(node.data, parent.style.textTransform);
                return new TextContainer(text, parent, (0, _TextBounds.parseTextBounds)(text, parent, node));
            }
        }
    ]);
    return TextContainer;
}();
exports.default = TextContainer;
var CAPITALIZE = /(^|\s|:|-|\(|\))([a-z])/g;
var transform = function transform(text, _transform) {
    switch(_transform){
        case _textTransform.TEXT_TRANSFORM.LOWERCASE:
            return text.toLowerCase();
        case _textTransform.TEXT_TRANSFORM.CAPITALIZE:
            return text.replace(CAPITALIZE, capitalize);
        case _textTransform.TEXT_TRANSFORM.UPPERCASE:
            return text.toUpperCase();
        default:
            return text;
    }
};
function capitalize(m, p1, p2) {
    if (m.length > 0) return p1 + p2.toUpperCase();
    return m;
}

},{"a1f0810256f105c9":"8RICk","c6be7190f4df52e1":"emvcd"}],"emvcd":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTextBounds = exports.TextBounds = undefined;
var _Bounds = require("d34ba89fa0c10383");
var _textDecoration = require("1db976cfdabebdc2");
var _Feature = require("88639d35955ca83c");
var _Feature2 = _interopRequireDefault(_Feature);
var _Unicode = require("b349d3b238184cfe");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var TextBounds = exports.TextBounds = function TextBounds(text, bounds) {
    _classCallCheck(this, TextBounds);
    this.text = text;
    this.bounds = bounds;
};
var parseTextBounds = exports.parseTextBounds = function parseTextBounds(value, parent, node) {
    var letterRendering = parent.style.letterSpacing !== 0;
    var textList = letterRendering ? (0, _Unicode.toCodePoints)(value).map(function(i) {
        return (0, _Unicode.fromCodePoint)(i);
    }) : (0, _Unicode.breakWords)(value, parent);
    var length = textList.length;
    var defaultView = node.parentNode ? node.parentNode.ownerDocument.defaultView : null;
    var scrollX = defaultView ? defaultView.pageXOffset : 0;
    var scrollY = defaultView ? defaultView.pageYOffset : 0;
    var textBounds = [];
    var offset = 0;
    for(var i = 0; i < length; i++){
        var text = textList[i];
        if (parent.style.textDecoration !== _textDecoration.TEXT_DECORATION.NONE || text.trim().length > 0) {
            if (_Feature2.default.SUPPORT_RANGE_BOUNDS) textBounds.push(new TextBounds(text, getRangeBounds(node, offset, text.length, scrollX, scrollY)));
            else {
                var replacementNode = node.splitText(text.length);
                textBounds.push(new TextBounds(text, getWrapperBounds(node, scrollX, scrollY)));
                node = replacementNode;
            }
        } else if (!_Feature2.default.SUPPORT_RANGE_BOUNDS) node = node.splitText(text.length);
        offset += text.length;
    }
    return textBounds;
};
var getWrapperBounds = function getWrapperBounds(node, scrollX, scrollY) {
    var wrapper = node.ownerDocument.createElement("html2canvaswrapper");
    wrapper.appendChild(node.cloneNode(true));
    var parentNode = node.parentNode;
    if (parentNode) {
        parentNode.replaceChild(wrapper, node);
        var bounds = (0, _Bounds.parseBounds)(wrapper, scrollX, scrollY);
        if (wrapper.firstChild) parentNode.replaceChild(wrapper.firstChild, wrapper);
        return bounds;
    }
    return new _Bounds.Bounds(0, 0, 0, 0);
};
var getRangeBounds = function getRangeBounds(node, offset, length, scrollX, scrollY) {
    var range = node.ownerDocument.createRange();
    range.setStart(node, offset);
    range.setEnd(node, offset + length);
    return _Bounds.Bounds.fromClientRect(range.getBoundingClientRect(), scrollX, scrollY);
};

},{"d34ba89fa0c10383":"6yOBg","1db976cfdabebdc2":"lUS2k","88639d35955ca83c":"eTSpp","b349d3b238184cfe":"3YBvN"}],"eTSpp":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _ForeignObjectRenderer = require("55f387121274edd4");
var testRangeBounds = function testRangeBounds(document1) {
    var TEST_HEIGHT = 123;
    if (document1.createRange) {
        var range = document1.createRange();
        if (range.getBoundingClientRect) {
            var testElement = document1.createElement("boundtest");
            testElement.style.height = TEST_HEIGHT + "px";
            testElement.style.display = "block";
            document1.body.appendChild(testElement);
            range.selectNode(testElement);
            var rangeBounds = range.getBoundingClientRect();
            var rangeHeight = Math.round(rangeBounds.height);
            document1.body.removeChild(testElement);
            if (rangeHeight === TEST_HEIGHT) return true;
        }
    }
    return false;
};
// iOS 10.3 taints canvas with base64 images unless crossOrigin = 'anonymous'
var testBase64 = function testBase64(document1, src) {
    var img = new Image();
    var canvas = document1.createElement("canvas");
    var ctx = canvas.getContext("2d");
    return new Promise(function(resolve) {
        // Single pixel base64 image renders fine on iOS 10.3???
        img.src = src;
        var onload = function onload() {
            try {
                ctx.drawImage(img, 0, 0);
                canvas.toDataURL();
            } catch (e) {
                return resolve(false);
            }
            return resolve(true);
        };
        img.onload = onload;
        img.onerror = function() {
            return resolve(false);
        };
        if (img.complete === true) setTimeout(function() {
            onload();
        }, 500);
    });
};
var testCORS = function testCORS() {
    return typeof new Image().crossOrigin !== "undefined";
};
var testResponseType = function testResponseType() {
    return typeof new XMLHttpRequest().responseType === "string";
};
var testSVG = function testSVG(document1) {
    var img = new Image();
    var canvas = document1.createElement("canvas");
    var ctx = canvas.getContext("2d");
    img.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
    try {
        ctx.drawImage(img, 0, 0);
        canvas.toDataURL();
    } catch (e) {
        return false;
    }
    return true;
};
var isGreenPixel = function isGreenPixel(data) {
    return data[0] === 0 && data[1] === 255 && data[2] === 0 && data[3] === 255;
};
var testForeignObject = function testForeignObject(document1) {
    var canvas = document1.createElement("canvas");
    var size = 100;
    canvas.width = size;
    canvas.height = size;
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(0, 255, 0)";
    ctx.fillRect(0, 0, size, size);
    var img = new Image();
    var greenImageSrc = canvas.toDataURL();
    img.src = greenImageSrc;
    var svg = (0, _ForeignObjectRenderer.createForeignObjectSVG)(size, size, 0, 0, img);
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, size, size);
    return (0, _ForeignObjectRenderer.loadSerializedSVG)(svg).then(function(img) {
        ctx.drawImage(img, 0, 0);
        var data = ctx.getImageData(0, 0, size, size).data;
        ctx.fillStyle = "red";
        ctx.fillRect(0, 0, size, size);
        var node = document1.createElement("div");
        node.style.backgroundImage = "url(" + greenImageSrc + ")";
        node.style.height = size + "px";
        // Firefox 55 does not render inline <img /> tags
        return isGreenPixel(data) ? (0, _ForeignObjectRenderer.loadSerializedSVG)((0, _ForeignObjectRenderer.createForeignObjectSVG)(size, size, 0, 0, node)) : Promise.reject(false);
    }).then(function(img) {
        ctx.drawImage(img, 0, 0);
        // Edge does not render background-images
        return isGreenPixel(ctx.getImageData(0, 0, size, size).data);
    }).catch(function(e) {
        return false;
    });
};
var FEATURES = {
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_RANGE_BOUNDS () {
        "use strict";
        var value = testRangeBounds(document);
        Object.defineProperty(FEATURES, "SUPPORT_RANGE_BOUNDS", {
            value: value
        });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_SVG_DRAWING () {
        "use strict";
        var value1 = testSVG(document);
        Object.defineProperty(FEATURES, "SUPPORT_SVG_DRAWING", {
            value: value1
        });
        return value1;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_BASE64_DRAWING () {
        "use strict";
        return function(src) {
            var _value = testBase64(document, src);
            Object.defineProperty(FEATURES, "SUPPORT_BASE64_DRAWING", {
                value: function value() {
                    return _value;
                }
            });
            return _value;
        };
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_FOREIGNOBJECT_DRAWING () {
        "use strict";
        var value2 = typeof Array.from === "function" && typeof window.fetch === "function" ? testForeignObject(document) : Promise.resolve(false);
        Object.defineProperty(FEATURES, "SUPPORT_FOREIGNOBJECT_DRAWING", {
            value: value2
        });
        return value2;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_CORS_IMAGES () {
        "use strict";
        var value3 = testCORS();
        Object.defineProperty(FEATURES, "SUPPORT_CORS_IMAGES", {
            value: value3
        });
        return value3;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_RESPONSE_TYPE () {
        "use strict";
        var value4 = testResponseType();
        Object.defineProperty(FEATURES, "SUPPORT_RESPONSE_TYPE", {
            value: value4
        });
        return value4;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_CORS_XHR () {
        "use strict";
        var value5 = "withCredentials" in new XMLHttpRequest();
        Object.defineProperty(FEATURES, "SUPPORT_CORS_XHR", {
            value: value5
        });
        return value5;
    }
};
exports.default = FEATURES;

},{"55f387121274edd4":"eGP1z"}],"eGP1z":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var ForeignObjectRenderer = function() {
    function ForeignObjectRenderer(element) {
        _classCallCheck(this, ForeignObjectRenderer);
        this.element = element;
    }
    _createClass(ForeignObjectRenderer, [
        {
            key: "render",
            value: function render(options) {
                var _this = this;
                this.options = options;
                this.canvas = document.createElement("canvas");
                this.ctx = this.canvas.getContext("2d");
                this.canvas.width = Math.floor(options.width) * options.scale;
                this.canvas.height = Math.floor(options.height) * options.scale;
                this.canvas.style.width = options.width + "px";
                this.canvas.style.height = options.height + "px";
                options.logger.log("ForeignObject renderer initialized (" + options.width + "x" + options.height + " at " + options.x + "," + options.y + ") with scale " + options.scale);
                var svg = createForeignObjectSVG(Math.max(options.windowWidth, options.width) * options.scale, Math.max(options.windowHeight, options.height) * options.scale, options.scrollX * options.scale, options.scrollY * options.scale, this.element);
                return loadSerializedSVG(svg).then(function(img) {
                    if (options.backgroundColor) {
                        _this.ctx.fillStyle = options.backgroundColor.toString();
                        _this.ctx.fillRect(0, 0, options.width * options.scale, options.height * options.scale);
                    }
                    _this.ctx.drawImage(img, -options.x * options.scale, -options.y * options.scale);
                    return _this.canvas;
                });
            }
        }
    ]);
    return ForeignObjectRenderer;
}();
exports.default = ForeignObjectRenderer;
var createForeignObjectSVG = exports.createForeignObjectSVG = function createForeignObjectSVG(width, height, x, y, node) {
    var xmlns = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(xmlns, "svg");
    var foreignObject = document.createElementNS(xmlns, "foreignObject");
    svg.setAttributeNS(null, "width", width);
    svg.setAttributeNS(null, "height", height);
    foreignObject.setAttributeNS(null, "width", "100%");
    foreignObject.setAttributeNS(null, "height", "100%");
    foreignObject.setAttributeNS(null, "x", x);
    foreignObject.setAttributeNS(null, "y", y);
    foreignObject.setAttributeNS(null, "externalResourcesRequired", "true");
    svg.appendChild(foreignObject);
    foreignObject.appendChild(node);
    return svg;
};
var loadSerializedSVG = exports.loadSerializedSVG = function loadSerializedSVG(svg) {
    return new Promise(function(resolve, reject) {
        var img = new Image();
        img.onload = function() {
            return resolve(img);
        };
        img.onerror = reject;
        img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
    });
};

},{}],"3YBvN":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.breakWords = exports.fromCodePoint = exports.toCodePoints = undefined;
var _cssLineBreak = require("576f59534699d725");
Object.defineProperty(exports, "toCodePoints", {
    enumerable: true,
    get: function get() {
        return _cssLineBreak.toCodePoints;
    }
});
Object.defineProperty(exports, "fromCodePoint", {
    enumerable: true,
    get: function get() {
        return _cssLineBreak.fromCodePoint;
    }
});
var _NodeContainer = require("f0368380a21f87b9");
var _NodeContainer2 = _interopRequireDefault(_NodeContainer);
var _overflowWrap = require("52500f09e8d2e74b");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var breakWords = exports.breakWords = function breakWords(str, parent) {
    var breaker = (0, _cssLineBreak.LineBreaker)(str, {
        lineBreak: parent.style.lineBreak,
        wordBreak: parent.style.overflowWrap === _overflowWrap.OVERFLOW_WRAP.BREAK_WORD ? "break-word" : parent.style.wordBreak
    });
    var words = [];
    var bk = void 0;
    while(!(bk = breaker.next()).done)words.push(bk.value.slice());
    return words;
};

},{"576f59534699d725":"9TxkC","f0368380a21f87b9":"hZ5hP","52500f09e8d2e74b":"ippV4"}],"9TxkC":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _Util = require("7dec682c80b1d633");
Object.defineProperty(exports, "toCodePoints", {
    enumerable: true,
    get: function get() {
        return _Util.toCodePoints;
    }
});
Object.defineProperty(exports, "fromCodePoint", {
    enumerable: true,
    get: function get() {
        return _Util.fromCodePoint;
    }
});
var _LineBreak = require("dfa9b08240e3dbb1");
Object.defineProperty(exports, "LineBreaker", {
    enumerable: true,
    get: function get() {
        return _LineBreak.LineBreaker;
    }
});

},{"7dec682c80b1d633":"dmgLx","dfa9b08240e3dbb1":"6qilN"}],"dmgLx":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var toCodePoints = exports.toCodePoints = function toCodePoints(str) {
    var codePoints = [];
    var i = 0;
    var length = str.length;
    while(i < length){
        var value = str.charCodeAt(i++);
        if (value >= 0xd800 && value <= 0xdbff && i < length) {
            var extra = str.charCodeAt(i++);
            if ((extra & 0xfc00) === 0xdc00) codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
            else {
                codePoints.push(value);
                i--;
            }
        } else codePoints.push(value);
    }
    return codePoints;
};
var fromCodePoint = exports.fromCodePoint = function fromCodePoint() {
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, arguments);
    var length = arguments.length;
    if (!length) return "";
    var codeUnits = [];
    var index = -1;
    var result = "";
    while(++index < length){
        var codePoint = arguments.length <= index ? undefined : arguments[index];
        if (codePoint <= 0xffff) codeUnits.push(codePoint);
        else {
            codePoint -= 0x10000;
            codeUnits.push((codePoint >> 10) + 0xd800, codePoint % 0x400 + 0xdc00);
        }
        if (index + 1 === length || codeUnits.length > 0x4000) {
            result += String.fromCharCode.apply(String, codeUnits);
            codeUnits.length = 0;
        }
    }
    return result;
};
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
// Use a lookup table to find the index.
var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for(var i = 0; i < chars.length; i++)lookup[chars.charCodeAt(i)] = i;
var decode = exports.decode = function decode(base64) {
    var bufferLength = base64.length * 0.75, len = base64.length, i = void 0, p = 0, encoded1 = void 0, encoded2 = void 0, encoded3 = void 0, encoded4 = void 0;
    if (base64[base64.length - 1] === "=") {
        bufferLength--;
        if (base64[base64.length - 2] === "=") bufferLength--;
    }
    var buffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined" && typeof Uint8Array.prototype.slice !== "undefined" ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
    var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
    for(i = 0; i < len; i += 4){
        encoded1 = lookup[base64.charCodeAt(i)];
        encoded2 = lookup[base64.charCodeAt(i + 1)];
        encoded3 = lookup[base64.charCodeAt(i + 2)];
        encoded4 = lookup[base64.charCodeAt(i + 3)];
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return buffer;
};
var polyUint16Array = exports.polyUint16Array = function polyUint16Array(buffer) {
    var length = buffer.length;
    var bytes = [];
    for(var _i = 0; _i < length; _i += 2)bytes.push(buffer[_i + 1] << 8 | buffer[_i]);
    return bytes;
};
var polyUint32Array = exports.polyUint32Array = function polyUint32Array(buffer) {
    var length = buffer.length;
    var bytes = [];
    for(var _i2 = 0; _i2 < length; _i2 += 4)bytes.push(buffer[_i2 + 3] << 24 | buffer[_i2 + 2] << 16 | buffer[_i2 + 1] << 8 | buffer[_i2]);
    return bytes;
};

},{}],"6qilN":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LineBreaker = exports.inlineBreakOpportunities = exports.lineBreakAtIndex = exports.codePointsToCharacterClasses = exports.UnicodeTrie = exports.BREAK_ALLOWED = exports.BREAK_NOT_ALLOWED = exports.BREAK_MANDATORY = exports.classes = exports.LETTER_NUMBER_MODIFIER = undefined;
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _slicedToArray = function() {
    function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
            for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally{
            try {
                if (!_n && _i["return"]) _i["return"]();
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    return function(arr, i) {
        if (Array.isArray(arr)) return arr;
        else if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
        else throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}();
var _Trie = require("4ef4a4a5dfafd392");
var _linebreakTrie = require("d354847a360cb4fa");
var _linebreakTrie2 = _interopRequireDefault(_linebreakTrie);
var _Util = require("3595b0d334ea77d2");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = Array(arr.length); i < arr.length; i++)arr2[i] = arr[i];
        return arr2;
    } else return Array.from(arr);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var LETTER_NUMBER_MODIFIER = exports.LETTER_NUMBER_MODIFIER = 50;
// Non-tailorable Line Breaking Classes
var BK = 1; //  Cause a line break (after)
var CR = 2; //  Cause a line break (after), except between CR and LF
var LF = 3; //  Cause a line break (after)
var CM = 4; //  Prohibit a line break between the character and the preceding character
var NL = 5; //  Cause a line break (after)
var SG = 6; //  Do not occur in well-formed text
var WJ = 7; //  Prohibit line breaks before and after
var ZW = 8; //  Provide a break opportunity
var GL = 9; //  Prohibit line breaks before and after
var SP = 10; // Enable indirect line breaks
var ZWJ = 11; // Prohibit line breaks within joiner sequences
// Break Opportunities
var B2 = 12; //  Provide a line break opportunity before and after the character
var BA = 13; //  Generally provide a line break opportunity after the character
var BB = 14; //  Generally provide a line break opportunity before the character
var HY = 15; //  Provide a line break opportunity after the character, except in numeric context
var CB = 16; //   Provide a line break opportunity contingent on additional information
// Characters Prohibiting Certain Breaks
var CL = 17; //  Prohibit line breaks before
var CP = 18; //  Prohibit line breaks before
var EX = 19; //  Prohibit line breaks before
var IN = 20; //  Allow only indirect line breaks between pairs
var NS = 21; //  Allow only indirect line breaks before
var OP = 22; //  Prohibit line breaks after
var QU = 23; //  Act like they are both opening and closing
// Numeric Context
var IS = 24; //  Prevent breaks after any and before numeric
var NU = 25; //  Form numeric expressions for line breaking purposes
var PO = 26; //  Do not break following a numeric expression
var PR = 27; //  Do not break in front of a numeric expression
var SY = 28; //  Prevent a break before; and allow a break after
// Other Characters
var AI = 29; //  Act like AL when the resolvedEAW is N; otherwise; act as ID
var AL = 30; //  Are alphabetic characters or symbols that are used with alphabetic characters
var CJ = 31; //  Treat as NS or ID for strict or normal breaking.
var EB = 32; //  Do not break from following Emoji Modifier
var EM = 33; //  Do not break from preceding Emoji Base
var H2 = 34; //  Form Korean syllable blocks
var H3 = 35; //  Form Korean syllable blocks
var HL = 36; //  Do not break around a following hyphen; otherwise act as Alphabetic
var ID = 37; //  Break before or after; except in some numeric context
var JL = 38; //  Form Korean syllable blocks
var JV = 39; //  Form Korean syllable blocks
var JT = 40; //  Form Korean syllable blocks
var RI = 41; //  Keep pairs together. For pairs; break before and after other classes
var SA = 42; //  Provide a line break opportunity contingent on additional, language-specific context analysis
var XX = 43; //  Have as yet unknown line breaking behavior or unassigned code positions
var classes = exports.classes = {
    BK: BK,
    CR: CR,
    LF: LF,
    CM: CM,
    NL: NL,
    SG: SG,
    WJ: WJ,
    ZW: ZW,
    GL: GL,
    SP: SP,
    ZWJ: ZWJ,
    B2: B2,
    BA: BA,
    BB: BB,
    HY: HY,
    CB: CB,
    CL: CL,
    CP: CP,
    EX: EX,
    IN: IN,
    NS: NS,
    OP: OP,
    QU: QU,
    IS: IS,
    NU: NU,
    PO: PO,
    PR: PR,
    SY: SY,
    AI: AI,
    AL: AL,
    CJ: CJ,
    EB: EB,
    EM: EM,
    H2: H2,
    H3: H3,
    HL: HL,
    ID: ID,
    JL: JL,
    JV: JV,
    JT: JT,
    RI: RI,
    SA: SA,
    XX: XX
};
var BREAK_MANDATORY = exports.BREAK_MANDATORY = "!";
var BREAK_NOT_ALLOWED = exports.BREAK_NOT_ALLOWED = "\xd7";
var BREAK_ALLOWED = exports.BREAK_ALLOWED = "\xf7";
var UnicodeTrie = exports.UnicodeTrie = (0, _Trie.createTrieFromBase64)(_linebreakTrie2.default);
var ALPHABETICS = [
    AL,
    HL
];
var HARD_LINE_BREAKS = [
    BK,
    CR,
    LF,
    NL
];
var SPACE = [
    SP,
    ZW
];
var PREFIX_POSTFIX = [
    PR,
    PO
];
var LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE);
var KOREAN_SYLLABLE_BLOCK = [
    JL,
    JV,
    JT,
    H2,
    H3
];
var HYPHEN = [
    HY,
    BA
];
var codePointsToCharacterClasses = exports.codePointsToCharacterClasses = function codePointsToCharacterClasses(codePoints) {
    var lineBreak = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "strict";
    var types = [];
    var indicies = [];
    var categories = [];
    codePoints.forEach(function(codePoint, index) {
        var classType = UnicodeTrie.get(codePoint);
        if (classType > LETTER_NUMBER_MODIFIER) {
            categories.push(true);
            classType -= LETTER_NUMBER_MODIFIER;
        } else categories.push(false);
        if ([
            "normal",
            "auto",
            "loose"
        ].indexOf(lineBreak) !== -1) // U+2010, – U+2013, 〜 U+301C, ゠ U+30A0
        {
            if ([
                0x2010,
                0x2013,
                0x301c,
                0x30a0
            ].indexOf(codePoint) !== -1) {
                indicies.push(index);
                return types.push(CB);
            }
        }
        if (classType === CM || classType === ZWJ) {
            // LB10 Treat any remaining combining mark or ZWJ as AL.
            if (index === 0) {
                indicies.push(index);
                return types.push(AL);
            }
            // LB9 Do not break a combining character sequence; treat it as if it has the line breaking class of
            // the base character in all of the following rules. Treat ZWJ as if it were CM.
            var prev = types[index - 1];
            if (LINE_BREAKS.indexOf(prev) === -1) {
                indicies.push(indicies[index - 1]);
                return types.push(prev);
            }
            indicies.push(index);
            return types.push(AL);
        }
        indicies.push(index);
        if (classType === CJ) return types.push(lineBreak === "strict" ? NS : ID);
        if (classType === SA) return types.push(AL);
        if (classType === AI) return types.push(AL);
        // For supplementary characters, a useful default is to treat characters in the range 10000..1FFFD as AL
        // and characters in the ranges 20000..2FFFD and 30000..3FFFD as ID, until the implementation can be revised
        // to take into account the actual line breaking properties for these characters.
        if (classType === XX) {
            if (codePoint >= 0x20000 && codePoint <= 0x2fffd || codePoint >= 0x30000 && codePoint <= 0x3fffd) return types.push(ID);
            else return types.push(AL);
        }
        types.push(classType);
    });
    return [
        indicies,
        types,
        categories
    ];
};
var isAdjacentWithSpaceIgnored = function isAdjacentWithSpaceIgnored(a, b, currentIndex, classTypes) {
    var current = classTypes[currentIndex];
    if (Array.isArray(a) ? a.indexOf(current) !== -1 : a === current) {
        var i = currentIndex;
        while(i <= classTypes.length){
            i++;
            var next = classTypes[i];
            if (next === b) return true;
            if (next !== SP) break;
        }
    }
    if (current === SP) {
        var _i = currentIndex;
        while(_i > 0){
            _i--;
            var prev = classTypes[_i];
            if (Array.isArray(a) ? a.indexOf(prev) !== -1 : a === prev) {
                var n = currentIndex;
                while(n <= classTypes.length){
                    n++;
                    var _next = classTypes[n];
                    if (_next === b) return true;
                    if (_next !== SP) break;
                }
            }
            if (prev !== SP) break;
        }
    }
    return false;
};
var previousNonSpaceClassType = function previousNonSpaceClassType(currentIndex, classTypes) {
    var i = currentIndex;
    while(i >= 0){
        var type = classTypes[i];
        if (type === SP) i--;
        else return type;
    }
    return 0;
};
var _lineBreakAtIndex = function _lineBreakAtIndex(codePoints, classTypes, indicies, index, forbiddenBreaks) {
    if (indicies[index] === 0) return BREAK_NOT_ALLOWED;
    var currentIndex = index - 1;
    if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) return BREAK_NOT_ALLOWED;
    var beforeIndex = currentIndex - 1;
    var afterIndex = currentIndex + 1;
    var current = classTypes[currentIndex];
    // LB4 Always break after hard line breaks.
    // LB5 Treat CR followed by LF, as well as CR, LF, and NL as hard line breaks.
    var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;
    var next = classTypes[afterIndex];
    if (current === CR && next === LF) return BREAK_NOT_ALLOWED;
    if (HARD_LINE_BREAKS.indexOf(current) !== -1) return BREAK_MANDATORY;
    // LB6 Do not break before hard line breaks.
    if (HARD_LINE_BREAKS.indexOf(next) !== -1) return BREAK_NOT_ALLOWED;
    // LB7 Do not break before spaces or zero width space.
    if (SPACE.indexOf(next) !== -1) return BREAK_NOT_ALLOWED;
    // LB8 Break before any character following a zero-width space, even if one or more spaces intervene.
    if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) return BREAK_ALLOWED;
    // LB8a Do not break between a zero width joiner and an ideograph, emoji base or emoji modifier.
    if (UnicodeTrie.get(codePoints[currentIndex]) === ZWJ && (next === ID || next === EB || next === EM)) return BREAK_NOT_ALLOWED;
    // LB11 Do not break before or after Word joiner and related characters.
    if (current === WJ || next === WJ) return BREAK_NOT_ALLOWED;
    // LB12 Do not break after NBSP and related characters.
    if (current === GL) return BREAK_NOT_ALLOWED;
    // LB12a Do not break before NBSP and related characters, except after spaces and hyphens.
    if ([
        SP,
        BA,
        HY
    ].indexOf(current) === -1 && next === GL) return BREAK_NOT_ALLOWED;
    // LB13 Do not break before ‘]’ or ‘!’ or ‘;’ or ‘/’, even after spaces.
    if ([
        CL,
        CP,
        EX,
        IS,
        SY
    ].indexOf(next) !== -1) return BREAK_NOT_ALLOWED;
    // LB14 Do not break after ‘[’, even after spaces.
    if (previousNonSpaceClassType(currentIndex, classTypes) === OP) return BREAK_NOT_ALLOWED;
    // LB15 Do not break within ‘”[’, even with intervening spaces.
    if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) return BREAK_NOT_ALLOWED;
    // LB16 Do not break between closing punctuation and a nonstarter (lb=NS), even with intervening spaces.
    if (isAdjacentWithSpaceIgnored([
        CL,
        CP
    ], NS, currentIndex, classTypes)) return BREAK_NOT_ALLOWED;
    // LB17 Do not break within ‘——’, even with intervening spaces.
    if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) return BREAK_NOT_ALLOWED;
    // LB18 Break after spaces.
    if (current === SP) return BREAK_ALLOWED;
    // LB19 Do not break before or after quotation marks, such as ‘ ” ’.
    if (current === QU || next === QU) return BREAK_NOT_ALLOWED;
    // LB20 Break before and after unresolved CB.
    if (next === CB || current === CB) return BREAK_ALLOWED;
    // LB21 Do not break before hyphen-minus, other hyphens, fixed-width spaces, small kana, and other non-starters, or after acute accents.
    if ([
        BA,
        HY,
        NS
    ].indexOf(next) !== -1 || current === BB) return BREAK_NOT_ALLOWED;
    // LB21a Don't break after Hebrew + Hyphen.
    if (before === HL && HYPHEN.indexOf(current) !== -1) return BREAK_NOT_ALLOWED;
    // LB21b Don’t break between Solidus and Hebrew letters.
    if (current === SY && next === HL) return BREAK_NOT_ALLOWED;
    // LB22 Do not break between two ellipses, or between letters, numbers or exclamations and ellipsis.
    if (next === IN && ALPHABETICS.concat(IN, EX, NU, ID, EB, EM).indexOf(current) !== -1) return BREAK_NOT_ALLOWED;
    // LB23 Do not break between digits and letters.
    if (ALPHABETICS.indexOf(next) !== -1 && current === NU || ALPHABETICS.indexOf(current) !== -1 && next === NU) return BREAK_NOT_ALLOWED;
    // LB23a Do not break between numeric prefixes and ideographs, or between ideographs and numeric postfixes.
    if (current === PR && [
        ID,
        EB,
        EM
    ].indexOf(next) !== -1 || [
        ID,
        EB,
        EM
    ].indexOf(current) !== -1 && next === PO) return BREAK_NOT_ALLOWED;
    // LB24 Do not break between numeric prefix/postfix and letters, or between letters and prefix/postfix.
    if (ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1 || PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) return BREAK_NOT_ALLOWED;
    // LB25 Do not break between the following pairs of classes relevant to numbers:
    if (// (PR | PO) × ( OP | HY )? NU
    [
        PR,
        PO
    ].indexOf(current) !== -1 && (next === NU || [
        OP,
        HY
    ].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU) || // ( OP | HY ) × NU
    [
        OP,
        HY
    ].indexOf(current) !== -1 && next === NU || // NU ×	(NU | SY | IS)
    current === NU && [
        NU,
        SY,
        IS
    ].indexOf(next) !== -1) return BREAK_NOT_ALLOWED;
    // NU (NU | SY | IS)* × (NU | SY | IS | CL | CP)
    if ([
        NU,
        SY,
        IS,
        CL,
        CP
    ].indexOf(next) !== -1) {
        var prevIndex = currentIndex;
        while(prevIndex >= 0){
            var type = classTypes[prevIndex];
            if (type === NU) return BREAK_NOT_ALLOWED;
            else if ([
                SY,
                IS
            ].indexOf(type) !== -1) prevIndex--;
            else break;
        }
    }
    // NU (NU | SY | IS)* (CL | CP)? × (PO | PR))
    if ([
        PR,
        PO
    ].indexOf(next) !== -1) {
        var _prevIndex = [
            CL,
            CP
        ].indexOf(current) !== -1 ? beforeIndex : currentIndex;
        while(_prevIndex >= 0){
            var _type = classTypes[_prevIndex];
            if (_type === NU) return BREAK_NOT_ALLOWED;
            else if ([
                SY,
                IS
            ].indexOf(_type) !== -1) _prevIndex--;
            else break;
        }
    }
    // LB26 Do not break a Korean syllable.
    if (JL === current && [
        JL,
        JV,
        H2,
        H3
    ].indexOf(next) !== -1 || [
        JV,
        H2
    ].indexOf(current) !== -1 && [
        JV,
        JT
    ].indexOf(next) !== -1 || [
        JT,
        H3
    ].indexOf(current) !== -1 && next === JT) return BREAK_NOT_ALLOWED;
    // LB27 Treat a Korean Syllable Block the same as ID.
    if (KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [
        IN,
        PO
    ].indexOf(next) !== -1 || KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR) return BREAK_NOT_ALLOWED;
    // LB28 Do not break between alphabetics (“at”).
    if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) return BREAK_NOT_ALLOWED;
    // LB29 Do not break between numeric punctuation and alphabetics (“e.g.”).
    if (current === IS && ALPHABETICS.indexOf(next) !== -1) return BREAK_NOT_ALLOWED;
    // LB30 Do not break between letters, numbers, or ordinary symbols and opening or closing parentheses.
    if (ALPHABETICS.concat(NU).indexOf(current) !== -1 && next === OP || ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP) return BREAK_NOT_ALLOWED;
    // LB30a Break between two regional indicator symbols if and only if there are an even number of regional
    // indicators preceding the position of the break.
    if (current === RI && next === RI) {
        var i = indicies[currentIndex];
        var count = 1;
        while(i > 0){
            i--;
            if (classTypes[i] === RI) count++;
            else break;
        }
        if (count % 2 !== 0) return BREAK_NOT_ALLOWED;
    }
    // LB30b Do not break between an emoji base and an emoji modifier.
    if (current === EB && next === EM) return BREAK_NOT_ALLOWED;
    return BREAK_ALLOWED;
};
var lineBreakAtIndex = exports.lineBreakAtIndex = function lineBreakAtIndex(codePoints, index) {
    // LB2 Never break at the start of text.
    if (index === 0) return BREAK_NOT_ALLOWED;
    // LB3 Always break at the end of text.
    if (index >= codePoints.length) return BREAK_MANDATORY;
    var _codePointsToCharacte = codePointsToCharacterClasses(codePoints), _codePointsToCharacte2 = _slicedToArray(_codePointsToCharacte, 2), indicies = _codePointsToCharacte2[0], classTypes = _codePointsToCharacte2[1];
    return _lineBreakAtIndex(codePoints, classTypes, indicies, index);
};
var cssFormattedClasses = function cssFormattedClasses(codePoints, options) {
    if (!options) options = {
        lineBreak: "normal",
        wordBreak: "normal"
    };
    var _codePointsToCharacte3 = codePointsToCharacterClasses(codePoints, options.lineBreak), _codePointsToCharacte4 = _slicedToArray(_codePointsToCharacte3, 3), indicies = _codePointsToCharacte4[0], classTypes = _codePointsToCharacte4[1], isLetterNumber = _codePointsToCharacte4[2];
    if (options.wordBreak === "break-all" || options.wordBreak === "break-word") classTypes = classTypes.map(function(type) {
        return [
            NU,
            AL,
            SA
        ].indexOf(type) !== -1 ? ID : type;
    });
    var forbiddenBreakpoints = options.wordBreak === "keep-all" ? isLetterNumber.map(function(isLetterNumber, i) {
        return isLetterNumber && codePoints[i] >= 0x4e00 && codePoints[i] <= 0x9fff;
    }) : null;
    return [
        indicies,
        classTypes,
        forbiddenBreakpoints
    ];
};
var inlineBreakOpportunities = exports.inlineBreakOpportunities = function inlineBreakOpportunities(str, options) {
    var codePoints = (0, _Util.toCodePoints)(str);
    var output = BREAK_NOT_ALLOWED;
    var _cssFormattedClasses = cssFormattedClasses(codePoints, options), _cssFormattedClasses2 = _slicedToArray(_cssFormattedClasses, 3), indicies = _cssFormattedClasses2[0], classTypes = _cssFormattedClasses2[1], forbiddenBreakpoints = _cssFormattedClasses2[2];
    codePoints.forEach(function(codePoint, i) {
        output += (0, _Util.fromCodePoint)(codePoint) + (i >= codePoints.length - 1 ? BREAK_MANDATORY : _lineBreakAtIndex(codePoints, classTypes, indicies, i + 1, forbiddenBreakpoints));
    });
    return output;
};
var Break = function() {
    function Break(codePoints, lineBreak, start, end) {
        _classCallCheck(this, Break);
        this._codePoints = codePoints;
        this.required = lineBreak === BREAK_MANDATORY;
        this.start = start;
        this.end = end;
    }
    _createClass(Break, [
        {
            key: "slice",
            value: function slice() {
                return _Util.fromCodePoint.apply(undefined, _toConsumableArray(this._codePoints.slice(this.start, this.end)));
            }
        }
    ]);
    return Break;
}();
var LineBreaker = exports.LineBreaker = function LineBreaker(str, options) {
    var codePoints = (0, _Util.toCodePoints)(str);
    var _cssFormattedClasses3 = cssFormattedClasses(codePoints, options), _cssFormattedClasses4 = _slicedToArray(_cssFormattedClasses3, 3), indicies = _cssFormattedClasses4[0], classTypes = _cssFormattedClasses4[1], forbiddenBreakpoints = _cssFormattedClasses4[2];
    var length = codePoints.length;
    var lastEnd = 0;
    var nextIndex = 0;
    return {
        next: function next() {
            if (nextIndex >= length) return {
                done: true
            };
            var lineBreak = BREAK_NOT_ALLOWED;
            while(nextIndex < length && (lineBreak = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) === BREAK_NOT_ALLOWED);
            if (lineBreak !== BREAK_NOT_ALLOWED || nextIndex === length) {
                var value = new Break(codePoints, lineBreak, lastEnd, nextIndex);
                lastEnd = nextIndex;
                return {
                    value: value,
                    done: false
                };
            }
            return {
                done: true
            };
        }
    };
};

},{"4ef4a4a5dfafd392":"l2s7A","d354847a360cb4fa":"bIYiW","3595b0d334ea77d2":"dmgLx"}],"l2s7A":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Trie = exports.createTrieFromBase64 = exports.UTRIE2_INDEX_2_MASK = exports.UTRIE2_INDEX_2_BLOCK_LENGTH = exports.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = exports.UTRIE2_INDEX_1_OFFSET = exports.UTRIE2_UTF8_2B_INDEX_2_LENGTH = exports.UTRIE2_UTF8_2B_INDEX_2_OFFSET = exports.UTRIE2_INDEX_2_BMP_LENGTH = exports.UTRIE2_LSCP_INDEX_2_LENGTH = exports.UTRIE2_DATA_MASK = exports.UTRIE2_DATA_BLOCK_LENGTH = exports.UTRIE2_LSCP_INDEX_2_OFFSET = exports.UTRIE2_SHIFT_1_2 = exports.UTRIE2_INDEX_SHIFT = exports.UTRIE2_SHIFT_1 = exports.UTRIE2_SHIFT_2 = undefined;
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _Util = require("cfa2d6f8da947043");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
/** Shift size for getting the index-2 table offset. */ var UTRIE2_SHIFT_2 = exports.UTRIE2_SHIFT_2 = 5;
/** Shift size for getting the index-1 table offset. */ var UTRIE2_SHIFT_1 = exports.UTRIE2_SHIFT_1 = 11;
/**
 * Shift size for shifting left the index array values.
 * Increases possible data size with 16-bit index values at the cost
 * of compactability.
 * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
 */ var UTRIE2_INDEX_SHIFT = exports.UTRIE2_INDEX_SHIFT = 2;
/**
 * Difference between the two shift sizes,
 * for getting an index-1 offset from an index-2 offset. 6=11-5
 */ var UTRIE2_SHIFT_1_2 = exports.UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;
/**
 * The part of the index-2 table for U+D800..U+DBFF stores values for
 * lead surrogate code _units_ not code _points_.
 * Values for lead surrogate code _points_ are indexed with this portion of the table.
 * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
 */ var UTRIE2_LSCP_INDEX_2_OFFSET = exports.UTRIE2_LSCP_INDEX_2_OFFSET = 0x10000 >> UTRIE2_SHIFT_2;
/** Number of entries in a data block. 32=0x20 */ var UTRIE2_DATA_BLOCK_LENGTH = exports.UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;
/** Mask for getting the lower bits for the in-data-block offset. */ var UTRIE2_DATA_MASK = exports.UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;
var UTRIE2_LSCP_INDEX_2_LENGTH = exports.UTRIE2_LSCP_INDEX_2_LENGTH = 0x400 >> UTRIE2_SHIFT_2;
/** Count the lengths of both BMP pieces. 2080=0x820 */ var UTRIE2_INDEX_2_BMP_LENGTH = exports.UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;
/**
 * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
 * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
 */ var UTRIE2_UTF8_2B_INDEX_2_OFFSET = exports.UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;
var UTRIE2_UTF8_2B_INDEX_2_LENGTH = exports.UTRIE2_UTF8_2B_INDEX_2_LENGTH = 32; /* U+0800 is the first code point after 2-byte UTF-8 */ 
/**
 * The index-1 table, only used for supplementary code points, at offset 2112=0x840.
 * Variable length, for code points up to highStart, where the last single-value range starts.
 * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.
 * (For 0x100000 supplementary code points U+10000..U+10ffff.)
 *
 * The part of the index-2 table for supplementary code points starts
 * after this index-1 table.
 *
 * Both the index-1 table and the following part of the index-2 table
 * are omitted completely if there is only BMP data.
 */ var UTRIE2_INDEX_1_OFFSET = exports.UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;
/**
 * Number of index-1 entries for the BMP. 32=0x20
 * This part of the index-1 table is omitted from the serialized form.
 */ var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = exports.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> UTRIE2_SHIFT_1;
/** Number of entries in an index-2 block. 64=0x40 */ var UTRIE2_INDEX_2_BLOCK_LENGTH = exports.UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;
/** Mask for getting the lower bits for the in-index-2-block offset. */ var UTRIE2_INDEX_2_MASK = exports.UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;
var createTrieFromBase64 = exports.createTrieFromBase64 = function createTrieFromBase64(base64) {
    var buffer = (0, _Util.decode)(base64);
    var view32 = Array.isArray(buffer) ? (0, _Util.polyUint32Array)(buffer) : new Uint32Array(buffer);
    var view16 = Array.isArray(buffer) ? (0, _Util.polyUint16Array)(buffer) : new Uint16Array(buffer);
    var headerLength = 24;
    var index = view16.slice(headerLength / 2, view32[4] / 2);
    var data = view32[5] === 2 ? view16.slice((headerLength + view32[4]) / 2) : view32.slice(Math.ceil((headerLength + view32[4]) / 4));
    return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);
};
var Trie = exports.Trie = function() {
    function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
        _classCallCheck(this, Trie);
        this.initialValue = initialValue;
        this.errorValue = errorValue;
        this.highStart = highStart;
        this.highValueIndex = highValueIndex;
        this.index = index;
        this.data = data;
    }
    /**
     * Get the value for a code point as stored in the Trie.
     *
     * @param codePoint the code point
     * @return the value
     */ _createClass(Trie, [
        {
            key: "get",
            value: function get(codePoint) {
                var ix = void 0;
                if (codePoint >= 0) {
                    if (codePoint < 0x0d800 || codePoint > 0x0dbff && codePoint <= 0x0ffff) {
                        // Ordinary BMP code point, excluding leading surrogates.
                        // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.
                        // 16 bit data is stored in the index array itself.
                        ix = this.index[codePoint >> UTRIE2_SHIFT_2];
                        ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                        return this.data[ix];
                    }
                    if (codePoint <= 0xffff) {
                        // Lead Surrogate Code Point.  A Separate index section is stored for
                        // lead surrogate code units and code points.
                        //   The main index has the code unit data.
                        //   For this function, we need the code point data.
                        // Note: this expression could be refactored for slightly improved efficiency, but
                        //       surrogate code points will be so rare in practice that it's not worth it.
                        ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + (codePoint - 0xd800 >> UTRIE2_SHIFT_2)];
                        ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                        return this.data[ix];
                    }
                    if (codePoint < this.highStart) {
                        // Supplemental code point, use two-level lookup.
                        ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);
                        ix = this.index[ix];
                        ix += codePoint >> UTRIE2_SHIFT_2 & UTRIE2_INDEX_2_MASK;
                        ix = this.index[ix];
                        ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                        return this.data[ix];
                    }
                    if (codePoint <= 0x10ffff) return this.data[this.highValueIndex];
                }
                // Fall through.  The code point is outside of the legal range of 0..0x10ffff.
                return this.errorValue;
            }
        }
    ]);
    return Trie;
}();

},{"cfa2d6f8da947043":"dmgLx"}],"bIYiW":[function(require,module,exports) {
"use strict";
module.exports = "KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA";

},{}],"4ITr4":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _Path = require("87afeab4b7943186");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var Circle = function Circle(x, y, radius) {
    _classCallCheck(this, Circle);
    this.type = _Path.PATH.CIRCLE;
    this.x = x;
    this.y = y;
    this.radius = radius;
    if (isNaN(x)) console.error("Invalid x value given for Circle");
    if (isNaN(y)) console.error("Invalid y value given for Circle");
    if (isNaN(radius)) console.error("Invalid radius value given for Circle");
};
exports.default = Circle;

},{"87afeab4b7943186":"fsY0i"}],"14Y4x":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createCounterText = exports.inlineListItemElement = exports.getListOwner = undefined;
var _Util = require("f8f9156a0b146303");
var _NodeContainer = require("31ed2ff9a8894c39");
var _NodeContainer2 = _interopRequireDefault(_NodeContainer);
var _TextContainer = require("1c20dd662e2bb967");
var _TextContainer2 = _interopRequireDefault(_TextContainer);
var _listStyle = require("6b5918cdc3d13b32");
var _Unicode = require("dad8caa098b1ee68");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// Margin between the enumeration and the list item content
var MARGIN_RIGHT = 7;
var ancestorTypes = [
    "OL",
    "UL",
    "MENU"
];
var getListOwner = exports.getListOwner = function getListOwner(container) {
    var parent = container.parent;
    if (!parent) return null;
    do {
        var isAncestor = ancestorTypes.indexOf(parent.tagName) !== -1;
        if (isAncestor) return parent;
        parent = parent.parent;
    }while (parent);
    return container.parent;
};
var inlineListItemElement = exports.inlineListItemElement = function inlineListItemElement(node, container, resourceLoader) {
    var listStyle = container.style.listStyle;
    if (!listStyle) return;
    var style = node.ownerDocument.defaultView.getComputedStyle(node, null);
    var wrapper = node.ownerDocument.createElement("html2canvaswrapper");
    (0, _Util.copyCSSStyles)(style, wrapper);
    wrapper.style.position = "absolute";
    wrapper.style.bottom = "auto";
    wrapper.style.display = "block";
    wrapper.style.letterSpacing = "normal";
    switch(listStyle.listStylePosition){
        case _listStyle.LIST_STYLE_POSITION.OUTSIDE:
            wrapper.style.left = "auto";
            wrapper.style.right = node.ownerDocument.defaultView.innerWidth - container.bounds.left - container.style.margin[1].getAbsoluteValue(container.bounds.width) + MARGIN_RIGHT + "px";
            wrapper.style.textAlign = "right";
            break;
        case _listStyle.LIST_STYLE_POSITION.INSIDE:
            wrapper.style.left = container.bounds.left - container.style.margin[3].getAbsoluteValue(container.bounds.width) + "px";
            wrapper.style.right = "auto";
            wrapper.style.textAlign = "left";
            break;
    }
    var text = void 0;
    var MARGIN_TOP = container.style.margin[0].getAbsoluteValue(container.bounds.width);
    var styleImage = listStyle.listStyleImage;
    if (styleImage) {
        if (styleImage.method === "url") {
            var image = node.ownerDocument.createElement("img");
            image.src = styleImage.args[0];
            wrapper.style.top = container.bounds.top - MARGIN_TOP + "px";
            wrapper.style.width = "auto";
            wrapper.style.height = "auto";
            wrapper.appendChild(image);
        } else {
            var size = parseFloat(container.style.font.fontSize) * 0.5;
            wrapper.style.top = container.bounds.top - MARGIN_TOP + container.bounds.height - 1.5 * size + "px";
            wrapper.style.width = size + "px";
            wrapper.style.height = size + "px";
            wrapper.style.backgroundImage = style.listStyleImage;
        }
    } else if (typeof container.listIndex === "number") {
        text = node.ownerDocument.createTextNode(createCounterText(container.listIndex, listStyle.listStyleType, true));
        wrapper.appendChild(text);
        wrapper.style.top = container.bounds.top - MARGIN_TOP + "px";
    }
    // $FlowFixMe
    var body = node.ownerDocument.body;
    body.appendChild(wrapper);
    if (text) {
        container.childNodes.push(_TextContainer2.default.fromTextNode(text, container));
        body.removeChild(wrapper);
    } else // $FlowFixMe
    container.childNodes.push(new _NodeContainer2.default(wrapper, container, resourceLoader, 0));
};
var ROMAN_UPPER = {
    integers: [
        1000,
        900,
        500,
        400,
        100,
        90,
        50,
        40,
        10,
        9,
        5,
        4,
        1
    ],
    values: [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I"
    ]
};
var ARMENIAN = {
    integers: [
        9000,
        8000,
        7000,
        6000,
        5000,
        4000,
        3000,
        2000,
        1000,
        900,
        800,
        700,
        600,
        500,
        400,
        300,
        200,
        100,
        90,
        80,
        70,
        60,
        50,
        40,
        30,
        20,
        10,
        9,
        8,
        7,
        6,
        5,
        4,
        3,
        2,
        1
    ],
    values: [
        "\u0554",
        "\u0553",
        "\u0552",
        "\u0551",
        "\u0550",
        "\u054F",
        "\u054E",
        "\u054D",
        "\u054C",
        "\u054B",
        "\u054A",
        "\u0549",
        "\u0548",
        "\u0547",
        "\u0546",
        "\u0545",
        "\u0544",
        "\u0543",
        "\u0542",
        "\u0541",
        "\u0540",
        "\u053F",
        "\u053E",
        "\u053D",
        "\u053C",
        "\u053B",
        "\u053A",
        "\u0539",
        "\u0538",
        "\u0537",
        "\u0536",
        "\u0535",
        "\u0534",
        "\u0533",
        "\u0532",
        "\u0531"
    ]
};
var HEBREW = {
    integers: [
        10000,
        9000,
        8000,
        7000,
        6000,
        5000,
        4000,
        3000,
        2000,
        1000,
        400,
        300,
        200,
        100,
        90,
        80,
        70,
        60,
        50,
        40,
        30,
        20,
        19,
        18,
        17,
        16,
        15,
        10,
        9,
        8,
        7,
        6,
        5,
        4,
        3,
        2,
        1
    ],
    values: [
        "\u05D9\u05F3",
        "\u05D8\u05F3",
        "\u05D7\u05F3",
        "\u05D6\u05F3",
        "\u05D5\u05F3",
        "\u05D4\u05F3",
        "\u05D3\u05F3",
        "\u05D2\u05F3",
        "\u05D1\u05F3",
        "\u05D0\u05F3",
        "\u05EA",
        "\u05E9",
        "\u05E8",
        "\u05E7",
        "\u05E6",
        "\u05E4",
        "\u05E2",
        "\u05E1",
        "\u05E0",
        "\u05DE",
        "\u05DC",
        "\u05DB",
        "\u05D9\u05D8",
        "\u05D9\u05D7",
        "\u05D9\u05D6",
        "\u05D8\u05D6",
        "\u05D8\u05D5",
        "\u05D9",
        "\u05D8",
        "\u05D7",
        "\u05D6",
        "\u05D5",
        "\u05D4",
        "\u05D3",
        "\u05D2",
        "\u05D1",
        "\u05D0"
    ]
};
var GEORGIAN = {
    integers: [
        10000,
        9000,
        8000,
        7000,
        6000,
        5000,
        4000,
        3000,
        2000,
        1000,
        900,
        800,
        700,
        600,
        500,
        400,
        300,
        200,
        100,
        90,
        80,
        70,
        60,
        50,
        40,
        30,
        20,
        10,
        9,
        8,
        7,
        6,
        5,
        4,
        3,
        2,
        1
    ],
    values: [
        "\u10F5",
        "\u10F0",
        "\u10EF",
        "\u10F4",
        "\u10EE",
        "\u10ED",
        "\u10EC",
        "\u10EB",
        "\u10EA",
        "\u10E9",
        "\u10E8",
        "\u10E7",
        "\u10E6",
        "\u10E5",
        "\u10E4",
        "\u10F3",
        "\u10E2",
        "\u10E1",
        "\u10E0",
        "\u10DF",
        "\u10DE",
        "\u10DD",
        "\u10F2",
        "\u10DC",
        "\u10DB",
        "\u10DA",
        "\u10D9",
        "\u10D8",
        "\u10D7",
        "\u10F1",
        "\u10D6",
        "\u10D5",
        "\u10D4",
        "\u10D3",
        "\u10D2",
        "\u10D1",
        "\u10D0"
    ]
};
var createAdditiveCounter = function createAdditiveCounter(value, min, max, symbols, fallback, suffix) {
    if (value < min || value > max) return createCounterText(value, fallback, suffix.length > 0);
    return symbols.integers.reduce(function(string, integer, index) {
        while(value >= integer){
            value -= integer;
            string += symbols.values[index];
        }
        return string;
    }, "") + suffix;
};
var createCounterStyleWithSymbolResolver = function createCounterStyleWithSymbolResolver(value, codePointRangeLength, isNumeric, resolver) {
    var string = "";
    do {
        if (!isNumeric) value--;
        string = resolver(value) + string;
        value /= codePointRangeLength;
    }while (value * codePointRangeLength >= codePointRangeLength);
    return string;
};
var createCounterStyleFromRange = function createCounterStyleFromRange(value, codePointRangeStart, codePointRangeEnd, isNumeric, suffix) {
    var codePointRangeLength = codePointRangeEnd - codePointRangeStart + 1;
    return (value < 0 ? "-" : "") + (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, isNumeric, function(codePoint) {
        return (0, _Unicode.fromCodePoint)(Math.floor(codePoint % codePointRangeLength) + codePointRangeStart);
    }) + suffix);
};
var createCounterStyleFromSymbols = function createCounterStyleFromSymbols(value, symbols) {
    var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ". ";
    var codePointRangeLength = symbols.length;
    return createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, false, function(codePoint) {
        return symbols[Math.floor(codePoint % codePointRangeLength)];
    }) + suffix;
};
var CJK_ZEROS = 1;
var CJK_TEN_COEFFICIENTS = 2;
var CJK_TEN_HIGH_COEFFICIENTS = 4;
var CJK_HUNDRED_COEFFICIENTS = 8;
var createCJKCounter = function createCJKCounter(value, numbers, multipliers, negativeSign, suffix, flags) {
    if (value < -9999 || value > 9999) return createCounterText(value, _listStyle.LIST_STYLE_TYPE.CJK_DECIMAL, suffix.length > 0);
    var tmp = Math.abs(value);
    var string = suffix;
    if (tmp === 0) return numbers[0] + string;
    for(var digit = 0; tmp > 0 && digit <= 4; digit++){
        var coefficient = tmp % 10;
        if (coefficient === 0 && (0, _Util.contains)(flags, CJK_ZEROS) && string !== "") string = numbers[coefficient] + string;
        else if (coefficient > 1 || coefficient === 1 && digit === 0 || coefficient === 1 && digit === 1 && (0, _Util.contains)(flags, CJK_TEN_COEFFICIENTS) || coefficient === 1 && digit === 1 && (0, _Util.contains)(flags, CJK_TEN_HIGH_COEFFICIENTS) && value > 100 || coefficient === 1 && digit > 1 && (0, _Util.contains)(flags, CJK_HUNDRED_COEFFICIENTS)) string = numbers[coefficient] + (digit > 0 ? multipliers[digit - 1] : "") + string;
        else if (coefficient === 1 && digit > 0) string = multipliers[digit - 1] + string;
        tmp = Math.floor(tmp / 10);
    }
    return (value < 0 ? negativeSign : "") + string;
};
var CHINESE_INFORMAL_MULTIPLIERS = "\u5341\u767E\u5343\u842C";
var CHINESE_FORMAL_MULTIPLIERS = "\u62FE\u4F70\u4EDF\u842C";
var JAPANESE_NEGATIVE = "\u30DE\u30A4\u30CA\u30B9";
var KOREAN_NEGATIVE = "\uB9C8\uC774\uB108\uC2A4 ";
var createCounterText = exports.createCounterText = function createCounterText(value, type, appendSuffix) {
    var defaultSuffix = appendSuffix ? ". " : "";
    var cjkSuffix = appendSuffix ? "\u3001" : "";
    var koreanSuffix = appendSuffix ? ", " : "";
    switch(type){
        case _listStyle.LIST_STYLE_TYPE.DISC:
            return "\u2022";
        case _listStyle.LIST_STYLE_TYPE.CIRCLE:
            return "\u25E6";
        case _listStyle.LIST_STYLE_TYPE.SQUARE:
            return "\u25FE";
        case _listStyle.LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO:
            var string = createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
            return string.length < 4 ? "0" + string : string;
        case _listStyle.LIST_STYLE_TYPE.CJK_DECIMAL:
            return createCounterStyleFromSymbols(value, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.LOWER_ROMAN:
            return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix).toLowerCase();
        case _listStyle.LIST_STYLE_TYPE.UPPER_ROMAN:
            return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.LOWER_GREEK:
            return createCounterStyleFromRange(value, 945, 969, false, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.LOWER_ALPHA:
            return createCounterStyleFromRange(value, 97, 122, false, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.UPPER_ALPHA:
            return createCounterStyleFromRange(value, 65, 90, false, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.ARABIC_INDIC:
            return createCounterStyleFromRange(value, 1632, 1641, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.ARMENIAN:
        case _listStyle.LIST_STYLE_TYPE.UPPER_ARMENIAN:
            return createAdditiveCounter(value, 1, 9999, ARMENIAN, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.LOWER_ARMENIAN:
            return createAdditiveCounter(value, 1, 9999, ARMENIAN, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix).toLowerCase();
        case _listStyle.LIST_STYLE_TYPE.BENGALI:
            return createCounterStyleFromRange(value, 2534, 2543, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.CAMBODIAN:
        case _listStyle.LIST_STYLE_TYPE.KHMER:
            return createCounterStyleFromRange(value, 6112, 6121, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH:
            return createCounterStyleFromSymbols(value, "\u5B50\u4E11\u5BC5\u536F\u8FB0\u5DF3\u5348\u672A\u7533\u9149\u620C\u4EA5", cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.CJK_HEAVENLY_STEM:
            return createCounterStyleFromSymbols(value, "\u7532\u4E59\u4E19\u4E01\u620A\u5DF1\u5E9A\u8F9B\u58EC\u7678", cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.CJK_IDEOGRAPHIC:
        case _listStyle.LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL:
            return createCJKCounter(value, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", CHINESE_INFORMAL_MULTIPLIERS, "\u8CA0", cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL:
            return createCJKCounter(value, "\u96F6\u58F9\u8CB3\u53C3\u8086\u4F0D\u9678\u67D2\u634C\u7396", CHINESE_FORMAL_MULTIPLIERS, "\u8CA0", cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL:
            return createCJKCounter(value, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", CHINESE_INFORMAL_MULTIPLIERS, "\u8D1F", cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL:
            return createCJKCounter(value, "\u96F6\u58F9\u8D30\u53C1\u8086\u4F0D\u9646\u67D2\u634C\u7396", CHINESE_FORMAL_MULTIPLIERS, "\u8D1F", cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.JAPANESE_INFORMAL:
            return createCJKCounter(value, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u4E07", JAPANESE_NEGATIVE, cjkSuffix, 0);
        case _listStyle.LIST_STYLE_TYPE.JAPANESE_FORMAL:
            return createCJKCounter(value, "\u96F6\u58F1\u5F10\u53C2\u56DB\u4F0D\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343\u4E07", JAPANESE_NEGATIVE, cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL:
            return createCJKCounter(value, "\uC601\uC77C\uC774\uC0BC\uC0AC\uC624\uC721\uCE60\uD314\uAD6C", "\uC2ED\uBC31\uCC9C\uB9CC", KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL:
            return createCJKCounter(value, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u842C", KOREAN_NEGATIVE, koreanSuffix, 0);
        case _listStyle.LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL:
            return createCJKCounter(value, "\u96F6\u58F9\u8CB3\u53C3\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343", KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.DEVANAGARI:
            return createCounterStyleFromRange(value, 0x966, 0x96f, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.GEORGIAN:
            return createAdditiveCounter(value, 1, 19999, GEORGIAN, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.GUJARATI:
            return createCounterStyleFromRange(value, 0xae6, 0xaef, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.GURMUKHI:
            return createCounterStyleFromRange(value, 0xa66, 0xa6f, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.HEBREW:
            return createAdditiveCounter(value, 1, 10999, HEBREW, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.HIRAGANA:
            return createCounterStyleFromSymbols(value, "\u3042\u3044\u3046\u3048\u304A\u304B\u304D\u304F\u3051\u3053\u3055\u3057\u3059\u305B\u305D\u305F\u3061\u3064\u3066\u3068\u306A\u306B\u306C\u306D\u306E\u306F\u3072\u3075\u3078\u307B\u307E\u307F\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308A\u308B\u308C\u308D\u308F\u3090\u3091\u3092\u3093");
        case _listStyle.LIST_STYLE_TYPE.HIRAGANA_IROHA:
            return createCounterStyleFromSymbols(value, "\u3044\u308D\u306F\u306B\u307B\u3078\u3068\u3061\u308A\u306C\u308B\u3092\u308F\u304B\u3088\u305F\u308C\u305D\u3064\u306D\u306A\u3089\u3080\u3046\u3090\u306E\u304A\u304F\u3084\u307E\u3051\u3075\u3053\u3048\u3066\u3042\u3055\u304D\u3086\u3081\u307F\u3057\u3091\u3072\u3082\u305B\u3059");
        case _listStyle.LIST_STYLE_TYPE.KANNADA:
            return createCounterStyleFromRange(value, 0xce6, 0xcef, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.KATAKANA:
            return createCounterStyleFromSymbols(value, "\u30A2\u30A4\u30A6\u30A8\u30AA\u30AB\u30AD\u30AF\u30B1\u30B3\u30B5\u30B7\u30B9\u30BB\u30BD\u30BF\u30C1\u30C4\u30C6\u30C8\u30CA\u30CB\u30CC\u30CD\u30CE\u30CF\u30D2\u30D5\u30D8\u30DB\u30DE\u30DF\u30E0\u30E1\u30E2\u30E4\u30E6\u30E8\u30E9\u30EA\u30EB\u30EC\u30ED\u30EF\u30F0\u30F1\u30F2\u30F3", cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.KATAKANA_IROHA:
            return createCounterStyleFromSymbols(value, "\u30A4\u30ED\u30CF\u30CB\u30DB\u30D8\u30C8\u30C1\u30EA\u30CC\u30EB\u30F2\u30EF\u30AB\u30E8\u30BF\u30EC\u30BD\u30C4\u30CD\u30CA\u30E9\u30E0\u30A6\u30F0\u30CE\u30AA\u30AF\u30E4\u30DE\u30B1\u30D5\u30B3\u30A8\u30C6\u30A2\u30B5\u30AD\u30E6\u30E1\u30DF\u30B7\u30F1\u30D2\u30E2\u30BB\u30B9", cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.LAO:
            return createCounterStyleFromRange(value, 0xed0, 0xed9, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.MONGOLIAN:
            return createCounterStyleFromRange(value, 0x1810, 0x1819, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.MYANMAR:
            return createCounterStyleFromRange(value, 0x1040, 0x1049, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.ORIYA:
            return createCounterStyleFromRange(value, 0xb66, 0xb6f, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.PERSIAN:
            return createCounterStyleFromRange(value, 0x6f0, 0x6f9, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.TAMIL:
            return createCounterStyleFromRange(value, 0xbe6, 0xbef, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.TELUGU:
            return createCounterStyleFromRange(value, 0xc66, 0xc6f, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.THAI:
            return createCounterStyleFromRange(value, 0xe50, 0xe59, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.TIBETAN:
            return createCounterStyleFromRange(value, 0xf20, 0xf29, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.DECIMAL:
        default:
            return createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
    }
};

},{"f8f9156a0b146303":"4rxFR","31ed2ff9a8894c39":"hZ5hP","1c20dd662e2bb967":"jUMv6","6b5918cdc3d13b32":"fsq6I","dad8caa098b1ee68":"3YBvN"}],"fLSEZ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _slicedToArray = function() {
    function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
            for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally{
            try {
                if (!_n && _i["return"]) _i["return"]();
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    return function(arr, i) {
        if (Array.isArray(arr)) return arr;
        else if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
        else throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}();
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _Bounds = require("22c1d7586b8b7dc6");
var _Font = require("8615827dc5ea15bf");
var _Gradient = require("d74f6cf95ae2b74");
var _TextContainer = require("98d70ec5eb9402c3");
var _TextContainer2 = _interopRequireDefault(_TextContainer);
var _background = require("84fd040f0977e6cf");
var _border = require("2d226d2fc66f86e8");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var Renderer = function() {
    function Renderer(target, options) {
        _classCallCheck(this, Renderer);
        this.target = target;
        this.options = options;
        target.render(options);
    }
    _createClass(Renderer, [
        {
            key: "renderNode",
            value: function renderNode(container) {
                if (container.isVisible()) {
                    this.renderNodeBackgroundAndBorders(container);
                    this.renderNodeContent(container);
                }
            }
        },
        {
            key: "renderNodeContent",
            value: function renderNodeContent(container) {
                var _this = this;
                var callback = function callback() {
                    if (container.childNodes.length) container.childNodes.forEach(function(child) {
                        if (child instanceof _TextContainer2.default) {
                            var style = child.parent.style;
                            _this.target.renderTextNode(child.bounds, style.color, style.font, style.textDecoration, style.textShadow);
                        } else _this.target.drawShape(child, container.style.color);
                    });
                    if (container.image) {
                        var _image = _this.options.imageStore.get(container.image);
                        if (_image) {
                            var contentBox = (0, _Bounds.calculateContentBox)(container.bounds, container.style.padding, container.style.border);
                            var _width = typeof _image.width === "number" && _image.width > 0 ? _image.width : contentBox.width;
                            var _height = typeof _image.height === "number" && _image.height > 0 ? _image.height : contentBox.height;
                            if (_width > 0 && _height > 0) _this.target.clip([
                                (0, _Bounds.calculatePaddingBoxPath)(container.curvedBounds)
                            ], function() {
                                _this.target.drawImage(_image, new _Bounds.Bounds(0, 0, _width, _height), contentBox);
                            });
                        }
                    }
                };
                var paths = container.getClipPaths();
                if (paths.length) this.target.clip(paths, callback);
                else callback();
            }
        },
        {
            key: "renderNodeBackgroundAndBorders",
            value: function renderNodeBackgroundAndBorders(container) {
                var _this2 = this;
                var HAS_BACKGROUND = !container.style.background.backgroundColor.isTransparent() || container.style.background.backgroundImage.length;
                var hasRenderableBorders = container.style.border.some(function(border) {
                    return border.borderStyle !== _border.BORDER_STYLE.NONE && !border.borderColor.isTransparent();
                });
                var callback = function callback() {
                    var backgroundPaintingArea = (0, _background.calculateBackgroungPaintingArea)(container.curvedBounds, container.style.background.backgroundClip);
                    if (HAS_BACKGROUND) _this2.target.clip([
                        backgroundPaintingArea
                    ], function() {
                        if (!container.style.background.backgroundColor.isTransparent()) _this2.target.fill(container.style.background.backgroundColor);
                        _this2.renderBackgroundImage(container);
                    });
                    container.style.border.forEach(function(border, side) {
                        if (border.borderStyle !== _border.BORDER_STYLE.NONE && !border.borderColor.isTransparent()) _this2.renderBorder(border, side, container.curvedBounds);
                    });
                };
                if (HAS_BACKGROUND || hasRenderableBorders) {
                    var paths = container.parent ? container.parent.getClipPaths() : [];
                    if (paths.length) this.target.clip(paths, callback);
                    else callback();
                }
            }
        },
        {
            key: "renderBackgroundImage",
            value: function renderBackgroundImage(container) {
                var _this3 = this;
                container.style.background.backgroundImage.slice(0).reverse().forEach(function(backgroundImage) {
                    if (backgroundImage.source.method === "url" && backgroundImage.source.args.length) _this3.renderBackgroundRepeat(container, backgroundImage);
                    else if (/gradient/i.test(backgroundImage.source.method)) _this3.renderBackgroundGradient(container, backgroundImage);
                });
            }
        },
        {
            key: "renderBackgroundRepeat",
            value: function renderBackgroundRepeat(container, background) {
                var image = this.options.imageStore.get(background.source.args[0]);
                if (image) {
                    var backgroundPositioningArea = (0, _background.calculateBackgroungPositioningArea)(container.style.background.backgroundOrigin, container.bounds, container.style.padding, container.style.border);
                    var backgroundImageSize = (0, _background.calculateBackgroundSize)(background, image, backgroundPositioningArea);
                    var position = (0, _background.calculateBackgroundPosition)(background.position, backgroundImageSize, backgroundPositioningArea);
                    var _path = (0, _background.calculateBackgroundRepeatPath)(background, position, backgroundImageSize, backgroundPositioningArea, container.bounds);
                    var _offsetX = Math.round(backgroundPositioningArea.left + position.x);
                    var _offsetY = Math.round(backgroundPositioningArea.top + position.y);
                    this.target.renderRepeat(_path, image, backgroundImageSize, _offsetX, _offsetY);
                }
            }
        },
        {
            key: "renderBackgroundGradient",
            value: function renderBackgroundGradient(container, background) {
                var backgroundPositioningArea = (0, _background.calculateBackgroungPositioningArea)(container.style.background.backgroundOrigin, container.bounds, container.style.padding, container.style.border);
                var backgroundImageSize = (0, _background.calculateGradientBackgroundSize)(background, backgroundPositioningArea);
                var position = (0, _background.calculateBackgroundPosition)(background.position, backgroundImageSize, backgroundPositioningArea);
                var gradientBounds = new _Bounds.Bounds(Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y), backgroundImageSize.width, backgroundImageSize.height);
                var gradient = (0, _Gradient.parseGradient)(container, background.source, gradientBounds);
                if (gradient) switch(gradient.type){
                    case _Gradient.GRADIENT_TYPE.LINEAR_GRADIENT:
                        // $FlowFixMe
                        this.target.renderLinearGradient(gradientBounds, gradient);
                        break;
                    case _Gradient.GRADIENT_TYPE.RADIAL_GRADIENT:
                        // $FlowFixMe
                        this.target.renderRadialGradient(gradientBounds, gradient);
                        break;
                }
            }
        },
        {
            key: "renderBorder",
            value: function renderBorder(border, side, curvePoints) {
                this.target.drawShape((0, _Bounds.parsePathForBorder)(curvePoints, side), border.borderColor);
            }
        },
        {
            key: "renderStack",
            value: function renderStack(stack) {
                var _this4 = this;
                if (stack.container.isVisible()) {
                    var _opacity = stack.getOpacity();
                    if (_opacity !== this._opacity) {
                        this.target.setOpacity(stack.getOpacity());
                        this._opacity = _opacity;
                    }
                    var _transform = stack.container.style.transform;
                    if (_transform !== null) this.target.transform(stack.container.bounds.left + _transform.transformOrigin[0].value, stack.container.bounds.top + _transform.transformOrigin[1].value, _transform.transform, function() {
                        return _this4.renderStackContent(stack);
                    });
                    else this.renderStackContent(stack);
                }
            }
        },
        {
            key: "renderStackContent",
            value: function renderStackContent(stack) {
                var _splitStackingContext = splitStackingContexts(stack), _splitStackingContext2 = _slicedToArray(_splitStackingContext, 5), negativeZIndex = _splitStackingContext2[0], zeroOrAutoZIndexOrTransformedOrOpacity = _splitStackingContext2[1], positiveZIndex = _splitStackingContext2[2], nonPositionedFloats = _splitStackingContext2[3], nonPositionedInlineLevel = _splitStackingContext2[4];
                var _splitDescendants = splitDescendants(stack), _splitDescendants2 = _slicedToArray(_splitDescendants, 2), inlineLevel = _splitDescendants2[0], nonInlineLevel = _splitDescendants2[1];
                // https://www.w3.org/TR/css-position-3/#painting-order
                // 1. the background and borders of the element forming the stacking context.
                this.renderNodeBackgroundAndBorders(stack.container);
                // 2. the child stacking contexts with negative stack levels (most negative first).
                negativeZIndex.sort(sortByZIndex).forEach(this.renderStack, this);
                // 3. For all its in-flow, non-positioned, block-level descendants in tree order:
                this.renderNodeContent(stack.container);
                nonInlineLevel.forEach(this.renderNode, this);
                // 4. All non-positioned floating descendants, in tree order. For each one of these,
                // treat the element as if it created a new stacking context, but any positioned descendants and descendants
                // which actually create a new stacking context should be considered part of the parent stacking context,
                // not this new one.
                nonPositionedFloats.forEach(this.renderStack, this);
                // 5. the in-flow, inline-level, non-positioned descendants, including inline tables and inline blocks.
                nonPositionedInlineLevel.forEach(this.renderStack, this);
                inlineLevel.forEach(this.renderNode, this);
                // 6. All positioned, opacity or transform descendants, in tree order that fall into the following categories:
                //  All positioned descendants with 'z-index: auto' or 'z-index: 0', in tree order.
                //  For those with 'z-index: auto', treat the element as if it created a new stacking context,
                //  but any positioned descendants and descendants which actually create a new stacking context should be
                //  considered part of the parent stacking context, not this new one. For those with 'z-index: 0',
                //  treat the stacking context generated atomically.
                //
                //  All opacity descendants with opacity less than 1
                //
                //  All transform descendants with transform other than none
                zeroOrAutoZIndexOrTransformedOrOpacity.forEach(this.renderStack, this);
                // 7. Stacking contexts formed by positioned descendants with z-indices greater than or equal to 1 in z-index
                // order (smallest first) then tree order.
                positiveZIndex.sort(sortByZIndex).forEach(this.renderStack, this);
            }
        },
        {
            key: "render",
            value: function render(stack) {
                var _this5 = this;
                if (this.options.backgroundColor) this.target.rectangle(this.options.x, this.options.y, this.options.width, this.options.height, this.options.backgroundColor);
                this.renderStack(stack);
                var target = this.target.getTarget();
                return target.then(function(output) {
                    _this5.options.logger.log("Render completed");
                    return output;
                });
            }
        }
    ]);
    return Renderer;
}();
exports.default = Renderer;
var splitDescendants = function splitDescendants(stack) {
    var inlineLevel = [];
    var nonInlineLevel = [];
    var length = stack.children.length;
    for(var i = 0; i < length; i++){
        var child = stack.children[i];
        if (child.isInlineLevel()) inlineLevel.push(child);
        else nonInlineLevel.push(child);
    }
    return [
        inlineLevel,
        nonInlineLevel
    ];
};
var splitStackingContexts = function splitStackingContexts(stack) {
    var negativeZIndex = [];
    var zeroOrAutoZIndexOrTransformedOrOpacity = [];
    var positiveZIndex = [];
    var nonPositionedFloats = [];
    var nonPositionedInlineLevel = [];
    var length = stack.contexts.length;
    for(var i = 0; i < length; i++){
        var child = stack.contexts[i];
        if (child.container.isPositioned() || child.container.style.opacity < 1 || child.container.isTransformed()) {
            if (child.container.style.zIndex.order < 0) negativeZIndex.push(child);
            else if (child.container.style.zIndex.order > 0) positiveZIndex.push(child);
            else zeroOrAutoZIndexOrTransformedOrOpacity.push(child);
        } else if (child.container.isFloating()) nonPositionedFloats.push(child);
        else nonPositionedInlineLevel.push(child);
    }
    return [
        negativeZIndex,
        zeroOrAutoZIndexOrTransformedOrOpacity,
        positiveZIndex,
        nonPositionedFloats,
        nonPositionedInlineLevel
    ];
};
var sortByZIndex = function sortByZIndex(a, b) {
    if (a.container.style.zIndex.order > b.container.style.zIndex.order) return 1;
    else if (a.container.style.zIndex.order < b.container.style.zIndex.order) return -1;
    return a.container.index > b.container.index ? 1 : -1;
};

},{"22c1d7586b8b7dc6":"6yOBg","8615827dc5ea15bf":"h5TBN","d74f6cf95ae2b74":"bI4yV","98d70ec5eb9402c3":"jUMv6","84fd040f0977e6cf":"AucYD","2d226d2fc66f86e8":"b73ib"}],"h5TBN":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FontMetrics = undefined;
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _Util = require("423dbb19ee765235");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var SAMPLE_TEXT = "Hidden Text";
var FontMetrics = exports.FontMetrics = function() {
    function FontMetrics(document) {
        _classCallCheck(this, FontMetrics);
        this._data = {};
        this._document = document;
    }
    _createClass(FontMetrics, [
        {
            key: "_parseMetrics",
            value: function _parseMetrics(font) {
                var container = this._document.createElement("div");
                var img = this._document.createElement("img");
                var span = this._document.createElement("span");
                var body = this._document.body;
                if (!body) throw new Error("No document found for font metrics");
                container.style.visibility = "hidden";
                container.style.fontFamily = font.fontFamily;
                container.style.fontSize = font.fontSize;
                container.style.margin = "0";
                container.style.padding = "0";
                body.appendChild(container);
                img.src = _Util.SMALL_IMAGE;
                img.width = 1;
                img.height = 1;
                img.style.margin = "0";
                img.style.padding = "0";
                img.style.verticalAlign = "baseline";
                span.style.fontFamily = font.fontFamily;
                span.style.fontSize = font.fontSize;
                span.style.margin = "0";
                span.style.padding = "0";
                span.appendChild(this._document.createTextNode(SAMPLE_TEXT));
                container.appendChild(span);
                container.appendChild(img);
                var baseline = img.offsetTop - span.offsetTop + 2;
                container.removeChild(span);
                container.appendChild(this._document.createTextNode(SAMPLE_TEXT));
                container.style.lineHeight = "normal";
                img.style.verticalAlign = "super";
                var middle = img.offsetTop - container.offsetTop + 2;
                body.removeChild(container);
                return {
                    baseline: baseline,
                    middle: middle
                };
            }
        },
        {
            key: "getMetrics",
            value: function getMetrics(font) {
                var key = font.fontFamily + " " + font.fontSize;
                if (this._data[key] === undefined) this._data[key] = this._parseMetrics(font);
                return this._data[key];
            }
        }
    ]);
    return FontMetrics;
}();

},{"423dbb19ee765235":"4rxFR"}],"bI4yV":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformWebkitRadialGradientArgs = exports.parseGradient = exports.RadialGradient = exports.LinearGradient = exports.RADIAL_GRADIENT_SHAPE = exports.GRADIENT_TYPE = undefined;
var _slicedToArray = function() {
    function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
            for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally{
            try {
                if (!_n && _i["return"]) _i["return"]();
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    return function(arr, i) {
        if (Array.isArray(arr)) return arr;
        else if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
        else throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}();
var _NodeContainer = require("e35a67b4bfec3de6");
var _NodeContainer2 = _interopRequireDefault(_NodeContainer);
var _Angle = require("50338169b9ebf441");
var _Color = require("acfdaa72a2f20413");
var _Color2 = _interopRequireDefault(_Color);
var _Length = require("9a605134aa8793a5");
var _Length2 = _interopRequireDefault(_Length);
var _Util = require("c9ebb9bde8cd5085");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var SIDE_OR_CORNER = /^(to )?(left|top|right|bottom)( (left|top|right|bottom))?$/i;
var PERCENTAGE_ANGLES = /^([+-]?\d*\.?\d+)% ([+-]?\d*\.?\d+)%$/i;
var ENDS_WITH_LENGTH = /(px)|%|( 0)$/i;
var FROM_TO_COLORSTOP = /^(from|to|color-stop)\((?:([\d.]+)(%)?,\s*)?(.+?)\)$/i;
var RADIAL_SHAPE_DEFINITION = /^\s*(circle|ellipse)?\s*((?:([\d.]+)(px|r?em|%)\s*(?:([\d.]+)(px|r?em|%))?)|closest-side|closest-corner|farthest-side|farthest-corner)?\s*(?:at\s*(?:(left|center|right)|([\d.]+)(px|r?em|%))\s+(?:(top|center|bottom)|([\d.]+)(px|r?em|%)))?(?:\s|$)/i;
var GRADIENT_TYPE = exports.GRADIENT_TYPE = {
    LINEAR_GRADIENT: 0,
    RADIAL_GRADIENT: 1
};
var RADIAL_GRADIENT_SHAPE = exports.RADIAL_GRADIENT_SHAPE = {
    CIRCLE: 0,
    ELLIPSE: 1
};
var LENGTH_FOR_POSITION = {
    left: new _Length2.default("0%"),
    top: new _Length2.default("0%"),
    center: new _Length2.default("50%"),
    right: new _Length2.default("100%"),
    bottom: new _Length2.default("100%")
};
var LinearGradient = exports.LinearGradient = function LinearGradient(colorStops, direction) {
    _classCallCheck(this, LinearGradient);
    this.type = GRADIENT_TYPE.LINEAR_GRADIENT;
    this.colorStops = colorStops;
    this.direction = direction;
};
var RadialGradient = exports.RadialGradient = function RadialGradient(colorStops, shape, center, radius) {
    _classCallCheck(this, RadialGradient);
    this.type = GRADIENT_TYPE.RADIAL_GRADIENT;
    this.colorStops = colorStops;
    this.shape = shape;
    this.center = center;
    this.radius = radius;
};
var parseGradient = exports.parseGradient = function parseGradient(container, _ref, bounds) {
    var args = _ref.args, method = _ref.method, prefix = _ref.prefix;
    if (method === "linear-gradient") return parseLinearGradient(args, bounds, !!prefix);
    else if (method === "gradient" && args[0] === "linear") // TODO handle correct angle
    return parseLinearGradient([
        "to bottom"
    ].concat(transformObsoleteColorStops(args.slice(3))), bounds, !!prefix);
    else if (method === "radial-gradient") return parseRadialGradient(container, prefix === "-webkit-" ? transformWebkitRadialGradientArgs(args) : args, bounds);
    else if (method === "gradient" && args[0] === "radial") return parseRadialGradient(container, transformObsoleteColorStops(transformWebkitRadialGradientArgs(args.slice(1))), bounds);
};
var parseColorStops = function parseColorStops(args, firstColorStopIndex, lineLength) {
    var colorStops = [];
    for(var i = firstColorStopIndex; i < args.length; i++){
        var value = args[i];
        var HAS_LENGTH = ENDS_WITH_LENGTH.test(value);
        var lastSpaceIndex = value.lastIndexOf(" ");
        var _color = new _Color2.default(HAS_LENGTH ? value.substring(0, lastSpaceIndex) : value);
        var _stop = HAS_LENGTH ? new _Length2.default(value.substring(lastSpaceIndex + 1)) : i === firstColorStopIndex ? new _Length2.default("0%") : i === args.length - 1 ? new _Length2.default("100%") : null;
        colorStops.push({
            color: _color,
            stop: _stop
        });
    }
    var absoluteValuedColorStops = colorStops.map(function(_ref2) {
        var color = _ref2.color, stop = _ref2.stop;
        var absoluteStop = lineLength === 0 ? 0 : stop ? stop.getAbsoluteValue(lineLength) / lineLength : null;
        return {
            color: color,
            // $FlowFixMe
            stop: absoluteStop
        };
    });
    var previousColorStop = absoluteValuedColorStops[0].stop;
    for(var _i = 0; _i < absoluteValuedColorStops.length; _i++)if (previousColorStop !== null) {
        var _stop2 = absoluteValuedColorStops[_i].stop;
        if (_stop2 === null) {
            var n = _i;
            while(absoluteValuedColorStops[n].stop === null)n++;
            var steps = n - _i + 1;
            var nextColorStep = absoluteValuedColorStops[n].stop;
            var stepSize = (nextColorStep - previousColorStop) / steps;
            for(; _i < n; _i++)previousColorStop = absoluteValuedColorStops[_i].stop = previousColorStop + stepSize;
        } else previousColorStop = _stop2;
    }
    return absoluteValuedColorStops;
};
var parseLinearGradient = function parseLinearGradient(args, bounds, hasPrefix) {
    var angle = (0, _Angle.parseAngle)(args[0]);
    var HAS_SIDE_OR_CORNER = SIDE_OR_CORNER.test(args[0]);
    var HAS_DIRECTION = HAS_SIDE_OR_CORNER || angle !== null || PERCENTAGE_ANGLES.test(args[0]);
    var direction = HAS_DIRECTION ? angle !== null ? calculateGradientDirection(// if there is a prefix, the 0° angle points due East (instead of North per W3C)
    hasPrefix ? angle - Math.PI * 0.5 : angle, bounds) : HAS_SIDE_OR_CORNER ? parseSideOrCorner(args[0], bounds) : parsePercentageAngle(args[0], bounds) : calculateGradientDirection(Math.PI, bounds);
    var firstColorStopIndex = HAS_DIRECTION ? 1 : 0;
    // TODO: Fix some inaccuracy with color stops with px values
    var lineLength = Math.min((0, _Util.distance)(Math.abs(direction.x0) + Math.abs(direction.x1), Math.abs(direction.y0) + Math.abs(direction.y1)), bounds.width * 2, bounds.height * 2);
    return new LinearGradient(parseColorStops(args, firstColorStopIndex, lineLength), direction);
};
var parseRadialGradient = function parseRadialGradient(container, args, bounds) {
    var m = args[0].match(RADIAL_SHAPE_DEFINITION);
    var shape = m && (m[1] === "circle" || // explicit shape specification
    m[3] !== undefined && m[5] === undefined // only one radius coordinate
    ) ? RADIAL_GRADIENT_SHAPE.CIRCLE : RADIAL_GRADIENT_SHAPE.ELLIPSE;
    var radius = {};
    var center = {};
    if (m) {
        // Radius
        if (m[3] !== undefined) radius.x = (0, _Length.calculateLengthFromValueWithUnit)(container, m[3], m[4]).getAbsoluteValue(bounds.width);
        if (m[5] !== undefined) radius.y = (0, _Length.calculateLengthFromValueWithUnit)(container, m[5], m[6]).getAbsoluteValue(bounds.height);
        // Position
        if (m[7]) center.x = LENGTH_FOR_POSITION[m[7].toLowerCase()];
        else if (m[8] !== undefined) center.x = (0, _Length.calculateLengthFromValueWithUnit)(container, m[8], m[9]);
        if (m[10]) center.y = LENGTH_FOR_POSITION[m[10].toLowerCase()];
        else if (m[11] !== undefined) center.y = (0, _Length.calculateLengthFromValueWithUnit)(container, m[11], m[12]);
    }
    var gradientCenter = {
        x: center.x === undefined ? bounds.width / 2 : center.x.getAbsoluteValue(bounds.width),
        y: center.y === undefined ? bounds.height / 2 : center.y.getAbsoluteValue(bounds.height)
    };
    var gradientRadius = calculateRadius(m && m[2] || "farthest-corner", shape, gradientCenter, radius, bounds);
    return new RadialGradient(parseColorStops(args, m ? 1 : 0, Math.min(gradientRadius.x, gradientRadius.y)), shape, gradientCenter, gradientRadius);
};
var calculateGradientDirection = function calculateGradientDirection(radian, bounds) {
    var width = bounds.width;
    var height = bounds.height;
    var HALF_WIDTH = width * 0.5;
    var HALF_HEIGHT = height * 0.5;
    var lineLength = Math.abs(width * Math.sin(radian)) + Math.abs(height * Math.cos(radian));
    var HALF_LINE_LENGTH = lineLength / 2;
    var x0 = HALF_WIDTH + Math.sin(radian) * HALF_LINE_LENGTH;
    var y0 = HALF_HEIGHT - Math.cos(radian) * HALF_LINE_LENGTH;
    var x1 = width - x0;
    var y1 = height - y0;
    return {
        x0: x0,
        x1: x1,
        y0: y0,
        y1: y1
    };
};
var parseTopRight = function parseTopRight(bounds) {
    return Math.acos(bounds.width / 2 / ((0, _Util.distance)(bounds.width, bounds.height) / 2));
};
var parseSideOrCorner = function parseSideOrCorner(side, bounds) {
    switch(side){
        case "bottom":
        case "to top":
            return calculateGradientDirection(0, bounds);
        case "left":
        case "to right":
            return calculateGradientDirection(Math.PI / 2, bounds);
        case "right":
        case "to left":
            return calculateGradientDirection(3 * Math.PI / 2, bounds);
        case "top right":
        case "right top":
        case "to bottom left":
        case "to left bottom":
            return calculateGradientDirection(Math.PI + parseTopRight(bounds), bounds);
        case "top left":
        case "left top":
        case "to bottom right":
        case "to right bottom":
            return calculateGradientDirection(Math.PI - parseTopRight(bounds), bounds);
        case "bottom left":
        case "left bottom":
        case "to top right":
        case "to right top":
            return calculateGradientDirection(parseTopRight(bounds), bounds);
        case "bottom right":
        case "right bottom":
        case "to top left":
        case "to left top":
            return calculateGradientDirection(2 * Math.PI - parseTopRight(bounds), bounds);
        case "top":
        case "to bottom":
        default:
            return calculateGradientDirection(Math.PI, bounds);
    }
};
var parsePercentageAngle = function parsePercentageAngle(angle, bounds) {
    var _angle$split$map = angle.split(" ").map(parseFloat), _angle$split$map2 = _slicedToArray(_angle$split$map, 2), left = _angle$split$map2[0], top = _angle$split$map2[1];
    var ratio = left / 100 * bounds.width / (top / 100 * bounds.height);
    return calculateGradientDirection(Math.atan(isNaN(ratio) ? 1 : ratio) + Math.PI / 2, bounds);
};
var findCorner = function findCorner(bounds, x, y, closest) {
    var corners = [
        {
            x: 0,
            y: 0
        },
        {
            x: 0,
            y: bounds.height
        },
        {
            x: bounds.width,
            y: 0
        },
        {
            x: bounds.width,
            y: bounds.height
        }
    ];
    // $FlowFixMe
    return corners.reduce(function(stat, corner) {
        var d = (0, _Util.distance)(x - corner.x, y - corner.y);
        if (closest ? d < stat.optimumDistance : d > stat.optimumDistance) return {
            optimumCorner: corner,
            optimumDistance: d
        };
        return stat;
    }, {
        optimumDistance: closest ? Infinity : -Infinity,
        optimumCorner: null
    }).optimumCorner;
};
var calculateRadius = function calculateRadius(extent, shape, center, radius, bounds) {
    var x = center.x;
    var y = center.y;
    var rx = 0;
    var ry = 0;
    switch(extent){
        case "closest-side":
            // The ending shape is sized so that that it exactly meets the side of the gradient box closest to the gradient’s center.
            // If the shape is an ellipse, it exactly meets the closest side in each dimension.
            if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) rx = ry = Math.min(Math.abs(x), Math.abs(x - bounds.width), Math.abs(y), Math.abs(y - bounds.height));
            else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                rx = Math.min(Math.abs(x), Math.abs(x - bounds.width));
                ry = Math.min(Math.abs(y), Math.abs(y - bounds.height));
            }
            break;
        case "closest-corner":
            // The ending shape is sized so that that it passes through the corner of the gradient box closest to the gradient’s center.
            // If the shape is an ellipse, the ending shape is given the same aspect-ratio it would have if closest-side were specified.
            if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) rx = ry = Math.min((0, _Util.distance)(x, y), (0, _Util.distance)(x, y - bounds.height), (0, _Util.distance)(x - bounds.width, y), (0, _Util.distance)(x - bounds.width, y - bounds.height));
            else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                // Compute the ratio ry/rx (which is to be the same as for "closest-side")
                var c = Math.min(Math.abs(y), Math.abs(y - bounds.height)) / Math.min(Math.abs(x), Math.abs(x - bounds.width));
                var corner = findCorner(bounds, x, y, true);
                rx = (0, _Util.distance)(corner.x - x, (corner.y - y) / c);
                ry = c * rx;
            }
            break;
        case "farthest-side":
            // Same as closest-side, except the ending shape is sized based on the farthest side(s)
            if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) rx = ry = Math.max(Math.abs(x), Math.abs(x - bounds.width), Math.abs(y), Math.abs(y - bounds.height));
            else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                rx = Math.max(Math.abs(x), Math.abs(x - bounds.width));
                ry = Math.max(Math.abs(y), Math.abs(y - bounds.height));
            }
            break;
        case "farthest-corner":
            // Same as closest-corner, except the ending shape is sized based on the farthest corner.
            // If the shape is an ellipse, the ending shape is given the same aspect ratio it would have if farthest-side were specified.
            if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) rx = ry = Math.max((0, _Util.distance)(x, y), (0, _Util.distance)(x, y - bounds.height), (0, _Util.distance)(x - bounds.width, y), (0, _Util.distance)(x - bounds.width, y - bounds.height));
            else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                // Compute the ratio ry/rx (which is to be the same as for "farthest-side")
                var _c = Math.max(Math.abs(y), Math.abs(y - bounds.height)) / Math.max(Math.abs(x), Math.abs(x - bounds.width));
                var _corner = findCorner(bounds, x, y, false);
                rx = (0, _Util.distance)(_corner.x - x, (_corner.y - y) / _c);
                ry = _c * rx;
            }
            break;
        default:
            // pixel or percentage values
            rx = radius.x || 0;
            ry = radius.y !== undefined ? radius.y : rx;
            break;
    }
    return {
        x: rx,
        y: ry
    };
};
var transformWebkitRadialGradientArgs = exports.transformWebkitRadialGradientArgs = function transformWebkitRadialGradientArgs(args) {
    var shape = "";
    var radius = "";
    var extent = "";
    var position = "";
    var idx = 0;
    var POSITION = /^(left|center|right|\d+(?:px|r?em|%)?)(?:\s+(top|center|bottom|\d+(?:px|r?em|%)?))?$/i;
    var SHAPE_AND_EXTENT = /^(circle|ellipse)?\s*(closest-side|closest-corner|farthest-side|farthest-corner|contain|cover)?$/i;
    var RADIUS = /^\d+(px|r?em|%)?(?:\s+\d+(px|r?em|%)?)?$/i;
    var matchStartPosition = args[idx].match(POSITION);
    if (matchStartPosition) idx++;
    var matchShapeExtent = args[idx].match(SHAPE_AND_EXTENT);
    if (matchShapeExtent) {
        shape = matchShapeExtent[1] || "";
        extent = matchShapeExtent[2] || "";
        if (extent === "contain") extent = "closest-side";
        else if (extent === "cover") extent = "farthest-corner";
        idx++;
    }
    var matchStartRadius = args[idx].match(RADIUS);
    if (matchStartRadius) idx++;
    var matchEndPosition = args[idx].match(POSITION);
    if (matchEndPosition) idx++;
    var matchEndRadius = args[idx].match(RADIUS);
    if (matchEndRadius) idx++;
    var matchPosition = matchEndPosition || matchStartPosition;
    if (matchPosition && matchPosition[1]) {
        position = matchPosition[1] + (/^\d+$/.test(matchPosition[1]) ? "px" : "");
        if (matchPosition[2]) position += " " + matchPosition[2] + (/^\d+$/.test(matchPosition[2]) ? "px" : "");
    }
    var matchRadius = matchEndRadius || matchStartRadius;
    if (matchRadius) {
        radius = matchRadius[0];
        if (!matchRadius[1]) radius += "px";
    }
    if (position && !shape && !radius && !extent) {
        radius = position;
        position = "";
    }
    if (position) position = "at " + position;
    return [
        [
            shape,
            extent,
            radius,
            position
        ].filter(function(s) {
            return !!s;
        }).join(" ")
    ].concat(args.slice(idx));
};
var transformObsoleteColorStops = function transformObsoleteColorStops(args) {
    return args.map(function(color) {
        return color.match(FROM_TO_COLORSTOP);
    })// $FlowFixMe
    .map(function(v, index) {
        if (!v) return args[index];
        switch(v[1]){
            case "from":
                return v[4] + " 0%";
            case "to":
                return v[4] + " 100%";
            case "color-stop":
                if (v[3] === "%") return v[4] + " " + v[2];
                return v[4] + " " + parseFloat(v[2]) * 100 + "%";
        }
    });
};

},{"e35a67b4bfec3de6":"hZ5hP","50338169b9ebf441":"h3MKM","acfdaa72a2f20413":"hb8Oc","9a605134aa8793a5":"hGzHQ","c9ebb9bde8cd5085":"4rxFR"}],"h3MKM":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var ANGLE = /([+-]?\d*\.?\d+)(deg|grad|rad|turn)/i;
var parseAngle = exports.parseAngle = function parseAngle(angle) {
    var match = angle.match(ANGLE);
    if (match) {
        var value = parseFloat(match[1]);
        switch(match[2].toLowerCase()){
            case "deg":
                return Math.PI * value / 180;
            case "grad":
                return Math.PI / 200 * value;
            case "rad":
                return value;
            case "turn":
                return Math.PI * 2 * value;
        }
    }
    return null;
};

},{}],"d4kbD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cloneWindow = exports.DocumentCloner = undefined;
var _slicedToArray = function() {
    function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
            for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally{
            try {
                if (!_n && _i["return"]) _i["return"]();
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    return function(arr, i) {
        if (Array.isArray(arr)) return arr;
        else if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
        else throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}();
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _Bounds = require("2a9a651018c36f7d");
var _Proxy = require("ddefd0bc8d76123b");
var _ResourceLoader = require("20850ea34338634c");
var _ResourceLoader2 = _interopRequireDefault(_ResourceLoader);
var _Util = require("c6c06047f57650ec");
var _background = require("c556e461755a60d1");
var _CanvasRenderer = require("40206757447b11a4");
var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);
var _PseudoNodeContent = require("666dc0ae9a6ba094");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var IGNORE_ATTRIBUTE = "data-html2canvas-ignore";
var DocumentCloner = exports.DocumentCloner = function() {
    function DocumentCloner(element, options, logger, copyInline, renderer) {
        _classCallCheck(this, DocumentCloner);
        this.referenceElement = element;
        this.scrolledElements = [];
        this.copyStyles = copyInline;
        this.inlineImages = copyInline;
        this.logger = logger;
        this.options = options;
        this.renderer = renderer;
        this.resourceLoader = new _ResourceLoader2.default(options, logger, window);
        this.pseudoContentData = {
            counters: {},
            quoteDepth: 0
        };
        // $FlowFixMe
        this.documentElement = this.cloneNode(element.ownerDocument.documentElement);
    }
    _createClass(DocumentCloner, [
        {
            key: "inlineAllImages",
            value: function inlineAllImages(node) {
                var _this = this;
                if (this.inlineImages && node) {
                    var style = node.style;
                    Promise.all((0, _background.parseBackgroundImage)(style.backgroundImage).map(function(backgroundImage) {
                        if (backgroundImage.method === "url") return _this.resourceLoader.inlineImage(backgroundImage.args[0]).then(function(img) {
                            return img && typeof img.src === "string" ? 'url("' + img.src + '")' : "none";
                        }).catch(function(e) {
                            _this.logger.log("Unable to load image", e);
                        });
                        return Promise.resolve("" + backgroundImage.prefix + backgroundImage.method + "(" + backgroundImage.args.join(",") + ")");
                    })).then(function(backgroundImages) {
                        if (backgroundImages.length > 1) // TODO Multiple backgrounds somehow broken in Chrome
                        style.backgroundColor = "";
                        style.backgroundImage = backgroundImages.join(",");
                    });
                    if (node instanceof HTMLImageElement) this.resourceLoader.inlineImage(node.src).then(function(img) {
                        if (img && node instanceof HTMLImageElement && node.parentNode) {
                            var parentNode = node.parentNode;
                            var clonedChild = (0, _Util.copyCSSStyles)(node.style, img.cloneNode(false));
                            parentNode.replaceChild(clonedChild, node);
                        }
                    }).catch(function(e) {
                        _this.logger.log("Unable to load image", e);
                    });
                }
            }
        },
        {
            key: "inlineFonts",
            value: function inlineFonts(document1) {
                var _this2 = this;
                return Promise.all(Array.from(document1.styleSheets).map(function(sheet) {
                    if (sheet.href) return fetch(sheet.href).then(function(res) {
                        return res.text();
                    }).then(function(text) {
                        return createStyleSheetFontsFromText(text, sheet.href);
                    }).catch(function(e) {
                        _this2.logger.log("Unable to load stylesheet", e);
                        return [];
                    });
                    return getSheetFonts(sheet, document1);
                })).then(function(fonts) {
                    return fonts.reduce(function(acc, font) {
                        return acc.concat(font);
                    }, []);
                }).then(function(fonts) {
                    return Promise.all(fonts.map(function(font) {
                        return fetch(font.formats[0].src).then(function(response) {
                            return response.blob();
                        }).then(function(blob) {
                            return new Promise(function(resolve, reject) {
                                var reader = new FileReader();
                                reader.onerror = reject;
                                reader.onload = function() {
                                    // $FlowFixMe
                                    var result = reader.result;
                                    resolve(result);
                                };
                                reader.readAsDataURL(blob);
                            });
                        }).then(function(dataUri) {
                            font.fontFace.setProperty("src", 'url("' + dataUri + '")');
                            return "@font-face {" + font.fontFace.cssText + " ";
                        });
                    }));
                }).then(function(fontCss) {
                    var style = document1.createElement("style");
                    style.textContent = fontCss.join("\n");
                    _this2.documentElement.appendChild(style);
                });
            }
        },
        {
            key: "createElementClone",
            value: function createElementClone(node) {
                var _this3 = this;
                if (this.copyStyles && node instanceof HTMLCanvasElement) {
                    var img = node.ownerDocument.createElement("img");
                    try {
                        img.src = node.toDataURL();
                        return img;
                    } catch (e) {
                        this.logger.log("Unable to clone canvas contents, canvas is tainted");
                    }
                }
                if (node instanceof HTMLIFrameElement) {
                    var tempIframe = node.cloneNode(false);
                    var iframeKey = generateIframeKey();
                    tempIframe.setAttribute("data-html2canvas-internal-iframe-key", iframeKey);
                    var _parseBounds = (0, _Bounds.parseBounds)(node, 0, 0), width = _parseBounds.width, height = _parseBounds.height;
                    this.resourceLoader.cache[iframeKey] = getIframeDocumentElement(node, this.options).then(function(documentElement) {
                        return _this3.renderer(documentElement, {
                            async: _this3.options.async,
                            allowTaint: _this3.options.allowTaint,
                            backgroundColor: "#ffffff",
                            canvas: null,
                            imageTimeout: _this3.options.imageTimeout,
                            logging: _this3.options.logging,
                            proxy: _this3.options.proxy,
                            removeContainer: _this3.options.removeContainer,
                            scale: _this3.options.scale,
                            foreignObjectRendering: _this3.options.foreignObjectRendering,
                            useCORS: _this3.options.useCORS,
                            target: new _CanvasRenderer2.default(),
                            width: width,
                            height: height,
                            x: 0,
                            y: 0,
                            windowWidth: documentElement.ownerDocument.defaultView.innerWidth,
                            windowHeight: documentElement.ownerDocument.defaultView.innerHeight,
                            scrollX: documentElement.ownerDocument.defaultView.pageXOffset,
                            scrollY: documentElement.ownerDocument.defaultView.pageYOffset
                        }, _this3.logger.child(iframeKey));
                    }).then(function(canvas) {
                        return new Promise(function(resolve, reject) {
                            var iframeCanvas = document.createElement("img");
                            iframeCanvas.onload = function() {
                                return resolve(canvas);
                            };
                            iframeCanvas.onerror = reject;
                            iframeCanvas.src = canvas.toDataURL();
                            if (tempIframe.parentNode) tempIframe.parentNode.replaceChild((0, _Util.copyCSSStyles)(node.ownerDocument.defaultView.getComputedStyle(node), iframeCanvas), tempIframe);
                        });
                    });
                    return tempIframe;
                }
                if (node instanceof HTMLStyleElement && node.sheet && node.sheet.cssRules) {
                    var css = [].slice.call(node.sheet.cssRules, 0).reduce(function(css, rule) {
                        try {
                            if (rule && rule.cssText) return css + rule.cssText;
                            return css;
                        } catch (err) {
                            _this3.logger.log("Unable to access cssText property", rule.name);
                            return css;
                        }
                    }, "");
                    var style = node.cloneNode(false);
                    style.textContent = css;
                    return style;
                }
                return node.cloneNode(false);
            }
        },
        {
            key: "cloneNode",
            value: function cloneNode(node) {
                var clone = node.nodeType === Node.TEXT_NODE ? document.createTextNode(node.nodeValue) : this.createElementClone(node);
                var window1 = node.ownerDocument.defaultView;
                var style = node instanceof window1.HTMLElement ? window1.getComputedStyle(node) : null;
                var styleBefore = node instanceof window1.HTMLElement ? window1.getComputedStyle(node, ":before") : null;
                var styleAfter = node instanceof window1.HTMLElement ? window1.getComputedStyle(node, ":after") : null;
                if (this.referenceElement === node && clone instanceof window1.HTMLElement) this.clonedReferenceElement = clone;
                if (clone instanceof window1.HTMLBodyElement) createPseudoHideStyles(clone);
                var counters = (0, _PseudoNodeContent.parseCounterReset)(style, this.pseudoContentData);
                var contentBefore = (0, _PseudoNodeContent.resolvePseudoContent)(node, styleBefore, this.pseudoContentData);
                for(var child = node.firstChild; child; child = child.nextSibling){
                    if (child.nodeType !== Node.ELEMENT_NODE || child.nodeName !== "SCRIPT" && // $FlowFixMe
                    !child.hasAttribute(IGNORE_ATTRIBUTE) && (typeof this.options.ignoreElements !== "function" || // $FlowFixMe
                    !this.options.ignoreElements(child))) {
                        if (!this.copyStyles || child.nodeName !== "STYLE") clone.appendChild(this.cloneNode(child));
                    }
                }
                var contentAfter = (0, _PseudoNodeContent.resolvePseudoContent)(node, styleAfter, this.pseudoContentData);
                (0, _PseudoNodeContent.popCounters)(counters, this.pseudoContentData);
                if (node instanceof window1.HTMLElement && clone instanceof window1.HTMLElement) {
                    if (styleBefore) this.inlineAllImages(inlinePseudoElement(node, clone, styleBefore, contentBefore, PSEUDO_BEFORE));
                    if (styleAfter) this.inlineAllImages(inlinePseudoElement(node, clone, styleAfter, contentAfter, PSEUDO_AFTER));
                    if (style && this.copyStyles && !(node instanceof HTMLIFrameElement)) (0, _Util.copyCSSStyles)(style, clone);
                    this.inlineAllImages(clone);
                    if (node.scrollTop !== 0 || node.scrollLeft !== 0) this.scrolledElements.push([
                        clone,
                        node.scrollLeft,
                        node.scrollTop
                    ]);
                    switch(node.nodeName){
                        case "CANVAS":
                            if (!this.copyStyles) cloneCanvasContents(node, clone);
                            break;
                        case "TEXTAREA":
                        case "SELECT":
                            clone.value = node.value;
                            break;
                    }
                }
                return clone;
            }
        }
    ]);
    return DocumentCloner;
}();
var getSheetFonts = function getSheetFonts(sheet, document1) {
    // $FlowFixMe
    return (sheet.cssRules ? Array.from(sheet.cssRules) : []).filter(function(rule) {
        return rule.type === CSSRule.FONT_FACE_RULE;
    }).map(function(rule) {
        var src = (0, _background.parseBackgroundImage)(rule.style.getPropertyValue("src"));
        var formats = [];
        for(var i = 0; i < src.length; i++)if (src[i].method === "url" && src[i + 1] && src[i + 1].method === "format") {
            var a = document1.createElement("a");
            a.href = src[i].args[0];
            if (document1.body) document1.body.appendChild(a);
            var font = {
                src: a.href,
                format: src[i + 1].args[0]
            };
            formats.push(font);
        }
        return {
            // TODO select correct format for browser),
            formats: formats.filter(function(font) {
                return /^woff/i.test(font.format);
            }),
            fontFace: rule.style
        };
    }).filter(function(font) {
        return font.formats.length;
    });
};
var createStyleSheetFontsFromText = function createStyleSheetFontsFromText(text, baseHref) {
    var doc = document.implementation.createHTMLDocument("");
    var base = document.createElement("base");
    // $FlowFixMe
    base.href = baseHref;
    var style = document.createElement("style");
    style.textContent = text;
    if (doc.head) doc.head.appendChild(base);
    if (doc.body) doc.body.appendChild(style);
    return style.sheet ? getSheetFonts(style.sheet, doc) : [];
};
var restoreOwnerScroll = function restoreOwnerScroll(ownerDocument, x, y) {
    if (ownerDocument.defaultView && (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) ownerDocument.defaultView.scrollTo(x, y);
};
var cloneCanvasContents = function cloneCanvasContents(canvas, clonedCanvas) {
    try {
        if (clonedCanvas) {
            clonedCanvas.width = canvas.width;
            clonedCanvas.height = canvas.height;
            var ctx = canvas.getContext("2d");
            var clonedCtx = clonedCanvas.getContext("2d");
            if (ctx) clonedCtx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);
            else clonedCtx.drawImage(canvas, 0, 0);
        }
    } catch (e) {}
};
var inlinePseudoElement = function inlinePseudoElement(node, clone, style, contentItems, pseudoElt) {
    if (!style || !style.content || style.content === "none" || style.content === "-moz-alt-content" || style.display === "none") return;
    var anonymousReplacedElement = clone.ownerDocument.createElement("html2canvaspseudoelement");
    (0, _Util.copyCSSStyles)(style, anonymousReplacedElement);
    if (contentItems) {
        var len = contentItems.length;
        for(var i = 0; i < len; i++){
            var item = contentItems[i];
            switch(item.type){
                case _PseudoNodeContent.PSEUDO_CONTENT_ITEM_TYPE.IMAGE:
                    var img = clone.ownerDocument.createElement("img");
                    img.src = (0, _background.parseBackgroundImage)("url(" + item.value + ")")[0].args[0];
                    img.style.opacity = "1";
                    anonymousReplacedElement.appendChild(img);
                    break;
                case _PseudoNodeContent.PSEUDO_CONTENT_ITEM_TYPE.TEXT:
                    anonymousReplacedElement.appendChild(clone.ownerDocument.createTextNode(item.value));
                    break;
            }
        }
    }
    anonymousReplacedElement.className = PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
    clone.className += pseudoElt === PSEUDO_BEFORE ? " " + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE : " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
    if (pseudoElt === PSEUDO_BEFORE) clone.insertBefore(anonymousReplacedElement, clone.firstChild);
    else clone.appendChild(anonymousReplacedElement);
    return anonymousReplacedElement;
};
var URL_REGEXP = /^url\((.+)\)$/i;
var PSEUDO_BEFORE = ":before";
var PSEUDO_AFTER = ":after";
var PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = "___html2canvas___pseudoelement_before";
var PSEUDO_HIDE_ELEMENT_CLASS_AFTER = "___html2canvas___pseudoelement_after";
var PSEUDO_HIDE_ELEMENT_STYLE = '{\n    content: "" !important;\n    display: none !important;\n}';
var createPseudoHideStyles = function createPseudoHideStyles(body) {
    createStyles(body, "." + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + PSEUDO_BEFORE + PSEUDO_HIDE_ELEMENT_STYLE + "\n         ." + PSEUDO_HIDE_ELEMENT_CLASS_AFTER + PSEUDO_AFTER + PSEUDO_HIDE_ELEMENT_STYLE);
};
var createStyles = function createStyles(body, styles) {
    var style = body.ownerDocument.createElement("style");
    style.innerHTML = styles;
    body.appendChild(style);
};
var initNode = function initNode(_ref) {
    var _ref2 = _slicedToArray(_ref, 3), element = _ref2[0], x = _ref2[1], y = _ref2[2];
    element.scrollLeft = x;
    element.scrollTop = y;
};
var generateIframeKey = function generateIframeKey() {
    return Math.ceil(Date.now() + Math.random() * 10000000).toString(16);
};
var DATA_URI_REGEXP = /^data:text\/(.+);(base64)?,(.*)$/i;
var getIframeDocumentElement = function getIframeDocumentElement(node, options) {
    try {
        return Promise.resolve(node.contentWindow.document.documentElement);
    } catch (e) {
        return options.proxy ? (0, _Proxy.Proxy)(node.src, options).then(function(html) {
            var match = html.match(DATA_URI_REGEXP);
            if (!match) return Promise.reject();
            return match[2] === "base64" ? window.atob(decodeURIComponent(match[3])) : decodeURIComponent(match[3]);
        }).then(function(html) {
            return createIframeContainer(node.ownerDocument, (0, _Bounds.parseBounds)(node, 0, 0)).then(function(cloneIframeContainer) {
                var cloneWindow = cloneIframeContainer.contentWindow;
                var documentClone = cloneWindow.document;
                documentClone.open();
                documentClone.write(html);
                var iframeLoad = iframeLoader(cloneIframeContainer).then(function() {
                    return documentClone.documentElement;
                });
                documentClone.close();
                return iframeLoad;
            });
        }) : Promise.reject();
    }
};
var createIframeContainer = function createIframeContainer(ownerDocument, bounds) {
    var cloneIframeContainer = ownerDocument.createElement("iframe");
    cloneIframeContainer.className = "html2canvas-container";
    cloneIframeContainer.style.visibility = "hidden";
    cloneIframeContainer.style.position = "fixed";
    cloneIframeContainer.style.left = "-10000px";
    cloneIframeContainer.style.top = "0px";
    cloneIframeContainer.style.border = "0";
    cloneIframeContainer.width = bounds.width.toString();
    cloneIframeContainer.height = bounds.height.toString();
    cloneIframeContainer.scrolling = "no"; // ios won't scroll without it
    cloneIframeContainer.setAttribute(IGNORE_ATTRIBUTE, "true");
    if (!ownerDocument.body) return Promise.reject("Body element not found in Document that is getting rendered");
    ownerDocument.body.appendChild(cloneIframeContainer);
    return Promise.resolve(cloneIframeContainer);
};
var iframeLoader = function iframeLoader(cloneIframeContainer) {
    var cloneWindow = cloneIframeContainer.contentWindow;
    var documentClone = cloneWindow.document;
    return new Promise(function(resolve, reject) {
        cloneWindow.onload = cloneIframeContainer.onload = documentClone.onreadystatechange = function() {
            var interval = setInterval(function() {
                if (documentClone.body.childNodes.length > 0 && documentClone.readyState === "complete") {
                    clearInterval(interval);
                    resolve(cloneIframeContainer);
                }
            }, 50);
        };
    });
};
var cloneWindow = exports.cloneWindow = function cloneWindow(ownerDocument, bounds, referenceElement, options, logger, renderer) {
    var cloner = new DocumentCloner(referenceElement, options, logger, false, renderer);
    var scrollX = ownerDocument.defaultView.pageXOffset;
    var scrollY = ownerDocument.defaultView.pageYOffset;
    return createIframeContainer(ownerDocument, bounds).then(function(cloneIframeContainer) {
        var cloneWindow = cloneIframeContainer.contentWindow;
        var documentClone = cloneWindow.document;
        /* Chrome doesn't detect relative background-images assigned in inline <style> sheets when fetched through getComputedStyle
             if window url is about:blank, we can assign the url to current by writing onto the document
             */ var iframeLoad = iframeLoader(cloneIframeContainer).then(function() {
            cloner.scrolledElements.forEach(initNode);
            cloneWindow.scrollTo(bounds.left, bounds.top);
            if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (cloneWindow.scrollY !== bounds.top || cloneWindow.scrollX !== bounds.left)) {
                documentClone.documentElement.style.top = -bounds.top + "px";
                documentClone.documentElement.style.left = -bounds.left + "px";
                documentClone.documentElement.style.position = "absolute";
            }
            var result = Promise.resolve([
                cloneIframeContainer,
                cloner.clonedReferenceElement,
                cloner.resourceLoader
            ]);
            var onclone = options.onclone;
            return cloner.clonedReferenceElement instanceof cloneWindow.HTMLElement || cloner.clonedReferenceElement instanceof ownerDocument.defaultView.HTMLElement || cloner.clonedReferenceElement instanceof HTMLElement ? typeof onclone === "function" ? Promise.resolve().then(function() {
                return onclone(documentClone);
            }).then(function() {
                return result;
            }) : result : Promise.reject("Error finding the " + referenceElement.nodeName + " in the cloned document");
        });
        documentClone.open();
        documentClone.write(serializeDoctype(document.doctype) + "<html></html>");
        // Chrome scrolls the parent document for some reason after the write to the cloned window???
        restoreOwnerScroll(referenceElement.ownerDocument, scrollX, scrollY);
        documentClone.replaceChild(documentClone.adoptNode(cloner.documentElement), documentClone.documentElement);
        documentClone.close();
        return iframeLoad;
    });
};
var serializeDoctype = function serializeDoctype(doctype) {
    var str = "";
    if (doctype) {
        str += "<!DOCTYPE ";
        if (doctype.name) str += doctype.name;
        if (doctype.internalSubset) str += doctype.internalSubset;
        if (doctype.publicId) str += '"' + doctype.publicId + '"';
        if (doctype.systemId) str += '"' + doctype.systemId + '"';
        str += ">";
    }
    return str;
};

},{"2a9a651018c36f7d":"6yOBg","ddefd0bc8d76123b":"6aCga","20850ea34338634c":"cDuNe","c6c06047f57650ec":"4rxFR","c556e461755a60d1":"AucYD","40206757447b11a4":"1b7Kj","666dc0ae9a6ba094":"eRP81"}],"6aCga":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Proxy = undefined;
var _Feature = require("485fc7d5aa98ee70");
var _Feature2 = _interopRequireDefault(_Feature);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Proxy = exports.Proxy = function Proxy(src, options) {
    if (!options.proxy) return Promise.reject("No proxy defined");
    var proxy = options.proxy;
    return new Promise(function(resolve, reject) {
        var responseType = _Feature2.default.SUPPORT_CORS_XHR && _Feature2.default.SUPPORT_RESPONSE_TYPE ? "blob" : "text";
        var xhr = _Feature2.default.SUPPORT_CORS_XHR ? new XMLHttpRequest() : new XDomainRequest();
        xhr.onload = function() {
            if (xhr instanceof XMLHttpRequest) {
                if (xhr.status === 200) {
                    if (responseType === "text") resolve(xhr.response);
                    else {
                        var reader = new FileReader();
                        // $FlowFixMe
                        reader.addEventListener("load", function() {
                            return resolve(reader.result);
                        }, false);
                        // $FlowFixMe
                        reader.addEventListener("error", function(e) {
                            return reject(e);
                        }, false);
                        reader.readAsDataURL(xhr.response);
                    }
                } else reject("Failed to proxy resource " + src.substring(0, 256) + " with status code " + xhr.status);
            } else resolve(xhr.responseText);
        };
        xhr.onerror = reject;
        xhr.open("GET", proxy + "?url=" + encodeURIComponent(src) + "&responseType=" + responseType);
        if (responseType !== "text" && xhr instanceof XMLHttpRequest) xhr.responseType = responseType;
        if (options.imageTimeout) {
            var timeout = options.imageTimeout;
            xhr.timeout = timeout;
            xhr.ontimeout = function() {
                return reject("Timed out (" + timeout + "ms) proxying " + src.substring(0, 256));
            };
        }
        xhr.send();
    });
};

},{"485fc7d5aa98ee70":"eTSpp"}],"cDuNe":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ResourceStore = undefined;
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _Feature = require("76b1025d60745ce8");
var _Feature2 = _interopRequireDefault(_Feature);
var _Proxy = require("3c6a4ceeca320bd1");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var ResourceLoader = function() {
    function ResourceLoader(options, logger, window) {
        _classCallCheck(this, ResourceLoader);
        this.options = options;
        this._window = window;
        this.origin = this.getOrigin(window.location.href);
        this.cache = {};
        this.logger = logger;
        this._index = 0;
    }
    _createClass(ResourceLoader, [
        {
            key: "loadImage",
            value: function loadImage(src) {
                var _this = this;
                if (this.hasResourceInCache(src)) return src;
                if (isBlobImage(src)) {
                    this.cache[src] = _loadImage(src, this.options.imageTimeout || 0);
                    return src;
                }
                if (!isSVG(src) || _Feature2.default.SUPPORT_SVG_DRAWING) {
                    if (this.options.allowTaint === true || isInlineImage(src) || this.isSameOrigin(src)) return this.addImage(src, src, false);
                    else if (!this.isSameOrigin(src)) {
                        if (typeof this.options.proxy === "string") {
                            this.cache[src] = (0, _Proxy.Proxy)(src, this.options).then(function(src) {
                                return _loadImage(src, _this.options.imageTimeout || 0);
                            });
                            return src;
                        } else if (this.options.useCORS === true && _Feature2.default.SUPPORT_CORS_IMAGES) return this.addImage(src, src, true);
                    }
                }
            }
        },
        {
            key: "inlineImage",
            value: function inlineImage(src) {
                var _this2 = this;
                if (isInlineImage(src)) return _loadImage(src, this.options.imageTimeout || 0);
                if (this.hasResourceInCache(src)) return this.cache[src];
                if (!this.isSameOrigin(src) && typeof this.options.proxy === "string") return this.cache[src] = (0, _Proxy.Proxy)(src, this.options).then(function(src) {
                    return _loadImage(src, _this2.options.imageTimeout || 0);
                });
                return this.xhrImage(src);
            }
        },
        {
            key: "xhrImage",
            value: function xhrImage(src) {
                var _this3 = this;
                this.cache[src] = new Promise(function(resolve, reject) {
                    var xhr = new XMLHttpRequest();
                    xhr.onreadystatechange = function() {
                        if (xhr.readyState === 4) {
                            if (xhr.status !== 200) reject("Failed to fetch image " + src.substring(0, 256) + " with status code " + xhr.status);
                            else {
                                var reader = new FileReader();
                                reader.addEventListener("load", function() {
                                    // $FlowFixMe
                                    var result = reader.result;
                                    resolve(result);
                                }, false);
                                reader.addEventListener("error", function(e) {
                                    return reject(e);
                                }, false);
                                reader.readAsDataURL(xhr.response);
                            }
                        }
                    };
                    xhr.responseType = "blob";
                    if (_this3.options.imageTimeout) {
                        var timeout = _this3.options.imageTimeout;
                        xhr.timeout = timeout;
                        xhr.ontimeout = function() {
                            return reject("Timed out (" + timeout + "ms) fetching " + src.substring(0, 256));
                        };
                    }
                    xhr.open("GET", src, true);
                    xhr.send();
                }).then(function(src) {
                    return _loadImage(src, _this3.options.imageTimeout || 0);
                });
                return this.cache[src];
            }
        },
        {
            key: "loadCanvas",
            value: function loadCanvas(node) {
                var key = String(this._index++);
                this.cache[key] = Promise.resolve(node);
                return key;
            }
        },
        {
            key: "hasResourceInCache",
            value: function hasResourceInCache(key) {
                return typeof this.cache[key] !== "undefined";
            }
        },
        {
            key: "addImage",
            value: function addImage(key, src, useCORS) {
                var _this4 = this;
                this.logger.log("Added image " + key.substring(0, 256));
                var imageLoadHandler = function imageLoadHandler(supportsDataImages) {
                    return new Promise(function(resolve, reject) {
                        var img = new Image();
                        img.onload = function() {
                            return resolve(img);
                        };
                        //ios safari 10.3 taints canvas with data urls unless crossOrigin is set to anonymous
                        if (!supportsDataImages || useCORS) img.crossOrigin = "anonymous";
                        img.onerror = reject;
                        img.src = src;
                        if (img.complete === true) // Inline XML images may fail to parse, throwing an Error later on
                        setTimeout(function() {
                            resolve(img);
                        }, 500);
                        if (_this4.options.imageTimeout) {
                            var timeout = _this4.options.imageTimeout;
                            setTimeout(function() {
                                return reject("Timed out (" + timeout + "ms) fetching " + src.substring(0, 256));
                            }, timeout);
                        }
                    });
                };
                this.cache[key] = isInlineBase64Image(src) && !isSVG(src) ? _Feature2.default.SUPPORT_BASE64_DRAWING(src).then(imageLoadHandler) : imageLoadHandler(true);
                return key;
            }
        },
        {
            key: "isSameOrigin",
            value: function isSameOrigin(url) {
                return this.getOrigin(url) === this.origin;
            }
        },
        {
            key: "getOrigin",
            value: function getOrigin(url) {
                var link = this._link || (this._link = this._window.document.createElement("a"));
                link.href = url;
                link.href = link.href; // IE9, LOL! - http://jsfiddle.net/niklasvh/2e48b/
                return link.protocol + link.hostname + link.port;
            }
        },
        {
            key: "ready",
            value: function ready() {
                var _this5 = this;
                var keys = Object.keys(this.cache);
                var values = keys.map(function(str) {
                    return _this5.cache[str].catch(function(e) {
                        _this5.logger.log("Unable to load image", e);
                        return null;
                    });
                });
                return Promise.all(values).then(function(images) {
                    _this5.logger.log("Finished loading " + images.length + " images", images);
                    return new ResourceStore(keys, images);
                });
            }
        }
    ]);
    return ResourceLoader;
}();
exports.default = ResourceLoader;
var ResourceStore = exports.ResourceStore = function() {
    function ResourceStore(keys, resources) {
        _classCallCheck(this, ResourceStore);
        this._keys = keys;
        this._resources = resources;
    }
    _createClass(ResourceStore, [
        {
            key: "get",
            value: function get(key) {
                var index = this._keys.indexOf(key);
                return index === -1 ? null : this._resources[index];
            }
        }
    ]);
    return ResourceStore;
}();
var INLINE_SVG = /^data:image\/svg\+xml/i;
var INLINE_BASE64 = /^data:image\/.*;base64,/i;
var INLINE_IMG = /^data:image\/.*/i;
var isInlineImage = function isInlineImage(src) {
    return INLINE_IMG.test(src);
};
var isInlineBase64Image = function isInlineBase64Image(src) {
    return INLINE_BASE64.test(src);
};
var isBlobImage = function isBlobImage(src) {
    return src.substr(0, 4) === "blob";
};
var isSVG = function isSVG(src) {
    return src.substr(-3).toLowerCase() === "svg" || INLINE_SVG.test(src);
};
var _loadImage = function _loadImage(src, timeout) {
    return new Promise(function(resolve, reject) {
        var img = new Image();
        img.onload = function() {
            return resolve(img);
        };
        img.onerror = reject;
        img.src = src;
        if (img.complete === true) // Inline XML images may fail to parse, throwing an Error later on
        setTimeout(function() {
            resolve(img);
        }, 500);
        if (timeout) setTimeout(function() {
            return reject("Timed out (" + timeout + "ms) loading image");
        }, timeout);
    });
};

},{"76b1025d60745ce8":"eTSpp","3c6a4ceeca320bd1":"6aCga"}],"eRP81":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseContent = exports.resolvePseudoContent = exports.popCounters = exports.parseCounterReset = exports.TOKEN_TYPE = exports.PSEUDO_CONTENT_ITEM_TYPE = undefined;
var _slicedToArray = function() {
    function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
            for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally{
            try {
                if (!_n && _i["return"]) _i["return"]();
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    return function(arr, i) {
        if (Array.isArray(arr)) return arr;
        else if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
        else throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}();
var _ListItem = require("831cc63dde9e528a");
var _listStyle = require("a315a7e25757f3fc");
var PSEUDO_CONTENT_ITEM_TYPE = exports.PSEUDO_CONTENT_ITEM_TYPE = {
    TEXT: 0,
    IMAGE: 1
};
var TOKEN_TYPE = exports.TOKEN_TYPE = {
    STRING: 0,
    ATTRIBUTE: 1,
    URL: 2,
    COUNTER: 3,
    COUNTERS: 4,
    OPENQUOTE: 5,
    CLOSEQUOTE: 6
};
var parseCounterReset = exports.parseCounterReset = function parseCounterReset(style, data) {
    if (!style || !style.counterReset || style.counterReset === "none") return [];
    var counterNames = [];
    var counterResets = style.counterReset.split(/\s*,\s*/);
    var lenCounterResets = counterResets.length;
    for(var i = 0; i < lenCounterResets; i++){
        var _counterResets$i$spli = counterResets[i].split(/\s+/), _counterResets$i$spli2 = _slicedToArray(_counterResets$i$spli, 2), counterName = _counterResets$i$spli2[0], initialValue = _counterResets$i$spli2[1];
        counterNames.push(counterName);
        var counter = data.counters[counterName];
        if (!counter) counter = data.counters[counterName] = [];
        counter.push(parseInt(initialValue || 0, 10));
    }
    return counterNames;
};
var popCounters = exports.popCounters = function popCounters(counterNames, data) {
    var lenCounters = counterNames.length;
    for(var i = 0; i < lenCounters; i++)data.counters[counterNames[i]].pop();
};
var resolvePseudoContent = exports.resolvePseudoContent = function resolvePseudoContent(node, style, data) {
    if (!style || !style.content || style.content === "none" || style.content === "-moz-alt-content" || style.display === "none") return null;
    var tokens = parseContent(style.content);
    var len = tokens.length;
    var contentItems = [];
    var s = "";
    // increment the counter (if there is a "counter-increment" declaration)
    var counterIncrement = style.counterIncrement;
    if (counterIncrement && counterIncrement !== "none") {
        var _counterIncrement$spl = counterIncrement.split(/\s+/), _counterIncrement$spl2 = _slicedToArray(_counterIncrement$spl, 2), counterName = _counterIncrement$spl2[0], incrementValue = _counterIncrement$spl2[1];
        var counter = data.counters[counterName];
        if (counter) counter[counter.length - 1] += incrementValue === undefined ? 1 : parseInt(incrementValue, 10);
    }
    // build the content string
    for(var i = 0; i < len; i++){
        var token = tokens[i];
        switch(token.type){
            case TOKEN_TYPE.STRING:
                s += token.value || "";
                break;
            case TOKEN_TYPE.ATTRIBUTE:
                if (node instanceof HTMLElement && token.value) s += node.getAttribute(token.value) || "";
                break;
            case TOKEN_TYPE.COUNTER:
                var _counter = data.counters[token.name || ""];
                if (_counter) s += formatCounterValue([
                    _counter[_counter.length - 1]
                ], "", token.format);
                break;
            case TOKEN_TYPE.COUNTERS:
                var _counters = data.counters[token.name || ""];
                if (_counters) s += formatCounterValue(_counters, token.glue, token.format);
                break;
            case TOKEN_TYPE.OPENQUOTE:
                s += getQuote(style, true, data.quoteDepth);
                data.quoteDepth++;
                break;
            case TOKEN_TYPE.CLOSEQUOTE:
                data.quoteDepth--;
                s += getQuote(style, false, data.quoteDepth);
                break;
            case TOKEN_TYPE.URL:
                if (s) {
                    contentItems.push({
                        type: PSEUDO_CONTENT_ITEM_TYPE.TEXT,
                        value: s
                    });
                    s = "";
                }
                contentItems.push({
                    type: PSEUDO_CONTENT_ITEM_TYPE.IMAGE,
                    value: token.value || ""
                });
                break;
        }
    }
    if (s) contentItems.push({
        type: PSEUDO_CONTENT_ITEM_TYPE.TEXT,
        value: s
    });
    return contentItems;
};
var parseContent = exports.parseContent = function parseContent(content, cache) {
    if (cache && cache[content]) return cache[content];
    var tokens = [];
    var len = content.length;
    var isString = false;
    var isEscaped = false;
    var isFunction = false;
    var str = "";
    var functionName = "";
    var args = [];
    for(var i = 0; i < len; i++){
        var c = content.charAt(i);
        switch(c){
            case "'":
            case '"':
                if (isEscaped) str += c;
                else {
                    isString = !isString;
                    if (!isFunction && !isString) {
                        tokens.push({
                            type: TOKEN_TYPE.STRING,
                            value: str
                        });
                        str = "";
                    }
                }
                break;
            case "\\":
                if (isEscaped) {
                    str += c;
                    isEscaped = false;
                } else isEscaped = true;
                break;
            case "(":
                if (isString) str += c;
                else {
                    isFunction = true;
                    functionName = str;
                    str = "";
                    args = [];
                }
                break;
            case ")":
                if (isString) str += c;
                else if (isFunction) {
                    if (str) args.push(str);
                    switch(functionName){
                        case "attr":
                            if (args.length > 0) tokens.push({
                                type: TOKEN_TYPE.ATTRIBUTE,
                                value: args[0]
                            });
                            break;
                        case "counter":
                            if (args.length > 0) {
                                var counter = {
                                    type: TOKEN_TYPE.COUNTER,
                                    name: args[0]
                                };
                                if (args.length > 1) counter.format = args[1];
                                tokens.push(counter);
                            }
                            break;
                        case "counters":
                            if (args.length > 0) {
                                var _counters2 = {
                                    type: TOKEN_TYPE.COUNTERS,
                                    name: args[0]
                                };
                                if (args.length > 1) _counters2.glue = args[1];
                                if (args.length > 2) _counters2.format = args[2];
                                tokens.push(_counters2);
                            }
                            break;
                        case "url":
                            if (args.length > 0) tokens.push({
                                type: TOKEN_TYPE.URL,
                                value: args[0]
                            });
                            break;
                    }
                    isFunction = false;
                    str = "";
                }
                break;
            case ",":
                if (isString) str += c;
                else if (isFunction) {
                    args.push(str);
                    str = "";
                }
                break;
            case " ":
            case "	":
                if (isString) str += c;
                else if (str) {
                    addOtherToken(tokens, str);
                    str = "";
                }
                break;
            default:
                str += c;
        }
        if (c !== "\\") isEscaped = false;
    }
    if (str) addOtherToken(tokens, str);
    if (cache) cache[content] = tokens;
    return tokens;
};
var addOtherToken = function addOtherToken(tokens, identifier) {
    switch(identifier){
        case "open-quote":
            tokens.push({
                type: TOKEN_TYPE.OPENQUOTE
            });
            break;
        case "close-quote":
            tokens.push({
                type: TOKEN_TYPE.CLOSEQUOTE
            });
            break;
    }
};
var getQuote = function getQuote(style, isOpening, quoteDepth) {
    var quotes = style.quotes ? style.quotes.split(/\s+/) : [
        "'\"'",
        "'\"'"
    ];
    var idx = quoteDepth * 2;
    if (idx >= quotes.length) idx = quotes.length - 2;
    if (!isOpening) ++idx;
    return quotes[idx].replace(/^["']|["']$/g, "");
};
var formatCounterValue = function formatCounterValue(counter, glue, format) {
    var len = counter.length;
    var result = "";
    for(var i = 0; i < len; i++){
        if (i > 0) result += glue || "";
        result += (0, _ListItem.createCounterText)(counter[i], (0, _listStyle.parseListStyleType)(format || "decimal"), false);
    }
    return result;
};

},{"831cc63dde9e528a":"14Y4x","a315a7e25757f3fc":"fsq6I"}],"fZCvs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "view", ()=>view);
var _hyperapp = require("hyperapp");
var _bingo = require("./bingo");
var _search = require("./search");
var _selections = require("./selections");
var _custom = require("./custom");
// Used to detect drag/drop of files
let lastDragTarget = null;
const view = (state, actions)=>/*#__PURE__*/ (0, _hyperapp.h)("main", {
        class: "app-root",
        ondragenter: (e)=>{
            e.preventDefault();
            lastDragTarget = e.target;
            actions.custom.updateState({
                isDragging: true
            });
        },
        ondragleave: (e)=>{
            e.preventDefault();
            if (e.target === lastDragTarget || e.target === document) actions.custom.updateState({
                isDragging: false
            });
        },
        ondragover: (e)=>e.preventDefault(),
        ondrop: (e)=>{
            e.preventDefault();
            const file = (e.dataTransfer.items || [])[0];
            actions.custom.updateState({
                isDragging: false
            });
            actions.custom.validateFile(file.getAsFile());
        },
        __source: {
            fileName: "src/views/main.tsx",
            lineNumber: 14,
            columnNumber: 3
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _hyperapp.h)("div", {
        class: "app-overlay",
        style: {
            display: state.bingo.showCanvas ? "block" : "none"
        },
        onclick: (_)=>actions.bingo.showCanvas(false),
        __source: {
            fileName: "src/views/main.tsx",
            lineNumber: 35,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _hyperapp.h)("div", {
        class: "app-overlay__content",
        __source: {
            fileName: "src/views/main.tsx",
            lineNumber: 40,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _hyperapp.h)("div", {
        __source: {
            fileName: "src/views/main.tsx",
            lineNumber: 41,
            columnNumber: 9
        },
        __self: undefined
    }, 'To save, right-click + "Save Image As..."'), /*#__PURE__*/ (0, _hyperapp.h)("div", {
        __source: {
            fileName: "src/views/main.tsx",
            lineNumber: 42,
            columnNumber: 9
        },
        __self: undefined
    }, "(Not available on all browsers, but known to work in Chrome and Firefox)"), /*#__PURE__*/ (0, _hyperapp.h)("canvas", {
        class: "js-bingo-output-canvas app-bingo__canvas",
        __source: {
            fileName: "src/views/main.tsx",
            lineNumber: 46,
            columnNumber: 9
        },
        __self: undefined
    }), /*#__PURE__*/ (0, _hyperapp.h)("div", {
        __source: {
            fileName: "src/views/main.tsx",
            lineNumber: 47,
            columnNumber: 9
        },
        __self: undefined
    }, "Click anywhere to exit."))), /*#__PURE__*/ (0, _hyperapp.h)("section", {
        class: "app-search",
        __source: {
            fileName: "src/views/main.tsx",
            lineNumber: 51,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _hyperapp.h)("fieldset", {
        class: "app-search__mobile-warning",
        __source: {
            fileName: "src/views/main.tsx",
            lineNumber: 52,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _hyperapp.h)("legend", {
        __source: {
            fileName: "src/views/main.tsx",
            lineNumber: 53,
            columnNumber: 9
        },
        __self: undefined
    }, "Notice"), "If you're on a mobile device, you might have trouble saving the generated image (there might be no \"Save as...\" option for canvas elements). It's recommended to use a desktop browser such as Chrome or Firefox."), /*#__PURE__*/ (0, _hyperapp.h)("fieldset", {
        __source: {
            fileName: "src/views/main.tsx",
            lineNumber: 60,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _hyperapp.h)("legend", {
        __source: {
            fileName: "src/views/main.tsx",
            lineNumber: 61,
            columnNumber: 9
        },
        __self: undefined
    }, "Search"), (0, _search.searchForm)(state.search, actions.search), state.search.error && /*#__PURE__*/ (0, _hyperapp.h)("div", {
        class: "app-search__error",
        __source: {
            fileName: "src/views/main.tsx",
            lineNumber: 64,
            columnNumber: 11
        },
        __self: undefined
    }, state.search.error), (0, _search.searchResults)(state, actions)), (0, _selections.selections)(state, actions.selections), (0, _custom.custom)(state, actions), (0, _bingo.bingoSettings)(state.bingo, actions.bingo), /*#__PURE__*/ (0, _hyperapp.h)("fieldset", {
        class: "app-links",
        __source: {
            fileName: "src/views/main.tsx",
            lineNumber: 75,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _hyperapp.h)("legend", {
        __source: {
            fileName: "src/views/main.tsx",
            lineNumber: 76,
            columnNumber: 9
        },
        __self: undefined
    }, "Links"), /*#__PURE__*/ (0, _hyperapp.h)("a", {
        href: "https://twitter.com/walfieee/status/1023422393744859137",
        __source: {
            fileName: "src/views/main.tsx",
            lineNumber: 77,
            columnNumber: 9
        },
        __self: undefined
    }, "How to use this site"), "\u30FB", /*#__PURE__*/ (0, _hyperapp.h)("a", {
        href: "https://anilist.co",
        __source: {
            fileName: "src/views/main.tsx",
            lineNumber: 81,
            columnNumber: 9
        },
        __self: undefined
    }, "AniList"), "\u30FB", /*#__PURE__*/ (0, _hyperapp.h)("a", {
        href: "https://github.com/AniList/ApiV2-GraphQL-Docs",
        __source: {
            fileName: "src/views/main.tsx",
            lineNumber: 83,
            columnNumber: 9
        },
        __self: undefined
    }, "AniList API"), "\u30FB", /*#__PURE__*/ (0, _hyperapp.h)("a", {
        href: "https://github.com/walfie/anime-bingo",
        __source: {
            fileName: "src/views/main.tsx",
            lineNumber: 85,
            columnNumber: 9
        },
        __self: undefined
    }, "GitHub"))), /*#__PURE__*/ (0, _hyperapp.h)("section", {
        class: "app-bingo",
        __source: {
            fileName: "src/views/main.tsx",
            lineNumber: 89,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _hyperapp.h)("div", {
        class: "app-bingo__generate",
        __source: {
            fileName: "src/views/main.tsx",
            lineNumber: 90,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _hyperapp.h)("button", {
        class: "app-bingo__generate-button",
        onclick: (_)=>actions.bingo.generate(),
        __source: {
            fileName: "src/views/main.tsx",
            lineNumber: 91,
            columnNumber: 9
        },
        __self: undefined
    }, "Render as image")), (0, _bingo.bingoChart)(state, actions)));

},{"hyperapp":"gGmOH","./bingo":"eeeCT","./search":"N5vlS","./selections":"7BhVN","./custom":"7Xi7G","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eeeCT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calculateMaxItems", ()=>calculateMaxItems);
parcelHelpers.export(exports, "bingoChart", ()=>bingoChart);
parcelHelpers.export(exports, "bingoSettings", ()=>bingoSettings);
var _hyperapp = require("hyperapp");
var _state = require("../state");
const sourceUrl = document.location.host + document.location.pathname.replace(/\/$/, "");
// Break an array up into smaller arrays of fixed size
const chunkArray = (array, chunkSize)=>{
    let arrays = [];
    for(let i = 0; i < array.length; i += chunkSize)arrays.push(array.slice(i, i + chunkSize));
    return arrays;
};
const calculateMaxItems = (size, showFreeSpace)=>{
    const freeSpaceExists = showFreeSpace && size % 2 != 0;
    return size * size - (freeSpaceExists ? 1 : 0);
};
const bingoChart = (state, actions)=>{
    const maxItems = calculateMaxItems(state.bingo.size, state.bingo.showFreeSpace);
    // Don't show a free space if the size is an even number
    // TODO: Dedupe this math logic somewhere
    const middleIndex = state.bingo.showFreeSpace && state.bingo.size % 2 != 0 ? Math.floor(state.bingo.size * state.bingo.size / 2) : null;
    // Take the first x items in the items array
    const selectedItems = state.selections.items.slice(0, maxItems);
    const items = new Array(maxItems).fill(null);
    items.splice(0, selectedItems.length, ...selectedItems);
    middleIndex && items.splice(middleIndex, 0, null);
    const cells = items.map((item, index)=>{
        let inner = [];
        let style = {
            borderColor: state.bingo.borderColor
        };
        if (item) {
            if (state.bingo.showTitles) inner = [
                /*#__PURE__*/ (0, _hyperapp.h)("div", {
                    class: "app-bingo__cell-text",
                    __source: {
                        fileName: "src/views/bingo.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    },
                    __self: undefined
                }, item.overriddenTitle || item.title)
            ];
            style = {
                ...style,
                backgroundImage: `url(${item.image})`
            };
        } else if (index === middleIndex) {
            style = {
                ...style,
                color: state.bingo.backgroundColor,
                backgroundColor: state.bingo.borderColor,
                verticalAlign: "middle"
            };
            inner = [
                /*#__PURE__*/ (0, _hyperapp.h)("div", {
                    class: "app-bingo__cell-free",
                    __source: {
                        fileName: "src/views/bingo.tsx",
                        lineNumber: 71,
                        columnNumber: 16
                    },
                    __self: undefined
                }, "FREE")
            ];
        } else {
            style = {
                ...style,
                backgroundColor: state.bingo.backgroundColor
            };
            inner = [];
        }
        return /*#__PURE__*/ (0, _hyperapp.h)("td", {
            class: "app-bingo__cell",
            style: style,
            __source: {
                fileName: "src/views/bingo.tsx",
                lineNumber: 78,
                columnNumber: 7
            },
            __self: undefined
        }, inner);
    });
    const tableStyles = {
        borderColor: state.bingo.borderColor,
        backgroundColor: state.bingo.borderColor,
        fontFamily: state.bingo.font
    };
    const headerStyles = {
        color: state.bingo.borderColor,
        backgroundColor: state.bingo.backgroundColor
    };
    const footerStyles = {
        color: state.bingo.backgroundColor,
        backgroundColor: state.bingo.borderColor,
        display: state.bingo.showCredit ? "block" : "none"
    };
    return /*#__PURE__*/ (0, _hyperapp.h)("div", {
        class: "js-bingo-container app-bingo__container",
        onclick: (_)=>actions.bingo.generate(),
        __source: {
            fileName: "src/views/bingo.tsx",
            lineNumber: 102,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _hyperapp.h)("table", {
        class: "app-bingo__table",
        style: tableStyles,
        __source: {
            fileName: "src/views/bingo.tsx",
            lineNumber: 106,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _hyperapp.h)("thead", {
        __source: {
            fileName: "src/views/bingo.tsx",
            lineNumber: 107,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _hyperapp.h)("th", {
        class: "app-bingo__header",
        style: headerStyles,
        colSpan: state.bingo.size,
        __source: {
            fileName: "src/views/bingo.tsx",
            lineNumber: 108,
            columnNumber: 11
        },
        __self: undefined
    }, state.bingo.title)), /*#__PURE__*/ (0, _hyperapp.h)("tbody", {
        __source: {
            fileName: "src/views/bingo.tsx",
            lineNumber: 116,
            columnNumber: 9
        },
        __self: undefined
    }, chunkArray(cells, state.bingo.size).map((rowItems)=>/*#__PURE__*/ (0, _hyperapp.h)("tr", {
            class: "app-bingo__row",
            __source: {
                fileName: "src/views/bingo.tsx",
                lineNumber: 118,
                columnNumber: 13
            },
            __self: undefined
        }, rowItems)))), /*#__PURE__*/ (0, _hyperapp.h)("div", {
        class: "app-bingo__credit",
        style: footerStyles,
        __source: {
            fileName: "src/views/bingo.tsx",
            lineNumber: 122,
            columnNumber: 7
        },
        __self: undefined
    }, sourceUrl));
};
const bingoSettings = (state, actions)=>/*#__PURE__*/ (0, _hyperapp.h)("fieldset", {
        class: "app-bingo_settings",
        __source: {
            fileName: "src/views/bingo.tsx",
            lineNumber: 133,
            columnNumber: 3
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _hyperapp.h)("legend", {
        __source: {
            fileName: "src/views/bingo.tsx",
            lineNumber: 134,
            columnNumber: 5
        },
        __self: undefined
    }, "Bingo display settings"), /*#__PURE__*/ (0, _hyperapp.h)("label", {
        class: "app-bingo_settings__label",
        __source: {
            fileName: "src/views/bingo.tsx",
            lineNumber: 136,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _hyperapp.h)("span", {
        __source: {
            fileName: "src/views/bingo.tsx",
            lineNumber: 137,
            columnNumber: 7
        },
        __self: undefined
    }, "Title"), /*#__PURE__*/ (0, _hyperapp.h)("input", {
        type: "text",
        value: state.title,
        oninput: (e)=>actions.updateAndPersistState({
                title: e.target.value
            }),
        __source: {
            fileName: "src/views/bingo.tsx",
            lineNumber: 138,
            columnNumber: 7
        },
        __self: undefined
    })), /*#__PURE__*/ (0, _hyperapp.h)("label", {
        class: "app-bingo_settings__label",
        __source: {
            fileName: "src/views/bingo.tsx",
            lineNumber: 145,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _hyperapp.h)("span", {
        __source: {
            fileName: "src/views/bingo.tsx",
            lineNumber: 146,
            columnNumber: 7
        },
        __self: undefined
    }, "Size"), /*#__PURE__*/ (0, _hyperapp.h)("select", {
        onchange: (e)=>actions.updateAndPersistState({
                size: parseInt(e.target.value)
            }),
        value: state.size,
        __source: {
            fileName: "src/views/bingo.tsx",
            lineNumber: 147,
            columnNumber: 7
        },
        __self: undefined
    }, [
        3,
        4,
        5,
        6,
        7
    ].map((size)=>/*#__PURE__*/ (0, _hyperapp.h)("option", {
            value: size,
            __source: {
                fileName: "src/views/bingo.tsx",
                lineNumber: 154,
                columnNumber: 11
            },
            __self: undefined
        }, size, " x ", size)))), /*#__PURE__*/ (0, _hyperapp.h)("label", {
        class: "app-bingo_settings__label",
        __source: {
            fileName: "src/views/bingo.tsx",
            lineNumber: 161,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _hyperapp.h)("span", {
        __source: {
            fileName: "src/views/bingo.tsx",
            lineNumber: 162,
            columnNumber: 7
        },
        __self: undefined
    }, "Font"), /*#__PURE__*/ (0, _hyperapp.h)("select", {
        onchange: (e)=>actions.updateAndPersistState({
                font: e.target.value
            }),
        value: state.font,
        __source: {
            fileName: "src/views/bingo.tsx",
            lineNumber: 163,
            columnNumber: 7
        },
        __self: undefined
    }, (0, _state.State).Bingo.allFonts.map((font)=>/*#__PURE__*/ (0, _hyperapp.h)("option", {
            value: font,
            __source: {
                fileName: "src/views/bingo.tsx",
                lineNumber: 167,
                columnNumber: 43
            },
            __self: undefined
        }, font)))), /*#__PURE__*/ (0, _hyperapp.h)("label", {
        class: "app-bingo_settings__label",
        __source: {
            fileName: "src/views/bingo.tsx",
            lineNumber: 171,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _hyperapp.h)("span", {
        __source: {
            fileName: "src/views/bingo.tsx",
            lineNumber: 172,
            columnNumber: 7
        },
        __self: undefined
    }, "Border Color"), /*#__PURE__*/ (0, _hyperapp.h)("input", {
        type: "color",
        value: state.borderColor,
        onchange: (e)=>actions.updateAndPersistState({
                borderColor: e.target.value
            }),
        __source: {
            fileName: "src/views/bingo.tsx",
            lineNumber: 173,
            columnNumber: 7
        },
        __self: undefined
    })), /*#__PURE__*/ (0, _hyperapp.h)("label", {
        class: "app-bingo_settings__label",
        __source: {
            fileName: "src/views/bingo.tsx",
            lineNumber: 182,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _hyperapp.h)("span", {
        __source: {
            fileName: "src/views/bingo.tsx",
            lineNumber: 183,
            columnNumber: 7
        },
        __self: undefined
    }, "Background Color"), /*#__PURE__*/ (0, _hyperapp.h)("input", {
        type: "color",
        value: state.backgroundColor,
        onchange: (e)=>actions.updateAndPersistState({
                backgroundColor: e.target.value
            }),
        __source: {
            fileName: "src/views/bingo.tsx",
            lineNumber: 184,
            columnNumber: 7
        },
        __self: undefined
    })), /*#__PURE__*/ (0, _hyperapp.h)("label", {
        class: "app-bingo_settings__label",
        __source: {
            fileName: "src/views/bingo.tsx",
            lineNumber: 193,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _hyperapp.h)("span", {
        __source: {
            fileName: "src/views/bingo.tsx",
            lineNumber: 194,
            columnNumber: 7
        },
        __self: undefined
    }, "Show titles/names"), /*#__PURE__*/ (0, _hyperapp.h)("input", {
        type: "checkbox",
        checked: state.showTitles,
        onchange: (e)=>actions.updateAndPersistState({
                showTitles: e.target.checked
            }),
        __source: {
            fileName: "src/views/bingo.tsx",
            lineNumber: 195,
            columnNumber: 7
        },
        __self: undefined
    })), /*#__PURE__*/ (0, _hyperapp.h)("label", {
        class: "app-bingo_settings__label",
        __source: {
            fileName: "src/views/bingo.tsx",
            lineNumber: 204,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _hyperapp.h)("span", {
        __source: {
            fileName: "src/views/bingo.tsx",
            lineNumber: 205,
            columnNumber: 7
        },
        __self: undefined
    }, "Show URL in footer"), /*#__PURE__*/ (0, _hyperapp.h)("input", {
        type: "checkbox",
        checked: state.showCredit,
        onchange: (e)=>actions.updateAndPersistState({
                showCredit: e.target.checked
            }),
        __source: {
            fileName: "src/views/bingo.tsx",
            lineNumber: 206,
            columnNumber: 7
        },
        __self: undefined
    })), /*#__PURE__*/ (0, _hyperapp.h)("label", {
        class: "app-bingo_settings__label",
        __source: {
            fileName: "src/views/bingo.tsx",
            lineNumber: 215,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _hyperapp.h)("span", {
        __source: {
            fileName: "src/views/bingo.tsx",
            lineNumber: 216,
            columnNumber: 7
        },
        __self: undefined
    }, "Show free space"), /*#__PURE__*/ (0, _hyperapp.h)("input", {
        type: "checkbox",
        checked: state.showFreeSpace,
        onchange: (e)=>actions.updateAndPersistState({
                showFreeSpace: e.target.checked
            }),
        __source: {
            fileName: "src/views/bingo.tsx",
            lineNumber: 217,
            columnNumber: 7
        },
        __self: undefined
    })), /*#__PURE__*/ (0, _hyperapp.h)("button", {
        onclick: (_)=>actions.resetSettings(),
        __source: {
            fileName: "src/views/bingo.tsx",
            lineNumber: 226,
            columnNumber: 5
        },
        __self: undefined
    }, "Reset"));

},{"hyperapp":"gGmOH","../state":"1Yeju","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"N5vlS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "searchForm", ()=>searchForm);
parcelHelpers.export(exports, "searchResults", ()=>searchResults);
var _hyperapp = require("hyperapp");
const searchForm = (state, actions)=>/*#__PURE__*/ (0, _hyperapp.h)("form", {
        class: "app-search__form",
        onsubmit: (e)=>{
            actions.execute();
            e.preventDefault();
        },
        __source: {
            fileName: "src/views/search.tsx",
            lineNumber: 10,
            columnNumber: 3
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _hyperapp.h)("div", {
        class: "app-search__form-row",
        __source: {
            fileName: "src/views/search.tsx",
            lineNumber: 17,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _hyperapp.h)("select", {
        class: "app-search__form-media",
        onchange: (e)=>{
            actions.updateState({
                mediaType: e.target.value
            });
            state.query && actions.execute();
        },
        __source: {
            fileName: "src/views/search.tsx",
            lineNumber: 18,
            columnNumber: 7
        },
        __self: undefined
    }, [
        "anime",
        "manga",
        "character",
        "staff"
    ].map((mediaType)=>/*#__PURE__*/ (0, _hyperapp.h)("option", {
            value: mediaType,
            selected: state.mediaType == mediaType,
            __source: {
                fileName: "src/views/search.tsx",
                lineNumber: 27,
                columnNumber: 13
            },
            __self: undefined
        }, mediaType))), /*#__PURE__*/ (0, _hyperapp.h)("input", {
        type: "text",
        class: "app-search__form-input",
        placeholder: "Search by title",
        value: state.query,
        onfocus: (_)=>actions.setVisibility(true),
        oninput: (e)=>actions.updateQuery(e.target.value),
        __source: {
            fileName: "src/views/search.tsx",
            lineNumber: 34,
            columnNumber: 7
        },
        __self: undefined
    }), /*#__PURE__*/ (0, _hyperapp.h)("button", {
        class: "app-search__form-button",
        type: "submit",
        __source: {
            fileName: "src/views/search.tsx",
            lineNumber: 43,
            columnNumber: 7
        },
        __self: undefined
    }, state.isLoading ? " \u23F3" : "Search")), /*#__PURE__*/ (0, _hyperapp.h)("div", {
        class: "app-search__form-row app-search__form-row--secondary",
        __source: {
            fileName: "src/views/search.tsx",
            lineNumber: 48,
            columnNumber: 5
        },
        __self: undefined
    }, (state.mediaType === "anime" || state.mediaType === "manga") && /*#__PURE__*/ (0, _hyperapp.h)("label", {
        __source: {
            fileName: "src/views/search.tsx",
            lineNumber: 50,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _hyperapp.h)("input", {
        type: "checkbox",
        checked: state.preferEnglish,
        onchange: (e)=>{
            actions.updateState({
                preferEnglish: e.target.checked
            });
            state.query && actions.execute();
        },
        __source: {
            fileName: "src/views/search.tsx",
            lineNumber: 51,
            columnNumber: 11
        },
        __self: undefined
    }), "Prefer English title"), (state.mediaType === "character" || state.mediaType === "staff") && /*#__PURE__*/ (0, _hyperapp.h)("label", {
        __source: {
            fileName: "src/views/search.tsx",
            lineNumber: 63,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _hyperapp.h)("input", {
        type: "checkbox",
        checked: state.preferSurnameFirst,
        onchange: (e)=>{
            actions.updateState({
                preferSurnameFirst: e.target.checked
            });
            state.query && actions.execute();
        },
        __source: {
            fileName: "src/views/search.tsx",
            lineNumber: 64,
            columnNumber: 11
        },
        __self: undefined
    }), "Eastern name order (surname first)")));
const searchResults = (state, actions)=>/*#__PURE__*/ (0, _hyperapp.h)("details", {
        open: state.search.isVisible,
        ontoggle: (e)=>actions.search.setVisibility(e.srcElement.open),
        __source: {
            fileName: "src/views/search.tsx",
            lineNumber: 80,
            columnNumber: 3
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _hyperapp.h)("summary", {
        __source: {
            fileName: "src/views/search.tsx",
            lineNumber: 84,
            columnNumber: 5
        },
        __self: undefined
    }, "Search results"), /*#__PURE__*/ (0, _hyperapp.h)("ul", {
        class: "app-search__results",
        __source: {
            fileName: "src/views/search.tsx",
            lineNumber: 85,
            columnNumber: 5
        },
        __self: undefined
    }, state.search.results.length == 0 ? "No results" : null, state.search.results.map((media)=>{
        return /*#__PURE__*/ (0, _hyperapp.h)("li", {
            class: "app-search__result",
            key: media.id,
            onclick: (_)=>{
                actions.selections.add(media);
                actions.search.setVisibility(false);
            },
            __source: {
                fileName: "src/views/search.tsx",
                lineNumber: 89,
                columnNumber: 11
            },
            __self: undefined
        }, /*#__PURE__*/ (0, _hyperapp.h)("div", {
            class: "app-search__result-image",
            style: {
                backgroundImage: `url(${media.image})`
            },
            __source: {
                fileName: "src/views/search.tsx",
                lineNumber: 97,
                columnNumber: 13
            },
            __self: undefined
        }), /*#__PURE__*/ (0, _hyperapp.h)("span", {
            class: "app-search__result-title",
            __source: {
                fileName: "src/views/search.tsx",
                lineNumber: 101,
                columnNumber: 13
            },
            __self: undefined
        }, media.title));
    })));

},{"hyperapp":"gGmOH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7BhVN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "selections", ()=>selections);
var _hyperapp = require("hyperapp");
var _bingo = require("./bingo");
const selections = (state, actions)=>{
    const maxItems = (0, _bingo.calculateMaxItems)(state.bingo.size, state.bingo.showFreeSpace);
    return /*#__PURE__*/ (0, _hyperapp.h)("fieldset", {
        class: "app-selections_container",
        __source: {
            fileName: "src/views/selections.tsx",
            lineNumber: 13,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _hyperapp.h)("legend", {
        __source: {
            fileName: "src/views/selections.tsx",
            lineNumber: 14,
            columnNumber: 7
        },
        __self: undefined
    }, "Selections"), state.selections.items.length ? /*#__PURE__*/ (0, _hyperapp.h)("div", {
        __source: {
            fileName: "src/views/selections.tsx",
            lineNumber: 16,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _hyperapp.h)("button", {
        onclick: (_)=>actions.shuffle(),
        __source: {
            fileName: "src/views/selections.tsx",
            lineNumber: 17,
            columnNumber: 11
        },
        __self: undefined
    }, "Shuffle"), /*#__PURE__*/ (0, _hyperapp.h)("button", {
        onclick: (_)=>actions.removeAll(),
        __source: {
            fileName: "src/views/selections.tsx",
            lineNumber: 18,
            columnNumber: 11
        },
        __self: undefined
    }, "Remove all")) : /*#__PURE__*/ (0, _hyperapp.h)("div", {
        __source: {
            fileName: "src/views/selections.tsx",
            lineNumber: 21,
            columnNumber: 9
        },
        __self: undefined
    }, "No items selected."), /*#__PURE__*/ (0, _hyperapp.h)("ol", {
        class: "app-selections",
        __source: {
            fileName: "src/views/selections.tsx",
            lineNumber: 23,
            columnNumber: 7
        },
        __self: undefined
    }, state.selections.items.map((media, index)=>{
        return /*#__PURE__*/ (0, _hyperapp.h)("li", {
            key: media.id,
            __source: {
                fileName: "src/views/selections.tsx",
                lineNumber: 26,
                columnNumber: 13
            },
            __self: undefined
        }, /*#__PURE__*/ (0, _hyperapp.h)("div", {
            class: "app-selections__media",
            __source: {
                fileName: "src/views/selections.tsx",
                lineNumber: 27,
                columnNumber: 15
            },
            __self: undefined
        }, /*#__PURE__*/ (0, _hyperapp.h)("button", {
            class: "app-selections__media-delete",
            onclick: (_)=>actions.remove(media.id),
            __source: {
                fileName: "src/views/selections.tsx",
                lineNumber: 28,
                columnNumber: 17
            },
            __self: undefined
        }, "Remove"), /*#__PURE__*/ (0, _hyperapp.h)("input", {
            class: "app-selections__media-title",
            value: media.overriddenTitle,
            placeholder: media.title,
            oninput: (e)=>actions.commitEdit({
                    id: media.id,
                    title: e.target.value
                }),
            __source: {
                fileName: "src/views/selections.tsx",
                lineNumber: 34,
                columnNumber: 17
            },
            __self: undefined
        }), /*#__PURE__*/ (0, _hyperapp.h)("button", {
            style: {
                display: media.overriddenTitle ? "inline" : "none"
            },
            onclick: (_)=>actions.commitEdit({
                    id: media.id,
                    title: null
                }),
            __source: {
                fileName: "src/views/selections.tsx",
                lineNumber: 42,
                columnNumber: 17
            },
            __self: undefined
        }, "Reset title"), /*#__PURE__*/ (0, _hyperapp.h)("button", {
            class: "app-selections__media-reorder",
            disabled: index == 0,
            onclick: (_)=>actions.move({
                    srcIndex: index,
                    offset: -1
                }),
            __source: {
                fileName: "src/views/selections.tsx",
                lineNumber: 52,
                columnNumber: 17
            },
            __self: undefined
        }, "\u25B2"), /*#__PURE__*/ (0, _hyperapp.h)("button", {
            class: "app-selections__media-reorder",
            disabled: index == state.selections.items.length - 1,
            onclick: (_)=>actions.move({
                    srcIndex: index,
                    offset: 1
                }),
            __source: {
                fileName: "src/views/selections.tsx",
                lineNumber: 59,
                columnNumber: 17
            },
            __self: undefined
        }, "\u25BC")));
    })), /*#__PURE__*/ (0, _hyperapp.h)("span", {
        __source: {
            fileName: "src/views/selections.tsx",
            lineNumber: 71,
            columnNumber: 7
        },
        __self: undefined
    }, state.selections.items.length > maxItems ? `You have more items than the bingo board can fit! Note that only the first ${maxItems} items will be shown.` : "Add items by using the search bar above!"));
};

},{"hyperapp":"gGmOH","./bingo":"eeeCT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Xi7G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "custom", ()=>custom);
var _hyperapp = require("hyperapp");
const isSecure = window.location.protocol === "https:";
const errorMessage = (state)=>{
    if (state.isError) {
        const maybeInsecure = isSecure && state.imageUrl.startsWith("http:");
        const extra = maybeInsecure ? " that is available over HTTPS" : "";
        return `Could not load image. Please check that the file/URL is a valid image${extra}.`;
    } else return null;
};
const custom = (state, actions)=>/*#__PURE__*/ (0, _hyperapp.h)("fieldset", {
        class: "app-custom " + (state.custom.isDragging ? "app-custom--drag" : ""),
        __source: {
            fileName: "src/views/custom.tsx",
            lineNumber: 18,
            columnNumber: 3
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _hyperapp.h)("legend", {
        __source: {
            fileName: "src/views/custom.tsx",
            lineNumber: 21,
            columnNumber: 5
        },
        __self: undefined
    }, "Custom"), /*#__PURE__*/ (0, _hyperapp.h)("form", {
        onsubmit: (e)=>{
            e.preventDefault();
            actions.custom.validateInput(actions.selections.add);
        },
        __source: {
            fileName: "src/views/custom.tsx",
            lineNumber: 22,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _hyperapp.h)("div", {
        class: "app-custom__explanation",
        __source: {
            fileName: "src/views/custom.tsx",
            lineNumber: 28,
            columnNumber: 7
        },
        __self: undefined
    }, "Add your own items! Note that local files might not persist after a page refresh."), /*#__PURE__*/ (0, _hyperapp.h)("div", {
        class: "app-custom__error",
        __source: {
            fileName: "src/views/custom.tsx",
            lineNumber: 32,
            columnNumber: 7
        },
        __self: undefined
    }, errorMessage(state.custom)), /*#__PURE__*/ (0, _hyperapp.h)("label", {
        class: "app-custom__label",
        __source: {
            fileName: "src/views/custom.tsx",
            lineNumber: 33,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _hyperapp.h)("span", {
        __source: {
            fileName: "src/views/custom.tsx",
            lineNumber: 34,
            columnNumber: 9
        },
        __self: undefined
    }, "Title"), /*#__PURE__*/ (0, _hyperapp.h)("input", {
        class: "app-custom__input",
        type: "text",
        placeholder: "Custom title",
        value: state.custom.title,
        oninput: (e)=>actions.custom.updateState({
                title: e.target.value
            }),
        __source: {
            fileName: "src/views/custom.tsx",
            lineNumber: 35,
            columnNumber: 9
        },
        __self: undefined
    })), /*#__PURE__*/ (0, _hyperapp.h)("label", {
        class: "app-custom__label",
        __source: {
            fileName: "src/views/custom.tsx",
            lineNumber: 43,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _hyperapp.h)("span", {
        __source: {
            fileName: "src/views/custom.tsx",
            lineNumber: 44,
            columnNumber: 9
        },
        __self: undefined
    }, "Image URL"), /*#__PURE__*/ (0, _hyperapp.h)("input", {
        type: "text",
        class: "app-custom__input",
        placeholder: "https://example.com/image.png",
        value: state.custom.imageUrl,
        oninput: (e)=>actions.custom.updateState({
                imageUrl: e.target.value
            }),
        __source: {
            fileName: "src/views/custom.tsx",
            lineNumber: 45,
            columnNumber: 9
        },
        __self: undefined
    }), /*#__PURE__*/ (0, _hyperapp.h)("button", {
        type: "button",
        onclick: (e)=>{
            e.preventDefault();
            document.querySelector(".js-file-input").click();
        },
        __source: {
            fileName: "src/views/custom.tsx",
            lineNumber: 54,
            columnNumber: 9
        },
        __self: undefined
    }, "Select local image")), /*#__PURE__*/ (0, _hyperapp.h)("input", {
        class: "js-file-input",
        style: {
            display: "none"
        },
        type: "file",
        onchange: (e)=>actions.custom.validateFile(e.target.files[0]),
        __source: {
            fileName: "src/views/custom.tsx",
            lineNumber: 64,
            columnNumber: 7
        },
        __self: undefined
    }), /*#__PURE__*/ (0, _hyperapp.h)("button", {
        type: "submit",
        __source: {
            fileName: "src/views/custom.tsx",
            lineNumber: 70,
            columnNumber: 7
        },
        __self: undefined
    }, "Submit")));

},{"hyperapp":"gGmOH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"38Edj":[function() {},{}]},["fm8Gy","h7u1C"], "h7u1C", "parcelRequire8d92")

//# sourceMappingURL=index.b71e74eb.js.map
