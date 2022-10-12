sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'fiorielements',
            componentId: 'Orders_itemsObjectPage',
            entitySet: 'Orders_items'
        },
        CustomPageDefinitions
    );
});