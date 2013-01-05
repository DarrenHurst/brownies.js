brownies.js
===========

Brownies is a LocalStorage HTML5 library, It will create a single localStorage item that you can fill with app settings,data,objects

#Usage
=======

    ##ADD ANY OBJECT to Brownies.

    object ={
    	appsetting1:'String',
    	appsetting2:int
    }

    brownie =  new Brownies('FantasticAppName');
    brownie.storage = [];
    brownie.load();
    brownie.addObject("appObject",object);

    load() loads the Brownie object.
    addObject() replaces object in app storage.