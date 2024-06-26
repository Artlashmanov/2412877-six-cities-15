import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Card, { PremiumBadgeForCard } from './card';
import { makeFakeCard, makeFakeStore } from '../../utils/mocks';
import { withStore } from '../../utils/mock-component';

describe('Component: PremiumBadgeForCard', () => {
  it('should render correct', () => {
    const expectedText = 'Premium';

    render(<PremiumBadgeForCard />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});

describe('Component: Card', () => {
  it('should render correct', () => {
    const mockCard = makeFakeCard();
    const expectedText = mockCard.title;
    const { withStoreComponent } = withStore(<Card card={mockCard} />, makeFakeStore());

    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
