import Route from '@ember/routing/route';

export default Route.extend({
  model(){

    return this.store.findAll('post').then(model=>{

      return model.sortBy('timestamp').reverseObjects();
    });
  },
  actions: {
    unpublishPost(post){
      post.set('freigabe',false);
      post.save();
    },
    publishPost(post){
      post.set('freigabe',true);
      post.save();
    },
    deletePost(post){
      post.destroyRecord();
      
    }
  }
});
