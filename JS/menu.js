let menu_div = document.querySelector('#menu-site')

let menu_itens = [
  { link: "../HTML/Galeria.html", name: 'Galeria' },
  { link: "../HTML/historia.html", name: 'História' },
  { link: "../HTML/viloes.html", name: 'Vilões' },
  { link: "../HTML/personagens.html", name: 'Personagens' },
  { link: "../HTML/index.html", name: 'Menu' }
]

const loadMenu = () => {
  return menu_div.innerHTML = `
    <ul>
      ${menu_itens.map(menu_item => `
        <li><a href="${menu_item.link}">${menu_item.name}</a></li>
      `)}
    </ul>
  `
};
loadMenu();