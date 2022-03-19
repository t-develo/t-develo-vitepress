import{_ as n,c as s,o as a,a as p}from"./app.baf1138c.js";const g='{"title":"Navbar","description":"","frontmatter":{},"headers":[],"relativePath":"VitePress/Navbar/index.md"}',t={},e=p(`<h1 id="navbar" tabindex="-1">Navbar <a class="header-anchor" href="#navbar" aria-hidden="true">#</a></h1><p>\u30DA\u30FC\u30B8\u4E0A\u90E8\u306E\u30CA\u30D3\u3092\u8A2D\u5B9A\u3059\u308B\u65B9\u6CD5</p><p>\u57FA\u672C\u30B3\u30F3\u30BB\u30D7\u30C8\u306F\u30B5\u30A4\u30C9\u30D0\u30FC\u3068\u540C\u3058 \u4E00\u90E8\u30D7\u30ED\u30D1\u30C6\u30A3\u540D\u304C\u9055\u3046\u3060\u3051</p><p>navbar.js</p><div class="language-javascript"><pre><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getGuideNavbar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Pages&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://t-develo.github.io/t-develo-vitepress/&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Repos&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://github.com/t-develo/t-develo-vitepress&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u516C\u5F0F&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u30B5\u30A4\u30C8&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://vitepress.vuejs.org/guide/getting-started.html&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Git&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;https://github.com/vuejs/vitepress&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>config.js</p><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getGuideNavbar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./navbar.js&#39;</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&#39;ja&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;VitePress Pages&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/t-develo-vitepress/&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">nav</span><span class="token operator">:</span> <span class="token function">getGuideNavbar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,7),o=[e];function r(c,l,i,u,k,d){return a(),s("div",null,o)}var v=n(t,[["render",r]]);export{g as __pageData,v as default};
