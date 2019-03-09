import java.util.Queue;

/**
 * A simple java class that push notification on the queue at a regular interval.
 * This class is created to experiment with GraalVM Java - NodeJS Interop.
 * This class is based on the work of Daniele Bonetta. [https://medium.com/graalvm/multi-threaded-java-javascript-language-interoperability-in-graalvm-2f19c1f9c37b]
 */
public class NotificationServer {
  private final Queue<Object> queue;

  public NotificationServer(Queue<Object> queue) {
    this.queue = queue;
  }

  public void start() throws InterruptedException {
    Thread thread = new Thread(new Runnable() {
      @Override
      public void run() {
        // simulate asynchronous events, e.g., an HTTP request or a long computation
        while (true) {
          Object data = doSomeComputation();
          // awake the Node.js worker, which will notify the main Node.js' loop
          queue.offer(data);
        }
      }

      Object doSomeComputation() {
        try {
          Thread.sleep(500);
        } catch (InterruptedException ie) {
          return ie;
        }
        return Math.random();
      }
    });
    thread.start();
  }
}
