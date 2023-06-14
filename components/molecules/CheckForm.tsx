import { Box, Typography } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';

interface Props {}
export default function CheckForm() {
  return (
    <Box display={"flex"} alignItems={'center'} gap={'10px'}>
      <Checkbox />
      <Box>
        <Typography>
          문서 편집을 저장하면 당신은 기여한 내용을 배포하고 기여한 문서에 대한
          하이퍼링크나 URL을 이용하여 저작자 표시를 하는 것으로 충분하다는 데
          동의하는 것입니다. 이 동의는 철회할 수 없습니다.
        </Typography>
        <Typography color="primary">
            문서 편집 역사에 IP<strong>(121.138.185.113)</strong>가 영구히 기록됩니다.
        </Typography>
      </Box>
    </Box>
  );
}
