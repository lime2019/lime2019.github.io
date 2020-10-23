(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{637:function(s,n,a){"use strict";a.r(n);var t=a(2),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("本节为《狼书：更了不起的Node.js》读书笔记。")])]),s._v(" "),a("p",[s._v("使用"),a("code",[s._v("Node.js")]),s._v("进行开发，首先需要安装"),a("code",[s._v("Node.js")]),s._v("运行环境。之前一直就是简单的安装"),a("code",[s._v("Node.js")]),s._v("环境，偶尔会使用淘宝的源，今天看了之后，感觉帮助还是很大，整理一下个人使用的心得。")]),s._v(" "),a("p",[s._v("3m安装法：")]),s._v(" "),a("ul",[a("li",[s._v("nvm（node version mananger）：用于开发阶段，解决多版本共存、切换、测试等问题；")]),s._v(" "),a("li",[s._v("npm（node package mananger）：解决"),a("code",[s._v("Node.js")]),s._v("模块安装问题，其本身也是一个"),a("code",[s._v("Node.js")]),s._v("模块，每次安装都会内置某个版本的npm；")]),s._v(" "),a("li",[s._v("nrm（node registry mananger）：解决npm镜像访问慢的问题，提供测速、切换下载源的功能；")])]),s._v(" "),a("h2",{attrs:{id:"nvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nvm"}},[s._v("#")]),s._v(" nvm")]),s._v(" "),a("p",[s._v("nvm是一个开源的"),a("code",[s._v("Node.js")]),s._v("版本管理器，通过简单的shell脚本来管理和切换多个"),a("code",[s._v("Node.js")]),s._v("版本。")]),s._v(" "),a("p",[s._v("nvm中的常用命令：")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("See More")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\nnvm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置系统默认的Node.js版本")]),s._v("\nnvm "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" default\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换版本")]),s._v("\nnvm use\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出当前的本地版本")]),s._v("\nnvm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出远端可安装版本")]),s._v("\nnvm ls-remote\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一键安装全局模块")]),s._v("\nnvm reinstall-packages\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])]),s._v(" "),a("p",[a("code",[s._v("Node.js")]),s._v("版本中，奇数版本为尝试性的；偶数版本为LTS版本。")]),s._v(" "),a("h2",{attrs:{id:"npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[s._v("#")]),s._v(" npm")]),s._v(" "),a("h2",{attrs:{id:"nrm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nrm"}},[s._v("#")]),s._v(" nrm")]),s._v(" "),a("blockquote",[a("p",[s._v("nrm是一个npm源管理器，通过它可以快速在npm源之间进行切换。")])]),s._v(" "),a("p",[s._v("由于服务器位置的原因，可能有些时候npm官方源下载速度极慢，这个时候我们就需要使用国内的源了。目前一般是使用淘宝源。切换代码为：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前源")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换npm源")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry https://registry.npm.taobao.org/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("code",[s._v("nrm")]),s._v("可以简化这一过程，毕竟每次都去找还是很麻烦的。")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/nrm",target:"_blank",rel:"noopener noreferrer"}},[s._v("nrm相关信息"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("code",[s._v("nrm")]),s._v("的官方介绍："),a("code",[s._v("nrm")]),s._v("可以帮助你更加简单和快速的在不同"),a("code",[s._v("npm")]),s._v("源之间切换，当前包括："),a("code",[s._v("npm")]),s._v("、"),a("code",[s._v("cnpm")]),s._v("、"),a("code",[s._v("taobao")]),s._v("、"),a("code",[s._v("nj(nodejitsu)")]),s._v("...")]),s._v(" "),a("h3",{attrs:{id:"nrm安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nrm安装"}},[s._v("#")]),s._v(" nrm安装")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g nrm\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"nrm使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nrm使用"}},[s._v("#")]),s._v(" nrm使用")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("See More")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看源")]),s._v("\nnrm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前使用源")]),s._v("\nnrm current\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换源")]),s._v("\nnrm use "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("registry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加源")]),s._v("\nnrm use "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("registry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除源")]),s._v("\nnrm del "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("registry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试源")]),s._v("\nnrm "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("registry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])]),s._v(" "),a("p",[s._v("为了保证开发效率，企业在内网部署一套私有npm源是非常必要的，理由如下：")]),s._v(" "),a("ul",[a("li",[s._v("内网安装，安装速度快；")]),s._v(" "),a("li",[s._v("私有模块，仅供企业内部使用，更加安全；")]),s._v(" "),a("li",[s._v("适合多团队开发，前后端都可以使用私有源来进行管理；")])])])}),[],!1,null,null,null);n.default=e.exports}}]);