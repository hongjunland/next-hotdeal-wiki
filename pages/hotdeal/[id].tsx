import { Template } from "@/templates/Template";
import { Typography, styled } from "@mui/material";
import { useRouter } from "next/router";

const Article = styled("article")`
    font-size: 60px;
    margin-bottom: 200px;
    background-color: pink;
    padding-top: 4rem;
`;
export default function Hotdeal() {
  const router = useRouter();
  const {id}  = router.query;
  return (
    <Template>
      <Article>
        <Typography variant="h1" fontWeight={'500'}>{id}</Typography>
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
