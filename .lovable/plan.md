

## Plan: Add tomato harvest photo to the last ResultsSection item

**What changes:**

1. **Copy the uploaded image** to `src/assets/tomato-harvest.jpeg`
2. **Edit `src/components/ResultsSection.tsx`** — after the last grid item ("Odejdeš s jistotou a klidem…"), add the image with rounded corners (`rounded-2xl`) spanning the full width of the grid, as a standalone visual element below or inside the last card.

**Approach:**
- Import the image as an ES module from `@/assets/tomato-harvest.jpeg`
- Add an `<img>` tag after the grid items map, or embed it within the last card — I will place it as an image below the last item's text within the same card, giving it rounded corners and proper spacing.

