document.title = '新标签页' // 修改页面名称为'新标签页'
let i = 0
let timer = window.setInterval(function () {
    if (document.title !== '新标签页') {
        document.title = '新标签页'
        i = 0
    } else {
        if (i > 9) {
            window.clearInterval(timer)
        } else {
            i++
        }
    }
}, 1000)
