import Ember from 'ember';

export default Ember.Component.extend({
  updateComm: false,
  actions: {
    showUpdateForm() {
      this.set('updateComm', true);
    },
    updateComment(comment) {
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        content: this.get('content')
      };
      this.set('updateComm', false);
      this.sendAction('updateComment', comment, params);
    },
    cancel() {
      this.set('updateComm', false);
      this.set('author', ''),
      this.set('date', ''),
      this.set('content', '')
    }
  }
});
