import Ember from 'ember';
import EzTabList from './ez-tab-list';

export default Ember.Component.extend({

  tagName: 'li',
  classNames: ['tab'],
  classNameBindings: ['selected-tab'],
  'selected-tab': false,

  /**
   *  Index of this tab, set by tab list
   */
  index: null,

  tabList: Ember.computed.readOnly('parentView'),
  selectedIndex: Ember.computed.alias('parentView.selectedIndex'),

  register: Ember.on('didInsertElement', function() {
    var tabList = this.get('tabList');
    if (!EzTabList.detectInstance(tabList)) {
      console.error('ez-tab component expected to be inside of ez-tab-list component but was not');
    }
    tabList.addTab(this);
    this.set('index', tabList.getIndex(this));
    this._selectedIndexDidChange();
  }),

  _selectedIndexDidChange: Ember.observer('selectedIndex', function() {
    if (this.get('selectedIndex') === this.get('index')) {
      this.showTab();
    }
    else {
      this.hideTab();
    }
  }),

  showTab: function() {
    this.set('selected-tab', true);
  },

  hideTab: function() {
    this.set('selected-tab', false);
  },

  click: function() {
    this.set('selectedIndex', this.get('index'));
  }

});
