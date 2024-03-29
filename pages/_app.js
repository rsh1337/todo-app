import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import loadable from '@loadable/component';
const PWAPrompt = loadable(() => import('react-ios-pwa-prompt'));

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <PWAPrompt
					copyTitle="Add to HomeScreen"
					copyBody="This app can also be used offline. Add it to your home screen for a more immersive experience!"
					copyShareButtonLabel="Press the 'Share' button."
					copyAddHomeButtonLabel="Press the 'Add to homescreen' button."
					copyClosePrompt="Close"
				/>
    </ChakraProvider>
  )
}

