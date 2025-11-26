import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages는 리포 이름을 경로로 사용하므로 base를 '/chee/'로 맞춥니다.
export default defineConfig({
  plugins: [react()],
  base: '/chee/',
});
