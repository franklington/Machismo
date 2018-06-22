import Route from '@ember/routing/route';

export default Route.extend({

  model(){

    return this.store.query('post', { orderBy: 'freigabe', equalTo: true }).then(model=>{

      return model.sortBy('timestamp').reverseObjects();
    });
    }
});
