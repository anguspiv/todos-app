import type { MetaFunction } from '@remix-run/node';
import { gql, useQuery } from '@apollo/client/index';
import { Todo } from 'src/__generated__/graphql';

export const GET_TODOS_QUERY = gql`
  query FilterTodos {
    filterTodos {
      completed
      description
      id
      createdAt
    }
  }
`;

export const meta: MetaFunction = () => [
  { title: 'New Remix App' },
  { name: 'description', content: 'Welcome to Remix!' },
];

export default function Index() {
  const { data, loading, error } = useQuery(GET_TODOS_QUERY);

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Remix + Apollo Todos</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <ul>
          {data.filterTodos.map((todo: Todo) => (
            <li key={todo.id}>
              <input type="checkbox" checked={todo.completed} readOnly />
              <span style={{ marginLeft: 8 }}>{todo.description}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
