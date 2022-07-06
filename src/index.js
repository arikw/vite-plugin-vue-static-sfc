export default function staticVuePlugin() {
  return {
    name: 'static-vue-sfc',
    apply: 'serve',
    enforce: 'pre',
    resolveId(source, importer) {
      if (source.endsWith('.vue')) {
        return '\ufeff' + source;
      }
    },
    // HMR
    handleHotUpdate({ file, server }) {
      if (file.endsWith('.vue')) {
        console.log((new Date()).toLocaleTimeString(), '[Static Vue SFC] change detected');
        server.ws.send({ type: 'full-reload', path: '*' });
      }
    }
  };
}

