// import { Template } from "@/templates/Template";
// import Article, { Content } from "../Article";
// import { Box, Button, Typography } from "@mui/material";
// import Link from "next/link";
// import { Wiki } from "@/types/Hotdeal/wiki";
// interface Props{
//     wiki: Wiki;
// }
// export default function Create({wiki}: Props) {
//   return (
//     <Template>
//         <Article>
//           <Box
//             borderBottom={"1px solid gray"}
//             paddingBottom={"2rem"}
//             display={"flex"}
//           >
//             <Typography variant="h1">{wiki.title}</Typography>
//             <Button onClick={handleCreateClick}>작성완료</Button>
//           </Box>
//           <div>
//             <MdEditor
//               value={content}
//               onChange={handleEditorChange}
//               renderHTML={(text) => mdParser.render(text)}
//             />
//             <div dangerouslySetInnerHTML={{ __html: mdParser.render(content) }} />
//           </div>
//         </Article>
//       </Template>
//   );
// }
