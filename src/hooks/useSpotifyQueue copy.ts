// import React from 'react'
// import { client } from '../utils'
// import { useSpotifyMutation } from './useSpotify'
// import { useSpotifyToken } from './useSpotifyToken'

// export const useSpotifyQueue = () => {
//   const [url, setUrl] = React.useState('')
//   const { token } = useSpotifyToken()

//   const { mutate, error } = useSpotifyMutation<null>({
//     url,
//     method: 'POST',
//   })

//   const addTrackToQueue = (uri: string) => {
//     const baseUrl = 'me/player/queue'
//     const url = baseUrl + '?uri=' + uri
//     return client({ endpoint: url, token, data: {}, method: 'POST' }).then(
//       (res: Promise<null>) => res,
//     )
//   }

//   const addTracksToQueue = (uris: string[]) => {
//     let index = 0
//     const interval = setInterval(() => {
//       const uri = uris[index]
//       if (!uri) {
//         clearInterval(interval)
//         return
//       }
//       addTrackToQueue(uri)
//       index++
//     }, 20)
//   }

//   React.useEffect(() => {
//     if (error) console.error('ERROR useSpotifyQueue: ', error)
//   }, [error])

//   return { addTracksToQueue, addTrackToQueue }
// }
