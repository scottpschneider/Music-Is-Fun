function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here

  function drawSongs(songs) {
    var template = ''
    for (var i = 0; i < songs.length; i++) {
      var song = songs[i];
      template += `
      <li> 
      <div class="card-deck text-dark">
      <p><img class= "card-img-top" src="${song.albumArt}" alt="" height=200" width=175"></p>
        <div class="card">
        <div class="card-body" style="width: 100rem;">
        <h5>Title:${song.title}</h5>
        <p>${song.artist}</p>
        <p>${song.collection}</p>
        <p>$${song.price}</p>
        <p><audio controls><source src="${song.preview}" type="audio/mpeg"> </audio></p>
        </div>
         </div>
         </div>
      </li>
      `
document.getElementById('songs').innerHTML=template
    }
    drawSongs()
  }

  

}
