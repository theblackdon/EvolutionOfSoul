const artists = [
  {
    _id: "5b21ca3eeb7f6fbccd471811",
    name: "Curtis Mayfield",
    born: "3 June 1942",
    died: "26 December 1999",
    bio: "Co-founder of R&B vocal group The Impressions in the late 1950's. He left The Impressions in 1970 to embark on a solo career and co-founded the record label Curtom, alongside Eddie Thomas. ",
    imageUrl: "CurtisMayfield.png",
    genres: [{ genre: "Funk" }, { genre: "Soul" }],
    albums: [
      {
        _id: "4a21ca3eeb7f6fbccd471801",
        title: "Curtis",
        imageUrl: "CurtisMayfield_Curtis.png",
      },
      {
        _id: "4a21ca3eeb7f6fbccd471802",
        title: "Roots",
        imageUrl: "CurtisMayfield_Roots.png",
      },
    ],
  },
  {
    _id: "5b21ca3eeb7f6fbccd471812",
    name: "Leroy Hutson",
    born: "4 June 1945",
    died: "",
    bio: "American vocalist, keyboardist, songwriter and producer. Born 4th June 1945, Newark, New Jersey, U.S.A.. He was a roommate of Donny Hathaway and co-wrote the 1970 hit “The Ghetto”. In 1971 he replaced Curtis Mayfield as The Impressions’ lead singer. He left The Impressions in 1973 for a solo career but still stayed with the Curtom label until December 1979.",
    imageUrl: "LeroyHutson.png",
    genres: [{ genre: "Funk" }, { genre: "Soul" }],
    albums: [
      {
        _id: "4a21ca3eeb7f6fbccd471803",
        title: "Love Oh Love",
        imageUrl: "LeroyHutson_LoveOnLove.png",
      },
      {
        _id: "4a21ca3eeb7f6fbccd471804",
        title: "The Man",
        imageUrl: "LeroyHutson_TheMan.png",
      },
    ],
  },
  {
    _id: "5b21ca3eeb7f6fbccd471813",
    name: "Aretha Franklin",
    born: "25 March 1942 in Memphis, Tennessee, USA",
    died: "16 August 2018 in Detroit, Michigan, USA",
    bio: "Widely regarded as one of, usually the best, female vocalists of all time, she is nicknamed the 'Queen of Soul' or simply referred to as 'Aretha'. In 1987 she was the first woman to be inducted into the Rock & Roll Hall of Fame (Performer).",
    imageUrl: "ArethaFranklin.png",
    genres: [{ genre: "Gospel" }, { genre: "Soul" }, { genre: "R&B" }],
    albums: [
      {
        _id: "4a21ca3eeb7f6fbccd471805",
        title: "Aretha In Person with The Ray Bryant Combo",
        imageUrl: "ArethaFranklin_Aretha.png",
      },
    ],
  },
  {
    _id: "5b21ca3eeb7f6fbccd471814",
    name: "Barry White",
    born: "September 12, 1944, Galveston, Texas, USA ",
    died: "July 4, 2003, Los Angeles, California, USA",
    bio: "He was also musician, record producer and composer; and three-time Grammy Award–winner known for his distinctive bass-baritone voice.",
    imageUrl: "BarryWhite.png",
    genres: [{ genre: "Soul" }, { genre: "R&B" }],
    albums: [
      {
        _id: "4a21ca3eeb7f6fbccd471806",
        title: "Stone Gon'",
        imageUrl: "BarryWhite_StoneGon.png",
      },
    ],
  },
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "The Fatback Band",
    born: "",
    died: "",
    bio: "They were the band concept of innovative drummer Bill Curtis that wished to merge the 'fatback' jazz beat of New Orleans into a funk band.",
    imageUrl: "TheFatbackBand.png",
    genres: [{ genre: "Funk" }, { genre: "R&B" }],
    albums: [
      {
        _id: "4a21ca3eeb7f6fbccd471807",
        title: "Stone Gon'",
        imageUrl: "TheFatBackBand_FeelMySoul.png",
      },
    ],
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Ray Charles",
    born: " September 23, 1930, Albany, Georgia, USA",
    died: "June 10, 2004, Beverly Hills, California, USA",
    bio: "An American singer, songwriter, musician, and composer, he was inducted into Rock And Roll Hall of Fame in 1986 (Performer).",
    imageUrl: "RayCharles.png",
    genres: [{ genre: "Blues" }, { genre: "Soul" }],
    albums: [
      {
        _id: "4a21ca3eeb7f6fbccd471808",
        title: "Hallellujah I Love Her So'",
        imageUrl: "RayCharles_Hallelujah.png",
      },
    ],
  },
];

const popularArtists = [
  {
    _id: "5b21ca3eeb7f6fbccd471811",
    name: "Curtis Mayfield",
    imageUrl: "CurtisMayfield.png",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471812",
    name: "Leroy Hutson",
    imageUrl: "LeroyHutson.png",
  },
];

const previouslyFeaturedArtists = [
  {
    _id: "5b21ca3eeb7f6fbccd471813",
    name: "Aretha Franklin",
    imageUrl: "ArethaFranklin.png",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471814",
    name: "Barry White",
    imageUrl: "BarryWhite.png",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "The Fatback Band",
    imageUrl: "TheFatbackBand.png",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Ray Charles",
    imageUrl: "RayCharles.png",
  },
];

export function getArtists() {
  return artists;
}

export function getAllArtists() {
  return artists.map((artist) => {
    return { _id: artist._id, name: artist.name };
  });
}

export function getArtist(id) {
  return artists.find((a) => a._id === id);
}

export function getPopularArtists() {
  return popularArtists;
}

export function getPreviouslyFeaturedArtists() {
  return previouslyFeaturedArtists;
}
