(function() {

  var utils = {
    isInput: function(element) {
      var tagName = element.tagName.toLowerCase();
      return element && tagName && (tagName === 'input' || tagName === 'textarea');
    },
    storeSelection: function(element, isInput) {
      var selectedText;

      if (isInput) {
        element.select();
        selectedText = element.value;
      } else {
        var range = document.createRange();
        var selection = window.getSelection();

        range.selectNode(element);
        //range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
        selectedText = selection.toString();
      }

      return selectedText;
    },
    clearSelection: function(element, isInput) {
      if (isInput) {
        element.blur();
      } else {
        // TODO:
        // Should use removeRange(range) when it is supported.
        // Remove the selections
        window.getSelection().removeAllRanges();
      }
    }
  };

  /**
   * clipboard
   * @param {Element} element
   * @param {String} cmd [copy|cut]
   * @param {Function} callback
   * @return {String} Returns the copied/selected text.
   */
  function clipboard(element, cmd, callback) {
    // The 'cut' and 'copy' commands returns true only from user-initiated or privileged code.
    // https://developer.mozilla.org/de/docs/Web/API/Document/queryCommandSupported
    var isSupported = document.queryCommandSupported(cmd);

    var isInput = utils.isInput(element);
    var hasCallback = (typeof callback === 'function');

    // Select the text.
    var selectedText = utils.storeSelection(element, isInput);

    // Now that we've selected some text, execute the command.
    try {
      var successful = document.execCommand(cmd);
      var err = successful ? null : 'Oops, unable to execCommand `' + cmd + '`';

      if (hasCallback) {
        callback(err, selectedText);
      }
    } catch (err) {
      if (hasCallback) {
        callback(err);
      }
    }

    // Clear selected text.
    utils.clearSelection(element, isInput);

    return selectedText;
  }

  window.clipboard = clipboard;

})();
