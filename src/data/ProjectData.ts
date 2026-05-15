// model/ProjectModel.ts

import type { Project } from "../types/ProjectType";
import { AUTHOR } from "./AuthorData";

export const PROJECTS: Project[] = [

  {
    title: "LeafUp",
    category: "UI/UX Design",

    description:
      "LeafUp is a mobile-based agricultural recommendation platform designed to help farmers make smarter planting decisions using market statistics, seasonal trends, and AI-powered insights.",

    tags: ["UI", "UX", "Proxocoris", "Competition"],

    thumbnail:
      "https://raw.githubusercontent.com/anugerah170405/assets/main/images/1778649172603_project2.png",

    challenge: `
Many farmers still rely on assumptions and traditional habits when deciding what crops to plant. Limited access to reliable market insights and agricultural data often leads to ineffective decision-making and unstable harvest outcomes.

As a result, farmers frequently experience:

- uncertainty in choosing the most suitable crops,
- limited access to accurate market and agricultural insights,
- crop overproduction that causes significant price drops in the market.

The challenge was to design a solution that could simplify agricultural decision-making while making data more accessible, understandable, and actionable for farmers.

---

## User Research

Based on interviews and observations conducted with farmers in rural areas, several recurring patterns and challenges were identified throughout the research process.

| Category | Findings |
| --- | --- |
| Demographics | Most users were aged between 45–60 years old and had over 15 years of farming experience. |
| Behaviors | Farmers relied heavily on assumptions, personal experience, and manual market checking. |
| Pain Points | Lack of real-time insights, unstable market pricing, and dependence on middlemen. |
| User Needs | Accessible recommendations, market statistics, and understandable agricultural insights. |

![EmpathyMapSection](https://raw.githubusercontent.com/anugerah170405/assets/main/images/1778649492005_EmpathyMapSection.png)
  `,

    solution: `
To address these issues, we designed a modern and minimal mobile application focused on data-driven farming decisions through intelligent recommendations and real-time agricultural insights.

The platform was built with a clean and intuitive interface to ensure accessibility for users with different levels of technological familiarity.

---

## Core Features

### Smart Crop Recommendations

Provide personalized crop recommendations based on multiple agricultural factors, including:

- farmer category,
- location,
- market statistics,
- weather conditions,
- seasonal trends.

### Real-Time Market Insights & Statistics

Display market trends and crop statistics in real time to help farmers better understand supply, demand, and potential market opportunities before planting.

### AI-Powered Decision Making

Integrate artificial intelligence to analyze agricultural data and assist farmers in making faster, smarter, and more accurate planting decisions based on data rather than assumptions.

---

## Feature Overview

| Feature | Description |
| --- | --- |
| Smart Crop Recommendations | Generate personalized planting recommendations using agricultural and market data. |
| Real-Time Market Insights | Provide live market trends, crop demand information, and statistical analysis. |
| AI-Powered Decision Making | Assist farmers in making more accurate planting decisions using predictive insights. |
| Weather & Seasonal Integration | Analyze seasonal patterns and weather conditions for recommendation accuracy. |
| Farmer-Friendly Interface | Designed with a clean and accessible mobile-first user experience. |
  `,

    process: `
## Design Thinking
![Screenshot 2026 05 14 at 13.35.52](https://raw.githubusercontent.com/anugerah170405/assets/main/images/1778737021866_Screenshot_2026-05-14_at_13.35.52.png)
  
## User Flow

![xagjaeooejoa== (1)](https://raw.githubusercontent.com/anugerah170405/assets/main/images/1778728549347_xagjaeooejoa____1_.png)

The user flow was designed to simplify complex agricultural decision-making into a more accessible mobile experience. Navigation and interaction patterns were optimized for clarity and ease of use.

---

## Wireframe

![Screenshot 2026 05 13 at 13.21.08](https://raw.githubusercontent.com/anugerah170405/assets/main/images/1778649728943_Screenshot_2026-05-13_at_13.21.08.png)

Low-fidelity wireframes were created to explore layout structures, information hierarchy, and user interaction patterns before entering the visual design stage.

---

## Logo

![Screenshot 2026 05 13 at 13.22.31](https://raw.githubusercontent.com/anugerah170405/assets/main/images/1778649806576_Screenshot_2026-05-13_at_13.22.31.png)

The visual identity was designed to represent sustainability, growth, and modern agricultural technology through a clean and minimal approach.

---

## Components

![Screenshot 2026 05 13 at 13.24.49](https://raw.githubusercontent.com/anugerah170405/assets/main/images/1778649936077_Screenshot_2026-05-13_at_13.24.49.png)

A scalable component system was created to maintain consistency across the application while improving usability and development efficiency.
  `,

    result: `
The final result was a modern and intuitive mobile application that successfully transformed complex agricultural data into a more accessible and actionable farming experience.

LeafUp successfully addressed key farming challenges by combining market analytics, real-time insights, and AI-powered recommendations into a single user-friendly platform.

---

## Project Outcomes

### Smart Crop Recommendations

Recommendations were generated using five core data sources:

- farmer category,
- location,
- market statistics,
- weather conditions,
- seasonal patterns.

### Real-Time Insights & Statistics

Provided farmers with market trend visualizations and crop performance statistics to support more informed planting decisions.

### AI-Powered Decision Making

Improved decision-making efficiency by helping farmers choose crops based on analytical data and predictive insights rather than assumptions alone.

---

## Impact

| Area | Outcome |
| --- | --- |
| Decision Making | Helped farmers make more informed planting decisions using data-driven recommendations. |
| Market Awareness | Improved understanding of crop demand, pricing trends, and market opportunities. |
| Accessibility | Simplified complex agricultural insights into a more understandable mobile experience. |
| Efficiency | Reduced reliance on assumptions and manual market analysis. |
  `,

    links: [
      {
        icon: "figma",
        label: "Figma",
        url: "https://www.figma.com/design/c1jB5dsNcTrNN2IAb6r080/UI?node-id=1176-2&t=ak1K3RGc06ekbZhX-1",
      },
      {
        icon: "prototype",
        label: "Prototype",
        url: "https://www.figma.com/proto/c1jB5dsNcTrNN2IAb6r080/UI?node-id=1176-2&t=ak1K3RGc06ekbZhX-1",
      },
      {
        icon: "document",
        label: "UX Research",
        url: "https://www.figma.com/board/FOH7PYyZ8B2zs32DJpwWNd/UX?node-id=0-1&t=kzAkCHNWpAzimw0i-1",
      },
    ],

    authors: [
      { ...AUTHOR.jildeany, role: "Leader" },
      { ...AUTHOR.anugerah, role: "UI/UX Designer" },
      { ...AUTHOR.justin, role: "UX Researcher" },
    ],
  },



  {
    title: "Research Paper Assistant",
    category: "Web Design",

    description:
      "Research Paper Assistant is an AI-powered platform designed to help users understand scientific papers more efficiently through Retrieval-Augmented Generation (RAG) and conversational document interaction.",

    tags: ["AI", "RAG", "LLM", "Groq", "Vector Database"],

    thumbnail:
      "https://raw.githubusercontent.com/anugerah170405/assets/main/images/1778730793339_paper__1___1_.png",

    challenge: `
Reading and understanding scientific papers can be difficult and time-consuming, especially when users need to search through large amounts of academic information manually.

Many users experience challenges such as:

- difficulty understanding complex research content,
- spending too much time searching for relevant information,
- information overload from lengthy scientific documents,
- and inefficient workflows when reading multiple papers simultaneously.

The challenge was to design an AI-powered system capable of simplifying research exploration while still providing accurate, context-aware, and source-based responses.

---

## Problem Analysis

| Category | Findings |
| --- | --- |
| Information Density | Scientific papers often contain large amounts of technical and complex information. |
| Time Efficiency | Users spend significant time manually searching and summarizing research papers. |
| Accessibility | Academic content can feel overwhelming for users unfamiliar with research structures. |
| Interaction | Traditional PDF reading lacks interactive and contextual assistance. |
  `,

    solution: `
To address these issues, we developed an intelligent Research Paper Assistant powered by Retrieval-Augmented Generation (RAG) and Groq LLM integration.

The platform enables users to upload research papers or provide PDF links, then interact with the documents through an AI-powered conversational interface.

---

## Core Features

### PDF & Link-Based Research Input

Users can upload research papers directly or provide PDF links as data sources for the AI system.

### Conversational Research Chatbot

The system provides an interactive chatbot capable of answering questions based on the uploaded research content.

Responses are generated contextually using retrieved information from the document source.

### Retrieval-Augmented Generation (RAG)

The platform uses a RAG architecture to retrieve relevant information before generating responses, improving factual accuracy and contextual understanding.

### Groq LLM Integration

Integrated Groq AI models were used to enable faster and more efficient large language model inference for real-time interaction.

---

## System Components

| Component | Description |
| --- | --- |
| Embedding | Convert document content into vector representations for semantic understanding. |
| Vector Database | Store embeddings efficiently for similarity-based retrieval. |
| Retrieval System | Retrieve the most relevant document chunks based on user queries. |
| LLM Integration | Generate contextual responses using retrieved information and Groq AI models. |
  `,

    process: `
## System Architecture

The system architecture was designed to create a seamless pipeline between document ingestion, semantic retrieval, and AI-generated responses.
![Screenshot 2026 05 14 at 15.25.15](https://raw.githubusercontent.com/anugerah170405/assets/main/images/1778743568174_Screenshot_2026-05-14_at_15.25.15.png)
---

## Data Flow

The workflow consists of several key stages:

1. Users upload a PDF or provide a PDF link.
2. The document content is processed and converted into embeddings.
3. Embeddings are stored inside a vector database.
4. User questions trigger a retrieval process to find the most relevant document chunks.
5. Retrieved context is passed into the Groq-powered LLM to generate accurate responses.

---

## AI Pipeline

The AI pipeline combines semantic search and language generation to ensure answers remain relevant to the uploaded research source instead of generating unsupported responses.

---

## Conversational Experience

The chatbot interface was designed to provide a more natural and interactive way of exploring scientific papers compared to traditional document reading experiences.
  `,

    result: `
The final result was an AI-powered research assistant capable of transforming traditional scientific paper reading into a faster, smarter, and more interactive experience.

By combining Retrieval-Augmented Generation, semantic search, and Groq LLM integration, the system successfully provided contextual and source-based responses directly from uploaded research documents.

---

## Project Outcomes

### Faster Research Exploration

Users could quickly locate important information from lengthy scientific papers without manually searching through entire documents.

### Context-Aware Responses

The RAG-based architecture improved response quality by generating answers using retrieved contextual data from the uploaded paper source.

### Improved Accessibility

The conversational interface simplified research exploration for users who found academic papers difficult or overwhelming to read traditionally.

### Efficient AI Interaction

Groq integration enabled faster response generation and smoother real-time chatbot interactions.

---

## Impact

| Area | Outcome |
| --- | --- |
| Research Efficiency | Reduced the time required to understand and summarize scientific papers. |
| Accessibility | Made academic content more approachable through conversational interaction. |
| AI Accuracy | Improved contextual accuracy using retrieval-based response generation. |
| User Experience | Created a more interactive and efficient document exploration workflow. |
| Scalability | Designed to support multiple documents and future AI workflow expansion. |
  `,

    links: [
      { icon: "figma", label: "Figma", url: "https://www.figma.com/design/qLUW7uRMoVRpK1TSHuxpbW/Paper?m=auto&t=pSnwmQY6IwmBxlNE-1" },
      { icon: "github", label: "Repository", url: "https://github.com/anugerah170405/rag-paper.git" },
    ],

    authors: [
      { ...AUTHOR.sthaford, role: "Leader" },
      { ...AUTHOR.stiven, role: "Backend" },
      { ...AUTHOR.zacklee, role: "Backend" },
      { ...AUTHOR.anugerah, role: "Frontend" },
      { ...AUTHOR.rayden, role: "Frontend" },
    ],
  },

  {
    title: "Kospedia",
    category: "UI/UX Design",

    description:
      "Kospedia is a mobile-based boarding house platform designed to help students search, verify, and manage rental information more efficiently through a modern and user-centered experience.",

    tags: ["UI", "UX", "Android", "Research", "Design Thinking"],

    thumbnail:
      "https://raw.githubusercontent.com/anugerah170405/assets/main/images/1778731862435_image_30__1_.png",

    challenge: `
Finding a suitable boarding house remains a major challenge for many students, especially newcomers who are unfamiliar with their new environment.

Most rental information is still distributed through conventional methods such as banners, posters, or social media posts, which often provide incomplete and unreliable information.

As a result, users frequently experience:

- difficulty finding boarding houses that match their budget and preferences,
- limited access to accurate facility and location information,
- inefficient communication with property owners,
- and uncertainty regarding safety, comfort, and rental policies.

The challenge was to design a digital platform capable of simplifying the boarding house search experience while improving transparency, accessibility, and trust between tenants and property owners.

---

## User Research

Research was conducted using interviews, empathy mapping, and observation involving both students and boarding house owners.

| User Group | Key Findings |
| --- | --- |
| Students | Prioritized affordability, location, facilities, and safety when choosing boarding houses. |
| Property Owners | Experienced difficulties managing tenants, promotions, and property maintenance. |
| Pain Points | Incomplete information, manual communication, and lack of trustworthy verification systems. |
| User Needs | Better search systems, transparent information, and easier interaction between both parties. |

---

## Empathy Map — Property Student

![Screenshot 2026 05 14 at 12.17.24](https://raw.githubusercontent.com/anugerah170405/assets/main/images/1778732291397_Screenshot_2026-05-14_at_12.17.24.png)

---



## Empathy Map — Owner
![Screenshot 2026 05 14 at 12.17.30](https://raw.githubusercontent.com/anugerah170405/assets/main/images/1778732308893_Screenshot_2026-05-14_at_12.17.30.png)
  `,

    solution: `
To address these issues, we designed Kospedia as a modern mobile platform focused on simplifying boarding house discovery, verification, and management through a more intuitive and transparent user experience.

The application was developed using a human-centered design approach supported by Design Thinking methodology.

---

## Core Features

### Smart Boarding House Discovery

Users can search for boarding houses based on:

- location,
- pricing,
- facilities,
- categories,
- and user preferences.

### Detailed Property Information

Each listing provides more transparent and complete information, including:

- room facilities,
- pricing details,
- location maps,
- property photos,
- and rental policies.

### Direct Communication System

Integrated chat and communication features allow students and property owners to interact more efficiently without relying on external platforms.

### Wishlist & Booking Experience

Users can save preferred boarding houses and manage booking activities directly through the application.

---

## Feature Overview

| Feature | Description |
| --- | --- |
| Smart Search System | Help users quickly discover boarding houses using filters and categories. |
| Interactive Property Details | Display complete property information with visual and facility support. |
| Chat & Communication | Simplify communication between tenants and property owners. |
| Wishlist & Booking | Allow users to save and manage preferred rental options. |
| User-Centered Interface | Designed with accessibility, clarity, and usability in mind. |
  `,

    process: `
## Design Thinking Approach

The project was developed using the Design Thinking methodology consisting of five main stages:

1. Empathize  
2. Define  
3. Ideate  
4. Prototype  
5. Test

This approach allowed the design process to remain focused on real user needs throughout the development cycle.

---

## User Flow & Interaction Design

The user flow was designed to minimize friction during the property searching and booking process while keeping navigation intuitive for both students and property owners.

---

## Wireframing & Prototyping

Low-fidelity and high-fidelity prototypes were created to explore layout structures, information hierarchy, and interaction patterns before usability testing.

The prototype included key pages such as:

- Sign In & Sign Up,
- Home,
- Boarding House Categories,
- Property Details,
- Wishlist,
- Booking,
- Payment,
- Profile,
- and Chat.

---

## Usability Testing

Usability testing was conducted using Maze to evaluate navigation clarity, interaction flow, and task completion efficiency across multiple user scenarios.

Several testing scenarios were created for both tenants and boarding house owners to validate the overall user experience and interaction design.

| Scenario | Description | Maze Link |
| --- | --- | --- |
| User Registration & Booking | Users create accounts and book boarding houses through the application flow. | https://t.maze.co/411816437 |
| Compare & Report Feature | Users compare boarding houses and report damaged facilities or issues. | https://t.maze.co/411995150 |
| Search & Filtering | Users search and filter boarding houses based on preferences and facilities. | https://t.maze.co/411844349 |
| Boarding House Owner Flow | Evaluate interactions and navigation from the property owner perspective. | https://t.maze.co/411952233 |
| Owner Dashboard Management | Property owners create accounts, edit pricing, and manage property descriptions. | https://t.maze.co/411346197 |


Testing feedback was then used to improve interaction clarity and overall user experience.
  `,

    result: `
The final result was a modern and user-friendly mobile application that successfully improved the boarding house search experience for students while helping property owners manage and promote their rentals more efficiently.

By combining user-centered design principles, Design Thinking methodology, and usability testing, Kospedia transformed traditional boarding house searching into a more accessible and reliable digital experience.

---

## Project Outcomes

### Better Property Discovery

Users were able to search for boarding houses more efficiently using filters, categories, and location-based exploration.

### Improved Information Transparency

Detailed property pages helped users better understand pricing, facilities, and rental conditions before making decisions.

### Enhanced User Experience

The interface successfully reduced confusion and simplified navigation through a cleaner and more intuitive mobile experience.

### More Efficient Communication

Integrated communication features improved interactions between students and property owners.

---

## Impact

| Area | Outcome |
| --- | --- |
| Accessibility | Simplified the process of finding suitable boarding houses for students. |
| Transparency | Improved trust through more complete and accurate rental information. |
| User Experience | Created a more intuitive and efficient mobile interaction flow. |
| Property Promotion | Helped property owners digitally promote their boarding houses to a wider audience. |
| Usability | Achieved positive usability feedback through interaction testing and heatmap analysis. |
  `,

    links: [
      { icon: "prototype", label: "Prototype", url: "https://www.figma.com/proto/Z9qv2ckIUZ44itqINvru6s/KosPedia?node-id=0-1&t=nGLSlgO2kxD39jGV-1" },
      { icon: "figma", label: "Figma", url: "https://www.figma.com/design/Z9qv2ckIUZ44itqINvru6s/KosPedia?node-id=810-1893&t=nGLSlgO2kxD39jGV-1" },
      { icon: "document", label: "Journal", url: "https://docs.google.com/document/d/1xDoryw1wqer3qs0hsYw1f_BkCrLjVbi4rkTMwo6LW8U/edit?usp=sharing" },
      { icon: "document", label: "Figjam", url: "https://www.figma.com/board/PlPjE5dhaqbwTIqUYw1830/KostPedia?node-id=0-1&t=XABLYy4WmjZfe9va-1" },
    ],

    authors: [
      { ...AUTHOR.anugerah, role: "UI/UX Designer" },
      { ...AUTHOR.natalia, role: "UI/UX Designer" },
      { ...AUTHOR.rafli, role: "Interviewer" },
      { ...AUTHOR.greefine, role: "Interviewer" },
      { ...AUTHOR.joshua, role: "Journal Writer" },
      { ...AUTHOR.otniel, role: "Journal Writer" },
    ],
  },

  {
    title: "Todo AI",
    category: "App Design",

    description:
      "More than just a regular to-do list, Todo AI is a modern productivity application designed to help users stay consistent with their daily tasks through AI-powered task management and interactive productivity features.",

    tags: ["Flutter", "AI", "Mobile", "Hive"],

    thumbnail:
      "https://raw.githubusercontent.com/anugerah170405/assets/main/images/1778634729229_project1.png",

    challenge: `
Humans naturally tend to forget things, especially when overwhelmed with daily activities and responsibilities. The more tasks and thoughts they need to manage, the easier it becomes to overlook or forget important things.

As a result, many users experience:

- frequently forgetting important tasks and schedules,
- feeling too lazy to manually organize task lists,
- difficulty staying motivated while managing daily activities,
- and frustration with to-do list applications that feel complicated or visually unappealing.

The challenge was to design a productivity application that could simplify task management while making the experience more engaging, accessible, and enjoyable for everyday users.

---

## User Problems

| Category | Findings |
| --- | --- |
| Productivity | Users often struggled to consistently organize and complete daily tasks. |
| User Experience | Many to-do applications felt overly complicated and difficult to navigate. |
| Motivation | Traditional task management apps lacked engaging interaction and motivation systems. |
| Accessibility | Users preferred simple interfaces that required minimal effort to use. |
  `,

    solution: `
To address these issues, we designed a lightweight and modern productivity application focused on simplifying task management through AI-powered automation and interactive user experiences.

The application was built with a clean and minimal interface to ensure usability, accessibility, and comfort for daily use.

---

## Core Features

### AI-Powered Task Management

Integrated AI features allow users to create and manage tasks more efficiently through prompt-based interactions.

Users can:

- generate task lists automatically,
- update existing tasks,
- organize schedules,
- and manage productivity workflows instantly using AI assistance.

### Interactive Checklist System

The application uses a simple checklist-based layout with interactive checkboxes to make task tracking more intuitive and organized.

### Spin Wheel Productivity Feature

A built-in Spin Wheel feature helps improve user motivation by randomly selecting tasks or suggesting break times in a more playful and engaging way.

### Minimal & Comfortable Interface

The interface was designed using a modern minimal aesthetic combined with soft and calming visuals to create a more comfortable productivity experience.

---

## Feature Overview

| Feature | Description |
| --- | --- |
| AI Task Automation | Create and manage tasks instantly using AI-powered prompts. |
| Interactive Checklist | Organize and track daily activities with a simple checklist system. |
| Spin Wheel Feature | Increase engagement through randomized task and break suggestions. |
| Minimal User Interface | Clean and modern visual design optimized for comfort and usability. |
| Lightweight Performance | Smooth mobile experience designed for everyday productivity usage. |
  `,

    process: `
## User Flow

The user flow was designed to minimize friction during task creation and management while keeping interactions simple and intuitive for everyday users.

---

## Interface Exploration

Different layout explorations and interaction structures were tested to ensure the application remained visually clean while supporting efficient task management workflows.

---

## Visual Design

The visual design focused on creating a modern and calming productivity experience through:

- minimal layouts,
- soft color palettes,
- clean typography,
- and intuitive interactions.

---

## System Design

The application structure was optimized to support lightweight performance, smooth navigation, and responsive mobile interactions for consistent everyday use.
  `,

    result: `
The final result is a lightweight, modern, and engaging productivity application designed to help users manage daily tasks more consistently and efficiently.

By combining AI-powered task management with interactive productivity features, the application transforms the traditional to-do list experience into something more practical, enjoyable, and motivating.

---

## Project Outcomes

### AI-Powered Productivity

Users could create and manage tasks significantly faster through AI-assisted automation and prompt-based interactions.

### Better Task Organization

The checklist-based system provided a cleaner and more organized way to manage daily activities and schedules.

### Improved User Engagement

The Spin Wheel feature introduced playful interactions that helped make productivity feel less repetitive and more enjoyable.

### Simplified User Experience

The clean and intuitive interface reduced complexity and improved accessibility for users who found traditional productivity apps difficult to use.

---

## Impact

| Area | Outcome |
| --- | --- |
| Productivity | Helped users organize and complete daily tasks more consistently. |
| Efficiency | Reduced manual effort through AI-powered task automation. |
| User Engagement | Increased motivation with interactive and playful productivity features. |
| Accessibility | Simplified task management for users who prefer minimal interfaces. |
| Performance | Delivered a smooth and lightweight mobile experience for everyday usage. |
  `,

    links: [
      {
        icon: "github",
        label: "Repository",
        url: "https://github.com/anugerah170405/Todo-AI.git",
      },
    ],

    authors: [
      { ...AUTHOR.anugerah, role: "Developer" },
      { ...AUTHOR.stiven, role: "Developer" },
      { ...AUTHOR.sthaford, role: "Developer" },
    ],
  },

  {
    title: "MiRide",

    category: "UI/UX Design",

    description:
      "MiRide is a modern transportation mobile application designed to provide users with a safer, faster, and more enjoyable ride-booking experience through a clean and user-friendly interface.",

    tags: [
      "UI",
      "UX",
      "Mobile App",
      "Transportation",
      "Ride Booking",
    ],

    thumbnail:
      "https://raw.githubusercontent.com/anugerah170405/assets/main/images/1778744173642_miride__1_.png",

    challenge: `
Many transportation applications focus heavily on functionality but often overlook user comfort, visual clarity, and emotional experience during daily usage.

Users frequently experience:

- confusing booking flows,
- cluttered interfaces,
- lack of trust and safety perception,
- inconsistent visual experiences,
- difficulty navigating important ride information quickly.

The challenge was to design a transportation application that feels modern, simple, safe, and enjoyable while maintaining accessibility for everyday users.

---

## User Research

Research was conducted to understand how users interact with transportation applications and what factors influence comfort and trust during ride-booking experiences.

| Category | Findings |
| --- | --- |
| Main Users | Daily commuters, students, and workers. |
| User Expectations | Fast booking, clear navigation, and trustworthy experience. |
| Pain Points | Complicated interfaces, unclear ride status, and poor accessibility. |
| Visual Preferences | Modern, clean, and minimal interfaces with strong readability. |
| Key Insight | Users associate safety and comfort with simplicity and clarity. |
  `,

    solution: `
To solve these issues, MiRide was designed as a modern mobile transportation platform focused on simplicity, accessibility, and safety-oriented user experiences.

The interface combines clean layouts, modern typography, and intuitive navigation patterns to create a smoother booking experience for users.

---

## Design Concept

### Safe & Comfortable Experience

The overall visual direction was inspired by vehicle mirrors, which symbolize safety and awareness during travel.

The application was designed to make users feel:

- safe,
- comfortable,
- confident,
- connected throughout the ride experience.

---

## Core Features

### Ride Booking

Allow users to quickly book transportation services through a simple and minimal booking flow.

### Real-Time Ride Information

Provide clear ride status updates, driver information, and trip progress tracking.

### Modern Navigation System

Simplify user interaction through clean layouts and intuitive navigation patterns.

### Friendly User Experience

Use approachable visuals, balanced spacing, and strong readability to create a more enjoyable daily experience.

---

## Feature Overview

| Feature | Description |
| --- | --- |
| Ride Booking | Simple and fast transportation booking flow. |
| Real-Time Tracking | Display ride status and trip progress information. |
| Driver Information | Provide transparent driver and vehicle details. |
| Clean Navigation | Improve accessibility through intuitive interface structures. |
| Safety-Oriented Design | Visual design inspired by awareness and transportation safety. |
  `,

    process: `
## Brand & UI Direction

![Screenshot 2026 05 14 at 15.38.05](https://raw.githubusercontent.com/anugerah170405/assets/main/images/1778744312350_Screenshot_2026-05-14_at_15.38.05.png)

The visual direction combines transportation safety symbolism with a modern and friendly mobile UI approach.

---

## Color System

### Primary Colors

| Color | Hex |
| --- | --- |
| Yellow | #FEC809 |
| Black | #000000 |

The yellow color represents:

- energy,
- positivity,
- enjoyable travel experiences.

Black creates visual balance, readability, and modern contrast throughout the interface.

---

## Typography

### Plus Jakarta Sans

The interface uses **Plus Jakarta Sans** to maintain readability, modern appearance, and visual consistency across mobile screens.

Typography hierarchy includes:

- Regular,
- Medium,
- Semi Bold,
- Bold.

---

## Logo Philosophy

The name “MiRide” comes from two words:

- “Mirror”
- “Ride”

Vehicle mirrors symbolize safety and awareness during travel. This concept became the foundation for both the branding and interface experience.

The slogan:

### “Let’s ride your day”

represents a transportation experience that supports daily activities while remaining safe and enjoyable.

---

## UI Exploration

Several interface explorations were created to test layout structures, booking flows, readability, and accessibility before finalizing the design system.
  `,

    result: `
The final result was a modern and user-friendly transportation mobile application that successfully combines safety, simplicity, and enjoyable user experiences into a clean interface system.

MiRide delivers a transportation experience that feels accessible, visually modern, and comfortable for daily use.

---

## Project Outcomes

### Cleaner User Experience

Successfully simplified transportation booking flows into a more intuitive mobile experience.

### Strong Visual Consistency

Developed a consistent interface system using:

- modern typography,
- balanced spacing,
- accessible color hierarchy.

### Safety-Oriented Design

Created visual experiences inspired by transportation awareness and safety symbolism.

### Better Accessibility

Improved readability and navigation clarity for users across different age groups and technological familiarity levels.

---

## Impact

| Area | Outcome |
| --- | --- |
| User Experience | Improved booking flow simplicity and usability. |
| Visual Clarity | Increased readability and interface consistency. |
| Accessibility | Simplified navigation for everyday users. |
| Brand Perception | Created a more modern and trustworthy transportation experience. |
  `,

    links: [
      {
        icon: "figma",
        label: "Figma",
        url: "https://www.figma.com/design/Ky7H7BXJC0uzgSbfW95e1w/MiRide?node-id=4-305&t=xJf5rom8IYAfR9bL-1",
      },
      {
        icon: "prototype",
        label: "Prototype",
        url: "https://www.figma.com/proto/Ky7H7BXJC0uzgSbfW95e1w/MiRide?node-id=4-305&t=xJf5rom8IYAfR9bL-1",
      },
    ],

    authors: [
      {
        ...AUTHOR.anugerah, role: "UI/UX Designer"
      },
    ],
  },



  {
    title: "Research Management System (RMS)",

    category: "System Analysis & Design",

    description:
      "Research Management System (RMS) is a web-based research management platform designed to streamline the entire research lifecycle within universities, from proposal submission and review processes to monitoring, evaluation, and publication reporting.",

    tags: [
      "System Analysis",
      "UML",
      "Research Management",
      "Academic System",
      "Software Engineering",
    ],

    thumbnail:
      "https://raw.githubusercontent.com/anugerah170405/assets/main/images/1778734602673_jaigrjq3498t.png",

    challenge: `
Universities often manage research administration manually, causing inefficiencies, delays, and communication gaps between researchers, faculty committees, reviewers, deans, and LPPM.

Several major problems identified during interviews and observations include:

- research proposal submissions being handled manually,
- difficulties tracking research progress and evaluations,
- inconsistent documentation and publication validation,
- lack of centralized monitoring for research activities,
- delays in approval and decision-making processes.

The challenge was to design a centralized research management system capable of simplifying and digitizing the full research workflow while ensuring transparency, efficiency, and structured collaboration between stakeholders.

---

## User Research

Interviews and observations were conducted with academic staff and stakeholders involved in research administration processes at the university.

| Category | Findings |
| --- | --- |
| Main Users | Researchers, Faculty Research Committees, Reviewers, Deans, and LPPM. |
| Current Process | Most workflows were still handled manually through forms and document submissions. |
| Pain Points | Slow approval process, scattered documentation, and difficult monitoring. |
| User Needs | Centralized management, transparent workflow tracking, and easier reporting. |
| Key Insight | Stakeholders needed a structured platform capable of handling the entire research lifecycle digitally. |

---

## Interview Findings

Based on interviews with university stakeholders, several important workflow requirements were identified:

- proposal submissions require multi-level approvals,
- monitoring and evaluation processes involve faculty committees and LPPM,
- publication reporting requires publication proof or LOA validation,
- title changes must occur before progress reporting,
- research funding validation depends on publication targets and research duration.
  `,

    solution: `
To solve these problems, a comprehensive Research Management System (RMS) was designed to support the full research lifecycle through a centralized digital platform.

The system focuses on workflow automation, approval management, monitoring processes, and publication validation while ensuring accessibility for all academic stakeholders.

---

## Core Features

### Proposal Submission & Review

Allow researchers to submit research proposals digitally while enabling committees and reviewers to evaluate submissions efficiently.

### Monitoring & Evaluation

Support research monitoring processes through progress reports, evaluations, and monitoring decisions.

### Publication Reporting

Enable researchers to upload final reports, publication evidence, and Letter of Acceptance (LoA) documents.

### Research Approval Workflow

Provide structured approval processes involving Faculty Committees, Reviewers, Deans, and LPPM.

### Decision Letter (SK) Management

Generate and manage official research decision letters including:

- SK Penugasan,
- SK Pemantauan,
- SK Penyelesaian.

---

## Feature Overview

| Feature | Description |
| --- | --- |
| Login & Authentication | Allow authorized users to securely access the RMS platform. |
| Proposal Submission | Enable researchers to submit proposals digitally. |
| Proposal Review | Support reviewer evaluation and recommendation processes. |
| Monitoring & Evaluation | Track research progress and evaluation results. |
| Publication Reporting | Upload publication reports and publication evidence. |
| Title Change Management | Handle research title change requests before progress reporting. |
| SK Management | Generate official decision letters for research stages. |
| Role-Based Workflow | Support multiple stakeholder roles within the system. |
  `,

    process: `
## Use Case Diagram

![Screenshot 2026 05 14 at 12.59.16](https://raw.githubusercontent.com/anugerah170405/assets/main/images/1778735076712_Screenshot_2026-05-14_at_12.59.16.png)

The use case diagram illustrates interactions between researchers, faculty committees, reviewers, deans, LPPM, and the RMS platform throughout the research lifecycle.

---

## Activity Diagrams

### Login Activity Diagram

![Screenshot 2026 05 14 at 12.59.57](https://raw.githubusercontent.com/anugerah170405/assets/main/images/1778735100786_Screenshot_2026-05-14_at_12.59.57.png)

### Proposal Submission Activity Diagram

![Screenshot 2026 05 14 at 13.00.04](https://raw.githubusercontent.com/anugerah170405/assets/main/images/1778735104522_Screenshot_2026-05-14_at_13.00.04.png)

### Monitoring & Evaluation Activity Diagram

![Screenshot 2026 05 14 at 13.00.32](https://raw.githubusercontent.com/anugerah170405/assets/main/images/1778735127586_Screenshot_2026-05-14_at_13.00.32.png)

### Publication Reporting Activity Diagram

![Screenshot 2026 05 14 at 13.00.15](https://raw.githubusercontent.com/anugerah170405/assets/main/images/1778735108903_Screenshot_2026-05-14_at_13.00.15.png)

The activity diagrams were designed to visualize the workflow processes and decision-making flow across different research management activities.

---

## Class Diagram

![Screenshot 2026 05 14 at 13.01.16](https://raw.githubusercontent.com/anugerah170405/assets/main/images/1778735165030_Screenshot_2026-05-14_at_13.01.16.png)

The class diagram represents the structural design of the RMS platform including entities, attributes, methods, and relationships between research-related components.

---

## Sequence Diagrams

### Proposal Submission Sequence Diagram

![Screenshot 2026 05 14 at 13.12.28](https://raw.githubusercontent.com/anugerah170405/assets/main/images/1778735759750_Screenshot_2026-05-14_at_13.12.28.png)

### Monitoring & Evaluation Sequence Diagram

![Screenshot 2026 05 14 at 13.12.57](https://raw.githubusercontent.com/anugerah170405/assets/main/images/1778735762178_Screenshot_2026-05-14_at_13.12.57.png)

### Publication Reporting Sequence Diagram

![Screenshot 2026 05 14 at 13.13.09](https://raw.githubusercontent.com/anugerah170405/assets/main/images/1778735764058_Screenshot_2026-05-14_at_13.13.09.png)

Sequence diagrams were created to describe interactions between system components and stakeholders during major workflows.

---

## System Analysis Documentation

The RMS project includes detailed use case descriptions covering:

- Login,
- Proposal Submission & Revision,
- Monitoring & Evaluation,
- Proposal Review,
- Publication Reporting,
- Title Changes,
- Proposal Approval,
- Decision Letter (SK) Issuance.

Each use case contains:

- goals,
- preconditions,
- successful end conditions,
- failed end conditions,
- main flows,
- extension flows.
  `,

    result: `
The final result was a structured and comprehensive Research Management System design capable of digitizing and simplifying academic research management workflows.

The system successfully transformed manual administrative processes into a more organized and transparent digital workflow.

---

## Project Outcomes

### Centralized Research Workflow

Successfully integrated proposal submission, monitoring, evaluation, publication reporting, and approval workflows into a single platform.

### Improved Process Transparency

Allowed stakeholders to track proposal statuses, evaluations, approvals, and publication progress more efficiently.

### Structured Approval System

Implemented a multi-role workflow involving:

- Researchers,
- Faculty Committees,
- Reviewers,
- Deans,
- LPPM.

### Better Research Documentation

Enabled centralized management of research documents, publication evidence, evaluation forms, and official decision letters.

---

## Impact

| Area | Outcome |
| --- | --- |
| Workflow Efficiency | Reduced manual administrative processes and repetitive documentation. |
| Transparency | Improved visibility of research progress and approval stages. |
| Collaboration | Simplified coordination between researchers and academic stakeholders. |
| Documentation | Centralized research-related files and official documents. |
| Decision Making | Supported structured and traceable approval workflows. |

---

## Key Learnings

Through this project, several important insights about academic system design and workflow management were gained:

- understanding complex institutional workflows,
- translating manual processes into digital systems,
- designing structured UML documentation,
- improving process clarity through diagrams and system analysis,
- identifying stakeholder roles and responsibilities.
  `,

    links: [
      { icon: "prototype", label: "Prototype", url: "https://www.figma.com/proto/TuLyEGWw7PZEK4O1CdoWVk/RMS-Design?node-id=0-1&t=6NfhFuXwc2hP1cBm-1" },
      { icon: "figma", label: "Figma", url: "https://www.figma.com/design/TuLyEGWw7PZEK4O1CdoWVk/RMS-Design?node-id=0-1&t=6NfhFuXwc2hP1cBm-1" },
      { icon: "document", label: "Design Data", url: "https://www.figma.com/board/KQoRRaxeDxqKkFXYn5mZgM/Design-Data?t=pSnwmQY6IwmBxlNE-6" },
      { icon: "document", label: "Interface", url: "https://www.figma.com/board/GoGPecZgBVpd29qxO10RMT/Interface?t=pSnwmQY6IwmBxlNE-6" },
    ],

    authors: [
      {
        ...AUTHOR.anugerah, role: "System Analyst & Designer",
      },
    ],
  },


  {
    title: "Chess Bug",
    category: "Software Development",

    description:
      "Chess is a terminal-based chess game built with Python, applying Object-Oriented Programming (OOP) concepts and an AI opponent powered by the Minimax algorithm.",

    tags: ["Python", "OOP", "AI", "Minimax", "Terminal Game"],

    thumbnail:
      "https://raw.githubusercontent.com/anugerah170405/assets/main/images/1778746995931_chess2609.png",

    challenge: `
Developing a fully functional chess game in a terminal environment presented several challenges, especially in terms of:

- accurately representing the chessboard and piece movements in the terminal,
- implementing all chess rules including special moves such as castling, en passant, and pawn promotion,
- building an AI opponent capable of analyzing positions and making strategic decisions,
- designing a well-structured and maintainable codebase using OOP principles.

The challenge was to create a functional and playable chess game with a challenging AI opponent, entirely within a Python-based terminal environment.

---

## Problem Analysis

| Category | Findings |
| --- | --- |
| Board Representation | The 8x8 chessboard needed to be clearly visualized in the terminal. |
| Movement Logic | Each chess piece has unique and complex movement rules. |
| AI Opponent | The AI needed to evaluate board positions and choose optimal moves. |
| Code Structure | The complexity of the game required a solid and organized OOP design. |
  `,

    solution: `
To address these challenges, a terminal-based chess game was developed in Python using a modular OOP architecture and an AI opponent powered by the Minimax algorithm.

---

## Core Features

### Terminal-Based Chess Board

Displays an interactive 8x8 chessboard directly in the terminal with clear and readable piece representations.

### Full Chess Rule Implementation

Implements complete chess movement rules for all types of pieces:

- Pawn, Rook, Knight, Bishop, Queen, and King,
- special moves such as castling, en passant, and pawn promotion,
- check, checkmate, and stalemate detection.

### AI Opponent

Provides an AI opponent that uses algorithmic logic to analyze positions and make decisions based on board evaluation, with a Beginner difficulty mode.

### OOP Architecture

A well-structured codebase built using Object-Oriented Programming principles, making the project easier to maintain, extend, and improve in the future.

---

## Feature Overview

| Feature | Description |
| --- | --- |
| Terminal Chess Board | Interactive 8x8 chessboard visualization in the terminal. |
| Full Rule Implementation | Complete implementation of all chess movement rules. |
| AI Opponent | AI-powered opponent for single-player gameplay with Beginner difficulty. |
| OOP Design | Modular architecture based on Object-Oriented Programming principles. |
| Main Menu | Main menu interface for navigating game modes. |
  `,

    process: `
## OOP Architecture

The project was designed using OOP principles with clear separation of responsibilities between classes:

- **Board** — Manages board state, piece positions, and move validation.
- **Piece** — Base class for all chess pieces with specific movement logic.
- **Player** — Represents both human and AI players.
- **Game** — Controls game flow, turns, and win/loss conditions.

---

## AI Implementation

The AI opponent was built to analyze board positions and select moves based on heuristic evaluation, providing a suitable challenge for beginner-level players.

---

## Main Menu

![Screenshot 2026 05 14 at 16.05.44](https://raw.githubusercontent.com/anugerah170405/assets/main/images/1778746007203_Screenshot_2026-05-14_at_16.05.44.png)

The main menu interface allows players to choose a game mode before starting a chess session.

---

## Gameplay Flow

The gameplay flow was designed to feel intuitive within a terminal environment:

![Screenshot 2026 05 14 at 16.05.53](https://raw.githubusercontent.com/anugerah170405/assets/main/images/1778746012134_Screenshot_2026-05-14_at_16.05.53.png)

1. The player opens the application and enters the Main Menu.
2. The player selects a game mode (vs AI or vs Player).
3. The chessboard is displayed in the terminal.
4. The player enters moves using coordinate-based input.
5. The AI processes and responds with its next move.
6. The game continues until checkmate, stalemate, or resignation.
  `,

    result: `
The final result is a fully functional and playable terminal-based chess game built entirely with Python using a solid OOP architecture.

This project successfully implements the complete set of chess rules along with an AI opponent capable of challenging beginner players.

---

## Project Outcomes

### Complete Functionality

All chess rules were successfully implemented, including piece movement, check/checkmate detection, and special moves.

### AI Opponent

The AI opponent was successfully developed and can automatically respond to player moves through board position analysis.

### Clean OOP Architecture

A clean and modular code structure makes the project easier to maintain and expand with future features.

---

## Impact

| Area | Outcome |
| --- | --- |
| Gameplay | A fully functional and playable terminal-based chess game. |
| AI | An AI opponent that provides a challenge for beginner players. |
| Code Quality | A clean, modular, and scalable OOP architecture. |
| Learning | A practical implementation of OOP concepts in Python-based game development. |
  `,

    links: [
      {
        icon: "github",
        label: "Repository",
        url: "https://github.com/anugerah170405/Chess",
      },
    ],

    authors: [
      { ...AUTHOR.anugerah, role: "Developer" },
    ],
  },

  {
    title: "Personal Branding",

    category: "Branding",

    description:
      "A personal brand identity project designed to visually represent personality, values, and life philosophy through a modern, minimal, and bold logo system inspired by personal experiences, culture, and spirituality.",

    tags: [
      "Branding",
      "Logo Design",
      "Personal Identity",
      "Minimal Design",
      "Visual Identity",
    ],

    thumbnail:
      "https://raw.githubusercontent.com/anugerah170405/assets/main/images/1778770653709_JJJ740q7dm.png",

    challenge: `
Creating a personal brand identity is not simply about designing a logo — it is about translating personality, beliefs, experiences, and values into a meaningful visual form.

As someone passionate about technology and continuous self-growth, I wanted to create a visual identity that could genuinely represent who I am both personally and professionally.

The logo would be used across multiple purposes, including:

- personal identity,
- professional branding,
- business identity,
- social media presence.

The biggest challenge was creating a design that feels:

- modern,
- minimal,
- bold,
- meaningful,
- timeless.

At the same time, the logo needed to communicate deeper values such as:

- humility,
- inspiration,
- growth,
- prosperity,
- achievement.
  `,

    solution: `
To solve this challenge, I started by reflecting on the most important aspects that shape my identity and life philosophy.

Several personal elements became the foundation of the exploration process:

- hometown (South Nias, North Sumatra, Indonesia),
- cultural background,
- family values,
- personal growth,
- spirituality,
- passion for technology and creativity.

From these elements, I simplified and grouped everything into three main pillars that became the core philosophy behind the identity system.

---

## Core Brand Pillars

### Social

Represents cultural values, relationships, contribution to others, and personal growth within society.

### Personal

Represents individuality, personality, family background, ambitions, and self-development.

### Spiritual

Represents faith, humility, purpose, and the importance of serving others.

These three pillars became the conceptual framework used to shape the visual direction of the logo.
  `,

    process: `
## Logo Foundation
![Screenshot 2026 05 14 at 23.34.07](https://raw.githubusercontent.com/anugerah170405/assets/main/images/1778773033726_Screenshot_2026-05-14_at_23.34.07.png)
The visual identity was built using the initials:

- “A”
- “G”

from the name **Anugerah Gari**.

These initials became the structural base of the logo while maintaining a clean and minimal geometric appearance.

---

## Symbol Exploration
![Screenshot 2026 05 14 at 23.36.17](https://raw.githubusercontent.com/anugerah170405/assets/main/images/1778773037589_Screenshot_2026-05-14_at_23.36.17.png)

### Personal Element

The overall structure of the logo represents self-identity and personal growth through sharp, modern, and balanced forms.

### Social & Spiritual Elements

Combining social and spiritual symbolism was the most challenging part of the process because both aspects often intersect in different ways throughout life.

To create balance, I explored connections between cultural philosophy and spiritual values.

The final form contains symbolic meanings such as:

- a helping hand representing humility, service, and spiritual character,
- a futuristic mountain shape representing achievement, vision, growth, and reaching the highest point in life.

---

## Visual Direction

The design focuses on:

- modern minimalism,
- bold geometric structures,
- clean visual balance,
- timeless simplicity,
- strong symbolism.

The final visual style was intentionally designed to remain versatile across:

- digital platforms,
- business branding,
- social media,
- personal identity applications.
  `,

    result: `
The final result was a modern and meaningful personal brand identity that successfully combines minimalism, symbolism, and personal philosophy into a single visual system.

The logo represents not only visual aesthetics, but also the values and principles that shape my personal journey.

---

## Project Outcomes
![Screenshot 2026 05 14 at 23.42.50 1](https://raw.githubusercontent.com/anugerah170405/assets/main/images/1778773405859_Screenshot_2026-05-14_at_23.42.50_1.png)

### Strong Personal Identity

Created a visual identity that genuinely represents personality, values, and long-term vision.

### Modern & Minimal Design

Developed a clean and timeless logo system suitable for both personal and professional use.

### Meaningful Symbolism

Integrated multiple layers of meaning into a simple geometric form without making the logo visually complicated.

### Flexible Brand Usage

The identity system works effectively across:

- social media,
- digital branding,
- professional portfolios,
- business applications.

---

## Logo Meaning

> Humility, inspiration, growth, and the pursuit of higher purpose.

The logo symbolizes the balance between personal ambition, contribution to society, and spiritual values.
  `,

    links: [],

    authors: [
      {
        ...AUTHOR.anugerah, role:"Brand Designer"
      },
    ],
  }



];


