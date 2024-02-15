module.exports = {
    apps: [
      {
        name: "your-app-name",
        script: "./node_modules/.bin/babel-node",
        args: "--require @babel/register path/to/your/app.js", // Replace with the actual path to your main server file
        instances: "max",
        exec_mode: "cluster",
        watch: true,
        env: {
          NODE_ENV: "production",
          PORT: 3000,
        },
      },
    ],
  };