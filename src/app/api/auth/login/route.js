import prisma from "@/config/db.config";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
    try {
        const body = await req.json();
        const { email, password } = body;
        const checkUser = await prisma.user.findFirst({
            where: {
                email: email,
            },
        });
        if (!checkUser) {
            return Response.json(
                {
                    success: false,
                    msg: "Account not found with this email!",
                },
                { status: 401 }
            );
        }
        const checkPassword = await compare(password, checkUser.password);
        if (!checkPassword) {
            return Response.json(
                {
                    success: false,
                    msg: "Incorrect password. Please try again !",
                },
                { status: 401 }
            );
        }
        const token = jwt.sign(
            { id: checkUser.id, email: checkUser.email, role: checkUser.role },
            process.env.SECRET_JWT_KEY,
            { expiresIn: "3d" }
        );

        const finalData = {
            token,
            user: {
                email: checkUser.email,
                name: checkUser.name,
                id: checkUser.id,
                role: checkUser.role,
            },
        };

        return Response.json(
            {
                success: true,
                msg: "Login successfully!",
                finalData,
            },
            { status: 200 }
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
