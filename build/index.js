var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server");

// app/env.server.ts
var import_zod = require("zod"), schema = import_zod.z.object({
  SESSION_SECRET: import_zod.z.string().min(1)
});
function getEnv() {
  return schema.parse(process.env);
}

// app/entry.server.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
global.ENV = getEnv();
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 44,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 85,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("script", { src: "https://cdn.tailwindcss.com" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/lazy/index.tsx
var lazy_exports = {};
__export(lazy_exports, {
  default: () => lazy_default,
  loader: () => loader
});
var import_node2 = require("@remix-run/node"), import_react3 = require("@remix-run/react"), import_react4 = require("react");

// app/features/Lazy/lazy.api.ts
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function getCidades() {
  return fetch(
    "https://brasilapi.com.br/api/ibge/municipios/v1/SP?providers=dados-abertos-br"
  ).then((res) => delay(5e3).then(() => res.json()));
}
async function getEndereco() {
  return fetch(
    "https://brasilapi.com.br/api/cep/v1/15970000"
  ).then((res) => res.json());
}

// app/routes/lazy/index.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
async function loader() {
  let cidades = getCidades(), endereco = await getEndereco();
  return (0, import_node2.defer)({
    cidades,
    endereco
  });
}
function lazy_default() {
  let { cidades, endereco } = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
      endereco.street,
      " ",
      endereco.neighborhood,
      " ",
      endereco.city,
      " ",
      endereco.state,
      " ",
      endereco.cep
    ] }, void 0, !0, {
      fileName: "app/routes/lazy/index.tsx",
      lineNumber: 23,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/lazy/index.tsx",
      lineNumber: 22,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Carregando Cidades" }, void 0, !1, {
      fileName: "app/routes/lazy/index.tsx",
      lineNumber: 28,
      columnNumber: 33
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Await, { resolve: cidades, children: (cidades2) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "space-y-4 text-left text-gray-500 dark:text-gray-400", children: cidades2.map((cidade) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "flex items-center space-x-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { className: "flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M1 5.917 5.724 10.5 15 1.5" }, void 0, !1, {
        fileName: "app/routes/lazy/index.tsx",
        lineNumber: 37,
        columnNumber: 41
      }, this) }, void 0, !1, {
        fileName: "app/routes/lazy/index.tsx",
        lineNumber: 36,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: cidade.nome }, void 0, !1, {
        fileName: "app/routes/lazy/index.tsx",
        lineNumber: 39,
        columnNumber: 37
      }, this)
    ] }, cidade.codigo_ibge, !0, {
      fileName: "app/routes/lazy/index.tsx",
      lineNumber: 35,
      columnNumber: 33
    }, this)) }, void 0, !1, {
      fileName: "app/routes/lazy/index.tsx",
      lineNumber: 32,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/routes/lazy/index.tsx",
      lineNumber: 29,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/lazy/index.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/lazy/index.tsx",
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  loader: () => loader2
});

// app/session.server.ts
var import_node3 = require("@remix-run/node"), { getSession, commitSession, destroySession } = (0, import_node3.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: !0,
    maxAge: 60,
    path: "/",
    sameSite: "lax",
    secrets: [ENV.SESSION_SECRET],
    secure: !0
  }
});
async function getLoggedUser(request) {
  let session = await getSession(request.headers.get("Cookie"));
  if (!session.has("user"))
    throw (0, import_node3.redirect)("/login");
  return session.get("user");
}

// app/routes/logout.tsx
var import_node4 = require("@remix-run/node");
async function loader2({ request }) {
  let session = await getSession(request.headers.get("Cookie"));
  return (0, import_node4.redirect)("/", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  loader: () => loader3
});
var import_node5 = require("@remix-run/node");
async function loader3() {
  return (0, import_node5.redirect)("/users");
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action,
  default: () => login_default,
  links: () => links
});
var import_node7 = require("@remix-run/node"), import_domain_functions = require("domain-functions"), import_remix_forms3 = require("remix-forms");

// app/features/Auth/auth.api.ts
var import_zod2 = require("zod");

// app/db/db.server.ts
var import_client = require("@prisma/client"), db;
global.__db || (global.__db = new import_client.PrismaClient()), db = global.__db;

