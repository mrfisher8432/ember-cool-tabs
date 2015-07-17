import Ember from 'ember';
import EzTabPanelList from './ez-tab-panel-list';

export default Ember.Component.extend({

  classNames: ['tab-content'],

  /**
   *  Index of this tab, set by tab panel list
   */
  index: null,

  tabPanelList: Ember.computed.readOnly('parentView'),
  selectedIndex: Ember.computed.readOnly('parentView.selectedIndex'),

  register: Ember.on('didInsertElement', function() {
    var tabPanelList = this.get('tabPanelList');
    if (!EzTabPanelList.detectInstance(tabPanelList)) {
      console.error('ez-tab-panel component expected to be inside of ez-tab-panel-list component but was not');
    }
    tabPanelList.addTabPanel(this);
    this.set('index', tabPanelList.getIndex(this));
    this._selectedIndexDidChange();
  }),

  _selectedIndexDidChange: Ember.observer('selectedIndex', function() {
    if (this.get('selectedIndex') === this.get('index')) {
      this.showTabPanel();
    }
    else {
      this.hideTabPanel();
    }
  }),

  showTabPanel: function() {
    this.$().show();
  },

  hideTabPanel: function() {
    this.$().hide();
  }

});
