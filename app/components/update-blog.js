import Ember from 'ember';

export default Ember.Component.extend({
  updateBlog: false,
  actions: {
    showUpdateForm() {
      this.set('updateBlog', true);
    },
    update(blog) {
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        title: this.get('title'),
        content: this.get('content'),
      };
      this.set('updateBlog', false);
      this.sendAction('update', blog, params);
    },
    cancel() {
      this.set('updateBlog', false);
      this.set('author', '');
      this.set('date', '');
      this.set('title', '');
      this.set('content', '');
    },
    delete(blog) {
      if(confirm('You sure about it?')) {
        this.sendAction('delete', blog);
      }
    }
  }
});
