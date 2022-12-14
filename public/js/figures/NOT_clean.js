let NotClean = draw2d.SetFigure.extend({
  NAME: "NotClean",

  init: function (attr, setter, getter) {
    this.value = false;
    this.colors = {};
    this.colors[true] = "#00f000";
    this.colors[false] = "#f00000";

    this._super($.extend({ stroke: 0, bgColor: null, width: 25.538, height: 28 }, attr), setter, getter);
    let port;

    // input0
    // port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-17.215, 51.066));
    port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-5.215, 51.066));

    // setConnectionDirection(): (port connection orientation)
    // up -> 0
    // right -> 1
    // down -> 2
    // left -> 3
    // calculated -> null
    port.setConnectionDirection(3);

    port.setBackgroundColor("#37B1DE");
    port.setName("input0");
    port.setMaxFanOut(20);
    console.log("INPUT0 Default Value:", port.getValue());
    port.setValue(port.getValue() === null ? port.setValue(false) : port.getValue());
    // Alternatively you register for this event with:
    port.on("connect", this.onConnect);

    // output
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(90, 51.066));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#37B1DE");
    port.setName("output");
    port.setMaxFanOut(20);
    console.log("OUTPUT Default Value:", port.getValue());
    port.setValue(port.getValue() === null ? port.setValue(false) : port.getValue());
    // Alternatively you register for this event with:
    port.on("connect", this.onConnect);

    this.persistPorts = false;
  },

  createShapeElement: function () {
    let shape = this._super();
    this.originalWidth = 25.538945252810663;
    this.originalHeight = 27.999999999999986;
    return shape;
  },

  createSet: function () {
    this.canvas.paper.setStart();

    // BoundingBox
    shape = this.canvas.paper.path(
      "M0,0 L25.538945252810663,0 L25.538945252810663,27.999999999999986 L0,27.999999999999986"
    );
    shape.attr({ stroke: "none", "stroke-width": 0, fill: "none" });
    shape.data("name", "BoundingBox");

    // Circle
    shape = this.canvas.paper.path(
      "M25.502476624664098 14.539100486580693L25.538945252810663 14.087836859553803L25.502476624664098 13.636573232526885L25.394178821036803 13.199021022456762L25.217342415890528 12.788475031834324L24.97734049391204 12.417409492838331L24.68146539205395 12.097099044102961L24.338707125566202 11.837276156528134L23.959480230931888 11.645835417076057L23.555307325446506 11.528593655741304L23.13846899832174 11.489113204114872L22.721630671196976 11.528593655741304L22.317457765711595 11.645835417076057L21.938230871077337 11.837276156528134L21.59547260458953 12.097099044102961L21.2995975027315 12.417409492838331L21.16897746461217 12.6193603541018L11.85555846887263 6.943841581805884L0.6933438854989618 0.14168241369448253L0.5389452528106631 0L0.7473546012248562 27.999999999999986L20.928627503074893 15.083141278133908L21.05959558075301 15.387198687273255L21.2995975027315 15.758264226269247L21.59547260458953 16.078574675004617L21.938230871077337 16.33839756257946L22.317457765711595 16.529838302031536L22.721630671196976 16.64708006336629L23.13846899832174 16.686560514992706L23.555307325446506 16.64708006336629L23.959480230931888 16.529838302031536L24.338707125566202 16.33839756257946L24.68146539205395 16.078574675004617L24.97734049391204 15.758264226269247L25.217342415890528 15.387198687273255L25.394178821036803 14.976652696650817L25.502476624664098 14.539100486580693Z"
    );
    shape.attr({ stroke: "#1B1B1B", "stroke-width": 1, fill: "none", dasharray: null, opacity: 1 });
    shape.data("name", "Circle");

    // Label
    shape = this.canvas.paper.text(0, 0, "NOT");
    shape.attr({
      x: 4,
      y: 14.298670425061227,
      "text-anchor": "start",
      text: "NOT",
      "font-family": '"Arial"',
      "font-size": 6,
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
    let o1 = this.getOutputPort("output");

    i0.setValue(i0.getValue() === null ? false : i0.getValue());

    const input0 = i0.getValue() === null ? false : i0.getValue();

    const output = !input0;

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
NotClean = NotClean.extend({
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
