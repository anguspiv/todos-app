/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import { RemixBrowser } from '@remix-run/react';
import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';

startTransition(() => {
  const client = new ApolloClient({
    uri: (window.ENV.GRAPHQL_URI || 'http://localhost:4000/graphql') as string,
    // eslint-disable-next-line no-underscore-dangle
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  });

  hydrateRoot(
    document,
    <StrictMode>
      <ApolloProvider client={client}>
        <RemixBrowser />
      </ApolloProvider>
    </StrictMode>,
  );
});
