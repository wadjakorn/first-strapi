'use strict';

/**
 * short-link service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::short-link.short-link');
