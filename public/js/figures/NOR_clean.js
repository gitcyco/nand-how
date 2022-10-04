// ATTENTION:
//
//
//
// FIX THIS, it is currently XOR, not NOR
//

let NorClean = draw2d.SetFigure.extend({
  NAME: "NorClean",

  init: function (attr, setter, getter) {
    this.value = false;
    this.colors = {};
    this.colors[true] = "#00f000";
    this.colors[false] = "#f00000";

    this._super($.extend({ stroke: 0, bgColor: null, width: 61.5, height: 51 }, attr), setter, getter);
    let port;
    // input2
    port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(13.939, 70.596));

    // setConnectionDirection(): (port connection orientation)
    // up -> 0
    // right -> 1
    // down -> 2
    // left -> 3
    // calculated -> null
    port.setConnectionDirection(3);

    port.setBackgroundColor("#37B1DE");
    port.setName("input2");
    port.setMaxFanOut(20);
    // input1
    port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(13.939, 27.454));
    port.setConnectionDirection(3);
    port.setBackgroundColor("#37B1DE");
    port.setName("input1");
    port.setMaxFanOut(20);
    // output
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(100.864, 49.025));
    port.setConnectionDirection(1);
    port.setBackgroundColor("#37B1DE");
    port.setName("output");
    port.setMaxFanOut(20);
    this.persistPorts = false;
  },

  createShapeElement: function () {
    let shape = this._super();
    this.originalWidth = 61.58451433989285;
    this.originalHeight = 50.993683632178346;
    return shape;
  },

  createSet: function () {
    this.canvas.paper.setStart();

    // BoundingBox
    shape = this.canvas.paper.path(
      "M0,0 L61.58451433989285,0 L61.58451433989285,50.993683632178346 L0,50.993683632178346"
    );
    shape.attr({ stroke: "none", "stroke-width": 0, fill: "none" });
    shape.data("name", "BoundingBox");

    // Circle
    shape = this.canvas.paper.path(
      "M1.1368683772161603e-13 46.5L5.533455934995288 44.09427851322252L10.481552690162346 41.022002058041295L14.49524875285141 37.4629051778507L17.45258999922521 33.52512923036542L19.263719111999592 29.32832154513906L19.873605849558942 25.00000000000003L19.263719111999592 20.671678454861024L17.45258999922521 16.474870769634663L14.49524875285141 12.537094822149385L10.481552690162346 8.97799794195879L5.533455934995288 5.905721486777566L0 3.5L0.010980000502286202 3.503179047501817L5.719348771911655 5.9849455184299245L10.64691538902332 9.044474797698655L14.643958233645037 12.588804636354013L17.589029181544618 16.510242365765862L19.392643742247287 20.689637084869247L20 25.00000000000003L19.392643742247287 29.31036291513084L17.589029181544618 33.48975763423422L14.643958233645037 37.41119536364607L10.64691538902332 40.95552520230143L5.719348771911655 44.01505448157016L0.010980000502286202 46.49682095249821L1.1368683772161603e-13 46.5Z"
    );
    shape.attr({ stroke: "#1B1B1B", "stroke-width": 1, fill: "none", dasharray: null, opacity: 1 });
    shape.data("name", "Circle");

    // Label
    shape = this.canvas.paper.text(0, 0, "XOR");
    shape.attr({
      x: 29.447086240211206,
      y: 25.090644473674978,
      "text-anchor": "start",
      text: "XOR",
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

    // Circle
    shape = this.canvas.paper.path(
      "M3.8436434207754644,50.628249177609945Q3.5845143398928485,50.650169041320254 5.6149699434338345, 50.8219263367493L5.6149699434338345,50.8219263367493Q7.6454255469748205,50.993683632178346 8.244584544802251, 50.943000460963276L8.244584544802251,50.943000460963276Q8.843743542629682,50.892317289748206 8.843743542629682, 50.943000460963276L8.843743542629682,50.943000460963276Q8.843743542629682,50.993683632178346 35.214128941261265, 50.993683632178346L35.214128941261265,50.993683632178346Q61.58451433989285,50.993683632178346 61.58451433989285, 25.496841816089173L61.58451433989285,25.496841816089173Q61.58451433989285,0 35.214128941261265, 0L35.214128941261265,0Q8.843743542629682,0 8.843743542629682, 0.05068317121506993L8.843743542629682,0.05068317121506993Q8.843743542629682,0.10136634243013987 8.244584544802251, 0.05068317121506993L8.244584544802251,0.05068317121506993Q7.6454255469748205,0 5.6149699434338345, 0.17175729542904605L5.6149699434338345,0.17175729542904605Q3.5845143398928485,0.3435145908580921 3.8436434207754644, 0.3654344545684012L3.8436434207754644,0.3654344545684012Q4.10277250165808,0.38735431827871025 6.322789314031155, 0.9625010132216403L6.322789314031155,0.9625010132216403Q8.54280612640423,1.5376477081645703 10.625800979265392, 2.4767883976235794L10.625800979265392,2.4767883976235794Q12.708795832126555,3.4159290870825885 14.591477980918313, 4.690528456436539L14.591477980918313,4.690528456436539Q16.47416012971007,5.965127825790489 18.099325230024306, 7.536457818179954L18.099325230024306,7.536457818179954Q19.72449033033854,9.10778781056942 21.042758562975365, 10.928104359307L21.042758562975365,10.928104359307Q22.36102679561219,12.74842090804458 23.332343247398768, 14.762414615921543L23.332343247398768,14.762414615921543Q24.303659699185346,16.776408323798506 24.898511411244385, 18.9228850111309L24.898511411244385,18.9228850111309Q25.493363123303425,21.069361698463297 25.693675827372886, 23.283101757276242L25.693675827372886,23.283101757276242Q25.893988531442346,25.496841816089187 25.693675827372886, 27.710581874902118L25.693675827372886,27.710581874902118Q25.493363123303425,29.92432193371505 24.898511411244385, 32.07079862104749L24.898511411244385,32.07079862104749Q24.303659699185346,34.217275308379925 23.332343247398768, 36.23126901625686L23.332343247398768,36.23126901625686Q22.36102679561219,38.245262724133795 21.042758562975365, 40.06557927287136L21.042758562975365,40.06557927287136Q19.72449033033854,41.885895821608926 18.099325230024306, 43.457225813998406L18.099325230024306,43.457225813998406Q16.47416012971007,45.028555806387885 14.591477980918313, 46.303155175741836L14.591477980918313,46.303155175741836Q12.708795832126555,47.577754545095786 10.625800979265392, 48.516895234554795L10.625800979265392,48.516895234554795Q8.54280612640423,49.456035924013804 6.322789314031155, 50.03118261895672L6.322789314031155,50.03118261895672Q4.10277250165808,50.606329313899636 3.8436434207754644, 50.628249177609945L3.8436434207754644,50.628249177609945"
    );
    shape.attr({ stroke: "#1B1B1B", "stroke-width": 1, fill: "none", dasharray: null, opacity: 1 });
    shape.data("name", "Circle");

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
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
NorClean = NorClean.extend({
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
