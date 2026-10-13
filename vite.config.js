import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  cacheDir: join(tmpdir(), 'task-assessment-app-vite-cache'),
  plugins: [...react(), ...tailwindcss()],
})
