import Image from "next/image";
import WeWork from "../../Component/WeWork";
import TeamMember from "../../Component/TeamMember";
import Feedback from "../../Component/Feedback";
import SellerDishes from "../../Component/SellerDishes";
import MainSlider from "../../Component/MainSlider";

export default function Home() {
  return (
    <div className="container mx-auto">
      <MainSlider />
      <SellerDishes />
      <Feedback />
      <TeamMember />
      <WeWork />
    </div>
  );
}
