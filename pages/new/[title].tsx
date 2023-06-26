import { Template } from "@/templates/Template";
import { Product } from "@/components/organisms/New/Product";
import TabList from "@/components/organisms/Wiki/TabList/TabList";
import { Chart } from "@/components/organisms/Wiki/Chart";
import { Table } from "@/components/organisms/Wiki/Table";
import HotdealCreateForm from "@/components/molecules/HotdealCreateForm";
import CheckForm from "@/components/molecules/CheckForm";
import BottomAction from "@/components/molecules/BottomAction";

export default function NewPage() {
  return (
    <Template>
      <Product />
      <HotdealCreateForm/>
      <CheckForm/>
      <BottomAction right="완료" leftAction={()=> {}} rightAction={()=>{}} />
    </Template>
  );
}

