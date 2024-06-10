import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData,
} from '@remix-run/react';

import '~/styles/global.css';

export async function loader() {
  return json({
    ENV: {
      LOG_LEVEL: process.env.LOG_LEVEL,
      GRAPHQL_URI: process.env.GRAPHQL_URI,
    },
  });
}

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data?.ENV || {})};`,
          }}
        />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
