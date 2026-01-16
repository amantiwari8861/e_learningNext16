export let users = [
    {
        id: 1,
        name: "Aman Tiwari",
        email: "admin@demo.com",
        password: "admin123", // ⚠️ plain text only for testing
        role: "ROLE_ADMIN",
        image: "https://i.pravatar.cc/150?img=1",
    },
    {
        id: 2,
        name: "Rohit Sharma",
        email: "user@demo.com",
        password: "user123",
        role: "ROLE_USER",
        image: "https://i.pravatar.cc/150?img=2",
    },
    {
        id: 3,
        name: "Neha Verma",
        email: "instructor@demo.com",
        password: "teach123",
        role: "ROLE_INSTRUCTOR",
        image: "https://i.pravatar.cc/150?img=3",
    },
    {
        id: 4,
        name: "Priya Singh",
        email: "student@demo.com",
        password: "student123",
        role: "ROLE_USER",
        image: "https://i.pravatar.cc/150?img=4",
    },
    {
        id: 5,
        name: "Test Unknown",
        email: "unknown@demo.com",
        password: "test123",
        role: "ROLE_XYZ", // ❌ invalid role (for testing guards)
        image: "",
    },
];
