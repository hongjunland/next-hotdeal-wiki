import { Template } from "@/templates/Template";
import { Product } from "@/components/organisms/Wiki/Product";
import TabList from "@/components/organisms/Wiki/TabList/TabList";
import { Chart } from "@/components/organisms/Wiki/Chart";
import { Table } from "@/components/organisms/Wiki/Table";
import HotdealCreateForm from "@/components/molecules/HotdealCreateForm";
import CheckForm from "@/components/molecules/CheckForm";
import BottomAction from "@/components/molecules/BottomAction";

export default function WikiPage() {
  return (
    <Template>
      <Product />
      <TabList/>
      <Chart/>
      <Table/>
      <HotdealCreateForm/>
      <CheckForm/>
      <BottomAction right="핫딜 추가" leftAction={()=> {}} rightAction={()=>{}} />
    </Template>
  );
}

