# Living Archive — Development Conversation and Change Record

> **Documentation status:** Reconstructed from the conversation text available in this session and the files currently mounted in the workspace. User prompts below are **condensed/paraphrased** where indicated, and agent responses are **summaries**, not a verbatim chat export. Some early turns and intermediary tool activity are not available in full. This document does **not** falsely claim to contain a complete verbatim transcript. For an authoritative word-for-word record, use ChatGPT's conversation export.
>
> **Scope:** Portfolio design, React implementation, responsive tiling, animation, performance, visual styling, documentation, and bilingual translation.

## Chronological conversation

The roles are labeled **USER** and **AGENT**. Each item records the request and the response/action that followed. Wording in this section is a concise reconstruction rather than a quotation unless it is plainly identical to the visible prompt.

### Exchange 01

**USER — request:** I'm making a portfolio website ... analyze the website ... propose some ideas ...

**AGENT — response / outcome:** Analyzed portfolio direction and proposed more dynamic visuals and responsive improvements.

### Exchange 02

**USER — request:** I'm thinking of something else ... a scrolling collage in the background that can be clicked on ...

**AGENT — response / outcome:** Proposed an interactive archive collage around the portfolio.

### Exchange 03

**USER — request:** Here's an example of what I have in mind [image].

**AGENT — response / outcome:** Discussed the visual reference.

### Exchange 04

**USER — request:** The background can be interactive ... short snappy zoom animation ... seamless transition ...

**AGENT — response / outcome:** Specified zoom-through navigation from collage tiles and navigation controls.

### Exchange 05

**USER — request:** We can add the archive selector ... alongside night/day mode and language settings.

**AGENT — response / outcome:** Added Archive, theme, and language controls to design.

### Exchange 06

**USER — request:** Don't have a separate nav bar ... floating circular buttons ... [sketch].

**AGENT — response / outcome:** Agreed on three floating circular controls without a header.

### Exchange 07

**USER — request:** The collage background encapsulates the buttons as well.

**AGENT — response / outcome:** Clarified that collage extends behind floating controls and central portfolio.

### Exchange 08

**USER — request:** Show a quick demonstration of your idea.

**AGENT — response / outcome:** Provided an interactive portfolio/collage mockup.

### Exchange 09

**USER — request:** Let's use a mathematically inspired perfect squared square ... reallocate ...

**AGENT — response / outcome:** Proposed mathematically ordered square mosaic and archive transformation.

### Exchange 10

**USER — request:** Rather than force the initial arrangement ... archive move a squared square ... [example].

**AGENT — response / outcome:** Distinguished dispersed portfolio arrangement from assembled archive tiling.

### Exchange 11

**USER — request:** Have the squares align with the edges of the portfolio when not in archive mode.

**AGENT — response / outcome:** Proposed flush-aligned square wings against the central page.

### Exchange 12

**USER — request:** Your graphic ... messy and non squared tiling ... follow my graphic ...

**AGENT — response / outcome:** Acknowledged invalid rectangle illustration and discussed strict square tiling.

### Exchange 13

**USER — request:** Forgo exact perfection ... orderly set of squares in asymmetric arrangement ...

**AGENT — response / outcome:** Switched to adaptive asymmetric square packing.

### Exchange 14

**USER — request:** Generate this website using React ... 3–5 placeholder achievements ... growth graphic.

**AGENT — response / outcome:** Delivered initial React/Vite ZIP and mosaic growth diagrams.

### Exchange 15

**USER — request:** I want to iterate ... before you output a fixed version.

**AGENT — response / outcome:** Agreed to incremental design reviews and replacement-file deliveries.

### Exchange 16

**USER — request:** There are gaps above and below the central portfolio [image].

**AGENT — response / outcome:** Identified 32px top/bottom offsets and proposed removing them.

### Exchange 17

**USER — request:** You have not added any compatibility features for mobile, tablets, alternative sizes.

**AGENT — response / outcome:** Proposed responsive desktop/tablet/mobile architecture.

### Exchange 18

**USER — request:** For mobile and small windows ... passively scrolling line of squares by the sides.

**AGENT — response / outcome:** Specified two narrow, passive scrolling square columns.

### Exchange 19

**USER — request:** When going into archive mode, it will collapse the 2 lines into a grid.

**AGENT — response / outcome:** Specified two-column-to-grid archive animation.

### Exchange 20

**USER — request:** Produce the new files ... just files to be replaced.

**AGENT — response / outcome:** Delivered responsive replacement ZIP.

### Exchange 21

**USER — request:** Make subheading larger and faded ... caption gap ... links more prominent ... remove 01–04 footer.

**AGENT — response / outcome:** Delivered typography and navigation replacements.

### Exchange 22

**USER — request:** Archive mode ... does not cover screen ... chasm on each side ... no bottom gap.

**AGENT — response / outcome:** Delivered full-bleed archive layout fix.

### Exchange 23

**USER — request:** Pattern is way too repetitive ... every new square has a different internal pattern [image].

**AGENT — response / outcome:** Initially misunderstood request and changed decorative tile artwork.

### Exchange 24

**USER — request:** Not the internal graphic ... self-ordering mechanism of squares TILING [image].

**AGENT — response / outcome:** Corrected interpretation and proposed procedural square subdivision.

### Exchange 25

**USER — request:** Introduce rotations and mutations ... combine four smaller squares ... rotate self-contained formations.

**AGENT — response / outcome:** Outlined merge, subdivide, and rotate operations.

### Exchange 26

**USER — request:** Show me a demonstration of this idea.

**AGENT — response / outcome:** Provided interactive procedural square-tiling demo.

### Exchange 27

**USER — request:** Maintain arrangement within session ... stable on shrink, expand, rotate.

**AGENT — response / outcome:** Separated stable topology from responsive layout projection.

### Exchange 28

**USER — request:** Produce the files.

**AGENT — response / outcome:** Delivered procedural tiling replacement ZIP.

### Exchange 29

**USER — request:** Gaps at edges ... smallest square too small for text ... literature club too small [image].

**AGENT — response / outcome:** Delivered edge coverage, minimum achievement square sizing, typography fix.

### Exchange 30

**USER — request:** Achievements randomly interspersed ... passive scroll ... lag when zooming ... empty grids theme.

**AGENT — response / outcome:** Delivered passive auto-scroll, virtualization/caching, and theme-aware decorative squares.

### Exchange 31

**USER — request:** Inactive time 2 seconds ... 33% faster ... scroll down ... quick cycle back.

**AGENT — response / outcome:** Delivered updated auto-scroll and rewind logic.

### Exchange 32

**USER — request:** Phone display bad ... cannot see side column ... 2-second eased return ... 3 designs [image].

**AGENT — response / outcome:** Provided three mobile concepts, balanced rails implementation, 2-second rewind.

### Exchange 33

**USER — request:** Add scroll feature to mobile and tablet ... no scroll in mobile.

**AGENT — response / outcome:** Delivered mobile/tablet auto-scroll fix.

### Exchange 34

**USER — request:** Mobile top gap ... floating buttons cover collage ... hide after 3 seconds [image].

**AGENT — response / outcome:** Delivered mobile top-padding and auto-hide controls fix.

### Exchange 35

**USER — request:** Colors clash ... slowly change by every square, not group [image].

**AGENT — response / outcome:** Delivered continuous color field and light/dark preview.

### Exchange 36

**USER — request:** What value should I change to tinker with gradient?

**AGENT — response / outcome:** Explained --mosaic-horizontal, --mosaic-vertical, and background-size.

### Exchange 37

**USER — request:** Add an ease to scroll ... smooth ease moving and stopping.

**AGENT — response / outcome:** Delivered acceleration/deceleration scroll replacement.

### Exchange 38

**USER — request:** Update README to reflect changes [README(2).md].

**AGENT — response / outcome:** Delivered updated README.md.

### Exchange 39

**USER — request:** Achievement bodies and image captions don't have translations.

**AGENT — response / outcome:** Prepared translation support; later superseded by user instructions.

### Exchange 40

**USER — request:** Don't translate.

**AGENT — response / outcome:** Paused translation changes.

### Exchange 41

**USER — request:** Here's current project ZIP ... add translation models ... translate my text into Arabic.

**AGENT — response / outcome:** Delivered updated achievement Arabic fields and bilingual components.

### Exchange 42

**USER — request:** Lastly, I want a .md of this entire conversation ... every question and reply ... linked files and contents and changes.

**AGENT — response / outcome:** Requested this documentation artifact.

## Design decisions carried forward

1. The portfolio is a central, independently readable page, flush with the viewport top and bottom.
2. Desktop surroundings use true square tiles in an asymmetric, orderly composition; tiles touch the central page edges.
3. Archive Mode fills the viewport and rearranges the same achievement entries into a mosaic.
4. Narrow viewports use two visible, passively moving square rails; Archive Mode combines them into a full grid.
5. Procedural tiling varies geometry via subdivision, merging, and rotation; generated topology stays stable across resizes/orientation changes within a page load.
6. Achievement tiles reserve readable minimum dimensions; smaller tiles are decorative.
7. Automatic movement pauses on interaction, resumes after 2 seconds, eases into motion, and performs a 2-second eased rewind after reaching the bottom.
8. Floating theme/language/archive controls hide after 3 seconds of inactivity and reappear on interaction.
9. Mosaic colors form a continuous, subdued field, with separate light/dark palettes.
10. Achievement bodies, image captions, metadata, and links support English/Arabic localized fields.

## Linked deliverables and attachments

The following paths are files **verified in the current working environment**. Links point to the artifacts generated or uploaded in this conversation. A ZIP's manifest and source files are recorded in the following sections.

- [archive-fullbleed-fix.zip](sandbox:/mnt/data/archive-fullbleed-fix.zip) — 4,727 bytes
- [portfolio-arabic-translation-fix.zip](sandbox:/mnt/data/portfolio-arabic-translation-fix.zip) — 13,162 bytes
- [portfolio-arabic-translations-current-project.zip](sandbox:/mnt/data/portfolio-arabic-translations-current-project.zip) — 15,733 bytes
- [portfolio-archive-react.zip](sandbox:/mnt/data/portfolio-archive-react.zip) — 1,065,814 bytes
- [portfolio-assignment(1).zip](sandbox:/mnt/data/portfolio-assignment(1).zip) — 30,776,711 bytes
- [portfolio-assignment.zip](sandbox:/mnt/data/portfolio-assignment.zip) — 2,071,312 bytes
- [portfolio-autoscroll-cycle-replacements.zip](sandbox:/mnt/data/portfolio-autoscroll-cycle-replacements.zip) — 5,193 bytes
- [portfolio-content-replacements.zip](sandbox:/mnt/data/portfolio-content-replacements.zip) — 9,247 bytes
- [portfolio-continuous-palette-replacements.zip](sandbox:/mnt/data/portfolio-continuous-palette-replacements.zip) — 11,768 bytes
- [portfolio-edge-typography-replacements.zip](sandbox:/mnt/data/portfolio-edge-typography-replacements.zip) — 13,340 bytes
- [portfolio-mobile-scroll-replacements.zip](sandbox:/mnt/data/portfolio-mobile-scroll-replacements.zip) — 18,544 bytes
- [portfolio-mobile-tablet-autoscroll-fix.zip](sandbox:/mnt/data/portfolio-mobile-tablet-autoscroll-fix.zip) — 16,069 bytes
- [portfolio-mobile-top-controls-fix.zip](sandbox:/mnt/data/portfolio-mobile-top-controls-fix.zip) — 9,843 bytes
- [portfolio-mutating-tiling-replacements.zip](sandbox:/mnt/data/portfolio-mutating-tiling-replacements.zip) — 10,281 bytes
- [portfolio-performance-replacements.zip](sandbox:/mnt/data/portfolio-performance-replacements.zip) — 17,118 bytes
- [portfolio-readme-replacement.zip](sandbox:/mnt/data/portfolio-readme-replacement.zip) — 5,491 bytes
- [portfolio-responsive-replacements.zip](sandbox:/mnt/data/portfolio-responsive-replacements.zip) — 12,722 bytes
- [portfolio-scroll-easing-replacements.zip](sandbox:/mnt/data/portfolio-scroll-easing-replacements.zip) — 7,564 bytes
- [portfolio-unique-patterns-replacements.zip](sandbox:/mnt/data/portfolio-unique-patterns-replacements.zip) — 10,417 bytes
- [Image: image(20261121-105734).png](sandbox:/mnt/data/image(20261121-105734).png)
- [Image: image(20261121-110417).png](sandbox:/mnt/data/image(20261121-110417).png)
- [Image: image(20261121-110717).png](sandbox:/mnt/data/image(20261121-110717).png)
- [Image: image(20261121-110956).png](sandbox:/mnt/data/image(20261121-110956).png)
- [Image: image(20261121-113422).png](sandbox:/mnt/data/image(20261121-113422).png)
- [Image: image(20261121-123810).png](sandbox:/mnt/data/image(20261121-123810).png)
- [Image: image(20261121-124852).png](sandbox:/mnt/data/image(20261121-124852).png)
- [Image: image(20261121-130118).png](sandbox:/mnt/data/image(20261121-130118).png)
- [Image: image(20261121-130608).png](sandbox:/mnt/data/image(20261121-130608).png)
- [Image: image(20261121-131635).png](sandbox:/mnt/data/image(20261121-131635).png)
- [Image: image(20261121-135954).png](sandbox:/mnt/data/image(20261121-135954).png)
- [Image: image(20261121-151743).png](sandbox:/mnt/data/image(20261121-151743).png)
- [Image: image(20261121-152602).png](sandbox:/mnt/data/image(20261121-152602).png)
- [Image: layout-qa-1440-archive.png](sandbox:/mnt/data/layout-qa-1440-archive.png)
- [Image: layout-qa-1440-portfolio.png](sandbox:/mnt/data/layout-qa-1440-portfolio.png)
- [Image: layout-qa-390-archive.png](sandbox:/mnt/data/layout-qa-390-archive.png)
- [Image: layout-qa-390-portfolio.png](sandbox:/mnt/data/layout-qa-390-portfolio.png)
- [Image: mobile-layout-three-options.png](sandbox:/mnt/data/mobile-layout-three-options.png)
- [Image: mosaic-growth-diagram.png](sandbox:/mnt/data/mosaic-growth-diagram.png)
- [Image: palette-preview-dark.png](sandbox:/mnt/data/palette-preview-dark.png)
- [Image: palette-preview-light.png](sandbox:/mnt/data/palette-preview-light.png)
- [Image: portfolio-continuous-palette-preview.png](sandbox:/mnt/data/portfolio-continuous-palette-preview.png)
- [Image: portfolio-cover-preview.png](sandbox:/mnt/data/portfolio-cover-preview.png)
- [Vector graphic: mosaic-growth-diagram.svg](sandbox:/mnt/data/mosaic-growth-diagram.svg)
- [README(2).md](sandbox:/mnt/data/README(2).md)
- [README.md](sandbox:/mnt/data/README.md)

## ZIP file inventories (actual contents)

### archive-fullbleed-fix.zip

**Files:** 2; **SHA-256:** `785b27c4b950a0242562d09e7b63118606e7098f649cfaeaee04e1a4b528fbff`

```text
src/lib/mosaicLayout.js (6,644 bytes)
tests/mosaicLayout.test.js (5,977 bytes)
```

### portfolio-arabic-translation-fix.zip

**Files:** 6; **SHA-256:** `22b734ea08af6f4e91f69410335d41c4dc4c2f7387939b0650bcb7fda344a230`

```text
TRANSLATIONS.md (2,810 bytes)
src/components/ArchiveMosaic.jsx (7,500 bytes)
src/components/PortfolioPanel.jsx (9,198 bytes)
src/content/achievementTranslations.js (5,889 bytes)
src/content/translations.js (6,312 bytes)
tests/achievementTranslations.test.js (2,666 bytes)
```

### portfolio-arabic-translations-current-project.zip

**Files:** 7; **SHA-256:** `ae64c2eed9865276412b5ba4d0c935657f6aad7ebd4cc19895221b7263920762`

```text
docs/TRANSLATIONS.md (2,327 bytes)
src/components/ArchiveMosaic.jsx (7,553 bytes)
src/components/PortfolioPanel.jsx (9,390 bytes)
src/content/localizeEntry.js (1,352 bytes)
src/content/translations.js (6,367 bytes)
src/data/achievements.js (10,655 bytes)
tests/entryTranslation.test.js (3,314 bytes)
```

### portfolio-archive-react.zip

**Files:** 31; **SHA-256:** `de37c73ab290ea40e9fcb3c1f23886ea7b9b9292afeaaa58797c574254f0fd4f`

```text
portfolio-archive-react/public/art/talk.svg (1,550 bytes)
portfolio-archive-react/public/art/experiment.svg (1,415 bytes)
portfolio-archive-react/public/art/dashboard.svg (1,557 bytes)
portfolio-archive-react/public/art/library.svg (2,046 bytes)
portfolio-archive-react/public/art/research.svg (1,592 bytes)
portfolio-archive-react/public/art/reading.svg (1,622 bytes)
portfolio-archive-react/public/art/commerce.svg (1,591 bytes)
portfolio-archive-react/public/art/writing.svg (1,546 bytes)
portfolio-archive-react/public/art/portfolio.svg (1,736 bytes)
portfolio-archive-react/public/art/mobile.svg (1,634 bytes)
portfolio-archive-react/public/portrait.png (924,942 bytes)
portfolio-archive-react/index.html (832 bytes)
portfolio-archive-react/docs/mosaic-growth.svg (15,377 bytes)
portfolio-archive-react/docs/mosaic-growth.png (107,878 bytes)
portfolio-archive-react/src/main.jsx (245 bytes)
portfolio-archive-react/src/styles/global.css (17,960 bytes)
portfolio-archive-react/src/data/achievements.js (7,505 bytes)
portfolio-archive-react/src/components/Icons.jsx (1,338 bytes)
portfolio-archive-react/src/components/TransitionLayer.jsx (750 bytes)
portfolio-archive-react/src/components/ArchiveMosaic.jsx (2,156 bytes)
portfolio-archive-react/src/components/PortfolioPanel.jsx (9,112 bytes)
portfolio-archive-react/src/components/FloatingControls.jsx (1,228 bytes)
portfolio-archive-react/src/lib/mosaicLayout.js (3,179 bytes)
portfolio-archive-react/src/App.jsx (5,166 bytes)
portfolio-archive-react/src/hooks/useViewport.js (600 bytes)
portfolio-archive-react/src/content/translations.js (4,328 bytes)
portfolio-archive-react/tests/mosaicLayout.test.js (2,924 bytes)
portfolio-archive-react/package.json (431 bytes)
portfolio-archive-react/make_art.py (7,505 bytes)
portfolio-archive-react/README.md (6,077 bytes)
portfolio-archive-react/make_diagram.py (3,953 bytes)
```

### portfolio-assignment(1).zip

**Files:** 2531; **SHA-256:** `a97dba7269eed782eae9e5fe8e45ed51459fac0194d760317a3e245a83c48d8e`

```text
portfolio-assignment/.git/COMMIT_EDITMSG (402 bytes)
portfolio-assignment/.git/config (462 bytes)
portfolio-assignment/.git/description (73 bytes)
portfolio-assignment/.git/FETCH_HEAD (123 bytes)
portfolio-assignment/.git/gk/config (224 bytes)
portfolio-assignment/.git/HEAD (33 bytes)
portfolio-assignment/.git/hooks/applypatch-msg.sample (478 bytes)
portfolio-assignment/.git/hooks/commit-msg.sample (1,972 bytes)
portfolio-assignment/.git/hooks/fsmonitor-watchman.sample (4,611 bytes)
portfolio-assignment/.git/hooks/post-update.sample (189 bytes)
portfolio-assignment/.git/hooks/pre-applypatch.sample (424 bytes)
portfolio-assignment/.git/hooks/pre-commit.sample (1,649 bytes)
portfolio-assignment/.git/hooks/pre-merge-commit.sample (416 bytes)
portfolio-assignment/.git/hooks/pre-push.sample (1,374 bytes)
portfolio-assignment/.git/hooks/pre-rebase.sample (4,898 bytes)
portfolio-assignment/.git/hooks/pre-receive.sample (544 bytes)
portfolio-assignment/.git/hooks/prepare-commit-msg.sample (1,492 bytes)
portfolio-assignment/.git/hooks/push-to-checkout.sample (2,783 bytes)
portfolio-assignment/.git/hooks/sendemail-validate.sample (2,308 bytes)
portfolio-assignment/.git/hooks/update.sample (3,650 bytes)
portfolio-assignment/.git/index (286,018 bytes)
portfolio-assignment/.git/info/exclude (240 bytes)
portfolio-assignment/.git/info/refs (258 bytes)
portfolio-assignment/.git/logs/HEAD (5,118 bytes)
portfolio-assignment/.git/logs/refs/heads/main (2,581 bytes)
portfolio-assignment/.git/logs/refs/heads/Website-Overhaul (2,552 bytes)
portfolio-assignment/.git/logs/refs/remotes/origin/HEAD (205 bytes)
portfolio-assignment/.git/logs/refs/remotes/origin/main (1,520 bytes)
portfolio-assignment/.git/logs/refs/remotes/origin/Website-Overhaul (1,672 bytes)
portfolio-assignment/.git/objects/00/a85d55b21dbc362fc60c0028a9a4eb5cd804f2 (2,210 bytes)
portfolio-assignment/.git/objects/02/22aa59ca5ecbe22e1e5a17fa63e69a200f954f (1,920 bytes)
portfolio-assignment/.git/objects/04/71daf972433f11c5018a20b84f967df767fba1 (1,752 bytes)
portfolio-assignment/.git/objects/04/b619a8c04c7a1172bbdab9f0d36d549dcbcd02 (643 bytes)
portfolio-assignment/.git/objects/05/2cbf3261ec03551a85d44d5c34fff7bcde5a1f (211 bytes)
portfolio-assignment/.git/objects/05/8303f72f400ff8b207fcf748d1ef3544b17499 (495 bytes)
portfolio-assignment/.git/objects/06/6ad4cc5a5d051f6492725fd0a27135459e6062 (54 bytes)
portfolio-assignment/.git/objects/0a/3c937cd6959a3d7d6cdf061c6145571fe79c8d (261 bytes)
portfolio-assignment/.git/objects/10/2d3ae6d3d8e9c4a4a2b055a573e77da79443bc (55 bytes)
portfolio-assignment/.git/objects/12/2ca21fe14ddf401eaa1f00f460f2a4c654858c (2,115 bytes)
portfolio-assignment/.git/objects/16/9de7bb9a8d353d70bb1ad8967f4ef2ef731092 (87 bytes)
portfolio-assignment/.git/objects/17/15abf3148586bdb7290037ed17835c25411fe4 (748 bytes)
portfolio-assignment/.git/objects/1b/94e864b227c18601be2dce6e52dfc426562c86 (3,435 bytes)
portfolio-assignment/.git/objects/1c/465eff10a5612150085e5f23e9d322eb695c1b (387 bytes)
portfolio-assignment/.git/objects/1d/a2df52c90caf102c90928a3a23b2c7d8536cbe (106 bytes)
portfolio-assignment/.git/objects/21/3ee4b4103b401746e56923fdf0cb931eec88d0 (2,728 bytes)
portfolio-assignment/.git/objects/23/ba0b2ec7a77d1d81f12cb9cd90e0ba62675929 (1,138 bytes)
portfolio-assignment/.git/objects/25/587da5c1bd2d5c0ca1a4fc54fa305632d6bc53 (2,841 bytes)
portfolio-assignment/.git/objects/28/9693133eb15e77d04d11676a20da537d4f8a8c (2,342 bytes)
portfolio-assignment/.git/objects/2a/05e946376c153c8821767648d9827a69af8f58 (7,935 bytes)
portfolio-assignment/.git/objects/2a/1df041cf66da0a749e176136e15ec48f996774 (141 bytes)
portfolio-assignment/.git/objects/2b/fd4ee4e35671390958524ee4a28e89544f803c (4,427 bytes)
portfolio-assignment/.git/objects/31/0975aa28620a78a7567c13fd13f0ea1b52cfe0 (674 bytes)
portfolio-assignment/.git/objects/32/6547e11189e9e0b6ebac1ad52f879535af5de0 (202 bytes)
portfolio-assignment/.git/objects/35/7e0d3c033cc7b968d7455b5170ca87e0f52354 (2,948 bytes)
portfolio-assignment/.git/objects/3c/f7e743f980c0f989d1aa3b747a5c3135071b4f (87 bytes)
portfolio-assignment/.git/objects/3e/d24cf6727ced1bb9e37d26435dcb6940185273 (87 bytes)
portfolio-assignment/.git/objects/41/354cbcf1b63b39f620f5a5d45f6059e7f7c8e9 (111,390 bytes)
portfolio-assignment/.git/objects/42/76920c4d216eba7b8163c84173a2cdac49e0cd (2,343 bytes)
portfolio-assignment/.git/objects/43/13c5b9352ffe4fe211d58953fd40773b0b0b61 (260 bytes)
portfolio-assignment/.git/objects/43/80072db676599a0cc59e73d5fdc08291b48254 (459 bytes)
portfolio-assignment/.git/objects/43/9313bc301950212b8cb0b3ef7c6dd27c0041bb (569 bytes)
portfolio-assignment/.git/objects/43/b27a9869acbfa6311e8d01623007592551c713 (495 bytes)
portfolio-assignment/.git/objects/44/afe1ad0a38f6c1255acd346a7b1aa7845c7a5f (495 bytes)
portfolio-assignment/.git/objects/46/8a5ba4d486d1f3d567e6b5c1a4fea2b66b699f (284 bytes)
portfolio-assignment/.git/objects/4a/a30fb26809022af1f71558303243c682324b8b (169 bytes)
portfolio-assignment/.git/objects/4a/b5b782ac47cdf53a3f681c41a4fa04e20b72ea (637 bytes)
portfolio-assignment/.git/objects/4c/cfad8aa88765f3e195b1c4daef0b3dfffff90d (86 bytes)
portfolio-assignment/.git/objects/4e/77559865946aa09ea71b9bfb44b19ab3faad2f (60 bytes)
portfolio-assignment/.git/objects/4f/6371931d50ef3a7e39903752f73b81da2c302a (65 bytes)
portfolio-assignment/.git/objects/51/4e8c03dc328bb59e18520c366395cfdc0549d2 (495 bytes)
portfolio-assignment/.git/objects/53/0b0eb55530afb6e97d495069478a3a8b198add (141 bytes)
portfolio-assignment/.git/objects/54/234b5a03de06de5586df7e19dfc28a2b5969bc (203 bytes)
portfolio-assignment/.git/objects/54/c1c43d488e9b6c7c45ca2b3dc0abafd93452bb (3,192 bytes)
portfolio-assignment/.git/objects/55/3f0f656f024046ec50a7afc502eb6c4525ab83 (211 bytes)
portfolio-assignment/.git/objects/55/f2a232d8e6103b882882a09e85cd37c5e6cd8d (260 bytes)
portfolio-assignment/.git/objects/55/f65f819943f7145700655a4e5daecbd320b5fa (54 bytes)
portfolio-assignment/.git/objects/56/4ac5c431e978c329232b6e2dd0350501cfc33b (213 bytes)
portfolio-assignment/.git/objects/56/552c2f699fb502b218e88bcd1630106511551c (202 bytes)
portfolio-assignment/.git/objects/58/d1056d5ff6ef88f72cacf2b4c81082888a17f3 (6,888 bytes)
portfolio-assignment/.git/objects/5a/28320bb0cd084b554b9a95f6a9c3d4974e1260 (212 bytes)
portfolio-assignment/.git/objects/5b/69190cc750b5ec01163574bd251632eefb350c (260 bytes)
portfolio-assignment/.git/objects/5b/e8d9c622c77e62cab09c4d98ad7e6bbca7adfa (185 bytes)
portfolio-assignment/.git/objects/5d/31b276a88ae627b63fe5cbdeed0a4da6453c02 (132,128 bytes)
portfolio-assignment/.git/objects/60/aae393530c0eb86fea613a683f81cd3e8983e3 (3,010 bytes)
portfolio-assignment/.git/objects/65/c5522516dd254c2a8284f3f17f6081784485e1 (975 bytes)
portfolio-assignment/.git/objects/66/aa13f23ee91056c5f050d4bf458fff501c6857 (495 bytes)
portfolio-assignment/.git/objects/67/a3c9f0499d1c5df7036e7831ac4275a9fa3b47 (192 bytes)
portfolio-assignment/.git/objects/68/27b369c676d7ff860d1d2b0f499751445ae463 (213 bytes)
portfolio-assignment/.git/objects/68/9c71d7ed025befa9de50700400fd1ffb32192a (185 bytes)
portfolio-assignment/.git/objects/6d/c0534e37ff635abbe02ec56810358aac3c6e29 (261 bytes)
portfolio-assignment/.git/objects/6e/1391fa16dcf8b86f34a2961446a3364ae13771 (60 bytes)
portfolio-assignment/.git/objects/71/1c5bd0609f1ad4afe6338ae37f32379ded79d7 (239 bytes)
portfolio-assignment/.git/objects/72/7388436f36fec7b1f6f0ec653fac905f648eea (184 bytes)
portfolio-assignment/.git/objects/76/916ae477559d4ffd3b332e23aa0784f3b3541d (55 bytes)
portfolio-assignment/.git/objects/79/5aaec4181e073a486cd4b186758e5e77721f6c (7,638 bytes)
portfolio-assignment/.git/objects/7c/525a13267a6b2eee4e1c6cc3ead2bbb5a9e2cc (6,645 bytes)
portfolio-assignment/.git/objects/7d/cfc9785436e0c013e12c45c2ba3117630972b4 (733 bytes)
portfolio-assignment/.git/objects/7e/fc012ef67f2f0fb6e8e7db6a1a048af85adce9 (2,235 bytes)
portfolio-assignment/.git/objects/7f/644823623dbd4e0994f6538c161222830bef29 (441 bytes)
portfolio-assignment/.git/objects/80/3a4d0893a3f69391e80f69575bfe2782d1645d (262 bytes)
portfolio-assignment/.git/objects/81/3b392067964feb24114bf74fbbf12cc3884cef (47,850 bytes)
portfolio-assignment/.git/objects/81/3d9d73cd7e3c72ae789f9fdcc7772ca3ae5f70 (2,543 bytes)
portfolio-assignment/.git/objects/82/9865e1dc51773180595fc190d87decbea00a6c (260 bytes)
portfolio-assignment/.git/objects/83/1ccd0fe8c03d2dd13e381760037ab8f50e49a7 (496 bytes)
portfolio-assignment/.git/objects/89/afd0319e7b8aab6ccba8535a8834b0e5d73827 (22,399 bytes)
portfolio-assignment/.git/objects/8e/ee6d9a5f907f7c924dc2159135da1a2c0b24ad (59 bytes)
portfolio-assignment/.git/objects/91/58d6ee4a278e422c4b7323c2eb011a5d0db493 (212 bytes)
portfolio-assignment/.git/objects/96/628804737c6dea8767382bd2589acc8974df08 (4,163 bytes)
portfolio-assignment/.git/objects/99/d21e834349bb37aad77b1c88f1624f88d4877f (161,449 bytes)
portfolio-assignment/.git/objects/9b/439635e000a7a79be9cd7e2710d3d313461a5c (6,856 bytes)
portfolio-assignment/.git/objects/9e/a1bc9bc74d9217310d0b923e801ad01581bd84 (471 bytes)
portfolio-assignment/.git/objects/a1/c431a057a353d89680a4599b695e058455fba8 (2,457 bytes)
portfolio-assignment/.git/objects/a2/aaa331b925db372feabb7e276314a3d439f84a (7,620 bytes)
portfolio-assignment/.git/objects/a4/8d596b0aec5a3bb349242bcf0bcbe75066c9b5 (203 bytes)
portfolio-assignment/.git/objects/a8/e6015dbb87e1f7582a30329b4c7aa684d793c0 (181 bytes)
portfolio-assignment/.git/objects/b3/58d9542640b1d5ab10845aa2f28f26b3b81a24 (261 bytes)
portfolio-assignment/.git/objects/b6/b627efe53f3547f85851c331a76586512b58a9 (495 bytes)
portfolio-assignment/.git/objects/b6/de9348d779c395eb8c6289fbe6a8e4971ec4ed (202 bytes)
portfolio-assignment/.git/objects/bc/1f8224b807e0b6c97e091432d9ba93410bf567 (495 bytes)
portfolio-assignment/.git/objects/bd/1636f318677d8993aa6cc3f9de42a6ba6ae4d7 (60 bytes)
portfolio-assignment/.git/objects/bd/b6653b8144dab4c0731bf03dd03da935474806 (2,066 bytes)
portfolio-assignment/.git/objects/bf/edf66f9c9794c7c0caa22dc01bcfd91e4365b6 (55 bytes)
portfolio-assignment/.git/objects/c0/3f3ce7bbd86ff9d814cb769500722d6d8d8027 (55 bytes)
portfolio-assignment/.git/objects/c1/3bf519685ad614e656c0fb145473372b40dd9b (212 bytes)
portfolio-assignment/.git/objects/c2/47bbb2016bc14e657db53bf9c64928f619c797 (60 bytes)
portfolio-assignment/.git/objects/c5/4f714293a16895df705ae76c6c98d1656d3cf1 (5,855 bytes)
portfolio-assignment/.git/objects/c7/03c66fd5ed65f1902e09da577ca397020ceaed (496 bytes)
portfolio-assignment/.git/objects/cb/4cacb8482fa9f19f7a7bfdb70558962e471860 (494 bytes)
portfolio-assignment/.git/objects/cb/80b160764fed5df3a061c2ed3b906584b97f33 (178 bytes)
portfolio-assignment/.git/objects/cb/ac9a3376ece082db0adfffda194fbdd95f301a (75,962 bytes)
portfolio-assignment/.git/objects/cc/8627a10e634917d92abc87fa379a0ad8f75e3b (5,237 bytes)
portfolio-assignment/.git/objects/cc/bb0ffb988db63b486f5dea11c732486318562c (173 bytes)
portfolio-assignment/.git/objects/cf/0618da0db1319e235b4eafd43f27712b209850 (2,199 bytes)
portfolio-assignment/.git/objects/d3/2a217e5555bbefbe83d40b17e888f22819f1e4 (201,708 bytes)
portfolio-assignment/.git/objects/d3/ec889b7eec58f4cdfb5aa0d5ac14f59e2b79bb (261 bytes)
portfolio-assignment/.git/objects/d6/7c0eef86ee96c92dec454b8c0f0687feeaf48f (170 bytes)
portfolio-assignment/.git/objects/d8/49ab8e2fdbdbba15ff2eb3f7bdb6139c17099e (65 bytes)
portfolio-assignment/.git/objects/d9/1eebe4f07957ae16233fd06678024678402d8f (241 bytes)
portfolio-assignment/.git/objects/db/fa3880ba191495ee3467e3ffaa316755ed1d32 (55 bytes)
portfolio-assignment/.git/objects/dc/68d33bc15aeee108ab08d8e3de37928bfced87 (2,767 bytes)
portfolio-assignment/.git/objects/dc/afeda2185c7b98db030acbc0e938310e92f786 (60 bytes)
portfolio-assignment/.git/objects/de/e1262eb22a9b3fd4aaa5c3495feda9bb7e37bb (4,516 bytes)
portfolio-assignment/.git/objects/e0/944ee1e69637746e30dbf5a5ba7dd7b7062e36 (498 bytes)
portfolio-assignment/.git/objects/e1/1a14506aabee979705913745c6abcee19074e3 (3,304 bytes)
portfolio-assignment/.git/objects/e1/368d7798340424bc186144f2fb422707d6e21f (60 bytes)
portfolio-assignment/.git/objects/e2/3302842261faa5b775e496bf2b755f6682abd0 (714 bytes)
portfolio-assignment/.git/objects/e2/872f4dbdfa3d1aec8ca4ea1d9935e62c89268b (168 bytes)
portfolio-assignment/.git/objects/e3/c21bf09bd71839206c4dc55610fd87268d6e94 (1,852 bytes)
portfolio-assignment/.git/objects/e5/629263a1fe9f9f0362a480ff2c82163dbb774c (1,085 bytes)
portfolio-assignment/.git/objects/ea/c976aec9f5d9e4ee2d3e96a29881e44de1696f (179 bytes)
portfolio-assignment/.git/objects/ed/079d69f052134d789e578ba722ba083491507a (496 bytes)
portfolio-assignment/.git/objects/f2/65cd4ddca897c3eb45524850917aa65d10b49b (212 bytes)
portfolio-assignment/.git/objects/f4/36dd944c668df4cad655ac2abe113d84554355 (262 bytes)
portfolio-assignment/.git/objects/f8/bc659ec399a4a0db8ddd8a4d1a4813ffaf6c5a (260 bytes)
portfolio-assignment/.git/objects/fd/e89634fbe5ef23fdffe00324cdc987733bd869 (900 bytes)
portfolio-assignment/.git/objects/fe/920013852a3b88a166b617c45517af02db31e5 (7,532 bytes)
portfolio-assignment/.git/objects/ff/56f06b78c401f8d9e827595b65810decaac0f8 (178 bytes)
portfolio-assignment/.git/objects/info/commit-graphs/commit-graph-chain (82 bytes)
portfolio-assignment/.git/objects/info/commit-graphs/graph-21bd455c7b18e9c966aa2feb8db590734961c279.graph (2,745 bytes)
portfolio-assignment/.git/objects/info/commit-graphs/graph-26b3373b23fff5f1239c3f6e8ba48476d23fbd1e.graph (1,553 bytes)
portfolio-assignment/.git/objects/info/packs (107 bytes)
portfolio-assignment/.git/objects/pack/multi-pack-index (72,896 bytes)
portfolio-assignment/.git/objects/pack/pack-91bc1fb7025b1c4ee741f3b4cf768b450fb45073.idx (72,220 bytes)
portfolio-assignment/.git/objects/pack/pack-91bc1fb7025b1c4ee741f3b4cf768b450fb45073.pack (13,220,819 bytes)
portfolio-assignment/.git/objects/pack/pack-91bc1fb7025b1c4ee741f3b4cf768b450fb45073.rev (10,216 bytes)
portfolio-assignment/.git/objects/pack/pack-ec971beebdd721f7227f8cf58f0ec6a18a495f1b.idx (1,604 bytes)
portfolio-assignment/.git/objects/pack/pack-ec971beebdd721f7227f8cf58f0ec6a18a495f1b.pack (10,419 bytes)
portfolio-assignment/.git/objects/pack/pack-ec971beebdd721f7227f8cf58f0ec6a18a495f1b.rev (128 bytes)
portfolio-assignment/.git/ORIG_HEAD (41 bytes)
portfolio-assignment/.git/packed-refs (112 bytes)
portfolio-assignment/.git/refs/heads/main (41 bytes)
portfolio-assignment/.git/refs/heads/Website-Overhaul (41 bytes)
portfolio-assignment/.git/refs/remotes/origin/HEAD (30 bytes)
portfolio-assignment/.git/refs/remotes/origin/main (41 bytes)
portfolio-assignment/.git/refs/remotes/origin/Website-Overhaul (41 bytes)
portfolio-assignment/AI Declaration.pdf (64,469 bytes)
portfolio-assignment/ai-usage-report.md (1,096 bytes)
portfolio-assignment/docs/mosaic-growth.png (107,878 bytes)
portfolio-assignment/docs/mosaic-growth.svg (15,377 bytes)
portfolio-assignment/index.html (832 bytes)
... 2351 additional files omitted from printed manifest
```

### portfolio-assignment.zip

**Files:** 92; **SHA-256:** `11c31f89db9073e14c56238c172bb26d6f60025fff20b9f6ee2cb2512196a30f`

```text
portfolio-assignment/.git/COMMIT_EDITMSG (287 bytes)
portfolio-assignment/.git/config (347 bytes)
portfolio-assignment/.git/description (73 bytes)
portfolio-assignment/.git/FETCH_HEAD (111 bytes)
portfolio-assignment/.git/gk/config (106 bytes)
portfolio-assignment/.git/HEAD (21 bytes)
portfolio-assignment/.git/hooks/applypatch-msg.sample (478 bytes)
portfolio-assignment/.git/hooks/commit-msg.sample (1,972 bytes)
portfolio-assignment/.git/hooks/fsmonitor-watchman.sample (4,611 bytes)
portfolio-assignment/.git/hooks/post-update.sample (189 bytes)
portfolio-assignment/.git/hooks/pre-applypatch.sample (424 bytes)
portfolio-assignment/.git/hooks/pre-commit.sample (1,649 bytes)
portfolio-assignment/.git/hooks/pre-merge-commit.sample (416 bytes)
portfolio-assignment/.git/hooks/pre-push.sample (1,374 bytes)
portfolio-assignment/.git/hooks/pre-rebase.sample (4,898 bytes)
portfolio-assignment/.git/hooks/pre-receive.sample (544 bytes)
portfolio-assignment/.git/hooks/prepare-commit-msg.sample (1,492 bytes)
portfolio-assignment/.git/hooks/push-to-checkout.sample (2,783 bytes)
portfolio-assignment/.git/hooks/sendemail-validate.sample (2,308 bytes)
portfolio-assignment/.git/hooks/update.sample (3,650 bytes)
portfolio-assignment/.git/index (777 bytes)
portfolio-assignment/.git/info/exclude (240 bytes)
portfolio-assignment/.git/logs/HEAD (2,581 bytes)
portfolio-assignment/.git/logs/refs/heads/main (2,581 bytes)
portfolio-assignment/.git/logs/refs/remotes/origin/HEAD (205 bytes)
portfolio-assignment/.git/logs/refs/remotes/origin/main (1,520 bytes)
portfolio-assignment/.git/objects/02/36da23feda1b7f236fa6d16c87fc4ad6cc7a59 (398 bytes)
portfolio-assignment/.git/objects/03/a6d3f8ac0fe12acbef85c45888c99a0b9453e5 (996 bytes)
portfolio-assignment/.git/objects/06/03a15f5bb25b4667f21df57f5c1fb3739f945e (296 bytes)
portfolio-assignment/.git/objects/07/f7b85f03be2ee79cd6250803a2b1c699f9ac3b (297 bytes)
portfolio-assignment/.git/objects/08/20f3501c99fc7c99ae305be8214b01be5a89f1 (240 bytes)
portfolio-assignment/.git/objects/0f/5ea91afe877be778e7fdac21cc48d2525a817e (203 bytes)
portfolio-assignment/.git/objects/24/a79da57c1aa568a051fde0adae55a3913d6f41 (176 bytes)
portfolio-assignment/.git/objects/2e/f36faf16c9bbb8d189334e4d8f57a5f82565bb (298 bytes)
portfolio-assignment/.git/objects/34/94353656db0a51a56a128a55f1cba4e83a4d4c (2,051 bytes)
portfolio-assignment/.git/objects/36/3aba12abb2276b22df2f56050b2f7f8b9a92b6 (298 bytes)
portfolio-assignment/.git/objects/3c/02ab761e6c50f73f9ee08721235227dbcbaf49 (481 bytes)
portfolio-assignment/.git/objects/3f/7956c691a1c6084d0fa5259209cd9cbb6319cf (504 bytes)
portfolio-assignment/.git/objects/46/10f38a383ffc6a5f66733b104658e59e8ca7ac (1,294 bytes)
portfolio-assignment/.git/objects/4c/27c9e67ba8fea7cb831a41084c00d169e71f02 (1,479 bytes)
portfolio-assignment/.git/objects/67/54858ee1e7a66a5798d203c5fc952d06a07d86 (339 bytes)
portfolio-assignment/.git/objects/69/c290632538504955cd47a4a2dc61ee496ecf25 (1,371 bytes)
portfolio-assignment/.git/objects/71/a42911d7b310b43f66ff05f8ed6c5fddcce17b (166 bytes)
portfolio-assignment/.git/objects/72/d6f212a56f56b13307eb8a9412031aa4c8672b (193 bytes)
portfolio-assignment/.git/objects/73/d2fb71c9d7f5818d84df78a9db31e230903a50 (256 bytes)
portfolio-assignment/.git/objects/73/db969077ba273feb03c612449976b9fb67db88 (1,471 bytes)
portfolio-assignment/.git/objects/7b/0b20c2481f4526082da3688d067aa0c542c773 (54,901 bytes)
portfolio-assignment/.git/objects/83/1e56c7769afb263c97965658573b67bd654201 (164 bytes)
portfolio-assignment/.git/objects/8e/f8755ba2f7fc30d06533a70af607404be35d38 (274 bytes)
portfolio-assignment/.git/objects/93/5a8c06b8bad6b12f3d6675a4dd154ccf369b30 (177 bytes)
portfolio-assignment/.git/objects/94/25165470d088be2d3e452c182541e7612ace6b (297 bytes)
portfolio-assignment/.git/objects/96/2d3dd5b571f509e7ffe258180072a2291425b5 (1,060 bytes)
portfolio-assignment/.git/objects/97/512d29fa41665a68e3ce738d40ebbdc644224c (256 bytes)
portfolio-assignment/.git/objects/9b/cbfaeeb148953964546a06607a992221ee1276 (3,774 bytes)
portfolio-assignment/.git/objects/9c/4219fc4d89ab446d0a424f419e9e3fc3405778 (1,058 bytes)
portfolio-assignment/.git/objects/9e/775eec349a3ecaa7bdc66b93cf2b89540a62ad (297 bytes)
portfolio-assignment/.git/objects/a2/6d775dd12530df54ef2348b8cda49044fb7346 (158 bytes)
portfolio-assignment/.git/objects/a8/48f623cdba974d7e2d22fb58cef70847848f36 (1,258 bytes)
portfolio-assignment/.git/objects/ac/6ff76f468e4f8c7022942b0f068db6a334bc25 (562 bytes)
portfolio-assignment/.git/objects/b0/6ee12a2c8685bf99c5ca7ff658a92746f7fdd2 (2,706 bytes)
portfolio-assignment/.git/objects/b1/e910501ac4fd23bc5e4e0cdb76024d6e37cbd2 (297 bytes)
portfolio-assignment/.git/objects/bb/cc24a5a962e483c42cd417c922d3c6d0a81cec (177 bytes)
portfolio-assignment/.git/objects/c1/b8c4b8e7891bb773d56f9da9b7737bcb5e4119 (158 bytes)
portfolio-assignment/.git/objects/d7/8a54537ae2edc18b6805f952c3f43bec411ca6 (177 bytes)
portfolio-assignment/.git/objects/de/35493b93b650bdfec4c113af8602f4fa4bebd4 (1,001 bytes)
portfolio-assignment/.git/objects/e1/e7c2f2f5b31983a151e6ad3c57f5ad2e17907d (297 bytes)
portfolio-assignment/.git/objects/e2/1cbb47017e9270a5a735e3bf1666921cf629db (3,774 bytes)
portfolio-assignment/.git/objects/e4/7d87a175e58b4fd370e38affd1b6f57ecfd9e9 (923,827 bytes)
portfolio-assignment/.git/objects/e6/f04132e0877372844e4040c429afa76c519f25 (297 bytes)
portfolio-assignment/.git/objects/ea/00110f7b090ec0026bca70e5fd95c4512bc493 (997 bytes)
portfolio-assignment/.git/objects/ee/b1858e833b03ca923f2f75a06872049554dfc6 (2,883 bytes)
portfolio-assignment/.git/objects/fe/24b8229e5fc8c02cfc4153c782a480de557d1e (667 bytes)
portfolio-assignment/.git/objects/info/commit-graphs/commit-graph-chain (82 bytes)
portfolio-assignment/.git/objects/info/commit-graphs/graph-862e419a62dcb16f9e03f991aaf8190f1592871f.graph (1,312 bytes)
portfolio-assignment/.git/objects/info/commit-graphs/graph-c38aff446c4e50b243e8cb459b4567b7d5b8316c.graph (2,153 bytes)
portfolio-assignment/.git/objects/pack/pack-ec971beebdd721f7227f8cf58f0ec6a18a495f1b.idx (1,604 bytes)
portfolio-assignment/.git/objects/pack/pack-ec971beebdd721f7227f8cf58f0ec6a18a495f1b.pack (10,419 bytes)
portfolio-assignment/.git/objects/pack/pack-ec971beebdd721f7227f8cf58f0ec6a18a495f1b.rev (128 bytes)
portfolio-assignment/.git/ORIG_HEAD (41 bytes)
portfolio-assignment/.git/packed-refs (112 bytes)
portfolio-assignment/.git/refs/heads/main (41 bytes)
portfolio-assignment/.git/refs/remotes/origin/HEAD (30 bytes)
portfolio-assignment/.git/refs/remotes/origin/main (41 bytes)
portfolio-assignment/AI Declaration.pdf (64,469 bytes)
portfolio-assignment/ai-usage-report.md (1,096 bytes)
portfolio-assignment/contact.html (5,195 bytes)
portfolio-assignment/index.html (9,670 bytes)
portfolio-assignment/marwanwedding.png (924,942 bytes)
portfolio-assignment/project.html (3,155 bytes)
portfolio-assignment/README.md (2,980 bytes)
portfolio-assignment/script.js (801 bytes)
portfolio-assignment/style.css (10,381 bytes)
```

### portfolio-autoscroll-cycle-replacements.zip

**Files:** 4; **SHA-256:** `b244ad1cfb1415c13c15782b09f7eac5480184b86cc944cc6dd2e959b6bff9b1`

```text
src/lib/autoScroll.js (1,490 bytes)
src/components/ArchiveMosaic.jsx (6,175 bytes)
tests/autoScroll.test.js (2,036 bytes)
README.txt (739 bytes)
```

### portfolio-content-replacements.zip

**Files:** 2; **SHA-256:** `dd0a6ff5700ee84828e14274185aae8d9707c3fb3179d79ac19bc50c57a8459e`

```text
src/styles/global.css (21,172 bytes)
src/components/PortfolioPanel.jsx (8,978 bytes)
```

### portfolio-continuous-palette-replacements.zip

**Files:** 4; **SHA-256:** `ba97dffdf4c6a406b569146c632563de252e35caff796d8924ac8d1f689553d1`

```text
src/components/ArchiveMosaic.jsx (7,046 bytes)
src/styles/global.css (24,305 bytes)
tests/ambientPalette.test.js (1,445 bytes)
README.txt (1,137 bytes)
```

### portfolio-edge-typography-replacements.zip

**Files:** 4; **SHA-256:** `06a49b05e29645cc2cf06ec54f29b124a9b8493260b7fdbffc718c38db3f5efe`

```text
src/lib/mosaicLayout.js (10,320 bytes)
src/styles/global.css (20,905 bytes)
tests/mosaicLayout.test.js (6,824 bytes)
README-REPLACEMENTS.txt (871 bytes)
```

### portfolio-mobile-scroll-replacements.zip

**Files:** 7; **SHA-256:** `4143f157d572824d8af1828555b1965788b0234626e170569678afb47105055b`

```text
src/components/ArchiveMosaic.jsx (6,458 bytes)
src/lib/autoScroll.js (1,641 bytes)
src/lib/mosaicLayout.js (11,458 bytes)
src/styles/global.css (23,536 bytes)
tests/autoScroll.test.js (2,801 bytes)
tests/mosaicLayout.test.js (7,859 bytes)
README.txt (1,243 bytes)
```

### portfolio-mobile-tablet-autoscroll-fix.zip

**Files:** 5; **SHA-256:** `8c4450302b37334aee2729461944d2185616f836b3bc5b392401f571eb1f458e`

```text
README.txt (1,247 bytes)
src/components/ArchiveMosaic.jsx (7,183 bytes)
src/lib/mosaicLayout.js (11,611 bytes)
src/styles/global.css (23,648 bytes)
tests/mobileScroll.test.js (1,991 bytes)
```

### portfolio-mobile-top-controls-fix.zip

**Files:** 4; **SHA-256:** `ce6395d3aa28200b22823a994db84110d55b93a0e681f518bbc8894c222551a7`

```text
src/components/FloatingControls.jsx (2,634 bytes)
src/styles/global.css (23,828 bytes)
tests/mobileControls.test.js (1,519 bytes)
README.txt (792 bytes)
```

### portfolio-mutating-tiling-replacements.zip

**Files:** 5; **SHA-256:** `9b4b744f940d1f88761c407db3adf35a02b7f4d5d536bb61f95a2e7d3c19375a`

```text
src/lib/mosaicLayout.js (9,378 bytes)
src/App.jsx (5,708 bytes)
src/components/ArchiveMosaic.jsx (2,918 bytes)
tests/mosaicLayout.test.js (5,078 bytes)
README-REPLACEMENTS.txt (1,293 bytes)
```

### portfolio-performance-replacements.zip

**Files:** 7; **SHA-256:** `47d1656aabd7616a14d89775758b6e5d4591ff62ba8df959047c10f226366b67`

```text
src/lib/visibleMosaicTiles.js (430 bytes)
src/lib/mosaicLayout.js (10,888 bytes)
src/hooks/useViewport.js (902 bytes)
src/styles/global.css (20,956 bytes)
src/components/ArchiveMosaic.jsx (5,815 bytes)
tests/visibleMosaicTiles.test.js (985 bytes)
tests/mosaicLayout.test.js (6,824 bytes)
```

### portfolio-readme-replacement.zip

**Files:** 1; **SHA-256:** `f95b678509474fcac3df68d6a81768eac13f06b8e62a0c65478daa67a4bcd903`

```text
README.md (12,385 bytes)
```

### portfolio-responsive-replacements.zip

**Files:** 5; **SHA-256:** `7d3a9a80d32ee2766b54681e16216194de1d979b866cda09c32ed684314691ba`

```text
src/App.jsx (5,428 bytes)
src/components/ArchiveMosaic.jsx (2,749 bytes)
src/lib/mosaicLayout.js (5,994 bytes)
src/styles/global.css (20,252 bytes)
tests/mosaicLayout.test.js (5,057 bytes)
```

### portfolio-scroll-easing-replacements.zip

**Files:** 5; **SHA-256:** `30c1ae93157202e8bb864659cd2063e68d986c821ee94c5934246c6f9ac14455`

```text
README.txt (943 bytes)
tests/autoScroll.test.js (4,737 bytes)
tests/mobileScroll.test.js (2,245 bytes)
src/components/ArchiveMosaic.jsx (7,388 bytes)
src/lib/autoScroll.js (5,086 bytes)
```

### portfolio-unique-patterns-replacements.zip

**Files:** 4; **SHA-256:** `b21a0eaa028e7b02fdf7770766ac599ee4b36bc38057978ed020b46f06bb2609`

```text
src/lib/ambientPattern.js (4,317 bytes)
src/styles/global.css (20,618 bytes)
src/components/ArchiveMosaic.jsx (2,878 bytes)
tests/ambientPattern.test.js (849 bytes)
```

## Textual source contents from delivered replacement archives

The source snapshots below are the **actual text stored inside the replacement ZIPs**, not reconstructed code. They are preserved to show changes over time. Repeated files are intentionally included because each ZIP is a different revision. Binary images, node_modules, and other non-text assets are listed in the manifests but are not embedded in Markdown. Full project ZIPs remain linked above.

### `archive-fullbleed-fix.zip` → `src/lib/mosaicLayout.js`

````javascript
/** Each 5×5 module is covered by squares, without gaps or overlaps. */
export const SQUARE_PATTERN = Object.freeze([
  { x: 0, y: 0, size: 3 },
  { x: 3, y: 0, size: 2 },
  { x: 3, y: 2, size: 2 },
  { x: 0, y: 3, size: 2 },
  { x: 2, y: 3, size: 1 },
  { x: 2, y: 4, size: 1 },
  { x: 3, y: 4, size: 1 },
  { x: 4, y: 4, size: 1 },
]);

export const CELLS_PER_SIDE = 5;
export const SLOTS_PER_MODULE = SQUARE_PATTERN.length;

export function createMosaicSlots(entryCount, minimumModules = 1) {
  const leftCount = Math.ceil(entryCount / 2);
  const rightCount = Math.floor(entryCount / 2);
  const modules = Math.max(minimumModules, Math.ceil(Math.max(leftCount, rightCount) / SLOTS_PER_MODULE));
  return Array.from({ length: modules }, (_, moduleIndex) => [
    ...SQUARE_PATTERN.map((square, index) => ({
      ...square, id: `L-${moduleIndex}-${index}`, side: 'left', moduleIndex,
      indexOnSide: moduleIndex * SLOTS_PER_MODULE + index,
    })),
    ...SQUARE_PATTERN.map((square, index) => ({
      ...square, id: `R-${moduleIndex}-${index}`, side: 'right', moduleIndex,
      indexOnSide: moduleIndex * SLOTS_PER_MODULE + index,
    })),
  ]).flat();
}

function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }

/** Whole 5×5 modules fill the width exactly in Archive Mode. */
function archiveGeometry(width) {
  const columns = Math.max(2, Math.round(width / 550));
  return { columns, unit: width / (columns * CELLS_PER_SIDE) };
}

export function computeMetrics({ width, height, archive = false }) {
  // Short landscape viewports also use the two-column treatment.
  const compact = width <= 900 || (width <= 1200 && height <= 640);
  const sideInset = Math.max(17, Math.min(64, width * 0.065));
  const panelWidth = compact
    ? Math.min(620, width - 2 * sideInset)
    : Math.min(600, Math.max(468, width * 0.43));
  const gridColumns = compact ? (width < 480 ? 2 : width < 720 ? 3 : 4) : 10;
  const gridInset = 0; // Archive tiles begin at the viewport boundaries.
  const unit = compact
    ? archive
      ? (width - 2 * gridInset) / gridColumns
      : Math.max(104, Math.min(170, width * 0.27))
    : archive
      ? archiveGeometry(width).unit
      : Math.min(112, Math.max(66, (width - panelWidth) / 7.8));
  return {
    width, height, panelWidth, unit, compact, mobile: compact,
    gridColumns, gridInset,
    archiveModuleColumns: compact ? null : archiveGeometry(width).columns,
  };
}

function layoutCompact(entries, metrics, archive) {
  const { width, height, panelWidth, unit, gridColumns, gridInset } = metrics;
  const leftEdge = (width - panelWidth) / 2;
  const rightEdge = (width + panelWidth) / 2;
  // Fill both streams beyond the viewport so their gentle vertical movement
  // never reveals an empty region. Decorative slots are never clickable.
  const streamUnit = Math.max(104, Math.min(170, width * 0.27));
  const minimumPerSide = Math.ceil(height / streamUnit) + 4;
  const minimumArchiveSlots = gridColumns * Math.ceil(height / ((width - 2 * gridInset) / gridColumns));
  const slotsPerSide = Math.max(Math.ceil(entries.length / 2), minimumPerSide, Math.ceil(minimumArchiveSlots / 2));
  const slots = Array.from({ length: slotsPerSide * 2 }, (_, index) => {
    const side = index % 2 === 0 ? 'left' : 'right';
    const row = Math.floor(index / 2);
    const entry = entries[index] ?? null;
    return { id: entry ? `entry-${entry.id}` : `ambient-${side}-${row}`, side, row, entry };
  });
  const archiveUnit = (width - 2 * gridInset) / gridColumns;
  const gridLeft = gridInset;
  const gridTop = 0;

  const tiles = slots.map((slot) => {
    const { side, row, entry } = slot;
    const order = slots.indexOf(slot);
    const decorative = !entry;
    const pixels = archive ? archiveUnit : streamUnit;
    const x = archive
      ? gridLeft + (order % gridColumns) * archiveUnit
      : side === 'left' ? leftEdge - streamUnit : rightEdge;
    const y = archive
      ? gridTop + Math.floor(order / gridColumns) * archiveUnit
      : (row - 2) * streamUnit;
    return {
      id: slot.id, side, entry, decorative, compact: true,
      size: 1, x, y, pixels,
      hidden: false,
    };
  });
  const archiveRows = Math.ceil(slots.length / gridColumns);
  const contentHeight = archive
    ? Math.max(height + 1, gridTop + archiveRows * archiveUnit)
    : Math.max(height + 1, (slotsPerSide + 1) * streamUnit);
  return { tiles, metrics, contentHeight, moduleCount: archiveRows };
}

/** Positions the same achievement nodes in both modes. */
export function layoutMosaic(entries, viewport, archive = false) {
  const metrics = computeMetrics({ ...viewport, archive });
  if (metrics.compact) return layoutCompact(entries, metrics, archive);

  const { width, height, panelWidth, unit } = metrics;
  const leftBoundary = (width - panelWidth) / 2;
  const rightBoundary = (width + panelWidth) / 2;
  const portfolioUnit = Math.min(112, Math.max(66, (width - panelWidth) / 7.8));
  const { columns: archiveColumns, unit: archiveUnit } = archiveGeometry(width);

  // Enough modules for both layouts. A complete final archive row is
  // essential: otherwise the lowest visible band could have a blank region.
  const portfolioRows = Math.ceil(height / (5 * portfolioUnit));
  const archiveRows = Math.ceil(height / (5 * archiveUnit));
  const entryModules = Math.ceil(entries.length / SLOTS_PER_MODULE);
  const neededModules = Math.max(portfolioRows * 2, archiveRows * archiveColumns, entryModules);
  const moduleMultiple = (2 * archiveColumns) / gcd(2, archiveColumns);
  const totalModules = Math.ceil(neededModules / moduleMultiple) * moduleMultiple;
  const slots = createMosaicSlots(entries.length, totalModules / 2);
  const tiles = slots.map(slot => {
    const entryIndex = slot.indexOnSide * 2 + (slot.side === 'right' ? 1 : 0);
    const entry = entries[entryIndex] ?? null;
    const moduleIndex = slot.moduleIndex * 2 + (slot.side === 'right' ? 1 : 0);
    const x = archive
      ? (moduleIndex % archiveColumns * 5 + slot.x) * archiveUnit
      : (slot.side === 'left' ? leftBoundary - 5 * unit : rightBoundary) + slot.x * unit;
    const y = archive
      ? (Math.floor(moduleIndex / archiveColumns) * 5 + slot.y) * archiveUnit
      : (slot.moduleIndex * 5 + slot.y) * unit;
    return {
      ...slot, entry, x, y, pixels: slot.size * unit,
      decorative: !entry, compact: false, hidden: false,
    };
  });
  const moduleCount = totalModules / 2;
  const contentHeight = archive
    ? (totalModules / archiveColumns) * 5 * archiveUnit
    : moduleCount * 5 * unit;
  return { tiles, metrics, contentHeight: Math.max(height + 1, contentHeight), moduleCount };
}

````

### `archive-fullbleed-fix.zip` → `tests/mosaicLayout.test.js`

````javascript
import test from 'node:test';
import assert from 'node:assert/strict';
import { SQUARE_PATTERN, createMosaicSlots, computeMetrics, layoutMosaic } from '../src/lib/mosaicLayout.js';

const makeEntries = n => Array.from({ length: n }, (_, i) => ({ id: `achievement-${i}` }));
const close = (a,b) => Math.abs(a-b) < 1e-6;

test('desktop module consists only of square tiles, without overlaps or holes', () => {
  const occupied = new Set();
  for (const { x, y, size } of SQUARE_PATTERN) {
    assert.ok(size > 0);
    for (let row = y; row < y + size; row++) for (let col = x; col < x + size; col++) {
      assert.ok(col < 5 && row < 5);
      const key = `${col}:${row}`;
      assert.ok(!occupied.has(key), `overlap at ${key}`);
      occupied.add(key);
    }
  }
  assert.equal(occupied.size, 25);
});

test('desktop wings touch the portfolio edges; archive fills the full width', () => {
  const viewport = { width: 1440, height: 900 };
  const normal = layoutMosaic(makeEntries(18), viewport, false);
  const open = layoutMosaic(makeEntries(18), viewport, true);
  const left = (viewport.width - normal.metrics.panelWidth) / 2;
  const right = (viewport.width + normal.metrics.panelWidth) / 2;
  assert.ok(normal.tiles.every(t => t.side === 'left' ? t.x + t.pixels <= left + 1e-6 : t.x >= right - 1e-6));
  assert.ok(normal.tiles.some(t => t.side === 'left' && close(t.x + t.pixels, left)));
  assert.ok(normal.tiles.some(t => t.side === 'right' && close(t.x, right)));
  assert.ok(open.tiles.some(t => close(t.x, 0)));
  assert.ok(open.tiles.some(t => close(t.x + t.pixels, viewport.width)));
  assert.deepEqual(normal.tiles.map(t => t.id), open.tiles.map(t => t.id), 'same tile nodes across modes');
});

test('the desktop wings extend far enough to cover the entire viewport height', () => {
  for (const viewport of [{width: 1024,height: 900}, {width:1300,height:900}, {width:1920,height:1080}]) {
    for (const archive of [false,true]) {
      const layout = layoutMosaic(makeEntries(10), viewport, archive);
      const height = layout.moduleCount * 5 * layout.metrics.unit;
      assert.ok(height >= viewport.height, `insufficient depth at ${viewport.width} × ${viewport.height}`);
    }
  }
});

test('desktop expands capacity when achievements are added', () => {
  assert.equal(createMosaicSlots(16).length, 16);
  assert.equal(createMosaicSlots(17).length, 32);
  assert.equal(createMosaicSlots(33).length, 48);
  assert.ok(layoutMosaic(makeEntries(34), { width: 1440, height: 900 }, true).moduleCount >= 3);
});

test('compact mode includes mobile, tablet, narrow and short landscape windows', () => {
  for (const viewport of [{width:280,height:620},{width:390,height:844},{width:600,height:800},{width:800,height:1000},{width:1100,height:580}]) {
    const metrics = computeMetrics({...viewport, archive:false});
    assert.equal(metrics.compact,true);
    assert.ok(metrics.panelWidth < viewport.width);
    assert.ok(metrics.panelWidth >= 240);
  }
  assert.equal(computeMetrics({ width:1440,height:900 }).compact,false);
});

test('compact portfolio displays precisely two square streams flush with the paper', () => {
  for (const viewport of [{width:280,height:620},{width:390,height:844},{width:600,height:800},{width:800,height:1000}]) {
    const layout = layoutMosaic(makeEntries(10), viewport, false);
    const left = (viewport.width - layout.metrics.panelWidth) / 2;
    const right = (viewport.width + layout.metrics.panelWidth) / 2;
    assert.ok(layout.tiles.every(t => t.size === 1 && t.pixels > 0));
    assert.ok(layout.tiles.every(t => t.side === 'left'
      ? close(t.x + t.pixels, left)
      : close(t.x, right)));
    for (const side of ['left','right']) {
      const heights = layout.tiles.filter(t => t.side === side).map(t => t.y).sort((a,b)=>a-b);
      assert.ok(heights[0] <= -layout.metrics.unit);
      assert.ok(heights.at(-1) + layout.metrics.unit >= viewport.height);
    }
  }
});

test('on narrow screens the very same achievements collapse into a responsive grid', () => {
  for (const viewport of [{width:280,height:620},{width:390,height:844},{width:600,height:800},{width:800,height:1000}]) {
    const entries = makeEntries(19);
    const closed = layoutMosaic(entries, viewport, false);
    const opened = layoutMosaic(entries, viewport, true);
    const from = closed.tiles.filter(t => t.entry).map(t => t.id).sort();
    const to = opened.tiles.filter(t => t.entry).map(t => t.id).sort();
    assert.deepEqual(from, to);
    const positions = new Set();
    for (const tile of opened.tiles.filter(t => t.entry)) {
      assert.ok(tile.x >= -1e-6 && tile.x+tile.pixels <= viewport.width+1e-6);
      assert.ok(tile.y >= 0);
      const key = `${tile.x.toFixed(5)}:${tile.y.toFixed(5)}`;
      assert.ok(!positions.has(key), `overlapping tile at ${key}`);
      positions.add(key);
    }
    assert.ok(opened.contentHeight >= viewport.height);
    assert.ok(opened.tiles.filter(t=>t.decorative).every(t=>!t.hidden));
  }
});


test('archive covers every viewport cell with squares, no side or bottom gaps', () => {
  for (const viewport of [
    {width: 390,height: 844}, {width: 768,height: 1024},
    {width: 1100,height: 580}, {width: 1280,height: 800},
    {width: 1722,height: 854}, {width: 1920,height: 1080},
  ]) {
    for (const count of [4, 18, 34, 67]) {
      const { tiles } = layoutMosaic(makeEntries(count), viewport, true);
      const ySteps = 16, xSteps = 18;
      for (let r = 0; r < ySteps; r++) for (let c = 0; c < xSteps; c++) {
        const x = (c + 0.5) * viewport.width / xSteps;
        const y = (r + 0.5) * viewport.height / ySteps;
        const covering = tiles.filter(t => x >= t.x - 1e-7 && x < t.x + t.pixels - 1e-7 && y >= t.y - 1e-7 && y < t.y + t.pixels - 1e-7);
        assert.equal(covering.length, 1, `${viewport.width}×${viewport.height} count=${count}, at (${x},${y})`);
      }
      for (const tile of tiles) assert.ok(close(tile.pixels, tile.pixels));
    }
  }
});

````

### `portfolio-arabic-translation-fix.zip` → `TRANSLATIONS.md`

````md
# English / Arabic content translations

This patch adds translations for **achievement body text**, **image captions / metadata**, and **external link labels**, plus several previously hardcoded interface headings.

## Installation

Copy the `src/` files in this patch into your existing project, keeping the same directory structure. **Do not replace `src/data/achievements.js`** — doing so could erase achievements you added after the original project was created.

## Existing content

`src/content/achievementTranslations.js` provides curated Arabic translations of the ten entries in the original prototype (including its four sample entries), as well as the demo-generated entries. Existing titles and summaries that already use `titleAr` and `summaryAr` continue working.

## Your own newer achievements

I don't have the current body text for achievements you've added on your machine. Each new achievement needs an actual translation supplied by you, either beside the entry itself in `src/data/achievements.js`:

```js
{
  id: 'my-new-project',
  title: 'My New Project',
  titleAr: 'مشروعي الجديد',
  category: 'Engineering',
  categoryAr: 'هندسة',
  summary: 'English summary',
  summaryAr: 'ملخص بالعربية',
  body: 'Full explanation in English',
  bodyAr: 'الشرح الكامل بالعربية',
  image: '/art/photo.jpg',
  // This text appears under the picture (falls back to `meta` if absent)
  caption: '2026 · Engineering · Prototype',
  captionAr: '٢٠٢٦ · هندسة · نموذج أولي',
  links: [{
    label: 'View project', labelAr: 'عرض المشروع',
    href: 'https://example.com',
  }],
}
```

Or, without editing achievement objects, add a record keyed by the achievement's exact `id` to `achievementTranslationsAr` in `src/content/achievementTranslations.js`:

```js
'my-new-project': {
  body: 'الشرح الكامل بالعربية',
  meta: '٢٠٢٦ · هندسة · نموذج أولي',
  links: ['عرض المشروع'],
},
```

The `caption` field, if present, takes display priority over `meta`; you can provide a `captionAr` for it. If you do not use `caption`, the UI translates `meta` with `metaAr` or the translation dictionary.

The lookup order in Arabic is:
1. `fieldAr` / `links[].labelAr` on the entry (your explicit choice).
2. `translations.ar.field` / `links[].translations.ar.label` on the entry.
3. The corresponding entry in `achievementTranslationsAr`.
4. Original English text if nothing has been translated yet.

Only labels and text change. IDs, image paths, and link destinations stay unchanged. Newly added achievements with no Arabic text will safely fall back to English rather than pretending to have been translated.

## Verify

```bash
npm test
```

No additional dependencies are needed.

````

### `portfolio-arabic-translation-fix.zip` → `src/components/ArchiveMosaic.jsx`

````jsx
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { layoutMosaic } from '../lib/mosaicLayout.js';
import { visibleMosaicTiles } from '../lib/visibleMosaicTiles.js';
import { advanceAutoScroll, initialAutoScrollState, pauseAutoScroll, resumeAutoScroll, SCROLL_RESUME_DELAY_MS } from '../lib/autoScroll.js';
import Icon from './Icons.jsx';
import { createAmbientBackground } from '../lib/ambientPattern.js';
import { entryText } from '../content/achievementTranslations.js';

// The artwork generator is costly when hundreds of SVG backgrounds are encoded.
// Generate once per tile identity, only when the tile enters the viewport.
const artworkCache = new Map();
function artworkFor(id) {
  if (!artworkCache.has(id)) {
    if (artworkCache.size > 900) artworkCache.delete(artworkCache.keys().next().value);
    artworkCache.set(id, createAmbientBackground(id));
  }
  return artworkCache.get(id);
}

const ArchiveTile = memo(function ArchiveTile({ tile, onOpen, lang }) {
  const { entry, pixels, x, y, decorative } = tile;
  const style = {
    '--tile-x': `${x}px`, '--tile-y': `${y}px`, '--tile-size': `${pixels}px`,
    '--tile-image': entry ? `url("${entry.image}")` : undefined,
    ...(decorative ? { '--ambient-art': artworkFor(tile.id) } : {}),
  };
  if (decorative) {
    return <div className="mosaic-tile mosaic-tile--ambient" style={style} aria-hidden="true" />;
  }
  const title = entryText(entry, 'title', lang);
  const category = entryText(entry, 'category', lang);
  return (
    <button type="button"
      className={`mosaic-tile mosaic-tile--entry ${entry.sample ? 'mosaic-tile--sample' : ''} ${tile.compact ? 'mosaic-tile--responsive' : tile.size === 1 ? 'mosaic-tile--tiny' : ''}`}
      style={style} onClick={event => onOpen(entry, event.currentTarget)}
      data-side={tile.side} data-entry-id={entry.id} title={title}
      aria-label={`${title}${entry.sample ? ' — sample' : ''}`}>
      <span className="tile-visual" aria-hidden="true" />
      <span className="tile-content">
        <span className="tile-category">{entry.sample ? '◇ ' : '✦ '}{category}</span>
        <span className="tile-title">{title}</span>
        <span className="tile-corner"><Icon name="upRight" size={14}/></span>
      </span>
    </button>
  );
});

export default function ArchiveMosaic({ entries, viewport, archive, lang, onOpen, layoutSeed = 1 }) {
  const scrollRef = useRef(null);
  const pauseUntil = useRef(0);
  const lastTime = useRef(0);
  const scrollState = useRef(initialAutoScrollState());
  const lastWrittenPosition = useRef(0);
  const [viewTop, setViewTop] = useState(0);
  const layout = useMemo(() => layoutMosaic(entries, viewport, archive, layoutSeed), [entries, viewport.width, viewport.height, archive, layoutSeed]);
  const viewportHeight = viewport.height;

  const syncWindow = useCallback((force = false) => {
    const top = scrollRef.current?.scrollTop ?? 0;
    // Recalculate the visible set only after crossing a 120px bucket.
    const bucket = Math.floor(top / 120) * 120;
    setViewTop(previous => force || previous !== bucket ? bucket : previous);
  }, []);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;
    element.scrollTop = 0;
    syncWindow(true);
    lastTime.current = 0;
    scrollState.current = pauseAutoScroll(initialAutoScrollState(), 0, true);
    lastWrittenPosition.current = 0;
    pauseUntil.current = performance.now() + SCROLL_RESUME_DELAY_MS;
  }, [archive, layout.metrics.compact, syncWindow]);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    // Hover/focus ease the current velocity down. Direct scrolling/touch
    // takes control immediately, so our animation never fights the gesture.
    const pause = event => {
      pauseUntil.current = performance.now() + SCROLL_RESUME_DELAY_MS;
      const manual = ['wheel', 'touchstart', 'pointerdown'].includes(event?.type);
      scrollState.current = pauseAutoScroll(scrollState.current, element.scrollTop, manual);
      if (manual) lastWrittenPosition.current = element.scrollTop;
    };
    const scroll = () => {
      // iOS can continue a touch gesture via momentum scroll after touchend.
      // Re-sync that position without replacing auto-generated subpixel offsets.
      if (performance.now() < pauseUntil.current &&
          Math.abs(element.scrollTop - lastWrittenPosition.current) > 1) {
        scrollState.current = pauseAutoScroll(scrollState.current, element.scrollTop, true);
        lastWrittenPosition.current = element.scrollTop;
      }
      syncWindow();
    };
    const hoverEntry = event => {
      if (event.target.closest?.('.mosaic-tile--entry')) pause(event);
    };
    element.addEventListener('wheel', pause, { passive: true });
    element.addEventListener('touchstart', pause, { passive: true });
    element.addEventListener('pointerdown', pause, { passive: true });
    element.addEventListener('pointerover', hoverEntry, { passive: true });
    element.addEventListener('focusin', pause);
    element.addEventListener('scroll', scroll, { passive: true });
    // Animate only the scroll position. React updates the visible-tile set
    // in 120px buckets, not on every requestAnimationFrame callback.
    let frame = 0;
    const tick = time => {
      const delta = lastTime.current ? Math.min(time - lastTime.current, 100) : 0;
      lastTime.current = time;
      if (!document.hidden && !reduce.matches) {
        const max = element.scrollHeight - element.clientHeight;
        if (max > 40) {
          if (time >= pauseUntil.current && scrollState.current.phase === 'paused') {
            scrollState.current = resumeAutoScroll(scrollState.current);
          }
          const next = advanceAutoScroll(scrollState.current, delta, max);
          scrollState.current = next;
          if (Math.abs(element.scrollTop - next.position) >= 0.5) {
            // Keep fractional progress in state rather than rereading rounded
            // scrollTop values (important for mobile Safari).
            lastWrittenPosition.current = next.position;
            element.scrollTop = next.position;
          }
        }
      }
      frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(frame);
      element.removeEventListener('wheel', pause);
      element.removeEventListener('touchstart', pause);
      element.removeEventListener('pointerdown', pause);
      element.removeEventListener('pointerover', hoverEntry);
      element.removeEventListener('focusin', pause);
      element.removeEventListener('scroll', scroll);
    };
  }, [syncWindow]);

  const visible = useMemo(() => visibleMosaicTiles(layout.tiles, viewTop, viewportHeight), [layout.tiles, viewTop, viewportHeight]);
  return (
    <div ref={scrollRef}
      className={`mosaic-scroll ${archive ? 'mosaic-scroll--archive' : ''} ${layout.metrics.compact ? 'mosaic-scroll--compact' : ''}`}
      aria-label={lang === 'ar' ? 'مجموعة الأرشيف التفاعلية' : 'Interactive archive collage'} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="mosaic-plane" style={{ height: `${layout.contentHeight}px` }}>
        {visible.map(tile => <ArchiveTile key={tile.id} tile={tile} onOpen={onOpen} lang={lang} />)}
      </div>
    </div>
  );
}

````

### `portfolio-arabic-translation-fix.zip` → `src/components/PortfolioPanel.jsx`

````jsx
import React, { useEffect, useRef } from 'react';
import Icon from './Icons.jsx';
import { entryText, entryLinks } from '../content/achievementTranslations.js';

function InternalLink({ children, href, onNavigate, className = 'text-link', item = null }) {
  return <button type="button" className={className} onClick={(e) => onNavigate(href, e.currentTarget, item)}>{children}</button>;
}

function ExternalResourceLink({ href, children }) {
  return (
    <a className="resource-link" href={href} target="_blank" rel="noopener noreferrer">
      <span>{children}</span>
      <span className="resource-link-icon"><Icon name="upRight" size={18}/></span>
    </a>
  );
}

function PanelHeader({ t, onNavigate, pathname }) {
  return (
    <div className="panel-heading">
      <InternalLink className="panel-monogram" href="/" onNavigate={onNavigate}>
        M<span>.</span>
      </InternalLink>
      <span className="panel-label">{t.panelLabel} <span className="tiny-asterisk">✳</span> 2026</span>
      <span className="panel-index">{pathname === '/' ? '01' : pathname === '/projects' ? '02' : pathname === '/writing' ? '03' : pathname === '/contact' ? '04' : '✦'}</span>
    </div>
  );
}

function HomeView({ t, onNavigate, entries, lang }) {
  return <>
    <section className="intro-section">
      <span className="micro-label">{t.introKicker}</span>
      <div className="hero-intro">
        <div className="hero-copy">
          <span className="hero-greeting">{t.greeting}</span>
          <h1>Marwan<br/><em>Al-Hamdan.</em></h1>
          <div className="hero-rule" />
          <p className="hero-role">{t.occupation}</p>
          <p className="hero-description">{t.lead}</p>
        </div>
        <div className="portrait-frame">
          <img src="/portrait.png" alt={t.portraitAlt} />
          <span className="portrait-credit">{t.portraitCaption}</span>
        </div>
      </div>
      <div className="hero-actions">
        <InternalLink className="pill-link pill-link--dark" href="/projects" onNavigate={onNavigate}>{t.seeWork} <Icon name="upRight" size={15}/></InternalLink>
        <InternalLink className="pill-link pill-link--outline" href="/writing" onNavigate={onNavigate}>{t.writing} <Icon name="arrow" size={15}/></InternalLink>
        <InternalLink className="pill-link pill-link--outline" href="/contact" onNavigate={onNavigate}>{t.contact} <Icon name="upRight" size={15}/></InternalLink>
      </div>
    </section>
    <section className="editorial-block">
      <div className="section-heading"><span className="number-label">01 / {t.curiosityKicker.toUpperCase()}</span><span className="section-star">✳</span></div>
      <h2>{t.curiosityHeading}<br/><em>{t.curiosityEmphasis}</em></h2>
      <p>{t.curiosityBody}</p>
      <div className="ink-divider" />
      <span className="number-label">02 / {t.myWork.toUpperCase()}</span>
      <div className="feature-links">
        {entries.slice(0, 3).map((item, i) => (
          <InternalLink key={item.id} href={`/archive/${item.id}`} onNavigate={onNavigate} item={item} className="feature-link">
            <span className="feature-number">0{i + 1}</span><span>{entryText(item, 'title', lang)}</span><Icon name="upRight" size={16}/>
          </InternalLink>
        ))}
      </div>
    </section>
    <section className="editorial-block editorial-block--bottom">
      <div className="section-heading"><span className="number-label">03 / {t.readingNext.toUpperCase()}</span></div>
      <h2>{t.libraryHeading}<br/><em>{t.libraryEmphasis}</em></h2>
      <p>{t.readingBody}</p>
      <InternalLink className="resource-link" href="/writing" onNavigate={onNavigate}>
        <span>{t.writing}</span><span className="resource-link-icon"><Icon name="arrow" size={18}/></span>
      </InternalLink>
    </section>
  </>;
}

function ProjectsView({ t, onNavigate, entries, lang }) {
  const items = entries.filter((e) => !e.sample && ['portfolio-website', 'ecommerce', 'mobile-ui', 'dashboard'].includes(e.id));
  return <section className="inner-view">
    <span className="micro-label">02 / {t.projects.toUpperCase()}</span>
    <h1 className="view-title">{t.projectsHeading} <em>{t.projectsEmphasis}</em></h1>
    <p className="view-lede">{t.workLead}</p>
    <div className="project-list">
      {items.map((item, index) => <InternalLink key={item.id} href={`/archive/${item.id}`} onNavigate={onNavigate} item={item} className="project-row">
        <span className="project-row-number">0{index + 1}</span>
        <img src={item.image} alt="" />
        <span className="project-row-description"><strong>{entryText(item, 'title', lang)}</strong><small>{entryText(item, 'meta', lang)}</small></span>
        <Icon name="upRight" size={18}/>
      </InternalLink>)}
    </div>
    <div className="source-disclosure">{t.sourceBadge} · {t.artworkDisclosure}</div>
  </section>;
}

function WritingView({ t, onNavigate, entries, lang }) {
  return <section className="inner-view">
    <span className="micro-label">03 / {t.writing.toUpperCase()}</span>
    <h1 className="view-title">{t.writingHeading}<br/><em>{t.writingEmphasis}</em></h1>
    <p className="view-lede">{t.writingLead}</p>
    <img className="editorial-illustration" src="/art/reading.svg" alt={t.readingImageAlt} />
    <h2 className="subheading">{t.readingTitle}</h2>
    <p className="body-copy">{t.readingBody}</p>
    <div className="writing-resource-list">
      <InternalLink className="resource-link" href="/archive/writing" onNavigate={onNavigate} item={entries.find(e => e.id === 'writing')}>
        <span>{entryText(entries.find(e => e.id === 'writing'), 'title', lang) || t.writing}</span><span className="resource-link-icon"><Icon name="arrow" size={18}/></span>
      </InternalLink>
      <ExternalResourceLink href="https://marwanpgx.substack.com/">Substack</ExternalResourceLink>
    </div>
  </section>;
}

function ContactView({ t }) {
  return <section className="inner-view contact-view">
    <span className="micro-label">04 / {t.contact.toUpperCase()}</span>
    <h1 className="view-title">{t.contactHeading}<br/><em>{t.contactEmphasis}</em></h1>
    <p className="view-lede">{t.reachLead}</p>
    <div className="contact-options">
      <ExternalResourceLink href="https://www.linkedin.com/in/marwan-al-hamdan-a64043331/">LinkedIn</ExternalResourceLink>
      <ExternalResourceLink href="https://marwanpgx.substack.com/">Substack</ExternalResourceLink>
    </div>
    <p className="fine-print">{t.note}</p>
  </section>;
}

function EntryView({ entry, t, lang, onNavigate }) {
  if (!entry) return <section className="inner-view"><h1 className="view-title">{t.notFound}</h1><InternalLink href="/" onNavigate={onNavigate} className="inline-arrow"><Icon name="back" size={18}/> {t.back}</InternalLink></section>;
  const title = entryText(entry, 'title', lang);
  const summary = entryText(entry, 'summary', lang);
  return <article className="entry-view inner-view">
    <span className="micro-label">{t.archiveKicker} / {entryText(entry, 'category', lang).toUpperCase()}</span>
    {entry.sample && <div className="sample-alert">{t.sampleBadge}</div>}
    <h1 className="view-title">{title}</h1>
    <p className="view-lede">{summary}</p>
    <figure className="entry-figure">
      <img src={entry.image} className="entry-hero-image" alt={`${t.entryImageAlt}: ${title}`} />
      <figcaption className="entry-caption number-label">{entryText(entry, entry.caption != null ? 'caption' : 'meta', lang)}</figcaption>
    </figure>
    <p className="body-copy">{entryText(entry, 'body', lang)}</p>
    {entry.links?.length > 0 && <div className="entry-links">{entryLinks(entry, lang).map((link, index) => <ExternalResourceLink key={`${link.href}-${index}`} href={link.href}>{link.label}</ExternalResourceLink>)}</div>}
    <InternalLink href="/" onNavigate={onNavigate} className="pill-link pill-link--outline"><Icon name="back" size={16}/> {t.back}</InternalLink>
  </article>;
}

export default function PortfolioPanel({ pathname, archive, entries, t, lang, onNavigate }) {
  const scrollRef = useRef(null);
  useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = 0; }, [pathname]);
  const entry = pathname.startsWith('/archive/') ? entries.find(e => e.id === decodeURIComponent(pathname.slice('/archive/'.length))) : null;
  return (
    <main className={`portfolio-panel ${archive ? 'portfolio-panel--hidden' : ''}`} aria-hidden={archive} inert={archive} ref={scrollRef} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <PanelHeader t={t} onNavigate={onNavigate} pathname={pathname}/>
      {pathname === '/' ? <HomeView t={t} onNavigate={onNavigate} entries={entries} lang={lang}/>
        : pathname === '/projects' ? <ProjectsView t={t} onNavigate={onNavigate} entries={entries} lang={lang}/>
          : pathname === '/writing' ? <WritingView t={t} onNavigate={onNavigate} entries={entries} lang={lang}/>
            : pathname === '/contact' ? <ContactView t={t}/>
              : <EntryView entry={entry} t={t} lang={lang} onNavigate={onNavigate}/>}
      <footer className="panel-footer">
        <span>© 2026 MARWAN AL-HAMDAN</span><span>{t.footer}</span>
      </footer>
    </main>
  );
}

````

### `portfolio-arabic-translation-fix.zip` → `src/content/achievementTranslations.js`

````javascript
/**
 * Translations for existing archive content, kept outside achievements.js so
 * personal entries, images, and project links aren't overwritten by updates.
 *
 * Add an entry using its exact, stable achievement ID:
 *   'my-entry-id': {
 *     body: 'النص الكامل باللغة العربية',
 *     meta: '٢٠٢٦ · تطوير',
 *     links: ['زيارة المشروع'],
 *   },
 *
 * Alternatively, set bodyAr/metaAr/links[].labelAr (or translations.ar.*)
 * directly in src/data/achievements.js. Explicit per-entry fields take priority.
 */
export const achievementTranslationsAr = {
  'portfolio-website': {
    body: 'يعرض مشروع الموقع الشخصي الأصلي نبذة تعريفية، والمهارات التقنية، والمشاريع، وقسمًا تفاعليًا للقراءة. وهذا الأرشيف المبني باستخدام React هو إعادة تصميم لذلك الموقع.',
    meta: 'التقنيات: HTML · CSS · JavaScript',
  },
  ecommerce: {
    body: 'ورد هذا المشروع في الموقع الشخصي الأصلي بوصفه تصورًا لمتجر إلكتروني. لم يُقدَّم رابط للمشروع أو لقطة شاشة منه، ولذلك فإن الصورة المعروضة توضيحية.',
    meta: 'التقنيات: HTML · CSS · JavaScript',
  },
  'mobile-ui': {
    body: 'وُصفت هذه الواجهة في الموقع الأصلي بأنها تصميم حديث لتطبيق جوال. العمل الفني المعروض هنا رسم تجريدي محلي، وليس لقطة شاشة من تطبيق فعلي.',
    meta: 'واجهات المستخدم وتجربته · CSS · تصميم',
  },
  dashboard: {
    body: 'هذا المشروع مدرج في قائمة المشاريع الأصلية. الرسم المعروض نموذج بصري مؤقت إلى أن تتوفر لقطات شاشة حقيقية للوحة البيانات.',
    meta: 'JavaScript · شبكة CSS',
  },
  writing: {
    body: 'يتضمن موقعي الشخصي الأصلي رابطًا إلى حسابي في سبستاك، حيث أنشر كتاباتي. وتؤدي هذه الصفحة إلى ذلك الحساب العام.',
    meta: 'كتابة · شعر',
    links: ['زيارة سبستاك'],
  },
  reading: {
    body: 'تذكر صفحة التعريف الأصلية رواية «المعلم ومارغريتا»، وأرسطو، وويليام بليك، وروبرت فروست، وجون ميلتون، وجورج أورويل، وفرانسيس بيكون، وصمويل جونسون، وسوفوكليس، وروبرت براوننغ، وويليام شكسبير. وهذا اهتمام موثّق، وليس ادعاءً بالحصول على جائزة.',
    meta: 'أدب · فلسفة',
  },
  'sample-research': {
    body: 'هذا محتوى تجريبي لعرض التصميم، وليس إنجازًا أو مشروعًا مكتملًا. استبدله بمادة حقيقية عندما تصبح جاهزة.',
    meta: 'نموذج توضيحي · بحث',
  },
  'sample-talk': {
    body: 'هذه بطاقة نموذجية فقط. أضف عنوانًا حقيقيًا وصورة وتاريخًا، ويمكنك كذلك إضافة رابط لفيديو المحاضرة أو شرائح العرض.',
    meta: 'نموذج توضيحي · إلقاء',
  },
  'sample-library': {
    body: 'هذا مثال فقط. استبدله بصورة حقيقية وقائمة قراءات مع تعليقاتك أو قصة متعلقة بالقراءة.',
    meta: 'نموذج توضيحي · مجموعة',
  },
  'sample-experiment': {
    body: 'هذا مثال فقط يوضح كيف يمكن إضافة عناصر صغيرة إلى الفسيفساء من دون الحاجة إلى تبليط رياضي مثالي.',
    meta: 'نموذج توضيحي · نموذج أولي',
  },
};

const categoryTranslationsAr = {
  Development: 'تطوير', Design: 'تصميم', Writing: 'كتابة', Interests: 'اهتمامات',
  Sample: 'مثال', Research: 'بحث', Projects: 'مشاريع', Project: 'مشروع',
  Electronics: 'إلكترونيات', Engineering: 'هندسة', Engagement: 'مشاركة',
  Speaking: 'إلقاء', Education: 'تعليم', Literature: 'أدب', Technology: 'تقنية',
  Photography: 'تصوير', Volunteering: 'تطوع', Awards: 'جوائز',
};

const sampleBodyAr = 'هذا نموذج توضيحي، وليس إنجازًا حقيقيًا. لإضافة محتوى دائم، عدّل الملف src/data/achievements.js.';
const sampleMetaAr = 'نموذج توضيحي · تجربة';

function translatedRecord(entry) {
  if (!entry) return null;
  if (Object.hasOwn(achievementTranslationsAr, entry.id)) return achievementTranslationsAr[entry.id];
  return entry.generated && entry.id?.startsWith('generated-sample-')
    ? { body: sampleBodyAr, meta: sampleMetaAr }
    : null;
}

/**
 * Look up a localized text field. Untranslated user-created entries fall back
 * to their original text instead of showing blank labels or invented content.
 */
export function entryText(entry, field, lang = 'en') {
  if (!entry) return '';
  if (lang !== 'ar') return entry[field] ?? '';
  return entry[`${field}Ar`]
    ?? entry.translations?.ar?.[field]
    ?? translatedRecord(entry)?.[field]
    ?? (field === 'category' ? categoryTranslationsAr[entry.category] : undefined)
    ?? entry[field]
    ?? '';
}

/** Preserve working URLs; only the visible label is localized. */
export function entryLinks(entry, lang = 'en') {
  if (!entry) return [];
  const labels = translatedRecord(entry)?.links || [];
  return (entry.links || []).map((link, index) => ({
    ...link,
    label: lang === 'ar'
      ? (link.labelAr ?? link.translations?.ar?.label ?? labels[index] ?? link.label)
      : link.label,
  }));
}

````

### `portfolio-arabic-translation-fix.zip` → `src/content/translations.js`

````javascript
export const i18n = {
  en: {
    archive: 'Explore archive', portfolio: 'Return to portfolio', appearance: 'Change appearance', language: 'Switch language',
    introKicker: 'DEVELOPER · READER · MAKER', greeting: 'Hello, I’m', occupation: 'Web developer & designer',
    lead: 'A KFUPM student drawn to building things, reading the classics, and solving difficult puzzles.',
    seeWork: 'Selected work', explore: 'Explore the archive', discover: 'A collection of ideas, projects, and the things in between.',
    about: 'About', projects: 'Projects', writing: 'Writing', contact: 'Contact', readMore: 'Discover the story',
    myWork: 'Selected projects', workLead: 'Projects listed in my original portfolio, brought into a more exploratory space.',
    readingTitle: 'The library of ideas', readingBody: 'I’m drawn to classic literature, philosophy, poetry, and writing. My original portfolio mentions The Master and Margarita, Aristotle, Blake, Frost, Milton, Orwell, Bacon, Johnson, Sophocles, Browning, and Shakespeare.',
    readingNext: 'Beyond the code', skillsTitle: 'Tools & disciplines', writingTitle: 'Writing & reading', writingLead: 'Poetry, essays, and the thinkers I return to.',
    reach: 'Get in touch', reachLead: 'Have an idea or a collaboration in mind? Reach me through one of my linked profiles.',
    note: 'The original contact form was a local-only demonstration. This redesign does not pretend to send messages.',
    sourceBadge: 'From original portfolio', sampleBadge: 'EXAMPLE — NOT A REAL ACHIEVEMENT',
    more: 'Learn more', originalEntry: 'Original portfolio entry', related: 'Explore related entries', back: 'Back to portfolio',
    demoHeading: 'Mosaic growth demo', demoInfo: 'Temporarily add sample tiles to see how the layout expands.',
    add: 'Add 4 samples', remove: 'Undo 4 samples', count: 'entries',
    panelLabel: 'PERSONAL ARCHIVE', portraitAlt: 'Portrait provided with the original portfolio',
    portraitCaption: 'FIG. 01 / PORTRAIT',
    curiosityKicker: 'A NOTE ON CURIOSITY', curiosityHeading: 'Between code', curiosityEmphasis: 'and curiosity.',
    curiosityBody: 'A collection of ideas, projects, and the things in between. I enjoy finding the connections between the things I study, build and read.',
    libraryHeading: 'The library', libraryEmphasis: 'of ideas.',
    projectsHeading: 'Things', projectsEmphasis: 'built.',
    writingHeading: 'Words &', writingEmphasis: 'worlds.',
    contactHeading: 'Let’s make', contactEmphasis: 'something.',
    readingImageAlt: 'Abstract illustration of books and reading',
    artworkDisclosure: 'Illustrations are not screenshots.',
    notFound: 'Not found.', entryImageAlt: 'Image associated with', archiveKicker: 'ARCHIVE',
    footer: 'An ongoing archive, never quite finished.', 
  },
  ar: {
    archive: 'استكشف الأرشيف', portfolio: 'العودة إلى الموقع', appearance: 'تغيير المظهر', language: 'تغيير اللغة',
    introKicker: 'مطور · قارئ · صانع', greeting: 'مرحبًا، أنا', occupation: 'مطور ومصمم مواقع',
    lead: 'طالب في جامعة الملك فهد للبترول والمعادن، أحب البرمجة والأدب الكلاسيكي وحل الألغاز.',
    seeWork: 'مشاريعي', explore: 'استكشف الأرشيف', discover: 'مجموعة من المشاريع والأفكار والتجارب.',
    about: 'نبذة', projects: 'المشاريع', writing: 'الكتابة', contact: 'تواصل', readMore: 'اقرأ المزيد',
    myWork: 'مشاريع مختارة', workLead: 'مشاريع مدرجة في موقعي الأصلي، أعرضها الآن في مساحة أكثر تفاعلية.',
    readingTitle: 'مكتبة الأفكار', readingBody: 'أهتم بالأدب الكلاسيكي والفلسفة والشعر والكتابة، وأعود إلى مؤلفين من بينهم أرسطو وبليك وفروست وميلتون وأورويل وشكسبير.',
    readingNext: 'خارج عالم البرمجة', skillsTitle: 'مهاراتي واهتماماتي', writingTitle: 'الكتابة والقراءة', writingLead: 'الشعر والمقالات والأفكار التي أعود إليها.',
    reach: 'تواصل معي', reachLead: 'هل لديك فكرة أو مشروع مشترك؟ يمكنك التواصل من خلال الروابط أدناه.',
    note: 'كان نموذج التواصل في الموقع الأصلي تجريبيًا، ولا يدّعي هذا التصميم إرسال الرسائل.',
    sourceBadge: 'من الموقع الأصلي', sampleBadge: 'مثال توضيحي — ليس إنجازًا حقيقيًا',
    more: 'المزيد', originalEntry: 'من الموقع الأصلي', related: 'موضوعات مرتبطة', back: 'العودة إلى الموقع',
    demoHeading: 'تجربة نمو الشبكة', demoInfo: 'أضف بطاقات نموذجية مؤقتًا لرؤية كيفية توسّعها.',
    add: 'أضف ٤ بطاقات', remove: 'تراجع عن ٤ بطاقات', count: 'عنصرًا',
    panelLabel: 'الأرشيف الشخصي', portraitAlt: 'صورة شخصية من الموقع الأصلي',
    portraitCaption: 'شكل ٠١ / صورة شخصية',
    curiosityKicker: 'ملاحظة عن الفضول', curiosityHeading: 'بين البرمجة', curiosityEmphasis: 'والفضول.',
    curiosityBody: 'مجموعة من المشاريع والأفكار والتجارب وما بينها. أستمتع باكتشاف الروابط بين ما أدرسه وأبنيه وأقرأه.',
    libraryHeading: 'مكتبة', libraryEmphasis: 'الأفكار.',
    projectsHeading: 'أعمال', projectsEmphasis: 'أنجزتها.',
    writingHeading: 'الكلمات', writingEmphasis: 'والعوالم.',
    contactHeading: 'لنعمل', contactEmphasis: 'معًا.',
    readingImageAlt: 'رسم تجريدي يعبّر عن الكتب والقراءة',
    artworkDisclosure: 'الرسوم توضيحية وليست لقطات شاشة.',
    notFound: 'الصفحة غير موجودة.', entryImageAlt: 'صورة مرتبطة بـ', archiveKicker: 'الأرشيف',
    footer: 'أرشيف متجدد، لا يكتمل تمامًا.', 
  },
};

````

### `portfolio-arabic-translation-fix.zip` → `tests/achievementTranslations.test.js`

````javascript
import test from 'node:test';
import assert from 'node:assert/strict';
import { entryText, entryLinks } from '../src/content/achievementTranslations.js';
import { achievements, createSampleBatch } from '../src/data/achievements.js';
import { i18n } from '../src/content/translations.js';

test('all original entries have Arabic body and image-caption metadata', () => {
  for (const entry of achievements) {
    for (const field of ['body', 'meta']) {
      const arabic = entryText(entry, field, 'ar');
      assert.ok(arabic && arabic !== entry[field], `${entry.id} ${field} not translated`);
    }
    assert.equal(entryText(entry, 'body', 'en'), entry.body);
  }
});

test('generated demo entries also have Arabic body and captions', () => {
  for (const entry of createSampleBatch(0, 12)) {
    assert.notEqual(entryText(entry, 'body', 'ar'), entry.body);
    assert.notEqual(entryText(entry, 'meta', 'ar'), entry.meta);
  }
});

test('translated links preserve their URLs', () => {
  const writing = achievements.find(x => x.id === 'writing');
  const [english] = entryLinks(writing, 'en');
  const [arabic] = entryLinks(writing, 'ar');
  assert.equal(arabic.href, english.href);
  assert.equal(english.label, 'Visit Substack');
  assert.equal(arabic.label, 'زيارة سبستاك');
});

test('user-created fields take priority over curated translations', () => {
  const custom = {
    id: 'portfolio-website', body: 'English', bodyAr: 'النص الخاص بي',
    meta: 'English caption', caption: 'English caption', captionAr: 'شرح الصورة',
    translations: { ar: { body: 'نص بديل' } },
    links: [{ href: 'https://example.org', label: 'Visit', labelAr: 'زيارة' }],
  };
  assert.equal(entryText(custom, 'body', 'ar'), 'النص الخاص بي');
  assert.equal(entryText(custom, 'caption', 'ar'), 'شرح الصورة');
  assert.equal(entryLinks(custom, 'ar')[0].label, 'زيارة');
});

test('unknown personal entries are never wiped or translated with invented content', () => {
  const custom = { id: 'my-own-achievement', title: 'My title', body: 'Personal text', meta: '2026 · Circuitry', category: 'Engineering', links: [{label:'Open',href:'https://example.org'}] };
  assert.equal(entryText(custom, 'body', 'ar'), 'Personal text');
  assert.equal(entryText(custom, 'meta', 'ar'), '2026 · Circuitry');
  assert.equal(entryText(custom, 'category', 'ar'), 'هندسة');
  assert.equal(entryLinks(custom, 'ar')[0].label, 'Open');
});

test('both interface locales cover the extended copy', () => {
  const keys = Object.keys(i18n.en);
  for (const key of keys) assert.ok(i18n.ar[key], `${key} missing in Arabic`);
});

````

### `portfolio-arabic-translations-current-project.zip` → `docs/TRANSLATIONS.md`

````md
# Bilingual achievement fields (English / Arabic)

Every entry keeps its original English properties and adds a corresponding `Ar` property for Arabic. No automatic translation service is required. The site switches these fields instantly when the language button is used.

Example:

```js
{
  id: 'example',
  category: 'Projects',
  categoryAr: 'المشاريع',
  title: 'My Project',
  titleAr: 'مشروعي',
  summary: 'A short description.',
  summaryAr: 'وصف قصير.',
  body: 'The full story about the project.',
  bodyAr: 'القصة الكاملة عن المشروع.',
  image: '/art/example.jpg',
  meta: 'Programming · Design',
  metaAr: 'البرمجة · التصميم',
  // Optional: use a dedicated caption instead of the metadata.
  caption: 'Photograph taken during development.',
  captionAr: 'صورة التُقطت خلال التطوير.',
  // Optional: accessible descriptions for screen-reader users.
  imageAlt: 'The project during development',
  imageAltAr: 'المشروع خلال مرحلة التطوير',
  links: [{
    label: 'View project',
    labelAr: 'عرض المشروع',
    href: 'https://example.com',
  }],
}
```

**Rules**

- Edit `src/data/achievements.js` to add or change your text.
- For each English property, use the same name with the `Ar` suffix for its Arabic translation.
- The field displayed below an achievement image is `caption` / `captionAr` when supplied. Otherwise it is `meta` / `metaAr`.
- If you omit an Arabic field, the website falls back to the English value rather than showing an empty or invented translation. An explicitly empty field is respected.
- Never translate technical names, identifiers, image paths, or URLs unless doing so makes sense in the *displayed text*.
- `src/content/translations.js` contains interface text (section headings, buttons, and labels), while `src/content/localizeEntry.js` handles achievement fields.
- The language selector also updates square-tile titles and categories in the collage.

## Applying the patch

Copy the `src/` and `tests/` paths from this package into your existing project, preserving their folder structure. No other source files need replacing. The documentation file is optional.

Test the added translation coverage using:

```bash
node --test tests/entryTranslation.test.js
```

````

### `portfolio-arabic-translations-current-project.zip` → `src/components/ArchiveMosaic.jsx`

````jsx
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { layoutMosaic } from '../lib/mosaicLayout.js';
import { visibleMosaicTiles } from '../lib/visibleMosaicTiles.js';
import { advanceAutoScroll, initialAutoScrollState, pauseAutoScroll, resumeAutoScroll, SCROLL_RESUME_DELAY_MS } from '../lib/autoScroll.js';
import Icon from './Icons.jsx';
import { localizeEntryField } from '../content/localizeEntry.js';
import { createAmbientBackground } from '../lib/ambientPattern.js';

// The artwork generator is costly when hundreds of SVG backgrounds are encoded.
// Generate once per tile identity, only when the tile enters the viewport.
const artworkCache = new Map();
function artworkFor(id) {
  if (!artworkCache.has(id)) {
    if (artworkCache.size > 900) artworkCache.delete(artworkCache.keys().next().value);
    artworkCache.set(id, createAmbientBackground(id));
  }
  return artworkCache.get(id);
}

const ArchiveTile = memo(function ArchiveTile({ tile, onOpen, lang }) {
  const { entry, pixels, x, y, decorative } = tile;
  const style = {
    '--tile-x': `${x}px`, '--tile-y': `${y}px`, '--tile-size': `${pixels}px`,
    '--tile-image': entry ? `url("${entry.image}")` : undefined,
    ...(decorative ? { '--ambient-art': artworkFor(tile.id) } : {}),
  };
  if (decorative) {
    return <div className="mosaic-tile mosaic-tile--ambient" style={style} aria-hidden="true" />;
  }
  const title = localizeEntryField(entry, 'title', lang);
  const category = localizeEntryField(entry, 'category', lang);
  return (
    <button type="button"
      className={`mosaic-tile mosaic-tile--entry ${entry.sample ? 'mosaic-tile--sample' : ''} ${tile.compact ? 'mosaic-tile--responsive' : tile.size === 1 ? 'mosaic-tile--tiny' : ''}`}
      style={style} onClick={event => onOpen(entry, event.currentTarget)}
      data-side={tile.side} data-entry-id={entry.id} title={title}
      aria-label={`${title}${entry.sample ? (lang === 'ar' ? ' — مثال' : ' — sample') : ''}`}>
      <span className="tile-visual" aria-hidden="true" />
      <span className="tile-content">
        <span className="tile-category">{entry.sample ? '◇ ' : '✦ '}{category}</span>
        <span className="tile-title">{title}</span>
        <span className="tile-corner"><Icon name="upRight" size={14}/></span>
      </span>
    </button>
  );
});

export default function ArchiveMosaic({ entries, viewport, archive, lang, onOpen, layoutSeed = 1 }) {
  const scrollRef = useRef(null);
  const pauseUntil = useRef(0);
  const lastTime = useRef(0);
  const scrollState = useRef(initialAutoScrollState());
  const lastWrittenPosition = useRef(0);
  const [viewTop, setViewTop] = useState(0);
  const layout = useMemo(() => layoutMosaic(entries, viewport, archive, layoutSeed), [entries, viewport.width, viewport.height, archive, layoutSeed]);
  const viewportHeight = viewport.height;

  const syncWindow = useCallback((force = false) => {
    const top = scrollRef.current?.scrollTop ?? 0;
    // Recalculate the visible set only after crossing a 120px bucket.
    const bucket = Math.floor(top / 120) * 120;
    setViewTop(previous => force || previous !== bucket ? bucket : previous);
  }, []);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;
    element.scrollTop = 0;
    syncWindow(true);
    lastTime.current = 0;
    scrollState.current = pauseAutoScroll(initialAutoScrollState(), 0, true);
    lastWrittenPosition.current = 0;
    pauseUntil.current = performance.now() + SCROLL_RESUME_DELAY_MS;
  }, [archive, layout.metrics.compact, syncWindow]);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    // Hover/focus ease the current velocity down. Direct scrolling/touch
    // takes control immediately, so our animation never fights the gesture.
    const pause = event => {
      pauseUntil.current = performance.now() + SCROLL_RESUME_DELAY_MS;
      const manual = ['wheel', 'touchstart', 'pointerdown'].includes(event?.type);
      scrollState.current = pauseAutoScroll(scrollState.current, element.scrollTop, manual);
      if (manual) lastWrittenPosition.current = element.scrollTop;
    };
    const scroll = () => {
      // iOS can continue a touch gesture via momentum scroll after touchend.
      // Re-sync that position without replacing auto-generated subpixel offsets.
      if (performance.now() < pauseUntil.current &&
          Math.abs(element.scrollTop - lastWrittenPosition.current) > 1) {
        scrollState.current = pauseAutoScroll(scrollState.current, element.scrollTop, true);
        lastWrittenPosition.current = element.scrollTop;
      }
      syncWindow();
    };
    const hoverEntry = event => {
      if (event.target.closest?.('.mosaic-tile--entry')) pause(event);
    };
    element.addEventListener('wheel', pause, { passive: true });
    element.addEventListener('touchstart', pause, { passive: true });
    element.addEventListener('pointerdown', pause, { passive: true });
    element.addEventListener('pointerover', hoverEntry, { passive: true });
    element.addEventListener('focusin', pause);
    element.addEventListener('scroll', scroll, { passive: true });
    // Animate only the scroll position. React updates the visible-tile set
    // in 120px buckets, not on every requestAnimationFrame callback.
    let frame = 0;
    const tick = time => {
      const delta = lastTime.current ? Math.min(time - lastTime.current, 100) : 0;
      lastTime.current = time;
      if (!document.hidden && !reduce.matches) {
        const max = element.scrollHeight - element.clientHeight;
        if (max > 40) {
          if (time >= pauseUntil.current && scrollState.current.phase === 'paused') {
            scrollState.current = resumeAutoScroll(scrollState.current);
          }
          const next = advanceAutoScroll(scrollState.current, delta, max);
          scrollState.current = next;
          if (Math.abs(element.scrollTop - next.position) >= 0.5) {
            // Keep fractional progress in state rather than rereading rounded
            // scrollTop values (important for mobile Safari).
            lastWrittenPosition.current = next.position;
            element.scrollTop = next.position;
          }
        }
      }
      frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(frame);
      element.removeEventListener('wheel', pause);
      element.removeEventListener('touchstart', pause);
      element.removeEventListener('pointerdown', pause);
      element.removeEventListener('pointerover', hoverEntry);
      element.removeEventListener('focusin', pause);
      element.removeEventListener('scroll', scroll);
    };
  }, [syncWindow]);

  const visible = useMemo(() => visibleMosaicTiles(layout.tiles, viewTop, viewportHeight), [layout.tiles, viewTop, viewportHeight]);
  return (
    <div ref={scrollRef}
      className={`mosaic-scroll ${archive ? 'mosaic-scroll--archive' : ''} ${layout.metrics.compact ? 'mosaic-scroll--compact' : ''}`}
      aria-label={lang === 'ar' ? 'مجموعة الأرشيف التفاعلية' : 'Interactive archive collage'} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="mosaic-plane" style={{ height: `${layout.contentHeight}px` }}>
        {visible.map(tile => <ArchiveTile key={tile.id} tile={tile} onOpen={onOpen} lang={lang} />)}
      </div>
    </div>
  );
}

````

### `portfolio-arabic-translations-current-project.zip` → `src/components/PortfolioPanel.jsx`

````jsx
import React, { useEffect, useRef } from 'react';
import Icon from './Icons.jsx';
import { localizeEntryField, localizeCaption, localizeImageAlt } from '../content/localizeEntry.js';

function InternalLink({ children, href, onNavigate, className = 'text-link', item = null }) {
  return <button type="button" className={className} onClick={(e) => onNavigate(href, e.currentTarget, item)}>{children}</button>;
}

function ExternalResourceLink({ href, children }) {
  return (
    <a className="resource-link" href={href} target="_blank" rel="noopener noreferrer">
      <span>{children}</span>
      <span className="resource-link-icon"><Icon name="upRight" size={18}/></span>
    </a>
  );
}

function PanelHeader({ t, onNavigate, pathname }) {
  return (
    <div className="panel-heading">
      <InternalLink className="panel-monogram" href="/" onNavigate={onNavigate}>
        M<span>.</span>
      </InternalLink>
      <span className="panel-label">{t.panelLabel} <span className="tiny-asterisk">✳</span> 2026</span>
      <span className="panel-index">{pathname === '/' ? '01' : pathname === '/projects' ? '02' : pathname === '/writing' ? '03' : pathname === '/contact' ? '04' : '✦'}</span>
    </div>
  );
}

function HomeView({ t, onNavigate, entries, lang }) {
  return <>
    <section className="intro-section">
      <span className="micro-label">{t.introKicker}</span>
      <div className="hero-intro">
        <div className="hero-copy">
          <span className="hero-greeting">{t.greeting}</span>
          <h1>{lang === 'ar' ? 'مروان' : 'Marwan'}<br/><em>{lang === 'ar' ? 'الحمدان.' : 'Al-Hamdan.'}</em></h1>
          <div className="hero-rule" />
          <p className="hero-role">{t.occupation}</p>
          <p className="hero-description">{t.lead}</p>
        </div>
        <div className="portrait-frame">
          <img src="/portrait.png" alt={t.portraitAlt} />
          <span className="portrait-credit">{t.portraitCredit}</span>
        </div>
      </div>
      <div className="hero-actions">
        <InternalLink className="pill-link pill-link--dark" href="/projects" onNavigate={onNavigate}>{t.seeWork} <Icon name="upRight" size={15}/></InternalLink>
        <InternalLink className="pill-link pill-link--outline" href="/writing" onNavigate={onNavigate}>{t.writing} <Icon name="arrow" size={15}/></InternalLink>
        <InternalLink className="pill-link pill-link--outline" href="/contact" onNavigate={onNavigate}>{t.contact} <Icon name="upRight" size={15}/></InternalLink>
      </div>
    </section>
    <section className="editorial-block">
      <div className="section-heading"><span className="number-label">01 / {t.curiosityKicker.toUpperCase()}</span><span className="section-star">✳</span></div>
      <h2>{t.curiosityLine}<br/>{t.curiosityAnd} <em>{t.curiosityEmphasis}</em></h2>
      <p>{t.discover} {t.curiosityBody}</p>
      <div className="ink-divider" />
      <span className="number-label">02 / {t.myWork.toUpperCase()}</span>
      <div className="feature-links">
        {entries.slice(0, 3).map((item, i) => (
          <InternalLink key={item.id} href={`/archive/${item.id}`} onNavigate={onNavigate} item={item} className="feature-link">
            <span className="feature-number">0{i + 1}</span><span>{localizeEntryField(item, 'title', lang)}</span><Icon name="upRight" size={16}/>
          </InternalLink>
        ))}
      </div>
    </section>
    <section className="editorial-block editorial-block--bottom">
      <div className="section-heading"><span className="number-label">03 / {t.readingNext.toUpperCase()}</span></div>
      <h2>{t.libraryLine}<br/>{t.libraryAnd} <em>{t.libraryEmphasis}</em></h2>
      <p>{t.readingBody}</p>
      <InternalLink className="resource-link" href="/writing" onNavigate={onNavigate}>
        <span>{t.writing}</span><span className="resource-link-icon"><Icon name="arrow" size={18}/></span>
      </InternalLink>
    </section>
  </>;
}

function ProjectsView({ t, onNavigate, entries, lang }) {
  const items = entries.filter((e) => !e.sample && ['portfolio-website', 'ecommerce', 'mobile-ui', 'dashboard'].includes(e.id));
  return <section className="inner-view">
    <span className="micro-label">02 / {t.projects.toUpperCase()}</span>
    <h1 className="view-title">{t.projectsTitleLine} <em>{t.projectsTitleEmphasis}</em></h1>
    <p className="view-lede">{t.workLead}</p>
    <div className="project-list">
      {items.map((item, index) => <InternalLink key={item.id} href={`/archive/${item.id}`} onNavigate={onNavigate} item={item} className="project-row">
        <span className="project-row-number">0{index + 1}</span>
        <img src={item.image} alt="" />
        <span className="project-row-description"><strong>{localizeEntryField(item, 'title', lang)}</strong><small>{localizeEntryField(item, 'meta', lang)}</small></span>
        <Icon name="upRight" size={18}/>
      </InternalLink>)}
    </div>
    <div className="source-disclosure">{t.sourceBadge}</div>
  </section>;
}

function WritingView({ t, onNavigate, entries, lang }) {
  return <section className="inner-view">
    <span className="micro-label">03 / {t.writing.toUpperCase()}</span>
    <h1 className="view-title">{t.writingTitleLine}<br/><em>{t.writingTitleEmphasis}</em></h1>
    <p className="view-lede">{t.writingLead}</p>
    <img className="editorial-illustration" src="/art/reading.svg" alt={t.writingIllustrationAlt} />
    <h2 className="subheading">{t.readingTitle}</h2>
    <p className="body-copy">{t.readingBody}</p>
    <div className="writing-resource-list">
      <InternalLink className="resource-link" href="/archive/writing" onNavigate={onNavigate} item={entries.find(e => e.id === 'writing')}>
        <span>{localizeEntryField(entries.find(e => e.id === 'writing'), 'title', lang) || t.writingTitleLine}</span><span className="resource-link-icon"><Icon name="arrow" size={18}/></span>
      </InternalLink>
      <ExternalResourceLink href="https://marwanpgx.substack.com/">Substack</ExternalResourceLink>
    </div>
  </section>;
}

function ContactView({ t }) {
  return <section className="inner-view contact-view">
    <span className="micro-label">04 / {t.contact.toUpperCase()}</span>
    <h1 className="view-title">{t.contactTitleLine}<br/><em>{t.contactTitleEmphasis}</em></h1>
    <p className="view-lede">{t.reachLead}</p>
    <div className="contact-options">
      <ExternalResourceLink href="https://www.linkedin.com/in/marwan-al-hamdan-a64043331/">LinkedIn</ExternalResourceLink>
      <ExternalResourceLink href="https://marwanpgx.substack.com/">Substack</ExternalResourceLink>
    </div>
    <p className="fine-print">{t.note}</p>
  </section>;
}

function EntryView({ entry, t, lang, onNavigate }) {
  if (!entry) return <section className="inner-view"><h1 className="view-title">{t.notFound}</h1><InternalLink href="/" onNavigate={onNavigate} className="inline-arrow"><Icon name="back" size={18}/> {t.back}</InternalLink></section>;
  const title = localizeEntryField(entry, 'title', lang);
  const summary = localizeEntryField(entry, 'summary', lang);
  return <article className="entry-view inner-view">
    <span className="micro-label">{t.archiveEntryLabel.toUpperCase()} / {localizeEntryField(entry, 'category', lang).toUpperCase()}</span>
    {entry.sample && <div className="sample-alert">{t.sampleBadge}</div>}
    <h1 className="view-title">{title}</h1>
    <p className="view-lede">{summary}</p>
    <figure className="entry-figure">
      <img src={entry.image} className="entry-hero-image" alt={localizeImageAlt(entry, lang)} />
      <figcaption className="entry-caption number-label">{localizeCaption(entry, lang)}</figcaption>
    </figure>
    <p className="body-copy">{localizeEntryField(entry, 'body', lang)}</p>
    {entry.links?.length > 0 && <div className="entry-links">{entry.links.map(link => <ExternalResourceLink key={link.href} href={link.href}>{localizeEntryField(link, 'label', lang)}</ExternalResourceLink>)}</div>}
    <InternalLink href="/" onNavigate={onNavigate} className="pill-link pill-link--outline"><Icon name="back" size={16}/> {t.back}</InternalLink>
  </article>;
}

export default function PortfolioPanel({ pathname, archive, entries, t, lang, onNavigate }) {
  const scrollRef = useRef(null);
  useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = 0; }, [pathname]);
  const entry = pathname.startsWith('/archive/') ? entries.find(e => e.id === decodeURIComponent(pathname.slice('/archive/'.length))) : null;
  return (
    <main className={`portfolio-panel ${archive ? 'portfolio-panel--hidden' : ''}`} aria-hidden={archive} inert={archive} ref={scrollRef} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <PanelHeader t={t} onNavigate={onNavigate} pathname={pathname}/>
      {pathname === '/' ? <HomeView t={t} onNavigate={onNavigate} entries={entries} lang={lang}/>
        : pathname === '/projects' ? <ProjectsView t={t} onNavigate={onNavigate} entries={entries} lang={lang}/>
          : pathname === '/writing' ? <WritingView t={t} onNavigate={onNavigate} entries={entries} lang={lang}/>
            : pathname === '/contact' ? <ContactView t={t}/>
              : <EntryView entry={entry} t={t} lang={lang} onNavigate={onNavigate}/>}
      <footer className="panel-footer">
        <span>© 2026 MARWAN AL-HAMDAN</span><span>{t.footer}</span>
      </footer>
    </main>
  );
}

````

### `portfolio-arabic-translations-current-project.zip` → `src/content/localizeEntry.js`

````javascript
/**
 * Localize author-editable archive fields without modifying the English copy.
 * Optional fieldAr values override the English field when Arabic is selected.
 * Empty translated strings are respected (e.g. an intentionally empty summary).
 */
export function localizeEntryField(item, field, lang) {
  if (!item) return '';
  const localizedKey = `${field}Ar`;
  if (lang === 'ar' && typeof item[localizedKey] === 'string') return item[localizedKey];
  return item[field] ?? '';
}

/** An explicit image caption takes precedence; otherwise use the entry metadata. */
export function localizeCaption(entry, lang) {
  if (!entry) return '';
  if (lang === 'ar' && typeof entry.captionAr === 'string') return entry.captionAr;
  if (lang !== 'ar' && typeof entry.caption === 'string') return entry.caption;
  if (typeof entry.caption === 'string') return entry.caption;
  if (lang === 'ar' && typeof entry.metaAr === 'string') return entry.metaAr;
  return entry.meta ?? '';
}

/** Allows custom, translated accessible image descriptions, if supplied. */
export function localizeImageAlt(entry, lang) {
  const explicit = localizeEntryField(entry, 'imageAlt', lang);
  if (explicit) return explicit;
  const title = localizeEntryField(entry, 'title', lang);
  return lang === 'ar' ? `صورة مرتبطة بـ${title}` : `Image related to ${title}`;
}

````

### `portfolio-arabic-translations-current-project.zip` → `src/content/translations.js`

````javascript
export const i18n = {
  en: {
    archive: 'Explore archive', portfolio: 'Return to portfolio', appearance: 'Change appearance', language: 'Switch language',
    introKicker: 'DEVELOPER · READER · MAKER', greeting: 'Hello, I’m', occupation: 'Web developer & designer',
    lead: 'A KFUPM student drawn to building things, reading the classics, and solving difficult puzzles.',
    seeWork: 'Selected work', explore: 'Explore the archive', discover: 'A collection of ideas, projects, and the things in between.',
    about: 'About', projects: 'Projects', writing: 'Writing', contact: 'Contact', readMore: 'Discover the story',
    myWork: 'Selected projects', workLead: 'Projects listed in my original portfolio, brought into a more exploratory space.',
    readingTitle: 'The library of ideas', readingBody: 'I’m drawn to classic literature, philosophy, poetry, and writing. My original portfolio mentions The Master and Margarita, Aristotle, Blake, Frost, Milton, Orwell, Bacon, Johnson, Sophocles, Browning, and Shakespeare.',
    readingNext: 'Beyond the code', skillsTitle: 'Tools & disciplines', writingTitle: 'Writing & reading', writingLead: 'Poetry, essays, and the thinkers I return to.',
    reach: 'Get in touch', reachLead: 'Have an idea or a collaboration in mind? Reach me through one of my linked profiles.',
    note: 'The original contact form was a local-only demonstration. This redesign does not pretend to send messages.',
    sourceBadge: 'From original portfolio', sampleBadge: 'EXAMPLE — NOT A REAL ACHIEVEMENT',
    more: 'Learn more', originalEntry: 'Original portfolio entry', related: 'Explore related entries', back: 'Back to portfolio',
    demoHeading: 'Mosaic growth demo', demoInfo: 'Temporarily add sample tiles to see how the layout expands.',
    add: 'Add 4 samples', remove: 'Undo 4 samples', count: 'entries',
    footer: 'An ongoing archive, never quite finished.',
    panelLabel: 'PERSONAL ARCHIVE',
    portraitAlt: 'Portrait of Marwan Al-Hamdan', portraitCredit: 'FIG. 01 / PORTRAIT',
    curiosityKicker: 'A NOTE ON CURIOSITY', curiosityLine: 'Between code', curiosityAnd: 'and', curiosityEmphasis: 'curiosity.',
    curiosityBody: 'I enjoy finding the connections between the things I study, build and read.',
    libraryLine: 'The library', libraryAnd: 'of', libraryEmphasis: 'ideas.',
    projectsTitleLine: 'Things', projectsTitleEmphasis: 'built.',
    writingTitleLine: 'Words &', writingTitleEmphasis: 'worlds.',
    contactTitleLine: "Let's make", contactTitleEmphasis: 'something.',
    writingIllustrationAlt: 'Abstract illustration of books and reading',
    archiveEntryLabel: 'ARCHIVE', notFound: 'Not found.',
    archiveCanvasLabel: 'Interactive archive collage', sampleSuffix: 'sample',
  },
  ar: {
    archive: 'استكشف الأرشيف', portfolio: 'العودة إلى الموقع', appearance: 'تغيير المظهر', language: 'تغيير اللغة',
    introKicker: 'مطور · قارئ · صانع', greeting: 'مرحبًا، أنا', occupation: 'مطور ومصمم مواقع',
    lead: 'طالب في جامعة الملك فهد للبترول والمعادن، شغوف بصناعة الأشياء وقراءة الأدب الكلاسيكي وحل الألغاز الصعبة.',
    seeWork: 'مشاريعي', explore: 'استكشف الأرشيف', discover: 'مجموعة من الأفكار والمشاريع وكل ما يقع بينهما.',
    about: 'نبذة', projects: 'المشاريع', writing: 'الكتابة', contact: 'تواصل', readMore: 'اقرأ المزيد',
    myWork: 'مشاريع مختارة', workLead: 'مشاريع مدرجة في موقعي الأصلي، أعرضها الآن في مساحة أكثر تفاعلية.',
    readingTitle: 'مكتبة الأفكار', readingBody: 'أميل إلى الأدب الكلاسيكي والفلسفة والشعر والكتابة. ويذكر موقعي الشخصي الأصلي «المعلم ومارغريتا»، وأرسطو، وبليك، وفروست، وميلتون، وأورويل، وبيكون، وجونسون، وسوفوكليس، وبراوننغ، وشكسبير.',
    readingNext: 'خارج عالم البرمجة', skillsTitle: 'مهاراتي واهتماماتي', writingTitle: 'الكتابة والقراءة', writingLead: 'الشعر والمقالات والأفكار التي أعود إليها.',
    reach: 'تواصل معي', reachLead: 'هل لديك فكرة أو مشروع مشترك؟ يمكنك التواصل من خلال الروابط أدناه.',
    note: 'كان نموذج التواصل في الموقع الأصلي تجريبيًا، ولا يدّعي هذا التصميم إرسال الرسائل.',
    sourceBadge: 'من الموقع الأصلي', sampleBadge: 'مثال توضيحي — ليس إنجازًا حقيقيًا',
    more: 'المزيد', originalEntry: 'من الموقع الأصلي', related: 'موضوعات مرتبطة', back: 'العودة إلى الموقع',
    demoHeading: 'تجربة نمو الشبكة', demoInfo: 'أضف بطاقات نموذجية مؤقتًا لرؤية كيفية توسّعها.',
    add: 'أضف ٤ بطاقات', remove: 'تراجع عن ٤ بطاقات', count: 'عنصرًا',
    footer: 'أرشيف متجدد، لا يكتمل تمامًا.',
    panelLabel: 'الأرشيف الشخصي',
    portraitAlt: 'صورة مروان الحمدان الشخصية', portraitCredit: 'صورة ٠١ / صورة شخصية',
    curiosityKicker: 'تأمل في الفضول', curiosityLine: 'بين البرمجة', curiosityAnd: 'و', curiosityEmphasis: 'الفضول.',
    curiosityBody: 'أستمتع باكتشاف الروابط بين ما أدرسه وأبنيه وأقرؤه.',
    libraryLine: 'مكتبة', libraryAnd: '', libraryEmphasis: 'الأفكار.',
    projectsTitleLine: 'أشياء', projectsTitleEmphasis: 'بنيتها.',
    writingTitleLine: 'كلمات', writingTitleEmphasis: 'وعوالم.',
    contactTitleLine: 'لنصنع', contactTitleEmphasis: 'شيئًا معًا.',
    writingIllustrationAlt: 'رسم تجريدي للكتب والقراءة',
    archiveEntryLabel: 'الأرشيف', notFound: 'العنصر غير موجود.',
    archiveCanvasLabel: 'مجموعة الأرشيف التفاعلية', sampleSuffix: 'مثال',
  },
};

````

### `portfolio-arabic-translations-current-project.zip` → `src/data/achievements.js`

````javascript
/**
 * Archive entries. Keep original-language copy in the base fields and place
 * faithful Arabic equivalents in their corresponding *Ar fields.
 *
 * Supported bilingual fields: category/categoryAr, title/titleAr,
 * summary/summaryAr, body/bodyAr, meta/metaAr, optional caption/captionAr,
 * optional imageAlt/imageAltAr, and links[].label/links[].labelAr.
 * Captions fall back to meta/metaAr when no explicit caption is supplied.
 */
export const achievements = [
  {
    id: 'portfolio-website',
    category: 'Web Development', categoryAr: 'تطوير الويب',
    title: 'My Portfolio Website', titleAr: 'موقعي الشخصي',
    summary: 'A responsive personal portfolio built with HTML, CSS, JS, and React',
    summaryAr: 'موقع أعمال شخصي متجاوب طُوّر باستخدام HTML وCSS وJavaScript وReact.',
    body: "This website that you are currently using has been developed by me, and for what it's worth, I consider it a great piece of work.",
    bodyAr: 'أنا من طوّر هذا الموقع الذي تتصفحه الآن، وأعدّه عملًا رائعًا.',
    image: '/art/MPortfolio.png',
    meta: 'HTML · CSS · JavaScript',
    metaAr: 'HTML · CSS · JavaScript',
    links: [],
    sample: false,
  },
  {
    id: 'discordbot',
    category: 'Design', categoryAr: 'تصميم',
    title: 'Discord Bot Application', titleAr: 'تطبيق بوت ديسكورد',
    summary: 'A Discord bot that adds value to a server',
    summaryAr: 'بوت لديسكورد يضيف قيمة إلى الخادم.',
    body: 'I created Potential Bot, a gag feature that is meant to make servers and communities on Discord have more fun by introducing some chaos.',
    bodyAr: 'أنشأت بوت Potential Bot، وهو ميزة طريفة تهدف إلى جعل خوادم ديسكورد ومجتمعاته أكثر متعة من خلال إدخال شيء من الفوضى.',
    image: '/art/PotentialBOT.png',
    meta: 'Back-End · API Integration · Design',
    metaAr: 'تطوير الواجهة الخلفية · تكامل واجهات API · تصميم',
    links: [{label: 'Add Potential Bot', labelAr: 'إضافة بوت Potential Bot', href: 'https://discord.com/oauth2/authorize?client_id=1560379322361970789'}],
    sample: false,
  },
  {
    id: 'writing',
    category: 'Writing', categoryAr: 'الكتابة',
    title: 'Poetry & Essays', titleAr: 'الشعر والمقالات',
    summary: 'I love to write poems and essays, which can be found on my Substack.',
    summaryAr: 'أحب كتابة القصائد والمقالات، ويمكن الاطلاع عليها في صفحتي على سبستاك.',
    body: 'My Substack serves as a platform with which you may enjoy my writings, I love to write short lyrical poems with endless themes.',
    bodyAr: 'تتيح لكم صفحتي على سبستاك الاستمتاع بقراءة كتاباتي. أحب كتابة قصائد غنائية قصيرة تتناول موضوعات لا حصر لها.',
    image: '/art/MarwanWriting.jpeg',
    meta: 'Writing · Poetry',
    metaAr: 'الكتابة · الشعر',
    links: [{ label: 'Visit Substack', labelAr: 'زيارة سبستاك', href: 'https://marwanpgx.substack.com/' }],
    sample: false,
  },
  {
    id: 'global-engagement-departure-speech',
    category: 'Engagement', categoryAr: 'المشاركة',
    title: 'Students Exchange Pre-Departure Speech', titleAr: 'كلمة لطلاب التبادل قبل المغادرة',
    summary: '',
    summaryAr: '',
    body: 'I was invited to give a speech to the departing batch of exchange students during T261, as a former exchange student myself. This was a very fruitful experience and was a form of paying back to my University.',
    bodyAr: 'دُعيت لإلقاء كلمة أمام دفعة طلاب التبادل المغادرين خلال الفصل T261، بصفتي طالب تبادل سابقًا. كانت تجربة مثمرة للغاية، وشكّلت وسيلة لرد الجميل لجامعتي.',
    image: '/art/GESpeech.jpeg',
    meta: 'Student Relations · Social Skills',
    metaAr: 'العلاقات الطلابية · المهارات الاجتماعية',
    links: [],
    sample: false,
  },
  {
    id: 'lit-club',
    category: 'Interests', categoryAr: 'الاهتمامات',
    title: 'Literature Club', titleAr: 'نادي الأدب',
    summary: 'Founded the KFUPM Literature CLUB in 2026, semester 261',
    summaryAr: 'أسست نادي الأدب بجامعة الملك فهد للبترول والمعادن عام 2026، في الفصل 261.',
    body: 'Fostered interest in critical thinking and analysis with regards to works of art, media, and entertainment, by founding the literature club in KFUPM and hosting semi-weekly meetings.',
    bodyAr: 'عززت الاهتمام بالتفكير النقدي والتحليل فيما يتعلق بالأعمال الفنية والإعلامية والترفيهية، من خلال تأسيس نادي الأدب في جامعة الملك فهد للبترول والمعادن وعقد لقاءات شبه أسبوعية.',
    image: '/art/LitClubMeet.jpeg',
    meta: 'Literature · Philosophy',
    metaAr: 'الأدب · الفلسفة',
    links: [],
    sample: false,
  },
  {
    id: '/art/TrafficLightSystem.jpg',
    category: 'Projects', categoryAr: 'المشاريع',
    title: 'Parking System Project', titleAr: 'مشروع نظام مواقف السيارات',
    summary: 'College project where we created a parking reservation system',
    summaryAr: 'مشروع جامعي أنشأنا فيه نظامًا لحجز مواقف السيارات.',
    body: 'Back in 2023, I created a fully independent, sensor-based arduino parking reservation system. It could be scaled up to be fully autonomous and enable online reservations to customers.',
    bodyAr: 'في عام 2023، أنشأت نظامًا مستقلًا تمامًا لحجز مواقف السيارات، يعتمد على حساسات وأردوينو. وكان بالإمكان توسيعه ليعمل بصورة ذاتية بالكامل ويتيح للعملاء الحجز عبر الإنترنت.',
    image: '/art/TrafficLightSystem.jpg',
    meta: 'Design · Project Management',
    metaAr: 'التصميم · إدارة المشاريع',
    links: [],
  },
  {
    id: 'circuit-project',
    category: 'Projects', categoryAr: 'المشاريع',
    title: 'Circuits Project', titleAr: 'مشروع الدوائر',
    summary: 'Created a fully programmed traffic light system.',
    summaryAr: 'أنشأت نظام إشارات مرور مبرمجًا بالكامل.',
    body: 'For COE203, I created a fully programmed traffic system in Verilog, from the ground-up using the bare essentials, ANDs, ORs, NOTs, we created a traffic light system with timers and responds to incoming drivers.',
    bodyAr: 'ضمن مقرر COE203، أنشأت من الصفر نظام إشارات مرور مبرمجًا بالكامل بلغة Verilog، باستخدام البوابات المنطقية الأساسية AND وOR وNOT. وأنشأنا نظامًا بإشارات مرور مزودة بمؤقتات ويستجيب للسائقين القادمين.',
    image: '/art/circuit.jpg',
    meta: 'Programming · Design',
    metaAr: 'البرمجة · التصميم',
    links: [],
  },
  {
    id: 'security-plus',
    category: 'Achievement', categoryAr: 'إنجاز',
    title: 'Security+ Certification', titleAr: 'شهادة Security+',
    summary: 'Marwan obtained the COMPTIA Security+ Certification in June of 2026.',
    summaryAr: 'حصل مروان على شهادة CompTIA Security+ في يونيو 2026.',
    body: 'During the summer of 2026, term 253 of KFUPM, I worked diligently on my studies, and have succeeded in obtaining the Security+ Certification on the side. It was a proud moment for me.',
    bodyAr: 'خلال صيف عام 2026، في الفصل 253 بجامعة الملك فهد للبترول والمعادن، اجتهدت في دراستي ونجحت كذلك في الحصول على شهادة Security+ إلى جانبها. وكانت لحظة فخر بالنسبة إليّ.',
    image: '/art/Sec+.webp',
    meta: 'Certificate · Cybersecurity',
    metaAr: 'شهادة · الأمن السيبراني',
    links: [{ label: 'LinkedIn Announcement', labelAr: 'الإعلان على لينكدإن', href: 'https://lnkd.in/p/dmUgTwsY' }],
  }
];

export const sampleTemplates = [
  {
    title: 'Visual Study', titleAr: 'دراسة بصرية',
    image: '/art/experiment.svg',
    summary: 'An example of a future visual or design study.',
    summaryAr: 'مثال على دراسة بصرية أو تصميمية مستقبلية.',
  },
  {
    title: 'Code Notes', titleAr: 'ملاحظات برمجية',
    image: '/art/research.svg',
    summary: 'A place for a future technical investigation.',
    summaryAr: 'مساحة لدراسة تقنية مستقبلية.',
  },
  {
    title: 'Field Journal', titleAr: 'يوميات ميدانية',
    image: '/art/library.svg',
    summary: 'A space for personal observations and photographs.',
    summaryAr: 'مساحة للملاحظات الشخصية والصور الفوتوغرافية.',
  },
  {
    title: 'New Prototype', titleAr: 'نموذج أولي جديد',
    image: '/art/portfolio.svg',
    summary: 'A hypothetical project entry to demonstrate grid growth.',
    summaryAr: 'مشروع افتراضي لتوضيح كيفية توسّع الشبكة.',
  },
];

export function createSampleBatch(startIndex, count = 4) {
  return Array.from({ length: count }, (_, offset) => {
    const i = startIndex + offset;
    const template = sampleTemplates[i % sampleTemplates.length];
    return {
      id: `generated-sample-${i}`,
      title: `${template.title} ${i + 1}`,
      titleAr: `${template.titleAr} ${i + 1}`,
      category: 'Sample', categoryAr: 'مثال',
      summary: template.summary,
      summaryAr: template.summaryAr,
      body: 'Demonstration only. This card is not a real achievement. Edit src/data/achievements.js to add genuine content permanently.',
      bodyAr: 'للعرض التوضيحي فقط. هذه البطاقة ليست إنجازًا حقيقيًا. عدّل ملف src/data/achievements.js لإضافة محتوى فعلي بصورة دائمة.',
      image: template.image,
      links: [],
      meta: 'PLACEHOLDER · DEMO',
      metaAr: 'عنصر نائب · عرض توضيحي',
      sample: true, generated: true,
    };
  });
}

````

### `portfolio-arabic-translations-current-project.zip` → `tests/entryTranslation.test.js`

````javascript
import test from 'node:test';
import assert from 'node:assert/strict';
import { achievements, createSampleBatch } from '../src/data/achievements.js';
import { localizeEntryField, localizeCaption, localizeImageAlt } from '../src/content/localizeEntry.js';
import { i18n } from '../src/content/translations.js';

test('all supplied achievements have Arabic counterparts for authored text', () => {
  assert.equal(achievements.length, 8);
  for (const entry of achievements) {
    for (const key of ['title', 'category', 'body', 'meta']) {
      assert.equal(typeof entry[`${key}Ar`], 'string', `${entry.id}: missing ${key}Ar`);
      assert.ok(entry[`${key}Ar`].trim(), `${entry.id}: empty ${key}Ar`);
    }
    if (entry.summary) assert.ok(entry.summaryAr?.trim(), `${entry.id}: missing summaryAr`);
    for (const link of entry.links ?? []) {
      assert.ok(link.labelAr?.trim(), `${entry.id}: missing link labelAr`);
      assert.ok(link.href, `${entry.id}: missing link destination`);
    }
  }
});

test('Arabic is used for entries, captions, and links; English stays unchanged', () => {
  const lit = achievements.find(e => e.id === 'lit-club');
  assert.equal(localizeEntryField(lit, 'title', 'ar'), 'نادي الأدب');
  assert.equal(localizeEntryField(lit, 'body', 'en'), lit.body);
  assert.equal(localizeEntryField(lit, 'body', 'ar'), lit.bodyAr);
  assert.equal(localizeCaption(lit, 'ar'), lit.metaAr);
  assert.equal(localizeCaption(lit, 'en'), lit.meta);
  const bot = achievements.find(e => e.id === 'discordbot');
  assert.equal(localizeEntryField(bot.links[0], 'label', 'ar'), 'إضافة بوت Potential Bot');
  assert.equal(localizeEntryField(bot.links[0], 'label', 'en'), 'Add Potential Bot');
});

test('optional custom captions and accessible image labels are supported', () => {
  const entry = {
    title: 'Album', titleAr: 'ألبوم', meta: '2026', metaAr: '٢٠٢٦',
    caption: 'This is a photo', captionAr: 'هذه صورة',
    imageAlt: 'Album photograph', imageAltAr: 'صورة الألبوم',
  };
  assert.equal(localizeCaption(entry, 'en'), 'This is a photo');
  assert.equal(localizeCaption(entry, 'ar'), 'هذه صورة');
  assert.equal(localizeImageAlt(entry, 'ar'), 'صورة الألبوم');
  assert.equal(localizeCaption({ ...entry, captionAr: undefined }, 'ar'), 'This is a photo');
});

test('Arabic fallback never removes an English value when an Ar field is missing', () => {
  const entry = { title: 'Only English', body: 'English body', meta: 'HTML' };
  assert.equal(localizeEntryField(entry, 'body', 'ar'), 'English body');
  assert.equal(localizeCaption(entry, 'ar'), 'HTML');
  assert.equal(localizeImageAlt(entry, 'ar'), 'صورة مرتبطة بـOnly English');
  assert.equal(localizeEntryField({ summary: 'x', summaryAr: '' }, 'summary', 'ar'), '');
});

test('generated samples carry localized descriptions and image caption metadata', () => {
  const list = createSampleBatch(0, 4);
  assert.equal(list.length, 4);
  list.forEach(entry => {
    for (const field of ['title', 'summary', 'body', 'category', 'meta']) {
      assert.ok(localizeEntryField(entry, field, 'ar'));
    }
  });
});

test('translation dictionaries contain identical key sets', () => {
  assert.deepEqual(Object.keys(i18n.en).sort(), Object.keys(i18n.ar).sort());
});

````

### `portfolio-autoscroll-cycle-replacements.zip` → `src/lib/autoScroll.js`

````javascript
/**
 * Archive autoscroll is an inexpensive, deterministic state machine.
 * It always advances downward, briefly rewinds to the top, then repeats.
 */
export const SCROLL_RESUME_DELAY_MS = 2000;
export const SCROLL_SPEED_PX_PER_MS = 0.019 * (4 / 3); // 33⅓% faster than before
export const REWIND_DURATION_MS = 400;

export function initialAutoScrollState() {
  return { position: 0, phase: 'down', rewindFrom: 0, rewindElapsed: 0 };
}

export function advanceAutoScroll(state, elapsedMs, maximum) {
  const max = Math.max(0, maximum);
  const delta = Math.max(0, Math.min(elapsedMs, 100));
  const position = Math.min(max, Math.max(0, state.position));

  if (max <= 40) return { ...initialAutoScrollState(), position };

  if (state.phase === 'rewind') {
    const rewindElapsed = Math.min(REWIND_DURATION_MS, state.rewindElapsed + delta);
    const progress = rewindElapsed / REWIND_DURATION_MS;
    // A quick upward sweep. Its duration doesn't grow with archive length.
    if (progress >= 1) return initialAutoScrollState();
    const remaining = (1 - progress) ** 2;
    return {
      position: Math.min(max, state.rewindFrom * remaining),
      phase: 'rewind', rewindFrom: state.rewindFrom, rewindElapsed,
    };
  }

  const next = Math.min(max, position + delta * SCROLL_SPEED_PX_PER_MS);
  if (next >= max) {
    return { position: max, phase: 'rewind', rewindFrom: max, rewindElapsed: 0 };
  }
  return { position: next, phase: 'down', rewindFrom: 0, rewindElapsed: 0 };
}

````

### `portfolio-autoscroll-cycle-replacements.zip` → `src/components/ArchiveMosaic.jsx`

````jsx
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { layoutMosaic } from '../lib/mosaicLayout.js';
import { visibleMosaicTiles } from '../lib/visibleMosaicTiles.js';
import { advanceAutoScroll, initialAutoScrollState, SCROLL_RESUME_DELAY_MS } from '../lib/autoScroll.js';
import Icon from './Icons.jsx';
import { createAmbientBackground } from '../lib/ambientPattern.js';

// The artwork generator is costly when hundreds of SVG backgrounds are encoded.
// Generate once per tile identity, only when the tile enters the viewport.
const artworkCache = new Map();
function artworkFor(id) {
  if (!artworkCache.has(id)) {
    if (artworkCache.size > 900) artworkCache.delete(artworkCache.keys().next().value);
    artworkCache.set(id, createAmbientBackground(id));
  }
  return artworkCache.get(id);
}

const ArchiveTile = memo(function ArchiveTile({ tile, onOpen, lang }) {
  const { entry, pixels, x, y, decorative } = tile;
  const tone = tile.globalModuleIndex ?? tile.moduleIndex ?? tile.row ?? 0;
  const style = {
    '--tile-x': `${x}px`, '--tile-y': `${y}px`, '--tile-size': `${pixels}px`,
    '--tile-image': entry ? `url("${entry.image}")` : undefined,
    '--tile-tone': `var(--tile-tone-${Math.abs(tone) % 6})`,
    ...(decorative ? { '--ambient-art': artworkFor(tile.id) } : {}),
  };
  if (decorative) {
    return <div className="mosaic-tile mosaic-tile--ambient" style={style} aria-hidden="true" />;
  }
  const title = lang === 'ar' ? entry.titleAr || entry.title : entry.title;
  const category = lang === 'ar' ? entry.categoryAr || entry.category : entry.category;
  return (
    <button type="button"
      className={`mosaic-tile mosaic-tile--entry ${entry.sample ? 'mosaic-tile--sample' : ''} ${tile.compact ? 'mosaic-tile--responsive' : tile.size === 1 ? 'mosaic-tile--tiny' : ''}`}
      style={style} onClick={event => onOpen(entry, event.currentTarget)}
      data-side={tile.side} data-entry-id={entry.id} title={title}
      aria-label={`${title}${entry.sample ? ' — sample' : ''}`}>
      <span className="tile-visual" aria-hidden="true" />
      <span className="tile-content">
        <span className="tile-category">{entry.sample ? '◇ ' : '✦ '}{category}</span>
        <span className="tile-title">{title}</span>
        <span className="tile-corner"><Icon name="upRight" size={14}/></span>
      </span>
    </button>
  );
});

export default function ArchiveMosaic({ entries, viewport, archive, lang, onOpen, layoutSeed = 1 }) {
  const scrollRef = useRef(null);
  const pauseUntil = useRef(0);
  const lastTime = useRef(0);
  const scrollState = useRef(initialAutoScrollState());
  const [viewTop, setViewTop] = useState(0);
  const layout = useMemo(() => layoutMosaic(entries, viewport, archive, layoutSeed), [entries, viewport.width, viewport.height, archive, layoutSeed]);
  const viewportHeight = viewport.height;

  const syncWindow = useCallback((force = false) => {
    const top = scrollRef.current?.scrollTop ?? 0;
    // Recalculate the visible set only after crossing a 120px bucket.
    const bucket = Math.floor(top / 120) * 120;
    setViewTop(previous => force || previous !== bucket ? bucket : previous);
  }, []);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;
    element.scrollTop = 0;
    syncWindow(true);
    lastTime.current = 0;
    scrollState.current = initialAutoScrollState();
    pauseUntil.current = performance.now() + SCROLL_RESUME_DELAY_MS;
  }, [archive, layout.metrics.compact, syncWindow]);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pause = () => {
      pauseUntil.current = performance.now() + SCROLL_RESUME_DELAY_MS;
      // Allow manual scrolling to take precedence, even during the quick rewind.
      scrollState.current = { ...initialAutoScrollState(), position: element.scrollTop };
    };
    const scroll = () => syncWindow();
    const hoverEntry = event => {
      if (event.target.closest?.('.mosaic-tile--entry')) pause();
    };
    element.addEventListener('wheel', pause, { passive: true });
    element.addEventListener('touchstart', pause, { passive: true });
    element.addEventListener('pointerdown', pause, { passive: true });
    element.addEventListener('pointerover', hoverEntry, { passive: true });
    element.addEventListener('focusin', pause);
    element.addEventListener('scroll', scroll, { passive: true });
    // ~25 fps is enough for this slow motion and avoids a 60 fps React workload.
    const timer = window.setInterval(() => {
      const time = performance.now();
      const delta = lastTime.current ? Math.min(time - lastTime.current, 100) : 0;
      lastTime.current = time;
      if (document.hidden || reduce.matches || time < pauseUntil.current) return;
      const max = element.scrollHeight - element.clientHeight;
      if (max <= 40) return;
      const next = advanceAutoScroll(
        { ...scrollState.current, position: element.scrollTop }, delta, max
      );
      scrollState.current = next;
      element.scrollTop = next.position;
    }, 40);
    return () => {
      window.clearInterval(timer);
      element.removeEventListener('wheel', pause);
      element.removeEventListener('touchstart', pause);
      element.removeEventListener('pointerdown', pause);
      element.removeEventListener('pointerover', hoverEntry);
      element.removeEventListener('focusin', pause);
      element.removeEventListener('scroll', scroll);
    };
  }, [syncWindow]);

  const visible = useMemo(() => visibleMosaicTiles(layout.tiles, viewTop, viewportHeight), [layout.tiles, viewTop, viewportHeight]);
  return (
    <div ref={scrollRef}
      className={`mosaic-scroll ${archive ? 'mosaic-scroll--archive' : ''} ${layout.metrics.compact ? 'mosaic-scroll--compact' : ''}`}
      aria-label="Interactive archive collage">
      <div className="mosaic-plane" style={{ height: `${layout.contentHeight}px` }}>
        {visible.map(tile => <ArchiveTile key={tile.id} tile={tile} onOpen={onOpen} lang={lang} />)}
      </div>
    </div>
  );
}

````

### `portfolio-autoscroll-cycle-replacements.zip` → `tests/autoScroll.test.js`

````javascript
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  advanceAutoScroll, initialAutoScrollState,
  SCROLL_RESUME_DELAY_MS, SCROLL_SPEED_PX_PER_MS, REWIND_DURATION_MS,
} from '../src/lib/autoScroll.js';

test('resume delay is two seconds and down-scroll is 33% faster', () => {
  assert.equal(SCROLL_RESUME_DELAY_MS, 2000);
  assert.ok(Math.abs(SCROLL_SPEED_PX_PER_MS - 0.019 * (4 / 3)) < 1e-12);
  const moved = advanceAutoScroll(initialAutoScrollState(), 100, 500);
  assert.equal(moved.phase, 'down');
  assert.ok(Math.abs(moved.position - 100 * SCROLL_SPEED_PX_PER_MS) < 1e-9);
});

test('scrolls downward, rewinds quickly at the bottom, and resumes downward', () => {
  let state = { ...initialAutoScrollState(), position: 498 };
  state = advanceAutoScroll(state, 100, 500);
  assert.equal(state.position, 500);
  assert.equal(state.phase, 'rewind');
  state = advanceAutoScroll(state, 100, 500);
  assert.ok(state.position < 500 && state.position > 0);
  for (let t = 100; t < REWIND_DURATION_MS; t += 100) state = advanceAutoScroll(state, 100, 500);
  assert.deepEqual(state, initialAutoScrollState());
  state = advanceAutoScroll(state, 40, 500);
  assert.equal(state.phase, 'down');
  assert.ok(state.position > 0);
});

test('never runs backward during the default phase', () => {
  let state = initialAutoScrollState();
  for (let i = 0; i < 1000; i++) {
    const next = advanceAutoScroll(state, 40, 800);
    if (state.phase === 'down' && next.phase === 'down') assert.ok(next.position >= state.position);
    state = next;
  }
});

test('clamps elapsed time, handles short archives and viewport changes', () => {
  let state = advanceAutoScroll(initialAutoScrollState(), 10000, 500);
  assert.ok(state.position <= 100 * SCROLL_SPEED_PX_PER_MS + 1e-9);
  state = advanceAutoScroll({ ...initialAutoScrollState(), position: 600 }, 40, 350);
  assert.ok(state.position <= 350);
  state = advanceAutoScroll(state, 40, 20);
  assert.equal(state.phase, 'down');
  assert.ok(state.position <= 20);
});

````

### `portfolio-content-replacements.zip` → `src/styles/global.css`

````css
:root {
  font-family: 'DM Sans', 'Segoe UI', Arial, sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  --world: #161b20;
  --world-grid: rgba(239, 229, 211, .035);
  --paper: #f0ede6;
  --paper-soft: #e7e1d7;
  --ink: #232823;
  --muted: #78786f;
  --lede-color: #6b7169;
  --paper-line: #cbc7bc;
  --accent: #777157;
  --tile-outline: rgba(246, 238, 219, .64);
  --tile-tone-0: #263d3e;
  --tile-tone-1: #59483c;
  --tile-tone-2: #35495a;
  --tile-tone-3: #565042;
  --tile-tone-4: #493d48;
  --tile-tone-5: #434c44;
}
:root[data-theme="dark"] {
  --world: #090e14;
  --world-grid: rgba(226, 234, 244, .035);
  --paper: #21272b;
  --paper-soft: #2b3236;
  --ink: #eeeae1;
  --muted: #a2aaa6;
  --lede-color: #909995;
  --paper-line: #47504f;
  --accent: #d1b99a;
  --tile-outline: rgba(233, 239, 239, .48);
}
* { box-sizing: border-box; }
html, body, #root { min-width: 280px; min-height: 100%; margin: 0; }
html { overflow: hidden; }
body { background: var(--world); color: var(--ink); }
button, a { -webkit-tap-highlight-color: transparent; }
button { font: inherit; }
button:focus-visible, a:focus-visible { outline: 2px solid #89adc1; outline-offset: 3px; }
a { color: inherit; }
.site-shell { width: 100%; min-height: 100svh; isolation: isolate; background: var(--world); overflow: hidden; }
.site-grain { pointer-events: none; position: fixed; inset: 0; z-index: 5; opacity: .3; background-image: repeating-linear-gradient(90deg,transparent 0, transparent 31px, var(--world-grid) 32px), repeating-linear-gradient(0deg,transparent 0, transparent 31px, var(--world-grid) 32px); }
/* The mosaic remains scrollable under the independently scrolling portfolio. */
.mosaic-scroll { position: fixed; inset: 0; overflow-y: auto; overflow-x: hidden; overscroll-behavior: contain; scrollbar-width: none; background: var(--world); }
.mosaic-scroll::-webkit-scrollbar, .portfolio-panel::-webkit-scrollbar { display: none; }
.mosaic-plane { position: relative; width: 100%; min-height: 100%; }
.mosaic-tile { appearance: none; position: absolute; top: 0; left: 0; padding: 0; margin: 0; width: var(--tile-size); height: var(--tile-size); display: block; overflow: hidden; border-radius: 0; border: 1px solid var(--tile-outline); transform: translate3d(var(--tile-x), var(--tile-y), 0); transition: transform .82s cubic-bezier(.23,.87,.24,1), width .82s cubic-bezier(.23,.87,.24,1), height .82s cubic-bezier(.23,.87,.24,1), border-color .22s ease, opacity .3s ease; will-change: transform; background: var(--tile-tone); }
.mosaic-tile--entry { cursor: pointer; text-align: left; color: #faf7f0; z-index: 1; }
.mosaic-tile--entry:hover, .mosaic-tile--entry:focus-visible { z-index: 3; border-color: #f9e5c9; }
.tile-visual { position: absolute; inset: 0; display: block; background-image: var(--tile-image); background-position: center; background-size: cover; transform: scale(1.005); transition: transform .4s cubic-bezier(.2,.75,.2,1), filter .25s; filter: saturate(.76) brightness(.86); }
.tile-visual::after { content: ''; position: absolute; inset: 0; background: linear-gradient(0deg, rgba(5,11,16,.87),rgba(5,11,16,.06) 70%); }
.mosaic-tile--entry:hover .tile-visual, .mosaic-tile--entry:focus-visible .tile-visual { transform: scale(1.085); filter: saturate(1) brightness(1.06); }
.tile-content { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end; padding: clamp(8px, 1.35vw, 20px); text-shadow: 0 1px 12px #06090fb0; }
.tile-category { display: block; font-size: clamp(7px, .65vw, 10px); letter-spacing: .13em; line-height: 1.2; text-transform: uppercase; font-weight: 600; opacity: .78; margin-bottom: 7px; }
.tile-title { font: normal clamp(13px, 1.55vw, 25px)/1.06 'Instrument Serif', Georgia, serif; max-width: 95%; }
.tile-corner { position: absolute; top: 10px; right: 9px; opacity: 0; transform: translate(-3px,3px); transition: opacity .2s, transform .2s; }
.mosaic-tile:hover .tile-corner, .mosaic-tile:focus-visible .tile-corner { opacity: 1; transform: none; }
.mosaic-tile--sample .tile-category { color: #e8d7b7; }
.mosaic-tile--tiny .tile-content { padding: 5px; }
.mosaic-tile--tiny .tile-title, .mosaic-tile--tiny .tile-category { font: 8px/1.2 'DM Mono', monospace; letter-spacing: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.mosaic-tile--tiny .tile-category { display: none; }
.mosaic-tile--ambient { border-color: rgba(240, 231, 214, .23); pointer-events: none; }
.mosaic-tile--ambient::after { content: ''; position: absolute; inset: 0; background: linear-gradient(140deg, rgba(255,255,255,.12),transparent 55%,rgba(0,0,0,.28)); }
.ambient-0 { background: repeating-linear-gradient(45deg,#333b3f 0 14px,#313337 14px 16px); }
.ambient-1 { background: radial-gradient(circle at 55% 45%,#7f7268 0 10%,transparent 10.3%),radial-gradient(circle,#41393b,#2b3039); }
.ambient-2 { background: repeating-linear-gradient(90deg,#314044 0 17px,#33444a 17px 18px); }
.ambient-3 { background: radial-gradient(circle at 100% 0,#79735d,transparent 67%),#2c3439; }
.ambient-4 { background: repeating-linear-gradient(0deg,#353340 0 20px,#6b5d5d 20px 21px); }
.ambient-5 { background: radial-gradient(circle at 50% 50%,transparent 0 20%,#596266 20.5% 21%,transparent 21.5% 35%,#596266 35.5% 36%,transparent 36.5%),#344046; }
.ambient-mark { width: 30%; height: 30%; border: 1px solid #eee8d01d; position: absolute; left: 35%; top: 35%; transform: rotate(45deg); }
.panel-shadow { position: fixed; z-index: 6; top: 0; bottom: 0; left: 50%; transform: translateX(-50%); width: var(--panel-width, min(600px,max(468px,43vw))); box-shadow: 0 25px 95px #05080da8,0 0 0 1px rgba(255,255,255,.1); pointer-events: none; transition: opacity .4s, transform .6s; }
.site-shell--archive .panel-shadow { opacity: 0; transform: translateX(-50%) translateY(50px) scale(.94); }
.portfolio-panel { position: fixed; z-index: 7; top: 0; bottom: 0; left: 50%; transform: translateX(-50%); width: var(--panel-width, min(600px,max(468px,43vw))); overflow-y: auto; overscroll-behavior: contain; scrollbar-width: none; padding: 27px clamp(25px,3.1vw,49px) 16px; background: var(--paper); color: var(--ink); border: 1px solid var(--paper-line); box-shadow: 0 0 0 1px rgba(0,0,0,.06); transition: transform .63s cubic-bezier(.25,.72,.15,1), opacity .45s ease; }
.portfolio-panel--hidden { opacity: 0; transform: translateX(-50%) translateY(72px) scale(.9); pointer-events: none; }
.panel-heading { display:flex; align-items:center; justify-content:space-between; gap:10px; padding-bottom: 27px; border-bottom:1px solid var(--paper-line); }
.panel-monogram { border:0; background:transparent; color:var(--ink); padding:0; font:bold 27px 'Instrument Serif',Georgia,serif; cursor:pointer; }
.panel-monogram span { color: var(--accent); }
.panel-label,.panel-index,.micro-label,.number-label,.panel-footer,.portrait-credit,.source-disclosure { font: 500 9px/1.3 'DM Mono',monospace; letter-spacing:.12em; }
.panel-label { color:var(--muted); }
.tiny-asterisk { color: var(--accent); font-size: 16px; vertical-align:-2px; }
.panel-index { color:var(--muted); }
.intro-section { padding-top: 49px; }
.micro-label,.number-label { display:block; color:var(--muted); }
.hero-intro { display:flex; align-items:flex-end; gap:18px; margin-top:27px; }
.hero-copy { min-width:0; flex:1; }
.hero-greeting { font:italic 26px 'Instrument Serif',Georgia,serif; }
.hero-copy h1 { margin:10px 0 0; font:normal clamp(34px,3.65vw,52px)/1.02 'Instrument Serif',Georgia,serif; letter-spacing:-.035em; white-space:normal; }
.hero-copy h1 em, .editorial-block h2 em,.view-title em { font-weight:400; color:var(--accent); }
.hero-rule { width:45px; height:1px; background:var(--accent); margin:18px 0; }
.hero-role { font-size:11px; font-weight:700; letter-spacing:.09em; text-transform:uppercase; margin:0 0 8px; }
.hero-description { font-size:12px; line-height:1.7; color:var(--muted); margin:0; }
.portrait-frame { width: 32%; flex:none; aspect-ratio: .77; display:flex; flex-direction:column; align-self:center; position:relative; }
.portrait-frame img { display:block; width:100%; height:100%; object-fit:cover; object-position:center 34%; filter:saturate(.72); border:1px solid var(--paper-line); }
.portrait-credit { position:absolute; bottom:-17px; left:0; color:var(--muted); white-space:nowrap; font-size:7px; }
.hero-actions { display:flex; flex-wrap:wrap; gap:9px; margin-top:39px; }
.pill-link { text-decoration:none; display:inline-flex; align-items:center; justify-content:center; gap:12px; border:1px solid var(--ink); border-radius:100px; padding:11px 14px; font-size:11px; font-weight:600; cursor:pointer; transition:transform .18s,background .18s,color .18s; }
.pill-link:hover { transform:translateY(-2px); }
.pill-link:active { transform:scale(.96); }
.pill-link--dark { background:var(--ink); color:var(--paper); }
.pill-link--outline { background:transparent; color:var(--ink); }
.pill-link--outline:hover { background:var(--paper-soft); }
.editorial-block { margin-top:66px; padding-top:23px; border-top:1px solid var(--paper-line); }
.section-heading { display:flex; align-items:center; justify-content:space-between; gap:10px; }
.section-star { color:var(--accent); }
.editorial-block h2 { margin:22px 0 20px; font:normal clamp(38px,4vw,56px)/.97 'Instrument Serif',Georgia,serif; letter-spacing:-.02em; }
.editorial-block p,.body-copy { color:var(--muted); font-size:13px; line-height:1.85; letter-spacing:.018em; max-width:52ch; }
.ink-divider { width:100%; height:1px; background:var(--paper-line); margin:27px 0 22px; }
.feature-links { margin-top:13px; }
.feature-link { display:flex; justify-content:space-between; align-items:center; gap:12px; width:100%; padding:13px 0; background:none; color:var(--ink); border:0; border-bottom:1px solid var(--paper-line); text-align:start; cursor:pointer; font:normal 20px/1.2 'Instrument Serif',Georgia,serif; }
.feature-link:hover { color:var(--accent); }
.feature-number { font:9px 'DM Mono',monospace; color:var(--muted); margin-inline-end:auto; min-width:28px; }
.feature-link > svg:last-child { margin-inline-start:auto; }
.editorial-block--bottom { padding-bottom:40px; }
.inline-arrow { display:inline-flex;align-items:center;gap:9px;padding:0;border:0;background:none;color:var(--ink);font-size:12px;font-weight:600;text-decoration:none;cursor:pointer; }
.inline-arrow:hover { color:var(--accent); }
.inner-view { padding-top:51px; min-height:65%; }
.view-title { font:normal clamp(44px,5vw,72px)/.97 'Instrument Serif',Georgia,serif; letter-spacing:-.025em; margin:23px 0 19px; }
.view-lede { max-width:45ch; color:var(--lede-color); font-size:clamp(16px,1.4vw,18px); font-weight:400; line-height:1.66; letter-spacing:.012em; margin:0 0 39px; }
.project-list { border-top:1px solid var(--paper-line); }
.project-row { width:100%; padding:17px 0; display:flex; align-items:center; gap:12px; border:0; border-bottom:1px solid var(--paper-line); background:none; text-align:start; color:var(--ink); cursor:pointer; }
.project-row:hover .project-row-description strong { color:var(--accent); }
.project-row img { width:68px;height:68px;object-fit:cover;border:1px solid var(--paper-line); }
.project-row-number { font:9px 'DM Mono',monospace;color:var(--muted); }
.project-row-description { flex:1; min-width:0;display:flex;flex-direction:column;gap:7px; }
.project-row-description strong { font:normal 24px 'Instrument Serif',Georgia,serif; }
.project-row-description small { color:var(--muted);font:9px 'DM Mono',monospace; }
.source-disclosure { margin:24px 0;line-height:1.7;color:var(--muted);letter-spacing:0; }
.editorial-illustration,.entry-hero-image { display:block;width:100%;aspect-ratio:1.55;object-fit:cover;border:1px solid var(--paper-line); }
.subheading { font:normal 33px 'Instrument Serif',Georgia,serif;margin:34px 0 12px; }
.contact-options { display:grid; gap:10px; margin:38px 0 25px; }
.fine-print { color:var(--muted);font-size:11px;line-height:1.7; }
.sample-alert { margin-top:18px; padding:10px 12px; background:var(--paper-soft);border-left:2px solid var(--accent);font-size:10px;font-weight:700;letter-spacing:.06em; }
.entry-view .view-title { overflow-wrap:anywhere; }
.entry-figure { margin:0 0 22px; }
.entry-caption { margin-top:17px; font-size:10px; letter-spacing:.16em; line-height:1.5; }
.entry-links,.writing-resource-list { display:grid; gap:10px; margin:27px 0 24px; }
.resource-link { width:100%; min-height:66px; display:flex; align-items:center; justify-content:space-between; gap:14px; padding:15px 16px 15px 18px; background:transparent; color:var(--ink); border:1px solid var(--paper-line); border-radius:2px; text-decoration:none; text-align:start; cursor:pointer; font:600 clamp(14px,1.25vw,17px)/1.4 'DM Sans','Segoe UI',Arial,sans-serif; letter-spacing:.018em; transition:background .2s,border-color .2s,transform .2s; }
.resource-link:hover { background:var(--paper-soft); border-color:var(--accent); transform:translateY(-2px); }
.resource-link:active { transform:translateY(0); }
.resource-link-icon { width:36px; height:36px; flex:none; display:grid; place-items:center; border:1px solid var(--paper-line); border-radius:2px; transition:transform .2s,border-color .2s; }
.resource-link:hover .resource-link-icon, .resource-link:focus-visible .resource-link-icon { transform:translate(2px,-2px); border-color:var(--accent); }
[dir="rtl"] .resource-link:hover .resource-link-icon, [dir="rtl"] .resource-link:focus-visible .resource-link-icon { transform:translate(-2px,-2px); }
.entry-view .pill-link { margin-top:28px; }
.panel-footer { margin-top:58px; padding:20px 0 26px; border-top:1px solid var(--paper-line);display:flex;justify-content:space-between;gap:15px;color:var(--muted);font-size:8px;letter-spacing:.02em; }
/* The toolbar is transparent: the collage always extends behind it. */
.floating-controls { position:fixed;z-index:45;top:24px;right:26px;display:flex;align-items:center;gap:14px;pointer-events:none; }
.orb-button { width:46px;height:46px;display:grid;place-items:center;position:relative;pointer-events:auto; border-radius:50%; border:1px solid rgba(237,237,231,.58);color:#f6f1e7;background:rgba(23,29,35,.68);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);cursor:pointer;box-shadow:0 3px 17px rgba(0,0,0,.22);transition:transform .2s cubic-bezier(.2,.8,.2,1),background .2s,border-color .2s,box-shadow .2s; }
.orb-button:hover { transform:scale(1.1);background:rgba(58,68,74,.9);border-color:#f5ead7;box-shadow:0 4px 24px rgba(0,0,0,.35); }
.orb-button:active { transform:scale(.92); }
.orb-button.is-active { background:#e8e0d1;color:#1c2529;border-color:#fff8ea; }
.language-button span:first-child { font:500 12px 'DM Mono',monospace; }
.orb-tooltip { position:absolute;right:50%;top:calc(100% + 10px);transform:translate(50%,-4px);white-space:nowrap;max-width:190px;pointer-events:none;opacity:0;border-radius:4px;background:#f2eadf;color:#252626;font-size:10px;padding:6px 9px;transition:opacity .2s,transform .2s; }
.orb-button:hover .orb-tooltip,.orb-button:focus-visible .orb-tooltip { opacity:1;transform:translate(50%,0); }
.archive-demo-dock { position:fixed;z-index:46;left:24px;bottom:24px;max-width:calc(100% - 48px);display:flex;gap:18px;align-items:center;padding:12px 13px 12px 16px;color:#e8e6df;background:rgba(17,23,29,.9);border:1px solid rgba(248,244,231,.35);backdrop-filter:blur(16px);box-shadow:0 10px 40px #0007; }
.dock-copy { display:flex;flex-direction:column;gap:5px;font-size:10px;color:#d3d4d0; }
.dock-kicker { letter-spacing:.1em;font-size:9px;text-transform:uppercase;font-weight:700;color:#eae9e4; }
.dock-hint { color:#aab3b4; }
.dock-actions { display:flex;gap:6px; }
.dock-actions button { width:48px;height:34px;display:flex;align-items:center;justify-content:center;gap:2px;border:1px solid #ffffff60;background:#ffffff0e;color:#faf7f0;cursor:pointer; }
.dock-actions button:hover { background:#ffffff2b; }
.dock-actions button:disabled { opacity:.3;cursor:default; }
.dock-actions button span { font-size:11px; }
.transition-layer { position:fixed;z-index:90;inset:0;pointer-events:none;overflow:hidden; }
.transition-image { position:fixed;left:var(--origin-x);top:var(--origin-y);width:var(--origin-width);height:var(--origin-height);background-image:linear-gradient(0deg,rgba(8,13,17,.55),rgba(8,13,17,.26)),var(--transition-image);background-position:center;background-size:cover;box-shadow:0 0 0 2px #f2e5d0;transition:left .42s cubic-bezier(.2,.74,.12,1),top .42s cubic-bezier(.2,.74,.12,1),width .42s cubic-bezier(.2,.74,.12,1),height .42s cubic-bezier(.2,.74,.12,1),opacity .32s;display:grid;place-items:center; }
.transition-title { opacity:0;color:#f5ede3;font:normal clamp(34px,6vw,84px) 'Instrument Serif',Georgia,serif;letter-spacing:-.04em;text-align:center;transition:opacity .18s .18s; }
.transition-layer--zoom .transition-image,.transition-layer--reveal .transition-image { left:-3vw;top:-3vh;width:106vw;height:106vh; }
.transition-layer--zoom .transition-title { opacity:1; }
.transition-layer--reveal { opacity:0;transition:opacity .30s ease; }
.transition-wash { position:absolute;inset:0;background:#efe7d8;opacity:0;transition:opacity .35s ease; }
.transition-layer--zoom .transition-wash { opacity:.1; }
/* Narrow screens retain a readable paper column and two square-only side streams.
   The same achievement buttons join a grid when Archive Mode opens. */
.mosaic-scroll--compact:not(.mosaic-scroll--archive) { overflow: hidden; }
.mosaic-scroll--compact:not(.mosaic-scroll--archive) .mosaic-tile[data-side="left"] {
  animation: mosaic-stream-left 27s ease-in-out infinite alternate;
}
.mosaic-scroll--compact:not(.mosaic-scroll--archive) .mosaic-tile[data-side="right"] {
  animation: mosaic-stream-right 31s ease-in-out infinite alternate;
}
@keyframes mosaic-stream-left { from { translate: 0 0; } to { translate: 0 var(--stream-negative); } }
@keyframes mosaic-stream-right { from { translate: 0 0; } to { translate: 0 var(--stream-positive); } }
.mosaic-scroll--compact.mosaic-scroll--archive { overflow-y: auto; overflow-x: hidden; }
.mosaic-scroll--archive .mosaic-tile--concealed { opacity: 0; pointer-events: none; }
.mosaic-scroll--compact .mosaic-tile--responsive .tile-title {
  font: normal clamp(15px, 2.5vw, 26px)/1.1 'Instrument Serif', Georgia, serif;
  white-space: normal;
}
.mosaic-scroll--compact .mosaic-tile--responsive .tile-category { font-size: 9px; }
.mosaic-scroll--compact:not(.mosaic-scroll--archive) .tile-content { opacity: .65; }
.mosaic-scroll--compact.mosaic-scroll--archive .tile-content { padding: clamp(10px, 2.3vw, 18px); }
.site-shell--compact .portfolio-panel,
.site-shell--compact .panel-shadow { top: 0; bottom: 0; }
.site-shell--compact .portfolio-panel {
  padding: max(76px, calc(env(safe-area-inset-top, 0px) + 63px)) clamp(17px, 3vw, 30px) 18px;
}
.site-shell--compact .floating-controls {
  top: max(12px, env(safe-area-inset-top, 0px));
  right: max(12px, env(safe-area-inset-right, 0px));
  gap: 10px;
}
.site-shell--compact .orb-button { width: 44px; height: 44px; }
.site-shell--compact .orb-tooltip { display: none; }
.site-shell--compact .archive-demo-dock {
  left: max(10px, env(safe-area-inset-left, 0px));
  bottom: max(10px, env(safe-area-inset-bottom, 0px));
  max-width: calc(100% - 20px);
}
@media (max-width: 1100px) { .panel-label { font-size:8px; } .portrait-frame { width:30%; } }
@media (max-width: 720px) {
  .portfolio-panel,.panel-shadow { top:0;bottom:0; }
  .portfolio-panel { padding: max(76px, calc(env(safe-area-inset-top, 0px) + 63px)) 23px 15px; }
  .panel-heading { padding-bottom:18px; }
  .floating-controls { top:max(12px, env(safe-area-inset-top, 0px));right:max(12px, env(safe-area-inset-right, 0px));gap:10px; }
  .orb-button { width:44px;height:44px; }
  .intro-section { padding-top:33px; }
  .hero-intro { gap:15px; }
  .hero-copy h1 { font-size:clamp(34px,8.2vw,55px); }
  .portrait-frame { width:32%; }
  .hero-greeting { font-size:24px; }
  .hero-description { font-size:12px; }
  .editorial-block { margin-top:48px; }
  .editorial-block h2 { font-size:clamp(38px,9vw,52px); }
  .view-lede { font-size:16px; line-height:1.7; margin-bottom:32px; }
  .resource-link { min-height:60px; padding:12px 13px; font-size:15px; }
  .resource-link-icon { width:32px; height:32px; }
  .archive-demo-dock { bottom:13px;left:13px;max-width:calc(100% - 26px);padding:9px 10px;gap:10px; }
  .dock-hint { display:none; }
  .dock-actions button { width:38px;height:34px; }
}
@media (max-width: 380px) {
  .hero-intro { flex-wrap:wrap; }
  .hero-copy { flex-basis: 100%; }
  .portrait-frame { width:104px;aspect-ratio:.77;position:relative;right:auto;top:auto;opacity:1; }
  .hero-description { max-width:26ch; }
  .portfolio-panel { padding:78px 17px 14px; }
  .panel-label { font-size:7px; }
}
@media (prefers-reduced-motion: reduce) {
  .mosaic-scroll--compact .mosaic-tile { animation: none !important; translate: 0 0 !important; }
  *,*::before,*::after { animation-duration:.01ms!important;transition-duration:.01ms!important;scroll-behavior:auto!important; }
}

````

### `portfolio-content-replacements.zip` → `src/components/PortfolioPanel.jsx`

````jsx
import React, { useEffect, useRef } from 'react';
import Icon from './Icons.jsx';

function InternalLink({ children, href, onNavigate, className = 'text-link', item = null }) {
  return <button type="button" className={className} onClick={(e) => onNavigate(href, e.currentTarget, item)}>{children}</button>;
}

function ExternalResourceLink({ href, children }) {
  return (
    <a className="resource-link" href={href} target="_blank" rel="noopener noreferrer">
      <span>{children}</span>
      <span className="resource-link-icon"><Icon name="upRight" size={18}/></span>
    </a>
  );
}

function PanelHeader({ t, onNavigate, pathname }) {
  return (
    <div className="panel-heading">
      <InternalLink className="panel-monogram" href="/" onNavigate={onNavigate}>
        M<span>.</span>
      </InternalLink>
      <span className="panel-label">PERSONAL ARCHIVE <span className="tiny-asterisk">✳</span> 2026</span>
      <span className="panel-index">{pathname === '/' ? '01' : pathname === '/projects' ? '02' : pathname === '/writing' ? '03' : pathname === '/contact' ? '04' : '✦'}</span>
    </div>
  );
}

function HomeView({ t, onNavigate, entries }) {
  return <>
    <section className="intro-section">
      <span className="micro-label">{t.introKicker}</span>
      <div className="hero-intro">
        <div className="hero-copy">
          <span className="hero-greeting">{t.greeting}</span>
          <h1>Marwan<br/><em>Al-Hamdan.</em></h1>
          <div className="hero-rule" />
          <p className="hero-role">{t.occupation}</p>
          <p className="hero-description">{t.lead}</p>
        </div>
        <div className="portrait-frame">
          <img src="/portrait.png" alt="Portrait supplied with the original portfolio" />
          <span className="portrait-credit">FIG. 01 / PORTRAIT</span>
        </div>
      </div>
      <div className="hero-actions">
        <InternalLink className="pill-link pill-link--dark" href="/projects" onNavigate={onNavigate}>{t.seeWork} <Icon name="upRight" size={15}/></InternalLink>
        <InternalLink className="pill-link pill-link--outline" href="/writing" onNavigate={onNavigate}>{t.writing} <Icon name="arrow" size={15}/></InternalLink>
        <InternalLink className="pill-link pill-link--outline" href="/contact" onNavigate={onNavigate}>{t.contact} <Icon name="upRight" size={15}/></InternalLink>
      </div>
    </section>
    <section className="editorial-block">
      <div className="section-heading"><span className="number-label">01 / A NOTE ON CURIOSITY</span><span className="section-star">✳</span></div>
      <h2>Between code<br/>and <em>curiosity.</em></h2>
      <p>{t.discover} I enjoy finding the connections between the things I study, build and read.</p>
      <div className="ink-divider" />
      <span className="number-label">02 / {t.myWork.toUpperCase()}</span>
      <div className="feature-links">
        {entries.slice(0, 3).map((item, i) => (
          <InternalLink key={item.id} href={`/archive/${item.id}`} onNavigate={onNavigate} item={item} className="feature-link">
            <span className="feature-number">0{i + 1}</span><span>{item.title}</span><Icon name="upRight" size={16}/>
          </InternalLink>
        ))}
      </div>
    </section>
    <section className="editorial-block editorial-block--bottom">
      <div className="section-heading"><span className="number-label">03 / {t.readingNext.toUpperCase()}</span></div>
      <h2>The library<br/>of <em>ideas.</em></h2>
      <p>{t.readingBody}</p>
      <InternalLink className="resource-link" href="/writing" onNavigate={onNavigate}>
        <span>{t.writing}</span><span className="resource-link-icon"><Icon name="arrow" size={18}/></span>
      </InternalLink>
    </section>
  </>;
}

function ProjectsView({ t, onNavigate, entries, lang }) {
  const items = entries.filter((e) => !e.sample && ['portfolio-website', 'ecommerce', 'mobile-ui', 'dashboard'].includes(e.id));
  return <section className="inner-view">
    <span className="micro-label">02 / {t.projects.toUpperCase()}</span>
    <h1 className="view-title">Things <em>built.</em></h1>
    <p className="view-lede">{t.workLead}</p>
    <div className="project-list">
      {items.map((item, index) => <InternalLink key={item.id} href={`/archive/${item.id}`} onNavigate={onNavigate} item={item} className="project-row">
        <span className="project-row-number">0{index + 1}</span>
        <img src={item.image} alt="" />
        <span className="project-row-description"><strong>{lang === 'ar' ? item.titleAr || item.title : item.title}</strong><small>{item.meta}</small></span>
        <Icon name="upRight" size={18}/>
      </InternalLink>)}
    </div>
    <div className="source-disclosure">{t.sourceBadge} · Illustrations are not screenshots.</div>
  </section>;
}

function WritingView({ t, onNavigate, entries, lang }) {
  return <section className="inner-view">
    <span className="micro-label">03 / {t.writing.toUpperCase()}</span>
    <h1 className="view-title">Words &<br/><em>worlds.</em></h1>
    <p className="view-lede">{t.writingLead}</p>
    <img className="editorial-illustration" src="/art/reading.svg" alt="Abstract illustration of books and reading" />
    <h2 className="subheading">{t.readingTitle}</h2>
    <p className="body-copy">{t.readingBody}</p>
    <div className="writing-resource-list">
      <InternalLink className="resource-link" href="/archive/writing" onNavigate={onNavigate} item={entries.find(e => e.id === 'writing')}>
        <span>Poetry & Essays</span><span className="resource-link-icon"><Icon name="arrow" size={18}/></span>
      </InternalLink>
      <ExternalResourceLink href="https://marwanpgx.substack.com/">Substack</ExternalResourceLink>
    </div>
  </section>;
}

function ContactView({ t }) {
  return <section className="inner-view contact-view">
    <span className="micro-label">04 / {t.contact.toUpperCase()}</span>
    <h1 className="view-title">Let's make<br/><em>something.</em></h1>
    <p className="view-lede">{t.reachLead}</p>
    <div className="contact-options">
      <ExternalResourceLink href="https://www.linkedin.com/in/marwan-al-hamdan-a64043331/">LinkedIn</ExternalResourceLink>
      <ExternalResourceLink href="https://marwanpgx.substack.com/">Substack</ExternalResourceLink>
    </div>
    <p className="fine-print">{t.note}</p>
  </section>;
}

function EntryView({ entry, t, lang, onNavigate }) {
  if (!entry) return <section className="inner-view"><h1 className="view-title">Not found.</h1><InternalLink href="/" onNavigate={onNavigate} className="inline-arrow"><Icon name="back" size={18}/> {t.back}</InternalLink></section>;
  const title = lang === 'ar' ? entry.titleAr || entry.title : entry.title;
  const summary = lang === 'ar' ? entry.summaryAr || entry.summary : entry.summary;
  return <article className="entry-view inner-view">
    <span className="micro-label">ARCHIVE / {entry.category.toUpperCase()}</span>
    {entry.sample && <div className="sample-alert">{t.sampleBadge}</div>}
    <h1 className="view-title">{title}</h1>
    <p className="view-lede">{summary}</p>
    <figure className="entry-figure">
      <img src={entry.image} className="entry-hero-image" alt={`Illustrative artwork for ${entry.title}`} />
      <figcaption className="entry-caption number-label">{entry.meta}</figcaption>
    </figure>
    <p className="body-copy">{entry.body}</p>
    {entry.links?.length > 0 && <div className="entry-links">{entry.links.map(link => <ExternalResourceLink key={link.href} href={link.href}>{link.label}</ExternalResourceLink>)}</div>}
    <InternalLink href="/" onNavigate={onNavigate} className="pill-link pill-link--outline"><Icon name="back" size={16}/> {t.back}</InternalLink>
  </article>;
}

export default function PortfolioPanel({ pathname, archive, entries, t, lang, onNavigate }) {
  const scrollRef = useRef(null);
  useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = 0; }, [pathname]);
  const entry = pathname.startsWith('/archive/') ? entries.find(e => e.id === decodeURIComponent(pathname.slice('/archive/'.length))) : null;
  return (
    <main className={`portfolio-panel ${archive ? 'portfolio-panel--hidden' : ''}`} aria-hidden={archive} inert={archive} ref={scrollRef} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <PanelHeader t={t} onNavigate={onNavigate} pathname={pathname}/>
      {pathname === '/' ? <HomeView t={t} onNavigate={onNavigate} entries={entries}/>
        : pathname === '/projects' ? <ProjectsView t={t} onNavigate={onNavigate} entries={entries} lang={lang}/>
          : pathname === '/writing' ? <WritingView t={t} onNavigate={onNavigate} entries={entries} lang={lang}/>
            : pathname === '/contact' ? <ContactView t={t}/>
              : <EntryView entry={entry} t={t} lang={lang} onNavigate={onNavigate}/>}
      <footer className="panel-footer">
        <span>© 2026 MARWAN AL-HAMDAN</span><span>{t.footer}</span>
      </footer>
    </main>
  );
}

````

### `portfolio-continuous-palette-replacements.zip` → `src/components/ArchiveMosaic.jsx`

````jsx
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { layoutMosaic } from '../lib/mosaicLayout.js';
import { visibleMosaicTiles } from '../lib/visibleMosaicTiles.js';
import { advanceAutoScroll, initialAutoScrollState, SCROLL_RESUME_DELAY_MS } from '../lib/autoScroll.js';
import Icon from './Icons.jsx';
import { createAmbientBackground } from '../lib/ambientPattern.js';

// The artwork generator is costly when hundreds of SVG backgrounds are encoded.
// Generate once per tile identity, only when the tile enters the viewport.
const artworkCache = new Map();
function artworkFor(id) {
  if (!artworkCache.has(id)) {
    if (artworkCache.size > 900) artworkCache.delete(artworkCache.keys().next().value);
    artworkCache.set(id, createAmbientBackground(id));
  }
  return artworkCache.get(id);
}

const ArchiveTile = memo(function ArchiveTile({ tile, onOpen, lang }) {
  const { entry, pixels, x, y, decorative } = tile;
  const style = {
    '--tile-x': `${x}px`, '--tile-y': `${y}px`, '--tile-size': `${pixels}px`,
    '--tile-image': entry ? `url("${entry.image}")` : undefined,
    ...(decorative ? { '--ambient-art': artworkFor(tile.id) } : {}),
  };
  if (decorative) {
    return <div className="mosaic-tile mosaic-tile--ambient" style={style} aria-hidden="true" />;
  }
  const title = lang === 'ar' ? entry.titleAr || entry.title : entry.title;
  const category = lang === 'ar' ? entry.categoryAr || entry.category : entry.category;
  return (
    <button type="button"
      className={`mosaic-tile mosaic-tile--entry ${entry.sample ? 'mosaic-tile--sample' : ''} ${tile.compact ? 'mosaic-tile--responsive' : tile.size === 1 ? 'mosaic-tile--tiny' : ''}`}
      style={style} onClick={event => onOpen(entry, event.currentTarget)}
      data-side={tile.side} data-entry-id={entry.id} title={title}
      aria-label={`${title}${entry.sample ? ' — sample' : ''}`}>
      <span className="tile-visual" aria-hidden="true" />
      <span className="tile-content">
        <span className="tile-category">{entry.sample ? '◇ ' : '✦ '}{category}</span>
        <span className="tile-title">{title}</span>
        <span className="tile-corner"><Icon name="upRight" size={14}/></span>
      </span>
    </button>
  );
});

export default function ArchiveMosaic({ entries, viewport, archive, lang, onOpen, layoutSeed = 1 }) {
  const scrollRef = useRef(null);
  const pauseUntil = useRef(0);
  const lastTime = useRef(0);
  const scrollState = useRef(initialAutoScrollState());
  const [viewTop, setViewTop] = useState(0);
  const layout = useMemo(() => layoutMosaic(entries, viewport, archive, layoutSeed), [entries, viewport.width, viewport.height, archive, layoutSeed]);
  const viewportHeight = viewport.height;

  const syncWindow = useCallback((force = false) => {
    const top = scrollRef.current?.scrollTop ?? 0;
    // Recalculate the visible set only after crossing a 120px bucket.
    const bucket = Math.floor(top / 120) * 120;
    setViewTop(previous => force || previous !== bucket ? bucket : previous);
  }, []);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;
    element.scrollTop = 0;
    syncWindow(true);
    lastTime.current = 0;
    scrollState.current = initialAutoScrollState();
    pauseUntil.current = performance.now() + SCROLL_RESUME_DELAY_MS;
  }, [archive, layout.metrics.compact, syncWindow]);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pause = () => {
      pauseUntil.current = performance.now() + SCROLL_RESUME_DELAY_MS;
      // Manual touch/wheel input takes precedence and restarts the motion from
      // the user's actual position. The fractional auto-scroll offset is kept
      // separately so iOS scrollTop rounding cannot freeze subpixel movement.
      scrollState.current = { ...initialAutoScrollState(), position: element.scrollTop };
    };
    const scroll = () => {
      // Touch gestures can continue moving after touchstart (momentum scroll).
      // Remember the *latest* manual position so autoplay resumes smoothly.
      if (performance.now() < pauseUntil.current) {
        scrollState.current = { ...initialAutoScrollState(), position: element.scrollTop };
      }
      syncWindow();
    };
    const hoverEntry = event => {
      if (event.target.closest?.('.mosaic-tile--entry')) pause();
    };
    element.addEventListener('wheel', pause, { passive: true });
    element.addEventListener('touchstart', pause, { passive: true });
    element.addEventListener('pointerdown', pause, { passive: true });
    element.addEventListener('pointerover', hoverEntry, { passive: true });
    element.addEventListener('focusin', pause);
    element.addEventListener('scroll', scroll, { passive: true });
    // Drive the 2-second eased rewind with requestAnimationFrame. The DOM
    // scroll position changes per frame; React only updates at 120px buckets.
    // This is smoother than the previous 25fps interval without re-rendering
    // hundreds of tiles every frame.
    let frame = 0;
    const tick = time => {
      const delta = lastTime.current ? Math.min(time - lastTime.current, 100) : 0;
      lastTime.current = time;
      if (!document.hidden && !reduce.matches && time >= pauseUntil.current) {
        const max = element.scrollHeight - element.clientHeight;
        if (max > 40) {
          // Do not read scrollTop back on each frame: mobile WebKit may round
          // it to whole pixels, while each frame only advances ~0.4px.
          // Reinjecting the rounded value loses that fraction forever.
          const next = advanceAutoScroll(scrollState.current, delta, max);
          scrollState.current = next;
          if (Math.abs(element.scrollTop - next.position) >= 0.5) {
            element.scrollTop = next.position;
          }
        }
      }
      frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(frame);
      element.removeEventListener('wheel', pause);
      element.removeEventListener('touchstart', pause);
      element.removeEventListener('pointerdown', pause);
      element.removeEventListener('pointerover', hoverEntry);
      element.removeEventListener('focusin', pause);
      element.removeEventListener('scroll', scroll);
    };
  }, [syncWindow]);

  const visible = useMemo(() => visibleMosaicTiles(layout.tiles, viewTop, viewportHeight), [layout.tiles, viewTop, viewportHeight]);
  return (
    <div ref={scrollRef}
      className={`mosaic-scroll ${archive ? 'mosaic-scroll--archive' : ''} ${layout.metrics.compact ? 'mosaic-scroll--compact' : ''}`}
      aria-label="Interactive archive collage">
      <div className="mosaic-plane" style={{ height: `${layout.contentHeight}px` }}>
        {visible.map(tile => <ArchiveTile key={tile.id} tile={tile} onOpen={onOpen} lang={lang} />)}
      </div>
    </div>
  );
}

````

### `portfolio-continuous-palette-replacements.zip` → `src/styles/global.css`

````css
:root {
  font-family: 'DM Sans', 'Segoe UI', Arial, sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  --world: #161b20;
  --world-grid: rgba(239, 229, 211, .035);
  --paper: #f0ede6;
  --paper-soft: #e7e1d7;
  --ink: #232823;
  --muted: #78786f;
  --lede-color: #6b7169;
  --paper-line: #cbc7bc;
  --accent: #777157;
  --tile-outline: rgba(246, 238, 219, .64);
  /* One continuous spatial palette, not a palette repeated per tiling module. */
  --mosaic-horizontal: linear-gradient(90deg,
    #bfd0d0 0%, #c4d2d0 24%, #cad3cc 49%,
    #d1cec5 73%, #c7d1cf 100%);
  --mosaic-vertical: linear-gradient(180deg,
    rgba(255,255,255,0) 0%, rgba(255,255,255,.09) 25%,
    rgba(124,145,136,.085) 55%, rgba(255,255,255,.065) 78%,
    rgba(255,255,255,0) 100%);
}
:root[data-theme="dark"] {
  --world: #090e14;
  --world-grid: rgba(226, 234, 244, .035);
  --paper: #21272b;
  --paper-soft: #2b3236;
  --ink: #eeeae1;
  --muted: #a2aaa6;
  --lede-color: #909995;
  --paper-line: #47504f;
  --accent: #d1b99a;
  --tile-outline: rgba(233, 239, 239, .48);
  --mosaic-horizontal: linear-gradient(90deg,
    #203036 0%, #283a3e 24%, #30403e 49%,
    #383d3a 73%, #29393d 100%);
  --mosaic-vertical: linear-gradient(180deg,
    rgba(255,255,255,0) 0%, rgba(161,173,164,.045) 25%,
    rgba(105,123,121,.065) 55%, rgba(255,255,255,.025) 78%,
    rgba(255,255,255,0) 100%);
}
* { box-sizing: border-box; }
html, body, #root { min-width: 280px; min-height: 100%; margin: 0; }
html { overflow: hidden; }
body { background: var(--world); color: var(--ink); }
button, a { -webkit-tap-highlight-color: transparent; }
button { font: inherit; }
button:focus-visible, a:focus-visible { outline: 2px solid #89adc1; outline-offset: 3px; }
a { color: inherit; }
.site-shell { width: 100%; min-height: 100svh; isolation: isolate; background: var(--world); overflow: hidden; }
.site-grain { pointer-events: none; position: fixed; inset: 0; z-index: 5; opacity: .3; background-image: repeating-linear-gradient(90deg,transparent 0, transparent 31px, var(--world-grid) 32px), repeating-linear-gradient(0deg,transparent 0, transparent 31px, var(--world-grid) 32px); }
/* The mosaic remains scrollable under the independently scrolling portfolio. */
.mosaic-scroll { position: fixed; inset: 0; overflow-y: auto; overflow-x: hidden; overscroll-behavior: contain; scrollbar-width: none; background: var(--world); }
.mosaic-scroll::-webkit-scrollbar, .portfolio-panel::-webkit-scrollbar { display: none; }
/* A shared, gently varying field sits below every square. Transparent ambient
   tiles expose the exact same color at their edges, so adjacent squares never
   switch abruptly between unrelated module palettes. */
.mosaic-plane {
  position: relative;
  width: 100%;
  min-height: 100%;
  background-color: var(--world);
  background-image: var(--mosaic-vertical), var(--mosaic-horizontal);
  background-size: 100% 2200px, 100% 2200px;
  background-position: left top, left top;
  background-repeat: repeat-y, repeat-y;
}
.mosaic-tile { appearance: none; position: absolute; top: 0; left: 0; padding: 0; margin: 0; width: var(--tile-size); height: var(--tile-size); display: block; overflow: hidden; border-radius: 0; border: 1px solid var(--tile-outline); transform: translate3d(var(--tile-x), var(--tile-y), 0); transition: transform .58s cubic-bezier(.23,.87,.24,1), width .58s cubic-bezier(.23,.87,.24,1), height .58s cubic-bezier(.23,.87,.24,1), border-color .22s ease, opacity .3s ease; container-type: inline-size; background: #1b292e; }
.mosaic-tile--entry { cursor: pointer; text-align: left; color: #faf7f0; z-index: 1; }
.mosaic-tile--entry:hover, .mosaic-tile--entry:focus-visible { z-index: 3; border-color: #f9e5c9; }
.tile-visual { position: absolute; inset: 0; display: block; background-image: var(--tile-image); background-position: center; background-size: cover; transform: scale(1.005); transition: transform .4s cubic-bezier(.2,.75,.2,1), filter .25s; filter: saturate(.76) brightness(.86); }
.tile-visual::after { content: ''; position: absolute; inset: 0; background: linear-gradient(0deg, rgba(5,11,16,.87),rgba(5,11,16,.06) 70%); }
.mosaic-tile--entry:hover .tile-visual, .mosaic-tile--entry:focus-visible .tile-visual { transform: scale(1.085); filter: saturate(1) brightness(1.06); }
.tile-content { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end; padding: clamp(11px, 1.2vw, 22px); text-shadow: 0 1px 12px #06090fb0; min-width: 0; }
.tile-category { display: block; font-size: clamp(10px, 3.8cqi, 13px); letter-spacing: .08em; line-height: 1.25; text-transform: uppercase; font-weight: 700; opacity: .9; margin-bottom: 6px; }
.tile-title { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; line-clamp: 3; overflow: hidden; font: normal clamp(18px, 9cqi, 35px)/1.06 'Instrument Serif', Georgia, serif; max-width: 100%; overflow-wrap: anywhere; text-wrap: balance; }
.tile-corner { position: absolute; top: 10px; right: 9px; opacity: 0; transform: translate(-3px,3px); transition: opacity .2s, transform .2s; }
.mosaic-tile:hover .tile-corner, .mosaic-tile:focus-visible .tile-corner { opacity: 1; transform: none; }
.mosaic-tile--sample .tile-category { color: #e8d7b7; }
/* Tiny squares are decorative only; entry sizing is enforced by the layout generator. */
.mosaic-tile--tiny .tile-content { padding: 9px; }
.mosaic-tile--tiny .tile-title { font-size: clamp(15px, 8cqi, 20px); }
@container (max-width: 185px) { .tile-category { font-size: 10px; letter-spacing: .03em; } .tile-content { padding: 10px; } .tile-title { font-size: clamp(16px, 10cqi, 21px); } }
/* Ambient squares supply only their artwork and outline. The common canvas
   supplies the colors and stays visually continuous through tile boundaries. */
.mosaic-tile--ambient {
  pointer-events: none;
  border-color: var(--tile-outline);
  background-color: transparent;
  background-image: var(--ambient-art);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: normal;
}
.ambient-mark { display: none; }
.panel-shadow { position: fixed; z-index: 6; top: 0; bottom: 0; left: 50%; transform: translateX(-50%); width: var(--panel-width, min(600px,max(468px,43vw))); box-shadow: 0 25px 95px #05080da8,0 0 0 1px rgba(255,255,255,.1); pointer-events: none; transition: opacity .4s, transform .6s; }
.site-shell--archive .panel-shadow { opacity: 0; transform: translateX(-50%) translateY(50px) scale(.94); }
.portfolio-panel { position: fixed; z-index: 7; top: 0; bottom: 0; left: 50%; transform: translateX(-50%); width: var(--panel-width, min(600px,max(468px,43vw))); overflow-y: auto; overscroll-behavior: contain; scrollbar-width: none; padding: 27px clamp(25px,3.1vw,49px) 16px; background: var(--paper); color: var(--ink); border: 1px solid var(--paper-line); box-shadow: 0 0 0 1px rgba(0,0,0,.06); transition: transform .63s cubic-bezier(.25,.72,.15,1), opacity .45s ease; }
.portfolio-panel--hidden { opacity: 0; transform: translateX(-50%) translateY(72px) scale(.9); pointer-events: none; }
.panel-heading { display:flex; align-items:center; justify-content:space-between; gap:10px; padding-bottom: 27px; border-bottom:1px solid var(--paper-line); }
.panel-monogram { border:0; background:transparent; color:var(--ink); padding:0; font:bold 27px 'Instrument Serif',Georgia,serif; cursor:pointer; }
.panel-monogram span { color: var(--accent); }
.panel-label,.panel-index,.micro-label,.number-label,.panel-footer,.portrait-credit,.source-disclosure { font: 500 9px/1.3 'DM Mono',monospace; letter-spacing:.12em; }
.panel-label { color:var(--muted); }
.tiny-asterisk { color: var(--accent); font-size: 16px; vertical-align:-2px; }
.panel-index { color:var(--muted); }
.intro-section { padding-top: 49px; }
.micro-label,.number-label { display:block; color:var(--muted); }
.hero-intro { display:flex; align-items:flex-end; gap:18px; margin-top:27px; }
.hero-copy { min-width:0; flex:1; }
.hero-greeting { font:italic 26px 'Instrument Serif',Georgia,serif; }
.hero-copy h1 { margin:10px 0 0; font:normal clamp(34px,3.65vw,52px)/1.02 'Instrument Serif',Georgia,serif; letter-spacing:-.035em; white-space:normal; }
.hero-copy h1 em, .editorial-block h2 em,.view-title em { font-weight:400; color:var(--accent); }
.hero-rule { width:45px; height:1px; background:var(--accent); margin:18px 0; }
.hero-role { font-size:11px; font-weight:700; letter-spacing:.09em; text-transform:uppercase; margin:0 0 8px; }
.hero-description { font-size:12px; line-height:1.7; color:var(--muted); margin:0; }
.portrait-frame { width: 32%; flex:none; aspect-ratio: .77; display:flex; flex-direction:column; align-self:center; position:relative; }
.portrait-frame img { display:block; width:100%; height:100%; object-fit:cover; object-position:center 34%; filter:saturate(.72); border:1px solid var(--paper-line); }
.portrait-credit { position:absolute; bottom:-17px; left:0; color:var(--muted); white-space:nowrap; font-size:7px; }
.hero-actions { display:flex; flex-wrap:wrap; gap:9px; margin-top:39px; }
.pill-link { text-decoration:none; display:inline-flex; align-items:center; justify-content:center; gap:12px; border:1px solid var(--ink); border-radius:100px; padding:11px 14px; font-size:11px; font-weight:600; cursor:pointer; transition:transform .18s,background .18s,color .18s; }
.pill-link:hover { transform:translateY(-2px); }
.pill-link:active { transform:scale(.96); }
.pill-link--dark { background:var(--ink); color:var(--paper); }
.pill-link--outline { background:transparent; color:var(--ink); }
.pill-link--outline:hover { background:var(--paper-soft); }
.editorial-block { margin-top:66px; padding-top:23px; border-top:1px solid var(--paper-line); }
.section-heading { display:flex; align-items:center; justify-content:space-between; gap:10px; }
.section-star { color:var(--accent); }
.editorial-block h2 { margin:22px 0 20px; font:normal clamp(38px,4vw,56px)/.97 'Instrument Serif',Georgia,serif; letter-spacing:-.02em; }
.editorial-block p,.body-copy { color:var(--muted); font-size:13px; line-height:1.85; letter-spacing:.018em; max-width:52ch; }
.ink-divider { width:100%; height:1px; background:var(--paper-line); margin:27px 0 22px; }
.feature-links { margin-top:13px; }
.feature-link { display:flex; justify-content:space-between; align-items:center; gap:12px; width:100%; padding:13px 0; background:none; color:var(--ink); border:0; border-bottom:1px solid var(--paper-line); text-align:start; cursor:pointer; font:normal 20px/1.2 'Instrument Serif',Georgia,serif; }
.feature-link:hover { color:var(--accent); }
.feature-number { font:9px 'DM Mono',monospace; color:var(--muted); margin-inline-end:auto; min-width:28px; }
.feature-link > svg:last-child { margin-inline-start:auto; }
.editorial-block--bottom { padding-bottom:40px; }
.inline-arrow { display:inline-flex;align-items:center;gap:9px;padding:0;border:0;background:none;color:var(--ink);font-size:12px;font-weight:600;text-decoration:none;cursor:pointer; }
.inline-arrow:hover { color:var(--accent); }
.inner-view { padding-top:51px; min-height:65%; }
.view-title { font:normal clamp(44px,5vw,72px)/.97 'Instrument Serif',Georgia,serif; letter-spacing:-.025em; margin:23px 0 19px; }
.view-lede { max-width:45ch; color:var(--lede-color); font-size:clamp(16px,1.4vw,18px); font-weight:400; line-height:1.66; letter-spacing:.012em; margin:0 0 39px; }
.project-list { border-top:1px solid var(--paper-line); }
.project-row { width:100%; padding:17px 0; display:flex; align-items:center; gap:12px; border:0; border-bottom:1px solid var(--paper-line); background:none; text-align:start; color:var(--ink); cursor:pointer; }
.project-row:hover .project-row-description strong { color:var(--accent); }
.project-row img { width:68px;height:68px;object-fit:cover;border:1px solid var(--paper-line); }
.project-row-number { font:9px 'DM Mono',monospace;color:var(--muted); }
.project-row-description { flex:1; min-width:0;display:flex;flex-direction:column;gap:7px; }
.project-row-description strong { font:normal 24px 'Instrument Serif',Georgia,serif; }
.project-row-description small { color:var(--muted);font:9px 'DM Mono',monospace; }
.source-disclosure { margin:24px 0;line-height:1.7;color:var(--muted);letter-spacing:0; }
.editorial-illustration,.entry-hero-image { display:block;width:100%;aspect-ratio:1.55;object-fit:cover;border:1px solid var(--paper-line); }
.subheading { font:normal 33px 'Instrument Serif',Georgia,serif;margin:34px 0 12px; }
.contact-options { display:grid; gap:10px; margin:38px 0 25px; }
.fine-print { color:var(--muted);font-size:11px;line-height:1.7; }
.sample-alert { margin-top:18px; padding:10px 12px; background:var(--paper-soft);border-left:2px solid var(--accent);font-size:10px;font-weight:700;letter-spacing:.06em; }
.entry-view .view-title { overflow-wrap:anywhere; }
.entry-figure { margin:0 0 22px; }
.entry-caption { margin-top:17px; font-size:10px; letter-spacing:.16em; line-height:1.5; }
.entry-links,.writing-resource-list { display:grid; gap:10px; margin:27px 0 24px; }
.resource-link { width:100%; min-height:66px; display:flex; align-items:center; justify-content:space-between; gap:14px; padding:15px 16px 15px 18px; background:transparent; color:var(--ink); border:1px solid var(--paper-line); border-radius:2px; text-decoration:none; text-align:start; cursor:pointer; font:600 clamp(14px,1.25vw,17px)/1.4 'DM Sans','Segoe UI',Arial,sans-serif; letter-spacing:.018em; transition:background .2s,border-color .2s,transform .2s; }
.resource-link:hover { background:var(--paper-soft); border-color:var(--accent); transform:translateY(-2px); }
.resource-link:active { transform:translateY(0); }
.resource-link-icon { width:36px; height:36px; flex:none; display:grid; place-items:center; border:1px solid var(--paper-line); border-radius:2px; transition:transform .2s,border-color .2s; }
.resource-link:hover .resource-link-icon, .resource-link:focus-visible .resource-link-icon { transform:translate(2px,-2px); border-color:var(--accent); }
[dir="rtl"] .resource-link:hover .resource-link-icon, [dir="rtl"] .resource-link:focus-visible .resource-link-icon { transform:translate(-2px,-2px); }
.entry-view .pill-link { margin-top:28px; }
.panel-footer { margin-top:58px; padding:20px 0 26px; border-top:1px solid var(--paper-line);display:flex;justify-content:space-between;gap:15px;color:var(--muted);font-size:8px;letter-spacing:.02em; }
/* Floating controls overlap the collage only while the user is active. */
.floating-controls { position:fixed;z-index:45;top:24px;right:26px;display:flex;align-items:center;gap:14px;pointer-events:none;opacity:1;transform:translateY(0);transition:opacity .32s ease,transform .32s ease; }
.floating-controls--hidden { opacity:0;transform:translateY(-6px); }
.floating-controls--hidden .orb-button { pointer-events:none; }
.orb-button { width:46px;height:46px;display:grid;place-items:center;position:relative;pointer-events:auto; border-radius:50%; border:1px solid rgba(237,237,231,.58);color:#f6f1e7;background:rgba(23,29,35,.68);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);cursor:pointer;box-shadow:0 3px 17px rgba(0,0,0,.22);transition:transform .2s cubic-bezier(.2,.8,.2,1),background .2s,border-color .2s,box-shadow .2s; }
.orb-button:hover { transform:scale(1.1);background:rgba(58,68,74,.9);border-color:#f5ead7;box-shadow:0 4px 24px rgba(0,0,0,.35); }
.orb-button:active { transform:scale(.92); }
.orb-button.is-active { background:#e8e0d1;color:#1c2529;border-color:#fff8ea; }
.language-button span:first-child { font:500 12px 'DM Mono',monospace; }
.orb-tooltip { position:absolute;right:50%;top:calc(100% + 10px);transform:translate(50%,-4px);white-space:nowrap;max-width:190px;pointer-events:none;opacity:0;border-radius:4px;background:#f2eadf;color:#252626;font-size:10px;padding:6px 9px;transition:opacity .2s,transform .2s; }
.orb-button:hover .orb-tooltip,.orb-button:focus-visible .orb-tooltip { opacity:1;transform:translate(50%,0); }
.archive-demo-dock { position:fixed;z-index:46;left:24px;bottom:24px;max-width:calc(100% - 48px);display:flex;gap:18px;align-items:center;padding:12px 13px 12px 16px;color:#e8e6df;background:rgba(17,23,29,.9);border:1px solid rgba(248,244,231,.35);backdrop-filter:blur(16px);box-shadow:0 10px 40px #0007; }
.dock-copy { display:flex;flex-direction:column;gap:5px;font-size:10px;color:#d3d4d0; }
.dock-kicker { letter-spacing:.1em;font-size:9px;text-transform:uppercase;font-weight:700;color:#eae9e4; }
.dock-hint { color:#aab3b4; }
.dock-actions { display:flex;gap:6px; }
.dock-actions button { width:48px;height:34px;display:flex;align-items:center;justify-content:center;gap:2px;border:1px solid #ffffff60;background:#ffffff0e;color:#faf7f0;cursor:pointer; }
.dock-actions button:hover { background:#ffffff2b; }
.dock-actions button:disabled { opacity:.3;cursor:default; }
.dock-actions button span { font-size:11px; }
.transition-layer { position:fixed;z-index:90;inset:0;pointer-events:none;overflow:hidden; }
.transition-image { position:fixed;left:var(--origin-x);top:var(--origin-y);width:var(--origin-width);height:var(--origin-height);background-image:linear-gradient(0deg,rgba(8,13,17,.55),rgba(8,13,17,.26)),var(--transition-image);background-position:center;background-size:cover;box-shadow:0 0 0 2px #f2e5d0;transition:left .42s cubic-bezier(.2,.74,.12,1),top .42s cubic-bezier(.2,.74,.12,1),width .42s cubic-bezier(.2,.74,.12,1),height .42s cubic-bezier(.2,.74,.12,1),opacity .32s;display:grid;place-items:center; }
.transition-title { opacity:0;color:#f5ede3;font:normal clamp(34px,6vw,84px) 'Instrument Serif',Georgia,serif;letter-spacing:-.04em;text-align:center;transition:opacity .18s .18s; }
.transition-layer--zoom .transition-image,.transition-layer--reveal .transition-image { left:-3vw;top:-3vh;width:106vw;height:106vh; }
.transition-layer--zoom .transition-title { opacity:1; }
.transition-layer--reveal { opacity:0;transition:opacity .30s ease; }
.transition-wash { position:absolute;inset:0;background:#efe7d8;opacity:0;transition:opacity .35s ease; }
.transition-layer--zoom .transition-wash { opacity:.1; }
/* Narrow screens retain a readable paper column and two square-only side streams.
   The same achievement buttons join a grid when Archive Mode opens. */
/* Both mobile side streams share one vertical scroll plane. Keep it scrollable
   in Portfolio Mode as well as Archive Mode, including on iOS Safari. */
.mosaic-scroll--compact { overflow-y: auto; overflow-x: hidden; -webkit-overflow-scrolling: touch; touch-action: pan-y; }
.mosaic-scroll--archive .mosaic-tile--concealed { opacity: 0; pointer-events: none; }
.mosaic-scroll--compact .mosaic-tile--responsive .tile-title { font-size: clamp(16px, 9cqi, 28px); line-height: 1.08; white-space: normal; }
.mosaic-scroll--compact .mosaic-tile--responsive .tile-category { font-size: clamp(9px, 3cqi, 11px); }
.mosaic-scroll--compact:not(.mosaic-scroll--archive) .tile-content { opacity: .65; }
.mosaic-scroll--compact.mosaic-scroll--archive .tile-content { padding: clamp(10px, 2.3vw, 18px); }
.site-shell--compact .portfolio-panel,
.site-shell--compact .panel-shadow { top: 0; bottom: 0; }
.site-shell--compact .portfolio-panel {
  padding: max(16px, env(safe-area-inset-top, 0px)) clamp(17px, 3vw, 30px) 18px;
}
.site-shell--compact .floating-controls {
  top: max(12px, env(safe-area-inset-top, 0px));
  right: max(12px, env(safe-area-inset-right, 0px));
  gap: 10px;
}
.site-shell--compact .orb-button { width: 44px; height: 44px; }
.site-shell--compact .orb-tooltip { display: none; }
.site-shell--compact .archive-demo-dock {
  left: max(10px, env(safe-area-inset-left, 0px));
  bottom: max(10px, env(safe-area-inset-bottom, 0px));
  max-width: calc(100% - 20px);
}
@media (max-width: 1100px) { .panel-label { font-size:8px; } .portrait-frame { width:30%; } }
@media (max-width: 720px) {
  .portfolio-panel,.panel-shadow { top:0;bottom:0; }
  .portfolio-panel { padding: max(16px, env(safe-area-inset-top, 0px)) 23px 15px; }
  .panel-heading { padding-bottom:18px; }
  .floating-controls { top:max(12px, env(safe-area-inset-top, 0px));right:max(12px, env(safe-area-inset-right, 0px));gap:10px; }
  .orb-button { width:44px;height:44px; }
  .intro-section { padding-top:33px; }
  .hero-intro { gap:15px; }
  .hero-copy h1 { font-size:clamp(34px,8.2vw,55px); }
  .portrait-frame { width:32%; }
  .hero-greeting { font-size:24px; }
  .hero-description { font-size:12px; }
  .editorial-block { margin-top:48px; }
  .editorial-block h2 { font-size:clamp(38px,9vw,52px); }
  .view-lede { font-size:16px; line-height:1.7; margin-bottom:32px; }
  .resource-link { min-height:60px; padding:12px 13px; font-size:15px; }
  .resource-link-icon { width:32px; height:32px; }
  .archive-demo-dock { bottom:13px;left:13px;max-width:calc(100% - 26px);padding:9px 10px;gap:10px; }
  .dock-hint { display:none; }
  .dock-actions button { width:38px;height:34px; }
}
@media (max-width: 380px) {
  .hero-intro { flex-wrap:wrap; }
  .hero-copy { flex-basis: 100%; }
  .portrait-frame { width:104px;aspect-ratio:.77;position:relative;right:auto;top:auto;opacity:1; }
  .hero-description { max-width:26ch; }
  .portfolio-panel { padding:16px 17px 14px; }
  .panel-label { font-size:7px; }
}
@media (prefers-reduced-motion: reduce) {
  .mosaic-scroll--compact .mosaic-tile { animation: none !important; translate: 0 0 !important; }
  *,*::before,*::after { animation-duration:.01ms!important;transition-duration:.01ms!important;scroll-behavior:auto!important; }
}

/* Native scroll animation replaces expensive per-tile keyframe animations. */
.mosaic-scroll { scroll-behavior: auto; }


/* Responsive portfolio: visible square streams and a narrow-screen editorial page.
   The rails occupy actual layout space instead of being clipped behind paper. */
@media (max-width: 600px) {
  .site-shell--compact .portfolio-panel {
    padding: max(16px, env(safe-area-inset-top, 0px))
      clamp(12px, 3.3vw, 18px) 20px;
  }
  .site-shell--compact .panel-heading { gap: 5px; padding-bottom: 18px; }
  .site-shell--compact .panel-label { font-size: 7px; letter-spacing: .06em; }
  .site-shell--compact .panel-index { font-size: 8px; }
  .site-shell--compact .intro-section { padding-top: 27px; }
  .site-shell--compact .hero-intro { flex-direction: column; align-items: stretch; gap: 22px; }
  .site-shell--compact .hero-copy { flex-basis: auto; width: 100%; }
  .site-shell--compact .hero-copy h1 { font-size: clamp(32px, 8vw, 42px); overflow-wrap: anywhere; }
  .site-shell--compact .hero-greeting { font-size: 24px; }
  .site-shell--compact .hero-description { max-width: none; font-size: 13px; line-height: 1.7; }
  .site-shell--compact .portrait-frame { width: min(44%, 132px); align-self: flex-start; margin-bottom: 9px; }
  .site-shell--compact .hero-actions { display: grid; grid-template-columns: 1fr; gap: 10px; margin-top: 33px; }
  .site-shell--compact .hero-actions .pill-link { min-width: 0; width: 100%; min-height: 44px; justify-content: space-between; padding: 11px 12px; }
  .site-shell--compact .view-title { font-size: clamp(34px, 9.3vw, 50px); overflow-wrap: anywhere; }
  .site-shell--compact .editorial-block h2 { font-size: clamp(32px, 9.3vw, 45px); }
  .site-shell--compact .view-lede { font-size: 15px; }
  .site-shell--compact .resource-link { min-width: 0; font-size: 14px; overflow-wrap: anywhere; }
  .site-shell--compact .panel-footer { flex-wrap: wrap; }
  /* Tiny image rails are tappable picture previews, not unreadable text cards.
     Full titles appear when entering Archive Mode. */
  .mosaic-scroll--compact:not(.mosaic-scroll--archive) .mosaic-tile--entry .tile-content { display: none; }
  .mosaic-scroll--compact:not(.mosaic-scroll--archive) .mosaic-tile--entry .tile-visual::after {
    background: linear-gradient(0deg, rgba(5,11,16,.20),rgba(5,11,16,0) 65%);
  }
}
@media (max-width: 350px) {
  .site-shell--compact .hero-copy h1 { font-size: 31px; }
  .site-shell--compact .portrait-frame { width: 108px; }
  .site-shell--compact .panel-heading .panel-label { font-size: 6px; }
  .site-shell--compact .floating-controls { gap: 7px; right: 7px; }
  .site-shell--compact .orb-button { width: 42px; height: 42px; }
}

````

### `portfolio-continuous-palette-replacements.zip` → `tests/ambientPalette.test.js`

````javascript
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const css = readFileSync(new URL('../src/styles/global.css', import.meta.url), 'utf8');
const component = readFileSync(new URL('../src/components/ArchiveMosaic.jsx', import.meta.url), 'utf8');

test('a single shared color field covers the mosaic instead of each module receiving a tone', () => {
  assert.match(css, /\.mosaic-plane\s*\{[^}]*background-image:\s*var\(--mosaic-vertical\),\s*var\(--mosaic-horizontal\)/s);
  assert.match(css, /\.mosaic-tile--ambient\s*\{[^}]*background-color:\s*transparent/s);
  assert.doesNotMatch(css, /--tile-tone-[0-9]/);
  assert.doesNotMatch(component, /globalModuleIndex\s*\?\?|--tile-tone/);
});

test('both themes have their own spatial palettes with matching end colors for seamless vertical repetition', () => {
  const light = css.match(/:root\s*\{([^}]*)\}/s)?.[1];
  const dark = css.match(/:root\[data-theme="dark"\]\s*\{([^}]*)\}/s)?.[1];
  assert.ok(light && dark);
  for (const theme of [light, dark]) {
    assert.match(theme, /--mosaic-horizontal:\s*linear-gradient\(90deg,/);
    assert.match(theme, /--mosaic-vertical:\s*linear-gradient\(180deg,/);
    assert.match(theme, /rgba\(255,255,255,0\) 0%/);
    assert.match(theme, /rgba\(255,255,255,0\) 100%/);
  }
  assert.notEqual(light.match(/--mosaic-horizontal:[^;]+/s)?.[0], dark.match(/--mosaic-horizontal:[^;]+/s)?.[0]);
});

````

### `portfolio-edge-typography-replacements.zip` → `src/lib/mosaicLayout.js`

````javascript
/** A 5 × 5 square module is a convenient building block, not a repeated tile pattern. */
export const CELLS_PER_SIDE = 5;
export const SQUARE_PATTERN = Object.freeze([
  { x: 0, y: 0, size: 3 },
  { x: 3, y: 0, size: 2 },
  { x: 3, y: 2, size: 2 },
  { x: 0, y: 3, size: 2 },
  { x: 2, y: 3, size: 1 },
  { x: 2, y: 4, size: 1 },
  { x: 3, y: 4, size: 1 },
  { x: 4, y: 4, size: 1 },
]);

const mix = n => {
  n = Math.imul(n ^ (n >>> 16), 0x7feb352d);
  n = Math.imul(n ^ (n >>> 15), 0x846ca68b);
  return (n ^ (n >>> 16)) >>> 0;
};
function random(seed) {
  let state = mix(seed);
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let n = state;
    n = Math.imul(n ^ n >>> 15, n | 1);
    n ^= n + Math.imul(n ^ n >>> 7, n | 61);
    return ((n ^ n >>> 14) >>> 0) / 4294967296;
  };
}
function rotate(x, y, size, frameSize, turns) {
  let xx = x;
  let yy = y;
  for (let n = 0; n < turns; n++) {
    const oldX = xx;
    xx = frameSize - yy - size;
    yy = oldX;
  }
  return { x: xx, y: yy, size };
}

/**
 * A hierarchical, deterministic tile mutation system. Four-child merges and
 * subdivisions leave exact square coverage; quarter turns rotate complete
 * square regions without disturbing adjacent regions.
 *
 * moduleIndex is an absolute, stable index: viewport changes never re-roll
 * the module's internal formation. seed changes only on a fresh app load.
 */
export function generateSquareFormation(moduleIndex, seed = 1) {
  const rng = random(mix((seed >>> 0) ^ Math.imul(moduleIndex + 1, 0x9e3779b1)));
  const out = [];
  const outerTurns = Math.floor(rng() * 4);
  const rotatedBase = SQUARE_PATTERN.map(base => rotate(base.x, base.y, base.size, 5, outerTurns));
  // A different base ordering avoids a persistent pattern of large squares.
  rotatedBase.sort((a, b) => a.y - b.y || a.x - b.x);

  function subdivide(x, y, size, depth, ancestry) {
    const minimum = 0.74;
    const canSplit = depth < 3 && size / 2 >= minimum;
    const chance = depth === 0 ? (size >= 2 ? 0.72 : 0.16) : 0.31;
    if (!canSplit || rng() > chance) {
      out.push({ x, y, size, id: ancestry });
      return;
    }
    const half = size / 2;
    const children = [
      { x: 0, y: 0 }, { x: half, y: 0 },
      { x: 0, y: half }, { x: half, y: half },
    ];
    let local = [];
    // Build a subtree first so rotating it affects actual asymmetric geometry.
    const previous = out.splice(0);
    children.forEach((child, i) => subdivide(child.x, child.y, half, depth + 1, `${ancestry}.${i}`));
    local = out.splice(0);
    out.push(...previous);
    // Mutate: merge four equal children back to a single square on occasion.
    if (local.length === 4 && rng() < 0.20) {
      out.push({ x, y, size, id: ancestry });
      return;
    }
    const turns = Math.floor(rng() * 4);
    for (const tile of local) {
      const rotated = rotate(tile.x, tile.y, tile.size, size, turns);
      out.push({ ...tile, x: x + rotated.x, y: y + rotated.y });
    }
  }
  rotatedBase.forEach((base, i) => subdivide(base.x, base.y, base.size, 0, `s${i}`));
  return out.sort((a, b) => a.y - b.y || a.x - b.x || b.size - a.size);
}

/** Kept as a public utility for layout integration and lightweight tests. */
export function createMosaicSlots(entryCount, minimumModules = 1, seed = 1) {
  let slots = [];
  let moduleCount = Math.max(2, minimumModules * 2);
  // Match initial alternating left/right module ordering.
  while (true) {
    slots = [];
    for (let m = 0; m < moduleCount; m++) {
      const formation = generateSquareFormation(m, seed);
      formation.forEach((square, i) => slots.push({
        ...square, id: `m${m}-${square.id}`, side: m % 2 === 0 ? 'left' : 'right',
        moduleIndex: Math.floor(m / 2), globalModuleIndex: m,
        indexOnSide: i,
      }));
    }
    if (slots.length >= entryCount) break;
    moduleCount += 2;
  }
  return slots;
}

function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
function archiveGeometry(width) {
  const columns = Math.max(2, Math.round(width / 550));
  return { columns, unit: width / (columns * CELLS_PER_SIDE) };
}
export function computeMetrics({ width, height, archive = false }) {
  const compact = width <= 900 || (width <= 1200 && height <= 640);
  const sideInset = Math.max(17, Math.min(64, width * 0.065));
  const panelWidth = compact
    ? Math.min(620, width - 2 * sideInset)
    : Math.min(600, Math.max(468, width * 0.43));
  // Reserve enough physical room for readable achievement squares in desktop wings.
  // Below this width we use the previously agreed responsive side streams.
  const wideSideWidth = (width - panelWidth) / 2;
  const useCompact = compact || wideSideWidth < 410;
  const gridColumns = useCompact ? (width < 480 ? 2 : width < 720 ? 3 : 4) : 10;
  const gridInset = 0;
  const unit = useCompact
    ? archive ? width / gridColumns : Math.max(104, Math.min(170, width * 0.27))
    : archive ? archiveGeometry(width).unit : Math.min(112, Math.max(66, (width - panelWidth) / 7.8));
  return {
    width, height, panelWidth, unit, compact: useCompact, mobile: useCompact,
    gridColumns, gridInset,
    archiveModuleColumns: useCompact ? null : archiveGeometry(width).columns,
  };
}

function layoutCompact(entries, metrics, archive) {
  const { width, height, panelWidth, gridColumns } = metrics;
  const leftEdge = (width - panelWidth) / 2;
  const rightEdge = (width + panelWidth) / 2;
  const streamUnit = Math.max((width - panelWidth) / 2, Math.max(104, Math.min(170, width * 0.27)));
  const minimumPerSide = Math.ceil(height / streamUnit) + 4;
  const archiveUnit = width / gridColumns;
  const minimumArchiveSlots = gridColumns * Math.ceil(height / archiveUnit);
  const slotsPerSide = Math.max(Math.ceil(entries.length / 2), minimumPerSide, Math.ceil(minimumArchiveSlots / 2));
  const slots = Array.from({ length: slotsPerSide * 2 }, (_, index) => {
    const side = index % 2 === 0 ? 'left' : 'right';
    const row = Math.floor(index / 2);
    const entry = entries[index] ?? null;
    return { id: entry ? `entry-${entry.id}` : `ambient-${side}-${row}`, side, row, entry };
  });
  const tiles = slots.map((slot, order) => {
    const { side, row, entry } = slot;
    const x = archive ? (order % gridColumns) * archiveUnit
      : side === 'left' ? leftEdge - streamUnit : rightEdge;
    const y = archive ? Math.floor(order / gridColumns) * archiveUnit : (row - 2) * streamUnit;
    return {
      id: slot.id, side, entry, decorative: !entry, compact: true,
      size: 1, x, y, pixels: archive ? archiveUnit : streamUnit, hidden: false,
    };
  });
  const archiveRows = Math.ceil(slots.length / gridColumns);
  const contentHeight = archive ? Math.max(height + 1, archiveRows * archiveUnit)
    : Math.max(height + 1, (slotsPerSide + 1) * streamUnit);
  return { tiles, metrics, contentHeight, moduleCount: archiveRows };
}

/**
 * Projection is separate from topology. Responsive reflow and archive changes
 * only move/scale existing seeded squares; they never mutate a formation.
 */
export function layoutMosaic(entries, viewport, archive = false, seed = 1) {
  const metrics = computeMetrics({ ...viewport, archive });
  if (metrics.compact) return layoutCompact(entries, metrics, archive);
  const { width, height, panelWidth } = metrics;
  const unit = (width - panelWidth) / 10;
  const leftBoundary = (width - panelWidth) / 2;
  const rightBoundary = (width + panelWidth) / 2;
  // Five square units span exactly one side wing: no empty outside margins.
  const portfolioUnit = (width - panelWidth) / 10;
  const { columns: archiveColumns, unit: archiveUnit } = archiveGeometry(width);
  const portfolioRows = Math.ceil(height / (5 * portfolioUnit));
  const archiveRows = Math.ceil(height / (5 * archiveUnit));
  // Structural filler may be tiny, but achievements require readable tiles.
  // In either projection, a usable achievement tile must be >= 164px.
  // Desktop is enabled only when two square units are at least 164px.
  // Use a topology-based eligibility rule, not a pixel rule, so resizing
  // does not reassign achievements to different tile IDs.
  const MIN_ENTRY_UNITS = 2;
  const entryMinModules = Math.ceil(entries.length / 3);
  const neededModules = Math.max(portfolioRows * 2, archiveRows * archiveColumns, entryMinModules);
  const moduleMultiple = (2 * archiveColumns) / gcd(2, archiveColumns);
  let totalModules = Math.ceil(neededModules / moduleMultiple) * moduleMultiple;
  const formations = [];
  let slotCount = 0;
  function makeModules(upTo) {
    for (let m = formations.length; m < upTo; m++) {
      const squares = generateSquareFormation(m, seed);
      formations.push(squares);
      slotCount += squares.filter(square => square.size >= MIN_ENTRY_UNITS).length;
    }
  }
  makeModules(totalModules);
  while (slotCount < entries.length) {
    totalModules += moduleMultiple;
    makeModules(totalModules);
  }

  let entryPosition = 0;
  const tiles = formations.flatMap((formation, moduleIndex) => {
    const side = moduleIndex % 2 === 0 ? 'left' : 'right';
    const wingRow = Math.floor(moduleIndex / 2);
    const blockX = archive
      ? (moduleIndex % archiveColumns) * 5 * archiveUnit
      : side === 'left' ? leftBoundary - 5 * unit : rightBoundary;
    const blockY = archive
      ? Math.floor(moduleIndex / archiveColumns) * 5 * archiveUnit
      : wingRow * 5 * unit;
    const pixelUnit = archive ? archiveUnit : unit;
    return formation.map((square) => {
      // Never place text on undersized squares. Those become ambient filler.
      const eligible = square.size >= MIN_ENTRY_UNITS;
      const entry = eligible ? (entries[entryPosition++] ?? null) : null;
      return {
        ...square, id: entry ? `entry-${entry.id}` : `ambient-m${moduleIndex}-${square.id}`,
        side, moduleIndex: wingRow, globalModuleIndex: moduleIndex,
        entry, decorative: !entry, compact: false, hidden: false,
        x: blockX + square.x * pixelUnit,
        y: blockY + square.y * pixelUnit,
        pixels: square.size * pixelUnit,
      };
    });
  });
  const contentHeight = archive
    ? Math.ceil(totalModules / archiveColumns) * 5 * archiveUnit
    : Math.ceil(totalModules / 2) * 5 * unit;
  return { tiles, metrics, contentHeight: Math.max(height + 1, contentHeight), moduleCount: totalModules / 2 };
}

````

### `portfolio-edge-typography-replacements.zip` → `src/styles/global.css`

````css
:root {
  font-family: 'DM Sans', 'Segoe UI', Arial, sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  --world: #161b20;
  --world-grid: rgba(239, 229, 211, .035);
  --paper: #f0ede6;
  --paper-soft: #e7e1d7;
  --ink: #232823;
  --muted: #78786f;
  --lede-color: #6b7169;
  --paper-line: #cbc7bc;
  --accent: #777157;
  --tile-outline: rgba(246, 238, 219, .64);
  --tile-tone-0: #263d3e;
  --tile-tone-1: #59483c;
  --tile-tone-2: #35495a;
  --tile-tone-3: #565042;
  --tile-tone-4: #493d48;
  --tile-tone-5: #434c44;
}
:root[data-theme="dark"] {
  --world: #090e14;
  --world-grid: rgba(226, 234, 244, .035);
  --paper: #21272b;
  --paper-soft: #2b3236;
  --ink: #eeeae1;
  --muted: #a2aaa6;
  --lede-color: #909995;
  --paper-line: #47504f;
  --accent: #d1b99a;
  --tile-outline: rgba(233, 239, 239, .48);
}
* { box-sizing: border-box; }
html, body, #root { min-width: 280px; min-height: 100%; margin: 0; }
html { overflow: hidden; }
body { background: var(--world); color: var(--ink); }
button, a { -webkit-tap-highlight-color: transparent; }
button { font: inherit; }
button:focus-visible, a:focus-visible { outline: 2px solid #89adc1; outline-offset: 3px; }
a { color: inherit; }
.site-shell { width: 100%; min-height: 100svh; isolation: isolate; background: var(--world); overflow: hidden; }
.site-grain { pointer-events: none; position: fixed; inset: 0; z-index: 5; opacity: .3; background-image: repeating-linear-gradient(90deg,transparent 0, transparent 31px, var(--world-grid) 32px), repeating-linear-gradient(0deg,transparent 0, transparent 31px, var(--world-grid) 32px); }
/* The mosaic remains scrollable under the independently scrolling portfolio. */
.mosaic-scroll { position: fixed; inset: 0; overflow-y: auto; overflow-x: hidden; overscroll-behavior: contain; scrollbar-width: none; background: var(--world); }
.mosaic-scroll::-webkit-scrollbar, .portfolio-panel::-webkit-scrollbar { display: none; }
.mosaic-plane { position: relative; width: 100%; min-height: 100%; }
.mosaic-tile { appearance: none; position: absolute; top: 0; left: 0; padding: 0; margin: 0; width: var(--tile-size); height: var(--tile-size); display: block; overflow: hidden; border-radius: 0; border: 1px solid var(--tile-outline); transform: translate3d(var(--tile-x), var(--tile-y), 0); transition: transform .82s cubic-bezier(.23,.87,.24,1), width .82s cubic-bezier(.23,.87,.24,1), height .82s cubic-bezier(.23,.87,.24,1), border-color .22s ease, opacity .3s ease; will-change: transform; container-type: inline-size; background: var(--tile-tone); }
.mosaic-tile--entry { cursor: pointer; text-align: left; color: #faf7f0; z-index: 1; }
.mosaic-tile--entry:hover, .mosaic-tile--entry:focus-visible { z-index: 3; border-color: #f9e5c9; }
.tile-visual { position: absolute; inset: 0; display: block; background-image: var(--tile-image); background-position: center; background-size: cover; transform: scale(1.005); transition: transform .4s cubic-bezier(.2,.75,.2,1), filter .25s; filter: saturate(.76) brightness(.86); }
.tile-visual::after { content: ''; position: absolute; inset: 0; background: linear-gradient(0deg, rgba(5,11,16,.87),rgba(5,11,16,.06) 70%); }
.mosaic-tile--entry:hover .tile-visual, .mosaic-tile--entry:focus-visible .tile-visual { transform: scale(1.085); filter: saturate(1) brightness(1.06); }
.tile-content { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end; padding: clamp(11px, 1.2vw, 22px); text-shadow: 0 1px 12px #06090fb0; min-width: 0; }
.tile-category { display: block; font-size: clamp(10px, 3.8cqi, 13px); letter-spacing: .08em; line-height: 1.25; text-transform: uppercase; font-weight: 700; opacity: .9; margin-bottom: 6px; }
.tile-title { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; line-clamp: 3; overflow: hidden; font: normal clamp(18px, 9cqi, 35px)/1.06 'Instrument Serif', Georgia, serif; max-width: 100%; overflow-wrap: anywhere; text-wrap: balance; }
.tile-corner { position: absolute; top: 10px; right: 9px; opacity: 0; transform: translate(-3px,3px); transition: opacity .2s, transform .2s; }
.mosaic-tile:hover .tile-corner, .mosaic-tile:focus-visible .tile-corner { opacity: 1; transform: none; }
.mosaic-tile--sample .tile-category { color: #e8d7b7; }
/* Tiny squares are decorative only; entry sizing is enforced by the layout generator. */
.mosaic-tile--tiny .tile-content { padding: 9px; }
.mosaic-tile--tiny .tile-title { font-size: clamp(15px, 8cqi, 20px); }
@container (max-width: 185px) { .tile-category { font-size: 10px; letter-spacing: .03em; } .tile-content { padding: 10px; } .tile-title { font-size: clamp(16px, 10cqi, 21px); } }
.mosaic-tile--ambient { border-color: rgba(240, 231, 214, .23); pointer-events: none; }
.mosaic-tile--ambient::after { content: ''; position: absolute; inset: 0; background: linear-gradient(140deg, rgba(255,255,255,.12),transparent 55%,rgba(0,0,0,.28)); }
.mosaic-tile--ambient {
  background-color: var(--tile-tone);
  background-image: var(--ambient-art), linear-gradient(135deg, rgba(255,255,255,.055), rgba(0,0,0,.22));
  background-position: center;
  background-size: cover;
}
.ambient-mark { display: none; }
.panel-shadow { position: fixed; z-index: 6; top: 0; bottom: 0; left: 50%; transform: translateX(-50%); width: var(--panel-width, min(600px,max(468px,43vw))); box-shadow: 0 25px 95px #05080da8,0 0 0 1px rgba(255,255,255,.1); pointer-events: none; transition: opacity .4s, transform .6s; }
.site-shell--archive .panel-shadow { opacity: 0; transform: translateX(-50%) translateY(50px) scale(.94); }
.portfolio-panel { position: fixed; z-index: 7; top: 0; bottom: 0; left: 50%; transform: translateX(-50%); width: var(--panel-width, min(600px,max(468px,43vw))); overflow-y: auto; overscroll-behavior: contain; scrollbar-width: none; padding: 27px clamp(25px,3.1vw,49px) 16px; background: var(--paper); color: var(--ink); border: 1px solid var(--paper-line); box-shadow: 0 0 0 1px rgba(0,0,0,.06); transition: transform .63s cubic-bezier(.25,.72,.15,1), opacity .45s ease; }
.portfolio-panel--hidden { opacity: 0; transform: translateX(-50%) translateY(72px) scale(.9); pointer-events: none; }
.panel-heading { display:flex; align-items:center; justify-content:space-between; gap:10px; padding-bottom: 27px; border-bottom:1px solid var(--paper-line); }
.panel-monogram { border:0; background:transparent; color:var(--ink); padding:0; font:bold 27px 'Instrument Serif',Georgia,serif; cursor:pointer; }
.panel-monogram span { color: var(--accent); }
.panel-label,.panel-index,.micro-label,.number-label,.panel-footer,.portrait-credit,.source-disclosure { font: 500 9px/1.3 'DM Mono',monospace; letter-spacing:.12em; }
.panel-label { color:var(--muted); }
.tiny-asterisk { color: var(--accent); font-size: 16px; vertical-align:-2px; }
.panel-index { color:var(--muted); }
.intro-section { padding-top: 49px; }
.micro-label,.number-label { display:block; color:var(--muted); }
.hero-intro { display:flex; align-items:flex-end; gap:18px; margin-top:27px; }
.hero-copy { min-width:0; flex:1; }
.hero-greeting { font:italic 26px 'Instrument Serif',Georgia,serif; }
.hero-copy h1 { margin:10px 0 0; font:normal clamp(34px,3.65vw,52px)/1.02 'Instrument Serif',Georgia,serif; letter-spacing:-.035em; white-space:normal; }
.hero-copy h1 em, .editorial-block h2 em,.view-title em { font-weight:400; color:var(--accent); }
.hero-rule { width:45px; height:1px; background:var(--accent); margin:18px 0; }
.hero-role { font-size:11px; font-weight:700; letter-spacing:.09em; text-transform:uppercase; margin:0 0 8px; }
.hero-description { font-size:12px; line-height:1.7; color:var(--muted); margin:0; }
.portrait-frame { width: 32%; flex:none; aspect-ratio: .77; display:flex; flex-direction:column; align-self:center; position:relative; }
.portrait-frame img { display:block; width:100%; height:100%; object-fit:cover; object-position:center 34%; filter:saturate(.72); border:1px solid var(--paper-line); }
.portrait-credit { position:absolute; bottom:-17px; left:0; color:var(--muted); white-space:nowrap; font-size:7px; }
.hero-actions { display:flex; flex-wrap:wrap; gap:9px; margin-top:39px; }
.pill-link { text-decoration:none; display:inline-flex; align-items:center; justify-content:center; gap:12px; border:1px solid var(--ink); border-radius:100px; padding:11px 14px; font-size:11px; font-weight:600; cursor:pointer; transition:transform .18s,background .18s,color .18s; }
.pill-link:hover { transform:translateY(-2px); }
.pill-link:active { transform:scale(.96); }
.pill-link--dark { background:var(--ink); color:var(--paper); }
.pill-link--outline { background:transparent; color:var(--ink); }
.pill-link--outline:hover { background:var(--paper-soft); }
.editorial-block { margin-top:66px; padding-top:23px; border-top:1px solid var(--paper-line); }
.section-heading { display:flex; align-items:center; justify-content:space-between; gap:10px; }
.section-star { color:var(--accent); }
.editorial-block h2 { margin:22px 0 20px; font:normal clamp(38px,4vw,56px)/.97 'Instrument Serif',Georgia,serif; letter-spacing:-.02em; }
.editorial-block p,.body-copy { color:var(--muted); font-size:13px; line-height:1.85; letter-spacing:.018em; max-width:52ch; }
.ink-divider { width:100%; height:1px; background:var(--paper-line); margin:27px 0 22px; }
.feature-links { margin-top:13px; }
.feature-link { display:flex; justify-content:space-between; align-items:center; gap:12px; width:100%; padding:13px 0; background:none; color:var(--ink); border:0; border-bottom:1px solid var(--paper-line); text-align:start; cursor:pointer; font:normal 20px/1.2 'Instrument Serif',Georgia,serif; }
.feature-link:hover { color:var(--accent); }
.feature-number { font:9px 'DM Mono',monospace; color:var(--muted); margin-inline-end:auto; min-width:28px; }
.feature-link > svg:last-child { margin-inline-start:auto; }
.editorial-block--bottom { padding-bottom:40px; }
.inline-arrow { display:inline-flex;align-items:center;gap:9px;padding:0;border:0;background:none;color:var(--ink);font-size:12px;font-weight:600;text-decoration:none;cursor:pointer; }
.inline-arrow:hover { color:var(--accent); }
.inner-view { padding-top:51px; min-height:65%; }
.view-title { font:normal clamp(44px,5vw,72px)/.97 'Instrument Serif',Georgia,serif; letter-spacing:-.025em; margin:23px 0 19px; }
.view-lede { max-width:45ch; color:var(--lede-color); font-size:clamp(16px,1.4vw,18px); font-weight:400; line-height:1.66; letter-spacing:.012em; margin:0 0 39px; }
.project-list { border-top:1px solid var(--paper-line); }
.project-row { width:100%; padding:17px 0; display:flex; align-items:center; gap:12px; border:0; border-bottom:1px solid var(--paper-line); background:none; text-align:start; color:var(--ink); cursor:pointer; }
.project-row:hover .project-row-description strong { color:var(--accent); }
.project-row img { width:68px;height:68px;object-fit:cover;border:1px solid var(--paper-line); }
.project-row-number { font:9px 'DM Mono',monospace;color:var(--muted); }
.project-row-description { flex:1; min-width:0;display:flex;flex-direction:column;gap:7px; }
.project-row-description strong { font:normal 24px 'Instrument Serif',Georgia,serif; }
.project-row-description small { color:var(--muted);font:9px 'DM Mono',monospace; }
.source-disclosure { margin:24px 0;line-height:1.7;color:var(--muted);letter-spacing:0; }
.editorial-illustration,.entry-hero-image { display:block;width:100%;aspect-ratio:1.55;object-fit:cover;border:1px solid var(--paper-line); }
.subheading { font:normal 33px 'Instrument Serif',Georgia,serif;margin:34px 0 12px; }
.contact-options { display:grid; gap:10px; margin:38px 0 25px; }
.fine-print { color:var(--muted);font-size:11px;line-height:1.7; }
.sample-alert { margin-top:18px; padding:10px 12px; background:var(--paper-soft);border-left:2px solid var(--accent);font-size:10px;font-weight:700;letter-spacing:.06em; }
.entry-view .view-title { overflow-wrap:anywhere; }
.entry-figure { margin:0 0 22px; }
.entry-caption { margin-top:17px; font-size:10px; letter-spacing:.16em; line-height:1.5; }
.entry-links,.writing-resource-list { display:grid; gap:10px; margin:27px 0 24px; }
.resource-link { width:100%; min-height:66px; display:flex; align-items:center; justify-content:space-between; gap:14px; padding:15px 16px 15px 18px; background:transparent; color:var(--ink); border:1px solid var(--paper-line); border-radius:2px; text-decoration:none; text-align:start; cursor:pointer; font:600 clamp(14px,1.25vw,17px)/1.4 'DM Sans','Segoe UI',Arial,sans-serif; letter-spacing:.018em; transition:background .2s,border-color .2s,transform .2s; }
.resource-link:hover { background:var(--paper-soft); border-color:var(--accent); transform:translateY(-2px); }
.resource-link:active { transform:translateY(0); }
.resource-link-icon { width:36px; height:36px; flex:none; display:grid; place-items:center; border:1px solid var(--paper-line); border-radius:2px; transition:transform .2s,border-color .2s; }
.resource-link:hover .resource-link-icon, .resource-link:focus-visible .resource-link-icon { transform:translate(2px,-2px); border-color:var(--accent); }
[dir="rtl"] .resource-link:hover .resource-link-icon, [dir="rtl"] .resource-link:focus-visible .resource-link-icon { transform:translate(-2px,-2px); }
.entry-view .pill-link { margin-top:28px; }
.panel-footer { margin-top:58px; padding:20px 0 26px; border-top:1px solid var(--paper-line);display:flex;justify-content:space-between;gap:15px;color:var(--muted);font-size:8px;letter-spacing:.02em; }
/* The toolbar is transparent: the collage always extends behind it. */
.floating-controls { position:fixed;z-index:45;top:24px;right:26px;display:flex;align-items:center;gap:14px;pointer-events:none; }
.orb-button { width:46px;height:46px;display:grid;place-items:center;position:relative;pointer-events:auto; border-radius:50%; border:1px solid rgba(237,237,231,.58);color:#f6f1e7;background:rgba(23,29,35,.68);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);cursor:pointer;box-shadow:0 3px 17px rgba(0,0,0,.22);transition:transform .2s cubic-bezier(.2,.8,.2,1),background .2s,border-color .2s,box-shadow .2s; }
.orb-button:hover { transform:scale(1.1);background:rgba(58,68,74,.9);border-color:#f5ead7;box-shadow:0 4px 24px rgba(0,0,0,.35); }
.orb-button:active { transform:scale(.92); }
.orb-button.is-active { background:#e8e0d1;color:#1c2529;border-color:#fff8ea; }
.language-button span:first-child { font:500 12px 'DM Mono',monospace; }
.orb-tooltip { position:absolute;right:50%;top:calc(100% + 10px);transform:translate(50%,-4px);white-space:nowrap;max-width:190px;pointer-events:none;opacity:0;border-radius:4px;background:#f2eadf;color:#252626;font-size:10px;padding:6px 9px;transition:opacity .2s,transform .2s; }
.orb-button:hover .orb-tooltip,.orb-button:focus-visible .orb-tooltip { opacity:1;transform:translate(50%,0); }
.archive-demo-dock { position:fixed;z-index:46;left:24px;bottom:24px;max-width:calc(100% - 48px);display:flex;gap:18px;align-items:center;padding:12px 13px 12px 16px;color:#e8e6df;background:rgba(17,23,29,.9);border:1px solid rgba(248,244,231,.35);backdrop-filter:blur(16px);box-shadow:0 10px 40px #0007; }
.dock-copy { display:flex;flex-direction:column;gap:5px;font-size:10px;color:#d3d4d0; }
.dock-kicker { letter-spacing:.1em;font-size:9px;text-transform:uppercase;font-weight:700;color:#eae9e4; }
.dock-hint { color:#aab3b4; }
.dock-actions { display:flex;gap:6px; }
.dock-actions button { width:48px;height:34px;display:flex;align-items:center;justify-content:center;gap:2px;border:1px solid #ffffff60;background:#ffffff0e;color:#faf7f0;cursor:pointer; }
.dock-actions button:hover { background:#ffffff2b; }
.dock-actions button:disabled { opacity:.3;cursor:default; }
.dock-actions button span { font-size:11px; }
.transition-layer { position:fixed;z-index:90;inset:0;pointer-events:none;overflow:hidden; }
.transition-image { position:fixed;left:var(--origin-x);top:var(--origin-y);width:var(--origin-width);height:var(--origin-height);background-image:linear-gradient(0deg,rgba(8,13,17,.55),rgba(8,13,17,.26)),var(--transition-image);background-position:center;background-size:cover;box-shadow:0 0 0 2px #f2e5d0;transition:left .42s cubic-bezier(.2,.74,.12,1),top .42s cubic-bezier(.2,.74,.12,1),width .42s cubic-bezier(.2,.74,.12,1),height .42s cubic-bezier(.2,.74,.12,1),opacity .32s;display:grid;place-items:center; }
.transition-title { opacity:0;color:#f5ede3;font:normal clamp(34px,6vw,84px) 'Instrument Serif',Georgia,serif;letter-spacing:-.04em;text-align:center;transition:opacity .18s .18s; }
.transition-layer--zoom .transition-image,.transition-layer--reveal .transition-image { left:-3vw;top:-3vh;width:106vw;height:106vh; }
.transition-layer--zoom .transition-title { opacity:1; }
.transition-layer--reveal { opacity:0;transition:opacity .30s ease; }
.transition-wash { position:absolute;inset:0;background:#efe7d8;opacity:0;transition:opacity .35s ease; }
.transition-layer--zoom .transition-wash { opacity:.1; }
/* Narrow screens retain a readable paper column and two square-only side streams.
   The same achievement buttons join a grid when Archive Mode opens. */
.mosaic-scroll--compact:not(.mosaic-scroll--archive) { overflow: hidden; }
.mosaic-scroll--compact:not(.mosaic-scroll--archive) .mosaic-tile[data-side="left"] {
  animation: mosaic-stream-left 27s ease-in-out infinite alternate;
}
.mosaic-scroll--compact:not(.mosaic-scroll--archive) .mosaic-tile[data-side="right"] {
  animation: mosaic-stream-right 31s ease-in-out infinite alternate;
}
@keyframes mosaic-stream-left { from { translate: 0 0; } to { translate: 0 var(--stream-negative); } }
@keyframes mosaic-stream-right { from { translate: 0 0; } to { translate: 0 var(--stream-positive); } }
.mosaic-scroll--compact.mosaic-scroll--archive { overflow-y: auto; overflow-x: hidden; }
.mosaic-scroll--archive .mosaic-tile--concealed { opacity: 0; pointer-events: none; }
.mosaic-scroll--compact .mosaic-tile--responsive .tile-title { font-size: clamp(16px, 9cqi, 28px); line-height: 1.08; white-space: normal; }
.mosaic-scroll--compact .mosaic-tile--responsive .tile-category { font-size: clamp(9px, 3cqi, 11px); }
.mosaic-scroll--compact:not(.mosaic-scroll--archive) .tile-content { opacity: .65; }
.mosaic-scroll--compact.mosaic-scroll--archive .tile-content { padding: clamp(10px, 2.3vw, 18px); }
.site-shell--compact .portfolio-panel,
.site-shell--compact .panel-shadow { top: 0; bottom: 0; }
.site-shell--compact .portfolio-panel {
  padding: max(76px, calc(env(safe-area-inset-top, 0px) + 63px)) clamp(17px, 3vw, 30px) 18px;
}
.site-shell--compact .floating-controls {
  top: max(12px, env(safe-area-inset-top, 0px));
  right: max(12px, env(safe-area-inset-right, 0px));
  gap: 10px;
}
.site-shell--compact .orb-button { width: 44px; height: 44px; }
.site-shell--compact .orb-tooltip { display: none; }
.site-shell--compact .archive-demo-dock {
  left: max(10px, env(safe-area-inset-left, 0px));
  bottom: max(10px, env(safe-area-inset-bottom, 0px));
  max-width: calc(100% - 20px);
}
@media (max-width: 1100px) { .panel-label { font-size:8px; } .portrait-frame { width:30%; } }
@media (max-width: 720px) {
  .portfolio-panel,.panel-shadow { top:0;bottom:0; }
  .portfolio-panel { padding: max(76px, calc(env(safe-area-inset-top, 0px) + 63px)) 23px 15px; }
  .panel-heading { padding-bottom:18px; }
  .floating-controls { top:max(12px, env(safe-area-inset-top, 0px));right:max(12px, env(safe-area-inset-right, 0px));gap:10px; }
  .orb-button { width:44px;height:44px; }
  .intro-section { padding-top:33px; }
  .hero-intro { gap:15px; }
  .hero-copy h1 { font-size:clamp(34px,8.2vw,55px); }
  .portrait-frame { width:32%; }
  .hero-greeting { font-size:24px; }
  .hero-description { font-size:12px; }
  .editorial-block { margin-top:48px; }
  .editorial-block h2 { font-size:clamp(38px,9vw,52px); }
  .view-lede { font-size:16px; line-height:1.7; margin-bottom:32px; }
  .resource-link { min-height:60px; padding:12px 13px; font-size:15px; }
  .resource-link-icon { width:32px; height:32px; }
  .archive-demo-dock { bottom:13px;left:13px;max-width:calc(100% - 26px);padding:9px 10px;gap:10px; }
  .dock-hint { display:none; }
  .dock-actions button { width:38px;height:34px; }
}
@media (max-width: 380px) {
  .hero-intro { flex-wrap:wrap; }
  .hero-copy { flex-basis: 100%; }
  .portrait-frame { width:104px;aspect-ratio:.77;position:relative;right:auto;top:auto;opacity:1; }
  .hero-description { max-width:26ch; }
  .portfolio-panel { padding:78px 17px 14px; }
  .panel-label { font-size:7px; }
}
@media (prefers-reduced-motion: reduce) {
  .mosaic-scroll--compact .mosaic-tile { animation: none !important; translate: 0 0 !important; }
  *,*::before,*::after { animation-duration:.01ms!important;transition-duration:.01ms!important;scroll-behavior:auto!important; }
}

````

### `portfolio-edge-typography-replacements.zip` → `tests/mosaicLayout.test.js`

````javascript
import test from 'node:test';
import assert from 'node:assert/strict';
import { SQUARE_PATTERN, createMosaicSlots, generateSquareFormation, computeMetrics, layoutMosaic } from '../src/lib/mosaicLayout.js';

const makeEntries = n => Array.from({ length: n }, (_, i) => ({ id: `achievement-${i}` }));
const close = (a,b) => Math.abs(a-b) < 1e-6;

function checkFormation(squares) {
  const sampleCount = 80;
  for (let row = 0; row < sampleCount; row++) for (let col = 0; col < sampleCount; col++) {
    const x = (col + 0.5) * 5 / sampleCount;
    const y = (row + 0.5) * 5 / sampleCount;
    assert.equal(squares.filter(t => x >= t.x - 1e-8 && x < t.x+t.size - 1e-8 && y >= t.y - 1e-8 && y < t.y+t.size - 1e-8).length, 1);
  }
  assert.ok(close(squares.reduce((sum, t) => sum+t.size*t.size, 0), 25));
}

test('seeded tilings contain only true squares, with no gaps or overlaps', () => {
  for (let seed of [1, 42, 12345, 0xffffffff]) for (let moduleIndex = 0; moduleIndex < 16; moduleIndex++) {
    checkFormation(generateSquareFormation(moduleIndex, seed));
  }
});

test('subdivision, merge and rotations yield varied module topology', () => {
  const signatures = new Set(Array.from({length:64},(_,i) => JSON.stringify(generateSquareFormation(i, 777).map(t => [t.x,t.y,t.size]))));
  assert.ok(signatures.size > 50, `${signatures.size} of 64 formations differ`);
  const tiles = Array.from({length:64},(_,i)=>generateSquareFormation(i, 777));
  assert.ok(tiles.some(t=>t.some(s=>s.size <= 1)));
  assert.ok(tiles.some(t=>t.some(s=>s.size >= 3)));
});

test('formation topology remains fixed for seed + module index', () => {
  assert.deepEqual(generateSquareFormation(4, 992), generateSquareFormation(4, 992));
  assert.notDeepEqual(generateSquareFormation(4, 992), generateSquareFormation(4, 993));
});

test('desktop wings touch portfolio edges and archive spans viewport', () => {
  const entries = makeEntries(18);
  const viewport = {width: 1440,height: 900};
  const closed = layoutMosaic(entries, viewport, false, 72);
  const open = layoutMosaic(entries, viewport, true, 72);
  const left = (viewport.width-closed.metrics.panelWidth)/2;
  const right = (viewport.width+closed.metrics.panelWidth)/2;
  assert.ok(closed.tiles.every(t=>t.side==='left'? t.x+t.pixels<=left+1e-6 : t.x>=right-1e-6));
  assert.ok(closed.tiles.some(t=>t.side==='left' && close(t.x+t.pixels,left)));
  assert.ok(closed.tiles.some(t=>t.side==='right' && close(t.x,right)));
  assert.ok(open.tiles.some(t=>close(t.x,0)));
  assert.ok(open.tiles.some(t=>close(t.x+t.pixels,viewport.width)));
  assert.deepEqual(closed.tiles.map(t=>t.id),open.tiles.map(t=>t.id));
});

test('the same module identities and geometry persist through resizing and rotation', () => {
  const entries = makeEntries(30);
  const sizes = [{width:1440,height:900},{width:1600,height:850},{width:1800,height:1000}];
  const layouts = sizes.map(size=>layoutMosaic(entries,size,true,5353));
  const lookup = l=>new Map(l.tiles.map(t=>[t.id,[t.size,t.globalModuleIndex]]));
  const base = lookup(layouts[0]);
  for (const layout of layouts.slice(1)) {
    const next = lookup(layout);
    for (const [key,value] of base) if(next.has(key))assert.deepEqual(next.get(key),value);
  }
});

test('archive has edge-to-edge coverage and reaches bottom on desktop and compact screens', () => {
  for (const viewport of [{width:390,height:844},{width:768,height:1024},{width:1100,height:580},{width:1280,height:800},{width:1722,height:854},{width:1920,height:1080}]) {
    for (const count of [4,18,34,67]) {
      const {tiles,contentHeight}=layoutMosaic(makeEntries(count),viewport,true,123456);
      assert.ok(contentHeight>=viewport.height);
      for(let row=0;row<12;row++)for(let col=0;col<15;col++){
        const x=(col+0.5)*viewport.width/15;
        const y=(row+0.5)*viewport.height/12;
        const matches=tiles.filter(t=>x>=t.x-1e-7 && x<t.x+t.pixels-1e-7 && y>=t.y-1e-7 && y<t.y+t.pixels-1e-7);
        assert.equal(matches.length,1,`${viewport.width}x${viewport.height} (${x},${y})`);
      }
    }
  }
});

test('compact portfolio has exactly two streams and compacts into grid with identical achievement IDs', () => {
  for (const viewport of [{width:280,height:620},{width:390,height:844},{width:600,height:800},{width:800,height:1000},{width:1100,height:580}]) {
    const entries=makeEntries(19);
    const normal=layoutMosaic(entries,viewport,false,987);
    const archive=layoutMosaic(entries,viewport,true,987);
    assert.equal(computeMetrics(viewport).compact,true);
    const left=(viewport.width-normal.metrics.panelWidth)/2;
    const right=(viewport.width+normal.metrics.panelWidth)/2;
    assert.ok(normal.tiles.every(t=>close(t.pixels,t.pixels) && (t.side==='left'?close(t.x+t.pixels,left):close(t.x,right))));
    assert.deepEqual(normal.tiles.filter(t=>t.entry).map(t=>t.id),archive.tiles.filter(t=>t.entry).map(t=>t.id));
  }
});

test('dynamic slot generator maintains capacity for added achievements', () => {
  for(const n of [4,18,80,200])assert.ok(createMosaicSlots(n,1,444).length>=n);
});


test('portfolio square tiling reaches both horizontal viewport edges without gaps', () => {
  for (const viewport of [
    {width: 1440, height: 900}, {width: 1722, height: 854},
    {width: 1920, height: 1080}, {width: 2560, height: 1440},
    {width: 390, height: 844}, {width: 820, height: 1180},
    {width: 1180, height: 600},
  ]) {
    const { tiles, metrics } = layoutMosaic(makeEntries(24), viewport, false, 231);
    const left = (viewport.width - metrics.panelWidth) / 2;
    const right = (viewport.width + metrics.panelWidth) / 2;
    for (let row=0; row<12; row++) {
      const y = (row + .5) * viewport.height/12;
      for (let col=0; col<12; col++) {
        const x = (col + .5) * viewport.width/12;
        if (x >= left && x < right) continue;
        const found = tiles.some(t => x >= t.x-1e-7 && x < t.x+t.pixels-1e-7 && y>=t.y-1e-7 && y<t.y+t.pixels-1e-7);
        assert.ok(found, `uncovered edge at ${viewport.width}x${viewport.height}, (${x}, ${y})`);
      }
    }
  }
});

test('desktop achievement squares are always large enough and identities are stable across viewport resizing', () => {
  const entries = makeEntries(31);
  const widths = [1440, 1600, 1722, 1920, 2560];
  let ids;
  for (const width of widths) {
    for (const archive of [false, true]) {
      const {tiles} = layoutMosaic(entries, {width,height:900}, archive, 42);
      const actual = tiles.filter(t=>t.entry);
      assert.equal(actual.length, entries.length);
      assert.ok(actual.every(t=>t.pixels>=164-1e-6), `achievement tile too small at ${width}`);
      const mapped = new Map(actual.map(t=>[t.entry.id,t.id]));
      if (!ids) ids=mapped;
      for (const [id,tileId] of ids) assert.equal(mapped.get(id),tileId);
    }
  }
});

````

### `portfolio-mobile-scroll-replacements.zip` → `src/components/ArchiveMosaic.jsx`

````jsx
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { layoutMosaic } from '../lib/mosaicLayout.js';
import { visibleMosaicTiles } from '../lib/visibleMosaicTiles.js';
import { advanceAutoScroll, initialAutoScrollState, SCROLL_RESUME_DELAY_MS } from '../lib/autoScroll.js';
import Icon from './Icons.jsx';
import { createAmbientBackground } from '../lib/ambientPattern.js';

// The artwork generator is costly when hundreds of SVG backgrounds are encoded.
// Generate once per tile identity, only when the tile enters the viewport.
const artworkCache = new Map();
function artworkFor(id) {
  if (!artworkCache.has(id)) {
    if (artworkCache.size > 900) artworkCache.delete(artworkCache.keys().next().value);
    artworkCache.set(id, createAmbientBackground(id));
  }
  return artworkCache.get(id);
}

const ArchiveTile = memo(function ArchiveTile({ tile, onOpen, lang }) {
  const { entry, pixels, x, y, decorative } = tile;
  const tone = tile.globalModuleIndex ?? tile.moduleIndex ?? tile.row ?? 0;
  const style = {
    '--tile-x': `${x}px`, '--tile-y': `${y}px`, '--tile-size': `${pixels}px`,
    '--tile-image': entry ? `url("${entry.image}")` : undefined,
    '--tile-tone': `var(--tile-tone-${Math.abs(tone) % 6})`,
    ...(decorative ? { '--ambient-art': artworkFor(tile.id) } : {}),
  };
  if (decorative) {
    return <div className="mosaic-tile mosaic-tile--ambient" style={style} aria-hidden="true" />;
  }
  const title = lang === 'ar' ? entry.titleAr || entry.title : entry.title;
  const category = lang === 'ar' ? entry.categoryAr || entry.category : entry.category;
  return (
    <button type="button"
      className={`mosaic-tile mosaic-tile--entry ${entry.sample ? 'mosaic-tile--sample' : ''} ${tile.compact ? 'mosaic-tile--responsive' : tile.size === 1 ? 'mosaic-tile--tiny' : ''}`}
      style={style} onClick={event => onOpen(entry, event.currentTarget)}
      data-side={tile.side} data-entry-id={entry.id} title={title}
      aria-label={`${title}${entry.sample ? ' — sample' : ''}`}>
      <span className="tile-visual" aria-hidden="true" />
      <span className="tile-content">
        <span className="tile-category">{entry.sample ? '◇ ' : '✦ '}{category}</span>
        <span className="tile-title">{title}</span>
        <span className="tile-corner"><Icon name="upRight" size={14}/></span>
      </span>
    </button>
  );
});

export default function ArchiveMosaic({ entries, viewport, archive, lang, onOpen, layoutSeed = 1 }) {
  const scrollRef = useRef(null);
  const pauseUntil = useRef(0);
  const lastTime = useRef(0);
  const scrollState = useRef(initialAutoScrollState());
  const [viewTop, setViewTop] = useState(0);
  const layout = useMemo(() => layoutMosaic(entries, viewport, archive, layoutSeed), [entries, viewport.width, viewport.height, archive, layoutSeed]);
  const viewportHeight = viewport.height;

  const syncWindow = useCallback((force = false) => {
    const top = scrollRef.current?.scrollTop ?? 0;
    // Recalculate the visible set only after crossing a 120px bucket.
    const bucket = Math.floor(top / 120) * 120;
    setViewTop(previous => force || previous !== bucket ? bucket : previous);
  }, []);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;
    element.scrollTop = 0;
    syncWindow(true);
    lastTime.current = 0;
    scrollState.current = initialAutoScrollState();
    pauseUntil.current = performance.now() + SCROLL_RESUME_DELAY_MS;
  }, [archive, layout.metrics.compact, syncWindow]);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pause = () => {
      pauseUntil.current = performance.now() + SCROLL_RESUME_DELAY_MS;
      // Allow manual scrolling to take precedence, even during the quick rewind.
      scrollState.current = { ...initialAutoScrollState(), position: element.scrollTop };
    };
    const scroll = () => syncWindow();
    const hoverEntry = event => {
      if (event.target.closest?.('.mosaic-tile--entry')) pause();
    };
    element.addEventListener('wheel', pause, { passive: true });
    element.addEventListener('touchstart', pause, { passive: true });
    element.addEventListener('pointerdown', pause, { passive: true });
    element.addEventListener('pointerover', hoverEntry, { passive: true });
    element.addEventListener('focusin', pause);
    element.addEventListener('scroll', scroll, { passive: true });
    // Drive the 2-second eased rewind with requestAnimationFrame. The DOM
    // scroll position changes per frame; React only updates at 120px buckets.
    // This is smoother than the previous 25fps interval without re-rendering
    // hundreds of tiles every frame.
    let frame = 0;
    const tick = time => {
      const delta = lastTime.current ? Math.min(time - lastTime.current, 100) : 0;
      lastTime.current = time;
      if (!document.hidden && !reduce.matches && time >= pauseUntil.current) {
        const max = element.scrollHeight - element.clientHeight;
        if (max > 40) {
          const next = advanceAutoScroll(
            { ...scrollState.current, position: element.scrollTop }, delta, max
          );
          scrollState.current = next;
          element.scrollTop = next.position;
        }
      }
      frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(frame);
      element.removeEventListener('wheel', pause);
      element.removeEventListener('touchstart', pause);
      element.removeEventListener('pointerdown', pause);
      element.removeEventListener('pointerover', hoverEntry);
      element.removeEventListener('focusin', pause);
      element.removeEventListener('scroll', scroll);
    };
  }, [syncWindow]);

  const visible = useMemo(() => visibleMosaicTiles(layout.tiles, viewTop, viewportHeight), [layout.tiles, viewTop, viewportHeight]);
  return (
    <div ref={scrollRef}
      className={`mosaic-scroll ${archive ? 'mosaic-scroll--archive' : ''} ${layout.metrics.compact ? 'mosaic-scroll--compact' : ''}`}
      aria-label="Interactive archive collage">
      <div className="mosaic-plane" style={{ height: `${layout.contentHeight}px` }}>
        {visible.map(tile => <ArchiveTile key={tile.id} tile={tile} onOpen={onOpen} lang={lang} />)}
      </div>
    </div>
  );
}

````

### `portfolio-mobile-scroll-replacements.zip` → `src/lib/autoScroll.js`

````javascript
/**
 * Archive autoscroll is an inexpensive, deterministic state machine.
 * It always advances downward, briefly rewinds to the top, then repeats.
 */
export const SCROLL_RESUME_DELAY_MS = 2000;
export const SCROLL_SPEED_PX_PER_MS = 0.019 * (4 / 3); // 33⅓% faster than before
export const REWIND_DURATION_MS = 2000;

export function initialAutoScrollState() {
  return { position: 0, phase: 'down', rewindFrom: 0, rewindElapsed: 0 };
}

export function advanceAutoScroll(state, elapsedMs, maximum) {
  const max = Math.max(0, maximum);
  const delta = Math.max(0, Math.min(elapsedMs, 100));
  const position = Math.min(max, Math.max(0, state.position));

  if (max <= 40) return { ...initialAutoScrollState(), position };

  if (state.phase === 'rewind') {
    const rewindElapsed = Math.min(REWIND_DURATION_MS, state.rewindElapsed + delta);
    const progress = rewindElapsed / REWIND_DURATION_MS;
    // Quintic smootherstep: zero velocity at both ends of the 2-second
    // return. This avoids the abrupt initial snap of a quadratic rewind.
    if (progress >= 1) return initialAutoScrollState();
    const eased = progress * progress * progress * (progress * (progress * 6 - 15) + 10);
    const remaining = 1 - eased;
    return {
      position: Math.min(max, state.rewindFrom * remaining),
      phase: 'rewind', rewindFrom: state.rewindFrom, rewindElapsed,
    };
  }

  const next = Math.min(max, position + delta * SCROLL_SPEED_PX_PER_MS);
  if (next >= max) {
    return { position: max, phase: 'rewind', rewindFrom: max, rewindElapsed: 0 };
  }
  return { position: next, phase: 'down', rewindFrom: 0, rewindElapsed: 0 };
}

````

### `portfolio-mobile-scroll-replacements.zip` → `src/lib/mosaicLayout.js`

````javascript
/** A 5 × 5 square module is a convenient building block, not a repeated tile pattern. */
export const CELLS_PER_SIDE = 5;
export const SQUARE_PATTERN = Object.freeze([
  { x: 0, y: 0, size: 3 },
  { x: 3, y: 0, size: 2 },
  { x: 3, y: 2, size: 2 },
  { x: 0, y: 3, size: 2 },
  { x: 2, y: 3, size: 1 },
  { x: 2, y: 4, size: 1 },
  { x: 3, y: 4, size: 1 },
  { x: 4, y: 4, size: 1 },
]);

const mix = n => {
  n = Math.imul(n ^ (n >>> 16), 0x7feb352d);
  n = Math.imul(n ^ (n >>> 15), 0x846ca68b);
  return (n ^ (n >>> 16)) >>> 0;
};
function random(seed) {
  let state = mix(seed);
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let n = state;
    n = Math.imul(n ^ n >>> 15, n | 1);
    n ^= n + Math.imul(n ^ n >>> 7, n | 61);
    return ((n ^ n >>> 14) >>> 0) / 4294967296;
  };
}
function rotate(x, y, size, frameSize, turns) {
  let xx = x;
  let yy = y;
  for (let n = 0; n < turns; n++) {
    const oldX = xx;
    xx = frameSize - yy - size;
    yy = oldX;
  }
  return { x: xx, y: yy, size };
}

/**
 * A hierarchical, deterministic tile mutation system. Four-child merges and
 * subdivisions leave exact square coverage; quarter turns rotate complete
 * square regions without disturbing adjacent regions.
 *
 * moduleIndex is an absolute, stable index: viewport changes never re-roll
 * the module's internal formation. seed changes only on a fresh app load.
 */
// Generated shapes are independent of viewport size and archive state.
// Cache the topology so a resize never re-runs its subdivision tree.
const formationCache = new Map();
export function generateSquareFormation(moduleIndex, seed = 1) {
  const seedKey = seed >>> 0;
  let modules = formationCache.get(seedKey);
  if (!modules) {
    if (formationCache.size >= 4) formationCache.delete(formationCache.keys().next().value);
    modules = new Map();
    formationCache.set(seedKey, modules);
  }
  if (modules.has(moduleIndex)) return modules.get(moduleIndex);
  const rng = random(mix((seed >>> 0) ^ Math.imul(moduleIndex + 1, 0x9e3779b1)));
  const out = [];
  const outerTurns = Math.floor(rng() * 4);
  const rotatedBase = SQUARE_PATTERN.map(base => rotate(base.x, base.y, base.size, 5, outerTurns));
  // A different base ordering avoids a persistent pattern of large squares.
  rotatedBase.sort((a, b) => a.y - b.y || a.x - b.x);

  function subdivide(x, y, size, depth, ancestry) {
    const minimum = 0.74;
    const canSplit = depth < 3 && size / 2 >= minimum;
    const chance = depth === 0 ? (size >= 2 ? 0.72 : 0.16) : 0.31;
    if (!canSplit || rng() > chance) {
      out.push({ x, y, size, id: ancestry });
      return;
    }
    const half = size / 2;
    const children = [
      { x: 0, y: 0 }, { x: half, y: 0 },
      { x: 0, y: half }, { x: half, y: half },
    ];
    let local = [];
    // Build a subtree first so rotating it affects actual asymmetric geometry.
    const previous = out.splice(0);
    children.forEach((child, i) => subdivide(child.x, child.y, half, depth + 1, `${ancestry}.${i}`));
    local = out.splice(0);
    out.push(...previous);
    // Mutate: merge four equal children back to a single square on occasion.
    if (local.length === 4 && rng() < 0.20) {
      out.push({ x, y, size, id: ancestry });
      return;
    }
    const turns = Math.floor(rng() * 4);
    for (const tile of local) {
      const rotated = rotate(tile.x, tile.y, tile.size, size, turns);
      out.push({ ...tile, x: x + rotated.x, y: y + rotated.y });
    }
  }
  rotatedBase.forEach((base, i) => subdivide(base.x, base.y, base.size, 0, `s${i}`));
  const formation = out.sort((a, b) => a.y - b.y || a.x - b.x || b.size - a.size);
  modules.set(moduleIndex, formation);
  return formation;
}

/** Kept as a public utility for layout integration and lightweight tests. */
export function createMosaicSlots(entryCount, minimumModules = 1, seed = 1) {
  let slots = [];
  let moduleCount = Math.max(2, minimumModules * 2);
  // Match initial alternating left/right module ordering.
  while (true) {
    slots = [];
    for (let m = 0; m < moduleCount; m++) {
      const formation = generateSquareFormation(m, seed);
      formation.forEach((square, i) => slots.push({
        ...square, id: `m${m}-${square.id}`, side: m % 2 === 0 ? 'left' : 'right',
        moduleIndex: Math.floor(m / 2), globalModuleIndex: m,
        indexOnSide: i,
      }));
    }
    if (slots.length >= entryCount) break;
    moduleCount += 2;
  }
  return slots;
}

function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
function archiveGeometry(width) {
  const columns = Math.max(2, Math.round(width / 550));
  return { columns, unit: width / (columns * CELLS_PER_SIDE) };
}
export function computeMetrics({ width, height, archive = false }) {
  const compact = width <= 900 || (width <= 1200 && height <= 640);
  // In compact portfolio mode, the old 6.5% side insets reduced the
  // archive streams to barely visible slivers on phones. Reserve visible,
  // symmetrical rails while keeping enough width for an editorial page.
  const mobileRail = Math.min(82, Math.max(34, 34 + (width - 280) * 0.21));
  const compactRail = width <= 600
    ? mobileRail
    : Math.min(140, Math.max(88, width * 0.13));
  const panelWidth = compact
    ? (width <= 600 ? width - 2 * mobileRail : Math.min(620, width - 2 * compactRail))
    : Math.min(600, Math.max(468, width * 0.43));
  // Reserve enough physical room for readable achievement squares in desktop wings.
  // Below this width we use the previously agreed responsive side streams.
  const wideSideWidth = (width - panelWidth) / 2;
  const useCompact = compact || wideSideWidth < 410;
  const finalPanelWidth = useCompact && !compact
    ? Math.min(620, width - 2 * compactRail)
    : panelWidth;
  const gridColumns = useCompact ? (width < 480 ? 2 : width < 720 ? 3 : 4) : 10;
  const gridInset = 0;
  const unit = useCompact
    ? archive ? width / gridColumns : Math.max(104, Math.min(170, width * 0.27))
    : archive ? archiveGeometry(width).unit : Math.min(112, Math.max(66, (width - panelWidth) / 7.8));
  return {
    width, height, panelWidth: finalPanelWidth, unit, compact: useCompact, mobile: useCompact,
    gridColumns, gridInset,
    archiveModuleColumns: useCompact ? null : archiveGeometry(width).columns,
  };
}

function layoutCompact(entries, metrics, archive) {
  const { width, height, panelWidth, gridColumns } = metrics;
  const leftEdge = (width - panelWidth) / 2;
  const rightEdge = (width + panelWidth) / 2;
  // Every rail tile is exactly as wide as the visible rail, not wider and
  // clipped off-screen. This preserves squares AND exposes the imagery.
  const streamUnit = leftEdge;
  const minimumPerSide = Math.ceil(height / streamUnit) + 4;
  const archiveUnit = width / gridColumns;
  const minimumArchiveSlots = gridColumns * Math.ceil(height / archiveUnit);
  const slotsPerSide = Math.max(Math.ceil(entries.length / 2), minimumPerSide, Math.ceil(minimumArchiveSlots / 2));
  const slots = Array.from({ length: slotsPerSide * 2 }, (_, index) => {
    const side = index % 2 === 0 ? 'left' : 'right';
    const row = Math.floor(index / 2);
    const entry = entries[index] ?? null;
    return { id: entry ? `entry-${entry.id}` : `ambient-${side}-${row}`, side, row, entry };
  });
  const tiles = slots.map((slot, order) => {
    const { side, row, entry } = slot;
    const x = archive ? (order % gridColumns) * archiveUnit
      : side === 'left' ? leftEdge - streamUnit : rightEdge;
    const y = archive ? Math.floor(order / gridColumns) * archiveUnit : row * streamUnit;
    return {
      id: slot.id, side, entry, decorative: !entry, compact: true,
      size: 1, x, y, pixels: archive ? archiveUnit : streamUnit, hidden: false,
    };
  });
  const archiveRows = Math.ceil(slots.length / gridColumns);
  const contentHeight = archive ? Math.max(height + 1, archiveRows * archiveUnit)
    : Math.max(height + 1, slotsPerSide * streamUnit);
  return { tiles, metrics, contentHeight, moduleCount: archiveRows };
}

/**
 * Projection is separate from topology. Responsive reflow and archive changes
 * only move/scale existing seeded squares; they never mutate a formation.
 */
export function layoutMosaic(entries, viewport, archive = false, seed = 1) {
  const metrics = computeMetrics({ ...viewport, archive });
  if (metrics.compact) return layoutCompact(entries, metrics, archive);
  const { width, height, panelWidth } = metrics;
  const unit = (width - panelWidth) / 10;
  const leftBoundary = (width - panelWidth) / 2;
  const rightBoundary = (width + panelWidth) / 2;
  // Five square units span exactly one side wing: no empty outside margins.
  const portfolioUnit = (width - panelWidth) / 10;
  const { columns: archiveColumns, unit: archiveUnit } = archiveGeometry(width);
  const portfolioRows = Math.ceil(height / (5 * portfolioUnit));
  const archiveRows = Math.ceil(height / (5 * archiveUnit));
  // Structural filler may be tiny, but achievements require readable tiles.
  // In either projection, a usable achievement tile must be >= 164px.
  // Desktop is enabled only when two square units are at least 164px.
  // Use a topology-based eligibility rule, not a pixel rule, so resizing
  // does not reassign achievements to different tile IDs.
  const MIN_ENTRY_UNITS = 2;
  const entryMinModules = Math.ceil(entries.length / 3);
  const neededModules = Math.max(portfolioRows * 2, archiveRows * archiveColumns, entryMinModules);
  const moduleMultiple = (2 * archiveColumns) / gcd(2, archiveColumns);
  let totalModules = Math.ceil(neededModules / moduleMultiple) * moduleMultiple;
  const formations = [];
  let slotCount = 0;
  function makeModules(upTo) {
    for (let m = formations.length; m < upTo; m++) {
      const squares = generateSquareFormation(m, seed);
      formations.push(squares);
      slotCount += squares.filter(square => square.size >= MIN_ENTRY_UNITS).length;
    }
  }
  makeModules(totalModules);
  while (slotCount < entries.length) {
    totalModules += moduleMultiple;
    makeModules(totalModules);
  }

  let entryPosition = 0;
  const tiles = formations.flatMap((formation, moduleIndex) => {
    const side = moduleIndex % 2 === 0 ? 'left' : 'right';
    const wingRow = Math.floor(moduleIndex / 2);
    const blockX = archive
      ? (moduleIndex % archiveColumns) * 5 * archiveUnit
      : side === 'left' ? leftBoundary - 5 * unit : rightBoundary;
    const blockY = archive
      ? Math.floor(moduleIndex / archiveColumns) * 5 * archiveUnit
      : wingRow * 5 * unit;
    const pixelUnit = archive ? archiveUnit : unit;
    return formation.map((square) => {
      // Never place text on undersized squares. Those become ambient filler.
      const eligible = square.size >= MIN_ENTRY_UNITS;
      const entry = eligible ? (entries[entryPosition++] ?? null) : null;
      return {
        ...square, id: entry ? `entry-${entry.id}` : `ambient-m${moduleIndex}-${square.id}`,
        side, moduleIndex: wingRow, globalModuleIndex: moduleIndex,
        entry, decorative: !entry, compact: false, hidden: false,
        x: blockX + square.x * pixelUnit,
        y: blockY + square.y * pixelUnit,
        pixels: square.size * pixelUnit,
      };
    });
  });
  const contentHeight = archive
    ? Math.ceil(totalModules / archiveColumns) * 5 * archiveUnit
    : Math.ceil(totalModules / 2) * 5 * unit;
  return { tiles, metrics, contentHeight: Math.max(height + 1, contentHeight), moduleCount: totalModules / 2 };
}

````

### `portfolio-mobile-scroll-replacements.zip` → `src/styles/global.css`

````css
:root {
  font-family: 'DM Sans', 'Segoe UI', Arial, sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  --world: #161b20;
  --world-grid: rgba(239, 229, 211, .035);
  --paper: #f0ede6;
  --paper-soft: #e7e1d7;
  --ink: #232823;
  --muted: #78786f;
  --lede-color: #6b7169;
  --paper-line: #cbc7bc;
  --accent: #777157;
  --tile-outline: rgba(246, 238, 219, .64);
  --tile-tone-0: #9eb9b7;
  --tile-tone-1: #c0a795;
  --tile-tone-2: #9eb5c8;
  --tile-tone-3: #c1bca5;
  --tile-tone-4: #b5a9ba;
  --tile-tone-5: #a7b8a5;
  --ambient-art-opacity: .52;
  --ambient-surface-brightness: 1.28;
}
:root[data-theme="dark"] {
  --world: #090e14;
  --world-grid: rgba(226, 234, 244, .035);
  --paper: #21272b;
  --paper-soft: #2b3236;
  --ink: #eeeae1;
  --muted: #a2aaa6;
  --lede-color: #909995;
  --paper-line: #47504f;
  --accent: #d1b99a;
  --tile-outline: rgba(233, 239, 239, .48);
  --tile-tone-0: #1b3236;
  --tile-tone-1: #382c2a;
  --tile-tone-2: #263548;
  --tile-tone-3: #36312a;
  --tile-tone-4: #302731;
  --tile-tone-5: #2c3731;
  --ambient-art-opacity: .38;
  --ambient-surface-brightness: .85;
}
* { box-sizing: border-box; }
html, body, #root { min-width: 280px; min-height: 100%; margin: 0; }
html { overflow: hidden; }
body { background: var(--world); color: var(--ink); }
button, a { -webkit-tap-highlight-color: transparent; }
button { font: inherit; }
button:focus-visible, a:focus-visible { outline: 2px solid #89adc1; outline-offset: 3px; }
a { color: inherit; }
.site-shell { width: 100%; min-height: 100svh; isolation: isolate; background: var(--world); overflow: hidden; }
.site-grain { pointer-events: none; position: fixed; inset: 0; z-index: 5; opacity: .3; background-image: repeating-linear-gradient(90deg,transparent 0, transparent 31px, var(--world-grid) 32px), repeating-linear-gradient(0deg,transparent 0, transparent 31px, var(--world-grid) 32px); }
/* The mosaic remains scrollable under the independently scrolling portfolio. */
.mosaic-scroll { position: fixed; inset: 0; overflow-y: auto; overflow-x: hidden; overscroll-behavior: contain; scrollbar-width: none; background: var(--world); }
.mosaic-scroll::-webkit-scrollbar, .portfolio-panel::-webkit-scrollbar { display: none; }
.mosaic-plane { position: relative; width: 100%; min-height: 100%; }
.mosaic-tile { appearance: none; position: absolute; top: 0; left: 0; padding: 0; margin: 0; width: var(--tile-size); height: var(--tile-size); display: block; overflow: hidden; border-radius: 0; border: 1px solid var(--tile-outline); transform: translate3d(var(--tile-x), var(--tile-y), 0); transition: transform .58s cubic-bezier(.23,.87,.24,1), width .58s cubic-bezier(.23,.87,.24,1), height .58s cubic-bezier(.23,.87,.24,1), border-color .22s ease, opacity .3s ease; container-type: inline-size; background: var(--tile-tone); }
.mosaic-tile--entry { cursor: pointer; text-align: left; color: #faf7f0; z-index: 1; }
.mosaic-tile--entry:hover, .mosaic-tile--entry:focus-visible { z-index: 3; border-color: #f9e5c9; }
.tile-visual { position: absolute; inset: 0; display: block; background-image: var(--tile-image); background-position: center; background-size: cover; transform: scale(1.005); transition: transform .4s cubic-bezier(.2,.75,.2,1), filter .25s; filter: saturate(.76) brightness(.86); }
.tile-visual::after { content: ''; position: absolute; inset: 0; background: linear-gradient(0deg, rgba(5,11,16,.87),rgba(5,11,16,.06) 70%); }
.mosaic-tile--entry:hover .tile-visual, .mosaic-tile--entry:focus-visible .tile-visual { transform: scale(1.085); filter: saturate(1) brightness(1.06); }
.tile-content { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end; padding: clamp(11px, 1.2vw, 22px); text-shadow: 0 1px 12px #06090fb0; min-width: 0; }
.tile-category { display: block; font-size: clamp(10px, 3.8cqi, 13px); letter-spacing: .08em; line-height: 1.25; text-transform: uppercase; font-weight: 700; opacity: .9; margin-bottom: 6px; }
.tile-title { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; line-clamp: 3; overflow: hidden; font: normal clamp(18px, 9cqi, 35px)/1.06 'Instrument Serif', Georgia, serif; max-width: 100%; overflow-wrap: anywhere; text-wrap: balance; }
.tile-corner { position: absolute; top: 10px; right: 9px; opacity: 0; transform: translate(-3px,3px); transition: opacity .2s, transform .2s; }
.mosaic-tile:hover .tile-corner, .mosaic-tile:focus-visible .tile-corner { opacity: 1; transform: none; }
.mosaic-tile--sample .tile-category { color: #e8d7b7; }
/* Tiny squares are decorative only; entry sizing is enforced by the layout generator. */
.mosaic-tile--tiny .tile-content { padding: 9px; }
.mosaic-tile--tiny .tile-title { font-size: clamp(15px, 8cqi, 20px); }
@container (max-width: 185px) { .tile-category { font-size: 10px; letter-spacing: .03em; } .tile-content { padding: 10px; } .tile-title { font-size: clamp(16px, 10cqi, 21px); } }
.mosaic-tile--ambient { border-color: var(--tile-outline); pointer-events: none; filter: brightness(var(--ambient-surface-brightness)); }
.mosaic-tile--ambient::after { content: ''; position: absolute; inset: 0; background: linear-gradient(140deg, rgba(255,255,255,.12),transparent 55%,rgba(0,0,0,.28)); }
.mosaic-tile--ambient {
  background-color: var(--tile-tone);
  background-image: var(--ambient-art), linear-gradient(135deg, rgba(255,255,255,.13), rgba(0,0,0,.08));
  background-position: center;
  background-size: cover;
  background-blend-mode: multiply, normal;
}
.ambient-mark { display: none; }
.panel-shadow { position: fixed; z-index: 6; top: 0; bottom: 0; left: 50%; transform: translateX(-50%); width: var(--panel-width, min(600px,max(468px,43vw))); box-shadow: 0 25px 95px #05080da8,0 0 0 1px rgba(255,255,255,.1); pointer-events: none; transition: opacity .4s, transform .6s; }
.site-shell--archive .panel-shadow { opacity: 0; transform: translateX(-50%) translateY(50px) scale(.94); }
.portfolio-panel { position: fixed; z-index: 7; top: 0; bottom: 0; left: 50%; transform: translateX(-50%); width: var(--panel-width, min(600px,max(468px,43vw))); overflow-y: auto; overscroll-behavior: contain; scrollbar-width: none; padding: 27px clamp(25px,3.1vw,49px) 16px; background: var(--paper); color: var(--ink); border: 1px solid var(--paper-line); box-shadow: 0 0 0 1px rgba(0,0,0,.06); transition: transform .63s cubic-bezier(.25,.72,.15,1), opacity .45s ease; }
.portfolio-panel--hidden { opacity: 0; transform: translateX(-50%) translateY(72px) scale(.9); pointer-events: none; }
.panel-heading { display:flex; align-items:center; justify-content:space-between; gap:10px; padding-bottom: 27px; border-bottom:1px solid var(--paper-line); }
.panel-monogram { border:0; background:transparent; color:var(--ink); padding:0; font:bold 27px 'Instrument Serif',Georgia,serif; cursor:pointer; }
.panel-monogram span { color: var(--accent); }
.panel-label,.panel-index,.micro-label,.number-label,.panel-footer,.portrait-credit,.source-disclosure { font: 500 9px/1.3 'DM Mono',monospace; letter-spacing:.12em; }
.panel-label { color:var(--muted); }
.tiny-asterisk { color: var(--accent); font-size: 16px; vertical-align:-2px; }
.panel-index { color:var(--muted); }
.intro-section { padding-top: 49px; }
.micro-label,.number-label { display:block; color:var(--muted); }
.hero-intro { display:flex; align-items:flex-end; gap:18px; margin-top:27px; }
.hero-copy { min-width:0; flex:1; }
.hero-greeting { font:italic 26px 'Instrument Serif',Georgia,serif; }
.hero-copy h1 { margin:10px 0 0; font:normal clamp(34px,3.65vw,52px)/1.02 'Instrument Serif',Georgia,serif; letter-spacing:-.035em; white-space:normal; }
.hero-copy h1 em, .editorial-block h2 em,.view-title em { font-weight:400; color:var(--accent); }
.hero-rule { width:45px; height:1px; background:var(--accent); margin:18px 0; }
.hero-role { font-size:11px; font-weight:700; letter-spacing:.09em; text-transform:uppercase; margin:0 0 8px; }
.hero-description { font-size:12px; line-height:1.7; color:var(--muted); margin:0; }
.portrait-frame { width: 32%; flex:none; aspect-ratio: .77; display:flex; flex-direction:column; align-self:center; position:relative; }
.portrait-frame img { display:block; width:100%; height:100%; object-fit:cover; object-position:center 34%; filter:saturate(.72); border:1px solid var(--paper-line); }
.portrait-credit { position:absolute; bottom:-17px; left:0; color:var(--muted); white-space:nowrap; font-size:7px; }
.hero-actions { display:flex; flex-wrap:wrap; gap:9px; margin-top:39px; }
.pill-link { text-decoration:none; display:inline-flex; align-items:center; justify-content:center; gap:12px; border:1px solid var(--ink); border-radius:100px; padding:11px 14px; font-size:11px; font-weight:600; cursor:pointer; transition:transform .18s,background .18s,color .18s; }
.pill-link:hover { transform:translateY(-2px); }
.pill-link:active { transform:scale(.96); }
.pill-link--dark { background:var(--ink); color:var(--paper); }
.pill-link--outline { background:transparent; color:var(--ink); }
.pill-link--outline:hover { background:var(--paper-soft); }
.editorial-block { margin-top:66px; padding-top:23px; border-top:1px solid var(--paper-line); }
.section-heading { display:flex; align-items:center; justify-content:space-between; gap:10px; }
.section-star { color:var(--accent); }
.editorial-block h2 { margin:22px 0 20px; font:normal clamp(38px,4vw,56px)/.97 'Instrument Serif',Georgia,serif; letter-spacing:-.02em; }
.editorial-block p,.body-copy { color:var(--muted); font-size:13px; line-height:1.85; letter-spacing:.018em; max-width:52ch; }
.ink-divider { width:100%; height:1px; background:var(--paper-line); margin:27px 0 22px; }
.feature-links { margin-top:13px; }
.feature-link { display:flex; justify-content:space-between; align-items:center; gap:12px; width:100%; padding:13px 0; background:none; color:var(--ink); border:0; border-bottom:1px solid var(--paper-line); text-align:start; cursor:pointer; font:normal 20px/1.2 'Instrument Serif',Georgia,serif; }
.feature-link:hover { color:var(--accent); }
.feature-number { font:9px 'DM Mono',monospace; color:var(--muted); margin-inline-end:auto; min-width:28px; }
.feature-link > svg:last-child { margin-inline-start:auto; }
.editorial-block--bottom { padding-bottom:40px; }
.inline-arrow { display:inline-flex;align-items:center;gap:9px;padding:0;border:0;background:none;color:var(--ink);font-size:12px;font-weight:600;text-decoration:none;cursor:pointer; }
.inline-arrow:hover { color:var(--accent); }
.inner-view { padding-top:51px; min-height:65%; }
.view-title { font:normal clamp(44px,5vw,72px)/.97 'Instrument Serif',Georgia,serif; letter-spacing:-.025em; margin:23px 0 19px; }
.view-lede { max-width:45ch; color:var(--lede-color); font-size:clamp(16px,1.4vw,18px); font-weight:400; line-height:1.66; letter-spacing:.012em; margin:0 0 39px; }
.project-list { border-top:1px solid var(--paper-line); }
.project-row { width:100%; padding:17px 0; display:flex; align-items:center; gap:12px; border:0; border-bottom:1px solid var(--paper-line); background:none; text-align:start; color:var(--ink); cursor:pointer; }
.project-row:hover .project-row-description strong { color:var(--accent); }
.project-row img { width:68px;height:68px;object-fit:cover;border:1px solid var(--paper-line); }
.project-row-number { font:9px 'DM Mono',monospace;color:var(--muted); }
.project-row-description { flex:1; min-width:0;display:flex;flex-direction:column;gap:7px; }
.project-row-description strong { font:normal 24px 'Instrument Serif',Georgia,serif; }
.project-row-description small { color:var(--muted);font:9px 'DM Mono',monospace; }
.source-disclosure { margin:24px 0;line-height:1.7;color:var(--muted);letter-spacing:0; }
.editorial-illustration,.entry-hero-image { display:block;width:100%;aspect-ratio:1.55;object-fit:cover;border:1px solid var(--paper-line); }
.subheading { font:normal 33px 'Instrument Serif',Georgia,serif;margin:34px 0 12px; }
.contact-options { display:grid; gap:10px; margin:38px 0 25px; }
.fine-print { color:var(--muted);font-size:11px;line-height:1.7; }
.sample-alert { margin-top:18px; padding:10px 12px; background:var(--paper-soft);border-left:2px solid var(--accent);font-size:10px;font-weight:700;letter-spacing:.06em; }
.entry-view .view-title { overflow-wrap:anywhere; }
.entry-figure { margin:0 0 22px; }
.entry-caption { margin-top:17px; font-size:10px; letter-spacing:.16em; line-height:1.5; }
.entry-links,.writing-resource-list { display:grid; gap:10px; margin:27px 0 24px; }
.resource-link { width:100%; min-height:66px; display:flex; align-items:center; justify-content:space-between; gap:14px; padding:15px 16px 15px 18px; background:transparent; color:var(--ink); border:1px solid var(--paper-line); border-radius:2px; text-decoration:none; text-align:start; cursor:pointer; font:600 clamp(14px,1.25vw,17px)/1.4 'DM Sans','Segoe UI',Arial,sans-serif; letter-spacing:.018em; transition:background .2s,border-color .2s,transform .2s; }
.resource-link:hover { background:var(--paper-soft); border-color:var(--accent); transform:translateY(-2px); }
.resource-link:active { transform:translateY(0); }
.resource-link-icon { width:36px; height:36px; flex:none; display:grid; place-items:center; border:1px solid var(--paper-line); border-radius:2px; transition:transform .2s,border-color .2s; }
.resource-link:hover .resource-link-icon, .resource-link:focus-visible .resource-link-icon { transform:translate(2px,-2px); border-color:var(--accent); }
[dir="rtl"] .resource-link:hover .resource-link-icon, [dir="rtl"] .resource-link:focus-visible .resource-link-icon { transform:translate(-2px,-2px); }
.entry-view .pill-link { margin-top:28px; }
.panel-footer { margin-top:58px; padding:20px 0 26px; border-top:1px solid var(--paper-line);display:flex;justify-content:space-between;gap:15px;color:var(--muted);font-size:8px;letter-spacing:.02em; }
/* The toolbar is transparent: the collage always extends behind it. */
.floating-controls { position:fixed;z-index:45;top:24px;right:26px;display:flex;align-items:center;gap:14px;pointer-events:none; }
.orb-button { width:46px;height:46px;display:grid;place-items:center;position:relative;pointer-events:auto; border-radius:50%; border:1px solid rgba(237,237,231,.58);color:#f6f1e7;background:rgba(23,29,35,.68);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);cursor:pointer;box-shadow:0 3px 17px rgba(0,0,0,.22);transition:transform .2s cubic-bezier(.2,.8,.2,1),background .2s,border-color .2s,box-shadow .2s; }
.orb-button:hover { transform:scale(1.1);background:rgba(58,68,74,.9);border-color:#f5ead7;box-shadow:0 4px 24px rgba(0,0,0,.35); }
.orb-button:active { transform:scale(.92); }
.orb-button.is-active { background:#e8e0d1;color:#1c2529;border-color:#fff8ea; }
.language-button span:first-child { font:500 12px 'DM Mono',monospace; }
.orb-tooltip { position:absolute;right:50%;top:calc(100% + 10px);transform:translate(50%,-4px);white-space:nowrap;max-width:190px;pointer-events:none;opacity:0;border-radius:4px;background:#f2eadf;color:#252626;font-size:10px;padding:6px 9px;transition:opacity .2s,transform .2s; }
.orb-button:hover .orb-tooltip,.orb-button:focus-visible .orb-tooltip { opacity:1;transform:translate(50%,0); }
.archive-demo-dock { position:fixed;z-index:46;left:24px;bottom:24px;max-width:calc(100% - 48px);display:flex;gap:18px;align-items:center;padding:12px 13px 12px 16px;color:#e8e6df;background:rgba(17,23,29,.9);border:1px solid rgba(248,244,231,.35);backdrop-filter:blur(16px);box-shadow:0 10px 40px #0007; }
.dock-copy { display:flex;flex-direction:column;gap:5px;font-size:10px;color:#d3d4d0; }
.dock-kicker { letter-spacing:.1em;font-size:9px;text-transform:uppercase;font-weight:700;color:#eae9e4; }
.dock-hint { color:#aab3b4; }
.dock-actions { display:flex;gap:6px; }
.dock-actions button { width:48px;height:34px;display:flex;align-items:center;justify-content:center;gap:2px;border:1px solid #ffffff60;background:#ffffff0e;color:#faf7f0;cursor:pointer; }
.dock-actions button:hover { background:#ffffff2b; }
.dock-actions button:disabled { opacity:.3;cursor:default; }
.dock-actions button span { font-size:11px; }
.transition-layer { position:fixed;z-index:90;inset:0;pointer-events:none;overflow:hidden; }
.transition-image { position:fixed;left:var(--origin-x);top:var(--origin-y);width:var(--origin-width);height:var(--origin-height);background-image:linear-gradient(0deg,rgba(8,13,17,.55),rgba(8,13,17,.26)),var(--transition-image);background-position:center;background-size:cover;box-shadow:0 0 0 2px #f2e5d0;transition:left .42s cubic-bezier(.2,.74,.12,1),top .42s cubic-bezier(.2,.74,.12,1),width .42s cubic-bezier(.2,.74,.12,1),height .42s cubic-bezier(.2,.74,.12,1),opacity .32s;display:grid;place-items:center; }
.transition-title { opacity:0;color:#f5ede3;font:normal clamp(34px,6vw,84px) 'Instrument Serif',Georgia,serif;letter-spacing:-.04em;text-align:center;transition:opacity .18s .18s; }
.transition-layer--zoom .transition-image,.transition-layer--reveal .transition-image { left:-3vw;top:-3vh;width:106vw;height:106vh; }
.transition-layer--zoom .transition-title { opacity:1; }
.transition-layer--reveal { opacity:0;transition:opacity .30s ease; }
.transition-wash { position:absolute;inset:0;background:#efe7d8;opacity:0;transition:opacity .35s ease; }
.transition-layer--zoom .transition-wash { opacity:.1; }
/* Narrow screens retain a readable paper column and two square-only side streams.
   The same achievement buttons join a grid when Archive Mode opens. */
.mosaic-scroll--compact:not(.mosaic-scroll--archive) { overflow: hidden; }
.mosaic-scroll--compact.mosaic-scroll--archive { overflow-y: auto; overflow-x: hidden; }
.mosaic-scroll--archive .mosaic-tile--concealed { opacity: 0; pointer-events: none; }
.mosaic-scroll--compact .mosaic-tile--responsive .tile-title { font-size: clamp(16px, 9cqi, 28px); line-height: 1.08; white-space: normal; }
.mosaic-scroll--compact .mosaic-tile--responsive .tile-category { font-size: clamp(9px, 3cqi, 11px); }
.mosaic-scroll--compact:not(.mosaic-scroll--archive) .tile-content { opacity: .65; }
.mosaic-scroll--compact.mosaic-scroll--archive .tile-content { padding: clamp(10px, 2.3vw, 18px); }
.site-shell--compact .portfolio-panel,
.site-shell--compact .panel-shadow { top: 0; bottom: 0; }
.site-shell--compact .portfolio-panel {
  padding: max(76px, calc(env(safe-area-inset-top, 0px) + 63px)) clamp(17px, 3vw, 30px) 18px;
}
.site-shell--compact .floating-controls {
  top: max(12px, env(safe-area-inset-top, 0px));
  right: max(12px, env(safe-area-inset-right, 0px));
  gap: 10px;
}
.site-shell--compact .orb-button { width: 44px; height: 44px; }
.site-shell--compact .orb-tooltip { display: none; }
.site-shell--compact .archive-demo-dock {
  left: max(10px, env(safe-area-inset-left, 0px));
  bottom: max(10px, env(safe-area-inset-bottom, 0px));
  max-width: calc(100% - 20px);
}
@media (max-width: 1100px) { .panel-label { font-size:8px; } .portrait-frame { width:30%; } }
@media (max-width: 720px) {
  .portfolio-panel,.panel-shadow { top:0;bottom:0; }
  .portfolio-panel { padding: max(76px, calc(env(safe-area-inset-top, 0px) + 63px)) 23px 15px; }
  .panel-heading { padding-bottom:18px; }
  .floating-controls { top:max(12px, env(safe-area-inset-top, 0px));right:max(12px, env(safe-area-inset-right, 0px));gap:10px; }
  .orb-button { width:44px;height:44px; }
  .intro-section { padding-top:33px; }
  .hero-intro { gap:15px; }
  .hero-copy h1 { font-size:clamp(34px,8.2vw,55px); }
  .portrait-frame { width:32%; }
  .hero-greeting { font-size:24px; }
  .hero-description { font-size:12px; }
  .editorial-block { margin-top:48px; }
  .editorial-block h2 { font-size:clamp(38px,9vw,52px); }
  .view-lede { font-size:16px; line-height:1.7; margin-bottom:32px; }
  .resource-link { min-height:60px; padding:12px 13px; font-size:15px; }
  .resource-link-icon { width:32px; height:32px; }
  .archive-demo-dock { bottom:13px;left:13px;max-width:calc(100% - 26px);padding:9px 10px;gap:10px; }
  .dock-hint { display:none; }
  .dock-actions button { width:38px;height:34px; }
}
@media (max-width: 380px) {
  .hero-intro { flex-wrap:wrap; }
  .hero-copy { flex-basis: 100%; }
  .portrait-frame { width:104px;aspect-ratio:.77;position:relative;right:auto;top:auto;opacity:1; }
  .hero-description { max-width:26ch; }
  .portfolio-panel { padding:78px 17px 14px; }
  .panel-label { font-size:7px; }
}
@media (prefers-reduced-motion: reduce) {
  .mosaic-scroll--compact .mosaic-tile { animation: none !important; translate: 0 0 !important; }
  *,*::before,*::after { animation-duration:.01ms!important;transition-duration:.01ms!important;scroll-behavior:auto!important; }
}

/* Native scroll animation replaces expensive per-tile keyframe animations. */
.mosaic-scroll { scroll-behavior: auto; }

:root[data-theme="dark"] .mosaic-tile--ambient { background-blend-mode: screen, normal; }

/* Responsive portfolio: visible square streams and a narrow-screen editorial page.
   The rails occupy actual layout space instead of being clipped behind paper. */
@media (max-width: 600px) {
  .site-shell--compact .portfolio-panel {
    padding: max(76px, calc(env(safe-area-inset-top, 0px) + 64px))
      clamp(12px, 3.3vw, 18px) 20px;
  }
  .site-shell--compact .panel-heading { gap: 5px; padding-bottom: 18px; }
  .site-shell--compact .panel-label { font-size: 7px; letter-spacing: .06em; }
  .site-shell--compact .panel-index { font-size: 8px; }
  .site-shell--compact .intro-section { padding-top: 27px; }
  .site-shell--compact .hero-intro { flex-direction: column; align-items: stretch; gap: 22px; }
  .site-shell--compact .hero-copy { flex-basis: auto; width: 100%; }
  .site-shell--compact .hero-copy h1 { font-size: clamp(32px, 8vw, 42px); overflow-wrap: anywhere; }
  .site-shell--compact .hero-greeting { font-size: 24px; }
  .site-shell--compact .hero-description { max-width: none; font-size: 13px; line-height: 1.7; }
  .site-shell--compact .portrait-frame { width: min(44%, 132px); align-self: flex-start; margin-bottom: 9px; }
  .site-shell--compact .hero-actions { display: grid; grid-template-columns: 1fr; gap: 10px; margin-top: 33px; }
  .site-shell--compact .hero-actions .pill-link { min-width: 0; width: 100%; min-height: 44px; justify-content: space-between; padding: 11px 12px; }
  .site-shell--compact .view-title { font-size: clamp(34px, 9.3vw, 50px); overflow-wrap: anywhere; }
  .site-shell--compact .editorial-block h2 { font-size: clamp(32px, 9.3vw, 45px); }
  .site-shell--compact .view-lede { font-size: 15px; }
  .site-shell--compact .resource-link { min-width: 0; font-size: 14px; overflow-wrap: anywhere; }
  .site-shell--compact .panel-footer { flex-wrap: wrap; }
  /* Tiny image rails are tappable picture previews, not unreadable text cards.
     Full titles appear when entering Archive Mode. */
  .mosaic-scroll--compact:not(.mosaic-scroll--archive) .mosaic-tile--entry .tile-content { display: none; }
  .mosaic-scroll--compact:not(.mosaic-scroll--archive) .mosaic-tile--entry .tile-visual::after {
    background: linear-gradient(0deg, rgba(5,11,16,.20),rgba(5,11,16,0) 65%);
  }
}
@media (max-width: 350px) {
  .site-shell--compact .hero-copy h1 { font-size: 31px; }
  .site-shell--compact .portrait-frame { width: 108px; }
  .site-shell--compact .panel-heading .panel-label { font-size: 6px; }
  .site-shell--compact .floating-controls { gap: 7px; right: 7px; }
  .site-shell--compact .orb-button { width: 42px; height: 42px; }
}

````

### `portfolio-mobile-scroll-replacements.zip` → `tests/autoScroll.test.js`

````javascript
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  advanceAutoScroll, initialAutoScrollState,
  SCROLL_RESUME_DELAY_MS, SCROLL_SPEED_PX_PER_MS, REWIND_DURATION_MS,
} from '../src/lib/autoScroll.js';

test('resume delay is two seconds and down-scroll is 33% faster', () => {
  assert.equal(SCROLL_RESUME_DELAY_MS, 2000);
  assert.ok(Math.abs(SCROLL_SPEED_PX_PER_MS - 0.019 * (4 / 3)) < 1e-12);
  const moved = advanceAutoScroll(initialAutoScrollState(), 100, 500);
  assert.equal(moved.phase, 'down');
  assert.ok(Math.abs(moved.position - 100 * SCROLL_SPEED_PX_PER_MS) < 1e-9);
});

test('scrolls downward, eases upward over two seconds, then resumes downward', () => {
  let state = { ...initialAutoScrollState(), position: 498 };
  state = advanceAutoScroll(state, 100, 500);
  assert.equal(state.position, 500);
  assert.equal(state.phase, 'rewind');
  state = advanceAutoScroll(state, 100, 500);
  assert.ok(state.position < 500 && state.position > 0);
  for (let t = 100; t < REWIND_DURATION_MS; t += 100) state = advanceAutoScroll(state, 100, 500);
  assert.deepEqual(state, initialAutoScrollState());
  state = advanceAutoScroll(state, 40, 500);
  assert.equal(state.phase, 'down');
  assert.ok(state.position > 0);
});

test('never runs backward during the default phase', () => {
  let state = initialAutoScrollState();
  for (let i = 0; i < 1000; i++) {
    const next = advanceAutoScroll(state, 40, 800);
    if (state.phase === 'down' && next.phase === 'down') assert.ok(next.position >= state.position);
    state = next;
  }
});

test('clamps elapsed time, handles short archives and viewport changes', () => {
  let state = advanceAutoScroll(initialAutoScrollState(), 10000, 500);
  assert.ok(state.position <= 100 * SCROLL_SPEED_PX_PER_MS + 1e-9);
  state = advanceAutoScroll({ ...initialAutoScrollState(), position: 600 }, 40, 350);
  assert.ok(state.position <= 350);
  state = advanceAutoScroll(state, 40, 20);
  assert.equal(state.phase, 'down');
  assert.ok(state.position <= 20);
});


test('rewind uses smooth ease-in-out and takes exactly 2000 ms', () => {
  assert.equal(REWIND_DURATION_MS, 2000);
  const start = { position: 1200, phase: 'rewind', rewindFrom: 1200, rewindElapsed: 0 };
  const first = advanceAutoScroll(start, 100, 1200);
  assert.ok(first.position > 1190, 'starts gently without an abrupt jump');
  let state = start;
  for (let i = 0; i < 10; i++) state = advanceAutoScroll(state, 100, 1200);
  assert.ok(Math.abs(state.position - 600) < 1e-6, 'halfway is halfway up');
  for (let i = 0; i < 9; i++) state = advanceAutoScroll(state, 100, 1200);
  assert.ok(state.position >= 0 && state.position < 10, 'finishes gently');
  state = advanceAutoScroll(state, 100, 1200);
  assert.deepEqual(state, initialAutoScrollState());
});

````

### `portfolio-mobile-scroll-replacements.zip` → `tests/mosaicLayout.test.js`

````javascript
import test from 'node:test';
import assert from 'node:assert/strict';
import { SQUARE_PATTERN, createMosaicSlots, generateSquareFormation, computeMetrics, layoutMosaic } from '../src/lib/mosaicLayout.js';

const makeEntries = n => Array.from({ length: n }, (_, i) => ({ id: `achievement-${i}` }));
const close = (a,b) => Math.abs(a-b) < 1e-6;

function checkFormation(squares) {
  const sampleCount = 80;
  for (let row = 0; row < sampleCount; row++) for (let col = 0; col < sampleCount; col++) {
    const x = (col + 0.5) * 5 / sampleCount;
    const y = (row + 0.5) * 5 / sampleCount;
    assert.equal(squares.filter(t => x >= t.x - 1e-8 && x < t.x+t.size - 1e-8 && y >= t.y - 1e-8 && y < t.y+t.size - 1e-8).length, 1);
  }
  assert.ok(close(squares.reduce((sum, t) => sum+t.size*t.size, 0), 25));
}

test('seeded tilings contain only true squares, with no gaps or overlaps', () => {
  for (let seed of [1, 42, 12345, 0xffffffff]) for (let moduleIndex = 0; moduleIndex < 16; moduleIndex++) {
    checkFormation(generateSquareFormation(moduleIndex, seed));
  }
});

test('subdivision, merge and rotations yield varied module topology', () => {
  const signatures = new Set(Array.from({length:64},(_,i) => JSON.stringify(generateSquareFormation(i, 777).map(t => [t.x,t.y,t.size]))));
  assert.ok(signatures.size > 50, `${signatures.size} of 64 formations differ`);
  const tiles = Array.from({length:64},(_,i)=>generateSquareFormation(i, 777));
  assert.ok(tiles.some(t=>t.some(s=>s.size <= 1)));
  assert.ok(tiles.some(t=>t.some(s=>s.size >= 3)));
});

test('formation topology remains fixed for seed + module index', () => {
  assert.deepEqual(generateSquareFormation(4, 992), generateSquareFormation(4, 992));
  assert.notDeepEqual(generateSquareFormation(4, 992), generateSquareFormation(4, 993));
});

test('desktop wings touch portfolio edges and archive spans viewport', () => {
  const entries = makeEntries(18);
  const viewport = {width: 1440,height: 900};
  const closed = layoutMosaic(entries, viewport, false, 72);
  const open = layoutMosaic(entries, viewport, true, 72);
  const left = (viewport.width-closed.metrics.panelWidth)/2;
  const right = (viewport.width+closed.metrics.panelWidth)/2;
  assert.ok(closed.tiles.every(t=>t.side==='left'? t.x+t.pixels<=left+1e-6 : t.x>=right-1e-6));
  assert.ok(closed.tiles.some(t=>t.side==='left' && close(t.x+t.pixels,left)));
  assert.ok(closed.tiles.some(t=>t.side==='right' && close(t.x,right)));
  assert.ok(open.tiles.some(t=>close(t.x,0)));
  assert.ok(open.tiles.some(t=>close(t.x+t.pixels,viewport.width)));
  assert.deepEqual(closed.tiles.map(t=>t.id),open.tiles.map(t=>t.id));
});

test('the same module identities and geometry persist through resizing and rotation', () => {
  const entries = makeEntries(30);
  const sizes = [{width:1440,height:900},{width:1600,height:850},{width:1800,height:1000}];
  const layouts = sizes.map(size=>layoutMosaic(entries,size,true,5353));
  const lookup = l=>new Map(l.tiles.map(t=>[t.id,[t.size,t.globalModuleIndex]]));
  const base = lookup(layouts[0]);
  for (const layout of layouts.slice(1)) {
    const next = lookup(layout);
    for (const [key,value] of base) if(next.has(key))assert.deepEqual(next.get(key),value);
  }
});

test('archive has edge-to-edge coverage and reaches bottom on desktop and compact screens', () => {
  for (const viewport of [{width:390,height:844},{width:768,height:1024},{width:1100,height:580},{width:1280,height:800},{width:1722,height:854},{width:1920,height:1080}]) {
    for (const count of [4,18,34,67]) {
      const {tiles,contentHeight}=layoutMosaic(makeEntries(count),viewport,true,123456);
      assert.ok(contentHeight>=viewport.height);
      for(let row=0;row<12;row++)for(let col=0;col<15;col++){
        const x=(col+0.5)*viewport.width/15;
        const y=(row+0.5)*viewport.height/12;
        const matches=tiles.filter(t=>x>=t.x-1e-7 && x<t.x+t.pixels-1e-7 && y>=t.y-1e-7 && y<t.y+t.pixels-1e-7);
        assert.equal(matches.length,1,`${viewport.width}x${viewport.height} (${x},${y})`);
      }
    }
  }
});

test('compact portfolio has exactly two streams and compacts into grid with identical achievement IDs', () => {
  for (const viewport of [{width:280,height:620},{width:390,height:844},{width:600,height:800},{width:800,height:1000},{width:1100,height:580}]) {
    const entries=makeEntries(19);
    const normal=layoutMosaic(entries,viewport,false,987);
    const archive=layoutMosaic(entries,viewport,true,987);
    assert.equal(computeMetrics(viewport).compact,true);
    const left=(viewport.width-normal.metrics.panelWidth)/2;
    const right=(viewport.width+normal.metrics.panelWidth)/2;
    assert.ok(normal.tiles.every(t=>close(t.pixels,t.pixels) && (t.side==='left'?close(t.x+t.pixels,left):close(t.x,right))));
    assert.deepEqual(normal.tiles.filter(t=>t.entry).map(t=>t.id),archive.tiles.filter(t=>t.entry).map(t=>t.id));
  }
});

test('dynamic slot generator maintains capacity for added achievements', () => {
  for(const n of [4,18,80,200])assert.ok(createMosaicSlots(n,1,444).length>=n);
});


test('portfolio square tiling reaches both horizontal viewport edges without gaps', () => {
  for (const viewport of [
    {width: 1440, height: 900}, {width: 1722, height: 854},
    {width: 1920, height: 1080}, {width: 2560, height: 1440},
    {width: 390, height: 844}, {width: 820, height: 1180},
    {width: 1180, height: 600},
  ]) {
    const { tiles, metrics } = layoutMosaic(makeEntries(24), viewport, false, 231);
    const left = (viewport.width - metrics.panelWidth) / 2;
    const right = (viewport.width + metrics.panelWidth) / 2;
    for (let row=0; row<12; row++) {
      const y = (row + .5) * viewport.height/12;
      for (let col=0; col<12; col++) {
        const x = (col + .5) * viewport.width/12;
        if (x >= left && x < right) continue;
        const found = tiles.some(t => x >= t.x-1e-7 && x < t.x+t.pixels-1e-7 && y>=t.y-1e-7 && y<t.y+t.pixels-1e-7);
        assert.ok(found, `uncovered edge at ${viewport.width}x${viewport.height}, (${x}, ${y})`);
      }
    }
  }
});

test('desktop achievement squares are always large enough and identities are stable across viewport resizing', () => {
  const entries = makeEntries(31);
  const widths = [1440, 1600, 1722, 1920, 2560];
  let ids;
  for (const width of widths) {
    for (const archive of [false, true]) {
      const {tiles} = layoutMosaic(entries, {width,height:900}, archive, 42);
      const actual = tiles.filter(t=>t.entry);
      assert.equal(actual.length, entries.length);
      assert.ok(actual.every(t=>t.pixels>=164-1e-6), `achievement tile too small at ${width}`);
      const mapped = new Map(actual.map(t=>[t.entry.id,t.id]));
      if (!ids) ids=mapped;
      for (const [id,tileId] of ids) assert.equal(mapped.get(id),tileId);
    }
  }
});


test('phone-sized portfolio exposes actual square rails at both viewport edges', () => {
  for (const width of [280, 320, 375, 390, 430, 600]) {
    for (const height of [568, 844, 932]) {
      const viewport = { width, height };
      const normal = layoutMosaic(makeEntries(12), viewport, false, 1212);
      const archive = layoutMosaic(makeEntries(12), viewport, true, 1212);
      const rail = (width - normal.metrics.panelWidth) / 2;
      assert.ok(rail >= (width <= 320 ? 34 : 45), `rail too narrow at ${width}px: ${rail}`);
      assert.ok(normal.tiles.every(t => close(t.pixels, rail)), 'all strip tiles fill the rail width');
      assert.ok(normal.tiles.some(t => close(t.x, 0) && close(t.y, 0)), 'left upper edge covered');
      assert.ok(normal.tiles.some(t => close(t.x + t.pixels, width) && close(t.y, 0)), 'right upper edge covered');
      assert.ok(normal.contentHeight >= height);
      assert.deepEqual(normal.tiles.filter(t=>t.entry).map(t=>t.id),archive.tiles.filter(t=>t.entry).map(t=>t.id));
    }
  }
});

````

### `portfolio-mobile-tablet-autoscroll-fix.zip` → `src/components/ArchiveMosaic.jsx`

````jsx
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { layoutMosaic } from '../lib/mosaicLayout.js';
import { visibleMosaicTiles } from '../lib/visibleMosaicTiles.js';
import { advanceAutoScroll, initialAutoScrollState, SCROLL_RESUME_DELAY_MS } from '../lib/autoScroll.js';
import Icon from './Icons.jsx';
import { createAmbientBackground } from '../lib/ambientPattern.js';

// The artwork generator is costly when hundreds of SVG backgrounds are encoded.
// Generate once per tile identity, only when the tile enters the viewport.
const artworkCache = new Map();
function artworkFor(id) {
  if (!artworkCache.has(id)) {
    if (artworkCache.size > 900) artworkCache.delete(artworkCache.keys().next().value);
    artworkCache.set(id, createAmbientBackground(id));
  }
  return artworkCache.get(id);
}

const ArchiveTile = memo(function ArchiveTile({ tile, onOpen, lang }) {
  const { entry, pixels, x, y, decorative } = tile;
  const tone = tile.globalModuleIndex ?? tile.moduleIndex ?? tile.row ?? 0;
  const style = {
    '--tile-x': `${x}px`, '--tile-y': `${y}px`, '--tile-size': `${pixels}px`,
    '--tile-image': entry ? `url("${entry.image}")` : undefined,
    '--tile-tone': `var(--tile-tone-${Math.abs(tone) % 6})`,
    ...(decorative ? { '--ambient-art': artworkFor(tile.id) } : {}),
  };
  if (decorative) {
    return <div className="mosaic-tile mosaic-tile--ambient" style={style} aria-hidden="true" />;
  }
  const title = lang === 'ar' ? entry.titleAr || entry.title : entry.title;
  const category = lang === 'ar' ? entry.categoryAr || entry.category : entry.category;
  return (
    <button type="button"
      className={`mosaic-tile mosaic-tile--entry ${entry.sample ? 'mosaic-tile--sample' : ''} ${tile.compact ? 'mosaic-tile--responsive' : tile.size === 1 ? 'mosaic-tile--tiny' : ''}`}
      style={style} onClick={event => onOpen(entry, event.currentTarget)}
      data-side={tile.side} data-entry-id={entry.id} title={title}
      aria-label={`${title}${entry.sample ? ' — sample' : ''}`}>
      <span className="tile-visual" aria-hidden="true" />
      <span className="tile-content">
        <span className="tile-category">{entry.sample ? '◇ ' : '✦ '}{category}</span>
        <span className="tile-title">{title}</span>
        <span className="tile-corner"><Icon name="upRight" size={14}/></span>
      </span>
    </button>
  );
});

export default function ArchiveMosaic({ entries, viewport, archive, lang, onOpen, layoutSeed = 1 }) {
  const scrollRef = useRef(null);
  const pauseUntil = useRef(0);
  const lastTime = useRef(0);
  const scrollState = useRef(initialAutoScrollState());
  const [viewTop, setViewTop] = useState(0);
  const layout = useMemo(() => layoutMosaic(entries, viewport, archive, layoutSeed), [entries, viewport.width, viewport.height, archive, layoutSeed]);
  const viewportHeight = viewport.height;

  const syncWindow = useCallback((force = false) => {
    const top = scrollRef.current?.scrollTop ?? 0;
    // Recalculate the visible set only after crossing a 120px bucket.
    const bucket = Math.floor(top / 120) * 120;
    setViewTop(previous => force || previous !== bucket ? bucket : previous);
  }, []);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;
    element.scrollTop = 0;
    syncWindow(true);
    lastTime.current = 0;
    scrollState.current = initialAutoScrollState();
    pauseUntil.current = performance.now() + SCROLL_RESUME_DELAY_MS;
  }, [archive, layout.metrics.compact, syncWindow]);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pause = () => {
      pauseUntil.current = performance.now() + SCROLL_RESUME_DELAY_MS;
      // Manual touch/wheel input takes precedence and restarts the motion from
      // the user's actual position. The fractional auto-scroll offset is kept
      // separately so iOS scrollTop rounding cannot freeze subpixel movement.
      scrollState.current = { ...initialAutoScrollState(), position: element.scrollTop };
    };
    const scroll = () => {
      // Touch gestures can continue moving after touchstart (momentum scroll).
      // Remember the *latest* manual position so autoplay resumes smoothly.
      if (performance.now() < pauseUntil.current) {
        scrollState.current = { ...initialAutoScrollState(), position: element.scrollTop };
      }
      syncWindow();
    };
    const hoverEntry = event => {
      if (event.target.closest?.('.mosaic-tile--entry')) pause();
    };
    element.addEventListener('wheel', pause, { passive: true });
    element.addEventListener('touchstart', pause, { passive: true });
    element.addEventListener('pointerdown', pause, { passive: true });
    element.addEventListener('pointerover', hoverEntry, { passive: true });
    element.addEventListener('focusin', pause);
    element.addEventListener('scroll', scroll, { passive: true });
    // Drive the 2-second eased rewind with requestAnimationFrame. The DOM
    // scroll position changes per frame; React only updates at 120px buckets.
    // This is smoother than the previous 25fps interval without re-rendering
    // hundreds of tiles every frame.
    let frame = 0;
    const tick = time => {
      const delta = lastTime.current ? Math.min(time - lastTime.current, 100) : 0;
      lastTime.current = time;
      if (!document.hidden && !reduce.matches && time >= pauseUntil.current) {
        const max = element.scrollHeight - element.clientHeight;
        if (max > 40) {
          // Do not read scrollTop back on each frame: mobile WebKit may round
          // it to whole pixels, while each frame only advances ~0.4px.
          // Reinjecting the rounded value loses that fraction forever.
          const next = advanceAutoScroll(scrollState.current, delta, max);
          scrollState.current = next;
          if (Math.abs(element.scrollTop - next.position) >= 0.5) {
            element.scrollTop = next.position;
          }
        }
      }
      frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(frame);
      element.removeEventListener('wheel', pause);
      element.removeEventListener('touchstart', pause);
      element.removeEventListener('pointerdown', pause);
      element.removeEventListener('pointerover', hoverEntry);
      element.removeEventListener('focusin', pause);
      element.removeEventListener('scroll', scroll);
    };
  }, [syncWindow]);

  const visible = useMemo(() => visibleMosaicTiles(layout.tiles, viewTop, viewportHeight), [layout.tiles, viewTop, viewportHeight]);
  return (
    <div ref={scrollRef}
      className={`mosaic-scroll ${archive ? 'mosaic-scroll--archive' : ''} ${layout.metrics.compact ? 'mosaic-scroll--compact' : ''}`}
      aria-label="Interactive archive collage">
      <div className="mosaic-plane" style={{ height: `${layout.contentHeight}px` }}>
        {visible.map(tile => <ArchiveTile key={tile.id} tile={tile} onOpen={onOpen} lang={lang} />)}
      </div>
    </div>
  );
}

````

### `portfolio-mobile-tablet-autoscroll-fix.zip` → `src/lib/mosaicLayout.js`

````javascript
/** A 5 × 5 square module is a convenient building block, not a repeated tile pattern. */
export const CELLS_PER_SIDE = 5;
export const SQUARE_PATTERN = Object.freeze([
  { x: 0, y: 0, size: 3 },
  { x: 3, y: 0, size: 2 },
  { x: 3, y: 2, size: 2 },
  { x: 0, y: 3, size: 2 },
  { x: 2, y: 3, size: 1 },
  { x: 2, y: 4, size: 1 },
  { x: 3, y: 4, size: 1 },
  { x: 4, y: 4, size: 1 },
]);

const mix = n => {
  n = Math.imul(n ^ (n >>> 16), 0x7feb352d);
  n = Math.imul(n ^ (n >>> 15), 0x846ca68b);
  return (n ^ (n >>> 16)) >>> 0;
};
function random(seed) {
  let state = mix(seed);
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let n = state;
    n = Math.imul(n ^ n >>> 15, n | 1);
    n ^= n + Math.imul(n ^ n >>> 7, n | 61);
    return ((n ^ n >>> 14) >>> 0) / 4294967296;
  };
}
function rotate(x, y, size, frameSize, turns) {
  let xx = x;
  let yy = y;
  for (let n = 0; n < turns; n++) {
    const oldX = xx;
    xx = frameSize - yy - size;
    yy = oldX;
  }
  return { x: xx, y: yy, size };
}

/**
 * A hierarchical, deterministic tile mutation system. Four-child merges and
 * subdivisions leave exact square coverage; quarter turns rotate complete
 * square regions without disturbing adjacent regions.
 *
 * moduleIndex is an absolute, stable index: viewport changes never re-roll
 * the module's internal formation. seed changes only on a fresh app load.
 */
// Generated shapes are independent of viewport size and archive state.
// Cache the topology so a resize never re-runs its subdivision tree.
const formationCache = new Map();
export function generateSquareFormation(moduleIndex, seed = 1) {
  const seedKey = seed >>> 0;
  let modules = formationCache.get(seedKey);
  if (!modules) {
    if (formationCache.size >= 4) formationCache.delete(formationCache.keys().next().value);
    modules = new Map();
    formationCache.set(seedKey, modules);
  }
  if (modules.has(moduleIndex)) return modules.get(moduleIndex);
  const rng = random(mix((seed >>> 0) ^ Math.imul(moduleIndex + 1, 0x9e3779b1)));
  const out = [];
  const outerTurns = Math.floor(rng() * 4);
  const rotatedBase = SQUARE_PATTERN.map(base => rotate(base.x, base.y, base.size, 5, outerTurns));
  // A different base ordering avoids a persistent pattern of large squares.
  rotatedBase.sort((a, b) => a.y - b.y || a.x - b.x);

  function subdivide(x, y, size, depth, ancestry) {
    const minimum = 0.74;
    const canSplit = depth < 3 && size / 2 >= minimum;
    const chance = depth === 0 ? (size >= 2 ? 0.72 : 0.16) : 0.31;
    if (!canSplit || rng() > chance) {
      out.push({ x, y, size, id: ancestry });
      return;
    }
    const half = size / 2;
    const children = [
      { x: 0, y: 0 }, { x: half, y: 0 },
      { x: 0, y: half }, { x: half, y: half },
    ];
    let local = [];
    // Build a subtree first so rotating it affects actual asymmetric geometry.
    const previous = out.splice(0);
    children.forEach((child, i) => subdivide(child.x, child.y, half, depth + 1, `${ancestry}.${i}`));
    local = out.splice(0);
    out.push(...previous);
    // Mutate: merge four equal children back to a single square on occasion.
    if (local.length === 4 && rng() < 0.20) {
      out.push({ x, y, size, id: ancestry });
      return;
    }
    const turns = Math.floor(rng() * 4);
    for (const tile of local) {
      const rotated = rotate(tile.x, tile.y, tile.size, size, turns);
      out.push({ ...tile, x: x + rotated.x, y: y + rotated.y });
    }
  }
  rotatedBase.forEach((base, i) => subdivide(base.x, base.y, base.size, 0, `s${i}`));
  const formation = out.sort((a, b) => a.y - b.y || a.x - b.x || b.size - a.size);
  modules.set(moduleIndex, formation);
  return formation;
}

/** Kept as a public utility for layout integration and lightweight tests. */
export function createMosaicSlots(entryCount, minimumModules = 1, seed = 1) {
  let slots = [];
  let moduleCount = Math.max(2, minimumModules * 2);
  // Match initial alternating left/right module ordering.
  while (true) {
    slots = [];
    for (let m = 0; m < moduleCount; m++) {
      const formation = generateSquareFormation(m, seed);
      formation.forEach((square, i) => slots.push({
        ...square, id: `m${m}-${square.id}`, side: m % 2 === 0 ? 'left' : 'right',
        moduleIndex: Math.floor(m / 2), globalModuleIndex: m,
        indexOnSide: i,
      }));
    }
    if (slots.length >= entryCount) break;
    moduleCount += 2;
  }
  return slots;
}

function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
function archiveGeometry(width) {
  const columns = Math.max(2, Math.round(width / 550));
  return { columns, unit: width / (columns * CELLS_PER_SIDE) };
}
export function computeMetrics({ width, height, archive = false }) {
  const compact = width <= 900 || (width <= 1200 && height <= 640);
  // In compact portfolio mode, the old 6.5% side insets reduced the
  // archive streams to barely visible slivers on phones. Reserve visible,
  // symmetrical rails while keeping enough width for an editorial page.
  const mobileRail = Math.min(82, Math.max(34, 34 + (width - 280) * 0.21));
  const compactRail = width <= 600
    ? mobileRail
    : Math.min(140, Math.max(88, width * 0.13));
  const panelWidth = compact
    ? (width <= 600 ? width - 2 * mobileRail : Math.min(620, width - 2 * compactRail))
    : Math.min(600, Math.max(468, width * 0.43));
  // Reserve enough physical room for readable achievement squares in desktop wings.
  // Below this width we use the previously agreed responsive side streams.
  const wideSideWidth = (width - panelWidth) / 2;
  const useCompact = compact || wideSideWidth < 410;
  const finalPanelWidth = useCompact && !compact
    ? Math.min(620, width - 2 * compactRail)
    : panelWidth;
  const gridColumns = useCompact ? (width < 480 ? 2 : width < 720 ? 3 : 4) : 10;
  const gridInset = 0;
  const unit = useCompact
    ? archive ? width / gridColumns : Math.max(104, Math.min(170, width * 0.27))
    : archive ? archiveGeometry(width).unit : Math.min(112, Math.max(66, (width - panelWidth) / 7.8));
  return {
    width, height, panelWidth: finalPanelWidth, unit, compact: useCompact, mobile: useCompact,
    gridColumns, gridInset,
    archiveModuleColumns: useCompact ? null : archiveGeometry(width).columns,
  };
}

function layoutCompact(entries, metrics, archive) {
  const { width, height, panelWidth, gridColumns } = metrics;
  const leftEdge = (width - panelWidth) / 2;
  const rightEdge = (width + panelWidth) / 2;
  // Every rail tile is exactly as wide as the visible rail, not wider and
  // clipped off-screen. This preserves squares AND exposes the imagery.
  const streamUnit = leftEdge;
  // Give the two mobile/tablet side streams a genuine scroll range.
  // One screen of content would make passive scrolling appear stationary.
  const minimumPerSide = Math.ceil((height * 1.85) / streamUnit) + 2;
  const archiveUnit = width / gridColumns;
  const minimumArchiveSlots = gridColumns * Math.ceil(height / archiveUnit);
  const slotsPerSide = Math.max(Math.ceil(entries.length / 2), minimumPerSide, Math.ceil(minimumArchiveSlots / 2));
  const slots = Array.from({ length: slotsPerSide * 2 }, (_, index) => {
    const side = index % 2 === 0 ? 'left' : 'right';
    const row = Math.floor(index / 2);
    const entry = entries[index] ?? null;
    return { id: entry ? `entry-${entry.id}` : `ambient-${side}-${row}`, side, row, entry };
  });
  const tiles = slots.map((slot, order) => {
    const { side, row, entry } = slot;
    const x = archive ? (order % gridColumns) * archiveUnit
      : side === 'left' ? leftEdge - streamUnit : rightEdge;
    const y = archive ? Math.floor(order / gridColumns) * archiveUnit : row * streamUnit;
    return {
      id: slot.id, side, entry, decorative: !entry, compact: true,
      size: 1, x, y, pixels: archive ? archiveUnit : streamUnit, hidden: false,
    };
  });
  const archiveRows = Math.ceil(slots.length / gridColumns);
  const contentHeight = archive ? Math.max(height + 1, archiveRows * archiveUnit)
    : Math.max(height + 1, slotsPerSide * streamUnit);
  return { tiles, metrics, contentHeight, moduleCount: archiveRows };
}

/**
 * Projection is separate from topology. Responsive reflow and archive changes
 * only move/scale existing seeded squares; they never mutate a formation.
 */
export function layoutMosaic(entries, viewport, archive = false, seed = 1) {
  const metrics = computeMetrics({ ...viewport, archive });
  if (metrics.compact) return layoutCompact(entries, metrics, archive);
  const { width, height, panelWidth } = metrics;
  const unit = (width - panelWidth) / 10;
  const leftBoundary = (width - panelWidth) / 2;
  const rightBoundary = (width + panelWidth) / 2;
  // Five square units span exactly one side wing: no empty outside margins.
  const portfolioUnit = (width - panelWidth) / 10;
  const { columns: archiveColumns, unit: archiveUnit } = archiveGeometry(width);
  const portfolioRows = Math.ceil(height / (5 * portfolioUnit));
  const archiveRows = Math.ceil(height / (5 * archiveUnit));
  // Structural filler may be tiny, but achievements require readable tiles.
  // In either projection, a usable achievement tile must be >= 164px.
  // Desktop is enabled only when two square units are at least 164px.
  // Use a topology-based eligibility rule, not a pixel rule, so resizing
  // does not reassign achievements to different tile IDs.
  const MIN_ENTRY_UNITS = 2;
  const entryMinModules = Math.ceil(entries.length / 3);
  const neededModules = Math.max(portfolioRows * 2, archiveRows * archiveColumns, entryMinModules);
  const moduleMultiple = (2 * archiveColumns) / gcd(2, archiveColumns);
  let totalModules = Math.ceil(neededModules / moduleMultiple) * moduleMultiple;
  const formations = [];
  let slotCount = 0;
  function makeModules(upTo) {
    for (let m = formations.length; m < upTo; m++) {
      const squares = generateSquareFormation(m, seed);
      formations.push(squares);
      slotCount += squares.filter(square => square.size >= MIN_ENTRY_UNITS).length;
    }
  }
  makeModules(totalModules);
  while (slotCount < entries.length) {
    totalModules += moduleMultiple;
    makeModules(totalModules);
  }

  let entryPosition = 0;
  const tiles = formations.flatMap((formation, moduleIndex) => {
    const side = moduleIndex % 2 === 0 ? 'left' : 'right';
    const wingRow = Math.floor(moduleIndex / 2);
    const blockX = archive
      ? (moduleIndex % archiveColumns) * 5 * archiveUnit
      : side === 'left' ? leftBoundary - 5 * unit : rightBoundary;
    const blockY = archive
      ? Math.floor(moduleIndex / archiveColumns) * 5 * archiveUnit
      : wingRow * 5 * unit;
    const pixelUnit = archive ? archiveUnit : unit;
    return formation.map((square) => {
      // Never place text on undersized squares. Those become ambient filler.
      const eligible = square.size >= MIN_ENTRY_UNITS;
      const entry = eligible ? (entries[entryPosition++] ?? null) : null;
      return {
        ...square, id: entry ? `entry-${entry.id}` : `ambient-m${moduleIndex}-${square.id}`,
        side, moduleIndex: wingRow, globalModuleIndex: moduleIndex,
        entry, decorative: !entry, compact: false, hidden: false,
        x: blockX + square.x * pixelUnit,
        y: blockY + square.y * pixelUnit,
        pixels: square.size * pixelUnit,
      };
    });
  });
  const contentHeight = archive
    ? Math.ceil(totalModules / archiveColumns) * 5 * archiveUnit
    : Math.ceil(totalModules / 2) * 5 * unit;
  return { tiles, metrics, contentHeight: Math.max(height + 1, contentHeight), moduleCount: totalModules / 2 };
}

````

### `portfolio-mobile-tablet-autoscroll-fix.zip` → `src/styles/global.css`

````css
:root {
  font-family: 'DM Sans', 'Segoe UI', Arial, sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  --world: #161b20;
  --world-grid: rgba(239, 229, 211, .035);
  --paper: #f0ede6;
  --paper-soft: #e7e1d7;
  --ink: #232823;
  --muted: #78786f;
  --lede-color: #6b7169;
  --paper-line: #cbc7bc;
  --accent: #777157;
  --tile-outline: rgba(246, 238, 219, .64);
  --tile-tone-0: #9eb9b7;
  --tile-tone-1: #c0a795;
  --tile-tone-2: #9eb5c8;
  --tile-tone-3: #c1bca5;
  --tile-tone-4: #b5a9ba;
  --tile-tone-5: #a7b8a5;
  --ambient-art-opacity: .52;
  --ambient-surface-brightness: 1.28;
}
:root[data-theme="dark"] {
  --world: #090e14;
  --world-grid: rgba(226, 234, 244, .035);
  --paper: #21272b;
  --paper-soft: #2b3236;
  --ink: #eeeae1;
  --muted: #a2aaa6;
  --lede-color: #909995;
  --paper-line: #47504f;
  --accent: #d1b99a;
  --tile-outline: rgba(233, 239, 239, .48);
  --tile-tone-0: #1b3236;
  --tile-tone-1: #382c2a;
  --tile-tone-2: #263548;
  --tile-tone-3: #36312a;
  --tile-tone-4: #302731;
  --tile-tone-5: #2c3731;
  --ambient-art-opacity: .38;
  --ambient-surface-brightness: .85;
}
* { box-sizing: border-box; }
html, body, #root { min-width: 280px; min-height: 100%; margin: 0; }
html { overflow: hidden; }
body { background: var(--world); color: var(--ink); }
button, a { -webkit-tap-highlight-color: transparent; }
button { font: inherit; }
button:focus-visible, a:focus-visible { outline: 2px solid #89adc1; outline-offset: 3px; }
a { color: inherit; }
.site-shell { width: 100%; min-height: 100svh; isolation: isolate; background: var(--world); overflow: hidden; }
.site-grain { pointer-events: none; position: fixed; inset: 0; z-index: 5; opacity: .3; background-image: repeating-linear-gradient(90deg,transparent 0, transparent 31px, var(--world-grid) 32px), repeating-linear-gradient(0deg,transparent 0, transparent 31px, var(--world-grid) 32px); }
/* The mosaic remains scrollable under the independently scrolling portfolio. */
.mosaic-scroll { position: fixed; inset: 0; overflow-y: auto; overflow-x: hidden; overscroll-behavior: contain; scrollbar-width: none; background: var(--world); }
.mosaic-scroll::-webkit-scrollbar, .portfolio-panel::-webkit-scrollbar { display: none; }
.mosaic-plane { position: relative; width: 100%; min-height: 100%; }
.mosaic-tile { appearance: none; position: absolute; top: 0; left: 0; padding: 0; margin: 0; width: var(--tile-size); height: var(--tile-size); display: block; overflow: hidden; border-radius: 0; border: 1px solid var(--tile-outline); transform: translate3d(var(--tile-x), var(--tile-y), 0); transition: transform .58s cubic-bezier(.23,.87,.24,1), width .58s cubic-bezier(.23,.87,.24,1), height .58s cubic-bezier(.23,.87,.24,1), border-color .22s ease, opacity .3s ease; container-type: inline-size; background: var(--tile-tone); }
.mosaic-tile--entry { cursor: pointer; text-align: left; color: #faf7f0; z-index: 1; }
.mosaic-tile--entry:hover, .mosaic-tile--entry:focus-visible { z-index: 3; border-color: #f9e5c9; }
.tile-visual { position: absolute; inset: 0; display: block; background-image: var(--tile-image); background-position: center; background-size: cover; transform: scale(1.005); transition: transform .4s cubic-bezier(.2,.75,.2,1), filter .25s; filter: saturate(.76) brightness(.86); }
.tile-visual::after { content: ''; position: absolute; inset: 0; background: linear-gradient(0deg, rgba(5,11,16,.87),rgba(5,11,16,.06) 70%); }
.mosaic-tile--entry:hover .tile-visual, .mosaic-tile--entry:focus-visible .tile-visual { transform: scale(1.085); filter: saturate(1) brightness(1.06); }
.tile-content { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end; padding: clamp(11px, 1.2vw, 22px); text-shadow: 0 1px 12px #06090fb0; min-width: 0; }
.tile-category { display: block; font-size: clamp(10px, 3.8cqi, 13px); letter-spacing: .08em; line-height: 1.25; text-transform: uppercase; font-weight: 700; opacity: .9; margin-bottom: 6px; }
.tile-title { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; line-clamp: 3; overflow: hidden; font: normal clamp(18px, 9cqi, 35px)/1.06 'Instrument Serif', Georgia, serif; max-width: 100%; overflow-wrap: anywhere; text-wrap: balance; }
.tile-corner { position: absolute; top: 10px; right: 9px; opacity: 0; transform: translate(-3px,3px); transition: opacity .2s, transform .2s; }
.mosaic-tile:hover .tile-corner, .mosaic-tile:focus-visible .tile-corner { opacity: 1; transform: none; }
.mosaic-tile--sample .tile-category { color: #e8d7b7; }
/* Tiny squares are decorative only; entry sizing is enforced by the layout generator. */
.mosaic-tile--tiny .tile-content { padding: 9px; }
.mosaic-tile--tiny .tile-title { font-size: clamp(15px, 8cqi, 20px); }
@container (max-width: 185px) { .tile-category { font-size: 10px; letter-spacing: .03em; } .tile-content { padding: 10px; } .tile-title { font-size: clamp(16px, 10cqi, 21px); } }
.mosaic-tile--ambient { border-color: var(--tile-outline); pointer-events: none; filter: brightness(var(--ambient-surface-brightness)); }
.mosaic-tile--ambient::after { content: ''; position: absolute; inset: 0; background: linear-gradient(140deg, rgba(255,255,255,.12),transparent 55%,rgba(0,0,0,.28)); }
.mosaic-tile--ambient {
  background-color: var(--tile-tone);
  background-image: var(--ambient-art), linear-gradient(135deg, rgba(255,255,255,.13), rgba(0,0,0,.08));
  background-position: center;
  background-size: cover;
  background-blend-mode: multiply, normal;
}
.ambient-mark { display: none; }
.panel-shadow { position: fixed; z-index: 6; top: 0; bottom: 0; left: 50%; transform: translateX(-50%); width: var(--panel-width, min(600px,max(468px,43vw))); box-shadow: 0 25px 95px #05080da8,0 0 0 1px rgba(255,255,255,.1); pointer-events: none; transition: opacity .4s, transform .6s; }
.site-shell--archive .panel-shadow { opacity: 0; transform: translateX(-50%) translateY(50px) scale(.94); }
.portfolio-panel { position: fixed; z-index: 7; top: 0; bottom: 0; left: 50%; transform: translateX(-50%); width: var(--panel-width, min(600px,max(468px,43vw))); overflow-y: auto; overscroll-behavior: contain; scrollbar-width: none; padding: 27px clamp(25px,3.1vw,49px) 16px; background: var(--paper); color: var(--ink); border: 1px solid var(--paper-line); box-shadow: 0 0 0 1px rgba(0,0,0,.06); transition: transform .63s cubic-bezier(.25,.72,.15,1), opacity .45s ease; }
.portfolio-panel--hidden { opacity: 0; transform: translateX(-50%) translateY(72px) scale(.9); pointer-events: none; }
.panel-heading { display:flex; align-items:center; justify-content:space-between; gap:10px; padding-bottom: 27px; border-bottom:1px solid var(--paper-line); }
.panel-monogram { border:0; background:transparent; color:var(--ink); padding:0; font:bold 27px 'Instrument Serif',Georgia,serif; cursor:pointer; }
.panel-monogram span { color: var(--accent); }
.panel-label,.panel-index,.micro-label,.number-label,.panel-footer,.portrait-credit,.source-disclosure { font: 500 9px/1.3 'DM Mono',monospace; letter-spacing:.12em; }
.panel-label { color:var(--muted); }
.tiny-asterisk { color: var(--accent); font-size: 16px; vertical-align:-2px; }
.panel-index { color:var(--muted); }
.intro-section { padding-top: 49px; }
.micro-label,.number-label { display:block; color:var(--muted); }
.hero-intro { display:flex; align-items:flex-end; gap:18px; margin-top:27px; }
.hero-copy { min-width:0; flex:1; }
.hero-greeting { font:italic 26px 'Instrument Serif',Georgia,serif; }
.hero-copy h1 { margin:10px 0 0; font:normal clamp(34px,3.65vw,52px)/1.02 'Instrument Serif',Georgia,serif; letter-spacing:-.035em; white-space:normal; }
.hero-copy h1 em, .editorial-block h2 em,.view-title em { font-weight:400; color:var(--accent); }
.hero-rule { width:45px; height:1px; background:var(--accent); margin:18px 0; }
.hero-role { font-size:11px; font-weight:700; letter-spacing:.09em; text-transform:uppercase; margin:0 0 8px; }
.hero-description { font-size:12px; line-height:1.7; color:var(--muted); margin:0; }
.portrait-frame { width: 32%; flex:none; aspect-ratio: .77; display:flex; flex-direction:column; align-self:center; position:relative; }
.portrait-frame img { display:block; width:100%; height:100%; object-fit:cover; object-position:center 34%; filter:saturate(.72); border:1px solid var(--paper-line); }
.portrait-credit { position:absolute; bottom:-17px; left:0; color:var(--muted); white-space:nowrap; font-size:7px; }
.hero-actions { display:flex; flex-wrap:wrap; gap:9px; margin-top:39px; }
.pill-link { text-decoration:none; display:inline-flex; align-items:center; justify-content:center; gap:12px; border:1px solid var(--ink); border-radius:100px; padding:11px 14px; font-size:11px; font-weight:600; cursor:pointer; transition:transform .18s,background .18s,color .18s; }
.pill-link:hover { transform:translateY(-2px); }
.pill-link:active { transform:scale(.96); }
.pill-link--dark { background:var(--ink); color:var(--paper); }
.pill-link--outline { background:transparent; color:var(--ink); }
.pill-link--outline:hover { background:var(--paper-soft); }
.editorial-block { margin-top:66px; padding-top:23px; border-top:1px solid var(--paper-line); }
.section-heading { display:flex; align-items:center; justify-content:space-between; gap:10px; }
.section-star { color:var(--accent); }
.editorial-block h2 { margin:22px 0 20px; font:normal clamp(38px,4vw,56px)/.97 'Instrument Serif',Georgia,serif; letter-spacing:-.02em; }
.editorial-block p,.body-copy { color:var(--muted); font-size:13px; line-height:1.85; letter-spacing:.018em; max-width:52ch; }
.ink-divider { width:100%; height:1px; background:var(--paper-line); margin:27px 0 22px; }
.feature-links { margin-top:13px; }
.feature-link { display:flex; justify-content:space-between; align-items:center; gap:12px; width:100%; padding:13px 0; background:none; color:var(--ink); border:0; border-bottom:1px solid var(--paper-line); text-align:start; cursor:pointer; font:normal 20px/1.2 'Instrument Serif',Georgia,serif; }
.feature-link:hover { color:var(--accent); }
.feature-number { font:9px 'DM Mono',monospace; color:var(--muted); margin-inline-end:auto; min-width:28px; }
.feature-link > svg:last-child { margin-inline-start:auto; }
.editorial-block--bottom { padding-bottom:40px; }
.inline-arrow { display:inline-flex;align-items:center;gap:9px;padding:0;border:0;background:none;color:var(--ink);font-size:12px;font-weight:600;text-decoration:none;cursor:pointer; }
.inline-arrow:hover { color:var(--accent); }
.inner-view { padding-top:51px; min-height:65%; }
.view-title { font:normal clamp(44px,5vw,72px)/.97 'Instrument Serif',Georgia,serif; letter-spacing:-.025em; margin:23px 0 19px; }
.view-lede { max-width:45ch; color:var(--lede-color); font-size:clamp(16px,1.4vw,18px); font-weight:400; line-height:1.66; letter-spacing:.012em; margin:0 0 39px; }
.project-list { border-top:1px solid var(--paper-line); }
.project-row { width:100%; padding:17px 0; display:flex; align-items:center; gap:12px; border:0; border-bottom:1px solid var(--paper-line); background:none; text-align:start; color:var(--ink); cursor:pointer; }
.project-row:hover .project-row-description strong { color:var(--accent); }
.project-row img { width:68px;height:68px;object-fit:cover;border:1px solid var(--paper-line); }
.project-row-number { font:9px 'DM Mono',monospace;color:var(--muted); }
.project-row-description { flex:1; min-width:0;display:flex;flex-direction:column;gap:7px; }
.project-row-description strong { font:normal 24px 'Instrument Serif',Georgia,serif; }
.project-row-description small { color:var(--muted);font:9px 'DM Mono',monospace; }
.source-disclosure { margin:24px 0;line-height:1.7;color:var(--muted);letter-spacing:0; }
.editorial-illustration,.entry-hero-image { display:block;width:100%;aspect-ratio:1.55;object-fit:cover;border:1px solid var(--paper-line); }
.subheading { font:normal 33px 'Instrument Serif',Georgia,serif;margin:34px 0 12px; }
.contact-options { display:grid; gap:10px; margin:38px 0 25px; }
.fine-print { color:var(--muted);font-size:11px;line-height:1.7; }
.sample-alert { margin-top:18px; padding:10px 12px; background:var(--paper-soft);border-left:2px solid var(--accent);font-size:10px;font-weight:700;letter-spacing:.06em; }
.entry-view .view-title { overflow-wrap:anywhere; }
.entry-figure { margin:0 0 22px; }
.entry-caption { margin-top:17px; font-size:10px; letter-spacing:.16em; line-height:1.5; }
.entry-links,.writing-resource-list { display:grid; gap:10px; margin:27px 0 24px; }
.resource-link { width:100%; min-height:66px; display:flex; align-items:center; justify-content:space-between; gap:14px; padding:15px 16px 15px 18px; background:transparent; color:var(--ink); border:1px solid var(--paper-line); border-radius:2px; text-decoration:none; text-align:start; cursor:pointer; font:600 clamp(14px,1.25vw,17px)/1.4 'DM Sans','Segoe UI',Arial,sans-serif; letter-spacing:.018em; transition:background .2s,border-color .2s,transform .2s; }
.resource-link:hover { background:var(--paper-soft); border-color:var(--accent); transform:translateY(-2px); }
.resource-link:active { transform:translateY(0); }
.resource-link-icon { width:36px; height:36px; flex:none; display:grid; place-items:center; border:1px solid var(--paper-line); border-radius:2px; transition:transform .2s,border-color .2s; }
.resource-link:hover .resource-link-icon, .resource-link:focus-visible .resource-link-icon { transform:translate(2px,-2px); border-color:var(--accent); }
[dir="rtl"] .resource-link:hover .resource-link-icon, [dir="rtl"] .resource-link:focus-visible .resource-link-icon { transform:translate(-2px,-2px); }
.entry-view .pill-link { margin-top:28px; }
.panel-footer { margin-top:58px; padding:20px 0 26px; border-top:1px solid var(--paper-line);display:flex;justify-content:space-between;gap:15px;color:var(--muted);font-size:8px;letter-spacing:.02em; }
/* The toolbar is transparent: the collage always extends behind it. */
.floating-controls { position:fixed;z-index:45;top:24px;right:26px;display:flex;align-items:center;gap:14px;pointer-events:none; }
.orb-button { width:46px;height:46px;display:grid;place-items:center;position:relative;pointer-events:auto; border-radius:50%; border:1px solid rgba(237,237,231,.58);color:#f6f1e7;background:rgba(23,29,35,.68);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);cursor:pointer;box-shadow:0 3px 17px rgba(0,0,0,.22);transition:transform .2s cubic-bezier(.2,.8,.2,1),background .2s,border-color .2s,box-shadow .2s; }
.orb-button:hover { transform:scale(1.1);background:rgba(58,68,74,.9);border-color:#f5ead7;box-shadow:0 4px 24px rgba(0,0,0,.35); }
.orb-button:active { transform:scale(.92); }
.orb-button.is-active { background:#e8e0d1;color:#1c2529;border-color:#fff8ea; }
.language-button span:first-child { font:500 12px 'DM Mono',monospace; }
.orb-tooltip { position:absolute;right:50%;top:calc(100% + 10px);transform:translate(50%,-4px);white-space:nowrap;max-width:190px;pointer-events:none;opacity:0;border-radius:4px;background:#f2eadf;color:#252626;font-size:10px;padding:6px 9px;transition:opacity .2s,transform .2s; }
.orb-button:hover .orb-tooltip,.orb-button:focus-visible .orb-tooltip { opacity:1;transform:translate(50%,0); }
.archive-demo-dock { position:fixed;z-index:46;left:24px;bottom:24px;max-width:calc(100% - 48px);display:flex;gap:18px;align-items:center;padding:12px 13px 12px 16px;color:#e8e6df;background:rgba(17,23,29,.9);border:1px solid rgba(248,244,231,.35);backdrop-filter:blur(16px);box-shadow:0 10px 40px #0007; }
.dock-copy { display:flex;flex-direction:column;gap:5px;font-size:10px;color:#d3d4d0; }
.dock-kicker { letter-spacing:.1em;font-size:9px;text-transform:uppercase;font-weight:700;color:#eae9e4; }
.dock-hint { color:#aab3b4; }
.dock-actions { display:flex;gap:6px; }
.dock-actions button { width:48px;height:34px;display:flex;align-items:center;justify-content:center;gap:2px;border:1px solid #ffffff60;background:#ffffff0e;color:#faf7f0;cursor:pointer; }
.dock-actions button:hover { background:#ffffff2b; }
.dock-actions button:disabled { opacity:.3;cursor:default; }
.dock-actions button span { font-size:11px; }
.transition-layer { position:fixed;z-index:90;inset:0;pointer-events:none;overflow:hidden; }
.transition-image { position:fixed;left:var(--origin-x);top:var(--origin-y);width:var(--origin-width);height:var(--origin-height);background-image:linear-gradient(0deg,rgba(8,13,17,.55),rgba(8,13,17,.26)),var(--transition-image);background-position:center;background-size:cover;box-shadow:0 0 0 2px #f2e5d0;transition:left .42s cubic-bezier(.2,.74,.12,1),top .42s cubic-bezier(.2,.74,.12,1),width .42s cubic-bezier(.2,.74,.12,1),height .42s cubic-bezier(.2,.74,.12,1),opacity .32s;display:grid;place-items:center; }
.transition-title { opacity:0;color:#f5ede3;font:normal clamp(34px,6vw,84px) 'Instrument Serif',Georgia,serif;letter-spacing:-.04em;text-align:center;transition:opacity .18s .18s; }
.transition-layer--zoom .transition-image,.transition-layer--reveal .transition-image { left:-3vw;top:-3vh;width:106vw;height:106vh; }
.transition-layer--zoom .transition-title { opacity:1; }
.transition-layer--reveal { opacity:0;transition:opacity .30s ease; }
.transition-wash { position:absolute;inset:0;background:#efe7d8;opacity:0;transition:opacity .35s ease; }
.transition-layer--zoom .transition-wash { opacity:.1; }
/* Narrow screens retain a readable paper column and two square-only side streams.
   The same achievement buttons join a grid when Archive Mode opens. */
/* Both mobile side streams share one vertical scroll plane. Keep it scrollable
   in Portfolio Mode as well as Archive Mode, including on iOS Safari. */
.mosaic-scroll--compact { overflow-y: auto; overflow-x: hidden; -webkit-overflow-scrolling: touch; touch-action: pan-y; }
.mosaic-scroll--archive .mosaic-tile--concealed { opacity: 0; pointer-events: none; }
.mosaic-scroll--compact .mosaic-tile--responsive .tile-title { font-size: clamp(16px, 9cqi, 28px); line-height: 1.08; white-space: normal; }
.mosaic-scroll--compact .mosaic-tile--responsive .tile-category { font-size: clamp(9px, 3cqi, 11px); }
.mosaic-scroll--compact:not(.mosaic-scroll--archive) .tile-content { opacity: .65; }
.mosaic-scroll--compact.mosaic-scroll--archive .tile-content { padding: clamp(10px, 2.3vw, 18px); }
.site-shell--compact .portfolio-panel,
.site-shell--compact .panel-shadow { top: 0; bottom: 0; }
.site-shell--compact .portfolio-panel {
  padding: max(76px, calc(env(safe-area-inset-top, 0px) + 63px)) clamp(17px, 3vw, 30px) 18px;
}
.site-shell--compact .floating-controls {
  top: max(12px, env(safe-area-inset-top, 0px));
  right: max(12px, env(safe-area-inset-right, 0px));
  gap: 10px;
}
.site-shell--compact .orb-button { width: 44px; height: 44px; }
.site-shell--compact .orb-tooltip { display: none; }
.site-shell--compact .archive-demo-dock {
  left: max(10px, env(safe-area-inset-left, 0px));
  bottom: max(10px, env(safe-area-inset-bottom, 0px));
  max-width: calc(100% - 20px);
}
@media (max-width: 1100px) { .panel-label { font-size:8px; } .portrait-frame { width:30%; } }
@media (max-width: 720px) {
  .portfolio-panel,.panel-shadow { top:0;bottom:0; }
  .portfolio-panel { padding: max(76px, calc(env(safe-area-inset-top, 0px) + 63px)) 23px 15px; }
  .panel-heading { padding-bottom:18px; }
  .floating-controls { top:max(12px, env(safe-area-inset-top, 0px));right:max(12px, env(safe-area-inset-right, 0px));gap:10px; }
  .orb-button { width:44px;height:44px; }
  .intro-section { padding-top:33px; }
  .hero-intro { gap:15px; }
  .hero-copy h1 { font-size:clamp(34px,8.2vw,55px); }
  .portrait-frame { width:32%; }
  .hero-greeting { font-size:24px; }
  .hero-description { font-size:12px; }
  .editorial-block { margin-top:48px; }
  .editorial-block h2 { font-size:clamp(38px,9vw,52px); }
  .view-lede { font-size:16px; line-height:1.7; margin-bottom:32px; }
  .resource-link { min-height:60px; padding:12px 13px; font-size:15px; }
  .resource-link-icon { width:32px; height:32px; }
  .archive-demo-dock { bottom:13px;left:13px;max-width:calc(100% - 26px);padding:9px 10px;gap:10px; }
  .dock-hint { display:none; }
  .dock-actions button { width:38px;height:34px; }
}
@media (max-width: 380px) {
  .hero-intro { flex-wrap:wrap; }
  .hero-copy { flex-basis: 100%; }
  .portrait-frame { width:104px;aspect-ratio:.77;position:relative;right:auto;top:auto;opacity:1; }
  .hero-description { max-width:26ch; }
  .portfolio-panel { padding:78px 17px 14px; }
  .panel-label { font-size:7px; }
}
@media (prefers-reduced-motion: reduce) {
  .mosaic-scroll--compact .mosaic-tile { animation: none !important; translate: 0 0 !important; }
  *,*::before,*::after { animation-duration:.01ms!important;transition-duration:.01ms!important;scroll-behavior:auto!important; }
}

/* Native scroll animation replaces expensive per-tile keyframe animations. */
.mosaic-scroll { scroll-behavior: auto; }

:root[data-theme="dark"] .mosaic-tile--ambient { background-blend-mode: screen, normal; }

/* Responsive portfolio: visible square streams and a narrow-screen editorial page.
   The rails occupy actual layout space instead of being clipped behind paper. */
@media (max-width: 600px) {
  .site-shell--compact .portfolio-panel {
    padding: max(76px, calc(env(safe-area-inset-top, 0px) + 64px))
      clamp(12px, 3.3vw, 18px) 20px;
  }
  .site-shell--compact .panel-heading { gap: 5px; padding-bottom: 18px; }
  .site-shell--compact .panel-label { font-size: 7px; letter-spacing: .06em; }
  .site-shell--compact .panel-index { font-size: 8px; }
  .site-shell--compact .intro-section { padding-top: 27px; }
  .site-shell--compact .hero-intro { flex-direction: column; align-items: stretch; gap: 22px; }
  .site-shell--compact .hero-copy { flex-basis: auto; width: 100%; }
  .site-shell--compact .hero-copy h1 { font-size: clamp(32px, 8vw, 42px); overflow-wrap: anywhere; }
  .site-shell--compact .hero-greeting { font-size: 24px; }
  .site-shell--compact .hero-description { max-width: none; font-size: 13px; line-height: 1.7; }
  .site-shell--compact .portrait-frame { width: min(44%, 132px); align-self: flex-start; margin-bottom: 9px; }
  .site-shell--compact .hero-actions { display: grid; grid-template-columns: 1fr; gap: 10px; margin-top: 33px; }
  .site-shell--compact .hero-actions .pill-link { min-width: 0; width: 100%; min-height: 44px; justify-content: space-between; padding: 11px 12px; }
  .site-shell--compact .view-title { font-size: clamp(34px, 9.3vw, 50px); overflow-wrap: anywhere; }
  .site-shell--compact .editorial-block h2 { font-size: clamp(32px, 9.3vw, 45px); }
  .site-shell--compact .view-lede { font-size: 15px; }
  .site-shell--compact .resource-link { min-width: 0; font-size: 14px; overflow-wrap: anywhere; }
  .site-shell--compact .panel-footer { flex-wrap: wrap; }
  /* Tiny image rails are tappable picture previews, not unreadable text cards.
     Full titles appear when entering Archive Mode. */
  .mosaic-scroll--compact:not(.mosaic-scroll--archive) .mosaic-tile--entry .tile-content { display: none; }
  .mosaic-scroll--compact:not(.mosaic-scroll--archive) .mosaic-tile--entry .tile-visual::after {
    background: linear-gradient(0deg, rgba(5,11,16,.20),rgba(5,11,16,0) 65%);
  }
}
@media (max-width: 350px) {
  .site-shell--compact .hero-copy h1 { font-size: 31px; }
  .site-shell--compact .portrait-frame { width: 108px; }
  .site-shell--compact .panel-heading .panel-label { font-size: 6px; }
  .site-shell--compact .floating-controls { gap: 7px; right: 7px; }
  .site-shell--compact .orb-button { width: 42px; height: 42px; }
}

````

### `portfolio-mobile-tablet-autoscroll-fix.zip` → `tests/mobileScroll.test.js`

````javascript
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { layoutMosaic } from '../src/lib/mosaicLayout.js';
import { advanceAutoScroll, initialAutoScrollState } from '../src/lib/autoScroll.js';

const css = readFileSync(new URL('../src/styles/global.css', import.meta.url), 'utf8');
const mosaicComponent = readFileSync(new URL('../src/components/ArchiveMosaic.jsx', import.meta.url), 'utf8');

test('compact mosaics are vertically scrollable in both portfolio and archive modes', () => {
  assert.match(css, /\.mosaic-scroll--compact\s*\{[^}]*overflow-y:\s*auto/);
  assert.doesNotMatch(css, /\.mosaic-scroll--compact:not\(\.mosaic-scroll--archive\)\s*\{\s*overflow:\s*hidden/);
  for (const viewport of [{ width: 390, height: 844 }, { width: 820, height: 1180 }, { width: 844, height: 390 }]) {
    for (const archive of [false, true]) {
      const layout = layoutMosaic([], viewport, archive, 42);
      assert.equal(layout.metrics.compact, true);
      assert.ok(layout.contentHeight > viewport.height * 1.2, `scroll range at ${viewport.width}x${viewport.height}, archive=${archive}`);
      assert.ok(layout.tiles.length > 0);
    }
  }
});

test('fractional progress is accumulated across rounded iOS scrollTop values', () => {
  assert.match(mosaicComponent, /advanceAutoScroll\(scrollState\.current, delta, max\)/);
  let state = initialAutoScrollState();
  let browserScrollTop = 0;
  for (let i = 0; i < 300; i++) {
    state = advanceAutoScroll(state, 16, 300);
    if (Math.abs(browserScrollTop - state.position) >= 0.5) browserScrollTop = Math.round(state.position);
  }
  assert.ok(browserScrollTop > 100, 'autoscroll keeps moving even if the browser rounds scrollTop');
});

test('manual touch scrolling is reflected in resumed autoscroll position', () => {
  assert.match(mosaicComponent, /if \(performance\.now\(\) < pauseUntil\.current\)/);
  assert.match(mosaicComponent, /position: element\.scrollTop/);
});

````

### `portfolio-mobile-top-controls-fix.zip` → `src/components/FloatingControls.jsx`

````jsx
import React, { useEffect, useRef, useState } from 'react';
import Icon from './Icons.jsx';

const CONTROLS_IDLE_MS = 3000;

export default function FloatingControls({ archive, onToggleArchive, theme, onToggleTheme, lang, onToggleLanguage, t }) {
  const [visible, setVisible] = useState(true);
  const controlsRef = useRef(null);

  useEffect(() => {
    let idleTimer;
    let lastPointerMove = 0;

    const armHide = () => {
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        // Keep the controls available while someone navigates them with a keyboard.
        if (controlsRef.current?.querySelector(':focus-visible')) {
          armHide();
          return;
        }
        setVisible(false);
      }, CONTROLS_IDLE_MS);
    };

    const registerActivity = (event) => {
      // Moving the mouse at 120 Hz needn't reset a timer 120 times a second.
      if (event.type === 'pointermove') {
        const now = performance.now();
        if (now - lastPointerMove < 150) return;
        lastPointerMove = now;
      }
      setVisible(true);
      armHide();
    };

    const activityEvents = ['pointermove', 'pointerdown', 'touchstart', 'touchmove', 'wheel', 'keydown', 'focusin'];
    activityEvents.forEach(name => window.addEventListener(name, registerActivity, { passive: true }));
    armHide();

    return () => {
      window.clearTimeout(idleTimer);
      activityEvents.forEach(name => window.removeEventListener(name, registerActivity));
    };
  }, []);

  return (
    <div ref={controlsRef} className={`floating-controls ${visible ? '' : 'floating-controls--hidden'}`}
      role="group" aria-label="Display and archive controls">
      <button type="button" className="orb-button" onClick={onToggleTheme} aria-label={t.appearance} title={t.appearance}>
        <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={19} />
        <span className="orb-tooltip">{t.appearance}</span>
      </button>
      <button type="button" className="orb-button language-button" onClick={onToggleLanguage} aria-label={t.language} title={t.language}>
        <span>{lang === 'en' ? 'EN' : 'ع'}</span>
        <span className="orb-tooltip">{t.language}</span>
      </button>
      <button type="button" className={`orb-button archive-orb ${archive ? 'is-active' : ''}`} onClick={onToggleArchive} aria-label={archive ? t.portfolio : t.archive} title={archive ? t.portfolio : t.archive} aria-pressed={archive}>
        <Icon name={archive ? 'close' : 'grid'} size={20} />
        <span className="orb-tooltip">{archive ? t.portfolio : t.archive}</span>
      </button>
    </div>
  );
}

````

### `portfolio-mobile-top-controls-fix.zip` → `src/styles/global.css`

````css
:root {
  font-family: 'DM Sans', 'Segoe UI', Arial, sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  --world: #161b20;
  --world-grid: rgba(239, 229, 211, .035);
  --paper: #f0ede6;
  --paper-soft: #e7e1d7;
  --ink: #232823;
  --muted: #78786f;
  --lede-color: #6b7169;
  --paper-line: #cbc7bc;
  --accent: #777157;
  --tile-outline: rgba(246, 238, 219, .64);
  --tile-tone-0: #9eb9b7;
  --tile-tone-1: #c0a795;
  --tile-tone-2: #9eb5c8;
  --tile-tone-3: #c1bca5;
  --tile-tone-4: #b5a9ba;
  --tile-tone-5: #a7b8a5;
  --ambient-art-opacity: .52;
  --ambient-surface-brightness: 1.28;
}
:root[data-theme="dark"] {
  --world: #090e14;
  --world-grid: rgba(226, 234, 244, .035);
  --paper: #21272b;
  --paper-soft: #2b3236;
  --ink: #eeeae1;
  --muted: #a2aaa6;
  --lede-color: #909995;
  --paper-line: #47504f;
  --accent: #d1b99a;
  --tile-outline: rgba(233, 239, 239, .48);
  --tile-tone-0: #1b3236;
  --tile-tone-1: #382c2a;
  --tile-tone-2: #263548;
  --tile-tone-3: #36312a;
  --tile-tone-4: #302731;
  --tile-tone-5: #2c3731;
  --ambient-art-opacity: .38;
  --ambient-surface-brightness: .85;
}
* { box-sizing: border-box; }
html, body, #root { min-width: 280px; min-height: 100%; margin: 0; }
html { overflow: hidden; }
body { background: var(--world); color: var(--ink); }
button, a { -webkit-tap-highlight-color: transparent; }
button { font: inherit; }
button:focus-visible, a:focus-visible { outline: 2px solid #89adc1; outline-offset: 3px; }
a { color: inherit; }
.site-shell { width: 100%; min-height: 100svh; isolation: isolate; background: var(--world); overflow: hidden; }
.site-grain { pointer-events: none; position: fixed; inset: 0; z-index: 5; opacity: .3; background-image: repeating-linear-gradient(90deg,transparent 0, transparent 31px, var(--world-grid) 32px), repeating-linear-gradient(0deg,transparent 0, transparent 31px, var(--world-grid) 32px); }
/* The mosaic remains scrollable under the independently scrolling portfolio. */
.mosaic-scroll { position: fixed; inset: 0; overflow-y: auto; overflow-x: hidden; overscroll-behavior: contain; scrollbar-width: none; background: var(--world); }
.mosaic-scroll::-webkit-scrollbar, .portfolio-panel::-webkit-scrollbar { display: none; }
.mosaic-plane { position: relative; width: 100%; min-height: 100%; }
.mosaic-tile { appearance: none; position: absolute; top: 0; left: 0; padding: 0; margin: 0; width: var(--tile-size); height: var(--tile-size); display: block; overflow: hidden; border-radius: 0; border: 1px solid var(--tile-outline); transform: translate3d(var(--tile-x), var(--tile-y), 0); transition: transform .58s cubic-bezier(.23,.87,.24,1), width .58s cubic-bezier(.23,.87,.24,1), height .58s cubic-bezier(.23,.87,.24,1), border-color .22s ease, opacity .3s ease; container-type: inline-size; background: var(--tile-tone); }
.mosaic-tile--entry { cursor: pointer; text-align: left; color: #faf7f0; z-index: 1; }
.mosaic-tile--entry:hover, .mosaic-tile--entry:focus-visible { z-index: 3; border-color: #f9e5c9; }
.tile-visual { position: absolute; inset: 0; display: block; background-image: var(--tile-image); background-position: center; background-size: cover; transform: scale(1.005); transition: transform .4s cubic-bezier(.2,.75,.2,1), filter .25s; filter: saturate(.76) brightness(.86); }
.tile-visual::after { content: ''; position: absolute; inset: 0; background: linear-gradient(0deg, rgba(5,11,16,.87),rgba(5,11,16,.06) 70%); }
.mosaic-tile--entry:hover .tile-visual, .mosaic-tile--entry:focus-visible .tile-visual { transform: scale(1.085); filter: saturate(1) brightness(1.06); }
.tile-content { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end; padding: clamp(11px, 1.2vw, 22px); text-shadow: 0 1px 12px #06090fb0; min-width: 0; }
.tile-category { display: block; font-size: clamp(10px, 3.8cqi, 13px); letter-spacing: .08em; line-height: 1.25; text-transform: uppercase; font-weight: 700; opacity: .9; margin-bottom: 6px; }
.tile-title { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; line-clamp: 3; overflow: hidden; font: normal clamp(18px, 9cqi, 35px)/1.06 'Instrument Serif', Georgia, serif; max-width: 100%; overflow-wrap: anywhere; text-wrap: balance; }
.tile-corner { position: absolute; top: 10px; right: 9px; opacity: 0; transform: translate(-3px,3px); transition: opacity .2s, transform .2s; }
.mosaic-tile:hover .tile-corner, .mosaic-tile:focus-visible .tile-corner { opacity: 1; transform: none; }
.mosaic-tile--sample .tile-category { color: #e8d7b7; }
/* Tiny squares are decorative only; entry sizing is enforced by the layout generator. */
.mosaic-tile--tiny .tile-content { padding: 9px; }
.mosaic-tile--tiny .tile-title { font-size: clamp(15px, 8cqi, 20px); }
@container (max-width: 185px) { .tile-category { font-size: 10px; letter-spacing: .03em; } .tile-content { padding: 10px; } .tile-title { font-size: clamp(16px, 10cqi, 21px); } }
.mosaic-tile--ambient { border-color: var(--tile-outline); pointer-events: none; filter: brightness(var(--ambient-surface-brightness)); }
.mosaic-tile--ambient::after { content: ''; position: absolute; inset: 0; background: linear-gradient(140deg, rgba(255,255,255,.12),transparent 55%,rgba(0,0,0,.28)); }
.mosaic-tile--ambient {
  background-color: var(--tile-tone);
  background-image: var(--ambient-art), linear-gradient(135deg, rgba(255,255,255,.13), rgba(0,0,0,.08));
  background-position: center;
  background-size: cover;
  background-blend-mode: multiply, normal;
}
.ambient-mark { display: none; }
.panel-shadow { position: fixed; z-index: 6; top: 0; bottom: 0; left: 50%; transform: translateX(-50%); width: var(--panel-width, min(600px,max(468px,43vw))); box-shadow: 0 25px 95px #05080da8,0 0 0 1px rgba(255,255,255,.1); pointer-events: none; transition: opacity .4s, transform .6s; }
.site-shell--archive .panel-shadow { opacity: 0; transform: translateX(-50%) translateY(50px) scale(.94); }
.portfolio-panel { position: fixed; z-index: 7; top: 0; bottom: 0; left: 50%; transform: translateX(-50%); width: var(--panel-width, min(600px,max(468px,43vw))); overflow-y: auto; overscroll-behavior: contain; scrollbar-width: none; padding: 27px clamp(25px,3.1vw,49px) 16px; background: var(--paper); color: var(--ink); border: 1px solid var(--paper-line); box-shadow: 0 0 0 1px rgba(0,0,0,.06); transition: transform .63s cubic-bezier(.25,.72,.15,1), opacity .45s ease; }
.portfolio-panel--hidden { opacity: 0; transform: translateX(-50%) translateY(72px) scale(.9); pointer-events: none; }
.panel-heading { display:flex; align-items:center; justify-content:space-between; gap:10px; padding-bottom: 27px; border-bottom:1px solid var(--paper-line); }
.panel-monogram { border:0; background:transparent; color:var(--ink); padding:0; font:bold 27px 'Instrument Serif',Georgia,serif; cursor:pointer; }
.panel-monogram span { color: var(--accent); }
.panel-label,.panel-index,.micro-label,.number-label,.panel-footer,.portrait-credit,.source-disclosure { font: 500 9px/1.3 'DM Mono',monospace; letter-spacing:.12em; }
.panel-label { color:var(--muted); }
.tiny-asterisk { color: var(--accent); font-size: 16px; vertical-align:-2px; }
.panel-index { color:var(--muted); }
.intro-section { padding-top: 49px; }
.micro-label,.number-label { display:block; color:var(--muted); }
.hero-intro { display:flex; align-items:flex-end; gap:18px; margin-top:27px; }
.hero-copy { min-width:0; flex:1; }
.hero-greeting { font:italic 26px 'Instrument Serif',Georgia,serif; }
.hero-copy h1 { margin:10px 0 0; font:normal clamp(34px,3.65vw,52px)/1.02 'Instrument Serif',Georgia,serif; letter-spacing:-.035em; white-space:normal; }
.hero-copy h1 em, .editorial-block h2 em,.view-title em { font-weight:400; color:var(--accent); }
.hero-rule { width:45px; height:1px; background:var(--accent); margin:18px 0; }
.hero-role { font-size:11px; font-weight:700; letter-spacing:.09em; text-transform:uppercase; margin:0 0 8px; }
.hero-description { font-size:12px; line-height:1.7; color:var(--muted); margin:0; }
.portrait-frame { width: 32%; flex:none; aspect-ratio: .77; display:flex; flex-direction:column; align-self:center; position:relative; }
.portrait-frame img { display:block; width:100%; height:100%; object-fit:cover; object-position:center 34%; filter:saturate(.72); border:1px solid var(--paper-line); }
.portrait-credit { position:absolute; bottom:-17px; left:0; color:var(--muted); white-space:nowrap; font-size:7px; }
.hero-actions { display:flex; flex-wrap:wrap; gap:9px; margin-top:39px; }
.pill-link { text-decoration:none; display:inline-flex; align-items:center; justify-content:center; gap:12px; border:1px solid var(--ink); border-radius:100px; padding:11px 14px; font-size:11px; font-weight:600; cursor:pointer; transition:transform .18s,background .18s,color .18s; }
.pill-link:hover { transform:translateY(-2px); }
.pill-link:active { transform:scale(.96); }
.pill-link--dark { background:var(--ink); color:var(--paper); }
.pill-link--outline { background:transparent; color:var(--ink); }
.pill-link--outline:hover { background:var(--paper-soft); }
.editorial-block { margin-top:66px; padding-top:23px; border-top:1px solid var(--paper-line); }
.section-heading { display:flex; align-items:center; justify-content:space-between; gap:10px; }
.section-star { color:var(--accent); }
.editorial-block h2 { margin:22px 0 20px; font:normal clamp(38px,4vw,56px)/.97 'Instrument Serif',Georgia,serif; letter-spacing:-.02em; }
.editorial-block p,.body-copy { color:var(--muted); font-size:13px; line-height:1.85; letter-spacing:.018em; max-width:52ch; }
.ink-divider { width:100%; height:1px; background:var(--paper-line); margin:27px 0 22px; }
.feature-links { margin-top:13px; }
.feature-link { display:flex; justify-content:space-between; align-items:center; gap:12px; width:100%; padding:13px 0; background:none; color:var(--ink); border:0; border-bottom:1px solid var(--paper-line); text-align:start; cursor:pointer; font:normal 20px/1.2 'Instrument Serif',Georgia,serif; }
.feature-link:hover { color:var(--accent); }
.feature-number { font:9px 'DM Mono',monospace; color:var(--muted); margin-inline-end:auto; min-width:28px; }
.feature-link > svg:last-child { margin-inline-start:auto; }
.editorial-block--bottom { padding-bottom:40px; }
.inline-arrow { display:inline-flex;align-items:center;gap:9px;padding:0;border:0;background:none;color:var(--ink);font-size:12px;font-weight:600;text-decoration:none;cursor:pointer; }
.inline-arrow:hover { color:var(--accent); }
.inner-view { padding-top:51px; min-height:65%; }
.view-title { font:normal clamp(44px,5vw,72px)/.97 'Instrument Serif',Georgia,serif; letter-spacing:-.025em; margin:23px 0 19px; }
.view-lede { max-width:45ch; color:var(--lede-color); font-size:clamp(16px,1.4vw,18px); font-weight:400; line-height:1.66; letter-spacing:.012em; margin:0 0 39px; }
.project-list { border-top:1px solid var(--paper-line); }
.project-row { width:100%; padding:17px 0; display:flex; align-items:center; gap:12px; border:0; border-bottom:1px solid var(--paper-line); background:none; text-align:start; color:var(--ink); cursor:pointer; }
.project-row:hover .project-row-description strong { color:var(--accent); }
.project-row img { width:68px;height:68px;object-fit:cover;border:1px solid var(--paper-line); }
.project-row-number { font:9px 'DM Mono',monospace;color:var(--muted); }
.project-row-description { flex:1; min-width:0;display:flex;flex-direction:column;gap:7px; }
.project-row-description strong { font:normal 24px 'Instrument Serif',Georgia,serif; }
.project-row-description small { color:var(--muted);font:9px 'DM Mono',monospace; }
.source-disclosure { margin:24px 0;line-height:1.7;color:var(--muted);letter-spacing:0; }
.editorial-illustration,.entry-hero-image { display:block;width:100%;aspect-ratio:1.55;object-fit:cover;border:1px solid var(--paper-line); }
.subheading { font:normal 33px 'Instrument Serif',Georgia,serif;margin:34px 0 12px; }
.contact-options { display:grid; gap:10px; margin:38px 0 25px; }
.fine-print { color:var(--muted);font-size:11px;line-height:1.7; }
.sample-alert { margin-top:18px; padding:10px 12px; background:var(--paper-soft);border-left:2px solid var(--accent);font-size:10px;font-weight:700;letter-spacing:.06em; }
.entry-view .view-title { overflow-wrap:anywhere; }
.entry-figure { margin:0 0 22px; }
.entry-caption { margin-top:17px; font-size:10px; letter-spacing:.16em; line-height:1.5; }
.entry-links,.writing-resource-list { display:grid; gap:10px; margin:27px 0 24px; }
.resource-link { width:100%; min-height:66px; display:flex; align-items:center; justify-content:space-between; gap:14px; padding:15px 16px 15px 18px; background:transparent; color:var(--ink); border:1px solid var(--paper-line); border-radius:2px; text-decoration:none; text-align:start; cursor:pointer; font:600 clamp(14px,1.25vw,17px)/1.4 'DM Sans','Segoe UI',Arial,sans-serif; letter-spacing:.018em; transition:background .2s,border-color .2s,transform .2s; }
.resource-link:hover { background:var(--paper-soft); border-color:var(--accent); transform:translateY(-2px); }
.resource-link:active { transform:translateY(0); }
.resource-link-icon { width:36px; height:36px; flex:none; display:grid; place-items:center; border:1px solid var(--paper-line); border-radius:2px; transition:transform .2s,border-color .2s; }
.resource-link:hover .resource-link-icon, .resource-link:focus-visible .resource-link-icon { transform:translate(2px,-2px); border-color:var(--accent); }
[dir="rtl"] .resource-link:hover .resource-link-icon, [dir="rtl"] .resource-link:focus-visible .resource-link-icon { transform:translate(-2px,-2px); }
.entry-view .pill-link { margin-top:28px; }
.panel-footer { margin-top:58px; padding:20px 0 26px; border-top:1px solid var(--paper-line);display:flex;justify-content:space-between;gap:15px;color:var(--muted);font-size:8px;letter-spacing:.02em; }
/* Floating controls overlap the collage only while the user is active. */
.floating-controls { position:fixed;z-index:45;top:24px;right:26px;display:flex;align-items:center;gap:14px;pointer-events:none;opacity:1;transform:translateY(0);transition:opacity .32s ease,transform .32s ease; }
.floating-controls--hidden { opacity:0;transform:translateY(-6px); }
.floating-controls--hidden .orb-button { pointer-events:none; }
.orb-button { width:46px;height:46px;display:grid;place-items:center;position:relative;pointer-events:auto; border-radius:50%; border:1px solid rgba(237,237,231,.58);color:#f6f1e7;background:rgba(23,29,35,.68);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);cursor:pointer;box-shadow:0 3px 17px rgba(0,0,0,.22);transition:transform .2s cubic-bezier(.2,.8,.2,1),background .2s,border-color .2s,box-shadow .2s; }
.orb-button:hover { transform:scale(1.1);background:rgba(58,68,74,.9);border-color:#f5ead7;box-shadow:0 4px 24px rgba(0,0,0,.35); }
.orb-button:active { transform:scale(.92); }
.orb-button.is-active { background:#e8e0d1;color:#1c2529;border-color:#fff8ea; }
.language-button span:first-child { font:500 12px 'DM Mono',monospace; }
.orb-tooltip { position:absolute;right:50%;top:calc(100% + 10px);transform:translate(50%,-4px);white-space:nowrap;max-width:190px;pointer-events:none;opacity:0;border-radius:4px;background:#f2eadf;color:#252626;font-size:10px;padding:6px 9px;transition:opacity .2s,transform .2s; }
.orb-button:hover .orb-tooltip,.orb-button:focus-visible .orb-tooltip { opacity:1;transform:translate(50%,0); }
.archive-demo-dock { position:fixed;z-index:46;left:24px;bottom:24px;max-width:calc(100% - 48px);display:flex;gap:18px;align-items:center;padding:12px 13px 12px 16px;color:#e8e6df;background:rgba(17,23,29,.9);border:1px solid rgba(248,244,231,.35);backdrop-filter:blur(16px);box-shadow:0 10px 40px #0007; }
.dock-copy { display:flex;flex-direction:column;gap:5px;font-size:10px;color:#d3d4d0; }
.dock-kicker { letter-spacing:.1em;font-size:9px;text-transform:uppercase;font-weight:700;color:#eae9e4; }
.dock-hint { color:#aab3b4; }
.dock-actions { display:flex;gap:6px; }
.dock-actions button { width:48px;height:34px;display:flex;align-items:center;justify-content:center;gap:2px;border:1px solid #ffffff60;background:#ffffff0e;color:#faf7f0;cursor:pointer; }
.dock-actions button:hover { background:#ffffff2b; }
.dock-actions button:disabled { opacity:.3;cursor:default; }
.dock-actions button span { font-size:11px; }
.transition-layer { position:fixed;z-index:90;inset:0;pointer-events:none;overflow:hidden; }
.transition-image { position:fixed;left:var(--origin-x);top:var(--origin-y);width:var(--origin-width);height:var(--origin-height);background-image:linear-gradient(0deg,rgba(8,13,17,.55),rgba(8,13,17,.26)),var(--transition-image);background-position:center;background-size:cover;box-shadow:0 0 0 2px #f2e5d0;transition:left .42s cubic-bezier(.2,.74,.12,1),top .42s cubic-bezier(.2,.74,.12,1),width .42s cubic-bezier(.2,.74,.12,1),height .42s cubic-bezier(.2,.74,.12,1),opacity .32s;display:grid;place-items:center; }
.transition-title { opacity:0;color:#f5ede3;font:normal clamp(34px,6vw,84px) 'Instrument Serif',Georgia,serif;letter-spacing:-.04em;text-align:center;transition:opacity .18s .18s; }
.transition-layer--zoom .transition-image,.transition-layer--reveal .transition-image { left:-3vw;top:-3vh;width:106vw;height:106vh; }
.transition-layer--zoom .transition-title { opacity:1; }
.transition-layer--reveal { opacity:0;transition:opacity .30s ease; }
.transition-wash { position:absolute;inset:0;background:#efe7d8;opacity:0;transition:opacity .35s ease; }
.transition-layer--zoom .transition-wash { opacity:.1; }
/* Narrow screens retain a readable paper column and two square-only side streams.
   The same achievement buttons join a grid when Archive Mode opens. */
/* Both mobile side streams share one vertical scroll plane. Keep it scrollable
   in Portfolio Mode as well as Archive Mode, including on iOS Safari. */
.mosaic-scroll--compact { overflow-y: auto; overflow-x: hidden; -webkit-overflow-scrolling: touch; touch-action: pan-y; }
.mosaic-scroll--archive .mosaic-tile--concealed { opacity: 0; pointer-events: none; }
.mosaic-scroll--compact .mosaic-tile--responsive .tile-title { font-size: clamp(16px, 9cqi, 28px); line-height: 1.08; white-space: normal; }
.mosaic-scroll--compact .mosaic-tile--responsive .tile-category { font-size: clamp(9px, 3cqi, 11px); }
.mosaic-scroll--compact:not(.mosaic-scroll--archive) .tile-content { opacity: .65; }
.mosaic-scroll--compact.mosaic-scroll--archive .tile-content { padding: clamp(10px, 2.3vw, 18px); }
.site-shell--compact .portfolio-panel,
.site-shell--compact .panel-shadow { top: 0; bottom: 0; }
.site-shell--compact .portfolio-panel {
  padding: max(16px, env(safe-area-inset-top, 0px)) clamp(17px, 3vw, 30px) 18px;
}
.site-shell--compact .floating-controls {
  top: max(12px, env(safe-area-inset-top, 0px));
  right: max(12px, env(safe-area-inset-right, 0px));
  gap: 10px;
}
.site-shell--compact .orb-button { width: 44px; height: 44px; }
.site-shell--compact .orb-tooltip { display: none; }
.site-shell--compact .archive-demo-dock {
  left: max(10px, env(safe-area-inset-left, 0px));
  bottom: max(10px, env(safe-area-inset-bottom, 0px));
  max-width: calc(100% - 20px);
}
@media (max-width: 1100px) { .panel-label { font-size:8px; } .portrait-frame { width:30%; } }
@media (max-width: 720px) {
  .portfolio-panel,.panel-shadow { top:0;bottom:0; }
  .portfolio-panel { padding: max(16px, env(safe-area-inset-top, 0px)) 23px 15px; }
  .panel-heading { padding-bottom:18px; }
  .floating-controls { top:max(12px, env(safe-area-inset-top, 0px));right:max(12px, env(safe-area-inset-right, 0px));gap:10px; }
  .orb-button { width:44px;height:44px; }
  .intro-section { padding-top:33px; }
  .hero-intro { gap:15px; }
  .hero-copy h1 { font-size:clamp(34px,8.2vw,55px); }
  .portrait-frame { width:32%; }
  .hero-greeting { font-size:24px; }
  .hero-description { font-size:12px; }
  .editorial-block { margin-top:48px; }
  .editorial-block h2 { font-size:clamp(38px,9vw,52px); }
  .view-lede { font-size:16px; line-height:1.7; margin-bottom:32px; }
  .resource-link { min-height:60px; padding:12px 13px; font-size:15px; }
  .resource-link-icon { width:32px; height:32px; }
  .archive-demo-dock { bottom:13px;left:13px;max-width:calc(100% - 26px);padding:9px 10px;gap:10px; }
  .dock-hint { display:none; }
  .dock-actions button { width:38px;height:34px; }
}
@media (max-width: 380px) {
  .hero-intro { flex-wrap:wrap; }
  .hero-copy { flex-basis: 100%; }
  .portrait-frame { width:104px;aspect-ratio:.77;position:relative;right:auto;top:auto;opacity:1; }
  .hero-description { max-width:26ch; }
  .portfolio-panel { padding:16px 17px 14px; }
  .panel-label { font-size:7px; }
}
@media (prefers-reduced-motion: reduce) {
  .mosaic-scroll--compact .mosaic-tile { animation: none !important; translate: 0 0 !important; }
  *,*::before,*::after { animation-duration:.01ms!important;transition-duration:.01ms!important;scroll-behavior:auto!important; }
}

/* Native scroll animation replaces expensive per-tile keyframe animations. */
.mosaic-scroll { scroll-behavior: auto; }

:root[data-theme="dark"] .mosaic-tile--ambient { background-blend-mode: screen, normal; }

/* Responsive portfolio: visible square streams and a narrow-screen editorial page.
   The rails occupy actual layout space instead of being clipped behind paper. */
@media (max-width: 600px) {
  .site-shell--compact .portfolio-panel {
    padding: max(16px, env(safe-area-inset-top, 0px))
      clamp(12px, 3.3vw, 18px) 20px;
  }
  .site-shell--compact .panel-heading { gap: 5px; padding-bottom: 18px; }
  .site-shell--compact .panel-label { font-size: 7px; letter-spacing: .06em; }
  .site-shell--compact .panel-index { font-size: 8px; }
  .site-shell--compact .intro-section { padding-top: 27px; }
  .site-shell--compact .hero-intro { flex-direction: column; align-items: stretch; gap: 22px; }
  .site-shell--compact .hero-copy { flex-basis: auto; width: 100%; }
  .site-shell--compact .hero-copy h1 { font-size: clamp(32px, 8vw, 42px); overflow-wrap: anywhere; }
  .site-shell--compact .hero-greeting { font-size: 24px; }
  .site-shell--compact .hero-description { max-width: none; font-size: 13px; line-height: 1.7; }
  .site-shell--compact .portrait-frame { width: min(44%, 132px); align-self: flex-start; margin-bottom: 9px; }
  .site-shell--compact .hero-actions { display: grid; grid-template-columns: 1fr; gap: 10px; margin-top: 33px; }
  .site-shell--compact .hero-actions .pill-link { min-width: 0; width: 100%; min-height: 44px; justify-content: space-between; padding: 11px 12px; }
  .site-shell--compact .view-title { font-size: clamp(34px, 9.3vw, 50px); overflow-wrap: anywhere; }
  .site-shell--compact .editorial-block h2 { font-size: clamp(32px, 9.3vw, 45px); }
  .site-shell--compact .view-lede { font-size: 15px; }
  .site-shell--compact .resource-link { min-width: 0; font-size: 14px; overflow-wrap: anywhere; }
  .site-shell--compact .panel-footer { flex-wrap: wrap; }
  /* Tiny image rails are tappable picture previews, not unreadable text cards.
     Full titles appear when entering Archive Mode. */
  .mosaic-scroll--compact:not(.mosaic-scroll--archive) .mosaic-tile--entry .tile-content { display: none; }
  .mosaic-scroll--compact:not(.mosaic-scroll--archive) .mosaic-tile--entry .tile-visual::after {
    background: linear-gradient(0deg, rgba(5,11,16,.20),rgba(5,11,16,0) 65%);
  }
}
@media (max-width: 350px) {
  .site-shell--compact .hero-copy h1 { font-size: 31px; }
  .site-shell--compact .portrait-frame { width: 108px; }
  .site-shell--compact .panel-heading .panel-label { font-size: 6px; }
  .site-shell--compact .floating-controls { gap: 7px; right: 7px; }
  .site-shell--compact .orb-button { width: 42px; height: 42px; }
}

````

### `portfolio-mobile-top-controls-fix.zip` → `tests/mobileControls.test.js`

````javascript
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const css = readFileSync(new URL('../src/styles/global.css', import.meta.url), 'utf8');
const controls = readFileSync(new URL('../src/components/FloatingControls.jsx', import.meta.url), 'utf8');

test('floating controls auto-hide after three seconds and reveal after activity', () => {
  assert.match(controls, /CONTROLS_IDLE_MS\s*=\s*3000/);
  assert.match(controls, /setVisible\(false\)/);
  assert.match(controls, /setVisible\(true\)/);
  for (const event of ['pointermove', 'pointerdown', 'touchstart', 'touchmove', 'wheel', 'keydown', 'focusin']) {
    assert.ok(controls.includes(`'${event}'`), `${event} should bring back controls`);
  }
  assert.doesNotMatch(controls, /'scroll'/, 'programmatic archive scrolling must not reset inactivity');
});

test('hidden controls do not capture collage taps and fade smoothly', () => {
  assert.match(css, /\.floating-controls--hidden\s*\{[^}]*opacity:\s*0/);
  assert.match(css, /\.floating-controls--hidden\s+\.orb-button\s*\{[^}]*pointer-events:\s*none/);
  assert.match(css, /\.floating-controls\s*\{[^}]*transition:\s*opacity\s+\.32s/);
});

test('mobile and compact layouts no longer reserve 76px above their headers', () => {
  assert.doesNotMatch(css, /padding:\s*max\(76px/);
  assert.doesNotMatch(css, /\.portfolio-panel\s*\{\s*padding:\s*78px/);
  assert.match(css, /\.site-shell--compact\s+\.portfolio-panel\s*\{[\s\S]*?padding:\s*max\(16px/);
});

````

### `portfolio-mutating-tiling-replacements.zip` → `src/lib/mosaicLayout.js`

````javascript
/** A 5 × 5 square module is a convenient building block, not a repeated tile pattern. */
export const CELLS_PER_SIDE = 5;
export const SQUARE_PATTERN = Object.freeze([
  { x: 0, y: 0, size: 3 },
  { x: 3, y: 0, size: 2 },
  { x: 3, y: 2, size: 2 },
  { x: 0, y: 3, size: 2 },
  { x: 2, y: 3, size: 1 },
  { x: 2, y: 4, size: 1 },
  { x: 3, y: 4, size: 1 },
  { x: 4, y: 4, size: 1 },
]);

const mix = n => {
  n = Math.imul(n ^ (n >>> 16), 0x7feb352d);
  n = Math.imul(n ^ (n >>> 15), 0x846ca68b);
  return (n ^ (n >>> 16)) >>> 0;
};
function random(seed) {
  let state = mix(seed);
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let n = state;
    n = Math.imul(n ^ n >>> 15, n | 1);
    n ^= n + Math.imul(n ^ n >>> 7, n | 61);
    return ((n ^ n >>> 14) >>> 0) / 4294967296;
  };
}
function rotate(x, y, size, frameSize, turns) {
  let xx = x;
  let yy = y;
  for (let n = 0; n < turns; n++) {
    const oldX = xx;
    xx = frameSize - yy - size;
    yy = oldX;
  }
  return { x: xx, y: yy, size };
}

/**
 * A hierarchical, deterministic tile mutation system. Four-child merges and
 * subdivisions leave exact square coverage; quarter turns rotate complete
 * square regions without disturbing adjacent regions.
 *
 * moduleIndex is an absolute, stable index: viewport changes never re-roll
 * the module's internal formation. seed changes only on a fresh app load.
 */
export function generateSquareFormation(moduleIndex, seed = 1) {
  const rng = random(mix((seed >>> 0) ^ Math.imul(moduleIndex + 1, 0x9e3779b1)));
  const out = [];
  const outerTurns = Math.floor(rng() * 4);
  const rotatedBase = SQUARE_PATTERN.map(base => rotate(base.x, base.y, base.size, 5, outerTurns));
  // A different base ordering avoids a persistent pattern of large squares.
  rotatedBase.sort((a, b) => a.y - b.y || a.x - b.x);

  function subdivide(x, y, size, depth, ancestry) {
    const minimum = 0.74;
    const canSplit = depth < 3 && size / 2 >= minimum;
    const chance = depth === 0 ? (size >= 2 ? 0.72 : 0.16) : 0.31;
    if (!canSplit || rng() > chance) {
      out.push({ x, y, size, id: ancestry });
      return;
    }
    const half = size / 2;
    const children = [
      { x: 0, y: 0 }, { x: half, y: 0 },
      { x: 0, y: half }, { x: half, y: half },
    ];
    let local = [];
    // Build a subtree first so rotating it affects actual asymmetric geometry.
    const previous = out.splice(0);
    children.forEach((child, i) => subdivide(child.x, child.y, half, depth + 1, `${ancestry}.${i}`));
    local = out.splice(0);
    out.push(...previous);
    // Mutate: merge four equal children back to a single square on occasion.
    if (local.length === 4 && rng() < 0.20) {
      out.push({ x, y, size, id: ancestry });
      return;
    }
    const turns = Math.floor(rng() * 4);
    for (const tile of local) {
      const rotated = rotate(tile.x, tile.y, tile.size, size, turns);
      out.push({ ...tile, x: x + rotated.x, y: y + rotated.y });
    }
  }
  rotatedBase.forEach((base, i) => subdivide(base.x, base.y, base.size, 0, `s${i}`));
  return out.sort((a, b) => a.y - b.y || a.x - b.x || b.size - a.size);
}

/** Kept as a public utility for layout integration and lightweight tests. */
export function createMosaicSlots(entryCount, minimumModules = 1, seed = 1) {
  let slots = [];
  let moduleCount = Math.max(2, minimumModules * 2);
  // Match initial alternating left/right module ordering.
  while (true) {
    slots = [];
    for (let m = 0; m < moduleCount; m++) {
      const formation = generateSquareFormation(m, seed);
      formation.forEach((square, i) => slots.push({
        ...square, id: `m${m}-${square.id}`, side: m % 2 === 0 ? 'left' : 'right',
        moduleIndex: Math.floor(m / 2), globalModuleIndex: m,
        indexOnSide: i,
      }));
    }
    if (slots.length >= entryCount) break;
    moduleCount += 2;
  }
  return slots;
}

function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
function archiveGeometry(width) {
  const columns = Math.max(2, Math.round(width / 550));
  return { columns, unit: width / (columns * CELLS_PER_SIDE) };
}
export function computeMetrics({ width, height, archive = false }) {
  const compact = width <= 900 || (width <= 1200 && height <= 640);
  const sideInset = Math.max(17, Math.min(64, width * 0.065));
  const panelWidth = compact
    ? Math.min(620, width - 2 * sideInset)
    : Math.min(600, Math.max(468, width * 0.43));
  const gridColumns = compact ? (width < 480 ? 2 : width < 720 ? 3 : 4) : 10;
  const gridInset = 0;
  const unit = compact
    ? archive ? width / gridColumns : Math.max(104, Math.min(170, width * 0.27))
    : archive ? archiveGeometry(width).unit : Math.min(112, Math.max(66, (width - panelWidth) / 7.8));
  return {
    width, height, panelWidth, unit, compact, mobile: compact,
    gridColumns, gridInset,
    archiveModuleColumns: compact ? null : archiveGeometry(width).columns,
  };
}

function layoutCompact(entries, metrics, archive) {
  const { width, height, panelWidth, gridColumns } = metrics;
  const leftEdge = (width - panelWidth) / 2;
  const rightEdge = (width + panelWidth) / 2;
  const streamUnit = Math.max(104, Math.min(170, width * 0.27));
  const minimumPerSide = Math.ceil(height / streamUnit) + 4;
  const archiveUnit = width / gridColumns;
  const minimumArchiveSlots = gridColumns * Math.ceil(height / archiveUnit);
  const slotsPerSide = Math.max(Math.ceil(entries.length / 2), minimumPerSide, Math.ceil(minimumArchiveSlots / 2));
  const slots = Array.from({ length: slotsPerSide * 2 }, (_, index) => {
    const side = index % 2 === 0 ? 'left' : 'right';
    const row = Math.floor(index / 2);
    const entry = entries[index] ?? null;
    return { id: entry ? `entry-${entry.id}` : `ambient-${side}-${row}`, side, row, entry };
  });
  const tiles = slots.map((slot, order) => {
    const { side, row, entry } = slot;
    const x = archive ? (order % gridColumns) * archiveUnit
      : side === 'left' ? leftEdge - streamUnit : rightEdge;
    const y = archive ? Math.floor(order / gridColumns) * archiveUnit : (row - 2) * streamUnit;
    return {
      id: slot.id, side, entry, decorative: !entry, compact: true,
      size: 1, x, y, pixels: archive ? archiveUnit : streamUnit, hidden: false,
    };
  });
  const archiveRows = Math.ceil(slots.length / gridColumns);
  const contentHeight = archive ? Math.max(height + 1, archiveRows * archiveUnit)
    : Math.max(height + 1, (slotsPerSide + 1) * streamUnit);
  return { tiles, metrics, contentHeight, moduleCount: archiveRows };
}

/**
 * Projection is separate from topology. Responsive reflow and archive changes
 * only move/scale existing seeded squares; they never mutate a formation.
 */
export function layoutMosaic(entries, viewport, archive = false, seed = 1) {
  const metrics = computeMetrics({ ...viewport, archive });
  if (metrics.compact) return layoutCompact(entries, metrics, archive);
  const { width, height, panelWidth, unit } = metrics;
  const leftBoundary = (width - panelWidth) / 2;
  const rightBoundary = (width + panelWidth) / 2;
  const portfolioUnit = Math.min(112, Math.max(66, (width - panelWidth) / 7.8));
  const { columns: archiveColumns, unit: archiveUnit } = archiveGeometry(width);
  const portfolioRows = Math.ceil(height / (5 * portfolioUnit));
  const archiveRows = Math.ceil(height / (5 * archiveUnit));
  const entryMinModules = Math.ceil(entries.length / 8); // conservative initial estimate; checked below
  const neededModules = Math.max(portfolioRows * 2, archiveRows * archiveColumns, entryMinModules);
  const moduleMultiple = (2 * archiveColumns) / gcd(2, archiveColumns);
  let totalModules = Math.ceil(neededModules / moduleMultiple) * moduleMultiple;
  const formations = [];
  let slotCount = 0;
  function makeModules(upTo) {
    for (let m = formations.length; m < upTo; m++) {
      const squares = generateSquareFormation(m, seed);
      formations.push(squares);
      slotCount += squares.length;
    }
  }
  makeModules(totalModules);
  while (slotCount < entries.length) {
    totalModules += moduleMultiple;
    makeModules(totalModules);
  }

  let entryPosition = 0;
  const tiles = formations.flatMap((formation, moduleIndex) => {
    const side = moduleIndex % 2 === 0 ? 'left' : 'right';
    const wingRow = Math.floor(moduleIndex / 2);
    const blockX = archive
      ? (moduleIndex % archiveColumns) * 5 * archiveUnit
      : side === 'left' ? leftBoundary - 5 * unit : rightBoundary;
    const blockY = archive
      ? Math.floor(moduleIndex / archiveColumns) * 5 * archiveUnit
      : wingRow * 5 * unit;
    const pixelUnit = archive ? archiveUnit : unit;
    return formation.map((square) => {
      const entry = entries[entryPosition++] ?? null;
      return {
        ...square, id: entry ? `entry-${entry.id}` : `ambient-m${moduleIndex}-${square.id}`,
        side, moduleIndex: wingRow, globalModuleIndex: moduleIndex,
        entry, decorative: !entry, compact: false, hidden: false,
        x: blockX + square.x * pixelUnit,
        y: blockY + square.y * pixelUnit,
        pixels: square.size * pixelUnit,
      };
    });
  });
  const contentHeight = archive
    ? Math.ceil(totalModules / archiveColumns) * 5 * archiveUnit
    : Math.ceil(totalModules / 2) * 5 * unit;
  return { tiles, metrics, contentHeight: Math.max(height + 1, contentHeight), moduleCount: totalModules / 2 };
}

````

### `portfolio-mutating-tiling-replacements.zip` → `src/App.jsx`

````jsx
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ArchiveMosaic from './components/ArchiveMosaic.jsx';
import FloatingControls from './components/FloatingControls.jsx';
import PortfolioPanel from './components/PortfolioPanel.jsx';
import TransitionLayer from './components/TransitionLayer.jsx';
import Icon from './components/Icons.jsx';
import { achievements, createSampleBatch } from './data/achievements.js';
import { i18n } from './content/translations.js';
import { useViewport } from './hooks/useViewport.js';
import { computeMetrics } from './lib/mosaicLayout.js';

function readPreference(key, fallback) {
  try { return localStorage.getItem(key) || fallback; } catch { return fallback; }
}

function readPathname() { return window.location.pathname.replace(/\/$/, '') || '/'; }

export default function App() {
  const viewport = useViewport();
  // Generated once per page load. Do not change it during viewport reflow.
  const [layoutSeed] = useState(() => {
    try { return window.crypto.getRandomValues(new Uint32Array(1))[0]; }
    catch { return Math.floor(Math.random() * 0xffffffff); }
  });
  const responsive = useMemo(() => computeMetrics({ ...viewport, archive: false }), [viewport]);
  const [pathname, setPathname] = useState(readPathname);
  const [theme, setTheme] = useState(() => readPreference('living-archive-theme', 'light'));
  const [lang, setLang] = useState(() => readPreference('living-archive-language', 'en'));
  const [archive, setArchive] = useState(false);
  const [demoCount, setDemoCount] = useState(0);
  const [transition, setTransition] = useState(null);
  const busy = useRef(false);
  const timers = useRef([]);
  const t = i18n[lang] || i18n.en;
  const entries = useMemo(() => [...achievements, ...createSampleBatch(0, demoCount)], [demoCount]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('living-archive-theme', theme); } catch { /* Preferences are optional */ }
  }, [theme]);
  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem('living-archive-language', lang); } catch { /* Preferences are optional */ }
  }, [lang]);
  useEffect(() => {
    const popstate = () => { setPathname(readPathname()); setArchive(false); };
    window.addEventListener('popstate', popstate);
    return () => window.removeEventListener('popstate', popstate);
  }, []);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  useEffect(() => {
    document.title = pathname === '/' ? 'Marwan Al-Hamdan · A Living Archive' : `Marwan Al-Hamdan · ${pathname.split('/').filter(Boolean).at(-1) || 'Archive'}`;
  }, [pathname]);

  const navigate = useCallback((destination, sourceElement, item = null) => {
    if (busy.current) return;
    if (destination === pathname && !archive) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      window.history.pushState({}, '', destination);
      setPathname(destination); setArchive(false);
      return;
    }
    busy.current = true;
    const rect = sourceElement?.getBoundingClientRect();
    const origin = rect ? { left: rect.left, top: rect.top, width: rect.width, height: rect.height }
      : { left: viewport.width / 2 - 40, top: viewport.height / 2 - 40, width: 80, height: 80 };
    const base = { origin, image: item?.image, title: item?.title || destination.split('/').at(-1), phase: 'start' };
    setTransition(base);
    timers.current.push(setTimeout(() => setTransition({ ...base, phase: 'zoom' }), 25));
    timers.current.push(setTimeout(() => {
      window.history.pushState({}, '', destination);
      setPathname(destination);
      setArchive(false);
      setTransition({ ...base, phase: 'reveal' });
    }, 430));
    timers.current.push(setTimeout(() => { setTransition(null); busy.current = false; }, 750));
  }, [archive, pathname, viewport.width, viewport.height]);

  const onTileOpen = useCallback((item, element) => navigate(`/archive/${encodeURIComponent(item.id)}`, element, item), [navigate]);

  return (
    <div className={`site-shell ${archive ? 'site-shell--archive' : ''} ${responsive.compact ? 'site-shell--compact' : ''}`} style={{ '--panel-width': `${responsive.panelWidth}px` }}>
      <div className="site-grain" aria-hidden="true" />
      <ArchiveMosaic entries={entries} viewport={viewport} archive={archive} lang={lang} onOpen={onTileOpen} layoutSeed={layoutSeed} />
      <div className="panel-shadow" aria-hidden="true" />
      <PortfolioPanel pathname={pathname} archive={archive} entries={entries} t={t} lang={lang} onNavigate={navigate} />
      <FloatingControls archive={archive} onToggleArchive={() => setArchive(v => !v)} theme={theme} onToggleTheme={() => setTheme(v => v === 'dark' ? 'light' : 'dark')} lang={lang} onToggleLanguage={() => setLang(v => v === 'en' ? 'ar' : 'en')} t={t} />
      {archive && <aside className="archive-demo-dock" aria-label="Archive growth demo">
        <div className="dock-copy"><span className="dock-kicker">{t.demoHeading}</span><span>{entries.length} {t.count} <span className="dock-hint">· {t.demoInfo}</span></span></div>
        <div className="dock-actions">
          <button type="button" onClick={() => setDemoCount(n => n + 4)} title={t.add} aria-label={t.add}><Icon name="plus" size={17}/><span>4</span></button>
          <button type="button" onClick={() => setDemoCount(n => Math.max(0, n - 4))} disabled={!demoCount} title={t.remove} aria-label={t.remove}><Icon name="minus" size={17}/><span>4</span></button>
        </div>
      </aside>}
      <TransitionLayer transition={transition}/>
    </div>
  );
}

````

### `portfolio-mutating-tiling-replacements.zip` → `src/components/ArchiveMosaic.jsx`

````jsx
import React, { useEffect, useMemo, useRef } from 'react';
import { layoutMosaic } from '../lib/mosaicLayout.js';
import Icon from './Icons.jsx';
import { createAmbientBackground } from '../lib/ambientPattern.js';

function ArchiveTile({ tile, onOpen, lang, index }) {
  const { entry, pixels, x, y, decorative } = tile;
  const style = {
    '--tile-x': `${x}px`, '--tile-y': `${y}px`, '--tile-size': `${pixels}px`,
    '--tile-image': entry ? `url("${entry.image}")` : undefined,
    '--tile-tone': `var(--tile-tone-${index % 6})`,
    ...(decorative ? { '--ambient-art': createAmbientBackground(tile.id) } : {}),
  };
  if (decorative) {
    return (
      <div
        className={`mosaic-tile mosaic-tile--ambient ${tile.hidden ? 'mosaic-tile--concealed' : ''}`}
        style={style} data-side={tile.side} aria-hidden="true"
      ><div className="ambient-mark" /></div>
    );
  }
  const title = lang === 'ar' ? entry.titleAr || entry.title : entry.title;
  const category = lang === 'ar' ? entry.categoryAr || entry.category : entry.category;
  return (
    <button
      type="button"
      className={`mosaic-tile mosaic-tile--entry ${entry.sample ? 'mosaic-tile--sample' : ''} ${tile.compact ? 'mosaic-tile--responsive' : tile.size === 1 ? 'mosaic-tile--tiny' : ''}`}
      style={style}
      onClick={(event) => onOpen(entry, event.currentTarget)}
      data-side={tile.side}
      data-entry-id={entry.id}
      title={title}
      aria-label={`${title}${entry.sample ? ' — sample' : ''}`}
    >
      <span className="tile-visual" aria-hidden="true" />
      <span className="tile-content">
        <span className="tile-category">{entry.sample ? '◇ ' : '✦ '}{category}</span>
        <span className="tile-title">{title}</span>
        <span className="tile-corner"><Icon name="upRight" size={14}/></span>
      </span>
    </button>
  );
}

export default function ArchiveMosaic({ entries, viewport, archive, lang, onOpen, layoutSeed = 1 }) {
  const scrollRef = useRef(null);
  const layout = useMemo(() => layoutMosaic(entries, viewport, archive, layoutSeed), [entries, viewport, archive, layoutSeed]);
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [archive, layout.metrics.compact]);
  return (
    <div
      ref={scrollRef}
      className={`mosaic-scroll ${archive ? 'mosaic-scroll--archive' : ''} ${layout.metrics.compact ? 'mosaic-scroll--compact' : ''}`}
      aria-label="Interactive archive collage"
      style={{ '--stream-negative': `${-Math.max(104, Math.min(170, viewport.width * 0.27)) * 0.85}px`, '--stream-positive': `${Math.max(104, Math.min(170, viewport.width * 0.27)) * 0.85}px` }}
    >
      <div className="mosaic-plane" style={{ height: `${layout.contentHeight}px` }}>
        {layout.tiles.map((tile, index) => <ArchiveTile key={tile.id} tile={tile} onOpen={onOpen} lang={lang} index={index} />)}
      </div>
    </div>
  );
}

````

### `portfolio-mutating-tiling-replacements.zip` → `tests/mosaicLayout.test.js`

````javascript
import test from 'node:test';
import assert from 'node:assert/strict';
import { SQUARE_PATTERN, createMosaicSlots, generateSquareFormation, computeMetrics, layoutMosaic } from '../src/lib/mosaicLayout.js';

const makeEntries = n => Array.from({ length: n }, (_, i) => ({ id: `achievement-${i}` }));
const close = (a,b) => Math.abs(a-b) < 1e-6;

function checkFormation(squares) {
  const sampleCount = 80;
  for (let row = 0; row < sampleCount; row++) for (let col = 0; col < sampleCount; col++) {
    const x = (col + 0.5) * 5 / sampleCount;
    const y = (row + 0.5) * 5 / sampleCount;
    assert.equal(squares.filter(t => x >= t.x - 1e-8 && x < t.x+t.size - 1e-8 && y >= t.y - 1e-8 && y < t.y+t.size - 1e-8).length, 1);
  }
  assert.ok(close(squares.reduce((sum, t) => sum+t.size*t.size, 0), 25));
}

test('seeded tilings contain only true squares, with no gaps or overlaps', () => {
  for (let seed of [1, 42, 12345, 0xffffffff]) for (let moduleIndex = 0; moduleIndex < 16; moduleIndex++) {
    checkFormation(generateSquareFormation(moduleIndex, seed));
  }
});

test('subdivision, merge and rotations yield varied module topology', () => {
  const signatures = new Set(Array.from({length:64},(_,i) => JSON.stringify(generateSquareFormation(i, 777).map(t => [t.x,t.y,t.size]))));
  assert.ok(signatures.size > 50, `${signatures.size} of 64 formations differ`);
  const tiles = Array.from({length:64},(_,i)=>generateSquareFormation(i, 777));
  assert.ok(tiles.some(t=>t.some(s=>s.size <= 1)));
  assert.ok(tiles.some(t=>t.some(s=>s.size >= 3)));
});

test('formation topology remains fixed for seed + module index', () => {
  assert.deepEqual(generateSquareFormation(4, 992), generateSquareFormation(4, 992));
  assert.notDeepEqual(generateSquareFormation(4, 992), generateSquareFormation(4, 993));
});

test('desktop wings touch portfolio edges and archive spans viewport', () => {
  const entries = makeEntries(18);
  const viewport = {width: 1440,height: 900};
  const closed = layoutMosaic(entries, viewport, false, 72);
  const open = layoutMosaic(entries, viewport, true, 72);
  const left = (viewport.width-closed.metrics.panelWidth)/2;
  const right = (viewport.width+closed.metrics.panelWidth)/2;
  assert.ok(closed.tiles.every(t=>t.side==='left'? t.x+t.pixels<=left+1e-6 : t.x>=right-1e-6));
  assert.ok(closed.tiles.some(t=>t.side==='left' && close(t.x+t.pixels,left)));
  assert.ok(closed.tiles.some(t=>t.side==='right' && close(t.x,right)));
  assert.ok(open.tiles.some(t=>close(t.x,0)));
  assert.ok(open.tiles.some(t=>close(t.x+t.pixels,viewport.width)));
  assert.deepEqual(closed.tiles.map(t=>t.id),open.tiles.map(t=>t.id));
});

test('the same module identities and geometry persist through resizing and rotation', () => {
  const entries = makeEntries(30);
  const sizes = [{width:1440,height:900},{width:1200,height:850},{width:1800,height:1000}];
  const layouts = sizes.map(size=>layoutMosaic(entries,size,true,5353));
  const lookup = l=>new Map(l.tiles.map(t=>[t.id,[t.size,t.globalModuleIndex]]));
  const base = lookup(layouts[0]);
  for (const layout of layouts.slice(1)) {
    const next = lookup(layout);
    for (const [key,value] of base) if(next.has(key))assert.deepEqual(next.get(key),value);
  }
});

test('archive has edge-to-edge coverage and reaches bottom on desktop and compact screens', () => {
  for (const viewport of [{width:390,height:844},{width:768,height:1024},{width:1100,height:580},{width:1280,height:800},{width:1722,height:854},{width:1920,height:1080}]) {
    for (const count of [4,18,34,67]) {
      const {tiles,contentHeight}=layoutMosaic(makeEntries(count),viewport,true,123456);
      assert.ok(contentHeight>=viewport.height);
      for(let row=0;row<12;row++)for(let col=0;col<15;col++){
        const x=(col+0.5)*viewport.width/15;
        const y=(row+0.5)*viewport.height/12;
        const matches=tiles.filter(t=>x>=t.x-1e-7 && x<t.x+t.pixels-1e-7 && y>=t.y-1e-7 && y<t.y+t.pixels-1e-7);
        assert.equal(matches.length,1,`${viewport.width}x${viewport.height} (${x},${y})`);
      }
    }
  }
});

test('compact portfolio has exactly two streams and compacts into grid with identical achievement IDs', () => {
  for (const viewport of [{width:280,height:620},{width:390,height:844},{width:600,height:800},{width:800,height:1000},{width:1100,height:580}]) {
    const entries=makeEntries(19);
    const normal=layoutMosaic(entries,viewport,false,987);
    const archive=layoutMosaic(entries,viewport,true,987);
    assert.equal(computeMetrics(viewport).compact,true);
    const left=(viewport.width-normal.metrics.panelWidth)/2;
    const right=(viewport.width+normal.metrics.panelWidth)/2;
    assert.ok(normal.tiles.every(t=>close(t.pixels,t.pixels) && (t.side==='left'?close(t.x+t.pixels,left):close(t.x,right))));
    assert.deepEqual(normal.tiles.filter(t=>t.entry).map(t=>t.id),archive.tiles.filter(t=>t.entry).map(t=>t.id));
  }
});

test('dynamic slot generator maintains capacity for added achievements', () => {
  for(const n of [4,18,80,200])assert.ok(createMosaicSlots(n,1,444).length>=n);
});

````

### `portfolio-performance-replacements.zip` → `src/lib/visibleMosaicTiles.js`

````javascript
// Deliberately keep only squares around the visible scroll window in the DOM.
// This makes the DOM size bounded even if the archive has hundreds of entries.
export function visibleMosaicTiles(tiles, scrollTop, viewportHeight, overscan = 350) {
  const low = Math.max(0, scrollTop - overscan);
  const high = scrollTop + viewportHeight + overscan;
  return tiles.filter(tile => tile.y + tile.pixels >= low && tile.y <= high);
}


````

### `portfolio-performance-replacements.zip` → `src/lib/mosaicLayout.js`

````javascript
/** A 5 × 5 square module is a convenient building block, not a repeated tile pattern. */
export const CELLS_PER_SIDE = 5;
export const SQUARE_PATTERN = Object.freeze([
  { x: 0, y: 0, size: 3 },
  { x: 3, y: 0, size: 2 },
  { x: 3, y: 2, size: 2 },
  { x: 0, y: 3, size: 2 },
  { x: 2, y: 3, size: 1 },
  { x: 2, y: 4, size: 1 },
  { x: 3, y: 4, size: 1 },
  { x: 4, y: 4, size: 1 },
]);

const mix = n => {
  n = Math.imul(n ^ (n >>> 16), 0x7feb352d);
  n = Math.imul(n ^ (n >>> 15), 0x846ca68b);
  return (n ^ (n >>> 16)) >>> 0;
};
function random(seed) {
  let state = mix(seed);
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let n = state;
    n = Math.imul(n ^ n >>> 15, n | 1);
    n ^= n + Math.imul(n ^ n >>> 7, n | 61);
    return ((n ^ n >>> 14) >>> 0) / 4294967296;
  };
}
function rotate(x, y, size, frameSize, turns) {
  let xx = x;
  let yy = y;
  for (let n = 0; n < turns; n++) {
    const oldX = xx;
    xx = frameSize - yy - size;
    yy = oldX;
  }
  return { x: xx, y: yy, size };
}

/**
 * A hierarchical, deterministic tile mutation system. Four-child merges and
 * subdivisions leave exact square coverage; quarter turns rotate complete
 * square regions without disturbing adjacent regions.
 *
 * moduleIndex is an absolute, stable index: viewport changes never re-roll
 * the module's internal formation. seed changes only on a fresh app load.
 */
// Generated shapes are independent of viewport size and archive state.
// Cache the topology so a resize never re-runs its subdivision tree.
const formationCache = new Map();
export function generateSquareFormation(moduleIndex, seed = 1) {
  const seedKey = seed >>> 0;
  let modules = formationCache.get(seedKey);
  if (!modules) {
    if (formationCache.size >= 4) formationCache.delete(formationCache.keys().next().value);
    modules = new Map();
    formationCache.set(seedKey, modules);
  }
  if (modules.has(moduleIndex)) return modules.get(moduleIndex);
  const rng = random(mix((seed >>> 0) ^ Math.imul(moduleIndex + 1, 0x9e3779b1)));
  const out = [];
  const outerTurns = Math.floor(rng() * 4);
  const rotatedBase = SQUARE_PATTERN.map(base => rotate(base.x, base.y, base.size, 5, outerTurns));
  // A different base ordering avoids a persistent pattern of large squares.
  rotatedBase.sort((a, b) => a.y - b.y || a.x - b.x);

  function subdivide(x, y, size, depth, ancestry) {
    const minimum = 0.74;
    const canSplit = depth < 3 && size / 2 >= minimum;
    const chance = depth === 0 ? (size >= 2 ? 0.72 : 0.16) : 0.31;
    if (!canSplit || rng() > chance) {
      out.push({ x, y, size, id: ancestry });
      return;
    }
    const half = size / 2;
    const children = [
      { x: 0, y: 0 }, { x: half, y: 0 },
      { x: 0, y: half }, { x: half, y: half },
    ];
    let local = [];
    // Build a subtree first so rotating it affects actual asymmetric geometry.
    const previous = out.splice(0);
    children.forEach((child, i) => subdivide(child.x, child.y, half, depth + 1, `${ancestry}.${i}`));
    local = out.splice(0);
    out.push(...previous);
    // Mutate: merge four equal children back to a single square on occasion.
    if (local.length === 4 && rng() < 0.20) {
      out.push({ x, y, size, id: ancestry });
      return;
    }
    const turns = Math.floor(rng() * 4);
    for (const tile of local) {
      const rotated = rotate(tile.x, tile.y, tile.size, size, turns);
      out.push({ ...tile, x: x + rotated.x, y: y + rotated.y });
    }
  }
  rotatedBase.forEach((base, i) => subdivide(base.x, base.y, base.size, 0, `s${i}`));
  const formation = out.sort((a, b) => a.y - b.y || a.x - b.x || b.size - a.size);
  modules.set(moduleIndex, formation);
  return formation;
}

/** Kept as a public utility for layout integration and lightweight tests. */
export function createMosaicSlots(entryCount, minimumModules = 1, seed = 1) {
  let slots = [];
  let moduleCount = Math.max(2, minimumModules * 2);
  // Match initial alternating left/right module ordering.
  while (true) {
    slots = [];
    for (let m = 0; m < moduleCount; m++) {
      const formation = generateSquareFormation(m, seed);
      formation.forEach((square, i) => slots.push({
        ...square, id: `m${m}-${square.id}`, side: m % 2 === 0 ? 'left' : 'right',
        moduleIndex: Math.floor(m / 2), globalModuleIndex: m,
        indexOnSide: i,
      }));
    }
    if (slots.length >= entryCount) break;
    moduleCount += 2;
  }
  return slots;
}

function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
function archiveGeometry(width) {
  const columns = Math.max(2, Math.round(width / 550));
  return { columns, unit: width / (columns * CELLS_PER_SIDE) };
}
export function computeMetrics({ width, height, archive = false }) {
  const compact = width <= 900 || (width <= 1200 && height <= 640);
  const sideInset = Math.max(17, Math.min(64, width * 0.065));
  const panelWidth = compact
    ? Math.min(620, width - 2 * sideInset)
    : Math.min(600, Math.max(468, width * 0.43));
  // Reserve enough physical room for readable achievement squares in desktop wings.
  // Below this width we use the previously agreed responsive side streams.
  const wideSideWidth = (width - panelWidth) / 2;
  const useCompact = compact || wideSideWidth < 410;
  const gridColumns = useCompact ? (width < 480 ? 2 : width < 720 ? 3 : 4) : 10;
  const gridInset = 0;
  const unit = useCompact
    ? archive ? width / gridColumns : Math.max(104, Math.min(170, width * 0.27))
    : archive ? archiveGeometry(width).unit : Math.min(112, Math.max(66, (width - panelWidth) / 7.8));
  return {
    width, height, panelWidth, unit, compact: useCompact, mobile: useCompact,
    gridColumns, gridInset,
    archiveModuleColumns: useCompact ? null : archiveGeometry(width).columns,
  };
}

function layoutCompact(entries, metrics, archive) {
  const { width, height, panelWidth, gridColumns } = metrics;
  const leftEdge = (width - panelWidth) / 2;
  const rightEdge = (width + panelWidth) / 2;
  const streamUnit = Math.max((width - panelWidth) / 2, Math.max(104, Math.min(170, width * 0.27)));
  const minimumPerSide = Math.ceil(height / streamUnit) + 4;
  const archiveUnit = width / gridColumns;
  const minimumArchiveSlots = gridColumns * Math.ceil(height / archiveUnit);
  const slotsPerSide = Math.max(Math.ceil(entries.length / 2), minimumPerSide, Math.ceil(minimumArchiveSlots / 2));
  const slots = Array.from({ length: slotsPerSide * 2 }, (_, index) => {
    const side = index % 2 === 0 ? 'left' : 'right';
    const row = Math.floor(index / 2);
    const entry = entries[index] ?? null;
    return { id: entry ? `entry-${entry.id}` : `ambient-${side}-${row}`, side, row, entry };
  });
  const tiles = slots.map((slot, order) => {
    const { side, row, entry } = slot;
    const x = archive ? (order % gridColumns) * archiveUnit
      : side === 'left' ? leftEdge - streamUnit : rightEdge;
    const y = archive ? Math.floor(order / gridColumns) * archiveUnit : (row - 2) * streamUnit;
    return {
      id: slot.id, side, entry, decorative: !entry, compact: true,
      size: 1, x, y, pixels: archive ? archiveUnit : streamUnit, hidden: false,
    };
  });
  const archiveRows = Math.ceil(slots.length / gridColumns);
  const contentHeight = archive ? Math.max(height + 1, archiveRows * archiveUnit)
    : Math.max(height + 1, (slotsPerSide + 1) * streamUnit);
  return { tiles, metrics, contentHeight, moduleCount: archiveRows };
}

/**
 * Projection is separate from topology. Responsive reflow and archive changes
 * only move/scale existing seeded squares; they never mutate a formation.
 */
export function layoutMosaic(entries, viewport, archive = false, seed = 1) {
  const metrics = computeMetrics({ ...viewport, archive });
  if (metrics.compact) return layoutCompact(entries, metrics, archive);
  const { width, height, panelWidth } = metrics;
  const unit = (width - panelWidth) / 10;
  const leftBoundary = (width - panelWidth) / 2;
  const rightBoundary = (width + panelWidth) / 2;
  // Five square units span exactly one side wing: no empty outside margins.
  const portfolioUnit = (width - panelWidth) / 10;
  const { columns: archiveColumns, unit: archiveUnit } = archiveGeometry(width);
  const portfolioRows = Math.ceil(height / (5 * portfolioUnit));
  const archiveRows = Math.ceil(height / (5 * archiveUnit));
  // Structural filler may be tiny, but achievements require readable tiles.
  // In either projection, a usable achievement tile must be >= 164px.
  // Desktop is enabled only when two square units are at least 164px.
  // Use a topology-based eligibility rule, not a pixel rule, so resizing
  // does not reassign achievements to different tile IDs.
  const MIN_ENTRY_UNITS = 2;
  const entryMinModules = Math.ceil(entries.length / 3);
  const neededModules = Math.max(portfolioRows * 2, archiveRows * archiveColumns, entryMinModules);
  const moduleMultiple = (2 * archiveColumns) / gcd(2, archiveColumns);
  let totalModules = Math.ceil(neededModules / moduleMultiple) * moduleMultiple;
  const formations = [];
  let slotCount = 0;
  function makeModules(upTo) {
    for (let m = formations.length; m < upTo; m++) {
      const squares = generateSquareFormation(m, seed);
      formations.push(squares);
      slotCount += squares.filter(square => square.size >= MIN_ENTRY_UNITS).length;
    }
  }
  makeModules(totalModules);
  while (slotCount < entries.length) {
    totalModules += moduleMultiple;
    makeModules(totalModules);
  }

  let entryPosition = 0;
  const tiles = formations.flatMap((formation, moduleIndex) => {
    const side = moduleIndex % 2 === 0 ? 'left' : 'right';
    const wingRow = Math.floor(moduleIndex / 2);
    const blockX = archive
      ? (moduleIndex % archiveColumns) * 5 * archiveUnit
      : side === 'left' ? leftBoundary - 5 * unit : rightBoundary;
    const blockY = archive
      ? Math.floor(moduleIndex / archiveColumns) * 5 * archiveUnit
      : wingRow * 5 * unit;
    const pixelUnit = archive ? archiveUnit : unit;
    return formation.map((square) => {
      // Never place text on undersized squares. Those become ambient filler.
      const eligible = square.size >= MIN_ENTRY_UNITS;
      const entry = eligible ? (entries[entryPosition++] ?? null) : null;
      return {
        ...square, id: entry ? `entry-${entry.id}` : `ambient-m${moduleIndex}-${square.id}`,
        side, moduleIndex: wingRow, globalModuleIndex: moduleIndex,
        entry, decorative: !entry, compact: false, hidden: false,
        x: blockX + square.x * pixelUnit,
        y: blockY + square.y * pixelUnit,
        pixels: square.size * pixelUnit,
      };
    });
  });
  const contentHeight = archive
    ? Math.ceil(totalModules / archiveColumns) * 5 * archiveUnit
    : Math.ceil(totalModules / 2) * 5 * unit;
  return { tiles, metrics, contentHeight: Math.max(height + 1, contentHeight), moduleCount: totalModules / 2 };
}

````

### `portfolio-performance-replacements.zip` → `src/hooks/useViewport.js`

````javascript
import { useEffect, useState } from 'react';

function readSize() {
  return { width: window.innerWidth, height: window.innerHeight };
}

// Delay expensive re-projection until the browser finishes a burst of resize events.
// Geometry stays unchanged during a resize; only its scale/placement is recomputed.
export function useViewport() {
  const [viewport, setViewport] = useState(readSize);
  useEffect(() => {
    let timer;
    const onResize = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        const next = readSize();
        setViewport(previous => previous.width === next.width && previous.height === next.height ? previous : next);
      }, 140);
    };
    window.addEventListener('resize', onResize, { passive: true });
    return () => { window.clearTimeout(timer); window.removeEventListener('resize', onResize); };
  }, []);
  return viewport;
}

````

### `portfolio-performance-replacements.zip` → `src/styles/global.css`

````css
:root {
  font-family: 'DM Sans', 'Segoe UI', Arial, sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  --world: #161b20;
  --world-grid: rgba(239, 229, 211, .035);
  --paper: #f0ede6;
  --paper-soft: #e7e1d7;
  --ink: #232823;
  --muted: #78786f;
  --lede-color: #6b7169;
  --paper-line: #cbc7bc;
  --accent: #777157;
  --tile-outline: rgba(246, 238, 219, .64);
  --tile-tone-0: #9eb9b7;
  --tile-tone-1: #c0a795;
  --tile-tone-2: #9eb5c8;
  --tile-tone-3: #c1bca5;
  --tile-tone-4: #b5a9ba;
  --tile-tone-5: #a7b8a5;
  --ambient-art-opacity: .52;
  --ambient-surface-brightness: 1.28;
}
:root[data-theme="dark"] {
  --world: #090e14;
  --world-grid: rgba(226, 234, 244, .035);
  --paper: #21272b;
  --paper-soft: #2b3236;
  --ink: #eeeae1;
  --muted: #a2aaa6;
  --lede-color: #909995;
  --paper-line: #47504f;
  --accent: #d1b99a;
  --tile-outline: rgba(233, 239, 239, .48);
  --tile-tone-0: #1b3236;
  --tile-tone-1: #382c2a;
  --tile-tone-2: #263548;
  --tile-tone-3: #36312a;
  --tile-tone-4: #302731;
  --tile-tone-5: #2c3731;
  --ambient-art-opacity: .38;
  --ambient-surface-brightness: .85;
}
* { box-sizing: border-box; }
html, body, #root { min-width: 280px; min-height: 100%; margin: 0; }
html { overflow: hidden; }
body { background: var(--world); color: var(--ink); }
button, a { -webkit-tap-highlight-color: transparent; }
button { font: inherit; }
button:focus-visible, a:focus-visible { outline: 2px solid #89adc1; outline-offset: 3px; }
a { color: inherit; }
.site-shell { width: 100%; min-height: 100svh; isolation: isolate; background: var(--world); overflow: hidden; }
.site-grain { pointer-events: none; position: fixed; inset: 0; z-index: 5; opacity: .3; background-image: repeating-linear-gradient(90deg,transparent 0, transparent 31px, var(--world-grid) 32px), repeating-linear-gradient(0deg,transparent 0, transparent 31px, var(--world-grid) 32px); }
/* The mosaic remains scrollable under the independently scrolling portfolio. */
.mosaic-scroll { position: fixed; inset: 0; overflow-y: auto; overflow-x: hidden; overscroll-behavior: contain; scrollbar-width: none; background: var(--world); }
.mosaic-scroll::-webkit-scrollbar, .portfolio-panel::-webkit-scrollbar { display: none; }
.mosaic-plane { position: relative; width: 100%; min-height: 100%; }
.mosaic-tile { appearance: none; position: absolute; top: 0; left: 0; padding: 0; margin: 0; width: var(--tile-size); height: var(--tile-size); display: block; overflow: hidden; border-radius: 0; border: 1px solid var(--tile-outline); transform: translate3d(var(--tile-x), var(--tile-y), 0); transition: transform .58s cubic-bezier(.23,.87,.24,1), width .58s cubic-bezier(.23,.87,.24,1), height .58s cubic-bezier(.23,.87,.24,1), border-color .22s ease, opacity .3s ease; container-type: inline-size; background: var(--tile-tone); }
.mosaic-tile--entry { cursor: pointer; text-align: left; color: #faf7f0; z-index: 1; }
.mosaic-tile--entry:hover, .mosaic-tile--entry:focus-visible { z-index: 3; border-color: #f9e5c9; }
.tile-visual { position: absolute; inset: 0; display: block; background-image: var(--tile-image); background-position: center; background-size: cover; transform: scale(1.005); transition: transform .4s cubic-bezier(.2,.75,.2,1), filter .25s; filter: saturate(.76) brightness(.86); }
.tile-visual::after { content: ''; position: absolute; inset: 0; background: linear-gradient(0deg, rgba(5,11,16,.87),rgba(5,11,16,.06) 70%); }
.mosaic-tile--entry:hover .tile-visual, .mosaic-tile--entry:focus-visible .tile-visual { transform: scale(1.085); filter: saturate(1) brightness(1.06); }
.tile-content { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end; padding: clamp(11px, 1.2vw, 22px); text-shadow: 0 1px 12px #06090fb0; min-width: 0; }
.tile-category { display: block; font-size: clamp(10px, 3.8cqi, 13px); letter-spacing: .08em; line-height: 1.25; text-transform: uppercase; font-weight: 700; opacity: .9; margin-bottom: 6px; }
.tile-title { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; line-clamp: 3; overflow: hidden; font: normal clamp(18px, 9cqi, 35px)/1.06 'Instrument Serif', Georgia, serif; max-width: 100%; overflow-wrap: anywhere; text-wrap: balance; }
.tile-corner { position: absolute; top: 10px; right: 9px; opacity: 0; transform: translate(-3px,3px); transition: opacity .2s, transform .2s; }
.mosaic-tile:hover .tile-corner, .mosaic-tile:focus-visible .tile-corner { opacity: 1; transform: none; }
.mosaic-tile--sample .tile-category { color: #e8d7b7; }
/* Tiny squares are decorative only; entry sizing is enforced by the layout generator. */
.mosaic-tile--tiny .tile-content { padding: 9px; }
.mosaic-tile--tiny .tile-title { font-size: clamp(15px, 8cqi, 20px); }
@container (max-width: 185px) { .tile-category { font-size: 10px; letter-spacing: .03em; } .tile-content { padding: 10px; } .tile-title { font-size: clamp(16px, 10cqi, 21px); } }
.mosaic-tile--ambient { border-color: var(--tile-outline); pointer-events: none; filter: brightness(var(--ambient-surface-brightness)); }
.mosaic-tile--ambient::after { content: ''; position: absolute; inset: 0; background: linear-gradient(140deg, rgba(255,255,255,.12),transparent 55%,rgba(0,0,0,.28)); }
.mosaic-tile--ambient {
  background-color: var(--tile-tone);
  background-image: var(--ambient-art), linear-gradient(135deg, rgba(255,255,255,.13), rgba(0,0,0,.08));
  background-position: center;
  background-size: cover;
  background-blend-mode: multiply, normal;
}
.ambient-mark { display: none; }
.panel-shadow { position: fixed; z-index: 6; top: 0; bottom: 0; left: 50%; transform: translateX(-50%); width: var(--panel-width, min(600px,max(468px,43vw))); box-shadow: 0 25px 95px #05080da8,0 0 0 1px rgba(255,255,255,.1); pointer-events: none; transition: opacity .4s, transform .6s; }
.site-shell--archive .panel-shadow { opacity: 0; transform: translateX(-50%) translateY(50px) scale(.94); }
.portfolio-panel { position: fixed; z-index: 7; top: 0; bottom: 0; left: 50%; transform: translateX(-50%); width: var(--panel-width, min(600px,max(468px,43vw))); overflow-y: auto; overscroll-behavior: contain; scrollbar-width: none; padding: 27px clamp(25px,3.1vw,49px) 16px; background: var(--paper); color: var(--ink); border: 1px solid var(--paper-line); box-shadow: 0 0 0 1px rgba(0,0,0,.06); transition: transform .63s cubic-bezier(.25,.72,.15,1), opacity .45s ease; }
.portfolio-panel--hidden { opacity: 0; transform: translateX(-50%) translateY(72px) scale(.9); pointer-events: none; }
.panel-heading { display:flex; align-items:center; justify-content:space-between; gap:10px; padding-bottom: 27px; border-bottom:1px solid var(--paper-line); }
.panel-monogram { border:0; background:transparent; color:var(--ink); padding:0; font:bold 27px 'Instrument Serif',Georgia,serif; cursor:pointer; }
.panel-monogram span { color: var(--accent); }
.panel-label,.panel-index,.micro-label,.number-label,.panel-footer,.portrait-credit,.source-disclosure { font: 500 9px/1.3 'DM Mono',monospace; letter-spacing:.12em; }
.panel-label { color:var(--muted); }
.tiny-asterisk { color: var(--accent); font-size: 16px; vertical-align:-2px; }
.panel-index { color:var(--muted); }
.intro-section { padding-top: 49px; }
.micro-label,.number-label { display:block; color:var(--muted); }
.hero-intro { display:flex; align-items:flex-end; gap:18px; margin-top:27px; }
.hero-copy { min-width:0; flex:1; }
.hero-greeting { font:italic 26px 'Instrument Serif',Georgia,serif; }
.hero-copy h1 { margin:10px 0 0; font:normal clamp(34px,3.65vw,52px)/1.02 'Instrument Serif',Georgia,serif; letter-spacing:-.035em; white-space:normal; }
.hero-copy h1 em, .editorial-block h2 em,.view-title em { font-weight:400; color:var(--accent); }
.hero-rule { width:45px; height:1px; background:var(--accent); margin:18px 0; }
.hero-role { font-size:11px; font-weight:700; letter-spacing:.09em; text-transform:uppercase; margin:0 0 8px; }
.hero-description { font-size:12px; line-height:1.7; color:var(--muted); margin:0; }
.portrait-frame { width: 32%; flex:none; aspect-ratio: .77; display:flex; flex-direction:column; align-self:center; position:relative; }
.portrait-frame img { display:block; width:100%; height:100%; object-fit:cover; object-position:center 34%; filter:saturate(.72); border:1px solid var(--paper-line); }
.portrait-credit { position:absolute; bottom:-17px; left:0; color:var(--muted); white-space:nowrap; font-size:7px; }
.hero-actions { display:flex; flex-wrap:wrap; gap:9px; margin-top:39px; }
.pill-link { text-decoration:none; display:inline-flex; align-items:center; justify-content:center; gap:12px; border:1px solid var(--ink); border-radius:100px; padding:11px 14px; font-size:11px; font-weight:600; cursor:pointer; transition:transform .18s,background .18s,color .18s; }
.pill-link:hover { transform:translateY(-2px); }
.pill-link:active { transform:scale(.96); }
.pill-link--dark { background:var(--ink); color:var(--paper); }
.pill-link--outline { background:transparent; color:var(--ink); }
.pill-link--outline:hover { background:var(--paper-soft); }
.editorial-block { margin-top:66px; padding-top:23px; border-top:1px solid var(--paper-line); }
.section-heading { display:flex; align-items:center; justify-content:space-between; gap:10px; }
.section-star { color:var(--accent); }
.editorial-block h2 { margin:22px 0 20px; font:normal clamp(38px,4vw,56px)/.97 'Instrument Serif',Georgia,serif; letter-spacing:-.02em; }
.editorial-block p,.body-copy { color:var(--muted); font-size:13px; line-height:1.85; letter-spacing:.018em; max-width:52ch; }
.ink-divider { width:100%; height:1px; background:var(--paper-line); margin:27px 0 22px; }
.feature-links { margin-top:13px; }
.feature-link { display:flex; justify-content:space-between; align-items:center; gap:12px; width:100%; padding:13px 0; background:none; color:var(--ink); border:0; border-bottom:1px solid var(--paper-line); text-align:start; cursor:pointer; font:normal 20px/1.2 'Instrument Serif',Georgia,serif; }
.feature-link:hover { color:var(--accent); }
.feature-number { font:9px 'DM Mono',monospace; color:var(--muted); margin-inline-end:auto; min-width:28px; }
.feature-link > svg:last-child { margin-inline-start:auto; }
.editorial-block--bottom { padding-bottom:40px; }
.inline-arrow { display:inline-flex;align-items:center;gap:9px;padding:0;border:0;background:none;color:var(--ink);font-size:12px;font-weight:600;text-decoration:none;cursor:pointer; }
.inline-arrow:hover { color:var(--accent); }
.inner-view { padding-top:51px; min-height:65%; }
.view-title { font:normal clamp(44px,5vw,72px)/.97 'Instrument Serif',Georgia,serif; letter-spacing:-.025em; margin:23px 0 19px; }
.view-lede { max-width:45ch; color:var(--lede-color); font-size:clamp(16px,1.4vw,18px); font-weight:400; line-height:1.66; letter-spacing:.012em; margin:0 0 39px; }
.project-list { border-top:1px solid var(--paper-line); }
.project-row { width:100%; padding:17px 0; display:flex; align-items:center; gap:12px; border:0; border-bottom:1px solid var(--paper-line); background:none; text-align:start; color:var(--ink); cursor:pointer; }
.project-row:hover .project-row-description strong { color:var(--accent); }
.project-row img { width:68px;height:68px;object-fit:cover;border:1px solid var(--paper-line); }
.project-row-number { font:9px 'DM Mono',monospace;color:var(--muted); }
.project-row-description { flex:1; min-width:0;display:flex;flex-direction:column;gap:7px; }
.project-row-description strong { font:normal 24px 'Instrument Serif',Georgia,serif; }
.project-row-description small { color:var(--muted);font:9px 'DM Mono',monospace; }
.source-disclosure { margin:24px 0;line-height:1.7;color:var(--muted);letter-spacing:0; }
.editorial-illustration,.entry-hero-image { display:block;width:100%;aspect-ratio:1.55;object-fit:cover;border:1px solid var(--paper-line); }
.subheading { font:normal 33px 'Instrument Serif',Georgia,serif;margin:34px 0 12px; }
.contact-options { display:grid; gap:10px; margin:38px 0 25px; }
.fine-print { color:var(--muted);font-size:11px;line-height:1.7; }
.sample-alert { margin-top:18px; padding:10px 12px; background:var(--paper-soft);border-left:2px solid var(--accent);font-size:10px;font-weight:700;letter-spacing:.06em; }
.entry-view .view-title { overflow-wrap:anywhere; }
.entry-figure { margin:0 0 22px; }
.entry-caption { margin-top:17px; font-size:10px; letter-spacing:.16em; line-height:1.5; }
.entry-links,.writing-resource-list { display:grid; gap:10px; margin:27px 0 24px; }
.resource-link { width:100%; min-height:66px; display:flex; align-items:center; justify-content:space-between; gap:14px; padding:15px 16px 15px 18px; background:transparent; color:var(--ink); border:1px solid var(--paper-line); border-radius:2px; text-decoration:none; text-align:start; cursor:pointer; font:600 clamp(14px,1.25vw,17px)/1.4 'DM Sans','Segoe UI',Arial,sans-serif; letter-spacing:.018em; transition:background .2s,border-color .2s,transform .2s; }
.resource-link:hover { background:var(--paper-soft); border-color:var(--accent); transform:translateY(-2px); }
.resource-link:active { transform:translateY(0); }
.resource-link-icon { width:36px; height:36px; flex:none; display:grid; place-items:center; border:1px solid var(--paper-line); border-radius:2px; transition:transform .2s,border-color .2s; }
.resource-link:hover .resource-link-icon, .resource-link:focus-visible .resource-link-icon { transform:translate(2px,-2px); border-color:var(--accent); }
[dir="rtl"] .resource-link:hover .resource-link-icon, [dir="rtl"] .resource-link:focus-visible .resource-link-icon { transform:translate(-2px,-2px); }
.entry-view .pill-link { margin-top:28px; }
.panel-footer { margin-top:58px; padding:20px 0 26px; border-top:1px solid var(--paper-line);display:flex;justify-content:space-between;gap:15px;color:var(--muted);font-size:8px;letter-spacing:.02em; }
/* The toolbar is transparent: the collage always extends behind it. */
.floating-controls { position:fixed;z-index:45;top:24px;right:26px;display:flex;align-items:center;gap:14px;pointer-events:none; }
.orb-button { width:46px;height:46px;display:grid;place-items:center;position:relative;pointer-events:auto; border-radius:50%; border:1px solid rgba(237,237,231,.58);color:#f6f1e7;background:rgba(23,29,35,.68);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);cursor:pointer;box-shadow:0 3px 17px rgba(0,0,0,.22);transition:transform .2s cubic-bezier(.2,.8,.2,1),background .2s,border-color .2s,box-shadow .2s; }
.orb-button:hover { transform:scale(1.1);background:rgba(58,68,74,.9);border-color:#f5ead7;box-shadow:0 4px 24px rgba(0,0,0,.35); }
.orb-button:active { transform:scale(.92); }
.orb-button.is-active { background:#e8e0d1;color:#1c2529;border-color:#fff8ea; }
.language-button span:first-child { font:500 12px 'DM Mono',monospace; }
.orb-tooltip { position:absolute;right:50%;top:calc(100% + 10px);transform:translate(50%,-4px);white-space:nowrap;max-width:190px;pointer-events:none;opacity:0;border-radius:4px;background:#f2eadf;color:#252626;font-size:10px;padding:6px 9px;transition:opacity .2s,transform .2s; }
.orb-button:hover .orb-tooltip,.orb-button:focus-visible .orb-tooltip { opacity:1;transform:translate(50%,0); }
.archive-demo-dock { position:fixed;z-index:46;left:24px;bottom:24px;max-width:calc(100% - 48px);display:flex;gap:18px;align-items:center;padding:12px 13px 12px 16px;color:#e8e6df;background:rgba(17,23,29,.9);border:1px solid rgba(248,244,231,.35);backdrop-filter:blur(16px);box-shadow:0 10px 40px #0007; }
.dock-copy { display:flex;flex-direction:column;gap:5px;font-size:10px;color:#d3d4d0; }
.dock-kicker { letter-spacing:.1em;font-size:9px;text-transform:uppercase;font-weight:700;color:#eae9e4; }
.dock-hint { color:#aab3b4; }
.dock-actions { display:flex;gap:6px; }
.dock-actions button { width:48px;height:34px;display:flex;align-items:center;justify-content:center;gap:2px;border:1px solid #ffffff60;background:#ffffff0e;color:#faf7f0;cursor:pointer; }
.dock-actions button:hover { background:#ffffff2b; }
.dock-actions button:disabled { opacity:.3;cursor:default; }
.dock-actions button span { font-size:11px; }
.transition-layer { position:fixed;z-index:90;inset:0;pointer-events:none;overflow:hidden; }
.transition-image { position:fixed;left:var(--origin-x);top:var(--origin-y);width:var(--origin-width);height:var(--origin-height);background-image:linear-gradient(0deg,rgba(8,13,17,.55),rgba(8,13,17,.26)),var(--transition-image);background-position:center;background-size:cover;box-shadow:0 0 0 2px #f2e5d0;transition:left .42s cubic-bezier(.2,.74,.12,1),top .42s cubic-bezier(.2,.74,.12,1),width .42s cubic-bezier(.2,.74,.12,1),height .42s cubic-bezier(.2,.74,.12,1),opacity .32s;display:grid;place-items:center; }
.transition-title { opacity:0;color:#f5ede3;font:normal clamp(34px,6vw,84px) 'Instrument Serif',Georgia,serif;letter-spacing:-.04em;text-align:center;transition:opacity .18s .18s; }
.transition-layer--zoom .transition-image,.transition-layer--reveal .transition-image { left:-3vw;top:-3vh;width:106vw;height:106vh; }
.transition-layer--zoom .transition-title { opacity:1; }
.transition-layer--reveal { opacity:0;transition:opacity .30s ease; }
.transition-wash { position:absolute;inset:0;background:#efe7d8;opacity:0;transition:opacity .35s ease; }
.transition-layer--zoom .transition-wash { opacity:.1; }
/* Narrow screens retain a readable paper column and two square-only side streams.
   The same achievement buttons join a grid when Archive Mode opens. */
.mosaic-scroll--compact:not(.mosaic-scroll--archive) { overflow: hidden; }
.mosaic-scroll--compact.mosaic-scroll--archive { overflow-y: auto; overflow-x: hidden; }
.mosaic-scroll--archive .mosaic-tile--concealed { opacity: 0; pointer-events: none; }
.mosaic-scroll--compact .mosaic-tile--responsive .tile-title { font-size: clamp(16px, 9cqi, 28px); line-height: 1.08; white-space: normal; }
.mosaic-scroll--compact .mosaic-tile--responsive .tile-category { font-size: clamp(9px, 3cqi, 11px); }
.mosaic-scroll--compact:not(.mosaic-scroll--archive) .tile-content { opacity: .65; }
.mosaic-scroll--compact.mosaic-scroll--archive .tile-content { padding: clamp(10px, 2.3vw, 18px); }
.site-shell--compact .portfolio-panel,
.site-shell--compact .panel-shadow { top: 0; bottom: 0; }
.site-shell--compact .portfolio-panel {
  padding: max(76px, calc(env(safe-area-inset-top, 0px) + 63px)) clamp(17px, 3vw, 30px) 18px;
}
.site-shell--compact .floating-controls {
  top: max(12px, env(safe-area-inset-top, 0px));
  right: max(12px, env(safe-area-inset-right, 0px));
  gap: 10px;
}
.site-shell--compact .orb-button { width: 44px; height: 44px; }
.site-shell--compact .orb-tooltip { display: none; }
.site-shell--compact .archive-demo-dock {
  left: max(10px, env(safe-area-inset-left, 0px));
  bottom: max(10px, env(safe-area-inset-bottom, 0px));
  max-width: calc(100% - 20px);
}
@media (max-width: 1100px) { .panel-label { font-size:8px; } .portrait-frame { width:30%; } }
@media (max-width: 720px) {
  .portfolio-panel,.panel-shadow { top:0;bottom:0; }
  .portfolio-panel { padding: max(76px, calc(env(safe-area-inset-top, 0px) + 63px)) 23px 15px; }
  .panel-heading { padding-bottom:18px; }
  .floating-controls { top:max(12px, env(safe-area-inset-top, 0px));right:max(12px, env(safe-area-inset-right, 0px));gap:10px; }
  .orb-button { width:44px;height:44px; }
  .intro-section { padding-top:33px; }
  .hero-intro { gap:15px; }
  .hero-copy h1 { font-size:clamp(34px,8.2vw,55px); }
  .portrait-frame { width:32%; }
  .hero-greeting { font-size:24px; }
  .hero-description { font-size:12px; }
  .editorial-block { margin-top:48px; }
  .editorial-block h2 { font-size:clamp(38px,9vw,52px); }
  .view-lede { font-size:16px; line-height:1.7; margin-bottom:32px; }
  .resource-link { min-height:60px; padding:12px 13px; font-size:15px; }
  .resource-link-icon { width:32px; height:32px; }
  .archive-demo-dock { bottom:13px;left:13px;max-width:calc(100% - 26px);padding:9px 10px;gap:10px; }
  .dock-hint { display:none; }
  .dock-actions button { width:38px;height:34px; }
}
@media (max-width: 380px) {
  .hero-intro { flex-wrap:wrap; }
  .hero-copy { flex-basis: 100%; }
  .portrait-frame { width:104px;aspect-ratio:.77;position:relative;right:auto;top:auto;opacity:1; }
  .hero-description { max-width:26ch; }
  .portfolio-panel { padding:78px 17px 14px; }
  .panel-label { font-size:7px; }
}
@media (prefers-reduced-motion: reduce) {
  .mosaic-scroll--compact .mosaic-tile { animation: none !important; translate: 0 0 !important; }
  *,*::before,*::after { animation-duration:.01ms!important;transition-duration:.01ms!important;scroll-behavior:auto!important; }
}

/* Native scroll animation replaces expensive per-tile keyframe animations. */
.mosaic-scroll { scroll-behavior: auto; }

:root[data-theme="dark"] .mosaic-tile--ambient { background-blend-mode: screen, normal; }

````

### `portfolio-performance-replacements.zip` → `src/components/ArchiveMosaic.jsx`

````jsx
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { layoutMosaic } from '../lib/mosaicLayout.js';
import { visibleMosaicTiles } from '../lib/visibleMosaicTiles.js';
import Icon from './Icons.jsx';
import { createAmbientBackground } from '../lib/ambientPattern.js';

// The artwork generator is costly when hundreds of SVG backgrounds are encoded.
// Generate once per tile identity, only when the tile enters the viewport.
const artworkCache = new Map();
function artworkFor(id) {
  if (!artworkCache.has(id)) {
    if (artworkCache.size > 900) artworkCache.delete(artworkCache.keys().next().value);
    artworkCache.set(id, createAmbientBackground(id));
  }
  return artworkCache.get(id);
}

const ArchiveTile = memo(function ArchiveTile({ tile, onOpen, lang }) {
  const { entry, pixels, x, y, decorative } = tile;
  const tone = tile.globalModuleIndex ?? tile.moduleIndex ?? tile.row ?? 0;
  const style = {
    '--tile-x': `${x}px`, '--tile-y': `${y}px`, '--tile-size': `${pixels}px`,
    '--tile-image': entry ? `url("${entry.image}")` : undefined,
    '--tile-tone': `var(--tile-tone-${Math.abs(tone) % 6})`,
    ...(decorative ? { '--ambient-art': artworkFor(tile.id) } : {}),
  };
  if (decorative) {
    return <div className="mosaic-tile mosaic-tile--ambient" style={style} aria-hidden="true" />;
  }
  const title = lang === 'ar' ? entry.titleAr || entry.title : entry.title;
  const category = lang === 'ar' ? entry.categoryAr || entry.category : entry.category;
  return (
    <button type="button"
      className={`mosaic-tile mosaic-tile--entry ${entry.sample ? 'mosaic-tile--sample' : ''} ${tile.compact ? 'mosaic-tile--responsive' : tile.size === 1 ? 'mosaic-tile--tiny' : ''}`}
      style={style} onClick={event => onOpen(entry, event.currentTarget)}
      data-side={tile.side} data-entry-id={entry.id} title={title}
      aria-label={`${title}${entry.sample ? ' — sample' : ''}`}>
      <span className="tile-visual" aria-hidden="true" />
      <span className="tile-content">
        <span className="tile-category">{entry.sample ? '◇ ' : '✦ '}{category}</span>
        <span className="tile-title">{title}</span>
        <span className="tile-corner"><Icon name="upRight" size={14}/></span>
      </span>
    </button>
  );
});

export default function ArchiveMosaic({ entries, viewport, archive, lang, onOpen, layoutSeed = 1 }) {
  const scrollRef = useRef(null);
  const pauseUntil = useRef(0);
  const lastTime = useRef(0);
  const direction = useRef(1);
  const [viewTop, setViewTop] = useState(0);
  const layout = useMemo(() => layoutMosaic(entries, viewport, archive, layoutSeed), [entries, viewport.width, viewport.height, archive, layoutSeed]);
  const viewportHeight = viewport.height;

  const syncWindow = useCallback((force = false) => {
    const top = scrollRef.current?.scrollTop ?? 0;
    // Recalculate the visible set only after crossing a 120px bucket.
    const bucket = Math.floor(top / 120) * 120;
    setViewTop(previous => force || previous !== bucket ? bucket : previous);
  }, []);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;
    element.scrollTop = 0;
    syncWindow(true);
    lastTime.current = 0;
    direction.current = 1;
  }, [archive, layout.metrics.compact, syncWindow]);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pause = () => { pauseUntil.current = performance.now() + 7000; };
    const scroll = () => syncWindow();
    const hoverEntry = event => {
      if (event.target.closest?.('.mosaic-tile--entry')) pause();
    };
    element.addEventListener('wheel', pause, { passive: true });
    element.addEventListener('touchstart', pause, { passive: true });
    element.addEventListener('pointerdown', pause, { passive: true });
    element.addEventListener('pointerover', hoverEntry, { passive: true });
    element.addEventListener('focusin', pause);
    element.addEventListener('scroll', scroll, { passive: true });
    // ~25 fps is enough for this slow motion and avoids a 60 fps React workload.
    const timer = window.setInterval(() => {
      const time = performance.now();
      const delta = lastTime.current ? Math.min(time - lastTime.current, 100) : 0;
      lastTime.current = time;
      if (document.hidden || reduce.matches || time < pauseUntil.current) return;
      const max = element.scrollHeight - element.clientHeight;
      if (max <= 40) return;
      const next = element.scrollTop + direction.current * delta * 0.019;
      if (next >= max) { element.scrollTop = max; direction.current = -1; }
      else if (next <= 0) { element.scrollTop = 0; direction.current = 1; }
      else element.scrollTop = next;
    }, 40);
    return () => {
      window.clearInterval(timer);
      element.removeEventListener('wheel', pause);
      element.removeEventListener('touchstart', pause);
      element.removeEventListener('pointerdown', pause);
      element.removeEventListener('pointerover', hoverEntry);
      element.removeEventListener('focusin', pause);
      element.removeEventListener('scroll', scroll);
    };
  }, [syncWindow]);

  const visible = useMemo(() => visibleMosaicTiles(layout.tiles, viewTop, viewportHeight), [layout.tiles, viewTop, viewportHeight]);
  return (
    <div ref={scrollRef}
      className={`mosaic-scroll ${archive ? 'mosaic-scroll--archive' : ''} ${layout.metrics.compact ? 'mosaic-scroll--compact' : ''}`}
      aria-label="Interactive archive collage">
      <div className="mosaic-plane" style={{ height: `${layout.contentHeight}px` }}>
        {visible.map(tile => <ArchiveTile key={tile.id} tile={tile} onOpen={onOpen} lang={lang} />)}
      </div>
    </div>
  );
}

````

### `portfolio-performance-replacements.zip` → `tests/visibleMosaicTiles.test.js`

````javascript
import test from 'node:test';
import assert from 'node:assert/strict';
import { visibleMosaicTiles } from '../src/lib/visibleMosaicTiles.js';

test('only keeps tiles near viewport and preserves order', () => {
  const tiles = Array.from({ length: 1000 }, (_, i) => ({ id: i, y: i * 100, pixels: 100 }));
  const shown = visibleMosaicTiles(tiles, 50000, 800, 200);
  assert.ok(shown.length <= 15);
  assert.ok(shown.some(t => t.id === 500));
  assert.ok(shown.every(t => t.y + t.pixels >= 49800 && t.y <= 51000));
  assert.deepEqual(shown.map(t=>t.id), [...shown.map(t=>t.id)].sort((a,b)=>a-b));
});

test('renders the beginning and end of long archives without retaining distant tiles', () => {
  const tiles = Array.from({ length: 2000 }, (_, i) => ({ id: i, y: i * 72, pixels: 72 }));
  assert.ok(visibleMosaicTiles(tiles,0,800).some(t=>t.id===0));
  assert.ok(visibleMosaicTiles(tiles,140000,800).some(t=>t.id===1950));
  assert.ok(visibleMosaicTiles(tiles,0,800).length < 25);
});

````

### `portfolio-performance-replacements.zip` → `tests/mosaicLayout.test.js`

````javascript
import test from 'node:test';
import assert from 'node:assert/strict';
import { SQUARE_PATTERN, createMosaicSlots, generateSquareFormation, computeMetrics, layoutMosaic } from '../src/lib/mosaicLayout.js';

const makeEntries = n => Array.from({ length: n }, (_, i) => ({ id: `achievement-${i}` }));
const close = (a,b) => Math.abs(a-b) < 1e-6;

function checkFormation(squares) {
  const sampleCount = 80;
  for (let row = 0; row < sampleCount; row++) for (let col = 0; col < sampleCount; col++) {
    const x = (col + 0.5) * 5 / sampleCount;
    const y = (row + 0.5) * 5 / sampleCount;
    assert.equal(squares.filter(t => x >= t.x - 1e-8 && x < t.x+t.size - 1e-8 && y >= t.y - 1e-8 && y < t.y+t.size - 1e-8).length, 1);
  }
  assert.ok(close(squares.reduce((sum, t) => sum+t.size*t.size, 0), 25));
}

test('seeded tilings contain only true squares, with no gaps or overlaps', () => {
  for (let seed of [1, 42, 12345, 0xffffffff]) for (let moduleIndex = 0; moduleIndex < 16; moduleIndex++) {
    checkFormation(generateSquareFormation(moduleIndex, seed));
  }
});

test('subdivision, merge and rotations yield varied module topology', () => {
  const signatures = new Set(Array.from({length:64},(_,i) => JSON.stringify(generateSquareFormation(i, 777).map(t => [t.x,t.y,t.size]))));
  assert.ok(signatures.size > 50, `${signatures.size} of 64 formations differ`);
  const tiles = Array.from({length:64},(_,i)=>generateSquareFormation(i, 777));
  assert.ok(tiles.some(t=>t.some(s=>s.size <= 1)));
  assert.ok(tiles.some(t=>t.some(s=>s.size >= 3)));
});

test('formation topology remains fixed for seed + module index', () => {
  assert.deepEqual(generateSquareFormation(4, 992), generateSquareFormation(4, 992));
  assert.notDeepEqual(generateSquareFormation(4, 992), generateSquareFormation(4, 993));
});

test('desktop wings touch portfolio edges and archive spans viewport', () => {
  const entries = makeEntries(18);
  const viewport = {width: 1440,height: 900};
  const closed = layoutMosaic(entries, viewport, false, 72);
  const open = layoutMosaic(entries, viewport, true, 72);
  const left = (viewport.width-closed.metrics.panelWidth)/2;
  const right = (viewport.width+closed.metrics.panelWidth)/2;
  assert.ok(closed.tiles.every(t=>t.side==='left'? t.x+t.pixels<=left+1e-6 : t.x>=right-1e-6));
  assert.ok(closed.tiles.some(t=>t.side==='left' && close(t.x+t.pixels,left)));
  assert.ok(closed.tiles.some(t=>t.side==='right' && close(t.x,right)));
  assert.ok(open.tiles.some(t=>close(t.x,0)));
  assert.ok(open.tiles.some(t=>close(t.x+t.pixels,viewport.width)));
  assert.deepEqual(closed.tiles.map(t=>t.id),open.tiles.map(t=>t.id));
});

test('the same module identities and geometry persist through resizing and rotation', () => {
  const entries = makeEntries(30);
  const sizes = [{width:1440,height:900},{width:1600,height:850},{width:1800,height:1000}];
  const layouts = sizes.map(size=>layoutMosaic(entries,size,true,5353));
  const lookup = l=>new Map(l.tiles.map(t=>[t.id,[t.size,t.globalModuleIndex]]));
  const base = lookup(layouts[0]);
  for (const layout of layouts.slice(1)) {
    const next = lookup(layout);
    for (const [key,value] of base) if(next.has(key))assert.deepEqual(next.get(key),value);
  }
});

test('archive has edge-to-edge coverage and reaches bottom on desktop and compact screens', () => {
  for (const viewport of [{width:390,height:844},{width:768,height:1024},{width:1100,height:580},{width:1280,height:800},{width:1722,height:854},{width:1920,height:1080}]) {
    for (const count of [4,18,34,67]) {
      const {tiles,contentHeight}=layoutMosaic(makeEntries(count),viewport,true,123456);
      assert.ok(contentHeight>=viewport.height);
      for(let row=0;row<12;row++)for(let col=0;col<15;col++){
        const x=(col+0.5)*viewport.width/15;
        const y=(row+0.5)*viewport.height/12;
        const matches=tiles.filter(t=>x>=t.x-1e-7 && x<t.x+t.pixels-1e-7 && y>=t.y-1e-7 && y<t.y+t.pixels-1e-7);
        assert.equal(matches.length,1,`${viewport.width}x${viewport.height} (${x},${y})`);
      }
    }
  }
});

test('compact portfolio has exactly two streams and compacts into grid with identical achievement IDs', () => {
  for (const viewport of [{width:280,height:620},{width:390,height:844},{width:600,height:800},{width:800,height:1000},{width:1100,height:580}]) {
    const entries=makeEntries(19);
    const normal=layoutMosaic(entries,viewport,false,987);
    const archive=layoutMosaic(entries,viewport,true,987);
    assert.equal(computeMetrics(viewport).compact,true);
    const left=(viewport.width-normal.metrics.panelWidth)/2;
    const right=(viewport.width+normal.metrics.panelWidth)/2;
    assert.ok(normal.tiles.every(t=>close(t.pixels,t.pixels) && (t.side==='left'?close(t.x+t.pixels,left):close(t.x,right))));
    assert.deepEqual(normal.tiles.filter(t=>t.entry).map(t=>t.id),archive.tiles.filter(t=>t.entry).map(t=>t.id));
  }
});

test('dynamic slot generator maintains capacity for added achievements', () => {
  for(const n of [4,18,80,200])assert.ok(createMosaicSlots(n,1,444).length>=n);
});


test('portfolio square tiling reaches both horizontal viewport edges without gaps', () => {
  for (const viewport of [
    {width: 1440, height: 900}, {width: 1722, height: 854},
    {width: 1920, height: 1080}, {width: 2560, height: 1440},
    {width: 390, height: 844}, {width: 820, height: 1180},
    {width: 1180, height: 600},
  ]) {
    const { tiles, metrics } = layoutMosaic(makeEntries(24), viewport, false, 231);
    const left = (viewport.width - metrics.panelWidth) / 2;
    const right = (viewport.width + metrics.panelWidth) / 2;
    for (let row=0; row<12; row++) {
      const y = (row + .5) * viewport.height/12;
      for (let col=0; col<12; col++) {
        const x = (col + .5) * viewport.width/12;
        if (x >= left && x < right) continue;
        const found = tiles.some(t => x >= t.x-1e-7 && x < t.x+t.pixels-1e-7 && y>=t.y-1e-7 && y<t.y+t.pixels-1e-7);
        assert.ok(found, `uncovered edge at ${viewport.width}x${viewport.height}, (${x}, ${y})`);
      }
    }
  }
});

test('desktop achievement squares are always large enough and identities are stable across viewport resizing', () => {
  const entries = makeEntries(31);
  const widths = [1440, 1600, 1722, 1920, 2560];
  let ids;
  for (const width of widths) {
    for (const archive of [false, true]) {
      const {tiles} = layoutMosaic(entries, {width,height:900}, archive, 42);
      const actual = tiles.filter(t=>t.entry);
      assert.equal(actual.length, entries.length);
      assert.ok(actual.every(t=>t.pixels>=164-1e-6), `achievement tile too small at ${width}`);
      const mapped = new Map(actual.map(t=>[t.entry.id,t.id]));
      if (!ids) ids=mapped;
      for (const [id,tileId] of ids) assert.equal(mapped.get(id),tileId);
    }
  }
});

````

### `portfolio-readme-replacement.zip` → `README.md`

````md
# Marwan's Living Archive

An interactive personal portfolio built with **React and Vite**. Instead of a traditional page with a static project gallery, it combines a readable, independently scrolling portfolio with a full-screen **living mosaic** of projects, interests, writing, and other moments worth exploring.

The mosaic is made of genuine squares. Its geometry varies procedurally, its colors flow continuously across the canvas, and its entries open into detailed pages through a shared flashback-style navigation transition.

> **Project status:** An evolving personal website. Some archive entries and illustrations are intentionally labeled examples; they should be replaced with verified content before treating the site as a finished public record.

## Getting started

**Requirements:** Node.js 20+ recommended, npm, and network access for the initial dependency installation.

```bash
npm install
npm run dev
```

Open the local address printed by Vite (typically `http://localhost:5173`). To build and preview a production version:

```bash
npm run build
npm run preview
```

Run the automated layout and behavior tests with:

```bash
npm test
```

The project uses client-side routes such as `/projects` and `/archive/writing`. When deploying, configure your hosting provider to serve `index.html` as the fallback for these paths so direct visits and page refreshes work.

## The experience

### Portfolio Mode

- A centered, vertically scrollable editorial page presents the introduction, projects, writing, and contact details.
- The surrounding mosaic occupies the **entire viewport**, including the space behind the three floating controls. Its square tiles meet the portfolio's side edges without a separate header or outer frame.
- Project and archive squares are clickable. Decorative squares are not.
- The mosaic scrolls passively, allowing visitors to encounter entries beyond the first screen without having to move it themselves.

### Archive Mode

- The **Archive** control makes the central portfolio recede while the mosaic reorganizes into an edge-to-edge, scrollable square gallery.
- The same archive content stays available; selecting an entry opens its detail view.
- The mosaic is an *orderly asymmetric square tiling*, **not** a mathematically perfect squared square. Repeated square sizes are intentional so the collection can grow freely.
- A temporary growth-demo dock can add or remove four clearly labeled example entries at a time. These additions are not saved to the achievement data file.

### Smaller screens

- On phones, tablets, and narrow or short windows, Portfolio Mode uses **two visible vertical rails of squares** around a narrower reading panel.
- The rails scroll automatically. In Archive Mode, the squares reconfigure into an edge-to-edge grid with a column count adapted to the viewport.
- On smaller rails, images take priority over tiny, unreadable captions; the full title and details remain available after opening an entry.
- The responsive layout adapts when the window is resized or a device changes orientation.

## Geometry: varied, but stable

The tiling system is implemented in `src/lib/mosaicLayout.js`.

- **Square-only geometry:** Every tile retains a 1:1 aspect ratio, including decorative filler.
- **Procedural variation:** A seeded generator rotates square formations, subdivides some squares into four children, and sometimes merges eligible children back into a larger square.
- **No repeated rigid template:** The generator varies the arrangements of neighboring square regions rather than repeating an identical module everywhere.
- **Readable achievement placement:** Desktop achievement entries occupy suitable larger squares; small subdivisions remain decorative.
- **Session-stable topology:** A layout seed is created once when the React app mounts. Resizing the browser, rotating a device, and entering or exiting Archive Mode do **not** reroll the underlying square formations. A full page reload can generate a different arrangement.
- **Responsive projection:** The same generated geometry is positioned and scaled for the available desktop space; compact layouts intentionally use simplified side streams and grids.

When achievements are added, the layout allocates further square regions as needed. It is not constrained to a fixed number of entries per row or to a perfect-square solution.

## Passive scrolling and motion

Automatic movement is controlled by `src/lib/autoScroll.js` and applied in `src/components/ArchiveMosaic.jsx`.

| Behavior | Current setting |
| --- | --- |
| Pause before automatic motion resumes | **2 seconds** after interaction |
| Scrolling direction | Downward |
| Cruising speed | About **25.3 px/second** |
| Ease into motion | **900 ms** |
| Ease out on non-manual pause | **650 ms** |
| Approaching the bottom | Slows gently before the endpoint |
| Return to the top | **2-second eased rewind**, followed by another downward pass |
| Direct touch/wheel input | Takes control immediately |
| Reduced-motion preference | Disables automatic movement |

To tune these, edit `SCROLL_RESUME_DELAY_MS`, `SCROLL_SPEED_PX_PER_MS`, `START_EASE_DURATION_MS`, `STOP_EASE_DURATION_MS`, and `REWIND_DURATION_MS` in `src/lib/autoScroll.js`.

The navigation animation is separate from the background scroll. Clicking an archive entry or internal page button triggers a brief zoom/flashback handoff; internal navigation uses the browser History API so Back and Forward remain available.

## Floating controls

Three circular controls hover directly over the collage, without a conventional navigation bar:

1. **Appearance:** Toggle light and dark mode.
2. **Language:** Switch the supported English/Arabic interface text.
3. **Archive:** Enter or leave Archive Mode.

The controls fade out after **3 seconds of inactivity** and reappear on pointer, touch, wheel, or keyboard interaction. They do not block the collage while hidden. Keyboard focus is also considered when hiding them.

Theme and language preferences are stored locally in the browser. The language switch covers supported UI strings and entry titles/summaries; longer entry descriptions remain in their supplied language unless translated separately.

## Managing achievements

Edit **`src/data/achievements.js`** to add, update, or remove real entries. Each entry has a stable `id`, a title, a category, an image, text, and optional links.

```js
{
  id: 'new-project',
  category: 'Development',
  title: 'My New Project',
  summary: 'A concise explanation of the work.',
  body: 'The longer story, technical decisions, and results.',
  image: '/art/new-project.jpg',
  meta: '2026 · React · CSS',
  links: [
    { label: 'View project', href: 'https://example.com' },
  ],
  sample: false,
}
```

Images placed in `public/art/` can be referenced as `/art/filename.jpg`, `.png`, `.webp`, or `.svg`. Use real photographs and screenshots where possible. Replace `example.com` with a working destination; omit `links` or use an empty array when no verified URL exists.

Entries may also have `titleAr`, `categoryAr`, and `summaryAr` for translated labels. Keep IDs unique and stable so links such as `/archive/new-project` remain dependable.

The original React prototype includes entries adapted from the earlier portfolio (software projects, writing, and reading interests), plus **four explicitly marked sample entries**. The demo dock creates additional temporary samples. **An interest or sample must not be presented as an award or completed achievement.**

### Content and contact notes

- Some early project covers are locally created SVG illustrations rather than genuine project screenshots.
- The portfolio's contact page links to public profiles; it does not pretend to send messages through a nonfunctional contact form.
- Replace example copy, placeholder metadata, and unverified imagery as the archive develops.

## Customizing the appearance

Most of the visual design lives in **`src/styles/global.css`**.

| What to change | Where to look |
| --- | --- |
| Light-mode color field | `:root` → `--mosaic-horizontal`, `--mosaic-vertical` |
| Dark-mode color field | `:root[data-theme="dark"]` → the same variables |
| Rate of vertical color variation | `.mosaic-plane` → `background-size` (currently `100% 2200px`) |
| Tile outlines, typography, image treatment | `.mosaic-tile`, `.tile-title`, `.tile-visual` |
| Portfolio width and spacing | `.portfolio-panel` and `computeMetrics()` in `mosaicLayout.js` |
| Floating-button appearance and position | `.floating-controls`, `.orb-button` |
| Floating-button idle delay | `CONTROLS_IDLE_MS` in `FloatingControls.jsx` (currently `3000`) |
| Decorative pattern artwork | `src/lib/ambientPattern.js` |

**Color design:** The decorative squares use a shared continuous gradient beneath the tiles, rather than unrelated color palettes assigned to groups. Changing the gradient stops adjusts the color landscape without changing the tiling geometry.

## Performance approach

The site is designed to remain usable as the archive expands:

- Procedural formations are generated deterministically and cached by module/seed.
- Only tiles near the visible scroll window are mounted; distant decorative squares do not remain in the DOM.
- Decorative SVG artwork is cached per tile identity.
- React updates the visible set in scroll-position buckets rather than on every animation frame.
- Resize handling is delayed to avoid repeatedly rebuilding the layout during continuous zoom or resizing.
- Automatic motion changes the mosaic's **scroll position**, not the transform of every individual tile.

These are architectural optimizations, **not a guarantee of a particular frame rate**. Test large real-world datasets, image sizes, and the target browsers before release.

## Project structure

```text
src/
  App.jsx                       App state, routes, archive mode, navigation
  components/
    ArchiveMosaic.jsx           Tiles, visible-window rendering, scrolling
    PortfolioPanel.jsx          Home, projects, writing, contact, entry pages
    FloatingControls.jsx        Theme, language, and archive buttons
    TransitionLayer.jsx         Zoom/flashback navigation overlay
    Icons.jsx                   Shared icons
  content/
    translations.js             English/Arabic interface strings
  data/
    achievements.js             Archive entries and demo samples
  hooks/
    useViewport.js              Responsive viewport measurements
  lib/
    mosaicLayout.js             Square geometry and responsive projection
    visibleMosaicTiles.js       Viewport-based tile selection
    ambientPattern.js           Procedural decorative SVGs
    autoScroll.js               Easing, pauses, looping/rewind behavior
  styles/
    global.css                  Themes, layout, typography, animation
public/
  portrait.png                  Portfolio portrait
  art/                          Project and sample images/illustrations
tests/
  *.test.js                     Geometry, scrolling, and behavior checks
docs/
  mosaic-growth.*               Early growth illustration (historical)
```

**Note on `docs/mosaic-growth.*`:** The included diagram was made for an earlier fixed-module iteration and should be treated as a historical illustration, **not a specification of the current procedural layout**.

## Accessibility and deployment checklist

Before publishing, verify the following on the actual devices and browsers you intend to support:

- [ ] Light and dark themes are legible, including decorative tiles and text contrast.
- [ ] Mobile portrait, mobile landscape, tablets, and narrow desktop windows show usable side rails or the complete archive grid.
- [ ] The collage scrolls and rewinds smoothly without preventing manual touch or wheel navigation.
- [ ] Floating controls can be revealed and reached with keyboard and touch input.
- [ ] `prefers-reduced-motion` is respected.
- [ ] Each real project has correct content, images, alt text, and functioning links.
- [ ] Temporary example entries are removed or remain clearly labeled.
- [ ] Direct URLs and browser Back/Forward work after deployment.
- [ ] A production build completes with `npm run build`.

---

*Built as a portfolio that can grow with its owner: a readable introduction in the foreground and an explorable archive of work and ideas around it.*

````

### `portfolio-responsive-replacements.zip` → `src/App.jsx`

````jsx
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ArchiveMosaic from './components/ArchiveMosaic.jsx';
import FloatingControls from './components/FloatingControls.jsx';
import PortfolioPanel from './components/PortfolioPanel.jsx';
import TransitionLayer from './components/TransitionLayer.jsx';
import Icon from './components/Icons.jsx';
import { achievements, createSampleBatch } from './data/achievements.js';
import { i18n } from './content/translations.js';
import { useViewport } from './hooks/useViewport.js';
import { computeMetrics } from './lib/mosaicLayout.js';

function readPreference(key, fallback) {
  try { return localStorage.getItem(key) || fallback; } catch { return fallback; }
}

function readPathname() { return window.location.pathname.replace(/\/$/, '') || '/'; }

export default function App() {
  const viewport = useViewport();
  const responsive = useMemo(() => computeMetrics({ ...viewport, archive: false }), [viewport]);
  const [pathname, setPathname] = useState(readPathname);
  const [theme, setTheme] = useState(() => readPreference('living-archive-theme', 'light'));
  const [lang, setLang] = useState(() => readPreference('living-archive-language', 'en'));
  const [archive, setArchive] = useState(false);
  const [demoCount, setDemoCount] = useState(0);
  const [transition, setTransition] = useState(null);
  const busy = useRef(false);
  const timers = useRef([]);
  const t = i18n[lang] || i18n.en;
  const entries = useMemo(() => [...achievements, ...createSampleBatch(0, demoCount)], [demoCount]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('living-archive-theme', theme); } catch { /* Preferences are optional */ }
  }, [theme]);
  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem('living-archive-language', lang); } catch { /* Preferences are optional */ }
  }, [lang]);
  useEffect(() => {
    const popstate = () => { setPathname(readPathname()); setArchive(false); };
    window.addEventListener('popstate', popstate);
    return () => window.removeEventListener('popstate', popstate);
  }, []);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  useEffect(() => {
    document.title = pathname === '/' ? 'Marwan Al-Hamdan · A Living Archive' : `Marwan Al-Hamdan · ${pathname.split('/').filter(Boolean).at(-1) || 'Archive'}`;
  }, [pathname]);

  const navigate = useCallback((destination, sourceElement, item = null) => {
    if (busy.current) return;
    if (destination === pathname && !archive) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      window.history.pushState({}, '', destination);
      setPathname(destination); setArchive(false);
      return;
    }
    busy.current = true;
    const rect = sourceElement?.getBoundingClientRect();
    const origin = rect ? { left: rect.left, top: rect.top, width: rect.width, height: rect.height }
      : { left: viewport.width / 2 - 40, top: viewport.height / 2 - 40, width: 80, height: 80 };
    const base = { origin, image: item?.image, title: item?.title || destination.split('/').at(-1), phase: 'start' };
    setTransition(base);
    timers.current.push(setTimeout(() => setTransition({ ...base, phase: 'zoom' }), 25));
    timers.current.push(setTimeout(() => {
      window.history.pushState({}, '', destination);
      setPathname(destination);
      setArchive(false);
      setTransition({ ...base, phase: 'reveal' });
    }, 430));
    timers.current.push(setTimeout(() => { setTransition(null); busy.current = false; }, 750));
  }, [archive, pathname, viewport.width, viewport.height]);

  const onTileOpen = useCallback((item, element) => navigate(`/archive/${encodeURIComponent(item.id)}`, element, item), [navigate]);

  return (
    <div className={`site-shell ${archive ? 'site-shell--archive' : ''} ${responsive.compact ? 'site-shell--compact' : ''}`} style={{ '--panel-width': `${responsive.panelWidth}px` }}>
      <div className="site-grain" aria-hidden="true" />
      <ArchiveMosaic entries={entries} viewport={viewport} archive={archive} lang={lang} onOpen={onTileOpen} />
      <div className="panel-shadow" aria-hidden="true" />
      <PortfolioPanel pathname={pathname} archive={archive} entries={entries} t={t} lang={lang} onNavigate={navigate} />
      <FloatingControls archive={archive} onToggleArchive={() => setArchive(v => !v)} theme={theme} onToggleTheme={() => setTheme(v => v === 'dark' ? 'light' : 'dark')} lang={lang} onToggleLanguage={() => setLang(v => v === 'en' ? 'ar' : 'en')} t={t} />
      {archive && <aside className="archive-demo-dock" aria-label="Archive growth demo">
        <div className="dock-copy"><span className="dock-kicker">{t.demoHeading}</span><span>{entries.length} {t.count} <span className="dock-hint">· {t.demoInfo}</span></span></div>
        <div className="dock-actions">
          <button type="button" onClick={() => setDemoCount(n => n + 4)} title={t.add} aria-label={t.add}><Icon name="plus" size={17}/><span>4</span></button>
          <button type="button" onClick={() => setDemoCount(n => Math.max(0, n - 4))} disabled={!demoCount} title={t.remove} aria-label={t.remove}><Icon name="minus" size={17}/><span>4</span></button>
        </div>
      </aside>}
      <TransitionLayer transition={transition}/>
    </div>
  );
}

````

### `portfolio-responsive-replacements.zip` → `src/components/ArchiveMosaic.jsx`

````jsx
import React, { useEffect, useMemo, useRef } from 'react';
import { layoutMosaic } from '../lib/mosaicLayout.js';
import Icon from './Icons.jsx';

function ArchiveTile({ tile, onOpen, lang, index }) {
  const { entry, pixels, x, y, decorative } = tile;
  const style = {
    '--tile-x': `${x}px`, '--tile-y': `${y}px`, '--tile-size': `${pixels}px`,
    '--tile-image': entry ? `url("${entry.image}")` : undefined,
    '--tile-tone': `var(--tile-tone-${index % 6})`,
  };
  if (decorative) {
    return (
      <div
        className={`mosaic-tile mosaic-tile--ambient ambient-${index % 6} ${tile.hidden ? 'mosaic-tile--concealed' : ''}`}
        style={style} data-side={tile.side} aria-hidden="true"
      ><div className="ambient-mark" /></div>
    );
  }
  const title = lang === 'ar' ? entry.titleAr || entry.title : entry.title;
  const category = lang === 'ar' ? entry.categoryAr || entry.category : entry.category;
  return (
    <button
      type="button"
      className={`mosaic-tile mosaic-tile--entry ${entry.sample ? 'mosaic-tile--sample' : ''} ${tile.compact ? 'mosaic-tile--responsive' : tile.size === 1 ? 'mosaic-tile--tiny' : ''}`}
      style={style}
      onClick={(event) => onOpen(entry, event.currentTarget)}
      data-side={tile.side}
      data-entry-id={entry.id}
      title={title}
      aria-label={`${title}${entry.sample ? ' — sample' : ''}`}
    >
      <span className="tile-visual" aria-hidden="true" />
      <span className="tile-content">
        <span className="tile-category">{entry.sample ? '◇ ' : '✦ '}{category}</span>
        <span className="tile-title">{title}</span>
        <span className="tile-corner"><Icon name="upRight" size={14}/></span>
      </span>
    </button>
  );
}

export default function ArchiveMosaic({ entries, viewport, archive, lang, onOpen }) {
  const scrollRef = useRef(null);
  const layout = useMemo(() => layoutMosaic(entries, viewport, archive), [entries, viewport, archive]);
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [archive, layout.metrics.compact]);
  return (
    <div
      ref={scrollRef}
      className={`mosaic-scroll ${archive ? 'mosaic-scroll--archive' : ''} ${layout.metrics.compact ? 'mosaic-scroll--compact' : ''}`}
      aria-label="Interactive archive collage"
      style={{ '--stream-negative': `${-Math.max(104, Math.min(170, viewport.width * 0.27)) * 0.85}px`, '--stream-positive': `${Math.max(104, Math.min(170, viewport.width * 0.27)) * 0.85}px` }}
    >
      <div className="mosaic-plane" style={{ height: `${layout.contentHeight}px` }}>
        {layout.tiles.map((tile, index) => <ArchiveTile key={tile.id} tile={tile} onOpen={onOpen} lang={lang} index={index} />)}
      </div>
    </div>
  );
}

````

### `portfolio-responsive-replacements.zip` → `src/lib/mosaicLayout.js`

````javascript
/** Each 5×5 module is covered by squares, without gaps or overlaps. */
export const SQUARE_PATTERN = Object.freeze([
  { x: 0, y: 0, size: 3 },
  { x: 3, y: 0, size: 2 },
  { x: 3, y: 2, size: 2 },
  { x: 0, y: 3, size: 2 },
  { x: 2, y: 3, size: 1 },
  { x: 2, y: 4, size: 1 },
  { x: 3, y: 4, size: 1 },
  { x: 4, y: 4, size: 1 },
]);

export const CELLS_PER_SIDE = 5;
export const SLOTS_PER_MODULE = SQUARE_PATTERN.length;

export function createMosaicSlots(entryCount, minimumModules = 1) {
  const leftCount = Math.ceil(entryCount / 2);
  const rightCount = Math.floor(entryCount / 2);
  const modules = Math.max(minimumModules, Math.ceil(Math.max(leftCount, rightCount) / SLOTS_PER_MODULE));
  return Array.from({ length: modules }, (_, moduleIndex) => [
    ...SQUARE_PATTERN.map((square, index) => ({
      ...square, id: `L-${moduleIndex}-${index}`, side: 'left', moduleIndex,
      indexOnSide: moduleIndex * SLOTS_PER_MODULE + index,
    })),
    ...SQUARE_PATTERN.map((square, index) => ({
      ...square, id: `R-${moduleIndex}-${index}`, side: 'right', moduleIndex,
      indexOnSide: moduleIndex * SLOTS_PER_MODULE + index,
    })),
  ]).flat();
}

export function computeMetrics({ width, height, archive = false }) {
  // Short landscape viewports also use the two-column treatment.
  const compact = width <= 900 || (width <= 1200 && height <= 640);
  const sideInset = Math.max(17, Math.min(64, width * 0.065));
  const panelWidth = compact
    ? Math.min(620, width - 2 * sideInset)
    : Math.min(600, Math.max(468, width * 0.43));
  const gridColumns = compact ? (width < 480 ? 2 : width < 720 ? 3 : 4) : 10;
  const gridInset = compact ? Math.max(10, Math.min(24, width * 0.025)) : 30;
  const unit = compact
    ? archive
      ? (width - 2 * gridInset) / gridColumns
      : Math.max(104, Math.min(170, width * 0.27))
    : archive
      ? Math.min(122, (width - 60) / 10)
      : Math.min(112, Math.max(66, (width - panelWidth) / 7.8));
  return {
    width, height, panelWidth, unit, compact, mobile: compact,
    gridColumns, gridInset,
  };
}

function layoutCompact(entries, metrics, archive) {
  const { width, height, panelWidth, unit, gridColumns, gridInset } = metrics;
  const leftEdge = (width - panelWidth) / 2;
  const rightEdge = (width + panelWidth) / 2;
  // Fill both streams beyond the viewport so their gentle vertical movement
  // never reveals an empty region. Decorative slots are never clickable.
  const streamUnit = Math.max(104, Math.min(170, width * 0.27));
  const minimumPerSide = Math.ceil(height / streamUnit) + 4;
  const slotsPerSide = Math.max(Math.ceil(entries.length / 2), minimumPerSide);
  const slots = Array.from({ length: slotsPerSide * 2 }, (_, index) => {
    const side = index % 2 === 0 ? 'left' : 'right';
    const row = Math.floor(index / 2);
    const entry = entries[index] ?? null;
    return { id: entry ? `entry-${entry.id}` : `ambient-${side}-${row}`, side, row, entry };
  });
  const visibleEntries = slots.filter(slot => slot.entry);
  const archiveOrder = new Map(visibleEntries.map((slot, index) => [slot.id, index]));
  const archiveUnit = (width - 2 * gridInset) / gridColumns;
  const gridWidth = gridColumns * archiveUnit;
  const gridLeft = (width - gridWidth) / 2;
  const gridTop = 78; // Keeps the top row clear of the floating controls.

  const tiles = slots.map((slot) => {
    const { side, row, entry } = slot;
    const order = archiveOrder.get(slot.id);
    const decorative = !entry;
    const pixels = archive ? archiveUnit : streamUnit;
    const x = archive && !decorative
      ? gridLeft + (order % gridColumns) * archiveUnit
      : side === 'left' ? leftEdge - streamUnit : rightEdge;
    const y = archive && !decorative
      ? gridTop + Math.floor(order / gridColumns) * archiveUnit
      : (row - 2) * streamUnit;
    return {
      id: slot.id, side, entry, decorative, compact: true,
      size: 1, x, y, pixels,
      // Decorative stream squares are omitted visually in Archive Mode.
      hidden: archive && decorative,
    };
  });
  const archiveRows = Math.ceil(entries.length / gridColumns);
  const contentHeight = archive
    ? Math.max(height + 1, gridTop + archiveRows * archiveUnit + 32)
    : Math.max(height + 1, (slotsPerSide + 1) * streamUnit);
  return { tiles, metrics, contentHeight, moduleCount: archiveRows };
}

/** Positions the same achievement nodes in both modes. */
export function layoutMosaic(entries, viewport, archive = false) {
  const metrics = computeMetrics({ ...viewport, archive });
  if (metrics.compact) return layoutCompact(entries, metrics, archive);

  const { width, height, panelWidth, unit } = metrics;
  const leftBoundary = (width - panelWidth) / 2;
  const rightBoundary = (width + panelWidth) / 2;
  // Use the smaller of both mode scales so the set of tile IDs stays stable
  // when transitioning into Archive Mode.
  const portfolioUnit = Math.min(112, Math.max(66, (width - panelWidth) / 7.8));
  const archiveUnit = Math.min(122, (width - 60) / 10);
  const coverageUnit = Math.min(portfolioUnit, archiveUnit);
  const minModules = Math.ceil((height + coverageUnit * 0.6) / (5 * coverageUnit));
  const slots = createMosaicSlots(entries.length, minModules);
  const tiles = slots.map(slot => {
    const entryIndex = slot.indexOnSide * 2 + (slot.side === 'right' ? 1 : 0);
    const entry = entries[entryIndex] ?? null;
    const x = archive
      ? width / 2 + (slot.side === 'left' ? -5 * unit : 0) + slot.x * unit
      : (slot.side === 'left' ? leftBoundary - 5 * unit : rightBoundary) + slot.x * unit;
    const y = (slot.moduleIndex * 5 + slot.y) * unit;
    return {
      ...slot, entry, x, y, pixels: slot.size * unit,
      decorative: !entry, compact: false, hidden: false,
    };
  });
  const moduleCount = slots.length / (SLOTS_PER_MODULE * 2);
  const contentHeight = moduleCount * 5 * unit + (archive ? 90 : 30);
  return { tiles, metrics, contentHeight: Math.max(height + 1, contentHeight), moduleCount };
}

````

### `portfolio-responsive-replacements.zip` → `src/styles/global.css`

````css
:root {
  font-family: 'DM Sans', 'Segoe UI', Arial, sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  --world: #161b20;
  --world-grid: rgba(239, 229, 211, .035);
  --paper: #f0ede6;
  --paper-soft: #e7e1d7;
  --ink: #232823;
  --muted: #78786f;
  --paper-line: #cbc7bc;
  --accent: #777157;
  --tile-outline: rgba(246, 238, 219, .64);
  --tile-tone-0: #263d3e;
  --tile-tone-1: #59483c;
  --tile-tone-2: #35495a;
  --tile-tone-3: #565042;
  --tile-tone-4: #493d48;
  --tile-tone-5: #434c44;
}
:root[data-theme="dark"] {
  --world: #090e14;
  --world-grid: rgba(226, 234, 244, .035);
  --paper: #21272b;
  --paper-soft: #2b3236;
  --ink: #eeeae1;
  --muted: #a2aaa6;
  --paper-line: #47504f;
  --accent: #d1b99a;
  --tile-outline: rgba(233, 239, 239, .48);
}
* { box-sizing: border-box; }
html, body, #root { min-width: 280px; min-height: 100%; margin: 0; }
html { overflow: hidden; }
body { background: var(--world); color: var(--ink); }
button, a { -webkit-tap-highlight-color: transparent; }
button { font: inherit; }
button:focus-visible, a:focus-visible { outline: 2px solid #89adc1; outline-offset: 3px; }
a { color: inherit; }
.site-shell { width: 100%; min-height: 100svh; isolation: isolate; background: var(--world); overflow: hidden; }
.site-grain { pointer-events: none; position: fixed; inset: 0; z-index: 5; opacity: .3; background-image: repeating-linear-gradient(90deg,transparent 0, transparent 31px, var(--world-grid) 32px), repeating-linear-gradient(0deg,transparent 0, transparent 31px, var(--world-grid) 32px); }
/* The mosaic remains scrollable under the independently scrolling portfolio. */
.mosaic-scroll { position: fixed; inset: 0; overflow-y: auto; overflow-x: hidden; overscroll-behavior: contain; scrollbar-width: none; background: var(--world); }
.mosaic-scroll::-webkit-scrollbar, .portfolio-panel::-webkit-scrollbar { display: none; }
.mosaic-plane { position: relative; width: 100%; min-height: 100%; }
.mosaic-tile { appearance: none; position: absolute; top: 0; left: 0; padding: 0; margin: 0; width: var(--tile-size); height: var(--tile-size); display: block; overflow: hidden; border-radius: 0; border: 1px solid var(--tile-outline); transform: translate3d(var(--tile-x), var(--tile-y), 0); transition: transform .82s cubic-bezier(.23,.87,.24,1), width .82s cubic-bezier(.23,.87,.24,1), height .82s cubic-bezier(.23,.87,.24,1), border-color .22s ease, opacity .3s ease; will-change: transform; background: var(--tile-tone); }
.mosaic-tile--entry { cursor: pointer; text-align: left; color: #faf7f0; z-index: 1; }
.mosaic-tile--entry:hover, .mosaic-tile--entry:focus-visible { z-index: 3; border-color: #f9e5c9; }
.tile-visual { position: absolute; inset: 0; display: block; background-image: var(--tile-image); background-position: center; background-size: cover; transform: scale(1.005); transition: transform .4s cubic-bezier(.2,.75,.2,1), filter .25s; filter: saturate(.76) brightness(.86); }
.tile-visual::after { content: ''; position: absolute; inset: 0; background: linear-gradient(0deg, rgba(5,11,16,.87),rgba(5,11,16,.06) 70%); }
.mosaic-tile--entry:hover .tile-visual, .mosaic-tile--entry:focus-visible .tile-visual { transform: scale(1.085); filter: saturate(1) brightness(1.06); }
.tile-content { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end; padding: clamp(8px, 1.35vw, 20px); text-shadow: 0 1px 12px #06090fb0; }
.tile-category { display: block; font-size: clamp(7px, .65vw, 10px); letter-spacing: .13em; line-height: 1.2; text-transform: uppercase; font-weight: 600; opacity: .78; margin-bottom: 7px; }
.tile-title { font: normal clamp(13px, 1.55vw, 25px)/1.06 'Instrument Serif', Georgia, serif; max-width: 95%; }
.tile-corner { position: absolute; top: 10px; right: 9px; opacity: 0; transform: translate(-3px,3px); transition: opacity .2s, transform .2s; }
.mosaic-tile:hover .tile-corner, .mosaic-tile:focus-visible .tile-corner { opacity: 1; transform: none; }
.mosaic-tile--sample .tile-category { color: #e8d7b7; }
.mosaic-tile--tiny .tile-content { padding: 5px; }
.mosaic-tile--tiny .tile-title, .mosaic-tile--tiny .tile-category { font: 8px/1.2 'DM Mono', monospace; letter-spacing: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.mosaic-tile--tiny .tile-category { display: none; }
.mosaic-tile--ambient { border-color: rgba(240, 231, 214, .23); pointer-events: none; }
.mosaic-tile--ambient::after { content: ''; position: absolute; inset: 0; background: linear-gradient(140deg, rgba(255,255,255,.12),transparent 55%,rgba(0,0,0,.28)); }
.ambient-0 { background: repeating-linear-gradient(45deg,#333b3f 0 14px,#313337 14px 16px); }
.ambient-1 { background: radial-gradient(circle at 55% 45%,#7f7268 0 10%,transparent 10.3%),radial-gradient(circle,#41393b,#2b3039); }
.ambient-2 { background: repeating-linear-gradient(90deg,#314044 0 17px,#33444a 17px 18px); }
.ambient-3 { background: radial-gradient(circle at 100% 0,#79735d,transparent 67%),#2c3439; }
.ambient-4 { background: repeating-linear-gradient(0deg,#353340 0 20px,#6b5d5d 20px 21px); }
.ambient-5 { background: radial-gradient(circle at 50% 50%,transparent 0 20%,#596266 20.5% 21%,transparent 21.5% 35%,#596266 35.5% 36%,transparent 36.5%),#344046; }
.ambient-mark { width: 30%; height: 30%; border: 1px solid #eee8d01d; position: absolute; left: 35%; top: 35%; transform: rotate(45deg); }
.panel-shadow { position: fixed; z-index: 6; top: 0; bottom: 0; left: 50%; transform: translateX(-50%); width: var(--panel-width, min(600px,max(468px,43vw))); box-shadow: 0 25px 95px #05080da8,0 0 0 1px rgba(255,255,255,.1); pointer-events: none; transition: opacity .4s, transform .6s; }
.site-shell--archive .panel-shadow { opacity: 0; transform: translateX(-50%) translateY(50px) scale(.94); }
.portfolio-panel { position: fixed; z-index: 7; top: 0; bottom: 0; left: 50%; transform: translateX(-50%); width: var(--panel-width, min(600px,max(468px,43vw))); overflow-y: auto; overscroll-behavior: contain; scrollbar-width: none; padding: 27px clamp(25px,3.1vw,49px) 16px; background: var(--paper); color: var(--ink); border: 1px solid var(--paper-line); box-shadow: 0 0 0 1px rgba(0,0,0,.06); transition: transform .63s cubic-bezier(.25,.72,.15,1), opacity .45s ease; }
.portfolio-panel--hidden { opacity: 0; transform: translateX(-50%) translateY(72px) scale(.9); pointer-events: none; }
.panel-heading { display:flex; align-items:center; justify-content:space-between; gap:10px; padding-bottom: 27px; border-bottom:1px solid var(--paper-line); }
.panel-monogram { border:0; background:transparent; color:var(--ink); padding:0; font:bold 27px 'Instrument Serif',Georgia,serif; cursor:pointer; }
.panel-monogram span { color: var(--accent); }
.panel-label,.panel-index,.micro-label,.number-label,.panel-footer,.portrait-credit,.source-disclosure { font: 500 9px/1.3 'DM Mono',monospace; letter-spacing:.12em; }
.panel-label { color:var(--muted); }
.tiny-asterisk { color: var(--accent); font-size: 16px; vertical-align:-2px; }
.panel-index { color:var(--muted); }
.intro-section { padding-top: 49px; }
.micro-label,.number-label { display:block; color:var(--muted); }
.hero-intro { display:flex; align-items:flex-end; gap:18px; margin-top:27px; }
.hero-copy { min-width:0; flex:1; }
.hero-greeting { font:italic 26px 'Instrument Serif',Georgia,serif; }
.hero-copy h1 { margin:10px 0 0; font:normal clamp(34px,3.65vw,52px)/1.02 'Instrument Serif',Georgia,serif; letter-spacing:-.035em; white-space:normal; }
.hero-copy h1 em, .editorial-block h2 em,.view-title em { font-weight:400; color:var(--accent); }
.hero-rule { width:45px; height:1px; background:var(--accent); margin:18px 0; }
.hero-role { font-size:11px; font-weight:700; letter-spacing:.09em; text-transform:uppercase; margin:0 0 8px; }
.hero-description { font-size:12px; line-height:1.7; color:var(--muted); margin:0; }
.portrait-frame { width: 32%; flex:none; aspect-ratio: .77; display:flex; flex-direction:column; align-self:center; position:relative; }
.portrait-frame img { display:block; width:100%; height:100%; object-fit:cover; object-position:center 34%; filter:saturate(.72); border:1px solid var(--paper-line); }
.portrait-credit { position:absolute; bottom:-17px; left:0; color:var(--muted); white-space:nowrap; font-size:7px; }
.hero-actions { display:flex; flex-wrap:wrap; gap:9px; margin-top:39px; }
.pill-link { text-decoration:none; display:inline-flex; align-items:center; justify-content:center; gap:12px; border:1px solid var(--ink); border-radius:100px; padding:11px 14px; font-size:11px; font-weight:600; cursor:pointer; transition:transform .18s,background .18s,color .18s; }
.pill-link:hover { transform:translateY(-2px); }
.pill-link:active { transform:scale(.96); }
.pill-link--dark { background:var(--ink); color:var(--paper); }
.pill-link--outline { background:transparent; color:var(--ink); }
.pill-link--outline:hover { background:var(--paper-soft); }
.editorial-block { margin-top:66px; padding-top:23px; border-top:1px solid var(--paper-line); }
.section-heading { display:flex; align-items:center; justify-content:space-between; gap:10px; }
.section-star { color:var(--accent); }
.editorial-block h2 { margin:22px 0 20px; font:normal clamp(38px,4vw,56px)/.97 'Instrument Serif',Georgia,serif; letter-spacing:-.02em; }
.editorial-block p,.body-copy { color:var(--muted); font-size:13px; line-height:1.8; max-width:50ch; }
.ink-divider { width:100%; height:1px; background:var(--paper-line); margin:27px 0 22px; }
.feature-links { margin-top:13px; }
.feature-link { display:flex; justify-content:space-between; align-items:center; gap:12px; width:100%; padding:13px 0; background:none; color:var(--ink); border:0; border-bottom:1px solid var(--paper-line); text-align:start; cursor:pointer; font:normal 20px/1.2 'Instrument Serif',Georgia,serif; }
.feature-link:hover { color:var(--accent); }
.feature-number { font:9px 'DM Mono',monospace; color:var(--muted); margin-inline-end:auto; min-width:28px; }
.feature-link > svg:last-child { margin-inline-start:auto; }
.editorial-block--bottom { padding-bottom:40px; }
.inline-arrow { display:inline-flex;align-items:center;gap:9px;padding:0;border:0;background:none;color:var(--ink);font-size:12px;font-weight:600;text-decoration:none;cursor:pointer; }
.inline-arrow:hover { color:var(--accent); }
.inner-view { padding-top:51px; min-height:65%; }
.view-title { font:normal clamp(44px,5vw,72px)/.97 'Instrument Serif',Georgia,serif; letter-spacing:-.025em; margin:23px 0 19px; }
.view-lede { max-width:43ch;color:var(--muted);font-size:13px;line-height:1.7;margin:0 0 34px; }
.project-list { border-top:1px solid var(--paper-line); }
.project-row { width:100%; padding:17px 0; display:flex; align-items:center; gap:12px; border:0; border-bottom:1px solid var(--paper-line); background:none; text-align:start; color:var(--ink); cursor:pointer; }
.project-row:hover .project-row-description strong { color:var(--accent); }
.project-row img { width:68px;height:68px;object-fit:cover;border:1px solid var(--paper-line); }
.project-row-number { font:9px 'DM Mono',monospace;color:var(--muted); }
.project-row-description { flex:1; min-width:0;display:flex;flex-direction:column;gap:7px; }
.project-row-description strong { font:normal 24px 'Instrument Serif',Georgia,serif; }
.project-row-description small { color:var(--muted);font:9px 'DM Mono',monospace; }
.source-disclosure { margin:24px 0;line-height:1.7;color:var(--muted);letter-spacing:0; }
.editorial-illustration,.entry-hero-image { display:block;width:100%;aspect-ratio:1.55;object-fit:cover;border:1px solid var(--paper-line); }
.subheading { font:normal 33px 'Instrument Serif',Georgia,serif;margin:28px 0 10px; }
.contact-options { margin:42px 0 25px;border-top:1px solid var(--paper-line); }
.contact-options a { display:flex;justify-content:space-between;padding:17px 0;text-decoration:none;font:normal 30px 'Instrument Serif',Georgia,serif;border-bottom:1px solid var(--paper-line); }
.contact-options a:hover { color:var(--accent); }
.fine-print { color:var(--muted);font-size:11px;line-height:1.7; }
.sample-alert { margin-top:18px; padding:10px 12px; background:var(--paper-soft);border-left:2px solid var(--accent);font-size:10px;font-weight:700;letter-spacing:.06em; }
.entry-view .view-title { overflow-wrap:anywhere; }
.entry-links { margin:24px 0; }
.entry-view .pill-link { margin-top:28px; }
.panel-footer { margin-top:58px; padding:20px 0 19px; border-top:1px solid var(--paper-line);display:flex;justify-content:space-between;gap:15px;color:var(--muted);font-size:8px;letter-spacing:.02em; }
.index-nav { display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:3px;border-top:1px solid var(--paper-line);padding-top:14px; }
.index-nav-link { background:none;border:0;padding:6px 0 9px;color:var(--muted);font-size:10px;font-weight:600;cursor:pointer;text-align:center; }
.index-nav-link.current,.index-nav-link:hover { color:var(--ink); }
.index-nav-num { display:block;font:8px 'DM Mono',monospace;color:var(--accent);margin-bottom:6px; }
/* The toolbar is transparent: the collage always extends behind it. */
.floating-controls { position:fixed;z-index:45;top:24px;right:26px;display:flex;align-items:center;gap:14px;pointer-events:none; }
.orb-button { width:46px;height:46px;display:grid;place-items:center;position:relative;pointer-events:auto; border-radius:50%; border:1px solid rgba(237,237,231,.58);color:#f6f1e7;background:rgba(23,29,35,.68);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);cursor:pointer;box-shadow:0 3px 17px rgba(0,0,0,.22);transition:transform .2s cubic-bezier(.2,.8,.2,1),background .2s,border-color .2s,box-shadow .2s; }
.orb-button:hover { transform:scale(1.1);background:rgba(58,68,74,.9);border-color:#f5ead7;box-shadow:0 4px 24px rgba(0,0,0,.35); }
.orb-button:active { transform:scale(.92); }
.orb-button.is-active { background:#e8e0d1;color:#1c2529;border-color:#fff8ea; }
.language-button span:first-child { font:500 12px 'DM Mono',monospace; }
.orb-tooltip { position:absolute;right:50%;top:calc(100% + 10px);transform:translate(50%,-4px);white-space:nowrap;max-width:190px;pointer-events:none;opacity:0;border-radius:4px;background:#f2eadf;color:#252626;font-size:10px;padding:6px 9px;transition:opacity .2s,transform .2s; }
.orb-button:hover .orb-tooltip,.orb-button:focus-visible .orb-tooltip { opacity:1;transform:translate(50%,0); }
.archive-demo-dock { position:fixed;z-index:46;left:24px;bottom:24px;max-width:calc(100% - 48px);display:flex;gap:18px;align-items:center;padding:12px 13px 12px 16px;color:#e8e6df;background:rgba(17,23,29,.9);border:1px solid rgba(248,244,231,.35);backdrop-filter:blur(16px);box-shadow:0 10px 40px #0007; }
.dock-copy { display:flex;flex-direction:column;gap:5px;font-size:10px;color:#d3d4d0; }
.dock-kicker { letter-spacing:.1em;font-size:9px;text-transform:uppercase;font-weight:700;color:#eae9e4; }
.dock-hint { color:#aab3b4; }
.dock-actions { display:flex;gap:6px; }
.dock-actions button { width:48px;height:34px;display:flex;align-items:center;justify-content:center;gap:2px;border:1px solid #ffffff60;background:#ffffff0e;color:#faf7f0;cursor:pointer; }
.dock-actions button:hover { background:#ffffff2b; }
.dock-actions button:disabled { opacity:.3;cursor:default; }
.dock-actions button span { font-size:11px; }
.transition-layer { position:fixed;z-index:90;inset:0;pointer-events:none;overflow:hidden; }
.transition-image { position:fixed;left:var(--origin-x);top:var(--origin-y);width:var(--origin-width);height:var(--origin-height);background-image:linear-gradient(0deg,rgba(8,13,17,.55),rgba(8,13,17,.26)),var(--transition-image);background-position:center;background-size:cover;box-shadow:0 0 0 2px #f2e5d0;transition:left .42s cubic-bezier(.2,.74,.12,1),top .42s cubic-bezier(.2,.74,.12,1),width .42s cubic-bezier(.2,.74,.12,1),height .42s cubic-bezier(.2,.74,.12,1),opacity .32s;display:grid;place-items:center; }
.transition-title { opacity:0;color:#f5ede3;font:normal clamp(34px,6vw,84px) 'Instrument Serif',Georgia,serif;letter-spacing:-.04em;text-align:center;transition:opacity .18s .18s; }
.transition-layer--zoom .transition-image,.transition-layer--reveal .transition-image { left:-3vw;top:-3vh;width:106vw;height:106vh; }
.transition-layer--zoom .transition-title { opacity:1; }
.transition-layer--reveal { opacity:0;transition:opacity .30s ease; }
.transition-wash { position:absolute;inset:0;background:#efe7d8;opacity:0;transition:opacity .35s ease; }
.transition-layer--zoom .transition-wash { opacity:.1; }
/* Narrow screens retain a readable paper column and two square-only side streams.
   The same achievement buttons join a grid when Archive Mode opens. */
.mosaic-scroll--compact:not(.mosaic-scroll--archive) { overflow: hidden; }
.mosaic-scroll--compact:not(.mosaic-scroll--archive) .mosaic-tile[data-side="left"] {
  animation: mosaic-stream-left 27s ease-in-out infinite alternate;
}
.mosaic-scroll--compact:not(.mosaic-scroll--archive) .mosaic-tile[data-side="right"] {
  animation: mosaic-stream-right 31s ease-in-out infinite alternate;
}
@keyframes mosaic-stream-left { from { translate: 0 0; } to { translate: 0 var(--stream-negative); } }
@keyframes mosaic-stream-right { from { translate: 0 0; } to { translate: 0 var(--stream-positive); } }
.mosaic-scroll--compact.mosaic-scroll--archive { overflow-y: auto; overflow-x: hidden; }
.mosaic-scroll--archive .mosaic-tile--concealed { opacity: 0; pointer-events: none; }
.mosaic-scroll--compact .mosaic-tile--responsive .tile-title {
  font: normal clamp(15px, 2.5vw, 26px)/1.1 'Instrument Serif', Georgia, serif;
  white-space: normal;
}
.mosaic-scroll--compact .mosaic-tile--responsive .tile-category { font-size: 9px; }
.mosaic-scroll--compact:not(.mosaic-scroll--archive) .tile-content { opacity: .65; }
.mosaic-scroll--compact.mosaic-scroll--archive .tile-content { padding: clamp(10px, 2.3vw, 18px); }
.site-shell--compact .portfolio-panel,
.site-shell--compact .panel-shadow { top: 0; bottom: 0; }
.site-shell--compact .portfolio-panel {
  padding: max(76px, calc(env(safe-area-inset-top, 0px) + 63px)) clamp(17px, 3vw, 30px) 18px;
}
.site-shell--compact .floating-controls {
  top: max(12px, env(safe-area-inset-top, 0px));
  right: max(12px, env(safe-area-inset-right, 0px));
  gap: 10px;
}
.site-shell--compact .orb-button { width: 44px; height: 44px; }
.site-shell--compact .orb-tooltip { display: none; }
.site-shell--compact .archive-demo-dock {
  left: max(10px, env(safe-area-inset-left, 0px));
  bottom: max(10px, env(safe-area-inset-bottom, 0px));
  max-width: calc(100% - 20px);
}
@media (max-width: 1100px) { .panel-label { font-size:8px; } .portrait-frame { width:30%; } }
@media (max-width: 720px) {
  .portfolio-panel,.panel-shadow { top:0;bottom:0; }
  .portfolio-panel { padding: max(76px, calc(env(safe-area-inset-top, 0px) + 63px)) 23px 15px; }
  .panel-heading { padding-bottom:18px; }
  .floating-controls { top:max(12px, env(safe-area-inset-top, 0px));right:max(12px, env(safe-area-inset-right, 0px));gap:10px; }
  .orb-button { width:44px;height:44px; }
  .intro-section { padding-top:33px; }
  .hero-intro { gap:15px; }
  .hero-copy h1 { font-size:clamp(34px,8.2vw,55px); }
  .portrait-frame { width:32%; }
  .hero-greeting { font-size:24px; }
  .hero-description { font-size:12px; }
  .editorial-block { margin-top:48px; }
  .editorial-block h2 { font-size:clamp(38px,9vw,52px); }
  .archive-demo-dock { bottom:13px;left:13px;max-width:calc(100% - 26px);padding:9px 10px;gap:10px; }
  .dock-hint { display:none; }
  .dock-actions button { width:38px;height:34px; }
}
@media (max-width: 380px) {
  .hero-intro { flex-wrap:wrap; }
  .hero-copy { flex-basis: 100%; }
  .portrait-frame { width:104px;aspect-ratio:.77;position:relative;right:auto;top:auto;opacity:1; }
  .hero-description { max-width:26ch; }
  .portfolio-panel { padding:78px 17px 14px; }
  .panel-label { font-size:7px; }
}
@media (prefers-reduced-motion: reduce) {
  .mosaic-scroll--compact .mosaic-tile { animation: none !important; translate: 0 0 !important; }
  *,*::before,*::after { animation-duration:.01ms!important;transition-duration:.01ms!important;scroll-behavior:auto!important; }
}

````

### `portfolio-responsive-replacements.zip` → `tests/mosaicLayout.test.js`

````javascript
import test from 'node:test';
import assert from 'node:assert/strict';
import { SQUARE_PATTERN, createMosaicSlots, computeMetrics, layoutMosaic } from '../src/lib/mosaicLayout.js';

const makeEntries = n => Array.from({ length: n }, (_, i) => ({ id: `achievement-${i}` }));
const close = (a,b) => Math.abs(a-b) < 1e-6;

test('desktop module consists only of square tiles, without overlaps or holes', () => {
  const occupied = new Set();
  for (const { x, y, size } of SQUARE_PATTERN) {
    assert.ok(size > 0);
    for (let row = y; row < y + size; row++) for (let col = x; col < x + size; col++) {
      assert.ok(col < 5 && row < 5);
      const key = `${col}:${row}`;
      assert.ok(!occupied.has(key), `overlap at ${key}`);
      occupied.add(key);
    }
  }
  assert.equal(occupied.size, 25);
});

test('desktop wings touch the portfolio edges; archive wings meet in the center', () => {
  const viewport = { width: 1440, height: 900 };
  const normal = layoutMosaic(makeEntries(18), viewport, false);
  const open = layoutMosaic(makeEntries(18), viewport, true);
  const left = (viewport.width - normal.metrics.panelWidth) / 2;
  const right = (viewport.width + normal.metrics.panelWidth) / 2;
  assert.ok(normal.tiles.every(t => t.side === 'left' ? t.x + t.pixels <= left + 1e-6 : t.x >= right - 1e-6));
  assert.ok(normal.tiles.some(t => t.side === 'left' && close(t.x + t.pixels, left)));
  assert.ok(normal.tiles.some(t => t.side === 'right' && close(t.x, right)));
  assert.ok(open.tiles.some(t => t.side === 'left' && close(t.x + t.pixels, viewport.width / 2)));
  assert.ok(open.tiles.some(t => t.side === 'right' && close(t.x, viewport.width / 2)));
  assert.deepEqual(normal.tiles.map(t => t.id), open.tiles.map(t => t.id), 'same tile nodes across modes');
});

test('the desktop wings extend far enough to cover the entire viewport height', () => {
  for (const viewport of [{width: 1024,height: 900}, {width:1300,height:900}, {width:1920,height:1080}]) {
    for (const archive of [false,true]) {
      const layout = layoutMosaic(makeEntries(10), viewport, archive);
      const height = layout.moduleCount * 5 * layout.metrics.unit;
      assert.ok(height >= viewport.height, `insufficient depth at ${viewport.width} × ${viewport.height}`);
    }
  }
});

test('desktop expands capacity when achievements are added', () => {
  assert.equal(createMosaicSlots(16).length, 16);
  assert.equal(createMosaicSlots(17).length, 32);
  assert.equal(createMosaicSlots(33).length, 48);
  assert.ok(layoutMosaic(makeEntries(34), { width: 1440, height: 900 }, true).moduleCount >= 3);
});

test('compact mode includes mobile, tablet, narrow and short landscape windows', () => {
  for (const viewport of [{width:280,height:620},{width:390,height:844},{width:600,height:800},{width:800,height:1000},{width:1100,height:580}]) {
    const metrics = computeMetrics({...viewport, archive:false});
    assert.equal(metrics.compact,true);
    assert.ok(metrics.panelWidth < viewport.width);
    assert.ok(metrics.panelWidth >= 240);
  }
  assert.equal(computeMetrics({ width:1440,height:900 }).compact,false);
});

test('compact portfolio displays precisely two square streams flush with the paper', () => {
  for (const viewport of [{width:280,height:620},{width:390,height:844},{width:600,height:800},{width:800,height:1000}]) {
    const layout = layoutMosaic(makeEntries(10), viewport, false);
    const left = (viewport.width - layout.metrics.panelWidth) / 2;
    const right = (viewport.width + layout.metrics.panelWidth) / 2;
    assert.ok(layout.tiles.every(t => t.size === 1 && t.pixels > 0));
    assert.ok(layout.tiles.every(t => t.side === 'left'
      ? close(t.x + t.pixels, left)
      : close(t.x, right)));
    for (const side of ['left','right']) {
      const heights = layout.tiles.filter(t => t.side === side).map(t => t.y).sort((a,b)=>a-b);
      assert.ok(heights[0] <= -layout.metrics.unit);
      assert.ok(heights.at(-1) + layout.metrics.unit >= viewport.height);
    }
  }
});

test('on narrow screens the very same achievements collapse into a responsive grid', () => {
  for (const viewport of [{width:280,height:620},{width:390,height:844},{width:600,height:800},{width:800,height:1000}]) {
    const entries = makeEntries(19);
    const closed = layoutMosaic(entries, viewport, false);
    const opened = layoutMosaic(entries, viewport, true);
    const from = closed.tiles.filter(t => t.entry).map(t => t.id).sort();
    const to = opened.tiles.filter(t => t.entry).map(t => t.id).sort();
    assert.deepEqual(from, to);
    const positions = new Set();
    for (const tile of opened.tiles.filter(t => t.entry)) {
      assert.ok(tile.x >= -1e-6 && tile.x+tile.pixels <= viewport.width+1e-6);
      assert.ok(tile.y >= 78);
      const key = `${tile.x.toFixed(5)}:${tile.y.toFixed(5)}`;
      assert.ok(!positions.has(key), `overlapping tile at ${key}`);
      positions.add(key);
    }
    assert.ok(opened.contentHeight >= viewport.height);
    assert.ok(opened.tiles.filter(t=>t.decorative).every(t=>t.hidden));
  }
});

````

### `portfolio-scroll-easing-replacements.zip` → `tests/autoScroll.test.js`

````javascript
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  advanceAutoScroll, initialAutoScrollState, pauseAutoScroll, resumeAutoScroll,
  SCROLL_RESUME_DELAY_MS, SCROLL_SPEED_PX_PER_MS, REWIND_DURATION_MS,
  START_EASE_DURATION_MS, STOP_EASE_DURATION_MS,
} from '../src/lib/autoScroll.js';

function run(state, duration, max = 2000, step = 50) {
  let result = state;
  for (let elapsed = 0; elapsed < duration; elapsed += step) {
    result = advanceAutoScroll(result, Math.min(step, duration - elapsed), max);
  }
  return result;
}

test('preserves 2-second inactivity delay, scroll speed and rewind duration', () => {
  assert.equal(SCROLL_RESUME_DELAY_MS, 2000);
  assert.equal(REWIND_DURATION_MS, 2000);
  assert.ok(Math.abs(SCROLL_SPEED_PX_PER_MS - 0.019 * (4 / 3)) < 1e-12);
});

test('smoothly accelerates from rest without jumping to full speed', () => {
  let state = initialAutoScrollState();
  const velocities = [];
  for (let elapsed = 0; elapsed < START_EASE_DURATION_MS; elapsed += 50) {
    state = advanceAutoScroll(state, 50, 2000);
    velocities.push(state.velocity);
  }
  assert.ok(velocities[0] > 0);
  assert.ok(velocities[0] < 0.1 * SCROLL_SPEED_PX_PER_MS);
  for (let i = 1; i < velocities.length; i++) assert.ok(velocities[i] >= velocities[i - 1]);
  assert.ok(Math.abs(state.velocity - SCROLL_SPEED_PX_PER_MS) < 1e-9);
  assert.ok(state.position > 0);
  assert.ok(state.position < START_EASE_DURATION_MS * SCROLL_SPEED_PX_PER_MS);
});

test('hover/focus eases velocity down to a complete stop', () => {
  const running = run(initialAutoScrollState(), START_EASE_DURATION_MS + 500);
  let state = pauseAutoScroll(running, running.position, false);
  assert.equal(state.phase, 'stopping');
  const first = advanceAutoScroll(state, 50, 2000);
  assert.ok(first.position > state.position);
  assert.ok(first.velocity < running.velocity && first.velocity > 0);
  const rest = run(first, STOP_EASE_DURATION_MS - 50);
  assert.equal(rest.phase, 'paused');
  assert.equal(rest.velocity, 0);
  assert.ok(rest.position > running.position);
  assert.ok(Math.abs(run(rest, 500).position - rest.position) < 1e-10);
});

test('manual user input cancels scroll immediately and starts again gently', () => {
  const running = run(initialAutoScrollState(), 1200);
  const stopped = pauseAutoScroll(running, 400, true);
  assert.equal(stopped.position, 400);
  assert.equal(stopped.phase, 'paused');
  assert.equal(stopped.velocity, 0);
  const resumed = resumeAutoScroll(stopped);
  assert.equal(resumed.position, 400);
  const moved = advanceAutoScroll(resumed, 40, 2000);
  assert.ok(moved.position >= 400);
  assert.ok(moved.velocity < SCROLL_SPEED_PX_PER_MS * 0.1);
});

test('slowly brakes at bottom, then smoothly rewinds over 2 seconds', () => {
  let state = { ...initialAutoScrollState(1978),
    startElapsed: START_EASE_DURATION_MS, velocity: SCROLL_SPEED_PX_PER_MS };
  state = advanceAutoScroll(state, 50, 2000);
  assert.equal(state.phase, 'brake');
  const first = advanceAutoScroll(state, 50, 2000);
  assert.ok(first.velocity > 0 && first.velocity < SCROLL_SPEED_PX_PER_MS);
  let previousVelocity = first.velocity;
  state = first;
  for (let i = 0; i < 100 && state.phase === 'brake'; i++) {
    state = advanceAutoScroll(state, 50, 2000);
    assert.ok(state.velocity <= previousVelocity + 1e-10);
    previousVelocity = state.velocity;
  }
  assert.equal(state.phase, 'rewind');
  assert.equal(state.position, 2000);
  const midpoint = run(state, 1000, 2000);
  assert.ok(Math.abs(midpoint.position - 1000) < 1e-6);
  const finished = run(midpoint, 1000, 2000);
  assert.equal(finished.phase, 'down');
  assert.equal(finished.position, 0);
  assert.equal(finished.velocity, 0);
  assert.ok(advanceAutoScroll(finished, 50, 2000).position > 0);
});

test('short archives remain stationary and large frame deltas are clamped', () => {
  const short = advanceAutoScroll(initialAutoScrollState(), 100, 20);
  assert.equal(short.phase, 'paused');
  assert.equal(short.position, 0);
  const one = advanceAutoScroll(initialAutoScrollState(), 10000, 2000);
  const two = advanceAutoScroll(initialAutoScrollState(), 100, 2000);
  assert.deepEqual(one, two);
});

test('a pause during the rewind decelerates upward', () => {
  const running = advanceAutoScroll({ ...initialAutoScrollState(1000),
    phase: 'rewind', rewindFrom: 1000, rewindElapsed: 750 }, 50, 1000);
  assert.ok(running.velocity < 0);
  let state = pauseAutoScroll(running, running.position);
  assert.equal(state.phase, 'stopping');
  state = advanceAutoScroll(state, 50, 1000);
  assert.ok(state.position < running.position);
  state = run(state, STOP_EASE_DURATION_MS, 1000);
  assert.equal(state.phase, 'paused');
});

````

### `portfolio-scroll-easing-replacements.zip` → `tests/mobileScroll.test.js`

````javascript
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { layoutMosaic } from '../src/lib/mosaicLayout.js';
import { advanceAutoScroll, initialAutoScrollState, pauseAutoScroll, resumeAutoScroll } from '../src/lib/autoScroll.js';

const css = readFileSync(new URL('../src/styles/global.css', import.meta.url), 'utf8');
const mosaicComponent = readFileSync(new URL('../src/components/ArchiveMosaic.jsx', import.meta.url), 'utf8');

test('compact mosaics are vertically scrollable in both portfolio and archive modes', () => {
  assert.match(css, /\.mosaic-scroll--compact\s*\{[^}]*overflow-y:\s*auto/);
  assert.doesNotMatch(css, /\.mosaic-scroll--compact:not\(\.mosaic-scroll--archive\)\s*\{\s*overflow:\s*hidden/);
  for (const viewport of [{ width: 390, height: 844 }, { width: 820, height: 1180 }, { width: 844, height: 390 }]) {
    for (const archive of [false, true]) {
      const layout = layoutMosaic([], viewport, archive, 42);
      assert.equal(layout.metrics.compact, true);
      assert.ok(layout.contentHeight > viewport.height * 1.2, `scroll range at ${viewport.width}x${viewport.height}, archive=${archive}`);
      assert.ok(layout.tiles.length > 0);
    }
  }
});

test('fractional progress is accumulated across rounded iOS scrollTop values', () => {
  assert.match(mosaicComponent, /advanceAutoScroll\(scrollState\.current, delta, max\)/);
  let state = initialAutoScrollState();
  let browserScrollTop = 0;
  for (let i = 0; i < 300; i++) {
    state = advanceAutoScroll(state, 16, 300);
    if (Math.abs(browserScrollTop - state.position) >= 0.5) browserScrollTop = Math.round(state.position);
  }
  assert.ok(browserScrollTop > 100, 'autoscroll keeps moving even if the browser rounds scrollTop');
});

test('manual touch scrolling is reflected in resumed autoscroll position', () => {
  assert.match(mosaicComponent, /pauseAutoScroll\(scrollState\.current, element\.scrollTop, manual\)/);
  assert.match(mosaicComponent, /pauseAutoScroll\(scrollState\.current, element\.scrollTop, true\)/);
  const state = pauseAutoScroll(initialAutoScrollState(24), 193, true);
  assert.equal(state.position, 193);
  assert.equal(resumeAutoScroll(state).position, 193);
});

````

### `portfolio-scroll-easing-replacements.zip` → `src/components/ArchiveMosaic.jsx`

````jsx
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { layoutMosaic } from '../lib/mosaicLayout.js';
import { visibleMosaicTiles } from '../lib/visibleMosaicTiles.js';
import { advanceAutoScroll, initialAutoScrollState, pauseAutoScroll, resumeAutoScroll, SCROLL_RESUME_DELAY_MS } from '../lib/autoScroll.js';
import Icon from './Icons.jsx';
import { createAmbientBackground } from '../lib/ambientPattern.js';

// The artwork generator is costly when hundreds of SVG backgrounds are encoded.
// Generate once per tile identity, only when the tile enters the viewport.
const artworkCache = new Map();
function artworkFor(id) {
  if (!artworkCache.has(id)) {
    if (artworkCache.size > 900) artworkCache.delete(artworkCache.keys().next().value);
    artworkCache.set(id, createAmbientBackground(id));
  }
  return artworkCache.get(id);
}

const ArchiveTile = memo(function ArchiveTile({ tile, onOpen, lang }) {
  const { entry, pixels, x, y, decorative } = tile;
  const style = {
    '--tile-x': `${x}px`, '--tile-y': `${y}px`, '--tile-size': `${pixels}px`,
    '--tile-image': entry ? `url("${entry.image}")` : undefined,
    ...(decorative ? { '--ambient-art': artworkFor(tile.id) } : {}),
  };
  if (decorative) {
    return <div className="mosaic-tile mosaic-tile--ambient" style={style} aria-hidden="true" />;
  }
  const title = lang === 'ar' ? entry.titleAr || entry.title : entry.title;
  const category = lang === 'ar' ? entry.categoryAr || entry.category : entry.category;
  return (
    <button type="button"
      className={`mosaic-tile mosaic-tile--entry ${entry.sample ? 'mosaic-tile--sample' : ''} ${tile.compact ? 'mosaic-tile--responsive' : tile.size === 1 ? 'mosaic-tile--tiny' : ''}`}
      style={style} onClick={event => onOpen(entry, event.currentTarget)}
      data-side={tile.side} data-entry-id={entry.id} title={title}
      aria-label={`${title}${entry.sample ? ' — sample' : ''}`}>
      <span className="tile-visual" aria-hidden="true" />
      <span className="tile-content">
        <span className="tile-category">{entry.sample ? '◇ ' : '✦ '}{category}</span>
        <span className="tile-title">{title}</span>
        <span className="tile-corner"><Icon name="upRight" size={14}/></span>
      </span>
    </button>
  );
});

export default function ArchiveMosaic({ entries, viewport, archive, lang, onOpen, layoutSeed = 1 }) {
  const scrollRef = useRef(null);
  const pauseUntil = useRef(0);
  const lastTime = useRef(0);
  const scrollState = useRef(initialAutoScrollState());
  const lastWrittenPosition = useRef(0);
  const [viewTop, setViewTop] = useState(0);
  const layout = useMemo(() => layoutMosaic(entries, viewport, archive, layoutSeed), [entries, viewport.width, viewport.height, archive, layoutSeed]);
  const viewportHeight = viewport.height;

  const syncWindow = useCallback((force = false) => {
    const top = scrollRef.current?.scrollTop ?? 0;
    // Recalculate the visible set only after crossing a 120px bucket.
    const bucket = Math.floor(top / 120) * 120;
    setViewTop(previous => force || previous !== bucket ? bucket : previous);
  }, []);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;
    element.scrollTop = 0;
    syncWindow(true);
    lastTime.current = 0;
    scrollState.current = pauseAutoScroll(initialAutoScrollState(), 0, true);
    lastWrittenPosition.current = 0;
    pauseUntil.current = performance.now() + SCROLL_RESUME_DELAY_MS;
  }, [archive, layout.metrics.compact, syncWindow]);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    // Hover/focus ease the current velocity down. Direct scrolling/touch
    // takes control immediately, so our animation never fights the gesture.
    const pause = event => {
      pauseUntil.current = performance.now() + SCROLL_RESUME_DELAY_MS;
      const manual = ['wheel', 'touchstart', 'pointerdown'].includes(event?.type);
      scrollState.current = pauseAutoScroll(scrollState.current, element.scrollTop, manual);
      if (manual) lastWrittenPosition.current = element.scrollTop;
    };
    const scroll = () => {
      // iOS can continue a touch gesture via momentum scroll after touchend.
      // Re-sync that position without replacing auto-generated subpixel offsets.
      if (performance.now() < pauseUntil.current &&
          Math.abs(element.scrollTop - lastWrittenPosition.current) > 1) {
        scrollState.current = pauseAutoScroll(scrollState.current, element.scrollTop, true);
        lastWrittenPosition.current = element.scrollTop;
      }
      syncWindow();
    };
    const hoverEntry = event => {
      if (event.target.closest?.('.mosaic-tile--entry')) pause(event);
    };
    element.addEventListener('wheel', pause, { passive: true });
    element.addEventListener('touchstart', pause, { passive: true });
    element.addEventListener('pointerdown', pause, { passive: true });
    element.addEventListener('pointerover', hoverEntry, { passive: true });
    element.addEventListener('focusin', pause);
    element.addEventListener('scroll', scroll, { passive: true });
    // Animate only the scroll position. React updates the visible-tile set
    // in 120px buckets, not on every requestAnimationFrame callback.
    let frame = 0;
    const tick = time => {
      const delta = lastTime.current ? Math.min(time - lastTime.current, 100) : 0;
      lastTime.current = time;
      if (!document.hidden && !reduce.matches) {
        const max = element.scrollHeight - element.clientHeight;
        if (max > 40) {
          if (time >= pauseUntil.current && scrollState.current.phase === 'paused') {
            scrollState.current = resumeAutoScroll(scrollState.current);
          }
          const next = advanceAutoScroll(scrollState.current, delta, max);
          scrollState.current = next;
          if (Math.abs(element.scrollTop - next.position) >= 0.5) {
            // Keep fractional progress in state rather than rereading rounded
            // scrollTop values (important for mobile Safari).
            lastWrittenPosition.current = next.position;
            element.scrollTop = next.position;
          }
        }
      }
      frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(frame);
      element.removeEventListener('wheel', pause);
      element.removeEventListener('touchstart', pause);
      element.removeEventListener('pointerdown', pause);
      element.removeEventListener('pointerover', hoverEntry);
      element.removeEventListener('focusin', pause);
      element.removeEventListener('scroll', scroll);
    };
  }, [syncWindow]);

  const visible = useMemo(() => visibleMosaicTiles(layout.tiles, viewTop, viewportHeight), [layout.tiles, viewTop, viewportHeight]);
  return (
    <div ref={scrollRef}
      className={`mosaic-scroll ${archive ? 'mosaic-scroll--archive' : ''} ${layout.metrics.compact ? 'mosaic-scroll--compact' : ''}`}
      aria-label="Interactive archive collage">
      <div className="mosaic-plane" style={{ height: `${layout.contentHeight}px` }}>
        {visible.map(tile => <ArchiveTile key={tile.id} tile={tile} onOpen={onOpen} lang={lang} />)}
      </div>
    </div>
  );
}

````

### `portfolio-scroll-easing-replacements.zip` → `src/lib/autoScroll.js`

````javascript
/**
 * A frame-rate-independent auto-scroll state machine.
 * Speed eases in from rest, eases out before the bottom, and eases out when
 * a non-manual interaction pauses it. Direct scrolling cancels immediately
 * so animation never fights a user's finger, wheel or scrollbar.
 */
export const SCROLL_RESUME_DELAY_MS = 2000;
export const SCROLL_SPEED_PX_PER_MS = 0.019 * (4 / 3);
export const REWIND_DURATION_MS = 2000;
export const START_EASE_DURATION_MS = 900;
export const STOP_EASE_DURATION_MS = 650;
export const END_EASE_DISTANCE_PX = 24;

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const smoothstep = t => t * t * (3 - 2 * t);
const smootherstep = t => t * t * t * (t * (t * 6 - 15) + 10);

export function initialAutoScrollState(position = 0) {
  return {
    position,
    phase: 'down',
    startElapsed: 0,
    velocity: 0,
    rewindFrom: 0,
    rewindElapsed: 0,
  };
}

/**
 * Request a stop at the current visible position. Use immediate=true for
 * user-initiated scrolling; otherwise, coast to rest in 650 ms.
 */
export function pauseAutoScroll(state, position = state.position, immediate = false) {
  const p = Math.max(0, position);
  if (immediate || state.phase === 'paused' || Math.abs(state.velocity || 0) < 1e-7) {
    return { ...state, phase: 'paused', position: p, velocity: 0 };
  }
  if (state.phase === 'stopping') return state;
  return {
    ...state,
    phase: 'stopping',
    position: p,
    stopFrom: p,
    stopElapsed: 0,
    stopVelocity: state.velocity,
  };
}

/** Resume at zero speed from where the user left the archive. */
export function resumeAutoScroll(state) {
  if (state.phase !== 'paused') return state;
  return {
    ...initialAutoScrollState(state.position),
  };
}

export function advanceAutoScroll(state, elapsedMs, maximum) {
  const max = Math.max(0, maximum);
  const delta = clamp(Number.isFinite(elapsedMs) ? elapsedMs : 0, 0, 100);
  const position = clamp(state.position, 0, max);

  if (max <= 40) return { ...initialAutoScrollState(position), phase: 'paused' };
  if (state.phase === 'paused') return { ...state, position, velocity: 0 };

  if (state.phase === 'stopping') {
    const elapsed = Math.min(STOP_EASE_DURATION_MS, (state.stopElapsed || 0) + delta);
    const t = elapsed / STOP_EASE_DURATION_MS;
    // A continuous velocity v(t) = v0 * (1 - t) gives a graceful stop.
    const displacement = (state.stopVelocity || 0) * STOP_EASE_DURATION_MS * (t - 0.5 * t * t);
    const next = clamp(state.stopFrom + displacement, 0, max);
    if (t >= 1 || (next === max && (state.stopVelocity || 0) > 0)) {
      return { ...state, phase: 'paused', position: next, velocity: 0, stopElapsed: elapsed };
    }
    return { ...state, position: next, stopElapsed: elapsed,
      velocity: (state.stopVelocity || 0) * (1 - t) };
  }

  if (state.phase === 'rewind') {
    const elapsed = Math.min(REWIND_DURATION_MS, state.rewindElapsed + delta);
    const t = elapsed / REWIND_DURATION_MS;
    if (t >= 1) return initialAutoScrollState(0);
    const next = clamp(state.rewindFrom * (1 - smootherstep(t)), 0, max);
    // Derivative of smootherstep, used if a hover interrupts the rewind.
    const speed = -state.rewindFrom * (30 * t * t * (1 - t) * (1 - t)) / REWIND_DURATION_MS;
    return { ...state, position: next, rewindElapsed: elapsed, velocity: speed };
  }

  if (state.phase === 'brake') {
    const elapsed = Math.min(state.brakeDuration, state.brakeElapsed + delta);
    const t = elapsed / state.brakeDuration;
    if (t >= 1) {
      return { ...state, position: max, phase: 'rewind', velocity: 0,
        rewindFrom: max, rewindElapsed: 0 };
    }
    // Ease-out quadratic with initial slope matching the cruise velocity.
    const next = state.brakeFrom + state.brakeDistance * (2 * t - t * t);
    const speed = (2 * state.brakeDistance / state.brakeDuration) * (1 - t);
    return { ...state, position: clamp(next, 0, max), brakeElapsed: elapsed, velocity: speed };
  }

  // Moving downward: increase velocity smoothly from zero to cruise speed.
  const previousElapsed = state.startElapsed ?? 0;
  const nextElapsed = Math.min(START_EASE_DURATION_MS, previousElapsed + delta);
  const before = smoothstep(previousElapsed / START_EASE_DURATION_MS);
  const after = smoothstep(nextElapsed / START_EASE_DURATION_MS);
  // Trapezoidal integration keeps motion similar across refresh rates.
  const traveled = delta * SCROLL_SPEED_PX_PER_MS * (before + after) / 2;
  const next = clamp(position + traveled, 0, max);
  const speed = after * SCROLL_SPEED_PX_PER_MS;
  const remaining = max - next;
  if (remaining <= END_EASE_DISTANCE_PX && speed > 0.0001) {
    // Distance = velocity * duration / 2 for a linear ease to zero.
    const duration = Math.max(280, 2 * remaining / speed);
    return { ...state, position: next, phase: 'brake', velocity: speed,
      startElapsed: nextElapsed, brakeFrom: next, brakeDistance: remaining,
      brakeElapsed: 0, brakeDuration: duration };
  }
  return { ...state, position: next, startElapsed: nextElapsed, velocity: speed };
}

````

### `portfolio-unique-patterns-replacements.zip` → `src/lib/ambientPattern.js`

````javascript
/**
 * Deterministic, tile-specific decorative geometry.
 * The tile ID is a stable seed, so a square keeps its artwork when it moves.
 * Every distinct ID gets distinct phases, offsets and spacings; the pattern
 * family varies as well, without any runtime randomness or image requests.
 */
function hashId(id) {
  let h = 2166136261;
  for (const char of String(id)) {
    h ^= char.charCodeAt(0);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function randomFrom(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6D2B79F5) >>> 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const f = number => Number(number.toFixed(2));

export function createAmbientSvg(id) {
  const seed = hashId(id);
  const rand = randomFrom(seed);
  const family = seed % 6;
  const cx = f(28 + 44 * rand());
  const cy = f(28 + 44 * rand());
  const angle = f(-37 + 74 * rand());
  const pitch = 7 + Math.floor(rand() * 11);
  const stroke = ['#b9c4bc', '#c1b0ad', '#afbdce', '#c9bd9f'][seed % 4];
  const accent = ['#d2bea2', '#9dbdb7', '#b6accd', '#bcc4a5'][(seed >>> 3) % 4];
  let geometry = '';

  if (family === 0) {
    // Parallel paths: individually rotated, translated, and phase-shifted.
    for (let j = -6; j <= 8; j++) {
      const x = f(j * pitch + (seed % pitch));
      geometry += `<path d="M ${x} -15 L ${f(x + 34 + rand() * 20)} 115" />`;
    }
  } else if (family === 1) {
    // Off-center concentric elliptical orbits.
    for (let j = 0; j < 5; j++) {
      const rx = f(9 + j * (6 + rand() * 2));
      const ry = f(rx * (0.55 + rand() * 0.8));
      geometry += `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" />`;
    }
    geometry += `<circle cx="${cx}" cy="${cy}" r="${f(2 + 4 * rand())}" fill="${accent}" stroke="none" opacity=".55" />`;
  } else if (family === 2) {
    // Noisy sine curves, with tile-dependent phase, frequency, and amplitude.
    const period = 17 + 18 * rand();
    const phase = rand() * Math.PI * 2;
    const amp = 4 + 10 * rand();
    for (let j = 0; j < 8; j++) {
      let d = '';
      for (let x = -8; x <= 108; x += 4) {
        const y = 8 + j * pitch + Math.sin(x / period + phase + j * .34) * amp;
        d += `${x === -8 ? 'M' : 'L'} ${x} ${f(y)} `;
      }
      geometry += `<path d="${d}" />`;
    }
  } else if (family === 3) {
    // Offset nested quadrilaterals; corners stay sharp.
    const ratio = .65 + .7 * rand();
    for (let j = 0; j < 5; j++) {
      const r = 8 + j * (5 + 2 * rand());
      geometry += `<rect x="${f(cx - r)}" y="${f(cy - r * ratio)}" width="${f(r * 2)}" height="${f(2 * r * ratio)}" />`;
    }
  } else if (family === 4) {
    // Off-axis radiating rays, unique origin and angular offset.
    const phase = rand() * Math.PI * 2;
    const count = 9 + Math.floor(rand() * 9);
    for (let j = 0; j < count; j++) {
      const theta = phase + (j / count) * Math.PI * 2;
      const x = f(cx + Math.cos(theta) * 115);
      const y = f(cy + Math.sin(theta) * 115);
      geometry += `<path d="M ${cx} ${cy} L ${x} ${y}" />`;
    }
    geometry += `<circle cx="${cx}" cy="${cy}" r="${f(5 + 5 * rand())}" />`;
  } else {
    // Alternating stepped paths with independent offsets per square.
    const offset = f(7 + rand() * 16);
    const step = 9 + Math.floor(rand() * 9);
    for (let j = -1; j < 8; j++) {
      const y = f(j * (step + 4) + offset);
      geometry += `<path d="M -10 ${y} H ${f(cx)} V ${f(y + step / 2)} H 110" />`;
    }
  }

  // Every tile additionally has a distinct circular trace, offset and index.
  // The index also ensures tiles in the same pattern family never look identical.
  const traceX = f(14 + rand() * 72);
  const traceY = f(14 + rand() * 72);
  const radius = f(3 + rand() * 13);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice"><g stroke="${stroke}" stroke-width=".65" fill="none" opacity=".32" transform="rotate(${angle} 50 50)">${geometry}</g><circle cx="${traceX}" cy="${traceY}" r="${radius}" stroke="${accent}" stroke-width=".8" fill="none" opacity=".26" /></svg>`;
}

export function createAmbientBackground(id) {
  return `url("data:image/svg+xml,${encodeURIComponent(createAmbientSvg(id))}")`;
}

````

### `portfolio-unique-patterns-replacements.zip` → `src/styles/global.css`

````css
:root {
  font-family: 'DM Sans', 'Segoe UI', Arial, sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  --world: #161b20;
  --world-grid: rgba(239, 229, 211, .035);
  --paper: #f0ede6;
  --paper-soft: #e7e1d7;
  --ink: #232823;
  --muted: #78786f;
  --lede-color: #6b7169;
  --paper-line: #cbc7bc;
  --accent: #777157;
  --tile-outline: rgba(246, 238, 219, .64);
  --tile-tone-0: #263d3e;
  --tile-tone-1: #59483c;
  --tile-tone-2: #35495a;
  --tile-tone-3: #565042;
  --tile-tone-4: #493d48;
  --tile-tone-5: #434c44;
}
:root[data-theme="dark"] {
  --world: #090e14;
  --world-grid: rgba(226, 234, 244, .035);
  --paper: #21272b;
  --paper-soft: #2b3236;
  --ink: #eeeae1;
  --muted: #a2aaa6;
  --lede-color: #909995;
  --paper-line: #47504f;
  --accent: #d1b99a;
  --tile-outline: rgba(233, 239, 239, .48);
}
* { box-sizing: border-box; }
html, body, #root { min-width: 280px; min-height: 100%; margin: 0; }
html { overflow: hidden; }
body { background: var(--world); color: var(--ink); }
button, a { -webkit-tap-highlight-color: transparent; }
button { font: inherit; }
button:focus-visible, a:focus-visible { outline: 2px solid #89adc1; outline-offset: 3px; }
a { color: inherit; }
.site-shell { width: 100%; min-height: 100svh; isolation: isolate; background: var(--world); overflow: hidden; }
.site-grain { pointer-events: none; position: fixed; inset: 0; z-index: 5; opacity: .3; background-image: repeating-linear-gradient(90deg,transparent 0, transparent 31px, var(--world-grid) 32px), repeating-linear-gradient(0deg,transparent 0, transparent 31px, var(--world-grid) 32px); }
/* The mosaic remains scrollable under the independently scrolling portfolio. */
.mosaic-scroll { position: fixed; inset: 0; overflow-y: auto; overflow-x: hidden; overscroll-behavior: contain; scrollbar-width: none; background: var(--world); }
.mosaic-scroll::-webkit-scrollbar, .portfolio-panel::-webkit-scrollbar { display: none; }
.mosaic-plane { position: relative; width: 100%; min-height: 100%; }
.mosaic-tile { appearance: none; position: absolute; top: 0; left: 0; padding: 0; margin: 0; width: var(--tile-size); height: var(--tile-size); display: block; overflow: hidden; border-radius: 0; border: 1px solid var(--tile-outline); transform: translate3d(var(--tile-x), var(--tile-y), 0); transition: transform .82s cubic-bezier(.23,.87,.24,1), width .82s cubic-bezier(.23,.87,.24,1), height .82s cubic-bezier(.23,.87,.24,1), border-color .22s ease, opacity .3s ease; will-change: transform; background: var(--tile-tone); }
.mosaic-tile--entry { cursor: pointer; text-align: left; color: #faf7f0; z-index: 1; }
.mosaic-tile--entry:hover, .mosaic-tile--entry:focus-visible { z-index: 3; border-color: #f9e5c9; }
.tile-visual { position: absolute; inset: 0; display: block; background-image: var(--tile-image); background-position: center; background-size: cover; transform: scale(1.005); transition: transform .4s cubic-bezier(.2,.75,.2,1), filter .25s; filter: saturate(.76) brightness(.86); }
.tile-visual::after { content: ''; position: absolute; inset: 0; background: linear-gradient(0deg, rgba(5,11,16,.87),rgba(5,11,16,.06) 70%); }
.mosaic-tile--entry:hover .tile-visual, .mosaic-tile--entry:focus-visible .tile-visual { transform: scale(1.085); filter: saturate(1) brightness(1.06); }
.tile-content { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end; padding: clamp(8px, 1.35vw, 20px); text-shadow: 0 1px 12px #06090fb0; }
.tile-category { display: block; font-size: clamp(7px, .65vw, 10px); letter-spacing: .13em; line-height: 1.2; text-transform: uppercase; font-weight: 600; opacity: .78; margin-bottom: 7px; }
.tile-title { font: normal clamp(13px, 1.55vw, 25px)/1.06 'Instrument Serif', Georgia, serif; max-width: 95%; }
.tile-corner { position: absolute; top: 10px; right: 9px; opacity: 0; transform: translate(-3px,3px); transition: opacity .2s, transform .2s; }
.mosaic-tile:hover .tile-corner, .mosaic-tile:focus-visible .tile-corner { opacity: 1; transform: none; }
.mosaic-tile--sample .tile-category { color: #e8d7b7; }
.mosaic-tile--tiny .tile-content { padding: 5px; }
.mosaic-tile--tiny .tile-title, .mosaic-tile--tiny .tile-category { font: 8px/1.2 'DM Mono', monospace; letter-spacing: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.mosaic-tile--tiny .tile-category { display: none; }
.mosaic-tile--ambient { border-color: rgba(240, 231, 214, .23); pointer-events: none; }
.mosaic-tile--ambient::after { content: ''; position: absolute; inset: 0; background: linear-gradient(140deg, rgba(255,255,255,.12),transparent 55%,rgba(0,0,0,.28)); }
.mosaic-tile--ambient {
  background-color: var(--tile-tone);
  background-image: var(--ambient-art), linear-gradient(135deg, rgba(255,255,255,.055), rgba(0,0,0,.22));
  background-position: center;
  background-size: cover;
}
.ambient-mark { display: none; }
.panel-shadow { position: fixed; z-index: 6; top: 0; bottom: 0; left: 50%; transform: translateX(-50%); width: var(--panel-width, min(600px,max(468px,43vw))); box-shadow: 0 25px 95px #05080da8,0 0 0 1px rgba(255,255,255,.1); pointer-events: none; transition: opacity .4s, transform .6s; }
.site-shell--archive .panel-shadow { opacity: 0; transform: translateX(-50%) translateY(50px) scale(.94); }
.portfolio-panel { position: fixed; z-index: 7; top: 0; bottom: 0; left: 50%; transform: translateX(-50%); width: var(--panel-width, min(600px,max(468px,43vw))); overflow-y: auto; overscroll-behavior: contain; scrollbar-width: none; padding: 27px clamp(25px,3.1vw,49px) 16px; background: var(--paper); color: var(--ink); border: 1px solid var(--paper-line); box-shadow: 0 0 0 1px rgba(0,0,0,.06); transition: transform .63s cubic-bezier(.25,.72,.15,1), opacity .45s ease; }
.portfolio-panel--hidden { opacity: 0; transform: translateX(-50%) translateY(72px) scale(.9); pointer-events: none; }
.panel-heading { display:flex; align-items:center; justify-content:space-between; gap:10px; padding-bottom: 27px; border-bottom:1px solid var(--paper-line); }
.panel-monogram { border:0; background:transparent; color:var(--ink); padding:0; font:bold 27px 'Instrument Serif',Georgia,serif; cursor:pointer; }
.panel-monogram span { color: var(--accent); }
.panel-label,.panel-index,.micro-label,.number-label,.panel-footer,.portrait-credit,.source-disclosure { font: 500 9px/1.3 'DM Mono',monospace; letter-spacing:.12em; }
.panel-label { color:var(--muted); }
.tiny-asterisk { color: var(--accent); font-size: 16px; vertical-align:-2px; }
.panel-index { color:var(--muted); }
.intro-section { padding-top: 49px; }
.micro-label,.number-label { display:block; color:var(--muted); }
.hero-intro { display:flex; align-items:flex-end; gap:18px; margin-top:27px; }
.hero-copy { min-width:0; flex:1; }
.hero-greeting { font:italic 26px 'Instrument Serif',Georgia,serif; }
.hero-copy h1 { margin:10px 0 0; font:normal clamp(34px,3.65vw,52px)/1.02 'Instrument Serif',Georgia,serif; letter-spacing:-.035em; white-space:normal; }
.hero-copy h1 em, .editorial-block h2 em,.view-title em { font-weight:400; color:var(--accent); }
.hero-rule { width:45px; height:1px; background:var(--accent); margin:18px 0; }
.hero-role { font-size:11px; font-weight:700; letter-spacing:.09em; text-transform:uppercase; margin:0 0 8px; }
.hero-description { font-size:12px; line-height:1.7; color:var(--muted); margin:0; }
.portrait-frame { width: 32%; flex:none; aspect-ratio: .77; display:flex; flex-direction:column; align-self:center; position:relative; }
.portrait-frame img { display:block; width:100%; height:100%; object-fit:cover; object-position:center 34%; filter:saturate(.72); border:1px solid var(--paper-line); }
.portrait-credit { position:absolute; bottom:-17px; left:0; color:var(--muted); white-space:nowrap; font-size:7px; }
.hero-actions { display:flex; flex-wrap:wrap; gap:9px; margin-top:39px; }
.pill-link { text-decoration:none; display:inline-flex; align-items:center; justify-content:center; gap:12px; border:1px solid var(--ink); border-radius:100px; padding:11px 14px; font-size:11px; font-weight:600; cursor:pointer; transition:transform .18s,background .18s,color .18s; }
.pill-link:hover { transform:translateY(-2px); }
.pill-link:active { transform:scale(.96); }
.pill-link--dark { background:var(--ink); color:var(--paper); }
.pill-link--outline { background:transparent; color:var(--ink); }
.pill-link--outline:hover { background:var(--paper-soft); }
.editorial-block { margin-top:66px; padding-top:23px; border-top:1px solid var(--paper-line); }
.section-heading { display:flex; align-items:center; justify-content:space-between; gap:10px; }
.section-star { color:var(--accent); }
.editorial-block h2 { margin:22px 0 20px; font:normal clamp(38px,4vw,56px)/.97 'Instrument Serif',Georgia,serif; letter-spacing:-.02em; }
.editorial-block p,.body-copy { color:var(--muted); font-size:13px; line-height:1.85; letter-spacing:.018em; max-width:52ch; }
.ink-divider { width:100%; height:1px; background:var(--paper-line); margin:27px 0 22px; }
.feature-links { margin-top:13px; }
.feature-link { display:flex; justify-content:space-between; align-items:center; gap:12px; width:100%; padding:13px 0; background:none; color:var(--ink); border:0; border-bottom:1px solid var(--paper-line); text-align:start; cursor:pointer; font:normal 20px/1.2 'Instrument Serif',Georgia,serif; }
.feature-link:hover { color:var(--accent); }
.feature-number { font:9px 'DM Mono',monospace; color:var(--muted); margin-inline-end:auto; min-width:28px; }
.feature-link > svg:last-child { margin-inline-start:auto; }
.editorial-block--bottom { padding-bottom:40px; }
.inline-arrow { display:inline-flex;align-items:center;gap:9px;padding:0;border:0;background:none;color:var(--ink);font-size:12px;font-weight:600;text-decoration:none;cursor:pointer; }
.inline-arrow:hover { color:var(--accent); }
.inner-view { padding-top:51px; min-height:65%; }
.view-title { font:normal clamp(44px,5vw,72px)/.97 'Instrument Serif',Georgia,serif; letter-spacing:-.025em; margin:23px 0 19px; }
.view-lede { max-width:45ch; color:var(--lede-color); font-size:clamp(16px,1.4vw,18px); font-weight:400; line-height:1.66; letter-spacing:.012em; margin:0 0 39px; }
.project-list { border-top:1px solid var(--paper-line); }
.project-row { width:100%; padding:17px 0; display:flex; align-items:center; gap:12px; border:0; border-bottom:1px solid var(--paper-line); background:none; text-align:start; color:var(--ink); cursor:pointer; }
.project-row:hover .project-row-description strong { color:var(--accent); }
.project-row img { width:68px;height:68px;object-fit:cover;border:1px solid var(--paper-line); }
.project-row-number { font:9px 'DM Mono',monospace;color:var(--muted); }
.project-row-description { flex:1; min-width:0;display:flex;flex-direction:column;gap:7px; }
.project-row-description strong { font:normal 24px 'Instrument Serif',Georgia,serif; }
.project-row-description small { color:var(--muted);font:9px 'DM Mono',monospace; }
.source-disclosure { margin:24px 0;line-height:1.7;color:var(--muted);letter-spacing:0; }
.editorial-illustration,.entry-hero-image { display:block;width:100%;aspect-ratio:1.55;object-fit:cover;border:1px solid var(--paper-line); }
.subheading { font:normal 33px 'Instrument Serif',Georgia,serif;margin:34px 0 12px; }
.contact-options { display:grid; gap:10px; margin:38px 0 25px; }
.fine-print { color:var(--muted);font-size:11px;line-height:1.7; }
.sample-alert { margin-top:18px; padding:10px 12px; background:var(--paper-soft);border-left:2px solid var(--accent);font-size:10px;font-weight:700;letter-spacing:.06em; }
.entry-view .view-title { overflow-wrap:anywhere; }
.entry-figure { margin:0 0 22px; }
.entry-caption { margin-top:17px; font-size:10px; letter-spacing:.16em; line-height:1.5; }
.entry-links,.writing-resource-list { display:grid; gap:10px; margin:27px 0 24px; }
.resource-link { width:100%; min-height:66px; display:flex; align-items:center; justify-content:space-between; gap:14px; padding:15px 16px 15px 18px; background:transparent; color:var(--ink); border:1px solid var(--paper-line); border-radius:2px; text-decoration:none; text-align:start; cursor:pointer; font:600 clamp(14px,1.25vw,17px)/1.4 'DM Sans','Segoe UI',Arial,sans-serif; letter-spacing:.018em; transition:background .2s,border-color .2s,transform .2s; }
.resource-link:hover { background:var(--paper-soft); border-color:var(--accent); transform:translateY(-2px); }
.resource-link:active { transform:translateY(0); }
.resource-link-icon { width:36px; height:36px; flex:none; display:grid; place-items:center; border:1px solid var(--paper-line); border-radius:2px; transition:transform .2s,border-color .2s; }
.resource-link:hover .resource-link-icon, .resource-link:focus-visible .resource-link-icon { transform:translate(2px,-2px); border-color:var(--accent); }
[dir="rtl"] .resource-link:hover .resource-link-icon, [dir="rtl"] .resource-link:focus-visible .resource-link-icon { transform:translate(-2px,-2px); }
.entry-view .pill-link { margin-top:28px; }
.panel-footer { margin-top:58px; padding:20px 0 26px; border-top:1px solid var(--paper-line);display:flex;justify-content:space-between;gap:15px;color:var(--muted);font-size:8px;letter-spacing:.02em; }
/* The toolbar is transparent: the collage always extends behind it. */
.floating-controls { position:fixed;z-index:45;top:24px;right:26px;display:flex;align-items:center;gap:14px;pointer-events:none; }
.orb-button { width:46px;height:46px;display:grid;place-items:center;position:relative;pointer-events:auto; border-radius:50%; border:1px solid rgba(237,237,231,.58);color:#f6f1e7;background:rgba(23,29,35,.68);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);cursor:pointer;box-shadow:0 3px 17px rgba(0,0,0,.22);transition:transform .2s cubic-bezier(.2,.8,.2,1),background .2s,border-color .2s,box-shadow .2s; }
.orb-button:hover { transform:scale(1.1);background:rgba(58,68,74,.9);border-color:#f5ead7;box-shadow:0 4px 24px rgba(0,0,0,.35); }
.orb-button:active { transform:scale(.92); }
.orb-button.is-active { background:#e8e0d1;color:#1c2529;border-color:#fff8ea; }
.language-button span:first-child { font:500 12px 'DM Mono',monospace; }
.orb-tooltip { position:absolute;right:50%;top:calc(100% + 10px);transform:translate(50%,-4px);white-space:nowrap;max-width:190px;pointer-events:none;opacity:0;border-radius:4px;background:#f2eadf;color:#252626;font-size:10px;padding:6px 9px;transition:opacity .2s,transform .2s; }
.orb-button:hover .orb-tooltip,.orb-button:focus-visible .orb-tooltip { opacity:1;transform:translate(50%,0); }
.archive-demo-dock { position:fixed;z-index:46;left:24px;bottom:24px;max-width:calc(100% - 48px);display:flex;gap:18px;align-items:center;padding:12px 13px 12px 16px;color:#e8e6df;background:rgba(17,23,29,.9);border:1px solid rgba(248,244,231,.35);backdrop-filter:blur(16px);box-shadow:0 10px 40px #0007; }
.dock-copy { display:flex;flex-direction:column;gap:5px;font-size:10px;color:#d3d4d0; }
.dock-kicker { letter-spacing:.1em;font-size:9px;text-transform:uppercase;font-weight:700;color:#eae9e4; }
.dock-hint { color:#aab3b4; }
.dock-actions { display:flex;gap:6px; }
.dock-actions button { width:48px;height:34px;display:flex;align-items:center;justify-content:center;gap:2px;border:1px solid #ffffff60;background:#ffffff0e;color:#faf7f0;cursor:pointer; }
.dock-actions button:hover { background:#ffffff2b; }
.dock-actions button:disabled { opacity:.3;cursor:default; }
.dock-actions button span { font-size:11px; }
.transition-layer { position:fixed;z-index:90;inset:0;pointer-events:none;overflow:hidden; }
.transition-image { position:fixed;left:var(--origin-x);top:var(--origin-y);width:var(--origin-width);height:var(--origin-height);background-image:linear-gradient(0deg,rgba(8,13,17,.55),rgba(8,13,17,.26)),var(--transition-image);background-position:center;background-size:cover;box-shadow:0 0 0 2px #f2e5d0;transition:left .42s cubic-bezier(.2,.74,.12,1),top .42s cubic-bezier(.2,.74,.12,1),width .42s cubic-bezier(.2,.74,.12,1),height .42s cubic-bezier(.2,.74,.12,1),opacity .32s;display:grid;place-items:center; }
.transition-title { opacity:0;color:#f5ede3;font:normal clamp(34px,6vw,84px) 'Instrument Serif',Georgia,serif;letter-spacing:-.04em;text-align:center;transition:opacity .18s .18s; }
.transition-layer--zoom .transition-image,.transition-layer--reveal .transition-image { left:-3vw;top:-3vh;width:106vw;height:106vh; }
.transition-layer--zoom .transition-title { opacity:1; }
.transition-layer--reveal { opacity:0;transition:opacity .30s ease; }
.transition-wash { position:absolute;inset:0;background:#efe7d8;opacity:0;transition:opacity .35s ease; }
.transition-layer--zoom .transition-wash { opacity:.1; }
/* Narrow screens retain a readable paper column and two square-only side streams.
   The same achievement buttons join a grid when Archive Mode opens. */
.mosaic-scroll--compact:not(.mosaic-scroll--archive) { overflow: hidden; }
.mosaic-scroll--compact:not(.mosaic-scroll--archive) .mosaic-tile[data-side="left"] {
  animation: mosaic-stream-left 27s ease-in-out infinite alternate;
}
.mosaic-scroll--compact:not(.mosaic-scroll--archive) .mosaic-tile[data-side="right"] {
  animation: mosaic-stream-right 31s ease-in-out infinite alternate;
}
@keyframes mosaic-stream-left { from { translate: 0 0; } to { translate: 0 var(--stream-negative); } }
@keyframes mosaic-stream-right { from { translate: 0 0; } to { translate: 0 var(--stream-positive); } }
.mosaic-scroll--compact.mosaic-scroll--archive { overflow-y: auto; overflow-x: hidden; }
.mosaic-scroll--archive .mosaic-tile--concealed { opacity: 0; pointer-events: none; }
.mosaic-scroll--compact .mosaic-tile--responsive .tile-title {
  font: normal clamp(15px, 2.5vw, 26px)/1.1 'Instrument Serif', Georgia, serif;
  white-space: normal;
}
.mosaic-scroll--compact .mosaic-tile--responsive .tile-category { font-size: 9px; }
.mosaic-scroll--compact:not(.mosaic-scroll--archive) .tile-content { opacity: .65; }
.mosaic-scroll--compact.mosaic-scroll--archive .tile-content { padding: clamp(10px, 2.3vw, 18px); }
.site-shell--compact .portfolio-panel,
.site-shell--compact .panel-shadow { top: 0; bottom: 0; }
.site-shell--compact .portfolio-panel {
  padding: max(76px, calc(env(safe-area-inset-top, 0px) + 63px)) clamp(17px, 3vw, 30px) 18px;
}
.site-shell--compact .floating-controls {
  top: max(12px, env(safe-area-inset-top, 0px));
  right: max(12px, env(safe-area-inset-right, 0px));
  gap: 10px;
}
.site-shell--compact .orb-button { width: 44px; height: 44px; }
.site-shell--compact .orb-tooltip { display: none; }
.site-shell--compact .archive-demo-dock {
  left: max(10px, env(safe-area-inset-left, 0px));
  bottom: max(10px, env(safe-area-inset-bottom, 0px));
  max-width: calc(100% - 20px);
}
@media (max-width: 1100px) { .panel-label { font-size:8px; } .portrait-frame { width:30%; } }
@media (max-width: 720px) {
  .portfolio-panel,.panel-shadow { top:0;bottom:0; }
  .portfolio-panel { padding: max(76px, calc(env(safe-area-inset-top, 0px) + 63px)) 23px 15px; }
  .panel-heading { padding-bottom:18px; }
  .floating-controls { top:max(12px, env(safe-area-inset-top, 0px));right:max(12px, env(safe-area-inset-right, 0px));gap:10px; }
  .orb-button { width:44px;height:44px; }
  .intro-section { padding-top:33px; }
  .hero-intro { gap:15px; }
  .hero-copy h1 { font-size:clamp(34px,8.2vw,55px); }
  .portrait-frame { width:32%; }
  .hero-greeting { font-size:24px; }
  .hero-description { font-size:12px; }
  .editorial-block { margin-top:48px; }
  .editorial-block h2 { font-size:clamp(38px,9vw,52px); }
  .view-lede { font-size:16px; line-height:1.7; margin-bottom:32px; }
  .resource-link { min-height:60px; padding:12px 13px; font-size:15px; }
  .resource-link-icon { width:32px; height:32px; }
  .archive-demo-dock { bottom:13px;left:13px;max-width:calc(100% - 26px);padding:9px 10px;gap:10px; }
  .dock-hint { display:none; }
  .dock-actions button { width:38px;height:34px; }
}
@media (max-width: 380px) {
  .hero-intro { flex-wrap:wrap; }
  .hero-copy { flex-basis: 100%; }
  .portrait-frame { width:104px;aspect-ratio:.77;position:relative;right:auto;top:auto;opacity:1; }
  .hero-description { max-width:26ch; }
  .portfolio-panel { padding:78px 17px 14px; }
  .panel-label { font-size:7px; }
}
@media (prefers-reduced-motion: reduce) {
  .mosaic-scroll--compact .mosaic-tile { animation: none !important; translate: 0 0 !important; }
  *,*::before,*::after { animation-duration:.01ms!important;transition-duration:.01ms!important;scroll-behavior:auto!important; }
}

````

### `portfolio-unique-patterns-replacements.zip` → `src/components/ArchiveMosaic.jsx`

````jsx
import React, { useEffect, useMemo, useRef } from 'react';
import { layoutMosaic } from '../lib/mosaicLayout.js';
import Icon from './Icons.jsx';
import { createAmbientBackground } from '../lib/ambientPattern.js';

function ArchiveTile({ tile, onOpen, lang, index }) {
  const { entry, pixels, x, y, decorative } = tile;
  const style = {
    '--tile-x': `${x}px`, '--tile-y': `${y}px`, '--tile-size': `${pixels}px`,
    '--tile-image': entry ? `url("${entry.image}")` : undefined,
    '--tile-tone': `var(--tile-tone-${index % 6})`,
    ...(decorative ? { '--ambient-art': createAmbientBackground(tile.id) } : {}),
  };
  if (decorative) {
    return (
      <div
        className={`mosaic-tile mosaic-tile--ambient ${tile.hidden ? 'mosaic-tile--concealed' : ''}`}
        style={style} data-side={tile.side} aria-hidden="true"
      ><div className="ambient-mark" /></div>
    );
  }
  const title = lang === 'ar' ? entry.titleAr || entry.title : entry.title;
  const category = lang === 'ar' ? entry.categoryAr || entry.category : entry.category;
  return (
    <button
      type="button"
      className={`mosaic-tile mosaic-tile--entry ${entry.sample ? 'mosaic-tile--sample' : ''} ${tile.compact ? 'mosaic-tile--responsive' : tile.size === 1 ? 'mosaic-tile--tiny' : ''}`}
      style={style}
      onClick={(event) => onOpen(entry, event.currentTarget)}
      data-side={tile.side}
      data-entry-id={entry.id}
      title={title}
      aria-label={`${title}${entry.sample ? ' — sample' : ''}`}
    >
      <span className="tile-visual" aria-hidden="true" />
      <span className="tile-content">
        <span className="tile-category">{entry.sample ? '◇ ' : '✦ '}{category}</span>
        <span className="tile-title">{title}</span>
        <span className="tile-corner"><Icon name="upRight" size={14}/></span>
      </span>
    </button>
  );
}

export default function ArchiveMosaic({ entries, viewport, archive, lang, onOpen }) {
  const scrollRef = useRef(null);
  const layout = useMemo(() => layoutMosaic(entries, viewport, archive), [entries, viewport, archive]);
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [archive, layout.metrics.compact]);
  return (
    <div
      ref={scrollRef}
      className={`mosaic-scroll ${archive ? 'mosaic-scroll--archive' : ''} ${layout.metrics.compact ? 'mosaic-scroll--compact' : ''}`}
      aria-label="Interactive archive collage"
      style={{ '--stream-negative': `${-Math.max(104, Math.min(170, viewport.width * 0.27)) * 0.85}px`, '--stream-positive': `${Math.max(104, Math.min(170, viewport.width * 0.27)) * 0.85}px` }}
    >
      <div className="mosaic-plane" style={{ height: `${layout.contentHeight}px` }}>
        {layout.tiles.map((tile, index) => <ArchiveTile key={tile.id} tile={tile} onOpen={onOpen} lang={lang} index={index} />)}
      </div>
    </div>
  );
}

````

### `portfolio-unique-patterns-replacements.zip` → `tests/ambientPattern.test.js`

````javascript
import test from 'node:test';
import assert from 'node:assert/strict';
import { createAmbientSvg, createAmbientBackground } from '../src/lib/ambientPattern.js';

test('all 500 sample tile IDs generate different SVG geometries', () => {
  const art = Array.from({length: 500}, (_, n) => createAmbientSvg(`ambient-L-${n}`));
  assert.equal(new Set(art).size, art.length);
});

test('artwork is stable across modes and rerenders', () => {
  const id = 'ambient-R-24';
  assert.equal(createAmbientSvg(id), createAmbientSvg(id));
  assert.equal(createAmbientBackground(id), createAmbientBackground(id));
});

test('background returns URI encoded SVG with no network request', () => {
  const art = createAmbientBackground('ambient-L-5');
  assert.ok(art.startsWith('url("data:image/svg+xml,'));
  assert.ok(decodeURIComponent(art).includes('<svg'));
});

````


## Provenance and limitations

- Embedded text snapshots: **64 files** from replacement archives.
- Large project ZIPs are linked and indexed, but their full contents are not inlined because they include binary media and potentially dependency trees.
- The full verbatim text of every assistant message cannot be recovered from the available conversation context; the chronological section therefore explicitly uses summaries.
- Automated test claims are historical statements from the assistant responses; they are not newly reverified here.
- Later revisions supersede earlier ones; apply the latest relevant files, not every ZIP sequentially without conflict review.
