import { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXTAUTH_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXTAUTH_PUBLIC_CLIENT_SECRET,
});

const useSpotify = () => {
  const { data: session } = useSession();

  useEffect(() => {
      if(session) {
          // If refresh access token attampt fails, direct user to login..
          if(session.error === 'RefreshAccessTokenError') {
              signIn();
          }

          spotifyApi.setAccessToken(session.user.accessToken);
      }
  }, [session])
  return spotifyApi;
}

export default useSpotify