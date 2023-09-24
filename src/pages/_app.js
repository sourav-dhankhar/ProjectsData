import '@/styles/globals.css'
import ProjectDataProvider from '@/store/ProjectDataProvider';

export default function App({ Component, pageProps }) {
  return <ProjectDataProvider>
    <Component {...pageProps} />
  </ProjectDataProvider>
}
