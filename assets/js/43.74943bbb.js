(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{421:function(t,s,n){"use strict";n.r(s);var a=n(27),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"配置格式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置格式"}},[t._v("#")]),t._v(" 配置格式")]),t._v(" "),n("p",[t._v("基本的 Nginx 文件由若干个部分组成，每个部分都是通过下列的方法定义的。")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("section"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("directive"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("parameters"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("；\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("大括号实际上表示一个新上下文（context），需要注意的是，每一个指令行需要使用 "),n("code",[t._v(";")]),t._v(" 来进行结束。")]),t._v(" "),n("h2",{attrs:{id:"nginx-conf"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-conf"}},[t._v("#")]),t._v(" nginx.conf")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /etc/nginx/nginx.conf\n")])])]),n("p",[t._v("获取内容如下：")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置 worker 进程的用户和组，默认是 nginx")]),t._v("\nuser  nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Nginx 进程，一般设置为和 CPU 核数一致，示例的阿里云学生机为 1 核")]),t._v("\nworker_processes  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 错误日志存放目录，指令的第二个参数表示被记录错误的级别")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 错误级别：debug、info、notice、warn、error 等")]),t._v("\nerror_log  /var/log/nginx/error.log warn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置记录主进程 ID 的文件")]),t._v("\npid        /var/run/nginx.pid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nevents "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单个进程最大并发数")]),t._v("\n    worker_connections  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 主要配置文件")]),t._v("\nhttp "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文件扩展名与类型映射表")]),t._v("\n    include       /etc/nginx/mime.types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认文件类型")]),t._v("\n    default_type  application/octet-stream"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置日志格式：访问地址-访问用户-本地事件-请求")]),t._v("\n    log_format  main  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")]),t._v(" - "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_user")]),t._v(" ["),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$time_local")]),t._v('] "'),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),t._v("\" '")]),t._v("\n                      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$status")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$body_bytes_sent")]),t._v(' "'),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_referer")]),t._v("\" '")]),t._v("\n                      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\""),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_user_agent")]),t._v('" "'),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_x_forwarded_for")]),t._v("\"'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 访问日志")]),t._v("\n    access_log  /var/log/nginx/access.log  main"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 直接复制数据从一个文件到另一个文件描述符")]),t._v("\n    sendfile        on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 仅依赖于 sendfile 的使用")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在一个数据包中尝试发送响应头，以及在数据包中发送一个完整的文件")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#tcp_nopush     on;")]),t._v("\n\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 保持连接的时间（超时时间）")]),t._v("\n    keepalive_timeout  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("65")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启 gzip 压缩")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#gzip  on;")]),t._v("\n\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当前文件为 Nginx 主配置文件（入口），控制子配置项位置和文件")]),t._v("\n    include /etc/nginx/conf.d/*.conf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"default-conf"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#default-conf"}},[t._v("#")]),t._v(" default.conf")]),t._v(" "),n("p",[t._v("在主配置文件（nginx.conf）中可以看到子配置项所在的目录：")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# include /etc/nginx/conf.d/*.conf;")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看该目录下的文件：")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" /etc/nginx/conf.d/\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# default.conf # 默认")]),t._v("\n")])])]),n("h3",{attrs:{id:"_1-解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-解析"}},[t._v("#")]),t._v(" 1. 解析")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /etc/nginx/conf.d/default.conf\n")])])]),n("p",[t._v("获取内容如下：")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 任何由关键字 server 的部分都被称为 “虚拟服务器”")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一个虚拟服务器由 listen 和 server_name 指令组合定义")]),t._v("\nserver "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 监听端口")]),t._v("\n    listen       "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 监听域名")]),t._v("\n    server_name  localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#charset koi8-r;")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#access_log  /var/log/nginx/host.access.log  main;")]),t._v("\n\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# location 指令可以用在虚拟服务器 server 部分，并且意味着来自客户端的 URI 或者内部重定向访问")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# location 定义： location [modifier] uri {...}")]),t._v("\n    location / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 服务默认启动目录")]),t._v("\n        root   /usr/share/nginx/html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认文件格式")]),t._v("\n        index  index.html index.htm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#error_page  404              /404.html;")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# redirect server error pages to the static page /50x.html")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 错误状态码对应的页面")]),t._v("\n    error_page   "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("502")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("503")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("504")]),t._v("  /50x.html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对应页面的路径")]),t._v("\n    location "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /50x.html "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        root   /usr/share/nginx/html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# proxy the PHP scripts to Apache listening on 127.0.0.1:80")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#location ~ \\.php$ {")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    proxy_pass   http://127.0.0.1;")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#location ~ \\.php$ {")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    root           html;")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    fastcgi_pass   127.0.0.1:9000;")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    fastcgi_index  index.php;")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    include        fastcgi_params;")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# deny access to .htaccess files, if Apache's document root")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# concurs with nginx's one")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#location ~ /\\.ht {")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    deny  all;")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);