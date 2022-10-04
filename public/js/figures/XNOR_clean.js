let XnorClean = draw2d.SetFigure.extend({
  NAME: "XnorClean",

  init: function (attr, setter, getter) {
    this.value = false;
    this.colors = {};
    this.colors[true] = "#00f000";
    this.colors[false] = "#f00000";

    this._super($.extend({ stroke: 0, bgColor: null, width: 71.584, height: 50.993 }, attr), setter, getter);
    let port;

    // input0
    port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(11.992, 27.4543));

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
    port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(11.992, 70.596));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#37B1DE");
    port.setName("input1");
    port.setMaxFanOut(20);
    console.log("INPUT1 Default Value:", port.getValue());
    port.setValue(port.getValue() === null ? port.setValue(false) : port.getValue());
    // Alternatively you register for this event with:
    port.on("connect", this.onConnect);

    // output
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(108.381, 49.025));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#37B1DE");
    port.setName("output");
    port.setMaxFanOut(20);
    port.setValue(port.getValue() === null ? port.setValue(false) : port.getValue());
    // Alternatively you register for this event with:
    port.on("connect", this.onConnect);

    this.persistPorts = false;
  },

  createShapeElement: function () {
    let shape = this._super();
    this.originalWidth = 71.58451433989285;
    this.originalHeight = 50.993683632178346;
    return shape;
  },

  createSet: function () {
    this.canvas.paper.setStart();

    // BoundingBox
    shape = this.canvas.paper.path(
      "M0,0 L71.58451433989285,0 L71.58451433989285,50.993683632178346 L0,50.993683632178346"
    );
    shape.attr({ stroke: "none", "stroke-width": 0, fill: "none" });
    shape.data("name", "BoundingBox");

    // Circle
    shape = this.canvas.paper.path(
      "M1.1368683772161603e-13 46.5L5.533455934995288 44.09427851322252L10.481552690162346 41.022002058041295L14.49524875285141 37.4629051778507L17.45258999922521 33.52512923036542L19.263719111999592 29.32832154513906L19.873605849558942 25.00000000000003L19.263719111999592 20.671678454861024L17.45258999922521 16.474870769634663L14.49524875285141 12.537094822149385L10.481552690162346 8.97799794195879L5.533455934995288 5.905721486777566L0 3.5L0.010980000502286202 3.503179047501817L5.719348771911655 5.9849455184299245L10.64691538902332 9.044474797698655L14.643958233645037 12.588804636354013L17.589029181544618 16.510242365765862L19.392643742247287 20.689637084869247L20 25.00000000000003L19.392643742247287 29.31036291513084L17.589029181544618 33.48975763423422L14.643958233645037 37.41119536364607L10.64691538902332 40.95552520230143L5.719348771911655 44.01505448157016L0.010980000502286202 46.49682095249821L1.1368683772161603e-13 46.5Z"
    );
    shape.attr({ stroke: "#1B1B1B", "stroke-width": 1, fill: "none", dasharray: null, opacity: 1 });
    shape.data("name", "Circle");

    // Circle
    shape = this.canvas.paper.path(
      "M61.16381136192865,41.420038794760686Q61.16381136192865,31.846393957343025 61.37809109818852, 31.947044306618665L61.37809109818852,31.947044306618665Q61.59237083444839,32.047694655894304 62.21918588321017, 32.21687640174294L62.21918588321017,32.21687640174294Q62.84600093197196,32.38605814759157 63.49245825950766, 32.443029073795785L63.49245825950766,32.443029073795785Q64.13891558704336,32.5 64.78537291457911, 32.443029073795785L64.78537291457911,32.443029073795785Q65.43183024211487,32.38605814759157 66.0586452908766, 32.21687640174294L66.0586452908766,32.21687640174294Q66.68546033963833,32.047694655894304 67.27358765155321, 31.771442592138797L67.27358765155321,31.771442592138797Q67.8617149634681,31.49519052838329 68.39328458777032, 31.120261925887817L68.39328458777032,31.120261925887817Q68.92485421207255,30.745333323392344 69.38371467471495, 30.283120198020697L69.38371467471495,30.283120198020697Q69.84257513735736,29.82090707264905 70.21478419537709, 29.285453536324525L70.21478419537709,29.285453536324525Q70.58699325339683,28.75 70.86124152291285, 28.15757553747126L70.86124152291285,28.15757553747126Q71.13548979242887,27.56515107494252 71.30344437854825, 26.933756203722254L71.30344437854825,26.933756203722254Q71.47139896466763,26.302361332501988 71.52795665228024, 25.651180666250994L71.52795665228024,25.651180666250994Q71.58451433989285,25 71.52795665228024, 24.348819333749006L71.52795665228024,24.348819333749006Q71.47139896466763,23.697638667498012 71.30344437854825, 23.066243796277746L71.30344437854825,23.066243796277746Q71.13548979242887,22.43484892505748 70.86124152291285, 21.84242446252874L70.86124152291285,21.84242446252874Q70.58699325339683,21.25 70.21478419537709, 20.714546463675475L70.21478419537709,20.714546463675475Q69.84257513735736,20.17909292735095 69.38371467471495, 19.716879801979303L69.38371467471495,19.716879801979303Q68.92485421207255,19.254666676607656 68.39328458777032, 18.879738074112183L68.39328458777032,18.879738074112183Q67.8617149634681,18.50480947161671 67.27358765155321, 18.228557407861203L67.27358765155321,18.228557407861203Q66.68546033963833,17.952305344105696 66.0586452908766, 17.783123598257063L66.0586452908766,17.783123598257063Q65.43183024211487,17.61394185240843 64.78537291457911, 17.556970926204215L64.78537291457911,17.556970926204215Q64.13891558704336,17.5 63.49245825950766, 17.556970926204215L63.49245825950766,17.556970926204215Q62.84600093197196,17.61394185240843 62.21918588321017, 17.783123598257063L62.21918588321017,17.783123598257063Q61.59237083444839,17.952305344105696 61.37809109818852, 18.052955693381335L61.37809109818852,18.052955693381335Q61.16381136192865,18.153606042656975 61.16381136192865, 9.076803021328487L61.16381136192865,9.076803021328487Q61.16381136192865,0 36.16381136192865, 0L33.80559572560577,0Q8.80559572560577,0 8.80559572560577, 0.05068317121506993L8.80559572560577,0.05068317121506993Q8.80559572560577,0.10136634243013987 8.210782727341439, 0.05068317121506993L8.210782727341439,0.05068317121506993Q7.615969729077108,0 5.600242034484978, 0.17175729542904605L5.600242034484978,0.17175729542904605Q3.5845143398928485,0.3435145908580921 3.841763828085732, 0.3654344545684012L3.841763828085732,0.3654344545684012Q4.099013316278615,0.38735431827871025 6.302927237546584, 0.9625010132216403L6.302927237546584,0.9625010132216403Q8.506841158814552,1.5376477081645703 10.574727009301881, 2.4767883976235794L10.574727009301881,2.4767883976235794Q12.64261285978921,3.4159290870825885 14.511638974329998, 4.690528456436539L14.511638974329998,4.690528456436539Q16.380665088870785,5.965127825790489 17.994042054747325, 7.536457818179954L17.994042054747325,7.536457818179954Q19.607419020623865,9.10778781056942 20.916125195136118, 10.928104359307L20.916125195136118,10.928104359307Q22.22483136964837,12.74842090804458 23.189102377920932, 14.762414615921543L23.189102377920932,14.762414615921543Q24.153373386193493,16.776408323798506 24.743910341585092, 18.9228850111309L24.743910341585092,18.9228850111309Q25.33444729697669,21.069361698463297 25.53330703292329, 23.283101757276242L25.53330703292329,23.283101757276242Q25.732166768869888,25.496841816089187 25.53330703292329, 27.710581874902118L25.53330703292329,27.710581874902118Q25.33444729697669,29.92432193371505 24.743910341585092, 32.07079862104749L24.743910341585092,32.07079862104749Q24.153373386193493,34.217275308379925 23.189102377920932, 36.23126901625686L23.189102377920932,36.23126901625686Q22.22483136964837,38.245262724133795 20.916125195136118, 40.06557927287136L20.916125195136118,40.06557927287136Q19.607419020623865,41.885895821608926 17.994042054747325, 43.457225813998406L17.994042054747325,43.457225813998406Q16.380665088870785,45.028555806387885 14.511638974329998, 46.303155175741836L14.511638974329998,46.303155175741836Q12.64261285978921,47.577754545095786 10.574727009301881, 48.516895234554795L10.574727009301881,48.516895234554795Q8.506841158814552,49.456035924013804 6.302927237546584, 50.03118261895672L6.302927237546584,50.03118261895672Q4.099013316278615,50.606329313899636 3.841763828085732, 50.628249177609945L3.841763828085732,50.628249177609945Q3.5845143398928485,50.650169041320254 5.600242034484978, 50.8219263367493L5.600242034484978,50.8219263367493Q7.615969729077108,50.993683632178346 8.210782727341439, 50.943000460963276L8.210782727341439,50.943000460963276Q8.80559572560577,50.892317289748206 8.80559572560577, 50.943000460963276L8.80559572560577,50.943000460963276Q8.80559572560577,50.993683632178346 33.80559572560577, 50.993683632178346L36.16381136192865,50.993683632178346Q61.16381136192865,50.993683632178346 61.16381136192865, 41.420038794760686L61.16381136192865,41.420038794760686"
    );
    shape.attr({ stroke: "#1B1B1B", "stroke-width": 1, fill: "none", dasharray: null, opacity: 1 });
    shape.data("name", "Circle");

    // Label
    shape = this.canvas.paper.text(0, 0, "XNOR");
    shape.attr({
      x: 31.138157845000705,
      y: 24.999999999999993,
      "text-anchor": "start",
      text: "XNOR",
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
    const output = input0 === input1;

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
XnorClean = XnorClean.extend({
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
