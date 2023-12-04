import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(),
    VitePWA({  
      registerType: 'noUpdate',  
      manifest: {
        "background_color": "#ffffff",
        "categories": ["business", "social", "sports"],
        "description": "Bienvenido la gran club campestre Canaima.",
        "dir": "ltr",
        "display_override": ["standalone", "fullscreen"],
        "display": "standalone",
        "icons": [
          {
            "src": "icon-20.png",
            "type": "image/png",
            "sizes": "20x20"
          },
          {
            "src": "icon-29.png",
            "type": "image/png",
            "sizes": "29x29",
            "purpose": "any "
          },
          {
            "src": "icon-40.png",
            "type": "image/png",
            "sizes": "40x40"
          },
          {
            "src": "icon-50.png",
            "type": "image/png",
            "sizes": "50x50"
          },
          {
            "src": "icon-57.png",
            "type": "image/png",
            "sizes": "57x57"
          },
          {
            "src": "icon-60.png",
            "type": "image/png",
            "sizes": "60x60"
          },
          {
            "src": "icon-72.png",
            "type": "image/png",
            "sizes": "72x72"
          },
          {
            "src": "icon-76.png",
            "type": "image/png",
            "sizes": "76x76"
          },
          {
            "src": "icon-1024.png",
            "type": "image/png",
            "sizes": "1024x1024"
          }
        ],
        "lang": "es-ES",
        "name": "Canaima Club PWA",
        "orientation": "portrait",
        "prefer_related_application": false,
        "scope": "/",
        "short_name": "Canaima",
        "start_url": "/",
        "theme_color": "#5F6F52"
      },  
    }),  
  ],  
});
  
