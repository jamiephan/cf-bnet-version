# BNet App version API

This repo is a simple HonoJS API server to fetch the latest app versions from Battle.net, using Cloudflare worker, and convert to JSON for easier data fetching.

https://wowdev.wiki/TACT

## API Spec:

- <code>GET /{app}</code>
  - Get all versions and CDN config for the app
  - Example: [/hero](https://bnet-version.jamiephan.workers.dev/hero)
- <code>GET /{app}/{region}</code>
  - Get the specific region version and CDN config for the app
  - Example: [/hero/us](https://bnet-version.jamiephan.workers.dev/hero/us)
- <code>GET /{app}/{region}/{key}</code>
  - Get the exact key data from the specific config
  - Example: [/hero/us/VersionsName](https://bnet-version.jamiephan.workers.dev/hero/us/VersionsName)
- <code>GET /{app}/{region}/{key}/badge</code>
  - Get the exact key data from the specific config in shield.io format. See: https://shields.io/badges/endpoint-badge
  - Example: [/hero/us/VersionsName/badge](https://bnet-version.jamiephan.workers.dev/hero/us/VersionsName/badge)

## Badges

The APIs will also contains a badge JSON response that is [shield.io](https://shields.io/badges/endpoint-badge) endpoint compatible.

Some examples: (using `VersionsName` for the key to get latest version)

| App                               | App ID    | Badge                                                                                                                                |
| --------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Battle.net Agent                  | `agent`   | ![Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fagent%2Fus%2FVersionsName%2Fbadge)   |
| Battle.net App                    | `bna`     | ![Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fbna%2Fus%2FVersionsName%2Fbadge)     |
| Blizzard Arcade Collection Retail | `rtro`    | ![Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Frtro%2Fus%2FVersionsName%2Fbadge)    |
| Diablo 2 Resurrected Retail       | `osi`     | ![Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fosi%2Fus%2FVersionsName%2Fbadge)     |
| Diablo 3                          | `d3`      | ![Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fd3%2Fus%2FVersionsName%2Fbadge)      |
| Diablo 4                          | `fenris`  | ![Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Ffenris%2Fus%2FVersionsName%2Fbadge)  |
| Heroes of the Storm               | `hero`    | ![Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fhero%2Fus%2FVersionsName%2Fbadge)    |
| Hearthstone                       | `hsb`     | ![Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fhsb%2Fus%2FVersionsName%2Fbadge)     |
| Overwatch                         | `pro`     | ![Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fpro%2Fus%2FVersionsName%2Fbadge)     |
| StarCraft 1                       | `s1`      | ![Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fs1%2Fus%2FVersionsName%2Fbadge)      |
| StarCraft II                      | `s2`      | ![Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fs2%2Fus%2FVersionsName%2Fbadge)      |
| Warcraft III Reforged             | `w3`      | ![Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fw3%2Fus%2FVersionsName%2Fbadge)      |
| Warcraft Rumble                   | `gryphon` | ![Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fgryphon%2Fus%2FVersionsName%2Fbadge) |
| World of Warcraft                 | `wow`     | ![Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fwow%2Fus%2FVersionsName%2Fbadge)     |
| Call of Duty: Black Ops 4         | `viper`   | ![Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fviper%2Fus%2FVersionsName%2Fbadge)   |
| Call of Duty: Modern Warfare      | `odin`    | ![Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fodin%2Fus%2FVersionsName%2Fbadge)    |
| Crash Bandicoot 4                 | `wlby`    | ![Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fwlby%2Fus%2FVersionsName%2Fbadge)    |

## Development:

Simple run:

```
npm install
npm run dev
```

## Deployment:

Simply run: (it will open up browser to login into cloudflare worker)

```
npm run deploy
```
