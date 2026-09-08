# GUIRES — Premium 3D Animated Corporate Website

Build a **high-end, premium, enterprise-level corporate website for GUIRES** using:

* HTML5
* CSS3
* Vanilla JavaScript
* SVG
* Three.js for advanced 3D visual effects where appropriate
* GSAP for professional animations if needed

Do NOT use React, Next.js, Bootstrap, Tailwind CSS, jQuery, or other UI frameworks.

The final website must feel like a **global technology, consulting and transformation company**.

The design should combine:

**Premium corporate design + editorial typography + 3D technology visuals + cinematic motion + sophisticated interactions.**

Use companies such as Accenture, IBM, Deloitte, Capgemini and McKinsey only as general inspiration for professionalism and quality.

Do NOT copy their branding, colors, layouts, text, or visual identity.

Create a unique visual identity for GUIRES.

---

# 1. CORE DESIGN CONCEPT

The website should communicate:

* Intelligence
* Technology
* Innovation
* Transformation
* Trust
* Global presence
* Enterprise capability
* Future-focused thinking

The website should feel:

> **Confident. Intelligent. Premium. Futuristic. Human.**

Avoid:

* Generic corporate templates
* Basic Bootstrap layouts
* Excessive gradients
* Excessive glassmorphism
* Gaming-style interfaces
* Neon cyberpunk design
* Excessive glowing effects
* Cheap stock imagery
* Excessive animations

The 3D effects must support the corporate message rather than distract from it.

---

# 2. GUIRES BRAND DIRECTION

Company:

# GUIRES

Core positioning:

> GUIRES helps organizations navigate complex business and technology challenges through innovation, intelligence and transformation.

Primary brand message:

# Creating What's Next.

Supporting messages:

> Technology. Intelligence. Transformation.

> Turning complex challenges into opportunities.

> Building better businesses for a changing world.

---

# 3. VISUAL LANGUAGE

Create a sophisticated visual language based around:

* Large typography
* Black and white foundation
* One GUIRES accent color
* Subtle gradients
* 3D geometric objects
* Digital networks
* Fluid motion
* Abstract technology
* Large whitespace
* Editorial layouts
* Asymmetrical compositions

The design should have a strong visual hierarchy.

---

# 4. HEADER

Create a sticky premium navigation.

Desktop:

```text
GUIRES

What We Do
Who We Are
Our Work
Insights
Careers
Contact
```

Right side:

```text
Search
```

Optional:

```text
Global
```

Do not use these as primary navigation:

* Services
* Industries
* Solutions

Those concepts belong inside the relevant pages.

---

# 5. HEADER ANIMATION

At page load:

GUIRES logo should fade/slide in.

Navigation items should appear sequentially with a very subtle stagger animation.

When scrolling:

Header transitions from:

```text
transparent
```

to:

```text
semi-solid / white / dark depending on theme
```

Add:

* Blur
* Subtle shadow
* Border
* Smooth transition

Navigation hover:

The underline should animate from left to right.

---

# 6. HERO — MAIN 3D EXPERIENCE

The hero should be the strongest part of the website.

Height:

```css
min-height: 90vh;
```

Layout:

```text
LEFT                         RIGHT

Large headline               3D OBJECT
Supporting text              / DIGITAL WORLD
CTA buttons                  / ABSTRACT FORM
```

Headline:

# Creating What's Next.

Supporting text:

> We help organizations transform complex challenges into opportunities through technology, intelligence and innovation.

Buttons:

```text
Explore What We Do →
Start a Conversation →
```

---

# 7. HERO 3D OBJECT

Create an interactive 3D visual using Three.js.

Possible concept:

### Abstract GUIRES Intelligence Sphere

Create a large 3D object composed of:

* Connected nodes
* Thin lines
* Floating particles
* Small geometric elements
* Circular orbital paths
* Subtle light
* Transparent layers

The object should slowly rotate.

Example visual concept:

```text
             •
        ───────────
      /             \
     •    GUIRES     •
     |   NETWORK     |
     •               •
      \             /
        ───────────
             •
```

The exact implementation can use Three.js geometry.

---

# 8. 3D MOUSE INTERACTION

The hero 3D object should react subtly to mouse movement.

Mouse movement:

```text
Mouse → left
Object → subtle left rotation

Mouse → right
Object → subtle right rotation

Mouse → up/down
Object → subtle vertical movement
```

