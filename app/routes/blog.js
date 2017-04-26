import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('blog', params.blog_id);
  },
  actions: {
    delete(model) {
      if(confirm('Are you sure?')) {
        model.destroyRecord();
        this.transitionTo('index');
      }
    },
    update(blog, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          blog.set(key, params[key]);
        }
      });
      blog.save();
      this.transitionTo('blog', blog.id);
    }
  }
});
