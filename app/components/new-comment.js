import Ember from 'ember';

export default Ember.Component.extend({
  addComment: false,
  actions: {
    showCommentForm() {
      this.set('addComment', true);
    },
    saveComment() {
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        content: this.get('content'),
        blog: this.get('blog')
      };
      this.set('addComment', false);
      this.set('author', '');
      this.set('date', '');
      this.set('content', '');
      this.sendAction('saveComment', params);
    },
    cancel() {
      this.set('addComment', false);
      this.set('author', '');
      this.set('date', '');
      this.set('content', '');
    }
  }
});
