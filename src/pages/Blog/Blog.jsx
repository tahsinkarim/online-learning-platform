import React from "react";

const Blog = () => {
  const blogs = [
    {
      ques: "What is CORS?",
      ans: "Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism controlled and enforced by the web browser. It allows a service (API) to indicate any origin other than its own from which the client can request resources. It has been designed in response to the same-origin policy (SOP) that restricts how a website (HTML document or JS script) loaded by one origin can interact with a resource from another origin.",
      paragraph:
        "CORS is used to explicitly allow some cross-origin requests while rejecting others. CORS is implemented primarily in web browsers, but it can also be used in API clients as an option.",
    },
    {
      ques: "Why are you using firebase? What other options do you have to implement authentication?",
      ans: "It saves time on developing Web-service methods for authentication. Also, there is considerable time saved since we can avoid developing server-side methods for different kinds of token verification in case you want to add social logins like Facebook and Google. All that will be handled efficiently with Firebase. Also with Firebase authentication, you can also get good analytics and demographic information of users.",
      paragraph:
        "Some of the alternative for firebase authentication are: Okta , Auth0, Keycloak, Amazon Cognito, Backendless ",
    },
    {
      ques: "How does the private route work?",
      ans: "Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route. So if a user is not authorized for a specific page, they cannot access it. ",
      paragraph:
        "The idea here is to render our component if the user is authenticated or redirect the user to login if not authenticated.",
    },
    {
      ques: "What is Node? How does Node work?",
      ans: "Node.js is a JavaScript runtime for building server-side or desktop applications. JavaScript was mainly used for web browsers only. This limitation meant that developers were often working in many different languages and frameworks between the front-end and backend. Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.",
      paragraph:
        "Node.js is written in C, C++, and JavaScript, and it is built on the open-source V8 JavaScript engine which also powers JS in browsers such as Google Chrome. As V8 supports new features in JavaScript, they are incorporated into Node.",
    },
  ];
  return (
    <div className='container mx-auto max-w-5xl py-10'>
      {blogs.map((blog) => (
        <div key={blog.ques} className='card bg-base-200 mx-4 my-4'>
          <div className='card-body'>
            <h2 className='card-title'>{blog.ques}</h2>
            <hr />
            <p>{blog.ans}</p>
            <p>{blog.paragraph}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
