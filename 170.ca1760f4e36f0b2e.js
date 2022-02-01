"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[170],{3170:(k,r,n)=>{n.r(r),n.d(r,{DemoModule:()=>v,PreloadedRecaptchaAPIService:()=>h,service:()=>i});var d=n(6019),u=n(3174),m=n(4099),p=n(6853),y=n(6483),o=n(1356),l=n(3668);let g=(()=>{class s{resolved(a){console.log(`Resolved captcha with response: ${a}`)}}return s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=l.Xpm({type:s,selectors:[["recaptcha-demo"]],decls:1,vars:0,consts:[[3,"resolved"]],template:function(a,t){1&a&&(l.TgZ(0,"re-captcha",0),l.NdJ("resolved",function(c){return t.resolved(c)}),l.qZA())},directives:[p.wT],encapsulation:2}),s})();let h=(()=>{class s{constructor(a){const t=new m.X(null);if(this.ready=t.asObservable(),"undefined"==typeof grecaptcha){const c=document.createElement("script");c.src=`https://www.google.com/recaptcha/api.js?render=${a}`,document.head.appendChild(c)}const j=setInterval(()=>{"undefined"==typeof grecaptcha||!(grecaptcha.render instanceof Function)||(clearInterval(j),t.next(grecaptcha))},50)}}return s.\u0275fac=function(a){return new(a||s)(l.LFG(p.We,8))},s.\u0275prov=l.Yz7({token:s,factory:s.\u0275fac}),s})();const i=new h,w=[{path:"",component:g,data:{page:{feature:"preload-api",title:"Preloaded reCAPTCHA API Example",content:{component:'<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@angular/core&quot;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&quot;recaptcha-demo&quot;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&quot;./preload-api-demo.component.html&quot;</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">PreloadApiDemoComponent</span> {\n  <span class="hljs-keyword">public</span> <span class="hljs-title function_">resolved</span>(<span class="hljs-attr">captchaResponse</span>: <span class="hljs-built_in">string</span>): <span class="hljs-built_in">void</span> {\n    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">`Resolved captcha with response: <span class="hljs-subst">${captchaResponse}</span>`</span>);\n  }\n}\n',html:'<span class="hljs-tag">&lt;<span class="hljs-name">re-captcha</span> (<span class="hljs-attr">resolved</span>)=<span class="hljs-string">&quot;resolved($event)&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">re-captcha</span>&gt;</span>\n',module:{"":'<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Injectable</span>, <span class="hljs-title class_">NgModule</span>, <span class="hljs-title class_">Optional</span>, <span class="hljs-title class_">Inject</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">CommonModule</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/common&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Routes</span>, <span class="hljs-title class_">RouterModule</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/router&#x27;</span>;\n\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">BehaviorSubject</span>, <span class="hljs-title class_">Observable</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;rxjs&#x27;</span>;\n\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RecaptchaLoaderService</span>, <span class="hljs-title class_">RecaptchaModule</span>, <span class="hljs-variable constant_">RECAPTCHA_V3_SITE_KEY</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;ng-recaptcha&#x27;</span>;\n\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">PreloadApiDemoComponent</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./preload-api-demo.component&#x27;</span>;\n<span class="hljs-keyword">import</span> { settings } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./preload-api-demo.data&#x27;</span>;\n\n<span class="hljs-meta">@Injectable</span>()\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">PreloadedRecaptchaAPIService</span> {\n  <span class="hljs-keyword">public</span> <span class="hljs-attr">ready</span>: <span class="hljs-title class_">Observable</span>&lt;<span class="hljs-title class_">ReCaptcha</span>V2.<span class="hljs-property">ReCaptcha</span>&gt;;\n\n  <span class="hljs-title function_">constructor</span>(<span class="hljs-params">\n    <span class="hljs-meta">@Optional</span>() <span class="hljs-meta">@Inject</span>(RECAPTCHA_V3_SITE_KEY) v3SiteKey?: <span class="hljs-built_in">string</span>,\n  </span>) {\n    <span class="hljs-keyword">const</span> readySubject = <span class="hljs-keyword">new</span> <span class="hljs-title class_">BehaviorSubject</span>&lt;<span class="hljs-title class_">ReCaptcha</span>V2.<span class="hljs-property">ReCaptcha</span>&gt;(<span class="hljs-literal">null</span>);\n    <span class="hljs-variable language_">this</span>.<span class="hljs-property">ready</span> = readySubject.<span class="hljs-title function_">asObservable</span>();\n\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> grecaptcha === <span class="hljs-string">&#x27;undefined&#x27;</span>) {\n      <span class="hljs-keyword">const</span> recaptchaScript = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">createElement</span>(<span class="hljs-string">&#x27;script&#x27;</span>);\n      <span class="hljs-keyword">const</span> renderMode = v3SiteKey || <span class="hljs-string">&#x27;explicit&#x27;</span>;\n      recaptchaScript.<span class="hljs-property">src</span> = <span class="hljs-string">`https://www.google.com/recaptcha/api.js?render=<span class="hljs-subst">${v3SiteKey}</span>`</span>;\n      <span class="hljs-variable language_">document</span>.<span class="hljs-property">head</span>.<span class="hljs-title function_">appendChild</span>(recaptchaScript);\n    }\n\n    <span class="hljs-keyword">const</span> interval = <span class="hljs-built_in">setInterval</span>(<span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> grecaptcha === <span class="hljs-string">&#x27;undefined&#x27;</span> || !(grecaptcha.<span class="hljs-property">render</span> <span class="hljs-keyword">instanceof</span> <span class="hljs-title class_">Function</span>)) {\n        <span class="hljs-keyword">return</span>;\n      }\n\n      <span class="hljs-built_in">clearInterval</span>(interval);\n      readySubject.<span class="hljs-title function_">next</span>(grecaptcha);\n    }, <span class="hljs-number">50</span>);\n  }\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> service = <span class="hljs-keyword">new</span> <span class="hljs-title class_">PreloadedRecaptcha</span>APIService();\n\n<span class="hljs-keyword">const</span> <span class="hljs-attr">routes</span>: <span class="hljs-title class_">Routes</span> = [\n  {\n    <span class="hljs-attr">path</span>: <span class="hljs-string">&#x27;&#x27;</span>,\n    <span class="hljs-attr">component</span>: <span class="hljs-title class_">PreloadApiDemoComponent</span>,\n    <span class="hljs-attr">data</span>: { <span class="hljs-attr">page</span>: settings },\n  },\n];\n\n<span class="hljs-meta">@NgModule</span>({\n  <span class="hljs-attr">declarations</span>: [<span class="hljs-title class_">PreloadApiDemoComponent</span>],\n  <span class="hljs-attr">imports</span>: [\n    <span class="hljs-title class_">RouterModule</span>.<span class="hljs-title function_">forChild</span>(routes),\n    <span class="hljs-title class_">RecaptchaModule</span>,\n    <span class="hljs-title class_">CommonModule</span>,\n  ],\n  <span class="hljs-attr">providers</span>: [\n    {\n      <span class="hljs-attr">provide</span>: <span class="hljs-title class_">RecaptchaLoaderService</span>,\n      <span class="hljs-attr">useValue</span>: service,\n    },\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">DemoModule</span> { }\n',fr:'<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Injectable</span>, <span class="hljs-title class_">NgModule</span>, <span class="hljs-title class_">Optional</span>, <span class="hljs-title class_">Inject</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">CommonModule</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/common&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Routes</span>, <span class="hljs-title class_">RouterModule</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/router&#x27;</span>;\n\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">BehaviorSubject</span>, <span class="hljs-title class_">Observable</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;rxjs&#x27;</span>;\n\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RecaptchaLoaderService</span>, <span class="hljs-title class_">RecaptchaModule</span>, <span class="hljs-variable constant_">RECAPTCHA_LANGUAGE</span>, <span class="hljs-variable constant_">RECAPTCHA_V3_SITE_KEY</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;ng-recaptcha&#x27;</span>;\n\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">PreloadApiDemoComponent</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./preload-api-demo.component&#x27;</span>;\n<span class="hljs-keyword">import</span> { settings } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./preload-api-demo.data&#x27;</span>;\n\n<span class="hljs-meta">@Injectable</span>()\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">PreloadedRecaptchaAPIService</span> {\n  <span class="hljs-keyword">public</span> <span class="hljs-attr">ready</span>: <span class="hljs-title class_">Observable</span>&lt;<span class="hljs-title class_">ReCaptcha</span>V2.<span class="hljs-property">ReCaptcha</span>&gt;;\n\n  <span class="hljs-title function_">constructor</span>(<span class="hljs-params">\n    <span class="hljs-meta">@Optional</span>() <span class="hljs-meta">@Inject</span>(RECAPTCHA_V3_SITE_KEY) v3SiteKey?: <span class="hljs-built_in">string</span>,\n  </span>) {\n    <span class="hljs-keyword">const</span> readySubject = <span class="hljs-keyword">new</span> <span class="hljs-title class_">BehaviorSubject</span>&lt;<span class="hljs-title class_">ReCaptcha</span>V2.<span class="hljs-property">ReCaptcha</span>&gt;(<span class="hljs-literal">null</span>);\n    <span class="hljs-variable language_">this</span>.<span class="hljs-property">ready</span> = readySubject.<span class="hljs-title function_">asObservable</span>();\n\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> grecaptcha === <span class="hljs-string">&#x27;undefined&#x27;</span>) {\n      <span class="hljs-keyword">const</span> recaptchaScript = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">createElement</span>(<span class="hljs-string">&#x27;script&#x27;</span>);\n      <span class="hljs-keyword">const</span> renderMode = v3SiteKey || <span class="hljs-string">&#x27;explicit&#x27;</span>;\n      recaptchaScript.<span class="hljs-property">src</span> = <span class="hljs-string">`https://www.google.com/recaptcha/api.js?render=<span class="hljs-subst">${v3SiteKey}</span>`</span>;\n      <span class="hljs-variable language_">document</span>.<span class="hljs-property">head</span>.<span class="hljs-title function_">appendChild</span>(recaptchaScript);\n    }\n\n    <span class="hljs-keyword">const</span> interval = <span class="hljs-built_in">setInterval</span>(<span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> grecaptcha === <span class="hljs-string">&#x27;undefined&#x27;</span> || !(grecaptcha.<span class="hljs-property">render</span> <span class="hljs-keyword">instanceof</span> <span class="hljs-title class_">Function</span>)) {\n        <span class="hljs-keyword">return</span>;\n      }\n\n      <span class="hljs-built_in">clearInterval</span>(interval);\n      readySubject.<span class="hljs-title function_">next</span>(grecaptcha);\n    }, <span class="hljs-number">50</span>);\n  }\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> service = <span class="hljs-keyword">new</span> <span class="hljs-title class_">PreloadedRecaptcha</span>APIService();\n\n<span class="hljs-keyword">const</span> <span class="hljs-attr">routes</span>: <span class="hljs-title class_">Routes</span> = [\n  {\n    <span class="hljs-attr">path</span>: <span class="hljs-string">&#x27;&#x27;</span>,\n    <span class="hljs-attr">component</span>: <span class="hljs-title class_">PreloadApiDemoComponent</span>,\n    <span class="hljs-attr">data</span>: { <span class="hljs-attr">page</span>: settings },\n  },\n];\n\n<span class="hljs-meta">@NgModule</span>({\n  <span class="hljs-attr">declarations</span>: [<span class="hljs-title class_">PreloadApiDemoComponent</span>],\n  <span class="hljs-attr">imports</span>: [\n    <span class="hljs-title class_">RouterModule</span>.<span class="hljs-title function_">forChild</span>(routes),\n    <span class="hljs-title class_">RecaptchaModule</span>,\n    <span class="hljs-title class_">CommonModule</span>,\n  ],\n  <span class="hljs-attr">providers</span>: [\n    {\n      <span class="hljs-attr">provide</span>: <span class="hljs-title class_">RecaptchaLoaderService</span>,\n      <span class="hljs-attr">useValue</span>: service,\n    },\n    { <span class="hljs-attr">provide</span>: <span class="hljs-variable constant_">RECAPTCHA_LANGUAGE</span>, <span class="hljs-attr">useValue</span>: <span class="hljs-string">&#x27;fr&#x27;</span> },\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">DemoModule</span> { }\n',de:'<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Injectable</span>, <span class="hljs-title class_">NgModule</span>, <span class="hljs-title class_">Optional</span>, <span class="hljs-title class_">Inject</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">CommonModule</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/common&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Routes</span>, <span class="hljs-title class_">RouterModule</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/router&#x27;</span>;\n\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">BehaviorSubject</span>, <span class="hljs-title class_">Observable</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;rxjs&#x27;</span>;\n\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RecaptchaLoaderService</span>, <span class="hljs-title class_">RecaptchaModule</span>, <span class="hljs-variable constant_">RECAPTCHA_LANGUAGE</span>, <span class="hljs-variable constant_">RECAPTCHA_V3_SITE_KEY</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;ng-recaptcha&#x27;</span>;\n\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">PreloadApiDemoComponent</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./preload-api-demo.component&#x27;</span>;\n<span class="hljs-keyword">import</span> { settings } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./preload-api-demo.data&#x27;</span>;\n\n<span class="hljs-meta">@Injectable</span>()\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">PreloadedRecaptchaAPIService</span> {\n  <span class="hljs-keyword">public</span> <span class="hljs-attr">ready</span>: <span class="hljs-title class_">Observable</span>&lt;<span class="hljs-title class_">ReCaptcha</span>V2.<span class="hljs-property">ReCaptcha</span>&gt;;\n\n  <span class="hljs-title function_">constructor</span>(<span class="hljs-params">\n    <span class="hljs-meta">@Optional</span>() <span class="hljs-meta">@Inject</span>(RECAPTCHA_V3_SITE_KEY) v3SiteKey?: <span class="hljs-built_in">string</span>,\n  </span>) {\n    <span class="hljs-keyword">const</span> readySubject = <span class="hljs-keyword">new</span> <span class="hljs-title class_">BehaviorSubject</span>&lt;<span class="hljs-title class_">ReCaptcha</span>V2.<span class="hljs-property">ReCaptcha</span>&gt;(<span class="hljs-literal">null</span>);\n    <span class="hljs-variable language_">this</span>.<span class="hljs-property">ready</span> = readySubject.<span class="hljs-title function_">asObservable</span>();\n\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> grecaptcha === <span class="hljs-string">&#x27;undefined&#x27;</span>) {\n      <span class="hljs-keyword">const</span> recaptchaScript = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">createElement</span>(<span class="hljs-string">&#x27;script&#x27;</span>);\n      <span class="hljs-keyword">const</span> renderMode = v3SiteKey || <span class="hljs-string">&#x27;explicit&#x27;</span>;\n      recaptchaScript.<span class="hljs-property">src</span> = <span class="hljs-string">`https://www.google.com/recaptcha/api.js?render=<span class="hljs-subst">${v3SiteKey}</span>`</span>;\n      <span class="hljs-variable language_">document</span>.<span class="hljs-property">head</span>.<span class="hljs-title function_">appendChild</span>(recaptchaScript);\n    }\n\n    <span class="hljs-keyword">const</span> interval = <span class="hljs-built_in">setInterval</span>(<span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> grecaptcha === <span class="hljs-string">&#x27;undefined&#x27;</span> || !(grecaptcha.<span class="hljs-property">render</span> <span class="hljs-keyword">instanceof</span> <span class="hljs-title class_">Function</span>)) {\n        <span class="hljs-keyword">return</span>;\n      }\n\n      <span class="hljs-built_in">clearInterval</span>(interval);\n      readySubject.<span class="hljs-title function_">next</span>(grecaptcha);\n    }, <span class="hljs-number">50</span>);\n  }\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> service = <span class="hljs-keyword">new</span> <span class="hljs-title class_">PreloadedRecaptcha</span>APIService();\n\n<span class="hljs-keyword">const</span> <span class="hljs-attr">routes</span>: <span class="hljs-title class_">Routes</span> = [\n  {\n    <span class="hljs-attr">path</span>: <span class="hljs-string">&#x27;&#x27;</span>,\n    <span class="hljs-attr">component</span>: <span class="hljs-title class_">PreloadApiDemoComponent</span>,\n    <span class="hljs-attr">data</span>: { <span class="hljs-attr">page</span>: settings },\n  },\n];\n\n<span class="hljs-meta">@NgModule</span>({\n  <span class="hljs-attr">declarations</span>: [<span class="hljs-title class_">PreloadApiDemoComponent</span>],\n  <span class="hljs-attr">imports</span>: [\n    <span class="hljs-title class_">RouterModule</span>.<span class="hljs-title function_">forChild</span>(routes),\n    <span class="hljs-title class_">RecaptchaModule</span>,\n    <span class="hljs-title class_">CommonModule</span>,\n  ],\n  <span class="hljs-attr">providers</span>: [\n    {\n      <span class="hljs-attr">provide</span>: <span class="hljs-title class_">RecaptchaLoaderService</span>,\n      <span class="hljs-attr">useValue</span>: service,\n    },\n    { <span class="hljs-attr">provide</span>: <span class="hljs-variable constant_">RECAPTCHA_LANGUAGE</span>, <span class="hljs-attr">useValue</span>: <span class="hljs-string">&#x27;de&#x27;</span> },\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">DemoModule</span> { }\n'}}}}}];let v=(()=>{class s{}return s.\u0275fac=function(a){return new(a||s)},s.\u0275mod=l.oAB({type:s}),s.\u0275inj=l.cJS({providers:[{provide:p._l,useValue:i},{provide:p.We,useValue:o.$},{provide:p.BZ,useValue:{siteKey:o.q}},{provide:p.oS,useValue:(0,y.g)()}],imports:[[u.Bz.forChild(w),p.a,d.ez]]}),s})()}}]);