import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    const password = await bcrypt.hash('Password123', 10);

    const users = [
        {
            fullName: 'Admin User',
            email: 'admin@erp.com',
            phone: '9000000001',
            password,
            role: 'ADMIN',
        },
        {
            fullName: 'Sales User',
            email: 'sales@erp.com',
            phone: '9000000002',
            password,
            role: 'SALES',
        },
        {
            fullName: 'Warehouse User',
            email: 'warehouse@erp.com',
            phone: '9000000003',
            password,
            role: 'WAREHOUSE',
        },
        {
            fullName: 'Accounts User',
            email: 'accounts@erp.com',
            phone: '9000000004',
            password,
            role: 'ACCOUNTS',
        },
    ];

    for (const user of users) {
        await prisma.user.upsert({
            where: { email: user.email },
            update: {},
            create: user,
        });
    }

    console.log('Seed complete. Test login for each role:');
    console.log('Password (same for all): Password123');
    users.forEach((u) => console.log(`${u.role}: ${u.email}`));
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });