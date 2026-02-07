import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/page';
import ContactUs from './pages/contact-us/page';
import AboutUs from './pages/about-us/page';
import Projects from './pages/projects/page';
import ProjectDetails from './pages/projectdetail/page';
import Error404 from './pages/error/page';
import Services from './pages/services/page';
import Blogs from './pages/blogs/page';
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Analytics />
    </>
  )
}

export default App
