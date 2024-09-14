// Source: https://wowdev.wiki/TACT
// Updated: 15/09/2024
// - Removed "Retail" keyword
// - Some casing update
// - Re-wording some texts

const mapping = [
  {
    app: "agent",
    description: "Battle.net Agent",
    group: "Non Games",
  },
  {
    app: "agent_test",
    description: "Battle.net Agent Test",
    group: "Non Games",
  },
  {
    app: "bna",
    description: "Battle.net App",
    group: "Non Games",
  },
  {
    app: "bts",
    description: "Bootstrapper",
    group: "Non Games",
  },
  {
    app: "catalogs",
    description: "Catalog",
    group: "Non Games",
  },
  {
    app: "clnt",
    description: "Client",
    group: "Non Games",
  },
  {
    app: "demo",
    description: "",
    group: "Non Games",
  },
  {
    app: "test",
    description: "",
    group: "Non Games",
  },
  {
    app: "rtro",
    description: "Blizzard Arcade Collection",
    group: "Blizzard Arcade Collection",
  },
  {
    app: "rtrodev",
    description: "Blizzard Arcade Collection Dev",
    group: "Blizzard Arcade Collection",
  },
  {
    app: "anbs",
    description: "Diablo Immortal",
    group: "Diablo Immortal (PC)",
  },
  {
    app: "anbsdev",
    description: "Diablo Immortal Dev",
    group: "Diablo Immortal (PC)",
  },
  {
    app: "osi",
    description: "Diablo II: Resurrected",
    group: "Diablo II: Resurrected",
  },
  {
    app: "osib",
    description: "Diablo II: Resurrected Beta",
    group: "Diablo II: Resurrected",
  },
  {
    app: "osia",
    description: "Diablo II: Resurrected Alpha",
    group: "Diablo II: Resurrected",
  },
  {
    app: "osidev",
    description: "Diablo II: Resurrected Dev",
    group: "Diablo II: Resurrected",
  },
  {
    app: "osiv1",
    description: "Diablo II: Resurrected Vendor 1",
    group: "Diablo II: Resurrected",
  },
  {
    app: "osiv2",
    description: "Diablo II: Resurrected Vendor 2",
    group: "Diablo II: Resurrected",
  },
  {
    app: "osiv3",
    description: "Diablo II: Resurrected Vendor 3",
    group: "Diablo II: Resurrected",
  },
  {
    app: "osiv4",
    description: "Diablo II: Resurrected Vendor 4",
    group: "Diablo II: Resurrected",
  },
  {
    app: "osiv5",
    description: "Diablo II: Resurrected Vendor 5",
    group: "Diablo II: Resurrected",
  },
  {
    app: "osiv6",
    description: "Diablo II: Resurrected Vendor 6",
    group: "Diablo II: Resurrected",
  },
  {
    app: "d3",
    description: "Diablo 3",
    group: "Diablo III",
  },
  {
    app: "d3b",
    description: "Diablo 3 Beta",
    group: "Diablo III",
  },
  {
    app: "d3cn",
    description: "Diablo 3 China",
    group: "Diablo III",
  },
  {
    app: "d3cnt",
    description: "Diablo 3 China Test",
    group: "Diablo III",
  },
  {
    app: "d3t",
    description: "Diablo 3 Test",
    group: "Diablo III",
  },
  {
    app: "fenris",
    description: "Diablo IV",
    group: "Diablo IV",
  },
  {
    app: "fenrisb",
    description: "Diablo IV Beta",
    group: "Diablo IV",
  },
  {
    app: "fenrise",
    description: "Diablo IV Pre-Launch",
    group: "Diablo IV",
  },
  {
    app: "fenrisdev",
    description: "Diablo IV Dev",
    group: "Diablo IV",
  },
  {
    app: "fenrisvendor",
    description: "Diablo IV Vendor",
    group: "Diablo IV",
  },
  {
    app: "fenrisvendor2",
    description: "Diablo IV Vendor 2",
    group: "Diablo IV",
  },
  {
    app: "fenrisvendor3",
    description: "Diablo IV Vendor 3",
    group: "Diablo IV",
  },
  {
    app: "bnt",
    description: "Heroes of the Storm Alpha",
    group: "Heroes of the Storm",
  },
  {
    app: "hero",
    description: "Heroes of the Storm",
    group: "Heroes of the Storm",
  },
  {
    app: "heroc",
    description: "Heroes of the Storm Tournament",
    group: "Heroes of the Storm",
  },
  {
    app: "herot",
    description: "Heroes of the Storm Test",
    group: "Heroes of the Storm",
  },
  {
    app: "storm",
    description: "Heroes of the Storm",
    group: "Heroes of the Storm",
  },
  {
    app: "hsb",
    description: "Hearthstone",
    group: "Hearthstone",
  },
  {
    app: "hsc",
    description: "Hearthstone Chournament",
    group: "Hearthstone",
  },
  {
    app: "hst",
    description: "Hearthstone Test",
    group: "Hearthstone",
  },
  {
    app: "pro",
    description: "Overwatch",
    group: "Overwatch",
  },
  {
    app: "proc",
    description: "Overwatch Tournament US",
    group: "Overwatch",
  },
  {
    app: "proc_cn",
    description: "Overwatch Tournament China",
    group: "Overwatch",
  },
  {
    app: "proc_eu",
    description: "Overwatch Tournament Europe",
    group: "Overwatch",
  },
  {
    app: "proc_kr",
    description: "Overwatch Tournament Korea",
    group: "Overwatch",
  },
  {
    app: "proc2",
    description: "Overwatch Professional 2",
    group: "Overwatch",
  },
  {
    app: "proc2_cn",
    description: "Overwatch Professional 2 China",
    group: "Overwatch",
  },
  {
    app: "proc2_eu",
    description: "Overwatch Professional 2 Europe",
    group: "Overwatch",
  },
  {
    app: "proc2_kr",
    description: "Overwatch Professional 2 Korea",
    group: "Overwatch",
  },
  {
    app: "proc3",
    description: "Overwatch Tournament Dev",
    group: "Overwatch",
  },
  {
    app: "procr",
    description: "Overwatch League Stage 3",
    group: "Overwatch",
  },
  {
    app: "procr2",
    description: "Overwatch League Stage 2",
    group: "Overwatch",
  },
  {
    app: "prodev",
    description: "Overwatch Dev",
    group: "Overwatch",
  },
  {
    app: "proe",
    description: "",
    group: "Overwatch",
  },
  {
    app: "prot",
    description: "Overwatch Test",
    group: "Overwatch",
  },
  {
    app: "prov",
    description: "Overwatch Vendor",
    group: "Overwatch",
  },
  {
    app: "proms",
    description: "Overwatch World Cup Viewer",
    group: "Overwatch",
  },
  {
    app: "s1",
    description: "StarCraft 1",
    group: "StarCraft 1",
  },
  {
    app: "s1a",
    description: "StarCraft 1 Alpha",
    group: "StarCraft 1",
  },
  {
    app: "s1t",
    description: "StarCraft 1 Test",
    group: "StarCraft 1",
  },
  {
    app: "s2",
    description: "StarCraft II",
    group: "StarCraft II",
  },
  {
    app: "s2b",
    description: "StarCraft II Beta",
    group: "StarCraft II",
  },
  {
    app: "s2t",
    description: "StarCraft II Test",
    group: "StarCraft II",
  },
  {
    app: "sc2",
    description: "StarCraft II",
    group: "StarCraft II",
  },
  {
    app: "w3",
    description: "Warcraft III",
    group: "Warcraft III",
  },
  {
    app: "w3t",
    description: "Warcraft III Public Test",
    group: "Warcraft III",
  },
  {
    app: "war3",
    description: "Warcraft III (old)",
    group: "Warcraft III",
  },
  {
    app: "w3b",
    description: "Warcraft III: Reforged Beta",
    group: "Warcraft III",
  },
  {
    app: "wow",
    description: "World of Warcraft",
    group: "World of Warcraft",
  },
  {
    app: "wow_beta",
    description: "World of Warcraft Alpha/Beta",
    group: "World of Warcraft",
  },
  {
    app: "wow_classic",
    description: "World of Warcraft Classic (BCC)",
    group: "World of Warcraft",
  },
  {
    app: "wow_classic_beta",
    description: "World of Warcraft Classic (BCC) Beta",
    group: "World of Warcraft",
  },
  {
    app: "wow_classic_ptr",
    description: "World of Warcraft Classic (BCC) Test",
    group: "World of Warcraft",
  },
  {
    app: "wow_classic_era",
    description: "World of Warcraft Classic (Vanilla)",
    group: "World of Warcraft",
  },
  {
    app: "wow_classic_era_beta",
    description: "World of Warcraft Classic (Vanilla) Beta",
    group: "World of Warcraft",
  },
  {
    app: "wow_classic_era_ptr",
    description: "World of Warcraft Classic (Vanilla) Test",
    group: "World of Warcraft",
  },
  {
    app: "wowdev",
    description: "World of Warcraft Dev",
    group: "World of Warcraft",
  },
  {
    app: "wowdemo",
    description: "World of Warcraft (Classic) Demo",
    group: "World of Warcraft",
  },
  {
    app: "wowe1",
    description: "World of Warcraft Event 1",
    group: "World of Warcraft",
  },
  {
    app: "wowe2",
    description: "World of Warcraft Event 2",
    group: "World of Warcraft",
  },
  {
    app: "wowe3",
    description: "World of Warcraft Event 3",
    group: "World of Warcraft",
  },
  {
    app: "wowt",
    description: "World of Warcraft Test",
    group: "World of Warcraft",
  },
  {
    app: "wowv",
    description: "World of Warcraft Vendor",
    group: "World of Warcraft",
  },
  {
    app: "wowv2",
    description: "World of Warcraft Vendor 2 (Classic)",
    group: "World of Warcraft",
  },
  {
    app: "wowz",
    description: "World of Warcraft Submission (previously Vendor)",
    group: "World of Warcraft",
  },
  {
    app: "viper",
    description: "Call of Duty: Black Ops 4",
    group: "Call of Duty",
  },
  {
    app: "viperdev",
    description: "Call of Duty: Black Ops 4 - Alpha",
    group: "Call of Duty",
  },
  {
    app: "viperv1",
    description: "Call of Duty: Black Ops 4 Vendor",
    group: "Call of Duty",
  },
  {
    app: "odin",
    description: "Call of Duty: Modern Warfare",
    group: "Call of Duty",
  },
  {
    app: "odindev",
    description: "Call of Duty: Modern Warfare Dev",
    group: "Call of Duty",
  },
  {
    app: "odinv1",
    description: "Call of Duty: Modern Warfare Vendor 1",
    group: "Call of Duty",
  },
  {
    app: "odinv2",
    description: "Call of Duty: Modern Warfare Vendor 2",
    group: "Call of Duty",
  },
  {
    app: "odinv3",
    description: "Call of Duty: Modern Warfare Vendor 3",
    group: "Call of Duty",
  },
  {
    app: "odinv4",
    description: "Call of Duty: Modern Warfare Vendor 4",
    group: "Call of Duty",
  },
  {
    app: "odina",
    description: "Call of Duty: Modern Warfare Alpha",
    group: "Call of Duty",
  },
  {
    app: "odinb",
    description: "Call of Duty: Modern Warfare Beta",
    group: "Call of Duty",
  },
  {
    app: "odine",
    description: "Call of Duty: Modern Warfare Event",
    group: "Call of Duty",
  },
  {
    app: "lazr",
    description: "Call of Duty: MW2CR (Campaign Remastered)",
    group: "Call of Duty",
  },
  {
    app: "lazrdev",
    description: "Call of Duty: MW2CR Dev",
    group: "Call of Duty",
  },
  {
    app: "lazrv1",
    description: "Call of Duty: MW2CR Vendor 1",
    group: "Call of Duty",
  },
  {
    app: "lazrv2",
    description: "Call of Duty: MW2CR Vendor 2",
    group: "Call of Duty",
  },
  {
    app: "zeus",
    description: "Call of Duty: Black Ops Cold War",
    group: "Call of Duty",
  },
  {
    app: "fore",
    description: "Call of Duty: Vanguard",
    group: "Call of Duty",
  },
  {
    app: "foreb",
    description: "Call of Duty: Vanguard (Public Beta)",
    group: "Call of Duty",
  },
  {
    app: "wlby",
    description: "Crash Bandicoot 4",
    group: "Crash Bandicoot 4",
  },
  {
    app: "wlbydev",
    description: "Crash Bandicoot 4 Developing",
    group: "Crash Bandicoot 4",
  },
  {
    app: "wlbyv1",
    description: "Crash Bandicoot 4 for Vendors",
    group: "Crash Bandicoot 4",
  },
  {
    app: "wlbyv2",
    description: "Crash Bandicoot 4 for Vendors",
    group: "Crash Bandicoot 4",
  },
  {
    app: "wlbyv3",
    description: "Crash Bandicoot 4 for Vendors",
    group: "Crash Bandicoot 4",
  },
  {
    app: "wlbyv4",
    description: "Crash Bandicoot 4 for Vendors",
    group: "Crash Bandicoot 4",
  },
  {
    app: "wlbyv5",
    description: "Crash Bandicoot 4 for Vendors",
    group: "Crash Bandicoot 4",
  },
  {
    app: "wlbyv6",
    description: "Crash Bandicoot 4 for Vendors",
    group: "Crash Bandicoot 4",
  },
  {
    app: "dst2",
    description: "Destiny 2",
    group: "Destiny 2",
  },
  {
    app: "dst2a",
    description: "Destiny 2 Alpha",
    group: "Destiny 2",
  },
  {
    app: "dst2dev",
    description: 'Destiny 2 "takehome" Development',
    group: "Destiny 2",
  },
  {
    app: "dst2e1",
    description: "Destiny 2 Event",
    group: "Destiny 2",
  },
  {
    app: "dst2igr",
    description: "Destiny 2 Internet Game Room",
    group: "Destiny 2",
  },
  {
    app: "dst2t",
    description: "Destiny 2 Public Test",
    group: "Destiny 2",
  },
];

export default mapping;

export const getAppDescription = (app: string): string => {
  return mapping.find((m) => m.app === app)?.description || app;
};
