module.exports = [
    // 代码复制插件
    ["vuepress-plugin-code-copy", {
        // selector: String,
        // align: String,
        // color: String,
        // backgroundTransition: Boolean,
        // backgroundColor: String,
        successText: "你已成功复制代码,快去粘贴吧~~~"
        }
    ],
    // 文章防止复制插件
    ['copyright', {
        noCopy: true,   // the selected text will be uncopiable
        minLength: 100, // if its length is greater than 100
        authorName:{
            "en-US": "lime2019",
            "zh-CN": "离忧"
        }
      }
    ],
    // 光标插件
    [
        "cursor-effects",
        {
          size: 2,                    // size of the particle, default: 2
          shape: ['star'| 'circle'],  // shape of the particle, default: 'star'
          zIndex: 999999999           // z-index property of the canvas, default: 999999999
        }
    ],
]
