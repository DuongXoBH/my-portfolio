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
    img: "https://res.cloudinary.com/dtg8bciwm/image/upload/v1750324082/images/image/lchvl6ctyi01sk5g08pu.jpg",
    title: "Task Management Website",
    description:
      "A task management website that allows users to create, update, and delete tasks. The interface is fully responsive and optimized for both desktop and mobile devices. Administrators can manage users and their tasks through a dedicated dashboard.",
    tech: {
      frontend: "ReactJS, Vite, TailwindCSS",
      backend: "NodeJS, ExpressJS, MongoDB",
    },
    href: "https://task-manager-five-ochre.vercel.app/",
    code: "https://github.com/DuongXoBH/task-manager.git",
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
