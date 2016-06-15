chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "from content script") {
      // sendResponse({farewell: "goodbye"});
      var opt = {
          iconUrl: "../../icons/icon128.png",
          type: 'basic',
          title: 'Simply',
          message: 'This tutorial is not for beginners.',
          priority: 1
        };
        chrome.notifications.create('notify1', opt, function() { console.log('created!'); });
    }

  });
