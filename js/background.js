/*
 Eklenti Samet Özden tarafından yazılmıştır. 2019.
 https://twitter.com/ricinus_
 */

function src(q, uri) {
    var query = q;
    query = query.replace("#", "");
    chrome.tabs.create({url: uri + query});
}

chrome.contextMenus.create({
    title: "TransferMarkt içinde ara",
    contexts: ["selection"],
    onclick: function (info, tab) {
        src(info.selectionText, "https://www.transfermarkt.com.tr/schnellsuche/ergebnis/schnellsuche?query=");
    }
});

chrome.contextMenus.create({
    title: "WhoScored içinde ara",
    contexts: ["selection"],
    onclick: function (info, tab) {
        src(info.selectionText, "https://tr.whoscored.com/Search/?t=");
    }
});

chrome.contextMenus.create({
    title: "SofaScore içinde ara",
    contexts: ["selection"],
    onclick: function (info, tab) {
        src(info.selectionText, "https://www.sofascore.com/tr/arama?q=");
    }
});