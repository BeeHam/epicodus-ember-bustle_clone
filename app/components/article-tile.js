import Ember from 'ember';

export default Ember.Component.extend({
  isArticleShowing: false,
  actions: {
    showArticle: function() {
      this.set('isArticleShowing', true);
    }
  }
});
