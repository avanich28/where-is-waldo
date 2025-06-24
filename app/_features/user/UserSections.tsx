"use client";

import { useUser } from "@/app/_contexts/UserContext";
import { userDefaultSection } from "@/app/_utils/constants";
import { type BestRecords } from "@/app/_utils/types";
import Records from "./Records";
import Settings from "./Settings";

type UserProp = {
  records: BestRecords;
  name: string | undefined;
};

function UserSections({ records, name }: UserProp) {
  const { curSection } = useUser();

  if (curSection === userDefaultSection[0]) return <Records data={records} />;

  if (curSection === userDefaultSection[1]) return <Settings name={name} />;
}

export default UserSections;
