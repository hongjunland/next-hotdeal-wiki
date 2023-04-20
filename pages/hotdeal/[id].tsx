import { Template } from "@/templates/Template";
import { Typography, styled } from "@mui/material";
import { useRouter } from "next/router";

const Article = styled("article")`
    font-size: 60px;
    margin-bottom: 200px;
    padding-top: 4rem;
`;
export default function Hotdeal() {
  const router = useRouter();
  const {id}  = router.query;
  return (
    <Template>
      <Article>
        <Typography variant="h1">{id}</Typography>
        <hr/>
        <div>Post: {id}ddsadasdasdsadsadsadasdsadsa</div>
        <div>Post: {id}ddsadasdasdsadsadsadasdsadsa</div>
        <div>Post: {id}ddsadasdasdsadsadsadasdsadsa</div>
        <div>Post: {id}ddsadasdasdsadsadsadasdsadsa</div>
        <div>Post: {id}ddsadasdasdsadsadsadasdsadsa</div>
        <div>Post: {id}ddsadasdasdsadsadsadasdsadsa</div>
        <div>Post: {id}ddsadasdasdsadsadsadasdsadsa</div>
        <div>Post: {id}ddsadasdasdsadsadsadasdsadsa</div>
        <div>Post: {id}ddsadasdasdsadsadsadasdsadsa</div>
        <div>Post: {id}ddsadasdasdsadsadsadasdsadsa</div>
        <div>Post: {id}ddsadasdasdsadsadsadasdsadsa</div>
        <div>Post: {id}ddsadasdasdsadsadsadasdsadsa</div>
        <div>Post: {id}ddsadasdasdsadsadsadasdsadsa</div>
      </Article>
    </Template>
  );
}
