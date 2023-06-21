import { Template } from "@/templates/Template";
import { Product } from "@/components/organisms/Edit/Product";
import CheckForm from "@/components/molecules/CheckForm";
import BottomAction from "@/components/molecules/BottomAction";
import HotdealCreateForm from "@/components/molecules/HotdealCreateForm";
export default function EditPage() {
  return (
    <Template>
      <HotdealCreateForm/>
      <CheckForm/>
      <BottomAction leftAction={()=> {}} rightAction={()=>{}} />
    </Template>
  );
}
