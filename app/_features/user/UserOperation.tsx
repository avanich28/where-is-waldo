"use client";

import { isActive } from "@/app/_utils/helpers";
import Container from "@/app/_components/Container";
import { useUser } from "@/app/_contexts/UserContext";
import { userDefaultSection } from "@/app/_utils/constants";
import Button from "@/app/_components/Button";

function UserOperation() {
  const { curSection, setCurSection } = useUser();

  return (
    <Container addClassName={`gap-1`}>
      {userDefaultSection.map((section) => (
        <Button
          key={section}
          type="secondary"
          color="secondary"
          onClick={() => setCurSection(section)}
          addClassName={isActive(curSection, section)}
        >
          {section}
        </Button>
      ))}
    </Container>
  );
}

export default UserOperation;