Do NOT make the object follow the mouse aggressively.

Movement should be approximately:

```text
5–15px
```

with smooth interpolation.

---

# 9. HERO PARTICLES

Add a very subtle particle field around the 3D object.

Particles should:

* Move slowly
* Have low opacity
* React slightly to mouse movement
* Never overpower the headline

Use requestAnimationFrame or Three.js.

Limit particle count for performance.

---

# 10. HERO TEXT ANIMATION

On initial load:

```text
Creating
What's
Next.
```

Animate line-by-line.

Sequence:

```text
Line 1 → fade + translateY
Line 2 → fade + translateY
Line 3 → fade + translateY
```

Use approximately:

```text
0.6–0.9 seconds
```

per animation.

Use staggered timing.

---

# 11. SCROLL EXPERIENCE

The website should have a strong scroll narrative.

Do not simply place static sections one after another.

Use:

* Scroll reveal
* Parallax
* Horizontal movement
* Scale transitions
* Image zoom
* Text reveal
* 3D object transformations
* Sticky storytelling sections

All effects should remain smooth and professional.

---

# 12. INTRODUCTION SECTION

Large editorial section.

Heading:

# We create meaningful impact at the intersection of technology, people and business.

Use a large typography reveal animation.

As the user scrolls:

Text should gradually reveal.

Possible effect:

```text
opacity: 0 → 1
transform: translateY(50px) → 0
```

Use a staggered word/line reveal.

---

# 13. WHAT WE DO

Heading:

# What We Do

Subheading:

> We turn complex challenges into opportunities.

Create six capability areas:

```text
01
Technology

02
Artificial Intelligence

03
Data

04
Digital

05
Cloud

06
Strategy
```

Do not make these basic cards.

Create large editorial panels.

---

# 14. WHAT WE DO — INTERACTIVE HOVER

When the user moves over a capability:

Example:

```text
Artificial Intelligence
```

The panel should expand slightly.

A corresponding abstract 3D visual should appear.

For example:

AI:

* Neural network

Data:

* Data streams

Cloud:

* 3D cloud infrastructure

Digital:

* Abstract interface

Technology:

* Connected architecture

Strategy:

* Geometric pathways

Use subtle transitions.

---

# 15. 3D CAPABILITY VISUALS

Each capability can have a lightweight 3D/SVG visualization.

Examples:

### AI

Connected neural network.

### Data

Flowing particles moving through nodes.

### Cloud

Floating geometric cloud structure.

### Technology

Interconnected cubes.

### Digital

Floating UI panels.

### Strategy

Connected paths forming a network.

Do not render six heavy Three.js scenes simultaneously.

Reuse one 3D canvas where possible.

---

# 16. FEATURED STORY SECTION

Create a full-width cinematic section.

Headline:

# THE FUTURE IS INTELLIGENT.

Supporting text:

> AI is changing how organizations operate, compete and grow.

CTA:

```text
Explore AI →
```

Use:

* Dark background
* Large typography
* 3D neural network
* Moving particles
* Subtle glow
* Scroll-based animation

As the user scrolls, the 3D network should gradually become more complex.

---

# 17. WHO WE ARE

Heading:

# We are GUIRES.

Use a large editorial composition.

Include:

```text
Our Purpose
Our Vision
Our Values
```

Animate each section as it enters the viewport.

Values:

```text
Curiosity
Integrity
Innovation
Collaboration
Impact
```

Use large typography rather than traditional cards.

---

# 18. WHO WE ARE — 3D TRANSITION

Create a scroll-based 3D transition.

Example:

A collection of small geometric particles begins scattered.

As the user scrolls:

```text
Particles
    ↓
Connect
    ↓
Form a structure
    ↓
Become the GUIRES visual
```

Keep it subtle.

This represents:

> People + Technology + Ideas = Impact

---

# 19. OUR WORK

Navigation title:

# Our Work

Headline:

> Ideas are only valuable when they create impact.

Create three large project stories.

Each should use a large visual.

Example:

```text
Healthcare

Transforming Digital Healthcare

View Project →
```

Hover effect:

* Image scale 1.03
* Overlay transition
* Text movement
* Arrow movement

---

# 20. CASE STUDY TRANSITION

When opening a project:

Create a smooth page transition.

Example:

```text
Homepage
   ↓
Image expands
   ↓
Image fills screen
   ↓
Project page loads
```

