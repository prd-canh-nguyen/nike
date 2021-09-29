function checkParams(params) {
  switch (params) {
    case "new-releases":
      return "New releases";
    case "best-sellers":
      return "Best sellers";
    case "supper-2-hits":
      return "Supper 2 hits";
    case "tops-t-shirts":
      return "Tops T-Shirts";
    case "shorts":
      return "Shorts";
    case "pants-leggings":
      return "Pants and leggings";
    default:
      break;
  }
}

export default checkParams;
