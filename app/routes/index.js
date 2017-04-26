import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      blogs: this.store.findAll('blog')
    });
  },
  actions: {
    saveBlog(params) {
      var newBlog = this.store.createRecord('blog', params);
      newBlog.save();
      this.transitionTo('index');
    }
  }
});
