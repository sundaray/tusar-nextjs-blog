import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Breadcrumbs = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split("/");
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: "/" + linkPath.slice(0, i + 1).join("/"),
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <nav
      aria-label="breadcrumbs"
      className="text-sm text-blue-500 py-1 bg-gray-50 pl-2 rounded"
    >
      <ol className="flex space-x-2">
        <li className="hover:text-blue-600">
          <Link href="/">Home</Link>
        </li>
        {breadcrumbs.map((breadcrumb, i) => {
          return (
            <Link href={breadcrumb.href} key={breadcrumb.href}>
              <li
                key={breadcrumb.href}
                className="breadcrumb hover:text-blue-600"
              >
                {breadcrumb.breadcrumb}
              </li>
            </Link>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
