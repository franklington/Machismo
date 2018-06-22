import Controller from '@ember/controller';

export default Controller.extend({

  datum: new Date(),
  zeit:"",
  ort:"",
  wo:"Strasse",

  pfiff:false,
  hupen:false,
  schmatz:false,
  spuck:false,
  schimpf:false,
  starr:false,
  lach:false,
  beruht:false,

  beschreibung:"",
  freigabe:false,
  isEmpty: function(){
    let bes = this.get('beschreibung');

    if(bes.length > 30){
      return false;
    }
    return true;

  }.property('beschreibung'),

  showNotification:false,

  actions: {
    postMessage(){
      if(!this.get("isEmpty")){
        let store = this.get("store");
        let post = store.createRecord('post', {
          datum: this.get('datum'),
          zeit: this.get('zeit'),
          ort: this.get('ort'),
          wo: this.get('wo'),

          pfiff:this.get('pfiff'),
          hupen:this.get('hupen'),
          schmatz:this.get('schmatz'),
          spuck:this.get('spuck'),
          schimpf:this.get('schimpf'),
          starr:this.get('starr'),
          lach:this.get('lach'),
          beruht:this.get('beruht'),
          beschreibung:this.get('beschreibung'),
          timestamp: new Date().getTime()

        });

        //error checking must be implemented

        post.save().then(()=>{
          this.transitionToRoute('index.success');

        }).catch(()=>{
          this.transitionToRoute('index.failed');
        });

      }
      else {
        this.set('showNotification',true);
      }


    },
    selectTageszeit(tageszeit){
      this.set("zeit", tageszeit);
    },
    selectWo(wo){
      this.set("wo", wo);
    },




  }
});
