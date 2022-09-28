// import { mainApp } from "/js/app/Application.mjs";

mainApp.Toolbar = Class.extend({
  init: function (elementId, app, view) {
    this.html = $("#" + elementId);
    this.view = view;
    this.app = app;

    // register this class as event listener for the canvas
    // CommandStack. This is required to update the state of
    // the Undo/Redo Buttons.
    //
    view.getCommandStack().addEventListener(this);

    // Inject the UNDO Button and the callbacks
    //
    // this.undoButton = $("<button>Undo</button>");
    this.undoButton = $("<li><a>Undo</a></li>");
    this.html.append(this.undoButton);
    this.undoButton.css("color", "#999");
    this.undoButton.focus(function () {
      $(this).removeClass("ui-state-focus");
    });
    this.undoButton.button().click(
      $.proxy(function () {
        console.log("UNDO CLICKED");
        this.view.getCommandStack().undo();
      }, this)
    );
    //   .button("option", "disabled", true);

    // Inject the REDO Button and the callback
    //
    // this.redoButton = $("<button>Redo</button>");
    this.redoButton = $("<li><a>Redo</a></li>");
    this.html.append(this.redoButton);
    this.redoButton.css("color", "#999");
    this.redoButton.button().click(
      $.proxy(function () {
        this.view.getCommandStack().redo();
      }, this)
    );
    //   .button("option", "disabled", true);

    this.delimiter = $("<span class='toolbar_delimiter'>&nbsp;</span>");
    this.html.append(this.delimiter);

    //     // Inject the Zoom In Button and the callbacks
    //     //
    //     this.zoomInButton = $("<button>Zoom In</button>");
    //     this.html.append(this.zoomInButton);
    //     this.zoomInButton.button().click(
    //       $.proxy(function () {
    //         this.view.setZoom(this.view.getZoom() * 0.7, true);
    //         this.app.layout();
    //       }, this)
    //     );
    //
    //     // Inject the 1:1 Zoom Button
    //     //
    //     this.resetButton = $("<button>1:1</button>");
    //     this.html.append(this.resetButton);
    //     this.resetButton.button().click(
    //       $.proxy(function () {
    //         this.view.setZoom(1.0, true);
    //         this.app.layout();
    //       }, this)
    //     );
    //
    //     // Inject the Zoom Out Button and the callback
    //     //
    //     this.zoomOutButton = $("<button>Zoom Out</button>");
    //     this.html.append(this.zoomOutButton);
    //     this.zoomOutButton.button().click(
    //       $.proxy(function () {
    //         this.view.setZoom(this.view.getZoom() * 1.3, true);
    //         this.app.layout();
    //       }, this)
    //     );
  },

  /**
   * @method
   * Sent when an event occurs on the command stack. draw2d.command.CommandStackEvent.getDetail()
   * can be used to identify the type of event which has occurred.
   *
   * @template
   *
   * @param {draw2d.command.CommandStackEvent} event
   **/
  stackChanged: function (event) {
    this.undoButton.focus(function () {
      $(this).removeClass("ui-state-focus");
    });
    this.redoButton.focus(function () {
      $(this).removeClass("ui-state-focus");
    });
    console.log("stackChanged!", event.getStack().canUndo(), event.getStack().canRedo(), this.undoButton);
    if (!event.getStack().canUndo()) {
      console.log("CANNOT UNDO");
      this.undoButton.prop("disabled", true).css("color", "#999");
      //   this.undoButton.button("option", "disabled", true);
    } else this.undoButton.prop("disabled", false).css("color", "");
    if (!event.getStack().canRedo()) {
      console.log("CANNOT REDO");
      this.redoButton.prop("disabled", true).css("color", "#999");
    } else this.redoButton.prop("disabled", false).css("color", "");

    // this.undoButton.button("option", "disabled", !event.getStack().canUndo());
    // this.redoButton.button("option", "disabled", !event.getStack().canRedo());
  },
});
