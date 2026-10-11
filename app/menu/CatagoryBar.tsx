'use client'

import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Category = {
    name: string;
    value: string;
};

type CategoryProps = {
    categories: Category[];
    selectedCategory?: string;
};

export function CategoryBar({
    categories,
}: CategoryProps) {
    console.log("Categories received:", categories);
    const searchParams = useSearchParams();
    const selectedCategory = searchParams.get("category");

    return (
        <div className="category-filter">
            {categories.map((category) => (
                <Link
                    key={category.value}
                    href={
                        category.value === "ALL"
                            ? "/menu"
                            : `/menu?category=${category.value}`
                    }
                    className={
                        selectedCategory === category.value ||
                            (!selectedCategory && category.value === "ALL")
                            ? "active"
                            : ""
                    }
                >
                    {category.name}
                </Link>
            ))}
        </div>
    );
}


// "use client";

// import Link from "next/link";
// import { useSearchParams } from "next/navigation";

// type Category = {
//     name: string;
//     value: string;
// };

// type CategoryProps = {
//     categories: readonly Category[];
// };

// export function CategoryBar({ categories }: CategoryProps) {
//     const searchParams = useSearchParams();
//     const selectedCategory = searchParams.get("category");

//     return (
//         <nav className="category-filter">
//             {categories.map((category) => (
//                 <Link
//                     key={category.value}
//                     href={
//                         category.value === "ALL"
//                             ? "/menu"
//                             : `/menu?category=${category.value}`
//                     }
//                     className={
//                         selectedCategory === category.value ||
//                             (!selectedCategory && category.value === "ALL")
//                             ? "active"
//                             : ""
//                     }
//                 >
//                     {category.name}
//                 </Link>
//             ))}
//         </nav>
//     );
// }