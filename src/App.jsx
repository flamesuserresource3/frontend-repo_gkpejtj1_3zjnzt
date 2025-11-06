import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-blue-50 to-white text-gray-900">
      <Header />

      <main className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold tracking-tight">Profile</h1>
            <p className="mt-2 text-gray-600">A clean, elegant profile section with details, experience and projects.</p>
          </div>
        </div>

        <ProfileCard />
        <Skills />
      </main>

      <Footer />
    </div>
  )
}

export default App
