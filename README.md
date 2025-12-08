# SoundCloud Default Sort Chrome Extension

A Chrome extension that automatically selects your preferred sort option on SoundCloud track pages.

## Features

- Select your default sort preference via the extension popup
- Automatically applies your preferred sort option when visiting SoundCloud track pages
- Works with SoundCloud's existing sort dropdown
- Persists your preference across browser sessions

## Installation

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle in the top right)
4. Click "Load unpacked" and select this extension directory

## Usage

1. Click the extension in your Chrome toolbar
2. Select your preferred sort option from the dropdown:
   - Newest
   - Oldest
   - Track Time
3. Click "Save Preference"
4. Navigate to any SoundCloud track page - your preferred sort will be automatically applied

## Files

- `manifest.json` - Chrome extension configuration
- `popup.html` - Extension popup UI
- `popup.css` - Popup styling
- `popup.js` - Popup logic for saving preferences
- `content.js` - Content script that runs on SoundCloud pages to apply sort
- `README.md` - This file

## Technical Details

- Uses Chrome Extension Manifest V3
- Stores preferences in `chrome.storage.local`
- Uses MutationObserver to handle SoundCloud's dynamic content loading
- Finds and clicks the sort dropdown button and link elements

## Development

To modify the extension:
1. Make your changes to the relevant files
2. Go to `chrome://extensions/`
3. Click the refresh icon on the extension card
4. Test on a SoundCloud track page

