// app/de/layout.jsx
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export const dynamic = 'error'
export const revalidate = false

export default function DeLayout({ children }) {
  return (
    <div>
      <Navbar locale="de" />
      {children}
      <div className="section-glow section-glow--footer" aria-hidden="true" />
      <Footer />
    </div>
  )
}
