import { Template } from "@/templates/Template";
import { Box, Stack, Typography } from "@mui/material";
import Article, { Content } from "@/components/organisms/Article";
import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { markDownReg } from "@/constants/reg";
import { textToMarkdown } from "@/utils/mardown";
export default function Zxc() {
  const [content, setContent] = useState("");

  const handleInputChange = (event: ContentEditableEvent) => {
    const newValue = event.target.value;
    const rowList : any = newValue
      .split("<div>")
      .map((line) => line.replace("</div>", ""));
    let currentRow = rowList[rowList.length - 1];
    console.log(currentRow);
    if (markDownReg.heading.test(currentRow)) {
      console.log("heading!");
      const updatedContent = textToMarkdown.convertHeading(currentRow);
      rowList[rowList.length - 1] = updatedContent;
      setContent(rowList.map((row : string)=>`<div>${row}</div>`).join(''));
    }else if(markDownReg.ul.test(currentRow)){
      console.log("ul!");
      const updatedContent = textToMarkdown.convertUL(currentRow);
      rowList[rowList.length - 1] = updatedContent;
      setContent(rowList.map((row : string)=>`<div>${row}</div>`).join(''));
    }else {
      setContent(newValue);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>)=>{
    console.log(e.key);
    switch(e.key){
      case "Tab":
        setContent(prev=>prev+"\t");
        break;
    }
  }
  return (
    <Template>
      <Article>
        <Box
          borderBottom={"1px solid gray"}
          paddingBottom={"2rem"}
          display={"flex"}
        >
          <Typography variant="h1">리스트</Typography>
        </Box>
        <Content>
          <Stack fontSize={"1rem"}>
            <ContentEditable style={{border: "1px solid #333", padding: "1rem"}}
             html={content} 
             onChange={handleInputChange}
             onKeyDown={handleKeyDown}/>
            <ReactMarkdown>{content}</ReactMarkdown>
          </Stack>
        </Content>
      </Article>
    </Template>
  );
}
