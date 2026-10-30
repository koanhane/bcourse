# bCourse Remind Me — revised case study

Open index.html in a browser. Keep editorial.css, site.js, and assets beside it. No installation or external fonts required. Publish this folder’s contents to static hosting to obtain a course-submission URL. The local preview is not a public URL.

## Current structure

Nine sections retained. Part 3 contains the final five mobile screens; Part 5 contains the key-screen alternatives sketch and the team’s hand-drawn flow. Part 6 explains V1→V2→V3 together, organized around reminder setup and the to-do list, with surrounding flow changes summarized afterward.

Research now focuses on forgetting to act and underestimating work. The unrelated lecture-slide and course-announcement discussion has been removed. Source: bCourses_Canvas Student Survey (Responses).xlsx, Form Responses 1, 49 consented rows (2–50); 38 report at least one missed/nearly missed deadline (M2:M50). Exact quotes: P45 and P12. Emails are not included.

## Prototype

One muted, autoplaying, looping video inside a phone frame, default 2× playback. Pause and 1× controls remain available. If browser settings block autoplay, the page provides a Play button and an explanatory message.

The original source was copy_7025F135-AB1C-4468-AFCB-7F6E8262567A.MOV. The focused clip uses 27.5–44.7 seconds of the original recording. It shows opening Lab 6, opening the reminder sheet, the phone notification, and then the email reminder, in that order. It is repackaged without re-encoding to preserve the original 1764×3840 video quality. The 17.2-second clip takes about 8.6 seconds at 2×. Playback speed is set by site.js; the underlying file retains its original speed.

## Evidence boundaries

V2 filenames identify the screens as after feedback. The page describes visible revisions without inventing participant quotes, counts, rejection reasons, or retest outcomes. Individual roles, tools, total project duration, still need confirmation by the team. The team confirmed using Claude to assist with the prototype. The AI estimates and notification screens are prototype content, not verified production integrations.

## Editing

Page content: index.html. Layout and type: editorial.css. Video controls: site.js. All original process and final-screen PNGs remain under assets. This revision uses plain text rather than separate V2→V3 fragments.

## Sidebar and confirmed AI use

Desktop and tablet windows use a fixed left contents column and right content. Current section is highlighted during scrolling. Phone widths show a compact contents block at the top. Reflections records that Claude helped build the prototype, separately from AI assistance with the case-study website.

## Upload to GitHub Pages

Upload the **contents of this website folder** together to the repository folder selected in GitHub Pages. Keep index.html at that published folder’s root, with editorial.css, site.js, .nojekyll, and assets/ beside it. Do not upload only the HTML. Do not rename the assets independently of their HTML references.

All website references use relative paths (assets/..., editorial.css, site.js), so a project URL such as username.github.io/repository-name/ works. Names and capitalization have been checked against the exact packaged files. The page contains no /Users/... paths or localhost links. Some supplied source images have shorter names in assets/; the HTML points to those packaged names.
