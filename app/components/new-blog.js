import Ember from 'ember';

export default Ember.Component.extend({
  addNewBlog: false,
  actions: {
    showBlogForm() {
      this.set('addNewBlog', true);
    },
    saveBlog() {
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        title: this.get('title'),
        content: this.get('content'),
      };
      this.set('addNewBlog', false);
      this.set('author', '');
      this.set('date', '');
      this.set('title', '');
      this.set('content', '');
      this.sendAction('saveBlog', params);
    },
    cancel() {
      this.set('addNewBlog', false);
      this.set('author', '');
      this.set('date', '');
      this.set('title', '');
      this.set('content', '');
    }
  }
});
