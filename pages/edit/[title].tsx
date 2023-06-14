import { Template } from "@/templates/Template";
import { Product } from "@/components/organisms/Edit/Product";
import CheckForm from "@/components/molecules/CheckForm";
import BottomAction from "@/components/molecules/BottomAction";
import { Table } from "@/components/organisms/Edit/Table";
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

