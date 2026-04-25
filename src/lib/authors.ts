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
  /** Body text rendered as a paragraph block; preserve hard breaks with \n\n. */
  bio: string;
  credentials?: string[];
};

export const authors: Record<string, AuthorBio> = {
  "Shaun Kristoff": {
    name: "Shaun Kristoff",
    role: "Owner & Operator, FlameTech Plumbing & Heating",
    initials: "SK",
    bio: "I'm Shaun Kristoff, owner and operator of FlameTech Plumbing & Heating, with over 25 years of experience in the plumbing and heating trade.\n\nI got my start early, working alongside my dad from the age of 13, and quickly developed a strong work ethic and a passion for the trade.\n\nOver the years, I've continued to grow my skills and stay up to date with industry standards. Later in my career, I earned my Hydronics (Boiler) Design Certificate, allowing me to design and install efficient, high-performance heating systems.\n\nAt FlameTech, I focus on delivering quality workmanship, honest service, and practical solutions. Whether it's a repair, upgrade, or full installation, every job is handled with care and attention to detail.",
    credentials: [
      "25+ years in trade",
      "Hydronics (Boiler) Design Certificate",
      "Red Seal · Alberta Licensed",
    ],
  },
  "Jason Mounsey": {
    name: "Jason Mounsey",
    role: "Co-Owner & Operator, FlameTech Plumbing & Heating",
    initials: "JM",
    bio: "With over 20 years of hands-on experience in the plumbing and HVAC industry, I bring a depth of knowledge and craftsmanship to every job I take on. Originally from England and shaped by a disciplined military background, I've built my career on reliability, precision, and pride in a job well done.\n\nNow based in Calgary and serving the surrounding areas, I'm the co-owner and operator of FlameTech Plumbing & Heating Ltd., where I specialize in residential plumbing and HVAC systems — with a particular focus on hydronic heating and boiler systems.",
    credentials: [
      "20+ years in trade",
      "Hydronic heating + boiler specialist",
      "Red Seal · Alberta Licensed",
    ],
  },
};

export function getAuthorBio(name: string): AuthorBio | null {
  return authors[name] ?? null;
}
