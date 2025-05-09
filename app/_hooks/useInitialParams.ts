import { useMemo } from "react";
import { useParams, usePathname, useSearchParams } from "next/navigation";

type RouteParams = {
  pathname: string;
  params: Record<string, string | string[] | undefined>;
  searchParams: Record<string, string>;
};

export function useInitialParams(): RouteParams {
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();

  return useMemo(
    () => ({
      pathname: pathname ?? "/",
      params,
      searchParams: Object.fromEntries(searchParams?.entries() ?? []),
    }),
    [pathname, params, searchParams]
  );
}
