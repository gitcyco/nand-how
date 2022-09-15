BitReceive = draw2d.shape.basic.Rectangle.extend({
  NAME: "BitReceive",

  init: function (attr) {
    this.value = false;
    this.colors = {};
    this.colors[true] = "#00f000";
    this.colors[false] = "#f00000";

    this._super($.extend({ width: 30, height: 30, resizeable: false, bgColor: this.colors[this.value] }, attr));

    this.createPort("input");
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
    let port = this.getInputPort(0);
    let value = port.getValue();
    console.log("this.value, value:", this.value, value);
    this.value = value;
    this.setBackgroundColor(this.colors[this.value]);
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
