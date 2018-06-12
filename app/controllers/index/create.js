import Controller from '@ember/controller';

export default Controller.extend({

  datum: "",
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
  actions: {
    postMessage(){
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
        beschreibung:this.get('beschreibung')
      });

      //error checking must be implemented

      post.save().then(()=>{
        this.transitionToRoute('index.success');

      }).catch(()=>{
        this.transitionToRoute('index.failed');
      });

    },
    selectTageszeit(tageszeit){
      this.set("zeit", tageszeit);
    },
    selectWo(wo){
      this.set("wo", wo);
    }


  }
});
