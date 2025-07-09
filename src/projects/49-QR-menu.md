---
title: QR menu 
description: QR Menu is a lightweight digital menu and CMS system designed for small restaurants and cafés.
imgSrc: https://github.com/user-attachments/assets/e8083255-dbb4-4843-84c3-afffba96be1e
keywords:
  - Product design
  - UX design
  - Concept design
  - UX research
  - Design system
  - Admin panel
meta:
  Role: Product designer, Stakeholder, Co-founder | 2024
  Team: Small team of Product designer and Software Engineer
  Scope: Full development from scratch
---
## Project Overview

**QR Menu** is a lightweight digital menu and CMS system designed for small restaurants and cafés. It helps customers browse menus visually with translations and filters, while giving business owners a simple tool to update dishes, manage info, and share menus via QR codes — all without needing tech expertise.

## Context and Problem

When relocating to Portugal, I encountered a surprisingly common friction point: **difficulty ordering food in local restaurants.**
Many places lacked printed menus or had menus written in handwritten Portuguese on blackboards — unintelligible to non-locals.
This created friction for:

* **Customers:** due to language barriers, lack of photos, and regional dish names.
* **Restaurants:** due to time-consuming interactions, difficulties to serve foreign customers, and inconsistent ways to share menu updates.

## Goals

To design a dual-sided system serving both restaurant owners/managers and customers:
* **For customers:** easier dish discovery, less anxiety ordering, and clearer understanding of menu options.
* **For restaurant owners:** quicker service flow, multilingual accessibility, easy content updates, and low-friction digital menu adoption.

## Research & Discovery

### Competitive Analysis

Explored 6 major global QR menu systems and ~10 Portuguese solutions.

#### Key findings:
1. Global apps were more polished, but often overbuilt or too expensive for local use.
2. Portuguese offerings were underdesigned, mostly PDFs behind QR codes, with negligible traffic (≤200 users).
3. **Gap:** no local, lightweight, freemium SaaS menu editor with native usability and mobile-first CMS.

### User Interviews: Restaurant Owners

10+ interviews with small-to-medium business owners gave me valuable findings.

#### 1. Work Habits & Tools

* Most restaurant owners use laptops, not mobile, for operations.
* Workflow focus: optimization of accounting, procurement, inventory, CRM, business processes.

#### 2. Customer-Facing Needs

* Owners want to combine physical + digital menus — clients prefer having both.
* Frequent menu changes common in bars, food trucks, catering — flexibility is essential.
* Language is a pain point — English menus needed, but staff often struggle to explain in English.
* Clients frequently ask for: dish recommendations, ingredients and portion sizes.

#### 3. Client Demographics

* Most frequent customers: ages 26–35 (average 36.5 years old)
* Owners: mostly 30–40 years old.

#### 4. Marketing & Promotion

* Owners actively use social media for promotion.

#### 5. Product Requirements

* Highlight fresh desserts, dish rating, and “out of stock” indicator
* Enable online payment
* For food trucks: allow location changes

#### 6. Pricing Expectations

* Owners are open to free plans or pricing under 10€/month

### User Interviews: Diners (Local & Foreign)

15+ interviews with people who frequently eat out at restaurants, cafes, and bars helped to define key moments.

#### 1. Language & Communication Barriers
* Foreigners struggle to order food in traditional restaurants.
* Waiters often don’t speak English.
* Dish names are unclear or too traditional.
* Clients don’t know if a restaurant has what they want if they don’t speak the language.

#### 2. Cognitive Load & Choice Paralysis
* Menus with only names take a long time to understand (even if client knows Portuguese).
* Portion size expectations don’t match (one-person dish ends up being for 3–4, or vice versa).

#### 3. Information Gaps
* Missing ingredient lists make it hard to ask waiters for clarification.
* Dish photos significantly help decision-making (especially for sushi).

#### 4. Operational Issues
* Many local restaurants accept only cash.
* People resort to fast food chains with kiosks or pictures when overwhelmed.

## Personas & Target Groups
**Carlos, 38 years** – café manager in Porto; wants to minimize staff-client friction
**Elena, 34 years** – food truck owner; needs agile menu changes and analytics
**Ravi, 29 years** – tourist from India; prefers ordering visually without language friction

## Job Stories
Based on user interviews, I transformed core pain points into structured job stories, which guided the definition of essential product features and flows.

_"When I update my menu frequently (e.g. new drinks or ingredients), 
I want a fast way to change it digitally, 
so it reflects the current offering without reprinting anything."_

_"When I have foreign customers, 
I want a menu that clearly shows dish details in English, 
so staff don’t have to explain everything manually."_

_"When a customer is choosing a dish, 
I want the digital menu to show portion size, ingredients, and staff picks, 
so I can reduce questions and speed up service."_

_"When I'm dining in a foreign country and can’t speak the local language, 
I want the menu to be available in English with clear dish descriptions, 
so I can confidently place an order without needing help from staff."_
 
_"When I'm unfamiliar with the local cuisine,
 I want to see pictures of each dish,
 so I can decide based on appearance and avoid surprises."_
 
_"When the menu uses only traditional or regional names,
 I want short explanations or ingredient lists,
 so I can quickly understand what the dish contains."_
 
_"When I’m browsing the menu,
I want to see a list of key ingredients for each dish,
so I can avoid allergens, unwanted ingredients, or meat if I’m vegetarian."_

_"When I'm choosing a dish,
I want to know if it’s meant for sharing or is an individual portion,
so I don’t overorder or waste food."_

## Market Insights
* about 42,000 potential establishments in Portugal
* 66% of global restaurants already use some form of QR menus
* Potential market volume: up to 1.2M €/mo
* Realistic paid users after first year: about 140 users
* Realistic market volume: from 8,400 up to 25,200 €/year
* Viable entry point through freemium + paid upgrades

## Design Approach & MVP Scope
### Concept Ideation
**Client-side:** mobile-friendly web menu, filters, dish visuals, and dish info
**Admin-side (CMS):** simple category & position editor, QR generator, rush hour analytics

### MVP Prioritization
#### Client View:
* Browse by filters (categories and food preferencies, e.g. vegan, spicy)
* Photos, ingredients, portion sizing
* Cafe location/contact integration

#### Admin CMS:
* Menu builder with drag-and-drop dish editor
* QR code generation for download/print
* Analytics: scans per day/hour, dish views

## Validation Activities
* Clickable prototype shared with café owners in Viseu
* Collected qualitative feedback + pricing expectations
* All were interested in using a free tier; ~30% expressed willingness to pay
* Gathered contacts for early access beta

## Pause & Strategic Pivot
Despite promising feedback, we made a deliberate decision to pause.

**Why:**
* MVP lacked enough "product-led growth" hook to justify even low-cost subscriptions
* Without external funding or organic virality, releasing it for free wasn’t sustainable
* Further investment would’ve required deeper integration (e.g., POS, orders, payments)

## What We Learned:
* Align MVP scope to monetization model from the start
* Free tier must either drive fast adoption or build up-sell potential
* Initial retention and engagement features matter more than surface UX polish
* Research-backed insight and demand do not always equal execution readiness

## Next Steps 
* We’ve outlined a v2 roadmap that can re-engage:
* Micro-monetization hooks: e.g., branded templates, analytics insights, social integrations
* Extended features: ordering, multilingual auto-translation, loyalty tools
* Community and AI-powered menu copywriting to reduce restaurant owner friction
