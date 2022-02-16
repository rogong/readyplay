var SpotifyWebApi = require('spotify-web-api-node');
const { URLSearchParams } = require('url');

const scopes = [
    'user-read-email',
    'user-read-private',
    'user-library-read',
    'user-top-read',
    // 'user-library-modify',
    'user-read-playback-state',
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-modify-playback-state',
    'user-follow-read',
    'playlist-read-private',
    'playlist-read-collaborative',
    'streaming',
].join(',');

const params = {
    scope: scopes,
};

const queryParamString = new URLSearchParams(params);

const LOGIN_URL = `https://accounts.spotify.com/authorize?` + queryParamString.toString();

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXTAUTH_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXTAUTH_PUBLIC_CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URI,
});

export default spotifyApi;

export { LOGIN_URL}