import Aside from "@/components/organisms/Aside/Aside";
import { Box, Container, Grid, Stack, Typography, styled } from "@mui/material";

interface Props {
  children: React.ReactNode;
}
export function Template({ children }: Props) {
  return (
    <Container>
      <Stack direction={'row'} paddingTop={'2rem'}>
        {children}
        <Aside />
      </Stack>
    </Container>
  );
}
