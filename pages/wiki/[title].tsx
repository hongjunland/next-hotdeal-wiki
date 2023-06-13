import { Template } from "@/templates/Template";
import { Product } from "@/components/organisms/Wiki/Product";
import TabList from "@/components/organisms/Wiki/TabList/TabList";
import { Chart } from "@/components/organisms/Wiki/Chart";
import { Table } from "@/components/organisms/Wiki/Table";
export default function WikiPage() {
  return (
    <Template>
      <Product />
      <TabList/>
      <Chart/>
      <Table/>
    </Template>
  );
}

