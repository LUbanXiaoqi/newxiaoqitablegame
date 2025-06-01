$(() => {
    // 导航栏
    $("#nav>ul>li").click(() => $("#nav>ul>li").removeClass("now").addClass("pass"));
    $("#index").click(() => {
        $("#nav>ul>#index").removeClass("pass").addClass("now")
        $("#L>.now").removeClass("now").addClass("hide")
        $("#L>#1st").removeClass("hide").addClass("now")
    })
    $("#essay").click(() => {
        $("#nav>ul>#essay").removeClass("pass").addClass("now")
        $("#L>.now").removeClass("now").addClass("hide")
        $("#L>#2nd").removeClass("hide").addClass("now")
    })
    $("#mode").click(() => {
        $("#nav>ul>#mode").removeClass("pass").addClass("now")
        $("#L>.now").removeClass("now").addClass("hide")
        $("#L>#3rd").removeClass("hide").addClass("now")
    })
    $("#card").click(() => {
        $("#nav>ul>#card").removeClass("pass").addClass("now")
        $("#L>.now").removeClass("now").addClass("hide")
        $("#L>#4th").removeClass("hide").addClass("now")
    })
    // 内容条
    // 主页
    $("#spot").click(() => {
        $("#L .read").removeClass("read").addClass("unread")
        $("#L #spot").removeClass("unread").addClass("read")
        $("#R>iframe").attr("src", "HTML/index/spot.html")
    })
    $("#hot").click(() => {
        $("#L .read").removeClass("read").addClass("unread")
        $("#L #hot").removeClass("unread").addClass("read")
        $("#R>iframe").attr("src", "HTML/index/hot.html")
    })
    $("#new").click(() => {
        $("#L .read").removeClass("read").addClass("unread")
        $("#L #new").removeClass("unread").addClass("read")
        $("#R>iframe").attr("src", "HTML/index/new.html")
    })
    // 文章
    $("#term").click(() => {
        $("#L .read").removeClass("read").addClass("unread")
        $("#L #term").removeClass("unread").addClass("read")
        $("#R>iframe").attr("src", "HTML/essay/term.html")
    })
    $("#join").click(() => {
        $("#L .read").removeClass("read").addClass("unread")
        $("#L #join").removeClass("unread").addClass("read")
        $("#R>iframe").attr("src", "HTML/essay/join.html")
    })
    $("#log").click(() => {
        $("#L .read").removeClass("read").addClass("unread")
        $("#L #log").removeClass("unread").addClass("read")
        $("#R>iframe").attr("src", "HTML/essay/log.html")
    })
    // 版型
    $("#TLJX").click(() => {
        $("#L .read").removeClass("read").addClass("unread")
        $("#L #TLJX").removeClass("unread").addClass("read")
        $("#R>iframe").attr("src", "HTML/mode/12-TLJX.html")
    })
    $("#KDSY").click(() => {
        $("#L .read").removeClass("read").addClass("unread")
        $("#L #KDSY").removeClass("unread").addClass("read")
        $("#R>iframe").attr("src", "HTML/mode/12-KDSY.html")
    })
    $("#PFWJ").click(() => {
        $("#L .read").removeClass("read").addClass("unread")
        $("#L #PFWJ").removeClass("unread").addClass("read")
        $("#R>iframe").attr("src", "HTML/mode/12-PFWJ.html")
    })
    $("#WMZY").click(() => {
        $("#L .read").removeClass("read").addClass("unread")
        $("#L #WMZY").removeClass("unread").addClass("read")
        $("#R>iframe").attr("src", "HTML/mode/12-WMZY.html")
    })

    // 发牌器
    $("#TLJXcard").click(() => {
        $("#L .read").removeClass("read").addClass("unread")
        $("#L #TLJXcard").removeClass("unread").addClass("read")
        $("#R>iframe").attr("src", "HTML/card/12-TLJX.html")
    })
    $("#WMZYcard").click(() => {
        $("#L .read").removeClass("read").addClass("unread")
        $("#L #WMZYcard").removeClass("unread").addClass("read")
        $("#R>iframe").attr("src", "HTML/card/12-WMZY.html")
    })
})