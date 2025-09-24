import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders welcome hero heading', async () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  const heading = await screen.findByText(/High‑quality piping solutions, delivered\./i);
  expect(heading).toBeInTheDocument();
});

test('navigates to pipeline services route', async () => {
  render(
  <MemoryRouter initialEntries={["/construction-material-supplies"]}>
      <App />
    </MemoryRouter>
  );
  const cardTitle = await screen.findByText(/Pipeline Services/i);
  expect(cardTitle).toBeInTheDocument();
});
