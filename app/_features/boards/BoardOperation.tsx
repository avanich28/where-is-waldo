"use client";

import { useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IoFilter } from "react-icons/io5";
import { filters } from "@/app/_utils/constants";
import { gameLists } from "@/app/_utils/gameLists";
import Select from "@/app/_components/Select";

function BoardOperation() {
  const [curPicName, setCurPicName] = useState(gameLists[0].name);
  const [curFilter, setCurFilter] = useState(filters[0]);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pictureData = gameLists.map((game, i) => ({
    value: `${i}-${game.href}`,
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

  // FIXME How to handle when id and query are not in the lists? (not-found)
  function onChangePicture(e) {
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
        onChange={onChangePicture}
        value={curPicName}
        setValue={setCurPicName}
        isLink={true}
        type="secondary"
      />
      <div className="flex items-center gap-2 md:gap-3 ">
        <span className="text-[1.5em]">
          <IoFilter />
        </span>
        {/* FIXME */}
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
