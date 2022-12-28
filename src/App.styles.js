import styled from "styled-components";
import { colors } from "../src/Components/Colors";

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${colors.white};
}`;
