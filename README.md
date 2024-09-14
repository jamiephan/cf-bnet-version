# BNet App version API

This repo is a simple HonoJS API server to fetch the latest app versions from Battle.net, using Cloudflare worker, and convert to JSON for easier data fetching.

https://wowdev.wiki/TACT

## API Spec

- <code>GET /{app}</code>
  - Get all versions and CDN config for the app
  - Example: [/hero](https://bnet-version.jamiephan.workers.dev/hero)
- <code>GET /{app}/{region}</code>
  - Get the specific region version and CDN config for the app
  - Example: [/hero/us](https://bnet-version.jamiephan.workers.dev/hero/us)
- <code>GET /{app}/{region}/{key}</code>
  - Get the exact key data from the specific config. List of keys can be found on the CDN config response above.
  - Example: [/hero/us/VersionsName](https://bnet-version.jamiephan.workers.dev/hero/us/VersionsName)
- <code>GET /{app}/{region}/{key}/badge</code>
  - Get the exact key data from the specific config in shield.io format. See: https://shields.io/badges/endpoint-badge
  - Example: [/hero/us/VersionsName/badge](https://bnet-version.jamiephan.workers.dev/hero/us/VersionsName/badge)

## Badges

The APIs will also contains a badge JSON response that is [shield.io](https://shields.io/badges/endpoint-badge) endpoint compatible.

### Usage

Using example endpoint: `https://bnet-version.jamiephan.workers.dev/hero/us/VersionsName/badge`

- URL:
  - ```
    https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fhero%2Fus%2FVersionsName%2Fbadge
    ```
- HTML:
  - ```html
    <img
      alt="Badge"
      src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fhero%2Fus%2FVersionsName%2Fbadge"
    />
    ```
- Markdown:
  - ```markdown
    ![Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fhero%2Fus%2FVersionsName%2Fbadge)
    ```

### Examples Badges

| App                          | App ID    | `key=VersionsName` for the latest version                                                                                                                                                                                                                             | `key=BuildId` for the latest BuildId                                                                                                                                                                                                                         |
| ---------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Battle.net Agent             | `agent`   | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fagent%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fagent%2Fus%2FVersionsName%2Fbadge)     | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fagent%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fagent%2Fus%2FBuildId%2Fbadge)     |
| Battle.net App               | `bna`     | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fbna%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fbna%2Fus%2FVersionsName%2Fbadge)         | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fbna%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fbna%2Fus%2FBuildId%2Fbadge)         |
| Blizzard Arcade Collection   | `rtro`    | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Frtro%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Frtro%2Fus%2FVersionsName%2Fbadge)       | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Frtro%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Frtro%2Fus%2FBuildId%2Fbadge)       |
| Diablo I                     | `drtl`    | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fdrtl%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fdrtl%2Fus%2FVersionsName%2Fbadge)       | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fdrtl%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fdrtl%2Fus%2FBuildId%2Fbadge)       |
| Diablo II Resurrected        | `osi`     | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fosi%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fosi%2Fus%2FVersionsName%2Fbadge)         | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fosi%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fosi%2Fus%2FBuildId%2Fbadge)         |
| Diablo III                   | `d3`      | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fd3%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fd3%2Fus%2FVersionsName%2Fbadge)           | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fd3%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fd3%2Fus%2FBuildId%2Fbadge)           |
| Diablo IV                    | `fenris`  | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Ffenris%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Ffenris%2Fus%2FVersionsName%2Fbadge)   | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Ffenris%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Ffenris%2Fus%2FBuildId%2Fbadge)   |
| Heroes of the Storm          | `hero`    | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fhero%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fhero%2Fus%2FVersionsName%2Fbadge)       | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fhero%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fhero%2Fus%2FBuildId%2Fbadge)       |
| Hearthstone                  | `hsb`     | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fhsb%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fhsb%2Fus%2FVersionsName%2Fbadge)         | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fhsb%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fhsb%2Fus%2FBuildId%2Fbadge)         |
| Overwatch 2                  | `pro`     | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fpro%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fpro%2Fus%2FVersionsName%2Fbadge)         | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fpro%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fpro%2Fus%2FBuildId%2Fbadge)         |
| StarCraft 1                  | `s1`      | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fs1%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fs1%2Fus%2FVersionsName%2Fbadge)           | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fs1%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fs1%2Fus%2FBuildId%2Fbadge)           |
| StarCraft II                 | `s2`      | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fs2%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fs2%2Fus%2FVersionsName%2Fbadge)           | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fs2%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fs2%2Fus%2FBuildId%2Fbadge)           |
| Warcraft III Reforged        | `w3`      | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fw3%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fw3%2Fus%2FVersionsName%2Fbadge)           | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fw3%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fw3%2Fus%2FBuildId%2Fbadge)           |
| Warcraft Rumble              | `gryphon` | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fgryphon%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fgryphon%2Fus%2FVersionsName%2Fbadge) | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fgryphon%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fgryphon%2Fus%2FBuildId%2Fbadge) |
| World of Warcraft            | `wow`     | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fwow%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fwow%2Fus%2FVersionsName%2Fbadge)         | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fwow%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fwow%2Fus%2FBuildId%2Fbadge)         |
| Call of Duty: Black Ops 4    | `viper`   | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fviper%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fviper%2Fus%2FVersionsName%2Fbadge)     | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fviper%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fviper%2Fus%2FBuildId%2Fbadge)     |
| Call of Duty: Modern Warfare | `odin`    | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fodin%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fodin%2Fus%2FVersionsName%2Fbadge)       | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fodin%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fodin%2Fus%2FBuildId%2Fbadge)       |
| Call of Duty: Vanguard       | `fore`    | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Ffore%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Ffore%2Fus%2FVersionsName%2Fbadge)       | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Ffore%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Ffore%2Fus%2FBuildId%2Fbadge)       |
| Crash Bandicoot 4            | `wlby`    | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fwlby%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fwlby%2Fus%2FVersionsName%2Fbadge)       | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fwlby%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fwlby%2Fus%2FBuildId%2Fbadge)       |
| Battle.net Agent             | `agent`   | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fagent%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fagent%2Fus%2FVersionsName%2Fbadge)     | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fagent%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fagent%2Fus%2FBuildId%2Fbadge)     |
| Battle.net App               | `bna`     | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fbna%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fbna%2Fus%2FVersionsName%2Fbadge)         | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fbna%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fbna%2Fus%2FBuildId%2Fbadge)         |
| Blizzard Arcade Collection   | `rtro`    | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Frtro%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Frtro%2Fus%2FVersionsName%2Fbadge)       | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Frtro%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Frtro%2Fus%2FBuildId%2Fbadge)       |
| Diablo I                     | `drtl`    | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fdrtl%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fdrtl%2Fus%2FVersionsName%2Fbadge)       | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fdrtl%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fdrtl%2Fus%2FBuildId%2Fbadge)       |
| Diablo II Resurrected        | `osi`     | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fosi%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fosi%2Fus%2FVersionsName%2Fbadge)         | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fosi%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fosi%2Fus%2FBuildId%2Fbadge)         |
| Diablo III                   | `d3`      | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fd3%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fd3%2Fus%2FVersionsName%2Fbadge)           | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fd3%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fd3%2Fus%2FBuildId%2Fbadge)           |
| Diablo IV                    | `fenris`  | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Ffenris%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Ffenris%2Fus%2FVersionsName%2Fbadge)   | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Ffenris%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Ffenris%2Fus%2FBuildId%2Fbadge)   |
| Heroes of the Storm          | `hero`    | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fhero%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fhero%2Fus%2FVersionsName%2Fbadge)       | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fhero%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fhero%2Fus%2FBuildId%2Fbadge)       |
| Hearthstone                  | `hsb`     | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fhsb%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fhsb%2Fus%2FVersionsName%2Fbadge)         | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fhsb%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fhsb%2Fus%2FBuildId%2Fbadge)         |
| Overwatch 2                  | `pro`     | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fpro%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fpro%2Fus%2FVersionsName%2Fbadge)         | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fpro%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fpro%2Fus%2FBuildId%2Fbadge)         |
| StarCraft 1                  | `s1`      | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fs1%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fs1%2Fus%2FVersionsName%2Fbadge)           | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fs1%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fs1%2Fus%2FBuildId%2Fbadge)           |
| StarCraft II                 | `s2`      | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fs2%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fs2%2Fus%2FVersionsName%2Fbadge)           | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fs2%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fs2%2Fus%2FBuildId%2Fbadge)           |
| Warcraft III Reforged        | `w3`      | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fw3%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fw3%2Fus%2FVersionsName%2Fbadge)           | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fw3%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fw3%2Fus%2FBuildId%2Fbadge)           |
| Warcraft Rumble              | `gryphon` | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fgryphon%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fgryphon%2Fus%2FVersionsName%2Fbadge) | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fgryphon%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fgryphon%2Fus%2FBuildId%2Fbadge) |
| World of Warcraft            | `wow`     | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fwow%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fwow%2Fus%2FVersionsName%2Fbadge)         | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fwow%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fwow%2Fus%2FBuildId%2Fbadge)         |
| Call of Duty: Black Ops 4    | `viper`   | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fviper%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fviper%2Fus%2FVersionsName%2Fbadge)     | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fviper%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fviper%2Fus%2FBuildId%2Fbadge)     |
| Call of Duty: Modern Warfare | `odin`    | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fodin%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fodin%2Fus%2FVersionsName%2Fbadge)       | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fodin%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fodin%2Fus%2FBuildId%2Fbadge)       |
| Call of Duty: Vanguard       | `fore`    | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Ffore%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Ffore%2Fus%2FVersionsName%2Fbadge)       | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Ffore%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Ffore%2Fus%2FBuildId%2Fbadge)       |
| Crash Bandicoot 4            | `wlby`    | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fwlby%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fwlby%2Fus%2FVersionsName%2Fbadge)       | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fwlby%2Fus%2FBuildId%2Fbadge" />](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fwlby%2Fus%2FBuildId%2Fbadge)       |

### Invalid Badges

Any errors (e.g invalid app or key), the badge API will also response the error message for the badge to display:

| Error                     | Badge                                                                                                                                                                                                                                                                 |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Invalid App (or disabled) | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fstorm%2Fus%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fstorm%2Fus%2FVersionsName%2Fbadge)     |
| Invalid Region            | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fpro%2Fxyzxyz%2FVersionsName%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fpro%2Fxyzxyz%2FVersionsName%2Fbadge) |
| Invalid Key               | [<img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fpro%2Fus%2FXyzXyzXyz%2Fbadge"/>](https://img.shields.io/endpoint?url=https%3A%2F%2Fbnet-version.jamiephan.workers.dev%2Fpro%2Fus%2FXyzXyzXyz%2Fbadge)               |

## Development

Simply run:

```
npm install
npm run dev
```

## Deployment

Simply run: (it will open up browser to login into cloudflare worker)

```
npm run deploy
```
