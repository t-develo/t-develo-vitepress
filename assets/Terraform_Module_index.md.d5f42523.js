import{_ as e,c as n,o,a}from"./app.baf1138c.js";const g='{"title":"\u30E2\u30B8\u30E5\u30FC\u30EB\u3067\u30EA\u30BD\u30FC\u30B9\u3092\u5B9A\u7FA9\u3059\u308B","description":"","frontmatter":{},"headers":[{"level":2,"title":"How to use","slug":"how-to-use"}],"relativePath":"Terraform/Module/index.md"}',t={},u=a(`<h1 id="\u30E2\u30B8\u30E5\u30FC\u30EB\u3067\u30EA\u30BD\u30FC\u30B9\u3092\u5B9A\u7FA9\u3059\u308B" tabindex="-1">\u30E2\u30B8\u30E5\u30FC\u30EB\u3067\u30EA\u30BD\u30FC\u30B9\u3092\u5B9A\u7FA9\u3059\u308B <a class="header-anchor" href="#\u30E2\u30B8\u30E5\u30FC\u30EB\u3067\u30EA\u30BD\u30FC\u30B9\u3092\u5B9A\u7FA9\u3059\u308B" aria-hidden="true">#</a></h1><p>\u5229\u7528\u3057\u305F\u3044\u30EA\u30BD\u30FC\u30B9\u3092\u30E2\u30B8\u30E5\u30FC\u30EB\u3068\u3057\u3066\u5B9A\u7FA9\u3059\u308B\u3053\u3068\u3067\u3001\u540C\u3058\u30C6\u30F3\u30D7\u30EC\u3092\u4F7F\u3044\u307E\u308F\u3057\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3002 \u4F3C\u305F\u3088\u3046\u306A\u30EA\u30BD\u30FC\u30B9\u3092\u8907\u6570\u4F5C\u6210\u3057\u305F\u3044\u3068\u304D\u306B\u4FBF\u5229\u3002 \u305D\u306E\u307B\u304B\u95A2\u5FC3\u4E8B\u306E\u5206\u96E2\u306B\u3082\u4E00\u5F79\u8CB7\u3046\u306E\u3067\u3001\u5206\u5272\u3057\u3066\u304A\u3044\u3066\u640D\u306F\u306A\u3044\u3002</p><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a></h2><p>\u69CB\u9020\u306F\u3053\u3093\u306A\u611F\u3058</p><div class="language-"><pre><code>.
\u2523 module
\u2503  \u2523 hoge
\u2503  \u2503  \u2523 main.tf
\u2503  \u2503  \u2523 variables.tf
\u2503  \u2503  \u2517 output.tf
\u2503  \u2517 fuga
\u2503     \u2523 main.tf
\u2503     \u2523 variables.tf
\u2503     \u2517 output.tf
\u2523 main.tf
\u2523 variable.tf
\u2517 output.tf
</code></pre></div><p>./main.tf</p><div class="language-yaml"><pre><code>module &quot;hoge_resource&quot; <span class="token punctuation">{</span>
    source = &quot;./module/hoge&quot;
<span class="token punctuation">}</span>

module &quot;fuga_resource_prod&quot; <span class="token punctuation">{</span>
    source = &quot;./module/fuga&quot;
    hoge_env = module.hoge_resource.env
<span class="token punctuation">}</span>

module &quot;fuga_resource_dev&quot; <span class="token punctuation">{</span>
    source = &quot;./module/fuga&quot;
<span class="token punctuation">}</span>
</code></pre></div><p>./variable.tf</p><div class="language-yaml"><pre><code>variable &quot;hoge_env&quot; <span class="token punctuation">{</span>
    default = &quot;hogehoge&quot;
<span class="token punctuation">}</span>
</code></pre></div><p>./module/hoge/main.tf</p><div class="language-yaml"><pre><code>resource &quot;hoge&quot; &quot;hoge_resource&quot; <span class="token punctuation">{</span>
    env = var.hoge_env
<span class="token punctuation">}</span>
</code></pre></div><p>./module/hoge/variable.tf</p><div class="language-yaml"><pre><code>variable &quot;hoge_env&quot; <span class="token punctuation">{</span>
    default = &quot;hogehoge&quot;
<span class="token punctuation">}</span>
</code></pre></div><p>./module/hoge/output.tf</p><div class="language-yaml"><pre><code>output &quot;env&quot; <span class="token punctuation">{</span>
    value = hoge.hoge_resource.env
<span class="token punctuation">}</span>
</code></pre></div>`,15),s=[u];function p(c,r,l,d,i,h){return o(),n("div",null,s)}var v=e(t,[["render",p]]);export{g as __pageData,v as default};
