import prisma from "@/config/db.config";

import { genSalt, hash } from "bcryptjs";

export async function POST(req) {
    try {
        const body = await req.json();
        const { email, username, password } = JSON.parse(JSON.stringify(body));
        if (!email || !username || !password) {
            return Response.json(
                {
                    success: false,
                    msg: "Missing input!",
                },
                { status: 401 }
            );
        }

        const user = await prisma.user.findFirst({
            where: {
                email: email,
            },
        });

        if (!user) {
            const salt = await genSalt(12);
            const hashPassword = await hash(password, salt);
            const newUser = await prisma.user.create({
                data: {
                    email: email,
                    name: username,
                    password: hashPassword,
                },
            });

            await prisma.profile.create({
                data: {
                    userId: newUser.id,
                },
            });

            return Response.json({
                success: true,
                msg: "Register successfully!",
            });
        }
        return Response.json(
            {
                success: false,
                msg: "Username already taken. please use another email",
            },
            { status: 401 }
        );
    } catch (error) {
        console.log(error);
        return Response.json(
            {
                error,
            },
            { status: 500 }
        );
    }
}
