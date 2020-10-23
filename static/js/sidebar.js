module.exports = {
    
    // ---------------------------------------------
    // blogs文件夹对应系列文章（技术相关文章）
    // ---------------------------------------------

    // 网络相关——http协议
    "/blogs/network/http/":require("../../../../blogs/network/http/sidebar"),


    // ---------------------------------------------
    // coding文件夹对应系列文章（主要是编程语言的学习）
    // ---------------------------------------------

    // applet——微信公众号开发
    "/coding/applet/offiaccount/":require("../../../../coding/applet/offiaccount/sidebar"),

    // serverless——腾讯云开发CloudBase
    "/coding/serverless/cloudbase/":require("../../../../coding/serverless/cloudbase/sidebar"),

    // ---------------------------------------------
    // docs文件夹对应系列文章（项目开发与培训相关文章）
    // ---------------------------------------------

    // 比赛——IGEM Wiki编写
    "/docs/competition/igem/":require("../../../../docs/competition/igem/sidebar"),

    // 开发环境构建——服务器软件安装
    "/docs/computer/ecs/software/":require("../../../../docs/computer/ecs/software/sidebar"),

    // 训练营——腾讯云Web云开发训练营
    "/docs/training/tx_web_cloud/":require("../../../../docs/training/tx_web_cloud/sidebar"),

    // 训练营——腾讯云微信小程序云开发训练营
    "/docs/training/wx_applet_cloud/":require("../../../../docs/training/wx_applet_cloud/sidebar"),

}