import Ember from 'ember';

export default Ember.Component.extend({

  selectedIndex: Ember.computed.readOnly('parentView.selectedIndex'),

  _tabPanels: null,

  doInit: function() {
    this.set('_tabPanels', Ember.ArrayProxy.create({ 'content': [] }));
  }.on('init'),

  addTabPanel: function(tabPanel) {
    this.get('_tabPanels').pushObject(tabPanel);
  },

  getIndex: function(tabPanel) {
    return this.get('_tabPanels').indexOf(tabPanel);
  }

});
