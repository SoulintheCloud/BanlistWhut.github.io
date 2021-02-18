(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{601:function(t,s,a){"use strict";a.r(s);var n=a(27),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"安装-gitlab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-gitlab"}},[t._v("#")]),t._v(" 安装 gitlab")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建数据目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /srv/gitlab/config /srv/gitlab/logs /srv/gitlab/data\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\ntree /srv\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 gitlab")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" docker run --detach "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --restart always "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --hostname gitlab.example.com "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注意修改 22 为 30022 后，利用 git 协议下载需指定其端口才可以下载，例如 git clone ssh://git@xxx.gitlab.com:port/.../xxx.git")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可配置 ssh config 指定端口，减少操作")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 而 http 协议可正常下载（其实是因为 nginx 转了一层，否则也是得修改的）")]),t._v("\n  --publish "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30443")]),t._v(":443 --publish "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30080")]),t._v(":80 --publish "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30022")]),t._v(":22 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --volume /srv/gitlab/config:/etc/gitlab "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --volume /srv/gitlab/logs:/var/log/gitlab "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --volume /srv/gitlab/data:/var/opt/gitlab "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --name gitlab "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  gitlab/gitlab-ce\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\ndocker "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -tunlp\n")])])]),a("p",[t._v("最后打开浏览器来验证。")]),t._v(" "),a("h2",{attrs:{id:"邮件服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#邮件服务"}},[t._v("#")]),t._v(" 邮件服务")]),t._v(" "),a("p",[t._v("多家对比后选择了"),a("a",{attrs:{href:"https://exmail.qq.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("腾讯企业邮箱"),a("OutboundLink")],1),t._v("，依次进入 "),a("code",[t._v("邮箱 => 邮箱设置 => 收发信设置 => 开启IMAP/SMTP服务")]),t._v("，再回到 "),a("code",[t._v("邮箱设置 => 邮箱绑定 => 安全登录")]),t._v(" 获取授权码即可（至于配置域名，邮件配置可另行谷歌）。")]),t._v(" "),a("h3",{attrs:{id:"_1-修改配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-修改配置"}},[t._v("#")]),t._v(" 1. 修改配置")]),t._v(" "),a("p",[t._v("找到 "),a("code",[t._v("Email Settings")]),t._v(" 在后面追加对应的 "),a("code",[t._v("SMTP")]),t._v(" 配置。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /srv/gitlab/config/gitlab.rb\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启 SMTP 功能")]),t._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'smtp_enable'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'smtp_address'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"smtp.exmail.qq.com"')]),t._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'smtp_port'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("465")]),t._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'smtp_user_name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name@domain.com"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 邮件发送人")]),t._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gitlab_email_from'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name@domain.com"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 与 smtp_user_name 一致")]),t._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'smtp_password'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取的授权码")]),t._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'smtp_domain'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"exmail.qq.com"')]),t._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'smtp_authentication'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"login"')]),t._v("\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'smtp_enable_starttls_auto'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\ngitlab_rails"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'smtp_tls'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n")])])]),a("h3",{attrs:{id:"_2-验证服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-验证服务"}},[t._v("#")]),t._v(" 2. 验证服务")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 以命令形式重新加载配置，也可进入容器后手动执行")]),t._v("\ndocker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" gitlab gitlab-ctl reconfigure\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入 gitlab 容器")]),t._v("\ndocker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it gitlab "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启 gitlab-rails")]),t._v("\ngitlab-rails console\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 测试邮件发送，可换为自己的邮箱")]),t._v("\nNotify.test_email"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'someone@example.com'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Message Subject'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Message Body'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".deliver_now\n")])])]),a("p",[t._v("等待邮件发送到自己的邮箱后即可。")]),t._v(" "),a("h2",{attrs:{id:"hostname"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hostname"}},[t._v("#")]),t._v(" hostname")]),t._v(" "),a("p",[a("code",[t._v("hostname")]),t._v(" 会影响仓库下载、用户注册邀请等问题。")]),t._v(" "),a("p",[t._v("在安装 "),a("code",[t._v("gitlab")]),t._v(" 时为其设置 "),a("code",[t._v("hostname")]),t._v(" 为 "),a("code",[t._v("gitlab.example.com")]),t._v("，此处还需要修改为你对应的域名或 "),a("code",[t._v("ip")]),t._v(" 地址。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /srv/gitlab/config/gitlab.rb\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置 external_url")]),t._v("\nexternal_url "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://gitlab.example.com'")]),t._v("\n")])])]),a("h2",{attrs:{id:"备份与恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备份与恢复"}},[t._v("#")]),t._v(" 备份与恢复")]),t._v(" "),a("p",[t._v("由于开始就将数据卷挂载到 "),a("code",[t._v("/srv/gitlab")]),t._v(" 下，所以备份的数据也会在该目录的 "),a("code",[t._v("/srv/gitlab/data/backups")]),t._v(" 中。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入容器")]),t._v("\ndocker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it gitlab "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 备份指令")]),t._v("\ngitlab-rake gitlab:backup:create\n")])])]),a("p",[t._v("更好的形式是定期备份：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("crontab")]),t._v(" -e\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 周末凌晨4点备份")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" * * "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" gitlab-rake gitlab:backup:create "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&>")]),t._v(" /dev/null\n")])])]),a("p",[t._v("根据备份恢复数据：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 停止服务")]),t._v("\ngitlab-ctl stop unicorn "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 应用服务器")]),t._v("\ngitlab-ctl stop sidekiq "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 后台异步任务队列")]),t._v("\ngitlab-ctl status "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定数据")]),t._v("\ngitlab-rake gitlab:backup:restore "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BACKUP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1607523472_2020_12_09_13.2.1\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);