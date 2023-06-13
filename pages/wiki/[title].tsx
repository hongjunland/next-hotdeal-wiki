import { Template } from "@/templates/Template";
import { Product } from "@/components/organisms/Wiki/Product";
import TabList from "@/components/organisms/Wiki/TabList/TabList";
export default function WikiPage() {
  return (
    <Template>
      <Product />
      <TabList/>
    </Template>
  );
}

