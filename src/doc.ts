import mappings from "./mappings";

export default {
  endpoints: [
    {
      url: "/{app}",
      description: "Get all versions and CDN config for the app",
      example: "/hero",
    },
    {
      url: "/{app}/{region}",
      description: "Get the specific region version and CDN config for the app",
      example: "/hero/us",
    },
    {
      url: "/{app}/{region}/{key}",
      description: "Get the exact key data from the specific config",
      example: "/hero/us/VersionsName",
    },
    {
      url: "/{app}/{region}/{key}/badge",
      description:
        "Get the exact key data from the specific config in shield.io format. See: https://shields.io/badges/endpoint-badge",
      example: "/hero/us/VersionsName/badge",
    },
  ],
  mappings,
};
