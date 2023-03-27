```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import babel from 'vite-plugin-babel'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    babel({
      presets: ['@babel/preset-env']
    })
  ],
  build: {
    target: 'es2015'
  }
})
```
```sh
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ZhangBo0918/simplechart.git
git push -u origin main
```