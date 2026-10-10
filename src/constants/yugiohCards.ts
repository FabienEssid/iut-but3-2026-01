import blueEyesImg from "../assets/images/blue-eyes-white-dragon-7485.jpg";
import darkMagicianImg from "../assets/images/dark-magician-4003.jpg";
import redEyesImg from "../assets/images/red-eyes-black-dragon-6276.jpg";
import cyberEndDragonImg from "../assets/images/cyber-end-dragon-133.jpg";
import cyberJarImg from "../assets/images/cyber-jar-2900.jpg";
import decodeTalkerImg from "../assets/images/decode-talker-8433.jpg";
import earthboundImmortalWiraqochaRascaImg from "../assets/images/earthbound-immortal-wiraqocha-rasca-3511.jpg";
import elementalHeroFlameWingmanImg from "../assets/images/elemental-hero-flame-wingman-3033.jpg";
import exodiaTheForbiddenOneImg from "../assets/images/exodia-the-forbidden-one-2835.jpg";
import gyroidImg from "../assets/images/gyroid-1591.jpg";
import junkWarriorImg from "../assets/images/junk-warrior-5160.jpg";
import mokeyMokeyImg from "../assets/images/mokey-mokey-2332.jpg";
import morphtronicMagnenImg from "../assets/images/morphtronic-magnen-2537.jpg";
import redDragonArchfiendImg from "../assets/images/red-dragon-archfiend-5955.jpg";
import stardustDragonImg from "../assets/images/stardust-dragon-3794.jpg";
import superConductorTyrannoImg from "../assets/images/super-conductor-tyranno-7168.jpg";
import theWingedDragonOfRaImg from "../assets/images/the-winged-dragon-of-ra-850.jpg";
import uriaLordOfSearingFlamesImg from "../assets/images/uria-lord-of-searing-flames-527.jpg";
import wingedKuribohImg from "../assets/images/winged-kuriboh-4869.jpg";
import yubelImg from "../assets/images/yubel-6585.jpg";
import type { YugiohCardProps } from "../types/YugiohCard";

export const yugiohCards: YugiohCardProps[] = [
  {
    image: blueEyesImg,
    title: "Blue-Eyes White Dragon",
    attribute: "LIGHT",
    type: "Normal Monster / Dragon",
    attack: 3000,
    defense: 2500,
    isSoldOut: false,
  },
  {
    image: darkMagicianImg,
    title: "Dark Magician",
    attribute: "DARK",
    type: "Normal Monster / Spellcaster",
    attack: 2500,
    defense: 2100,
    isSoldOut: true,
  },
  {
    image: redEyesImg,
    title: "Red-Eyes Black Dragon",
    attribute: "DARK",
    type: "Normal Monster / Dragon",
    attack: 2400,
    defense: 2000,
    isSoldOut: false,
  },
  {
    image: cyberEndDragonImg,
    title: "Cyber End Dragon",
    attribute: "LIGHT",
    type: "Fusion Monster / Machine / Effect",
    attack: 4000,
    defense: 2800,
    isSoldOut: false,
  },
  {
    image: cyberJarImg,
    title: "Cyber Jar",
    attribute: "DARK",
    type: "Flip Effect Monster / Rock",
    attack: 900,
    defense: 900,
    isSoldOut: false,
  },
  {
    image: decodeTalkerImg,
    title: "Decode Talker",
    attribute: "DARK",
    type: "Link Monster / Cyberse",
    attack: 2300,
    defense: 0,
    isSoldOut: false,
  },
  {
    image: earthboundImmortalWiraqochaRascaImg,
    title: "Earthbound Immortal Wiraqocha Rasca",
    attribute: "DARK",
    type: "Effect Monster / Winged Beast",
    attack: 100,
    defense: 100,
    isSoldOut: false,
  },
  {
    image: elementalHeroFlameWingmanImg,
    title: "Elemental HERO Flame Wingman",
    attribute: "WIND",
    type: "Fusion Monster / Warrior / Effect",
    attack: 2100,
    defense: 1200,
    isSoldOut: false,
  },
  {
    image: exodiaTheForbiddenOneImg,
    title: "Exodia the Forbidden One",
    attribute: "DARK",
    type: "Effect Monster / Spellcaster",
    attack: 1000,
    defense: 1000,
    isSoldOut: false,
  },
  {
    image: gyroidImg,
    title: "Gyroid",
    attribute: "WIND",
    type: "Effect Monster / Machine",
    attack: 1000,
    defense: 1000,
    isSoldOut: false,
  },
  {
    image: junkWarriorImg,
    title: "Junk Warrior",
    attribute: "DARK",
    type: "Synchro Monster / Warrior",
    attack: 2300,
    defense: 1300,
    isSoldOut: false,
  },
  {
    image: mokeyMokeyImg,
    title: "Mokey Mokey",
    attribute: "LIGHT",
    type: "Normal Monster / Fairy",
    attack: 300,
    defense: 100,
    isSoldOut: false,
  },
  {
    image: morphtronicMagnenImg,
    title: "Morphtronic Magnen",
    attribute: "EARTH",
    type: "Effect Monster / Thunder",
    attack: 800,
    defense: 800,
    isSoldOut: false,
  },
  {
    image: redDragonArchfiendImg,
    title: "Red Dragon Archfiend",
    attribute: "DARK",
    type: "Synchro Monster / Dragon / Effect",
    attack: 3000,
    defense: 2000,
    isSoldOut: false,
  },
  {
    image: stardustDragonImg,
    title: "Stardust Dragon",
    attribute: "WIND",
    type: "Synchro Monster / Dragon",
    attack: 2500,
    defense: 2000,
    isSoldOut: false,
  },
  {
    image: superConductorTyrannoImg,
    title: "Super Conductor Tyranno",
    attribute: "LIGHT",
    type: "Effect Monster / Dinosaur",
    attack: 3300,
    defense: 1400,
    isSoldOut: false,
  },
  {
    image: theWingedDragonOfRaImg,
    title: "The Winged Dragon of Ra",
    attribute: "DIVINE",
    type: "Effect Monster / Divine-Beast",
    attack: 0,
    defense: 0,
    isSoldOut: false,
  },
  {
    image: uriaLordOfSearingFlamesImg,
    title: "Uria, Lord of Searing Flames",
    attribute: "FIRE",
    type: "Effect Monster / Pyro",
    attack: 1800,
    defense: 1000,
    isSoldOut: false,
  },
  {
    image: wingedKuribohImg,
    title: "Winged Kuriboh",
    attribute: "LIGHT",
    type: "Effect Monster / Fairy",
    attack: 300,
    defense: 200,
    isSoldOut: false,
  },
  {
    image: yubelImg,
    title: "Yubel",
    attribute: "DARK",
    type: "Effect Monster / Fiend",
    attack: 0,
    defense: 0,
    isSoldOut: false,
  },
];
