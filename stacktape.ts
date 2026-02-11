import { CustomDockerfilePackaging, WebService, defineConfig } from 'stacktape';

export default defineConfig(() => {
  const webService = new WebService({
    packaging: new CustomDockerfilePackaging({
      buildContextPath: './'
    }),
    resources: {
      cpu: 0.25,
      memory: 512
    },
    cors: {
      enabled: true
    }
  });

  return {
    resources: { webService }
  };
});
