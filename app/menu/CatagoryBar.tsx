import Link from "next/link";

type Category = {
    name: string;
    value: string;
}

type CategoryProps = {
    categories: Category[];
    selectedCategory?: string;
}

export function CategoryBar({ categories, selectedCategory }: CategoryProps) {
    const catagory = ["ALL", "MAIN", "DRINK", "BREAKFAST", "DESSERT"];

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
    )
}