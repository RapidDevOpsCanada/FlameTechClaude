/**
 * Server-component wrapper around NavClient. Its only job is to build
 * the site search index server-side (which imports the full services
 * module) and pass the slim SearchEntry array down as a prop. The data
 * flows through the RSC payload (~12 KB serialized) instead of being
 * inlined into the client JS bundle (where the full services module
 * weighed ≈500 KB).
 */

import { buildSearchIndex } from "@/lib/search-index";
import { getReviewsSummary } from "@/lib/reviews";
import NavClient from "@/components/NavClient";

export default function Nav() {
  const searchIndex = buildSearchIndex();
  // Pull the rating + count server-side so the nav utility bar shows
  // live values from content/reviews.yaml. Bumping total_reviews in
  // YAML now updates the header automatically — no second edit.
  const reviewsSummary = getReviewsSummary();
  return (
    <NavClient searchIndex={searchIndex} reviewsSummary={reviewsSummary} />
  );
}
