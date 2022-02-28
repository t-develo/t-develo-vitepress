import{_ as n,c as s,o as a,a as p}from"./app.897c3e61.js";const _='{"title":"Vitepress","description":"","frontmatter":{},"headers":[{"level":2,"title":"Markdown Extensions","slug":"markdown-extensions"},{"level":2,"title":"Sidebar","slug":"sidebar"}],"relativePath":"Vitepress/index.md"}',t={},e=p(`<h1 id="vitepress" tabindex="-1">Vitepress <a class="header-anchor" href="#vitepress" aria-hidden="true">#</a></h1><p>Vuepress\u3092Vue3\u3001Vite\u5BFE\u5FDC\u3055\u305B\u305F\u3082\u306E\u3002</p><p>\u73FE\u5728\u958B\u767A\u4E2D\u3067\u3042\u308B\u305F\u3081\u3001\u3061\u3087\u304F\u3061\u3087\u304F\u5185\u5BB9\u304C\u5909\u308F\u308B\u3068\u601D\u3046\u3002</p><h2 id="markdown-extensions" tabindex="-1">Markdown Extensions <a class="header-anchor" href="#markdown-extensions" aria-hidden="true">#</a></h2><p>\u516C\u5F0F\u30B5\u30A4\u30C8\u3092\u898B\u308B\u306E\u304C\u65E9\u3044</p><p><a href="https://vitepress.vuejs.org/guide/markdown.html" target="_blank" rel="noopener noreferrer">Vitepress/Markdown Extensions</a></p><h2 id="sidebar" tabindex="-1">Sidebar <a class="header-anchor" href="#sidebar" aria-hidden="true">#</a></h2><p>.vitepress/sidebar.js\u3092\u4F5C\u6210\u3057\u3066\u3001config.js\u3067\u4E0B\u8A18\u306E\u3088\u3046\u306B\u8A2D\u5B9A\u3059\u308B</p><p>sidebar.js</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getGuideSidebar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;VitePress&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/Vitepress/&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;JavaScript&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Eslint&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/JavaScript/Eslint/&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getGuideSidebar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./sidebar&#39;</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token function">getGuideSidebar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u307E\u3041\u5225\u306B\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\u3092\u5916\u3060\u3057\u3057\u306A\u3044\u3067config.js\u3060\u3051\u3067\u3082\u5B9F\u73FE\u306F\u3067\u304D\u308B\u3002</p><p>\u95A2\u5FC3\u4E8B\u3092\u5206\u96E2\u3059\u308B\u5834\u5408\u306B\u306F\u3053\u3093\u306A\u611F\u3058\u306B\u3084\u308B\u3068\u826F\u3044\u3002</p>`,13),o=[e];function r(c,i,l,u,k,d){return a(),s("div",null,o)}var g=n(t,[["render",r]]);export{_ as __pageData,g as default};
