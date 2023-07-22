// component
import SvgColor from "../../../components/svg-color";

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const navConfig = [
  {
    title: "home",
    path: "/home/app",
    icon: icon("ic_analytics"),
  },
  {
    title: "product",
    path: "/home/products",
    icon: icon("ic_cart"),
  },
  {
    title: "recipe",
    path: "/home/recipe",
    icon: icon("ic_blog"),
  },
  // {
  //   title: "login",
  //   path: "/login",
  //   icon: icon("ic_lock"),
  // },
];

export default navConfig;
