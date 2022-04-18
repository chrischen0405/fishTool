document.title = '' // 修改页面名称为no title
let i = 0
let timer = window.setInterval(function () {
    if (document.title !== '') {
        document.title = ''
        i = 0
    } else {
        if (i > 9) {
            window.clearInterval(timer)
        } else {
            i++
        }
    }
}, 1000)
