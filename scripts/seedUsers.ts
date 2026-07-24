import * as bcrypt from "bcrypt";
import mongoose from "mongoose";
import User from "../src/models/user.model"; // adjust path if models are in backend/models

async function seedUsers(): Promise<void> {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGO_URI!);
        console.log("Connected to MongoDB");

        const users = [
            { name: "Admin", email: "admin@distro.com", password: "admin123", role: "Admin" },
            { name: "Sales", email: "sales@distro.com", password: "sales123", role: "Sales" },
            { name: "Warehouse", email: "warehouse@distro.com", password: "warehouse123", role: "Warehouse" }
        ];

        for (const u of users) {
            const hashed = await bcrypt.hash(u.password, 10);

            // Check if user already exists
            const existing = await User.findOne({ email: u.email });
            if (existing) {
                console.log(`User ${u.email} already exists, skipping...`);
                continue;
            }

            await User.create({ ...u, password: hashed });
            console.log(`User ${u.email} created`);
        }

        console.log("Users seeded successfully");
        process.exit(0);
    } catch (err) {
        console.error("Seeding failed:", err);
        process.exit(1);
    }
}

seedUsers();
