// server.js

import cluster from "cluster";
import os from "os";
import workerApp from "../index.js";

const startServer = (useCluster) => {
    if (useCluster && cluster.isMaster) {
        const numCPUs = os.cpus().length;

        // Fork workers for each CPU core
        for (let i = 0; i < numCPUs; i++) {
            cluster.fork();
        }

        cluster.on('exit', (worker, code, signal) => {
            console.log(`Worker ${worker.process.pid} died`);
        });
    } else {
        // Code to run in each worker
        const Port = 3000;

        workerApp.listen(Port, () => {
            console.log(useCluster ? `Worker ${cluster.worker.id} is running on port ${Port}` : `Server is running on port ${Port}`);
        });
    }
};

export { startServer };
