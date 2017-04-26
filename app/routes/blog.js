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
    }
  }
});
