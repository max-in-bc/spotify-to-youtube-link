

const client_id = 'YOUR_CLIENT_ID_HERE';
const client_secret = 'YOUR_CLIENT_SECRET_HERE';

async function getToken() {
  const authHeader = btoa(client_id + ':' + client_secret);
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: new URLSearchParams({
      'grant_type': 'client_credentials',
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + authHeader,
    },
  });

  if (!response.ok) {
    throw new Error(`Error fetching token: ${response.status}`);
  }

  return await response.json();
}


async function getTrackInfo(access_token, trackId) {
  const response = await fetch("https://api.spotify.com/v1/tracks/" + trackId, {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + access_token },
  });

  return await response.json();
}


// This function extracts the Spotify track ID from a given Spotify URL.
function getSpotifyTrackId(spotifyUrl) {
  const match = spotifyUrl.match(/spotify\.com\/track\/(\w+)/);
  return match ? match[1] : null;
}

// This function fetches track details from the Spotify API using the extracted track ID.
async function fetchSpotifyTrackDetails(trackId) {
  const tokenResponse = await getToken();  
  const profile = await getTrackInfo(tokenResponse.access_token, trackId);
  return profile;
}

// This function builds the YouTube Music URL using the track details fetched from Spotify.
function buildYouTubeMusicSearchUrl(trackDetails) {
  const query = encodeURIComponent(`${trackDetails.name} by ${trackDetails.artists.map(artist => artist.name).join(' ')}`);
  return `https://music.youtube.com/search?q=${query}`;
}

// Listener for tab updates to check for Spotify track URLs.
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url && tab.url.includes('spotify.com/track/')) {
    const trackId = getSpotifyTrackId(tab.url);
    if (trackId) {
      try { 

        const trackDetails = await fetchSpotifyTrackDetails(trackId);
        const youtubeMusicUrl = buildYouTubeMusicSearchUrl(trackDetails);

        // Redirect the tab to the constructed YouTube Music URL.
        chrome.tabs.update(tabId, { url: youtubeMusicUrl });
      } catch (error) {
        // Handle errors (e.g., failed API calls, invalid responses) here.
        console.error('An error occurred during the redirect process:', error);
      }
    }
  }
});
