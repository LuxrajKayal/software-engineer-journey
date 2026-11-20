# Featured Story Section

## Purpose
Display selected articles prominently on the Lux Omni Blog homepage in a CNET-style featured-story layout.

## Layout
- One large featured story.
- Two smaller featured stories positioned beside the large story.

## Large Featured Story
- The large story rotates automatically from left to right.
- Rotation pauses when the user hovers the mouse over the Featured Story section.
- Rotation resumes when the mouse leaves the section.
- The story's headline appears below its image.
- The headline remains associated with the correct image as the large story rotates.

## Two Smaller Featured Stories
- The two smaller stories remain fixed in position.
- They do not scroll or rotate.
- Each small story includes:
  1. A featured image.
  2. An article headline.
  3. A few lines of article text below the image, similar to an article preview.

## Article Images and Content
- Each story uses the featured image associated with its individual HTML article.
- The small stories display a short text preview below the image and headline.

## Content Selection

Featured stories are selected manually in the website's static source/data files. Changing the lead or supporting stories requires editing and testing the source, then publishing the change. There is no owner dashboard or browser-based settings editor.

## Behavior Summary
- **Large story:** Automatically rotates left to right; pauses on mouse hover and resumes when the mouse leaves.
- **Two small stories:** Stay fixed and do not rotate or scroll; each displays an image, headline, and a few lines of preview text.

## Still to Decide
- Rotation interval and transition speed.
- Whether the carousel should support touch/swipe and keyboard navigation.
- Exact responsive layout on tablet and mobile.
- How the featured image, headline, and preview text are retrieved from each article file or associated metadata.