import React from "react";

const JavaScriptNode = () => {
  return (
    <table className="border-collapse border border-slate-500 ...">
      <thead className="">
        <tr>
          <th className="border border-slate-600 ">Features</th>
          <th className="border border-slate-600 ">JavaScript</th>
          <th className="border border-slate-600">Node JS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-slate-700 font-semibold text-black p-2">
            Definition
          </td>
          <td className="border border-slate-700 p-2">
            It is an open-source, cross-platform, interpreted, lightweight
            scripting programming language that is used to develop dynamic and
            web applications.
          </td>
          <td className="border border-slate-700 p-2">
            It is a cross-platform, open-source JavaScript runtime environment
            that allows JavaScript to be run on the server.
          </td>
        </tr>

        <tr>
          <td className="border border-slate-700 font-semibold text-black p-2">
            Type
          </td>
          <td className="border border-slate-700 p-2">
            It is a programming language. It works in any browser that has a
            proper browser engine.
          </td>
          <td className="border border-slate-700 p-2">
            It's a JavaScript interpreter and environment with some valuable
            libraries that JavaScript programming can use separately.
          </td>
        </tr>

        <tr>
          <td className="border border-slate-700 font-semibold text-black p-2">
            Dedicated Server
          </td>
          <td className="border border-slate-700 p-2">
            It is generally used on the client-side server.
          </td>
          <td className="border border-slate-700 p-2">
            It is generally used on the server-side.
          </td>
        </tr>

        <tr>
          <td className="border border-slate-700 font-semibold text-black p-2">
            Community
          </td>
          <td className="border border-slate-700 p-2">
            All the JavaScript is not important to the node community.
          </td>
          <td className="border border-slate-700 p-2">
            All node projects represent the JavaScript community.
          </td>
        </tr>

        <tr>
          <td className="border border-slate-700 font-semibold text-black p-2">
            Running Engines
          </td>
          <td className="border border-slate-700 p-2">
            JavaScript can be run on any engine, including Spider Monkey, V8,
            and JavaScript Core.
          </td>
          <td className="border border-slate-700 p-2">
            Node JS is only supported by the V8 engine, which Google Chrome
            mostly uses. Any JavaScript program written with Node JS will always
            be run in the V8 engine.
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default JavaScriptNode;
