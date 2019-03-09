const { Worker } = require('worker_threads');

/**
 * Creates a worker thread that "take" notification from the queue.
 */
function createWorkerThread(queue) {
  return worker = new Worker(`
    const { workerData, parentPort, threadId } = require('worker_threads');
    while (true) {
      // block the worker waiting for the next notification from Java
      var data = workerData.queue.take();

      // Perform some activity.

      // notify the main event loop that we got new data
      parentPort.postMessage({
        id: threadId,
        data: data
      });
    }`,
    {
      eval: true,
      workerData: {
        queue: queue
      }
    });
}

// Java Blocking Queue is created to ensure concurrent access
const notificationQueue = new java.util.concurrent.LinkedBlockingQueue();

// Using multiple worker threads to simulate high notification traffic
let workerList = [];
for (let i = 0; i < 4; i++) {
  let worker = createWorkerThread(notificationQueue);
  workerList.push(worker);
  worker.on('message', (message) => {
    console.log(`Updates from Worker ${message.id} ${message.data}`);
  });
}
// pass the queue to Java, to give a way to notify us back when data is available
const NotificationServer = Java.type('NotificationServer');
new NotificationServer(notificationQueue).start();
