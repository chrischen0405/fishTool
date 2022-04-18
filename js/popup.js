window.onload = function () {
    let clearBtn = document.getElementById('clear')
    clearBtn.addEventListener('click', () => {
        getCurrentTabId((tabId) => {
            chrome.tabs.executeScript(tabId, {code: `document.title=''`})
        })
    })
    let cssBtn = document.getElementById('css')
    let css = true
    chrome.storage.local.get({ css: true }, res => {
        css = res.css
        cssBtn.innerText = `${css ? '关闭' : '开启'}`
    })
    cssBtn.addEventListener('click', () => {
        css = !css
        cssBtn.innerText = `${css ? '关闭' : '开启'}`
        chrome.storage.local.set({ css })
    })
}


// 获取当前选项卡ID
function getCurrentTabId(callback) {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        if(callback) callback(tabs.length ? tabs[0].id : null)
    })
}
