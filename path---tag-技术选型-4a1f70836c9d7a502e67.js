webpackJsonp([0x8f8b5438a280],{1579:function(h,e){h.exports={data:{site:{siteMetadata:{title:"女王控的博客",description:'前端工程师，黑猫女王控，欢迎勾搭，技术相关<a href="https://github.com/towavephone" target="_blank">@towavephone</a>，QQ闲聊<a href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=634407147&website=www.oicqzone.com">@towave</a>，bili关注<a href="https://space.bilibili.com/11507708#/" target="_blank">@towave</a>',siteUrl:"https://blog.towavephone.com"}}},pathContext:{posts:[{excerpt:"典型技术选型 集客顾客端脚手架搭建 记一次组件打包为链接的实践 选型背景 将第三方 SDK 打包为链接，类似于   这样的一个链接，实现粘贴代码即可完成部署。 技术选型过程 考虑到的方案有 rollup、jQuery、原生 js，鉴于这些方案的实现都比较复杂且没有积累，最终采用 webpack 脚手架。 其实更好的实现方式使用原生 js…",html:'<h1 id="典型技术选型"><a href="#%E5%85%B8%E5%9E%8B%E6%8A%80%E6%9C%AF%E9%80%89%E5%9E%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>典型技术选型</h1>\n<h2 id="集客顾客端脚手架搭建"><a href="#%E9%9B%86%E5%AE%A2%E9%A1%BE%E5%AE%A2%E7%AB%AF%E8%84%9A%E6%89%8B%E6%9E%B6%E6%90%AD%E5%BB%BA" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>集客顾客端脚手架搭建</h2>\n<p><a href="/components-pack-as-library/">记一次组件打包为链接的实践</a></p>\n<h3 id="选型背景"><a href="#%E9%80%89%E5%9E%8B%E8%83%8C%E6%99%AF" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>选型背景</h3>\n<p>将第三方 SDK 打包为链接，类似于 <code class="language-text">&lt;script src=&quot;打包后库的地址?deployId=部署ID&quot; name=&quot;唯一标识符&quot;&gt;&lt;/script&gt;</code> 这样的一个链接，实现粘贴代码即可完成部署。</p>\n<h3 id="技术选型过程"><a href="#%E6%8A%80%E6%9C%AF%E9%80%89%E5%9E%8B%E8%BF%87%E7%A8%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>技术选型过程</h3>\n<p>考虑到的方案有 rollup、jQuery、原生 js，鉴于这些方案的实现都比较复杂且没有积累，最终采用 webpack 脚手架。</p>\n<p>其实更好的实现方式使用原生 js 写，加载速度更快。</p>\n<h2 id="集客顾客端组件优化"><a href="#%E9%9B%86%E5%AE%A2%E9%A1%BE%E5%AE%A2%E7%AB%AF%E7%BB%84%E4%BB%B6%E4%BC%98%E5%8C%96" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>集客顾客端组件优化</h2>\n<p><a href="/building-platform-lightweight-components/">构建多平台轻量化组件的实践</a></p>\n<h3 id="选型背景-1"><a href="#%E9%80%89%E5%9E%8B%E8%83%8C%E6%99%AF-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>选型背景</h3>\n<p>在将客服组件上线后，由于未考虑到加载的组件包的大小，尤其是初始加载的包比较大，即使是压缩过初始加载也有 600 多 k，严重影响首页加载，导致加载此脚本的网站需要很长时间才能响应</p>\n<h3 id="技术选型过程-1"><a href="#%E6%8A%80%E6%9C%AF%E9%80%89%E5%9E%8B%E8%BF%87%E7%A8%8B-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>技术选型过程</h3>\n<p>考虑到的方案有</p>\n<ol>\n<li>组件异步加载，减少首屏加载，非首屏的较大的组件可以预加载（预加载没想到）</li>\n<li>轻量级库：</li>\n<li>所有 UI 组件自己编写，保证只写需要的组件</li>\n<li>去掉较大的依赖库</li>\n<li>移动端、桌面端的分开打包，参考拓客（没想到，我想到的是移动端另开一个新项目）</li>\n<li>代码分层，尤其是 IM 层要分离出来（没考虑过这方面）</li>\n</ol>\n<h2 id="轻量级网站构建"><a href="#%E8%BD%BB%E9%87%8F%E7%BA%A7%E7%BD%91%E7%AB%99%E6%9E%84%E5%BB%BA" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>轻量级网站构建</h2>\n<p><a href="/lightweight-website-construction/">轻量级网站构建实践</a></p>\n<h3 id="选型背景-2"><a href="#%E9%80%89%E5%9E%8B%E8%83%8C%E6%99%AF-2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>选型背景</h3>\n<p>微信端的问卷调查，需要在三端（桌面端、移动端、微信端）同时兼容</p>\n<h3 id="技术选型过程-2"><a href="#%E6%8A%80%E6%9C%AF%E9%80%89%E5%9E%8B%E8%BF%87%E7%A8%8B-2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>技术选型过程</h3>\n<ol>\n<li>后端渲染模板（未想到），以下是一些缺点</li>\n<li>后端渲染对 CPU 的要求较高</li>\n<li>打算用 oss 来减少后端渲染，但考虑到表单经常变化，且分享的链接要尽可能的保持不变，这就限制了 oss 的使用</li>\n<li>由于分享的链接要尽可能的保持不变，在新的表单分享模板加入后需要后端刷数据，容错性较低</li>\n<li>最终方案：采用前后端分离的方式，用原生语法新框架写，本来打算采用官网脚手架，但考虑到官网脚手架只能在 node v9.11.2 版本下使用，且不支持 ES6 及以上的语法，决定在 generator-webapp 脚手架的基础上改造</li>\n</ol>\n<h1 id="总结"><a href="#%E6%80%BB%E7%BB%93" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>总结</h1>\n<h2 id="选型共性"><a href="#%E9%80%89%E5%9E%8B%E5%85%B1%E6%80%A7" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>选型共性</h2>\n<h3 id="优点"><a href="#%E4%BC%98%E7%82%B9" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>优点</h3>\n<ol>\n<li>比较看重开发的效率性，会避免自己不熟悉的领域，开发比较快</li>\n<li>尽可能的寻找各种选型，会从前端的各种方面优化</li>\n</ol>\n<h3 id="缺点"><a href="#%E7%BC%BA%E7%82%B9" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>缺点</h3>\n<ol>\n<li>比较看重开发的效率性，会避免自己不熟悉的领域，少了一些技术上的尝试（新项目尝试新技术）</li>\n<li>对选型背景不够了解，选型的技术方案考虑的不够全面（加深知识的广度，了解一些后端、前端新知识）</li>\n<li>没有分析技术的优劣势，以及可能存在的风险（列出技术方案时应给出优缺点，以及实现的风险）</li>\n<li>基本没有考虑到代码的架构（适当关注一下代码架构）</li>\n<li>没有从多方面考虑，比如从后端、需求的角度（同样加深知识的广度）</li>\n<li>没有参考市面上同类产品已经成熟的技术（选型时注意参考市面上已有的成熟技术）</li>\n</ol>\n<h2 id="选型经验教训"><a href="#%E9%80%89%E5%9E%8B%E7%BB%8F%E9%AA%8C%E6%95%99%E8%AE%AD" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>选型经验教训</h2>\n<ol>\n<li>对于新的技术方案，先验证后使用，最好参考市面上同类已有的成熟技术</li>\n<li>深化知识广度，建立知识索引</li>\n<li>了解需求背景，有时可以从非技术的方面突破</li>\n<li>适度尝试新技术</li>\n</ol>',id:"/home/runner/work/GatsbyBlog/GatsbyBlog/blog/2019年技术选型总结/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2020-01-20 21:06:13",path:"/summary-of-technology-selection-in-2019/",tags:"前端, 技术选型, 总结",title:"2019年技术选型总结",draft:null}}],length:1,tag:"技术选型",pagesSum:1,page:1}}}});