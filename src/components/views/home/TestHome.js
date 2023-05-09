import Test from "../../../data/static/test.json";
import TestCard from "@/components/widgets/TestCard";

export default function TestHome() {
  return (
    <div className="grid place-items-center w-screen h-screen">
      <TestCard title={Test[0].title} desc={Test[0].desc} link={Test[0].link} />
    </div>
  );
}
