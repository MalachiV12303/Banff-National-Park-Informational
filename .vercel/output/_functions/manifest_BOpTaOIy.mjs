import { d as decodeKey } from './chunks/astro/server_DCLNMX4h.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Du2VnDwj.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/.aWork/projects/banff-informational/","cacheDir":"file:///C:/.aWork/projects/banff-informational/node_modules/.astro/","outDir":"file:///C:/.aWork/projects/banff-informational/dist/","srcDir":"file:///C:/.aWork/projects/banff-informational/src/","publicDir":"file:///C:/.aWork/projects/banff-informational/public/","buildClientDir":"file:///C:/.aWork/projects/banff-informational/dist/client/","buildServerDir":"file:///C:/.aWork/projects/banff-informational/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.5.2_rollup@4.35.0_typescript@5.8.2/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"img[data-astro-cid-2w3r3o6g]{position:absolute;z-index:-1;filter:brightness(70%);width:100%}div[data-astro-cid-2w3r3o6g]{width:25%;padding-left:12rem;padding-right:12rem}section[data-astro-cid-2w3r3o6g]{position:relative;height:80dvh;display:flex;align-items:center;justify-content:end;overflow:hidden}h1[data-astro-cid-2w3r3o6g]{font-family:Inter-Black,Helvetica;font-weight:800;color:#fff;font-size:20px;letter-spacing:4px;line-height:normal}p[data-astro-cid-2w3r3o6g]{font-family:Inter-Black,Helvetica;font-weight:500;color:#fff;font-size:20px;letter-spacing:4px;line-height:normal}.testFadeIn[data-astro-cid-sefmxpgk]{opacity:0}section[data-astro-cid-sefmxpgk]{height:100dvh;display:flex;align-items:center;justify-content:center}h1[data-astro-cid-sefmxpgk]{font-family:Inter-Black,Helvetica;font-weight:900;color:#fff;font-size:64px;letter-spacing:12px;line-height:normal;padding-left:16px;padding-right:16px}.noselect[data-astro-cid-sefmxpgk]{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}section[data-astro-cid-wvqd5tb7]{height:100dvh;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}#parallax[data-astro-cid-wvqd5tb7]{position:absolute;z-index:-5;width:100%}#title[data-astro-cid-wvqd5tb7]{display:flex;flex-direction:column;font-family:Inter-Light,Helvetica;font-weight:400;color:#fff;font-size:48px;text-align:center;letter-spacing:12px;line-height:normal}#title[data-astro-cid-wvqd5tb7] span[data-astro-cid-wvqd5tb7]{font-weight:900;letter-spacing:5.76px;text-transform:uppercase}html{margin:0;width:100%;height:100%}body{margin:0;width:100%;height:100%;overflow-y:scroll;overflow-x:hidden;background-color:#151515}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/.aWork/projects/banff-informational/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.5.2_rollup@4.35.0_typescript@5.8.2/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/.aWork/projects/banff-informational/node_modules/.pnpm/@astrojs+vercel@8.1.2_astro@5.5.2_rollup@4.35.0_typescript@5.8.2__rollup@4.35.0/node_modules/@astrojs/vercel/dist/image/build-service.js":"chunks/build-service_CN6dDsuZ.mjs","\u0000@astrojs-manifest":"manifest_BOpTaOIy.mjs","C:/.aWork/projects/banff-informational/src/components/Landing.astro?astro&type=script&index=0&lang.ts":"_astro/Landing.astro_astro_type_script_index_0_lang.BOK9ATkD.js","C:/.aWork/projects/banff-informational/src/components/TitleSection.astro?astro&type=script&index=0&lang.ts":"_astro/TitleSection.astro_astro_type_script_index_0_lang.KBAk024E.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/bannfIcon.svg","/_astro/index.CemUxxOu.js","/_astro/Landing.astro_astro_type_script_index_0_lang.BOK9ATkD.js","/_astro/TitleSection.astro_astro_type_script_index_0_lang.KBAk024E.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"gTDk3IVH6Z9dkJX/SmsTQX6joLGClfhZshYgA2tB+vs="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
