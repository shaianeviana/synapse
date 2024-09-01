module.exports = {
  apps : [
    {
      name: 'synapse',
      script: './node_modules/next/dist/bin/next',
      args: "start -p 3000",
      instances: 2,
      watch: false,
      autorestart: true,
      exec_mode: "cluster"
    }
  ],
};
