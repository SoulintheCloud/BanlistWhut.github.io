(window.webpackJsonp=window.webpackJsonp||[]).push([[374],{752:function(t,a,s){"use strict";s.r(a);var n=s(27),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"dubbo-中的序列化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dubbo-中的序列化"}},[t._v("#")]),t._v(" Dubbo 中的序列化")]),t._v(" "),s("p",[t._v("Dubbo RPC 是 Dubbo 体系中最核心的一种高性能、高吞吐量的远程调用方式，可以称之为多路复用的 TCP 长连接调用：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("长连接：")]),t._v(" 避免了每次调用新建 TCP 连接，提高了调用的响应速度")]),t._v(" "),s("li",[s("strong",[t._v("多路复用：")]),t._v(" 单个 TCP 连接可交替传输多个请求和响应的消息，降低了连接的等待闲置时间，从而减少了同样并发数下的网络连接数，提高了系统吞吐量")])]),t._v(" "),s("p",[t._v("Dubbo RPC 主要用于两个 Dubbo 系统之间的远程调用，特别适合高并发、小数据的互联网场景。而序列化对于远程调用的响应速度、吞吐量、网络带宽消耗等同样也起着至关重要的作用，是我们提升分布式系统性能的最关键因素之一。")]),t._v(" "),s("p",[t._v("Dubbo 中支持的序列化方式：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("dubbo 序列化：")]),t._v(" 阿里尚未开发成熟的高效 Java 序列化实现，阿里不建议在生产环境使用它")]),t._v(" "),s("li",[s("strong",[t._v("hessian2 序列化：")]),t._v(" hessian 是一种跨语言的高效二进制序列化方式。但这里实际不是原生的 hessian2 序列化，而是阿里修改过的 hessian lite，它是 dubbo RPC 默认启用的序列化方式")]),t._v(" "),s("li",[s("strong",[t._v("json 序列化：")]),t._v(" 目前有两种实现，一种是采用的阿里的 fastjson 库，另一种是采用 dubbo 中自己实现的简单 json 库，但其实现都不是特别成熟，而且 json 这种文本序列化性能一般不如上面两种二进制序列化。")]),t._v(" "),s("li",[s("strong",[t._v("java 序列化：")]),t._v(" 主要是采用 JDK 自带的 Java 序列化实现，性能很不理想。")])]),t._v(" "),s("p",[t._v("在通常情况下，这四种主要序列化方式的性能从上到下依次递减。对于 dubbo RPC 这种追求高性能的远程调用方式来说，实际上只有 1、2 两种高效序列化方式比较般配，而第 1 个 dubbo 序列化由于还不成熟，所以实际只剩下 2 可用，所以 dubbo RPC 默认采用 hessian2 序列化。")]),t._v(" "),s("p",[t._v("但 hessian 是一个比较老的序列化实现了，而且它是跨语言的，所以不是单独针对 Java 进行优化的。而 dubbo RPC 实际上完全是一种 Java to Java 的远程调用，其实没有必要采用跨语言的序列化方式（当然肯定也不排斥跨语言的序列化）。")]),t._v(" "),s("p",[t._v("最近几年，各种新的高效序列化方式层出不穷，不断刷新序列化性能的上限，最典型的包括：")]),t._v(" "),s("ul",[s("li",[t._v("专门针对 Java 语言的："),s("strong",[t._v("Kryo")]),t._v("，FST 等等")]),t._v(" "),s("li",[t._v("跨语言的：Protostuff，ProtoBuf，"),s("strong",[t._v("Thrift")]),t._v("，Avro，MsgPack 等等")])]),t._v(" "),s("p",[t._v("这些序列化方式的性能多数都显著优于 hessian2（甚至包括尚未成熟的 dubbo 序列化），有鉴于此，我们为 dubbo 引入 Kryo 和 FST 这两种高效 Java 序列化实现，来逐步取代 hessian2。")]),t._v(" "),s("p",[t._v("其中，Kryo 是一种非常成熟的序列化实现，已经在 Twitter、Groupon、Yahoo 以及多个著名开源项目（如 Hive、Storm）中广泛的使用。而 FST 是一种较新的序列化实现，目前还缺乏足够多的成熟使用案例。")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("注意：")]),t._v(" 在面向生产环境的应用中，目前更优先选择 Kryo")])]),t._v(" "),s("h2",{attrs:{id:"启用-kryo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启用-kryo"}},[t._v("#")]),t._v(" 启用 Kryo")]),t._v(" "),s("p",[t._v("在 Provider 和 Consumer 项目启用 Kryo 高速序列化功能，两个项目的配置方式相同")]),t._v(" "),s("h3",{attrs:{id:"pom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pom"}},[t._v("#")]),t._v(" POM")]),t._v(" "),s("p",[t._v("增加 "),s("code",[t._v("org.apache.dubbo:dubbo-serialization-kryo")]),t._v(" 依赖")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("properties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dubbo-kryo.version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.7.2"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dubbo-kryo.version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("properties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.apache.dubbo"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("dubbo-serialization-kryo"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${dubbo-kryo.version}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"application-yml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#application-yml"}},[t._v("#")]),t._v(" application.yml")]),t._v(" "),s("p",[t._v("增加 "),s("code",[t._v("dubbo.protocol.serialization=kryo")]),t._v(" 配置")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dubbo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("protocol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serialization")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kryo\n")])])]),s("h3",{attrs:{id:"序列化类说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#序列化类说明"}},[t._v("#")]),t._v(" 序列化类说明")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("注意：")]),t._v(" 想要使用 Kryo 序列化只需要 DTO/Domain/Entity 这类传输对象实现序列化接口即可，无需额外再做配置，如："),s("code",[t._v("public class User implements Serializable{}")])])]),t._v(" "),s("p",[t._v("在对一个类做序列化的时候，可能还级联引用到很多类，比如 Java 集合类。针对这种情况，Dubbo 已经自动将 JDK 中的常用类进行了注册，包括：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GregorianCalendar\nInvocationHandler\nBigDecimal\nBigInteger\nPattern\nBitSet\nURI\nUUID\nHashMap\nArrayList\nLinkedList\nHashSet\nTreeSet\nHashtable\nDate\nCalendar\nConcurrentHashMap\nSimpleDateFormat\nVector\nBitSet\nStringBuffer\nStringBuilder\nObject\nObject[]\nString[]\nbyte[]\nchar[]\nint[]\nfloat[]\ndouble[]\n")])])]),s("p",[t._v("由于注册被序列化的类仅仅是出于性能优化的目的，所以即使你忘记注册某些类也没有关系。事实上，即使不注册任何类，Kryo 和 FST 的性能依然普遍优于 hessian 和 dubbo 序列化。")]),t._v(" "),s("h2",{attrs:{id:"附-扩展阅读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#附-扩展阅读"}},[t._v("#")]),t._v(" 附：扩展阅读")]),t._v(" "),s("h3",{attrs:{id:"序列化性能分析与测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#序列化性能分析与测试"}},[t._v("#")]),t._v(" 序列化性能分析与测试")]),t._v(" "),s("h4",{attrs:{id:"测试环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试环境"}},[t._v("#")]),t._v(" 测试环境")]),t._v(" "),s("ul",[s("li",[t._v("两台独立服务器")]),t._v(" "),s("li",[t._v("4 核 Intel(R) Xeon(R) CPU E5-2603 0 @ 1.80GHz")]),t._v(" "),s("li",[t._v("8G 内存")]),t._v(" "),s("li",[t._v("虚拟机之间网络通过百兆交换机")]),t._v(" "),s("li",[t._v("CentOS 5")]),t._v(" "),s("li",[t._v("JDK 7")]),t._v(" "),s("li",[t._v("Tomcat 7")]),t._v(" "),s("li",[t._v("JVM 参数 "),s("code",[t._v("-server -Xms1g -Xmx1g -XX:PermSize=64M -XX:+UseConcMarkSweepGC")])])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("注意：")]),t._v(" 当然这个测试环境较有局限，故当前测试结果未必有非常权威的代表性")])]),t._v(" "),s("h4",{attrs:{id:"测试脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试脚本"}},[t._v("#")]),t._v(" 测试脚本")]),t._v(" "),s("p",[t._v("和 dubbo 自身的基准测试保持接近，10 个并发客户端持续不断发出请求：")]),t._v(" "),s("ul",[s("li",[t._v("传入嵌套复杂对象（但单个数据量很小），不做任何处理，原样返回")]),t._v(" "),s("li",[t._v("传入 50K 字符串，不做任何处理，原样返回（TODO：结果尚未列出）")])]),t._v(" "),s("p",[t._v("进行 5 分钟性能测试。（引用 dubbo 自身测试的考虑：“主要考察序列化和网络 IO 的性能，因此服务端无任何业务逻辑。"),s("strong",[t._v("取 10 并发是考虑到 HTTP 协议在高并发下对 CPU 的使用率较高可能会先达到瓶颈。")]),t._v("”）")]),t._v(" "),s("h4",{attrs:{id:"dubbo-rpc-中不同序列化生成字节大小比较"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dubbo-rpc-中不同序列化生成字节大小比较"}},[t._v("#")]),t._v(" Dubbo RPC 中不同序列化生成字节大小比较")]),t._v(" "),s("p",[t._v("序列化生成字节码的大小是一个比较有确定性的指标，它决定了远程调用的网络传输时间和带宽占用。针对复杂对象的结果如下（数值越小越好）：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://www.qfdmy.com/wp-content/uploads/2019/08/9f13cfc86553e42.png",alt:"img"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"http://www.qfdmy.com/wp-content/uploads/2019/08/4b3a6218bb3e3a7.png",alt:"img"}})]),t._v(" "),s("h4",{attrs:{id:"dubbo-rpc-中不同序列化响应时间和吞吐量对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dubbo-rpc-中不同序列化响应时间和吞吐量对比"}},[t._v("#")]),t._v(" Dubbo RPC 中不同序列化响应时间和吞吐量对比")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://www.qfdmy.com/wp-content/uploads/2019/08/14fdadbbd525f56.png",alt:"img"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"http://www.qfdmy.com/wp-content/uploads/2019/08/822050d9ae3c47f.png",alt:"img"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"http://www.qfdmy.com/wp-content/uploads/2019/08/339a57d16284b3a.png",alt:"img"}})]),t._v(" "),s("h4",{attrs:{id:"结论"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[t._v("#")]),t._v(" 结论")]),t._v(" "),s("p",[t._v("就目前结果而言，我们可以看到不管从生成字节的大小，还是平均响应时间和平均 TPS，Kryo 和 FST 相比 Dubbo RPC 中原有的序列化方式都有非常显著的改进。")])])}),[],!1,null,null,null);a.default=r.exports}}]);