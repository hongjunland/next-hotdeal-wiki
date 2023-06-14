import { Box, Button, styled } from "@mui/material";
interface Props {
  left?: string;
  right?: string;
  leftAction: () => void;
  rightAction: () => void;
  disabled?: boolean;
}
export default function BottomAction({
  left,
  right,
  leftAction,
  rightAction,
  disabled,
}: Props) {
  return (
    <Box
      display={"flex"}
      gap={"5px"}
      sx={{ button: { flex: 1 } }}
      width={"100%"}
    >
      <CancelButton variant="contained" size="large" onClick={leftAction}>
        {left}
      </CancelButton>
      <SubmitButton
        variant="contained"
        size="large"
        onClick={rightAction}
        disabled={disabled}
      >
        {right}
      </SubmitButton>
    </Box>
  );
}

BottomAction.defaultProps = {
  left: "취소",
  right: "저장",
  disabled: false,
};

const CancelButton = styled(Button)`
  && {
    background-color: rgba(0, 0, 0, 0.4);
    &:hover {
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
`;

const SubmitButton = styled(Button)``;
