(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{491:function(_,v,t){_.exports=t.p+"assets/img/three_way_01.4a94edce.png"},636:function(_,v,t){"use strict";t.r(v);var e=t(2),a=Object(e.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("blockquote",[e("p",[_._v("使用TCP协议进行通信的双方必须先建立连接，然后才能开始传输数据。")])]),_._v(" "),e("p",[_._v("为了确保连接双方可靠性，在双方建立连接时，TCP协议采用三次握手策略。")]),_._v(" "),e("p",[e("img",{attrs:{src:t(491),alt:"三次握手"}})]),_._v(" "),e("h2",{attrs:{id:"第一次握手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第一次握手"}},[_._v("#")]),_._v(" 第一次握手")]),_._v(" "),e("p",[_._v("客户端发送带有"),e("code",[_._v("SYN")]),_._v("标志的连接请求报文段，然后进入"),e("code",[_._v("SYN SEND")]),_._v("状态，等待服务端的确认。")]),_._v(" "),e("h2",{attrs:{id:"第二次握手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第二次握手"}},[_._v("#")]),_._v(" 第二次握手")]),_._v(" "),e("p",[_._v("服务端接收到客户端的"),e("code",[_._v("SYN")]),_._v("报文段后，需要发送"),e("code",[_._v("ACK")]),_._v("信息对这"),e("code",[_._v("SYN")]),_._v("报文段进行确认。同时，还要发送自己的"),e("code",[_._v("SYN")]),_._v("请求信息。")]),_._v(" "),e("p",[_._v("服务端会将上述的信息放到一个报文段（"),e("code",[_._v("SYN")]),_._v("+"),e("code",[_._v("ACK")]),_._v("报文段）中，一并发送给客户端此时服务端将会进入"),e("code",[_._v("SYN RECV")]),_._v("状态。")]),_._v(" "),e("h2",{attrs:{id:"第三次握手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第三次握手"}},[_._v("#")]),_._v(" 第三次握手")]),_._v(" "),e("p",[_._v("客户端接收到服务端的"),e("code",[_._v("SYN")]),_._v("+"),e("code",[_._v("ACK")]),_._v("报文段后，会向服务端发送"),e("code",[_._v("ACK")]),_._v("确认报文段，这个报文段发送完毕后，客户端和服务端都进入"),e("code",[_._v("ESTABLISHED")]),_._v("状态，完成TCP三次握手。")]),_._v(" "),e("h2",{attrs:{id:"结论"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[_._v("#")]),_._v(" 结论")]),_._v(" "),e("p",[_._v("最少通过三次，才能确定双方都有发送和接收能力。")])])}),[],!1,null,null,null);v.default=a.exports}}]);