var jsdom = require('jsdom');

// jsdom.env(

//     'http://nodejs.org/dist',
//     ["http://code.jquery.com/jquery.js"],
//     function(errors, window){
//         console.log('there have been', window.$('a').length, 'nodejs releases!');
//     }
// );

var description = '<P>Real estate agents, developers, brokers and house hunters are invited to come see Austin\'s first small house. The small house on display can be ordered in a variety of floor plans that are completely customizable. These small houses are built with the finest materials, insulation and come completely wired starting with a basic floor plan.</P>\r\n<P><STRONG>Tiny houses</STRONG> are becoming popular for existing land owners needing accomodations without the lengthy city permitting process as well as to serve as a main residences for couples and small families keeping living expenses low. <SPAN STYLE="line-height: 1.6em;">Pocket neighborhoods are being developed around the country to accomodate micro houses, <STRONG>small houses</STRONG> and tiny houses.  You may contact <STRONG>Tumbleweed</STRONG> to schedule a build party to construct an under 200 square foot house or you can have the Buy A Small House team build your house for you in a temperature controlled factory in less than 7 weeks. </SPAN></P>\r\n<P>This is your chance to take a tour inside a <STRONG>small house</STRONG> that is so fast it is over just after it starts. This small house has tapered and textured walls and ceilings like a traditional house. The tour is self-guided walking through a bit of a living room placed by the full kitchen, down the short hall is a bathroom, in the back is a one bedroom fitting a queen sized bed then up some stairs to a single loft that sleeps 3. These cute house floor plans are for sale which are fully customizable. This house tour is a<STRONG> free experience</STRONG> that will teach you a bit about the tiny house movement coming to your <STRONG>Austin neighborhood</STRONG> later this year.</P>\r\n<P>You don\'t have to be in the market to live in one of these <STRONG>small houses</STRONG> to take the tour, many people offset their current mortgages by renting them out as <STRONG>accessory dwelling units</STRONG> on their land or in their backyard. Living in a small or<STRONG> tiny house</STRONG> is said to have many freedoms similar to being a kid again.</P>\r\n<P><SPAN STYLE="line-height: 1.6em;">People entering the possession scale down process call this action editing. When you edit your life, scaling down your possessions translates to a feeling of freedom that is a more rewarding life. You may choose to have a small house plan build for you by the <STRONG>Buy A Small House</STRONG> team or you may embark on a house building mission with a <STRONG>Tumbleweed floor plan</STRONG> that offers many do it yourself plans.</SPAN></P>\r\n<P>The Buy A Small House builds are made with Fiber Cement and other materials not available at your neighborhood Home Depot intended to last 30 years or the same duration as a traditional <STRONG>house</STRONG> build yet with <STRONG>wheels</STRONG> mounted onto a 10" steel frame for mobility. Buy A <STRONG>Small House</STRONG> offers transparancy no matter how you buy from us. The small house open house is available located in<STRONG> downtown Austin</STRONG> next to the Rainey Street bar district.</P>';

jsdom.env({
    html: description,
    scripts: [
        "http://code.jquery.com/jquery.js"
    ],
    done: function(errors, window) {
        console.log(window.$('img').length);
    }
});
