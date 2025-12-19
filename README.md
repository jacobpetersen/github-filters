<p align="center">
  <img src="icon128.png" width="128" height="128" alt="GitHub Filters Icon">
</p>

<h1 align="center">GitHub Filters</h1>

A Chrome Extension that simplifies filtering GitHub Pull Request changes to show only your owned files and ignore whitespace changes.

[Chrome WebStore](https://chromewebstore.google.com/detail/github-filters/dfdgkgbhogmljmogcfnomeecdodejhbk)


## Features

- **Toggle Filters**: Adds or removes `owned-by[]=[username]` and `w=1` from the URL with a single click.
- **Configurable**: Set your GitHub username once in the extension options.
- **Easy Access**: Works directly from the extension icon when viewing a PR's "Files changed" tab.

## Local Installation

You can install the extension manually by:

1. **Download/Clone** this repository to your local machine.
2. Open Google Chrome and navigate to [`chrome://extensions/`](chrome://extensions/).
3. Enable **Developer mode** using the toggle switch in the top right corner.
4. Click the **Load unpacked** button.
5. Select the folder containing the extension files.

## How to Use

1. **Set your Username via the options page**:
   - The options page can be opened in one of 2 ways:
     - **Option 1**: Right-click the extension icon and select **Options**.
     - **Option 2**: If you haven't set a username yet, clicking the icon on a GitHub PR changes page will automatically open the Options page.
   - Once on the options page enter your GitHub username and click **Save Changes**.
2. **Apply/Remove Filters**:
   - Navigate to any GitHub Pull Request "Files changed" tab (URL pattern: `https://github.com/*/*/pull/*/changes`).
   - Click the **GitHub Filters** icon in your extension toolbar.
   - The page will reload with the filters applied. Clicking the icon again will remove the filters.

## Permissions

- `storage`: Used to save your GitHub username.
- `tabs` & `activeTab`: Used to detect the current URL and apply the filter parameters.
