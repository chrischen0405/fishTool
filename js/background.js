const domainList = [
    'https://www.zhihu.com/',
    'http://www.zhihu.com/'
]

chrome.tabs.onUpdated.addListener(function(tabId, info, tab) {
    console.log('onUpdated', tabId, info, tab)
    if (info.status === 'loading') {
        chrome.storage.local.get({ css: true }, res => {
            if (res.css) {
                insertCss(tab)
            }
        })
    }
})

function insertCss (tab) {
    let tabUrl = tab ? tab.url : null
    if (tabUrl && domainList.includes(tabUrl)) {
        chrome.tabs.insertCSS(tab.id, {
            file: "/css/css.css"
        })
    }
}
