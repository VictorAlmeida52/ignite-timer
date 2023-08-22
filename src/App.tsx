import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default.ts'
import { GlobalStyle } from './styles/global.ts'
import { Router } from './Router.tsx'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  )
}
