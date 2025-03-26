let characters_list = document.querySelector(".characters-list")

let characters = [
  {
    name: "Buffy Summers",
    photo: "../personagens/buffy.jpg",
    text: "Chegou em Sunnydale aos 16 anos junto com sua mãe, Joyce, Buffy é uma caçadora pertencente a uma linhagem onde em cada geração há uma escolhida para proteger o mundo de vampiros, demonios e outras criaturas das trevas. apesar de ter vindo para essa cidade para ter uma vida normal e tentar deixar sua missão de Caça-Vampiros, não parece ter escolhido o lugar certo para tal decisão pois é embaixo de Sunnydale que fica localizada a 'Boca do Inferno', lugar que é a fonte de todo o mal que invade a cidade mas mesmo assim ela concorda em continuar com a sua obrigação de caça-vampiros e tudo fica melhor ao conhecer Giles, seu sentinela que a auxiliará nisso e seus novos amigos: Xander e Willow que após descobrirem quem ela é, passarão a ajuda-la também. Sempre ironica e debochada com trocadilhos pra cima de seus inimigos.",
    photo2: "../personagens/buffy2.jpg",
    gif: "../gifs/buffy4.gif",
    class1: "personagem",
    class2: "profile-character-photo",
    class3: "photo-and-gif",
    align: "left"
  },
  {
    name: "Willow Rosenberg",
    photo: "../personagens/willow.gif",
    text: "Inteligente, Tranquila e Desengonçada, Willow é uma jovem hacker de familia judia e amiga de infância de Xander e os dois possuem um laço forte de amizade porém ela o ama e ele não sabe disso. Conheceu Buffy em Sunnydale High e em pouco tempo se tornaram melhores amigas. Willow inicialmente não tinha poder nenhum e ajudava nas pesquisas e investigações da Scooby Gang mas após a morte de sua professora, Jenny Calendar, ela decidiu seguir seus preceitos e estudar magia, iniciando assim seus primeiros passos em tal coisa até que a partir da 4º temporada da série se tornou de fato uma bruxa, e dai em diante foi ficando poderosa.",
    photo2: "../personagens/willow2.jpg",
    gif: "../gifs/willow4.webp",
    class1: "personagem",
    class2: "profile-character-photo",
    class3: "photo-and-gif",
    align: "left"
  },
  {
    name: "Xander Harris",
    photo: "../personagens/xander.jpg",
    text: "Brincalhão, porém incoveniente as vezes, Xander não possui poder nenhum mas contribui como pode nas pesquisas sobre seres sobrenaturais que Buffy precisa exterminar. Teve um rapido e conturbado relacionamento com Cordelia, que fracassou, mas depois disso conheceu Anya na época em que ela havia perdido seus poderes, e como transavam sem parar, foi o melhor namoro que ele já teve em toda a série",
    photo2: "../personagens/xander2.jpg",
    gif: "",
    class1: "personagem",
    class2: "profile-character-photo",
    class3: "photo-and-gif",
    align: "left"
  },
  {
    name: "Giles",
    photo: "../personagens/giles.jpg",
    text: "Guardião de Buffy, nasceu na Inglaterra. Por muitos anos, trabalhou na biblioteca da Sunnydale High. Também foi um dos donos da Magic Shop. Teve sua namorada Jenny Calendar assassinada por Angelus. Entrou para a Academia de Guardiões aos 10 anos e quando chegou na adolescência, revoltou-se e abandonou tudo para se dedicar a uma banda de punk rock, usando o nome de Ripper. Além disso, começou a mexer com magia negra, junto com seu melhor amigo Ethan Rayne. Quando um de seus amigos morreu após o grupo convocar o demônio Eyghon, Giles deixou de ser Ripper e voltou para a Academia. É a figura paterna de Buffy, ja que o pai dela é ausente em sua vida e ele está vivo. Na 6 temporada teve de partir para a inglaterra por questões relacionadas ao conselho de sentinelas e assim se ausentou em alguns episódios retornando no final da temporada para tentar deter 'Dark Willow'.",
    photo2: "../personagens/giles2.jpg",
    gif: "",
    class1: "personagem",
    class2: "profile-character-photo",
    class3: "photo-and-gif",
    align: "left"
  },
  {
    name: "Dawn Summers",
    photo: "../personagens/Dawn.png",
    text: "Entrou na 5º temporada como 'Irmã' de Buffy, mas ninguem achou estranho (exceto nós), porém é revelado que ela não é realmente irmã da caçadora mas sim uma especie de bola de fogo de energia verde chamada de 'A Chave' usada para abrir portais dimensionais, que foi transformada em uma menina por monges e enviada para Buffy na forma de uma irmã para que a caçadora a protegesse de Gloria, A Vilã da 5º temporada. Depois de Buffy impedir um apocalipse provocado por Gloria, Dawn passou a viver como uma pessoa normal. É considerada irritante pelos telespectadores pela sua carencia de atenção, de achar que é excluida por todos e também por ficar em apuros sempre que se mete onde não devia cabendo a Buffy sempre tendo que salva-la.",
    photo2: "../personagens/dawn2.jpg",
    gif: "",
    class1: "personagem",
    class2: "profile-character-photo",
    class3: "photo-and-gif",
    align: "left"
  },
  {
    name: "Joyce Summers",
    photo: "../personagens/joyce.jpg",
    text: "Mãe de Buffy e divorciada, veio para Sunnydale com a filha para recomeçarem suas vidas, porém ela não sabe que a cidade para qual está se mudando localiza-se acima da Boca do inferno, base de todos os demonios e vampiros que aterrorizam a cidade e nem imagina que sua filha seja a salvadora do Caos, e quando descobre que Buffy é uma caçadora no inicio não acredita nisso, mas ao ve-la matando um vampiro passa a crer que ela é de fato uma heroína do mundo. É como uma mãe para todos os amigos de buffy pois sua amabilidade e bondade conquistou a todos e ao publico. Trabalha como expositora numa galeria de arte.",
    photo2: "../personagens/joyce2.jpg",
    gif: "../gifs/joyce2.gif",
    class1: "personagem",
    class2: "profile-character-photo",
    class3: "photo-and-gif",
    align: "left"
  },
  {
    name: "Tara Maclay",
    photo: "../personagens/tara.jpg",
    text: "Aparece na 4° temporada da série. É uma bruxa como Willow e após conhece-la, passa a aprimorar seus poderes ao treinar junto com ela. É a mais inocente do grupo até certo ponto e timida, alem de parecer melancólica as vezes, mas esse comportamento provavelmente se dá ao fato de ter sido criada em uma familia com um pai autoritario, um irmão controlador e uma prima preconceituosa que acham que só porque Tara tem poder magico, ela é um demonio e uma ameaça para outras pessoas, o que não é verdade.",
    photo2: "../personagens/tara2.png",
    gif: "../gifs/tara2.webp",
    class1: "personagem",
    class2: "profile-character-photo",
    class3: "photo-and-gif",
    align: "left"
  },
  {
    name: "Anya Jenkins",
    photo: "../personagens/anya.png",
    text: "Anya é um demonio da vingança chamada 'Anyanka' que realiza desejos de mulheres furiosas que querem punir seus homens infieis. Ao entrar na série, ela era uma vilã e após perder seus poderes numa batalha contra Giles virou humana e tentou inutilmente te-los de volta, tendo dificuldade em se adaptar a uma vida normal e foi ai que começou um relacionamento com Xander e se tornar amiga da Scooby Gang e nem demonstrou interesse ser demonio da vingança novamente, e como humana mostrou que entende de finanças e passou a trabalhar na loja de Giles porem tem constantes perguntas relacionadas a vida humana e a maioria delas chegam a ser engraçadas e constrangedoras, alem de Anya em si ser um pouco sarcastica o que a faz mais engraçada ainda. Uma das melhores personagens mas infelizmente subestimada. Pode parecer loucura, mas possui fobia de Coelhos.",
    photo2: "../personagens/anya2.webp",
    gif: "../gifs/anya2.gif",
    class1: "personagem",
    class2: "profile-character-photo",
    class3: "photo-and-gif",
    align: "left"
  },
  {
    name: "Spike",
    photo: "../personagens/spike.png",
    text: "Foi transformado num vampiro em 1880 por Drusilla, e passou a fazer parte de um quarteto de vampiros que aterrorizavam a inglaterra junto com Angel, Darla e Drusilla. Ao chegar em Sunnydale, sem mais nem menos tenta matar Buffy e ao descobrirem que ele ja matou duas caça-vampiros há muito tempo atrás, as coisas ficam mais tensas. mas na 4º temporada pro seu azar é capturado pela iniciativa que implanta um chip na sua cabeça, fazendo com que ele não ataque os humanos pois se não é punido com um choque doloroso, entretanto ele não funciona contra monstros podendo mata-los tranquilamente, o que faz de Spike um 'anti-heroi' e aos poucos entra para a Scooby Gang mesmo que algumas pessoas sejam contra isso como Xander por exemplo.",
    photo2: "",
    gif: "../gifs/spike3.gif",
    class1: "personagem",
    class2: "profile-character-photo",
    class3: "photo-and-gif",
    align: "left"
  },
  {
    name: "Oz Ousborne",
    photo: "../personagens/oz.jpg",
    text: "Guitarrista de uma banda, primeiro namorado de Willow e... um Lobisomem. É um cara tranquilo que estuda na Sunnydale High um ano antes de Xander, Willow e Buffy, porém acaba repetindo o ultimo ano por um grande numero de faltas, e assim ficando na mesma turma que eles, mas mesmo assim é inteligente e na Scooby Gang ajuda nas nas pesquisas e investigações. Se tornou um Lobisomem após ser mordido pelo seu primo e como ja era de se esperar, não conseguia se controlar ao se transformar em Lobisomem e esse foi o motivo junto com sua traição cometida contra Willow que Oz é obrigado a deixar Sunnydale não só para controlar seu poder, como também para não machucar nem Willow e nem a ninguem.",
    photo2: "../personagens/oz.webp",
    gif: "../personagens/oz2.webp",
    class1: "personagem",
    class2: "profile-character-photo",
    class3: "photo-and-gif",
    align: "left"
  },
  {
    name: "Cordelia Chase",
    photo: "../personagens/cordelia3.jpg",
    text: "A tradicional patricinha rica e futil que toda escola possui, porém realmente se mostra inteligente em suas ações e apesar de possuir desavenças com a Scooby Gang as vezes, se torna amiga de todos por lá e ajuda nas pesquisas e investigações. ja namorou Xander, porém uma relação com altos e baixos e que não deu muito certo porque ela tinha vergonha dele na frente de suas amigas mas depois demonstrou interesse por Wesley, sentinela chamado para substituir Giles que foi demitido do conselho. Após seus pais perderem tudo depois de serem flagrados fraudando o imposto de renda, ela acaba indo para Los Angeles para tentar uma carreira de atriz e reencontra Angel e Wesley por lá, assim acaba trabalhando com eles numa agencia de investigação de casos sobrenaturais (é em los angeles que se passa a série spin-off de Buffy: 'Angel')",
    photo2: "../personagens/cordelia2.jpg",
    gif: "",
    class1: "personagem",
    class2: "profile-character-photo",
    class3: "photo-and-gif",
    align: "left"
  },
  {
    name: "Angel",
    photo: "../personagens/angel.jpg",
    text: "Quando humano, era um depravado que gastava dinheiro com bebidas e prostitutas para a vergonha de seu pai, e em uma dessas noitadas, acabou sendo transformado em vampiro por Darla e depois de assassinar sua familia, se junta a Darla, Spike e Drusilla e formam um Quarteto que por onde passavam, tornava tudo um caos, porém um dia ele é amaldiçoado por um clã de ciganos com uma alma fazendo com que ele seja bom e atormentado por seus atos ruins cometidos no passado. após seculos vivendo em desgraça com o peso da culpa por todo o mal que havia feito, conhece Buffy em Sunnydale e passa a ajuda-la em sua jornada de Caça-vampiros e aí entra para a Scooby Gang, alem disso Buffy e Angel acabam se apaixonando. bem diferente de Spike, Angel e mais maturo e respeitavel.",
    photo2: "../personagens/angel2.png",
    gif: "",
    class1: "personagem",
    class2: "profile-character-photo",
    class3: "photo-and-gif",
    align: "left"
  },
  {
    name: "Faith Lehane",
    photo: "../personagens/faith.jpg",
    text: "Após a morte de uma caçadora, a proxima a ser chamada foi Faith, uma garota problemática e rebelde. Quando Buffy morreu novamente, nenhuma Caçadora foi chamada, pois é Faith que, tecnicamente, é a atual Escolhida. Ela é natural de Boston e aparece em Sunnydale em 1998, após ter tido sua Guardiã assassinada pelo vampiro Kakistos ela passa a morar num quarto de motel, entra em contato com Buffy e a Scooby Gang e passa a ajudá-los na luta contra o Mal. As coisa começam ir de mal a pior após Faith matar, por acidente (durante uma luta, ela acha que ele é um vampiro e o estaqueia), o vice-Prefeito Allan Finch, para Buffy, Faith diz que matou e não se importa e quando a polícia a está considerando suspeita do crime, diz a Giles que Buffy é a culpada, mas é logo desmascarada. Wesley então decide levar Faith para a Inglaterra, para que seja julgada pelo [Conselho dos Guardiões], mas a Caça-Vampiros escapa e depois de varios conflitos com Buffy e seus amigos, vai para Los Angeles e passa um tempo ajudando Angel em seu trabalho (série spin off 'Angel') antes de voltar a Sunnydale em busca de redenção e parceria com Buffy e a Scooby Gang.",
    photo2: "../personagens/Faithcrossbow.webp",
    gif: "../gifs/faith2.gif",
    class1: "personagem",
    class2: "profile-character-photo",
    class3: "photo-and-gif",
    align: "left"
  }
]

const list_characters = () => {
characters_list.innerHTML = characters.map(character => `
    <div class="${character.class1}">
      <figcaption><h2>${character.name}</h2></figcaption>
      <figure>
        <div class="${character.class2}">
          <img src="${character.photo}" align="${character.align}">
        </div>
        <p>${character.text}</p>
      </figure>
      <figure class="${character.class3}">
        ${character.photo2 ? `<img src="${character.photo2}">` : ''}
        ${character.gif ? `<img src="${character.gif}">` : ''}
      </figure>
    </div> 
  ` ).join("")
};
list_characters();
