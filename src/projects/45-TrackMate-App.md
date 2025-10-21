---
permalink: /projects/TrackMate-app/
title: Time tracking Web App and Landing page 
description: TrackMate is a mindful time and activity tracker that helps plan, log, and get insights manually without relying on algorithms.
imgSrc: https://github.com/user-attachments/assets/619db079-440f-4d99-8b13-8b59b7650986
keywords:
  - Product design
  - MVP
  - UX design
  - Startup
  - PWA
  - Landing page


meta:
  Role: Product designer, Stakeholder | 2025
  Team: Small team of Product designer and Software Engineer
  Scope: Desig strategy, UX/UI changes, landing page, user testing  
---
## Project Overview

TrackMate is a mindful, manual time tracker built as a Progressive Web App, designed not just for logging hours but for generating insights into time quality and encouraging reflection.

## Problem

Nowadays people are often overwhelmed, especially those working online — they multitask, procrastinate, and by the end of the day can’t even recall what they actually did. Many actions become automated and mindless, leading to burnout and the feeling of lost time.

The product aimed to help people be more mindful of how they spend their time, find balance between work and rest, and build awareness of daily habits.

However, users struggled to see clear patterns or reflect on their activity. The app’s structure didn’t support that awareness — it tracked time but didn’t help understand it.

## Goals

The goal was to redesign the app to help users understand how they spend their time — not just track it.

The focus was on creating a more mindful and balanced experience, where users could reflect on their work patterns, recognize moments of rest, and stay aware of daily habits without feeling pressured or overwhelmed.

At the same time, my task was to make the product ready for beta testing and future subscription-based growth — improving usability, consistency, and engagement to form a solid foundation for future iterations.

## Solution

To redesign the app and prepare it for beta testing, I focused on usability, consistency, and testing speed.

My approach combined Lean UX, fast iteration, and constant user validation to quickly identify and fix usability issues.

The main strategic directions were:

* Redefine visual and interaction design to make the experience clean and human
* Restructure information architecture for clarity and future scalability
* Build flows that support motivation and reduce friction
* Reuse and adapt the Neobrutalism UI library to speed up development
* Continuously test with real users to validate small iterations before scaling
* Design and launch a landing page for early traffic testing and analytics setup
* Align every design decision with future subscription model and growth plans

<iframe
  src="https://player.cloudinary.com/embed/?cloud_name=dc3ue8fmx&public_id=Tracking_gn05if&profile=cld-default"
  width="640"
  height="360" 
  style="height: auto; width: 100%; aspect-ratio: 640 / 360;"
  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
  allowfullscreen
  frameborder="0"
></iframe>


## Summary

My design improvements led to visible progress in usability, engagement, and conversions.

### Quantitative results:

* Conversion rate increased by 4% after the new landing page and flow optimization
* Retention improved by 2% after adding gentle notifications
* Sign-up completion grew significantly after introducing guest visit

### Qualitative results:

* Users described the app as cleaner and more attractive and intuitive
* Enhanced clarity of data visualization — users better understood their progress
* Improved visual accessibility
* Identified bottlenecks blocking new users on the stage of signing up and suggested solution of guest visit
* The owner got a clear product foundation ready for beta and future SaaS growth

### Team/Process impact:

* Improved collaboration through prioritization sessions and clear iteration cycles
* Delivered end-to-end solutions under short deadlines without compromising quality


## Process

### Review

I joined the project when the app was already functional but lacked clear UX structure and design consistency. It was developed using AI tools, so the developer could make small edits but needed a UX expert to bring usability, logic, and structure.

#### Actions taken:

* Conducted a full UX audit of the app
* Found issues with sign-up flows, tracking logic, and page hierarchy
* Proposed to move tracking controls to the bottom to improve mobile usability
* Led a prioritization session to identify key features to focus on
* After discussions with the owner and developer, I presented a new UI version
* Fixed the sign-up flow (added view/hide password, recovery, and forgot password functions)
* Proposed a new Settings page structure, preparing for a scalable, subscription-based model
* Decided to work iteratively — small changes → test → improve (Lean UX cycle)


