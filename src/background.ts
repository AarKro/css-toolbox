import { closeOverlay } from "@/content/closeOverlay";
import { openOverlay } from "@/content/openOverlay";
import registerOverlayUrl from '@/content/registerOverlay.tsx?script';

chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: "OFF",
  });
});

let overlayRegistered = false;
chrome.action.onClicked.addListener(async (tab) => {
  // inject overlay
  if (tab.id) {
    // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    // Next state will always be the opposite
    const nextState = prevState === 'ON' ? 'OFF' : 'ON';

    await chrome.action.setBadgeText({
      text: nextState,
      tabId: tab.id,
    });

    if (!overlayRegistered) {
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: [registerOverlayUrl],
        injectImmediately: true,
      });

      overlayRegistered = true;
    }

    // open or close overlay
    if (nextState === 'ON') {
      await chrome.scripting.executeScript({
        target: { tabId: tab.id || 0 },
        func: openOverlay,
      });
    } else if (nextState === 'OFF') {
      await chrome.scripting.executeScript({
        target: { tabId: tab.id || 0 },
        func: closeOverlay
      });
    }
  }
});
