# Update
Starting with **Chrome 72**, standards compliant screen capture was rolled out, therefore the **Chrome extension has been deprecated**.

# Pipe Screen Recording Chrome Extension

This extension allows Pipe to record the screen when using Chrome if permission is allowed.

To use it you will fist need to modify the existing `manifest.json` file and add your own domain so that the screen can be recorded when the Pipe HTML5 client is accessed from your domain.

# How to Modify the Extension?

1. Download the [ZIP](https://github.com/addpipe/screen-recording-chrome-extension/archive/master.zip) file and unzip it.
2. Open `manifest.json` with your favorite text editor.
3. Add your own domain [here at line 14](https://github.com/addpipe/screen-recording-chrome-extension/blob/c4822bc21a4a6e16ee8685d4a7056e763d265d80/manifest.json#L14)

Here is how it should look 

```
"externally_connectable": {
	"matches": ["https://*.YOUR_DOMAIN.com/*"]
     }
```

After you've modified it, save it and ZIP the entire downloaded directory.

Next up you will need to publish it to the Google App Store

# How to Publish the Extension

1. ZIP the entire download directory with the modified `manifest.json` file if you haven't done so already
2. Go to the [Google Developer DashBoard](https://chrome.google.com/webstore/developer/dashboard)
3. Here you will have to create a developer account if you don't have one and you will have to pay a one-time $5 developer signup fee before you can publish the modified extension.
4. After signing up click on the **Add new item** button. If you've never uploaded an item before, you need to accept the developer agreement before going to the next step.
5. Click **Choose file** > your zip file > **Upload**. If your extension's manifest and ZIP file are valid, you can edit your extension on the next page
6. In this page you will need to add the store listing information for your extension that isn't in the ZIP file, such as a long description, screenshots, videos, and links to related sites. You’ll need the following to finish your extension’s store listing:
    * A detailed description of your extension.
    * A 128x128 icon to display in the store.
    * At least one 1280x800 or 640x400 screenshot for the extension
    * A 440x280 small tile icon that will be displayed on the Chrome Web Store wall. This is optional.
    * The primary category where your extension should be listed.
    * Your extension's language to help users find it.
7. After this you can review all your settings and publish the extension.

When you publish your extension, you’ll get an **extension ID**. This ID can also be obtained by installing the extension and going to chrome://extensions tab and clicking the **Developer mode** check box at the top right of the page. The ID of the extension will be listed along with all the other details.

**This ID is important because you will need to add it to your Pipe embed code to activate the Screen Recording feature.**

# How to Activate Pipe Screen Recording

Embed Code 1.0

1. Go to your webpage where you have the Pipe client embeded
2. Add the following parameter to the `flashvars` object: `srec:"YOUR_EXTENSION_ID"`
3. It should look similar to the following:

```

var flashvars = {qualityurl: "avq/720p.xml", accountHash:"YOUR_ACCOUNT_HASH", payload:'{"userId":"55a95eeb936dd30100e0aff6","jobId":"55a7e6555f1bdc010014d6a1"}', eid:1, showMenu:"true", mrt:120,sis:0,asv:1, srec:"YOUR_EXTENSION_ID"};

```

Embed Code 2.0 HTML

1. Go to your webpage where you have the Pipe client embeded
2. Add the `pipe-srec="YOUR_EXTENSION_ID"` attribute to the `piperecorder` tag
3. It should look similar to the following:

```
<piperecorder id="test-div" pipe-width="640" pipe-height="510" pipe-qualityurl="avq/480p.xml" pipe-accountHash="YOUR_ACCOUNT_HASH" pipe-eid="1" pipe-showMenu="true"  pipe-srec="YOUR_EXTENSION_ID"></piperecorder>

```

Embed Code 2.0 JavaScript

1. Go to your webpage where you have the Pipe client embeded
2. Add the `srec:"YOUR_EXTENSION_ID"` property to your custom JavaScript object
3. It should look similar to the following:

```
var myCustomObject = {
size: {width:640,height:390},
qualityurl: "avq/720p.xml", 
accountHash:"YOUR_ACCOUNT_HASH", 
payload:'{"userId":"55a95eeb936dd30100e0aff6","jobId":"55a7e6555f1bdc010014d6a1"}', 
eid:1, 
showMenu:"true", 
srec:"YOUR_EXTENSION_ID"
};

PipeRecorder.insert('MY_DIV_ID', myCustomObject);

```

Save the changes and you should see the Record Screen Button appear in the Pipe Client:
![Pipe Screen Recording](https://addpipe.com/img_doc/screen-recording.png)

# Support and Recommendations

1. Screen recording only works in Chrome over secure origins (HTTPS).
2. To make use of it you will have to use the HTML5 Pipe client.
3. We recommend turning off screen mirroring if you have it active, otherwise during the recording you will see the mirrored screen.
