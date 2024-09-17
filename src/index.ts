import { Hono } from "hono";
import { cors } from "hono/cors";

import BNetApp from "./BNetApp";
import endpoints from "./docs/endpoints.json";
import AppError from "./errors/AppError";
import ERROR_TYPE from "./errors/AppErrorType";
import mappings, { getAppDescription } from "./mappings";

const app = new Hono();

app.use("*", cors());

// Documentation
app.get("/", (c) => {
  return c.redirect("/_doc");
});

app.get("/_doc/:key?", (c) => {
  const { key } = c.req.param();

  const baseMessage = {
    "@message": "This is a documentation endpoint at (/_doc/*)",
    "@repo": "https://github.com/jamiephan/cf-bnet-version",
    "@readme":
      "https://github.com/jamiephan/cf-bnet-version/blob/master/README.md",
  };

  switch (key) {
    case "endpoints":
      return c.json({ ...baseMessage, endpoints });
    case "mappings":
      return c.json({ ...baseMessage, mappings });
    default:
      return c.json({
        ...baseMessage,
        docEndpoints: [
          {
            url: "/_doc/endpoints",
            description: "All API endpoint documentations",
          },
          {
            url: "/_doc/mappings",
            description:
              "A list of app to name mappings. e.g fenris ➡ Diablo IV",
          },
        ],
      });
  }
});

app.get("/favicon.ico", (c) => {
  throw new AppError("Not Found");
});

// =========================

app.get("/:app", async (c) => {
  const { app } = c.req.param();
  const bNetapp = new BNetApp({ app });
  return c.json(await bNetapp.getData());
});

app.get("/:app/:region", async (c) => {
  const { app, region } = c.req.param();
  const bNetapp = new BNetApp({ app, region });
  return c.json(await bNetapp.getData());
});

app.get("/:app/:region/:key", async (c) => {
  const { app, region, key } = c.req.param();
  const bNetapp = new BNetApp({ app, region, key });
  return c.text((await bNetapp.getData()).toString());
});

// Badge
app.get("/:app/:region/:key/badge", async (c) => {
  const { app, region, key } = c.req.param();
  const bNetapp = new BNetApp({
    app,
    region,
    key,
    errorType: ERROR_TYPE.BADGE,
  });

  return c.json({
    schemaVersion: 1,
    label: getAppDescription(app),
    message: await bNetapp.getData(),
    color: "#4381C3",
    namedLogo: "battledotnet",
    logoColor: "#4381C3",
    style: "for-the-badge",
  });
});

// Not Found Error Handling
app.notFound((c) => {
  return c.json(
    {
      error: "Not Found",
    },
    404
  );
});

// Global Error Handling
app.onError((err, c) => {
  console.error(`${err}`);
  if (err instanceof AppError && err.type === ERROR_TYPE.BADGE) {
    return c.json({
      schemaVersion: 1,
      isError: true,
      label: "Error",
      message: err.message,
      color: "#EC1C24",
      namedLogo: "battledotnet",
      logoColor: "#4381C3",
      style: "for-the-badge",
    });
  } else {
    return c.json(
      {
        error: err.message,
      },
      400
    );
  }
});

export default app;
