import styled from "styled-components";

export const VStack=styled.div`
display:flex;
flex-direction:column;
gap: ${(props) => props.gap || "5px"};
align-items: ${(props) => props.alignItems || "center"};
justify-content: ${(props) => props.justifyContent || "center"};
`
export const HStack=styled.div`
display:flex;
flex-direction:row;
gap: ${(props) => props.gap || "5px"};
align-items: ${(props) => props.alignItems || "center"};
justify-content: ${(props) => props.justifyContent || "center"};
flex-wrap: ${(props) => props.flexWrap};
`