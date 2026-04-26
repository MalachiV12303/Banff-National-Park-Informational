Live Demo: https://banffmv.vercel.app/  
Started: March 2025

## Overview
A static site built with Astro to explore performance-focused architecture and controlled scrolling interactions. The project emphasizes layout, animation, and content flow with minimal client-side JavaScript.

### Started as a Simple Figma Design
![figma](https://github.com/user-attachments/assets/e4980462-27b0-4459-8d8c-0f72d4e959a0)

## Key Features
- Scroll-locked intro video to control initial user flow  
- Section-based layout with full-screen imagery and parallax text  
- Smooth scrolling using Lenis  
- Scroll-triggered fade-in animations for historical content  
- “Back to top” navigation  

## Tech Stack
- Astro
- JavaScript
- CSS
- Lenis (smooth scrolling)
- Motion (animations)

## Architecture & Implementation
- Built using Astro’s partial hydration model to minimize client-side JavaScript  
- Structured content into sections with controlled scroll progression  
- Implemented scroll locking and timed release to guide initial interaction  
- Used motion to trigger animations and transitions  

## Notable Technical Challenges
- **Scroll Locking and Release Timing**  
  Controlled when the user could begin scrolling by locking the viewport during the intro and releasing it after a set duration.

## Performance & Optimization
- Kept the site primarily static to reduce runtime overhead  
- Limited client-side JavaScript to only interactive sections  
- Used smooth scrolling and lightweight animations to maintain consistent performance  

## What I Learned
- Working within Astro’s partial hydration model  
- Structuring static sites for performance and clarity  
- Controlling scroll behavior and animation timing  


