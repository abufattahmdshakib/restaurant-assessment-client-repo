import Image from "next/image";
import WeWork from "../../Component/WeWork";
import TeamMember from "../../Component/TeamMember";

export default function Home() {
  return (
    <div className="container mx-auto">
      <TeamMember />
      <WeWork />
    </div>
  );
}
