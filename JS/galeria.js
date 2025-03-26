let gallery_div = document.querySelector('#galeria-de-fotos')

let photos_gallery = [
  { image: "../galeria/buffyart.jpg" , align: 'left', class: 'foto-galeria' },
  { image: "../galeria/buffydean.jpg", align: 'right', class: 'foto-galeria' },
  { image: "../galeria/buffyfaith.jpg", align: 'right', class: 'foto-galeria' },
  { image: "../galeria/08_10_00_a.jpg", align: 'left', class: 'foto-galeria' },
  { image: "../galeria/buffyfight.jpg", align: 'right', class: 'foto-galeria' },
  { image: "../galeria/MAR100047.jpg", align: 'right', class: 'foto-galeria' },
  { image: "../galeria/orig_187288.jpg", align: 'left', class: 'foto-galeria' },
  { image: "../galeria/buffys7.jpg", align: 'left', class: 'foto-galeria' },
  { image: "../galeria/buffysobrenatural.jpg", align: 'right', class: 'foto-galeria' },
  { image: "../galeria/willowspell.jpg", align: 'left', class: 'foto-galeria' },
  { image: "../galeria/buffysobrenatural2.jpg", align: 'right', class: 'foto-galeria' },
  { image: "../galeria/buffyteam.jpg", align: 'left', class: 'foto-galeria' },
  { image: "../galeria/faithgiles.jpg", align: 'right', class: 'foto-galeria' },
  { image: "../galeria/buffy-the-vampire-slayer.jpg", align: 'left', class: 'foto-galeria' },
  { image: "../galeria/buffyteam2.jpg", align: 'left', class: 'foto-galeria' },
  { image: "../galeria/buffyvs.jpg", align: 'right', class: 'foto-galeria' },
  { image: "../galeria/buffy26.jpg", align: 'left', class: 'foto-galeria' },
  { image: "../galeria/fight.jpg", align: 'right', class: 'foto-galeria' },
  { image: "../galeria/buffy_the_vampire_slayer-buffytv_005-embed-2018.jpg", class: 'foto-galeria' },
]

const loadPhotoGallery = () => {
  gallery_div.innerHTML = photos_gallery.map(item => `
    <figure class="${item.class}">
      <img src="${item.image}" align="${item.align}">
    </figure>
  `).join("")
};
loadPhotoGallery();