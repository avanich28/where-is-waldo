"use client";

import { useCallback, useMemo, useState } from "react";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { IoFilter } from "react-icons/io5";
import { filters } from "@/app/_utils/constants";
import { gameLists } from "@/app/_utils/gameLists";
import { convertStringIntoLink } from "@/app/_utils/helpers";
import Select from "@/app/_components/Select";

function BoardOperation() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();
  const [curGameName, setCurGameName] = useState(params.boardId as string);
  const [curFilter, setCurFilter] = useState(
    (searchParams.get("filter") as string) ?? filters[0]
  );
  const pictureData = useMemo(
    () =>
      gameLists.map((game, i) => ({
        value: `${i}-${convertStringIntoLink(game.name)}`,
        text: game.name,
      })),
    []
  );

  const createQueryString = useCallback(function (
    name: string,
    value: string
  ): string {
    const params = new URLSearchParams();
    params.set(name, value);

    return params.toString();
  },
  []);

  const onChangeGameName = useCallback(
    function (e: React.ChangeEvent<HTMLSelectElement>) {
      setCurGameName(e.target.value);

      const defaultFilter = filters[0];
      setCurFilter(defaultFilter);
      router.push(
        e.target.value + "?" + createQueryString("filter", defaultFilter)
      );
    },
    [createQueryString, router]
  );

  const onChangeFilter = useCallback(
    function (e: React.ChangeEvent<HTMLSelectElement>) {
      setCurFilter(e.target.value);

      router.push(pathname + "?" + createQueryString("filter", e.target.value));
    },
    [createQueryString, router, pathname]
  );

  return (
    <>
      <Select
        name="picture"
        data={pictureData}
        onChange={onChangeGameName}
        value={curGameName}
        isLink={true}
        type="secondary"
      />
      <div className="flex items-center gap-2 md:gap-3 ">
        <span className="text-[1.5em]">
          <IoFilter />
        </span>

        <Select
          name="filter"
          data={filters}
          onChange={onChangeFilter}
          value={curFilter}
        />
      </div>
    </>
  );
}

export default BoardOperation;
