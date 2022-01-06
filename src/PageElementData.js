const pageElements = [
  {
    title: "Background",
    id: "background",
    group: "secondary",
    coords: [
      { x: 0, y: 0 },
      { x: 1000, y: 0 },
      { x: 1000, y: 1000 },
      { x: 0, y: 1000 },
    ],
  },
  {
    title: "Top Menu",
    id: "topmenu",
    group: "menus",
    opacity: 1,
    coords: [
      { x: 0, y: 0 },
      { x: 1000, y: 0 },
      { x: 1000, y: 75 },
      { x: 0, y: 75 },
    ],
  },
  {
    title: "Side Menu",
    id: "sidemenu",
    group: "menus",
    opacity: 1,
    coords: [
      { x: 0, y: 75 },
      { x: 50, y: 75 },
      { x: 50, y: 1000 },
      { x: 0, y: 1000 },
    ],
  },
  {
    title: "Headline Text",
    id: "headlinetext",
    group: "headlinetext",
    coords: [
      { x: 300, y: 150 },
      { x: 800, y: 150 },
      { x: 800, y: 200 },
      { x: 300, y: 200 },
    ],
  },
  {
    title: "Cta Button 1",
    id: "ctabutton1",
    group: "primary",
    opacity: 1,
    coords: [
      { x: 400, y: 350 },
      { x: 500, y: 350 },
      { x: 500, y: 400 },
      { x: 400, y: 400 },
    ],
  },
  {
    title: "Cta Button 2",
    id: "ctabutton2",
    group: "primary",
    opacity: 1,
    coords: [
      { x: 550, y: 350 },
      { x: 650, y: 350 },
      { x: 650, y: 400 },
      { x: 550, y: 400 },
    ],
  },
  {
    title: "Optional Section 1",
    id: "section1",
    group: "section1",
    coords: [
      { x: 50, y: 450 },
      { x: 1000, y: 450 },
      { x: 1000, y: 900 },
      { x: 50, y: 900 },
    ],
  },
];

export default pageElements;
