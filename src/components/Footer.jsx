function Footer() {
  return (
    <footer id="contact" className="mt-16 border-t border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex items-center gap-3 text-sm">
          <a href="mailto:hello@example.com" className="px-3 py-1.5 rounded-lg bg-gray-900 text-white hover:bg-gray-800">Email</a>
          <a href="#" className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200">LinkedIn</a>
          <a href="#" className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200">Dribbble</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
