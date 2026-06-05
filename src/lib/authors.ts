/**
 * Static author bios keyed by display name. Display names match the
 * `articles.author` column in Postgres so a blog post resolves its
 * author by simple lookup. Falls through to a generic byline when an
 * author isn't found here.
 */

export type AuthorBio = {
  name: string;
  role: string;
  initials: string;
  /** Headshot avatar path (~96x96 square). Falls back to initials if absent. */
  avatar?: string;
  /** Body text rendered as a paragraph block; preserve hard breaks with \n\n. */
  bio: string;
  credentials?: string[];
};

export const authors: Record<string, AuthorBio> = {
  "Shaun Kristoff": {
    name: "Shaun Kristoff",
    role: "Owner & Operator, FlameTech Plumbing & Heating",
    initials: "SK",
    avatar: "/images/team/shaun-kristoff.jpg",
    bio: "I'm Shaun Kristoff, owner and operator of FlameTech Plumbing & Heating, with over 25 years of experience in the plumbing and heating trade.\n\nI got my start early, working alongside my dad from the age of 13, and quickly developed a strong work ethic and a passion for the trade.\n\nOver the years, I've continued to grow my skills and stay up to date with industry standards, including hydronic heating system design and installation.\n\nAt FlameTech, I focus on delivering quality workmanship, honest service, and practical solutions. Whether it's a repair, upgrade, or full installation, every job is handled with care and attention to detail.",
    credentials: [
      "25+ years in trade",
      "Hydronic heating experience",
      "Red Seal · Alberta Licensed",
    ],
  },
  "Jason Mounsey": {
    name: "Jason Mounsey",
    role: "Owner & Operator, FlameTech Plumbing & Heating",
    initials: "JM",
    avatar: "/images/team/jason-mounsey.jpg",
    bio: "With over 20 years of hands-on experience in the plumbing and HVAC industry, I bring a depth of knowledge and craftsmanship to every job I take on. Originally from England and shaped by a disciplined military background, I've built my career on reliability, precision, and pride in a job well done.\n\nNow based in Calgary and serving the surrounding areas, I'm the owner and operator of FlameTech Plumbing & Heating Ltd., where I specialize in residential plumbing and HVAC systems — with a particular focus on hydronic heating and boiler systems.",
    credentials: [
      "20+ years in trade",
      "Hydronic heating + boiler specialist",
      "Red Seal · Alberta Licensed",
    ],
  },
  "Ben Driedger": {
    name: "Ben Driedger",
    role: "Red Seal Plumbing & HVAC Technician, FlameTech",
    initials: "BD",
    avatar: "/images/team/ben-driedger.jpg",
    bio: "Hi there! I'm Ben! I've been in the residential plumbing and HVAC field since I started back in early 2018. I quickly grew to know and love the trade, finishing my Red Seal testing in 2021.\n\nI take pride in my work, and will always make sure the job is done as if I was working in my own home.\n\nAside from work, sports primarily keep me occupied. I'm a big hockey fan, but I have always played and watched most other sports too. Born and raised in YYC, this is the place I call home.",
    credentials: [
      "In trade since 2018",
      "Red Seal certified (2021)",
      "Born & raised in Calgary",
    ],
  },
};

export function getAuthorBio(name: string): AuthorBio | null {
  return authors[name] ?? null;
}