Use GSAP or CSS transitions.

Do not create slow loading animations.

---

# 21. IMPACT SECTION

Create a large statistics section.

Use real company data when available.

Until real data is supplied, use placeholders:

```text
XX+
Projects

XX+
Markets

XX+
Professionals

XX%
Improvement
```

Do not fabricate business statistics.

Animate numbers when they enter the viewport.

Example:

```text
0 → 150
```

---

# 22. 3D IMPACT VISUAL

Place a large abstract 3D structure beside the numbers.

As the user scrolls:

```text
3D object rotates
↓
Numbers appear
↓
Object transforms
↓
Next section begins
```

Keep the animation lightweight.

---

# 23. INSIGHTS

Heading:

# Insights

Headline:

> Perspectives for what's next.

Create editorial article cards.

Each card:

```text
Category
Date
Title
Description
Read →
```

Hover:

* Image zoom
* Arrow movement
* Category transition

Use staggered scroll animations.

---

# 24. INSIGHTS HORIZONTAL SCROLL

On desktop, optionally create a horizontal scrolling experience.

As the user scrolls vertically:

```text
Article 1 → Article 2 → Article 3 → Article 4
```

The horizontal movement should be smooth.

On mobile, revert to normal vertical cards.

---

# 25. CAREERS

Heading:

# Build What's Next.

Supporting text:

> Join people solving complex problems and creating meaningful change through technology.

Use:

* Large typography
* Human-focused imagery
* Subtle 3D background
* Smooth reveal

Buttons:

```text
Explore Careers →
View Open Positions →
```

---

# 26. FINAL CTA

Create a large cinematic CTA.

Dark background.

Headline:

# Let's Create What's Next.

Supporting text:

> Tell us about your challenge, idea or opportunity.

Button:

```text
Start a Conversation →
```

Add a subtle animated 3D background.

Possible visual:

A slowly moving wireframe sphere or network.

---

# 27. FOOTER

Create a large premium corporate footer.

```text
GUIRES

Technology.
Intelligence.
Transformation.
```

Columns:

```text
WHAT WE DO
Technology
AI
Data
Digital
Cloud
Strategy

WHO WE ARE
About GUIRES
Leadership
Values
Careers

OUR WORK
Featured Work
Case Studies

INSIGHTS
Articles
Research
Reports
News

CONNECT
Contact
LinkedIn
YouTube
```

Bottom:

```text
© 2026 GUIRES
Privacy Policy
Terms
Cookie Policy
Accessibility
```

---

# 28. ADVANCED MOTION DESIGN

Use GSAP where appropriate.

Animations should include:

### Fade In

```text
opacity
```

### Slide Up

```text
translateY
```

### Scale

```text
scale()
```

### Clip Reveal

Reveal large text using:

```text
clip-path
```

### Image Reveal

Use:

```text
clip-path
scale
```

### Stagger

Animate individual elements sequentially.

---

# 29. SCROLL-BASED ANIMATIONS

Use GSAP ScrollTrigger if GSAP is included.

Examples:

```text
Hero
↓
3D object rotates based on scroll

Introduction
↓
Typography reveals

What We Do
↓
Cards/panels animate

AI section
↓
3D network evolves

Who We Are
↓
Particles form structure

Our Work
↓
Images scale/reveal

Insights
↓
Horizontal movement
```

Animations must not cause layout shifts.

---

# 30. 3D PERFORMANCE

3D is important, but performance is more important.

Follow these rules:

* Use WebGL only where valuable
* Reuse canvases
* Limit particle counts
* Use low-poly geometry
* Avoid unnecessary textures
* Use compressed assets
* Pause animation when tab is hidden
* Reduce effects on mobile
* Respect `prefers-reduced-motion`

For mobile:

Use lightweight CSS/SVG effects instead of heavy WebGL where necessary.

---

# 31. MOBILE 3D

On mobile:

Do NOT remove the visual identity completely.

Instead:

* Reduce particle count
* Reduce object complexity
* Disable mouse interaction
* Reduce animation speed
* Use simpler 3D/SVG
* Keep animations smooth

The mobile site must remain premium.

---

# 32. CUSTOM CURSOR

Add an optional premium cursor on desktop.

Normal:

```text
small circular cursor
```

Hovering a link:

```text
cursor expands
```

Hovering an image:

