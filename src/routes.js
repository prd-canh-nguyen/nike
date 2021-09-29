import HomeContainer from "./containers/HomeContainer";
import AddToCartContainer from "./containers/AddToCartContainer";
import CartPayContainer from "./containers/CartPayContainer";
import ProductListContainer from "./containers/ProductListContainer";
import NotFoundPage from './pages/NotFound/NotFoundPage'
import ContactPage from './pages/ContactPage/ContactPage'
const routes = [
  {
    path: "/nike/snkrs",
    exact: true,
    main: () => <NotFoundPage />,
  },
  {
    path: "/nike/contact",
    exact: true,
    main: () => <ContactPage />,
  },
  {
    path: "/nike/pay-cart",
    exact: true,
    main: () => <CartPayContainer />,
  },
  {
    path: "/nike/:slug",
    exact: true,
    main: () => <HomeContainer />,
  },
  {
    path: "/nike/cart/:slug",
    exact: true,
    main: () => <AddToCartContainer />,
  },
  {
    path: "/nike/:sex/:slug",
    exact: true,
    main: () => <ProductListContainer />,
  },
  {
    path: "",
    exact: true,
    main: () => <NotFoundPage />,
  },
];

export default routes;