// app/features/Auth/auth.api.ts
var import_bcryptjs = __toESM(require("bcryptjs")), LoginInputSchema = import_zod2.z.object({
  email: import_zod2.z.string().email().trim(),
  password: import_zod2.z.string().min(1)
});
async function login(values2) {
  let user = await db.user.findUnique({
    where: {
      email: values2.email
    }
  });
  if (!user)
    throw "User not found";
  if (!await import_bcryptjs.default.compare(values2.password, user.password))
    throw "Invalid password";
  return user;
}

// app/remix-forms/form.ts
var import_react5 = require("@remix-run/react"), import_remix_forms = require("remix-forms"), Form = (0, import_remix_forms.createForm)({
  component: import_react5.Form,
  useNavigation: import_react5.useTransition,
  useSubmit: import_react5.useSubmit,
  useActionData: import_react5.useActionData
});

// app/remix-forms/form-action.server.ts
var import_node6 = require("@remix-run/node"), import_remix_forms2 = require("remix-forms"), formAction = (0, import_remix_forms2.createFormAction)({ redirect: import_node6.redirect, json: import_node6.json });

// app/styles/forms.css
var forms_default = "/build/_assets/forms-ZEQQKCZ2.css";

// app/routes/login.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function links() {
  return [{ rel: "stylesheet", href: forms_default }];
}
var mutation = (0, import_domain_functions.makeDomainFunction)(LoginInputSchema)(async (values2) => login(values2));
async function action({ request }) {
  let result = await (0, import_remix_forms3.performMutation)({
    request,
    schema: LoginInputSchema,
    mutation
  });
  if (!result.success)
    return result;
  let session = await getSession(request.headers.get("Cookie"));
  return session.set("user", result.data), (0, import_node7.redirect)("/", {
    headers: { "Set-Cookie": await commitSession(session) }
  });
}
var values = {
  email: "Noemi.Hermiston@yahoo.com",
  password: "123456"
};
function login_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    Form,
    {
      schema: LoginInputSchema,
      values,
      className: "custom-form login-form",
      children: ({ Field, Errors, Button }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Field, { name: "email", autoFocus: !0 }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Field, { name: "password", type: "password" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Errors, {}, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, {}, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/login.tsx",
      lineNumber: 43,
      columnNumber: 5
    },
    this
  );
}

// app/routes/users.tsx
var users_exports = {};
__export(users_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => users_default,
  loader: () => loader4
});
var import_node8 = require("@remix-run/node"), import_react7 = require("@remix-run/react");

// app/components/ErrorFeedback.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function ErrorFeedback() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "bg-red-100 border border-red-500 p-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: " text-red-500 font-bold text-2xl", children: "Something went wrong" }, void 0, !1, {
    fileName: "app/components/ErrorFeedback.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ErrorFeedback.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/features/Users/users.api.ts
var import_zod3 = require("zod");
var schema2 = import_zod3.z.object({
  name: import_zod3.z.string().min(1, { message: "Please provide your name" }).trim(),
  email: import_zod3.z.string().min(1, { message: "Please provide your email" }).email({ message: "Please provide a valid email" }).trim(),
  password: import_zod3.z.string().min(1, { message: "Please provide your password" }).trim(),
  city: import_zod3.z.string().min(1, { message: "Please provide your city" }).trim(),
  state: import_zod3.z.string().min(1, { message: "Please provide your state" }).trim()
});
async function getUsers() {
  return db.user.findMany();
}
async function saveUser(user) {
  return db.user.create({ data: user });
}

