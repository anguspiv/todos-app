import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import Index, { GET_TODOS_QUERY } from '~/routes/_index';

const mocks = [
  {
    request: {
      query: GET_TODOS_QUERY,
    },
    result: {
      data: {
        filterTodos: [
          {
            id: 'abcdefg',
            description: 'Test Todo',
            completed: false,
          },
        ],
      },
    },
  },
];

describe('Index', () => {
  it('should render the home page', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <Index />
      </MockedProvider>,
    );

    const heading = screen.getByRole('heading', { name: 'Remix + Apollo Todos' });

    expect(heading).toBeInTheDocument();

    await waitFor(() => expect(screen.queryByText('Test Todo')).toBeInTheDocument());
  });
});
