export type MenuItem = {
  title: string;
  id: number;
  path: string;
};

const MENU: MenuItem[] = [
  {
    title: "Home",
    id: 0,
    path: "/home",
  },
  {
    title: "Products",
    id: 1,
    path: "/products",
  },
  {
    title: "Categories",
    id: 2,
    path: "/categories",
  },
  {
    title: "About",
    id: 3,
    path: "/about",
  },
  {
    title: "Contact",
    id: 4,
    path: "/contact",
  },
];

export default MENU;
