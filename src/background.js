chrome.runtime.onSuspend.addListener(function() {
    console.log("onSuspend");
});

function setTabsCount(value) {
    localStorage.tabsCount = value;
    console.log("tabsCount: " + value);
    setBadge(value);
}

function getTabsCount() {
    str_value = localStorage.tabsCount;
    if (str_value == null || str_value == "null"){
        value = 0;
    }
    else {
        value = parseInt(str_value);
    }
    return value;
}

function addToTabsCount(value) {
    setTabsCount(getTabsCount() + value);
}

function countTabs() {
    chrome.tabs.query({pinned: false}, function(tabs) {
        setTabsCount(tabs.length);
    });
};

function setBadge(value) {
    chrome.browserAction.setBadgeText({text: value.toString()});
    
}

countTabs();
chrome.tabs.onCreated.addListener(function() {addToTabsCount(1)});
chrome.tabs.onRemoved.addListener(function() {addToTabsCount(-1)});
