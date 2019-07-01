(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{259:function(n){n.exports={data:{tag:{title:"Releases",belongsTo:{edges:[{node:{title:"Say hello to Gridsome 🎉",path:"/say-hello-to-gridsome",date:"7. February 2019",timeToRead:3,description:"A new static site generator baby is born. It's highly inspired by Gatsby.js (React based) but built on top of Vue.js. We have been working on it for a year and will have a beta ready soon. You can expect this baby to grow up fast!",coverImage:null,content:'<p>A new static site generator baby is born. It\'s highly inspired by Gatsby.js (React based) but built on top of Vue.js. We have been working on it for a year and will have a beta ready soon. You can expect this baby to grow up fast!</p>\n<p>We think <strong>Gridsome</strong> is a missing piece to the Vue.js ecosystem. What Gatsby.js does for React.js is a game changer in how we build websites.  React.js is excellent, but we think Vue.js is more approachable for most web designers and devs getting started with JAMstack. Gridsome is the Vue.js alternative to Gatsby.</p>\n<p>With <strong>Gridsome</strong> you get a <strong>universal GraphQL layer</strong> for all your connected data sources. It\'s like a single source of truth for your website data ready to be used in any page or components. Connect to any CMS or APIs like Google Spreadsheet, Airtable, Instagram Feed, local markdown files, etc. </p>\n<p>Here is an example on how to query posts from the GraphQL layer in a page:</p>\n<pre class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Latest blog posts<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>edge in $page.allWordPressPost.edges<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>edge.node.id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        {{ edge.node.title }}\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>page-query</span><span class="token punctuation">></span></span><span class="token graphql">\n<span class="token keyword">query</span> Blog <span class="token punctuation">{</span>\n  allWordPressPost <span class="token punctuation">(</span><span class="token attr-name">limit</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    edges <span class="token punctuation">{</span>\n      node <span class="token punctuation">{</span>\n        _id\n        title\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>page-query</span><span class="token punctuation">></span></span></pre>\n<p>You don\'t need to know GraphQL or Vue to get started with Gridsome - It\'s a great way to get introduced to both.</p>\n<p>The GraphQL layer and all the data can be explored in a local GraphQL playground. The playground is usually located at <code class="language-text">https://localhost:8080/___explore</code> when a Gridsome development project is running.</p>\n<h4 id="perfect-scores-on-google-lighthouse---automagically-"><a href="#perfect-scores-on-google-lighthouse---automagically-" aria-hidden="true"><span class="icon icon-link"></span></a>Perfect scores on Google Lighthouse - automagically 💚</h4>\n<p>One of the main goals of Gridsome is to make a framework that let you build websites that are optimized "out-of-the-box." It follows the <a href="https://developers.google.com/web/fundamentals/performance/prpl-pattern/" target="_blank" rel="nofollow noopener noreferrer">PRPL-pattern by Google.</a> You don\'t need to be a performance expert to make fast websites with Gridsome. Your site gets almost perfect scores on Google lighthouse out-of-the-box. These are some of the performance steps that Gridsome takes care of:</p>\n<ul>\n<li>Image compressing &#x26; lazy-loading ⚡️ </li>\n<li>CSS &#x26; JS minification ⚡️ </li>\n<li>Code-splitting ⚡️ </li>\n<li>HTML compressing ⚡️ </li>\n<li>Critical CSS (Plugin) ⚡️ </li>\n<li>Full PWA &#x26; Offline-support (plugin) ⚡️  </li>\n</ul>\n<h4 id="a-better-way-to-build-websites"><a href="#a-better-way-to-build-websites" aria-hidden="true"><span class="icon icon-link"></span></a>A better way to build websites</h4>\n<p>Gridsome is built for the JAMstack workflow - a new way to build websites that gives you better performance, higher security, cheaper hosting, and a better developer experience. Generate prerendered (static) pages at build time for SEO-purpose and add powerful dynamic functionality with APIs and Vue.js.</p>\n<p>We believe the SSGs / JAMstack trend is just getting started. When you have first started to make websites this way there is no way back. You feel almost "dirty" when going back to a traditional WordPress / CMS setup. </p>\n<p>Try running the new Chrome Lighthouse (Audit tab in Developer tools) on a WordPress site - It is impossible to get good scores even with the best caching plugins and hosting. With Gridsome you don\'t even need caching plugins. Website optimization is taken care of at build time.</p>\n<p>This is what we think is very exciting and is why we are building Gridsome. It is the <strong>perfect SPA &#x26; PWA front-end solution</strong> for any headless CMS or content APIs.</p>\n<h4 id="whats-next"><a href="#whats-next" aria-hidden="true"><span class="icon icon-link"></span></a>Whats next</h4>\n<p>In the next couple of months we\'re going to continue to improve the docs, create tutorials, add more source &#x26; transformer plugins and fix bugs. </p>\n<h4 id="contribute-to-gridsome"><a href="#contribute-to-gridsome" aria-hidden="true"><span class="icon icon-link"></span></a>Contribute to Gridsome</h4>\n<p>We\'re currently just two brothers working on this, so any contribution is very welcome. We\'re passionate about building a faster web and make website building fun again.</p>\n<p>You can also support us by giving <a href="https://github.com/gridsome/gridsome/stargazers" target="_blank" rel="nofollow noopener noreferrer">a GitHub star ★</a> and spread the word :)</p>\n'}}]}}}}}}]);