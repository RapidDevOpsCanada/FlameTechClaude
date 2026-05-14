/**
 * Curated HowTo schema data for step-by-step articles. Keyed by article
 * slug. When an article in this map is rendered, blog/[slug]/page.tsx
 * emits an extra HowTo JSON-LD node so the post is eligible for
 * step-by-step rich results in SERP.
 *
 * To add a new HowTo:
 *   1. Pull the named steps verbatim from the article body.
 *   2. Drop them in here as { name, text }.
 *   3. Optionally add tool[] / supply[] / totalTime (ISO 8601 duration).
 */

export type HowToStep = {
  name: string;
  text: string;
};

export type ArticleHowTo = {
  /** Optional override; defaults to the article title. */
  name?: string;
  /** Short summary; defaults to the article excerpt. */
  description?: string;
  /** Tools required (e.g. "Garden hose", "Soft-bristle brush"). */
  tool?: string[];
  /** Consumables required (e.g. "Coil cleaner", "Replacement fuse"). */
  supply?: string[];
  /** ISO 8601 duration like PT30M. */
  totalTime?: string;
  steps: HowToStep[];
};

export const articleHowTo: Record<string, ArticleHowTo> = {
  "how-to-clean-heat-pump-coils": {
    description:
      "Step-by-step procedure for safely cleaning the outdoor condenser coils on a residential heat pump.",
    totalTime: "PT45M",
    tool: [
      "Garden hose with standard spray nozzle",
      "Soft-bristle nylon brush",
      "Fin comb (optional)",
      "Work gloves and safety glasses",
    ],
    supply: ["Foaming HVAC coil cleaner (for heavily soiled coils)"],
    steps: [
      {
        name: "Turn off the power",
        text: "Cut power at the electrical disconnect box mounted near the outdoor unit, or at the main breaker panel. Confirm the system is off from your thermostat before proceeding.",
      },
      {
        name: "Clear the area around the unit",
        text: "Maintain at least two feet of clearance on all sides. Pull away tools, patio items, and trim back grass or shrubs growing against the unit. Rake out leaves and debris underneath.",
      },
      {
        name: "Remove loose debris",
        text: "Brush off any visible leaves, twigs, cottonwood fuzz, or grass clippings from the top and sides by hand or with a soft brush. Brush in the direction of the fins, not against them.",
      },
      {
        name: "Rinse the coils with a garden hose",
        text: "Spray from the outside in, top to bottom, on a moderate stream. The goal is to flush dirt out through the unit, not push it deeper into the fins. Never use a pressure washer.",
      },
      {
        name: "Apply coil cleaner if needed",
        text: "For units with visible buildup after rinsing, spray a foaming HVAC coil cleaner per the product directions. Most products need 5–10 minutes to penetrate. Don't let cleaner dry on the coils.",
      },
      {
        name: "Rinse thoroughly one more time",
        text: "After the cleaner has worked, rinse the entire unit again from top to bottom, outside to inside, until all residue is washed away.",
      },
      {
        name: "Inspect the fins and straighten any damage",
        text: "Look for sections where the aluminum fins are bent or flattened. Use a fin comb to gently realign them. Work carefully and don't force anything.",
      },
      {
        name: "Let everything dry before restoring power",
        text: "Give the unit at least 30 minutes to air dry before turning the power back on so residual moisture doesn't cause issues at startup.",
      },
      {
        name: "Restore power and test the system",
        text: "Flip the disconnect or breaker back on and call for heating or cooling from the thermostat. Confirm the outdoor fan runs and air flows freely through the coils.",
      },
    ],
  },

  "furnace-fuse-keeps-blowing": {
    description:
      "Quick three-step procedure for swapping a blown 3A control-board fuse so a furnace will fire again.",
    totalTime: "PT10M",
    tool: ["Phillips screwdriver", "Flashlight"],
    supply: [
      "Replacement 3-amp ATC/ATO automotive blade fuse (matching the original)",
    ],
    steps: [
      {
        name: "Kill the power",
        text: "Switch off the furnace at the dedicated wall switch (looks like a light switch near the unit) and at the breaker that feeds the furnace. Verify by trying to start the system from the thermostat.",
      },
      {
        name: "Swap the fuse",
        text: "Remove the front control panel screw, locate the small blade fuse on the control board (usually labelled F1, FUSE, or 3A), pull it straight out, and push the matching new fuse into its slot.",
      },
      {
        name: "Power up and test",
        text: "Re-secure the panel, restore power at the breaker and the furnace switch, and call for heat from the thermostat. The furnace should ignite within 60–90 seconds.",
      },
    ],
  },
};

export function getArticleHowTo(slug: string): ArticleHowTo | null {
  return articleHowTo[slug] ?? null;
}
