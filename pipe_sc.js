﻿chrome.runtime.onMessageExternal.addListener((message, sender, sendResponse) => {
  const sources = message.sources;
  const tab = sender.tab;
  chrome.desktopCapture.chooseDesktopMedia(sources, tab, (streamId) => {
	 if (!streamId) {
	      sendResponse({
		 type: 'error',
		 message: 'Failed to get stream ID'
	      });
	 }else{
	      sendResponse({
		 type: 'success',
		 streamId: streamId
	      });
	 }
  });
  return true;
});