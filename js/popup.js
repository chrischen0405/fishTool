window.onload = function () {
    // let btn = document.getElementById('button');
    let clearBtn = document.getElementById('clear');
    // let isStart = chrome.extension.getBackgroundPage().STARTED;
    // btn.innerText = isStart ? '关闭' : '开启';
    // btn.addEventListener('click',function () {
    //     if (isStart) {
    //         btn.innerText = '开启';
    //         isStart = false;
    //         chrome.extension.getBackgroundPage().setStatus(false);
    //     } else {
    //         btn.innerText = '关闭';
    //         isStart = true;
    //         chrome.extension.getBackgroundPage().setStatus(true);
    //     }
    // });
    clearBtn.addEventListener('click', () => {
        getCurrentTabId((tabId) => {
            chrome.tabs.executeScript(tabId, {code: `document.title=''`});
        })
    });
};

// 获取当前选项卡ID
function getCurrentTabId(callback)
{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
    {
        if(callback) callback(tabs.length ? tabs[0].id: null);
    });
}