```text
VIEW
```

Example:

```text
        ┌─────────┐
        │  VIEW   │
        └─────────┘
```

Disable the custom cursor on mobile and touch devices.

---

# 33. PAGE TRANSITIONS

Create subtle transitions between pages.

Use:

```text
fade
scale
clip-path
```

Avoid long loading screens.

Page transition should generally remain below approximately one second.

---

# 34. TYPOGRAPHY

Use:

```text
Inter
Manrope
Geist
```

Recommended:

Hero:

```css
font-size: clamp(3.5rem, 8vw, 9rem);
```

Section headings:

```css
font-size: clamp(2.5rem, 5vw, 6rem);
```

Body:

```css
font-size: 18px;
```

Use strong contrast between:

* Large headings
* Supporting copy
* Labels
* Metadata

---

# 35. COLOR SYSTEM

Use a restrained palette.

```css
:root {
    --black: #080808;
    --white: #ffffff;
    --off-white: #f5f5f2;
    --gray: #777777;
    --light-gray: #dddddd;

    --accent: /* GUIRES brand accent */;
}
```

The accent color should be configurable from one variable.

Do not use many bright colors.

---

# 36. RESPONSIVE DESIGN

Support:

```text
1440px+
1280px
1024px
768px
480px
390px
360px
```

Desktop:

* Complex grids
* 3D interaction
* Horizontal scroll
* Custom cursor

Tablet:

* Simplified grids
* Reduced 3D complexity

Mobile:

* Vertical layout
* Simplified animation
* No custom cursor
* Reduced WebGL
* Touch-friendly navigation

No horizontal overflow.

---

# 37. ACCESSIBILITY

Implement:

* Semantic HTML
* Keyboard navigation
* Focus states
* ARIA labels
* Alt text
* Proper heading hierarchy
* Good contrast
* Reduced-motion support

Add:

```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}
```

---

# 38. PERFORMANCE

Target:

* Fast initial load
* Excellent Core Web Vitals
* Minimal JavaScript
* Lazy loading
* Optimized images
* Efficient WebGL
* No unnecessary libraries

Do not sacrifice website speed for animation.

The website should still feel fast on a normal laptop and mobile device.

---

# 39. FILE STRUCTURE

Create:

```text
guires/
│
├── index.html
│
├── pages/
│   ├── what-we-do.html
│   ├── who-we-are.html
│   ├── our-work.html
│   ├── insights.html
│   ├── careers.html
│   └── contact.html
│
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── animations.css
│
├── js/
│   ├── main.js
│   ├── animations.js
│   └── three-scenes.js
│
└── assets/
    ├── images/
    ├── icons/
    └── 3d/
```

Keep the code modular and easy to maintain.

---

# 40. IMPORTANT — DO NOT OVERDESIGN

The final website should NOT look like:

* A gaming website
* A cryptocurrency website
* A cyber-security dashboard
* A sci-fi movie
* A neon Web3 website

The visual direction must remain:

# PREMIUM CORPORATE + TECHNOLOGY + FUTURE

The 3D elements should make the website memorable while the typography and content make it trustworthy.

---

# 41. FINAL HOMEPAGE EXPERIENCE

The final homepage should feel like:

```text
PAGE LOAD
    ↓
Logo + navigation reveal
    ↓
Hero typography appears
    ↓
3D intelligence sphere begins moving
    ↓
User scrolls
    ↓
3D object reacts
    ↓
Typography reveals
    ↓
What We Do panels animate
    ↓
AI 3D visualization evolves
    ↓
Who We Are particles form
    ↓
Our Work images reveal
    ↓
Impact numbers animate
    ↓
Insights move horizontally
    ↓
Careers appears
    ↓
Final 3D CTA
    ↓
Premium footer
```

The entire experience should feel like one continuous visual story.

---

# 42. FINAL QUALITY REQUIREMENT

Before considering the website complete, review it from the perspective of a CEO or enterprise client.

The first impression should communicate:

> **"This is a serious, capable, modern technology company."**

It should NOT communicate:

> "This is an AI-generated website template."

Prioritize:

1. Visual hierarchy
2. Typography
3. Spacing
4. Brand identity
5. 3D quality
6. Animation quality
7. Usability
8. Accessibility
9. Performance
10. Responsive behavior

The final result should be a **premium GUIRES digital experience**, not simply a collection of animated HTML sections.
