import AppError from "./errors/AppError";
import AppErrorType from "./errors/AppErrorType";

interface IBnetAppRegionalResult {
  [key: string]: string;
}

class BNetApp {
  #app: string;
  #region: string | undefined;
  #key: string | undefined;

  #errorType: AppErrorType = AppErrorType.NORMAL;

  #result: IBnetAppRegionalResult[] = [];

  constructor(config: {
    app: string;
    region?: string;
    key?: string;
    errorType?: AppErrorType;
  }) {
    this.#app = config.app;
    this.#region = config.region;
    this.#key = config.key;
    this.#errorType = config.errorType || AppErrorType.NORMAL;
  }

  async getData() {
    await this.#fetchData();

    // Response

    // If data invalid
    if (!this.#result.length) {
      throw new AppError("Invalid App Data", this.#errorType);
    }

    if (this.#region) {
      // Find the region
      const regionalConfig = this.#result.find(
        (v) => v.Region === this.#region
      );

      if (!regionalConfig) {
        throw new AppError("Invalid Region", this.#errorType);
      }

      if (this.#key) {
        if (this.#key in regionalConfig) {
          return regionalConfig[this.#key];
        } else {
          throw new AppError("Invalid Key", this.#errorType);
        }
      } else {
        return regionalConfig;
      }
    } else {
      return this.#result;
    }
  }

  async #fetchData() {
    try {
      // https://wowdev.wiki/TACT
      const resp = await fetch(
        "http://us.patch.battle.net:1119/" + this.#app + "/versions"
      );

      if (!resp.ok) {
        console.log(resp);
        throw new Error("Invalid Battle.net App ID");
      }

      const respText = await resp.text();

      // Remove invalid and comment lines
      const rows = respText
        .split("\n")
        .filter((l) => !l.startsWith("#"))
        .filter((l) => !!l);

      // Header and regional rows
      const [header, ...regions] = rows;
      const parsedHeader = header.split("|").map((k) => k.split("!")[0]);

      // Update region data
      regions.forEach((r) => {
        const parsedR = r.split("|");
        const regionalResult: IBnetAppRegionalResult = {};
        parsedHeader.forEach((ph, i) => {
          regionalResult[ph] = parsedR[i];
        });

        this.#result.push(regionalResult);
      });
    } catch (e: any) {
      console.error(e);
      throw new AppError(e?.message ?? "Uncaught Exception", this.#errorType);
    }
  }
}

export default BNetApp;
