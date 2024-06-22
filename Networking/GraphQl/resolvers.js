export const resolvers = {
  Query: {
    authors: () => {
      return [
        {
          id: 1,
          name: "Rajnish Pandey",
        },
        {
          id: 2,
          name: "Sophia Brown",
        },
        {
          id: 3,
          name: "Liam Johnson",
        },
        {
          id: 4,
          name: "Emma Martinez",
        },
        {
          id: 5,
          name: "Noah Lee",
        },
        {
          id: 6,
          name: "Olivia Garcia",
        },
        {
          id: 7,
          name: "William Davis",
        },
        {
          id: 8,
          name: "Ava Rodriguez",
        },
        {
          id: 9,
          name: "James Wilson",
        },
        {
          id: 10,
          name: "Isabella Moore",
        },
      ];
    },
    books: () => {
      return [
        {
          id: 1,
          title: "System Design",
          publishedYear: 2025,
        },
        {
          id: 2,
          title: "Frontend System Design",
          publishedYear: 2026,
        },
        {
          id: 3,
          title: "Backend Architecture",
          publishedYear: 2024,
        },
        {
          id: 4,
          title: "Database Management",
          publishedYear: 2023,
        },
        {
          id: 5,
          title: "Cloud Computing Essentials",
          publishedYear: 2022,
        },
        {
          id: 6,
          title: "Microservices Patterns",
          publishedYear: 2021,
        },
        {
          id: 7,
          title: "DevOps Handbook",
          publishedYear: 2020,
        },
        {
          id: 8,
          title: "Machine Learning Basics",
          publishedYear: 2019,
        },
        {
          id: 9,
          title: "Introduction to AI",
          publishedYear: 2018,
        },
        {
          id: 10,
          title: "Data Structures and Algorithms",
          publishedYear: 2017,
        },
      ];
    },
  },
};
