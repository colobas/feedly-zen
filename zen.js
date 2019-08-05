function hideAll(dummy){
    [...document.getElementsByClassName("streamUnreadCount")].map(n => n && n.remove());
}

var observer = new MutationObserver(hideAll);

function startPolling() {
    tabs = document.getElementsByClassName("tab");
    if (tabs.length == 0) {
        console.log("not ready yet");
        window.setTimeout(startPolling, 500);
    } else {
        console.log("ready.");
        hideAll(null);

        [].slice.call(tabs).slice(3, -5).forEach(function(el) {
            observer.observe(el, { attributes: true, childList: true, characterData: true, subtree: true });
        });
    }
}

window.setTimeout(startPolling, 500)

