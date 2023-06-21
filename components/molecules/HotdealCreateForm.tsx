import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";

interface Props {}

export default function HotdealCreateForm() {
  return (
    <Box
      width={"100%"}
    >
      <Typography variant="h1">IPhone14 Pro 128G 블랙 - 핫딜 추가</Typography>
      <Grid container spacing={1} marginTop={"5px"}>
        <Grid item xs={2} flexDirection={"column"}>
          <TextField label="닉네임" />
          <TextField label="비밀번호" type="password" />
        </Grid>
        <Grid item xs={10} display={"flex"} flexDirection={"column"}>
          <TextField label="제목" />
          <TextField label="가격(원)" type="number" />
          <TextField label="URL" />
        </Grid>
      </Grid>
    </Box>
  );
}
