import bg0 from "@/public/00-luca-small.jpeg";
import bg1 from "@/public/01-ghibi-small.jpeg";
import bg2 from "@/public/02-island-small.png";
import bg3 from "@/public/03-journey-small.jpg";

import pic0 from "@/public/10-luca.jpeg";
import pic1 from "@/public/11-ghibi.jpeg";
import pic2 from "@/public/12-island.png";
import pic3 from "@/public/13-journey.jpg";

import char00 from "@/public/200-cat.jpeg";
import char01 from "@/public/201-boy.jpeg";
import char02 from "@/public/202-police.jpeg";

import char10 from "@/public/210-pig.jpeg";
import char11 from "@/public/211-fire.jpeg";
import char12 from "@/public/212-red-nose.jpeg";

import char20 from "@/public/220-wizard.png";
import char21 from "@/public/221-raft.png";
import char22 from "@/public/222-dog.png";

import char30 from "@/public/230-santa.jpg";
import char31 from "@/public/231-bird.jpg";
import char32 from "@/public/232-monkey.jpg";

export const gameLists = [
  {
    name: "Luca in Portorosso",
    href: "luca-in-portorosso",
    image: [bg0, pic0],
    artist: "Ross Murray",
    source:
      "https://www.mackaydesign.net/art-direction/project-two-ky966-y54l8?itemId=n1tv5an85doc0pwusor498cs40ygry",
    characters: [
      { name: "Cat", img: char00 },
      { name: "Boy", img: char01 },
      { name: "Police", img: char02 },
    ],
  },
  {
    name: "Ghibli Bathhouse",
    href: "ghibli-bathhouse",
    image: [bg1, pic1],
    artist: "Pocket Leslie",
    source:
      "https://www.facebook.com/pocketleslie/posts/pfbid02ovb2hG1FQQXmX9Sqw6A4LNMfjpZu6Ufuub44nGCGCiTuix6bL8fymeCHpS8wP8kwl",
    characters: [
      { name: "Pig", img: char10 },
      { name: "Fire", img: char11 },
      { name: "Red Nose", img: char12 },
    ],
  },
  {
    name: "Dragon Island",
    href: "dragon-island",
    image: [bg2, pic2],
    artist: "gozz",
    source:
      "https://www.reddit.com/r/wimmelbilder/comments/gugkq9/dragon_charmers_island_by_gozz_sss_a_list_of/",
    characters: [
      { name: "Wizard", img: char20 },
      { name: "Raft", img: char21 },
      { name: "Dog", img: char22 },
    ],
  },
  {
    name: "Journey Through Time",
    href: "journey-through-time",
    image: [bg3, pic3],
    artist: "Marija Tiurina",
    source:
      "https://www.reddit.com/r/wimmelbilder/comments/j02nto/history_and_legend_all_mixed_up_by_marija_tiurina/",
    characters: [
      { name: "Santa", img: char30 },
      { name: "Bird", img: char31 },
      { name: "Monkey", img: char32 },
    ],
  },
];
