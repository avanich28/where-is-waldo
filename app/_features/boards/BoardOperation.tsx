"use client";

import { useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IoFilter } from "react-icons/io5";
import { filters } from "@/app/_utils/constants";
import { gameLists } from "@/app/_utils/gameLists";
import { convertStringIntoLink } from "@/app/_utils/helpers";
import Select from "@/app/_components/Select";

function BoardOperation({ initialGameName, initialFilter }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [curGameName, setCurGameName] = useState(initialGameName);
  const [curFilter, setCurFilter] = useState(initialFilter);
  const pictureData = gameLists.map((game, i) => ({
    value: `${i}-${convertStringIntoLink(game.name)}`,
    text: game.name,
  }));

  const createQueryString = useCallback(
    function (name, value) {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  function onChangeGameName(e) {
    const defaultFilter = filters[0];
    setCurFilter(defaultFilter);
    router.push(
      e.target.value + "?" + createQueryString("filter", defaultFilter)
    );
  }

  function onChangeFilter(e) {
    router.push(pathname + "?" + createQueryString("filter", e.target.value));
  }

  return (
    <>
      <Select
        name="picture"
        data={pictureData}
        onChange={onChangeGameName}
        value={curGameName}
        setValue={setCurGameName}
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
          setValue={setCurFilter}
        />
      </div>
    </>
  );
}

export default BoardOperation;
