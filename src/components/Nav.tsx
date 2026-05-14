/**
 * Server-component wrapper around NavClient. Its only job is to build
 * the site search index server-side (which imports the full services
 * module) and pass the slim SearchEntry array down as a prop. The data
 * flows through the RSC payload (~12 KB serialized) instead of being
 * inlined into the client JS bundle (where the full services module
 * weighed ≈500 KB).
 */

import { buildSearchIndex } from "@/lib/search-index";
import NavClient from "@/components/NavClient";

export default function Nav() {
  const searchIndex = buildSearchIndex();
  return <NavClient searchIndex={searchIndex} />;
}
