JSONEditor.defaults.editors.integer = JSONEditor.defaults.editors.number.extend({
  sanitize: function(value) {
    value = (value + "").replace(/[^0-9\.\-]/g,'');
    if (value) {
      return Math.floor(value);
    }
    return null;
  },
  getNumColumns: function() {
    return 2;
  }
});
