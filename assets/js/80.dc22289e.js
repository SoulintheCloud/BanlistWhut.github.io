(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{457:function(t,s,a){"use strict";a.r(s);var n=a(27),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"svg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#svg"}},[t._v("#")]),t._v(" SVG")]),t._v(" "),a("h2",{attrs:{id:"始于svg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#始于svg"}},[t._v("#")]),t._v(" 始于SVG")]),t._v(" "),a("p",[t._v("可缩放矢量图形（Scalable Vector Graphics，SVG）是一种基于可扩展标记语言（XML），用于描述二维矢量图形的图形格式。")]),t._v(" "),a("p",[a("code",[t._v("D3")]),t._v(" 是一个可以基于数据来操作文档的 JavaScript 库。可以使用 HTML、CSS、SVG 以及 Canvas 来展示数据。")]),t._v(" "),a("blockquote",[a("p",[t._v("配合 Vue 使用时常用 computed 属性，以数据驱动数据。")])]),t._v(" "),a("h3",{attrs:{id:"_1-svg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-svg"}},[t._v("#")]),t._v(" 1. svg")]),t._v(" "),a("p",[a("code",[t._v("svg")]),t._v(" 元素（容器元素、结构元素）可以在文档内嵌套一个独立的 "),a("code",[t._v("svg")]),t._v(" 片段，这个片段具有独立的视口和坐标系统。"),a("code",[t._v("svg")]),t._v(" 嵌套时彼此的视口和坐标系统也独立。")]),t._v(" "),a("p",[t._v("其 "),a("code",[t._v("xmlns")]),t._v(" 属性定义了命名空间，可以区别与 HTML 冲突的元素。")]),t._v(" "),a("h3",{attrs:{id:"_2-g"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-g"}},[t._v("#")]),t._v(" 2. g")]),t._v(" "),a("p",[a("code",[t._v("g")]),t._v(" 元素常用于对图形进行分组，添加到 "),a("code",[t._v("g")]),t._v(" 元素上的变换会应用到所有的子元素上。")]),t._v(" "),a("p",[t._v("此外，最重要的一点是可以利用 "),a("code",[t._v("use")]),t._v(" 来对元素进行复用。")]),t._v(" "),a("h3",{attrs:{id:"_3-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-path"}},[t._v("#")]),t._v(" 3. path")]),t._v(" "),a("p",[a("code",[t._v("path")]),t._v(" 是 SVG 基本形状中最强大的一个。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("移动（Move to，M）：")]),t._v(" "),a("p",[a("code",[t._v('<path d="M10 10"/>')]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("划线（Line，L）：")]),t._v(" "),a("p",[t._v("简写，"),a("code",[t._v("H")]),t._v(" 绘制水平线，"),a("code",[t._v("V")]),t._v(" 绘制垂直线，"),a("code",[t._v('<path d="M10 10 H 90 V 90 H 10 L 10 10"/>')]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("闭合路径（Z）：")]),t._v(" "),a("p",[a("code",[t._v('<path d="M10 10 H 90 V 90 H 10 Z" fill="transparent" stroke="black"/>')]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("曲线（C）：")]),t._v(" "),a("p",[t._v("三次贝塞尔曲线需要定义一个点和两个控制点，"),a("code",[t._v('<path d="M10 10 C 20 20, 40 20, 50 10" stroke="black" fill="transparent"/>')]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("更长的曲线（S）：")]),t._v(" "),a("p",[t._v("S 命令跟在一个 C 或 S 命令后面时，则它的第一个控制点会被假设为前一个命令曲线的第二个控制点的中心对称点。")]),t._v(" "),a("p",[t._v("同理可得二次贝塞尔曲线（Q）和对应的 （T）。")])]),t._v(" "),a("li",[a("p",[t._v("弧形（A）：")]),t._v(" "),a("p",[t._v("弧形可视为圆形或椭圆的一部分，"),a("code",[t._v('<path d="M80 80 A 45 45, 0, 0, 0, 125 125 L 125 80 Z" fill="green"/>')]),t._v("。")])])]),t._v(" "),a("h3",{attrs:{id:"_3-basic-shapes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-basic-shapes"}},[t._v("#")]),t._v(" 3. basic shapes")]),t._v(" "),a("p",[a("code",[t._v("rect")]),t._v("、"),a("code",[t._v("circle")]),t._v("、"),a("code",[t._v("Ellipse")]),t._v("、"),a("code",[t._v("Line")]),t._v("、"),a("code",[t._v("Polyline")]),t._v("、"),a("code",[t._v("Path")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"svg-样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#svg-样式"}},[t._v("#")]),t._v(" SVG 样式")]),t._v(" "),a("p",[t._v("SVG 支持的样式方式与 CSS 相似：内联样式、内部样式表、外部样式表及表现属性。")]),t._v(" "),a("h3",{attrs:{id:"_1-内联样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-内联样式"}},[t._v("#")]),t._v(" 1. 内联样式")]),t._v(" "),a("p",[t._v("元素内部使用 style 属性即可。")]),t._v(" "),a("h3",{attrs:{id:"_2-内部样式表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-内部样式表"}},[t._v("#")]),t._v(" 2. 内部样式表")]),t._v(" "),a("p",[t._v("内部样式定义在 "),a("code",[t._v("svg")]),t._v(" 元素下的 "),a("code",[t._v("def")]),t._v(" 元素中。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("<svg width="),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v('"200px" height="200px" xmlns="http://www.w3.org/2000/svg>\n  <defs>\n    <style type="text/css"><![CDATA[\n      circle')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("#ccc\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    ]]></style>\n  </defs>\n  <circle cx="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10"')]),t._v(" cy="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10"')]),t._v(" r="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5"')]),t._v("/>\n</svg>\n")])])]),a("h3",{attrs:{id:"_3-外部样式表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-外部样式表"}},[t._v("#")]),t._v(" 3. 外部样式表")]),t._v(" "),a("p",[t._v("样式定义在 CSS 文件中，使用选择器来设置相应的样式。")]),t._v(" "),a("h3",{attrs:{id:"_4-表现属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-表现属性"}},[t._v("#")]),t._v(" 4. 表现属性")]),t._v(" "),a("p",[t._v("以属性的形式指定样式，但是优先级最低，易被其余样式方式覆盖。")]),t._v(" "),a("h2",{attrs:{id:"d3-概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#d3-概念"}},[t._v("#")]),t._v(" D3 概念")]),t._v(" "),a("p",[t._v("随着代码量的增多，越来越理解到设计理念的区别，一如 jQuery 的 DOM 操作，一如 MVVM 框架的数据驱动，理解了这些概念再学习起来才算是找到了门路。")]),t._v(" "),a("p",[t._v("然而一般只有熟悉某一个后才能切身体会到它的设计理念，所以目前关于其概念为空。")]),t._v(" "),a("h3",{attrs:{id:"_1-选择集-selections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-选择集-selections"}},[t._v("#")]),t._v(" 1. 选择集（Selections）")]),t._v(" "),a("p",[t._v("与 jQuery 的 "),a("code",[t._v("$")]),t._v(" 基本一致。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d3\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".selection-binding"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 仅选中匹配的第一个元素")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("selectAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 选中所有匹配的元素")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dataset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 插入数据")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-enter-和-exit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-enter-和-exit"}},[t._v("#")]),t._v(" 2. enter 和 exit")]),t._v(" "),a("blockquote",[a("p",[t._v("其中留给人印象最深的莫过于这两个方法。")])]),t._v(" "),a("p",[t._v("在利用数据绑定时，可能出现 DOM 元素不匹配的问题。"),a("code",[t._v("enter")]),t._v(" 操作用于添加新的 DOM 元素，"),a("code",[t._v("exit")]),t._v(" 操作用于移除多余的 DOM 元素。")]),t._v(" "),a("p",[t._v("然而实际应用中，不可能先去统计元素的个数，记住以数据驱动的思想。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("d3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"body"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("selectAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("enter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I’m number "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);