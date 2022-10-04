let BitSend = draw2d.shape.basic.Rectangle.extend({
  NAME: "BitSend",

  init: function (attr) {
    this.value = false;
    this.colors = {};
    this.colors[true] = "#00f000";
    this.colors[false] = "#f00000";

    this._super($.extend({ width: 30, height: 30, resizeable: false, bgColor: this.colors[this.value] }, attr));

    // this.createPort("output");

    // Port
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(99.35551887266377, 50));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#37B1DE");
    port.setName("output");
    port.setValue(port.getValue() === null ? port.setValue(false) : port.getValue());
    port.setMaxFanOut(20);
    this.persistPorts = false;
  },

  /**
   * @method
   * Change the color and the internal value of the figure.
   * Post the new value to related input ports.
   *
   */
  onClick: function () {
    this.value = !this.value;
    this.setBackgroundColor(this.colors[this.value]);

    let connections = this.getOutputPort("output").getConnections();
    connections.each(
      $.proxy(function (i, conn) {
        let targetPort = conn.getTarget();
        targetPort.setValue(this.value);
        conn.setColor(this.getBackgroundColor());
        // conn.setRouter(defaultRouter);
      }, this)
    );
  },
});
