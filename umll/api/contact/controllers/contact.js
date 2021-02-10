'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async email(ctx){
        console.log(ctx.request.body);  
        //console.log(ctx);
        await strapi.plugins['email'].services.email.send({
            to: ctx.request.body.endEmail,
            subject: ctx.request.body.name + " " + ctx.request.body.subject,
            text: ctx.request.body.message + "\n" + "Contact: " + ctx.request.body.email
        });
        return ctx.response; 
    }
};