// app/features/Users/UserForm.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function UserForm() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "pt-10 sm:mt-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "md:grid md:grid-cols-3 md:gap-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "md:col-span-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "px-4 sm:px-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "text-lg font-medium leading-6 text-gray-900", children: "Personal Information" }, void 0, !1, {
        fileName: "app/features/Users/UserForm.tsx",
        lineNumber: 10,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "mt-1 text-sm text-gray-600", children: "Use a permanent address where you can receive mail." }, void 0, !1, {
        fileName: "app/features/Users/UserForm.tsx",
        lineNumber: 13,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/features/Users/UserForm.tsx",
      lineNumber: 9,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/features/Users/UserForm.tsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mt-5 md:col-span-2 md:mt-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form, { schema: schema2, children: ({ Field, Errors, Button, register }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Field, { name: "name", label: "Name", children: ({ Label, Errors: Errors2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Label, { className: "block text-sm font-medium text-gray-700" }, void 0, !1, {
          fileName: "app/features/Users/UserForm.tsx",
          lineNumber: 25,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "input",
          {
            ...register("name"),
            className: "h-8 mt-1 w-full border border-gray-50 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          },
          void 0,
          !1,
          {
            fileName: "app/features/Users/UserForm.tsx",
            lineNumber: 26,
            columnNumber: 23
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Errors2, { className: "text-red-500 font-bold text-sm antialiased" }, void 0, !1, {
          fileName: "app/features/Users/UserForm.tsx",
          lineNumber: 30,
          columnNumber: 23
        }, this)
      ] }, void 0, !0, {
        fileName: "app/features/Users/UserForm.tsx",
        lineNumber: 24,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/features/Users/UserForm.tsx",
        lineNumber: 22,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Field, { name: "email", label: "E-mail", children: ({ Label, Errors: Errors2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Label, { className: "block text-sm font-medium text-gray-700" }, void 0, !1, {
          fileName: "app/features/Users/UserForm.tsx",
          lineNumber: 37,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "input",
          {
            ...register("email"),
            className: "h-8 mt-1 w-full border border-gray-50 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          },
          void 0,
          !1,
          {
            fileName: "app/features/Users/UserForm.tsx",
            lineNumber: 38,
            columnNumber: 23
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Errors2, { className: "text-red-500 font-bold text-sm antialiased" }, void 0, !1, {
          fileName: "app/features/Users/UserForm.tsx",
          lineNumber: 42,
          columnNumber: 23
        }, this)
      ] }, void 0, !0, {
        fileName: "app/features/Users/UserForm.tsx",
        lineNumber: 36,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/features/Users/UserForm.tsx",
        lineNumber: 34,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Field, { name: "password", label: "Password", children: ({ Label, Errors: Errors2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Label, { className: "block text-sm font-medium text-gray-700" }, void 0, !1, {
          fileName: "app/features/Users/UserForm.tsx",
          lineNumber: 49,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "input",
          {
            ...register("password"),
            type: "password",
            className: "h-8 mt-1 w-full border border-gray-50 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          },
          void 0,
          !1,
          {
            fileName: "app/features/Users/UserForm.tsx",
            lineNumber: 50,
            columnNumber: 23
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Errors2, { className: "text-red-500 font-bold text-sm antialiased" }, void 0, !1, {
          fileName: "app/features/Users/UserForm.tsx",
          lineNumber: 55,
          columnNumber: 23
        }, this)
      ] }, void 0, !0, {
        fileName: "app/features/Users/UserForm.tsx",
        lineNumber: 48,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/features/Users/UserForm.tsx",
        lineNumber: 46,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Field, { name: "city", label: "City", children: ({ Label, Errors: Errors2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Label, { className: "block text-sm font-medium text-gray-700" }, void 0, !1, {
          fileName: "app/features/Users/UserForm.tsx",
          lineNumber: 62,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "input",
          {
            ...register("city"),
            className: "h-8 mt-1 w-full border border-gray-50 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          },
          void 0,
          !1,
          {
            fileName: "app/features/Users/UserForm.tsx",
            lineNumber: 63,
            columnNumber: 23
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Errors2, { className: "text-red-500 font-bold text-sm antialiased" }, void 0, !1, {
          fileName: "app/features/Users/UserForm.tsx",
          lineNumber: 67,
          columnNumber: 23
        }, this)
      ] }, void 0, !0, {
        fileName: "app/features/Users/UserForm.tsx",
        lineNumber: 61,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/features/Users/UserForm.tsx",
        lineNumber: 59,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Field, { name: "state", label: "State", children: ({ Label, Errors: Errors2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Label, { className: "block text-sm font-medium text-gray-700" }, void 0, !1, {
          fileName: "app/features/Users/UserForm.tsx",
          lineNumber: 74,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "input",
          {
            ...register("state"),
            className: "h-8 mt-1 w-full border border-gray-50 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          },
          void 0,
          !1,
          {
            fileName: "app/features/Users/UserForm.tsx",
            lineNumber: 75,
            columnNumber: 23
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Errors2, { className: "text-red-500 font-bold text-sm antialiased" }, void 0, !1, {
          fileName: "app/features/Users/UserForm.tsx",
          lineNumber: 79,
          columnNumber: 23
        }, this)
      ] }, void 0, !0, {
        fileName: "app/features/Users/UserForm.tsx",
        lineNumber: 73,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/features/Users/UserForm.tsx",
        lineNumber: 71,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Errors, { className: "text-red-500 font-bold text-sm antialiased" }, void 0, !1, {
        fileName: "app/features/Users/UserForm.tsx",
        lineNumber: 83,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button, { className: "inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2", children: "Save" }, void 0, !1, {
        fileName: "app/features/Users/UserForm.tsx",
        lineNumber: 84,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/features/Users/UserForm.tsx",
      lineNumber: 21,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/features/Users/UserForm.tsx",
      lineNumber: 19,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/features/Users/UserForm.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/features/Users/UserForm.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/features/Users/UserForm.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/features/Users/UsersTable.tsx
var import_react6 = require("@remix-run/react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function UsersTable({ users }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "sm:flex sm:items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "sm:flex-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { className: "text-xl font-semibold text-gray-900", children: "Users" }, void 0, !1, {
          fileName: "app/features/Users/UsersTable.tsx",
          lineNumber: 13,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "mt-2 text-sm text-gray-700", children: "A list of all the users in your account including their name, title, email and role." }, void 0, !1, {
          fileName: "app/features/Users/UsersTable.tsx",
          lineNumber: 14,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/features/Users/UsersTable.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-4 sm:mt-0 sm:ml-16 sm:flex-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        import_react6.Link,
        {
          to: "/users/form",
          type: "button",
          className: "inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto",
          children: "Add user"
        },
        void 0,
        !1,
        {
          fileName: "app/features/Users/UsersTable.tsx",
          lineNumber: 20,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/features/Users/UsersTable.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/features/Users/UsersTable.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react6.Outlet, {}, void 0, !1, {
      fileName: "app/features/Users/UsersTable.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-8 flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-300", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "th",
          {
            scope: "col",
            className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",
            children: "Name"
          },
          void 0,
          !1,
          {
            fileName: "app/features/Users/UsersTable.tsx",
            lineNumber: 37,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "th",
          {
            scope: "col",
            className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
            children: "Email"
          },
          void 0,
          !1,
          {
            fileName: "app/features/Users/UsersTable.tsx",
            lineNumber: 43,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "th",
          {
            scope: "col",
            className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
            children: "City"
          },
          void 0,
          !1,
          {
            fileName: "app/features/Users/UsersTable.tsx",
            lineNumber: 49,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "th",
          {
            scope: "col",
            className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
            children: "State"
          },
          void 0,
          !1,
          {
            fileName: "app/features/Users/UsersTable.tsx",
            lineNumber: 55,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "th",
          {
            scope: "col",
            className: "relative py-3.5 pl-3 pr-4 sm:pr-6",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "sr-only", children: "Edit" }, void 0, !1, {
              fileName: "app/features/Users/UsersTable.tsx",
              lineNumber: 65,
              columnNumber: 23
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/features/Users/UsersTable.tsx",
            lineNumber: 61,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/features/Users/UsersTable.tsx",
        lineNumber: 36,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/features/Users/UsersTable.tsx",
        lineNumber: 35,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("tbody", { className: "divide-y divide-gray-200 bg-white", children: users.map((user) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6", children: user.name }, void 0, !1, {
          fileName: "app/features/Users/UsersTable.tsx",
          lineNumber: 72,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: user.email }, void 0, !1, {
          fileName: "app/features/Users/UsersTable.tsx",
          lineNumber: 75,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: user.city }, void 0, !1, {
          fileName: "app/features/Users/UsersTable.tsx",
          lineNumber: 78,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("td", { className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500", children: user.state }, void 0, !1, {
          fileName: "app/features/Users/UsersTable.tsx",
          lineNumber: 81,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("td", { className: "relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "a",
          {
            href: "#",
            className: "text-indigo-600 hover:text-indigo-900",
            children: [
              "Edit",
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "sr-only", children: [
                ", ",
                user.name
              ] }, void 0, !0, {
                fileName: "app/features/Users/UsersTable.tsx",
                lineNumber: 89,
                columnNumber: 31
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/features/Users/UsersTable.tsx",
            lineNumber: 85,
            columnNumber: 25
          },
          this
        ) }, void 0, !1, {
          fileName: "app/features/Users/UsersTable.tsx",
          lineNumber: 84,
          columnNumber: 23
        }, this)
      ] }, user.id, !0, {
        fileName: "app/features/Users/UsersTable.tsx",
        lineNumber: 71,
        columnNumber: 21
      }, this)) }, void 0, !1, {
        fileName: "app/features/Users/UsersTable.tsx",
        lineNumber: 69,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/features/Users/UsersTable.tsx",
      lineNumber: 34,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/features/Users/UsersTable.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/features/Users/UsersTable.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/features/Users/UsersTable.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/features/Users/UsersTable.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/features/Users/UsersTable.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/users.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
async function loader4({ request }) {
  let loggedUser = await getLoggedUser(request);
  return (0, import_node8.json)({ users: await getUsers(), loggedUser });
}
function users_default() {
  let { users, loggedUser } = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("header", { className: "flex items-center justify-between p-6 bg-gray-100", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: [
        "Welcome ",
        loggedUser.name
      ] }, void 0, !0, {
        fileName: "app/routes/users.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.Link, { to: "/logout", children: "Logout" }, void 0, !1, {
        fileName: "app/routes/users.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/users.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(UsersTable, { users }, void 0, !1, {
      fileName: "app/routes/users.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/users.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ErrorFeedback, {}, void 0, !1, {
    fileName: "app/routes/users.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}

// app/routes/users/form.tsx
var form_exports = {};
__export(form_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  action: () => action2,
  default: () => form_default
});
var import_domain_functions2 = require("domain-functions");
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), mutation2 = (0, import_domain_functions2.makeDomainFunction)(schema2)(
  async (data) => await saveUser(data)
), action2 = async ({ request }) => formAction({
  request,
  schema: schema2,
  mutation: mutation2,
  successPath: "/users"
});
function form_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(UserForm, {}, void 0, !1, {
    fileName: "app/routes/users/form.tsx",
    lineNumber: 20,
    columnNumber: 10
  }, this);
}
function ErrorBoundary2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(ErrorFeedback, {}, void 0, !1, {
    fileName: "app/routes/users/form.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "7a884266", entry: { module: "/build/entry.client-52WUYALD.js", imports: ["/build/_shared/chunk-HW5Z4OWB.js", "/build/_shared/chunk-KQHTJEE7.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-OGTYRC5P.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-WNROCU37.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/lazy/index": { id: "routes/lazy/index", parentId: "root", path: "lazy", index: !0, caseSensitive: void 0, module: "/build/routes/lazy/index-LNIFNNKF.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-7MXCBGB7.js", imports: ["/build/_shared/chunk-3O6HVGPS.js", "/build/_shared/chunk-46VA3PKJ.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-3VHDSCVQ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/users": { id: "routes/users", parentId: "root", path: "users", index: void 0, caseSensitive: void 0, module: "/build/routes/users-6IE4S3VO.js", imports: ["/build/_shared/chunk-3O6HVGPS.js", "/build/_shared/chunk-FZNQPIZA.js", "/build/_shared/chunk-46VA3PKJ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/users/form": { id: "routes/users/form", parentId: "routes/users", path: "form", index: void 0, caseSensitive: void 0, module: "/build/routes/users/form-QIDZ4KFM.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 } }, cssBundleHref: void 0, url: "/build/manifest-7A884266.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/lazy/index": {
    id: "routes/lazy/index",
    parentId: "root",
    path: "lazy",
    index: !0,
    caseSensitive: void 0,
    module: lazy_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/users": {
    id: "routes/users",
    parentId: "root",
    path: "users",
    index: void 0,
    caseSensitive: void 0,
    module: users_exports
  },
  "routes/users/form": {
    id: "routes/users/form",
    parentId: "routes/users",
    path: "form",
    index: void 0,
    caseSensitive: void 0,
    module: form_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
