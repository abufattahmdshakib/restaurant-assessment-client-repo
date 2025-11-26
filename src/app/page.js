import Image from "next/image";
import WeWork from "../../Component/WeWork";
import TeamMember from "../../Component/TeamMember";
import Feedback from "../../Component/Feedback";
import SellerDishes from "../../Component/SellerDishes";
import MainSlider from "../../Component/MainSlider";

export default function Home() {
  return (
    <div>
      <MainSlider />
      <div className="container mx-auto">
        <SellerDishes />
        <Feedback />
        <TeamMember />
        <WeWork />
      </div>
    </div>

  );
}
