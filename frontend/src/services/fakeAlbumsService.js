const albums = [
  {
    _id: "4a21ca3eeb7f6fbccd471801",
    artistId: "5b21ca3eeb7f6fbccd471811",
    name: "Curtis Mayfield",
    title: "Curtis",
    year: "1970",
    format: "Album",
    imageUrl: "CurtisMayfield_Curtis.png",
    songs: [
      {
        number: "1",
        title: "(Don't Worry) If There's A Hell Below We're All Going To Go",
        length: "7:46",
      },
      { number: "1", title: "The Other Side Of Town", length: "4:00" },
      { number: "2", title: "The Makings Of You", length: "3:40" },
      {
        number: "3",
        title: "We The People Who Are Darker Than Blue",
        length: "6:10",
      },
      { number: "4", title: "Move On Up", length: "8:50" },
      { number: "5", title: "Miss Black America", length: "2:55" },
      { number: "6", title: "Wild And Free", length: "3:12" },
      { number: "7", title: "Give It Up", length: "3:45" },
    ],
    description: "",
  },
  {
    _id: "4a21ca3eeb7f6fbccd471802",
    artistId: "5b21ca3eeb7f6fbccd471811",
    name: "Curtis Mayfield",
    title: "Roots",
    year: "1971",
    format: "Album",
    imageUrl: "CurtisMayfield_Roots.png",
    songs: [
      { number: "1", title: "Get Down", length: "5:45" },
      { number: "2", title: "Keep On Keeping On", length: "5:08" },
      { number: "3", title: "Underground", length: "5:15" },
      { number: "4", title: "We Got To Have Peace", length: "4:44" },
      { number: "5", title: "Beautiful Brother Of Mine", length: "7:23" },
      { number: "6", title: "Now You're Gone", length: "6:50" },
      { number: "7", title: "Love To Keep You In My Mind", length: "3:48" },
    ],
    description: "",
  },
  {
    _id: "4a21ca3eeb7f6fbccd471803",
    artistId: "5b21ca3eeb7f6fbccd471812",
    name: "Leroy Hutson",
    title: "Love Oh Love",
    year: "1973",
    format: "Album",
    imageUrl: "LeroyHutson_LoveOnLove.png",
    songs: [
      { number: "1", title: "So In Love With You", length: "2:58" },
      { number: "2", title: "Love Oh Love", length: "3:48" },
      { number: "3", title: "When You Smile", length: "4:21" },
      {
        number: "4",
        title: "Getting It On (Theme For The 'Jay Johnson Affair')",
        length: "3:59",
      },
      { number: "5", title: "Time Brings On A Change", length: "4:45" },
      { number: "6", title: "I'll Be There, I'll Still Care", length: "3:07" },
      { number: "7", title: "I'm In Love With You Girl", length: "2:40" },
      { number: "8", title: "As Long As There's Love Around", length: "3:31" },
    ],
    description: "",
  },
  {
    _id: "4a21ca3eeb7f6fbccd471804",
    artistId: "5b21ca3eeb7f6fbccd471812",
    name: "Leroy Hutson",
    title: "Roots",
    year: "1974",
    format: "Album",
    imageUrl: "",
    songs: [
      { number: "1", title: "Can't Say Enough About Mom", length: "6:17" },
      { number: "2", title: "Gotta Move - Gotta Groove", length: "3:37" },
      { number: "3", title: "Ella Weez", length: "2:59" },
      { number: "4", title: "Give This Love A Try", length: "3:34" },
      { number: "5", title: "The Ghetto '74", length: "4:32" },
      { number: "6", title: "After The Fight", length: "3:15" },
      { number: "7", title: "Could This Be Love", length: "3:06" },
      { number: "8", title: "Dudley Do-Right", length: "3:44" },
    ],
    description: "",
  },
  {
    _id: "4a21ca3eeb7f6fbccd471805",
    artistId: "5b21ca3eeb7f6fbccd471813",
    name: "Aretha Franklin",
    title: "Aretha In Person with The Ray Bryant Combo",
    year: "1970",
    format: "Album",
    imageUrl: "ArethaFranklin_Aretha.png",
    songs: [
      { number: "1", title: "Won't Be Long", length: "3:07" },
      { number: "2", title: "Over the Rainbow", length: "2:37" },
      { number: "3", title: "Love is the Only Thing", length: "2:39" },
      { number: "4", title: "Sweet Lover", length: "3:21" },
      { number: "5", title: "All Night Long", length: "2:57" },
      { number: "6", title: "Who Needs You", length: "2:45" },
      { number: "7", title: "Right Now", length: "2:22" },
      { number: "8", title: "Are You Sure", length: "2:40" },
    ],
    description: "",
  },
  {
    _id: "4a21ca3eeb7f6fbccd471806",
    artistId: "5b21ca3eeb7f6fbccd471814",
    name: "Barry White",
    title: "Stone Gon'",
    year: "1973",
    format: "Album",
    imageUrl: "BarryWhite_StoneGon.png",
    songs: [
      {
        number: "1",
        title: "Girl It's True, Yes I'll Always Love You",
        length: "3:07",
      },
    ],
    description: "",
  },
  {
    _id: "4a21ca3eeb7f6fbccd471807",
    artistId: "5b21ca3eeb7f6fbccd471815",
    name: "The Fatback Band",
    title: "Stone Gon'",
    year: "1974",
    format: "Album",
    imageUrl: "TheFatBackBand_FeelMySoul.png",
    songs: [{ number: "1", title: "Feeling Mellow", length: "3:07" }],
    description: "",
  },
  {
    _id: "4a21ca3eeb7f6fbccd471808",
    artistId: "5b21ca3eeb7f6fbccd471816",
    name: "Ray Charles",
    title: "Hallellujah I Love Her So'",
    year: "1957",
    format: "Album",
    imageUrl: "RayCharles_Hallelujah.png",
    songs: [{ number: "1", title: "Feeling Mellow", length: "3:07" }],
    description: "",
  },
];

const popularAlbums = [
  {
    _id: "1b21ca3eeb7f6fbccd471811",
    name: "Live at the Apollo",
  },
  {
    _id: "1b21ca3eeb7f6fbccd471812",
    name: "Superfly",
  },
  {
    _id: "1b21ca3eeb7f6fbccd471813",
    name: "Aretha Arrives",
  },
  {
    _id: "1b21ca3eeb7f6fbccd471814",
    name: "Roots",
  },
];

export function getPopularAlbums() {
  return popularAlbums;
}

export function getAlbum(id) {
  return albums.find((a) => a._id === id);
}
