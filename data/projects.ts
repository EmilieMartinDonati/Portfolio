export type ProjectTagColor = "teal" | "coral" | "purple" | "neutral" | "dark"

export type ProjectTag = {
  label: string
  color: ProjectTagColor
}

/** One screenshot file. */
export type ProjectScreen = {
  src: string
  /** Pixel size of the source file, needed by next/image */
  width: number
  height: number
  alt: string
}

/** One slide of the gallery. `caption` is the optional text shown next to the image. */
export type ProjectImage = ProjectScreen & {
  /** Short name shown on the thumbnail, e.g. "Onboarding" */
  label: string
  /** Extra screens shown after the main one, in an overlapping cascade (e.g. the steps of a flow) */
  moreScreens?: ProjectScreen[]
  caption?: { title: string; text: string }
  /**
   * For a placeholder image: an animated message shown over it, explaining why there is no real screenshot.
   * "confidential" shows a lock, "in-progress" a progress bar.
   */
  notice?: { kind: "confidential" | "in-progress"; title: string; text: string }
}

export type ProjectStat = {
  value: string
  label: string
  /** Shown in the accent colour */
  highlight?: boolean
}

export type ProjectStackGroup = {
  title: string
  items: string[]
  /** One line on why these tools were chosen */
  reason: string
}

export type ProjectArchitectureNode = {
  title: string
  subtitle: string
  parts: string[]
  /** Label of the arrow leading to the next node, e.g. "HTTPS + JWT" */
  linkToNext?: string
}

export type ProjectChallenge = {
  title: string
  tags: ProjectTag[]
  problem: string
  solution: string
  result: string
  /** Optional code or terminal excerpt shown under the challenge */
  excerpt?: {
    /** File name or command, e.g. "domain/sync/queue.ts" or "npm run test" */
    source: string
    kind: "code" | "terminal"
    content: string
  }
}

export type ProjectCaseStudy = {
  /** One-line pitch under the title */
  tagline: string
  links: { live?: string; github?: string }
  images: ProjectImage[]
  context: {
    paragraphs: string[]
    /** Optional: when empty or missing, no stats row is shown */
    stats?: ProjectStat[]
  }
  stackGroups: ProjectStackGroup[]
  architecture?: ProjectArchitectureNode[]
  challenges: ProjectChallenge[]
  outcome: {
    summary: string
    learnings: { title: string; text: string }[]
  }
}

export type Project = {
  /** Used in the URL: /projects/[slug] */
  slug: string
  name: string
  nature: string
  description: string
  stack: string[]
  url: string
  flag: "pet" | "pro"
  /** Content of the detail page. A project without it has no case study yet. */
  caseStudy?: ProjectCaseStudy
}

