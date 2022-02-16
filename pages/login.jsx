import React from 'react'
import { getProviders, signIn} from 'next-auth/react'

const login = ({ providers }) => {
    console.log(providers)
  return (
    <div className='flex flex-col items-center bg-black min-h-screen w-full  justify-center'>
        <img className='w-52 mb-5' src='https://logos-world.net/wp-content/uploads/2020/09/Spotify-Symbol.png' alt=''/>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
            <button 
            onClick={() => signIn(provider.id, { callbackUrl: '/'})}
            className='bg-[#18D860] text-white p-5 rounded-full'>Login with {provider.name}</button>
        </div>
      ))}
    </div>
  )
}

export default login

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  }
}
