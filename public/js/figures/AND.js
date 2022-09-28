let AndSimple = draw2d.shape.basic.Rectangle.extend({
  NAME: "AndSimple",

  init: function (attr) {
    this.value = false;
    this.colors = {};
    this.colors[true] = "#00f000";
    this.colors[false] = "#f00000";

    this._super($.extend({ width: 30, height: 30, resizeable: false, bgColor: this.colors[this.value] }, attr));

    // let port;
    // // output
    // port = this.addPort();
    // port.setConnectionDirection(1);
    // port.setBackgroundColor("#37B1DE");
    // port.setName("output");
    // port.setMaxFanOut(20);

    this.createPort("input");
    this.createPort("input");
    this.createPort("output");

    console.log(this.getInputPort(0));
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

    let i1 = this.getInputPort(0);
    let i2 = this.getInputPort(1);
    let o1 = this.getOutputPort(0);

    o1.setValue(i1.getValue() && i2.getValue());
    console.log("AND VAL:", o1.getValue());

    this.value = o1.getValue();
    this.setBackgroundColor(this.colors[this.value]);
    let connections = this.getOutputPort(0).getConnections();
    connections.each(
      $.proxy(function (i, conn) {
        let targetPort = conn.getTarget();
        targetPort.setValue(this.value);
        conn.setColor(this.getBackgroundColor());
      }, this)
    );
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
