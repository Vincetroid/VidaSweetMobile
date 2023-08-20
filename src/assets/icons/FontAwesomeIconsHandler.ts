import {
  faGear,
  faIceCream,
  faCake,
  faCakeCandles,
  faCartShopping,
  faTrash,
  faChevronCircleLeft,
  faHome,
  faPlus,
  faHeart,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

const addFontAwesomeIcons = () => {
  library.add(
    fab,
    faGear,
    faCake,
    faCakeCandles,
    faIceCream,
    faCartShopping,
    faTrash,
    faChevronCircleLeft,
    faHome,
    faPlus,
    faHeart,
    faChevronLeft,
  );
};

export default addFontAwesomeIcons;
