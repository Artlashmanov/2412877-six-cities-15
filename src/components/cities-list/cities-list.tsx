import { memo } from 'react';
import { CITIES } from '../../const.ts';
import CityItem from '../city-item/city-item.tsx';

type CitiesListProps = {
  activeCity: string;
}

const CitiesList = memo(({activeCity}: CitiesListProps): JSX.Element => (
  <ul className="locations__list tabs__list" data-testid='cities-list'>
    {CITIES.map((city) => (
      <li className="locations__item" key={city.name}>
        <CityItem city={city.name} activeCity={activeCity} />
      </li>
    ))}
  </ul>
));

CitiesList.displayName = 'CitiesList';

export default CitiesList;
