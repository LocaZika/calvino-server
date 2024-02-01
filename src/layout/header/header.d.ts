// Navbar
type TNavbarItem = {
  id: string,
  name: string,
  path: string,
};
// Header
type THeader = {
  navbar: TNavbarItem[],
  callUs: string,
  contact: {
    name: string,
    path: string,
  },
  createAt: Date,
  updateAt: Date,
};