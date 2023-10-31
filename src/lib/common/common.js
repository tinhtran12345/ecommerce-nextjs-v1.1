import prisma from "@/config/db.config";

export const getProfile = async (id) => {
    const profile = await prisma.profile.findFirst({
        where: {
            userId: id,
        },
    });

    return profile;
};
