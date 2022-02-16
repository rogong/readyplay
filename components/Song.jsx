import React from 'react'
import useSpotify from '../hooks/useSpotify'
import { millisToMinutesAndSeconds } from '../lib/time'
import { useRecoilState } from 'recoil'
import { currentTrackIdState, isPlayingState} from '../atoms/songAtom'

const Song = ({track, order}) => {
    const spotifyApi = useSpotify();
    const {id, name, album, artists, duration_ms, uri } = track.track;
    const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

    const playSong = () => {
        setCurrentTrackId(id);
        setIsPlaying(true);
        spotifyApi.play({
            uris: [uri],
        })
    }

  return (
    <div className='grid grid-cols-2 text-gray-500 py-4 px-5 
    hover:bg-gray-900 rounded-full'
    onClick={playSong}
    >
        <div className='flex items-center space-x-4'>
            <p>{order + 1}</p>
            <img 
            className='h-10 w-10'
            src={album.images[0].url}

             />
             <div>
                 <p className='w-36 lg:w-64 text-white truncate'>{name}</p>
                 <p className='w-40'>{artists[0].name}</p>
             </div>
        </div>

        <div className='flex items-center 
        justify-between ml-auto md:ml-0'>
             <p className='w-40 hidden md:inline'>{album.name}</p>
             <p>{millisToMinutesAndSeconds(duration_ms)}</p>
             </div>
    </div>
  )
}

export default Song