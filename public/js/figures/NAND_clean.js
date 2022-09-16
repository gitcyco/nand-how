// Generated Code for the Draw2D touch HTML5 lib
//
// http://www.draw2d.org
//
// Go to the Designer http://www.draw2d.org
// to design your own shape or download user generated
//
var NandClean = draw2d.SetFigure.extend({
  NAME: "NandClean",

  init: function (attr, setter, getter) {
    this._super($.extend({ stroke: 0, bgColor: null, width: 60, height: 39.999999999999886 }, attr), setter, getter);
    var port;
    // Port
    port = this.addPort(
      new DecoratedInputPort(),
      new draw2d.layout.locator.XYRelPortLocator(-8.333333333333334, 12.500000000000036)
    );
    port.setConnectionDirection();
    port.setBackgroundColor("#37B1DE");
    port.setName("Port");
    port.setMaxFanOut(20);
    // Port
    port = this.addPort(
      new DecoratedInputPort(),
      new draw2d.layout.locator.XYRelPortLocator(-8.333333333333334, 87.50000000000026)
    );
    port.setConnectionDirection();
    port.setBackgroundColor("#37B1DE");
    port.setName("Port");
    port.setMaxFanOut(20);
    // Port
    port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(108.33333333333334, 50.00000000000014));
    port.setConnectionDirection();
    port.setBackgroundColor("#37B1DE");
    port.setName("Port");
    port.setMaxFanOut(20);
    this.persistPorts = false;
  },

  createShapeElement: function () {
    var shape = this._super();
    this.originalWidth = 60;
    this.originalHeight = 39.999999999999886;
    return shape;
  },

  createSet: function () {
    this.canvas.paper.setStart();

    // BoundingBox
    shape = this.canvas.paper.path("M0,0 L60,0 L60,39.999999999999886 L0,39.999999999999886");
    shape.attr({ stroke: "none", "stroke-width": 0, fill: "none" });
    shape.data("name", "BoundingBox");

    // Rectangle
    shape = this.canvas.paper.path(
      "M33.51014656728012 0.017293963908855403L33.51014656728012 0L0 0L0 39.999999999999886L33.51014656728012 39.999999999999886L33.51014656728012 39.98270603609103L33.6757460981097 39.999999999999886L36.585234040489695 39.69615506024405L39.406318664012474 38.79385241571805L42.05328273993024 37.32050807568868L44.44569960422359 35.320888862379434L46.510876881093054 32.855752193730666L48.18606520401181 29.999999999999886L49.195333419554856 27.41644499401204L49.84812368179104 27.718245660927153L51.12179411015393 28.056609152624418L52.43537709273755 28.17055100503285L53.74896007532118 28.056609152624418L55.02263050368407 27.718245660927153L56.21768854636878 27.16574153341614L57.29782296947684 26.41588432842518L58.230214435136475 25.491458077681898L58.986532700476516 24.42055100503285L59.5437974177201 23.23570207997537L59.88507638042336 21.972912337534822L60 20.67055100503285L59.88507638042336 19.368189672530875L59.5437974177201 18.10539993009033L58.98653270047657 16.92055100503285L58.230214435136475 15.849643932383799L57.29782296947684 14.925217681640518L56.21768854636878 14.175360476649558L55.02263050368407 13.62285634913853L53.74896007532118 13.284492857441293L52.43537709273755 13.170551005032848L51.12179411015393 13.284492857441293L49.84812368179104 13.62285634913853L49.55479671745326 13.758468472331174L49.42036482347339 13.159597133486614L48.18606520401181 10L46.510876881093054 7.14424780626922L44.44569960422359 4.679111137620453L42.05328273993024 2.679491924311236L39.406318664012474 1.2061475842818652L36.585234040489695 0.3038449397558338L33.6757460981097 0L33.51014656728012 0.017293963908855403Z"
    );
    shape.attr({ stroke: "#303030", "stroke-width": 1, fill: "#FFFFFF", dasharray: null, opacity: 1 });
    shape.data("name", "Rectangle");

    // Label
    shape = this.canvas.paper.text(0, 0, "NAND");
    shape.attr({
      x: 11,
      y: 20.582365452020603,
      "text-anchor": "start",
      text: "NAND",
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

    var result = null;
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
    var memento = this._super();

    // add all decorations to the memento
    //
    memento.labels = [];
    this.children.each(function (i, e) {
      var labelJSON = e.figure.getPersistentAttributes();
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
        var figure = eval("new " + json.type + "()");

        // apply all attributes
        figure.attr(json);

        // instantiate the locator
        var locator = eval("new " + json.locator + "()");

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
NandClean = NandClean.extend({
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
