import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      manifest:{
        icons:[
          {
            src: "./assets/icons-520.png",
            sizes: "520x520",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "./assets/icons-1024.png",
            sizes: "1024x1024",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      },
      workbox:{
        runtimeCaching: [{
          urlPattern:({url}) =>   {
            return url.pathname.startsWith("/salons")
          },
          handler:"CacheFirst" ,
          options: {
            cacheName: "api-cache-salons",
            cacheableResponse:{
              statuses: [0, 200]
            }
          }
        }]
      }
    })
  ]
  })