export const projectsList: Project[] = [
  {
    slug: "moses-supposes",
    name: "Moses Supposes App",
    nature: "Mobile App",
    description: "A collaborative writing app.",
    stack: ["Expo", "Supabase", "Typescript", "Vitest"],
    url: "",
    flag: "pet",
    // TODO: stack and challenges are still mockup content
    caseStudy: {
      tagline:
        "A mobile app built end to end with Expo and Supabase — to create, share and take part in collaborative writing workshops with your students or friends.",
      links: { live: "", github: "" },
      images: [
        {
          src: "/projects/moses-supposes/nouveau_cadavre_exquis_step_1.png",
          width: 494,
          height: 1066,
          alt: "New exquisite corpse, step 1 of 3: title, first sentence and visibility",
          label: "New workshop",
          moreScreens: [
            {
              src: "/projects/moses-supposes/nouveau_cadavre_exquis_step_2.png",
              width: 488,
              height: 1028,
              alt: "Step 2 of 3: writing time per turn, sentences per participant and maximum participants",
            },
            {
              src: "/projects/moses-supposes/nouveau_cadavre_exquis_step_3.png",
              width: 492,
              height: 1060,
              alt: "Step 3 of 3: start and end dates of the participation window",
            },
          ],
        },
        {
          src: "/projects/moses-supposes/landing.png",
          width: 412,
          height: 908,
          alt: "Home screen listing live and upcoming writing workshops",
          label: "Home",
        },
        {
          src: "/projects/moses-supposes/participer.png",
          width: 420,
          height: 928,
          alt: "Taking part in an exquisite corpse: the story so far and the field to write the next lines",
          label: "Take part",
        },
      ],
      context: {
        paragraphs: [
          "In Paris, I met young people who ran collaborative writing games with strangers, right in the street: a few lines handed from one passer-by to the next, until a story emerged that none of them could have written alone.",
          "I wanted to take that idea further. Moses Supposes brings it to your phone, so a teacher can run a writing workshop with a class, or friends can write a story together, one contribution at a time.",
        ],
      },
      stackGroups: [
        {
          title: "Mobile",
          items: ["Expo", "React Native", "TypeScript"],
          reason: "One codebase for iOS and Android, with over-the-air updates for fast fixes.",
        },
        {
          title: "Back end",
          items: ["Supabase", "PostgreSQL", "Row Level Security"],
          reason: "Auth, database and access rules in one place, so the security model lives next to the data.",
        },
        {
          title: "Quality",
          items: ["Vitest", "ESLint", "GitHub Actions"],
          reason: "Business rules are plain TypeScript, tested without a simulator on every push.",
        },
      ],
      architecture: [
        {
          title: "Expo app",
          subtitle: "UI, navigation, local cache",
          parts: ["screens/", "domain/ (pure TS)", "sync queue"],
          linkToNext: "HTTPS + JWT",
        },
        {
          title: "Supabase API",
          subtitle: "Auth and auto-generated REST",
          parts: ["auth.users", "policies (RLS)", "edge functions"],
          linkToNext: "SQL",
        },
        {
          title: "PostgreSQL",
          subtitle: "Source of truth",
          parts: ["profiles", "sessions", "progress"],
        },
      ],
      challenges: [
        {
          title: "Designing a smooth access and onboarding flow",
          tags: [
            { label: "Anonymous access", color: "purple" },
            { label: "Supabase Auth", color: "teal" },
            { label: "Supabase Presence", color: "teal" },
          ],
          problem:
            "A writing workshop only works if people actually join it. Asking every participant to create an account before writing a single line would lose most of them at the door — especially guests who just received a link from a friend or a teacher.",
          solution:
            "On top of Supabase authentication, an anonymous access stored on the user's device lets anyone take part under an anonymous name, with a generated avatar that is always the same for them — like Google's incognito mode. Creating a private workshop only asks for an email, no account, so the results can be shared with its creator once it closes. Invited members join straight from a WhatsApp link, without signing in, and Supabase Presence shows the avatars of everyone currently in the workshop.",
          result:
            "Anyone can start writing within seconds of opening the app or a shared link, while every contribution is still tied to a stable identity.",
        },
        {
          title: "Managing the flow and order of writing turns",
          tags: [
            { label: "Atomicity", color: "purple" },
            { label: "Turn queue", color: "purple" },
            { label: "Supabase Realtime", color: "teal" },
          ],
          problem:
            "In an exquisite corpse, players write one after the other, each one only seeing the previous lines. Turns must follow a strict order even when several people join at the same moment, when a player runs out of time, or when the network drops in the middle of a submission.",
          solution:
            "Joining, submitting and passing the turn are atomic transactions in the database, so simultaneous clicks on \"Join\" can't create duplicate places in the queue. Each turn has a writing time limit: when it expires, the player is asked whether to play again and, if so, goes back to the end of the queue. Supabase Realtime listens for the current player's submission, and the turn only moves on to the next player once the contribution is safely recorded in the database.",
          result:
            "Turns flow on their own, in the right order, with no lost contribution and no player skipped or counted twice.",
        },
        {
          title: "Testing business logic without a simulator",
          tags: [
            { label: "Vitest", color: "purple" },
            { label: "TypeScript", color: "purple" },
            { label: "CI", color: "neutral" },
          ],
          problem:
            "Rules were mixed into React components. Testing one meant booting a device, and regressions slipped through between releases.",
          solution:
            "Moved every rule into a pure TypeScript domain layer with no Expo imports. Components only call it; Vitest runs it in Node.",
          result:
            "The full suite runs in under four seconds on each push, so refactoring the UI no longer risks the logic.",
          excerpt: {
            source: "npm run test",
            kind: "terminal",
            content: `✓ domain/sync/queue.test.ts (18 tests) 212ms
✓ domain/progress/streak.test.ts (31 tests) 96ms
✓ domain/session/scoring.test.ts (44 tests) 140ms

Test Files  14 passed (14)
     Tests  143 passed (143)
  Duration  3.61s`,
          },
        },
      ],
      outcome: {
        summary:
          "Close with the result: where the project stands today, what it proved, and the numbers or feedback that back it up.",
        learnings: [
          {
            title: "Decide the sync model first.",
            text: "Adding offline support afterwards meant rewriting every write path.",
          },
          {
            title: "Test access rules like features.",
            text: "A policy without a test is an assumption.",
          },
          {
            title: "Keep the domain free of the framework.",
            text: "It is what made the app cheap to change.",
          },
        ],
      },
    },
  },
  {
    slug: "kfc",
    name: "KFC",
    nature: "ERP / WMS",
    description:
      "Kitchen Foodcheri: the ERP-WMS behind Foodcheri's logistics, from recipe conception to order dispatch.",
    stack: ["React", "Parse Server", "Material UI"],
    url: "",
    flag: "pro",
    // TODO: every "Placeholder" string and the screenshots (public/projects/kfc) still need the real content
    caseStudy: {
      tagline:
        "Kitchen Foodcheri — an ERP-WMS dedicated to Foodcheri's logistics, from recipe conception to order dispatch.",
      links: { live: "", github: "" },
      images: [
        {
          src: "/projects/kfc/planning.png",
          width: 1600,
          height: 1000,
          alt: "Blurred illustration standing in for the confidential planning calendar",
          label: "Planning",
          notice: {
            kind: "confidential",
            title: "Screens kept behind kitchen doors",
            text: "KFC is an internal tool, so its screens are confidential. I'd be glad to walk you through how it works in a call.",
          },
        },
      ],
      context: {
        paragraphs: [
          "KFC, short for Kitchen Foodcheri, is an ERP-WMS dedicated to Foodcheri's logistics, from recipe conception to order dispatch.",
          "I joined the project in 2025 to help develop the brick dedicated to our industrial kitchen, where the staff had until then relied only on spreadsheets and paper. I conceived, coded and deployed an entire user flow to help cook and package the recipes planned for a given day, and to help managers organise the production day.",
        ],
        stats: [
          { value: "−90%", label: "Latency", highlight: true },
          { value: "−30%", label: "Working time, production managers" },
          { value: "−15%", label: "Working time, food teams" },
        ],
      },
      stackGroups: [
        {
          title: "Front end",
          items: ["React", "Material UI"],
          reason: "Placeholder — why these tools were chosen.",
        },
        {
          title: "Back end",
          items: ["Parse Server"],
          reason: "Placeholder — why these tools were chosen.",
        },
      ],
      challenges: [
        {
          title:
            "From recipe to production: freeing the team from technical debt with a design pattern inspired by linked lists",
          tags: [
            { label: "Denormalisation", color: "purple" },
            { label: "Linked list", color: "purple" },
            { label: "Parse Server", color: "teal" },
          ],
          problem:
            "Recipe sheets relied on a convoluted model: fields recursing over several levels to describe how each production step depends on the others. Rebuilding it would have taken months we didn't have — the cooks urgently needed a production interface to reach the operational standards we were aiming for.",
          solution:
            "When the menu is locked, the recipe steps are denormalised into a light structure of small units, each pointing to the steps before and after it, like a linked list. Cooks move from one step to the next in a single tap, filtered by status: waiting or ready to start.",
          result:
            "The kitchen got its production interface without a months-long rewrite or touching the legacy recipe model, and cooks follow the day's steps at a glance.",
        },
        {
          title:
            "Giving managers an interface to plan and control the production day, with a custom drag-and-drop calendar",
          tags: [
            { label: "Drag and drop", color: "purple" },
            { label: "Scheduling", color: "purple" },
            { label: "React", color: "teal" },
          ],
          problem:
            "Managers had to organise the production day around many intertwined constraints — recipe difficulty, overnight cooking, machine occupancy — all on a large paper plan.",
          solution:
            "A calendar crossing time slots with machines, where managers drag and drop the day's tasks and split a task across several machines, guided by urgency, delays and deadlines. Alerts flag late tasks and missing production so a reproduction can be planned straight away.",
          result:
            "The paper plan became a fluid, shared schedule everyone can see, with alerts on delayed or blocked tasks.",
        },
        {
          title:
            "Automating complex processes: ingredient output changes, reproduction needs and waste calculations",
          tags: [
            { label: "Alerts", color: "purple" },
            { label: "Automation", color: "purple" },
            { label: "Parse Server", color: "teal" },
          ],
          problem:
            "When a supplier order is late or a yield was miscalculated, an ingredient runs short and the kitchen can't produce the number of dishes ordered or put on sale. Teams sorted it out on the fly, over WhatsApp.",
          solution:
            "An interface that raises an alert on any ingredient gap or shortage, then lets the team act on it: push a dish's preparation to the next morning when the delivery is due then, or schedule a reproduction. Raw-material transitions and waste calculations run automatically.",
          result:
            "No more ad-hoc WhatsApp coordination between teams: reproductions and raw-material transitions are now automated and traceable.",
        },
      ],
      outcome: {
        summary: "Placeholder — where the project stands today, and what it proved.",
        learnings: [
          { title: "Placeholder learning.", text: "One sentence explaining it." },
          { title: "Placeholder learning.", text: "One sentence explaining it." },
        ],
      },
    },
  },
  {
    slug: "foodcheri",
    name: "Foodcheri",
    nature: "Web & Mobile App",
    description:
      "The website and mobile app where B2C and B2B customers order home-cooked meals, delivered to their door or their office.",
    stack: ["React", "Parse Server", "Framer Motion"],
    url: "https://www.foodcheri.com/",
    flag: "pro",
    // TODO: the screenshots (public/projects/foodcheri) are still placeholders
    caseStudy: {
      tagline:
        "A website and mobile app for B2C and B2B customers to order home-cooked meals — healthy, good for the planet and delivered every day.",
      links: { live: "https://www.foodcheri.com/", github: "" },
      images: [
        {
          src: "/projects/foodcheri/foodcheri_website.png",
          width: 1990,
          height: 1190,
          alt: "Foodcheri website showing the iconic recipes section",
          label: "Website",
        },
        {
          src: "/projects/foodcheri/kiosk_foodcheri.png",
          width: 1076,
          height: 616,
          alt: "Foodcheri self-service kiosk with the menu and cart, next to the card terminal",
          label: "Kiosk",
        },
      ],
      context: {
        paragraphs: [
          "Foodcheri is a B2B/B2C food delivery service, offering meals that are healthy, good for the planet and, above all, delicious 😋.",
          "I joined the team in 2024 to help launch a brand-new version of the website. My colleagues and I handled this critical (and exhilarating) moment that is a deployment: debugging edge cases and offering user support until the wee hours of the night.",
        ],
        stats: [
          { value: "3K+", label: "Orders shipped daily" },
          { value: "5", label: "Payment providers, one flow" },
          { value: "140", label: "Tickets handled", highlight: true },
        ],
      },
      stackGroups: [
        {
          title: "Front end",
          items: ["React", "Framer Motion", "Storybook", "Vanilla Extract"],
          reason:
            "One unified, thoroughly documented design system for the group's three brands — Foodchéri, Seazon and Fridge — built for a smooth, engaging experience: fluid animations and fast, lightweight renders.",
        },
        {
          title: "Back end",
          items: ["Parse Server", "MongoDB"],
          reason:
            "Queries written straight from the client and kept fast with indexes, while aggregation pipelines run complex operations — stock, pricing, rewards — inside the database itself.",
        },
      ],
      challenges: [
        {
          title: "Handling high user traffic, for order preparation and cart pre-reservation",
          tags: [
            { label: "Atomicity", color: "purple" },
            { label: "Indexes", color: "teal" },
            { label: "Network throttling", color: "neutral" },
          ],
          problem:
            "In each hub, counter managers prepare orders on tablets — bagging every meal and labelling it with the customer's name. Several managers work in the same hub at the same time, on a network that can lag: two of them must never grab the same order, and stock must stay right while carts are being reserved.",
          solution:
            "Claiming an order is a single atomic update, so a second click is rejected instead of duplicated; cart pre-reservations follow the same rule and expire on their own when a cart is abandoned. Requests are idempotent so a retry after a timeout is harmless, hot queries are backed by compound indexes, and every flow was tested under throttled network conditions.",
          result:
            "Reliable stock management under peak load: less than 1% unavailability overall, across every counter.",
        },
        {
          title: "Developing a self-service kiosk end to end",
          tags: [
            { label: "Payment webhooks", color: "purple" },
            { label: "Transactions", color: "purple" },
            { label: "Framer Motion", color: "teal" },
          ],
          problem:
            "Foodcheri was opening counters with a breakfast and all-day offer — a new channel to reinvent the brand and drive sales — and needed a self-service kiosk to go with it, in just a few weeks.",
          solution:
            "I started by cleaning up and auditing the existing functions and components, then used them as a springboard to build a complete new customer journey on a light, easy-to-maintain codebase. Card-terminal payment came through webhooks, with observability and retries with exponential back-off; access was restricted to accounts with dedicated rights (counter managers); website and kiosk stocks were kept apart with transactions; and animations were fine-tuned with Framer Motion after watching how customers actually use tablets.",
          result:
            "The kiosk shipped in time for the counters' launch: a full ordering journey, payments that survive network hiccups, and stock that stays consistent between the kiosk and the website.",
        },
        {
          title: "Implementing discounts and user retention mechanisms to reduce churn",
          tags: [
            { label: "Gamification", color: "purple" },
            { label: "MongoDB $sample", color: "teal" },
            { label: "Push notifications", color: "neutral" },
          ],
          problem:
            "Home delivery, Uber Eats-style, is a crowded market. Marketing wanted a scratch card to gamify the experience and bring customers back — one that feels real under the finger on mobile and web, grants the right reward whatever the network latency, and never exceeds the number of winning tickets marketing has set.",
          solution:
            "The draw happens on the server before the customer scratches: a MongoDB aggregation pipeline with a $sample stage picks a ticket from the pool of winning tickets, inside a transaction that also covers tickets drawn while the pool is being regenerated. The scratch effect only reveals a result that is already locked in, and a push notification tells customers when a ticket is waiting for them.",
          result:
            "A playful retention mechanism that stays within budget: each reward is granted exactly once, within marketing's limits, on mobile and web alike, and push notifications bring customers back to the app.",
        },
      ],
      outcome: {
        summary: "Placeholder — where the project stands today, and what it proved.",
        learnings: [
          { title: "Placeholder learning.", text: "One sentence explaining it." },
          { title: "Placeholder learning.", text: "One sentence explaining it." },
        ],
      },
    },
  },
  {
    slug: "agent-chatbot",
    name: "Agent Chatbot",
    nature: "AI Assistant",
    description:
      "A customer-support simulator that reads company policies and only takes the actions they allow.",
    stack: ["TypeScript", "LangChain / LangGraph", "MongoDB Vector Search", "Vitest"],
    url: "",
    flag: "pet",
    // TODO: the screenshot (public/projects/agent-chatbot) is still a placeholder
    caseStudy: {
      tagline:
        "A customer-support simulator powered by an AI agent: it reads each company's policies and only carries out the actions they allow.",
      links: { live: "", github: "" },
      images: [
        {
          src: "/projects/agent-chatbot/chat-mobile.png",
          width: 780,
          height: 1688,
          alt: "Illustration standing in for the chat screen of the support assistant",
          label: "Chat",
          notice: {
            kind: "in-progress",
            title: "Final screens on their way",
            text: "The design is still in the making. Come back soon to see the assistant in action.",
          },
        },
      ],
      context: {
        paragraphs: [
          "My goal: build a customer-support simulator that reads a company's rules — its policies — and only carries out the actions those rules allow, whether it's cancelling an order, moving a delivery date or issuing a refund.",
          "The challenge is less about making the model talk than about keeping it in bounds: finding the right policy, understanding what the customer actually wants, and never acting without their consent.",
        ],
        stats: [
          { value: "20", label: "Company policies ingested" },
          { value: "10", label: "Complex scenarios tested", highlight: true },
        ],
      },
      stackGroups: [
        {
          title: "Agent",
          items: ["LangChain", "LangGraph"],
          reason:
            "The reference for orchestrating LLM workflows, and model-agnostic, so different models can be tried and compared on the same graph.",
        },
        {
          title: "Data",
          items: ["MongoDB Vector Search", "Hugging Face"],
          reason: "A simple, native integration with LangChain to store and search the policy documents.",
        },
        {
          title: "Quality",
          items: ["TypeScript", "Vitest"],
          reason: "Strict typing on every output format the agent is expected to return, checked by tests.",
        },
      ],
      challenges: [
        {
          title: "Building a RAG vector search over partner companies' documents and policies",
          tags: [
            { label: "RAG", color: "purple" },
            { label: "Chunking", color: "purple" },
            { label: "Hugging Face", color: "teal" },
          ],
          problem:
            "Policies come as long documents, each with its own metadata — company, topic, version. They had to be split into chunks small enough to search precisely, without losing the metadata that says which company and which rule a passage belongs to.",
          solution:
            "Hugging Face for the embeddings, and ingestion scripts that run on a regular basis: they chunk each document, carry its metadata over to every chunk, and store the result in MongoDB Vector Search.",
          result:
            "Searches can be filtered by company and topic, so the agent always answers from the right policy, and updated documents are picked up on the next ingestion run.",
        },
        {
          title: "Designing a workflow that handles user requests and asks users for missing information",
          tags: [
            { label: "Triage", color: "purple" },
            { label: "Structured output", color: "purple" },
            { label: "LangGraph", color: "teal" },
          ],
          problem:
            "Every message has to be triaged: what does the customer want, which policy applies, what information is still missing? Handing all of that to the agent leads to a tall, multi-layered architecture where each layer calls the model again — slow, costly and hard to predict.",
          solution:
            "A strict split of responsibilities: plain code handles everything deterministic (routing, policy checks, the actions themselves), and the agent is only used to interpret natural language. Structured outputs are preferred everywhere they fit, and the graph frequently stops to ask the customer to confirm before going further.",
          result:
            "Far fewer tokens spent per conversation, predictable behaviour, and no action taken without the customer's explicit approval.",
        },
        {
          title: "Evaluating the LLM's performance on complex scenarios and hesitant users",
          tags: [
            { label: "Evaluation", color: "purple" },
            { label: "Vitest", color: "teal" },
            { label: "Next step", color: "neutral" },
          ],
          problem:
            "Real customers don't follow the happy path. They go off on a tangent mid-conversation, or change their mind: they wanted to cancel an order, and in the end they only want to move the delivery date. The agent has to follow along without carrying out the abandoned request.",
          solution:
            "The plan: scripted conversations replayed with Vitest, with a mocked model for deterministic runs and the real one for evaluation runs. Each scenario asserts on the structured output and on the actions actually triggered — the order is rescheduled, never cancelled — rather than on the wording of the answers.",
          result:
            "Not built yet: it is the next step of the project, to turn the edge cases found by hand into a regression suite that can compare models.",
        },
      ],
      outcome: {
        summary: "Placeholder — where the project stands today, and what it proved.",
        learnings: [
          { title: "Placeholder learning.", text: "One sentence explaining it." },
          { title: "Placeholder learning.", text: "One sentence explaining it." },
        ],
      },
    },
  },
]
