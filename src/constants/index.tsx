export const HEADERARRAY = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export interface IProject {
  img: string;
  title: string;
  description: string;
  tech: {
    frontend: string;
    backend: string;
  };
  href: string;
  code: string;
}

export const PROJECTS: IProject[] = [
  {
    img: "/home/project-1.png",
    title: "Ecommerce Website",
    description:
      "A modern fashion e-commerce website that allows users to browse products, add items to their cart, and place orders online. The interface is fully responsive and optimized for both desktop and mobile devices. Administrators can manage products through a dedicated dashboard, including features to add, edit, or delete items.",
    tech: {
      frontend: "ReactJS, NextJS, TailwindCSS",
      backend: "NodeJS, ExpressJS, MongoDB",
    },
    href: "https://my-next-app-theta-lac.vercel.app/vi",
    code: "https://github.com/DuongXoBH/admin-dashboard.git",
  },
  {
    img: "/home/project-2.jpg",
    title: "Project Two",
    description:
      "A modern fashion e-commerce website that allows users to browse products, add items to their cart, and place orders online. The interface is fully responsive and optimized for both desktop and mobile devices. Administrators can manage products through a dedicated dashboard, including features to add, edit, or delete items.",
    tech: {
      frontend: "ReactJS, NextJS, TailwindCSS",
      backend: "NodeJS, ExpressJS, MongoDB",
    },
    href: "#",
    code: "#",
  },
  {
    img: "/home/project-3.jpg",
    title: "Project Three",
    description:
      "A modern fashion e-commerce website that allows users to browse products, add items to their cart, and place orders online. The interface is fully responsive and optimized for both desktop and mobile devices. Administrators can manage products through a dedicated dashboard, including features to add, edit, or delete items.",
    tech: {
      frontend: "ReactJS, NextJS, TailwindCSS",
      backend: "NodeJS, ExpressJS, MongoDB",
    },
    href: "#",
    code: "#",
  },
  {
    img: "/home/project-4.jpg",
    title: "Project Four",
    description:
      "A modern fashion e-commerce website that allows users to browse products, add items to their cart, and place orders online. The interface is fully responsive and optimized for both desktop and mobile devices. Administrators can manage products through a dedicated dashboard, including features to add, edit, or delete items.",
    tech: {
      frontend: "ReactJS, NextJS, TailwindCSS",
      backend: "NodeJS, ExpressJS, MongoDB",
    },
    href: "#",
    code: "#",
  },
];
