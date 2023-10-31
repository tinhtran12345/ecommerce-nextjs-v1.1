import Link from "next/link";
import React from "react";

const Page = ({ params }) => {
    return (
        <div className="min-h-[330px]">
            <p> This is Token: 1</p>
            <Link href={'/?search="desktop'}>Search params</Link>
        </div>
    );
};

export default Page;
