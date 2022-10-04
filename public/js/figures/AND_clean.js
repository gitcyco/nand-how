let AndClean = draw2d.SetFigure.extend({
  NAME: "AndClean",

  init: function (attr, setter, getter) {
    this.value = false;
    this.colors = {};
    this.colors[true] = "#00f000";
    this.colors[false] = "#f00000";

    this._super($.extend({ stroke: 0, bgColor: null, width: 50, height: 40 }, attr), setter, getter);
    let port;

    // Port0
    port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(0.616, 22.5));
    // port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0.6164664320000384, 22.5));

    // setConnectionDirection(): (port connection orientation)
    // up -> 0
    // right -> 1
    // down -> 2
    // left -> 3
    // calculated -> null
    port.setConnectionDirection(3);

    // port.setBackgroundColor("#37B1DE");
    port.setBackgroundColor(this.colors[false]);
    port.setName("input0");
    port.setMaxFanOut(20);
    console.log("INPUT0 Default Value:", port.getValue());
    port.setValue(port.getValue() === null ? port.setValue(false) : port.getValue());
    // Alternatively you register for this event with:
    port.on("connect", this.onConnect);

    // Port1
    port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(0.616, 77.5));
    port.setConnectionDirection(3);
    // port.setBackgroundColor("#37B1DE");
    port.setBackgroundColor(this.colors[false]);
    port.setName("input1");
    console.log("INPUT1 Default Value:", port.getValue());
    port.setValue(port.getValue() === null ? port.setValue(false) : port.getValue());
    port.setMaxFanOut(20);
    // Alternatively you register for this event with:
    port.on("connect", this.onConnect);

    // Port Out
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(99.355, 50));
    port.setConnectionDirection(1);
    // port.setBackgroundColor("#37B1DE");
    port.setBackgroundColor(this.colors[false]);
    port.setName("output");
    port.setValue(port.getValue() === null ? port.setValue(false) : port.getValue());
    port.setMaxFanOut(20);
    // Alternatively you register for this event with:
    port.on("connect", this.onConnect);

    this.persistPorts = false;
  },

  createShapeElement: function () {
    let shape = this._super();
    this.originalWidth = 50;
    this.originalHeight = 40;
    return shape;
  },

  createSet: function () {
    this.canvas.paper.setStart();

    // BoundingBox
    shape = this.canvas.paper.path("M0,0 L50,0 L50,40 L0,40");
    // shape.attr({ stroke: "none", "stroke-width": 0, fill: "none" });
    // shape.attr({ stroke: "none", "stroke-width": 0, fill: "#FFFFFF", opacity: 0 });
    shape.attr({ stroke: "none", "stroke-width": 0, opacity: 0 });
    shape.data("name", "BoundingBox");

    // Rectangle
    shape = this.canvas.paper.path(
      "M33.223876766324224 0.017293963908841192L33.223876766324224 0L0 0L0 40L33.223876766324224 40L33.223876766324224 39.982706036091145L33.388061616838 40L36.27269444458943 39.696155060244166L39.06967916356439 38.79385241571816L41.69403080841954 37.32050807568879L44.06600978241096 35.32088886237955L46.11354470469382 32.85575219373078L47.77442226275804 30L48.998177532445595 26.840402866513386L49.74762732913706 23.472963553338616L50 20L49.74762732913706 16.527036446661327L48.998177532445595 13.159597133486614L47.77442226275804 10L46.11354470469382 7.14424780626922L44.06600978241096 4.679111137620453L41.69403080841954 2.679491924311236L39.06967916356439 1.206147584281851L36.27269444458943 0.30384493975584803L33.388061616838 1.4210854715202004e-14L33.223876766324224 0.017293963908841192Z"
    );
    // shape.attr({ stroke: "#303030", "stroke-width": 1, fill: "#FFFFFF", dasharray: null, opacity: 1 });
    shape.attr({ stroke: "#303030", "stroke-width": 1, dasharray: null, opacity: 1, cssClass: "rect-red" });
    shape.data("name", "Rectangle");

    // Label
    shape = this.canvas.paper.text(0, 0, "AND");
    shape.attr({
      x: 14.443400945547296,
      y: 20.02669363200004,
      "text-anchor": "start",
      text: "AND",
      "font-family": '"Arial"',
      "font-size": 10,
      stroke: "none",
      fill: "#080808",
      "stroke-scale": true,
      "font-weight": "normal",
      "stroke-width": 0,
      opacity: 1,
    });
    shape.data("name", "Label");

    return this.canvas.paper.setFinish();
  },

  applyAlpha: function () {},

  layerGet: function (name, attributes) {
    if (this.svgNodes === null) return null;

    let result = null;
    this.svgNodes.some(function (shape) {
      if (shape.data("name") === name) {
        // if (shape.data("name") !== name) {
        result = shape;
      }
      return result !== null;
    });

    return result;
  },

  layerAttr: function (name, attributes) {
    if (this.svgNodes === null) return;

    this.svgNodes.forEach(function (shape) {
      if (shape.data("name") === name) {
        shape.attr(attributes);
      }
    });
  },

  layerShow: function (name, flag, duration) {
    if (this.svgNodes === null) return;

    if (duration) {
      this.svgNodes.forEach(function (node) {
        if (node.data("name") === name) {
          if (flag) {
            node.attr({ opacity: 0 }).show().animate({ opacity: 1 }, duration);
          } else {
            node.animate({ opacity: 0 }, duration, function () {
              this.hide();
            });
          }
        }
      });
    } else {
      this.svgNodes.forEach(function (node) {
        if (node.data("name") === name) {
          if (flag) {
            node.show();
          } else {
            node.hide();
          }
        }
      });
    }
  },

  calculate: function () {},

  onStart: function () {},

  onStop: function () {},

  getParameterSettings: function () {
    return [];
  },

  /**
   * @method
   */
  addPort: function (port, locator) {
    this._super(port, locator);
    return port;
  },

  /**
   * @method
   * Return an objects with all important attributes for XML or JSON serialization
   *
   * @returns {Object}
   */
  getPersistentAttributes: function () {
    let memento = this._super();

    // add all decorations to the memento
    //
    memento.labels = [];
    this.children.each(function (i, e) {
      let labelJSON = e.figure.getPersistentAttributes();
      labelJSON.locator = e.locator.NAME;
      memento.labels.push(labelJSON);
    });

    return memento;
  },

  //   repaint: function (attributes) {
  //     // if (this.repaintBlocked === true || this.shape === null) {
  //     //   return;
  //     // }
  //
  //     attributes = attributes || {};
  //
  //     console.log("ATTRIBUTES:", attributes, this.svgNodes);
  //   },

  /**
   * @method
   * Read all attributes from the serialized properties and transfer them into the shape.
   *
   * @param {Object} memento
   * @returns
   */
  setPersistentAttributes: function (memento) {
    this._super(memento);

    // remove all decorations created in the constructor of this element
    //
    this.resetChildren();

    // and add all children of the JSON document.
    //
    $.each(
      memento.labels,
      $.proxy(function (i, json) {
        // create the figure stored in the JSON
        let figure = eval("new " + json.type + "()");

        // apply all attributes
        figure.attr(json);

        // instantiate the locator
        let locator = eval("new " + json.locator + "()");

        // add the new figure as child to this figure
        this.add(figure, locator);
      }, this)
    );
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

    // console.log("ME:", this);
    // this.setBackgroundColor(this.colors[this.value]);

    // this.setColor("#111111");

    let i0 = this.getInputPort("input0");
    let i1 = this.getInputPort("input1");
    let o1 = this.getOutputPort("output");

    i0.setValue(i0.getValue() === null ? false : i0.getValue());
    i1.setValue(i1.getValue() === null ? false : i1.getValue());

    const input0 = i0.getValue() === null ? false : i0.getValue();
    const input1 = i1.getValue() === null ? false : i1.getValue();
    const output = input0 && input1;

    // if (i0.getValue() === null || i1.getValue() === null || o1.getValue === null) {
    //   console.log("NULL start values, return");
    //   return;
    // }
    o1.setValue(output);
    // o1.setValue(i0.getValue() && i1.getValue());
    // console.log("output, AND VAL:", input0, input1, output, o1.getValue());

    this.value = o1.getValue();
    // this.setBackgroundColor(this.colors[this.value]);
    let connections = this.getOutputPort("output").getConnections();
    connections.each(
      $.proxy(function (i, conn) {
        let sourcePort = conn.getSource();
        // console.log("SOURCE PORT:", sourcePort);
        let targetPort = conn.getTarget();
        // console.log("TARGET PORT:", targetPort);
        targetPort.setValue(this.value);
        targetPort.setColor(this.colors[this.value]);
        conn.setColor(this.colors[this.value]);
      }, this)
    );
  },
  /**
   * @method
   * Called if the value of any port has been changed
   *
   * @param {draw2d.Connection} connection
   * @template
   */
  onConnect: function (event, connection) {
    // console.log("CONNECTED!", event, connection);
  },
  onClick: function (e) {
    // console.log("ME:", this);
    // // for (let obj in this) {
    // //   console.log(obj);
    // // }
    // this.color = "#F1F1F1";
    // console.log(this.color, this.bgColor);
  },
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
AndClean = AndClean.extend({
  init: function (attr, setter, getter) {
    this._super(attr, setter, getter);

    // your special code here
  },

  /**
   *  Called by the simulator for every calculation
   *  loop
   *  @required
   **/
  calculate: function () {},

  /**
   *  Called if the simulation mode is starting
   *  @required
   **/
  onStart: function () {},

  /**
   *  Called if the simulation mode is stopping
   *  @required
   **/
  onStop: function () {},
});
