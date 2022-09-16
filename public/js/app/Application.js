// declare the namespace for this example
var mainApp = {};

/**
 *
 * The **GraphicalEditor** is responsible for layout and dialog handling.
 *
 * @author Micah Nerren
 * @extends draw2d.ui.parts.GraphicalEditor
 */
mainApp.Application = Class.extend({
  NAME: "mainApp.Application",

  /**
   * @constructor
   *
   * @param {String} canvasId the id of the DOM element to use as paint container
   */
  init: function () {
    this.view = new mainApp.View("main-canvas");
    // this.toolbar = new mainApp.Toolbar("toolbar", this.view);
  },
});
