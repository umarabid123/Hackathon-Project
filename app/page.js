import Heading from "@/components/heading/Heading";
import Text from "@/components/text/Text";
import Image from "next/image";

export default function Home() {
  return (
  <div className="text-center">
  <Heading heading={'Home'} level={1} />
  <Text text={'Home paragraphs'} textStyle={'font-medium'} /> 
  </div>
  );
}
