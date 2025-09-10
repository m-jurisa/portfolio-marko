// app/en/layout.jsx
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export const dynamic = 'error'
export const revalidate = false

export default function EnLayout({ children }) {
  return (
    <div>
      <Navbar locale="en" />
      {children}
      <div className="section-glow section-glow--footer" aria-hidden="true" />
      <Footer />
    </div>
  )
}
