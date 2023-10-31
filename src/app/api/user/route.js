import prisma from "@/config/db.config";

export async function GET(req) {
    try {
        // check authentication: skip
        const { searchParams } = new URL(req.url);
        const email = searchParams.get("email");
        const user = await prisma.user.findFirst({
            where: {
                email: email,
            },
        });
        if (!user) {
            return Response.json(
                {
                    success: false,
                    msg: "Account is not existed",
                },
                { status: 401 }
            );
        }

        const info = await prisma.user.findUnique({
            where: {
                id: user.id,
            },
            select: {
                name: true,
                profile: {
                    select: {
                        bio: true,
                    },
                },
            },
        });
        return Response.json(
            {
                name: info.name,
                bio: info.profile.bio,
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

export async function POST(req) {
    try {
        // check authentication: skip
        const body = await req.json();
        const { email, name, bio } = body;
        const user = await prisma.user.findFirst({
            where: {
                email: email,
            },
        });
        if (!user) {
            return Response.json(
                {
                    success: false,
                    msg: "Account is not existed",
                },
                { status: 401 }
            );
        }
        await prisma.user.update({
            where: {
                email: email,
            },
            data: {
                name: name,
            },
        });
        await prisma.profile.update({
            where: {
                userId: user?.id,
            },
            data: {
                bio: bio,
            },
        });
        return Response.json(
            {
                success: true,
                msg: "Update successfully!",
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
