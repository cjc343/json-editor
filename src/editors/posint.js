JSONEditor.defaults.editors.posint = JSONEditor.defaults.editors.number.extend({
  sanitize: function(value) {
    value = (value + "").replace(/[^0-9\.\-]/g,'');
    if (value) {
//      if (Math.sign(value) === -1) {
//        return 0;
//      }
      return Math.floor(value);
    }
    return null;
  },
  getNumColumns: function() {
    return 2;
  }
});
