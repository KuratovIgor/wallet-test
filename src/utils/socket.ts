export class WebSocketUtil {
  public static socket: WebSocket | null = null

  public static openConnection(url: string) {
    this.socket = new WebSocket(url)
  }

  public static closeConnection() {
    if (this.socket) {
      this.socket.close()
    }
  }

  public static onSocketMessage(handler: (event: MessageEvent) => void) {
    this.socket?.addEventListener('message', (event: MessageEvent) => {
      handler(event)
    })
  }
}
