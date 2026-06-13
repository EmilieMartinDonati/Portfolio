export const projectsList = [
    {
    name: "Moses Supposes App",
    nature: "Mobile App",
    description: "Lorem Ipsum",
    stack: ["Expo", "Supabase", "Typescript", "Vitest"],
    url: "",
    flag: 'pet'
  },
  {
    name: "bogus_name",
    nature: "Mobile App",
    description: "Lorem Ipsum",
    stack: ["Expo", "Next-JS", "Supabase", "Tailwindcss"],
    url: "",
    flag: "pet"
  },
  {
    name: "lorem_ipsum",
    nature: "Mobile App",
    description: "Lorem Ipsum",
    stack: ["Expo", "Next-JS", "Supabase", "Tailwindcss"],
    url: "",
    flag: "pet"
  },
  {
    name: "qui_tollis_peccata_mundi",
    nature: "Mobile App",
    description: "Lorem Ipsum",
    stack: ["Expo", "Next-JS", "Supabase", "Tailwindcss"],
    url: "",
    flag: 'pet'
  }
]

export type Project = {
   name: string, nature: string, description: "string", stack: string[], url: string, flag: "pet" | "pro"
}