export interface Note {
  slug: string;
  project: string;
  projectName: string;
  projectHref: string;
  title: string;
  excerpt: string;
  published: string;
  displayDate: string;
  paragraphs: string[];
}

export const notes: Note[] = [
  {
    "slug": "why-im-building-ttlabs",
    "project": "ttlabs",
    "projectName": "ttlabs.no",
    "projectHref": "/projects/ttlabs/",
    "title": "Why I’m building ttlabs.no",
    "excerpt": "Making table-tennis equipment easier to understand, one comparison at a time.",
    "published": "2026-10-05",
    "displayDate": "5 October 2026",
    "paragraphs": [
      "ttlabs.no is my project for making table-tennis equipment easier to understand. It brings together information about rubbers and blades, side-by-side comparisons, and an AI-assisted finder to help players explore equipment that suits their playing style.",
      "The idea comes from a frustrating problem: manufacturers describe and rate their equipment differently. A speed or spin rating from one brand doesn’t necessarily mean the same thing as a similar number from another.",
      "My vision is to make those differences clearer through a consistent, evidence-based comparison framework. Original manufacturer information should remain visible, missing data should be acknowledged, and comparisons should explain their limits.",
      "Ultimately, I want ttlabs.no to help players understand the trade-offs, narrow their options, and choose equipment with more confidence."
    ]
  },
  {
    "slug": "the-vision-behind-furrow-and-crown",
    "project": "furrow-and-crown",
    "projectName": "Furrow & Crown",
    "projectHref": "/projects/furrow-and-crown/",
    "title": "The vision behind Furrow & Crown",
    "excerpt": "Connecting everyday medieval life with households, dynasties, and power.",
    "published": "2026-10-05",
    "displayDate": "5 October 2026",
    "paragraphs": [
      "Furrow & Crown is my vision for a 2D medieval life simulation where you inhabit the world as an individual. You might begin as an ordinary person earning a living, build a household, become involved in local affairs, or eventually rise into positions of power.",
      "It draws inspiration from the everyday life of Stardew Valley, the dynasties and politics of Crusader Kings, and the personal progression of Bannerlord. I want to connect those scales: the work of tending a farm or running a household should belong to the same world as trade, conflict, inheritance, and political ambition.",
      "The setting is an original fictional world, with societies and systems grounded in historical research. The ambition is a world where relationships, livelihoods, and decisions have lasting consequences.",
      "Development starts small: a prototype set in an inn, with connected rooms, characters, conversations, and everyday tasks. Singleplayer comes first. Multiplayer and more sophisticated AI-controlled characters are longer-term goals.",
      "The project is in early development; this describes the direction I’m building toward."
    ]
  }
];
