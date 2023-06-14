import { Template } from "@/templates/Template";
import { Product } from "@/components/organisms/Edit/Product";
import { Table } from "@/components/organisms/Wiki/Table";
import CheckForm from "@/components/molecules/CheckForm";
import BottomAction from "@/components/molecules/BottomAction";
export default function EditPage() {
  return (
    <Template>
      <Product />
      <Table/>
      <CheckForm/>
      <BottomAction leftAction={()=> {}} rightAction={()=>{}} />
    </Template>
  );
}

