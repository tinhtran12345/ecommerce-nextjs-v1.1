import Link from "next/link";
import React from "react";

const Page = ({ params }) => {
    return (
        <div>
            Page
            <Link href={'/?search="desktop'}>Search params</Link>
        </div>
    );
};

export default Page;
