# Spotify to YouTube Music Redirector Extension

This Chrome extension automatically redirects Spotify track URLs to the equivalent tracks on YouTube Music.

## Features

- Detects when a Spotify track page is loaded.
- Fetches track details using the Spotify Web API.
- Constructs a search URL for YouTube Music based on the Spotify track details.
- Redirects the current tab to the YouTube Music search results.

## Prerequisites

Before you can use this extension, you will need:

- A Spotify Client ID
- A Spotify Client Secret

You can obtain these by creating an app in the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/).

## Installation

To install this extension, you must load it unpacked in Chrome:

1. Download or clone this repository to your local machine.
2. Open the Chrome browser and navigate to `chrome://extensions/`.
3. Enable "Developer mode" at the top-right corner.
4. Click "Load unpacked" and select the extension's directory where you saved it.
5. Replace `YOUR_SPOTIFY_CLIENT_ID` and `YOUR_SPOTIFY_CLIENT_SECRET` in the appropriate places with the credentials obtained from Spotify.

## Usage

After loading the extension, navigate to any Spotify track URL. The extension should automatically redirect you to the equivalent track on YouTube Music.

## Note

This extension is for educational purposes only. Ensure you comply with Spotify's API Terms of Service when using their API.

Please do not publish or distribute the extension with your client ID and client secret hard-coded. For a production environment, implement a secure backend to handle the OAuth flow and credential storage.

## Example Spotify API Response

```
{
    "album": {
        "album_type": "album",
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0gxyHStUsqpMadRV0Di1Qt"
                },
                "href": "https://api.spotify.com/v1/artists/0gxyHStUsqpMadRV0Di1Qt",
                "id": "0gxyHStUsqpMadRV0Di1Qt",
                "name": "Rick Astley",
                "type": "artist",
                "uri": "spotify:artist:0gxyHStUsqpMadRV0Di1Qt"
            }
        ],
        "available_markets": [],
        "external_urls": {
            "spotify": "https://open.spotify.com/album/5Z9iiGl2FcIfa3BMiv6OIw"
        },
        "href": "https://api.spotify.com/v1/albums/5Z9iiGl2FcIfa3BMiv6OIw",
        "id": "5Z9iiGl2FcIfa3BMiv6OIw",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273baf89eb11ec7c657805d2da0",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02baf89eb11ec7c657805d2da0",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851baf89eb11ec7c657805d2da0",
                "width": 64
            }
        ],
        "name": "Whenever You Need Somebody",
        "release_date": "1987-11-12",
        "release_date_precision": "day",
        "total_tracks": 10,
        "type": "album",
        "uri": "spotify:album:5Z9iiGl2FcIfa3BMiv6OIw"
    },
    "artists": [
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/0gxyHStUsqpMadRV0Di1Qt"
            },
            "href": "https://api.spotify.com/v1/artists/0gxyHStUsqpMadRV0Di1Qt",
            "id": "0gxyHStUsqpMadRV0Di1Qt",
            "name": "Rick Astley",
            "type": "artist",
            "uri": "spotify:artist:0gxyHStUsqpMadRV0Di1Qt"
        }
    ],
    "available_markets": [],
    "disc_number": 1,
    "duration_ms": 213573,
    "explicit": false,
    "external_ids": {
        "isrc": "GBARL9300135"
    },
    "external_urls": {
        "spotify": "https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT"
    },
    "href": "https://api.spotify.com/v1/tracks/4cOdK2wGLETKBW3PvgPWqT",
    "id": "4cOdK2wGLETKBW3PvgPWqT",
    "is_local": false,
    "name": "Never Gonna Give You Up",
    "popularity": 38,
    "preview_url": null,
    "track_number": 1,
    "type": "track",
    "uri": "spotify:track:4cOdK2wGLETKBW3PvgPWqT"
}
```