chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "openOptions",
    title: "Options",
    contexts: ["action"]
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "openOptions") {
    chrome.runtime.openOptionsPage();
  }
});

chrome.action.onClicked.addListener((tab) => {
  const githubUrlPattern = /^https:\/\/github\.com\/[^/]+\/[^/]+\/pull\/[^/]+\/changes/;
  if (tab.url && githubUrlPattern.test(tab.url)) {
    chrome.storage.sync.get({ githubUsername: '' }, (items) => {
      const username = items.githubUsername;
      if (!username) {
        chrome.runtime.openOptionsPage();
        return;
      }

      const url = new URL(tab.url);
      const hasOwnedBy = url.searchParams.get('owned-by[]') === username;
      const hasW1 = url.searchParams.get('w') === '1';

      if (hasOwnedBy && hasW1) {
        url.searchParams.delete('owned-by[]');
        url.searchParams.delete('w');
      } else {
        url.searchParams.set('owned-by[]', username);
        url.searchParams.set('w', '1');
      }

      chrome.tabs.update(tab.id, { url: url.toString() });
    });
  } else {
    chrome.runtime.openOptionsPage();
  }
});
