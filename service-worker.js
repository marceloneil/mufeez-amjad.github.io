"use strict";var precacheConfig=[["/index.html","e960fc3610f78a8e8801f0ac6e4f3245"],["/static/css/main.fdafde9f.css","ed4975e75f90a874135210fca82fdfc5"],["/static/js/main.fec4102c.js","56a397027e0800ad85100dfaa446bf73"],["/static/media/CannaBlockchain-04.327d7a8c.png","327d7a8c7cd291554d6db3bf5ea886fa"],["/static/media/MufeezAmjadResume.bac77437.pdf","bac77437d58119b0df013a0f8c6e09c8"],["/static/media/android.d5063e98.png","d5063e98fc331ce61c3de4a9cbf26f93"],["/static/media/app-actuator.235c8572.png","235c85720b15325e9cb3c053a1f46fdd"],["/static/media/april2017.b73ab840.png","b73ab840cb6224e267135c1e293bcf40"],["/static/media/budgeting.a0444581.png","a04445813e86435ff5b1b9e290529075"],["/static/media/contact2.359df4ce.png","359df4ce6f0698da3052306159ed4286"],["/static/media/crywolf.958dcde7.png","958dcde7c5fadf602a7269c4de5aa75a"],["/static/media/csharp.784c32c7.png","784c32c7840db52c0a127f8e9abf2909"],["/static/media/feed.8937149a.png","8937149a1f7af42dca1c600be31df2fd"],["/static/media/feedme.b45c5ddb.png","b45c5ddbf6c3b2a376f62ce4894eac00"],["/static/media/flipd.9a984066.png","9a984066b50e0b8af65572f25e159323"],["/static/media/fractal.d3d3f5ae.png","d3d3f5aeb8b7bb244bf34add84e173dc"],["/static/media/java.e09dddf3.png","e09dddf320718119024ae66dbd442aa2"],["/static/media/nike.89cabeae.png","89cabeaea5e86c7c97b433a0a7435048"],["/static/media/node.768a4ac4.png","768a4ac4214e62f2d60b1638960750e7"],["/static/media/phs.869ba1d6.png","869ba1d64580f5ed7dd478b91988f1af"],["/static/media/phs2.30c8b7b7.png","30c8b7b7c49b649f12aa12007fbd4731"],["/static/media/pickering.a8e66e72.png","a8e66e724791225ebb077355d2f73579"],["/static/media/pickering2.83866e1d.png","83866e1d20a97928650820a68a460ca8"],["/static/media/reactnative.b4b093a2.png","b4b093a24c5953cdd73fcc5bc8a4fddf"],["/static/media/science-phd.c6a53c25.png","c6a53c257aa8c1da87dec7332c4f3e77"],["/static/media/socket.a2cc482b.png","a2cc482b5021be35a27c27562c4a713d"],["/static/media/switch-connect.d61a2af1.png","d61a2af15679a169268c0664d8841120"],["/static/media/tesla2.be39b77e.png","be39b77ec8821544f79b27cd0673fd61"],["/static/media/tesla3.0a60dac9.png","0a60dac9e61edd430b9203d25d0ab448"],["/static/media/trialsloop.ba33d111.png","ba33d111e48256b7604371f6dceaa5f5"],["/static/media/trojans.b5207248.png","b5207248c18d974a0d06b9731a9bc7e2"],["/static/media/unity.c5fdefd3.png","c5fdefd3c5962958f30850aee21a5a5c"],["/static/media/waterloo.b365d205.png","b365d20522320ffbc790b9e6a711fb6e"],["/static/media/waterloo2.8481a943.png","8481a943cc214a380d7f96c470d1f75c"],["/static/media/wisseo.8bffc635.png","8bffc635d1762f583dee5558fba8c87e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});