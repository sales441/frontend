export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    watch: {
      ignored: ['**/node_modules/**', '**/.git/**']
    }
  }
});
