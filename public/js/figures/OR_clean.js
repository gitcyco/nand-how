let OrClean = draw2d.SetFigure.extend({
  NAME: "OrClean",

  init: function (attr, setter, getter) {
    this.value = false;
    this.colors = {};
    this.colors[true] = "#00f000";
    this.colors[false] = "#f00000";

    this._super($.extend({ stroke: 0, bgColor: null, width: 58, height: 50.993 }, attr), setter, getter);
    let port;

    // input0
    port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(27.586, 27.454));

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

    // input1
    port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(27.586, 70.596));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#37B1DE");
    port.setName("input1");
    port.setMaxFanOut(20);
    console.log("INPUT1 Default Value:", port.getValue());
    port.setValue(port.getValue() === null ? port.setValue(false) : port.getValue());
    // Alternatively you register for this event with:
    port.on("connect", this.onConnect);

    // output
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100.917, 49.025));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#37B1DE");
    port.setName("output");
    port.setMaxFanOut(20);
    port.setValue(port.getValue() === null ? port.setValue(false) : port.getValue());
    port.setMaxFanOut(20);
    // Alternatively you register for this event with:
    port.on("connect", this.onConnect);

    this.persistPorts = false;
  },

  createShapeElement: function () {
    let shape = this._super();
    this.originalWidth = 58;
    this.originalHeight = 50.993683632178346;
    return shape;
  },

  createSet: function () {
    this.canvas.paper.setStart();

    // BoundingBox
    shape = this.canvas.paper.path("M0,0 L58,0 L58,50.993683632178346 L0,50.993683632178346");
    shape.attr({ stroke: "none", "stroke-width": 0, fill: "none" });
    shape.data("name", "BoundingBox");

    // Circle
    shape = this.canvas.paper.path(
      "M0.2591290808826159,50.628249177609945Q0,50.650169041320254 2.030455603540986, 50.8219263367493L2.030455603540986,50.8219263367493Q4.060911207081972,50.993683632178346 4.6600702049094025, 50.943000460963276L4.6600702049094025,50.943000460963276Q5.259229202736833,50.892317289748206 5.259229202736833, 50.943000460963276L5.259229202736833,50.943000460963276Q5.259229202736833,50.993683632178346 31.629614601368417, 50.993683632178346L31.629614601368417,50.993683632178346Q58,50.993683632178346 58, 25.496841816089173L58,25.496841816089173Q58,0 31.629614601368417, 0L31.629614601368417,0Q5.259229202736833,0 5.259229202736833, 0.05068317121506993L5.259229202736833,0.05068317121506993Q5.259229202736833,0.10136634243013987 4.6600702049094025, 0.05068317121506993L4.6600702049094025,0.05068317121506993Q4.060911207081972,0 2.030455603540986, 0.17175729542904605L2.030455603540986,0.17175729542904605Q0,0.3435145908580921 0.2591290808826159, 0.3654344545684012L0.2591290808826159,0.3654344545684012Q0.5182581617652318,0.38735431827871025 2.7382749741383066, 0.9625010132216403L2.7382749741383066,0.9625010132216403Q4.958291786511381,1.5376477081645703 7.041286639372544, 2.4767883976235794L7.041286639372544,2.4767883976235794Q9.124281492233706,3.4159290870825885 11.006963641025465, 4.690528456436539L11.006963641025465,4.690528456436539Q12.889645789817223,5.965127825790489 14.514810890131457, 7.536457818179954L14.514810890131457,7.536457818179954Q16.13997599044569,9.10778781056942 17.458244223082517, 10.928104359307L17.458244223082517,10.928104359307Q18.77651245571934,12.74842090804458 19.74782890750592, 14.762414615921543L19.74782890750592,14.762414615921543Q20.719145359292497,16.776408323798506 21.313997071351537, 18.9228850111309L21.313997071351537,18.9228850111309Q21.908848783410576,21.069361698463297 22.109161487480037, 23.283101757276242L22.109161487480037,23.283101757276242Q22.309474191549498,25.496841816089187 22.109161487480037, 27.710581874902118L22.109161487480037,27.710581874902118Q21.908848783410576,29.92432193371505 21.313997071351537, 32.07079862104749L21.313997071351537,32.07079862104749Q20.719145359292497,34.217275308379925 19.74782890750592, 36.23126901625686L19.74782890750592,36.23126901625686Q18.77651245571934,38.245262724133795 17.458244223082517, 40.06557927287136L17.458244223082517,40.06557927287136Q16.13997599044569,41.885895821608926 14.514810890131457, 43.457225813998406L14.514810890131457,43.457225813998406Q12.889645789817223,45.028555806387885 11.006963641025465, 46.303155175741836L11.006963641025465,46.303155175741836Q9.124281492233706,47.577754545095786 7.041286639372544, 48.516895234554795L7.041286639372544,48.516895234554795Q4.958291786511381,49.456035924013804 2.7382749741383066, 50.03118261895672L2.7382749741383066,50.03118261895672Q0.5182581617652318,50.606329313899636 0.2591290808826159, 50.628249177609945L0.2591290808826159,50.628249177609945"
    );
    shape.attr({ stroke: "#1B1B1B", "stroke-width": 1, fill: "none", dasharray: null, opacity: 1 });
    shape.data("name", "Circle");

    // Label
    shape = this.canvas.paper.text(0, 0, "OR");
    shape.attr({
      x: 29.5,
      y: 25.09,
      "text-anchor": "start",
      text: "OR",
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
    let i1 = this.getInputPort("input1");
    let o1 = this.getOutputPort("output");

    i0.setValue(i0.getValue() === null ? false : i0.getValue());
    i1.setValue(i1.getValue() === null ? false : i1.getValue());

    const input0 = i0.getValue() === null ? false : i0.getValue();
    const input1 = i1.getValue() === null ? false : i1.getValue();
    const output = input0 || input1;

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
 * shape. add your custom code and event handler here.
 *
 *
 */
OrClean = OrClean.extend({
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
