(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{556:function(_,v,e){"use strict";e.r(v);var t=e(27),a=Object(t.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("p",[_._v("该项仅在虚拟机下进行测试，与实体机有一定区别。")]),_._v(" "),e("h2",{attrs:{id:"准备环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备环境"}},[_._v("#")]),_._v(" 准备环境")]),_._v(" "),e("ul",[e("li",[_._v("虚拟机：VirtualBox（6.0.10）")])]),_._v(" "),e("h2",{attrs:{id:"新增磁盘工作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新增磁盘工作"}},[_._v("#")]),_._v(" 新增磁盘工作")]),_._v(" "),e("p",[_._v("事情的开始你需要有一块磁盘。")]),_._v(" "),e("h3",{attrs:{id:"_1-操作步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-操作步骤"}},[_._v("#")]),_._v(" 1. 操作步骤")]),_._v(" "),e("ol",[e("li",[_._v("打开虚拟机；")]),_._v(" "),e("li",[_._v("在界面中点击设置并选中存储；")]),_._v(" "),e("li",[_._v("可以选择已有的控制器也可以新建控制器，点击添加存储附件（虚拟硬盘）；")]),_._v(" "),e("li",[_._v("控制器选项有 SAS、SATA、IDE（古老的存在，现在很少用了），控制器即对应不同类型的硬盘；")]),_._v(" "),e("li",[_._v("创建新的虚拟盘，默认 VDI 文件类型，动态分配；")]),_._v(" "),e("li",[_._v("分配期望的大小；")]),_._v(" "),e("li",[_._v("确认创建。")])]),_._v(" "),e("h2",{attrs:{id:"磁盘进行-raid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#磁盘进行-raid"}},[_._v("#")]),_._v(" 磁盘进行 RAID")]),_._v(" "),e("p",[_._v("为了数据更安全，更快捷，需要进行 "),e("a",{attrs:{href:"/os/linux/raid"}},[_._v("RAID")]),_._v("。")]),_._v(" "),e("p",[_._v("此处缺乏 RAID 实践，以后可能会补上，参考资料：")]),_._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"http://www.iyunwei.com/docs/sysadmin_command/CentOS6.3%E4%B8%8B%E9%85%8D%E7%BD%AE%E8%BD%AFRAID.pdf",target:"_blank",rel:"noopener noreferrer"}},[_._v("CentOS 6.3 下配置软 RAID"),e("OutboundLink")],1),_._v("；")]),_._v(" "),e("li",[e("a",{attrs:{href:"https://www.intel.cn/content/www/cn/zh/support/articles/000006748/boards-and-kits/desktop-boards.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("Intel 主板中 BIOS 中启用 RAID"),e("OutboundLink")],1),_._v("；")])]),_._v(" "),e("p",[_._v("需要补充的是，虽然很多资料都说明硬件 RAID 更具优势，但是在现在高速 Nvme 硬盘的情况下是否依然效率更高呢 👦？")]),_._v(" "),e("h2",{attrs:{id:"磁盘分区工作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#磁盘分区工作"}},[_._v("#")]),_._v(" 磁盘分区工作")]),_._v(" "),e("p",[_._v("磁盘是按柱面进行分区的，磁盘分区信息登记的地点为"),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E4%B8%BB%E5%BC%95%E5%AF%BC%E8%AE%B0%E5%BD%95",target:"_blank",rel:"noopener noreferrer"}},[_._v("磁盘分区表"),e("OutboundLink")],1),_._v("，磁盘分区表存放位置为 0 磁道 0 柱面 1 扇区。")]),_._v(" "),e("p",[_._v("该扇区（1 扇区）划分为，前 446 字节为系统引导信息，中间 64 字节为分区表，后 2 字节为分区结束标识。")]),_._v(" "),e("p",[_._v("修改磁盘分区常用工具为：")]),_._v(" "),e("ul",[e("li",[_._v("fdisk：处理 MBR 分区，MBR 分区小于 2T；")]),_._v(" "),e("li",[_._v("parted：处理 GPT 分区，GPT 分区大于 2T。")])]),_._v(" "),e("h3",{attrs:{id:"_1-操作步骤-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-操作步骤-2"}},[_._v("#")]),_._v(" 1. 操作步骤")]),_._v(" "),e("ol",[e("li",[_._v("首先添加一块虚拟硬盘到系统中；")]),_._v(" "),e("li",[_._v("使用 "),e("code",[_._v("fdisk -l")]),_._v(" 获取新增硬盘的信息；")]),_._v(" "),e("li",[_._v("确认以 "),e("code",[_._v("3P+1E(3L)")]),_._v(" 分区为示例；")]),_._v(" "),e("li",[_._v("根据新增硬盘信息输入 "),e("code",[_._v("fdisk /dev/sdb")]),_._v("；")]),_._v(" "),e("li",[_._v("可以输入 "),e("code",[_._v("m")]),_._v(" 查看帮助；")]),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("n")]),_._v(" 新增分区；")]),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("p")]),_._v(" 选择主分区；")]),_._v(" "),e("li",[_._v("分区 number，default 为 1，回车即可；")]),_._v(" "),e("li",[_._v("first sector，default 2048，回车即可；")]),_._v(" "),e("li",[_._v("last sector，设置 1G 大小，即输入 "),e("code",[_._v("+1G")]),_._v("；")]),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("p")]),_._v(" 查看结果，确认无误后继续；")]),_._v(" "),e("li",[_._v("循环上面的步骤，开始第二个主分区；")]),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("n")]),_._v(" 新增分区；")]),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("p")]),_._v(" 选择主分区；")]),_._v(" "),e("li",[_._v("分区 number，default 为 2，回车即可；")]),_._v(" "),e("li",[_._v("first sector，default 2099200，回车即可；")]),_._v(" "),e("li",[_._v("last sector，设置 1G 大小，即输入 "),e("code",[_._v("+1G")]),_._v("；")]),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("p")]),_._v(" 查看结果，确认无误后继续；")]),_._v(" "),e("li",[_._v("循环上面的步骤，开始第三个主分区；")]),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("n")]),_._v(" 新增分区；")]),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("p")]),_._v(" 选择主分区；")]),_._v(" "),e("li",[_._v("分区 number，default 为 3，回车即可；")]),_._v(" "),e("li",[_._v("first sector，default 4196352，回车即可；")]),_._v(" "),e("li",[_._v("last sector，设置 1G 大小，即输入 "),e("code",[_._v("+1G")]),_._v("；")]),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("p")]),_._v(" 查看结果，确认无误后继续；")]),_._v(" "),e("li",[_._v("循环上面的步骤，开始扩展分区；")]),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("n")]),_._v(" 新增分区；")]),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("e")]),_._v(" 选择主分区；")]),_._v(" "),e("li",[_._v("first sector，default 6293504，回车即可；")]),_._v(" "),e("li",[_._v("last sector，default 12582911，回车选择剩余所有空间即可；")]),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("p")]),_._v(" 查看结果，确认无误后继续；")]),_._v(" "),e("li",[_._v("接下来在扩展分区中新建逻辑分区；")]),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("n")]),_._v(" 新增分区；")]),_._v(" "),e("li",[_._v("first sector，default 6293504，回车即可；")]),_._v(" "),e("li",[_._v("last sector，设置 1G 大小，即输入 "),e("code",[_._v("+1G")]),_._v("；")]),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("p")]),_._v(" 查看结果，确认无误后继续；")]),_._v(" "),e("li",[_._v("循环上面的步骤，开始第二个逻辑分区；")]),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("n")]),_._v(" 新增分区；")]),_._v(" "),e("li",[_._v("first sector，default 6293504，回车即可；")]),_._v(" "),e("li",[_._v("last sector，设置 1G 大小，即输入 "),e("code",[_._v("+1G")]),_._v("；")]),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("p")]),_._v(" 查看结果，确认无误后继续；")]),_._v(" "),e("li",[_._v("循环上面的步骤，开始第三个逻辑分区；")]),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("n")]),_._v(" 新增分区；")]),_._v(" "),e("li",[_._v("first sector，default 6293504，回车即可；")]),_._v(" "),e("li",[_._v("last sector，default 12582911，回车选择剩余所有空间即可；")]),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("p")]),_._v(" 查看结果，确认无误后继续；")]),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("w")]),_._v(" 保存分区结果；")]),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("partprobe /dev/sdb")]),_._v(" 通知分区信息修改了，或者重启虚拟机。")])]),_._v(" "),e("h2",{attrs:{id:"磁盘分区类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#磁盘分区类型"}},[_._v("#")]),_._v(" 磁盘分区类型")]),_._v(" "),e("p",[_._v("磁盘的分区类型往往决定该分区具体的作用。")]),_._v(" "),e("h3",{attrs:{id:"_1-操作步骤-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-操作步骤-3"}},[_._v("#")]),_._v(" 1. 操作步骤")]),_._v(" "),e("ol",[e("li",[_._v("使用 "),e("code",[_._v("fdisk -l")]),_._v(" 获取新增硬盘的信息；")]),_._v(" "),e("li",[_._v("根据硬盘信息选择 "),e("code",[_._v("fdisk /dev/sdb")]),_._v("；")]),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("m")]),_._v(" 查看帮助；")]),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("l")]),_._v(" 查看分区类型；")]),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("t")]),_._v(" 修改分区 system Id；")]),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("7")]),_._v(" 选择第七个分区；")]),_._v(" "),e("li",[_._v("根据提示输入 "),e("code",[_._v("L")]),_._v(" 查看 codes；")]),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("8e")]),_._v("；")]),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("p")]),_._v(" 查看结果，确认无误后继续；")]),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("w")]),_._v(" 保存分区结果；")]),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("partprobe /dev/sdb")]),_._v(" 通知分区信息修改了，或者重启虚拟机。")])]),_._v(" "),e("h2",{attrs:{id:"分区文件系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分区文件系统"}},[_._v("#")]),_._v(" 分区文件系统")]),_._v(" "),e("p",[_._v("磁盘需要借助"),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F",target:"_blank",rel:"noopener noreferrer"}},[_._v("文件系统"),e("OutboundLink")],1),_._v("才能实现磁盘管理，"),e("a",{attrs:{href:"/computer/data-write"}},[_._v("数据存取")]),_._v("。")]),_._v(" "),e("h3",{attrs:{id:"_1-操作步骤-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-操作步骤-4"}},[_._v("#")]),_._v(" 1. 操作步骤")]),_._v(" "),e("ol",[e("li",[_._v("使用 "),e("code",[_._v("fdisk -l")]),_._v(" 获取新增硬盘的信息；")]),_._v(" "),e("li",[_._v("根据硬盘信息选择 "),e("code",[_._v("fdisk /dev/sdb")]),_._v("；")]),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("mkfs -t ext4 /dev/sdb1")]),_._v(" 来创建 ext4 文件系统；")]),_._v(" "),e("li",[_._v("或输入 "),e("code",[_._v("mkfs.xfs /dev/sdb2")]),_._v(" 来创建 xfs 文件系统；")]),_._v(" "),e("li",[_._v("查看输入，可以观察到生成了一定数量的 inodes 和 blocks，这是关键所在。")])]),_._v(" "),e("blockquote",[e("p",[_._v("inode 作用，存储文件的属性信息，同时存放指向文件实体的指针。")]),_._v(" "),e("p",[_._v("当存放文件提示：no space left on device，可能是 inodes 数量满了。")]),_._v(" "),e("p",[_._v("排查二连："),e("code",[_._v("df -h")]),_._v("，"),e("code",[_._v("df -i")]),_._v("。")])]),_._v(" "),e("h2",{attrs:{id:"挂载磁盘分区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#挂载磁盘分区"}},[_._v("#")]),_._v(" 挂载磁盘分区")]),_._v(" "),e("p",[_._v("挂载分区前需要完成以上工作。")]),_._v(" "),e("p",[_._v("挂载分区分为临时挂载和永久挂载。")]),_._v(" "),e("h3",{attrs:{id:"_1-临时挂载分区操作步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-临时挂载分区操作步骤"}},[_._v("#")]),_._v(" 1. 临时挂载分区操作步骤")]),_._v(" "),e("ol",[e("li",[_._v("输入 "),e("code",[_._v("mount -t ext4 /dev/sdb1 /mnt")]),_._v("；")]),_._v(" "),e("li",[_._v("创建文件测试 "),e("code",[_._v("echo hello > /mnt/hello.txt")]),_._v("；")]),_._v(" "),e("li",[_._v("验证 "),e("code",[_._v("cat /mnt/hello.txt")]),_._v("；")]),_._v(" "),e("li",[_._v("查看挂载结果 "),e("code",[_._v("cat /proc/mounts")]),_._v("；")]),_._v(" "),e("li",[_._v("卸载 "),e("code",[_._v("umount /mnt")]),_._v("。")])]),_._v(" "),e("h3",{attrs:{id:"_2-永久挂载分区操作步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-永久挂载分区操作步骤"}},[_._v("#")]),_._v(" 2. 永久挂载分区操作步骤")]),_._v(" "),e("ol",[e("li",[_._v("永久实际上是开机自动挂载；")]),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("cat /etc/fstab")]),_._v(" 查看输入格式；")]),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("blkid")]),_._v(" 查看 /dev/sdb2 的 UUID；")]),_._v(" "),e("li",[_._v("编辑 "),e("code",[_._v("/etc/fstab")]),_._v("；")]),_._v(" "),e("li",[_._v("追加 "),e("code",[_._v("UUID=8c0514b8-70a9-4389-a17c-823e55ff8789 /mnt xfs defaults 0 0")]),_._v("；")]),_._v(" "),e("li",[_._v("或使用分区也可 "),e("code",[_._v("/dev/sdb2 /mnt xfs defaults 0 0")]),_._v("；")]),_._v(" "),e("li",[_._v("重启输入 "),e("code",[_._v("cat /proc/mounts")]),_._v(" 或 "),e("code",[_._v("df -h")]),_._v(" 挂载结果。")])]),_._v(" "),e("h2",{attrs:{id:"补充-扩展-swap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#补充-扩展-swap"}},[_._v("#")]),_._v(" 补充：扩展 swap")]),_._v(" "),e("p",[_._v("发现 swap 早期分配的太小了不够用可以追加。")]),_._v(" "),e("h3",{attrs:{id:"_1-操作步骤-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-操作步骤-5"}},[_._v("#")]),_._v(" 1. 操作步骤")]),_._v(" "),e("ol",[e("li",[_._v("输入 "),e("code",[_._v("free -m")]),_._v(" 查看 swap 大小；")]),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("fdisk -l")]),_._v(" 查看可用的分区；")]),_._v(" "),e("li",[_._v("无可用分区就按照 "),e("RouterLink",{attrs:{to:"/os/linux/how-to-enable-the-hard-disk.html#磁盘分区工作"}},[_._v("磁盘分区工作")]),_._v(" 新建一个分区；")],1),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("mkswap /dev/sdb3")]),_._v(" 格式化分区为 swap；")]),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("swapon -a /dev/sdb3")]),_._v(" 启用 swap 分区；")]),_._v(" "),e("li",[_._v("输入 "),e("code",[_._v("free -m")]),_._v(" 验证结果。")])])])}),[],!1,null,null,null);v.default=a.exports}}]);