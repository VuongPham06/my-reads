export const shelves = [
  {
    id: "currentlyReading",
    name: "Currently Reading"
  },
  {
    id: "wantToRead",
    name: "Want to read",
  },
  {
    id: "read",
    name: "Read",
  },
  {
    id: "none",
    name: "None"
  }
];

export const bookShelves = shelves.filter(shelf => shelf.id !== 'none');
