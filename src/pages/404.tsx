import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import Page from "../components/Page";

import general from '../content/general.json';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Page general={general}>
      <h1 className="mt-24 mb-16">Page not found</h1>
      <p className="mb-12">
        Sorry 😔, we couldn't find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code className="text-orange-800 p-1 bg-yellow-100 text-lg rounded">src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link className="text-blue-800 hover:underline" to="/">
          Go home
        </Link>
        .
      </p>
    </Page>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
