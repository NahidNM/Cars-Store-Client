import React from "react";

const BlogPage = () => {
  return (
    <div className="pt-16">
      <div className="my-5 md:mx-56 md:p-7 bg-slate-300 rounded-xl">
        <h1 className="text-4xl font-bold text-center text-stone-700">
          The Answers
        </h1>
        <hr className="mt-1 border-2 md:mx-28 border-stone-700 " />
      </div>

      <div className="my-5 md:mx-5 p-7 bg-slate-300 rounded-xl">
        <h1 className="text-2xl font-bold text-stone-700">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h1>
        <hr className="my-1 border-2 md:mr-24 border-stone-500" />
        <p>
          Refresh token:
          <br />
          A refresh token just helps you re-validate a user without them having
          to re-enter their login credentials multiple times. <br />
          Access token: <br />
          The access token is re-issued, provided the refresh token is a valid
          one requesting permission to access confidential resources.
        </p>
        <br />
        <h1 className="text-xl font-medium">
          {" "}
          They work and where should we store them on the client-side :
        </h1>
        <p>
          1. The client application sends the user's credentials (e.g., username
          and password) to the authentication server.
        </p>
        <p>
          2. The authentication server verifies the credentials and, if valid,
          generates an access token and a refresh token.
        </p>
        <p>
          3. The authentication server verifies the credentials and, if valid,
          generates an access token and a refresh token.
        </p>
        <p>
          4. The client application includes the access token in subsequent
          requests to access protected resources on the server.{" "}
        </p>
        <p>
          5. When the access token expires, the client can use the refresh token
          to request a new access token from the authentication server, without
          requiring the user's credentials.
        </p>
        <p>
          6. If the refresh token is valid, the authentication server issues a
          new access token to the client.
        </p>

        <p>
          7. The client continues to include the new access token in future
          requests, repeating the process when necessary.
        </p>
      </div>
      <div className="my-5 md:mx-5 p-7 bg-slate-300 rounded-xl">
        <h1 className="text-2xl font-bold text-stone-700">
          Compare SQL and NoSQL databases?
        </h1>
        <hr className="my-1 border-2 md:mr-24 border-stone-500" />
        <p>
          SQL databases are vertically scalable, while NoSQL databases are
          horizontally scalable. SQL databases are table-based, while NoSQL
          databases are document, key-value, graph, or wide-column stores. SQL
          databases are better for multi-row transactions, while NoSQL is better
          for unstructured data like documents or JSON.
        </p>
      </div>
      <div className="my-5 md:mx-5 p-7 bg-slate-300 rounded-xl">
        <h1 className="text-2xl font-bold text-stone-700">
          What is express js? What is Nest JS?
        </h1>
        <hr className="my-1 border-2 md:mr-24 border-stone-500" />
        <p>
          Nest.Js :
          <br />
          NestJS is a Node.js framework for building server-side applications.
          It is based on TypeScript and JavaScript. <br />
          Express.Js : <br />
          Express is a Node.js web application framework that provides a wide
          range of functionality for constructing web and mobile applications.
          It is a layer built on top of Node that aids in the management of
          servers and routes.
        </p>
      </div>
      <div className="my-5 md:mx-5 p-7 bg-slate-300 rounded-xl">
        <h1 className="text-2xl font-bold text-stone-700">
          What is MongoDB aggregate and how does it work?
        </h1>
        <hr className="my-1 border-2 md:mr-24 border-stone-500" />
        <p>
          Aggregation is a way of processing a large number of documents in a
          collection by means of passing them through different stages. The
          stages make up what is known as a pipeline. The stages in a pipeline
          can filter, sort, group, reshape and modify documents that pass
          through the pipeline.
        </p>
        <h1 className="text-xl font-medium">work :</h1>
        <p>
          $match stage – filters those documents we need to work with, those
          that fit our needs <br />
          $group stage – does the aggregation job <br />
          $sort stage – sorts the resulting documents the way we require
          (ascending or descending)
        </p>
      </div>
    </div>
  );
};

export default BlogPage;
<h1>Blog page</h1>;
