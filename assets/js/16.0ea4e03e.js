(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{509:function(_,v,t){_.exports=t.p+"assets/img/agora_code_01.fbf4a325.png"},510:function(_,v,t){_.exports=t.p+"assets/img/agora_code_02.fd3aca4f.png"},511:function(_,v,t){_.exports=t.p+"assets/img/agora_code_03.45ee2fa9.png"},512:function(_,v,t){_.exports=t.p+"assets/img/agora_code_04.1c137db2.png"},513:function(_,v,t){_.exports=t.p+"assets/img/agora_code_05.790c32f2.png"},663:function(_,v,t){"use strict";t.r(v);var a=t(2),s=Object(a.a)({},(function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("blockquote",[a("p",[_._v("视频压缩：网络传输中为什么需要压缩视频？"),a("br"),_._v("\n主讲人：张哲源（声网Agora 音视频开发工程师）")])]),_._v(" "),a("h2",{attrs:{id:"视频需要压缩的原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频需要压缩的原因"}},[_._v("#")]),_._v(" 视频需要压缩的原因")]),_._v(" "),a("p",[_._v("最常见的一个像素由8bit大小构成。")]),_._v(" "),a("p",[_._v("一张1920×1080分辨率的高清图片，其大小=1920×1080×8×3=47MB；")]),_._v(" "),a("p",[_._v("而通常视频帧率为30FPS，因此带宽要求约为1.4GB，当前网络情况远远不能满足，因此必须进行视频压缩编码。")]),_._v(" "),a("p",[_._v("当前视频传输流程：")]),_._v(" "),a("ul",[a("li",[_._v("采集")]),_._v(" "),a("li",[_._v("预处理")]),_._v(" "),a("li",[_._v("编码")]),_._v(" "),a("li",[_._v("传输")]),_._v(" "),a("li",[_._v("解码")]),_._v(" "),a("li",[_._v("图像处理")]),_._v(" "),a("li",[_._v("显示")])]),_._v(" "),a("h2",{attrs:{id:"视频编码的输入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频编码的输入"}},[_._v("#")]),_._v(" 视频编码的输入")]),_._v(" "),a("p",[_._v("日常会接触到图片是RGB格式，也就是红绿蓝三原色不同比例构成不同的颜色，YUV其实就是RGB的转换。")]),_._v(" "),a("p",[a("img",{attrs:{src:t(509),alt:""}})]),_._v(" "),a("p",[_._v("YUV是由一个亮度分量（Y）和两个色度分量（UV）构成的。")]),_._v(" "),a("p",[_._v("RGB与YUV的转换公式:")]),_._v(" "),a("p",[a("img",{attrs:{src:t(510),alt:""}})]),_._v(" "),a("h2",{attrs:{id:"视频编码的输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频编码的输出"}},[_._v("#")]),_._v(" 视频编码的输出")]),_._v(" "),a("p",[_._v("两种应用：")]),_._v(" "),a("ul",[a("li",[_._v("实时传输\n"),a("ul",[a("li",[_._v("直播平台；")]),_._v(" "),a("li",[_._v("在线播放；")]),_._v(" "),a("li",[_._v("微信实时通话；")])])]),_._v(" "),a("li",[_._v("本地视频的播放\n"),a("ul",[a("li",[_._v("视频编码器保存到本地的是以"),a("code",[_._v("h.256")]),_._v("为后缀的文件，和音频编码器的本地输出一起封装变成MP4等格式。")])])])]),_._v(" "),a("h2",{attrs:{id:"视频编码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频编码"}},[_._v("#")]),_._v(" 视频编码")]),_._v(" "),a("h3",{attrs:{id:"帧类型分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#帧类型分析"}},[_._v("#")]),_._v(" 帧类型分析")]),_._v(" "),a("p",[_._v("对输入进来的YUV的每一个帧确定一个类型：")]),_._v(" "),a("ul",[a("li",[_._v("共分为"),a("code",[_._v("I")]),_._v("、"),a("code",[_._v("P")]),_._v("、"),a("code",[_._v("B")]),_._v("这三种类型；")]),_._v(" "),a("li",[a("code",[_._v("I")]),_._v("帧不会依赖其他帧的信息，也就是自我进行参考的帧；")]),_._v(" "),a("li",[a("code",[_._v("P")]),_._v("和"),a("code",[_._v("B")]),_._v("帧：都是会依赖其他帧信息来完成自身预测的帧，区别在于显示序列中"),a("code",[_._v("P")]),_._v("帧是前向参考，"),a("code",[_._v("B")]),_._v("帧是前后双向参考。")])]),_._v(" "),a("p",[_._v("理想状态下，一个视频流，从一个帧开始后面轻微运动都是"),a("code",[_._v("P")]),_._v("/"),a("code",[_._v("B")]),_._v("，直到遇到场景切换就再插一个"),a("code",[_._v("I")]),_._v("，如此往复。")]),_._v(" "),a("p",[_._v("一般来说，"),a("code",[_._v("P")]),_._v("/"),a("code",[_._v("B")]),_._v("参考范围不会越过帧。但也有特例，我们可以强行指定"),a("code",[_._v("P")]),_._v("/"),a("code",[_._v("B")]),_._v("参考不允许越过帧，这样的帧我们叫它"),a("code",[_._v("IDR")]),_._v("帧，每个"),a("code",[_._v("IDR")]),_._v("帧的间隔称作一个"),a("code",[_._v("GOP")]),_._v("。")]),_._v(" "),a("h3",{attrs:{id:"帧内-帧间预测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#帧内-帧间预测"}},[_._v("#")]),_._v(" 帧内/帧间预测")]),_._v(" "),a("p",[_._v("预测原理：")]),_._v(" "),a("ul",[a("li",[_._v("大量统计表明：源YUV中两个相邻像素值相等、相似或者缓变概率极大，发生突变的几率是极小。")])]),_._v(" "),a("p",[_._v("帧内预测：")]),_._v(" "),a("ul",[a("li",[_._v("垂直预测模式，属于帧内预测模式的一种。与它相似的，还有水平预测模式、均值预测模式（也就是4×4的均值填充整个4×4）等。\n"),a("img",{attrs:{src:t(511),alt:""}})]),_._v(" "),a("li",[_._v("码流中传输帧內预测模式标志位、残差即可")])]),_._v(" "),a("p",[_._v("帧间预测:")]),_._v(" "),a("ul",[a("li",[_._v("以当前块空域相邻的位置，在时域参考帧上的同为块，作为起始点进行规则搜索;")]),_._v(" "),a("li",[_._v("直到搜索完找到能够节省码流最大的块作为帧间预测块，当前块到预测块的位移称为运动矢量;")]),_._v(" "),a("li",[_._v("码流中传输运动矢量、帧间预测模式标志位、残差即可;")])]),_._v(" "),a("p",[_._v("宏块概念:")]),_._v(" "),a("ul",[a("li",[_._v("264中把16×16大小的块称作宏块，做帧内/帧间预测的时候可以分成8x8、4×4这样的子块，都是要把它们最能节省码流的预测模式都算岀来，然后比较岀最优秀的划分模式进行传输。")])]),_._v(" "),a("h3",{attrs:{id:"变换量化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变换量化"}},[_._v("#")]),_._v(" 变换量化")]),_._v(" "),a("p",[_._v("变换意义：")]),_._v(" "),a("ul",[a("li",[_._v("大量统计表明，把经过预测后得到的残差经过"),a("code",[_._v("DCT")]),_._v("空频变换；")]),_._v(" "),a("li",[_._v("直流和低频（相对平坦，图像或块中大部分占比）能量集中在左上；")]),_._v(" "),a("li",[_._v("高频（细节，图像或块中少部分占比）能量集中在右下；")]),_._v(" "),a("li",[a("code",[_._v("DCT")]),_._v("本身没有压缩作用，但为以后压缩时的取舍，奠定了必不可少的基础。")])]),_._v(" "),a("p",[_._v("量化：")]),_._v(" "),a("ul",[a("li",[_._v("由于人眼对高频信号不敏感，可以定义这样一个变量QP=5，将变换块中所有的值都除以QP，将QP运算的过程称为量化；")]),_._v(" "),a("li",[_._v("这样做进一步节省传输码流位宽，同时主要去掉了高频分量的值，在解码端只需要将变换块中所有的值在乘QP就可以基本还原低频分量。")])]),_._v(" "),a("p",[_._v("量化所带来的副作用：")]),_._v(" "),a("ul",[a("li",[_._v("量化值越大，丢掉的高频信息就越多，再加上编码器中都是用整形变量代表像素值，所以量化值最大还原的低频信息也会越不准确，即造成的失真就越大，块效应也会越大，视频编码的质量损失主要来源于此。")])]),_._v(" "),a("h3",{attrs:{id:"滤波"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#滤波"}},[_._v("#")]),_._v(" 滤波")]),_._v(" "),a("p",[_._v("初步估算块效应边界强度")]),_._v(" "),a("ul",[a("li",[_._v("4：边界两边块是帧内预测且块边缘是所在宏块边缘")]),_._v(" "),a("li",[_._v("3：边界两边块是帧内预测且块边缘")]),_._v(" "),a("li",[_._v("2：边界两边块的残差变换系数包含非零系数")]),_._v(" "),a("li",[_._v("1：边界两边块的残差变换系数不包含非零系数，且两块的参考帧或运动向量不同")]),_._v(" "),a("li",[_._v("0：边界两边块的残差变换系数不包含非零系数，且两块的参考帧或运动向量相同")])]),_._v(" "),a("p",[a("img",{attrs:{src:t(512),alt:""}})]),_._v(" "),a("h2",{attrs:{id:"整体流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整体流程"}},[_._v("#")]),_._v(" 整体流程")]),_._v(" "),a("p",[a("img",{attrs:{src:t(513),alt:""}})])])}),[],!1,null,null,null);v.default=s.exports}}]);