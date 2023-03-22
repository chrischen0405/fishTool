chrome.tabs.onUpdated.addListener(function(tabId, info, tab) {
    console.log('onUpdated', tabId, info, tab)
    if (info.status === 'loading') {
        chrome.storage.local.get({
            isShowHeader: false,
            isShowSidebar: false
        }, res => {
            if (!res.isShowHeader) {
                insertCss(tab, '/css/header-css.css')
            }
            if (!res.isShowSidebar) {
                insertCss(tab, '/css/sidebar-css.css')
            }
        })
    }
})

function insertCss (tab, file) {
    let tabUrl = tab ? tab.url : null
    if (tabUrl && tabUrl.indexOf('zhihu') !== -1) {
        chrome.scripting.insertCSS({
            target: {
                tabId: tab.id
            },
            files: [file]
        })
    }
}
