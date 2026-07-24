import bcrypt from "bcrypt";

async function main() {
    const password = "Admin@123";
    const hash = await bcrypt.hash(password, 10);

    console.log("New Password:", password);
    console.log("Hash:", hash);
}

main();