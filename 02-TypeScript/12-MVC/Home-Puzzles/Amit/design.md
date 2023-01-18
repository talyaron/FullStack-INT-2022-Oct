                                                //Model//

Entities:
   
   Listener: 
      name: string, 
      id: string, 
      playlists: Playlist[]

   Artist:
      name: string,
      id: string, 

   Song: 
      name: string,
      id: string,
      genre: string,
      durationInSeconds: number,
      artist: Artist,
      artistID: string,

   Playlist: 
      songs: Song[], 
  


                                                      //View//

listener home page:
   allSongs: list of all songs on the app
   listenerPlaylists: list of all the user's playlists. renders song views
   activePlaylist

artist home page:
   artistSongs: list of all the songs which the artist uploaded,
   uploadSongForm: a form that enables the artist to upload a song

songCard: renders the song's data  



                                                         //Control//

uploadSong() = uploads a song by the artist,
deleteSong(),
searchSong(),
addSongToPlaylist(),
removeSongFromPlaylist(), 
playSong(),
pauseSong(), 
stopSong(),
nextSong(),
previousSong(), 
shufflePlaylist(),
login()= identifies if the user is a Listener or an Artist, 
createPlaylist(),

renderArtistSongsList(), 
renderSearchResults(), 
launchListenerApp(),
launchArtistApp(),
 


                                                            //Helpers//

uid() = gives a unique id to the  listener/ artist/ song / playlist
validateAddSongToPlaylist() = checks if the song already exists on the playlist