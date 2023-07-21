const stars = [
  {
    name: "Webb Unveils Dark Side",
    bio: "An international team of astronomers using NASA’s James Webb Space Telescope has obtained an in-depth inventory of the deepest, coldest ices measured to date in a molecular cloud.",
    thumb: "images/t01.png",
    img: "images/pic-01.png",
  },
  {
    name: "A Drifting Galaxy",
    bio: "The jellyfish galaxy JW39 hangs serenely in this image from the NASA/ESA Hubble Space Telescope.",
    thumb: "images/t02.jpg",
    img: "images/pic-02.jpg"
  },
  {
    name: "Baby Stars in the Orion Constellation",
    bio: "Scores of baby stars shrouded by dust are revealed in this infrared image of the star-forming region NGC 2174.",
    thumb: "images/t03.jpg",
    img: "images/pic-03.jpg"
  },
  {
    name: "Glistening Star Cluster",
    bio: "The densely packed globular cluster NGC 6325 glistens in this image from the NASA/ESA Hubble Space Telescope.",
    thumb: "images/t04.jpg",
    img: "images/pic-04.jpg"
  },
  {
    name: "Neutron Stars Collide",
    bio: "Two neutron stars begin to merge in this illustration, blasting a jet of high-speed particles and producing a cloud of debris.",
    thumb: "images/t05.jpg",
    img: "images/pic-05.jpg"
  },
  {
    name: "Venus' Volcano",
    bio: "Maat Mons, a volcano on Venus that has shown signs of a recent eruption, is in the black square near the planet’s equator in this annotated, computer-simulated global map of Venus’ surface.",
    thumb: "images/t06.jpg",
    img: "images/pic-06.jpg"
  },
  {
    name: "New Horizons’ Infrared View",
    bio: "NASA's New Horizons spacecraft captured this high-resolution enhanced color view of Charon, Pluto's largest moon, just before closest approach on July 14, 2015.",
    thumb: "images/t07.jpg",
    img: "images/pic-07.jpg"
  },
  {
    name: "Tarantula Nebula",
    bio: "A snapshot of the Tarantula Nebula (also known as 30 Doradus) is featured in this image from the NASA/ESA Hubble Space Telescope.",
    thumb: "images/t08.jpg",
    img: "images/pic-08.jpg"
  }
  ,
  {
    name: "Hubble Views a Stellar Duo in Orion Nebula",
    bio: "The bright variable star V 372 Orionis takes center stage in this image from the NASA/ESA Hubble Space Telescope.",
    thumb: "images/t09.jpg",
    img: "images/pic-09.jpg"
  }
  ,
  {
    name: "Starry Wreath in Pegasus",
    bio: "The James Webb Space Telescope spies the spiral galaxy NGC 7469, located 220 million light-years from Earth in the constellation Pegasus, in this image released on Dec. 21, 2022.",
    thumb: "images/t010.jpg",
    img: "images/pic-010.jpg"
  }
  ,
  {
    name: "Webb Uncovers Young Stars’ Outbursts in Carina Nebula",
    bio: "By taking a closer look at one of Webb’s first images, the iconic Cosmic Cliffs, scientists have found dozens of energetic jets and outflows from young stars previously hidden by dust clouds.",
    thumb: "images/t011.png",
    img: "images/pic-011.png"
  }
  ,
  {
    name: "Hubble Views a Star-Studded Cosmic Cloud",
    bio: "A portion of the open cluster NGC 6530 appears as a roiling wall of smoke studded with stars in this image from the NASA/ESA Hubble Space Telescope.",
    thumb: "images/t012.jpg",
    img: "images/pic-012.jpg"
  }
]
const starsRow = document.getElementById('starsRow');
const cards = [];

for (const star of stars) {
  const card = `
    <div class="col">
      <div class="card">
        <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="${star.thumb}" 
        class="card-img-top" alt="placeholder kitten" data-fullimg="${star.img}">
        <div class="card-body">
          <h5 class="card-title">${star.name}</h5>
          <p class="card-text">${star.bio}</p>
          <a href="#" class="btn btn-light">Like</a>
        </div>
      </div>
    </div>`;
  cards.push(card);
}

starsRow.insertAdjacentHTML("afterbegin", cards.join(""));

const cardImages = document.querySelectorAll(".card-img-top");

for (const cardImage of cardImages) {
  cardImage.addEventListener("click", openModal);
}

const odalIg = document.getElementById('odalIg')
function openModal(){
  console.log(this.dataset.fullimg)
  const fullImage = this.dataset.fullimg
  odalIg.setAttribute('src',this.dataset.fullimg)
}