### Timer Page 

Suggested making “Tip of the Day” optional, as many users ignored it. Added a toggle in Settings to turn it on/off.

While testing, found that deleting an active timer required saving it first. Added a Delete button directly in the saving stage.

Also found missing logic for saving under a new category, researched best patterns, and implemented a smoother experience.

![Timer](https://github.com/user-attachments/assets/50b636e7-fcdf-4b68-ba6e-828a4830db0e)
![Save time period](https://github.com/user-attachments/assets/fc9b915a-bf14-4223-8da5-1e74794056e7)

### Statistics Page 

Enhanced visualization and added more useful analytics:

* Flexible time range: Today, 7 days, 30 days, Custom
* Added “fun tendency” to show personal trends
* Introduced the idea of AI-generated reports with insights from a certified psychologist
* Intermediate solution: download report + suggestion to check with AI chat
* Improved table layout to make data more human and less technical

![Statistics](https://github.com/user-attachments/assets/1ae26230-a6a5-4c52-acdc-3bc879c968e5)

### Settings Page

Rebuilt the structure for clarity and future scalability (user email, password change, notifications, etc.)

![Settings](https://github.com/user-attachments/assets/8c1e78dd-89a4-4f7d-bcd0-ba6cabe31087)

### Guest Visit Flow

Analytics showed strong website traffic but low registrations due to mandatory sign-up. Proposed Guest Visit — allowing first-time users to explore base features before registration. Designed and implemented the full flow.

![sign up-min](https://github.com/user-attachments/assets/9b3f0819-96ea-406f-87ec-a30a4ae1288a)

### Gentle Notifications

Many users forgot to stop the timer or return to the app.
I researched notification best practices, interviewed users, and designed a gentle reminder system to balance business goal and user needs:

1. Remind about active timers
2. Gently bring users back into the app without annoyance

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="auto" src="https://embed.figma.com/board/wFOmzJg9KTHGsyBY5Tfpbd/TrackMate.-Gentle-Notification.-Tracking-page?node-id=1-3&embed-host=share" allowfullscreen></iframe>

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="auto" src="https://embed.figma.com/board/yZuyZ817uBaoTNenelxwVR/TrackMate.-Gentle-Notification.-Settings-page?node-id=1-2&embed-host=share" allowfullscreen></iframe>

![Gentle notification-min](https://github.com/user-attachments/assets/115e0c86-d3ad-4a61-a0cd-045636ad3024)


### Landing Page Development

I implemented a fully functional landing page to reduce developer workload and test conversions faster.

Version 1: Used template blocks in Framer, customized icons, and static screens for quick release.
Version 2: After testing, improved results by:

* Increasing button contrast
* Changing content 
* Replacing static images with video previews of features

This led to higher click-through and engagement rates.

![Landing page](https://github.com/user-attachments/assets/de911f6f-d7bf-45dc-9039-a54f1794d0f1)

### Testing and Validation

Through analytics, user feedback, and continuous testing, I identified and resolved key usability gaps.
Within two months, the app achieved:

1. Measurable conversion growth (by 4%)
2. First wave of organic users
3. Improved engagement and retention (by 2%)


<iframe
  src="https://player.cloudinary.com/embed/?cloud_name=dc3ue8fmx&public_id=Log_Untracked_Time_pevwpj&profile=cld-default"
  width="640"
  height="360" 
  style="height: auto; width: 100%; aspect-ratio: 640 / 360;"
  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
  allowfullscreen
  frameborder="0"
></iframe>


## Learnings

* Working with Framer requires small changes, fast testing, and immediate iterations
* Best media setup for website performance: video hosted externally and integrated (not GIFs)
* Always compress media for optimization
* On iPhones, Low Power Mode may hide media — clear cache after testing
* Continuous cycle of user flow mapping, analytics tracking, and feedback loops provides the best base for significant improvements
