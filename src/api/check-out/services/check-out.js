'use strict';

/**
 * check-out service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::check-out.check-out');
