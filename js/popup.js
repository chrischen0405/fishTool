const manifestData = chrome.runtime.getManifest()
document.getElementById('title').innerText = manifestData.version

window.onload = function () {
  let clearBtn = document.getElementById('clear')
  clearBtn.addEventListener('click', () => {
    getCurrentTabId((tabId) => {
      chrome.scripting.executeScript({
        target: {
          tabId
        },
        func: function () {
          document.title = '新标签页'
        }
      })
    })
  })
  let isShowHeaderBtn = document.getElementById('isShowHeader')
  let isShowHeader = false
  let isShowSidebarBtn = document.getElementById('isShowSidebar')
  let isShowSidebar = false
  chrome.storage.local.get({
    isShowHeader: false,
    isShowSidebar: false
  }, res => {
    isShowHeader = res.isShowHeader
    isShowSidebar = res.isShowSidebar
    isShowHeaderBtn.innerText = `${isShowHeader ? '头部隐藏' : '头部显示'}`
    isShowSidebarBtn.innerText = `${isShowSidebar ? '侧边栏隐藏' : '侧边栏显示'}`
  })
  isShowHeaderBtn.addEventListener('click', () => {
    isShowHeader = !isShowHeader
    isShowHeaderBtn.innerText = `${isShowHeader ? '头部隐藏' : '头部显示'}`
    chrome.storage.local.set({ isShowHeader })
    chrome.tabs.reload()
  })
  isShowSidebarBtn.addEventListener('click', () => {
    isShowSidebar = !isShowSidebar
    isShowSidebarBtn.innerText = `${isShowSidebar ? '侧边栏隐藏' : '侧边栏显示'}`
    chrome.storage.local.set({ isShowSidebar })
    chrome.tabs.reload()
  })
}


// 获取当前选项卡ID
function getCurrentTabId(callback) {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    if (callback) callback(tabs.length ? tabs[0].id : null)
  })
}
