// TODO: Check if it's actually required
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCake,
  faCakeCandles,
  faCartShopping,
  faChevronCircleLeft,
  faChevronLeft,
  faGear,
  faHeart,
  faHome,
  faIceCream,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

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
