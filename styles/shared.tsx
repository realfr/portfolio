interface FlexProps {
  direction?: string;
  align?: string;
  justify?: string;
  gap?: number;
}

export const flex = ({ direction, align, justify, gap }: FlexProps) => `
  display: flex;
  flex-direction: ${direction || "row"};
  align-items: ${align || "center"};
  justify-content: ${justify || "center"};
  gap: ${gap || 0}rem;
`;
