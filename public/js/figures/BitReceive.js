let BitReceive = draw2d.shape.basic.Rectangle.extend({
  NAME: "BitReceive",

  init: function (attr) {
    this.value = false;
    this.colors = {};
    this.colors[true] = "#00f000";
    this.colors[false] = "#f00000";

    this._super($.extend({ width: 30, height: 30, resizeable: false, bgColor: this.colors[this.value] }, attr));

    // this.createPort("output");

    // Port
    // port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(99.35551887266377, 50));
    port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0.616466432000038, 50));

    port.setConnectionDirection(3);
    port.setBackgroundColor("#37B1DE");
    this.setBackgroundColor(this.colors[this.value]);
    port.setName("input0");
    // port.setValue(port.getValue() === null ? port.setValue(false) : port.getValue());
    port.setValue(this.value);
    port.setMaxFanOut(20);

    // Register the onConnect handler
    port.on("connect", this.onConnect);

    this.persistPorts = false;
  },

  /**
   * @method
   * Called if the value of any port has been changed
   *
   * @param {draw2d.Port} relatedPort
   * @template
   */
  onPortValueChanged: function (relatedPort) {
    // call the timer manually. In this case we are safe and we
    // didn'T lost any data...
    // this.onTimer();
    console.log("bitReceive relatedPort:", relatedPort);
    let port = this.getInputPort("input0");
    port.setValue(port.getValue() === null ? port.setValue(false) : port.getValue());
    let value = port.getValue();
    console.log("bitReceive this.value, value:", this.value, value);
    console.log("end bitReceive");
    this.value = value;
    this.setBackgroundColor(this.colors[this.value]);
  },
  onConnect: function (event, connection) {
    console.log("bitReceive CONNECTED!", event, connection);
  },
  //   /**
  //    * @method
  //    * Change the color and the internal value of the figure.
  //    * Post the new value to related input ports.
  //    *
  //    */
  //   onClick: function () {
  //     this.value = !this.value;
  //     this.setBackgroundColor(this.colors[this.value]);
  //
  //     let connections = this.getInputPort(0).getConnections();
  //     connections.each(
  //       $.proxy(function (i, conn) {
  //         let targetPort = conn.getTarget();
  //         targetPort.setValue(this.value);
  //         conn.setColor(this.getBackgroundColor());
  //       }, this)
  //     );
  //   },
});
