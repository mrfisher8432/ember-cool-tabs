import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'ul',
  classNames: ['tabs'],

  selectedIndex: Ember.computed.alias('parentView.selectedIndex'),

  _tabs: null,

  doInit: Ember.on('init', function() {
    this.set('_tabs', Ember.ArrayProxy.create({ 'content': Ember.A() }));
  }),

  addTab: function(tab) {
    this.get('_tabs').pushObject(tab);
  },

  getIndex: function(tab) {
    return this.get('_tabs').indexOf(tab);
  }

});
