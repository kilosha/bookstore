sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'fiorielements/test/integration/FirstJourney',
		'fiorielements/test/integration/pages/BooksList',
		'fiorielements/test/integration/pages/BooksObjectPage',
		'fiorielements/test/integration/pages/Orders_itemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage, Orders_itemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('fiorielements') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage,
					onTheOrders_itemsObjectPage: Orders_itemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);