import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from './Button'

// Utilizamos a propriedade hasIcon para saber se o botão possui um ícone
type ContainerProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'size' | 'fullWidth'
>

const containerModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    display: inline-flex; // Para o botão se ajustar ao tamanho do ícone
    align-items: center; // Para centralizar o ícone verticalmente
    justify-content: center; // Para centralizar o ícone horizontalmente
    svg {
      width: ${theme.font.sizes.medium};

      & + span {
        margin-left: ${theme.spacings
          .xxsmall}; // Espaçamento entre o ícone e o texto
      }
    }
  `
}

export const Container = styled.button<ContainerProps>`
  ${({ theme, size, fullWidth, hasIcon }) => css`
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 100%);
    color: ${theme.colors.white};
    border: 0;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    cursor: pointer;

    ${!!size && containerModifiers[size](theme)}
    ${fullWidth && containerModifiers.fullWidth()}
    ${hasIcon && containerModifiers.withIcon(theme)}
  `}
`
