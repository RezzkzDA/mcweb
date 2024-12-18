import { Button } from "@/components/ui/button"
import { CopyIcon } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center p-4">
      <main className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Zanzoken
        </h1>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <p className="text-xl md:text-2xl font-mono mb-4">play.zanzoken.my.id</p>
          <Button 
            onClick={() => navigator.clipboard.writeText('play.zanzoken.my.id')}
            className="bg-green-500 hover:bg-green-600 text-white transition-colors"
          >
            <CopyIcon className="mr-2 h-4 w-4" />
            Copy IP
          </Button>
        </div>
        <p className="text-sm text-gray-400">Click to copy the server address</p>
      </main>
      <footer className="mt-16 text-sm text-gray-500">
        &copy; Zanzoken. All rights reserved.
      </footer>
    </div>
  )
}

